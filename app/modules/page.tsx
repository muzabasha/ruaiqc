'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import ModuleCard from '@/components/ModuleCard';
import ProgressBar from '@/components/ProgressBar';
import { modules } from '@/content/modules';
import { getProgress, calculateOverallProgress, resetProgress } from '@/lib/progress';
import { RotateCcw, BookOpen } from 'lucide-react';

export default function ModulesPage() {
  const [progress, setProgress] = useState<Record<string, number>>({});
  const [overallProgress, setOverallProgress] = useState(0);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  useEffect(() => {
    const userProgress = getProgress();
    const moduleProgress: Record<string, number> = {};

    modules.forEach((module) => {
      const completedInModule = userProgress.completedTopics.filter((topicId) =>
        module.topics.includes(topicId)
      ).length;
      moduleProgress[module.id] = Math.round((completedInModule / module.totalTopics) * 100);
    });

    setProgress(moduleProgress);
    
    const totalTopics = modules.reduce((sum, m) => sum + m.totalTopics, 0);
    setOverallProgress(calculateOverallProgress(totalTopics));
  }, []);

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
      resetProgress();
      setProgress({});
      setOverallProgress(0);
      setShowResetConfirm(false);
      window.location.reload();
    }
  };

  const isModuleStarted = (moduleId: string) => progress[moduleId] > 0;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Learning Modules</h1>
              <p className="text-lg text-gray-600">
                Your journey through AI and Quantum Computing
              </p>
            </div>
            <button
              onClick={() => setShowResetConfirm(!showResetConfirm)}
              className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors px-4 py-2 border border-gray-300 rounded-lg hover:border-red-300"
              aria-label="Reset progress"
            >
              <RotateCcw size={18} />
              <span className="hidden sm:inline">Reset Progress</span>
            </button>
          </div>

          {showResetConfirm && (
            <div className="bg-red-50 border-2 border-red-300 rounded-lg p-4 mb-6">
              <p className="text-red-900 font-semibold mb-3">
                ⚠️ This will delete all your progress, quiz scores, and completed topics. Are you sure?
              </p>
              <div className="flex space-x-3">
                <button
                  onClick={handleReset}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold"
                >
                  Yes, Reset Everything
                </button>
                <button
                  onClick={() => setShowResetConfirm(false)}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg font-semibold"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          {/* Overall Progress */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <BookOpen className="text-primary-600" size={28} />
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Overall Progress</h2>
                  <p className="text-sm text-gray-600">
                    {modules.reduce((sum, m) => sum + m.totalTopics, 0)} topics across {modules.length} modules
                  </p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-primary-600">{overallProgress}%</div>
                <div className="text-sm text-gray-600">Complete</div>
              </div>
            </div>
            <ProgressBar
              current={overallProgress}
              total={100}
              showPercentage={false}
              color={overallProgress === 100 ? 'green' : 'primary'}
            />
          </div>
        </div>

        {/* Modules Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module) => (
            <ModuleCard
              key={module.id}
              module={module}
              progress={progress[module.id] || 0}
              isStarted={isModuleStarted(module.id)}
            />
          ))}
        </div>

        {/* Learning Path */}
        <div className="mt-12 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-8 border-2 border-blue-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            📚 Your Learning Journey
          </h2>
          <p className="text-center text-gray-700 mb-6">
            Progress through these modules sequentially for the best learning experience
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white rounded-lg p-4 border border-blue-200">
              <h3 className="font-bold text-blue-900 mb-2">🤖 AI Foundations</h3>
              <p className="text-gray-600">Modules 1-4: Learn AI, Machine Learning, Deep Learning, and Reinforcement Learning</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-purple-200">
              <h3 className="font-bold text-purple-900 mb-2">⚛️ Quantum Foundations</h3>
              <p className="text-gray-600">Modules 5-7: Master Quantum Computing, Circuits, Gates, and Algorithms</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-green-200">
              <h3 className="font-bold text-green-900 mb-2">🔬 Quantum + AI</h3>
              <p className="text-gray-600">Modules 8-9: Explore Quantum Machine Learning and hybrid systems</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
