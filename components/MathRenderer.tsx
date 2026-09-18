'use client';

import React, { useMemo } from 'react';
import katex from 'katex';

interface MathRendererProps {
  content: string;
  inline?: boolean;
  className?: string;
  displayMode?: boolean;
}

export default function MathRenderer({
  content,
  inline = false,
  className = '',
  displayMode = false,
}: MathRendererProps) {
  const renderedHtml = useMemo(() => {
    if (!content) return '';

    // If explicit displayMode is requested or content is pure math without surrounding text
    if (displayMode) {
      try {
        const cleanLatex = content.trim().replace(/^\$\$(.*)\$\$$/s, '$1').replace(/^\$(.*)\$$/s, '$1');
        return katex.renderToString(cleanLatex, {
          displayMode: true,
          throwOnError: false,
        });
      } catch (err) {
        return `<span class="katex-error">${content}</span>`;
      }
    }

    // Check if content is a single math expression (e.g. |α|², \mathcal{H}, |\psi\rangle, W^T x)
    const isSingleSymbol =
      (content.includes('\\') || content.includes('^') || content.includes('_') || content.includes('|') || content.includes('⟩')) &&
      !content.includes('\n') &&
      !content.includes(' ') &&
      !content.includes('$');

    if (isSingleSymbol) {
      try {
        return katex.renderToString(content, {
          displayMode: false,
          throwOnError: false,
        });
      } catch (e) {
        // Fallback to plain text
      }
    }

    // Helper to format regular text with markdown bold, italic, inline code and escape HTML
    const formatTextWithMarkdown = (text: string) => {
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

      return escaped;
    };

    // If content has inline math delimiters ($...$ or $$...$$)
    if (content.includes('$')) {
      // Split by $$ for display math and $ for inline math
      const parts = content.split(/(\$\$.*?\$\$|\$.*?\$)/gs);
      return parts
        .map((part) => {
          if (part.startsWith('$$') && part.endsWith('$$')) {
            const math = part.slice(2, -2);
            try {
              return katex.renderToString(math, {
                displayMode: true,
                throwOnError: false,
              });
            } catch (err) {
              return `<span class="katex-error">${part}</span>`;
            }
          } else if (part.startsWith('$') && part.endsWith('$')) {
            const math = part.slice(1, -1);
            try {
              return katex.renderToString(math, {
                displayMode: false,
                throwOnError: false,
              });
            } catch (err) {
              return `<span class="katex-error">${part}</span>`;
            }
          }
          // Regular text: parse markdown and escape HTML
          return formatTextWithMarkdown(part);
        })
        .join('');
    }

    // If no math delimiters, parse markdown and escape HTML
    return formatTextWithMarkdown(content);
  }, [content, displayMode]);

  const Tag = inline ? 'span' : 'div';

  return (
    <Tag
      className={`math-rendered ${className}`}
      dangerouslySetInnerHTML={{ __html: renderedHtml }}
    />
  );
}
