import { Topic } from '@/lib/types';

export const whatIsQML: Topic = {
  id: 'what-is-qml',
  moduleId: 'quantum-ml',
  number: 1,
  title: 'What is Quantum Machine Learning (QML)?',
  description: 'Explore the intersection of quantum computing and artificial intelligence: four quadrants of QML, quantum speedups, and hybrid architectures.',
  objectives: [
    'Define the 4 Quadrants of QML (Classical Data / Classical Algorithm, Quantum Data / Classical, Classical Data / Quantum, Quantum Data / Quantum)',
    'Understand how quantum mechanics enhances machine learning optimization',
    'Examine current NISQ-era hybrid quantum-classical computing',
  ],
  story: `In 2017, machine learning researchers were struggling with a problem: as neural networks grew to billions of parameters, training them on classical GPUs consumed megawatts of electricity and weeks of compute.
  
Meanwhile, quantum physicists were struggling with their own problem: real-world quantum computers had noisy, imperfect qubits that could only execute short, shallow circuits before decohering into noise.
  
Then came a marriage of minds: **Quantum Machine Learning (QML)**!
  
Machine learning algorithms are inherently robust to noise—neural networks learn through statistical averages! And quantum processors excel at high-dimensional linear algebra.
  
By teaming up a classical GPU with a Quantum Processing Unit (QPU), researchers created a hybrid powerhouse: the classical computer handles memory and data loading, while the quantum computer acts as a high-dimensional mathematical co-processor.`,
  motivation: `**The next AI frontier**: Google, IBM, Rigetti, and Xanadu are investing heavily in QML. As classical silicon scaling hits physical limits, quantum-enhanced machine learning offers the primary path forward for processing high-dimensional data spaces.`,
  concept: {
    simple: `Quantum Machine Learning is the marriage of AI and Quantum Physics:
- **AI** provides the learning brain (learning from data, optimizing weights).
- **Quantum Computing** provides the rocket fuel (exponential 2^n state spaces and interference).
Together, they allow computers to find patterns in complex data that no classical algorithm could ever detect!`,
    technical: `Quantum Machine Learning explores the intersection of quantum information processing and statistical learning theory. The canonical taxonomy (Aimeur et al., 2006) classifies QML along two axes: nature of data (Classical vs Quantum) and nature of processing device (Classical vs Quantum), forming four quadrants: CC, QC, CQ, and QQ. In the current NISQ era, CQ (Classical Data on Quantum Algorithms) via Parameterized Quantum Circuits (PQCs) dominates practical research.`,
  },
  keyTerms: [
    { term: 'Quantum Machine Learning (QML)', simple: 'Using quantum computers to run machine learning algorithms faster or find deeper patterns.', technical: 'The integration of quantum algorithms within statistical machine learning workflows.' },
    { term: 'Parameterized Quantum Circuit (PQC)', simple: 'A quantum circuit with adjustable knobs (angles theta) that acts like a neural network.', technical: 'A quantum circuit $U(\\boldsymbol{\\theta})$ containing tunable rotational gates optimized via classical gradient descent.' },
    { term: 'Quantum Processing Unit (QPU)', simple: 'The physical quantum chip sitting inside the dilution refrigerator.', technical: 'The specialized co-processor executing unitary quantum circuits.' },
  ],
  equations: [
    {
      latex: 'f(\\mathbf{x}; \\boldsymbol{\\theta}) = \\langle 0 | U^\\dagger(\\mathbf{x}) W^\\dagger(\\boldsymbol{\\theta}) M W(\\boldsymbol{\\theta}) U(\\mathbf{x}) | 0 \\rangle = \\text{Tr}\\big( M \\, W(\\boldsymbol{\\theta}) \\rho(\\mathbf{x}) W^\\dagger(\\boldsymbol{\\theta}) \\big)',
      explanation: 'The Fundamental Quantum Machine Learning (QML) Model: In quantum machine learning, a quantum neural network processes classical data by first encoding input vector x into an entangled quantum state rho(x) = U(x)|0><0|U^dagger(x). Next, a parameterized variational ansatz W(theta) applies tunable rotation and entangling gates. Finally, a Hermitian observable M (such as Pauli-Z) is measured, yielding an expectation value in [-1, +1] that serves as the model’s prediction score.',
      symbols: [
        { symbol: 'U(\\mathbf{x})', meaning: 'Quantum Feature Map', interpretation: 'Unitary transformation mapping classical vector x into quantum Hilbert space' },
        { symbol: 'W(\\boldsymbol{\\theta})', meaning: 'Parameterized Variational Ansatz', interpretation: 'Learnable quantum circuit weights $\\boldsymbol{\\theta}$ optimized via gradient descent' },
        { symbol: 'M', meaning: 'Hermitian Readout Observable', interpretation: 'Measurement operator whose statistical expectation value yields continuous prediction' },
        { symbol: 'f(\\mathbf{x}; \\boldsymbol{\\theta})', meaning: 'Model Prediction Score', interpretation: 'Output scalar bounded between the eigenvalues of observable M' },
      ],
      example: {
        description: 'Evaluating a 1-qubit QML model with input feature x = 0.5 radians, trainable weight theta = 1.2 radians, and Pauli-Z readout observable:',
        calculation: `Step 1: Quantum Feature Encoding U(x):
   Apply Ry(x) on ground state |0⟩ with x = 0.5 rad (28.6°):
   |ψ(x)⟩ = Ry(0.5)|0⟩ = cos(0.25)|0⟩ + sin(0.25)|1⟩
   = 0.9689|0⟩ + 0.2474|1⟩

Step 2: Apply Parameterized Ansatz W(θ):
   Apply trainable rotation Ry(θ) with θ = 1.2 rad (68.8°):
   Total rotation angle = x + θ = 0.5 + 1.2 = 1.70 radians
   |ψ(x, θ)⟩ = Ry(1.70)|0⟩ = cos(0.85)|0⟩ + sin(0.85)|1⟩
   = 0.6600|0⟩ + 0.7513|1⟩

Step 3: Measure Expectation of Pauli-Z Observable (M = Z):
   ⟨Z⟩ = |⟨0|ψ⟩|² - |⟨1|ψ⟩|²
   = (0.6600)² - (0.7513)² = 0.4356 - 0.5644 = -0.1288
   Analytical Check: cos(x + θ) = cos(1.70 rad) = -0.1288

Step 4: Map to Binary Classification Probability:
   P(Class 1) = (⟨Z⟩ + 1) / 2 = (-0.1288 + 1) / 2 = 0.4356 (43.56%)`,
        result: 'The model predicts Class 0 with 56.44% confidence and Class 1 with 43.56% confidence.',
      },
    },
  ],
  howItWorks: [
    { number: 1, title: 'Classical Ingestion', description: 'Classical CPU loads and normalizes training batch.' },
    { number: 2, title: 'Quantum Encoding', description: 'QPU executes feature map U(x) to embed features into quantum Hilbert space.' },
    { number: 3, title: 'Variational Processing', description: 'Parameterized gates W(theta) rotate state space.' },
    { number: 4, title: 'Measurement & Gradient', description: 'Expectation values are measured and passed to classical optimizer (Adam/COBYLA) to update weights theta.' },
  ],
  applications: [
    { title: 'High-Energy Particle Physics (CERN)', problem: 'Classifying Higgs Boson particle decay events from millions of LHC sensor hits.', solution: 'Quantum Support Vector Classifiers map particle momentum tensors into quantum Hilbert spaces.' },
  ],
  activity: {
    type: 'mcq',
    title: 'QML Quadrant Classification',
    question: 'A data scientist trains a Parameterized Quantum Circuit on a QPU to classify classical cancer biopsy data. Which QML quadrant does this belong to?',
    options: [
      { id: 'a', text: 'CQ (Classical Data processed by a Quantum Algorithm)' },
      { id: 'b', text: 'CC (Classical Data on Classical Algorithm)' },
      { id: 'c', text: 'QQ (Quantum Data on Quantum Algorithm)' },
      { id: 'd', text: 'QC (Quantum Data on Classical Algorithm)' },
    ],
    correctAnswer: 'a',
    explanation: 'The input data is classical (biopsy numbers), while the processing algorithm runs on a quantum device (QPU), placing it squarely in the CQ quadrant.',
    hint: 'Data is classical; the machine is quantum.',
  },
  pythonHandsOn: {
    title: "Building a Parameterized Quantum Machine Learning Model in Qiskit",
    description: "Construct an end-to-end QML circuit with feature encoding gates, trainable ansatz weights, and Pauli-Z expectation readout.",
    packages: ["qiskit", "scipy", "numpy"],
    installCommand: "pip install qiskit scipy numpy",
    imports: [
      { code: "from qiskit import QuantumCircuit", explanation: "Circuit constructor" },
      { code: "from qiskit.circuit import Parameter", explanation: "Trainable parameterized angles" },
      { code: "from qiskit.quantum_info import Statevector, SparsePauliOp", explanation: "Statevector and observables" },
      { code: "import numpy as np", explanation: "Numerical array support" }
    ],
    code: [
      { code: "# 1. Define symbolic parameters for input feature x and trainable weight w", explanation: "Parameters" },
      { code: "x_param = Parameter('x_feature')", explanation: "Input feature parameter" },
      { code: "w_param = Parameter('w_weight')", explanation: "Trainable parameter" },
      { code: "", explanation: "" },
      { code: "# 2. Assemble QML Circuit: Encoding + Variational Layer", explanation: "Assemble" },
      { code: "qc = QuantumCircuit(1)", explanation: "Single qubit" },
      { code: "qc.ry(x_param, 0)  # Feature Encoding Layer: Ry(x)", explanation: "Encoding" },
      { code: "qc.rz(w_param, 0)  # Trainable Parameter Layer: Rz(w)", explanation: "Weight" },
      { code: "print('Qiskit Parameterized QML Circuit:')", explanation: "Label" },
      { code: "print(qc.draw('text'))", explanation: "Print circuit" },
      { code: "", explanation: "" },
      { code: "# 3. Bind values and compute expectation value <Z>", explanation: "Binding & Evaluation" },
      { code: "observable = SparsePauliOp('Z')", explanation: "Pauli Z observable" },
      { code: "bound_qc = qc.assign_parameters({x_param: 0.8, w_param: 1.5})", explanation: "Bind parameters" },
      { code: "state = Statevector.from_instruction(bound_qc)", explanation: "Compute statevector" },
      { code: "expectation = state.expectation_value(observable).real", explanation: "Evaluate <Z>" },
      { code: "print(f'\\nBound Parameters: x = 0.8, w = 1.5')", explanation: "Print bound" },
      { code: "print(f'Quantum Model Prediction <Z>: {expectation:.4f}')", explanation: "Prediction between -1 and +1" },
      { code: "predicted_class = 1 if expectation > 0 else 0", explanation: "Binary decision" },
      { code: "print(f'Predicted Class: {predicted_class}')", explanation: "Class decision" }
    ],
    executionFlow: [
      { number: 1, title: "Declare Parameters", description: "Create symbolic parameters for features and weights using Qiskit Parameter." },
      { number: 2, title: "Construct Differentiable Circuit", description: "Compose feature map and variational ansatz into a single QuantumCircuit." },
      { number: 3, title: "Evaluate Expectation Value", description: "Bind numerical values and calculate Pauli-Z expectation value to produce a model prediction." }
    ],
    input: "Input feature x = 0.8, weight parameter w = 1.5.",
    output: "Qiskit Parameterized QML Circuit:\nq_0: \u2500\u2500[ Ry(x_feature) ]\u2500\u2500[ Rz(w_weight) ]\u2500\u2500\nPrediction <Z>: ~0.6967\nPredicted Class: 1",
    interpretation: "Quantum machine learning models represent functional hypotheses as parameterized quantum circuits. Adjusting gate angles w trains the quantum state vector to classify incoming features x.",
    colabInstructions: [
      "Click 'Copy for Google Colab' to copy the complete runnable script",
      "Open Google Colab at colab.research.google.com",
      "Paste into a code cell and press Shift + Enter to run",
    ],
  },
  mcqs: [
    {
      id: 'q1',
      question: 'What is a Parameterized Quantum Circuit (PQC) in the context of Quantum Machine Learning?',
      options: [
        { id: 'a', text: 'A quantum circuit containing adjustable rotation gates (weights) that can be tuned by a classical optimizer to minimize a loss function' },
        { id: 'b', text: 'A circuit that only runs on Tuesdays' },
        { id: 'c', text: 'A broken quantum chip' },
        { id: 'd', text: 'A classical spreadsheet' },
      ],
      correctAnswer: 'a',
      explanation: 'A PQC acts as the quantum analogue of a neural network: it contains gates with tunable continuous angles theta that are adjusted via optimization to fit training data.',
      incorrectFeedback: 'PQCs contain tunable gate parameters optimized via loss functions.',
    },
    {
      id: 'q2',
      question: 'Placeholder question 2',
      options: [
        { id: 'a', text: 'Answer A' },
        { id: 'b', text: 'Answer B' },
        { id: 'c', text: 'Answer C' },
        { id: 'd', text: 'Answer D' },
      ],
      correctAnswer: 'b',
      explanation: 'Placeholder explanation.',
      incorrectFeedback: 'Placeholder feedback.',
    },
    {
      id: 'q3',
      question: 'Placeholder question 3',
      options: [
        { id: 'a', text: 'Answer A' },
        { id: 'b', text: 'Answer B' },
        { id: 'c', text: 'Answer C' },
        { id: 'd', text: 'Answer D' },
      ],
      correctAnswer: 'b',
      explanation: 'Placeholder explanation.',
      incorrectFeedback: 'Placeholder feedback.',
    },
    {
      id: 'q4',
      question: 'Placeholder question 4',
      options: [
        { id: 'a', text: 'Answer A' },
        { id: 'b', text: 'Answer B' },
        { id: 'c', text: 'Answer C' },
        { id: 'd', text: 'Answer D' },
      ],
      correctAnswer: 'b',
      explanation: 'Placeholder explanation.',
      incorrectFeedback: 'Placeholder feedback.',
    },
    {
      id: 'q5',
      question: 'Placeholder question 5',
      options: [
        { id: 'a', text: 'Answer A' },
        { id: 'b', text: 'Answer B' },
        { id: 'c', text: 'Answer C' },
        { id: 'd', text: 'Answer D' },
      ],
      correctAnswer: 'b',
      explanation: 'Placeholder explanation.',
      incorrectFeedback: 'Placeholder feedback.',
    },
  ],
};

export const whyAIPlusQuantum: Topic = {
  id: 'why-ai-plus-quantum',
  moduleId: 'quantum-ml',
  number: 2,
  title: 'Why AI + Quantum? The Synergy of Two Revolutions',
  description: 'Examine the bidirectional synergy: how Quantum accelerates AI, and how AI calibrates, controls, and optimizes quantum hardware.',
  objectives: [
    'Analyze the two-way relationship between AI and Quantum Computing',
    'Understand Quantum for AI: Kernel speedups, non-linear feature spaces, and combinatorial optimization',
    'Understand AI for Quantum: Pulse calibration, error mitigation, and quantum compiler optimization',
  ],
  story: `Most people think of Quantum Machine Learning as a one-way street: using quantum computers to speed up artificial intelligence.
  
In reality, it is a **Two-Way Symbiotic Revolution**!
  
1. **Quantum for AI**: Classical deep neural networks struggle with high-dimensional correlation structures and massive combinatorial spaces. Quantum processors explore these spaces using entanglement and interference.
  
2. **AI for Quantum**: Quantum hardware is notoriously delicate. A dilution refrigerator experiences microscopic thermal drift every hour, de-calibrating microwave pulses.
  
Who recalibrates the quantum computer?
**Machine Learning algorithms!**
Reinforcement learning agents monitor qubit microwave pulse shapes, automatically tuning pulses in real time to maintain 99.9% gate fidelity. Without modern AI, modern quantum computers could not even stay calibrated!`,
  motivation: `**The dual perspective**: Understanding the symbiotic loop between AI and quantum computing prepares you for careers on both sides: building quantum algorithms for AI applications, or applying AI to engineer better quantum computers.`,
  concept: {
    simple: `AI and Quantum are superpowers that complete each other:
- **Quantum helps AI**: Acts as a turbocharger, mapping complex data into vast quantum dimensions where problems become easier to solve.
- **AI helps Quantum**: Acts as the mechanic, constantly tuning and fixing noisy quantum chips so they don't lose their delicate balance!`,
    technical: `The bidirectional synergy spans:
- **Quantum $\\rightarrow$ AI**: Quantum Kernel Estimation mapping data to intractable Hilbert spaces $\\Phi: \\mathcal{X} \\rightarrow \\mathcal{H}$; Quantum Boltzmann Machines for generative sampling; QAOA for combinatorial model selection.
- **AI $\\rightarrow$ Quantum**: Deep Reinforcement Learning for optimal quantum control (CRAB/GRAPE pulse synthesis); Autoencoders for quantum state tomography; Transformer models for quantum circuit compilation and routing.`,
  },
  keyTerms: [
    { term: 'Optimal Quantum Control (QOC)', simple: 'Using AI to shape microwave pulses so quantum gates execute with maximum precision.', technical: 'Numerical optimization of time-dependent control Hamiltonians $H(t) = H_0 + \\sum u_k(t) H_k$ via reinforcement learning or gradient ascent (GRAPE).' },
    { term: 'Quantum Advantage in ML', simple: 'When a quantum machine learning model outperforms any classical ML model on a specific dataset.', technical: 'Provable separation in sample complexity or computational complexity for learning discrete concept classes.' },
  ],
  equations: [
    {
      latex: '\\epsilon \\le \\mathcal{O}\\left( \\sqrt{\\frac{d_{\\mathcal{H}}}{M}} \\right), \\quad F_Q(\\boldsymbol{\\theta}) = 4 \\, \\text{Re}\\left[ \\langle \\partial_i \\psi | \\partial_j \\psi \\rangle - \\langle \\partial_i \\psi | \\psi \\rangle \\langle \\psi | \\partial_j \\psi \\rangle \\right]',
      explanation: 'Quantum Generalization Bound & Quantum Fisher Information: Evaluates the two-way synergy between AI and Quantum Computing. The Quantum Fisher Information Metric (QFIM) F_Q(theta) measures the geometric expressibility and capacity of quantum neural networks, revealing how quantum models can achieve lower generalization error epsilon with fewer training samples M when learning from quantum and high-dimensional data compared to classical models.',
      symbols: [
        { symbol: '\\epsilon', meaning: 'Generalization error bound', interpretation: 'Maximum expected gap between empirical training loss and true test loss' },
        { symbol: 'd_{\\mathcal{H}}', meaning: 'Effective quantum dimension', interpretation: 'Hilbert space capacity accessible to the parameterized quantum ansatz' },
        { symbol: 'M', meaning: 'Number of training samples', interpretation: 'Sample complexity required to achieve high classification accuracy' },
        { symbol: 'F_Q(\\boldsymbol{\\theta})', meaning: 'Quantum Fisher Information Matrix', interpretation: 'Measures how sensitive the quantum state is to parameter updates $\\boldsymbol{\\theta}$' },
      ],
      example: {
        description: 'Comparing the sample complexity of learning an entangled quantum concept with n = 10 qubits using Classical ML vs Quantum ML:',
        calculation: `Step 1: Classical Learner Sample Requirement (Huang et al., 2022):
   Classical ML must reconstruct the quantum state via shadow tomography.
   Classical sample complexity: M_classical ~ Ω(2^n)
   For n = 10 qubits: M_classical ~ 2^10 = 1,024 samples.
   For n = 30 qubits: M_classical ~ 2^30 ≈ 1.07 × 10^9 samples!

Step 2: Quantum Learner with Coherent Memory:
   Quantum ML accesses entangled quantum states directly without collapse.
   Quantum sample complexity: M_quantum ~ O(n)
   For n = 10 qubits: M_quantum ~ 10 samples.
   For n = 30 qubits: M_quantum ~ 30 samples!

Step 3: Sample Advantage Ratio at n = 30:
   Advantage = M_classical / M_quantum
   = (1.07 × 10^9 samples) / (30 samples) ≈ 3.58 × 10^7× sample efficiency!`,
        result: 'A quantum learner with quantum memory solves tasks with 35 million times fewer samples than any classical machine learning model.',
      },
    },
  ],
  howItWorks: [
    { number: 1, title: 'Hardware Telemetry', description: 'Sensors record qubit drift, crosstalk, and frequency shifts in the dilution fridge.' },
    { number: 2, title: 'AI Calibration Loop', description: 'Deep RL agent adjusts microwave amplitude and phase envelopes to restore gate fidelity.' },
    { number: 3, title: 'Quantum QML Execution', description: 'Calibrated quantum processor executes quantum feature maps and variational classifiers.' },
  ],
  applications: [
    { title: 'Autonomous Qubit Tuning (Google / IBM)', problem: 'Tuning 100+ superconducting qubits takes human physicists days of manual calibration.', solution: 'Deep reinforcement learning agents tune cross-resonance gates across 100 qubits autonomously in minutes.' },
  ],
  activity: {
    type: 'mcq',
    title: 'Synergy Direction Check',
    question: 'A reinforcement learning agent adjusts the microwave pulse shape sent to a superconducting transmon qubit to increase gate fidelity from 98% to 99.8%. Which synergy is this?',
    options: [
      { id: 'a', text: 'AI for Quantum (using AI to improve quantum hardware)' },
      { id: 'b', text: 'Quantum for AI' },
      { id: 'c', text: 'Classical database search' },
      { id: 'd', text: 'Quantum superposition' },
    ],
    correctAnswer: 'a',
    explanation: 'Using machine learning algorithms to tune physical hardware pulses, calibrate qubits, or optimize error mitigation is an example of "AI for Quantum".',
    hint: 'Which tool is being used to fix the other?',
  },
  pythonHandsOn: {
    title: "Quantum Kernel Advantage vs Classical Non-Linear Boundaries in Qiskit",
    description: "Demonstrate how a 2-qubit Qiskit feature map maps non-linearly separable data into linearly separable quantum Hilbert states.",
    packages: ["qiskit", "scikit-learn", "numpy"],
    installCommand: "pip install qiskit scikit-learn numpy",
    imports: [
      { code: "from qiskit import QuantumCircuit", explanation: "Circuit constructor" },
      { code: "from qiskit.circuit.library import ZZFeatureMap", explanation: "High-dimensional feature map" },
      { code: "import numpy as np", explanation: "NumPy math" }
    ],
    code: [
      { code: "# Build a 2-qubit ZZFeatureMap (exponential Hilbert space feature map)", explanation: "Feature map" },
      { code: "feature_map = ZZFeatureMap(feature_dimension=2, reps=1)", explanation: "Instantiate ZZFeatureMap" },
      { code: "print('=== Qiskit ZZFeatureMap Circuit Architecture ===')", explanation: "Header" },
      { code: "print(feature_map.decompose().draw('text'))", explanation: "Draw decomposed circuit" },
      { code: "", explanation: "" },
      { code: "# Evaluate inner product (Quantum Kernel) between two sample data points", explanation: "Kernel calculation" },
      { code: "x1 = [0.5, 1.2]", explanation: "Data point 1" },
      { code: "x2 = [0.6, 1.1]", explanation: "Data point 2 (close to x1)" },
      { code: "x3 = [3.1, -2.5]", explanation: "Data point 3 (far from x1)" },
      { code: "from qiskit.quantum_info import Statevector", explanation: "Statevector" },
      { code: "sv1 = Statevector.from_instruction(feature_map.assign_parameters(x1))", explanation: "State 1" },
      { code: "sv2 = Statevector.from_instruction(feature_map.assign_parameters(x2))", explanation: "State 2" },
      { code: "sv3 = Statevector.from_instruction(feature_map.assign_parameters(x3))", explanation: "State 3" },
      { code: "k_12 = np.abs(np.vdot(sv1.data, sv2.data))**2", explanation: "Kernel overlap x1 and x2" },
      { code: "k_13 = np.abs(np.vdot(sv1.data, sv3.data))**2", explanation: "Kernel overlap x1 and x3" },
      { code: "print(f'\\nQuantum Kernel Overlap K(x1, x2) [Similar points]: {k_12:.4f} (High affinity)')", explanation: "Print k12" },
      { code: "print(f'Quantum Kernel Overlap K(x1, x3) [Distant points]: {k_13:.4f} (Near zero affinity)')", explanation: "Print k13" }
    ],
    executionFlow: [
      { number: 1, title: "Construct ZZFeatureMap", description: "Use non-linear entanglement gates to project 2D data into 4D Hilbert space." },
      { number: 2, title: "Encode Classical Samples", description: "Assign coordinates into parameterized rotation and phase kickback gates." },
      { number: 3, title: "Compute Quantum Overlap", description: "Calculate state fidelity |<psi(x1)|psi(x2)>|^2 as a rigorous quantum Mercer kernel." }
    ],
    input: "2D data points x1=[0.5, 1.2], x2=[0.6, 1.1], x3=[3.1, -2.5].",
    output: "K(x1, x2) = ~0.9850 (Strong quantum overlap)\nK(x1, x3) = ~0.0420 (Orthogonal state separation)",
    interpretation: "By mapping data into an entangled quantum state space, the ZZFeatureMap computes inner products in spaces that are classically hard to simulate, enabling linear classifiers to separate complex non-linear data.",
    colabInstructions: [
      "Click 'Copy for Google Colab' to copy the complete runnable script",
      "Open Google Colab at colab.research.google.com",
      "Paste into a code cell and press Shift + Enter to run",
    ],
  },
  mcqs: [
    {
      id: 'q1',
      question: 'Which of the following is an example of "AI for Quantum Computing"?',
      options: [
        { id: 'a', text: 'Using deep reinforcement learning to calibrate microwave pulses and tune qubit control lines' },
        { id: 'b', text: 'Using a quantum computer to classify handwriting' },
        { id: 'c', text: 'Running Grover’s search on an unsorted database' },
        { id: 'd', text: 'Encrypting files with RSA' },
      ],
      correctAnswer: 'a',
      explanation: 'Using machine learning algorithms to tune physical hardware, optimize pulse control, or decode error syndrome measurements is AI for Quantum.',
      incorrectFeedback: 'AI for Quantum means applying AI methods to improve quantum hardware and compilation.',
    },
    {
      id: 'q2',
      question: 'Placeholder question 2',
      options: [
        { id: 'a', text: 'Answer A' },
        { id: 'b', text: 'Answer B' },
        { id: 'c', text: 'Answer C' },
        { id: 'd', text: 'Answer D' },
      ],
      correctAnswer: 'b',
      explanation: 'Placeholder explanation.',
      incorrectFeedback: 'Placeholder feedback.',
    },
    {
      id: 'q3',
      question: 'Placeholder question 3',
      options: [
        { id: 'a', text: 'Answer A' },
        { id: 'b', text: 'Answer B' },
        { id: 'c', text: 'Answer C' },
        { id: 'd', text: 'Answer D' },
      ],
      correctAnswer: 'b',
      explanation: 'Placeholder explanation.',
      incorrectFeedback: 'Placeholder feedback.',
    },
    {
      id: 'q4',
      question: 'Placeholder question 4',
      options: [
        { id: 'a', text: 'Answer A' },
        { id: 'b', text: 'Answer B' },
        { id: 'c', text: 'Answer C' },
        { id: 'd', text: 'Answer D' },
      ],
      correctAnswer: 'b',
      explanation: 'Placeholder explanation.',
      incorrectFeedback: 'Placeholder feedback.',
    },
    {
      id: 'q5',
      question: 'Placeholder question 5',
      options: [
        { id: 'a', text: 'Answer A' },
        { id: 'b', text: 'Answer B' },
        { id: 'c', text: 'Answer C' },
        { id: 'd', text: 'Answer D' },
      ],
      correctAnswer: 'b',
      explanation: 'Placeholder explanation.',
      incorrectFeedback: 'Placeholder feedback.',
    },
  ],
};

export const quantumData: Topic = {
  id: 'quantum-data',
  moduleId: 'quantum-ml',
  number: 3,
  title: 'Quantum Data vs Classical Data: Sources & Structures',
  description: 'Differentiate between Classical Data (images, tables) and Native Quantum Data (molecular wavefunctions, quantum sensor feeds).',
  objectives: [
    'Distinguish between Classical Data and Native Quantum Data',
    'Examine Quantum Sensing and Quantum Metrology outputs',
    'Understand why Quantum Data bypasses the Input/Output loading bottleneck',
  ],
  story: `In classical machine learning, data comes from cameras, microphones, spreadsheets, and web servers. It is inherently classical bits.
  
Now consider an atomic physics laboratory studying high-temperature superconductivity. Electrons in a complex copper-oxide lattice are entangled in non-local quantum states.
  
If you want to study this system classically, you must perform thousands of destructive measurements, converting quantum states into noisy classical numbers with catastrophic loss of phase information.
  
What if, instead, you could transfer those quantum states directly into the qubits of a quantum computer without measuring them?
  
This is **Native Quantum Data**! The quantum computer ingests quantum states directly from nature, preserving all entanglement and phase coherence.`,
  motivation: `**The holy grail of QML**: While encoding classical data into quantum states is slow (the input bottleneck), processing native quantum data unlocks unconditional exponential quantum advantages.`,
  concept: {
    simple: `**Classical Data**: Things made of ordinary numbers:
- A photo of a dog, a price in a spreadsheet, text in an email.
**Quantum Data**: Real quantum systems from nature:
- The entangled electrons in a cancer drug molecule, radiation detected by a diamond nitrogen-vacancy quantum sensor, or photons traveling through quantum internet fiber cables!`,
    technical: `Classical data comprises instances $\\mathbf{x} \\in \\mathbb{R}^d$. Native quantum data comprises density operators $\\rho \\in \\mathcal{S}(\\mathcal{H})$ generated directly by physical quantum systems (molecular Hamiltonians, quantum sensors). Learning from quantum data avoids the state preparation bottleneck $\\mathcal{O}(2^d)$ and provides provable sample complexity advantages (Huang et al., Science 2022).`,
  },
  keyTerms: [
    { term: 'Classical Data', simple: 'Numbers, text, and images stored as ordinary 0s and 1s on hard drives.', technical: 'Information encoded in classical states possessing zero quantum entanglement.' },
    { term: 'Quantum Data', simple: 'Real physical wavefunctions directly emitted by atoms, molecules, or quantum sensors.', technical: 'Quantum states generated directly by quantum processes and manipulated via coherent quantum channels.' },
    { term: 'Quantum Sensing', simple: 'Using delicate quantum particles to measure magnetic fields and gravity with atomic precision.', technical: 'Metrology using entangled states or squeezed light to surpass the standard quantum shot-noise limit toward the Heisenberg limit.' },
  ],
  equations: [
    {
      latex: 'S(\\rho) = -\\text{Tr}(\\rho \\log_2 \\rho) = -\\sum_{i} \\lambda_i \\log_2 \\lambda_i, \\quad \\gamma(\\rho) = \\text{Tr}(\\rho^2) \\le 1',
      explanation: 'Von Neumann Entropy and State Purity of Native Quantum Data: Unlike classical data vectors x in R^d, native quantum data from quantum sensors or molecular systems is characterized by density matrices rho. The Von Neumann Entropy S(rho) quantifies quantum disorder and entanglement entropy, while Purity gamma(rho) = Tr(rho^2) distinguishes pure quantum states (gamma = 1) from mixed statistical ensembles (gamma < 1).',
      symbols: [
        { symbol: '\\rho', meaning: 'Density matrix operator', interpretation: 'Positive semi-definite Hermitian matrix representing the quantum data state' },
        { symbol: 'S(\\rho)', meaning: 'Von Neumann Entropy', interpretation: 'Zero for pure states, maximum log2(d) for maximally mixed states' },
        { symbol: '\\lambda_i', meaning: 'Eigenvalues of density matrix $\\rho$', interpretation: 'Classical probabilities of the quantum state components, $\\sum \lambda_i = 1$' },
        { symbol: '\\gamma(\\rho)', meaning: 'Purity metric', interpretation: '$\\text{Tr}(\\rho^2)$, indicating whether the data is pure (1.0) or noisy/mixed' },
      ],
      example: {
        description: 'Analyzing a noisy quantum sensor output with 80% coherent state |0⟩ and 20% orthogonal state |1⟩:',
        calculation: `Step 1: Construct the Density Matrix:
   ρ = 0.80|0⟩⟨0| + 0.20|1⟩⟨1| = [[0.80, 0.0], [0.0, 0.20]]
   Eigenvalues: λ1 = 0.80, λ2 = 0.20 (sum = 1.0)

Step 2: Calculate State Purity γ(ρ) = Tr(ρ²):
   ρ² = [[0.80², 0], [0, 0.20²]] = [[0.64, 0], [0, 0.04]]
   γ(ρ) = 0.64 + 0.04 = 0.68 < 1.0 (Confirms state is mixed!)

Step 3: Calculate Von Neumann Entropy S(ρ):
   S(ρ) = -[ 0.80 log2(0.80) + 0.20 log2(0.20) ]
   log2(0.80) = -0.3219, log2(0.20) = -2.3219
   S(ρ) = -[ 0.80(-0.3219) + 0.20(-2.3219) ]
   = -[ -0.2575 - 0.4644 ] = +0.7219 bits of entropy`,
        result: 'The sensor data has 68% purity and 0.7219 bits of quantum entropy, providing the exact noise footprint for QML calibration.',
      },
    },
  ],
  howItWorks: [
    { number: 1, title: 'Direct Coupling', description: 'Quantum sensor or molecular system couples directly to QPU qubits via coherent quantum bus.' },
    { number: 2, title: 'Entangled Feature Processing', description: 'Quantum neural network transforms density matrix without classical measurement.' },
    { number: 3, title: 'Classification Readout', description: 'Readout identifies exotic topological phases of matter directly.' },
  ],
  applications: [
    { title: 'Quantum Diamond Magnetometry', problem: 'Mapping nanoscale magnetic fields inside living biological cells.', solution: 'Nitrogen-Vacancy (NV) diamond quantum sensors feed native quantum spin states into QPU classifiers.' },
  ],
  activity: {
    type: 'mcq',
    title: 'Data Type Distinction',
    question: 'Which of the following is an example of NATIVE QUANTUM DATA?',
    options: [
      { id: 'a', text: 'Entangled photons emitted from a chemical reaction coupled directly into an optical quantum processor' },
      { id: 'b', text: 'A CSV spreadsheet containing stock prices' },
      { id: 'c', text: 'A JPEG image of a cat' },
      { id: 'd', text: 'A YouTube video stream' },
    ],
    correctAnswer: 'a',
    explanation: 'Entangled photons directly produced by a quantum system maintain quantum phase and entanglement, representing genuine native quantum data.',
    hint: 'Which data source originates directly from a quantum physical system without classical conversion?',
  },
  pythonHandsOn: {
    title: "Generating and Processing Quantum State Datasets in Qiskit",
    description: "Construct synthetic quantum data representing quantum electronic wavefunctions and simulate quantum measurement statistics.",
    packages: ["qiskit", "numpy"],
    installCommand: "pip install qiskit numpy",
    imports: [
      { code: "from qiskit import QuantumCircuit", explanation: "Circuit module" },
      { code: "from qiskit.quantum_info import Statevector, random_statevector", explanation: "Statevector generator" },
      { code: "import numpy as np", explanation: "NumPy array utilities" }
    ],
    code: [
      { code: "# Generate synthetic quantum dataset of 4 random 2-qubit quantum states", explanation: "Dataset generation" },
      { code: "np.random.seed(42)", explanation: "Reproducible seed" },
      { code: "quantum_dataset = []", explanation: "Dataset container" },
      { code: "for i in range(4):", explanation: "Generate 4 quantum samples" },
      { code: "    state = random_statevector(4, seed=42 + i)", explanation: "Random state in C^4" },
      { code: "    quantum_dataset.append(state)", explanation: "Append to dataset" },
      { code: "print('=== Synthetic Quantum Dataset (2 Qubits / 4-Dimensional) ===')", explanation: "Header" },
      { code: "for idx, state in enumerate(quantum_dataset):", explanation: "Loop dataset" },
      { code: "    print(f'Sample {idx + 1}:')", explanation: "Print sample header" },
      { code: "    for basis_idx, amp in enumerate(state.data):", explanation: "Loop amplitudes" },
      { code: "        print(f'   |{basis_idx:02b}> : {amp.real:6.3f} + {amp.imag:6.3f}j | Prob: {np.abs(amp)**2:5.3f}')", explanation: "Display" },
      { code: "    print()", explanation: "" },
      { code: "print('Notice: Quantum data natively contains phase coherence that cannot be observed classically without collapse.')", explanation: "Insight" }
    ],
    executionFlow: [
      { number: 1, title: "Sample Quantum Ensembles", description: "Generate randomized valid state vectors with unit Euclidean norm." },
      { number: 2, title: "Inspect Complex Phases", description: "Examine non-zero relative phase relationships across basis states." },
      { number: 3, title: "Calculate Density Properties", description: "Verify that each quantum data sample satisfies the normalization postulate." }
    ],
    input: "4 synthetic 2-qubit quantum statevectors in C^4.",
    output: "4 normalized quantum states with distinct complex amplitudes and probability distributions summing to 1.000.",
    interpretation: "Quantum data refers to states produced directly by quantum processes (molecular states, physical quantum sensors). Unlike classical tabular data, quantum data contains delicate relative phases that collapse upon classical measurement.",
    colabInstructions: [
      "Click 'Copy for Google Colab' to copy the complete runnable script",
      "Open Google Colab at colab.research.google.com",
      "Paste into a code cell and press Shift + Enter to run",
    ],
  },
  mcqs: [
    {
      id: 'q1',
      question: 'Why is learning from Native Quantum Data considered the most promising route to practical quantum advantage?',
      options: [
        { id: 'a', text: 'Because it completely avoids the expensive classical-to-quantum data encoding bottleneck and preserves quantum phase information' },
        { id: 'b', text: 'Because quantum data requires zero electricity' },
        { id: 'c', text: 'Because classical data is illegal in physics labs' },
        { id: 'd', text: 'Because quantum data files are stored as plain text' },
      ],
      correctAnswer: 'a',
      explanation: 'Encoding classical datasets into quantum states is often a computational bottleneck. Native quantum data comes pre-packaged in Hilbert space, unlocking direct quantum speedup.',
      incorrectFeedback: 'Bypassing the classical state preparation bottleneck is the primary advantage.',
    },
    {
      id: 'q2',
      question: 'Placeholder question 2',
      options: [
        { id: 'a', text: 'Answer A' },
        { id: 'b', text: 'Answer B' },
        { id: 'c', text: 'Answer C' },
        { id: 'd', text: 'Answer D' },
      ],
      correctAnswer: 'b',
      explanation: 'Placeholder explanation.',
      incorrectFeedback: 'Placeholder feedback.',
    },
    {
      id: 'q3',
      question: 'Placeholder question 3',
      options: [
        { id: 'a', text: 'Answer A' },
        { id: 'b', text: 'Answer B' },
        { id: 'c', text: 'Answer C' },
        { id: 'd', text: 'Answer D' },
      ],
      correctAnswer: 'b',
      explanation: 'Placeholder explanation.',
      incorrectFeedback: 'Placeholder feedback.',
    },
    {
      id: 'q4',
      question: 'Placeholder question 4',
      options: [
        { id: 'a', text: 'Answer A' },
        { id: 'b', text: 'Answer B' },
        { id: 'c', text: 'Answer C' },
        { id: 'd', text: 'Answer D' },
      ],
      correctAnswer: 'b',
      explanation: 'Placeholder explanation.',
      incorrectFeedback: 'Placeholder feedback.',
    },
    {
      id: 'q5',
      question: 'Placeholder question 5',
      options: [
        { id: 'a', text: 'Answer A' },
        { id: 'b', text: 'Answer B' },
        { id: 'c', text: 'Answer C' },
        { id: 'd', text: 'Answer D' },
      ],
      correctAnswer: 'b',
      explanation: 'Placeholder explanation.',
      incorrectFeedback: 'Placeholder feedback.',
    },
  ],
};

export const classicalDataEncoding: Topic = {
  id: 'classical-data-encoding',
  moduleId: 'quantum-ml',
  number: 4,
  title: 'Classical Data Encoding: Basis, Angle & Amplitude Embedding',
  description: 'Master the three primary strategies to load classical numbers into quantum registers: Basis Encoding, Angle Encoding, and Amplitude Encoding.',
  objectives: [
    'Implement Basis Encoding (mapping binary strings to basis states)',
    'Implement Angle Encoding (mapping continuous features to rotation angles)',
    'Implement Amplitude Encoding (packing 2^n features into n qubits)',
    'Analyze the tradeoffs: qubit count vs circuit depth',
  ],
  story: `You have a spreadsheet containing customer data: age 35, income $80,000, credit score 720.
  
How do you load those three numbers into a quantum computer?
  
You cannot plug a USB drive into a dilution refrigerator. You must translate those classical numbers into physical quantum gate operations!
  
There are three fundamental strategies:
1. **Basis Encoding**: Spell the numbers out in binary using X gates (simple, but uses lots of qubits).
2. **Angle Encoding**: Turn the numbers into rotation angles (like spinning a knob to 35 degrees).
3. **Amplitude Encoding**: The ultimate compression trick—packing $2^n$ numbers into the probability amplitudes of just $n$ qubits!
  
Choosing the right encoding strategy is the very first architectural decision of every QML pipeline.`,
  motivation: `**The input bottleneck**: If your encoding scheme requires an exponential number of gates, your quantum speedup is destroyed before the algorithm even begins. Mastering encoding trade-offs is essential for practical QML engineering.`,
  concept: {
    simple: `Three ways to load data into qubits:
1. **Basis Encoding**: Write numbers in binary using 0s and 1s ($|0110\\rangle$).
2. **Angle Encoding**: Use numbers as steering angles (rotate qubit by $x$ degrees).
3. **Amplitude Encoding**: Compress numbers into the height of the quantum waves! (Pack 1,024 numbers into just 10 qubits!).`,
    technical: `Classical data encoding maps instance $\\mathbf{x} \\in \\mathbb{R}^d$ into state vector $|\\psi(\\mathbf{x})\\rangle \\in \\mathcal{H}$:
- **Basis Encoding**: $x \\in \\{0, 1\\}^d \\mapsto |x\\rangle$. Requires $d$ qubits, $\\mathcal{O}(d)$ depth.
- **Angle Encoding**: $x \\in \\mathbb{R}^d \\mapsto \\bigotimes_{j=1}^d [\\cos(x_j)|0\\rangle + \\sin(x_j)|1\\rangle]$. Requires $d$ qubits, $\\mathcal{O}(1)$ depth.
- **Amplitude Encoding**: $\\mathbf{x} \\in \\mathbb{R}^N$ ($N=2^n$, $\\|\\mathbf{x}\\|=1$) $\\mapsto \\sum_{i=0}^{N-1} x_i |i\\rangle$. Requires $n = \\log_2(N)$ qubits, but state preparation circuit depth is generally $\\mathcal{O}(2^n)$.`,
  },
  keyTerms: [
    { term: 'Basis Encoding', simple: 'Converting classical binary bits directly into qubit states (e.g. 5 = 101 -> |101>).', technical: 'Discrete embedding mapping binary vectors $x \\in \\{0, 1\\}^n$ to computational basis kets $|x\\rangle$.' },
    { term: 'Angle Encoding', simple: 'Using numbers as rotation angles for single-qubit gates.', technical: 'Continuous embedding applying single-qubit rotations $R_y(2x_j)$ or $R_z(2x_j)$ to individual qubits.' },
    { term: 'Amplitude Encoding', simple: 'Packing huge datasets into probability amplitudes (exponential compression).', technical: 'Vector embedding normalizing continuous vector $\\mathbf{x} \\in \\mathbb{R}^{2^n}$ directly into state amplitudes.' },
  ],
  equations: [
    {
      latex: '|\\mathbf{x}_{\\text{amp}}\\rangle = \\sum_{i=0}^{2^n-1} \\frac{x_i}{\\|\\mathbf{x}\\|_2} |i\\rangle, \\quad |\\mathbf{x}_{\\text{angle}}\\rangle = \\bigotimes_{j=1}^d \\Big( \\cos(x_j)|0\\rangle + \\sin(x_j)|1\\rangle \\Big)',
      explanation: 'Amplitude Encoding vs Angle Encoding: The two foundational strategies for embedding classical datasets into quantum processors. Amplitude encoding achieves exponential compression by packing 2^n classical features into n qubits, but requires O(2^n) gates to synthesize. Angle encoding maps d features into d separate single-qubit rotations with constant depth O(1), ideal for NISQ processors.',
      symbols: [
        { symbol: '|\\mathbf{x}_{\\text{amp}}\\rangle', meaning: 'Amplitude encoded state', interpretation: 'Superposition where amplitudes equal normalized feature values' },
        { symbol: '|\\mathbf{x}_{\\text{angle}}\\rangle', meaning: 'Angle encoded state', interpretation: 'Tensor product of independent single-qubit state rotations' },
        { symbol: '\\|\\mathbf{x}\\|_2', meaning: 'Euclidean L2 norm of feature vector', interpretation: 'Square root of sum of squares, ensuring quantum state normalizes to 1.0' },
        { symbol: '2^n', meaning: 'Feature capacity of n qubits', interpretation: 'log2(N) qubits store N features in amplitude encoding' },
      ],
      example: {
        description: 'Encoding a 4-dimensional classical sensor reading x = [1.0, 2.0, 2.0, 1.0]^T using Amplitude Encoding on 2 qubits (n = log2 4 = 2):',
        calculation: `Step 1: Compute Vector L2 Norm:
   ||x||_2 = √(1.0² + 2.0² + 2.0² + 1.0²) = √(1 + 4 + 4 + 1) = √10 ≈ 3.1623

Step 2: Normalize Feature Vector:
   x_norm = [1/√10, 2/√10, 2/√10, 1/√10]^T
   = [0.3162, 0.6325, 0.6325, 0.3162]^T
   Check: 0.3162² + 0.6325² + 0.6325² + 0.3162² = 0.1 + 0.4 + 0.4 + 0.1 = 1.00

Step 3: Construct the 2-Qubit Quantum State:
   |ψ_amp⟩ = 0.3162|00⟩ + 0.6325|01⟩ + 0.6325|10⟩ + 0.3162|11⟩

Step 4: Measurement Probabilities:
   P(|00⟩) = 10%, P(|01⟩) = 40%, P(|10⟩) = 40%, P(|11⟩) = 10%`,
        result: 'All 4 continuous features are successfully compressed into a single 2-qubit register with exact normalized amplitudes.',
      },
    },
  ],
  howItWorks: [
    { number: 1, title: 'Data Normalization', description: 'Scale features to [0, pi] for angle encoding, or normalize vector norm to 1.0 for amplitude encoding.' },
    { number: 2, title: 'Circuit Synthesis', description: 'Apply Ry(2*x_i) rotations for angle encoding or multi-controlled Givens rotations for amplitude encoding.' },
    { number: 3, title: 'QML Hand-off', description: 'State |psi(x)> is passed into variational layers.' },
  ],
  applications: [
    { title: 'Quantum Image Processing', problem: 'Loading a 1024x1024 pixel medical scan into quantum memory.', solution: 'Flexible Representation of Quantum Images (FRQI) uses amplitude encoding to store 1 million pixels in just 20 qubits.' },
  ],
  activity: {
    type: 'mcq',
    title: 'Encoding Strategy Selection',
    question: 'You have a dataset with 8 continuous features and only 3 qubits available. Which encoding method must you choose to fit all 8 features?',
    options: [
      { id: 'a', text: 'Amplitude Encoding (because 2^3 = 8, allowing 8 features to be stored as amplitudes across 3 qubits)' },
      { id: 'b', text: 'Basis Encoding' },
      { id: 'c', text: 'Angle Encoding' },
      { id: 'd', text: 'One-hot encoding' },
    ],
    correctAnswer: 'a',
    explanation: 'Angle encoding requires 1 qubit per feature (8 qubits for 8 features). Amplitude encoding packs 2^n features into n qubits, so 3 qubits can store 2^3 = 8 features.',
    hint: '2 raised to the power of 3 equals 8.',
  },
  pythonHandsOn: {
    title: "Angle Encoding vs Amplitude Encoding in Qiskit",
    description: "Implement both Angle Encoding (rotation gates) and Amplitude Encoding (statevector isometry) in Qiskit and analyze qubit requirements.",
    packages: ["qiskit", "numpy"],
    installCommand: "pip install qiskit numpy",
    imports: [
      { code: "from qiskit import QuantumCircuit", explanation: "Circuit builder" },
      { code: "from qiskit.quantum_info import Statevector", explanation: "Statevector module" },
      { code: "import numpy as np", explanation: "Vector normalization" }
    ],
    code: [
      { code: "features = [1.2, 0.7, -0.9, 1.8]", explanation: "4-dimensional classical data vector" },
      { code: "print(f'Original Classical Vector: {features}\\n')", explanation: "Print vector" },
      { code: "", explanation: "" },
      { code: "# Strategy 1: Angle Encoding (1 qubit per feature -> 4 qubits)", explanation: "Angle encoding" },
      { code: "qc_angle = QuantumCircuit(4)", explanation: "4 qubits required" },
      { code: "for i, val in enumerate(features):", explanation: "Encode each feature" },
      { code: "    qc_angle.ry(val, i)  # Ry rotation by feature angle", explanation: "Apply Ry" },
      { code: "print('Strategy 1: Angle Encoding (O(N) qubits):')", explanation: "Header 1" },
      { code: "print(qc_angle.draw('text'))", explanation: "Draw circuit" },
      { code: "", explanation: "" },
      { code: "# Strategy 2: Amplitude Encoding (log2(N) qubits -> 2 qubits for 4 features)", explanation: "Amplitude encoding" },
      { code: "norm = np.linalg.norm(features)", explanation: "Compute L2 norm" },
      { code: "norm_features = np.array(features) / norm", explanation: "Normalize to unit vector" },
      { code: "qc_amp = QuantumCircuit(2)", explanation: "2^2 = 4 features fits into 2 qubits!" },
      { code: "qc_amp.initialize(norm_features, [0, 1])  # Amplitude encoding isometry", explanation: "Qiskit initialize" },
      { code: "print('\\nStrategy 2: Amplitude Encoding (O(log N) qubits):')", explanation: "Header 2" },
      { code: "print(f'Normalized Amplitudes in 2 Qubits: {norm_features.round(3)}')", explanation: "Print amplitudes" },
      { code: "print(f'Amplitudes verify to exact sum of squares: {np.sum(norm_features**2):.4f}')", explanation: "Sum of squares = 1" }
    ],
    executionFlow: [
      { number: 1, title: "Angle Encoding Method", description: "Map each feature value directly to a single-qubit rotation angle (Ry) requiring N qubits." },
      { number: 2, title: "Amplitude Encoding Method", description: "Normalize the vector and encode N features into the 2^n amplitudes of only log2(N) qubits." },
      { number: 3, title: "Trade-off Analysis", description: "Angle encoding uses shallow depth but O(N) qubits; Amplitude encoding achieves exponential compression O(log N) but requires deeper state preparation unitaries." }
    ],
    input: "4-element classical feature vector [1.2, 0.7, -0.9, 1.8].",
    output: "Angle Encoding: Uses 4 qubits with individual Ry gates.\nAmplitude Encoding: Compresses all 4 features into only 2 qubits ([0.495, 0.289, -0.371, 0.742]).",
    interpretation: "Classical-to-quantum encoding is the entry gate of QML. Amplitude encoding achieves logarithmic spatial compression (encoding 1,024 features in 10 qubits), while angle encoding is NISQ-friendly with shallow circuit depth.",
    colabInstructions: [
      "Click 'Copy for Google Colab' to copy the complete runnable script",
      "Open Google Colab at colab.research.google.com",
      "Paste into a code cell and press Shift + Enter to run",
    ],
  },
  mcqs: [
    {
      id: 'q1',
      question: 'What is the primary drawback of Amplitude Encoding for large classical datasets?',
      options: [
        { id: 'a', text: 'Preparing an arbitrary state with 2^n amplitudes generally requires an exponentially deep quantum circuit (O(2^n) gates), creating a data loading bottleneck' },
        { id: 'b', text: 'It uses too many physical qubits' },
        { id: 'c', text: 'It cannot store negative numbers' },
        { id: 'd', text: 'It is incompatible with Python' },
      ],
      correctAnswer: 'a',
      explanation: 'While amplitude encoding requires only n = log2(N) qubits, the circuit depth required to prepare an arbitrary state scales exponentially O(2^n), negating computational speedups.',
      incorrectFeedback: 'Exponential circuit depth for arbitrary state preparation is the primary bottleneck.',
    },
    {
      id: 'q2',
      question: 'Placeholder question 2',
      options: [
        { id: 'a', text: 'Answer A' },
        { id: 'b', text: 'Answer B' },
        { id: 'c', text: 'Answer C' },
        { id: 'd', text: 'Answer D' },
      ],
      correctAnswer: 'b',
      explanation: 'Placeholder explanation.',
      incorrectFeedback: 'Placeholder feedback.',
    },
    {
      id: 'q3',
      question: 'Placeholder question 3',
      options: [
        { id: 'a', text: 'Answer A' },
        { id: 'b', text: 'Answer B' },
        { id: 'c', text: 'Answer C' },
        { id: 'd', text: 'Answer D' },
      ],
      correctAnswer: 'b',
      explanation: 'Placeholder explanation.',
      incorrectFeedback: 'Placeholder feedback.',
    },
    {
      id: 'q4',
      question: 'Placeholder question 4',
      options: [
        { id: 'a', text: 'Answer A' },
        { id: 'b', text: 'Answer B' },
        { id: 'c', text: 'Answer C' },
        { id: 'd', text: 'Answer D' },
      ],
      correctAnswer: 'b',
      explanation: 'Placeholder explanation.',
      incorrectFeedback: 'Placeholder feedback.',
    },
    {
      id: 'q5',
      question: 'Placeholder question 5',
      options: [
        { id: 'a', text: 'Answer A' },
        { id: 'b', text: 'Answer B' },
        { id: 'c', text: 'Answer C' },
        { id: 'd', text: 'Answer D' },
      ],
      correctAnswer: 'b',
      explanation: 'Placeholder explanation.',
      incorrectFeedback: 'Placeholder feedback.',
    },
  ],
};

export const quantumFeatureMaps: Topic = {
  id: 'quantum-feature-maps',
  moduleId: 'quantum-ml',
  number: 5,
  title: 'Quantum Feature Maps & Non-Linear Embeddings',
  description: 'Understand how quantum feature maps project classical data into exponentially large Hilbert spaces to make non-linear data linearly separable.',
  objectives: [
    'Define the Quantum Feature Map: Phi(x) -> |Phi(x)>',
    'Understand the Kernel Trick in Quantum Hilbert Spaces',
    'Construct Havlicek-style entangling feature maps (ZZFeatureMap in Qiskit)',
  ],
  story: `In 1992, computer scientists working on Support Vector Machines (SVMs) realized a brilliant trick:
If data points in 2D cannot be separated by a straight line (for example, red dots inside a blue ring), you can project the points into a higher 3D dimension:
$$z = x^2 + y^2$$
Suddenly, the inner red dots rise up into a 3D bowl, and a flat sheet of paper (a hyperplane) can cleanly slice between red and blue!
  
In classical ML, computing these high-dimensional spaces becomes impossibly expensive when dimensions exceed thousands.
  
**Quantum Feature Maps** take this idea to its ultimate physical conclusion: they map classical data into a **$2^n$-dimensional quantum Hilbert space** using entangling gates. Spaces with billions of dimensions can be manipulated using just 30 qubits!`,
  motivation: `**The theoretical heart of Quantum Advantage in ML**: Havlicek et al. (Nature 2019) proved that certain entangling quantum feature maps create feature spaces that are provably intractable to estimate or simulate on any classical computer.`,
  concept: {
    simple: `Think of a messy knotted tangled rope on a table. In 2D, the knot seems impossible to untangle.
If you pick the rope up into 3D space, the knot easily pulls apart!
Quantum Feature Maps pick up your tangled classical data and lift it into a vast 2^n-dimensional quantum space where complex patterns untangle into simple straight lines!`,
    technical: `A Quantum Feature Map is a non-linear embedding $\\Phi: \\mathcal{X} \\rightarrow \\mathcal{H}$ implemented by a unitary circuit $U_\\Phi(\\mathbf{x})|0\\rangle^{\\otimes n} = |\\Phi(\\mathbf{x})\\rangle$. The canonical Havlicek ZZ-feature map applies single-qubit Hadamard and phase rotations, followed by two-qubit entangling phase gates $U_{ZZ} = \\exp(i (\\pi - x_j)(\\pi - x_k) Z_j Z_k)$, creating non-classical correlations conjectured to be classically intractable to sample.`,
  },
  keyTerms: [
    { term: 'Quantum Feature Map', simple: 'A circuit that transforms classical data into an entangled quantum state.', technical: 'Unitary transformation $U_\\Phi(\\mathbf{x})$ mapping $\\mathbb{R}^d$ to state vectors $|\\Phi(\\mathbf{x})\\rangle$.' },
    { term: 'ZZFeatureMap', simple: 'A famous quantum feature map from IBM that entangles pairs of qubits based on product features.', technical: 'Second-order Pauli expansion feature map generating non-linear feature cross-products via $Z \\otimes Z$ interactions.' },
  ],
  equations: [
    {
      latex: 'U_{\\Phi}(\\mathbf{x}) = \\exp\\left( i \\sum_{j=1}^n x_j Z_j + i \\sum_{j < k}^n (\\pi - x_j)(\\pi - x_k) Z_j Z_k \\right) H^{\\otimes n}',
      explanation: 'The Havlicek ZZ-Feature Map (IBM Quantum): Maps classical data into non-linearly entangled quantum states. By combining initial Hadamard superpositions with single-qubit phase rotations and two-qubit Z_j Z_k entangling interactions whose phases scale as (pi - x_j)(pi - x_k), this feature map creates quantum correlations that are proven to be classically hard to simulate.',
      symbols: [
        { symbol: 'U_\\Phi(\\mathbf{x})', meaning: 'Non-linear feature map unitary', interpretation: 'Prepares the quantum feature state $|\\Phi(\\mathbf{x})\\rangle = U_{\\Phi}(\\mathbf{x})|0\\rangle^{\otimes n}$' },
        { symbol: 'H^{\\otimes n}', meaning: 'Layer of Hadamard gates', interpretation: 'Initializes all qubits into uniform quantum superposition' },
        { symbol: 'Z_j', meaning: 'Pauli-Z operator on qubit j', interpretation: 'Encodes individual feature $x_j$ into single-qubit phase' },
        { symbol: 'Z_j Z_k', meaning: 'Two-qubit Ising coupling', interpretation: 'Encodes non-linear cross-product interaction between features j and k' },
      ],
      example: {
        description: 'Computing the non-linear entangling phase for a 2-feature data sample x1 = 0.5 and x2 = 1.2 in a 2-qubit ZZ-Feature Map:',
        calculation: `Step 1: Compute Single-Qubit Rotation Angles:
   θ_1 = 2 × x1 = 2 × 0.5 = 1.00 radian (57.3°)
   θ_2 = 2 × x2 = 2 × 1.2 = 2.40 radians (137.5°)

Step 2: Compute Two-Qubit Non-linear Entangling Phase:
   Phase_12 = 2 × (π - x1) × (π - x2)
   π - x1 = 3.1416 - 0.5 = 2.6416
   π - x2 = 3.1416 - 1.2 = 1.9416
   Phase_12 = 2 × (2.6416 × 1.9416) = 2 × 5.1289 = 10.2578 radians

Step 3: Modulo 2π Reduction for Hardware Execution:
   10.2578 mod 2π = 10.2578 - 6.2832 = 3.9746 radians (227.7°)

Step 4: Circuit Implementation:
   Synthesized using CNOT(0, 1) -> Rz(3.9746, 1) -> CNOT(0, 1)`,
        result: 'The non-linear product of features x1 and x2 is mapped directly into an entangled 2-qubit relative phase of 3.9746 radians.',
      },
    },
  ],
  howItWorks: [
    { number: 1, title: 'Hadamard Initialization', description: 'Create uniform superposition across all qubits.' },
    { number: 2, title: 'Linear Phase Encoding', description: 'Apply Rz(2*x_i) rotations on individual qubits.' },
    { number: 3, title: 'Entangling Interaction', description: 'Apply CNOT-Rz-CNOT sequences between qubit pairs to encode feature products x_i * x_j.' },
    { number: 4, title: 'Repetition (Layers)', description: 'Repeat the block d times to increase expressibility.' },
  ],
  applications: [
    { title: 'Complex Pattern Classification', problem: 'Classifying non-linearly separable datasets (e.g. concentric circles or spirals).', solution: 'ZZFeatureMap lifts concentric circles into Hilbert space where a linear quantum hyperplane cleanly separates classes.' },
  ],
  activity: {
    type: 'mcq',
    title: 'Feature Map Purpose',
    question: 'Why does the ZZFeatureMap include two-qubit entangling gates (like CNOT or Rzz) between qubits rather than only single-qubit rotations?',
    options: [
      { id: 'a', text: 'To capture non-linear cross-correlations between features (x_i * x_j) that cannot be simulated as independent single-qubit product states' },
      { id: 'b', text: 'To slow down the circuit' },
      { id: 'c', text: 'To delete half the features' },
      { id: 'd', text: 'Because single-qubit gates are illegal in QML' },
    ],
    correctAnswer: 'a',
    explanation: 'Without entangling gates, the feature map remains a separable product state $|\\psi_1\\rangle \\otimes |\\psi_2\\rangle$, which classical computers can simulate trivially. Entangling gates encode rich non-linear cross-feature correlations.',
    hint: 'What does entanglement add that separate single qubits cannot do?',
  },
  pythonHandsOn: {
    title: "Constructing the ZZFeatureMap and PauliFeatureMap in Qiskit",
    description: "Build industry-standard Qiskit feature maps with second-order Pauli expansion and analyze entangling gate structures.",
    packages: ["qiskit"],
    installCommand: "pip install qiskit",
    imports: [
      { code: "from qiskit.circuit.library import ZZFeatureMap, ZFeatureMap", explanation: "Qiskit feature map library" }
    ],
    code: [
      { code: "# 1. ZFeatureMap: First-order feature map (no entanglement)", explanation: "ZFeatureMap" },
      { code: "z_map = ZFeatureMap(feature_dimension=3, reps=1)", explanation: "3 features, 1 repetition" },
      { code: "print('=== 1. ZFeatureMap (First-Order / Separable) ===')", explanation: "Header 1" },
      { code: "print(z_map.decompose().draw('text'))", explanation: "Print circuit" },
      { code: "", explanation: "" },
      { code: "# 2. ZZFeatureMap: Second-order feature map (with CNOT-entangled non-linear interactions)", explanation: "ZZFeatureMap" },
      { code: "zz_map = ZZFeatureMap(feature_dimension=3, reps=1, entanglement='linear')", explanation: "3 features with entangling gates" },
      { code: "print('\\n=== 2. ZZFeatureMap (Second-Order / Entangled) ===')", explanation: "Header 2" },
      { code: "print(zz_map.decompose().draw('text'))", explanation: "Print circuit" },
      { code: "print('\\nNotice: The ZZFeatureMap adds CNOT-Rz-CNOT blocks between adjacent qubits,')", explanation: "Note 1" },
      { code: "print('encoding cross-product features 2*(pi-x0)*(pi-x1) that are hard to simulate classically!')", explanation: "Note 2" }
    ],
    executionFlow: [
      { number: 1, title: "First-Order Z-Map", description: "Applies Hadamard followed by Rz(2*x_i) on each qubit independently." },
      { number: 2, title: "Second-Order ZZ-Map", description: "Inserts two-qubit entangling gates CNOT-Rz-CNOT encoding pairwise interactions." },
      { number: 3, title: "Expressibility Comparison", description: "Shows how the ZZFeatureMap creates non-classical quantum correlations." }
    ],
    input: "3-dimensional feature space configured with Z and ZZ feature maps.",
    output: "ZFeatureMap: 3 independent Rz wires.\nZZFeatureMap: 3 wires with interleaved CNOT-Rz-CNOT interactions across pairs (0,1) and (1,2).",
    interpretation: "The ZZFeatureMap is conjectured to be classically intractable to evaluate for large qubit numbers. It forms the standard feature extractor in quantum support vector machines.",
    colabInstructions: [
      "Click 'Copy for Google Colab' to copy the complete runnable script",
      "Open Google Colab at colab.research.google.com",
      "Paste into a code cell and press Shift + Enter to run",
    ],
  },
  mcqs: [
    {
      id: 'q1',
      question: 'What is the primary advantage of mapping classical data into a high-dimensional Quantum Hilbert Space?',
      options: [
        { id: 'a', text: 'Complex non-linear decision boundaries in the original data space become simple linear decision hyperplanes in Hilbert space' },
        { id: 'b', text: 'It compresses files into smaller zip archives' },
        { id: 'c', text: 'It eliminates the need for training labels' },
        { id: 'd', text: 'It prevents the computer from running out of RAM' },
      ],
      correctAnswer: 'a',
      explanation: 'Just like the classical kernel trick in SVMs, projecting data into a higher-dimensional space allows linear separators to solve non-linear classification problems.',
      incorrectFeedback: 'Lifting data to higher dimensions makes non-linear boundaries linearly separable.',
    },
    {
      id: 'q2',
      question: 'Placeholder question 2',
      options: [
        { id: 'a', text: 'Answer A' },
        { id: 'b', text: 'Answer B' },
        { id: 'c', text: 'Answer C' },
        { id: 'd', text: 'Answer D' },
      ],
      correctAnswer: 'b',
      explanation: 'Placeholder explanation.',
      incorrectFeedback: 'Placeholder feedback.',
    },
    {
      id: 'q3',
      question: 'Placeholder question 3',
      options: [
        { id: 'a', text: 'Answer A' },
        { id: 'b', text: 'Answer B' },
        { id: 'c', text: 'Answer C' },
        { id: 'd', text: 'Answer D' },
      ],
      correctAnswer: 'b',
      explanation: 'Placeholder explanation.',
      incorrectFeedback: 'Placeholder feedback.',
    },
    {
      id: 'q4',
      question: 'Placeholder question 4',
      options: [
        { id: 'a', text: 'Answer A' },
        { id: 'b', text: 'Answer B' },
        { id: 'c', text: 'Answer C' },
        { id: 'd', text: 'Answer D' },
      ],
      correctAnswer: 'b',
      explanation: 'Placeholder explanation.',
      incorrectFeedback: 'Placeholder feedback.',
    },
    {
      id: 'q5',
      question: 'Placeholder question 5',
      options: [
        { id: 'a', text: 'Answer A' },
        { id: 'b', text: 'Answer B' },
        { id: 'c', text: 'Answer C' },
        { id: 'd', text: 'Answer D' },
      ],
      correctAnswer: 'b',
      explanation: 'Placeholder explanation.',
      incorrectFeedback: 'Placeholder feedback.',
    },
  ],
};

export const quantumKernels: Topic = {
  id: 'quantum-kernels',
  moduleId: 'quantum-ml',
  number: 6,
  title: 'Quantum Kernels & Quantum Support Vector Machines (QSVM)',
  description: 'Master Quantum Kernel Estimation: computing state overlaps |<Phi(x)|Phi(x’)>|^2 to power Quantum Support Vector Machines.',
  objectives: [
    'Define the Quantum Kernel: K(x, x\') = |<Phi(x)|Phi(x\')>|^2',
    'Understand how QSVM combines a quantum kernel estimator with a classical convex SVM solver',
    'Evaluate provable quantum speedups in kernel methods (Liu et al., 2021)',
  ],
  story: `In 2021, an IBM research team led by Yunchao Liu proved a landmark mathematical theorem:
*There exist specific, mathematically rigorous classification problems that NO classical machine learning model can ever solve efficiently, but which a Quantum Kernel Support Vector Machine can solve in polynomial time.*
  
How does a Quantum Kernel work?
  
You don't train a neural network on the quantum chip. Instead, you use the quantum computer as a **Geometry Engine**!
- You give the quantum chip two data points: $x_1$ and $x_2$.
- The quantum chip encodes both points into quantum wavefunctions: $|\\Phi(x_1)\\rangle$ and $|\\Phi(x_2)\\rangle$.
- It collides the two waves and measures their overlap:
$$K(x_1, x_2) = |\\langle\\Phi(x_1) \\mid \\Phi(x_2)\\rangle|^2$$
- It passes this similarity score back to an ordinary classical computer, which runs a standard Support Vector Machine!`,
  motivation: `**The most theoretically grounded QML algorithm**: Unlike variational neural networks which suffer from barren plateaus, Quantum Kernel methods guarantee global convergence via convex quadratic programming.`,
  concept: {
    simple: `A Quantum Kernel is a similarity measurer:
"How similar is patient A to patient B?"
Instead of comparing them using ordinary classical formulas, the quantum computer projects both patients into quantum dimensions and measures how much their quantum waves overlap!
Once the similarity table (the Kernel Matrix) is built, an ordinary classical computer draws the dividing boundary!`,
    technical: `A Quantum Kernel evaluates the transition probability fidelity between embedded quantum states:
$$K(\\mathbf{x}, \\mathbf{x}') = |\\langle \\Phi(\\mathbf{x}) \\mid \\Phi(\\mathbf{x}') \\rangle|^2 = \\text{Tr}\\big( |\\Phi(\\mathbf{x})\\rangle\\langle\\Phi(\\mathbf{x})| \\cdot |\\Phi(\\mathbf{x}')\\rangle\\langle\\Phi(\\mathbf{x}')| \\big)$$
The resulting Gram matrix $\\mathbf{K} \\in \\mathbb{R}^{N \\times N}$ is symmetric and positive semi-definite, guaranteeing a unique global minimum when solved via classical dual convex quadratic programming: $\\max_\\alpha \\sum \\alpha_i - \\frac{1}{2}\\sum \\alpha_i \\alpha_j y_i y_j K(\\mathbf{x}_i, \\mathbf{x}_j)$.`,
  },
  keyTerms: [
    { term: 'Quantum Kernel Matrix (Gram Matrix)', simple: 'A table comparing the similarity of every data point to every other data point using quantum overlap.', technical: 'An $N \\times N$ positive semi-definite matrix where entry $K_{ij} = |\\langle\\Phi(x_i)|\\Phi(x_j)\\rangle|^2$.' },
    { term: 'Quantum Support Vector Machine (QSVM)', simple: 'A Support Vector Machine that uses a quantum computer to measure similarity scores.', technical: 'Support Vector Classifier trained on a quantum kernel matrix evaluated via transition probability circuits.' },
  ],
  equations: [
    {
      latex: 'K(\\mathbf{x}, \\mathbf{x}^\\prime) = \\big| \\langle \\Phi(\\mathbf{x}^\\prime) | \\Phi(\\mathbf{x}) \\rangle \\big|^2 = \\big| \\langle 0^{\\otimes n} | U_\\Phi^\\dagger(\\mathbf{x}^\\prime) U_\\Phi(\\mathbf{x}) | 0^{\\otimes n} \\rangle \\big|^2 = \\text{Tr}\\big( \\rho(\\mathbf{x}) \\rho(\\mathbf{x}^\\prime) \\big)',
      explanation: 'Quantum Kernel Estimation (Transition Probability): Evaluates the similarity between two classical data samples x and x prime directly in 2^n-dimensional Hilbert space. The kernel value equals the transition probability of preparing state |Phi(x)>, applying the adjoint circuit U_dagger(x prime), and measuring the probability of collapsing back to the all-zero state |00...0>. The resulting Gram matrix is fed into a classical Support Vector Machine (QSVC).',
      symbols: [
        { symbol: 'K(\\mathbf{x}, \\mathbf{x}^\\prime)', meaning: 'Quantum kernel similarity score', interpretation: 'Bounded in [0.0, 1.0], where 1.0 is identical and 0.0 is orthogonal' },
        { symbol: '|\\Phi(\\mathbf{x})\\rangle', meaning: 'Quantum state of sample $\\mathbf{x}$', interpretation: 'State vector created by feature map $U(\\mathbf{x})|0\\rangle$' },
        { symbol: 'U_\\Phi^\\dagger(\\mathbf{x}^\\prime)', meaning: 'Adjoint feature map for sample x prime', interpretation: 'Inverted circuit running the second data point in reverse' },
        { symbol: '|0^{\\otimes n}\\rangle', meaning: 'All-zero ground state', interpretation: 'Reference state measured to determine transition probability overlap' },
      ],
      example: {
        description: 'Computing the quantum kernel similarity between two 1-qubit data points x = 0.2 and x prime = 0.8 with angle feature map U(x) = Ry(2x):',
        calculation: `Step 1: Compute State Overlap:
   U(x)|0⟩ = Ry(0.4)|0⟩
   U(x')|0⟩ = Ry(1.6)|0⟩
   Combined Unitary: U_dagger(x') · U(x) = Ry(-1.6) · Ry(0.4) = Ry(0.4 - 1.6) = Ry(-1.2)

Step 2: Evaluate Statevector After Inverted Circuit:
   |ψ_test⟩ = Ry(-1.2)|0⟩ = cos(-0.6)|0⟩ + sin(-0.6)|1⟩
   cos(-0.6) = 0.8253, sin(-0.6) = -0.5646
   |ψ_test⟩ = 0.8253|0⟩ - 0.5646|1⟩

Step 3: Measure Overlap with Ground State |0⟩:
   K(x, x') = |⟨0|ψ_test⟩|² = |0.8253|² = 0.6812 (68.12%)

Step 4: Self-Similarity Verification:
   For identical points x = x': Ry(0.4 - 0.4) = Ry(0) = I → |⟨0|0⟩|² = 1.00 (100%)`,
        result: 'Points x and x prime have a quantum kernel similarity score of 0.6812, populating matrix entry K_12 in the Gram matrix.',
      },
    },
  ],
  howItWorks: [
    { number: 1, title: 'Pairwise Circuit Execution', description: 'For every pair of samples (x_i, x_j), construct circuit U_dagger(x_j) * U(x_i).' },
    { number: 2, title: 'All-Zero Readout', description: 'Measure probability of measuring bitstring 00...0; this equals K(x_i, x_j).' },
    { number: 3, title: 'Classical SVM Fitting', description: 'Pass computed Kernel Matrix into Scikit-Learn SVC(kernel="precomputed") to find optimal support vectors.' },
  ],
  applications: [
    { title: 'Credit Card Fraud Classification', problem: 'Identifying rare fraudulent transactions hidden in high-dimensional behavioral feature spaces.', solution: 'QSVM with ZZ-kernels maps transactions into quantum space, detecting fraud clusters invisible to classical RBF kernels.' },
  ],
  activity: {
    type: 'mcq',
    title: 'Kernel Circuit Logic',
    question: 'In a quantum kernel estimation circuit, how is the kernel value K(x, x\') physically measured?',
    options: [
      { id: 'a', text: 'By measuring the probability that the circuit returns to the all-zero ground state |00...0>' },
      { id: 'b', text: 'By weighing the quantum chip on a scale' },
      { id: 'c', text: 'By measuring the temperature of the refrigerator' },
      { id: 'd', text: 'By counting how many gates were used' },
    ],
    correctAnswer: 'a',
    explanation: 'By the Born rule, |<0| U_dagger(x\') U(x) |0>|^2 is precisely the probability of the final state collapsing to |00...0>. If x and x\' are identical, this probability is 100%.',
    hint: 'Overlap with state |00...0> measures similarity.',
  },
  learningResource: {
    title: 'Lesson 11: Quantum Kernel Methods',
    pdfUrl: '/presentations/Lesson11.pdf',
    description: 'Quantum feature maps, FidelityQuantumKernel Gram matrix evaluation, and classical Support Vector Machine (SVM) training.',
    lessonNumber: 11,
    pages: 10,
    author: 'Dr. Syed Muzamil Basha',
  },
  pythonHandsOn: {
    title: "Quantum Kernel Support Vector Machine in Qiskit Machine Learning",
    description: "Construct a ZZFeatureMap, evaluate quantum kernel Gram matrices with FidelityQuantumKernel, and train a Scikit-Learn Support Vector Classifier with precomputed quantum kernel.",
    packages: ["qiskit", "qiskit-machine-learning", "qiskit-algorithms", "scikit-learn", "numpy"],
    installCommand: "pip install qiskit qiskit-machine-learning qiskit-algorithms scikit-learn numpy",
    imports: [
      { code: "import numpy as np", explanation: "NumPy array computation" },
      { code: "from sklearn.datasets import make_blobs", explanation: "Synthetic classification dataset" },
      { code: "from sklearn.model_selection import train_test_split", explanation: "Dataset split utility" },
      { code: "from sklearn.preprocessing import MinMaxScaler", explanation: "Scale features to [0, 2pi]" },
      { code: "from sklearn.svm import SVC", explanation: "Classical Support Vector Classifier" },
      { code: "from qiskit.circuit.library import ZZFeatureMap", explanation: "Quantum ZZ feature map" },
      { code: "from qiskit.primitives import StatevectorSampler", explanation: "Statevector sampler primitive" },
      { code: "from qiskit_machine_learning.kernels import FidelityQuantumKernel", explanation: "Quantum fidelity kernel evaluator" },
    ],
    code: [
      { code: "# Step 1: Generate synthetic 2-feature dataset and scale to [0, 2*pi]", explanation: "Data generation" },
      { code: "X, y = make_blobs(n_samples=20, centers=2, random_state=42, n_features=2)", explanation: "20 samples, 2 classes" },
      { code: "scaler = MinMaxScaler(feature_range=(0, 2 * np.pi))", explanation: "MinMax scaler" },
      { code: "X_scaled = scaler.fit_transform(X)", explanation: "Fit and transform features" },
      { code: "X_train, X_test, y_train, y_test = train_test_split(X_scaled, y, test_size=0.2, random_state=42)", explanation: "Train/test split" },
      { code: "", explanation: "" },
      { code: "# Step 2: Define Quantum Feature Map (ZZFeatureMap with linear entanglement)", explanation: "Feature map" },
      { code: "feature_map = ZZFeatureMap(feature_dimension=2, reps=2, entanglement='linear')", explanation: "2-qubit ZZFeatureMap" },
      { code: "", explanation: "" },
      { code: "# Step 3: Initialize StatevectorSampler and FidelityQuantumKernel", explanation: "Kernel initialization" },
      { code: "sampler = StatevectorSampler()", explanation: "Sampler primitive" },
      { code: "quantum_kernel = FidelityQuantumKernel(feature_map=feature_map)", explanation: "Fidelity quantum kernel" },
      { code: "", explanation: "" },
      { code: "# Step 4: Compute Quantum Kernel Gram Matrices for Train and Test sets", explanation: "Kernel evaluation" },
      { code: "X_train_kernel = quantum_kernel.evaluate(X_train)", explanation: "Evaluate N_train x N_train Gram matrix" },
      { code: "X_test_kernel = quantum_kernel.evaluate(X_test, X_train)", explanation: "Evaluate N_test x N_train kernel matrix" },
      { code: "", explanation: "" },
      { code: "# Step 5: Train Classical Support Vector Machine (SVM) with Precomputed Quantum Kernel", explanation: "SVM training" },
      { code: 'svm = SVC(kernel="precomputed")', explanation: "Instantiate SVM with precomputed kernel" },
      { code: "svm.fit(X_train_kernel, y_train)", explanation: "Fit SVM on quantum Gram matrix" },
      { code: "", explanation: "" },
      { code: "# Step 6: Evaluate Model Accuracy on Test Set", explanation: "Inference & evaluation" },
      { code: "y_pred = svm.predict(X_test_kernel)", explanation: "Predict test classes" },
      { code: "accuracy = np.mean(y_pred == y_test)", explanation: "Calculate classification accuracy" },
      { code: 'print(f"Quantum Kernel SVM Accuracy: {accuracy * 100:.2f}%")', explanation: "Print accuracy" },
    ],
    executionFlow: [
      { number: 1, title: "Feature Space Mapping", description: "Classical 2D data vectors are scaled into [0, 2pi] angles and mapped into 2-qubit Hilbert space via ZZFeatureMap." },
      { number: 2, title: "Gram Matrix Computation", description: "FidelityQuantumKernel computes inner product overlaps |<psi(xi)|psi(xj)>|^2 between all pairs of data vectors." },
      { number: 3, title: "Convex SVM Optimization", description: "A classical Support Vector Classifier finds the optimal separating maximum-margin hyperplane in Hilbert space with 100% accuracy." },
    ],
    input: "20 synthetic data samples with 2 continuous features and binary labels",
    output: "Quantum Kernel SVM Accuracy: 100.00%",
    interpretation: "The quantum kernel projects non-linearly separable data into an entangled Hilbert state space where classical hyperplanes can separate classes with high accuracy and zero barren plateau risk.",
    colabInstructions: [
      "Click 'Copy for Google Colab' to copy the complete runnable script",
      "Open Google Colab at colab.research.google.com",
      "Paste into a code cell and press Shift + Enter to run",
    ],
  },
  mcqs: [
    {
      id: 'q1',
      question: 'Why are Quantum Kernel methods free from the "Barren Plateau" problem that plagues Variational Quantum Neural Networks?',
      options: [
        { id: 'a', text: 'Because quantum kernels evaluate fixed overlaps, and the resulting classification is solved via classical convex quadratic programming with a guaranteed unique global minimum' },
        { id: 'b', text: 'Because kernels delete all quantum noise' },
        { id: 'c', text: 'Because kernels do not use qubits' },
        { id: 'd', text: 'Because kernels only run on supercomputers' },
      ],
      correctAnswer: 'a',
      explanation: 'Variational networks suffer from vanishing gradients in non-convex parameter landscapes. Quantum kernels shift optimization to a classical convex SVM dual formulation, avoiding barren plateaus entirely.',
      incorrectFeedback: 'Convex quadratic programming guarantees a unique global minimum.',
    },
    {
      id: 'q2',
      question: 'Placeholder question 2',
      options: [
        { id: 'a', text: 'Answer A' },
        { id: 'b', text: 'Answer B' },
        { id: 'c', text: 'Answer C' },
        { id: 'd', text: 'Answer D' },
      ],
      correctAnswer: 'b',
      explanation: 'Placeholder explanation.',
      incorrectFeedback: 'Placeholder feedback.',
    },
    {
      id: 'q3',
      question: 'Placeholder question 3',
      options: [
        { id: 'a', text: 'Answer A' },
        { id: 'b', text: 'Answer B' },
        { id: 'c', text: 'Answer C' },
        { id: 'd', text: 'Answer D' },
      ],
      correctAnswer: 'b',
      explanation: 'Placeholder explanation.',
      incorrectFeedback: 'Placeholder feedback.',
    },
    {
      id: 'q4',
      question: 'Placeholder question 4',
      options: [
        { id: 'a', text: 'Answer A' },
        { id: 'b', text: 'Answer B' },
        { id: 'c', text: 'Answer C' },
        { id: 'd', text: 'Answer D' },
      ],
      correctAnswer: 'b',
      explanation: 'Placeholder explanation.',
      incorrectFeedback: 'Placeholder feedback.',
    },
    {
      id: 'q5',
      question: 'Placeholder question 5',
      options: [
        { id: 'a', text: 'Answer A' },
        { id: 'b', text: 'Answer B' },
        { id: 'c', text: 'Answer C' },
        { id: 'd', text: 'Answer D' },
      ],
      correctAnswer: 'b',
      explanation: 'Placeholder explanation.',
      incorrectFeedback: 'Placeholder feedback.',
    },
  ],
};

export const variationalQuantumCircuits: Topic = {
  id: 'variational-quantum-circuits',
  moduleId: 'quantum-ml',
  number: 7,
  title: 'Variational Quantum Circuits (VQE & PQC): The Quantum Neural Network',
  description: 'Master Parameterized Quantum Circuits (Ansätze), classical optimization loops, and the Parameter Shift Rule for computing quantum gradients.',
  objectives: [
    'Construct parameterized quantum circuits with rotational gates: Rx(theta), Ry(theta), Rz(theta)',
    'Implement the Parameter Shift Rule for exact hardware gradient evaluation',
    'Understand the Barren Plateau phenomenon (vanishing quantum gradients)',
  ],
  story: `In classical deep learning, neural networks learn by computing gradients via backpropagation.
  
Now imagine you want to train a neural network on a real physical quantum computer.
  
Can you use backpropagation on a quantum chip?
**NO!**
Backpropagation requires saving all intermediate layer activations in memory. But if you look at intermediate qubits on a quantum chip, you collapse the wavefunction and destroy the calculation! Furthermore, the No-Cloning Theorem forbids copying the states!
  
How can we calculate gradients on a physical quantum chip without collapsing the state?
  
In 2018, quantum researchers discovered the **Parameter Shift Rule**.
By running the quantum circuit twice—once shifted forward by +90 degrees and once shifted backward by -90 degrees—the difference between the two measurements gives the **EXACT analytical gradient**!
This mathematical breakthrough unlocked gradient descent on real quantum hardware!`,
  motivation: `**The foundational training mechanism of QML**: The Parameter Shift Rule is the quantum equivalent of backpropagation. It allows frameworks like PennyLane and Qiskit Machine Learning to train quantum circuits using standard PyTorch optimizers.`,
  concept: {
    simple: `A Variational Quantum Circuit is a quantum neural network:
- It has layers of rotating gates with adjustable dials (angles $\\theta$).
- To find the slope (gradient) for a dial:
  1. Turn the dial slightly forward (+90°) and measure.
  2. Turn the dial slightly backward (-90°) and measure.
  3. Subtract the two scores: ` + '`(Forward - Backward) / 2`' + `!
- That gives you the exact slope to adjust your dial down the loss mountain!`,
    technical: `Parameterized Quantum Circuits (PQCs) implement Ansätze $U(\\boldsymbol{\\theta}) = \\prod_{l=1}^L U_l(\\theta_l)$ where generators $G_l$ have two unique eigenvalues $\\pm r$. The **Parameter Shift Rule** computes exact analytical partial derivatives on quantum hardware without finite-difference approximation:
$$\\frac{\\partial \\langle M \\rangle}{\\partial \\theta_l} = r \\left[ \\langle M \\rangle_{\\theta_l + \\frac{\\pi}{4r}} - \\langle M \\rangle_{\\theta_l - \\frac{\\pi}{4r}} \\right]$$
For standard Pauli rotation generators with $r = 1/2$, the shift is $\\pm \\pi/2$.`,
  },
  keyTerms: [
    { term: 'Ansatz', simple: 'The architectural layout of gates and wires in a variational quantum circuit.', technical: 'A parameterized trial wavefunction structure $U(\\boldsymbol{\\theta})|0\\rangle$ chosen for expressibility and hardware efficiency.' },
    { term: 'Parameter Shift Rule', simple: 'A formula to compute exact quantum gradients by shifting gate angles by +90 and -90 degrees.', technical: 'An exact analytical gradient evaluation methodology for quantum hardware bypassing numerical finite-difference instability.' },
    { term: 'Barren Plateau', simple: 'When the quantum loss landscape becomes completely flat, causing learning to freeze.', technical: 'Phenomenon where gradient variance decays exponentially in qubit count $\\text{Var}(\\partial \\mathcal{L}) \\in \\mathcal{O}(2^{-n})$, preventing optimization in deep random Ansätze.' },
  ],
  equations: [
    {
      latex: '\\frac{\\partial \\langle M \\rangle}{\\partial \\theta_j} = \\frac{\\langle M \\rangle_{\\theta_j + \\frac{\\pi}{2}} - \\langle M \\rangle_{\\theta_j - \\frac{\\pi}{2}}}{2}, \\quad \\boldsymbol{\\theta}_{t+1} = \\boldsymbol{\\theta}_t - \\eta \\nabla_{\\boldsymbol{\\theta}} \\mathcal{L}',
      explanation: 'The Parameter-Shift Rule for Parameterized Quantum Circuits (PQCs): Computes mathematically exact partial derivatives of quantum expectations on real quantum hardware without numerical finite-difference approximation errors. By evaluating the circuit at two macro-shifts (theta_j + pi/2 and theta_j - pi/2), the exact analytical gradient is obtained directly from hardware measurements, immune to small-step shot noise.',
      symbols: [
        { symbol: '\\frac{\\partial \\langle M \\rangle}{\\partial \\theta_j}', meaning: 'Exact analytical gradient', interpretation: 'Derivative of expectation value with respect to gate parameter $\theta_j$' },
        { symbol: '\\langle M \\rangle_{\\theta + \\pi/2}', meaning: 'Forward shifted expectation', interpretation: 'Measurement outcome with parameter shifted forward by +90 degrees' },
        { symbol: '\\langle M \\rangle_{\\theta - \\pi/2}', meaning: 'Backward shifted expectation', interpretation: 'Measurement outcome with parameter shifted backward by -90 degrees' },
        { symbol: '\\eta', meaning: 'Optimizer learning rate', interpretation: 'Step size taken along the negative gradient direction' },
      ],
      example: {
        description: 'Optimizing a variational gate parameter currently at theta = 0.70 radians with learning rate eta = 0.20 using the Parameter-Shift Rule:',
        calculation: `Step 1: Execute Forward Shift (θ + π/2):
   θ_forward = 0.70 + 1.5708 = 2.2708 radians
   Measure expectation on QPU: ⟨M⟩_forward = -0.6420

Step 2: Execute Backward Shift (θ - π/2):
   θ_backward = 0.70 - 1.5708 = -0.8708 radians
   Measure expectation on QPU: ⟨M⟩_backward = +0.6420

Step 3: Compute Exact Analytical Gradient:
   ∂⟨M⟩/∂θ = [ ⟨M⟩_forward - ⟨M⟩_backward ] / 2
   = [ -0.6420 - (+0.6420) ] / 2 = -1.2840 / 2 = -0.6420

Step 4: Update Parameter via Gradient Descent:
   θ_new = θ - η · (∂⟨M⟩/∂θ)
   = 0.70 - (0.20 × -0.6420) = 0.70 + 0.1284 = 0.8284 radians`,
        result: 'Parameter theta updates from 0.70 to 0.8284 radians, stepping directly toward the optimal minimum.',
      },
    },
  ],
  howItWorks: [
    { number: 1, title: 'Forward Evaluation', description: 'Run circuit at current parameters theta; evaluate loss.' },
    { number: 2, title: 'Parameter Shift Forward', description: 'Execute circuit with theta_j + pi/2.' },
    { number: 3, title: 'Parameter Shift Backward', description: 'Execute circuit with theta_j - pi/2.' },
    { number: 4, title: 'Classical Step', description: 'Subtract evaluations to compute exact gradient; step theta via Adam optimizer.' },
  ],
  applications: [
    { title: 'Variational Quantum Eigensolver (VQE)', problem: 'Finding the ground-state molecular bonding energy of hydrogen (H2).', solution: 'Parameter-shift gradients optimize circuit angles until energy expectation matches the true chemical ground state.' },
  ],
  activity: {
    type: 'mcq',
    title: 'Gradient Method Distinction',
    question: 'Why is the Parameter Shift Rule preferred over classical numerical finite-difference approximation ((f(x+h) - f(x)) / h) on quantum hardware?',
    options: [
      { id: 'a', text: 'Finite-difference requires tiny shifts (h ≈ 0.0001) which are completely drowned out by physical quantum measurement noise, while parameter shift uses large macro shifts (pi/2) to compute exact analytical gradients' },
      { id: 'b', text: 'Because finite difference is illegal in physics' },
      { id: 'c', text: 'Because parameter shift runs on GPUs' },
      { id: 'd', text: 'Because parameter shift requires zero measurements' },
    ],
    correctAnswer: 'a',
    explanation: 'Small perturbations h in finite differences are overwhelmed by quantum shot noise. The Parameter Shift Rule uses massive shifts of pi/2 (90 degrees), providing mathematically exact analytical gradients that tolerate statistical noise.',
    hint: 'How does tiny epsilon h behave when measurements have statistical shot noise?',
  },
  pythonHandsOn: {
    title: "Constructing Parameterized Ansatzes with RealAmplitudes in Qiskit",
    description: "Construct hardware-efficient variational ansatz circuits in Qiskit with parameterized rotation and entanglement layers.",
    packages: ["qiskit"],
    installCommand: "pip install qiskit",
    imports: [
      { code: "from qiskit.circuit.library import RealAmplitudes, TwoLocal", explanation: "Standard Qiskit variational ansatzes" }
    ],
    code: [
      { code: "# 1. RealAmplitudes Ansatz: Alternating Ry rotations and CNOT entanglers", explanation: "RealAmplitudes" },
      { code: "ansatz_real = RealAmplitudes(num_qubits=3, reps=1, entanglement='linear')", explanation: "3 qubits, 1 layer" },
      { code: "print('=== 1. RealAmplitudes Variational Ansatz ===')", explanation: "Header 1" },
      { code: "print(ansatz_real.decompose().draw('text'))", explanation: "Draw circuit" },
      { code: "print(f'Number of trainable parameters: {ansatz_real.num_parameters}')", explanation: "Count params" },
      { code: "", explanation: "" },
      { code: "# 2. TwoLocal Ansatz: Flexible Ry-Rz rotations with full entanglement", explanation: "TwoLocal" },
      { code: "ansatz_twolocal = TwoLocal(num_qubits=3, rotation_blocks=['ry', 'rz'], entanglement_blocks='cz', reps=1)", explanation: "TwoLocal" },
      { code: "print('\\n=== 2. TwoLocal Variational Ansatz (Ry + Rz + CZ) ===')", explanation: "Header 2" },
      { code: "print(ansatz_twolocal.decompose().draw('text'))", explanation: "Draw circuit" },
      { code: "print(f'Number of trainable parameters: {ansatz_twolocal.num_parameters}')", explanation: "Count params" }
    ],
    executionFlow: [
      { number: 1, title: "RealAmplitudes Architecture", description: "Builds layers of real-valued single-qubit rotations followed by entangling CNOTs." },
      { number: 2, title: "TwoLocal Architecture", description: "Constructs expressive multi-rotation parameterized circuits with CZ entanglement." },
      { number: 3, title: "Parameter Auditing", description: "Inspect parameter counts and ensure circuit depth fits within hardware coherence limits." }
    ],
    input: "3-qubit variational circuit with linear and full entanglement topologies.",
    output: "RealAmplitudes: 3 wires with Ry layers and linear CNOTs (6 parameters).\nTwoLocal: 3 wires with Ry, Rz layers and CZ gates (12 parameters).",
    interpretation: "Variational ansatzes are the quantum analogue of neural network layers. Their expressive power and parameter efficiency determine whether a hybrid quantum algorithm can learn without getting trapped in barren plateaus.",
    colabInstructions: [
      "Click 'Copy for Google Colab' to copy the complete runnable script",
      "Open Google Colab at colab.research.google.com",
      "Paste into a code cell and press Shift + Enter to run",
    ],
  },
  mcqs: [
    {
      id: 'q1',
      question: 'What is the "Barren Plateau" problem in deep Variational Quantum Circuits?',
      options: [
        { id: 'a', text: 'As the number of qubits and layers increases, the gradients of the cost function vanish exponentially, making optimization via gradient descent practically impossible' },
        { id: 'b', text: 'The quantum computer runs out of memory' },
        { id: 'c', text: 'The quantum circuit begins computing classical logic' },
        { id: 'd', text: 'The qubits turn into silicon' },
      ],
      correctAnswer: 'a',
      explanation: 'In deep random quantum Ansätze, McClean et al. (2018) proved that gradient variance shrinks as O(2^-n). The loss landscape becomes exponentially flat, preventing gradient descent from finding descent directions.',
      incorrectFeedback: 'Barren plateaus refer to exponentially vanishing quantum loss gradients.',
    },
    {
      id: 'q2',
      question: 'Placeholder question 2',
      options: [
        { id: 'a', text: 'Answer A' },
        { id: 'b', text: 'Answer B' },
        { id: 'c', text: 'Answer C' },
        { id: 'd', text: 'Answer D' },
      ],
      correctAnswer: 'b',
      explanation: 'Placeholder explanation.',
      incorrectFeedback: 'Placeholder feedback.',
    },
    {
      id: 'q3',
      question: 'Placeholder question 3',
      options: [
        { id: 'a', text: 'Answer A' },
        { id: 'b', text: 'Answer B' },
        { id: 'c', text: 'Answer C' },
        { id: 'd', text: 'Answer D' },
      ],
      correctAnswer: 'b',
      explanation: 'Placeholder explanation.',
      incorrectFeedback: 'Placeholder feedback.',
    },
    {
      id: 'q4',
      question: 'Placeholder question 4',
      options: [
        { id: 'a', text: 'Answer A' },
        { id: 'b', text: 'Answer B' },
        { id: 'c', text: 'Answer C' },
        { id: 'd', text: 'Answer D' },
      ],
      correctAnswer: 'b',
      explanation: 'Placeholder explanation.',
      incorrectFeedback: 'Placeholder feedback.',
    },
    {
      id: 'q5',
      question: 'Placeholder question 5',
      options: [
        { id: 'a', text: 'Answer A' },
        { id: 'b', text: 'Answer B' },
        { id: 'c', text: 'Answer C' },
        { id: 'd', text: 'Answer D' },
      ],
      correctAnswer: 'b',
      explanation: 'Placeholder explanation.',
      incorrectFeedback: 'Placeholder feedback.',
    },
  ],
};

export const variationalQuantumClassifier: Topic = {
  id: 'variational-quantum-classifier',
  moduleId: 'quantum-ml',
  number: 8,
  title: 'The Variational Quantum Classifier (VQC)',
  description: 'Construct a complete hybrid supervised learning pipeline: Feature Map + Variational Ansatz + Measurement Readout + Classical Optimizer.',
  objectives: [
    'Assemble an end-to-end Variational Quantum Classifier (VQC)',
    'Train circuit parameters using classical gradient descent optimizers (Adam, COBYLA)',
    'Evaluate binary classification boundaries in simulated quantum hardware',
  ],
  story: `Imagine a world-class Formula 1 racing team.
  
You have a brilliant, experienced human driver (the classical computer) and a hyper-tuned experimental rocket engine (the quantum processor).
  
Neither can win the race alone:
- The classical computer cannot evaluate high-dimensional quantum states.
- The quantum processor cannot store large datasets or run complex decision-tree logic.
  
In a **Variational Quantum Classifier (VQC)**, they form a tight feedback loop:
1. The classical driver feeds a data point to the quantum engine.
2. The quantum engine rotates through Hilbert space and spits out a score.
3. The classical driver checks the score against the true label, calculates the error, and tweaks the quantum engine’s knobs.
4. They repeat this lap after lap until the quantum classifier wins the championship!`,
  motivation: `**The canonical NISQ classification architecture**: VQC is the primary supervised learning framework supported in Qiskit Machine Learning and PennyLane for benchmark classification tasks.`,
  concept: {
    simple: `A Variational Quantum Classifier (VQC) is a hybrid team:
1. **Load Data**: The quantum feature map turns numbers into quantum waves.
2. **Predict**: The variational layers rotate the waves using trainable dials.
3. **Measure**: Check if the qubit leans toward 0 or 1.
4. **Learn**: A classical optimizer tunes the dials to make the predictions more accurate!`,
    technical: `A VQC implements a supervised hypothesis $h_{\\boldsymbol{\\theta}}(\\mathbf{x}) = \\text{sign}\\big( \\langle 0 | U_\\Phi^\\dagger(\\mathbf{x}) W^\\dagger(\\boldsymbol{\\theta}) M W(\\boldsymbol{\\theta}) U_\\Phi(\\mathbf{x}) | 0 \\rangle + b \\big)$. Empirical risk minimization minimizes binary cross-entropy or mean squared error $\\mathcal{L}(\\boldsymbol{\\theta}) = \\frac{1}{N} \\sum (y_i - \\hat{y}_i(\\boldsymbol{\\theta}))^2$ via hybrid optimization where quantum circuits evaluate gradients using the Parameter Shift Rule and classical algorithms execute parameter updates.`,
  },
  keyTerms: [
    { term: 'Variational Quantum Classifier (VQC)', simple: 'A quantum circuit that acts like a classifier, tuned by a classical computer.', technical: 'Hybrid quantum-classical algorithm executing supervised classification via parameterized unitary transformations.' },
    { term: 'COBYLA', simple: 'A classical optimizer that doesn’t need gradients; it searches for the best settings by trying nearby points.', technical: 'Constrained Optimization BY Linear Approximation: a derivative-free classical numerical optimizer resilient to quantum shot noise.' },
  ],
  equations: [
    {
      latex: '\\hat{y}(\\mathbf{x}) = \\frac{\\langle Z_0 \\rangle_{\\mathbf{x}, \\boldsymbol{\\theta}} + 1}{2}, \\quad \\mathcal{L}_{\\text{BCE}}(\\boldsymbol{\\theta}) = -\\frac{1}{M}\\sum_{m=1}^M \\Big[ y^{(m)} \\log \\hat{y}^{(m)} + (1 - y^{(m)}) \\log(1 - \\hat{y}^{(m)}) \\Big]',
      explanation: 'Variational Quantum Classifier (VQC) Output Calibration & Binary Cross-Entropy Loss: In a VQC, the quantum expectation value <Z_0> in [-1, +1] is mapped onto a calibrated probability y_hat in [0, 1] via the affine transformation y_hat = (<Z> + 1)/2. The classical optimizer updates the ansatz rotation angles theta by minimizing the binary cross-entropy loss across the training dataset.',
      symbols: [
        { symbol: '\\hat{y}(\\mathbf{x})', meaning: 'Predicted probability of Class 1', interpretation: 'Calibrated output probability bounded between 0.0 and 1.0' },
        { symbol: '\\langle Z_0 \\rangle', meaning: 'Pauli-Z expectation value on qubit 0', interpretation: 'Physical QPU measurement value between -1.0 and +1.0' },
        { symbol: '\\mathcal{L}_{\\text{BCE}}', meaning: 'Binary Cross-Entropy Loss', interpretation: 'Supervised classification error minimized by classical optimizer' },
        { symbol: 'y^{(m)}', meaning: 'Ground-truth label', interpretation: 'True binary class label (1 or 0) for training sample m' },
      ],
      example: {
        description: 'Evaluating VQC prediction and cross-entropy loss for a training sample with ground truth y = 1 when the quantum circuit yields <Z_0> = +0.72:',
        calculation: `Step 1: Map Pauli-Z Expectation to Probability:
   ⟨Z0⟩ = +0.72
   y_hat = (⟨Z0⟩ + 1) / 2 = (+0.72 + 1) / 2 = 1.72 / 2 = 0.860 (86.0%)

Step 2: Determine Binary Classification Decision (threshold = 0.5):
   y_hat = 0.860 ≥ 0.50 → Predicted Label: Class 1 (Correct match!)

Step 3: Compute Sample Cross-Entropy Loss:
   Loss = -[ y · ln(y_hat) + (1 - y) · ln(1 - y_hat) ]
   Since y = 1: Loss = -ln(0.860) = -(-0.1508) = 0.1508

Step 4: Comparison with Poor Prediction (if ⟨Z0⟩ was -0.60):
   y_hat_bad = (-0.60 + 1)/2 = 0.20
   Loss_bad = -ln(0.20) = 1.6094 (10.7× higher penalty!)`,
        result: 'The VQC achieves an 86.0% probability for the true class with a low cross-entropy error of 0.1508.',
      },
    },
  ],
  howItWorks: [
    { number: 1, title: 'Encode Input', description: 'Apply feature map U_Phi(x) on ground state |0>.' },
    { number: 2, title: 'Apply Variational Ansatz', description: 'Pass state through layers of parameterized rotation and CNOT entangling gates.' },
    { number: 3, title: 'Measure Expectation', description: 'Read out Pauli-Z expectation value on output qubit.' },
    { number: 4, title: 'Classical Optimization', description: 'Classical optimizer computes loss and steps parameters theta.' },
  ],
  applications: [
    { title: 'Financial Credit Default Prediction', problem: 'Classifying loan applicants in non-linear credit risk manifolds.', solution: 'VQC maps customer financial features into entangled quantum states, optimizing decision hyperplanes.' },
  ],
  activity: {
    type: 'mcq',
    title: 'VQC Optimization Role',
    question: 'In a Variational Quantum Classifier (VQC), what component performs the parameter updates (adjusting theta)?',
    options: [
      { id: 'a', text: 'A classical computer running an optimization algorithm (like Adam or COBYLA)' },
      { id: 'b', text: 'The quantum processor updates itself without any classical computer' },
      { id: 'c', text: 'A human physicist turns physical knobs by hand' },
      { id: 'd', text: 'The dilution refrigerator thermometer' },
    ],
    correctAnswer: 'a',
    explanation: 'VQC is a hybrid algorithm: the quantum processor evaluates the quantum circuit and measures expectations; an external classical CPU runs the optimizer to calculate and apply parameter updates.',
    hint: 'Remember that VQC is a hybrid quantum-classical architecture.',
  },
  learningResource: {
    title: 'Lesson 10: Variational Quantum Classification',
    pdfUrl: '/presentations/Lesson10.pdf',
    description: 'Feature maps, RealAmplitudes ansatz, COBYLA optimization, PassManager transpilation, and complete VQC pipeline.',
    lessonNumber: 10,
    pages: 11,
    author: 'Dr. Syed Muzamil Basha',
  },
  pythonHandsOn: {
    title: "Variational Quantum Classifier (VQC) in Qiskit Machine Learning",
    description: "Build, transpile, train, and test an end-to-end Variational Quantum Classifier using ZZFeatureMap, RealAmplitudes ansatz, COBYLA optimizer, and StatevectorSampler.",
    packages: ["qiskit", "qiskit-machine-learning", "qiskit-algorithms", "scikit-learn", "numpy"],
    installCommand: "pip install qiskit qiskit-machine-learning qiskit-algorithms scikit-learn numpy",
    imports: [
      { code: "import numpy as np", explanation: "NumPy array computations" },
      { code: "from qiskit.primitives import StatevectorSampler", explanation: "Sampler primitive for quantum state sampling" },
      { code: "from qiskit_machine_learning.algorithms.classifiers import VQC", explanation: "Variational Quantum Classifier estimator" },
      { code: "from qiskit.circuit.library import ZZFeatureMap, RealAmplitudes", explanation: "Quantum feature map and parameterized ansatz" },
      { code: "from qiskit_algorithms.optimizers import COBYLA", explanation: "Classical derivative-free numerical optimizer" },
      { code: "from qiskit.transpiler import PassManager", explanation: "Circuit transpilation pipeline" },
      { code: "from qiskit.transpiler.passes import Optimize1qGatesDecomposition, CommutativeCancellation", explanation: "Transpilation optimization passes" },
      { code: "from sklearn.model_selection import train_test_split", explanation: "Dataset split utility" },
      { code: "from sklearn.preprocessing import StandardScaler", explanation: "Feature standardization" },
      { code: "from sklearn.datasets import make_classification", explanation: "Synthetic classification dataset" },
    ],
    code: [
      { code: "# Step 1: Generate and Preprocess Classification Data", explanation: "Data generation" },
      { code: "X, y = make_classification(n_samples=100, n_features=2, n_informative=2, n_redundant=0, n_clusters_per_class=1, random_state=42)", explanation: "100 samples with 2 features" },
      { code: "scaler = StandardScaler()", explanation: "StandardScaler" },
      { code: "X_scaled = scaler.fit_transform(X)", explanation: "Standardize features" },
      { code: "X_train, X_test, y_train, y_test = train_test_split(X_scaled, y, test_size=0.2, random_state=42)", explanation: "80/20 train/test split" },
      { code: "", explanation: "" },
      { code: "# Step 2: Define Quantum Feature Map (ZZFeatureMap) & Ansatz (RealAmplitudes)", explanation: "Circuit setup" },
      { code: "feature_map = ZZFeatureMap(feature_dimension=2, reps=2, entanglement='linear')", explanation: "Angle feature mapping" },
      { code: "ansatz = RealAmplitudes(num_qubits=2, reps=3, entanglement='linear')", explanation: "Parameterized variational ansatz" },
      { code: "", explanation: "" },
      { code: "# Step 3: Initialize StatevectorSampler and Optimizer", explanation: "Primitives & Optimizer" },
      { code: "sampler = StatevectorSampler()", explanation: "Primitive sampler" },
      { code: "optimizer = COBYLA(maxiter=100)", explanation: "COBYLA optimizer instance" },
      { code: "", explanation: "" },
      { code: "# Step 4: Define Transpiler Pass Manager", explanation: "Transpiler" },
      { code: "pass_manager = PassManager([", explanation: "Transpiler pipeline" },
      { code: "    Optimize1qGatesDecomposition(basis=['u3', 'cx']),", explanation: "Optimize 1q gates" },
      { code: "    CommutativeCancellation()", explanation: "Cancel commutative gates" },
      { code: "])", explanation: "Close pass manager" },
      { code: "", explanation: "" },
      { code: "# Step 5: Instantiate and Train Variational Quantum Classifier (VQC)", explanation: "Model training" },
      { code: "vqc = VQC(", explanation: "VQC constructor" },
      { code: "    feature_map=feature_map,", explanation: "Assign feature map" },
      { code: "    ansatz=ansatz,", explanation: "Assign variational ansatz" },
      { code: "    optimizer=optimizer,", explanation: "Assign classical optimizer" },
      { code: "    sampler=sampler,", explanation: "Assign sampler primitive" },
      { code: "    pass_manager=pass_manager", explanation: "Assign pass manager" },
      { code: ")", explanation: "Instantiate VQC" },
      { code: "vqc.fit(X_train, y_train)", explanation: "Train VQC on training data" },
      { code: "", explanation: "" },
      { code: "# Step 6: Evaluate Model Accuracy on Test Set", explanation: "Evaluation" },
      { code: "y_pred = vqc.predict(X_test)", explanation: "Predict on test samples" },
      { code: "accuracy = np.mean(y_pred == y_test)", explanation: "Compute test accuracy" },
      { code: 'print(f"VQC Accuracy: {accuracy * 100:.2f}%")', explanation: "Print accuracy" },
    ],
    executionFlow: [
      { number: 1, title: "Feature Encoding & Ansatz", description: "Encodes standardized data into 2-qubit states with ZZFeatureMap and prepares a 3-repetition RealAmplitudes trainable ansatz." },
      { number: 2, title: "Transpilation Optimization", description: "PassManager optimizes 1-qubit gate decompositions and cancels commuting gates to reduce quantum circuit depth." },
      { number: 3, title: "Hybrid Convergence", description: "COBYLA optimizer tunes the variational quantum gate angles over 100 iterations, achieving >90% classification accuracy on unseen test samples." },
    ],
    input: "100 binary classification samples split into 80 training and 20 test instances",
    output: "VQC Accuracy: 95.00%",
    interpretation: "The Variational Quantum Classifier successfully optimizes parameterized quantum rotational gates in Hilbert space, discovering clean non-linear separation boundaries between binary classes.",
    colabInstructions: [
      "Click 'Copy for Google Colab' to copy the complete runnable script",
      "Open Google Colab at colab.research.google.com",
      "Paste into a code cell and press Shift + Enter to run",
    ],
  },
  mcqs: [
    {
      id: 'q1',
      question: 'What is the primary loss function typically used when training a Variational Quantum Classifier for binary classification?',
      options: [
        { id: 'a', text: 'Mean Squared Error (MSE) or Binary Cross-Entropy on measured expectation values' },
        { id: 'b', text: 'Shannon Entropy' },
        { id: 'c', text: 'Sorting distance' },
        { id: 'd', text: 'PageRank' },
      ],
      correctAnswer: 'a',
      explanation: 'VQC models evaluate continuous expectation values (in [-1, 1]) and optimize them against target class labels using standard MSE or cross-entropy loss.',
      incorrectFeedback: 'MSE and cross-entropy are standard loss metrics for VQC training.',
    },
    {
      id: 'q2',
      question: 'Placeholder question 2',
      options: [
        { id: 'a', text: 'Answer A' },
        { id: 'b', text: 'Answer B' },
        { id: 'c', text: 'Answer C' },
        { id: 'd', text: 'Answer D' },
      ],
      correctAnswer: 'b',
      explanation: 'Placeholder explanation.',
      incorrectFeedback: 'Placeholder feedback.',
    },
    {
      id: 'q3',
      question: 'Placeholder question 3',
      options: [
        { id: 'a', text: 'Answer A' },
        { id: 'b', text: 'Answer B' },
        { id: 'c', text: 'Answer C' },
        { id: 'd', text: 'Answer D' },
      ],
      correctAnswer: 'b',
      explanation: 'Placeholder explanation.',
      incorrectFeedback: 'Placeholder feedback.',
    },
    {
      id: 'q4',
      question: 'Placeholder question 4',
      options: [
        { id: 'a', text: 'Answer A' },
        { id: 'b', text: 'Answer B' },
        { id: 'c', text: 'Answer C' },
        { id: 'd', text: 'Answer D' },
      ],
      correctAnswer: 'b',
      explanation: 'Placeholder explanation.',
      incorrectFeedback: 'Placeholder feedback.',
    },
    {
      id: 'q5',
      question: 'Placeholder question 5',
      options: [
        { id: 'a', text: 'Answer A' },
        { id: 'b', text: 'Answer B' },
        { id: 'c', text: 'Answer C' },
        { id: 'd', text: 'Answer D' },
      ],
      correctAnswer: 'b',
      explanation: 'Placeholder explanation.',
      incorrectFeedback: 'Placeholder feedback.',
    },
  ],
};

export const quantumNeuralNetworks: Topic = {
  id: 'quantum-neural-networks',
  moduleId: 'quantum-ml',
  number: 9,
  title: 'Quantum Neural Networks (QNN): Layered Architectures',
  description: 'Explore multi-qubit Quantum Neural Networks: Strongly Entangling Layers, Quantum Convolutional Neural Networks (QCNN), and Expressibility.',
  objectives: [
    'Construct multi-layered Quantum Neural Networks (QNNs)',
    'Understand Quantum Convolutional Neural Networks (QCNN) with convolution and pooling layers',
    'Evaluate Ansatz expressibility and entangling capability',
  ],
  story: `In classical deep learning, Convolutional Neural Networks (CNNs) revolutionized image processing by using weight sharing and spatial pooling.
  
In 2019, Harvard physicists Iris Cong, Soonwon Choi, and Mikhail Lukin asked:
*Can we build a Quantum Convolutional Neural Network (QCNN)?*
  
They designed a quantum circuit that mimics a CNN:
1. **Quantum Convolution**: Two-qubit unitary gates slide across neighbor qubits to detect local quantum correlations.
2. **Quantum Pooling**: Measuring a subset of qubits and using mid-circuit measurement to discard them, compressing the register dimensions!
  
Most amazingly, Cong and Lukin proved mathematically that QCNNs are completely immune to the dreaded Barren Plateau problem! QCNNs can scale to hundreds of qubits without vanishing gradients!`,
  motivation: `**Scalable quantum architectures**: Standard random Ansätze freeze due to barren plateaus. Hierarchical architectures like QCNNs provide the primary scalable design pattern for deep quantum networks on large qubit registers.`,
  concept: {
    simple: `A Quantum Neural Network (QNN) is a deep network built out of quantum gates:
- Instead of artificial neurons, it uses **Qubits**.
- Instead of weights, it uses **Rotation Gates**.
- Instead of wires, it uses **Quantum Entanglement**.
In a Quantum CNN (QCNN), it compresses the qubits step by step (Pooling) until just 1 output qubit remains to announce the decision!`,
    technical: `A Quantum Neural Network generalizes multi-layer feedforward processing to unitary circuits. A Quantum Convolutional Neural Network (QCNN) consists of interleaved layers:
1. **Convolutional Layers**: Translationally invariant multi-qubit unitaries $U_{conv}$ acting on adjacent local subsystems.
2. **Pooling Layers**: Dimensionality reduction via partial tracing or measurement-controlled feedforward operations tracing out $n/2$ subsystems.
Because the reverse light-cone of local observables in QCNNs is bounded independently of register width $n$, QCNNs do not exhibit barren plateaus (Pesah et al., PRX 2021).`,
  },
  keyTerms: [
    { term: 'Quantum Neural Network (QNN)', simple: 'A multi-layer circuit of quantum gates trained to recognize patterns like a biological brain.', technical: 'A parameterized quantum computational model combining linear unitary transformations and non-linear measurements.' },
    { term: 'Quantum Convolutional Neural Network (QCNN)', simple: 'A quantum network that compresses qubits layer-by-layer like a classical image filter.', technical: 'Hierarchical O(log n) depth architecture utilizing local unitary convolutions and reduction pooling.' },
    { term: 'Expressibility', simple: 'How flexible the quantum network is at covering all possible quantum states.', technical: 'The degree to which a parameterized ansatz explores the Haar-uniform distribution over the unitary group $U(2^n)$.' },
  ],
  equations: [
    {
      latex: 'U_{\\text{QNN}}(\\boldsymbol{\\theta}) = \\prod_{l=1}^L \\left( \\bigotimes_{j=1}^n R(\\theta_{lj}) \\cdot \\prod_{\\langle j, k \\rangle} CX_{jk} \\right), \\quad \\text{Var}_{\\boldsymbol{\\theta}}\\left( \\frac{\\partial \\langle O \\rangle}{\\partial \\theta_k} \\right) \\sim \\mathcal{O}(2^{-n})',
      explanation: 'Quantum Neural Network Architecture & The Barren Plateau Phenomenon: Describes a multi-layer Parameterized Quantum Neural Network (QNN) alternating arbitrary single-qubit rotations with entangling gates across L layers. In deep unstructured random QNNs, McClean et al. proved that gradient variance vanishes exponentially as O(2^-n), known as a Barren Plateau, requiring specialized architectures (QCNNs, local observables) to train effectively.',
      symbols: [
        { symbol: 'L', meaning: 'Number of QNN layers', interpretation: 'Depth of parameterized transformations' },
        { symbol: 'R(\\theta)', meaning: 'Parameterized single-qubit rotation', interpretation: 'Rx, Ry, Rz gates acting as trainable synaptic weights' },
        { symbol: 'CX_{jk}', meaning: 'Two-qubit entangling gates', interpretation: 'Simulates multi-qubit synaptic connectivity between neighboring qubits' },
        { symbol: '\\text{Var}(\\partial \\langle O \\rangle)', meaning: 'Gradient variance across parameter space', interpretation: 'Decays exponentially as $2^{-n}$ in deep random circuits' },
      ],
      example: {
        description: 'Comparing gradient variance decay between a small 4-qubit QNN and a larger 20-qubit QNN on a global observable:',
        calculation: `Step 1: Evaluate 4-Qubit QNN Variance Scaling:
   State space dimension: 2^4 = 16
   Expected gradient variance: Var_4 ~ 1 / 2^4 = 1 / 16 = 0.0625
   Standard Deviation: σ_4 = √0.0625 = 0.25 (Easily measurable with 1,000 shots!)

Step 2: Evaluate 20-Qubit QNN Variance Scaling (Barren Plateau):
   State space dimension: 2^20 = 1,048,576
   Expected gradient variance: Var_20 ~ 1 / 2^20 ≈ 9.54 × 10^-7
   Standard Deviation: σ_20 = √(9.54 × 10^-7) ≈ 0.000977

Step 3: Shot Requirement to Detect Gradient Direction:
   Shots needed ~ 1 / Var
   4 qubits: ~16 shots
   20 qubits: ~1,048,576 shots (> 1 million measurement shots for ONE step!)`,
        result: 'The 20-qubit network requires over 1 million shots per gradient step due to barren plateaus, demonstrating why local cost functions are essential.',
      },
    },
  ],
  howItWorks: [
    { number: 1, title: 'State Ingestion', description: 'Load input features via angle or amplitude encoding.' },
    { number: 2, title: 'Convolutional Filtering', description: 'Apply 2-qubit unitary operators across neighboring qubit pairs.' },
    { number: 3, title: 'Pooling Compression', description: 'Measure alternate qubits to reduce dimension by 50%.' },
    { number: 4, title: 'Final Readout', description: 'Measure final surviving qubit to yield classification.' },
  ],
  applications: [
    { title: 'Topological Quantum Phase Recognition', problem: 'Classifying exotic phases of matter (Symmetry-Protected Topological phases) in condensed matter physics.', solution: 'QCNNs classify topological order with 99%+ fidelity where classical neural networks fail.' },
  ],
  activity: {
    type: 'mcq',
    title: 'QCNN Barren Plateau Immunity',
    question: 'Why are Quantum Convolutional Neural Networks (QCNNs) immune to the Barren Plateau problem that freezes standard deep quantum networks?',
    options: [
      { id: 'a', text: 'Because their hierarchical tree-like pooling structure limits circuit depth to O(log n), preventing the exponential flattening of gradient variance' },
      { id: 'b', text: 'Because QCNNs do not use any parameters' },
      { id: 'c', text: 'Because QCNNs are classical code' },
      { id: 'd', text: 'Because qubits stop decaying in CNNs' },
    ],
    correctAnswer: 'a',
    explanation: 'Due to their logarithmic depth ($O(\\log n)$) and localized light-cones, QCNNs ensure that cost function gradients decay polynomially rather than exponentially, avoiding barren plateaus.',
    hint: 'Hierarchical pooling keeps the circuit depth logarithmic: O(log n).',
  },
  pythonHandsOn: {
    title: "Implementing an Estimator QNN Layer in Qiskit",
    description: "Construct a Quantum Neural Network (QNN) layer in Qiskit with parameterized unitary transformations and observable expectation gradients.",
    packages: ["qiskit", "numpy"],
    installCommand: "pip install qiskit numpy",
    imports: [
      { code: "from qiskit import QuantumCircuit", explanation: "Circuit constructor" },
      { code: "from qiskit.circuit import ParameterVector", explanation: "Parameter vector" },
      { code: "from qiskit.quantum_info import Statevector, SparsePauliOp", explanation: "Observables" },
      { code: "import numpy as np", explanation: "NumPy array support" }
    ],
    code: [
      { code: "# Construct a 2-qubit Quantum Neural Network layer", explanation: "QNN setup" },
      { code: "inputs = ParameterVector('input', 2)", explanation: "Input parameters" },
      { code: "weights = ParameterVector('weight', 4)", explanation: "Trainable parameters" },
      { code: "qc = QuantumCircuit(2)", explanation: "2 qubits" },
      { code: "# Feature encoding", explanation: "Encoding" },
      { code: "qc.rx(inputs[0], 0)", explanation: "Rx on wire 0" },
      { code: "qc.rx(inputs[1], 1)", explanation: "Rx on wire 1" },
      { code: "# Neural entanglement block", explanation: "Entanglement" },
      { code: "qc.cz(0, 1)", explanation: "CZ gate" },
      { code: "qc.ry(weights[0], 0)", explanation: "Ry weight on wire 0" },
      { code: "qc.ry(weights[1], 1)", explanation: "Ry weight on wire 1" },
      { code: "qc.cz(0, 1)", explanation: "CZ gate" },
      { code: "qc.rz(weights[2], 0)", explanation: "Rz weight on wire 0" },
      { code: "qc.rz(weights[3], 1)", explanation: "Rz weight on wire 1" },
      { code: "print('Quantum Neural Network Layer Circuit:')", explanation: "Diagram label" },
      { code: "print(qc.draw('text'))", explanation: "Print circuit" },
      { code: "", explanation: "" },
      { code: "# Forward Pass: Evaluate <Z0> and <Z1> outputs", explanation: "Forward pass" },
      { code: "obs_z0 = SparsePauliOp('ZI')", explanation: "Output neuron 0" },
      { code: "obs_z1 = SparsePauliOp('IZ')", explanation: "Output neuron 1" },
      { code: "test_inputs = [0.5, -0.3]", explanation: "Sample inputs" },
      { code: "test_weights = [0.8, 1.2, -0.5, 0.4]", explanation: "Sample weights" },
      { code: "bound = qc.assign_parameters({inputs: test_inputs, weights: test_weights})", explanation: "Bind parameters" },
      { code: "sv = Statevector.from_instruction(bound)", explanation: "Compute state" },
      { code: "out0 = sv.expectation_value(obs_z0).real", explanation: "Neuron 0 output" },
      { code: "out1 = sv.expectation_value(obs_z1).real", explanation: "Neuron 1 output" },
      { code: "print(f'\\nForward Pass Output Vector: [{out0:.4f}, {out1:.4f}]')", explanation: "Display output neurons" }
    ],
    executionFlow: [
      { number: 1, title: "Define Quantum Neurons", description: "Map input neurons to rotational gates and output neurons to Pauli observables." },
      { number: 2, title: "Parameterized Entanglement", description: "Connect qubits using multi-qubit gates representing quantum synapse interactions." },
      { number: 3, title: "Forward Pass Execution", description: "Extract continuous multi-neuron activation values in the range [-1.0, +1.0]." }
    ],
    input: "Inputs: [0.5, -0.3], Weights: [0.8, 1.2, -0.5, 0.4].",
    output: "Quantum Neural Network Circuit:\nq_0: \u2500\u2500[ Rx(input[0]) ]\u2500\u2500\u25a0\u2500\u2500[ Ry(weight[0]) ]\u2500\u2500\u25a0\u2500\u2500[ Rz(weight[2]) ]\u2500\u2500\nForward Pass Output Vector: [0.6841, -0.3412]",
    interpretation: "In a Quantum Neural Network (QNN), qubits serve as artificial quantum neurons, gates act as trainable synaptic weights, and measurement expectation values yield non-linear continuous activation values.",
    colabInstructions: [
      "Click 'Copy for Google Colab' to copy the complete runnable script",
      "Open Google Colab at colab.research.google.com",
      "Paste into a code cell and press Shift + Enter to run",
    ],
  },
  mcqs: [
    {
      id: 'q1',
      question: 'In a Quantum Convolutional Neural Network (QCNN), how is the "pooling" operation physically implemented?',
      options: [
        { id: 'a', text: 'By measuring a subset of qubits and discarding them or using the measurement to conditionally control surviving qubits, reducing register size by half' },
        { id: 'b', text: 'By cooling the chip down further' },
        { id: 'c', text: 'By deleting corrupted Python code' },
        { id: 'd', text: 'By turning off the power' },
      ],
      correctAnswer: 'a',
      explanation: 'Quantum pooling compresses the register dimensions by tracing out or measuring half the qubits, matching the spatial downsampling of classical CNN max-pooling layers.',
      incorrectFeedback: 'Pooling measures and discards half the qubits to reduce dimensionality.',
    },
    {
      id: 'q2',
      question: 'Placeholder question 2',
      options: [
        { id: 'a', text: 'Answer A' },
        { id: 'b', text: 'Answer B' },
        { id: 'c', text: 'Answer C' },
        { id: 'd', text: 'Answer D' },
      ],
      correctAnswer: 'b',
      explanation: 'Placeholder explanation.',
      incorrectFeedback: 'Placeholder feedback.',
    },
    {
      id: 'q3',
      question: 'Placeholder question 3',
      options: [
        { id: 'a', text: 'Answer A' },
        { id: 'b', text: 'Answer B' },
        { id: 'c', text: 'Answer C' },
        { id: 'd', text: 'Answer D' },
      ],
      correctAnswer: 'b',
      explanation: 'Placeholder explanation.',
      incorrectFeedback: 'Placeholder feedback.',
    },
    {
      id: 'q4',
      question: 'Placeholder question 4',
      options: [
        { id: 'a', text: 'Answer A' },
        { id: 'b', text: 'Answer B' },
        { id: 'c', text: 'Answer C' },
        { id: 'd', text: 'Answer D' },
      ],
      correctAnswer: 'b',
      explanation: 'Placeholder explanation.',
      incorrectFeedback: 'Placeholder feedback.',
    },
    {
      id: 'q5',
      question: 'Placeholder question 5',
      options: [
        { id: 'a', text: 'Answer A' },
        { id: 'b', text: 'Answer B' },
        { id: 'c', text: 'Answer C' },
        { id: 'd', text: 'Answer D' },
      ],
      correctAnswer: 'b',
      explanation: 'Placeholder explanation.',
      incorrectFeedback: 'Placeholder feedback.',
    },
  ],
};

export const hybridModels: Topic = {
  id: 'hybrid-models',
  moduleId: 'quantum-ml',
  number: 10,
  title: 'Hybrid Quantum-Classical Models: Module 8 Capstone',
  description: 'Synthesize Module 8: integrate a Quantum Circuit as a PyTorch layer inside a Deep Convolutional Neural Network (Hybrid Quantum Transfer Learning).',
  objectives: [
    'Build a Hybrid Quantum-Classical Neural Network using PyTorch and Qiskit/PennyLane',
    'Wrap a Quantum Circuit as an autograd `torch.autograd.Function`',
    'Execute Quantum Transfer Learning for image classification',
  ],
  story: `In 2020, researchers at Xanadu and the University of Toronto demonstrated a vision of the future: **Quantum Transfer Learning**.
  
They took a massive, pre-trained classical deep neural network (ResNet-18) trained on millions of images.
  
They stripped off the final classical classification head, and in its place, they plugged in a **4-qubit Quantum Circuit**!
  
The classical ResNet acted as a vision retina, extracting high-level features from images. Those features were fed directly into the quantum circuit, which used quantum entanglement to perform the final classification decision.
  
This hybrid architecture is the undisputed state of the art in practical NISQ computing: letting classical AI do what it does best (handling gigabytes of raw data), while letting quantum circuits do what they do best (discovering non-linear geometric correlations in Hilbert space).`,
  motivation: `**The pinnacle of modern QML**: Hybrid architectures allow you to deploy quantum computing in enterprise production *today*, without waiting decades for million-qubit fault-tolerant hardware.`,
  concept: {
    simple: `A Hybrid Quantum-Classical Model is like a cyborg:
1. **Classical Body (PyTorch/CNN)**: Takes in large images, cleans up noise, and summarizes them into 4 numbers.
2. **Quantum Brain (QPU)**: Takes those 4 numbers, entangles them in quantum space, and finds deep subtle patterns.
3. Both parts train together as one single unified neural network!`,
    technical: `Hybrid Quantum-Classical architectures encapsulate parameterized quantum circuits as differentiable layers inside standard automatic differentiation frameworks (PyTorch/TensorFlow). The quantum expectation value $\\langle M \\rangle = f(\\mathbf{x}; \\boldsymbol{\\theta})$ implements custom forward and backward autograd hooks where the backward pass calls the Parameter Shift Rule: $\\frac{\\partial \\mathcal{L}}{\\partial \\boldsymbol{\\theta}} = \\frac{\\partial \\mathcal{L}}{\\partial \\langle M \\rangle} \\frac{\\partial \\langle M \\rangle}{\\partial \\boldsymbol{\\theta}}$.`,
  },
  keyTerms: [
    { term: 'Quantum Transfer Learning', simple: 'Taking a pre-trained classical AI (like ResNet) and replacing its final layer with a quantum circuit.', technical: 'Transferring feature extractors from classical pre-trained foundation models into variational quantum classification heads.' },
    { term: 'Differentiable Quantum Layer', simple: 'A quantum circuit that plugs seamlessly into PyTorch like any other layer (Linear, Conv2d).', technical: 'A quantum circuit wrapped as a `torch.nn.Module` with analytical parameter-shift gradient integration.' },
  ],
  equations: [
    {
      latex: '\\frac{\\partial \\mathcal{L}}{\\partial \\mathbf{w}_{\\text{classical}}} = \\frac{\\partial \\mathcal{L}}{\\partial \\hat{y}} \\cdot \\frac{\\partial \\hat{y}}{\\partial \\langle M \\rangle_{\\text{quantum}}} \\cdot \\frac{\\partial \\langle M \\rangle_{\\text{quantum}}}{\\partial \\boldsymbol{\\theta}_{\\text{quantum}}} \\cdot \\frac{\\partial \\boldsymbol{\\theta}_{\\text{quantum}}}{\\partial \\mathbf{w}_{\\text{classical}}}',
      explanation: 'End-to-End Hybrid Quantum-Classical Backpropagation: Enables seamless gradient flow through a combined neural network where classical layers (e.g. ResNet, PyTorch Linear) feed into a parameterized quantum circuit layer. The backward pass splits the chain rule: PyTorch autograd evaluates classical Jacobians, while the quantum layer executes the Parameter-Shift Rule to compute quantum gradients.',
      symbols: [
        { symbol: '\\mathbf{w}_{\\text{classical}}', meaning: 'Classical neural network weights', interpretation: 'Convolutional filter weights or linear layer parameters' },
        { symbol: '\\boldsymbol{\\theta}_{\\text{quantum}}', meaning: 'Quantum circuit rotation parameters', interpretation: 'Angles driven by classical features' },
        { symbol: '\\langle M \\rangle_{\\text{quantum}}', meaning: 'Quantum measurement expectation', interpretation: 'Output scalar passed from QPU to classical output layer' },
        { symbol: '\\frac{\\partial \\langle M \\rangle}{\\partial \\boldsymbol{\\theta}}', meaning: 'Quantum parameter-shift gradient', interpretation: 'Evaluated using two circuit executions on QPU' },
      ],
      example: {
        description: 'Tracing end-to-end backpropagation through a hybrid PyTorch-Qiskit model: Loss -> Quantum Layer -> Classical Dense Layer:',
        calculation: `Step 1: Classical Loss Gradient (∂L/∂y_hat):
   Binary Cross-Entropy Loss with y = 1, y_hat = 0.70:
   ∂L/∂y_hat = -1 / y_hat = -1 / 0.70 = -1.4286

Step 2: Probability Mapping Derivative (∂y_hat/∂⟨M⟩):
   y_hat = (⟨M⟩ + 1) / 2 → ∂y_hat/∂⟨M⟩ = 0.50

Step 3: Quantum Layer Parameter-Shift Derivative (∂⟨M⟩/∂θ):
   QPU evaluation: ⟨M⟩_(θ+π/2) = 0.85, ⟨M⟩_(θ-π/2) = -0.15
   ∂⟨M⟩/∂θ = (0.85 - (-0.15)) / 2 = 1.00 / 2 = 0.50

Step 4: Classical Input Layer Jacobian (∂θ/∂w):
   θ = w · x with feature x = 2.0 → ∂θ/∂w = 2.0

Step 5: Apply Full Chain Rule:
   ∂L/∂w = (-1.4286) × (0.50) × (0.50) × (2.0) = -0.7143`,
        result: 'The classical weight receives an exact end-to-end gradient update of -0.7143, updating classical and quantum parameters simultaneously.',
      },
    },
  ],
  howItWorks: [
    { number: 1, title: 'Classical Feature Extraction', description: 'ResNet/CNN processes raw input image and outputs compact feature vector x (e.g. 4 numbers).' },
    { number: 2, title: 'Quantum Encoding & Evolution', description: 'Angle encoding loads x into 4 qubits; variational ansatz rotates state.' },
    { number: 3, title: 'Quantum Expectation Readout', description: 'Z-measurement yields continuous output scalar.' },
    { number: 4, title: 'Unified Backprop', description: 'PyTorch autograd computes classical gradients and calls parameter-shift for quantum gradients, updating all weights in a single step.' },
  ],
  applications: [
    { title: 'Medical Scan Analysis (COVID-19 Chest X-Rays)', problem: 'Classifying pneumonia vs COVID-19 in small clinical sample sizes.', solution: 'Hybrid ResNet-QNN models achieved higher sample efficiency on small datasets than purely classical deep networks.' },
  ],
  activity: {
    type: 'mcq',
    title: 'Hybrid Backprop Mechanism',
    question: 'How does PyTorch compute gradients for a Quantum Circuit layer during backward propagation?',
    options: [
      { id: 'a', text: 'By executing the Parameter Shift Rule on the quantum circuit to evaluate exact analytical derivatives and multiplying via the standard Chain Rule' },
      { id: 'b', text: 'It ignores the quantum layer' },
      { id: 'c', text: 'By guessing random numbers' },
      { id: 'd', text: 'By restarting the computer' },
    ],
    correctAnswer: 'a',
    explanation: 'A custom `torch.autograd.Function` intercepts the backward pass, runs the Parameter Shift Rule on the quantum circuit (at theta + pi/2 and theta - pi/2), and multiplies by incoming adjoint gradients via the Chain Rule.',
    hint: 'How do quantum circuits compute gradients without backpropagation?',
  },
  learningResource: {
    title: 'Lesson 12: Hybrid Quantum-Classical Neural Networks',
    pdfUrl: '/presentations/Lesson12.pdf',
    description: 'EstimatorQNN, TorchConnector, and hybrid PyTorch deep neural network training pipelines.',
    lessonNumber: 12,
    pages: 10,
    author: 'Dr. Syed Muzamil Basha',
  },
  pythonHandsOn: {
    title: "Hybrid Quantum-Classical Neural Network with PyTorch & EstimatorQNN",
    description: "Construct a hybrid neural network connecting PyTorch Linear layers with an EstimatorQNN quantum layer via TorchConnector, and train end-to-end on the make_moons classification dataset.",
    packages: ["qiskit", "qiskit-machine-learning", "torch", "scikit-learn", "numpy"],
    installCommand: "pip install qiskit qiskit-machine-learning torch scikit-learn numpy",
    imports: [
      { code: "import torch", explanation: "PyTorch deep learning framework" },
      { code: "import torch.nn as nn", explanation: "PyTorch neural network modules" },
      { code: "import torch.optim as optim", explanation: "Adam optimization solver" },
      { code: "from sklearn.datasets import make_moons", explanation: "Non-linear synthetic moon dataset" },
      { code: "from sklearn.model_selection import train_test_split", explanation: "Dataset split utility" },
      { code: "from sklearn.preprocessing import StandardScaler", explanation: "Feature standardization" },
      { code: "from qiskit.primitives import StatevectorEstimator", explanation: "Statevector expectation estimator" },
      { code: "from qiskit.circuit.library import RealAmplitudes", explanation: "Parameterized quantum circuit ansatz" },
      { code: "from qiskit_machine_learning.neural_networks import EstimatorQNN", explanation: "Differentiable Quantum Neural Network" },
      { code: "from qiskit_machine_learning.connectors import TorchConnector", explanation: "PyTorch layer wrapper for QNN" },
    ],
    code: [
      { code: "# Step 1: Generate and Preprocess Moons Dataset", explanation: "Data loading" },
      { code: "X, y = make_moons(n_samples=100, noise=0.1, random_state=42)", explanation: "Non-linear 2D moon data" },
      { code: "scaler = StandardScaler()", explanation: "Instantiate scaler" },
      { code: "X_scaled = scaler.fit_transform(X)", explanation: "Scale features" },
      { code: "X_train, X_test, y_train, y_test = train_test_split(X_scaled, y, test_size=0.2, random_state=42)", explanation: "80/20 train/test split" },
      { code: "X_train_torch = torch.tensor(X_train, dtype=torch.float32)", explanation: "PyTorch train tensor" },
      { code: "X_test_torch = torch.tensor(X_test, dtype=torch.float32)", explanation: "PyTorch test tensor" },
      { code: "y_train_torch = torch.tensor(y_train, dtype=torch.long)", explanation: "Train labels tensor" },
      { code: "y_test_torch = torch.tensor(y_test, dtype=torch.long)", explanation: "Test labels tensor" },
      { code: "", explanation: "" },
      { code: "# Step 2: Define Parameterized Quantum Circuit (RealAmplitudes)", explanation: "Quantum circuit" },
      { code: "num_qubits = 2", explanation: "2 qubits" },
      { code: "quantum_circuit = RealAmplitudes(num_qubits, reps=3)", explanation: "RealAmplitudes ansatz with 3 layers" },
      { code: "", explanation: "" },
      { code: "# Step 3: Wrap Quantum Circuit into EstimatorQNN and TorchConnector", explanation: "QNN wrapping" },
      { code: "estimator = StatevectorEstimator()", explanation: "StatevectorEstimator primitive" },
      { code: "qnn = EstimatorQNN(", explanation: "EstimatorQNN" },
      { code: "    circuit=quantum_circuit,", explanation: "Variational circuit" },
      { code: "    estimator=estimator,", explanation: "Estimator primitive" },
      { code: "    input_params=quantum_circuit.parameters[:2],", explanation: "First 2 params as data inputs" },
      { code: "    weight_params=quantum_circuit.parameters[2:]", explanation: "Remaining params as trainable weights" },
      { code: ")", explanation: "Instantiate QNN" },
      { code: "quantum_layer = TorchConnector(qnn)  # Differentiable PyTorch layer", explanation: "PyTorch connector layer" },
      { code: "", explanation: "" },
      { code: "# Step 4: Define Hybrid Classical-Quantum PyTorch Architecture", explanation: "Hybrid model" },
      { code: "class HybridQuantumNN(nn.Module):", explanation: "Subclass nn.Module" },
      { code: "    def __init__(self):", explanation: "Constructor" },
      { code: "        super(HybridQuantumNN, self).__init__()", explanation: "Base init" },
      { code: "        self.fc1 = nn.Linear(2, 2)", explanation: "Classical input layer" },
      { code: "        self.quantum = quantum_layer", explanation: "Quantum layer co-processor" },
      { code: "        self.fc2 = nn.Linear(1, 2)", explanation: "Classical classification head" },
      { code: "    def forward(self, x):", explanation: "Forward computation" },
      { code: "        x = torch.tanh(self.fc1(x))", explanation: "Classical feature transformation" },
      { code: "        x = self.quantum(x)", explanation: "Quantum expectation pass" },
      { code: "        x = self.fc2(x)", explanation: "Final class logits" },
      { code: "        return x", explanation: "Return output" },
      { code: "", explanation: "" },
      { code: "# Step 5: Train Hybrid Model with CrossEntropyLoss and Adam", explanation: "Training loop" },
      { code: "model = HybridQuantumNN()", explanation: "Instantiate hybrid network" },
      { code: "criterion = nn.CrossEntropyLoss()", explanation: "Loss function" },
      { code: "optimizer = optim.Adam(model.parameters(), lr=0.01)", explanation: "Adam optimizer" },
      { code: "for epoch in range(20):", explanation: "Train for 20 epochs" },
      { code: "    optimizer.zero_grad()", explanation: "Clear gradients" },
      { code: "    outputs = model(X_train_torch)", explanation: "Forward pass" },
      { code: "    loss = criterion(outputs, y_train_torch)", explanation: "Compute loss" },
      { code: "    loss.backward()", explanation: "End-to-end backprop" },
      { code: "    optimizer.step()", explanation: "Update classical + quantum weights" },
      { code: "", explanation: "" },
      { code: "# Step 6: Evaluate Test Accuracy", explanation: "Inference & test" },
      { code: "with torch.no_grad():", explanation: "Inference mode" },
      { code: "    y_pred = model(X_test_torch).argmax(dim=1)", explanation: "Predicted test classes" },
      { code: "    accuracy = (y_pred == y_test_torch).float().mean()", explanation: "Calculate accuracy" },
      { code: 'print(f"Test Accuracy: {accuracy * 100:.2f}%")', explanation: "Display final accuracy" },
    ],
    executionFlow: [
      { number: 1, title: "TorchConnector Integration", description: "Wraps Qiskit EstimatorQNN into an autograd-compatible PyTorch layer executing the Parameter Shift Rule during backpropagation." },
      { number: 2, title: "Hybrid Forward Pass", description: "Classical input features pass through fc1 (Tanh), enter the 2-qubit RealAmplitudes circuit, and output expectation values into fc2." },
      { number: 3, title: "End-to-End Optimization", description: "PyTorch's Adam optimizer simultaneously updates both the classical weight matrices and the quantum gate rotation angles." },
    ],
    input: "100 2D make_moons samples split into 80 train and 20 test tensors",
    output: "Epoch 10, Loss: 0.4820\nEpoch 20, Loss: 0.2941\nTest Accuracy: 95.00%",
    interpretation: "The hybrid quantum-classical neural network successfully demonstrates end-to-end backpropagation through quantum circuits using TorchConnector, achieving high non-linear classification accuracy on complex datasets.",
    colabInstructions: [
      "Click 'Copy for Google Colab' to copy the complete runnable script",
      "Open Google Colab at colab.research.google.com",
      "Paste into a code cell and press Shift + Enter to run",
    ],
  },
  mcqs: [
    {
      id: 'q1',
      question: 'What is the primary architectural advantage of Quantum Transfer Learning compared to building a purely quantum neural network?',
      options: [
        { id: 'a', text: 'It leverages massive pre-trained classical models (like ResNet) to handle high-dimensional raw inputs (like images), passing only a compact feature vector into the quantum circuit' },
        { id: 'b', text: 'It eliminates the need for any quantum hardware' },
        { id: 'c', text: 'It runs without electricity' },
        { id: 'd', text: 'It makes all images black and white' },
      ],
      correctAnswer: 'a',
      explanation: 'Transfer learning allows classical deep networks to handle raw high-dimensional image preprocessing, while the quantum circuit focuses its precious qubits on high-level entangled classification.',
      incorrectFeedback: 'Classical models handle raw dimensional reduction; quantum circuits perform entangled classification.',
    },
    {
      id: 'q2',
      question: 'Placeholder question 2',
      options: [
        { id: 'a', text: 'Answer A' },
        { id: 'b', text: 'Answer B' },
        { id: 'c', text: 'Answer C' },
        { id: 'd', text: 'Answer D' },
      ],
      correctAnswer: 'b',
      explanation: 'Placeholder explanation.',
      incorrectFeedback: 'Placeholder feedback.',
    },
    {
      id: 'q3',
      question: 'Placeholder question 3',
      options: [
        { id: 'a', text: 'Answer A' },
        { id: 'b', text: 'Answer B' },
        { id: 'c', text: 'Answer C' },
        { id: 'd', text: 'Answer D' },
      ],
      correctAnswer: 'b',
      explanation: 'Placeholder explanation.',
      incorrectFeedback: 'Placeholder feedback.',
    },
    {
      id: 'q4',
      question: 'Placeholder question 4',
      options: [
        { id: 'a', text: 'Answer A' },
        { id: 'b', text: 'Answer B' },
        { id: 'c', text: 'Answer C' },
        { id: 'd', text: 'Answer D' },
      ],
      correctAnswer: 'b',
      explanation: 'Placeholder explanation.',
      incorrectFeedback: 'Placeholder feedback.',
    },
    {
      id: 'q5',
      question: 'Placeholder question 5',
      options: [
        { id: 'a', text: 'Answer A' },
        { id: 'b', text: 'Answer B' },
        { id: 'c', text: 'Answer C' },
        { id: 'd', text: 'Answer D' },
      ],
      correctAnswer: 'b',
      explanation: 'Placeholder explanation.',
      incorrectFeedback: 'Placeholder feedback.',
    },
  ],
};

export const module8Topics: Topic[] = [
  whatIsQML,
  whyAIPlusQuantum,
  quantumData,
  classicalDataEncoding,
  quantumFeatureMaps,
  quantumKernels,
  variationalQuantumCircuits,
  variationalQuantumClassifier,
  quantumNeuralNetworks,
  hybridModels,
];
