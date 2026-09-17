'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Play, RotateCcw, HelpCircle, Activity, Sparkles, Sliders, Eye, RefreshCw, Zap } from 'lucide-react';

// Complex number helpers
interface Complex {
  r: number; // real
  i: number; // imag
}

function complex(r: number, i: number = 0): Complex {
  return { r, i };
}

function add(a: Complex, b: Complex): Complex {
  return { r: a.r + b.r, i: a.i + b.i };
}

function sub(a: Complex, b: Complex): Complex {
  return { r: a.r - b.r, i: a.i - b.i };
}

function mul(a: Complex, b: Complex): Complex {
  return {
    r: a.r * b.r - a.i * b.i,
    i: a.r * b.i + a.i * b.r,
  };
}

function scale(a: Complex, s: number): Complex {
  return { r: a.r * s, i: a.i * s };
}

function magSq(a: Complex): number {
  return a.r * a.r + a.i * a.i;
}

function phase(a: Complex): number {
  let p = Math.atan2(a.i, a.r);
  if (p < 0) p += 2 * Math.PI;
  return p;
}

// Convert state amplitudes (alpha, beta) to spherical angles (theta, phi)
function stateToAngles(alpha: Complex, beta: Complex): { theta: number; phi: number } {
  const p0 = magSq(alpha);
  const p1 = magSq(beta);
  const total = p0 + p1;
  const norm0 = total > 0 ? Math.min(1, Math.max(0, p0 / total)) : 1;
  
  // theta = 2 * arccos(sqrt(P0))
  const theta = 2 * Math.acos(Math.sqrt(norm0));
  
  // Relative phase: phi = phase(beta) - phase(alpha)
  let phi = phase(beta) - phase(alpha);
  if (phi < 0) phi += 2 * Math.PI;
  if (phi >= 2 * Math.PI) phi -= 2 * Math.PI;

  return { theta, phi };
}

// Convert spherical angles to state amplitudes
function anglesToState(theta: number, phi: number): { alpha: Complex; beta: Complex } {
  const alpha = complex(Math.cos(theta / 2), 0);
  const beta = complex(
    Math.sin(theta / 2) * Math.cos(phi),
    Math.sin(theta / 2) * Math.sin(phi)
  );
  return { alpha, beta };
}

// Map phase [0, 2*pi) to Q-sphere color (standard IBM Q-Sphere color wheel)
function phaseToColor(rad: number): string {
  // Hue in degrees [0, 360)
  const deg = (rad * 180 / Math.PI) % 360;
  return `hsl(${deg.toFixed(1)}, 90%, 55%)`;
}

interface QSphereVisualizerProps {
  initialState?: '0' | '1' | '+' | '-' | '+i' | '-i';
  title?: string;
  subtitle?: string;
  compact?: boolean;
}

export default function QSphereVisualizer({
  initialState = '0',
  title = 'Interactive Q-Sphere & Qubit State Visualizer',
  subtitle = 'Explore 3D quantum state vectors, probability amplitudes, phase hues, and real-time gate operations',
  compact = false,
}: QSphereVisualizerProps) {
  // Qubit state represented by alpha (|0>) and beta (|1>)
  const [alpha, setAlpha] = useState<Complex>(complex(1, 0));
  const [beta, setBeta] = useState<Complex>(complex(0, 0));

  // 3D View rotation angles (in degrees)
  const [viewAzimuth, setViewAzimuth] = useState<number>(45);
  const [viewElevation, setViewElevation] = useState<number>(25);
  const [autoRotate, setAutoRotate] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const dragStartRef = useRef<{ x: number; y: number; az: number; el: number }>({ x: 0, y: 0, az: 45, el: 25 });

  // Measurement status and history
  const [lastMeasurement, setLastMeasurement] = useState<{ result: 0 | 1; timestamp: number } | null>(null);
  const [measuring, setMeasuring] = useState<boolean>(false);
  const [shotStats, setShotStats] = useState<{ count0: number; count1: number; total: number }>({ count0: 0, count1: 0, total: 0 });
  const [history, setHistory] = useState<string[]>(['Initial state: |0⟩']);

  // Compute angles
  const { theta, phi } = stateToAngles(alpha, beta);
  const prob0 = Math.max(0, Math.min(1, magSq(alpha)));
  const prob1 = Math.max(0, Math.min(1, magSq(beta)));

  // Setup initial state if requested
  useEffect(() => {
    applyPreset(initialState);
  }, [initialState]);

  // Auto-rotate effect
  useEffect(() => {
    if (!autoRotate) return;
    const interval = setInterval(() => {
      setViewAzimuth((prev) => (prev + 0.5) % 360);
    }, 30);
    return () => clearInterval(interval);
  }, [autoRotate]);

  // Preset loader
  const applyPreset = (preset: string) => {
    let a = complex(1, 0);
    let b = complex(0, 0);
    let label = '|0⟩ Ground State';

    const invSqrt2 = 1 / Math.SQRT2;

    switch (preset) {
      case '0':
        a = complex(1, 0);
        b = complex(0, 0);
        label = '|0⟩ (North Pole / Spin Down)';
        break;
      case '1':
        a = complex(0, 0);
        b = complex(1, 0);
        label = '|1⟩ (South Pole / Spin Up)';
        break;
      case '+':
        a = complex(invSqrt2, 0);
        b = complex(invSqrt2, 0);
        label = '|+⟩ (Equal Superposition, +X)';
        break;
      case '-':
        a = complex(invSqrt2, 0);
        b = complex(-invSqrt2, 0);
        label = '|-⟩ (Equal Superposition with π Phase, -X)';
        break;
      case '+i':
        a = complex(invSqrt2, 0);
        b = complex(0, invSqrt2);
        label = '|+i⟩ (Superposition with +π/2 Phase, +Y)';
        break;
      case '-i':
        a = complex(invSqrt2, 0);
        b = complex(0, -invSqrt2);
        label = '|-i⟩ (Superposition with -π/2 Phase, -Y)';
        break;
      default:
        break;
    }

    setAlpha(a);
    setBeta(b);
    setHistory((prev) => [`Reset to ${label}`, ...prev.slice(0, 7)]);
  };

  // Unitary Gate Operations
  const applyGate = (gateName: string) => {
    let newA = alpha;
    let newB = beta;
    let desc = '';
    const invSqrt2 = 1 / Math.SQRT2;

    switch (gateName) {
      case 'X': // Pauli-X (Bit-flip): alpha <-> beta
        newA = beta;
        newB = alpha;
        desc = 'Applied Pauli-X (Bit-Flip): |0⟩ ↔ |1⟩';
        break;

      case 'Y': // Pauli-Y: alpha -> -i*beta, beta -> i*alpha
        newA = complex(beta.i, -beta.r); // -i * beta
        newB = complex(-alpha.i, alpha.r); // i * alpha
        desc = 'Applied Pauli-Y: π rotation around Y axis';
        break;

      case 'Z': // Pauli-Z (Phase-flip): beta -> -beta
        newA = alpha;
        newB = scale(beta, -1);
        desc = 'Applied Pauli-Z (Phase-Flip): |1⟩ → -|1⟩ (Phase shifted by π)';
        break;

      case 'H': // Hadamard: 1/sqrt(2) * [[1, 1], [1, -1]]
        newA = scale(add(alpha, beta), invSqrt2);
        newB = scale(sub(alpha, beta), invSqrt2);
        desc = 'Applied Hadamard (H): Rotates between computational & diagonal basis';
        break;

      case 'S': // Phase gate: beta -> i * beta (pi/2 phase)
        newA = alpha;
        newB = complex(-beta.i, beta.r);
        desc = 'Applied S Gate (Phase π/2): Rotates +90° around Z axis';
        break;

      case 'Sdag': // S dagger: beta -> -i * beta (-pi/2 phase)
        newA = alpha;
        newB = complex(beta.i, -beta.r);
        desc = 'Applied S† Gate (Phase -π/2): Rotates -90° around Z axis';
        break;

      case 'T': // T gate: beta -> exp(i*pi/4) * beta
        {
          const cos45 = Math.cos(Math.PI / 4);
          const sin45 = Math.sin(Math.PI / 4);
          const tPhase = complex(cos45, sin45);
          newA = alpha;
          newB = mul(beta, tPhase);
          desc = 'Applied T Gate (Phase π/4): Rotates +45° around Z axis';
        }
        break;

      case 'Tdag': // T dagger: beta -> exp(-i*pi/4) * beta
        {
          const cos45 = Math.cos(-Math.PI / 4);
          const sin45 = Math.sin(-Math.PI / 4);
          const tPhase = complex(cos45, sin45);
          newA = alpha;
          newB = mul(beta, tPhase);
          desc = 'Applied T† Gate (Phase -π/4): Rotates -45° around Z axis';
        }
        break;

      case 'Rx': // Rx(pi/4)
        {
          const half = Math.PI / 8;
          const c = Math.cos(half);
          const s = Math.sin(half);
          // Rx = [[cos, -i*sin], [-i*sin, cos]]
          newA = add(scale(alpha, c), complex(beta.i * s, -beta.r * s));
          newB = add(complex(alpha.i * s, -alpha.r * s), scale(beta, c));
          desc = 'Applied Rx(+45°): Continuous rotation around X axis';
        }
        break;

      case 'Ry': // Ry(pi/4)
        {
          const half = Math.PI / 8;
          const c = Math.cos(half);
          const s = Math.sin(half);
          // Ry = [[cos, -sin], [sin, cos]]
          newA = sub(scale(alpha, c), scale(beta, s));
          newB = add(scale(alpha, s), scale(beta, c));
          desc = 'Applied Ry(+45°): Continuous rotation around Y axis';
        }
        break;

      case 'Rz': // Rz(pi/4)
        {
          const half = Math.PI / 8;
          const c = Math.cos(half);
          const s = Math.sin(half);
          newA = mul(alpha, complex(c, -s));
          newB = mul(beta, complex(c, s));
          desc = 'Applied Rz(+45°): Continuous phase precession around Z axis';
        }
        break;

      default:
        break;
    }

    setAlpha(newA);
    setBeta(newB);
    setHistory((prev) => [desc, ...prev.slice(0, 7)]);
  };

  // Perform projective measurement in computational basis
  const measureQubit = () => {
    setMeasuring(true);
    setTimeout(() => {
      const p0 = magSq(alpha);
      const rand = Math.random();
      const outcome: 0 | 1 = rand < p0 ? 0 : 1;

      if (outcome === 0) {
        setAlpha(complex(1, 0));
        setBeta(complex(0, 0));
      } else {
        setAlpha(complex(0, 0));
        setBeta(complex(1, 0));
      }

      setLastMeasurement({ result: outcome, timestamp: Date.now() });
      setShotStats((prev) => ({
        count0: prev.count0 + (outcome === 0 ? 1 : 0),
        count1: prev.count1 + (outcome === 1 ? 1 : 0),
        total: prev.total + 1,
      }));
      setHistory((prev) => [
        `Measurement Collapse: State projected into |${outcome}⟩ (p0 was ${(p0 * 100).toFixed(1)}%)`,
        ...prev.slice(0, 7),
      ]);
      setMeasuring(false);
    }, 280);
  };

  // Multi-shot statistical measurement (e.g. 100 shots)
  const run100Shots = () => {
    const p0 = magSq(alpha);
    let s0 = 0;
    let s1 = 0;
    for (let i = 0; i < 100; i++) {
      if (Math.random() < p0) s0++;
      else s1++;
    }
    setShotStats((prev) => ({
      count0: prev.count0 + s0,
      count1: prev.count1 + s1,
      total: prev.total + 100,
    }));
    setHistory((prev) => [
      `Executed 100 Simulated Shots: |0⟩=${s0}, |1⟩=${s1} (Theoretical P(0)=${(p0 * 100).toFixed(1)}%)`,
      ...prev.slice(0, 7),
    ]);
  };

  // Reset all statistics
  const resetStats = () => {
    setShotStats({ count0: 0, count1: 0, total: 0 });
    setLastMeasurement(null);
  };

  // Handle angle slider changes
  const handleThetaChange = (newThetaDeg: number) => {
    const newThetaRad = (newThetaDeg * Math.PI) / 180;
    const { alpha: a, beta: b } = anglesToState(newThetaRad, phi);
    setAlpha(a);
    setBeta(b);
  };

  const handlePhiChange = (newPhiDeg: number) => {
    const newPhiRad = (newPhiDeg * Math.PI) / 180;
    const { alpha: a, beta: b } = anglesToState(theta, newPhiRad);
    setAlpha(a);
    setBeta(b);
  };

  // 3D Mouse Drag Orbit
  const handleMouseDown = (e: React.MouseEvent<SVGSVGElement>) => {
    setIsDragging(true);
    dragStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      az: viewAzimuth,
      el: viewElevation,
    };
  };

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStartRef.current.x;
    const dy = e.clientY - dragStartRef.current.y;
    const newAz = (dragStartRef.current.az + dx * 0.7) % 360;
    const newEl = Math.max(-85, Math.min(85, dragStartRef.current.el - dy * 0.7));
    setViewAzimuth(newAz < 0 ? newAz + 360 : newAz);
    setViewElevation(newEl);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // 3D Projection Engine
  // Sphere Radius in SVG units
  const R = 120;
  const cx = 175;
  const cy = 175;

  const project3D = useCallback(
    (x: number, y: number, z: number): { px: number; py: number; depth: number } => {
      const azRad = (viewAzimuth * Math.PI) / 180;
      const elRad = (viewElevation * Math.PI) / 180;

      // Rotation around Z by Azimuth
      const x1 = x * Math.cos(azRad) - y * Math.sin(azRad);
      const y1 = x * Math.sin(azRad) + y * Math.cos(azRad);
      const z1 = z;

      // Rotation around X1 by Elevation
      const x2 = x1;
      const y2 = y1 * Math.cos(elRad) - z1 * Math.sin(elRad);
      const z2 = y1 * Math.sin(elRad) + z1 * Math.cos(elRad);

      return {
        px: cx + x2 * R,
        py: cy - z2 * R, // SVG Y is inverted
        depth: y2,
      };
    },
    [viewAzimuth, viewElevation, R, cx, cy]
  );

  // Current state coordinates on unit sphere
  const sx = Math.sin(theta) * Math.cos(phi);
  const sy = Math.sin(theta) * Math.sin(phi);
  const sz = Math.cos(theta);
  const stateProj = project3D(sx, sy, sz);

  // Projections for Poles and Basis Axes
  const northPole = project3D(0, 0, 1); // |0>
  const southPole = project3D(0, 0, -1); // |1>
  const xPos = project3D(1, 0, 0); // |+>
  const xNeg = project3D(-1, 0, 0); // |->
  const yPos = project3D(0, 1, 0); // |+i>
  const yNeg = project3D(0, -1, 0); // |-i>
  const center = { px: cx, py: cy };

  // Equator disc ellipse calculation
  const equatorMajor = R;
  const equatorMinor = R * Math.abs(Math.sin((viewElevation * Math.PI) / 180));

  // Node radii proportional to Born Rule amplitudes for Q-sphere visualization
  const nodeRadius0 = Math.max(4, Math.min(26, Math.sqrt(prob0) * 24));
  const nodeRadius1 = Math.max(4, Math.min(26, Math.sqrt(prob1) * 24));
  const color0 = phaseToColor(phase(alpha));
  const color1 = phaseToColor(phase(beta));

  return (
    <div className="w-full bg-slate-900 border border-slate-700 text-white rounded-2xl shadow-2xl p-6 my-8 font-sans transition-all">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-800 pb-5 mb-6 gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="p-2 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-lg shadow-lg shadow-cyan-500/20">
              <Sparkles className="w-5 h-5 text-white" />
            </span>
            <h2 className="text-2xl font-black tracking-tight text-white flex items-center gap-2">
              {title}
            </h2>
            <span className="text-xs bg-cyan-950/80 text-cyan-400 border border-cyan-700/50 px-2.5 py-1 rounded-full font-mono uppercase">
              IBM Q-Sphere Model
            </span>
          </div>
          <p className="text-sm text-slate-400 mt-1">{subtitle}</p>
        </div>

        {/* View Orbit & Controls */}
        <div className="flex items-center space-x-2 bg-slate-800/80 border border-slate-700 p-1.5 rounded-xl">
          <button
            onClick={() => setAutoRotate(!autoRotate)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center space-x-1.5 transition-all ${
              autoRotate
                ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/30'
                : 'text-slate-300 hover:bg-slate-700'
            }`}
            title="Toggle continuous 3D rotation"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${autoRotate ? 'animate-spin' : ''}`} />
            <span>{autoRotate ? 'Rotating' : 'Auto-Orbit'}</span>
          </button>
          <button
            onClick={() => {
              setViewAzimuth(45);
              setViewElevation(25);
            }}
            className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:bg-slate-700 transition-colors"
            title="Reset 3D camera to default isometric view"
          >
            Reset View
          </button>
        </div>
      </div>

      {/* Main Grid: Visualizer Canvas + Diagnostics & Controls */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Interactive 3D Q-Sphere Canvas (7 cols) */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center bg-slate-950/60 rounded-xl border border-slate-800 p-4 relative overflow-hidden">
          <div className="absolute top-3 left-4 text-xs font-mono text-slate-400 z-10 flex items-center space-x-3">
            <span className="flex items-center space-x-1 text-cyan-400">
              <Eye className="w-3.5 h-3.5" />
              <span>Azimuth: {viewAzimuth.toFixed(0)}°</span>
            </span>
            <span>Elevation: {viewElevation.toFixed(0)}°</span>
            <span className="text-slate-500 hidden sm:inline">(Click & drag sphere to orbit)</span>
          </div>

          {/* SVG 3D Q-Sphere */}
          <svg
            viewBox="0 0 350 350"
            className="w-full max-w-[370px] h-[340px] cursor-grab active:cursor-grabbing select-none"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <defs>
              {/* Radial gradient for sphere glass body */}
              <radialGradient id="sphereGlass" cx="35%" cy="30%" r="65%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.25" />
                <stop offset="60%" stopColor="#0f172a" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#0284c7" stopOpacity="0.4" />
              </radialGradient>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              <filter id="stateGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Background Sphere Atmosphere */}
            <circle cx={cx} cy={cy} r={R} fill="url(#sphereGlass)" stroke="#0284c7" strokeWidth="1.5" strokeOpacity="0.4" />

            {/* Equator Plane Disc */}
            <ellipse
              cx={cx}
              cy={cy}
              rx={equatorMajor}
              ry={equatorMinor}
              fill="rgba(14, 165, 233, 0.05)"
              stroke="#0369a1"
              strokeWidth="1"
              strokeDasharray="3 3"
              strokeOpacity="0.6"
            />

            {/* Coordinate Axes */}
            {/* Z-Axis (Vertical through Poles: |0> North, |1> South) */}
            <line
              x1={southPole.px}
              y1={southPole.py}
              x2={northPole.px}
              y2={northPole.py}
              stroke="#64748b"
              strokeWidth="1.2"
              strokeDasharray="2 2"
            />
            {/* X-Axis */}
            <line
              x1={xNeg.px}
              y1={xNeg.py}
              x2={xPos.px}
              y2={xPos.py}
              stroke="#ef4444"
              strokeWidth="1"
              strokeOpacity="0.6"
            />
            {/* Y-Axis */}
            <line
              x1={yNeg.px}
              y1={yNeg.py}
              x2={yPos.px}
              y2={yPos.py}
              stroke="#10b981"
              strokeWidth="1"
              strokeOpacity="0.6"
            />

            {/* Axis Labels */}
            <text x={northPole.px + 8} y={northPole.py - 10} fill="#38bdf8" fontSize="12" fontWeight="bold" fontFamily="monospace">
              +Z |0⟩
            </text>
            <text x={southPole.px + 8} y={southPole.py + 18} fill="#38bdf8" fontSize="12" fontWeight="bold" fontFamily="monospace">
              -Z |1⟩
            </text>
            <text x={xPos.px + 8} y={xPos.py + 4} fill="#f87171" fontSize="10" fontFamily="monospace">
              +X |+⟩
            </text>
            <text x={yPos.px + 8} y={yPos.py + 4} fill="#34d399" fontSize="10" fontFamily="monospace">
              +Y |+i⟩
            </text>

            {/* State Projection Line from Origin to State Vector */}
            <line
              x1={center.px}
              y1={center.py}
              x2={stateProj.px}
              y2={stateProj.py}
              stroke="#f59e0b"
              strokeWidth="2.5"
              strokeLinecap="round"
              filter="url(#glow)"
            />

            {/* State Vector Tip Marker */}
            <circle
              cx={stateProj.px}
              cy={stateProj.py}
              r={5}
              fill="#fbbf24"
              stroke="#ffffff"
              strokeWidth="1.5"
              filter="url(#stateGlow)"
            />

            {/* Q-Sphere Basis State Nodes: North Pole (|0>) and South Pole (|1>) */}
            {/* Node |0> */}
            <g>
              <circle
                cx={northPole.px}
                cy={northPole.py}
                r={nodeRadius0}
                fill={color0}
                fillOpacity={0.85}
                stroke="#ffffff"
                strokeWidth={prob0 > 0.05 ? 2 : 0.8}
                filter="url(#glow)"
                className="transition-all duration-300"
              />
              <text
                x={northPole.px}
                y={northPole.py + 4}
                textAnchor="middle"
                fill="#ffffff"
                fontSize={nodeRadius0 > 12 ? '11' : '9'}
                fontWeight="bold"
                fontFamily="monospace"
                pointerEvents="none"
              >
                0
              </text>
            </g>

            {/* Node |1> */}
            <g>
              <circle
                cx={southPole.px}
                cy={southPole.py}
                r={nodeRadius1}
                fill={color1}
                fillOpacity={0.85}
                stroke="#ffffff"
                strokeWidth={prob1 > 0.05 ? 2 : 0.8}
                filter="url(#glow)"
                className="transition-all duration-300"
              />
              <text
                x={southPole.px}
                y={southPole.py + 4}
                textAnchor="middle"
                fill="#ffffff"
                fontSize={nodeRadius1 > 12 ? '11' : '9'}
                fontWeight="bold"
                fontFamily="monospace"
                pointerEvents="none"
              >
                1
              </text>
            </g>

            {/* Vector Label |psi> */}
            <text
              x={stateProj.px + 10}
              y={stateProj.py - 6}
              fill="#fbbf24"
              fontSize="13"
              fontWeight="bold"
              fontFamily="monospace"
            >
              |ψ⟩
            </text>
          </svg>

          {/* Color Wheel & Visual Legend */}
          <div className="w-full flex items-center justify-between mt-2 pt-3 border-t border-slate-800/80 px-2 text-xs">
            <div className="flex items-center space-x-2">
              <span className="text-slate-400 font-mono">Q-Sphere Phase Color:</span>
              <div
                className="h-3 w-28 rounded-full border border-slate-600 shadow-inner"
                style={{
                  background: 'linear-gradient(to right, hsl(0,90%,55%), hsl(90,90%,55%), hsl(180,90%,55%), hsl(270,90%,55%), hsl(360,90%,55%))',
                }}
                title="Color wheel from 0 to 2*pi radians"
              />
            </div>
            <div className="flex items-center space-x-3 text-slate-400 font-mono">
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block" /> 0
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 inline-block" /> π/2
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 inline-block" /> π
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-400 inline-block" /> 3π/2
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Mathematical State Diagnostics & Dirac Readout (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          {/* Dirac State Expression Card */}
          <div className="bg-slate-800/90 border border-slate-700 rounded-xl p-4 shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xs uppercase font-mono tracking-wider text-cyan-400 font-semibold flex items-center gap-1.5">
                <Activity className="w-4 h-4" /> Quantum Statevector
              </h3>
              <span className="text-xs bg-slate-900 text-slate-300 font-mono px-2 py-0.5 rounded border border-slate-700">
                dim(H) = 2
              </span>
            </div>

            {/* Mathematical Ket Formula */}
            <div className="bg-slate-950 rounded-lg p-3 border border-slate-800 font-mono text-base text-cyan-200 overflow-x-auto my-2 text-center">
              |ψ⟩ = ({alpha.r.toFixed(3)} {alpha.i >= 0 ? '+' : '-'} {Math.abs(alpha.i).toFixed(3)}i)|0⟩
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+ ({beta.r.toFixed(3)} {beta.i >= 0 ? '+' : '-'} {Math.abs(beta.i).toFixed(3)}i)|1⟩
            </div>

            {/* Polar & Azimuthal Coordinates */}
            <div className="grid grid-cols-2 gap-2 mt-3 pt-2 border-t border-slate-700/60 font-mono text-xs">
              <div className="bg-slate-900/80 p-2 rounded border border-slate-700">
                <span className="text-slate-400 block">Polar Angle (θ):</span>
                <span className="text-white font-bold text-sm">
                  {((theta * 180) / Math.PI).toFixed(1)}°
                </span>{' '}
                <span className="text-slate-500">({(theta / Math.PI).toFixed(3)}π rad)</span>
              </div>
              <div className="bg-slate-900/80 p-2 rounded border border-slate-700">
                <span className="text-slate-400 block">Phase Angle (ϕ):</span>
                <span className="text-white font-bold text-sm" style={{ color: phaseToColor(phi) }}>
                  {((phi * 180) / Math.PI).toFixed(1)}°
                </span>{' '}
                <span className="text-slate-500">({(phi / Math.PI).toFixed(3)}π rad)</span>
              </div>
            </div>
          </div>

          {/* Measurement Probabilities (Born Rule) */}
          <div className="bg-slate-800/90 border border-slate-700 rounded-xl p-4 shadow-lg">
            <h3 className="text-xs uppercase font-mono tracking-wider text-slate-300 font-semibold mb-3 flex items-center justify-between">
              <span>Born Rule Probabilities: P(x) = |⟨x|ψ⟩|²</span>
              <span className="text-emerald-400 text-xs">Σ P = 1.00</span>
            </h3>

            {/* Probability for |0> */}
            <div className="mb-3">
              <div className="flex justify-between text-xs font-mono mb-1">
                <span className="text-cyan-300 font-bold">P(|0⟩) = |α|²</span>
                <span className="text-white font-bold">{(prob0 * 100).toFixed(1)}%</span>
              </div>
              <div className="w-full bg-slate-900 h-3 rounded-full overflow-hidden border border-slate-700">
                <div
                  className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-300"
                  style={{ width: `${prob0 * 100}%` }}
                />
              </div>
            </div>

            {/* Probability for |1> */}
            <div>
              <div className="flex justify-between text-xs font-mono mb-1">
                <span className="text-purple-300 font-bold">P(|1⟩) = |β|²</span>
                <span className="text-white font-bold">{(prob1 * 100).toFixed(1)}%</span>
              </div>
              <div className="w-full bg-slate-900 h-3 rounded-full overflow-hidden border border-slate-700">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-300"
                  style={{ width: `${prob1 * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* Measurement & Sampling Panel */}
          <div className="bg-slate-800/90 border border-slate-700 rounded-xl p-4 shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono uppercase text-slate-300 font-semibold flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-amber-400" /> Quantum Measurement
              </span>
              {shotStats.total > 0 && (
                <button
                  onClick={resetStats}
                  className="text-[11px] text-slate-400 hover:text-slate-200 underline font-mono"
                >
                  Clear Stats
                </button>
              )}
            </div>

            <div className="flex items-center gap-2 mb-3">
              <button
                onClick={measureQubit}
                disabled={measuring}
                className={`flex-1 py-2 px-3 rounded-lg font-bold text-xs flex items-center justify-center gap-1.5 shadow-md transition-all ${
                  measuring
                    ? 'bg-amber-600 text-white animate-pulse'
                    : 'bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white shadow-amber-600/30'
                }`}
              >
                <Play className="w-3.5 h-3.5" />
                <span>{measuring ? 'Collapsing...' : 'Measure Qubit (Collapse)'}</span>
              </button>
              <button
                onClick={run100Shots}
                className="py-2 px-3 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-lg text-xs font-mono font-medium border border-slate-600 transition-colors"
                title="Execute 100 simulated measurement shots"
              >
                +100 Shots
              </button>
            </div>

            {/* Measurement Tally */}
            {shotStats.total > 0 && (
              <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-xs font-mono flex items-center justify-around">
                <div className="text-center">
                  <span className="text-slate-400 block">|0⟩ Counts</span>
                  <span className="text-cyan-400 font-bold">
                    {shotStats.count0} ({(shotStats.count0 / shotStats.total * 100).toFixed(1)}%)
                  </span>
                </div>
                <div className="h-6 w-px bg-slate-800" />
                <div className="text-center">
                  <span className="text-slate-400 block">|1⟩ Counts</span>
                  <span className="text-purple-400 font-bold">
                    {shotStats.count1} ({(shotStats.count1 / shotStats.total * 100).toFixed(1)}%)
                  </span>
                </div>
                <div className="h-6 w-px bg-slate-800" />
                <div className="text-center">
                  <span className="text-slate-400 block">Total Shots</span>
                  <span className="text-emerald-400 font-bold">{shotStats.total}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Interactive Quantum Gates & Controls Toolbar */}
      <div className="mt-6 pt-6 border-t border-slate-800">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
          <h3 className="text-sm font-bold uppercase tracking-wider font-mono text-cyan-400 flex items-center gap-2">
            <Sliders className="w-4 h-4" /> Apply Single-Qubit Unitary Gates
          </h3>
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-mono text-slate-400 mr-2">Presets:</span>
            {['0', '1', '+', '-', '+i', '-i'].map((p) => (
              <button
                key={p}
                onClick={() => applyPreset(p)}
                className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-slate-700 text-xs font-mono font-medium transition-colors"
              >
                |{p}⟩
              </button>
            ))}
          </div>
        </div>

        {/* Gate Keypad Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-2.5">
          {/* Hadamard */}
          <button
            onClick={() => applyGate('H')}
            className="p-3 bg-gradient-to-b from-blue-600/90 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-xl border border-blue-500/50 shadow-md font-mono flex flex-col items-center justify-center transition-all hover:scale-105"
          >
            <span className="text-lg font-black text-white">H</span>
            <span className="text-[10px] text-blue-200 mt-0.5">Hadamard</span>
          </button>

          {/* Pauli-X */}
          <button
            onClick={() => applyGate('X')}
            className="p-3 bg-gradient-to-b from-emerald-600/90 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 rounded-xl border border-emerald-500/50 shadow-md font-mono flex flex-col items-center justify-center transition-all hover:scale-105"
          >
            <span className="text-lg font-black text-white">X</span>
            <span className="text-[10px] text-emerald-200 mt-0.5">Bit-Flip</span>
          </button>

          {/* Pauli-Y */}
          <button
            onClick={() => applyGate('Y')}
            className="p-3 bg-gradient-to-b from-teal-600/90 to-teal-700 hover:from-teal-500 hover:to-teal-600 rounded-xl border border-teal-500/50 shadow-md font-mono flex flex-col items-center justify-center transition-all hover:scale-105"
          >
            <span className="text-lg font-black text-white">Y</span>
            <span className="text-[10px] text-teal-200 mt-0.5">Pauli-Y</span>
          </button>

          {/* Pauli-Z */}
          <button
            onClick={() => applyGate('Z')}
            className="p-3 bg-gradient-to-b from-purple-600/90 to-purple-700 hover:from-purple-500 hover:to-purple-600 rounded-xl border border-purple-500/50 shadow-md font-mono flex flex-col items-center justify-center transition-all hover:scale-105"
          >
            <span className="text-lg font-black text-white">Z</span>
            <span className="text-[10px] text-purple-200 mt-0.5">Phase-Flip (π)</span>
          </button>

          {/* S Gate */}
          <button
            onClick={() => applyGate('S')}
            className="p-3 bg-slate-800 hover:bg-slate-700 rounded-xl border border-slate-700 shadow-md font-mono flex flex-col items-center justify-center transition-all hover:scale-105"
          >
            <span className="text-lg font-black text-indigo-300">S</span>
            <span className="text-[10px] text-slate-400 mt-0.5">+π/2 Phase</span>
          </button>

          {/* Sdag */}
          <button
            onClick={() => applyGate('Sdag')}
            className="p-3 bg-slate-800 hover:bg-slate-700 rounded-xl border border-slate-700 shadow-md font-mono flex flex-col items-center justify-center transition-all hover:scale-105"
          >
            <span className="text-lg font-black text-indigo-300">S†</span>
            <span className="text-[10px] text-slate-400 mt-0.5">-π/2 Phase</span>
          </button>

          {/* T Gate */}
          <button
            onClick={() => applyGate('T')}
            className="p-3 bg-slate-800 hover:bg-slate-700 rounded-xl border border-slate-700 shadow-md font-mono flex flex-col items-center justify-center transition-all hover:scale-105"
          >
            <span className="text-lg font-black text-violet-300">T</span>
            <span className="text-[10px] text-slate-400 mt-0.5">+π/4 Gate</span>
          </button>

          {/* Tdag */}
          <button
            onClick={() => applyGate('Tdag')}
            className="p-3 bg-slate-800 hover:bg-slate-700 rounded-xl border border-slate-700 shadow-md font-mono flex flex-col items-center justify-center transition-all hover:scale-105"
          >
            <span className="text-lg font-black text-violet-300">T†</span>
            <span className="text-[10px] text-slate-400 mt-0.5">-π/4 Gate</span>
          </button>
        </div>

        {/* Continuous Rotation Sliders (Theta and Phi) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 bg-slate-950/70 p-4 rounded-xl border border-slate-800">
          <div>
            <div className="flex justify-between text-xs font-mono mb-1.5">
              <span className="text-slate-300">Continuous Polar Angle θ (0° = |0⟩, 180° = |1⟩):</span>
              <span className="text-cyan-400 font-bold">{((theta * 180) / Math.PI).toFixed(1)}°</span>
            </div>
            <input
              type="range"
              min="0"
              max="180"
              step="1"
              value={(theta * 180) / Math.PI}
              onChange={(e) => handleThetaChange(parseFloat(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs font-mono mb-1.5">
              <span className="text-slate-300">Continuous Phase Angle ϕ (0° to 360°):</span>
              <span className="font-bold" style={{ color: phaseToColor(phi) }}>
                {((phi * 180) / Math.PI).toFixed(1)}°
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="360"
              step="1"
              value={(phi * 180) / Math.PI}
              onChange={(e) => handlePhiChange(parseFloat(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-400"
            />
          </div>
        </div>

        {/* Operation History Audit Log */}
        <div className="mt-4 bg-slate-950/90 border border-slate-800 rounded-xl p-3 font-mono text-xs">
          <span className="text-slate-400 font-semibold block mb-1.5 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400" /> Recent Operations Log:
          </span>
          <div className="space-y-1 text-slate-300 max-h-24 overflow-y-auto pr-2">
            {history.map((entry, idx) => (
              <div key={idx} className="flex items-center space-x-2">
                <span className="text-slate-600 select-none">#{history.length - idx}</span>
                <span className={idx === 0 ? 'text-cyan-300 font-medium' : 'text-slate-400'}>
                  {entry}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
