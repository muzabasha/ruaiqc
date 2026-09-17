'use client';

import React, { useState } from 'react';
import { FileText, ExternalLink, Download, Eye, EyeOff, BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';
import { LearningResource } from '@/lib/types';

interface LearningResourceCardProps {
  resource: LearningResource;
  secondaryResource?: LearningResource;
}

export default function LearningResourceCard({ resource, secondaryResource }: LearningResourceCardProps) {
  const [selectedResource, setSelectedResource] = useState<LearningResource>(resource);
  const [isViewerOpen, setIsViewerOpen] = useState<boolean>(false);

  return (
    <section className="mb-8 font-sans">
      <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded-2xl border-2 border-indigo-500/40 p-6 sm:p-8 shadow-xl text-white relative overflow-hidden">
        {/* Background glow accent */}
        <div className="absolute -top-24 -right-24 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-indigo-800/60">
          <div className="flex items-start space-x-3.5">
            <div className="p-3 bg-gradient-to-tr from-rose-500 to-red-600 rounded-xl shadow-lg shadow-rose-500/30 flex-shrink-0">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs bg-rose-500/20 text-rose-300 border border-rose-500/30 font-mono px-2.5 py-0.5 rounded-full uppercase tracking-wider font-semibold">
                  Course Learning Resource • Slide Deck
                </span>
                {selectedResource.lessonNumber && (
                  <span className="text-xs bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-mono px-2.5 py-0.5 rounded-full">
                    Lesson {selectedResource.lessonNumber}
                  </span>
                )}
                {selectedResource.pages && (
                  <span className="text-xs bg-slate-800 text-slate-300 font-mono px-2 py-0.5 rounded border border-slate-700">
                    {selectedResource.pages} Slides
                  </span>
                )}
              </div>
              <h3 className="text-2xl font-bold text-white mt-1.5 tracking-tight">
                {selectedResource.title}
              </h3>
              <p className="text-slate-300 text-sm mt-1 max-w-2xl leading-relaxed">
                {selectedResource.description}
              </p>
              <div className="flex items-center space-x-2 text-xs text-slate-400 mt-2 font-mono">
                <span>Author: {selectedResource.author || 'Dr. Syed Muzamil Basha (REVA University)'}</span>
                <span>•</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> FDP Approved Curriculum
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-2.5 pt-2 lg:pt-0">
            {/* Toggle Inline PDF Viewer */}
            <button
              onClick={() => setIsViewerOpen(!isViewerOpen)}
              className={`px-4 py-2.5 rounded-xl font-semibold text-xs flex items-center space-x-2 transition-all shadow-md ${
                isViewerOpen
                  ? 'bg-rose-600 hover:bg-rose-700 text-white shadow-rose-600/30'
                  : 'bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-indigo-500/30'
              }`}
            >
              {isViewerOpen ? (
                <>
                  <EyeOff className="w-4 h-4" />
                  <span>Hide Slides</span>
                </>
              ) : (
                <>
                  <Eye className="w-4 h-4" />
                  <span>View Slides Here</span>
                </>
              )}
            </button>

            {/* Open in New Window */}
            <a
              href={selectedResource.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl font-semibold text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 flex items-center space-x-2 transition-colors shadow-sm"
              title="Open presentation PDF in new tab"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Open in New Tab</span>
            </a>

            {/* Download PDF */}
            <a
              href={selectedResource.pdfUrl}
              download
              className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors shadow-sm"
              title="Download presentation PDF"
            >
              <Download className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Secondary Presentation Switcher (if topic has foundational + specific deck) */}
        {secondaryResource && (
          <div className="flex items-center space-x-2 pt-4 pb-1 text-xs font-mono">
            <span className="text-slate-400">Available Slide Decks:</span>
            <button
              onClick={() => setSelectedResource(resource)}
              className={`px-3 py-1 rounded-lg border transition-all ${
                selectedResource.pdfUrl === resource.pdfUrl
                  ? 'bg-indigo-600 text-white border-indigo-400 font-bold'
                  : 'bg-slate-800/80 text-slate-300 border-slate-700 hover:bg-slate-700'
              }`}
            >
              {resource.title.split(':')[0]}
            </button>
            <button
              onClick={() => setSelectedResource(secondaryResource)}
              className={`px-3 py-1 rounded-lg border transition-all ${
                selectedResource.pdfUrl === secondaryResource.pdfUrl
                  ? 'bg-indigo-600 text-white border-indigo-400 font-bold'
                  : 'bg-slate-800/80 text-slate-300 border-slate-700 hover:bg-slate-700'
              }`}
            >
              {secondaryResource.title.split(':')[0]}
            </button>
          </div>
        )}

        {/* Embedded Interactive PDF Viewer */}
        {isViewerOpen && (
          <div className="mt-6 pt-6 border-t border-indigo-900/60 animate-in fade-in duration-300">
            <div className="flex items-center justify-between mb-3 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-cyan-300 font-medium">
                <BookOpen className="w-4 h-4" /> Viewing: {selectedResource.title}
              </span>
              <span className="hidden sm:inline">Use PDF controls to zoom, jump slides, or view full-screen</span>
            </div>
            <div className="w-full h-[650px] bg-slate-950 rounded-xl border border-indigo-800/80 overflow-hidden shadow-2xl">
              <iframe
                src={`${selectedResource.pdfUrl}#toolbar=1&navpanes=1&scrollbar=1`}
                className="w-full h-full border-0"
                title={selectedResource.title}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
