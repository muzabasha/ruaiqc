import { LearningResource } from '@/lib/types';

export function getTopicLearningResource(
  topicId: string,
  moduleId: string
): { primary: LearningResource; secondary?: LearningResource } {
  // Module 5 quantum foundation topics get specific lesson or comprehensive presentation
  if (moduleId === 'quantum-foundations') {
    const qFoundation: LearningResource = {
      title: 'Comprehensive Foundation in Quantum Computing',
      pdfUrl: '/presentations/quantum_computing_foundation.pdf',
      description: 'From Probability and Complex Numbers to Qubits, Interference, Entanglement, and Multi-Qubit Systems by Dr. Syed Muzamil Basha.',
      pages: 19,
      author: 'Dr. Syed Muzamil Basha',
    };
    const qFun: LearningResource = {
      title: 'Quantum Computing Foundation: Learn with Fun',
      pdfUrl: '/presentations/quantum_computing_foundation_learn_with_fun.pdf',
      description: 'Visual analogies, intuitive thought experiments, and zero-prerequisite quantum concepts.',
      pages: 19,
      author: 'Dr. Syed Muzamil Basha',
    };

    if (['qubit', 'quantum-state', 'superposition', 'measurement'].includes(topicId)) {
      return {
        primary: {
          title: 'Lesson 3: Quantum Measurement with a One-Qubit Circuit',
          pdfUrl: '/presentations/Lesson3.pdf',
          description: 'Hadamard gates, quantum measurement, histogram analysis, and probability collapse.',
          lessonNumber: 3,
          pages: 11,
          author: 'Dr. Syed Muzamil Basha',
        },
        secondary: qFoundation,
      };
    }
    if (['probability-amplitude'].includes(topicId)) {
      return {
        primary: {
          title: 'Lesson 7: Repeated Measurement and Probability',
          pdfUrl: '/presentations/Lesson7.pdf',
          description: 'Reinforcing superposition, sampling distributions, and histogram interpretation.',
          lessonNumber: 7,
          pages: 9,
          author: 'Dr. Syed Muzamil Basha',
        },
        secondary: qFoundation,
      };
    }
    if (['entanglement', 'quantum-interference'].includes(topicId)) {
      return {
        primary: {
          title: 'Lesson 8: Two Qubits and Entanglement',
          pdfUrl: '/presentations/Lesson8.pdf',
          description: 'Hadamard, CNOT, Bell-state intuition, and correlated quantum measurements.',
          lessonNumber: 8,
          pages: 10,
          author: 'Dr. Syed Muzamil Basha',
        },
        secondary: qFoundation,
      };
    }
    if (['qc-applications', 'qc-limitations'].includes(topicId)) {
      return {
        primary: {
          title: 'Lesson 13: Quantum Chemistry with VQE',
          pdfUrl: '/presentations/Lesson13.pdf',
          description: 'Molecular H2 simulations, Hamiltonians, Jordan-Wigner mapping, and variational optimization.',
          lessonNumber: 13,
          pages: 11,
          author: 'Dr. Syed Muzamil Basha',
        },
        secondary: {
          title: 'Lesson 14: Quantum Optimization for Portfolio Selection',
          pdfUrl: '/presentations/Lesson14.pdf',
          description: 'Covariance, quadratic programming, SamplingVQE, and portfolio optimization.',
          lessonNumber: 14,
          pages: 12,
          author: 'Dr. Syed Muzamil Basha',
        },
      };
    }
    return {
      primary: qFoundation,
      secondary: qFun,
    };
  }

  // Module 1 (AI Foundations)
  if (moduleId === 'ai-foundations') {
    if (['python-for-ai'].includes(topicId)) {
      return {
        primary: {
          title: 'Lesson 4: Python, Data Preparation and Classical ML Foundations',
          pdfUrl: '/presentations/Lesson4.pdf',
          description: 'NumPy, pandas, preprocessing, and classification pipelines.',
          lessonNumber: 4,
          pages: 17,
          author: 'Dr. Syed Muzamil Basha',
        },
      };
    }
    if (['intro-machine-learning', 'types-of-ml', 'supervised-learning', 'unsupervised-learning'].includes(topicId)) {
      return {
        primary: {
          title: 'Lesson 2: Classical Machine Learning as the Starting Point',
          pdfUrl: '/presentations/Lesson2.pdf',
          description: 'Data, prediction, and the bridge to modern artificial intelligence.',
          lessonNumber: 2,
          pages: 11,
          author: 'Dr. Syed Muzamil Basha',
        },
      };
    }
    if (['reinforcement-learning-intro'].includes(topicId)) {
      return {
        primary: {
          title: 'Lesson 6: Reinforcement Learning Foundations',
          pdfUrl: '/presentations/Lesson6.pdf',
          description: 'Q-learning, DQN, exploration, rewards, and optimization intuition.',
          lessonNumber: 6,
          pages: 12,
          author: 'Dr. Syed Muzamil Basha',
        },
      };
    }
    return {
      primary: {
        title: 'Lesson 1: First Steps in Quantum Computing & AI',
        pdfUrl: '/presentations/Lesson1.pdf',
        description: 'From classical prediction to a one-qubit quantum circuit.',
        lessonNumber: 1,
        pages: 19,
        author: 'Dr. Syed Muzamil Basha',
      },
    };
  }

  // Module 2 (Machine Learning)
  if (moduleId === 'machine-learning') {
    if (['regression', 'building-ml-model'].includes(topicId)) {
      return {
        primary: {
          title: 'Lesson 2: Classical Machine Learning as the Starting Point',
          pdfUrl: '/presentations/Lesson2.pdf',
          description: 'Data, prediction, and the bridge to modern artificial intelligence.',
          lessonNumber: 2,
          pages: 11,
          author: 'Dr. Syed Muzamil Basha',
        },
      };
    }
    return {
      primary: {
        title: 'Lesson 4: Python, Data Preparation and Classical ML Foundations',
        pdfUrl: '/presentations/Lesson4.pdf',
        description: 'NumPy arrays, pandas DataFrames, train-test splits, and scikit-learn models.',
        lessonNumber: 4,
        pages: 17,
        author: 'Dr. Syed Muzamil Basha',
      },
    };
  }

  // Module 3 (Deep Learning)
  if (moduleId === 'deep-learning') {
    return {
      primary: {
        title: 'Lesson 5: Classical Deep Learning with PyTorch',
        pdfUrl: '/presentations/Lesson5.pdf',
        description: 'CNN, MNIST dataset, backpropagation, loss functions, and optimization.',
        lessonNumber: 5,
        pages: 12,
        author: 'Dr. Syed Muzamil Basha',
      },
    };
  }

  // Module 4 (Reinforcement Learning)
  if (moduleId === 'reinforcement-learning') {
    return {
      primary: {
        title: 'Lesson 6: Reinforcement Learning Foundations',
        pdfUrl: '/presentations/Lesson6.pdf',
        description: 'Q-learning, Q-table updates, DQN architectures, and exploration-exploitation trade-offs.',
        lessonNumber: 6,
        pages: 12,
        author: 'Dr. Syed Muzamil Basha',
      },
    };
  }

  // Module 6 (Quantum Circuits)
  if (moduleId === 'quantum-circuits') {
    if (
      [
        'controlled-gates',
        'cnot-gate',
        'quantum-register',
        'quantum-gates',
        'pauli-x-gate',
        'pauli-y-gate',
        'pauli-z-gate',
      ].includes(topicId)
    ) {
      return {
        primary: {
          title: 'Lesson 8: Two Qubits and Entanglement',
          pdfUrl: '/presentations/Lesson8.pdf',
          description: 'Hadamard, CNOT, Bell-state intuition, and correlated quantum circuits.',
          lessonNumber: 8,
          pages: 10,
          author: 'Dr. Syed Muzamil Basha',
        },
      };
    }
    return {
      primary: {
        title: 'Lesson 3: Quantum Measurement with a One-Qubit Circuit',
        pdfUrl: '/presentations/Lesson3.pdf',
        description: 'Hadamard gate, quantum registers, simulation, and histogram measurement.',
        lessonNumber: 3,
        pages: 11,
        author: 'Dr. Syed Muzamil Basha',
      },
      secondary: {
        title: 'Lesson 7: Repeated Measurement and Probability',
        pdfUrl: '/presentations/Lesson7.pdf',
        description: 'Superposition, sampling, and histogram interpretation in Qiskit.',
        lessonNumber: 7,
        pages: 9,
        author: 'Dr. Syed Muzamil Basha',
      },
    };
  }

  // Module 7 (Quantum Algorithms)
  if (moduleId === 'quantum-algorithms') {
    return {
      primary: {
        title: 'Lesson 9: Grover Search and Amplitude Amplification',
        pdfUrl: '/presentations/Lesson9.pdf',
        description: 'Oracle, diffusion operator, interference, and quadratic search speedup.',
        lessonNumber: 9,
        pages: 10,
        author: 'Dr. Syed Muzamil Basha',
      },
    };
  }

  // Module 8 (Quantum Machine Learning)
  if (moduleId === 'quantum-ml') {
    if (['quantum-kernels', 'why-ai-plus-quantum', 'quantum-data-processing'].includes(topicId)) {
      return {
        primary: {
          title: 'Lesson 11: Quantum Kernel Methods',
          pdfUrl: '/presentations/Lesson11.pdf',
          description: 'Fidelity, feature maps, precomputed kernels, and classical SVM.',
          lessonNumber: 11,
          pages: 10,
          author: 'Dr. Syed Muzamil Basha',
        },
      };
    }
    if (['quantum-neural-networks', 'hybrid-models'].includes(topicId)) {
      return {
        primary: {
          title: 'Lesson 12: Hybrid Quantum-Classical Neural Networks',
          pdfUrl: '/presentations/Lesson12.pdf',
          description: 'EstimatorQNN, TorchConnector, and hybrid PyTorch training.',
          lessonNumber: 12,
          pages: 10,
          author: 'Dr. Syed Muzamil Basha',
        },
      };
    }
    return {
      primary: {
        title: 'Lesson 10: Variational Quantum Classification',
        pdfUrl: '/presentations/Lesson10.pdf',
        description: 'Feature maps, ansatz, COBYLA optimization, and complete VQC pipeline.',
        lessonNumber: 10,
        pages: 11,
        author: 'Dr. Syed Muzamil Basha',
      },
    };
  }

  // Module 9 (Quantum-Enhanced AI)
  if (moduleId === 'quantum-enhanced-ai') {
    if (['hybrid-ai-quantum', 'ai-quantum-workflow'].includes(topicId)) {
      return {
        primary: {
          title: 'Lesson 12: Hybrid Quantum-Classical Neural Networks',
          pdfUrl: '/presentations/Lesson12.pdf',
          description: 'EstimatorQNN, TorchConnector, and hybrid training workflows.',
          lessonNumber: 12,
          pages: 10,
          author: 'Dr. Syed Muzamil Basha',
        },
      };
    }
    if (['real-world-applications', 'research-opportunities'].includes(topicId)) {
      return {
        primary: {
          title: 'Lesson 13: Quantum Chemistry with VQE',
          pdfUrl: '/presentations/Lesson13.pdf',
          description: 'H2 molecular electronic structure and variational optimization.',
          lessonNumber: 13,
          pages: 11,
          author: 'Dr. Syed Muzamil Basha',
        },
      };
    }
    return {
      primary: {
        title: 'Lesson 14: Quantum Optimization for Portfolio Selection',
        pdfUrl: '/presentations/Lesson14.pdf',
        description: 'Covariance, quadratic programming, SamplingVQE, and portfolio optimization.',
        lessonNumber: 14,
        pages: 12,
        author: 'Dr. Syed Muzamil Basha',
      },
    };
  }

  // Default fallback
  return {
    primary: {
      title: 'Comprehensive Foundation in Quantum Computing',
      pdfUrl: '/presentations/quantum_computing_foundation.pdf',
      description: 'Quantum Computing and AI Foundations curriculum by Dr. Syed Muzamil Basha.',
      pages: 19,
      author: 'Dr. Syed Muzamil Basha',
    },
  };
}
