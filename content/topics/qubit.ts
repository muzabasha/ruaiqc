import { Topic } from '@/lib/types';

export const qubit: Topic = {
  id: 'qubit',
  moduleId: 'quantum-foundations',
  number: 7,
  title: 'Qubit',
  description: 'Understand the fundamental unit of quantum information — the qubit — and how it differs from classical bits.',
  objectives: [
    'Understand what a qubit is',
    'Learn how qubits differ from classical bits',
    'Explore quantum superposition in qubits',
    'Visualize qubit states using Python',
  ],
  story: `Imagine flipping a coin. While it's spinning in the air, it's neither heads nor tails — it's in a state of "both." Only when you catch it and look does it become definitely one or the other.

Classical computers work with bits that are always definite — either 0 or 1, like a coin lying flat showing heads or tails. There's no in-between.

But quantum computers work with qubits — quantum bits — which can exist in a superposition, like that spinning coin. A qubit can be |0⟩, |1⟩, or a combination of both simultaneously. It's only when we measure it that it "collapses" to a definite value.

This isn't just a trick of not knowing — it's a fundamental property of quantum mechanics. The qubit genuinely exists in multiple states at once until observed. This property is what gives quantum computers their potential power.`,
  motivation: `**Why learn about qubits?**

1. **Foundation of quantum computing**: Just as the bit is fundamental to classical computing, the qubit is the basic unit of quantum computing.

2. **Superposition enables parallelism**: A qubit's ability to be in multiple states simultaneously allows quantum computers to process many possibilities at once.

3. **Gateway to quantum algorithms**: Understanding qubits is essential for learning quantum circuits, quantum gates, and quantum algorithms.

4. **Real implementations**: Qubits are being built using superconducting circuits, trapped ions, photons, and other quantum systems.

5. **Quantum advantage**: The unique properties of qubits enable certain computations that are impractical for classical computers.`,
  concept: {
    simple: `A qubit (quantum bit) is the basic unit of quantum information. Unlike a classical bit that is either 0 or 1, a qubit can exist in a superposition — a combination of both 0 and 1 at the same time. When we measure a qubit, it collapses to either 0 or 1, but before measurement, it genuinely exists in both states simultaneously.`,
    technical: `A qubit is a two-level quantum system described by a state vector in a two-dimensional complex Hilbert space. The state is represented as |ψ⟩ = α|0⟩ + β|1⟩, where α and β are complex probability amplitudes satisfying |α|² + |β|² = 1. The qubit can exist in any superposition of the basis states |0⟩ and |1⟩ until measurement causes wavefunction collapse.`,
  },
  keyTerms: [
    {
      term: 'Qubit',
      simple: 'The quantum version of a bit, capable of being 0, 1, or both simultaneously',
      technical: 'A two-state quantum system serving as the basic unit of quantum information',
    },
    {
      term: 'Superposition',
      simple: 'The ability of a qubit to exist in multiple states at once',
      technical: 'A quantum state that is a linear combination of basis states, existing simultaneously until measurement',
    },
    {
      term: 'Quantum State',
      simple: 'The complete description of a qubit\'s condition',
      technical: 'A unit vector in a complex Hilbert space describing all measurable properties of the quantum system',
    },
    {
      term: 'Probability Amplitude',
      simple: 'A complex number determining the likelihood of measuring a particular state',
      technical: 'A complex coefficient whose squared magnitude gives the probability of measuring the corresponding basis state',
    },
    {
      term: 'Measurement',
      simple: 'The act of observing a qubit, which makes it choose a definite value',
      technical: 'A quantum operation that projects the state onto a basis state, collapsing the superposition',
    },
  ],
  equations: [
    {
      latex: '|\\psi\\rangle = \\alpha|0\\rangle + \\beta|1\\rangle',
      explanation: 'This is the general form of a qubit state. A qubit is a superposition of the basis states |0⟩ and |1⟩ with complex coefficients α and β.',
      symbols: [
        {
          symbol: '|ψ⟩',
          meaning: 'Quantum state (psi)',
          interpretation: 'The complete state of the qubit',
        },
        {
          symbol: 'α (alpha)',
          meaning: 'Probability amplitude for |0⟩',
          interpretation: 'Determines how much the qubit is in state |0⟩',
        },
        {
          symbol: 'β (beta)',
          meaning: 'Probability amplitude for |1⟩',
          interpretation: 'Determines how much the qubit is in state |1⟩',
        },
        {
          symbol: '|0⟩',
          meaning: 'Basis state zero',
          interpretation: 'Quantum equivalent of classical bit 0',
        },
        {
          symbol: '|1⟩',
          meaning: 'Basis state one',
          interpretation: 'Quantum equivalent of classical bit 1',
        },
      ],
      example: {
        description: 'A common qubit state is the equal superposition: |+⟩ = (1/√2)|0⟩ + (1/√2)|1⟩. Here α = 1/√2 ≈ 0.707 and β = 1/√2 ≈ 0.707.',
        calculation: `Probability of measuring |0⟩ = |α|² = (1/√2)² = 1/2 = 50%
Probability of measuring |1⟩ = |β|² = (1/√2)² = 1/2 = 50%
Total probability = 50% + 50% = 100% ✓`,
        result: 'This qubit has an equal 50% chance of collapsing to |0⟩ or |1⟩ when measured. It is genuinely in both states before measurement.',
      },
    },
    {
      latex: '|\\alpha|^2 + |\\beta|^2 = 1',
      explanation: 'This is the normalization condition. The probabilities of measuring |0⟩ and |1⟩ must sum to 1 (100%).',
      symbols: [
        {
          symbol: '|α|²',
          meaning: 'Probability of measuring |0⟩',
          interpretation: 'Chance of getting 0 when we measure',
        },
        {
          symbol: '|β|²',
          meaning: 'Probability of measuring |1⟩',
          interpretation: 'Chance of getting 1 when we measure',
        },
      ],
      example: {
        description: 'If α = 0.6 and β = 0.8, verify normalization:',
        calculation: `|α|² + |β|² = (0.6)² + (0.8)² = 0.36 + 0.64 = 1.00 ✓`,
        result: 'The state is properly normalized. There is a 36% chance of measuring |0⟩ and a 64% chance of measuring |1⟩.',
      },
    },
  ],
  howItWorks: [
    {
      number: 1,
      title: 'Initialization',
      description: 'A qubit starts in a defined state, typically |0⟩ (equivalent to classical 0).',
    },
    {
      number: 2,
      title: 'Superposition Creation',
      description: 'Quantum gates manipulate the qubit to create superpositions — combinations of |0⟩ and |1⟩.',
    },
    {
      number: 3,
      title: 'Quantum Operations',
      description: 'While in superposition, quantum algorithms apply operations that work on all possible states simultaneously.',
    },
    {
      number: 4,
      title: 'Measurement',
      description: 'When measured, the qubit collapses to either |0⟩ or |1⟩ with probabilities determined by |α|² and |β|².',
    },
    {
      number: 5,
      title: 'Result',
      description: 'After measurement, the qubit is in a definite state (either |0⟩ or |1⟩), and the superposition is destroyed.',
    },
  ],
  applications: [
    {
      title: 'Quantum Algorithms',
      problem: 'Classical algorithms process one input at a time, limiting speed for certain problems.',
      solution: 'Qubits in superposition allow quantum algorithms to explore multiple solution paths simultaneously.',
    },
    {
      title: 'Quantum Cryptography',
      problem: 'Classical encryption can be broken with enough computing power.',
      solution: 'Qubits enable quantum key distribution where any eavesdropping attempt disturbs the quantum state and is detectable.',
    },
    {
      title: 'Quantum Simulation',
      problem: 'Simulating quantum systems on classical computers becomes exponentially harder as system size grows.',
      solution: 'Qubits naturally represent quantum states, making quantum simulation efficient on quantum computers.',
    },
  ],
  pythonHandsOn: {
    title: 'Visualizing Qubit States',
    description: 'We\'ll create and visualize different qubit states using Python and basic linear algebra.',
    packages: ['numpy', 'matplotlib'],
    installCommand: '!pip install numpy matplotlib',
    imports: [
      {
        code: 'import numpy as np',
        explanation: 'NumPy provides array operations and complex number support for quantum states.',
      },
      {
        code: 'import matplotlib.pyplot as plt',
        explanation: 'Matplotlib helps visualize qubit states and probabilities.',
      },
    ],
    code: [
      {
        code: '# Define basis states',
        explanation: 'Create the fundamental quantum states |0⟩ and |1⟩.',
      },
      {
        code: 'ket_0 = np.array([1, 0], dtype=complex)',
        explanation: '|0⟩ represented as column vector [1, 0].',
      },
      {
        code: 'ket_1 = np.array([0, 1], dtype=complex)',
        explanation: '|1⟩ represented as column vector [0, 1].',
      },
      {
        code: '',
        explanation: '',
      },
      {
        code: '# Create different qubit states',
        explanation: 'Define several interesting qubit states.',
      },
      {
        code: 'state_0 = ket_0  # Pure |0⟩',
        explanation: 'Qubit definitely in state 0.',
      },
      {
        code: 'state_1 = ket_1  # Pure |1⟩',
        explanation: 'Qubit definitely in state 1.',
      },
      {
        code: 'state_plus = (ket_0 + ket_1) / np.sqrt(2)  # Equal superposition',
        explanation: '|+⟩ = (|0⟩ + |1⟩)/√2, equal probability of 0 or 1.',
      },
      {
        code: 'state_minus = (ket_0 - ket_1) / np.sqrt(2)  # Another superposition',
        explanation: '|−⟩ = (|0⟩ − |1⟩)/√2, equal probability but different phase.',
      },
      {
        code: 'state_custom = (0.6 * ket_0 + 0.8 * ket_1)  # Custom superposition',
        explanation: 'Custom state: 36% chance of |0⟩, 64% chance of |1⟩.',
      },
      {
        code: '',
        explanation: '',
      },
      {
        code: '# Function to calculate probabilities',
        explanation: 'Compute measurement probabilities from quantum state.',
      },
      {
        code: 'def get_probabilities(state):',
        explanation: 'Calculate |α|² and |β|² from the state vector.',
      },
      {
        code: '    prob_0 = np.abs(state[0])**2',
        explanation: 'Probability of measuring |0⟩.',
      },
      {
        code: '    prob_1 = np.abs(state[1])**2',
        explanation: 'Probability of measuring |1⟩.',
      },
      {
        code: '    return prob_0, prob_1',
        explanation: 'Return both probabilities.',
      },
      {
        code: '',
        explanation: '',
      },
      {
        code: '# Function to visualize qubit state',
        explanation: 'Create visual representation of measurement probabilities.',
      },
      {
        code: 'def visualize_state(state, title):',
        explanation: 'Plot probability distribution for a qubit state.',
      },
      {
        code: '    prob_0, prob_1 = get_probabilities(state)',
        explanation: 'Get measurement probabilities.',
      },
      {
        code: '    labels = [\'|0⟩\', \'|1⟩\']',
        explanation: 'Labels for the basis states.',
      },
      {
        code: '    probabilities = [prob_0, prob_1]',
        explanation: 'Store probabilities in a list.',
      },
      {
        code: '    colors = [\'#3b82f6\', \'#8b5cf6\']',
        explanation: 'Blue for |0⟩, purple for |1⟩.',
      },
      {
        code: '    ',
        explanation: '',
      },
      {
        code: '    plt.figure(figsize=(6, 4))',
        explanation: 'Create figure for the plot.',
      },
      {
        code: '    plt.bar(labels, probabilities, color=colors, alpha=0.7, edgecolor=\'black\')',
        explanation: 'Create bar chart of probabilities.',
      },
      {
        code: '    plt.ylabel(\'Probability\')',
        explanation: 'Label y-axis.',
      },
      {
        code: '    plt.title(title)',
        explanation: 'Add title to the plot.',
      },
      {
        code: '    plt.ylim(0, 1)',
        explanation: 'Set y-axis from 0 to 1 (100%).',
      },
      {
        code: '    plt.grid(axis=\'y\', alpha=0.3)',
        explanation: 'Add horizontal grid lines.',
      },
      {
        code: '    ',
        explanation: '',
      },
      {
        code: '    # Add probability values on bars',
        explanation: 'Display exact probabilities on each bar.',
      },
      {
        code: '    for i, (label, prob) in enumerate(zip(labels, probabilities)):',
        explanation: 'Loop through labels and probabilities.',
      },
      {
        code: '        plt.text(i, prob + 0.02, f\'{prob:.3f}\', ha=\'center\', fontweight=\'bold\')',
        explanation: 'Display probability value above each bar.',
      },
      {
        code: '    ',
        explanation: '',
      },
      {
        code: '    plt.tight_layout()',
        explanation: 'Adjust layout to prevent label cutoff.',
      },
      {
        code: '    plt.show()',
        explanation: 'Display the plot.',
      },
      {
        code: '',
        explanation: '',
      },
      {
        code: '# Visualize different states',
        explanation: 'Create visualizations for each qubit state.',
      },
      {
        code: 'visualize_state(state_0, \'Pure State |0⟩\')',
        explanation: 'Show 100% probability of measuring |0⟩.',
      },
      {
        code: 'visualize_state(state_1, \'Pure State |1⟩\')',
        explanation: 'Show 100% probability of measuring |1⟩.',
      },
      {
        code: 'visualize_state(state_plus, \'Equal Superposition |+⟩\')',
        explanation: 'Show 50-50 superposition.',
      },
      {
        code: 'visualize_state(state_custom, \'Custom Superposition (0.6|0⟩ + 0.8|1⟩)\')',
        explanation: 'Show custom probability distribution.',
      },
      {
        code: '',
        explanation: '',
      },
      {
        code: '# Verify normalization',
        explanation: 'Check that probabilities sum to 1.',
      },
      {
        code: 'print("\\nVerifying Normalization:")',
        explanation: 'Print section header.',
      },
      {
        code: 'for name, state in [(\'|0⟩\', state_0), (\'|1⟩\', state_1), (\'|+⟩\', state_plus), (\'Custom\', state_custom)]:',
        explanation: 'Loop through all states.',
      },
      {
        code: '    prob_0, prob_1 = get_probabilities(state)',
        explanation: 'Calculate probabilities.',
      },
      {
        code: '    total = prob_0 + prob_1',
        explanation: 'Sum probabilities.',
      },
      {
        code: '    print(f\'{name}: P(0)={prob_0:.3f}, P(1)={prob_1:.3f}, Total={total:.3f}\')',
        explanation: 'Display probabilities and their sum.',
      },
    ],
    executionFlow: [
      {
        number: 1,
        title: 'Define Basis States',
        description: 'Create mathematical representations of |0⟩ and |1⟩ as vectors.',
      },
      {
        number: 2,
        title: 'Create Superpositions',
        description: 'Build various qubit states including equal and custom superpositions.',
      },
      {
        number: 3,
        title: 'Calculate Probabilities',
        description: 'Compute measurement probabilities from probability amplitudes.',
      },
      {
        number: 4,
        title: 'Visualize States',
        description: 'Create bar charts showing the probability distribution for each state.',
      },
      {
        number: 5,
        title: 'Verify Normalization',
        description: 'Confirm that all probabilities sum to 1 (100%).',
      },
    ],
    input: 'Quantum state vectors representing different qubit states.',
    output: 'Bar charts visualizing measurement probabilities and normalization verification.',
    interpretation: 'The visualizations show that pure states (|0⟩ and |1⟩) have 100% probability for one outcome, while superposition states show distributed probabilities. The equal superposition |+⟩ has exactly 50% for each outcome. The custom state shows 36% for |0⟩ and 64% for |1⟩, demonstrating how probability amplitudes determine measurement outcomes.',
    colabInstructions: [
      'Open Google Colab',
      'Create a new notebook',
      'Copy the complete code',
      'Paste into a cell',
      'Run the cell',
      'Observe the probability distributions for different qubit states',
    ],
  },
  mcqs: [
    {
      id: 'q1',
      question: 'What is the main difference between a classical bit and a qubit?',
      options: [
        { id: 'a', text: 'Qubits are faster' },
        { id: 'b', text: 'Qubits can exist in superposition of 0 and 1 simultaneously' },
        { id: 'c', text: 'Qubits use less energy' },
        { id: 'd', text: 'Qubits are smaller' },
      ],
      correctAnswer: 'b',
      explanation: 'The fundamental difference is that a qubit can exist in a superposition of both |0⟩ and |1⟩ states simultaneously, while a classical bit is always definitively either 0 or 1. This quantum property enables quantum parallelism.',
      incorrectFeedback: 'While qubits might have various physical advantages, the defining characteristic is superposition — the ability to be in multiple states at once until measured.',
    },
    {
      id: 'q2',
      question: 'What does the normalization condition |α|² + |β|² = 1 ensure?',
      options: [
        { id: 'a', text: 'The qubit has enough energy' },
        { id: 'b', text: 'The total probability of all measurement outcomes equals 100%' },
        { id: 'c', text: 'The qubit operates at maximum speed' },
        { id: 'd', text: 'The qubit cannot be measured' },
      ],
      correctAnswer: 'b',
      explanation: 'The normalization condition ensures that when we measure the qubit, the probabilities of getting |0⟩ or |1⟩ add up to exactly 1 (100%). This is a fundamental requirement of probability theory.',
      incorrectFeedback: 'Normalization is about probability. Since the qubit must collapse to either |0⟩ or |1⟩ when measured, the probabilities must sum to 1 (certainty that one outcome will occur).',
    },
    {
      id: 'q3',
      question: 'If a qubit is in the state |ψ⟩ = (1/√2)|0⟩ + (1/√2)|1⟩, what is the probability of measuring |0⟩?',
      options: [
        { id: 'a', text: '0%' },
        { id: 'b', text: '25%' },
        { id: 'c', text: '50%' },
        { id: 'd', text: '100%' },
      ],
      correctAnswer: 'c',
      explanation: 'The probability of measuring |0⟩ is |α|² = (1/√2)² = 1/2 = 50%. This is an equal superposition state where both outcomes are equally likely.',
      incorrectFeedback: 'To find the probability, square the magnitude of the amplitude: |1/√2|² = (1/√2)² = 1/2 = 50%.',
    },
    {
      id: 'q4',
      question: 'What happens to a qubit\'s superposition when it is measured?',
      options: [
        { id: 'a', text: 'Nothing changes' },
        { id: 'b', text: 'It collapses to either |0⟩ or |1⟩' },
        { id: 'c', text: 'It becomes stronger' },
        { id: 'd', text: 'It creates more qubits' },
      ],
      correctAnswer: 'b',
      explanation: 'Measurement causes wavefunction collapse. The qubit\'s superposition is destroyed, and it definitively becomes either |0⟩ or |1⟩ based on its probability amplitudes. This is irreversible — the superposition is lost.',
      incorrectFeedback: 'Measurement is a destructive process in quantum mechanics. When you measure a qubit in superposition, it "chooses" one of the basis states and loses its superposition.',
    },
    {
      id: 'q5',
      question: 'Can we directly observe a qubit while it is in superposition?',
      options: [
        { id: 'a', text: 'Yes, with the right equipment' },
        { id: 'b', text: 'No, observation (measurement) causes collapse' },
        { id: 'c', text: 'Yes, but only for a few seconds' },
        { id: 'd', text: 'Yes, if we measure very carefully' },
      ],
      correctAnswer: 'b',
      explanation: 'We cannot directly observe a superposition because the act of measurement itself causes the qubit to collapse to a definite state. We can only infer superposition by measuring many identically prepared qubits and observing the statistical distribution of outcomes.',
      incorrectFeedback: 'This is a fundamental principle of quantum mechanics: observation disturbs the system. We can measure the state, but measuring destroys the superposition. We cannot "peek" at a superposition without collapsing it.',
    },
  ],
};
