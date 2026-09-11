'use client';

import { useState } from 'react';
import { ExternalLink, Code, Copy, Check, Terminal, Sparkles } from 'lucide-react';
import CodeBlock from './CodeBlock';
import { PythonActivity } from '@/lib/types';
import { copyToClipboard } from '@/lib/utils';

interface PythonHandsOnProps {
  activity: PythonActivity;
}

export default function PythonHandsOn({ activity }: PythonHandsOnProps) {
  const [colabCopied, setColabCopied] = useState(false);
  const [pythonCopied, setPythonCopied] = useState(false);

  // Format pip install command specifically for Google Colab (ensures leading '!' is present)
  const colabInstallCommand = activity.installCommand.trim().startsWith('!')
    ? activity.installCommand.trim()
    : `!${activity.installCommand.trim()}`;

  // Complete clean python script (no shell prefix)
  const fullPythonCode = [
    '# ' + activity.title,
    '# ' + activity.description,
    '',
    '# 1. Imports',
    ...activity.imports.map((i) => i.code),
    '',
    '# 2. Execution Code',
    ...activity.code.map((c) => c.code),
  ].join('\n');

  // Complete Google Colab ready script (with !pip install at top)
  const colabReadyScript = [
    '# =========================================================',
    '# ' + activity.title,
    '# Prepared for Google Colab (Run with Shift + Enter)',
    '# =========================================================',
    '',
    '# Step 1: Install required packages',
    colabInstallCommand,
    '',
    '# Step 2: Import libraries',
    ...activity.imports.map((i) => i.code),
    '',
    '# Step 3: Run Demonstration',
    ...activity.code.map((c) => c.code),
  ].join('\n');

  const handleCopyColab = async () => {
    const success = await copyToClipboard(colabReadyScript);
    if (success) {
      setColabCopied(true);
      setPythonCopied(false);
      setTimeout(() => setColabCopied(false), 3000);
    }
  };

  const handleCopyPython = async () => {
    const success = await copyToClipboard(fullPythonCode);
    if (success) {
      setPythonCopied(true);
      setColabCopied(false);
      setTimeout(() => setPythonCopied(false), 3000);
    }
  };

  return (
    <div className="my-8 bg-gradient-to-br from-green-50 via-emerald-50 to-blue-50 rounded-xl p-6 sm:p-8 border-2 border-green-300 shadow-sm">
      {/* Header & Quick Action Buttons */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-green-200">
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <Code size={28} className="text-green-700" />
            <h3 className="text-2xl font-bold text-gray-900">
              🐍 Python Hands-On: {activity.title}
            </h3>
          </div>
          <p className="text-gray-700">{activity.description}</p>
        </div>

        {/* Colab One-Click CTA */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={handleCopyColab}
            id="btn-copy-colab-top"
            className="flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-4 py-2.5 rounded-lg font-semibold shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            title="Copy entire code with !pip install for Google Colab"
          >
            {colabCopied ? (
              <>
                <Check size={18} className="text-white" />
                <span>Copied for Colab!</span>
              </>
            ) : (
              <>
                <Sparkles size={18} />
                <span>Copy for Google Colab</span>
              </>
            )}
          </button>

          <a
            href="https://colab.research.google.com/#create=true"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1.5 bg-white border-2 border-amber-400 hover:bg-amber-50 text-amber-900 px-3.5 py-2 rounded-lg font-semibold text-sm shadow-sm transition-colors"
            title="Open a blank notebook in Google Colab"
          >
            <span>Open Colab</span>
            <ExternalLink size={15} />
          </a>
        </div>
      </div>

      {/* Copied Feedback Toast Alert */}
      {colabCopied && (
        <div className="mb-6 p-4 bg-green-600 text-white rounded-lg shadow-md flex items-center justify-between animate-fade-in">
          <div className="flex items-center space-x-2">
            <Check size={20} />
            <span className="font-semibold">
              ✓ Ready for Google Colab! Press Ctrl+V (or Cmd+V) in Colab and hit Shift+Enter to run.
            </span>
          </div>
          <span className="text-xs bg-green-700 px-2 py-1 rounded">Colab Ready</span>
        </div>
      )}

      {pythonCopied && (
        <div className="mb-6 p-4 bg-blue-600 text-white rounded-lg shadow-md flex items-center space-x-2">
          <Check size={20} />
          <span className="font-semibold">
            ✓ Python script copied to clipboard without shell commands!
          </span>
        </div>
      )}

      {/* Step 1: Install Packages */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
          <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-2 text-sm font-bold shadow-sm">
            1
          </span>
          Install Required Packages
        </h4>
        <p className="text-gray-600 mb-3">
          For Google Colab or Jupyter notebooks, run this shell command to install the required dependencies:
        </p>
        <CodeBlock
          code={colabInstallCommand}
          language="bash"
          showLineNumbers={false}
          title="Terminal / Notebook Install Command"
        />
        <div className="mt-2 text-sm text-gray-600 flex items-center space-x-2">
          <span className="font-semibold">Packages:</span>
          <div className="flex flex-wrap gap-1">
            {activity.packages.map((pkg, idx) => (
              <span
                key={idx}
                className="bg-green-100 text-green-800 text-xs font-mono px-2 py-0.5 rounded border border-green-200"
              >
                {pkg}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Step 2: Import Packages */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
          <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-2 text-sm font-bold shadow-sm">
            2
          </span>
          Import Libraries
        </h4>
        <CodeBlock
          code={activity.imports.map((i) => i.code).join('\n')}
          language="python"
          title="Import Statements"
        />
        <div className="mt-4 space-y-2">
          {activity.imports.map((imp, index) => (
            <div key={index} className="bg-white rounded-lg p-3 border border-gray-200 shadow-sm">
              <p className="text-sm text-gray-700">
                <span className="font-mono text-sm bg-gray-100 text-green-900 px-2 py-1 rounded font-semibold">
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
          <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-2 text-sm font-bold shadow-sm">
            3
          </span>
          Demonstration Code & Logic
        </h4>
        <CodeBlock
          code={activity.code.map((c) => c.code).join('\n')}
          language="python"
          title="Python Execution Code"
        />
        <div className="mt-4 space-y-2">
          <h5 className="font-semibold text-gray-800 mb-2">Step-by-Step Code Breakdown:</h5>
          {activity.code.map((line, index) => (
            <div key={index} className="bg-white rounded-lg p-3 border border-gray-200 shadow-sm">
              <p className="text-sm font-mono bg-gray-50 text-blue-900 px-2 py-1 rounded mb-1 font-semibold">
                {line.code}
              </p>
              <p className="text-sm text-gray-700">{line.explanation}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Complete All-in-One Code Block */}
      <div className="mb-8 bg-white rounded-xl p-5 border-2 border-amber-300 shadow-md">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
          <div className="flex items-center space-x-2">
            <Terminal className="text-amber-600" size={24} />
            <h4 className="text-lg font-bold text-gray-900">
              📋 Complete Script (All-in-One)
            </h4>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyColab}
              className="flex items-center space-x-1.5 bg-amber-600 hover:bg-amber-700 text-white text-sm px-3.5 py-1.5 rounded-md font-semibold transition-colors"
            >
              {colabCopied ? <Check size={16} /> : <Copy size={16} />}
              <span>{colabCopied ? 'Copied!' : 'Copy for Colab'}</span>
            </button>
            <button
              onClick={handleCopyPython}
              className="flex items-center space-x-1.5 bg-gray-700 hover:bg-gray-800 text-white text-sm px-3 py-1.5 rounded-md font-semibold transition-colors"
            >
              {pythonCopied ? <Check size={16} /> : <Copy size={16} />}
              <span>{pythonCopied ? 'Copied!' : 'Copy Raw Python'}</span>
            </button>
          </div>
        </div>
        <p className="text-xs text-gray-600 mb-3">
          Click <strong>&quot;Copy for Colab&quot;</strong>, open Google Colab, paste into a single cell, and run.
        </p>
        <CodeBlock code={colabReadyScript} language="python" title="Google Colab Notebook Script" />
      </div>

      {/* Google Colab Instructions Guide */}
      <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-5 mb-8">
        <div className="flex items-start space-x-3">
          <ExternalLink size={24} className="text-yellow-700 flex-shrink-0 mt-1" />
          <div className="flex-1">
            <h5 className="font-bold text-yellow-900 mb-2">
              ⚡ How to Run in Google Colab (3 Quick Steps)
            </h5>
            <ol className="list-decimal list-inside space-y-1.5 text-sm text-gray-800">
              <li>
                Click <strong>&quot;Copy for Google Colab&quot;</strong> above.
              </li>
              <li>
                Click{' '}
                <a
                  href="https://colab.research.google.com/#create=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 underline font-semibold hover:text-blue-800"
                >
                  Open New Google Colab Notebook
                </a>{' '}
                (opens in a new tab).
              </li>
              <li>
                Click on the first empty code cell, press <strong>Ctrl + V</strong> (or Cmd + V) to paste, then press <strong>Shift + Enter</strong> to execute!
              </li>
            </ol>
            <div className="mt-3 flex items-center space-x-3">
              <a
                href="https://colab.research.google.com/#create=true"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold px-3 py-1.5 rounded shadow-sm transition-colors"
              >
                <span>Launch Blank Colab Notebook</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Execution Flow */}
      {activity.executionFlow && activity.executionFlow.length > 0 && (
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-gray-900 mb-3">
            🔄 Algorithmic Execution Flow
          </h4>
          <div className="space-y-3">
            {activity.executionFlow.map((step, index) => (
              <div key={step.number} className="flex items-start space-x-3">
                <div className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-semibold shadow-sm">
                  {step.number}
                </div>
                <div className="flex-1 bg-white rounded-lg p-3 border border-gray-200 shadow-sm">
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
        <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
          <h5 className="font-semibold text-gray-900 mb-2 flex items-center">
            <span className="text-green-600 mr-2">📥</span> Input / Initial State
          </h5>
          <pre className="text-sm text-gray-700 bg-gray-50 p-2 rounded whitespace-pre-wrap font-mono">
            {activity.input}
          </pre>
        </div>
        <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
          <h5 className="font-semibold text-gray-900 mb-2 flex items-center">
            <span className="text-blue-600 mr-2">📤</span> Expected Output
          </h5>
          <pre className="text-sm text-gray-700 bg-gray-50 p-2 rounded whitespace-pre-wrap font-mono">
            {activity.output}
          </pre>
        </div>
      </div>

      {/* Interpretation */}
      <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-5 shadow-sm">
        <h5 className="font-semibold text-blue-900 mb-2 flex items-center">
          <span className="mr-2">💡</span> What Does This Demonstration Show?
        </h5>
        <p className="text-gray-800 leading-relaxed">{activity.interpretation}</p>
      </div>
    </div>
  );
}
