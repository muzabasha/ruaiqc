import { UserProgress } from './types';

const STORAGE_KEY = 'ai-quantum-learning-progress';

export function getProgress(): UserProgress {
  if (typeof window === 'undefined') {
    return {
      completedTopics: [],
      moduleProgress: {},
      quizScores: {},
    };
  }

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Error loading progress:', error);
  }

  return {
    completedTopics: [],
    moduleProgress: {},
    quizScores: {},
  };
}

export function saveProgress(progress: UserProgress): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (error) {
    console.error('Error saving progress:', error);
  }
}

export function markTopicComplete(topicId: string): void {
  const progress = getProgress();
  if (!progress.completedTopics.includes(topicId)) {
    progress.completedTopics.push(topicId);
    progress.lastAccessed = new Date().toISOString();
    saveProgress(progress);
  }
}

export function saveQuizScore(topicId: string, score: number): void {
  const progress = getProgress();
  progress.quizScores[topicId] = score;
  progress.lastAccessed = new Date().toISOString();
  saveProgress(progress);
}

export function updateModuleProgress(moduleId: string, percentage: number): void {
  const progress = getProgress();
  progress.moduleProgress[moduleId] = percentage;
  saveProgress(progress);
}

export function resetProgress(): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Error resetting progress:', error);
  }
}

export function calculateOverallProgress(totalTopics: number): number {
  const progress = getProgress();
  return Math.round((progress.completedTopics.length / totalTopics) * 100);
}

export function isTopicCompleted(topicId: string): boolean {
  const progress = getProgress();
  return progress.completedTopics.includes(topicId);
}

export function getQuizScore(topicId: string): number | undefined {
  const progress = getProgress();
  return progress.quizScores[topicId];
}
