import { Topic } from '@/lib/types';

export const qubit: Topic = {
  id: 'qubit',
  moduleId: 'quantum-foundations',
  number: 7,
  title: 'Qubit',
  description: 'Understand the fundamental unit of quantum information — the qubit — and how it differs from classical bits.',
  objectives: [
    'Understand quantum bits (qubits) as the fundamental unit of quantum information',
    'Master column matrix representation: |0⟩ (Spin Down) and |1⟩ (Spin Up)',
    'Explore quantum superposition, probability amplitudes, and normalization',
    'Understand how measurement outcomes depend on the alignment of the measurement apparatus',
    'Learn mathematical operations on qubits: inner products and adjoints (conjugate transpose)',
    'Preview Bra-Ket notation and map course progression toward coding real quantum circuits',
  ],
  story: `Imagine flipping a coin. While it is spinning in the air, it is neither heads nor tails — it is in a dynamic state of "both." Only when you catch it and look does it snap into a definite single outcome.

Classical computers work with bits that are always rigid — either 0 or 1, like a coin lying flat on a table showing heads or tails. There is no in-between.

In quantum computing, our basic unit of information is the **qubit** (quantum bit). Qubits are physical quantum systems—such as the spin of an electron or the polarization of a photon. An electron can have its spin pointing down (|0⟩) or up (|1⟩). But before you measure it, quantum mechanics permits the electron to exist in an active **superposition**: it is simultaneously Spin Up and Spin Down!

This is not a matter of human ignorance; it is a fundamental property of our universe. By learning how qubits work mathematically as column vectors and physically through quantum mechanics, you build the foundation for our entire journey: starting with why quantum computing matters, advancing to quantum logic gates and multi-qubit circuits, and ultimately running real quantum algorithms on cloud-based quantum computers!`,
  motivation: `**Why learn about qubits and course progression?**

1. **Foundational unit of quantum information**: Just as the bit underpins all classical software, the qubit is the fundamental currency of quantum computing.
2. **Superposition enables exponential state space**: While a classical register holds one number at a time, $n$ qubits can exist in a superposition of all $2^n$ computational states at once.
3. **Course Progression & Long-Term Goals**:
   - **Phase 1 (Foundations)**: Master the physics of qubits, superposition, interference, and entanglement with zero prerequisites.
   - **Phase 2 (Circuit Construction)**: Learn quantum logic gates (Pauli-X, Hadamard, CNOT) and construct quantum circuits.
   - **Phase 3 (Hands-On Coding & Execution)**: Write runnable Python code in Qiskit, simulate quantum registers, and deploy circuits to real IBM Quantum processors in the cloud.
4. **Physical Reality**: Real qubits exist in labs today using superconducting transmon circuits, trapped atomic ions, and photon waveguides.`,
  funLearning: {
    analogyTitle: 'The Tumbling Silver Coin & The Dual-Beam Flashlight',
    storyAnalogy: 'Think of a classical bit as an ordinary light bulb: it can only be clicked OFF (0) or ON (1). Now imagine a special quantum flashlight with two color beams: Blue (Spin Down, 0) and Red (Spin Up, 1). A qubit is like a dial that lets you blend both colors at any intensity you want! When the dial is set to 50/50, the light shines pure Purple. But here is the quantum magic: our measuring detector cannot see Purple! When the detector measures the light, the purple beam instantly snaps into either 100% pure Blue or 100% pure Red. Before measurement, it was genuinely both!',
    interactiveThoughtExperiment: 'Try this experiment in your imagination: You spin a shiny quarter on a smooth table. While it is spinning, you slide a cardboard card toward it from the side. If your card is tilted horizontally, the coin is forced to slap down flat (measuring in the computational basis). If you tilt your card at an angle, you alter the physics of how it gets caught! This is exactly how quantum measurement apparatus alignment works: the angle of your detector determines what physical property of the qubit you measure.',
    takeaway: 'A classical bit is a binary switch (0 or 1). A qubit is a 2-element column vector $\\begin{pmatrix} c_0 \\\\ c_1 \\end{pmatrix}$ holding probability amplitudes. Until measured, it lives in a continuous world of possibilities!',
  },
  concept: {
    simple: `A qubit (quantum bit) is the basic unit of quantum information. 

1. **Vector Representation (Column Matrices)**:
   A qubit's state is written as a 2-element column vector:
   - State $|0\\rangle$ (Spin Down): $\\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}$ — upper element is the amplitude for 0.
   - State $|1\\rangle$ (Spin Up): $\\begin{pmatrix} 0 \\\\ 1 \\end{pmatrix}$ — lower element is the amplitude for 1.

2. **Superposition & Probability**:
   A qubit can be in a superposition: $\\begin{pmatrix} 1/\\sqrt{2} \\\\ 1/\\sqrt{2} \\end{pmatrix}$.
   To find the probability of each outcome, we square the magnitude of each amplitude:
   $(1/\\sqrt{2})^2 = 1/2 = 50\\%$ chance of 0, and $(1/\\sqrt{2})^2 = 1/2 = 50\\%$ chance of 1. The probabilities always sum to 1.0!

3. **Measurement Apparatus Alignment**:
   When you measure a qubit, the outcome depends on the physical alignment of your measurement apparatus with the qubit state. Perfect alignment yields 100% certainty for that spin state; tilting or misaligning the apparatus creates probabilistic outcomes based on the projection angle.

4. **Mathematical Operations**:
   Quantum mechanics uses **inner products** (matrix multiplication) to calculate probabilities, and takes the **adjoint** (transpose and complex conjugate $\\dagger$) of state vectors to turn column vectors into row vectors.

5. **Bra-Ket Preview**:
   Instead of writing full matrices every time, physicists use Bra-Ket notation: the Ket $|\\psi\\rangle$ is the column vector, and the Bra $\\langle\\psi|$ is its adjoint row vector.`,
    technical: `A qubit is a two-level quantum system described by a state vector $|\\psi\\rangle$ in a 2-dimensional complex Hilbert space $\\mathcal{H} = \\mathbb{C}^2$.
Represented as a column vector:
$$|\\psi\\rangle = \\begin{pmatrix} \\alpha \\\\ \\beta \\end{pmatrix} = \\alpha \\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix} + \\beta \\begin{pmatrix} 0 \\\\ 1 \\end{pmatrix} = \\alpha |0\\rangle + \\beta |1\\rangle$$
where $\\alpha, \\beta \\in \\mathbb{C}$ are complex probability amplitudes satisfying the normalization constraint $\\langle\\psi|\\psi\\rangle = |\\alpha|^2 + |\\beta|^2 = 1$.

Measurement in an orthonormal basis $\\{|u_0\\rangle, |u_1\\rangle\\}$ defined by apparatus alignment yields outcome $i$ with probability $P(i) = |\\langle u_i | \\psi \\rangle|^2$ via the Born rule. The adjoint operation $|\\psi\\rangle^\\dagger = \\begin{pmatrix} \\alpha^* & \\beta^* \\end{pmatrix} = \\langle\\psi|$ converts ket column vectors into bra row vectors, enabling inner product evaluation $\\langle\\phi|\\psi\\rangle$.`,
  },
  keyTerms: [
    {
      term: 'Qubit',
      simple: 'The basic unit of quantum information, represented as a column vector with two probability amplitudes.',
      technical: 'A two-level quantum system described by a normalized state vector in 2D complex Hilbert space $\\mathbb{C}^2$.',
    },
    {
      term: 'Column Matrix Representation',
      simple: 'Writing a qubit as a 2-number column: top number is amplitude for Spin Down (0), bottom number is amplitude for Spin Up (1).',
      technical: 'Vector representation in computational basis: $|0\\rangle = [1, 0]^T$ and $|1\\rangle = [0, 1]^T$.',
    },
    {
      term: 'Superposition & Normalization',
      simple: 'Being in both states at once, where the squared probabilities of all outcomes must add up to exactly 100% (1.0).',
      technical: 'Linear combination $|\\psi\\rangle = \\alpha|0\\rangle + \\beta|1\\rangle$ satisfying the normalization constraint $|\\alpha|^2 + |\\beta|^2 = 1$.',
    },
    {
      term: 'Measurement Apparatus Alignment',
      simple: 'How your measuring device is physically tilted relative to the qubit: perfect alignment gives 100% certainty; misalignment gives probabilistic outcomes.',
      technical: 'Choice of measurement basis $M = \\sum_i \\lambda_i |u_i\\rangle\\langle u_i|$; projection probabilities follow $P(i) = |\\langle u_i | \\psi \\rangle|^2$.',
    },
    {
      term: 'Adjoint (Conjugate Transpose $\\dagger$)',
      simple: 'Flipping a column vector on its side into a row vector and taking the complex conjugate of any imaginary numbers.',
      technical: 'Hermitian adjoint operation $A^\\dagger = (A^T)^*$; maps ket $|\\psi\\rangle \\in \\mathcal{H}$ to dual bra functional $\\langle\\psi| \\in \\mathcal{H}^*$.',
    },
    {
      term: 'Inner Product',
      simple: 'Multiplying a row vector (bra) by a column vector (ket) to get a single number representing state overlap and probability.',
      technical: 'Scalar product $\\langle\\phi|\\psi\\rangle = \\sum_i \\phi_i^* \\psi_i$ in Hilbert space defining metric norm and transition amplitudes.',
    },
    {
      term: 'Bra-Ket Preview',
      simple: 'A clean shorthand: Ket $|\\psi\\rangle$ is the column vector, Bra $\\langle\\psi|$ is the matching row vector.',
      technical: 'Dirac notation providing coordinate-free representation of vectors and linear functionals in Hilbert space.',
    },
  ],
  equations: [
    {
      latex: '|\\psi\\rangle = \\begin{pmatrix} \\alpha \\\\ \\beta \\end{pmatrix} = \\alpha \\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix} + \\beta \\begin{pmatrix} 0 \\\\ 1 \\end{pmatrix} = \\alpha|0\\rangle + \\beta|1\\rangle',
      explanation: 'Column vector matrix representation of a single qubit. The top element alpha is the amplitude for Spin Down (|0>), and the bottom element beta is the amplitude for Spin Up (|1>).',
      symbols: [
        {
          symbol: '\\begin{pmatrix} \\alpha \\\\ \\beta \\end{pmatrix}',
          meaning: '2-element state vector',
          interpretation: 'Column matrix holding quantum probability amplitudes',
        },
        {
          symbol: '\\alpha (\\text{top})',
          meaning: 'Probability amplitude for |0⟩ (Spin Down)',
          interpretation: 'Determines probability of measuring 0: P(0) = |α|²',
        },
        {
          symbol: '\\beta (\\text{bottom})',
          meaning: 'Probability amplitude for |1⟩ (Spin Up)',
          interpretation: 'Determines probability of measuring 1: P(1) = |β|²',
        },
      ],
      example: {
        description: 'Equal superposition state |+>: alpha = 1/sqrt(2), beta = 1/sqrt(2):',
        calculation: `|\\psi\\rangle = \\begin{pmatrix} 1/\\sqrt{2} \\\\ 1/\\sqrt{2} \\end{pmatrix}
P(0) = |1/\\sqrt{2}|^2 = 1/2 = 50\\%
P(1) = |1/\\sqrt{2}|^2 = 1/2 = 50\\%
Total = 50\\% + 50\\% = 100\\%`,
        result: 'A 50/50 chance of measuring 0 or 1, completely balanced.',
      },
    },
    {
      latex: 'P(0) = |\\langle 0 \\mid \\psi \\rangle|^2 = \\left| \\begin{pmatrix} 1 & 0 \\end{pmatrix} \\begin{pmatrix} \\alpha \\\\ \\beta \\end{pmatrix} \\right|^2 = |\\alpha|^2',
      explanation: 'Inner product calculation using the adjoint bra ⟨0| and ket |ψ⟩ to find the measurement probability of outcome 0.',
      symbols: [
        {
          symbol: '\\langle 0 |',
          meaning: 'Bra vector (row matrix)',
          interpretation: 'Adjoint [1, 0] of column vector |0⟩',
        },
        {
          symbol: '|\\psi\\rangle',
          meaning: 'Ket vector (column matrix)',
          interpretation: 'State vector [alpha, beta]^T',
        },
        {
          symbol: 'P(0)',
          meaning: 'Measurement probability',
          interpretation: 'Squared modulus of the inner product',
        },
      ],
      example: {
        description: 'For vector [0.6, 0.8]^T, calculate probability of measuring 0 and 1:',
        calculation: `P(0) = |0.6|^2 = 0.36 = 36\\%
P(1) = |0.8|^2 = 0.64 = 64\\%
36\\% + 64\\% = 100\\% ✓`,
        result: 'The qubit has a 36% chance of measuring 0 and a 64% chance of measuring 1.',
      },
    },
    {
      latex: '|\\alpha|^2 + |\\beta|^2 = 1',
      explanation: 'The fundamental normalization condition: the total probability of all possible measurement outcomes must equal 1 (100%).',
      symbols: [
        {
          symbol: '|\\alpha|^2',
          meaning: 'Probability of measuring |0⟩',
          interpretation: 'Chance of seeing Spin Down (0)',
        },
        {
          symbol: '|\\beta|^2',
          meaning: 'Probability of measuring |1⟩',
          interpretation: 'Chance of seeing Spin Up (1)',
        },
      ],
      example: {
        description: 'Verification of state vector [1/sqrt(2), 1/sqrt(2)]^T:',
        calculation: `|1/\\sqrt{2}|^2 + |1/\\sqrt{2}|^2 = 0.5 + 0.5 = 1.00 ✓`,
        result: 'Normalized valid quantum state vector.',
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
    title: 'Lesson 3: Quantum Measurement with a One-Qubit Circuit',
    description: 'Construct a 1-qubit circuit with Hadamard superposition, measure on Aer simulator, and plot measurement counts using matplotlib.',
    packages: ['qiskit', 'qiskit-aer', 'matplotlib'],
    installCommand: 'pip install qiskit qiskit-aer matplotlib',
    imports: [
      {
        code: 'from qiskit import QuantumCircuit',
        explanation: 'Create and configure quantum circuits in Qiskit.',
      },
      {
        code: 'from qiskit_aer import Aer',
        explanation: 'Import Qiskit Aer high-performance simulator backend.',
      },
      {
        code: 'from qiskit.visualization import plot_histogram',
        explanation: 'Visualize quantum measurement statistics.',
      },
      {
        code: 'import matplotlib.pyplot as plt',
        explanation: 'Render bar charts and measurement distributions.',
      },
    ],
    code: [
      {
        code: '# Create a quantum circuit with 1 qubit and 1 classical bit',
        explanation: 'Allocate quantum register and classical bit for measurement.',
      },
      {
        code: 'qc = QuantumCircuit(1, 1)',
        explanation: 'Initialize 1 qubit in state |0> and 1 classical bit.',
      },
      {
        code: '',
        explanation: '',
      },
      {
        code: '# Apply Hadamard gate to create superposition',
        explanation: 'Rotate state vector to equator (|+> state).',
      },
      {
        code: 'qc.h(0)',
        explanation: 'Apply Hadamard gate on qubit 0.',
      },
      {
        code: '',
        explanation: '',
      },
      {
        code: '# Measure the qubit',
        explanation: 'Project quantum superposition into classical bit.',
      },
      {
        code: 'qc.measure(0, 0)',
        explanation: 'Measure qubit 0 into classical bit 0.',
      },
      {
        code: '',
        explanation: '',
      },
      {
        code: '# Use Qiskit\'s Aer simulator',
        explanation: 'Configure aer_simulator backend.',
      },
      {
        code: 'simulator = Aer.get_backend(\'aer_simulator\')',
        explanation: 'Load state simulator.',
      },
      {
        code: '',
        explanation: '',
      },
      {
        code: '# Run the circuit on the simulator',
        explanation: 'Sample 1000 measurement shots.',
      },
      {
        code: 'job = simulator.run(qc, shots=1000)  # 1000 measurements',
        explanation: 'Execute quantum simulation job.',
      },
      {
        code: 'result = job.result()',
        explanation: 'Retrieve job execution results.',
      },
      {
        code: '',
        explanation: '',
      },
      {
        code: '# Get the measurement results',
        explanation: 'Extract dictionary of outcome counts.',
      },
      {
        code: 'counts = result.get_counts(qc)',
        explanation: 'Read counts dictionary.',
      },
      {
        code: 'print(f"Measurement Counts: {counts}")',
        explanation: 'Display outcome tally (e.g. {\'0\': ~500, \'1\': ~500}).',
      },
      {
        code: '',
        explanation: '',
      },
      {
        code: '# Convert dictionary keys and values into lists',
        explanation: 'Format data for bar chart visualization.',
      },
      {
        code: 'labels = list(counts.keys())  # [\'0\', \'1\']',
        explanation: 'Basis state labels.',
      },
      {
        code: 'values = list(counts.values())  # [490, 510]',
        explanation: 'Observed frequency values.',
      },
      {
        code: 'colors = [\'blue\', \'red\']',
        explanation: 'Distinct colors for basis states.',
      },
      {
        code: '',
        explanation: '',
      },
      {
        code: '# Plot the bar chart',
        explanation: 'Render comparative histogram.',
      },
      {
        code: 'plt.bar(labels, values, color=colors)',
        explanation: 'Draw bar chart.',
      },
      {
        code: 'plt.xlabel("Measurement Outcome")',
        explanation: 'Set X-axis label.',
      },
      {
        code: 'plt.ylabel("Count")',
        explanation: 'Set Y-axis label.',
      },
      {
        code: 'plt.title("Quantum Measurement Results (Lesson 3)")',
        explanation: 'Set chart title.',
      },
      {
        code: 'plt.show()',
        explanation: 'Display plot figure.',
      },
    ],
    executionFlow: [
      {
        number: 1,
        title: 'Circuit Allocation',
        description: 'Create QuantumCircuit(1, 1) initializing qubit 0 in ground state |0>.',
      },
      {
        number: 2,
        title: 'Apply Hadamard Gate',
        description: 'Transform |0> into equal superposition (|0> + |1>)/sqrt(2).',
      },
      {
        number: 3,
        title: 'Perform Measurement',
        description: 'Collapse quantum wavefunction into classical bit 0 with Born rule probabilities.',
      },
      {
        number: 4,
        title: 'Simulate on Aer Backend',
        description: 'Run 1,000 shots on AerSimulator to observe statistical 50/50 convergence.',
      },
      {
        number: 5,
        title: 'Histogram Visualization',
        description: 'Plot measurement distribution comparing |0> and |1> outcomes.',
      },
    ],
    input: 'QuantumCircuit(1, 1) with H gate and projective measurement.',
    output: "Measurement Counts: {'0': 502, '1': 498}",
    interpretation: 'A single qubit in superposition collapses with 50% probability to outcome 0 and 50% probability to outcome 1, visually verified across 1000 simulated shots.',
    colabInstructions: [
      'Click "Copy for Google Colab" to copy the complete runnable script',
      'Open Google Colab at colab.research.google.com',
      'Paste into the first cell and press Shift + Enter to run',
    ],
  },
  learningResource: {
    title: 'Lesson 3: Quantum Measurement with a One-Qubit Circuit',
    pdfUrl: '/presentations/Lesson3.pdf',
    description: 'Hadamard, measurement, histogram, and probability collapse in single-qubit quantum systems.',
    lessonNumber: 3,
    pages: 11,
    author: 'Dr. Syed Muzamil Basha',
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
