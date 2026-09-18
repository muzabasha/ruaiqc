'use client';

import React, { useState, useEffect } from 'react';
import {
  X,
  Compass,
  BookOpen,
  Lightbulb,
  Sparkles,
  Atom,
  Binary,
  Code,
  CheckCircle2,
  FileText,
  Sliders,
  Play,
  RotateCw,
  HelpCircle,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  Check,
  Zap,
} from 'lucide-react';

interface TopicGuidedTourProps {
  isOpen: boolean;
  onClose: () => void;
  topicTitle?: string;
  isQuantumTopic?: boolean;
}

interface ChecklistItem {
  id: string;
  label: string;
  hint: string;
  sectionId: string;
}

const CHECKLIST_KEY = 'aq_first_time_user_checklist';

export default function TopicGuidedTour({
  isOpen,
  onClose,
  topicTitle = 'Current Topic',
  isQuantumTopic = false,
}: TopicGuidedTourProps) {
  const [activeTab, setActiveTab] = useState<'components' | 'qsphere' | 'why' | 'checklist'>('components');
  const [selectedComponentIndex, setSelectedComponentIndex] = useState<number>(0);
  const [checklist, setChecklist] = useState<Record<string, boolean>>({});

  // Initialize checklist from localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(CHECKLIST_KEY);
        if (saved) {
          setChecklist(JSON.parse(saved));
        }
      } catch {
        // fallback
      }
    }
  }, []);

  const toggleChecklist = (id: string) => {
    setChecklist((prev) => {
      const updated = { ...prev, [id]: !prev[id] };
      if (typeof window !== 'undefined') {
        localStorage.setItem(CHECKLIST_KEY, JSON.stringify(updated));
      }
      return updated;
    });
  };

  const jumpToSection = (sectionId: string) => {
    onClose();
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        el.classList.add('ring-4', 'ring-primary-400', 'transition-all', 'duration-500');
        setTimeout(() => {
          el.classList.remove('ring-4', 'ring-primary-400');
        }, 2000);
      }
    }, 150);
  };

  if (!isOpen) return null;

  const componentsList = [
    {
      id: 'section-story',
      badge: 'Step 1: Anchor',
      icon: BookOpen,
      title: 'Real-World Story Hook',
      desc: 'Connects abstract mathematics and theory with a relatable human narrative before introducing jargon.',
      proTip: 'Always read the story first! It establishes the intuitive context for why the concept was invented in the first place.',
      color: 'from-amber-500 to-orange-500',
    },
    {
      id: 'section-motivation',
      badge: 'Step 2: Purpose',
      icon: Lightbulb,
      title: 'Why Should You Learn This? (Motivation)',
      desc: 'Highlights the real-world engineering stakes, career applications, and computational advantages of mastering this concept.',
      proTip: 'Look for the "Core Impact" spotlight to understand why industry leaders like Google, IBM, or OpenAI rely on this technique.',
      color: 'from-yellow-500 to-amber-600',
    },
    {
      id: 'section-fun',
      badge: 'Step 3: Analogy',
      icon: Sparkles,
      title: 'Fun Learning Zone (Zero Prerequisites)',
      desc: 'Breaks down tough mathematical barriers through intuitive thought experiments, humor, and everyday analogies.',
      proTip: 'Ideal for complete beginners — no prior physics or calculus needed to understand this section.',
      color: 'from-purple-500 to-indigo-600',
    },
    {
      id: 'section-concept',
      badge: 'Step 4: Two-Layer Pedagogy',
      icon: Binary,
      title: 'Dual Concept: Simple vs. Technical',
      desc: 'Provides a plain-English explanation followed immediately by formal technical definitions and rigorous terminology.',
      proTip: 'Read the green Simple card first to build mental scaffolding, then inspect the blue Technical definition to master exact terminology.',
      color: 'from-green-500 to-emerald-600',
    },
    {
      id: 'section-key-terms',
      badge: 'Step 5: Glossary',
      icon: BookOpen,
      title: 'Key Terms & Definitions',
      desc: 'A quick-reference vocabulary list with dual simple and technical interpretations for each key term.',
      proTip: 'Great for revision before taking the quiz or for preparing interview answers.',
      color: 'from-teal-500 to-cyan-600',
    },
    {
      id: 'section-qsphere',
      badge: 'Step 6: Interactive Lab',
      icon: Atom,
      title: 'Interactive Q-Sphere & Bloch Sphere Lab',
      desc: 'A live 3D visualizer that lets you manipulate state vectors, apply unitary gates, observe phase colors, and trigger projective collapse.',
      proTip: 'Switch to the "Q-Sphere Lab Deep Dive" tab in this guide for a full step-by-step experimenter walkthrough!',
      color: 'from-indigo-600 to-blue-600',
      isQuantum: true,
    },
    {
      id: 'section-equations',
      badge: 'Step 7: Formal Math',
      icon: Binary,
      title: 'LaTeX Equations & Symbol Inspector',
      desc: 'KaTeX-rendered mathematical formulations with a symbol-by-symbol breakdown and worked numerical calculation examples.',
      proTip: 'Hover or tap each symbol card to see its physical meaning without getting lost in Greek notation.',
      color: 'from-blue-600 to-indigo-700',
    },
    {
      id: 'section-how-it-works',
      badge: 'Step 8: Execution Flow',
      icon: Sliders,
      title: 'How Does It Work? (Algorithmic Pipeline)',
      desc: 'A numbered step-by-step breakdown illustrating how the algorithm or system processes information sequentially.',
      proTip: 'Trace the data flow from Step 1 through to the final state to cement your end-to-end understanding.',
      color: 'from-violet-600 to-purple-700',
    },
    {
      id: 'section-applications',
      badge: 'Step 9: Industry',
      icon: Compass,
      title: 'Real-World Applications Matrix',
      desc: 'Examines practical problems across medicine, finance, logistics, and AI, demonstrating exactly how this concept provides the solution.',
      proTip: 'Shows you how modern startups and enterprise teams deploy these methods commercially.',
      color: 'from-purple-600 to-pink-600',
    },
    {
      id: 'section-python',
      badge: 'Step 10: Coding',
      icon: Code,
      title: 'Python Hands-On (One-Click Google Colab)',
      desc: 'Executable Python and Qiskit code with a dedicated "Copy for Google Colab" button that automatically includes package installers (!pip install).',
      proTip: 'Click the orange "Copy for Google Colab" button, open colab.research.google.com, paste and run (Shift + Enter) in 30 seconds!',
      color: 'from-emerald-600 to-green-700',
    },
    {
      id: 'section-resources',
      badge: 'Step 11: Authoritative Slides',
      icon: FileText,
      title: 'Lecture Slide Decks (PDFs by Dr. Syed Muzamil Basha)',
      desc: 'Curated university lecture presentation slide decks embedded and directly viewable for deep academic reference.',
      proTip: 'Use these slide decks as authoritative study material or as lecture slides for teaching workshops.',
      color: 'from-amber-600 to-orange-700',
    },
    {
      id: 'section-quiz',
      badge: 'Step 12: Knowledge Check',
      icon: CheckCircle2,
      title: 'Formative MCQ Quiz & Feedback',
      desc: 'Self-assessment questions with instant diagnostic feedback for both correct and incorrect choices, saving your score locally.',
      proTip: 'Scoring 4/5 or 5/5 confirms mastery. If you score lower, re-read the Simple Concept and try the Python code!',
      color: 'from-blue-700 to-indigo-800',
    },
  ];

  const checklistItems: ChecklistItem[] = [
    {
      id: 'check-story',
      label: 'Read the opening Story & real-world scenario',
      hint: 'Anchor your intuition before touching any formulas.',
      sectionId: 'section-story',
    },
    {
      id: 'check-motivation',
      label: 'Understand "Why Should You Learn This?"',
      hint: 'Review the career & algorithmic stakes.',
      sectionId: 'section-motivation',
    },
    {
      id: 'check-concept',
      label: 'Review Simple Explanation & Key Terms',
      hint: 'Verify you can explain the concept in plain English.',
      sectionId: 'section-concept',
    },
    {
      id: 'check-qsphere',
      label: 'Experiment with the Q-Sphere / Visualizer',
      hint: 'Test state vector rotations, presets, and measurement collapse.',
      sectionId: 'section-qsphere',
    },
    {
      id: 'check-colab',
      label: 'Run the Python Hands-On in Google Colab',
      hint: 'Use the 1-click Colab copy button and run with Shift + Enter.',
      sectionId: 'section-python',
    },
    {
      id: 'check-quiz',
      label: 'Complete the MCQ Learning Check',
      hint: 'Achieve at least 80% to lock in your topic mastery.',
      sectionId: 'section-quiz',
    },
  ];

  const completedCount = checklistItems.filter((item) => checklist[item.id]).length;
  const currentComp = componentsList[selectedComponentIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-gray-900/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 w-full max-w-5xl max-h-[92vh] flex flex-col overflow-hidden">
        {/* Modal Top Header */}
        <div className="bg-gradient-to-r from-primary-700 via-indigo-700 to-quantum-700 text-white p-5 sm:p-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center">
              <Compass className="text-white" size={24} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider bg-white/25 px-2.5 py-0.5 rounded-full">
                  First-Time User Guide
                </span>
                <span className="text-xs text-white/80 hidden sm:inline">• Active Topic: {topicTitle}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold">Interactive Learning Platform Navigator</h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close guide"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-gray-200 bg-gray-50 px-4 sm:px-6 overflow-x-auto text-sm font-medium">
          <button
            onClick={() => setActiveTab('components')}
            className={`py-3 px-4 border-b-2 font-semibold whitespace-nowrap transition-colors flex items-center gap-2 ${
              activeTab === 'components'
                ? 'border-primary-600 text-primary-700 bg-white'
                : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
            }`}
          >
            <BookOpen size={16} />
            <span>1. Topic-Wise Component Tour</span>
          </button>
          <button
            onClick={() => setActiveTab('qsphere')}
            className={`py-3 px-4 border-b-2 font-semibold whitespace-nowrap transition-colors flex items-center gap-2 ${
              activeTab === 'qsphere'
                ? 'border-quantum-600 text-quantum-700 bg-white'
                : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
            }`}
          >
            <Atom size={16} />
            <span>2. Q-Sphere Lab Deep Dive</span>
            <span className="bg-quantum-100 text-quantum-800 text-xs px-2 py-0.5 rounded-full font-bold">Interactive</span>
          </button>
          <button
            onClick={() => setActiveTab('why')}
            className={`py-3 px-4 border-b-2 font-semibold whitespace-nowrap transition-colors flex items-center gap-2 ${
              activeTab === 'why'
                ? 'border-amber-600 text-amber-700 bg-white'
                : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
            }`}
          >
            <Lightbulb size={16} />
            <span>3. Why Learn AI & Quantum?</span>
          </button>
          <button
            onClick={() => setActiveTab('checklist')}
            className={`py-3 px-4 border-b-2 font-semibold whitespace-nowrap transition-colors flex items-center gap-2 ${
              activeTab === 'checklist'
                ? 'border-green-600 text-green-700 bg-white'
                : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
            }`}
          >
            <CheckCircle2 size={16} />
            <span>4. First-Time Checklist</span>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full font-bold">
              {completedCount}/{checklistItems.length}
            </span>
          </button>
        </div>

        {/* Tab Content Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 bg-white">
          {/* TAB 1: COMPONENT-WISE TOUR */}
          {activeTab === 'components' && (
            <div className="grid md:grid-cols-12 gap-6 items-start">
              {/* Left Column: Component Picker */}
              <div className="md:col-span-5 space-y-1.5 max-h-[55vh] overflow-y-auto pr-2">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Select a topic component to inspect:
                </p>
                {componentsList.map((comp, idx) => {
                  const Icon = comp.icon;
                  const isSelected = selectedComponentIndex === idx;
                  return (
                    <button
                      key={comp.id}
                      onClick={() => setSelectedComponentIndex(idx)}
                      className={`w-full text-left p-3 rounded-xl border transition-all flex items-center justify-between group ${
                        isSelected
                          ? 'border-primary-500 bg-primary-50/60 shadow-sm'
                          : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                            isSelected ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'
                          }`}
                        >
                          <Icon size={16} />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-gray-500">{comp.badge}</div>
                          <div className={`text-sm font-bold ${isSelected ? 'text-primary-900' : 'text-gray-800'}`}>
                            {comp.title}
                          </div>
                        </div>
                      </div>
                      <ChevronRight
                        size={16}
                        className={`transition-transform ${isSelected ? 'text-primary-600 translate-x-1' : 'text-gray-400'}`}
                      />
                    </button>
                  );
                })}
              </div>

              {/* Right Column: Component Details & Direct Jump */}
              <div className="md:col-span-7 bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col justify-between min-h-[420px]">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary-700 bg-primary-100 px-3 py-1 rounded-full">
                      {currentComp.badge}
                    </span>
                    <span className="text-xs text-gray-400">
                      Component {selectedComponentIndex + 1} of {componentsList.length}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span>{currentComp.title}</span>
                  </h3>

                  <p className="text-gray-700 text-base leading-relaxed mb-6">
                    {currentComp.desc}
                  </p>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
                    <div className="flex items-start gap-2.5">
                      <Sparkles size={20} className="text-amber-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wider mb-1">
                          Pedagogical Pro-Tip
                        </h4>
                        <p className="text-xs sm:text-sm text-amber-800 leading-relaxed">
                          {currentComp.proTip}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="flex gap-2 w-full sm:w-auto">
                    <button
                      onClick={() =>
                        setSelectedComponentIndex((prev) => (prev > 0 ? prev - 1 : componentsList.length - 1))
                      }
                      className="flex-1 sm:flex-initial px-3 py-2 border border-gray-300 rounded-lg text-xs font-semibold text-gray-700 hover:bg-gray-100"
                    >
                      ← Previous
                    </button>
                    <button
                      onClick={() =>
                        setSelectedComponentIndex((prev) => (prev < componentsList.length - 1 ? prev + 1 : 0))
                      }
                      className="flex-1 sm:flex-initial px-3 py-2 border border-gray-300 rounded-lg text-xs font-semibold text-gray-700 hover:bg-gray-100"
                    >
                      Next →
                    </button>
                  </div>

                  <button
                    onClick={() => jumpToSection(currentComp.id)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-xl font-semibold text-sm shadow-md transition-all transform hover:-translate-y-0.5"
                  >
                    <span>Jump to this Component</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Q-SPHERE LAB DEEP DIVE */}
          {activeTab === 'qsphere' && (
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-purple-50 via-indigo-50 to-blue-50 border border-purple-200 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <Atom size={28} className="text-quantum-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      Mastering the Interactive Q-Sphere & Bloch Sphere Laboratory
                    </h3>
                    <p className="text-sm text-gray-700 mt-1">
                      The Q-Sphere represents single-qubit quantum states $|\psi\rangle = \alpha |0\rangle + \beta |1\rangle$.
                      In this platform, you don&apos;t just read about quantum mechanics — you interactively rotate, transform,
                      and measure states in real-time.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {/* Action 1: Presets & 3D Dragging */}
                <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold mb-3">
                    1
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1">State Presets & 3D Drag</h4>
                  <p className="text-xs text-gray-600 mb-3">
                    Instantly load canonical quantum states like $|0\rangle$ (North pole), $|1\rangle$ (South pole), or
                    equal superpositions $|+\rangle$ and $|-\rangle$.
                  </p>
                  <div className="bg-blue-50 rounded-lg p-2.5 text-xs text-blue-900 font-mono">
                    💡 Click & drag the sphere directly to rotate your 3D view angle, or click &quot;Auto-Rotate&quot;.
                  </div>
                </div>

                {/* Action 2: Unitary Quantum Gates */}
                <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-9 h-9 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center font-bold mb-3">
                    2
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1">Applying Unitary Gates</h4>
                  <p className="text-xs text-gray-600 mb-3">
                    Click <strong>H (Hadamard)</strong> to rotate between computational and superposition bases. Click{' '}
                    <strong>X</strong> for bit-flip, <strong>Z</strong> for phase-flip, or <strong>S / T</strong> for phase shifts.
                  </p>
                  <div className="bg-purple-50 rounded-lg p-2.5 text-xs text-purple-900 font-mono">
                    💡 Try: Reset to |0⟩ → Click H → You reach |+⟩ with 50% P(0) and 50% P(1)!
                  </div>
                </div>

                {/* Action 3: Projective Measurement & Shots */}
                <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-9 h-9 rounded-lg bg-green-100 text-green-700 flex items-center justify-center font-bold mb-3">
                    3
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1">Measurement Collapse & Shots</h4>
                  <p className="text-xs text-gray-600 mb-3">
                    Quantum measurement collapses a delicate superposition state into either $|0\rangle$ or $|1\rangle$ according
                    to the Born Rule: $P(0) = |\alpha|^2$.
                  </p>
                  <div className="bg-green-50 rounded-lg p-2.5 text-xs text-green-900 font-mono">
                    💡 Click &quot;Measure Qubit&quot; for single collapse, or &quot;Run 100 Shots&quot; to see empirical histograms.
                  </div>
                </div>
              </div>

              {/* Advanced Controls Matrix */}
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <h4 className="font-bold text-sm text-gray-900 mb-3 flex items-center gap-2">
                  <Zap size={16} className="text-yellow-600" />
                  <span>Interactive Q-Sphere Cheatsheet: What Every Control Does</span>
                </h4>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                  <div className="bg-white p-3 rounded-lg border border-gray-200">
                    <span className="font-bold text-primary-700 block mb-1">Spherical Slider θ (Theta)</span>
                    <p className="text-gray-600">Controls latitude [0° to 180°]. Determines relative probability of |0⟩ vs |1⟩.</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-gray-200">
                    <span className="font-bold text-quantum-700 block mb-1">Spherical Slider φ (Phi)</span>
                    <p className="text-gray-600">Controls longitude [0° to 360°]. Represents quantum relative phase angle.</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-gray-200">
                    <span className="font-bold text-amber-700 block mb-1">Phase Hue Color Wheel</span>
                    <p className="text-gray-600">State vector color follows standard IBM Q-Sphere hue: red=0, green=π/2, blue=π.</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-gray-200">
                    <span className="font-bold text-purple-700 block mb-1">Action History Log</span>
                    <p className="text-gray-600">Tracks previous gate transformations and projective measurement outcomes.</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => jumpToSection('section-qsphere')}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-quantum-600 to-indigo-600 hover:from-quantum-700 hover:to-indigo-700 text-white px-5 py-2.5 rounded-xl font-semibold text-sm shadow-md"
                >
                  <Atom size={18} />
                  <span>Take Me to the Q-Sphere Lab on this Page</span>
                </button>
              </div>
            </div>
          )}

          {/* TAB 3: WHY LEARN AI & QUANTUM? */}
          {activeTab === 'why' && (
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl p-6 text-white shadow-md">
                <div className="flex items-center gap-3 mb-2">
                  <Lightbulb size={28} className="text-amber-200" />
                  <span className="text-xs font-bold uppercase tracking-wider bg-white/20 px-3 py-0.5 rounded-full">
                    Core Philosophy
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  Why Should You Learn AI and Quantum Computing?
                </h3>
                <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                  We are living through the twin convergence of machine intelligence and quantum computational mechanics.
                  Understanding both gives you an unfair advantage in research, technology leadership, and modern engineering.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                {/* Why AI Card */}
                <div className="bg-white rounded-xl p-5 border-2 border-primary-200 shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-primary-100 text-primary-700 flex items-center justify-center font-bold">
                      AI
                    </div>
                    <h4 className="font-bold text-gray-900 text-lg">Why Should You Learn AI?</h4>
                  </div>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-primary-600 font-bold">✓</span>
                      <span><strong>Transformation of Every Discipline:</strong> From healthcare and finance to materials science and education, AI has become the primary computational substrate.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-600 font-bold">✓</span>
                      <span><strong>Move from Consumer to Creator:</strong> Stop simply reacting to AI tools; learn how to design, fine-tune, and deploy models that solve real-world problems.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-600 font-bold">✓</span>
                      <span><strong>Algorithmic Thinking:</strong> Learn to formulate complex unstructured problems as optimization tasks that machines can solve systematically.</span>
                    </li>
                  </ul>
                </div>

                {/* Why Quantum Card */}
                <div className="bg-white rounded-xl p-5 border-2 border-quantum-200 shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-quantum-100 text-quantum-700 flex items-center justify-center font-bold">
                      QC
                    </div>
                    <h4 className="font-bold text-gray-900 text-lg">Why Should You Learn Quantum?</h4>
                  </div>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-quantum-600 font-bold">✓</span>
                      <span><strong>Breaking Classical Limits:</strong> Silicon transistors are reaching quantum tunneling limits. Quantum processors compute in $2^n$ state spaces intractable for supercomputers.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-quantum-600 font-bold">✓</span>
                      <span><strong>Quantum-Enhanced AI (QML):</strong> Quantum feature maps and variational algorithms unlock exponential kernel spaces for complex data classification.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-quantum-600 font-bold">✓</span>
                      <span><strong>Future-Proof Your Career:</strong> Major research labs and tech giants are already building hybrid quantum-classical software stacks today.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Dynamic Topic Context */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <h4 className="font-bold text-sm text-blue-950 mb-1">
                  💡 How Every Topic Answers &quot;Why Learn This?&quot;
                </h4>
                <p className="text-xs sm:text-sm text-blue-800 leading-relaxed">
                  Notice that on every single topic page, right below the opening story, you will find a dedicated{' '}
                  <strong>&quot;Why Should You Learn [Topic Title]?&quot;</strong> section. It specifically answers why that
                  exact algorithmic tool or theorem matters for practical industry and research implementation.
                </p>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => jumpToSection('section-motivation')}
                  className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-5 py-2.5 rounded-xl font-semibold text-sm shadow-md"
                >
                  <Lightbulb size={18} />
                  <span>Inspect this Topic&apos;s Motivation Section</span>
                </button>
              </div>
            </div>
          )}

          {/* TAB 4: FIRST-TIME USER CHECKLIST */}
          {activeTab === 'checklist' && (
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-gray-900">
                    First-Time User Topic Mastery Checklist
                  </h3>
                  <span className="text-sm font-bold text-primary-700 bg-primary-50 border border-primary-200 px-3 py-1 rounded-full">
                    {completedCount} of {checklistItems.length} Milestones Achieved
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  Follow these 6 actionable steps on any topic to ensure maximum conceptual retention and practical coding fluency.
                </p>

                {/* Progress bar */}
                <div className="w-full bg-gray-200 h-2.5 rounded-full mt-3 overflow-hidden">
                  <div
                    className="bg-green-600 h-full rounded-full transition-all duration-300"
                    style={{ width: `${(completedCount / checklistItems.length) * 100}%` }}
                  />
                </div>
              </div>

              <div className="space-y-3">
                {checklistItems.map((item) => {
                  const isChecked = !!checklist[item.id];
                  return (
                    <div
                      key={item.id}
                      className={`p-4 rounded-xl border transition-all flex items-start justify-between gap-4 ${
                        isChecked
                          ? 'border-green-300 bg-green-50/50'
                          : 'border-gray-200 bg-white hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <button
                          onClick={() => toggleChecklist(item.id)}
                          className={`w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
                            isChecked
                              ? 'bg-green-600 text-white'
                              : 'border-2 border-gray-300 hover:border-primary-500 bg-white'
                          }`}
                          aria-label={item.label}
                        >
                          {isChecked && <Check size={16} strokeWidth={3} />}
                        </button>
                        <div>
                          <h4
                            onClick={() => toggleChecklist(item.id)}
                            className={`font-semibold text-sm cursor-pointer ${
                              isChecked ? 'text-green-950 line-through opacity-80' : 'text-gray-900'
                            }`}
                          >
                            {item.label}
                          </h4>
                          <p className="text-xs text-gray-500 mt-0.5">{item.hint}</p>
                        </div>
                      </div>

                      <button
                        onClick={() => jumpToSection(item.sectionId)}
                        className="text-xs font-semibold text-primary-600 hover:text-primary-800 hover:underline whitespace-nowrap pt-0.5 flex items-center gap-1"
                      >
                        <span>Jump</span>
                        <ArrowRight size={12} />
                      </button>
                    </div>
                  );
                })}
              </div>

              {completedCount === checklistItems.length && (
                <div className="bg-green-100 border-2 border-green-400 rounded-xl p-4 text-center text-green-900 font-bold animate-bounce">
                  🎉 Fantastic work! You have completed all onboarding milestones for this topic!
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
            <span>You can reopen this interactive guide anytime from the top bar.</span>
          </div>
          <button
            onClick={onClose}
            className="w-full sm:w-auto bg-gray-900 hover:bg-gray-800 text-white px-5 py-2 rounded-lg font-semibold transition-colors"
          >
            Got it, Let&apos;s Learn!
          </button>
        </div>
      </div>
    </div>
  );
}
