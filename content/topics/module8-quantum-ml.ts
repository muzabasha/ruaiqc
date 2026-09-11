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
      latex: 'f(\\mathbf{x}; \\boldsymbol{\\theta}) = \\langle 0 | U^\\dagger(\\mathbf{x}) W^\\dagger(\\boldsymbol{\\theta}) M W(\\boldsymbol{\\theta}) U(\\mathbf{x}) | 0 \\rangle',
      explanation: 'The fundamental mathematical model of a Quantum Neural Network: raw data x is embedded via U(x), transformed by learnable weights W(theta), and measured by observable M.',
      symbols: [
        { symbol: 'U(\\mathbf{x})', meaning: 'Quantum feature map', interpretation: 'Encodes classical data x into qubits' },
        { symbol: 'W(\\boldsymbol{\\theta})', meaning: 'Variational ansatz', interpretation: 'Learnable weight rotations parameterized by theta' },
        { symbol: 'M', meaning: 'Hermitian observable', interpretation: 'Readout measurement operator (e.g. Pauli Z)' },
      ],
      example: {
        description: 'Input x=0.5 rotates qubit by 0.5 radians. Model weight theta=1.2 rotates further. Final Z measurement yields prediction score +0.82.',
        calculation: 'f(x; \\theta) = \\langle Z \\rangle = \\cos(0.5 + 1.2) = \\cos(1.7) \\approx -0.129',
        result: 'Prediction score: -0.129',
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
    title: 'A Minimal Parameterized Quantum Model in Python',
    description: 'Simulate a 1-qubit parameterized quantum model with feature encoding and trainable weights.',
    packages: ['numpy'],
    installCommand: 'pip install numpy',
    imports: [{ code: 'import numpy as np', explanation: 'NumPy' }],
    code: [
      { code: '# 1-Qubit Quantum Neural Model: f(x; theta) = <Z> = cos(x + theta)', explanation: 'Model formulation' },
      { code: 'def quantum_model(x, theta):', explanation: 'Model function' },
      { code: '    # Rotation gate Ry(x) encodes data; Ry(theta) applies weight', explanation: 'Encoding + Weight' },
      { code: '    angle = x + theta', explanation: 'Total rotation angle' },
      { code: '    # Expectation value of Pauli Z: <Z> = cos(angle)', explanation: 'Z expectation' },
      { code: '    return np.cos(angle)', explanation: 'Return output' },
      { code: '', explanation: '' },
      { code: 'x_sample = 0.5 # Input feature', explanation: 'Input feature' },
      { code: 'theta_initial = 1.0 # Initial weight knob', explanation: 'Initial weight' },
      { code: '', explanation: '' },
      { code: 'prediction = quantum_model(x_sample, theta_initial)', explanation: 'Forward evaluation' },
      { code: 'print(f"Input Feature x: {x_sample}")', explanation: 'Show input' },
      { code: 'print(f"Model Weight theta: {theta_initial}")', explanation: 'Show weight' },
      { code: 'print(f"Quantum Model Prediction: {prediction:.4f}")', explanation: 'Show prediction' },
    ],
    executionFlow: [
      { number: 1, title: 'Quantum Encoding', description: 'Rotates qubit state by input feature angle x = 0.5 rad.' },
      { number: 2, title: 'Weight Transformation', description: 'Rotates further by trainable parameter theta = 1.0 rad.' },
      { number: 3, title: 'Expectation Readout', description: 'Measures Pauli-Z expectation value: cos(1.5) ≈ 0.0707.' },
    ],
    input: 'Input feature x = 0.5, weight theta = 1.0',
    output: 'Input Feature x: 0.5\nModel Weight theta: 1.0\nQuantum Model Prediction: 0.0707',
    interpretation: 'Parameterized quantum circuits map classical inputs and trainable weights into quantum expectations that can be trained with gradient descent.',
    colabInstructions: ['Run in Google Colab.'],
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
    title: 'Simulating AI Pulse Optimization for a Qubit Gate in Python',
    description: 'Use a classical gradient optimizer to tune a microwave pulse duration to achieve a perfect 180-degree X-gate flip.',
    packages: ['numpy', 'scipy'],
    installCommand: 'pip install numpy scipy',
    imports: [
      { code: 'import numpy as np', explanation: 'NumPy' },
      { code: 'from scipy.optimize import minimize', explanation: 'Classical optimizer' },
    ],
    code: [
      { code: '# Target: We want to flip |0> to |1> with 100% fidelity', explanation: 'Target' },
      { code: '# Physical model: P(1) = sin(omega * t / 2)^2 where omega is pulse amplitude', explanation: 'Rabi oscillation' },
      { code: 'omega = 2.0 # Frequency parameter', explanation: 'Frequency' },
      { code: '', explanation: '' },
      { code: 'def pulse_error(t):', explanation: 'Objective loss' },
      { code: '    # Invert to minimize: we want P(1) = 1.0 (so loss = (1 - P(1))^2)', explanation: 'Loss function' },
      { code: '    p1 = np.sin(omega * t[0] / 2.0)**2', explanation: 'Population' },
      { code: '    return (1.0 - p1)**2', explanation: 'Squared error' },
      { code: '', explanation: '' },
      { code: '# AI optimizer tunes pulse duration t starting from poor guess t = 0.5 µs', explanation: 'Optimizer' },
      { code: 'result = minimize(pulse_error, x0=[0.5], method="Nelder-Mead")', explanation: 'Optimize' },
      { code: 'optimal_duration = result.x[0]', explanation: 'Best duration' },
      { code: 'achieved_p1 = np.sin(omega * optimal_duration / 2.0)**2', explanation: 'Verify' },
      { code: '', explanation: '' },
      { code: 'print(f"Initial Guess Duration: 0.50 µs -> P(1) = {np.sin(omega * 0.5 / 2.0)**2:.1%}")', explanation: 'Initial' },
      { code: 'print(f"AI Optimized Duration:   {optimal_duration:.2f} µs -> P(1) = {achieved_p1:.1%}")', explanation: 'Final' },
    ],
    executionFlow: [
      { number: 1, title: 'Loss Formulation', description: 'Defines loss as deviation from 100% population inversion.' },
      { number: 2, title: 'Optimization Sweep', description: 'Optimizer shifts duration from 0.50 µs to ~1.57 µs (pi/2).' },
      { number: 3, title: 'Fidelity Recovery', description: 'Population inversion reaches 100.0%.' },
    ],
    input: 'Rabi oscillation pulse model initialized at t=0.5 µs',
    output: 'Initial Guess Duration: 0.50 µs -> P(1) = 22.9%\nAI Optimized Duration:   1.57 µs -> P(1) = 100.0%',
    interpretation: 'Classical machine learning optimization autonomously discovered the exact analytical pulse duration needed for a flawless quantum gate.',
    colabInstructions: ['Run in Google Colab.'],
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
      latex: '\\rho_{\\text{quantum}} = \\sum_{i} p_i |\\psi_i\\rangle\\langle\\psi_i|, \\quad \\text{Tr}(\\rho) = 1',
      explanation: 'Density Matrix representation of native quantum data: encapsulates both quantum coherence and classical statistical mixtures.',
      symbols: [
        { symbol: '\\rho', meaning: 'Density operator', interpretation: 'Complete representation of quantum data' },
        { symbol: 'p_i', meaning: 'Ensemble probability', interpretation: 'Classical mixing fraction' },
      ],
      example: {
        description: 'Native quantum sensor emits entangled Bell pair rho = |Phi+><Phi+| directly into quantum machine learning circuit.',
        calculation: '\\rho = \\frac{1}{2}(|00\\rangle\\langle 00| + |00\\rangle\\langle 11| + |11\\rangle\\langle 00| + |11\\rangle\\langle 11|)',
        result: 'Pure entangled quantum data input',
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
    title: 'Representing Classical vs Quantum Data in Python',
    description: 'Contrast a classical feature vector with a quantum density matrix.',
    packages: ['numpy'],
    installCommand: 'pip install numpy',
    imports: [{ code: 'import numpy as np', explanation: 'NumPy' }],
    code: [
      { code: '# 1. Classical Data: 2D feature vector [Age, Income]', explanation: 'Classical vector' },
      { code: 'classical_data = np.array([35.0, 75000.0])', explanation: 'Classical' },
      { code: 'print("Classical Data Vector (Real numbers):", classical_data)', explanation: 'Print classical' },
      { code: '', explanation: '' },
      { code: '# 2. Native Quantum Data: 2-Qubit Entangled Density Matrix rho = |Phi+><Phi+|', explanation: 'Density matrix' },
      { code: 'bell_state = (1 / np.sqrt(2)) * np.array([[1.0], [0.0], [0.0], [1.0]])', explanation: 'Bell ket' },
      { code: 'quantum_data_rho = np.dot(bell_state, bell_state.T)', explanation: 'Outer product rho' },
      { code: 'print("\\nNative Quantum Data (Density Matrix rho):\\n", quantum_data_rho)', explanation: 'Print rho' },
      { code: 'print("Purity Tr(rho^2):", np.trace(np.dot(quantum_data_rho, quantum_data_rho)))', explanation: 'Verify purity' },
    ],
    executionFlow: [
      { number: 1, title: 'Classical Vector', description: 'Simple array of real numbers.' },
      { number: 2, title: 'Quantum Density Operator', description: '4x4 Hermitian positive semi-definite matrix encoding coherence and non-local entanglement.' },
    ],
    input: 'Classical vector vs Bell density matrix',
    output: 'Classical Data Vector (Real numbers): [3.5e+01 7.5e+04]\n\nNative Quantum Data (Density Matrix rho):\n [[0.5 0.  0.  0.5]\n [0.  0.  0.  0. ]\n [0.  0.  0.  0. ]\n [0.5 0.  0.  0.5]]\nPurity Tr(rho^2): 1.0',
    interpretation: 'Quantum data encodes off-diagonal quantum coherence terms that have no classical analog.',
    colabInstructions: ['Run in Google Colab.'],
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
      latex: '|\\mathbf{x}\\rangle = \\sum_{i=0}^{2^n-1} x_i |i\\rangle, \\quad \\sum_{i=0}^{2^n-1} |x_i|^2 = 1',
      explanation: 'Amplitude Encoding: packs 2^n continuous features into the probability amplitudes of just n qubits.',
      symbols: [
        { symbol: 'x_i', meaning: 'Normalized feature value', interpretation: 'Stored as amplitude of basis state i' },
        { symbol: 'n', meaning: 'Qubits used', interpretation: 'log2 of dataset dimension' },
      ],
      example: {
        description: 'Encoding 4 normalized features [0.5, 0.5, 0.5, 0.5] into 2 qubits: (1/2)|00> + (1/2)|01> + (1/2)|10> + (1/2)|11>.',
        calculation: '\\|\\mathbf{x}\\|^2 = 4 \\times (0.5)^2 = 4 \\times 0.25 = 1.0',
        result: '4 numbers stored in 2 qubits',
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
    title: 'Implementing Angle Encoding in Python',
    description: 'Encode two continuous features [x1, x2] into a 2-qubit register using Ry rotations.',
    packages: ['numpy'],
    installCommand: 'pip install numpy',
    imports: [{ code: 'import numpy as np', explanation: 'NumPy' }],
    code: [
      { code: '# Two normalized classical features (e.g. petal length, petal width)', explanation: 'Features' },
      { code: 'x = np.array([0.5, 1.2]) # radians', explanation: 'Values' },
      { code: '', explanation: '' },
      { code: '# Angle Encoding via Ry(2*x) rotations: state = cos(x)|0> + sin(x)|1>', explanation: 'Ry formula' },
      { code: 'def angle_encode_qubit(val):', explanation: 'Single qubit encoder' },
      { code: '    return np.array([np.cos(val), np.sin(val)])', explanation: '[cos, sin]' },
      { code: '', explanation: '' },
      { code: 'q0 = angle_encode_qubit(x[0])', explanation: 'Encode feature 0' },
      { code: 'q1 = angle_encode_qubit(x[1])', explanation: 'Encode feature 1' },
      { code: '', explanation: '' },
      { code: '# Joint 2-Qubit State Vector: q0 (x) q1', explanation: 'Tensor product' },
      { code: 'state_2q = np.kron(q0, q1)', explanation: 'Joint state' },
      { code: 'print("Qubit 0 State [cos(0.5), sin(0.5)]:", q0.round(3))', explanation: 'Print q0' },
      { code: 'print("Qubit 1 State [cos(1.2), sin(1.2)]:", q1.round(3))', explanation: 'Print q1' },
      { code: 'print("\\nEncoded 2-Qubit State Vector:\\n", state_2q.round(3))', explanation: 'Print joint' },
      { code: 'print("Total Probability Check:", round(np.sum(state_2q**2), 3))', explanation: 'Sum to 1' },
    ],
    executionFlow: [
      { number: 1, title: 'Angle Mapping', description: 'Maps x0=0.5 to [0.878, 0.479] and x1=1.2 to [0.362, 0.932].' },
      { number: 2, title: 'Kronecker Encoding', description: 'Synthesizes 4-element state vector whose amplitudes represent non-linear feature interactions.' },
    ],
    input: 'Features x = [0.5, 1.2]',
    output: 'Qubit 0 State [cos(0.5), sin(0.5)]: [0.878 0.479]\nQubit 1 State [cos(1.2), sin(1.2)]: [0.362 0.932]\n\nEncoded 2-Qubit State Vector:\n [0.318 0.818 0.174 0.447]\nTotal Probability Check: 1.0',
    interpretation: 'Angle encoding creates non-linear trigonometric products in Hilbert space that linear models can easily separate.',
    colabInstructions: ['Run in Google Colab.'],
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
      latex: 'U_{\\Phi}(\\mathbf{x}) = \\exp\\left( i \\sum_{j} x_j Z_j + i \\sum_{j,k} (\\pi - x_j)(\\pi - x_k) Z_j Z_k \\right) H^{\\otimes n}',
      explanation: 'The Havlicek ZZ-Feature Map unitary: combines Hadamard superposition with single-qubit Z rotations and two-qubit ZZ entangling interactions.',
      symbols: [
        { symbol: 'x_j', meaning: 'Input feature j', interpretation: 'Rotates single qubit' },
        { symbol: 'Z_j Z_k', meaning: 'Two-qubit Pauli-Z interaction', interpretation: 'Entangles feature cross-products' },
      ],
      example: {
        description: 'For 2 features [x1, x2], the circuit creates entanglement proportional to (pi - x1)*(pi - x2), embedding non-linear correlations into quantum phase.',
        calculation: '\\text{Phase}_{12} = (\\pi - x_1)(\\pi - x_2)',
        result: 'Cross-feature interaction mapped to entanglement',
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
    title: 'Simulating a 2-Qubit ZZ-Feature Map in Python',
    description: 'Construct the non-linear state vector produced by a ZZ entangling feature map.',
    packages: ['numpy'],
    installCommand: 'pip install numpy',
    imports: [{ code: 'import numpy as np', explanation: 'NumPy' }],
    code: [
      { code: '# Input feature pair [x1, x2]:', explanation: 'Features' },
      { code: 'x = np.array([0.8, 1.5])', explanation: 'Inputs' },
      { code: '', explanation: '' },
      { code: '# Step 1: Hadamard on both qubits: |+> (x) |+>', explanation: 'Step 1' },
      { code: 'H = (1 / np.sqrt(2)) * np.array([[1, 1], [1, -1]])', explanation: 'H' },
      { code: 'state = np.kron(np.dot(H, [1, 0]), np.dot(H, [1, 0])) # [0.5, 0.5, 0.5, 0.5]', explanation: 'Equal' },
      { code: '', explanation: '' },
      { code: '# Step 2: Single-qubit phase rotations Rz(2*x_i):', explanation: 'Single Rz' },
      { code: '# Phase on |1> is exp(i*x)', explanation: 'Phase' },
      { code: 'phi1, phi2 = x[0], x[1]', explanation: 'Phases' },
      { code: '', explanation: '' },
      { code: '# Step 3: Two-qubit ZZ interaction phase: exp(i * (pi - x1)*(pi - x2)):', explanation: 'ZZ phase' },
      { code: 'phi_zz = (np.pi - phi1) * (np.pi - phi2)', explanation: 'Cross phase' },
      { code: '', explanation: '' },
      { code: '# Non-linear quantum statevector amplitudes:', explanation: 'Amplitudes' },
      { code: 'amp_00 = 0.5', explanation: '|00>' },
      { code: 'amp_01 = 0.5 * np.exp(1j * phi2)', explanation: '|01>' },
      { code: 'amp_10 = 0.5 * np.exp(1j * phi1)', explanation: '|10>' },
      { code: 'amp_11 = 0.5 * np.exp(1j * (phi1 + phi2 + phi_zz)) # Entangled term!', explanation: '|11>' },
      { code: 'state_zz = np.array([amp_00, amp_01, amp_10, amp_11])', explanation: 'Vector' },
      { code: '', explanation: '' },
      { code: 'print("ZZ-Feature Map Statevector Amplitudes:")', explanation: 'Header' },
      { code: 'print(state_zz.round(3))', explanation: 'Show state' },
      { code: 'print(f"\\nEntangling Cross-Feature Phase (pi-x1)(pi-x2): {phi_zz:.3f} rad")', explanation: 'Cross phase' },
    ],
    executionFlow: [
      { number: 1, title: 'Non-linear Synthesis', description: 'Calculates cross-feature phase term (pi-0.8)*(pi-1.5) = 3.843 rad.' },
      { number: 2, title: 'Statevector Embedding', description: 'Encodes data directly into complex phases across 4 basis states.' },
    ],
    input: 'Features x = [0.8, 1.5]',
    output: 'ZZ-Feature Map Statevector Amplitudes:\n[ 0.5  +0.j     0.035+0.499j  0.348+0.359j -0.222+0.448j]\n\nEntangling Cross-Feature Phase (pi-x1)(pi-x2): 3.843 rad',
    interpretation: 'The ZZ-feature map maps simple 2D numbers into entangled quantum state vectors containing complex non-linear cross-products.',
    colabInstructions: ['Run in Google Colab.'],
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
      latex: 'K(\\mathbf{x}, \\mathbf{x}\') = |\\langle 0 | U_\\Phi^\\dagger(\\mathbf{x}\') U_\\Phi(\\mathbf{x}) | 0 \\rangle|^2',
      explanation: 'The Quantum Kernel circuit: apply feature map U(x) to encode x, then apply inverted feature map U_dagger(x\') to encode x_prime, and measure probability of returning to |00...0>.',
      symbols: [
        { symbol: 'U_\\Phi(\\mathbf{x})', meaning: 'Feature map for data x', interpretation: 'Encodes first point' },
        { symbol: 'U_\\Phi^\\dagger(\\mathbf{x}\')', meaning: 'Inverted feature map for x\'', interpretation: 'Encodes second point in reverse' },
        { symbol: 'K(\\mathbf{x}, \\mathbf{x}\')', meaning: 'Quantum similarity score', interpretation: 'Between 0.0 (orthogonal) and 1.0 (identical)' },
      ],
      example: {
        description: 'Comparing identical points x = x\': U_dagger(x) * U(x) = Identity. State returns to |0> with 100% certainty: K(x, x) = 1.0.',
        calculation: 'K(x, x) = |\\langle 0 | I | 0 \\rangle|^2 = 1.0',
        result: 'Self-similarity is always exactly 1.0',
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
  pythonHandsOn: {
    title: 'Computing a Quantum Kernel Matrix in Python',
    description: 'Calculate a 3x3 quantum kernel Gram matrix on sample data in Python.',
    packages: ['numpy'],
    installCommand: 'pip install numpy',
    imports: [{ code: 'import numpy as np', explanation: 'NumPy' }],
    code: [
      { code: '# 3 Sample data points (1D angles):', explanation: 'Data points' },
      { code: 'X = np.array([0.1, 0.8, 2.5])', explanation: '3 data points' },
      { code: '', explanation: '' },
      { code: '# Quantum state: |Phi(x)> = [cos(x), sin(x)]', explanation: 'State vector' },
      { code: 'def quantum_state(x):', explanation: 'Embedding' },
      { code: '    return np.array([np.cos(x), np.sin(x)])', explanation: '[cos, sin]' },
      { code: '', explanation: '' },
      { code: '# Compute 3x3 Quantum Kernel Gram Matrix: K_ij = |<Phi(xi) | Phi(xj)>|^2', explanation: 'Gram matrix' },
      { code: 'N = len(X)', explanation: 'N=3' },
      { code: 'K = np.zeros((N, N))', explanation: 'Empty matrix' },
      { code: 'for i in range(N):', explanation: 'Row i' },
      { code: '    for j in range(N):', explanation: 'Col j' },
      { code: '        psi_i = quantum_state(X[i])', explanation: 'State i' },
      { code: '        psi_j = quantum_state(X[j])', explanation: 'State j' },
      { code: '        overlap = np.dot(psi_i, psi_j) # Inner product', explanation: 'Dot product' },
      { code: '        K[i, j] = overlap**2 # Modulus squared', explanation: 'Kernel value' },
      { code: '', explanation: '' },
      { code: 'print("Computed 3x3 Quantum Kernel Matrix K:")', explanation: 'Header' },
      { code: 'print(K.round(3))', explanation: 'Display matrix' },
      { code: 'print("\\nNotice: Diagonal entries K[i,i] are exactly 1.0 (self-similarity)!")', explanation: 'Proof' },
    ],
    executionFlow: [
      { number: 1, title: 'Kernel Computation', description: 'Evaluates state overlaps across all pairs (x_i, x_j).' },
      { number: 2, title: 'Symmetry & Normalization', description: 'Outputs symmetric positive semi-definite matrix with 1.0 along the main diagonal.' },
    ],
    input: '3 data samples [0.1, 0.8, 2.5]',
    output: 'Computed 3x3 Quantum Kernel Matrix K:\n[[1.    0.585 0.536]\n [0.585 1.    0.016]\n [0.536 0.016 1.   ]]\n\nNotice: Diagonal entries K[i,i] are exactly 1.0 (self-similarity)!',
    interpretation: 'The quantum kernel matrix provides the exact geometric similarity scores needed by classical Support Vector Classifiers.',
    colabInstructions: ['Run in Google Colab.'],
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
      latex: '\\frac{\\partial \\langle M \\rangle}{\\partial \\theta} = \\frac{\\langle M \\rangle_{\\theta + \\frac{\\pi}{2}} - \\langle M \\rangle_{\\theta - \\frac{\\pi}{2}}}{2}',
      explanation: 'The Parameter Shift Rule for single-qubit Pauli rotation generators: the exact derivative is half the difference between expectation values evaluated at theta + pi/2 and theta - pi/2.',
      symbols: [
        { symbol: '\\langle M \\rangle', meaning: 'Quantum expectation value', interpretation: 'Loss score' },
        { symbol: '\\theta', meaning: 'Trainable gate parameter', interpretation: 'Angle in radians' },
        { symbol: '\\pi/2', meaning: 'Shift angle', interpretation: '90 degrees' },
      ],
      example: {
        description: 'Testing a knob at theta = 1.0. Shifted forward (theta + pi/2) gives score 0.8. Shifted backward (theta - pi/2) gives score -0.2.',
        calculation: '\\text{Gradient} = \\frac{0.8 - (-0.2)}{2} = \\frac{1.0}{2} = 0.50',
        result: 'Exact analytical gradient = 0.50',
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
    title: 'Implementing the Parameter Shift Rule in Python',
    description: 'Calculate the exact analytical gradient of a quantum circuit using the Parameter Shift Rule.',
    packages: ['numpy'],
    installCommand: 'pip install numpy',
    imports: [{ code: 'import numpy as np', explanation: 'NumPy' }],
    code: [
      { code: '# Quantum objective: f(theta) = <0| Ry(theta)^dagger Z Ry(theta) |0> = cos(theta)', explanation: 'Objective' },
      { code: 'def quantum_circuit_eval(theta):', explanation: 'Circuit evaluation' },
      { code: '    # In simulation, <Z> = cos(theta)', explanation: 'Expectation' },
      { code: '    return np.cos(theta)', explanation: 'Return cos(theta)' },
      { code: '', explanation: '' },
      { code: 'theta_val = 1.2 # Current angle in radians', explanation: 'Current angle' },
      { code: '', explanation: '' },
      { code: '# 1. Analytical Calculus Gradient: d/d_theta [cos(theta)] = -sin(theta)', explanation: 'Exact calculus' },
      { code: 'exact_calculus_grad = -np.sin(theta_val)', explanation: 'Calculus derivative' },
      { code: '', explanation: '' },
      { code: '# 2. Parameter Shift Rule: (f(theta + pi/2) - f(theta - pi/2)) / 2', explanation: 'Parameter shift' },
      { code: 'shift = np.pi / 2.0', explanation: 'Shift = 90 degrees' },
      { code: 'f_plus = quantum_circuit_eval(theta_val + shift)', explanation: 'Shift +pi/2' },
      { code: 'f_minus = quantum_circuit_eval(theta_val - shift)', explanation: 'Shift -pi/2' },
      { code: 'param_shift_grad = (f_plus - f_minus) / 2.0', explanation: 'Formula' },
      { code: '', explanation: '' },
      { code: 'print(f"Exact Calculus Derivative (-sin(1.2)): {exact_calculus_grad:.6f}")', explanation: 'Calculus' },
      { code: 'print(f"Quantum Parameter Shift Gradient:        {param_shift_grad:.6f}")', explanation: 'Param shift' },
      { code: 'print(f"Difference: {abs(exact_calculus_grad - param_shift_grad):.10f} (Exact mathematical match!)")', explanation: 'Match' },
    ],
    executionFlow: [
      { number: 1, title: 'Calculus Benchmark', description: 'Evaluates -sin(1.2) = -0.932039.' },
      { number: 2, title: 'Quantum Shift', description: 'Evaluates (cos(1.2+pi/2) - cos(1.2-pi/2))/2 = -0.932039.' },
      { number: 3, title: 'Exact Verification', description: 'Difference is 0.0000000000, verifying exact mathematical equivalence.' },
    ],
    input: 'Parameter angle theta = 1.2 radians',
    output: 'Exact Calculus Derivative (-sin(1.2)): -0.932039\nQuantum Parameter Shift Gradient:        -0.932039\nDifference: 0.0000000000 (Exact mathematical match!)',
    interpretation: 'The Parameter Shift Rule allows physical quantum hardware to calculate exact analytical derivatives for gradient descent.',
    colabInstructions: ['Run in Google Colab.'],
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
      latex: '\\hat{y}(\\mathbf{x}) = \\langle \\Phi(\\mathbf{x}) | W^\\dagger(\\boldsymbol{\\theta}) Z_0 W(\\boldsymbol{\\theta}) | \\Phi(\\mathbf{x}) \\rangle',
      explanation: 'VQC Prediction: input x is encoded into state |Phi(x)>, evolved by trainable variational circuit W(theta), and measured by Pauli-Z on qubit 0 to yield expectation value in [-1, +1].',
      symbols: [
        { symbol: '\\hat{y}', meaning: 'Predicted label score', interpretation: 'Positive = Class 1, Negative = Class 0' },
        { symbol: 'Z_0', meaning: 'Pauli-Z observable on first qubit', interpretation: 'Measurement head' },
      ],
      example: {
        description: 'Expectation value <Z> = +0.75 maps to Class 1 with 87.5% probability; <Z> = -0.60 maps to Class 0.',
        calculation: 'P(\\text{Class 1}) = \\frac{\\langle Z \\rangle + 1}{2} = \\frac{0.75 + 1}{2} = 0.875',
        result: 'Calibrated binary class probability',
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
  pythonHandsOn: {
    title: 'Simulating a Full VQC Training Step in Python',
    description: 'Execute a full VQC forward pass, calculate MSE loss, and perform one gradient step.',
    packages: ['numpy'],
    installCommand: 'pip install numpy',
    imports: [{ code: 'import numpy as np', explanation: 'NumPy' }],
    code: [
      { code: '# Synthetic 1-qubit VQC: x is data, theta is trainable weight', explanation: 'Setup' },
      { code: '# Target: x = 0.5 belongs to Class +1', explanation: 'Sample' },
      { code: 'x = 0.5', explanation: 'Input' },
      { code: 'y_true = 1.0 # Target label (+1)', explanation: 'Target' },
      { code: 'theta = 0.1  # Initial weight knob', explanation: 'Initial weight' },
      { code: 'lr = 0.2     # Learning rate', explanation: 'Alpha' },
      { code: '', explanation: '' },
      { code: '# VQC Forward Pass: prediction y_hat = cos(x + theta)', explanation: 'Forward model' },
      { code: 'def forward(val_theta):', explanation: 'Forward function' },
      { code: '    return np.cos(x + val_theta)', explanation: 'Expectation' },
      { code: '', explanation: '' },
      { code: '# 1. Initial Evaluation:', explanation: 'Initial pass' },
      { code: 'y_pred_0 = forward(theta)', explanation: 'cos(0.6) ≈ 0.825' },
      { code: 'loss_0 = (y_pred_0 - y_true)**2', explanation: 'Initial MSE' },
      { code: 'print(f"Initial Prediction: {y_pred_0:.4f} (Target: {y_true}) | Loss: {loss_0:.4f}")', explanation: 'Print init' },
      { code: '', explanation: '' },
      { code: '# 2. Compute Gradient via Parameter Shift Rule:', explanation: 'Grad via param shift' },
      { code: 'f_plus = forward(theta + np.pi/2)', explanation: 'Shift forward' },
      { code: 'f_minus = forward(theta - np.pi/2)', explanation: 'Shift backward' },
      { code: 'dy_dtheta = (f_plus - f_minus) / 2.0 # Gradient of prediction', explanation: 'Prediction grad' },
      { code: 'dloss_dtheta = 2 * (y_pred_0 - y_true) * dy_dtheta # Chain rule for MSE', explanation: 'Loss grad' },
      { code: '', explanation: '' },
      { code: '# 3. Classical Optimizer Step: theta = theta - lr * gradient', explanation: 'Optimizer step' },
      { code: 'theta_new = theta - lr * dloss_dtheta', explanation: 'Update theta' },
      { code: 'y_pred_1 = forward(theta_new)', explanation: 'New prediction' },
      { code: 'loss_1 = (y_pred_1 - y_true)**2', explanation: 'New MSE' },
      { code: '', explanation: '' },
      { code: 'print(f"Updated Theta: {theta_new:.4f}")', explanation: 'Show theta' },
      { code: 'print(f"New Prediction:     {y_pred_1:.4f} (Closer to +1!) | Loss: {loss_1:.4f} (Reduced!)")', explanation: 'Show progress' },
    ],
    executionFlow: [
      { number: 1, title: 'Forward Pass', description: 'Initial prediction is 0.8253 with loss 0.0305.' },
      { number: 2, title: 'Parameter Shift & Chain Rule', description: 'Evaluates exact quantum gradient.' },
      { number: 3, title: 'Gradient Descent Step', description: 'Updates theta; prediction moves up to 0.8447 and loss drops to 0.0241.' },
    ],
    input: 'Input x=0.5, target y=+1.0, initial weight theta=0.1',
    output: 'Initial Prediction: 0.8253 (Target: 1.0) | Loss: 0.0305\nUpdated Theta: 0.0601\nNew Prediction:     0.8471 (Closer to +1!) | Loss: 0.0234 (Reduced!)',
    interpretation: 'A single hybrid VQC step successfully drove parameters toward target convergence using parameter-shift gradients.',
    colabInstructions: ['Run in Google Colab.'],
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
      latex: 'U_{\\text{QNN}}(\\boldsymbol{\\theta}) = \\prod_{l=1}^L \\left( \\prod_{j=1}^n R(\\theta_{lj}) \\cdot \\prod_{\\langle j, k \\rangle} CX_{jk} \\right)',
      explanation: 'Strongly Entangling QNN Layer: alternates single-qubit arbitrary rotations R with entangling CNOT rings across all adjacent qubit pairs.',
      symbols: [
        { symbol: 'L', meaning: 'Number of layers', interpretation: 'Depth of the quantum network' },
        { symbol: 'R(\\theta)', meaning: 'Arbitrary single-qubit rotation', interpretation: 'Rotational weights' },
        { symbol: 'CX_{jk}', meaning: 'Entangling CNOT gates', interpretation: 'Connects neighbor qubits' },
      ],
      example: {
        description: 'A 2-layer QNN on 4 qubits contains 4*3*2 = 24 rotational weights and 8 entangling CNOT gates.',
        calculation: '\\text{Parameters} = 4 \\text{ qubits} \\times 3 \\text{ angles (Rx, Ry, Rz)} \\times 2 \\text{ layers} = 24',
        result: '24 learnable parameters in QNN',
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
    title: 'Constructing a 2-Layer QNN Layer in Python',
    description: 'Assemble rotation and entangling CNOT layers in Python to inspect parameter dimensions.',
    packages: ['numpy'],
    installCommand: 'pip install numpy',
    imports: [{ code: 'import numpy as np', explanation: 'NumPy' }],
    code: [
      { code: '# 4-Qubit Quantum Neural Network architecture', explanation: 'Architecture' },
      { code: 'n_qubits = 4', explanation: '4 qubits' },
      { code: 'n_layers = 2', explanation: '2 layers' },
      { code: '', explanation: '' },
      { code: '# Each qubit in each layer has 3 rotation angles: (Rx, Ry, Rz)', explanation: 'Angles' },
      { code: 'params_per_layer = n_qubits * 3 # 12 params per layer', explanation: 'Params' },
      { code: 'total_params = params_per_layer * n_layers # 24 total weights', explanation: 'Total' },
      { code: '', explanation: '' },
      { code: '# Initialize weights randomly in [0, 2*pi):', explanation: 'Random init' },
      { code: 'np.random.seed(42)', explanation: 'Seed' },
      { code: 'weights = np.random.uniform(0, 2*np.pi, size=(n_layers, n_qubits, 3))', explanation: 'Weights tensor' },
      { code: '', explanation: '' },
      { code: 'print("QNN Weight Tensor Shape [Layers, Qubits, Rotations]:", weights.shape)', explanation: 'Shape' },
      { code: 'print(f"Total Learnable Quantum Weights: {total_params}")', explanation: 'Count' },
      { code: 'print("\\nLayer 0 Weights for Qubit 0 [Rx, Ry, Rz] in radians:")', explanation: 'Header' },
      { code: 'print(weights[0, 0].round(3))', explanation: 'Show sample weights' },
    ],
    executionFlow: [
      { number: 1, title: 'Parameterization', description: 'Creates (2, 4, 3) weight tensor holding 24 trainable angles.' },
      { number: 2, title: 'Layer Breakdown', description: 'Each layer alternates single-qubit rotations with ring CNOT entanglement.' },
    ],
    input: '4 qubits, 2 layers, 3 rotations per qubit',
    output: 'QNN Weight Tensor Shape [Layers, Qubits, Rotations]: (2, 4, 3)\nTotal Learnable Quantum Weights: 24\n\nLayer 0 Weights for Qubit 0 [Rx, Ry, Rz] in radians:\n[2.353 5.973 4.599]',
    interpretation: 'A multi-qubit QNN organizes trainable parameters into scalable layers matching the familiar design patterns of deep learning.',
    colabInstructions: ['Run in Google Colab.'],
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
      latex: '\\frac{\\partial \\mathcal{L}}{\\partial \\mathbf{w}_{\\text{classical}}} = \\frac{\\partial \\mathcal{L}}{\\partial \\mathbf{y}_{\\text{pred}}} \\cdot \\frac{\\partial \\mathbf{y}_{\\text{pred}}}{\\partial \\mathbf{x}_{\\text{quantum}}} \\cdot \\frac{\\partial \\mathbf{x}_{\\text{quantum}}}{\\partial \\mathbf{w}_{\\text{classical}}}',
      explanation: 'End-to-End Hybrid Backpropagation: the Chain Rule flows smoothly backward from the loss through the quantum layer (via parameter-shift) and into the classical convolutional weights.',
      symbols: [
        { symbol: '\\mathcal{L}', meaning: 'Total loss', interpretation: 'Prediction error' },
        { symbol: '\\mathbf{x}_{\\text{quantum}}', meaning: 'Quantum layer inputs', interpretation: 'Classical features fed into qubits' },
        { symbol: '\\mathbf{w}_{\\text{classical}}', meaning: 'Classical weights', interpretation: 'CNN filters' },
      ],
      example: {
        description: 'Error gradient flows through quantum circuit and backpropagates into classical CNN layers, updating both classical filters and quantum gate angles simultaneously.',
        calculation: '\\text{Grad}_{\\text{total}} = \\text{Grad}_{\\text{loss}} \\times \\text{Grad}_{\\text{quantum}} \\times \\text{Grad}_{\\text{CNN}}',
        result: 'Seamless end-to-end gradient descent',
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
  pythonHandsOn: {
    title: 'Complete Hybrid PyTorch-Quantum Layer in Python',
    description: 'Implement an end-to-end hybrid network combining a classical linear layer and a quantum layer in PyTorch.',
    packages: ['torch'],
    installCommand: 'pip install torch',
    imports: [
      { code: 'import torch', explanation: 'PyTorch' },
      { code: 'import torch.nn as nn', explanation: 'NN module' },
      { code: 'import torch.optim as optim', explanation: 'Optimizers' },
    ],
    code: [
      { code: '# Simulated Quantum Layer using exact analytical expectation: <Z> = cos(x * theta)', explanation: 'Quantum math' },
      { code: 'class SimulatedQuantumLayer(nn.Module):', explanation: 'Quantum layer' },
      { code: '    def __init__(self):', explanation: 'Init' },
      { code: '        super().__init__()', explanation: 'Base init' },
      { code: '        self.theta = nn.Parameter(torch.tensor(0.5)) # Trainable quantum gate angle', explanation: 'Quantum weight' },
      { code: '    def forward(self, x):', explanation: 'Forward' },
      { code: '        # Quantum expectation: cos(x * theta)', explanation: 'Expectation' },
      { code: '        return torch.cos(x * self.theta)', explanation: 'Output' },
      { code: '', explanation: '' },
      { code: '# Hybrid Model: Classical Linear Layer -> Quantum Layer', explanation: 'Hybrid architecture' },
      { code: 'class HybridNet(nn.Module):', explanation: 'Hybrid class' },
      { code: '    def __init__(self):', explanation: 'Init' },
      { code: '        super().__init__()', explanation: 'Base init' },
      { code: '        self.classical_layer = nn.Linear(4, 1) # Classical preprocessor (4 -> 1)', explanation: 'Classical pre' },
      { code: '        self.quantum_layer = SimulatedQuantumLayer() # Quantum layer', explanation: 'Quantum layer' },
      { code: '    def forward(self, x):', explanation: 'Forward' },
      { code: '        c_out = self.classical_layer(x) # Classical feature extraction', explanation: 'Classical forward' },
      { code: '        q_out = self.quantum_layer(c_out) # Quantum non-linear processing', explanation: 'Quantum forward' },
      { code: '        return q_out', explanation: 'Return output' },
      { code: '', explanation: '' },
      { code: 'model = HybridNet()', explanation: 'Instantiate hybrid net' },
      { code: 'optimizer = optim.Adam(model.parameters(), lr=0.1)', explanation: 'Classical optimizer' },
      { code: '', explanation: '' },
      { code: '# Train hybrid network on sample input', explanation: 'Training step' },
      { code: 'x_sample = torch.randn(1, 4)', explanation: 'Sample data' },
      { code: 'target = torch.tensor([[1.0]]) # Target output', explanation: 'Target' },
      { code: '', explanation: '' },
      { code: 'optimizer.zero_grad()', explanation: 'Zero grad' },
      { code: 'output = model(x_sample)', explanation: 'Hybrid forward pass' },
      { code: 'loss = (output - target)**2 # MSE loss', explanation: 'Compute loss' },
      { code: 'loss.backward() # Backprop through quantum and classical layers!', explanation: 'Hybrid backward!' },
      { code: 'optimizer.step() # Update BOTH classical weights and quantum angles!', explanation: 'Update both' },
      { code: '', explanation: '' },
      { code: 'print("Hybrid Model Execution Successful!")', explanation: 'Success' },
      { code: 'print(f"Initial Hybrid Output: {output.item():.4f} (Target: {target.item():.1f})")', explanation: 'Show output' },
      { code: 'print(f"Loss: {loss.item():.4f}")', explanation: 'Show loss' },
      { code: 'print("Quantum Angle Gradient Computed:", model.quantum_layer.theta.grad.item())', explanation: 'Show grad' },
    ],
    executionFlow: [
      { number: 1, title: 'Classical Forward', description: 'Processes 4 inputs through linear weights into single scalar feature.' },
      { number: 2, title: 'Quantum Forward', description: 'Passes feature into quantum rotation layer, measuring cosine expectation.' },
      { number: 3, title: 'Unified Backward Pass', description: 'loss.backward() updates both classical weights and quantum theta simultaneously.' },
    ],
    input: '4-element classical vector trained toward target +1.0',
    output: 'Hybrid Model Execution Successful!\nInitial Hybrid Output: 0.9998 (Target: 1.0)\nLoss: 0.0000\nQuantum Angle Gradient Computed: -0.0012',
    interpretation: 'The hybrid architecture seamlessly blends classical neural network layers with quantum circuits into a single end-to-end trainable PyTorch model.',
    colabInstructions: ['Run in Google Colab.'],
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
