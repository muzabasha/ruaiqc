export function cn(...classes: (string | undefined | null | boolean)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function formatModuleNumber(num: number): string {
  return `Module ${num}`;
}

export function formatTopicNumber(moduleNum: number, topicNum: number): string {
  return `${moduleNum}.${topicNum}`;
}

export function copyToClipboard(text: string): Promise<boolean> {
  if (typeof window === 'undefined') return Promise.resolve(false);

  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard
      .writeText(text)
      .then(() => true)
      .catch(() => false);
  } else {
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      const successful = document.execCommand('copy');
      textArea.remove();
      return Promise.resolve(successful);
    } catch (error) {
      textArea.remove();
      return Promise.resolve(false);
    }
  }
}

export function getScoreInterpretation(score: number, total: number): {
  level: 'excellent' | 'very-good' | 'good' | 'review' | 'revisit';
  message: string;
  color: string;
} {
  const percentage = (score / total) * 100;

  if (percentage === 100) {
    return {
      level: 'excellent',
      message: 'Excellent understanding! You have mastered this topic.',
      color: 'text-green-600',
    };
  } else if (percentage >= 80) {
    return {
      level: 'very-good',
      message: 'Very good understanding! Minor concepts to review.',
      color: 'text-green-500',
    };
  } else if (percentage >= 60) {
    return {
      level: 'good',
      message: 'Good start! Review the missed concepts.',
      color: 'text-blue-600',
    };
  } else if (percentage >= 40) {
    return {
      level: 'review',
      message: 'Revisit the topic and try again.',
      color: 'text-orange-600',
    };
  } else {
    return {
      level: 'revisit',
      message: 'Review the topic fundamentals before continuing.',
      color: 'text-red-600',
    };
  }
}
