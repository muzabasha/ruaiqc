'use client';

import Link from 'next/link';
import { BookOpen, CheckCircle } from 'lucide-react';
import { Module } from '@/lib/types';
import ProgressBar from './ProgressBar';

interface ModuleCardProps {
  module: Module;
  progress: number;
  isStarted: boolean;
}

export default function ModuleCard({ module, progress, isStarted }: ModuleCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 overflow-hidden">
      <div className="bg-gradient-to-r from-primary-500 to-quantum-500 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-white bg-opacity-20 p-2 rounded-lg">
              <BookOpen className="text-white" size={24} />
            </div>
            <div>
              <p className="text-white text-sm font-medium opacity-90">
                Module {module.number}
              </p>
              <h3 className="text-white text-xl font-bold">{module.title}</h3>
            </div>
          </div>
          {progress === 100 && (
            <CheckCircle className="text-white" size={28} />
          )}
        </div>
      </div>

      <div className="p-5">
        <p className="text-gray-700 mb-4 line-clamp-3">{module.description}</p>

        <div className="mb-4">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>{module.totalTopics} Topics</span>
            <span>{progress === 100 ? 'Completed' : isStarted ? 'In Progress' : 'Not Started'}</span>
          </div>
          <ProgressBar
            current={progress}
            total={100}
            showPercentage={false}
            color={progress === 100 ? 'green' : 'primary'}
          />
        </div>

        <Link
          href={`/modules/${module.id}`}
          className="block w-full text-center bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
        >
          {progress > 0 ? 'Continue Learning' : 'Start Module'}
        </Link>
      </div>
    </div>
  );
}
