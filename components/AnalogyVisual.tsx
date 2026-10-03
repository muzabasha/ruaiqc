'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Eye, Layers, Sparkles, Zap, Maximize2, X } from 'lucide-react';

interface AnalogyVisualProps {
  topicId?: string;
  analogyTitle: string;
  analogyImage?: string;
}

export default function AnalogyVisual({ topicId, analogyTitle, analogyImage }: AnalogyVisualProps) {
  const [viewMode, setViewMode] = useState<'art' | 'diagram'>(analogyImage ? 'art' : 'diagram');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fallback if no topicId
  const id = topicId || 'why-learn-quantum';

  return (
    <div className="mb-6 rounded-2xl overflow-hidden border-2 border-amber-300/80 bg-white shadow-lg">
      {/* Top Header Bar */}
      <div className="bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 px-4 py-3 text-white flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center font-bold">
            <Eye size={18} />
          </div>
          <div>
            <span className="text-xs uppercase tracking-wider font-extrabold text-amber-200 block">
              Visual Concept Storyboard
            </span>
            <h4 className="text-sm sm:text-base font-bold text-white leading-tight">
              {analogyTitle}
            </h4>
          </div>
        </div>

        {/* View Switcher if Image exists */}
        <div className="flex items-center gap-1.5 bg-black/20 p-1 rounded-xl text-xs font-semibold">
          {analogyImage && (
            <button
              onClick={() => setViewMode('art')}
              className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 ${
                viewMode === 'art'
                  ? 'bg-white text-amber-900 shadow-sm font-bold'
                  : 'text-amber-100 hover:text-white'
              }`}
            >
              <Sparkles size={14} /> AI Concept Art
            </button>
          )}
          <button
            onClick={() => setViewMode('diagram')}
            className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 ${
              viewMode === 'diagram' || !analogyImage
                ? 'bg-white text-amber-900 shadow-sm font-bold'
                : 'text-amber-100 hover:text-white'
            }`}
          >
            <Layers size={14} /> Concept Diagram
          </button>
        </div>
      </div>

      {/* Main Visual Display */}
      <div className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white p-4 sm:p-6 overflow-hidden">
        {viewMode === 'art' && analogyImage ? (
          <div className="relative group">
            <div className="relative w-full aspect-video max-h-[460px] rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-slate-900">
              <Image
                src={analogyImage}
                alt={analogyTitle}
                fill
                priority
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <button
                onClick={() => setIsModalOpen(true)}
                className="absolute top-3 right-3 p-2 rounded-xl bg-black/60 hover:bg-black/80 text-white backdrop-blur-md transition-all shadow-md"
                title="Expand full screen"
              >
                <Maximize2 size={18} />
              </button>
              <div className="absolute bottom-3 left-4 right-4 pointer-events-none">
                <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/90 text-slate-950 mb-1">
                  High-Fidelity Analogy Visualization
                </span>
                <p className="text-xs sm:text-sm text-slate-200 line-clamp-2 drop-shadow-md">
                  Visual contrast capturing the paradigm shift without needing to read the full text.
                </p>
              </div>
            </div>
          </div>
        ) : (
          /* Bespoke Infographic Diagram for the Topic */
          <TopicDiagram id={id} />
        )}

        {/* Quick Legend / Takeaway Footer */}
        <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-rose-400 font-semibold">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block animate-pulse"></span>
              Classical: Serial / Constrained
            </span>
            <span className="flex items-center gap-1.5 text-cyan-400 font-semibold">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 inline-block animate-pulse"></span>
              Quantum: Coherent Wave Parallelism
            </span>
          </div>
          <span className="text-amber-300/90 font-medium flex items-center gap-1">
            <Zap size={14} className="text-amber-400" />
            Visual takeaway: Understand in 5 seconds
          </span>
        </div>
      </div>

      {/* Fullscreen Modal for Art */}
      {isModalOpen && analogyImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col">
            <button
              onClick={() => setIsModalOpen(false)}
              className="self-end mb-2 p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X size={24} />
            </button>
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
              <Image
                src={analogyImage}
                alt={analogyTitle}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Subcomponent: Rich, Topic-Specific Responsive Vector Infographics
function TopicDiagram({ id }: { id: string }) {
  switch (id) {
    case 'why-learn-quantum':
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Classical Side */}
          <div className="bg-slate-900/90 rounded-xl p-4 border border-rose-500/30 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="px-2.5 py-0.5 rounded-md text-xs font-bold uppercase bg-rose-500/20 text-rose-300 border border-rose-500/40">
                  Classical Silicon: Single Car in Maze
                </span>
                <span className="text-xs text-rose-400 font-mono">Serial: O(N)</span>
              </div>
              <svg viewBox="0 0 320 180" className="w-full h-auto rounded-lg bg-slate-950 p-2 border border-slate-800">
                <rect x="20" y="20" width="280" height="140" fill="none" stroke="#334155" strokeWidth="3" rx="6" />
                <path d="M 60 20 V 120 M 110 60 V 160 M 160 20 V 100 M 210 80 V 160 M 260 20 V 120" stroke="#475569" strokeWidth="3" />
                <path d="M 30 90 H 50 V 40 H 90 V 140" fill="none" stroke="#ef4444" strokeWidth="3" strokeDasharray="6,4" />
                <circle cx="90" cy="140" r="10" fill="#ef4444" opacity="0.2" />
                <text x="90" y="145" fill="#ef4444" fontSize="14" fontWeight="bold" textAnchor="middle">✕</text>
                <circle cx="50" cy="40" r="8" fill="#f87171" />
                <text x="50" y="44" fill="#0f172a" fontSize="9" fontWeight="bold" textAnchor="middle">🤖</text>
                <text x="160" y="165" fill="#fca5a5" fontSize="11" textAnchor="middle">Must test 1 corridor at a time (Stuck at dead ends!)</text>
              </svg>
            </div>
            <p className="text-xs text-slate-300 mt-2">
              Classical computer tests paths one-by-one sequentially. At 1,000 corridors, it backtracks hundreds of times.
            </p>
          </div>

          {/* Quantum Side */}
          <div className="bg-slate-900/90 rounded-xl p-4 border border-cyan-500/30 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="px-2.5 py-0.5 rounded-md text-xs font-bold uppercase bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                  Quantum: Tidal Wave Flood
                </span>
                <span className="text-xs text-cyan-400 font-mono">Parallel: O(1)</span>
              </div>
              <svg viewBox="0 0 320 180" className="w-full h-auto rounded-lg bg-slate-950 p-2 border border-slate-800">
                <defs>
                  <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.4" />
                  </linearGradient>
                </defs>
                <rect x="20" y="20" width="280" height="140" fill="none" stroke="#334155" strokeWidth="3" rx="6" />
                <path d="M 60 20 V 120 M 110 60 V 160 M 160 20 V 100 M 210 80 V 160 M 260 20 V 120" stroke="#475569" strokeWidth="3" />
                <path d="M 25 25 H 295 V 155 H 25 Z" fill="url(#waveGrad)" opacity="0.35" />
                <path d="M 30 90 C 80 40, 120 140, 180 60 C 220 20, 260 140, 290 90" fill="none" stroke="#22d3ee" strokeWidth="4" />
                <circle cx="285" cy="90" r="14" fill="#10b981" opacity="0.3" />
                <circle cx="285" cy="90" r="8" fill="#10b981" />
                <text x="285" y="93" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">EXIT</text>
                <text x="160" y="165" fill="#67e8f9" fontSize="11" textAnchor="middle">Wave pours through ALL corridors at the same instant!</text>
              </svg>
            </div>
            <p className="text-xs text-slate-300 mt-2">
              Quantum wave dynamics explore all corridors simultaneously in superposition and exit with constructive interference.
            </p>
          </div>
        </div>
      );

    case 'history-of-qc':
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-900/90 rounded-xl p-4 border border-amber-500/30">
            <span className="px-2.5 py-0.5 rounded-md text-xs font-bold uppercase bg-amber-500/20 text-amber-300 border border-amber-500/40">
              18th Century: Flat Brass Clockwork Gears
            </span>
            <div className="mt-3 bg-slate-950 p-3 rounded-lg border border-slate-800 text-center">
              <div className="text-4xl my-2">⚙️ 📜 🕰️</div>
              <p className="text-xs text-amber-200/90 font-mono">Ptolemy Epicycles on Flat Paper</p>
              <p className="text-[11px] text-slate-400 mt-1">
                Classical bits cannot simulate 3D quantum nature. Simulating 24 caffeine atoms requires more bits than sand grains on Earth!
              </p>
            </div>
          </div>
          <div className="bg-slate-900/90 rounded-xl p-4 border border-cyan-500/30">
            <span className="px-2.5 py-0.5 rounded-md text-xs font-bold uppercase bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
              Feynman&apos;s Insight: Quantum Simulating Quantum
            </span>
            <div className="mt-3 bg-slate-950 p-3 rounded-lg border border-slate-800 text-center">
              <div className="text-4xl my-2">⚛️ ☕ ⚡</div>
              <p className="text-xs text-cyan-300 font-mono">Nature Isn&apos;t Classical, Dammit!</p>
              <p className="text-[11px] text-slate-300 mt-1">
                Your coffee cup calculates trillions of quantum molecular interactions effortlessly because nature operates with quantum rules!
              </p>
            </div>
          </div>
        </div>
      );

    case 'classical-vs-quantum':
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-900/90 rounded-xl p-4 border border-rose-500/30">
            <div className="flex items-center justify-between mb-2">
              <span className="px-2.5 py-0.5 rounded-md text-xs font-bold uppercase bg-rose-500/20 text-rose-300">
                Classical Librarian
              </span>
              <span className="text-xs text-rose-400 font-mono">Avg: 500,000 checks</span>
            </div>
            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 flex items-center space-x-3">
              <div className="text-3xl">🚶‍♂️📖</div>
              <div className="text-xs text-slate-300">
                <p className="font-semibold text-rose-300">Page-by-Page Inspection</p>
                <p className="text-slate-400 text-[11px]">Opens page 1, then page 2... checking 1 million names sequentially.</p>
              </div>
            </div>
          </div>
          <div className="bg-slate-900/90 rounded-xl p-4 border border-cyan-500/30">
            <div className="flex items-center justify-between mb-2">
              <span className="px-2.5 py-0.5 rounded-md text-xs font-bold uppercase bg-cyan-500/20 text-cyan-300">
                Quantum Ghost (Grover)
              </span>
              <span className="text-xs text-cyan-400 font-mono">Only 1,000 steps (√N)</span>
            </div>
            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 flex items-center space-x-3">
              <div className="text-3xl">👻✨</div>
              <div className="text-xs text-slate-300">
                <p className="font-semibold text-cyan-300">Parallel Interference</p>
                <p className="text-slate-400 text-[11px]">Reads all 1,000,000 pages at once; cancels 999,999 wrong names in silence!</p>
              </div>
            </div>
          </div>
        </div>
      );

    case 'what-is-qc':
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-900/90 rounded-xl p-4 border border-amber-500/30">
            <span className="px-2.5 py-0.5 rounded-md text-xs font-bold uppercase bg-amber-500/20 text-amber-300">
              Classical: Mechanical Buzzer
            </span>
            <div className="mt-3 bg-slate-950 p-3 rounded-lg border border-slate-800 text-center">
              <div className="text-3xl my-1">🔲 🔘</div>
              <p className="text-xs text-amber-300 font-mono">Buzzer ON (1) or SILENT (0)</p>
              <p className="text-[11px] text-slate-400 mt-1">Binary switch. Can only buzz a single monotone frequency.</p>
            </div>
          </div>
          <div className="bg-slate-900/90 rounded-xl p-4 border border-purple-500/30">
            <span className="px-2.5 py-0.5 rounded-md text-xs font-bold uppercase bg-purple-500/20 text-purple-300">
              Quantum: Grand Pipe Organ
            </span>
            <div className="mt-3 bg-slate-950 p-3 rounded-lg border border-slate-800 text-center">
              <div className="text-3xl my-1">🎹 🎶 🌊</div>
              <p className="text-xs text-purple-300 font-mono">Multi-Harmonic Synthesizer</p>
              <p className="text-[11px] text-slate-300 mt-1">Unitary gates tune wave phases so dissonance cancels out and pure harmony rings!</p>
            </div>
          </div>
        </div>
      );

    case 'quantum-mechanics-basics':
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-900/90 rounded-xl p-4 border border-rose-500/30">
            <span className="px-2.5 py-0.5 rounded-md text-xs font-bold uppercase bg-rose-500/20 text-rose-300">
              Macroscopic World: Smooth Ramp
            </span>
            <div className="mt-3 bg-slate-950 p-3 rounded-lg border border-slate-800 text-center">
              <div className="text-3xl my-1">🛹 📐</div>
              <p className="text-xs text-rose-300 font-mono">Continuous Height &amp; Values</p>
              <p className="text-[11px] text-slate-400 mt-1">You can stand at any fraction of height: 1.2, 1.487, 2.39...</p>
            </div>
          </div>
          <div className="bg-slate-900/90 rounded-xl p-4 border border-emerald-500/30">
            <span className="px-2.5 py-0.5 rounded-md text-xs font-bold uppercase bg-emerald-500/20 text-emerald-300">
              Quantum World: Quantized Staircase
            </span>
            <div className="mt-3 bg-slate-950 p-3 rounded-lg border border-slate-800 text-center">
              <div className="text-3xl my-1">🪜 🎸</div>
              <p className="text-xs text-emerald-300 font-mono">Discrete Steps &amp; Guitar Harmonics</p>
              <p className="text-[11px] text-slate-300 mt-1">Step 1 or Step 2 only! Step 1.5 physically does not exist in nature.</p>
            </div>
          </div>
        </div>
      );

    case 'classical-bit':
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-900/90 rounded-xl p-4 border border-rose-500/30">
            <span className="px-2.5 py-0.5 rounded-md text-xs font-bold uppercase bg-rose-500/20 text-rose-300">
              Railroad Track Switch &amp; Eraser
            </span>
            <div className="mt-3 bg-slate-950 p-3 rounded-lg border border-slate-800 text-center">
              <div className="text-3xl my-1">🚂 💨 🧽</div>
              <p className="text-xs text-rose-300 font-mono">Irreversible Erasure (+Heat!)</p>
              <p className="text-[11px] text-slate-400 mt-1">Landauer&apos;s limit: wiping a bit dumps heat (k_B T ln 2) into the room.</p>
            </div>
          </div>
          <div className="bg-slate-900/90 rounded-xl p-4 border border-cyan-500/30">
            <span className="px-2.5 py-0.5 rounded-md text-xs font-bold uppercase bg-cyan-500/20 text-cyan-300">
              Quantum Unitary Reversible Rotation
            </span>
            <div className="mt-3 bg-slate-950 p-3 rounded-lg border border-slate-800 text-center">
              <div className="text-3xl my-1">🔄 💎 ❄️</div>
              <p className="text-xs text-cyan-300 font-mono">Zero Heat Dissipation (U†U = I)</p>
              <p className="text-[11px] text-slate-300 mt-1">Quantum gates never delete data; every operation can be run backwards!</p>
            </div>
          </div>
        </div>
      );

    case 'qubit':
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-900/90 rounded-xl p-4 border border-amber-500/30">
            <span className="px-2.5 py-0.5 rounded-md text-xs font-bold uppercase bg-amber-500/20 text-amber-300">
              Classical: Lightbulb Switch
            </span>
            <div className="mt-3 bg-slate-950 p-3 rounded-lg border border-slate-800 text-center">
              <div className="text-3xl my-1">💡 ⚪ 🔘</div>
              <p className="text-xs text-amber-300 font-mono">100% OFF (0) or 100% ON (1)</p>
              <p className="text-[11px] text-slate-400 mt-1">No blend, no intermediate color. A strict binary choice.</p>
            </div>
          </div>
          <div className="bg-slate-900/90 rounded-xl p-4 border border-purple-500/30">
            <span className="px-2.5 py-0.5 rounded-md text-xs font-bold uppercase bg-purple-500/20 text-purple-300">
              Qubit: Dual-Beam Purple Light
            </span>
            <div className="mt-3 bg-slate-950 p-3 rounded-lg border border-slate-800 text-center">
              <div className="text-3xl my-1">🟣 🔦 🪙</div>
              <p className="text-xs text-purple-300 font-mono">Blue (0) + Red (1) = Purple</p>
              <p className="text-[11px] text-slate-300 mt-1">Blends both colors at any dial setting! Snaps to Blue or Red when measured.</p>
            </div>
          </div>
        </div>
      );

    case 'quantum-state':
      return (
        <div className="bg-slate-900/90 rounded-xl p-4 border border-blue-500/30">
          <div className="flex items-center justify-between mb-2">
            <span className="px-2.5 py-0.5 rounded-md text-xs font-bold uppercase bg-blue-500/20 text-blue-300">
              The Bloch Sphere Globe &amp; Airplane Navigation
            </span>
            <span className="text-xs text-cyan-400 font-mono">|ψ⟩ = cos(θ/2)|0⟩ + e^(iϕ)sin(θ/2)|1⟩</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-slate-950 p-3 rounded-lg border border-slate-800 text-center">
            <div className="p-2 rounded bg-slate-900/80 border border-slate-800">
              <div className="text-2xl mb-1">🏔️ |0⟩</div>
              <p className="text-xs font-bold text-sky-300">North Pole (θ=0)</p>
              <p className="text-[10px] text-slate-400">100% chance of measuring 0</p>
            </div>
            <div className="p-2 rounded bg-slate-900/80 border border-cyan-500/30">
              <div className="text-2xl mb-1">✈️ |+⟩</div>
              <p className="text-xs font-bold text-cyan-300">Equator (θ=π/2)</p>
              <p className="text-[10px] text-slate-400">50/50 odds, ϕ rotates phase</p>
            </div>
            <div className="p-2 rounded bg-slate-900/80 border border-slate-800">
              <div className="text-2xl mb-1">🌋 |1⟩</div>
              <p className="text-xs font-bold text-rose-300">South Pole (θ=π)</p>
              <p className="text-[10px] text-slate-400">100% chance of measuring 1</p>
            </div>
          </div>
        </div>
      );

    case 'superposition':
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-900/90 rounded-xl p-4 border border-amber-500/30">
            <span className="px-2.5 py-0.5 rounded-md text-xs font-bold uppercase bg-amber-500/20 text-amber-300">
              Coin Lying Flat on Table
            </span>
            <div className="mt-3 bg-slate-950 p-3 rounded-lg border border-slate-800 text-center">
              <div className="text-3xl my-1">🪙 🪨</div>
              <p className="text-xs text-amber-300 font-mono">Definite Heads OR Tails</p>
              <p className="text-[11px] text-slate-400 mt-1">Classical certainty. No dynamic wave blur.</p>
            </div>
          </div>
          <div className="bg-slate-900/90 rounded-xl p-4 border border-cyan-500/30">
            <span className="px-2.5 py-0.5 rounded-md text-xs font-bold uppercase bg-cyan-500/20 text-cyan-300">
              Coin Spinning in Air &amp; Piano Chord
            </span>
            <div className="mt-3 bg-slate-950 p-3 rounded-lg border border-slate-800 text-center">
              <div className="text-3xl my-1">🌪️ 🎵 🎼</div>
              <p className="text-xs text-cyan-300 font-mono">Simultaneous Waves in Superposition</p>
              <p className="text-[11px] text-slate-300 mt-1">Not 0 or 1, but a live spinning chord of both (|0⟩ + |1⟩)/√2!</p>
            </div>
          </div>
        </div>
      );

    case 'measurement':
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-900/90 rounded-xl p-4 border border-purple-500/30">
            <span className="px-2.5 py-0.5 rounded-md text-xs font-bold uppercase bg-purple-500/20 text-purple-300">
              Before Looking: Floating Bubble
            </span>
            <div className="mt-3 bg-slate-950 p-3 rounded-lg border border-slate-800 text-center">
              <div className="text-3xl my-1">🫧 🌈 ✨</div>
              <p className="text-xs text-purple-300 font-mono">Shimmering Superposition</p>
              <p className="text-[11px] text-slate-300 mt-1">Reflects all colors and possibilities simultaneously.</p>
            </div>
          </div>
          <div className="bg-slate-900/90 rounded-xl p-4 border border-rose-500/30">
            <span className="px-2.5 py-0.5 rounded-md text-xs font-bold uppercase bg-rose-500/20 text-rose-300">
              Finger Touches Bubble (Measurement)
            </span>
            <div className="mt-3 bg-slate-950 p-3 rounded-lg border border-slate-800 text-center">
              <div className="text-3xl my-1">👉 💥 💧</div>
              <p className="text-xs text-rose-300 font-mono">POP! Irreversible Collapse</p>
              <p className="text-[11px] text-slate-400 mt-1">Born Rule: Rainbow disappears, leaving one plain water drop.</p>
            </div>
          </div>
        </div>
      );

    case 'probability-amplitude':
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-900/90 rounded-xl p-4 border border-emerald-500/30">
            <span className="px-2.5 py-0.5 rounded-md text-xs font-bold uppercase bg-emerald-500/20 text-emerald-300">
              Crest Meets Crest (Constructive)
            </span>
            <div className="mt-3 bg-slate-950 p-3 rounded-lg border border-slate-800 text-center">
              <div className="text-3xl my-1">🌊 ➕ 🌊 🟰 🏔️</div>
              <p className="text-xs text-emerald-300 font-mono">Double Height Monster Wave (+1 + +1 = +2)</p>
              <p className="text-[11px] text-slate-300 mt-1">Probability surges to 400%!</p>
            </div>
          </div>
          <div className="bg-slate-900/90 rounded-xl p-4 border border-blue-500/30">
            <span className="px-2.5 py-0.5 rounded-md text-xs font-bold uppercase bg-blue-500/20 text-blue-300">
              Crest Meets Trough (Destructive)
            </span>
            <div className="mt-3 bg-slate-950 p-3 rounded-lg border border-slate-800 text-center">
              <div className="text-3xl my-1">🌊 ➕ 🕳️ 🟰 🪞</div>
              <p className="text-xs text-blue-300 font-mono">Pure Flat Water (+1 - 1 = 0)</p>
              <p className="text-[11px] text-slate-300 mt-1">Two real possibilities cancel each other into impossibility!</p>
            </div>
          </div>
        </div>
      );

    case 'entanglement':
      return (
        <div className="bg-slate-900/90 rounded-xl p-4 border border-fuchsia-500/30">
          <div className="flex items-center justify-between mb-2">
            <span className="px-2.5 py-0.5 rounded-md text-xs font-bold uppercase bg-fuchsia-500/20 text-fuchsia-300">
              The Cosmic Dragon Gloves &amp; Interplanetary Dice
            </span>
            <span className="text-xs text-fuchsia-400 font-mono">|Φ+⟩ = (|00⟩ + |11⟩)/√2</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-slate-950 p-3 rounded-lg border border-slate-800">
            <div className="text-center p-2 rounded bg-slate-900/80 border border-fuchsia-500/20">
              <p className="text-xs font-bold text-rose-300">📦 Box A on Mars</p>
              <div className="text-2xl my-1">🧤 Left Glove (50%)</div>
              <p className="text-[10px] text-slate-400">Opens to reveal Left Glove</p>
            </div>
            <div className="text-center p-2 rounded bg-slate-900/80 border border-fuchsia-500/20">
              <p className="text-xs font-bold text-cyan-300">📦 Box B on Earth</p>
              <div className="text-2xl my-1">🧤 Right Glove (100%!)</div>
              <p className="text-[10px] text-slate-400">Instantly snaps with zero time delay</p>
            </div>
          </div>
        </div>
      );

    case 'quantum-interference':
      return (
        <div className="bg-slate-900/90 rounded-xl p-4 border border-teal-500/30">
          <div className="flex items-center justify-between mb-2">
            <span className="px-2.5 py-0.5 rounded-md text-xs font-bold uppercase bg-teal-500/20 text-teal-300">
              Active Noise-Canceling Computational Headphones
            </span>
            <span className="text-xs text-teal-400 font-mono">P(x) = |A1 + A2|²</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 bg-slate-950 p-3 rounded-lg border border-slate-800 text-center">
            <div className="p-2 rounded bg-slate-900/80">
              <div className="text-xl mb-1 text-rose-400">✈️ 〰️</div>
              <p className="text-[11px] font-bold text-rose-300">Engine Roar (Wrong)</p>
              <p className="text-[10px] text-slate-400">Trillions of wrong passwords</p>
            </div>
            <div className="p-2 rounded bg-slate-900/80">
              <div className="text-xl mb-1 text-cyan-400">🎧 ∿</div>
              <p className="text-[11px] font-bold text-cyan-300">Inverted Anti-Wave</p>
              <p className="text-[10px] text-slate-400">Grover phase flip (-1)</p>
            </div>
            <div className="p-2 rounded bg-slate-900/80 border border-teal-500/30">
              <div className="text-xl mb-1 text-emerald-400">🤫 💡</div>
              <p className="text-[11px] font-bold text-emerald-300">Pure Silence + Target</p>
              <p className="text-[10px] text-slate-400">Only correct answer amplified!</p>
            </div>
          </div>
        </div>
      );

    case 'qc-applications':
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-900/90 rounded-xl p-4 border border-amber-500/30">
            <span className="px-2.5 py-0.5 rounded-md text-xs font-bold uppercase bg-amber-500/20 text-amber-300">
              Haber-Bosch Factory (2% World Energy)
            </span>
            <div className="mt-3 bg-slate-950 p-3 rounded-lg border border-slate-800 text-center">
              <div className="text-3xl my-1">🏭 ♨️ ⚡</div>
              <p className="text-xs text-amber-300 font-mono">Brutal 450°C, 200 atm Pressure</p>
              <p className="text-[11px] text-slate-400 mt-1">Crushing energy cost because classical computers can&apos;t simulate catalysts.</p>
            </div>
          </div>
          <div className="bg-slate-900/90 rounded-xl p-4 border border-emerald-500/30">
            <span className="px-2.5 py-0.5 rounded-md text-xs font-bold uppercase bg-emerald-500/20 text-emerald-300">
              Clover Root Bacteria &amp; Drug Keymaker
            </span>
            <div className="mt-3 bg-slate-950 p-3 rounded-lg border border-slate-800 text-center">
              <div className="text-3xl my-1">☘️ 🦠 🔑</div>
              <p className="text-xs text-emerald-300 font-mono">Pleasant Room Temperature Nitrogenase</p>
              <p className="text-[11px] text-slate-300 mt-1">Quantum simulation unlocks bacteria&apos;s enzyme secrets and custom cure keys!</p>
            </div>
          </div>
        </div>
      );

    case 'qc-limitations':
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-900/90 rounded-xl p-4 border border-rose-500/30">
            <span className="px-2.5 py-0.5 rounded-md text-xs font-bold uppercase bg-rose-500/20 text-rose-300">
              1,000-Glass Champagne Tower on Trampoline
            </span>
            <div className="mt-3 bg-slate-950 p-3 rounded-lg border border-slate-800 text-center">
              <div className="text-3xl my-1">🥂 📳 💥</div>
              <p className="text-xs text-rose-300 font-mono">Decoherence &amp; Fragility</p>
              <p className="text-[11px] text-slate-400 mt-1">A stray thermal photon or tiny vibration shatters the quantum superposition.</p>
            </div>
          </div>
          <div className="bg-slate-900/90 rounded-xl p-4 border border-amber-500/30">
            <span className="px-2.5 py-0.5 rounded-md text-xs font-bold uppercase bg-amber-500/20 text-amber-300">
              Gold Dilution Chandelier (15 mK)
            </span>
            <div className="mt-3 bg-slate-950 p-3 rounded-lg border border-slate-800 text-center">
              <div className="text-3xl my-1">❄️ 🏆 🛡️</div>
              <p className="text-xs text-amber-300 font-mono">Colder Than Deep Space (-273.14°C)</p>
              <p className="text-[11px] text-slate-300 mt-1">Needs 1,000 physical qubits for 1 logical qubit; No-Cloning theorem forbids Ctrl+C!</p>
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
}
