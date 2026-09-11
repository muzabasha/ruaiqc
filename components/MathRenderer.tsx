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
          // Regular text: escape HTML entities for safety
          return part
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
        })
        .join('');
    }

    // If no math delimiters, return escaped regular text
    return content
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }, [content, displayMode]);

  const Tag = inline ? 'span' : 'div';

  return (
    <Tag
      className={`math-rendered ${className}`}
      dangerouslySetInnerHTML={{ __html: renderedHtml }}
    />
  );
}
