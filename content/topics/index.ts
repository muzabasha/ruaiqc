import { Topic } from '@/lib/types';
import { whyLearnAI } from './why-learn-ai';
import { qLearning } from './q-learning';
import { qubit } from './qubit';

// Export all topics
export const allTopics: Record<string, Topic> = {
  'why-learn-ai': whyLearnAI,
  'q-learning': qLearning,
  'qubit': qubit,
};

export function getTopicById(id: string): Topic | undefined {
  return allTopics[id];
}

export function getTopicsByModuleId(moduleId: string): Topic[] {
  return Object.values(allTopics).filter((topic) => topic.moduleId === moduleId);
}
