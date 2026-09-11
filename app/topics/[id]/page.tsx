'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import EquationCard from '@/components/EquationCard';
import PythonHandsOn from '@/components/PythonHandsOn';
import MCQQuiz from '@/components/MCQQuiz';
import { getTopicById, getPreviousTopic, getNextTopic } from '@/content/topics';
import { getModuleById } from '@/content/modules';
import { markTopicComplete, isTopicCompleted } from '@/lib/progress';
import { ArrowLeft, ArrowRight, CheckCircle, Target, Lightbulb } from 'lucide-react';

export default function TopicPage() {
  const params = useParams();
  const router = useRouter();
  const topicId = params?.id as string;
  
  const [completed, setCompleted] = useState(false);

  const topic = getTopicById(topicId);
  const currentModule = topic ? getModuleById(topic.moduleId) : null;

  useEffect(() => {
    if (topic) {
      setCompleted(isTopicCompleted(topic.id));
    }
  }, [topic]);

  useEffect(() => {
    // Mark as complete when user reaches the end (scrolls past 80%)
    const handleScroll = () => {
      if (topic && !completed) {
        const scrollPercentage = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight;
        if (scrollPercentage > 0.8) {
          markTopicComplete(topic.id);
          setCompleted(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [topic, completed]);

  if (!topic || !currentModule) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Topic Not Found</h1>
          <Link href="/modules" className="text-primary-600 hover:underline">
            Return to Modules
          </Link>
        </div>
      </div>
    );
  }

  // Find previous and next topics in curriculum order
  const previousTopic = getPreviousTopic(topicId);
  const nextTopic = getNextTopic(topicId);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link
          href={`/modules/${currentModule.id}`}
          className="inline-flex items-center space-x-2 text-gray-600 hover:text-primary-600 mb-6 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to {currentModule.title}</span>
        </Link>

        {/* Topic Header */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8 border-2 border-primary-200">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <span className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold">
                Topic {currentModule.number}.{topic.number}
              </span>
              {completed && (
                <div className="flex items-center space-x-2 text-green-600">
                  <CheckCircle size={20} />
                  <span className="text-sm font-medium">Completed</span>
                </div>
              )}
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{topic.title}</h1>
          <p className="text-lg text-gray-700 mb-6">{topic.description}</p>
          
          {/* Learning Objectives */}
          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
            <div className="flex items-center space-x-2 mb-3">
              <Target className="text-blue-600" size={20} />
              <h3 className="font-semibold text-blue-900">Learning Objectives</h3>
            </div>
            <ul className="space-y-1">
              {topic.objectives.map((objective, index) => (
                <li key={index} className="flex items-start text-sm text-gray-700">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>{objective}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Story Section */}
        <section className="mb-8">
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-8 border-2 border-amber-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="text-3xl mr-3">📖</span>
              Let&apos;s Begin with a Story
            </h2>
            <div className="prose prose-lg max-w-none text-gray-800 whitespace-pre-line">
              {topic.story}
            </div>
          </div>
        </section>

        {/* Motivation Section */}
        <section className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-primary-500">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Lightbulb className="text-yellow-500 mr-3" size={28} />
              Why Should I Learn This?
            </h2>
            <div className="prose max-w-none text-gray-700 whitespace-pre-line">
              {topic.motivation}
            </div>
          </div>
        </section>

        {/* What Is It? Section */}
        <section className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What Is It?</h2>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm mr-3">
                  Simple Explanation
                </span>
              </h3>
              <p className="text-gray-700">{topic.concept.simple}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm mr-3">
                  Technical Explanation
                </span>
              </h3>
              <p className="text-gray-700">{topic.concept.technical}</p>
            </div>

            {/* Key Terms */}
            {topic.keyTerms && topic.keyTerms.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">📚 Key Terms</h3>
                <div className="grid gap-4">
                  {topic.keyTerms.map((term, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <h4 className="font-bold text-gray-900 mb-2">{term.term}</h4>
                      <p className="text-sm text-gray-700 mb-2">
                        <span className="font-semibold">Simple:</span> {term.simple}
                      </p>
                      <p className="text-sm text-gray-700">
                        <span className="font-semibold">Technical:</span> {term.technical}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Equations */}
        {topic.equations && topic.equations.map((equation, index) => (
          <EquationCard key={index} equation={equation} />
        ))}

        {/* How It Works */}
        {topic.howItWorks && topic.howItWorks.length > 0 && (
          <section className="mb-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">⚙️ How Does It Work?</h2>
              <div className="space-y-4">
                {topic.howItWorks.map((step) => (
                  <div key={step.number} className="flex items-start space-x-4">
                    <div className="bg-primary-600 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      {step.number}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1">{step.title}</h3>
                      <p className="text-gray-700">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Applications */}
        {topic.applications && topic.applications.length > 0 && (
          <section className="mb-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">🌍 Where Is It Used?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {topic.applications.map((app, index) => (
                  <div key={index} className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-5 border border-purple-200">
                    <h3 className="font-bold text-purple-900 mb-2">{app.title}</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <span className="font-semibold">Problem:</span> {app.problem}
                    </p>
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold">Solution:</span> {app.solution}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Activity */}
        {topic.activity && (
          <section className="mb-8">
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-lg p-8 border-2 border-green-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🎯 Try It Yourself</h2>
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">{topic.activity.question}</h3>
                {/* Activity implementation would go here - simplified for now */}
                <p className="text-gray-600 text-sm">Interactive activity component</p>
              </div>
            </div>
          </section>
        )}

        {/* Python Hands-On */}
        {topic.pythonHandsOn && (
          <PythonHandsOn activity={topic.pythonHandsOn} />
        )}

        {/* MCQ Quiz */}
        <MCQQuiz mcqs={topic.mcqs} topicId={topic.id} />

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t-2 border-gray-200">
          {previousTopic ? (
            <Link
              href={`/topics/${previousTopic.id}`}
              className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Previous: {previousTopic.title}</span>
            </Link>
          ) : (
            <div></div>
          )}

          {nextTopic ? (
            <Link
              href={`/topics/${nextTopic.id}`}
              className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors"
            >
              <span>Next: {nextTopic.title}</span>
              <ArrowRight size={20} />
            </Link>
          ) : (
            <Link
              href="/modules"
              className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors"
            >
              <span>Back to Modules</span>
              <ArrowRight size={20} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
