'use client';

import Link from 'next/link';
import { Menu, X, Home, BookOpen, GraduationCap, ExternalLink, Compass } from 'lucide-react';
import { useState } from 'react';
import TopicGuidedTour from './TopicGuidedTour';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showGuide, setShowGuide] = useState(false);

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-quantum-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">AQ</span>
                </div>
                <span className="font-bold text-xl text-gray-900 hidden sm:block">
                  AI & Quantum Learning
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Link
                href="/"
                className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 transition-colors font-medium"
              >
                <Home size={18} />
                <span>Home</span>
              </Link>
              <Link
                href="/modules"
                className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 transition-colors font-medium"
              >
                <BookOpen size={18} />
                <span>Modules</span>
              </Link>
              <button
                onClick={() => setShowGuide(true)}
                className="flex items-center space-x-1.5 text-primary-700 hover:text-primary-900 bg-primary-50 hover:bg-primary-100 border border-primary-200 px-3 py-1.5 rounded-lg transition-all font-medium text-sm shadow-sm"
              >
                <Compass size={16} className="text-primary-600" />
                <span>Interactive Guide</span>
              </button>
              <a
                href="https://scholar-sparkle-web.lovable.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 text-purple-700 hover:text-purple-900 bg-purple-50 hover:bg-purple-100 border border-purple-200 px-3 py-1.5 rounded-lg transition-all font-medium text-sm shadow-sm"
              >
                <GraduationCap size={16} />
                <span>Resource Person</span>
                <ExternalLink size={13} className="opacity-70" />
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 hover:text-primary-600 transition-colors p-2"
                aria-label="Toggle menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Home size={18} />
                  <span>Home</span>
                </Link>
                <Link
                  href="/modules"
                  className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <BookOpen size={18} />
                  <span>Modules</span>
                </Link>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setShowGuide(true);
                  }}
                  className="flex items-center space-x-2 text-primary-700 hover:text-primary-900 bg-primary-50 p-2 rounded-lg border border-primary-200 font-medium text-sm text-left"
                >
                  <Compass size={18} className="text-primary-600" />
                  <span>Interactive Guide</span>
                </button>
                <a
                  href="https://scholar-sparkle-web.lovable.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-purple-700 hover:text-purple-900 bg-purple-50 p-2 rounded-lg border border-purple-200 font-medium text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <GraduationCap size={18} />
                  <span>Resource Person</span>
                  <ExternalLink size={14} className="ml-auto opacity-70" />
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Global Interactive Guide Modal */}
      <TopicGuidedTour
        isOpen={showGuide}
        onClose={() => setShowGuide(false)}
        topicTitle="Curriculum Overview"
      />
    </>
  );
}
