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
    title: 'Visualizing Qubit States with Qiskit',
    description: 'Create, manipulate, and simulate different qubit states using IBM Qiskit and Statevector analysis.',
    packages: ['qiskit', 'qiskit-aer', 'matplotlib', 'numpy'],
    installCommand: 'pip install qiskit qiskit-aer matplotlib numpy',
    imports: [
      {
        code: 'from qiskit import QuantumCircuit',
        explanation: 'Qiskit class to define and assemble quantum circuits.',
      },
      {
        code: 'from qiskit.quantum_info import Statevector',
        explanation: 'Simulates exact quantum statevectors and calculates probabilities.',
      },
      {
        code: 'import numpy as np',
        explanation: 'Numerical support for trigonometric angles and array operations.',
      },
      {
        code: 'import matplotlib.pyplot as plt',
        explanation: 'Visualizes probability distributions.',
      },
    ],
    code: [
      {
        code: '# 1. State |0>: Default initial state of a qubit',
        explanation: 'Create 1-qubit circuit with no gates; state remains |0>.',
      },
      {
        code: 'qc_0 = QuantumCircuit(1)',
        explanation: 'Initialize single qubit in state |0>.',
      },
      {
        code: 'sv_0 = Statevector.from_instruction(qc_0)',
        explanation: 'Extract statevector for |0>.',
      },
      {
        code: '',
        explanation: '',
      },
      {
        code: '# 2. State |1>: Apply Pauli-X (quantum NOT) gate',
        explanation: 'Flips |0> to |1>.',
      },
      {
        code: 'qc_1 = QuantumCircuit(1)',
        explanation: 'Create new 1-qubit circuit.',
      },
      {
        code: 'qc_1.x(0)',
        explanation: 'Apply Pauli-X gate to rotate |0> to |1>.',
      },
      {
        code: 'sv_1 = Statevector.from_instruction(qc_1)',
        explanation: 'Extract statevector for |1>.',
      },
      {
        code: '',
        explanation: '',
      },
      {
        code: '# 3. State |+>: Equal superposition with Hadamard (H) gate',
        explanation: 'Creates (|0> + |1>)/sqrt(2).',
      },
      {
        code: 'qc_plus = QuantumCircuit(1)',
        explanation: 'Create 1-qubit circuit.',
      },
      {
        code: 'qc_plus.h(0)',
        explanation: 'Apply Hadamard gate creating 50/50 superposition.',
      },
      {
        code: 'sv_plus = Statevector.from_instruction(qc_plus)',
        explanation: 'Extract statevector for |+>.',
      },
      {
        code: '',
        explanation: '',
      },
      {
        code: '# 4. Custom Superposition: 0.6|0> + 0.8|1> using Ry rotation',
        explanation: 'Ry(theta) sets alpha = cos(theta/2) and beta = sin(theta/2).',
      },
      {
        code: 'theta = 2 * np.arccos(0.6)  # cos(theta/2) = 0.6, sin(theta/2) = 0.8',
        explanation: 'Calculate rotation angle for alpha=0.6, beta=0.8.',
      },
      {
        code: 'qc_custom = QuantumCircuit(1)',
        explanation: 'Create custom circuit.',
      },
      {
        code: 'qc_custom.ry(theta, 0)',
        explanation: 'Rotate qubit about Y-axis by calculated angle.',
      },
      {
        code: 'sv_custom = Statevector.from_instruction(qc_custom)',
        explanation: 'Extract custom statevector.',
      },
      {
        code: '',
        explanation: '',
      },
      {
        code: '# Print Statevectors & Normalization Check',
        explanation: 'Display complex amplitudes and verify sum of squared magnitudes equals 1.',
      },
      {
        code: 'states = [("|0>", sv_0), ("|1>", sv_1), ("|+>", sv_plus), ("Custom (0.6|0>+0.8|1>)", sv_custom)]',
        explanation: 'List of prepared quantum states.',
      },
      {
        code: 'print("=== Qiskit Qubit State Analysis ===")',
        explanation: 'Section header.',
      },
      {
        code: 'for name, sv in states:',
        explanation: 'Iterate over states.',
      },
      {
        code: '    probs = sv.probabilities_dict()',
        explanation: 'Calculate measurement probabilities for basis states.',
      },
      {
        code: '    p0 = probs.get("0", 0.0)',
        explanation: 'Probability of measuring 0.',
      },
      {
        code: '    p1 = probs.get("1", 0.0)',
        explanation: 'Probability of measuring 1.',
      },
      {
        code: '    print(f"{name:26s} -> State: {sv.data.round(3)} | P(0)={p0:.3f}, P(1)={p1:.3f} | Sum={p0+p1:.3f}")',
        explanation: 'Display state amplitudes and verified normalization.',
      },
      {
        code: '',
        explanation: '',
      },
      {
        code: '# Plot probabilities',
        explanation: 'Generate bar chart comparison in Matplotlib.',
      },
      {
        code: 'labels = ["|0>", "|1>", "|+>", "Custom"]',
        explanation: 'State labels for plotting.',
      },
      {
        code: 'p0_vals = [s[1].probabilities()[0] for s in states]',
        explanation: 'List of P(0) values.',
      },
      {
        code: 'p1_vals = [s[1].probabilities()[1] for s in states]',
        explanation: 'List of P(1) values.',
      },
      {
        code: 'x = np.arange(len(labels))',
        explanation: 'X-axis positions.',
      },
      {
        code: 'plt.figure(figsize=(8, 4))',
        explanation: 'Create figure.',
      },
      {
        code: 'plt.bar(x - 0.15, p0_vals, width=0.3, label="P(0)", color="#3b82f6")',
        explanation: 'Blue bars for P(0).',
      },
      {
        code: 'plt.bar(x + 0.15, p1_vals, width=0.3, label="P(1)", color="#8b5cf6")',
        explanation: 'Purple bars for P(1).',
      },
      {
        code: 'plt.xticks(x, labels)',
        explanation: 'Set state label tickmarks.',
      },
      {
        code: 'plt.ylabel("Measurement Probability")',
        explanation: 'Set y-axis label.',
      },
      {
        code: 'plt.title("Qubit Measurement Probabilities simulated in Qiskit")',
        explanation: 'Set plot title.',
      },
      {
        code: 'plt.ylim(0, 1.1)',
        explanation: 'Set y limit.',
      },
      {
        code: 'plt.legend()',
        explanation: 'Show legend.',
      },
      {
        code: 'plt.grid(axis="y", alpha=0.3)',
        explanation: 'Add grid lines.',
      },
      {
        code: 'plt.tight_layout()',
        explanation: 'Adjust layout.',
      },
      {
        code: 'plt.show()',
        explanation: 'Display plot.',
      },
    ],
    executionFlow: [
      {
        number: 1,
        title: 'Initialize Circuits with Qiskit',
        description: 'Construct QuantumCircuit instances for |0>, |1>, |+>, and custom superposition.',
      },
      {
        number: 2,
        title: 'Apply Unitary Gates',
        description: 'Use Pauli-X for bit-flip, Hadamard for equal superposition, and Ry for custom amplitude angles.',
      },
      {
        number: 3,
        title: 'Extract Statevectors',
        description: 'Use Qiskit Statevector simulator to compute complex probability amplitudes.',
      },
      {
        number: 4,
        title: 'Verify Normalization',
        description: 'Calculate probabilities using the Born rule (|alpha|^2 + |beta|^2 = 1.0).',
      },
      {
        number: 5,
        title: 'Visualize Probabilities',
        description: 'Plot P(0) and P(1) bar chart comparison across all prepared states.',
      },
    ],
    input: 'Qiskit QuantumCircuits on 1 qubit with X, H, and Ry gates.',
    output: '|0>: P(0)=1.000, P(1)=0.000\n|1>: P(0)=0.000, P(1)=1.000\n|+>: P(0)=0.500, P(1)=0.500\nCustom: P(0)=0.360, P(1)=0.640',
    interpretation: 'Qiskit demonstrates that qubits can be precisely rotated across the continuous Bloch sphere. While classical bits are strictly 0 or 1, a qubit in superposition simultaneously carries probability amplitudes for both states, collapsing to 0 or 1 upon measurement according to the Born rule.',
    colabInstructions: [
      'Click "Copy for Google Colab" to copy the complete runnable script',
      'Open Google Colab at colab.research.google.com',
      'Paste into the first cell and press Shift + Enter to run',
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
