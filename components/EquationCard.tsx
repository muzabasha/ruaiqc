'use client';

import { Equation } from '@/lib/types';
import MathRenderer from './MathRenderer';

interface EquationCardProps {
  equation: Equation;
}

export default function EquationCard({ equation }: EquationCardProps) {
  return (
    <div className="my-8 bg-white border-2 border-primary-200 rounded-lg p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center">
          <span className="text-xl mr-2">📐</span> Mathematical Foundation
        </h3>
        <span className="text-xs bg-primary-100 text-primary-700 font-semibold px-2.5 py-1 rounded-full">
          LaTeX KaTeX
        </span>
      </div>

      {/* Main Equation */}
      <div className="text-center my-6 overflow-x-auto p-4 bg-gray-50 rounded-md border border-gray-200">
        <MathRenderer content={equation.latex} displayMode={true} className="text-xl text-gray-900" />
      </div>

      {/* Explanation */}
      <div className="mb-6">
        <h4 className="font-medium text-gray-800 mb-2">What does it mean?</h4>
        <MathRenderer content={equation.explanation} className="text-gray-700 leading-relaxed" />
      </div>

      {/* Symbols Table */}
      {equation.symbols && equation.symbols.length > 0 && (
        <div className="mb-6">
          <h4 className="font-medium text-gray-800 mb-3">Understanding the Symbols</h4>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold">
                    Symbol
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold">
                    Meaning
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold">
                    Beginner Interpretation
                  </th>
                </tr>
              </thead>
              <tbody>
                {equation.symbols.map((symbol, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-mono text-sm font-semibold text-primary-700">
                      <MathRenderer content={symbol.symbol} inline />
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-sm text-gray-800">
                      <MathRenderer content={symbol.meaning} inline />
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">
                      <MathRenderer content={symbol.interpretation} inline />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Example */}
      {equation.example && (
        <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
          <h4 className="font-medium text-blue-900 mb-2 flex items-center">
            <span className="mr-2">📊</span> Numerical Example
          </h4>
          <p className="text-gray-700 mb-2">{equation.example.description}</p>
          <div className="bg-white rounded p-3 my-2 font-mono text-sm border border-blue-100 overflow-x-auto">
            <MathRenderer content={equation.example.calculation} inline />
          </div>
          <p className="text-gray-700 font-medium mt-2">
            <span className="text-blue-700">Result:</span> <MathRenderer content={equation.example.result} inline />
          </p>
        </div>
      )}
    </div>
  );
}
