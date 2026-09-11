'use client';

import { ExternalLink, Code } from 'lucide-react';
import CodeBlock from './CodeBlock';
import { PythonActivity } from '@/lib/types';

interface PythonHandsOnProps {
  activity: PythonActivity;
}

export default function PythonHandsOn({ activity }: PythonHandsOnProps) {
  const fullCode = [
    ...activity.imports.map(i => i.code),
    '',
    ...activity.code.map(c => c.code),
  ].join('\n');

  return (
    <div className="my-8 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-6 border-2 border-green-200">
      <div className="flex items-center space-x-2 mb-4">
        <Code size={28} className="text-green-600" />
        <h3 className="text-2xl font-bold text-gray-900">
          🐍 Python Hands-On
        </h3>
      </div>

      <p className="text-gray-700 mb-6">{activity.description}</p>

      {/* Step 1: Install Packages */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
          <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-2 text-sm">
            1
          </span>
          Install Required Packages
        </h4>
        <p className="text-gray-600 mb-3">
          Run this command to install the required Python packages:
        </p>
        <CodeBlock
          code={activity.installCommand}
          language="bash"
          showLineNumbers={false}
          title="Installation Command"
        />
        <div className="mt-2 text-sm text-gray-600">
          <span className="font-semibold">Packages:</span>{' '}
          {activity.packages.join(', ')}
        </div>
      </div>

      {/* Step 2: Import Packages */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
          <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-2 text-sm">
            2
          </span>
          Import Packages
        </h4>
        <CodeBlock
          code={activity.imports.map(i => i.code).join('\n')}
          language="python"
          title="Imports"
        />
        <div className="mt-4 space-y-2">
          {activity.imports.map((imp, index) => (
            <div key={index} className="bg-white rounded-lg p-3 border border-gray-200">
              <p className="text-sm text-gray-700">
                <span className="font-mono text-sm bg-gray-100 px-2 py-1 rounded">
                  {imp.code}
                </span>
                {' → '}
                <span>{imp.explanation}</span>
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Step 3: Build the Demonstration */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
          <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-2 text-sm">
            3
          </span>
          Build the Demonstration
        </h4>
        <CodeBlock
          code={activity.code.map(c => c.code).join('\n')}
          language="python"
          title="Complete Code"
        />
        <div className="mt-4 space-y-2">
          <h5 className="font-semibold text-gray-800">Code Explanation:</h5>
          {activity.code.map((line, index) => (
            <div key={index} className="bg-white rounded-lg p-3 border border-gray-200">
              <p className="text-sm font-mono bg-gray-100 px-2 py-1 rounded mb-2">
                {line.code}
              </p>
              <p className="text-sm text-gray-700">{line.explanation}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Complete Code for Copy */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold text-gray-900 mb-3">
          📋 Complete Code (Ready to Copy)
        </h4>
        <CodeBlock code={fullCode} language="python" title="Complete Python Code" />
      </div>

      {/* Google Colab Instructions */}
      <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-4 mb-8">
        <div className="flex items-start space-x-3">
          <ExternalLink size={24} className="text-yellow-700 flex-shrink-0 mt-1" />
          <div>
            <h5 className="font-semibold text-yellow-900 mb-2">
              How to Run in Google Colab
            </h5>
            <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
              {activity.colabInstructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>
            <a
              href="https://colab.research.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 mt-3 text-blue-600 hover:text-blue-700 font-medium text-sm"
            >
              <span>Open Google Colab</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Execution Flow */}
      {activity.executionFlow && activity.executionFlow.length > 0 && (
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-gray-900 mb-3">
            🔄 Execution Flow
          </h4>
          <div className="space-y-3">
            {activity.executionFlow.map((step, index) => (
              <div key={step.number} className="flex items-start space-x-3">
                <div className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-semibold">
                  {step.number}
                </div>
                <div className="flex-1 bg-white rounded-lg p-3 border border-gray-200">
                  <h6 className="font-semibold text-gray-900">{step.title}</h6>
                  <p className="text-sm text-gray-700 mt-1">{step.description}</p>
                </div>
                {index < activity.executionFlow.length - 1 && (
                  <div className="text-2xl text-gray-400">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Input/Output */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <h5 className="font-semibold text-gray-900 mb-2">📥 Input</h5>
          <p className="text-sm text-gray-700">{activity.input}</p>
        </div>
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <h5 className="font-semibold text-gray-900 mb-2">📤 Output</h5>
          <p className="text-sm text-gray-700">{activity.output}</p>
        </div>
      </div>

      {/* Interpretation */}
      <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-5">
        <h5 className="font-semibold text-blue-900 mb-2">
          💡 What Does This Mean?
        </h5>
        <p className="text-gray-800">{activity.interpretation}</p>
      </div>
    </div>
  );
}
