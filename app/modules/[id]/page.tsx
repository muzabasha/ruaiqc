'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import TopicCard from '@/components/TopicCard';
import ProgressBar from '@/components/ProgressBar';
import { getModuleById } from '@/content/modules';
import { getTopicsByModuleId } from '@/content/topics';
import { getProgress, isTopicCompleted, getQuizScore } from '@/lib/progress';
import { ArrowLeft, BookOpen } from 'lucide-react';

export default function ModulePage() {
  const params = useParams();
  const moduleId = params?.id as string;
  
  const [completedTopics, setCompletedTopics] = useState<string[]>([]);
  const [quizScores, setQuizScores] = useState<Record<string, number>>({});

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
  const progressPercentage = Math.round((completedCount / topics.length) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link
          href="/modules"
          className="inline-flex items-center space-x-2 text-gray-600 hover:text-primary-600 mb-6 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to Modules</span>
        </Link>

        {/* Module Header */}
        <div className="bg-gradient-to-r from-primary-500 to-quantum-500 rounded-lg p-8 mb-8 text-white shadow-lg">
          <div className="flex items-center space-x-3 mb-4">
            <BookOpen size={32} />
            <p className="text-lg font-medium opacity-90">Module {currentModule.number}</p>
          </div>
          <h1 className="text-4xl font-bold mb-4">{currentModule.title}</h1>
          <p className="text-lg opacity-90 mb-6">{currentModule.description}</p>
          
          <div className="bg-white bg-opacity-20 rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">Your Progress</span>
              <span className="font-bold">{completedCount} / {topics.length} Topics</span>
            </div>
            <ProgressBar
              current={completedCount}
              total={topics.length}
              showPercentage={false}
              color="green"
            />
          </div>
        </div>

        {/* Topics List */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Topics in This Module</h2>
          
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
        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
          <h3 className="font-bold text-blue-900 mb-3">💡 Learning Tips</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Complete topics in order for the best learning experience</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Take your time with each concept — understanding is more important than speed</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Run the Python code examples in Google Colab to reinforce learning</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Review topics if you score less than 4/5 on the quizzes</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
