'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import EquationCard from '@/components/EquationCard';
import MathRenderer from '@/components/MathRenderer';
import PythonHandsOn from '@/components/PythonHandsOn';
import MCQQuiz from '@/components/MCQQuiz';
import FunLearningCard from '@/components/FunLearningCard';
import QSphereVisualizer from '@/components/QSphereVisualizer';
import LearningResourceCard from '@/components/LearningResourceCard';
import TopicGuidedTour from '@/components/TopicGuidedTour';
import { getTopicById, getPreviousTopic, getNextTopic } from '@/content/topics';
import { getModuleById } from '@/content/modules';
import { getTopicLearningResource } from '@/lib/resources';
import { markTopicComplete, isTopicCompleted } from '@/lib/progress';
import { ArrowLeft, ArrowRight, CheckCircle, Target, Lightbulb, Compass, Sparkles, X, Info } from 'lucide-react';

export default function TopicPage() {
  const params = useParams();
  const router = useRouter();
  const topicId = params?.id as string;
  
  const [completed, setCompleted] = useState(false);
  const [showGuidedTour, setShowGuidedTour] = useState(false);
  const [showBanner, setShowBanner] = useState(true);

  const topic = getTopicById(topicId);
  const currentModule = topic ? getModuleById(topic.moduleId) : null;

  useEffect(() => {
    if (topic) {
      setCompleted(isTopicCompleted(topic.id));
    }
    if (typeof window !== 'undefined') {
      const bannerDismissed = localStorage.getItem('aq_dismiss_guide_banner');
      if (bannerDismissed === 'true') {
        setShowBanner(false);
      }
    }
  }, [topic]);

  const dismissBanner = () => {
    setShowBanner(false);
    if (typeof window !== 'undefined') {
      localStorage.setItem('aq_dismiss_guide_banner', 'true');
    }
  };

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

  // Dynamic contextual title for Motivation section
  const isTitleAskingWhy = topic.title.toLowerCase().startsWith('why');
  const motivationTitle = isTitleAskingWhy
    ? `Why Does Mastering This Matter in Practice?`
    : `Why Should You Learn ${topic.title}?`;

  // Strip redundant leading '**Why should you learn...**' or similar if present in markdown
  const cleanedMotivation = topic.motivation.replace(
    /^\s*\*\*(Why should you learn|Why understand|Why learn)[^*?]+\?\*\*\s*\n*/i,
    ''
  );

  const isQuantum =
    topic.moduleId.includes('quantum') || topic.id.includes('quantum') || topic.id === 'qubit';

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* First-Time User Interactive Guide Callout Banner */}
        {showBanner && (
          <div className="mb-6 bg-gradient-to-r from-primary-600 via-indigo-600 to-quantum-600 rounded-xl p-4 text-white shadow-lg flex items-center justify-between gap-4 animate-fadeIn">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-white/20 rounded-lg flex-shrink-0">
                <Compass className="text-white animate-spin-slow" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-sm sm:text-base flex items-center gap-1.5">
                  <span>First time studying this topic?</span>
                  <Sparkles size={16} className="text-amber-300" />
                </h4>
                <p className="text-xs sm:text-sm text-white/90">
                  Launch the interactive walkthrough to discover each component, including the 3D Q-Sphere Lab & Python in Colab.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2 flex-shrink-0">
              <button
                onClick={() => setShowGuidedTour(true)}
                className="bg-white text-primary-700 hover:bg-gray-100 font-bold px-3.5 py-1.5 rounded-lg text-xs sm:text-sm shadow transition-all"
              >
                Launch Guide
              </button>
              <button
                onClick={dismissBanner}
                className="text-white/80 hover:text-white p-1.5 rounded-lg hover:bg-white/10"
                aria-label="Dismiss guide banner"
              >
                <X size={18} />
              </button>
            </div>
          </div>
        )}

        {/* Back Button */}
        <div className="flex items-center justify-between mb-6">
          <Link
            href={`/modules/${currentModule.id}`}
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to {currentModule.title}</span>
          </Link>

          <button
            onClick={() => setShowGuidedTour(true)}
            className="inline-flex items-center space-x-1.5 text-primary-700 hover:text-primary-900 bg-primary-50 hover:bg-primary-100 border border-primary-200 px-3 py-1.5 rounded-lg text-xs font-semibold shadow-sm transition-all"
          >
            <Compass size={16} className="text-primary-600" />
            <span>Topic Component Guide</span>
          </button>
        </div>

        {/* Topic Header */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8 border-2 border-primary-200">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
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

            <button
              onClick={() => setShowGuidedTour(true)}
              className="inline-flex items-center space-x-1 text-xs font-semibold bg-indigo-50 text-indigo-700 hover:bg-indigo-100 px-3 py-1 rounded-md border border-indigo-200 transition-colors"
            >
              <Info size={14} />
              <span>How to use this lesson?</span>
            </button>
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
        <section id="section-story" className="mb-8 scroll-mt-20">
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-8 border-2 border-amber-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="text-3xl mr-3">📖</span>
              Let&apos;s Begin with a Story
            </h2>
            <div className="prose prose-lg max-w-none text-gray-800 whitespace-pre-line">
              <MathRenderer content={topic.story} />
            </div>
          </div>
        </section>

        {/* Motivation Section */}
        <section id="section-motivation" className="mb-8 scroll-mt-20">
          <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-amber-500">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <Lightbulb className="text-amber-500 mr-3 flex-shrink-0" size={28} />
                <span>{motivationTitle}</span>
              </h2>
              <span className="text-xs font-semibold uppercase tracking-wider bg-amber-100 text-amber-800 px-3 py-1 rounded-full">
                🎯 Practical & Engineering Stakes
              </span>
            </div>
            <div className="prose max-w-none text-gray-700 whitespace-pre-line leading-relaxed">
              <MathRenderer content={cleanedMotivation} />
            </div>
          </div>
        </section>

        {/* Fun Learning Zone (Zero Prerequisites) */}
        {topic.funLearning && (
          <div id="section-fun" className="scroll-mt-20">
            <FunLearningCard funLearning={topic.funLearning} />
          </div>
        )}

        {/* What Is It? Section */}
        <section id="section-concept" className="mb-8 scroll-mt-20">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What Is It?</h2>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm mr-3">
                  Simple Explanation
                </span>
              </h3>
              <MathRenderer content={topic.concept.simple} className="text-gray-700 leading-relaxed" />
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm mr-3">
                  Technical Explanation
                </span>
              </h3>
              <MathRenderer content={topic.concept.technical} className="text-gray-700 leading-relaxed" />
            </div>

            {/* Key Terms */}
            {topic.keyTerms && topic.keyTerms.length > 0 && (
              <div id="section-key-terms" className="scroll-mt-20">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">📚 Key Terms</h3>
                <div className="grid gap-4">
                  {topic.keyTerms.map((term, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <h4 className="font-bold text-gray-900 mb-2">
                        <MathRenderer content={term.term} inline />
                      </h4>
                      <div className="text-sm text-gray-700 mb-2">
                        <span className="font-semibold">Simple:</span>{' '}
                        <MathRenderer content={term.simple} inline />
                      </div>
                      <div className="text-sm text-gray-700">
                        <span className="font-semibold">Technical:</span>{' '}
                        <MathRenderer content={term.technical} inline />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Interactive Q-Sphere View & Quantum State Laboratory */}
        {isQuantum && (
          <section id="section-qsphere" className="mb-8 scroll-mt-20">
            <QSphereVisualizer
              initialState={
                topic.id === 'superposition'
                  ? '+'
                  : topic.id === 'quantum-interference'
                  ? '+i'
                  : topic.id === 'measurement'
                  ? '+'
                  : '0'
              }
              title={`Q-Sphere Lab: ${topic.title}`}
              subtitle={`Interactive 3D state vector exploration, unitary transformation gates, and Born rule collapse for Topic ${currentModule.number}.${topic.number}`}
            />
          </section>
        )}

        {/* Equations */}
        {topic.equations && topic.equations.length > 0 && (
          <div id="section-equations" className="scroll-mt-20">
            {topic.equations.map((equation, index) => (
              <EquationCard key={index} equation={equation} />
            ))}
          </div>
        )}

        {/* How It Works */}
        {topic.howItWorks && topic.howItWorks.length > 0 && (
          <section id="section-how-it-works" className="mb-8 scroll-mt-20">
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
          <section id="section-applications" className="mb-8 scroll-mt-20">
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
          <section id="section-activity" className="mb-8 scroll-mt-20">
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-lg p-8 border-2 border-green-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🎯 Try It Yourself</h2>
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">{topic.activity.question}</h3>
                <p className="text-gray-600 text-sm">Interactive activity component</p>
              </div>
            </div>
          </section>
        )}

        {/* Python Hands-On */}
        {topic.pythonHandsOn && (
          <div id="section-python" className="scroll-mt-20">
            <PythonHandsOn activity={topic.pythonHandsOn} />
          </div>
        )}

        {/* Learning Resource: Presentation Slide Deck (PDF) */}
        <div id="section-resources" className="scroll-mt-20">
          {(() => {
            const learningData = topic.learningResource
              ? { primary: topic.learningResource }
              : getTopicLearningResource(topic.id, topic.moduleId);
            return (
              <LearningResourceCard
                resource={learningData.primary}
                secondaryResource={learningData.secondary}
              />
            );
          })()}
        </div>

        {/* MCQ Quiz */}
        <div id="section-quiz" className="scroll-mt-20">
          <MCQQuiz mcqs={topic.mcqs} topicId={topic.id} />
        </div>

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

      {/* Interactive Topic Guided Tour Modal */}
      <TopicGuidedTour
        isOpen={showGuidedTour}
        onClose={() => setShowGuidedTour(false)}
        topicTitle={topic.title}
        isQuantumTopic={isQuantum}
      />
    </div>
  );
}

