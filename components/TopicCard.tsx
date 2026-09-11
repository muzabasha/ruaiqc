'use client';

import Link from 'next/link';
import { CheckCircle, PlayCircle, Award } from 'lucide-react';

interface TopicCardProps {
  topicId: string;
  topicNumber: string;
  title: string;
  description: string;
  isCompleted: boolean;
  quizScore?: number;
}

export default function TopicCard({
  topicId,
  topicNumber,
  title,
  description,
  isCompleted,
  quizScore,
}: TopicCardProps) {
  return (
    <Link href={`/topics/${topicId}`}>
      <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all border border-gray-200 p-5 cursor-pointer group">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-primary-600 font-semibold text-sm">
                Topic {topicNumber}
              </span>
              {isCompleted && (
                <CheckCircle size={18} className="text-green-500" />
              )}
            </div>
            <h4 className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors mb-2">
              {title}
            </h4>
            <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
          </div>
          <div className="ml-4 flex-shrink-0">
            {isCompleted ? (
              <div className="bg-green-100 text-green-700 rounded-full p-3">
                <CheckCircle size={24} />
              </div>
            ) : (
              <div className="bg-primary-100 text-primary-700 rounded-full p-3 group-hover:bg-primary-200 transition-colors">
                <PlayCircle size={24} />
              </div>
            )}
          </div>
        </div>

        {quizScore !== undefined && (
          <div className="flex items-center space-x-2 mt-3 pt-3 border-t border-gray-200">
            <Award size={16} className="text-yellow-600" />
            <span className="text-sm text-gray-700">
              Quiz Score: <span className="font-semibold">{quizScore}/5</span>
            </span>
          </div>
        )}

        <div className="mt-4">
          <span className="text-primary-600 text-sm font-medium group-hover:underline">
            {isCompleted ? 'Review Topic →' : 'Start Learning →'}
          </span>
        </div>
      </div>
    </Link>
  );
}
