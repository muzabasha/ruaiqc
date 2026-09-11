'use client';

import { useState } from 'react';
import { CheckCircle2, XCircle, RotateCcw } from 'lucide-react';
import { MCQ } from '@/lib/types';
import { getScoreInterpretation } from '@/lib/utils';
import { saveQuizScore } from '@/lib/progress';

interface MCQQuizProps {
  mcqs: MCQ[];
  topicId: string;
}

export default function MCQQuiz({ mcqs, topicId }: MCQQuizProps) {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleSelectAnswer = (mcqId: string, answerId: string) => {
    if (!submitted) {
      setSelectedAnswers({ ...selectedAnswers, [mcqId]: answerId });
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
    setShowResults(true);
    
    const score = calculateScore();
    saveQuizScore(topicId, score);
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setSubmitted(false);
    setShowResults(false);
  };

  const calculateScore = () => {
    let correct = 0;
    mcqs.forEach((mcq) => {
      if (selectedAnswers[mcq.id] === mcq.correctAnswer) {
        correct++;
      }
    });
    return correct;
  };

  const score = calculateScore();
  const interpretation = getScoreInterpretation(score, mcqs.length);

  const allAnswered = mcqs.every((mcq) => selectedAnswers[mcq.id]);

  return (
    <div className="my-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6 border-2 border-blue-200">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">
        📝 Learning Check
      </h3>
      <p className="text-gray-600 mb-6">
        Test your understanding with these questions. Remember, this is for learning, not examination!
      </p>

      {/* Questions */}
      <div className="space-y-6">
        {mcqs.map((mcq, index) => {
          const isCorrect = selectedAnswers[mcq.id] === mcq.correctAnswer;
          const isIncorrect = submitted && selectedAnswers[mcq.id] && !isCorrect;

          return (
            <div
              key={mcq.id}
              className="bg-white rounded-lg p-5 shadow-sm border border-gray-200"
            >
              <h4 className="font-semibold text-gray-900 mb-4">
                Question {index + 1}: {mcq.question}
              </h4>

              <div className="space-y-3">
                {mcq.options.map((option) => {
                  const isSelected = selectedAnswers[mcq.id] === option.id;
                  const isCorrectOption = option.id === mcq.correctAnswer;
                  const showCorrect = submitted && isCorrectOption;
                  const showIncorrect = submitted && isSelected && !isCorrectOption;

                  return (
                    <button
                      key={option.id}
                      onClick={() => handleSelectAnswer(mcq.id, option.id)}
                      disabled={submitted}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                        showCorrect
                          ? 'border-green-500 bg-green-50'
                          : showIncorrect
                          ? 'border-red-500 bg-red-50'
                          : isSelected
                          ? 'border-primary-500 bg-primary-50'
                          : 'border-gray-300 hover:border-primary-300 hover:bg-gray-50'
                      } ${submitted ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={showCorrect || showIncorrect ? 'font-medium' : ''}>
                          {option.text}
                        </span>
                        {showCorrect && (
                          <CheckCircle2 className="text-green-600 flex-shrink-0 ml-2" size={20} />
                        )}
                        {showIncorrect && (
                          <XCircle className="text-red-600 flex-shrink-0 ml-2" size={20} />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Feedback */}
              {submitted && (
                <div className={`mt-4 p-4 rounded-lg ${
                  isCorrect ? 'bg-green-100 border border-green-300' : 'bg-orange-100 border border-orange-300'
                }`}>
                  <h5 className={`font-bold mb-2 ${isCorrect ? 'text-green-800' : 'text-orange-800'}`}>
                    {isCorrect ? '✅ Excellent!' : '💡 Not quite'}
                  </h5>
                  <p className="text-gray-800">
                    {isCorrect ? mcq.explanation : mcq.incorrectFeedback}
                  </p>
                  {!isCorrect && (
                    <p className="text-gray-700 mt-2 text-sm">
                      <span className="font-semibold">The correct answer:</span>{' '}
                      {mcq.options.find(o => o.id === mcq.correctAnswer)?.text}
                    </p>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Submit/Reset Button */}
      <div className="mt-6 flex justify-center">
        {!submitted ? (
          <button
            onClick={handleSubmit}
            disabled={!allAnswered}
            className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
              allAnswered
                ? 'bg-primary-600 hover:bg-primary-700 text-white'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Submit Answers
          </button>
        ) : (
          <button
            onClick={handleReset}
            className="flex items-center space-x-2 px-8 py-3 rounded-lg font-semibold bg-gray-600 hover:bg-gray-700 text-white transition-colors"
          >
            <RotateCcw size={18} />
            <span>Try Again</span>
          </button>
        )}
      </div>

      {/* Results Summary */}
      {showResults && (
        <div className="mt-6 bg-white rounded-lg p-6 border-2 border-primary-300">
          <h4 className="text-xl font-bold text-gray-900 mb-4">
            Your Learning Check Results
          </h4>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Score:</span>
              <span className="font-bold text-2xl text-primary-600">
                {score}/{mcqs.length}
              </span>
            </div>
            <div className={`p-4 rounded-lg bg-gray-50 border-l-4 ${
              interpretation.level === 'excellent' || interpretation.level === 'very-good'
                ? 'border-green-500'
                : interpretation.level === 'good'
                ? 'border-blue-500'
                : 'border-orange-500'
            }`}>
              <p className={`font-semibold ${interpretation.color}`}>
                {interpretation.message}
              </p>
            </div>
            {score === mcqs.length && (
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <p className="text-green-800 font-semibold">
                  🎉 Perfect score! You've mastered this topic!
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
