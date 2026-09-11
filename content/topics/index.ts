import { Topic } from '@/lib/types';
import { module1Topics } from './module1-ai-foundations';
import { module2Topics } from './module2-machine-learning';
import { module3Topics } from './module3-deep-learning';
import { module4Topics } from './module4-reinforcement-learning';
import { module5Topics } from './module5-quantum-foundations';
import { module6Topics } from './module6-quantum-circuits';
import { module7Topics } from './module7-quantum-algorithms';
import { module8Topics } from './module8-quantum-ml';
import { module9Topics } from './module9-quantum-enhanced-ai';

// Re-export standalone topic objects for backward compatibility
export { whyLearnAI } from './why-learn-ai';
export { qLearning } from './q-learning';
export { qubit } from './qubit';
export {
  module1Topics,
  module2Topics,
  module3Topics,
  module4Topics,
  module5Topics,
  module6Topics,
  module7Topics,
  module8Topics,
  module9Topics,
};

// Flatten all topics in linear curriculum order
export const allTopicsList: Topic[] = [
  ...module1Topics,
  ...module2Topics,
  ...module3Topics,
  ...module4Topics,
  ...module5Topics,
  ...module6Topics,
  ...module7Topics,
  ...module8Topics,
  ...module9Topics,
];

// Dictionary indexed by topic ID
export const allTopics: Record<string, Topic> = allTopicsList.reduce((acc, topic) => {
  acc[topic.id] = topic;
  return acc;
}, {} as Record<string, Topic>);

export function getTopicById(id: string): Topic | undefined {
  return allTopics[id];
}

export function getTopicsByModuleId(moduleId: string): Topic[] {
  return allTopicsList
    .filter((topic) => topic.moduleId === moduleId)
    .sort((a, b) => a.number - b.number);
}

export function getPreviousTopic(currentTopicId: string): Topic | undefined {
  const index = allTopicsList.findIndex((t) => t.id === currentTopicId);
  return index > 0 ? allTopicsList[index - 1] : undefined;
}

export function getNextTopic(currentTopicId: string): Topic | undefined {
  const index = allTopicsList.findIndex((t) => t.id === currentTopicId);
  return index >= 0 && index < allTopicsList.length - 1 ? allTopicsList[index + 1] : undefined;
}
