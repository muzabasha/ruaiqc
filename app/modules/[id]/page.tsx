'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import TopicCard from '@/components/TopicCard';
import ProgressBar from '@/components/ProgressBar';
import TopicGuidedTour from '@/components/TopicGuidedTour';
import { getModuleById } from '@/content/modules';
import { getTopicsByModuleId } from '@/content/topics';
import { getProgress, isTopicCompleted, getQuizScore } from '@/lib/progress';
import { ArrowLeft, BookOpen, Compass, Lightbulb, Sparkles, CheckCircle2 } from 'lucide-react';

const MODULE_MOTIVATIONS: Record<string, { why: string; impact: string }> = {
  'ai-foundations': {
    why: 'Understand the fundamental paradigm shift from writing rigid rules to training models on data. It gives you the conceptual vocabulary and Python intuition required for all advanced AI and Quantum tracks.',
    impact: 'Crucial for students and professionals transitioning into modern computing.',
  },
  'machine-learning': {
    why: 'Master how computers extract patterns from tabular and structured data. Learn training-testing hygiene, bias-variance trade-offs, and practical Scikit-Learn workflows.',
    impact: 'The primary skill tested in modern data science and applied ML engineering.',
  },
  'deep-learning': {
    why: 'Understand how multi-layer neural networks learn hierarchical representations. Master backpropagation, loss landscapes, and PyTorch implementations.',
    impact: 'Powers computer vision, natural language processing, and modern generative AI.',
  },
  'reinforcement-learning': {
    why: 'Discover how autonomous agents make optimal sequences of decisions through rewards and penalties. Learn Bellman equations, Q-tables, and Deep Q-Networks.',
    impact: 'Powers robotics, algorithmic trading, self-driving cars, and game-playing AI.',
  },
  'quantum-foundations': {
    why: 'Unlearn classical deterministic assumptions. Master qubits, complex state vectors, superposition, projective measurement collapse, and quantum entanglement.',
    impact: 'The indispensable mathematical foundation for entering the quantum era.',
  },
  'quantum-circuits': {
    why: 'Translate linear algebra into executable quantum programs. Master single-qubit rotations, Hadamard superposition, CNOT entanglement, and Qiskit circuit simulation.',
    impact: 'The core practical skill needed to write quantum code on real hardware.',
  },
  'quantum-algorithms': {
    why: 'Understand why and where quantum computers provide provable speedups. Study quantum parallelism, Grover search quadratic speedup, and the Quantum Fourier Transform.',
    impact: 'Separates genuine quantum advantage from marketing hype.',
  },
  'quantum-ml': {
    why: 'Combine quantum mechanics with machine learning. Master quantum feature maps, Hilbert space kernels, parameter-shift gradient estimation, and Variational Quantum Classifiers (VQC).',
    impact: 'The cutting-edge frontier pursued by Google Quantum AI, IBM, and top research labs.',
  },
  'quantum-enhanced-ai': {
    why: 'Deploy hybrid classical-quantum models in real-world workflows today. Master TorchConnector, VQE for drug discovery, and quadratic portfolio optimization.',
    impact: 'Prepares you for enterprise research projects, patents, and publications.',
  },
};

export default function ModulePage() {
  const params = useParams();
  const moduleId = params?.id as string;
  
  const [completedTopics, setCompletedTopics] = useState<string[]>([]);
  const [quizScores, setQuizScores] = useState<Record<string, number>>({});
  const [showGuide, setShowGuide] = useState(false);

  const currentModule = getModuleById(moduleId);
  const topics = getTopicsByModuleId(moduleId);

  useEffect(() => {
    const progress = getProgress();
    setCompletedTopics(progress.completedTopics);
    setQuizScores(progress.quizScores);
  }, []);

  if (!currentModule) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Module Not Found</h1>
          <Link href="/modules" className="text-primary-600 hover:underline">
            Return to Modules
          </Link>
        </div>
      </div>
    );
  }

  const completedCount = topics.filter((t) => completedTopics.includes(t.id)).length;
  const moduleMotivation = MODULE_MOTIVATIONS[currentModule.id] || {
    why: currentModule.description,
    impact: 'Comprehensive step in your AI & Quantum learning path.',
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button & Guide Trigger */}
        <div className="flex items-center justify-between mb-6">
          <Link
            href="/modules"
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Modules</span>
          </Link>

          <button
            onClick={() => setShowGuide(true)}
            className="inline-flex items-center space-x-1.5 text-primary-700 hover:text-primary-900 bg-primary-50 hover:bg-primary-100 border border-primary-200 px-3.5 py-1.5 rounded-lg text-xs font-semibold shadow-sm transition-all"
          >
            <Compass size={16} className="text-primary-600" />
            <span>Topic Component Guide</span>
          </button>
        </div>

        {/* Module Header */}
        <div className="bg-gradient-to-r from-primary-600 via-indigo-600 to-quantum-600 rounded-2xl p-8 mb-8 text-white shadow-xl">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-white/20 rounded-xl">
              <BookOpen size={28} className="text-white" />
            </div>
            <p className="text-sm font-semibold uppercase tracking-wider bg-white/20 px-3 py-0.5 rounded-full">
              Module {currentModule.number}
            </p>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">{currentModule.title}</h1>
          <p className="text-lg opacity-90 mb-6 max-w-3xl leading-relaxed">{currentModule.description}</p>
          
          <div className="bg-white/15 backdrop-blur-md rounded-xl p-4 border border-white/20">
            <div className="flex justify-between items-center mb-2 text-sm">
              <span className="font-semibold">Module Progress</span>
              <span className="font-bold">{completedCount} / {topics.length} Topics Completed</span>
            </div>
            <ProgressBar
              current={completedCount}
              total={topics.length}
              showPercentage={false}
              color="green"
            />
          </div>
        </div>

        {/* Why Master This Module? Motivation Banner */}
        <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 border-2 border-amber-200 rounded-2xl p-6 sm:p-8 mb-8 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-amber-500 text-white flex items-center justify-center">
                <Lightbulb size={18} />
              </div>
              <h2 className="text-xl font-bold text-gray-900">
                Why Should You Master {currentModule.title}?
              </h2>
            </div>
            <span className="text-xs font-bold uppercase tracking-wider bg-amber-200 text-amber-900 px-3 py-1 rounded-full">
              Core Motivation
            </span>
          </div>

          <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-4">
            {moduleMotivation.why}
          </p>

          <div className="flex items-center gap-2 text-xs sm:text-sm text-amber-900 font-medium bg-amber-100/70 p-3 rounded-xl border border-amber-200">
            <Sparkles size={16} className="text-amber-700 flex-shrink-0" />
            <span><strong>Industry & Research Impact:</strong> {moduleMotivation.impact}</span>
          </div>
        </div>

        {/* Topics List */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Topics in This Module</h2>
            <span className="text-sm font-semibold text-gray-500">
              {topics.length} lessons in recommended sequence
            </span>
          </div>
          
          {topics.length > 0 ? (
            <div className="space-y-4">
              {topics.map((topic) => (
                <TopicCard
                  key={topic.id}
                  topicId={topic.id}
                  topicNumber={`${currentModule.number}.${topic.number}`}
                  title={topic.title}
                  description={topic.description}
                  isCompleted={isTopicCompleted(topic.id)}
                  quizScore={getQuizScore(topic.id)}
                />
              ))}
            </div>
          ) : (
            <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-6 text-center">
              <p className="text-yellow-900 font-semibold mb-2">📚 Topics Coming Soon</p>
              <p className="text-yellow-800">
                This module is being developed. Check back soon for comprehensive learning content!
              </p>
            </div>
          )}
        </div>

        {/* Learning Tips */}
        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 shadow-sm">
          <h3 className="font-bold text-blue-900 mb-3 text-lg flex items-center gap-2">
            <Compass className="text-blue-600" size={20} />
            <span>Recommended Learning Strategy</span>
          </h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2 font-bold">•</span>
              <span><strong>Sequential Progression:</strong> Topics build progressively upon prior concepts; complete them in order.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2 font-bold">•</span>
              <span><strong>Interactive Labs:</strong> In quantum topics, spend time in the 3D Q-Sphere lab manipulating gates before moving to code.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2 font-bold">•</span>
              <span><strong>Run Code in Google Colab:</strong> Use the 1-click &quot;Copy for Google Colab&quot; button to execute the live Python experiments.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2 font-bold">•</span>
              <span><strong>Mastery Check:</strong> Complete the 5-question MCQ Learning Check for each topic before proceeding to the next.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Interactive Topic Guided Tour Modal */}
      <TopicGuidedTour
        isOpen={showGuide}
        onClose={() => setShowGuide(false)}
        topicTitle={currentModule.title}
        isQuantumTopic={currentModule.id.includes('quantum')}
      />
    </div>
  );
}
