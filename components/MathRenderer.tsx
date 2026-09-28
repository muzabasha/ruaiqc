'use client';

import React, { useMemo } from 'react';
import katex from 'katex';

interface MathRendererProps {
  content: string;
  inline?: boolean;
  className?: string;
  displayMode?: boolean;
  mathOnly?: boolean;
}

function sanitizeLatex(input: string): string {
  if (!input) return '';
  return input
    .trim()
    .replace(/^\$\$(.*)\$\$$/s, '$1')
    .replace(/^\$(.*)\$$/s, '$1')
    // Defensive repairs for control characters resulting from accidental single-escaped backslashes:
    .replace(/\x08eta/g, '\\beta')
    .replace(/\x08oldsymbol/g, '\\boldsymbol')
    .replace(/\x08egin/g, '\\begin')
    .replace(/\x08ig/g, '\\big')
    .replace(/\x08/g, '\\b')
    .replace(/\x0crac/g, '\\frac')
    .replace(/\x0c/g, '\\f')
    .replace(/\x0aabla/g, '\\nabla')
    .replace(/\r(?=angle|ho|ight|ightarrow)/g, '\\')
    .replace(/\t(?=ext|heta|au|imes|an)/g, '\\');
}

function renderKatexSafe(math: string, displayMode = false): string {
  try {
    const clean = sanitizeLatex(math);
    return katex.renderToString(clean, {
      displayMode,
      throwOnError: false,
    });
  } catch (err) {
    return `<span class="katex-error">${math}</span>`;
  }
}

/**
 * Checks if a string is strictly a pure mathematical formula (and NOT English prose).
 * Prevents plain English sentences containing symbols like '|', '^', '_' from having their spaces stripped by KaTeX.
 */
function isPureMath(str: string): boolean {
  if (!str || str.includes('\n')) return false;
  const trimmed = str.trim();

  // If it has sentence punctuation followed by space, it is prose
  if (/\.\s|\!\s|\?\s/.test(trimmed)) return false;

  // Extract alphabetic word sequences of 3+ letters
  const words = trimmed.match(/[a-zA-Z]{3,}/g) || [];

  // Whitelist of allowed mathematical identifiers, functions, and gate names
  const mathWords = new Set([
    'cos', 'sin', 'tan', 'exp', 'log', 'ln', 'det', 'dim', 'max', 'min', 'arg', 'lim', 'ker',
    'deg', 'gcd', 'mod', 'span', 'tr', 'ghz', 'cnot', 'xor', 'qft', 'vqe', 'qaoa',
    'hhl', 'cx', 'cz', 'swap', 'toffoli', 'hadamard', 'pauli', 'var', 'cov', 'poly',
    'text', 'mathbf', 'mathcal', 'mathbb', 'boldsymbol', 'frac', 'sqrt', 'cdot', 'times',
    'alpha', 'beta', 'gamma', 'delta', 'theta', 'phi', 'psi', 'sigma', 'lambda', 'omega',
    'rangle', 'langle', 'otimes', 'oplus', 'dagger', 'approx', 'partial', 'nabla'
  ]);

  const nonMathWords = words.filter(w => !mathWords.has(w.toLowerCase()));

  // If it contains 2 or more non-math English words, it is definitely human prose!
  if (nonMathWords.length >= 2) return false;

  // If it has 1 non-math word, check if it's part of a longer sentence with spaces
  if (nonMathWords.length === 1 && trimmed.includes(' ') && trimmed.length > 25) {
    return false;
  }

  // Must contain mathematical operators, notation, or characters
  const hasMathIndicators =
    trimmed.startsWith('\\') ||
    trimmed.includes('^') ||
    trimmed.includes('_') ||
    trimmed.includes('|') ||
    trimmed.includes('⟩') ||
    trimmed.includes('⟨') ||
    trimmed.includes('⊗') ||
    trimmed.includes('⊕') ||
    trimmed.includes('=') ||
    trimmed.includes('+') ||
    trimmed.includes('×') ||
    trimmed.includes('≈') ||
    /^[0-9a-zA-Z\\_{}\^]+$/.test(trimmed);

  return Boolean(hasMathIndicators);
}

// Helper to format regular text with markdown bold, italic, inline code, HTML escaping, and Dirac ket rendering
function formatTextWithMarkdown(text: string): string {
  let escaped = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  // Convert markdown bold: **text** -> <strong class="font-bold text-gray-900">text</strong>
  escaped = escaped.replace(/\*\*([^*]+)\*\*/g, '<strong class="font-bold text-gray-900">$1</strong>');

  // Convert markdown italic: *text* -> <em>text</em>
  escaped = escaped.replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, '<em>$1</em>');

  // Convert markdown inline code: `code` -> <code>code</code>
  escaped = escaped.replace(/`([^`]+)`/g, '<code class="bg-gray-100 text-primary-700 px-1 py-0.5 rounded text-sm font-mono">$1</code>');

  // Auto-render Dirac kets/bras written with Unicode in plain text (e.g. |0⟩, |1⟩, |ψ⟩, |s⟩, |x⟩, |00...0⟩, |GHZ⟩)
  escaped = escaped.replace(/(\|[\p{L}\p{N}\.\+\-\s\\/]+⟩|⟨[\p{L}\p{N}\.\+\-\s\\/]+\|)/gu, (match) => {
    const katexFormatted = match
      .replace(/⟩/g, '\\rangle')
      .replace(/⟨/g, '\\langle ')
      .replace(/ψ/g, '\\psi')
      .replace(/Φ/g, '\\Phi')
      .replace(/GHZ/g, '\\text{GHZ}');
    return renderKatexSafe(katexFormatted, false);
  });

  return escaped;
}

export default function MathRenderer({
  content,
  inline = false,
  className = '',
  displayMode = false,
  mathOnly = false,
}: MathRendererProps) {
  const renderedHtml = useMemo(() => {
    if (!content) return '';

    // 1. Explicit mathOnly or displayMode is requested
    if (mathOnly || displayMode) {
      return renderKatexSafe(content, Boolean(displayMode));
    }

    // 2. Pure math expression auto-detection (standalone formula with no English prose)
    if (!content.includes('$') && isPureMath(content)) {
      return renderKatexSafe(content, false);
    }

    // 3. Mixed content with inline math delimiters ($...$ or $$...$$)
    if (content.includes('$')) {
      const parts = content.split(/(\$\$.*?\$\$|\$.*?\$)/gs);
      return parts
        .map((part) => {
          if (part.startsWith('$$') && part.endsWith('$$')) {
            return renderKatexSafe(part.slice(2, -2), true);
          } else if (part.startsWith('$') && part.endsWith('$')) {
            return renderKatexSafe(part.slice(1, -1), false);
          }
          return formatTextWithMarkdown(part);
        })
        .join('');
      }

    // 4. Regular prose text (parses markdown and auto-renders Dirac kets)
    return formatTextWithMarkdown(content);
  }, [content, displayMode, mathOnly]);

  const Tag = inline ? 'span' : 'div';

  return (
    <Tag
      className={`math-rendered ${className}`}
      dangerouslySetInnerHTML={{ __html: renderedHtml }}
    />
  );
}
