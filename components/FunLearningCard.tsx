'use client';

import React from 'react';
import { Sparkles, Brain, Compass, Lightbulb } from 'lucide-react';
import { FunLearning } from '@/lib/types';
import MathRenderer from './MathRenderer';
import AnalogyVisual from './AnalogyVisual';
import InteractiveThoughtExperiment from './InteractiveThoughtExperiment';

interface FunLearningCardProps {
  funLearning?: FunLearning;
  topicId?: string;
}

export default function FunLearningCard({ funLearning, topicId }: FunLearningCardProps) {
  if (!funLearning) return null;

  return (
    <section className="mb-8">
      <div className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 rounded-2xl p-6 sm:p-8 border-2 border-amber-300 shadow-md">
        {/* Top ribbon banner */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-amber-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shadow-sm">
              <Sparkles size={22} className="animate-pulse" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-amber-950 tracking-tight flex items-center gap-2">
                🎮 Fun Learning Zone
              </h2>
              <p className="text-xs sm:text-sm font-medium text-amber-800">
                Grasp complex quantum concepts visually with zero prior physics or math knowledge!
              </p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-200/80 text-amber-900 border border-amber-300">
            <Brain size={14} /> Zero Prerequisites
          </span>
        </div>

        {/* 1. Visual Concept Storyboard (Understand at a glance without reading) */}
        <AnalogyVisual
          topicId={topicId}
          analogyTitle={funLearning.analogyTitle}
          analogyImage={funLearning.analogyImage}
        />

        {/* 2. The Everyday Analogy Narrative */}
        <div className="mb-6 bg-white/90 backdrop-blur-sm rounded-xl p-5 border border-amber-200/70 shadow-sm">
          <div className="flex items-center space-x-2 text-amber-900 font-bold text-lg mb-2">
            <Compass size={20} className="text-amber-600" />
            <h3>Everyday Analogy: {funLearning.analogyTitle}</h3>
          </div>
          <div className="text-gray-700 leading-relaxed text-sm sm:text-base space-y-2">
            <MathRenderer content={funLearning.storyAnalogy} />
          </div>
        </div>

        {/* 3. Interactive Mental Thought Experiment */}
        <div className="mb-6">
          <InteractiveThoughtExperiment
            topicId={topicId}
            thoughtExperimentText={funLearning.interactiveThoughtExperiment}
          />
        </div>

        {/* 3. The "Aha!" Moment */}
        <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-xl p-4 sm:p-5 shadow-sm flex items-start space-x-3">
          <Lightbulb size={24} className="flex-shrink-0 text-yellow-300 mt-0.5" />
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-yellow-200 mb-1">
              ✨ The &quot;Aha!&quot; Moment
            </h4>
            <div className="text-sm sm:text-base font-medium text-white leading-snug">
              <MathRenderer content={funLearning.takeaway} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
