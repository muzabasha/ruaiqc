import { Topic } from '@/lib/types';

export const whatIsAI: Topic = {
  id: 'what-is-ai',
  moduleId: 'ai-foundations',
  number: 2,
  title: 'What is Artificial Intelligence?',
  description: 'Explore the fundamental definition, types, and capabilities of Artificial Intelligence.',
  objectives: [
    'Define Artificial Intelligence clearly',
    'Distinguish between narrow and general AI',
    'Understand key AI capabilities',
    'Identify AI vs non-AI systems',
  ],
  story: `Imagine you're playing chess against a computer. The computer doesn't just follow a fixed set of moves — it studies your strategy, predicts your next moves, and adapts its gameplay. It learns from millions of previous games and gets better with experience.

Now imagine asking your phone, "What's the weather like?" It understands your voice, processes the meaning, searches for information, and responds in natural language. It even remembers your location from previous questions.

These aren't magic. They're examples of Artificial Intelligence — systems that can perceive, reason, learn, and act in ways that typically require human intelligence. But what exactly is AI, and what can it really do?`,
  motivation: `**Why understand what AI actually is?**

1. **Separating hype from reality**: Media often exaggerates or misrepresents AI capabilities. Understanding what AI truly is helps you evaluate claims critically.

2. **Making informed decisions**: Whether you're choosing products, making business decisions, or considering AI in your work, knowing what AI can and cannot do is essential.

3. **Career preparation**: AI is transforming every industry. Understanding its fundamentals opens opportunities regardless of your field.

4. **Ethical awareness**: As AI becomes more prevalent, understanding its nature helps you engage with important ethical and societal discussions.

5. **Foundation for learning**: This is the cornerstone concept. Everything else in AI builds on this fundamental understanding.`,
  concept: {
    simple: `Artificial Intelligence (AI) means creating computer systems that can do tasks that normally need human thinking — like recognizing faces in photos, understanding spoken words, making decisions, translating languages, or playing games. Instead of just following fixed instructions, AI systems can learn from examples and improve over time.`,
    technical: `Artificial Intelligence is the field of computer science dedicated to creating systems capable of performing tasks that typically require human cognitive functions, including perception, reasoning, learning, problem-solving, and language understanding. AI systems use algorithms and data to recognize patterns, make predictions, and optimize decisions without explicit programming for every scenario.`,
  },
  keyTerms: [
    {
      term: 'Narrow AI (Weak AI)',
      simple: 'AI designed to do one specific task really well',
      technical: 'AI systems designed and trained for a particular task without generalization to other domains',
    },
    {
      term: 'General AI (Strong AI)',
      simple: 'AI that can learn and do many different tasks like humans (not yet achieved)',
      technical: 'Hypothetical AI systems with human-like general intelligence capable of understanding, learning, and applying knowledge across diverse domains',
    },
    {
      term: 'Intelligence',
      simple: 'The ability to learn, understand, and solve problems',
      technical: 'The capacity to acquire and apply knowledge, reason abstractly, solve problems, and adapt to new situations',
    },
    {
      term: 'Algorithm',
      simple: 'A step-by-step recipe that tells the computer what to do',
      technical: 'A precise sequence of instructions or rules designed to perform a specific task or solve a problem',
    },
  ],
  howItWorks: [
    {
      number: 1,
      title: 'Data Input',
      description: 'AI systems receive data — this could be images, text, numbers, audio, or any information relevant to the task.',
    },
    {
      number: 2,
      title: 'Pattern Recognition',
      description: 'The AI analyzes the data to identify patterns, relationships, and structures using mathematical models.',
    },
    {
      number: 3,
      title: 'Learning Process',
      description: 'Through algorithms, the AI adjusts its internal parameters based on the patterns it discovers, essentially "learning" from the data.',
    },
    {
      number: 4,
      title: 'Decision Making',
      description: 'Using what it learned, the AI makes predictions, classifications, or decisions on new, unseen data.',
    },
    {
      number: 5,
      title: 'Continuous Improvement',
      description: 'As the AI encounters more data and receives feedback, it refines its understanding and improves performance.',
    },
  ],
  applications: [
    {
      title: 'Virtual Assistants',
      problem: 'People need quick access to information and task automation through natural conversation.',
      solution: 'AI-powered assistants like Siri, Alexa, and Google Assistant understand voice commands, answer questions, and control smart devices.',
    },
    {
      title: 'Recommendation Systems',
      problem: 'With millions of options available, finding relevant content is overwhelming.',
      solution: 'AI analyzes your preferences and behavior to recommend movies (Netflix), products (Amazon), or music (Spotify) you might like.',
    },
    {
      title: 'Medical Diagnosis',
      problem: 'Medical image analysis is time-consuming and requires highly specialized expertise.',
      solution: 'AI systems analyze X-rays, MRIs, and CT scans to detect diseases, sometimes with accuracy matching or exceeding human experts.',
    },
    {
      title: 'Autonomous Vehicles',
      problem: 'Safe driving requires processing vast amounts of real-time sensory information and making split-second decisions.',
      solution: 'AI processes data from cameras, sensors, and GPS to navigate roads, avoid obstacles, and make driving decisions.',
    },
  ],
  mcqs: [
    {
      id: 'q1',
      question: 'What is the main difference between Narrow AI and General AI?',
      options: [
        { id: 'a', text: 'Narrow AI is cheaper to build' },
        { id: 'b', text: 'Narrow AI specializes in one task, while General AI can perform many different tasks like humans' },
        { id: 'c', text: 'Narrow AI uses less computing power' },
        { id: 'd', text: 'Narrow AI cannot learn from data' },
      ],
      correctAnswer: 'b',
      explanation: 'Narrow AI (or Weak AI) is designed for specific tasks — like facial recognition, language translation, or playing chess. Each narrow AI system excels at its particular task but cannot generalize to other domains. General AI (Strong AI) would have human-like versatility to learn and perform any intellectual task, but this remains a future goal, not current reality.',
      incorrectFeedback: 'The distinction is about scope and versatility, not cost or computing power. Narrow AI systems today are highly capable within their specific domains but lack the general adaptability humans possess. General AI remains theoretical.',
    },
    {
      id: 'q2',
      question: 'Which of the following is NOT a typical capability of current AI systems?',
      options: [
        { id: 'a', text: 'Recognizing faces in photographs' },
        { id: 'b', text: 'Understanding and translating languages' },
        { id: 'c', text: 'Understanding human emotions with perfect accuracy in all contexts' },
        { id: 'd', text: 'Playing strategic games like chess' },
      ],
      correctAnswer: 'c',
      explanation: 'While AI has made impressive progress in emotion recognition, perfectly understanding human emotions in all contexts remains beyond current capabilities. Emotions are complex, context-dependent, and often subtle. AI can recognize some emotional cues but cannot fully understand the depth and nuance of human emotional experience.',
      incorrectFeedback: 'AI excels at pattern recognition tasks like facial recognition, language processing, and game playing. However, deeply understanding complex human experiences like emotions, especially across all contexts and cultures, remains a significant challenge.',
    },
    {
      id: 'q3',
      question: 'What enables AI systems to improve their performance over time?',
      options: [
        { id: 'a', text: 'They download updates from the internet automatically' },
        { id: 'b', text: 'They learn from data and feedback, adjusting their internal parameters' },
        { id: 'c', text: 'Programmers manually rewrite the code after each use' },
        { id: 'd', text: 'They become faster as hardware improves' },
      ],
      correctAnswer: 'b',
      explanation: 'The defining feature of AI is its ability to learn from experience. AI systems analyze data, identify patterns, and adjust their internal parameters (weights, thresholds, etc.) based on feedback. This learning process allows them to improve performance without human programmers manually updating code for every situation.',
      incorrectFeedback: 'While updates and hardware can help, the key to AI improvement is its learning capability. AI systems automatically adjust based on the data they process and the feedback they receive, rather than relying solely on manual programming updates.',
    },
    {
      id: 'q4',
      question: 'Which statement best describes the current state of AI?',
      options: [
        { id: 'a', text: 'AI has surpassed human intelligence in all areas' },
        { id: 'b', text: 'AI excels at specific tasks but lacks general human-like intelligence' },
        { id: 'c', text: 'AI is completely indistinguishable from human intelligence' },
        { id: 'd', text: 'AI can only perform simple, repetitive tasks' },
      ],
      correctAnswer: 'b',
      explanation: 'Current AI systems demonstrate superhuman performance in specific domains — like playing Go, analyzing medical images, or translating languages. However, they lack the broad, flexible intelligence humans possess. They cannot transfer knowledge between domains or understand context the way humans do. We have many powerful narrow AI systems, but no general AI yet.',
      incorrectFeedback: 'AI today is powerful but specialized. It can outperform humans in narrow tasks but cannot match human versatility and general understanding. Each AI system excels at its specific function but cannot easily adapt to entirely different challenges.',
    },
    {
      id: 'q5',
      question: 'Why is understanding the fundamentals of AI important even if you\'re not a computer scientist?',
      options: [
        { id: 'a', text: 'It\'s only important for people who want to program AI' },
        { id: 'b', text: 'AI affects all industries and professions, so understanding it helps you make informed decisions and identify opportunities' },
        { id: 'c', text: 'It\'s not really important; AI is just a passing trend' },
        { id: 'd', text: 'Only scientists need to understand AI concepts' },
      ],
      correctAnswer: 'b',
      explanation: 'AI is transforming healthcare, education, business, arts, agriculture, and virtually every field. Understanding what AI can and cannot do helps professionals in any domain leverage its capabilities, evaluate vendor claims, identify automation opportunities, and engage with ethical considerations. AI literacy is becoming essential across all careers, just like computer literacy became essential in previous decades.',
      incorrectFeedback: 'AI is not a specialized topic anymore — it\'s a fundamental technology impacting all fields. Whether you\'re a doctor, teacher, business professional, or artist, understanding AI helps you work more effectively, make better decisions, and prepare for the future of your profession.',
    },
  ],
};
