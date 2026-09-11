import { Topic } from '@/lib/types';

export const whyLearnAI: Topic = {
  id: 'why-learn-ai',
  moduleId: 'ai-foundations',
  number: 1,
  title: 'Why Learn AI?',
  description: 'Understand the importance of AI in today\'s world and why learning it matters for your future.',
  objectives: [
    'Understand the relevance of AI in modern society',
    'Identify real-world AI applications',
    'Recognize career opportunities in AI',
    'Appreciate the interdisciplinary nature of AI',
  ],
  story: `Imagine waking up in the morning. Your smartphone's alarm adapts to your sleep patterns. You check your email, and spam is automatically filtered out. You ask your voice assistant about the weather. You scroll through social media, where an algorithm shows you content you might like. You use GPS to navigate through traffic, taking the fastest route. At work, you use autocorrect, language translation, and smart search.

All of this before lunch — and every single feature is powered by Artificial Intelligence.

AI isn't coming in the future. It's already here, quietly working in the background of almost everything we do. The question isn't whether AI will impact your life. The question is: will you understand it, use it, and shape it — or will you simply be affected by it?`,
  motivation: `**Why should you learn AI?**

1. **AI is everywhere**: From healthcare to entertainment, finance to education, AI is transforming every industry. Understanding AI helps you navigate the modern world.

2. **Career opportunities**: AI skills are among the most in-demand globally. Whether you're in computer science, business, healthcare, or any field, AI knowledge opens doors.

3. **Problem-solving power**: AI gives you tools to solve complex problems that were previously impossible or impractical to tackle.

4. **Future-ready skills**: As AI continues to advance, those who understand it will be better prepared for the jobs and challenges of tomorrow.

5. **Interdisciplinary impact**: AI isn't just for computer scientists. It's being used by doctors, artists, economists, educators, and professionals in every field.

6. **Innovation and creativity**: Understanding AI allows you to create innovative solutions and contribute to shaping technology's future.

7. **Critical thinking**: Learning AI helps you think critically about technology, its benefits, limitations, and ethical implications.`,
  concept: {
    simple: `Artificial Intelligence (AI) is about teaching computers to do tasks that normally require human intelligence — like recognizing faces, understanding speech, making decisions, and learning from experience. Instead of programming every single rule, we teach computers to learn patterns from data and improve over time.`,
    technical: `Artificial Intelligence is a branch of computer science focused on creating systems capable of performing tasks that typically require human intelligence. These tasks include visual perception, speech recognition, decision-making, language translation, and pattern recognition. AI systems learn from data, identify patterns, and make predictions or decisions with minimal human intervention.`,
  },
  keyTerms: [
    {
      term: 'Artificial Intelligence (AI)',
      simple: 'Computer systems that can perform tasks requiring human-like intelligence',
      technical: 'The simulation of human intelligence processes by machines, especially computer systems, including learning, reasoning, and self-correction',
    },
    {
      term: 'Machine Learning',
      simple: 'Teaching computers to learn from examples rather than explicit programming',
      technical: 'A subset of AI that enables systems to learn and improve from experience without being explicitly programmed',
    },
    {
      term: 'Algorithm',
      simple: 'A step-by-step procedure to solve a problem',
      technical: 'A finite sequence of well-defined instructions to solve a class of problems or perform a computation',
    },
  ],
  howItWorks: [
    {
      number: 1,
      title: 'Data Collection',
      description: 'AI systems start with data — lots of it. This could be images, text, numbers, or any information relevant to the task.',
    },
    {
      number: 2,
      title: 'Pattern Recognition',
      description: 'The AI analyzes the data to find patterns, relationships, and structures that humans might miss or take too long to find.',
    },
    {
      number: 3,
      title: 'Learning',
      description: 'Using algorithms, the AI learns from the patterns in the data, adjusting its internal parameters to improve performance.',
    },
    {
      number: 4,
      title: 'Prediction or Decision',
      description: 'Once trained, the AI can make predictions or decisions on new, unseen data based on what it learned.',
    },
    {
      number: 5,
      title: 'Feedback and Improvement',
      description: 'The AI receives feedback on its performance and continues to learn and improve over time.',
    },
  ],
  applications: [
    {
      title: 'Healthcare',
      problem: 'Diagnosing diseases from medical images is time-consuming and requires expert analysis.',
      solution: 'AI can analyze X-rays, MRIs, and CT scans to detect diseases like cancer, often as accurately as human doctors, and much faster.',
    },
    {
      title: 'Transportation',
      problem: 'Traffic congestion costs time and fuel, and human driving errors cause accidents.',
      solution: 'AI powers self-driving cars, optimizes traffic flow, and provides real-time navigation to save time and improve safety.',
    },
    {
      title: 'Education',
      problem: 'Every student learns differently, but traditional teaching follows a one-size-fits-all approach.',
      solution: 'AI creates personalized learning experiences, adapting content and pace to each student\'s needs.',
    },
    {
      title: 'Finance',
      problem: 'Detecting fraudulent transactions among millions of legitimate ones is like finding a needle in a haystack.',
      solution: 'AI analyzes transaction patterns in real-time to identify and prevent fraud before it causes damage.',
    },
    {
      title: 'Entertainment',
      problem: 'Finding content you like among millions of options is overwhelming.',
      solution: 'AI recommendation systems suggest movies, music, and content based on your preferences and behavior.',
    },
  ],
  activity: {
    type: 'mcq',
    title: 'Think and Predict',
    question: 'Which of the following is NOT a benefit of learning AI?',
    options: [
      { id: 'a', text: 'Better career opportunities' },
      { id: 'b', text: 'Ability to solve complex problems' },
      { id: 'c', text: 'AI will solve all human problems automatically' },
      { id: 'd', text: 'Understanding modern technology better' },
    ],
    correctAnswer: 'c',
    explanation: 'AI is a powerful tool, but it\'s not a magic solution that automatically solves all problems. It requires human guidance, ethical consideration, proper data, and careful implementation. AI amplifies human capabilities but doesn\'t replace the need for human judgment, creativity, and responsibility.',
    hint: 'Think about AI as a tool that enhances human capabilities rather than a replacement for human thinking.',
  },
  mcqs: [
    {
      id: 'q1',
      question: 'What is the main characteristic that distinguishes AI from traditional software?',
      options: [
        { id: 'a', text: 'AI is always more expensive' },
        { id: 'b', text: 'AI learns from data and improves over time' },
        { id: 'c', text: 'AI only works on powerful computers' },
        { id: 'd', text: 'AI doesn\'t need any programming' },
      ],
      correctAnswer: 'b',
      explanation: 'The defining feature of AI is its ability to learn from data and improve its performance over time without being explicitly programmed for every scenario. This learning capability sets it apart from traditional software.',
      incorrectFeedback: 'Traditional software follows fixed rules programmed by humans. AI, however, learns patterns from data and adapts its behavior based on experience, making it fundamentally different.',
    },
    {
      id: 'q2',
      question: 'In which of these fields is AI NOT currently making a significant impact?',
      options: [
        { id: 'a', text: 'Healthcare diagnosis' },
        { id: 'b', text: 'Financial fraud detection' },
        { id: 'c', text: 'Replacing all human jobs completely' },
        { id: 'd', text: 'Content recommendation systems' },
      ],
      correctAnswer: 'c',
      explanation: 'AI is a tool that augments human capabilities rather than completely replacing all human jobs. While AI automates certain tasks, it creates new job opportunities and works best when combined with human expertise, creativity, and judgment.',
      incorrectFeedback: 'AI is making significant impacts in healthcare, finance, and entertainment, but it\'s designed to assist and augment human work, not replace all human jobs completely. Many jobs require human creativity, empathy, and complex decision-making that AI cannot replicate.',
    },
    {
      id: 'q3',
      question: 'Why is learning AI important even if you\'re not planning to become an AI engineer?',
      options: [
        { id: 'a', text: 'It\'s only useful for computer scientists' },
        { id: 'b', text: 'AI impacts every field and understanding it helps you work more effectively' },
        { id: 'c', text: 'It\'s a requirement for all jobs now' },
        { id: 'd', text: 'It\'s not important unless you want to build robots' },
      ],
      correctAnswer: 'b',
      explanation: 'AI is transforming every industry from healthcare to agriculture, education to entertainment. Understanding AI helps professionals in any field leverage these tools effectively, make informed decisions, and identify opportunities for innovation in their own domains.',
      incorrectFeedback: 'AI is not limited to computer science or robotics. It\'s a cross-disciplinary tool that professionals in medicine, business, education, arts, and every field can use to enhance their work and solve domain-specific problems.',
    },
    {
      id: 'q4',
      question: 'What role does data play in AI systems?',
      options: [
        { id: 'a', text: 'Data is optional for AI systems' },
        { id: 'b', text: 'AI systems learn patterns from data to make predictions' },
        { id: 'c', text: 'Data is only used for storage purposes' },
        { id: 'd', text: 'AI creates its own data automatically' },
      ],
      correctAnswer: 'b',
      explanation: 'Data is fundamental to AI. AI systems analyze large amounts of data to identify patterns, relationships, and structures. This learning from data is what enables AI to make accurate predictions and decisions on new, unseen information.',
      incorrectFeedback: 'Data is not optional in AI — it\'s essential. AI systems need data to learn from, just like humans need examples and experience to learn. The quality and quantity of data directly impact how well an AI system can perform.',
    },
    {
      id: 'q5',
      question: 'What is the relationship between AI and Machine Learning?',
      options: [
        { id: 'a', text: 'They are completely unrelated fields' },
        { id: 'b', text: 'Machine Learning is a subset of AI focused on learning from data' },
        { id: 'c', text: 'AI is a subset of Machine Learning' },
        { id: 'd', text: 'They are exactly the same thing' },
      ],
      correctAnswer: 'b',
      explanation: 'Machine Learning is a specific approach within the broader field of AI. While AI encompasses any technique that enables computers to mimic human intelligence, Machine Learning specifically focuses on systems that learn and improve from experience and data.',
      incorrectFeedback: 'AI is the broader field encompassing all techniques to create intelligent systems. Machine Learning is one important approach within AI that focuses on creating systems that learn from data rather than following only pre-programmed rules.',
    },
  ],
};
