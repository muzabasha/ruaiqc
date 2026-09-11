'use client';

import { useEffect, useRef } from 'react';
import { Equation } from '@/lib/types';

interface EquationCardProps {
  equation: Equation;
}

export default function EquationCard({ equation }: EquationCardProps) {
  const equationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (equationRef.current && typeof window !== 'undefined') {
      const katex = require('katex');
      try {
        katex.render(equation.latex, equationRef.current, {
          displayMode: true,
          throwOnError: false,
        });
      } catch (error) {
        console.error('KaTeX rendering error:', error);
      }
    }
  }, [equation.latex]);

  return (
    <div className="my-8 bg-white border-2 border-primary-200 rounded-lg p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Mathematical Foundation</h3>
      
      {/* Equation */}
      <div 
        ref={equationRef} 
        className="text-center my-6 overflow-x-auto p-4 bg-gray-50 rounded-md"
        role="img"
        aria-label="Mathematical equation"
      />

      {/* Explanation */}
      <div className="mb-6">
        <h4 className="font-medium text-gray-800 mb-2">What does it mean?</h4>
        <p className="text-gray-700">{equation.explanation}</p>
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
                    <td className="border border-gray-300 px-4 py-2 font-mono text-sm font-semibold">
                      {symbol.symbol}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-sm">
                      {symbol.meaning}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-sm">
                      {symbol.interpretation}
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
          <h4 className="font-medium text-blue-900 mb-2">📊 Numerical Example</h4>
          <p className="text-gray-700 mb-2">{equation.example.description}</p>
          <div className="bg-white rounded p-3 my-2 font-mono text-sm">
            {equation.example.calculation}
          </div>
          <p className="text-gray-700 font-medium">
            <span className="text-blue-700">Result:</span> {equation.example.result}
          </p>
        </div>
      )}
    </div>
  );
}
