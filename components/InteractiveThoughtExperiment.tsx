'use client';

import React, { useState, useEffect } from 'react';
import { Play, RotateCcw, Sparkles, AlertCircle, CheckCircle2, Zap, Flame, Compass, Volume2, VolumeX, Eye } from 'lucide-react';

interface InteractiveThoughtExperimentProps {
  topicId?: string;
  thoughtExperimentText?: string;
}

export default function InteractiveThoughtExperiment({
  topicId,
  thoughtExperimentText,
}: InteractiveThoughtExperimentProps) {
  const id = topicId || 'why-learn-quantum';

  return (
    <div className="rounded-xl overflow-hidden border-2 border-amber-300 bg-amber-50/60 shadow-md">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-amber-600 to-amber-700 px-5 py-3 text-white flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-xl">🧪</span>
          <h4 className="font-extrabold text-base tracking-wide text-amber-50">
            Interactive Mental Sandbox
          </h4>
        </div>
        <span className="text-xs bg-amber-500/40 text-amber-100 px-2.5 py-0.5 rounded-full font-mono border border-amber-400/30">
          Try It Yourself
        </span>
      </div>

      {/* Main Interactive Sandbox Body */}
      <div className="p-5 sm:p-6 bg-white">
        <SandboxRouter id={id} />

        {/* Text Context Accordion / Quote */}
        {thoughtExperimentText && (
          <div className="mt-5 pt-4 border-t border-amber-200/80 bg-amber-50/50 rounded-lg p-3.5 text-xs sm:text-sm text-amber-950 italic leading-relaxed">
            <span className="font-bold not-italic text-amber-900 block mb-1">
              📖 The Thought Experiment Prompt:
            </span>
            &ldquo;{thoughtExperimentText}&rdquo;
          </div>
        )}
      </div>
    </div>
  );
}

// Router to the specific interactive sandbox
function SandboxRouter({ id }: { id: string }) {
  switch (id) {
    case 'why-learn-quantum':
      return <MazeSandbox />;
    case 'history-of-qc':
      return <CaffeineScalingSandbox />;
    case 'classical-vs-quantum':
      return <LibrarianSearchSandbox />;
    case 'what-is-qc':
      return <WaveSynthSandbox />;
    case 'quantum-mechanics-basics':
      return <StaircaseHarmonicsSandbox />;
    case 'classical-bit':
      return <LandauerEraserSandbox />;
    case 'qubit':
      return <DualBeamBlenderSandbox />;
    case 'quantum-state':
      return <BlochFlightSandbox />;
    case 'superposition':
      return <CoinSpinSandbox />;
    case 'measurement':
      return <PolarizerBubbleSandbox />;
    case 'probability-amplitude':
      return <TwoPebblesInterferenceSandbox />;
    case 'entanglement':
      return <CosmicEntangledDiceSandbox />;
    case 'quantum-interference':
      return <NoiseCancelingSandbox />;
    case 'qc-applications':
      return <MolecularKeySandbox />;
    case 'qc-limitations':
      return <ChampagneCryostatSandbox />;
    default:
      return <MazeSandbox />;
  }
}

// ==========================================
// 1. WHY LEARN QUANTUM: Maze Runner
// ==========================================
function MazeSandbox() {
  const [mode, setMode] = useState<'idle' | 'classical' | 'quantum'>('idle');
  const [classicalSteps, setClassicalSteps] = useState(0);
  const [isDone, setIsDone] = useState(false);

  const runClassical = () => {
    setMode('classical');
    setIsDone(false);
    setClassicalSteps(0);
    let step = 0;
    const interval = setInterval(() => {
      step += 18;
      if (step >= 486) {
        setClassicalSteps(486);
        setIsDone(true);
        clearInterval(interval);
      } else {
        setClassicalSteps(step);
      }
    }, 40);
  };

  const runQuantum = () => {
    setMode('quantum');
    setIsDone(true);
  };

  const reset = () => {
    setMode('idle');
    setClassicalSteps(0);
    setIsDone(false);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <h5 className="font-bold text-gray-900 text-sm">Hedge Maze Corridor Challenge</h5>
          <p className="text-xs text-gray-600">Escape a maze with 1,000 corridors and only 1 exit.</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={runClassical}
            disabled={mode === 'classical' && !isDone}
            className="px-3 py-1.5 rounded-lg text-xs font-bold bg-rose-600 hover:bg-rose-700 text-white shadow-sm transition-all disabled:opacity-50"
          >
            🤖 Run Classical Robot
          </button>
          <button
            onClick={runQuantum}
            className="px-3 py-1.5 rounded-lg text-xs font-bold bg-cyan-600 hover:bg-cyan-700 text-white shadow-sm transition-all"
          >
            🌊 Unleash Quantum Wave
          </button>
          <button
            onClick={reset}
            className="p-1.5 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors"
            title="Reset"
          >
            <RotateCcw size={16} />
          </button>
        </div>
      </div>

      <div className="p-4 rounded-xl bg-slate-950 text-white relative overflow-hidden min-h-[140px] flex flex-col justify-center">
        {mode === 'idle' && (
          <div className="text-center py-6">
            <p className="text-sm text-slate-300 font-medium">
              Click &quot;Run Classical Robot&quot; or &quot;Unleash Quantum Wave&quot; to test escape dynamics!
            </p>
          </div>
        )}

        {mode === 'classical' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-300">
              <span className="font-mono text-rose-400">🤖 Classical Robot: Exploring 1-by-1 sequentially...</span>
              <span className="font-mono font-bold">{classicalSteps} / 1,000 corridors tested</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden">
              <div
                className="bg-rose-500 h-full transition-all duration-75"
                style={{ width: `${(classicalSteps / 1000) * 100}%` }}
              />
            </div>
            {isDone ? (
              <div className="p-2.5 rounded-lg bg-rose-950/60 border border-rose-500/40 text-xs text-rose-200">
                ⚠️ Finished in <strong>486 serial attempts</strong> (took ~486 seconds). Hit 241 dead-end walls and had to backtrack every time!
              </div>
            ) : (
              <p className="text-xs text-amber-300 animate-pulse font-mono">
                💥 BUMP! Hit dead-end brick wall... Backtracking to junction...
              </p>
            )}
          </div>
        )}

        {mode === 'quantum' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs text-cyan-300 font-mono">
              <span>🌊 Quantum Tidal Wave: Flooding all corridors simultaneously...</span>
              <span className="font-bold text-emerald-400">1,000 / 1,000 in parallel!</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden relative">
              <div className="bg-gradient-to-r from-cyan-400 to-emerald-400 w-full h-full animate-pulse" />
            </div>
            <div className="p-2.5 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-xs text-emerald-200 flex items-center justify-between">
              <span>
                ✅ <strong>EXIT DISCOVERED INSTANTLY (1 ms)!</strong> All 1,000 paths explored simultaneously in superposition; dead ends cancelled by destructive interference!
              </span>
              <span className="text-emerald-400 text-lg">⚡</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ==========================================
// 2. HISTORY OF QC: Caffeine Molecule Scaling
// ==========================================
function CaffeineScalingSandbox() {
  const [qubits, setQubits] = useState(24);

  const getDim = (n: number) => {
    if (n >= 50) return '1.125 × 10¹⁵ (1.125 Quadrillion)';
    if (n >= 40) return '1.099 × 10¹² (1.1 Trillion)';
    if (n >= 30) return '1,073,741,824 (1.07 Billion)';
    return Math.pow(2, n).toLocaleString();
  };

  const getMilestone = (n: number) => {
    if (n <= 10) return 'Small classical chip: easily fits in your smartphone memory (~16 KB).';
    if (n <= 20) return 'Laptop RAM: ~16 Megabytes needed.';
    if (n <= 24) return '☕ Caffeine Molecule (24 atoms): Exceeds all grains of sand on Earth (~7.5 × 10¹⁸ bits)!';
    if (n <= 35) return 'Supercomputer milestone: Needs ~64 Gigabytes of fast RAM.';
    if (n <= 45) return 'World’s fastest classical supercomputers begin running out of memory (~16 Terabytes).';
    return 'Beyond all physical hard drives on Earth! At 300 qubits (2³⁰⁰), exceeds all atoms in the universe (10⁸⁰).';
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <h5 className="font-bold text-gray-900 text-sm">Feynman&apos;s Molecule State Space Calculator</h5>
          <p className="text-xs text-gray-600">Simulate why a 1-cup caffeine molecule breaks classical computers.</p>
        </div>
        <span className="text-xs font-mono font-bold px-2.5 py-1 bg-amber-100 text-amber-900 rounded-lg">
          N = {qubits} Qubits / Atoms
        </span>
      </div>

      <div>
        <label className="text-xs text-gray-700 font-semibold flex items-center justify-between mb-1">
          <span>Number of Simulated Atoms: {qubits}</span>
          <span className="text-cyan-700 font-mono">2^{qubits} states</span>
        </label>
        <input
          type="range"
          min="1"
          max="50"
          value={qubits}
          onChange={(e) => setQubits(parseInt(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
        />
      </div>

      <div className="p-4 rounded-xl bg-slate-950 text-white space-y-2.5">
        <div className="flex items-center justify-between text-xs">
          <span className="text-slate-400">Quantum Hilbert Dimension ($2^N$):</span>
          <span className="text-cyan-400 font-mono font-bold text-sm">{getDim(qubits)}</span>
        </div>
        <div className="p-2.5 rounded-lg bg-amber-950/40 border border-amber-500/30 text-xs text-amber-200">
          💡 <strong>Milestone:</strong> {getMilestone(qubits)}
        </div>
        <p className="text-[11px] text-slate-400">
          Yet a warm cup of coffee calculates all 24 caffeine atom wavefunctions effortlessly in femtoseconds because nature runs quantum mechanics natively!
        </p>
      </div>
    </div>
  );
}

// ==========================================
// 3. CLASSICAL VS QUANTUM: Librarian vs Ghost
// ==========================================
function LibrarianSearchSandbox() {
  const [librarySize, setLibrarySize] = useState(1000000);
  const [searched, setSearched] = useState(false);

  const classicalChecks = Math.floor(librarySize / 2);
  const quantumChecks = Math.floor(Math.sqrt(librarySize));

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <h5 className="font-bold text-gray-900 text-sm">The 1-Million-Page Unsorted Search</h5>
          <p className="text-xs text-gray-600">Find 1 specific phone number in an unsorted directory.</p>
        </div>
        <button
          onClick={() => setSearched(!searched)}
          className="px-3 py-1.5 rounded-lg text-xs font-bold bg-amber-600 hover:bg-amber-700 text-white shadow-sm transition-all"
        >
          {searched ? '🔄 Reset Search' : '⚡ Run Search Test'}
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200">
          <span className="text-xs font-bold text-rose-800 uppercase tracking-wider block mb-1">
            🚶 Classical Librarian (O(N))
          </span>
          <p className="text-2xl font-mono font-bold text-rose-600">
            {searched ? `${classicalChecks.toLocaleString()} checks` : 'O(N/2)'}
          </p>
          <p className="text-[11px] text-rose-900/80 mt-1">
            Checks page 1, page 2, page 3... Takes hours to search 500,000 pages on average.
          </p>
        </div>

        <div className="p-3.5 rounded-xl bg-cyan-50 border border-cyan-200">
          <span className="text-xs font-bold text-cyan-800 uppercase tracking-wider block mb-1">
            👻 Quantum Ghost (Grover: O(√N))
          </span>
          <p className="text-2xl font-mono font-bold text-cyan-600">
            {searched ? `${quantumChecks.toLocaleString()} checks` : 'O(√N)'}
          </p>
          <p className="text-[11px] text-cyan-900/80 mt-1">
            Reads all pages in superposition. Destructive wave interference cancels wrong names in just 1,000 steps! (500x faster).
          </p>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 4. WHAT IS QC: Wave Harmonics Synthesizer
// ==========================================
function WaveSynthSandbox() {
  const [phase, setPhase] = useState(0); // 0 to 180 degrees
  const isCanceled = phase === 180;

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <h5 className="font-bold text-gray-900 text-sm">Quantum Pipe Organ Harmonic Synthesizer</h5>
          <p className="text-xs text-gray-600">Adjust phase to see wave constructive harmony or destructive cancellation.</p>
        </div>
        <span className="text-xs font-mono font-bold px-2 py-1 bg-purple-100 text-purple-900 rounded-lg">
          Phase Offset: {phase}°
        </span>
      </div>

      <div>
        <label className="text-xs text-gray-700 font-semibold block mb-1">
          Tune Wave Phase Interference Dial:
        </label>
        <input
          type="range"
          min="0"
          max="180"
          step="15"
          value={phase}
          onChange={(e) => setPhase(parseInt(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
        />
      </div>

      <div className="p-4 rounded-xl bg-slate-950 text-white flex flex-col items-center justify-center min-h-[120px]">
        {isCanceled ? (
          <div className="text-center space-y-1">
            <div className="text-3xl text-rose-400">🔇 🔕</div>
            <p className="text-xs font-mono font-bold text-rose-400">
              DESTRUCTIVE INTERFERENCE: ZERO SOUND (0% PROBABILITY)!
            </p>
            <p className="text-[11px] text-slate-400">
              Waves at 180° out of phase cancel to silence (+1 - 1 = 0). This is how quantum gates eliminate wrong answers!
            </p>
          </div>
        ) : (
          <div className="text-center space-y-1">
            <div className="text-3xl text-emerald-400">🎶 🎹 🌊</div>
            <p className="text-xs font-mono font-bold text-emerald-400">
              HARMONIC RESONANCE ({Math.round(((180 - phase) / 180) * 100)}% Amplitude)
            </p>
            <p className="text-[11px] text-slate-400">
              In-phase components constructively amplify into the crystal clear right answer!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// ==========================================
// 5. QUANTUM MECHANICS: Staircase & String Harmonics
// ==========================================
function StaircaseHarmonicsSandbox() {
  const [step, setStep] = useState<number | 'forbidden'>(1);

  return (
    <div className="space-y-4">
      <div>
        <h5 className="font-bold text-gray-900 text-sm">The Quantized Staircase Experiment</h5>
        <p className="text-xs text-gray-600">Try placing the electron on discrete vs forbidden levels.</p>
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setStep(1)}
          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
            step === 1 ? 'bg-emerald-600 text-white shadow' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Step n = 1 (Ground State)
        </button>
        <button
          onClick={() => setStep(2)}
          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
            step === 2 ? 'bg-emerald-600 text-white shadow' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Step n = 2 (1st Excited)
        </button>
        <button
          onClick={() => setStep(3)}
          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
            step === 3 ? 'bg-emerald-600 text-white shadow' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Step n = 3 (2nd Excited)
        </button>
        <button
          onClick={() => setStep('forbidden')}
          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
            step === 'forbidden' ? 'bg-rose-600 text-white shadow' : 'bg-rose-100 text-rose-800 hover:bg-rose-200'
          }`}
        >
          Try Step n = 1.7 (Forbidden!)
        </button>
      </div>

      <div className="p-4 rounded-xl bg-slate-950 text-white">
        {step === 'forbidden' ? (
          <div className="p-3 rounded-lg bg-rose-950/60 border border-rose-500/40 text-xs text-rose-200">
            ❌ <strong>PHYSICALLY IMPOSSIBLE!</strong> In the quantum realm, fractional energy states do not exist. Just like a guitar string cannot vibrate at 1.7 standing wave modes, an electron cannot exist between integer steps. Quantization is discrete!
          </div>
        ) : (
          <div className="p-3 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-xs text-emerald-200">
            ✅ <strong>VALID QUANTUM EIGENSTATE:</strong> Electron rests securely on stable energy level n = {step}. Discrete quantization prevents electron decay and provides noise-resistant binary logic!
          </div>
        )}
      </div>
    </div>
  );
}

// ==========================================
// 6. CLASSICAL BIT: Landauer Eraser & Heat
// ==========================================
function LandauerEraserSandbox() {
  const [bitVal, setBitVal] = useState<0 | 1>(1);
  const [heatCount, setHeatCount] = useState(0);
  const [gateType, setGateType] = useState<'none' | 'classical' | 'quantum'>('none');

  const eraseBit = () => {
    setBitVal(0);
    setGateType('classical');
    setHeatCount((prev) => prev + 1);
  };

  const quantumRotate = () => {
    setBitVal((prev) => (prev === 0 ? 1 : 0));
    setGateType('quantum');
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <h5 className="font-bold text-gray-900 text-sm">Landauer Eraser &amp; Thermodynamic Limit</h5>
          <p className="text-xs text-gray-600">Compare classical data erasure vs quantum reversible rotation.</p>
        </div>
        <span className="text-xs font-mono font-bold px-2 py-1 bg-amber-100 text-amber-900 rounded-lg">
          Current Bit: [{bitVal}]
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          onClick={eraseBit}
          className="px-3 py-1.5 rounded-lg text-xs font-bold bg-rose-600 hover:bg-rose-700 text-white shadow-sm flex items-center gap-1.5"
        >
          <Flame size={14} /> Erase Bit to 0 (Classical AND/RESET)
        </button>
        <button
          onClick={quantumRotate}
          className="px-3 py-1.5 rounded-lg text-xs font-bold bg-cyan-600 hover:bg-cyan-700 text-white shadow-sm flex items-center gap-1.5"
        >
          <RotateCcw size={14} /> Reversible Quantum Gate (Pauli-X)
        </button>
      </div>

      <div className="p-4 rounded-xl bg-slate-950 text-white space-y-2">
        {gateType === 'classical' && (
          <div className="p-3 rounded-lg bg-rose-950/60 border border-rose-500/40 text-xs text-rose-200">
            🔥 <strong>HEAT EXPELLED!</strong> By Landauer&apos;s Principle, erasing 1 bit mandatory dumps <em>k_B T ln(2) ≈ 2.85 × 10⁻²¹ Joules</em> of thermal heat into the room. Erased bits: <strong>{heatCount}</strong>.
          </div>
        )}
        {gateType === 'quantum' && (
          <div className="p-3 rounded-lg bg-cyan-950/60 border border-cyan-500/40 text-xs text-cyan-200">
            ❄️ <strong>ZERO HEAT DISSIPATED:</strong> Unitary transformation is 100% reversible. Zero information was destroyed, so zero entropy was dumped into the environment!
          </div>
        )}
        {gateType === 'none' && (
          <p className="text-xs text-slate-400 text-center py-2">
            Click &quot;Erase Bit&quot; or &quot;Reversible Quantum Gate&quot; to test Landauer&apos;s heat principle.
          </p>
        )}
      </div>
    </div>
  );
}

// ==========================================
// 7. QUBIT: Dual-Beam Color Blender & Coin Spin
// ==========================================
function DualBeamBlenderSandbox() {
  const [bluePercent, setBluePercent] = useState(50);
  const [measuredState, setMeasuredState] = useState<'none' | '0' | '1'>('none');

  const measure = () => {
    const rand = Math.random() * 100;
    if (rand < bluePercent) {
      setMeasuredState('0');
    } else {
      setMeasuredState('1');
    }
  };

  const reset = () => {
    setMeasuredState('none');
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <h5 className="font-bold text-gray-900 text-sm">Dual-Beam Flashlight &amp; Detector Snapping</h5>
          <p className="text-xs text-gray-600">Blend Blue (|0⟩) and Red (|1⟩) into Purple, then measure!</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={measure}
            className="px-3 py-1.5 rounded-lg text-xs font-bold bg-amber-600 hover:bg-amber-700 text-white shadow-sm flex items-center gap-1.5"
          >
            <Eye size={14} /> Measure With Detector!
          </button>
          <button onClick={reset} className="p-1.5 text-gray-500 hover:bg-gray-100 rounded-lg">
            <RotateCcw size={16} />
          </button>
        </div>
      </div>

      <div>
        <label className="text-xs text-gray-700 font-semibold flex items-center justify-between mb-1">
          <span>Blue |0⟩ Amplitude: {bluePercent}%</span>
          <span>Red |1⟩ Amplitude: {100 - bluePercent}%</span>
        </label>
        <input
          type="range"
          min="0"
          max="100"
          value={bluePercent}
          disabled={measuredState !== 'none'}
          onChange={(e) => setBluePercent(parseInt(e.target.value))}
          className="w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      <div className="p-4 rounded-xl bg-slate-950 text-white flex flex-col items-center justify-center min-h-[110px]">
        {measuredState === 'none' ? (
          <div className="text-center space-y-1">
            <div className="w-12 h-12 rounded-full mx-auto shadow-lg animate-pulse"
              style={{
                backgroundColor: `rgb(${Math.round(((100 - bluePercent) / 100) * 255)}, 0, ${Math.round((bluePercent / 100) * 255)})`,
                boxShadow: `0 0 20px rgb(${Math.round(((100 - bluePercent) / 100) * 255)}, 0, ${Math.round((bluePercent / 100) * 255)})`,
              }}
            />
            <p className="text-xs font-mono font-bold text-purple-300 mt-2">
              SUPERPOSITION: Pure Blended Purple Beam (|ψ⟩)
            </p>
            <p className="text-[11px] text-slate-400">
              The detector hasn&apos;t looked yet. It is genuinely both colors simultaneously!
            </p>
          </div>
        ) : measuredState === '0' ? (
          <div className="text-center space-y-1">
            <div className="w-12 h-12 rounded-full mx-auto bg-blue-500 shadow-[0_0_25px_#3b82f6]" />
            <p className="text-xs font-mono font-bold text-blue-400 mt-2">
              💥 COLLAPSED TO 100% BLUE (|0⟩)!
            </p>
            <p className="text-[11px] text-slate-400">
              The detector cannot see purple. Measurement forced the wavefunction to collapse into ground state |0⟩!
            </p>
          </div>
        ) : (
          <div className="text-center space-y-1">
            <div className="w-12 h-12 rounded-full mx-auto bg-red-500 shadow-[0_0_25px_#ef4444]" />
            <p className="text-xs font-mono font-bold text-red-400 mt-2">
              💥 COLLAPSED TO 100% RED (|1⟩)!
            </p>
            <p className="text-[11px] text-slate-400">
              Measurement forced the wavefunction to collapse into excited state |1⟩!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// ==========================================
// 8. QUANTUM STATE: Bloch Globe Airplane
// ==========================================
function BlochFlightSandbox() {
  const [thetaDeg, setThetaDeg] = useState(90); // 0 to 180 (Latitude)
  const [phiDeg, setPhiDeg] = useState(0); // 0 to 360 (Longitude)

  const prob0 = Math.round(Math.pow(Math.cos(((thetaDeg * Math.PI) / 180) / 2), 2) * 100);
  const prob1 = 100 - prob0;

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <h5 className="font-bold text-gray-900 text-sm">Bloch Sphere Airplane Flight Navigator</h5>
          <p className="text-xs text-gray-600">Fly the quantum airplane around Latitude (θ) and Longitude (ϕ).</p>
        </div>
        <span className="text-xs font-mono font-bold px-2 py-1 bg-cyan-100 text-cyan-900 rounded-lg">
          P(0) = {prob0}% | P(1) = {prob1}%
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="text-xs text-gray-700 font-semibold block mb-1">
            Latitude θ (Polar Angle): {thetaDeg}°
          </label>
          <input
            type="range"
            min="0"
            max="180"
            value={thetaDeg}
            onChange={(e) => setThetaDeg(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />
          <span className="text-[10px] text-gray-500">0° = North (|0⟩) | 90° = Equator (|+⟩) | 180° = South (|1⟩)</span>
        </div>
        <div>
          <label className="text-xs text-gray-700 font-semibold block mb-1">
            Longitude ϕ (Phase Angle): {phiDeg}°
          </label>
          <input
            type="range"
            min="0"
            max="360"
            value={phiDeg}
            onChange={(e) => setPhiDeg(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-cyan-600"
          />
          <span className="text-[10px] text-gray-500">Notice: Rotating Longitude never changes P(0) or P(1)!</span>
        </div>
      </div>

      <div className="p-4 rounded-xl bg-slate-950 text-white text-xs space-y-1 font-mono">
        <p className="text-cyan-300">
          ✈️ Plane Location: Latitude θ = {thetaDeg}°, Longitude ϕ = {phiDeg}°
        </p>
        <p className="text-slate-300">
          State Vector: |ψ⟩ = cos({thetaDeg / 2}°)|0⟩ + e^(i·{phiDeg}°)sin({thetaDeg / 2}°)|1⟩
        </p>
        <p className="text-amber-300/90 text-[11px] font-sans">
          💡 Quantum Secret: Algorithms spin longitude phase ϕ around the globe to perform magic interference without changing raw probabilities until final readout!
        </p>
      </div>
    </div>
  );
}

// ==========================================
// 9. SUPERPOSITION: Coin Spinner & Chord
// ==========================================
function CoinSpinSandbox() {
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState<'heads' | 'tails' | null>(null);

  const spin = () => {
    setSpinning(true);
    setResult(null);
  };

  const measure = () => {
    setSpinning(false);
    setResult(Math.random() > 0.5 ? 'heads' : 'tails');
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <h5 className="font-bold text-gray-900 text-sm">Spinning Coin &amp; Musical Chord Sandbox</h5>
          <p className="text-xs text-gray-600">Spin the coin into superposition, then slap down to measure.</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={spin}
            disabled={spinning}
            className="px-3 py-1.5 rounded-lg text-xs font-bold bg-amber-600 hover:bg-amber-700 text-white shadow-sm disabled:opacity-50"
          >
            🌪️ Snap &amp; Spin Coin!
          </button>
          <button
            onClick={measure}
            disabled={!spinning}
            className="px-3 py-1.5 rounded-lg text-xs font-bold bg-rose-600 hover:bg-rose-700 text-white shadow-sm disabled:opacity-50"
          >
            ✋ Slam Hand Down (Measure)
          </button>
        </div>
      </div>

      <div className="p-4 rounded-xl bg-slate-950 text-white flex flex-col items-center justify-center min-h-[120px]">
        {spinning ? (
          <div className="text-center space-y-1">
            <div className="text-4xl animate-spin my-1">🪙</div>
            <p className="text-xs font-mono font-bold text-cyan-400">
              IN COHERENT SUPERPOSITION: |+⟩ = (|0⟩ + |1⟩)/√2
            </p>
            <p className="text-[11px] text-slate-400">
              Is it Heads? No. Is it Tails? No. It is in the dynamic spinning blur of both!
            </p>
          </div>
        ) : result ? (
          <div className="text-center space-y-1">
            <div className="text-4xl my-1">{result === 'heads' ? '👑 HEADS (|0⟩)' : '🦅 TAILS (|1⟩)'}</div>
            <p className="text-xs font-mono font-bold text-emerald-400">
              WAVE COLLAPSED: Definite Classical Outcome!
            </p>
            <p className="text-[11px] text-slate-400">
              Slamming your hand down forced the coin to collapse into one single state.
            </p>
          </div>
        ) : (
          <p className="text-xs text-slate-400 text-center">
            Click &quot;Snap &amp; Spin Coin&quot; to launch the quantum superposition!
          </p>
        )}
      </div>
    </div>
  );
}

// ==========================================
// 10. MEASUREMENT: Sunglasses & Bubble Pop
// ==========================================
function PolarizerBubbleSandbox() {
  const [angle, setAngle] = useState(45);
  const [popped, setPopped] = useState(false);

  const transmission = Math.round(Math.pow(Math.cos((angle * Math.PI) / 180), 2) * 100);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <h5 className="font-bold text-gray-900 text-sm">Polarized Sunglasses (The Born Rule)</h5>
          <p className="text-xs text-gray-600">Rotate filter angle θ to see Malus&apos; Law transmission odds P = cos²(θ).</p>
        </div>
        <button
          onClick={() => setPopped(!popped)}
          className="px-3 py-1.5 rounded-lg text-xs font-bold bg-purple-600 hover:bg-purple-700 text-white shadow-sm"
        >
          {popped ? '✨ Blow New Bubble' : '👉 Touch Soap Bubble (Pop!)'}
        </button>
      </div>

      <div>
        <label className="text-xs text-gray-700 font-semibold flex items-center justify-between mb-1">
          <span>Filter Angle θ: {angle}°</span>
          <span className="font-mono text-purple-700">Born Probability: cos²({angle}°) = {transmission}%</span>
        </label>
        <input
          type="range"
          min="0"
          max="90"
          value={angle}
          onChange={(e) => setAngle(parseInt(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
        />
      </div>

      <div className="p-4 rounded-xl bg-slate-950 text-white">
        {popped ? (
          <div className="text-center p-2 text-xs text-rose-300">
            💧 <strong>*POP!*</strong> The entire iridescent shimmering rainbow disappeared instantly, leaving behind a single water droplet. In quantum physics, measurement is an irreversible projection!
          </div>
        ) : (
          <div className="text-center p-2 text-xs text-purple-300">
            🕶️ <strong>PROJECTIVE MEASUREMENT:</strong> Incoming 360° light rays hitting the filter are forced to collapse onto the vertical axis with exact probability <strong>{transmission}%</strong>!
          </div>
        )}
      </div>
    </div>
  );
}

// ==========================================
// 11. PROBABILITY AMPLITUDE: Two Dropped Pebbles
// ==========================================
function TwoPebblesInterferenceSandbox() {
  const [phaseDiff, setPhaseDiff] = useState(0); // 0 to 180

  // Total amplitude: A = 1 + cos(phi)
  const isDestructive = phaseDiff >= 170;

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <h5 className="font-bold text-gray-900 text-sm">Two Dropped Pebbles Ripple Collision</h5>
          <p className="text-xs text-gray-600">See two real possibilities cancel into absolute 0% flat water.</p>
        </div>
        <span className="text-xs font-mono font-bold px-2 py-1 bg-cyan-100 text-cyan-900 rounded-lg">
          Phase Difference: {phaseDiff}°
        </span>
      </div>

      <div>
        <label className="text-xs text-gray-700 font-semibold block mb-1">
          Relative Phase Between Pebbles:
        </label>
        <input
          type="range"
          min="0"
          max="180"
          step="15"
          value={phaseDiff}
          onChange={(e) => setPhaseDiff(parseInt(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-cyan-600"
        />
      </div>

      <div className="p-4 rounded-xl bg-slate-950 text-white flex flex-col items-center justify-center min-h-[110px]">
        {isDestructive ? (
          <div className="text-center space-y-1">
            <div className="text-3xl text-blue-400">🪞 0.0</div>
            <p className="text-xs font-mono font-bold text-blue-400">
              DESTRUCTIVE CANCELLATION: COMPLETELY FLAT WATER!
            </p>
            <p className="text-[11px] text-slate-400">
              Crest (+1) meets Trough (-1). Two genuine physical paths cancel each other out to zero: |1 - 1|² = 0.
            </p>
          </div>
        ) : (
          <div className="text-center space-y-1">
            <div className="text-3xl text-emerald-400">🌊 🏔️ 2.0</div>
            <p className="text-xs font-mono font-bold text-emerald-400">
              CONSTRUCTIVE INTERFERENCE: DOUBLE HEIGHT CREST!
            </p>
            <p className="text-[11px] text-slate-400">
              Crest (+1) meets Crest (+1). Amplitude doubles to 2, so measurement probability quadruples (|2|² = 400%)!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// ==========================================
// 12. ENTANGLEMENT: Cosmic Mars-Earth Dice
// ==========================================
function CosmicEntangledDiceSandbox() {
  const [roll, setRoll] = useState<number | null>(null);
  const [trials, setTrials] = useState(0);

  const rollDice = () => {
    const val = Math.floor(Math.random() * 6) + 1;
    setRoll(val);
    setTrials((prev) => prev + 1);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <h5 className="font-bold text-gray-900 text-sm">Interplanetary Entangled Dice</h5>
          <p className="text-xs text-gray-600">Alice on Mars rolls her die; Bob on Earth reads his instantaneously.</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={rollDice}
            className="px-3 py-1.5 rounded-lg text-xs font-bold bg-fuchsia-600 hover:bg-fuchsia-700 text-white shadow-sm flex items-center gap-1.5"
          >
            🎲 Roll Cosmic Dice!
          </button>
          <span className="text-xs text-gray-500 font-mono">Trials: {trials}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="p-3.5 rounded-xl bg-slate-900 border border-fuchsia-500/40 text-center text-white">
          <span className="text-xs text-rose-300 font-bold block mb-1">🚀 Alice on Mars</span>
          <div className="text-3xl my-1 font-mono font-bold text-rose-400">
            {roll ? `🎲 ${roll}` : '❓'}
          </div>
          <p className="text-[10px] text-slate-400">100% random outcome (1 to 6)</p>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-900 border border-fuchsia-500/40 text-center text-white">
          <span className="text-xs text-cyan-300 font-bold block mb-1">🌍 Bob on Earth</span>
          <div className="text-3xl my-1 font-mono font-bold text-cyan-400">
            {roll ? `🎲 ${roll}` : '❓'}
          </div>
          <p className="text-[10px] text-slate-400">Instant matching correlation (0 ms delay!)</p>
        </div>
      </div>

      {roll && (
        <div className="p-2.5 rounded-lg bg-fuchsia-950/40 border border-fuchsia-500/30 text-xs text-fuchsia-200 text-center">
          ✨ <strong>100% CORRELATED:</strong> No radio signal could cross space that fast. The two dice do not communicate; they share a single non-separable joint Bell wavefunction |Φ+⟩!
        </div>
      )}
    </div>
  );
}

// ==========================================
// 13. QUANTUM INTERFERENCE: Noise Canceling
// ==========================================
function NoiseCancelingSandbox() {
  const [phase, setPhase] = useState(0);

  const isCanceled = phase === 180;

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <h5 className="font-bold text-gray-900 text-sm">Active Noise-Canceling Computational Engine</h5>
          <p className="text-xs text-gray-600">Tune anti-noise phase to cancel out airplane engine roar.</p>
        </div>
        <span className="text-xs font-mono font-bold px-2 py-1 bg-teal-100 text-teal-900 rounded-lg">
          Anti-Phase: {phase}°
        </span>
      </div>

      <div>
        <label className="text-xs text-gray-700 font-semibold block mb-1">
          Adjust Grover Inverted Anti-Wave Phase:
        </label>
        <input
          type="range"
          min="0"
          max="180"
          step="15"
          value={phase}
          onChange={(e) => setPhase(parseInt(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
        />
      </div>

      <div className="p-4 rounded-xl bg-slate-950 text-white flex flex-col items-center justify-center min-h-[110px]">
        {isCanceled ? (
          <div className="text-center space-y-1">
            <div className="text-3xl text-emerald-400">🤫 💡 0 dB</div>
            <p className="text-xs font-mono font-bold text-emerald-400">
              PERFECT NOISE CANCELLATION (PURE SILENCE)!
            </p>
            <p className="text-[11px] text-slate-400">
              Trillions of incorrect paths cancel out completely. Only the correct answer rings out loud and clear!
            </p>
          </div>
        ) : (
          <div className="text-center space-y-1">
            <div className="text-3xl text-rose-400">✈️ 📢 {120 - Math.round((phase / 180) * 120)} dB</div>
            <p className="text-xs font-mono font-bold text-rose-400">
              LOUD BACKGROUND NOISE DETECTED
            </p>
            <p className="text-[11px] text-slate-400">
              Tune phase to 180° to achieve destructive wave nullification!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// ==========================================
// 14. QC APPLICATIONS: Molecular Key Sandbox
// ==========================================
function MolecularKeySandbox() {
  const [mode, setMode] = useState<'idle' | 'classical' | 'quantum'>('idle');

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <h5 className="font-bold text-gray-900 text-sm">Molecular Master Keymaker (Nitrogenase Catalyst)</h5>
          <p className="text-xs text-gray-600">Simulate room-temperature bacterial fertilizer vs industrial Haber-Bosch.</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setMode('classical')}
            className="px-3 py-1.5 rounded-lg text-xs font-bold bg-amber-600 hover:bg-amber-700 text-white shadow-sm"
          >
            🏭 Classical Trial &amp; Error
          </button>
          <button
            onClick={() => setMode('quantum')}
            className="px-3 py-1.5 rounded-lg text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm"
          >
            ⚛️ Quantum Hamiltonian Sim
          </button>
        </div>
      </div>

      <div className="p-4 rounded-xl bg-slate-950 text-white">
        {mode === 'classical' && (
          <div className="p-3 rounded-lg bg-amber-950/60 border border-amber-500/40 text-xs text-amber-200">
            🏭 <strong>CLASSICAL BOTTLENECK:</strong> Testing 10,000,000 chemical candidate molecules in wet labs takes 14 years and $2.6 Billion with a 90% failure rate because classical CPUs cannot simulate electron bonding orbitals.
          </div>
        )}
        {mode === 'quantum' && (
          <div className="p-3 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-xs text-emerald-200">
            🔑 <strong>PERFECT QUANTUM KEY SYNTHESIZED:</strong> Solved electronic Hamiltonian active site in seconds! Enables room-temperature fertilizer, room-temperature superconductors, and targeted cancer therapies.
          </div>
        )}
        {mode === 'idle' && (
          <p className="text-xs text-slate-400 text-center py-2">
            Click &quot;Classical Trial &amp; Error&quot; or &quot;Quantum Hamiltonian Sim&quot; to test discovery speed!
          </p>
        )}
      </div>
    </div>
  );
}

// ==========================================
// 15. QC LIMITATIONS: Champagne Cryostat & No-Cloning
// ==========================================
function ChampagneCryostatSandbox() {
  const [tempMilliK, setTempMilliK] = useState(15);
  const [clonedAttempt, setClonedAttempt] = useState(false);

  const isCoherent = tempMilliK <= 30;

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <h5 className="font-bold text-gray-900 text-sm">1,000-Glass Champagne Tower Cryostat</h5>
          <p className="text-xs text-gray-600">Test thermal decoherence temperature and try Ctrl+C cloning.</p>
        </div>
        <button
          onClick={() => setClonedAttempt(true)}
          className="px-3 py-1.5 rounded-lg text-xs font-bold bg-rose-600 hover:bg-rose-700 text-white shadow-sm"
        >
          📋 Try Ctrl+C (Clone Qubit)
        </button>
      </div>

      <div>
        <label className="text-xs text-gray-700 font-semibold flex items-center justify-between mb-1">
          <span>Cryostat Temperature: {tempMilliK} mK (-273.14°C)</span>
          <span className={isCoherent ? 'text-cyan-700 font-bold' : 'text-rose-600 font-bold'}>
            {isCoherent ? 'Coherent Superposition' : '💥 DECOHERENCE (SHATTERED)'}
          </span>
        </label>
        <input
          type="range"
          min="15"
          max="300"
          value={tempMilliK}
          onChange={(e) => setTempMilliK(parseInt(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
        />
        <span className="text-[10px] text-gray-500">15 mK (Colder than outer space) to 300 mK (Thermal vibrations strike!)</span>
      </div>

      <div className="p-4 rounded-xl bg-slate-950 text-white space-y-2">
        {clonedAttempt && (
          <div className="p-2.5 rounded-lg bg-rose-950/70 border border-rose-500/50 text-xs text-rose-200">
            🚫 <strong>NO-CLONING THEOREM VIOLATION:</strong> Physics mathematically forbids copying an unknown quantum state! You cannot Ctrl+C qubits for simple error checking; we must use 1,000 physical qubits in surface codes instead.
          </div>
        )}
        {isCoherent ? (
          <div className="p-2.5 rounded-lg bg-cyan-950/60 border border-cyan-500/40 text-xs text-cyan-200">
            🥂 <strong>CHAMPAGNE TOWER BALANCED:</strong> At 15 mK, thermal noise is frozen out. Quantum state coherence T2 is preserved!
          </div>
        ) : (
          <div className="p-2.5 rounded-lg bg-rose-950/60 border border-rose-500/40 text-xs text-rose-200">
            💥 <strong>CRASH! TOWER SHATTERED:</strong> Thermal vibrations rattled the platform. Phase coherence leaked into the environment, collapsing into classical noise.
          </div>
        )}
      </div>
    </div>
  );
}
