// Core content types for the learning platform

export interface KeyTerm {
  term: string;
  simple: string;
  technical: string;
}

export interface EquationSymbol {
  symbol: string;
  meaning: string;
  interpretation: string;
}

export interface Equation {
  latex: string;
  explanation: string;
  symbols: EquationSymbol[];
  example?: {
    description: string;
    calculation: string;
    result: string;
  };
}

export interface Step {
  number: number;
  title: string;
  description: string;
}

export interface Application {
  title: string;
  problem: string;
  solution: string;
}

export interface ActivityOption {
  id: string;
  text: string;
}

export interface Activity {
  type: 'mcq' | 'prediction' | 'matching' | 'ordering';
  title: string;
  question: string;
  options?: ActivityOption[];
  correctAnswer: string | string[];
  explanation: string;
  hint?: string;
}

export interface CodeLine {
  code: string;
  explanation: string;
}

export interface PythonActivity {
  title: string;
  description: string;
  packages: string[];
  installCommand: string;
  imports: CodeLine[];
  code: CodeLine[];
  executionFlow: Step[];
  input: string;
  output: string;
  interpretation: string;
  colabInstructions: string[];
}

export interface MCQOption {
  id: string;
  text: string;
}

export interface MCQ {
  id: string;
  question: string;
  options: MCQOption[];
  correctAnswer: string;
  explanation: string;
  incorrectFeedback: string;
}

export interface Illustration {
  type: 'svg' | 'component' | 'diagram';
  title: string;
  description: string;
  content: string | React.ComponentType;
}

export interface FunLearning {
  analogyTitle: string;
  storyAnalogy: string;
  interactiveThoughtExperiment: string;
  takeaway: string;
}

export interface LearningResource {
  title: string;
  pdfUrl: string;
  description: string;
  lessonNumber?: number;
  author?: string;
  pages?: number;
}

export interface Topic {
  id: string;
  moduleId: string;
  number: number;
  title: string;
  description: string;
  objectives: string[];
  story: string;
  motivation: string;
  concept: {
    simple: string;
    technical: string;
  };
  keyTerms: KeyTerm[];
  equations?: Equation[];
  illustration?: Illustration;
  howItWorks: Step[];
  applications: Application[];
  funLearning?: FunLearning;
  activity?: Activity;
  pythonHandsOn?: PythonActivity;
  learningResource?: LearningResource;
  mcqs: MCQ[];
}

export interface Module {
  id: string;
  number: number;
  title: string;
  description: string;
  topics: string[];
  totalTopics: number;
}

export interface UserProgress {
  completedTopics: string[];
  moduleProgress: Record<string, number>;
  quizScores: Record<string, number>;
  lastAccessed?: string;
}
