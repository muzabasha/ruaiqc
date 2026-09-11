import { Topic } from '@/lib/types';

export const quantumCircuit: Topic = {
  id: 'quantum-circuit',
  moduleId: 'quantum-circuits',
  number: 1,
  title: 'Quantum Circuits: Visualizing Computation',
  description: 'Learn how quantum computations are drawn and structured as quantum circuit diagrams: wires, gates, and time flow.',
  objectives: [
    'Read quantum circuit diagrams from left to right (chronological time)',
    'Understand quantum wires as physical qubits and double wires as classical bits',
    'Map graphical circuit diagrams directly to linear algebra matrix equations',
  ],
  story: `In classical electronics, electrical engineers draw schematic circuit diagrams using wires, resistors, and transistors. Electrons flow through physical copper wires from a power source to a ground.
  
In quantum computing, we also draw "circuits"—but there is a crucial difference!
  
In a quantum circuit diagram, the horizontal lines (wires) do NOT represent physical wires moving through space. They represent **time**!
  
A horizontal line represents a single qubit progressing forward in time from left to right. When a box labeled "H" or "X" sits on that line, it means: "At this exact microsecond in time, fire a calibrated laser or microwave pulse at this qubit to rotate its state."`,
  motivation: `**The sheet music of quantum mechanics**: Circuit diagrams are the universal visual language of quantum software. Whether in IBM Quantum Composer, Qiskit, Cirq, or Pennylane, every quantum algorithm is composed and visualized as a circuit.`,
  concept: {
    simple: `Reading a quantum circuit is like reading sheet music:
1. **Horizontal Wires**: The instruments (qubits). Time flows from left to right.
2. **Boxes on Wires**: The musical notes (quantum gates). They tell the qubit what dance move to make.
3. **Black Meter Symbols**: The finale (measurement). Checking the instrument at the end to hear what note it settled on.
4. **Double Lines**: Ordinary classical wires carrying 0s and 1s after measurement.`,
    technical: `A quantum circuit is an acyclic directed computational network over $n$ quantum wires and $m$ classical registers. The circuit depth $D$ denotes the length of the critical path of sequential gate operations, directly constrained by qubit coherence time $D \\cdot t_{gate} \\ll T_2$. The circuit width equals the number of allocated qubits $n$.`,
  },
  keyTerms: [
    { term: 'Quantum Wire', simple: 'A line representing one qubit traveling forward through time.', technical: 'An allocated 2-level quantum subsystem preserving state $|\\psi(t)\\rangle$ over operational duration.' },
    { term: 'Circuit Depth', simple: 'How many layers of gates are stacked from start to finish.', technical: 'The maximum length of a path of dependent quantum gates from input to measurement.' },
    { term: 'Circuit Width', simple: 'How many total qubits are used in the circuit.', technical: 'The total number of operational qubits participating in the circuit.' },
  ],
  equations: [
    {
      latex: '|\\psi_{\\text{final}}\\rangle = U_k \\dots U_2 U_1 |0\\rangle^{\\otimes n}',
      explanation: 'Matrix ordering in quantum circuits: gates are applied chronologically left-to-right (U1, then U2, then Uk), which is written in linear algebra from right-to-left.',
      symbols: [
        { symbol: 'U_1, U_2', meaning: 'Unitary gate operators', interpretation: 'Sequential gate operations' },
        { symbol: '|0\\rangle^{\\otimes n}', meaning: 'Initial ground state', interpretation: 'All qubits start at 0' },
      ],
      example: {
        description: 'Applying an X gate followed by an H gate to |0>. In math: H * X * |0>.',
        calculation: 'X|0\\rangle = |1\\rangle \\implies H|1\\rangle = |-\\rangle = \\frac{|0\\rangle - |1\\rangle}{\\sqrt{2}}',
        result: 'Final state is |->',
      },
    },
  ],
  howItWorks: [
    { number: 1, title: 'Left Margin (Initialization)', description: 'All qubits are prepared in standard ground state |0>.' },
    { number: 2, title: 'Middle (Unitary Gates)', description: 'Single-qubit gates rotate individual wires; two-qubit gates link adjacent wires.' },
    { number: 3, title: 'Right Margin (Measurement)', description: 'Meter icons project qubits, writing classical bits to double wires.' },
  ],
  applications: [
    { title: 'IBM Quantum Composer', problem: 'Allowing students and researchers to build quantum circuits graphically in a web browser.', solution: 'Drag-and-drop circuit interface automatically synthesizes OpenQASM and executes on real quantum hardware.' },
  ],
  activity: {
    type: 'mcq',
    title: 'Circuit Order Check',
    question: 'In a quantum circuit, if an X gate appears to the LEFT of a Z gate on the same wire, in which order are the matrix operations multiplied against the state vector?',
    options: [
      { id: 'a', text: 'Z * X * |psi> (the leftmost gate X touches the state vector first, so it is written on the right in math)' },
      { id: 'b', text: 'X * Z * |psi>' },
      { id: 'c', text: 'They execute simultaneously' },
      { id: 'd', text: 'Order does not matter' },
    ],
    correctAnswer: 'a',
    explanation: 'Because matrix multiplication acts from right to left on column vectors ($Z(X|\\psi\\rangle)$), the gate applied first in time (the leftmost in a circuit diagram) must be multiplied closest to the state vector.',
    hint: 'Matrix operators act on column vectors from right to left.',
  },
  pythonHandsOn: {
    title: "Constructing and Drawing Quantum Circuits in Qiskit",
    description: "Create a multi-qubit circuit with Hadamard and CNOT gates, and generate visual ASCII circuit diagrams with Qiskit.",
    packages: ["qiskit", "qiskit-aer"],
    installCommand: "pip install qiskit qiskit-aer",
    imports: [
      { code: "from qiskit import QuantumCircuit", explanation: "Core class to assemble quantum circuits" },
      { code: "from qiskit.quantum_info import Statevector", explanation: "Simulate exact quantum state" }
    ],
    code: [
      { code: "# 1. Initialize a 2-qubit, 2-classical-bit circuit", explanation: "Constructor" },
      { code: "qc = QuantumCircuit(2, 2)", explanation: "Allocate 2 qubits (q0, q1) and 2 classical bits (c0, c1)" },
      { code: "qc.h(0)            # Put qubit 0 into superposition", explanation: "Apply Hadamard" },
      { code: "qc.cx(0, 1)        # Entangle qubit 1 with qubit 0", explanation: "Apply CNOT" },
      { code: "qc.measure([0, 1], [0, 1])  # Measure both qubits", explanation: "Add measurement operations" },
      { code: "", explanation: "" },
      { code: "# 2. Draw Circuit Diagram with Qiskit draw()", explanation: "Circuit drawing" },
      { code: "print('=== Qiskit Quantum Circuit Diagram ===')", explanation: "Header" },
      { code: "print(qc.draw('text'))", explanation: "Generate text-based circuit layout" },
      { code: "", explanation: "" },
      { code: "# 3. Inspect Circuit Properties", explanation: "Circuit metadata" },
      { code: "print(f'\\nCircuit Width  : {qc.num_qubits} qubits, {qc.num_clbits} classical bits')", explanation: "Dimensions" },
      { code: "print(f'Circuit Depth  : {qc.depth()} gate layers')", explanation: "Layers" },
      { code: "print(f'Gate Operations: {dict(qc.count_ops())}')", explanation: "Gate inventory" }
    ],
    executionFlow: [
      { number: 1, title: "Initialize Circuit", description: "Allocate quantum and classical registers in QuantumCircuit(2, 2)." },
      { number: 2, title: "Attach Gates", description: "Apply H(0) and CNOT(0, 1) to construct the Bell state." },
      { number: 3, title: "Draw & Analyze", description: "Generate text diagram with qc.draw('text') and inspect circuit depth and gate counts." }
    ],
    input: "QuantumCircuit(2, 2) with H, CX, and Measure gates.",
    output: "q_0: \u2500\u2500\u25a0\u2500\u2500\u2500\u2500\u2500\u2500\u2500[ M ]\n     \u2502  \u2551\nq_1: \u2500\u2500X\u2500\u2500\u2500\u2500\u2500\u2500\u2500[ M ]\n     \u2551  \u2551\nDepth: 2 | Ops: {'measure': 2, 'h': 1, 'cx': 1}",
    interpretation: "A quantum circuit diagram represents quantum algorithms as horizontal qubit timelines evolving from left to right through discrete unitary gates, culminating in classical measurement.",
    colabInstructions: [
      "Click 'Copy for Google Colab' to copy the complete runnable script",
      "Open Google Colab at colab.research.google.com",
      "Paste into a code cell and press Shift + Enter to run",
    ],
  },
  mcqs: [
    {
      id: 'q1',
      question: 'What do the double lines (═) in a quantum circuit diagram represent?',
      options: [
        { id: 'a', text: 'Classical wires carrying ordinary digital bits (0 or 1) after measurement' },
        { id: 'b', text: 'High-voltage power cables' },
        { id: 'c', text: 'Internet cables' },
        { id: 'd', text: 'Defective qubits' },
      ],
      correctAnswer: 'a',
      explanation: 'By standard convention, single lines represent quantum qubit wires; double lines represent classical bit registers holding collapsed measurement results.',
      incorrectFeedback: 'Double lines denote classical digital bits.',
    },
  ],
};

export const quantumRegister: Topic = {
  id: 'quantum-register',
  moduleId: 'quantum-circuits',
  number: 2,
  title: 'Quantum Registers & Multi-Qubit State Vectors',
  description: 'Understand how multiple qubits assemble into quantum registers, and master little-endian vs big-endian bit ordering.',
  objectives: [
    'Define Quantum Registers as collections of qubits indexed in composite Hilbert spaces',
    'Master endianness: IBM Qiskit (Little-Endian) vs Textbooks (Big-Endian)',
    'Calculate the dimensionality and basis vectors for n-qubit registers',
  ],
  story: `In 1726, Jonathan Swift published *Gulliver’s Travels*, where two rival empires went to war over which end of a hard-boiled egg should be cracked open: the big end or the little end.
  
In 1980, computer scientist Danny Cohen adopted this satire to describe computer memory: **Endianness**.
  
In quantum computing, endianness causes more bugs for beginners than almost anything else!
- In **Textbooks (Big-Endian)**: The top qubit $q_0$ is the leftmost bit: $|q_0 q_1\\rangle$.
- In **IBM Qiskit (Little-Endian)**: The top qubit $q_0$ is the rightmost bit: $|q_1 q_0\\rangle$!
  
If you measure $q_0 = 1$ and $q_1 = 0$, a textbook calls it "10", while Qiskit calls it "01"! Understanding how registers order qubits is critical to avoid reading your quantum results backwards.`,
  motivation: `**Register hygiene**: A single bug in register endianness inverts your entire algorithm's output. Mastering multi-qubit register representation guarantees your code matches textbook mathematics.`,
  concept: {
    simple: `A Quantum Register is like a row of lightbulbs:
- 1 qubit: holds 2 states (|0>, |1>).
- 2 qubits: holds 4 states (|00>, |01>, |10>, |11>).
- 3 qubits: holds 8 states (|000> through |111>).
- 10 qubits: holds 1,024 states simultaneously!
Every time you add a single qubit to the register, its memory capacity doubles!`,
    technical: `An $n$-qubit register represents a state vector $|\\psi\\rangle = \\sum_{j=0}^{2^n-1} c_j |j\\rangle$ in Hilbert space $\\mathcal{H}^{\\otimes n} \\cong \\mathbb{C}^{2^n}$. Basis states $|j\\rangle$ correspond to the binary expansion $j = \\sum_{k=0}^{n-1} b_k 2^k$. In big-endian ordering, $|j\\rangle = |b_{n-1} b_{n-2} \\dots b_0\\rangle$; in little-endian (Qiskit), $|j\\rangle = |b_0 b_1 \\dots b_{n-1}\\rangle$.`,
  },
  keyTerms: [
    { term: 'Quantum Register', simple: 'A group of qubits treated as a single memory unit.', technical: 'An ordered collection of $n$ qubits whose combined state space is formed via tensor products $\\bigotimes_{i=0}^{n-1} \\mathcal{H}_i$.' },
    { term: 'Little-Endian (Qiskit)', simple: 'Qubit 0 is on the far right (like standard binary numbers: 1s place on right).', technical: 'Ordering where the least significant bit corresponds to qubit index 0: $|q_{n-1} \\dots q_1 q_0\\rangle$.' },
    { term: 'Big-Endian (Textbooks)', simple: 'Qubit 0 is on the far left.', technical: 'Ordering where the most significant bit corresponds to qubit index 0: $|q_0 q_1 \\dots q_{n-1}\\rangle$.' },
  ],
  equations: [
    {
      latex: '|\\psi\\rangle = \\sum_{x=0}^{2^n-1} c_x |x\\rangle = c_0 |00\\dots0\\rangle + c_1 |00\\dots1\\rangle + \\dots + c_{2^n-1} |11\\dots1\\rangle',
      explanation: 'General state of an n-qubit quantum register: a linear combination of all 2^n binary basis states with complex amplitudes c_x.',
      symbols: [
        { symbol: 'n', meaning: 'Number of qubits in register', interpretation: 'Width of register' },
        { symbol: '2^n', meaning: 'Total basis states', interpretation: 'Number of complex amplitudes' },
      ],
      example: {
        description: 'A 3-qubit register initialized to equal superposition via 3 Hadamard gates: (|0>+|1>)(x)(|0>+|1>)(x)(|0>+|1>) / sqrt(8).',
        calculation: '|\\psi\\rangle = \\frac{1}{\\sqrt{8}} (|000\\rangle + |001\\rangle + |010\\rangle + |011\\rangle + |100\\rangle + |101\\rangle + |110\\rangle + |111\\rangle)',
        result: 'All 8 binary combinations from 0 to 7 held simultaneously with equal probability 1/8 (12.5%)',
      },
    },
  ],
  howItWorks: [
    { number: 1, title: 'Allocation', description: 'Allocate n quantum wires and n classical measurement bits.' },
    { number: 2, title: 'Parallel Initialization', description: 'Apply Hadamard gate H across all n wires to create a uniform superposition of 2^n integers.' },
    { number: 3, title: 'Targeted Gate Addressing', description: 'Apply multi-qubit gates referencing specific qubit indices (e.g. CNOT(control=0, target=1)).' },
  ],
  applications: [
    { title: 'Quantum Arithmetic (Adders & Multipliers)', problem: 'Adding two numbers in a quantum circuit without classical ALU hardware.', solution: 'Quantum Draper adder encodes numbers in register phases using Quantum Fourier Transforms.' },
  ],
  activity: {
    type: 'mcq',
    title: 'Endianness Trap Check',
    question: 'In IBM Qiskit (Little-Endian), qubit 0 is measured as "1" and qubit 1 is measured as "0". How does Qiskit format the output bitstring?',
    options: [
      { id: 'a', text: '"01" (because qubit 1 is on the left and qubit 0 is on the right)' },
      { id: 'b', text: '"10"' },
      { id: 'c', text: '"11"' },
      { id: 'd', text: '"00"' },
    ],
    correctAnswer: 'a',
    explanation: 'Qiskit formats bitstrings as |q1 q0>. Since q1 = 0 and q0 = 1, the bitstring is printed as "01". In textbooks (big-endian), it would be written as "10".',
    hint: 'In Qiskit, qubit 0 is the rightmost character.',
  },
  pythonHandsOn: {
    title: "Managing Quantum and Classical Registers in Qiskit",
    description: "Construct modular quantum circuits using named QuantumRegister and ClassicalRegister blocks in Qiskit.",
    packages: ["qiskit"],
    installCommand: "pip install qiskit",
    imports: [
      { code: "from qiskit import QuantumRegister, ClassicalRegister, QuantumCircuit", explanation: "Register and circuit classes" }
    ],
    code: [
      { code: "# 1. Define named modular registers", explanation: "Registers" },
      { code: "data_reg = QuantumRegister(2, name='data')        # 2 data qubits", explanation: "Data qubits" },
      { code: "ancilla_reg = QuantumRegister(1, name='ancilla')  # 1 ancilla qubit", explanation: "Ancilla qubit" },
      { code: "meas_reg = ClassicalRegister(3, name='readout')   # 3 classical bits", explanation: "Classical bits" },
      { code: "", explanation: "" },
      { code: "# 2. Assemble circuit from registers", explanation: "Assemble" },
      { code: "qc = QuantumCircuit(data_reg, ancilla_reg, meas_reg)", explanation: "Combine registers" },
      { code: "qc.h(data_reg[0])                 # Gate on data qubit 0", explanation: "H on data[0]" },
      { code: "qc.cx(data_reg[0], data_reg[1])   # Gate across data qubits", explanation: "CNOT across data" },
      { code: "qc.cx(data_reg[1], ancilla_reg[0]) # Gate into ancilla", explanation: "CNOT into ancilla" },
      { code: "qc.measure(data_reg, meas_reg[0:2])", explanation: "Measure data" },
      { code: "qc.measure(ancilla_reg[0], meas_reg[2])", explanation: "Measure ancilla" },
      { code: "print('Circuit with Named Registers:')", explanation: "Label" },
      { code: "print(qc.draw('text'))", explanation: "Print diagram" }
    ],
    executionFlow: [
      { number: 1, title: "Declare Registers", description: "Create distinct QuantumRegister objects for data and ancilla qubits." },
      { number: 2, title: "Compose Circuit", description: "Build multi-register circuit with structured addressing." },
      { number: 3, title: "Route & Measure", description: "Map quantum register wires directly into corresponding classical readout indices." }
    ],
    input: "QuantumRegisters ('data' and 'ancilla') and ClassicalRegister ('readout').",
    output: "Named register diagram showing data[0], data[1], and ancilla[0] wires routing to readout classical bus.",
    interpretation: "Modular registers allow structuring large quantum circuits into dedicated functional units\u2014such as data registers, syndrome extraction ancillas, and readout buses.",
    colabInstructions: [
      "Click 'Copy for Google Colab' to copy the complete runnable script",
      "Open Google Colab at colab.research.google.com",
      "Paste into a code cell and press Shift + Enter to run",
    ],
  },
  mcqs: [
    {
      id: 'q1',
      question: 'How many basis states exist in a quantum register containing 8 qubits?',
      options: [
        { id: 'a', text: '256 (2^8)' },
        { id: 'b', text: '16' },
        { id: 'c', text: '64' },
        { id: 'd', text: '8' },
      ],
      correctAnswer: 'a',
      explanation: 'An n-qubit register has 2^n basis states. For 8 qubits, 2^8 = 256 simultaneous basis configurations exist.',
      incorrectFeedback: 'Calculate 2^8 = 256.',
    },
  ],
};

export const quantumGates: Topic = {
  id: 'quantum-gates',
  moduleId: 'quantum-circuits',
  number: 3,
  title: 'Quantum Gates: Unitary Operators & Linear Algebra',
  description: 'Understand the mathematical engine of quantum circuits: Unitary 2x2 and 4x4 complex matrices that rotate quantum states.',
  objectives: [
    'Define quantum gates as Unitary square matrices: U * U_dagger = I',
    'Understand geometric rotations on the Bloch Sphere: R_x(theta), R_y(theta), R_z(theta)',
    'Analyze why quantum logic must be strictly reversible',
  ],
  story: `In classical computing, the universal building block is the NAND gate. If you plug in two 1s, it outputs 0. If you plug in 0 and 1, it outputs 1.
  
Notice something crucial: two bits enter, but only one bit exits! The other bit was destroyed and vanished as thermal heat. You cannot run a NAND gate backwards: if you see an output of 1, you have no way of knowing whether the input was (0,0), (0,1), or (1,0).
  
Quantum gates are fundamentally different. By the laws of quantum mechanics, information can never be destroyed.
  
Every quantum gate is a **reversible geometric rotation** in a multi-dimensional sphere. If you rotate an apple 90 degrees clockwise, you can always rotate it 90 degrees counter-clockwise to put it back exactly as it was. That is why all quantum gates are unitary matrices!`,
  motivation: `**The core algebra of quantum computing**: Every quantum program you will ever write is simply a sequence of unitary matrix multiplications. Mastering their matrix properties unlocks complete fluency in quantum programming.`,
  concept: {
    simple: `Classical gates are one-way streets (information gets crushed).
Quantum gates are two-way roundabouts:
- Every gate is a smooth, elegant rotation of the qubit's arrow on the Bloch sphere.
- Because it’s a rotation, you can always run it in reverse to undo it.
- A single-qubit gate is a 2x2 matrix of numbers.
- A two-qubit gate is a 4x4 matrix of numbers.`,
    technical: `A quantum gate acting on $n$ qubits is represented by a unitary matrix $U \\in U(2^n)$ satisfying $U^\\dagger U = U U^\\dagger = I_{2^n}$, where $U^\\dagger = (U^*)^T$ is the conjugate transpose. Unitary matrices preserve inner products $\\langle U\\phi | U\\psi \\rangle = \\langle \\phi | \\psi \\rangle$, guarantee that probabilities sum to 1, and possess eigenvalues of unit modulus $\\lambda = e^{i\\theta}$.`,
  },
  keyTerms: [
    { term: 'Unitary Matrix', simple: 'A square grid of numbers whose reverse is its complex conjugate transpose (U * U_dagger = I).', technical: 'A bounded linear operator on complex Hilbert space whose adjoint equals its inverse: $U^\\dagger = U^{-1}$.' },
    { term: 'Conjugate Transpose ($U^\\dagger$)', simple: 'Flipping rows and columns and changing the sign of all imaginary numbers (i becomes -i).', technical: 'The Hermitian adjoint operator $(U^\\dagger)_{ij} = \\overline{U_{ji}}$.' },
    { term: 'Trace', simple: 'The sum of numbers along the main diagonal of a square matrix.', technical: 'The invariant sum of diagonal elements $\\text{Tr}(A) = \\sum A_{ii}$ equal to the sum of eigenvalues.' },
  ],
  equations: [
    {
      latex: 'U = \\begin{pmatrix} u_{00} & u_{01} \\\\ u_{10} & u_{11} \\end{pmatrix}, \\quad U^\\dagger = \\begin{pmatrix} u_{00}^* & u_{10}^* \\\\ u_{01}^* & u_{11}^* \\end{pmatrix}, \\quad U U^\\dagger = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}',
      explanation: 'The mathematical definition of a 2x2 unitary single-qubit gate: multiplying U by its conjugate transpose U_dagger produces the Identity matrix.',
      symbols: [
        { symbol: 'U', meaning: 'Quantum gate matrix', interpretation: 'Forward transformation' },
        { symbol: 'U^\\dagger', meaning: 'Adjoint gate matrix', interpretation: 'Exact inverse / undo operation' },
      ],
      example: {
        description: 'The Pauli-X gate: X = [[0, 1], [1, 0]]. Since all numbers are real and symmetric, X_dagger = X. X * X = Identity matrix.',
        calculation: 'X \\cdot X = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix} \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix} = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} = I',
        result: 'Self-inverse unitary operator',
      },
    },
  ],
  howItWorks: [
    { number: 1, title: 'Matrix-Vector Product', description: 'Apply gate U to input state vector |psi>: |psi\'> = U * |psi>.' },
    { number: 2, title: 'Norm Preservation', description: 'Verify that length of output vector remains strictly equal to 1.0.' },
    { number: 3, title: 'Inversion', description: 'To undo the gate, apply U_dagger: U_dagger * |psi\'> = |psi>.' },
  ],
  applications: [
    { title: 'Quantum Circuit Compilation (Qiskit Transpiler)', problem: 'Physical quantum computers only support 2 or 3 native microwave pulses.', solution: 'The transpiler decomposes arbitrary high-level unitary matrices into equivalent products of physical hardware basis gates.' },
  ],
  activity: {
    type: 'mcq',
    title: 'Unitary Condition Check',
    question: 'Why MUST all quantum gates be represented by Unitary matrices?',
    options: [
      { id: 'a', text: 'To conserve total probability (|alpha|² + |beta|² = 1.0) and ensure the transformation is mathematically reversible' },
      { id: 'b', text: 'Because non-unitary matrices are too heavy for quantum chips' },
      { id: 'c', text: 'To delete quantum errors' },
      { id: 'd', text: 'Because quantum computers only use integers' },
    ],
    correctAnswer: 'a',
    explanation: 'Unitary matrices preserve the inner product and vector norm, ensuring that total measurement probability remains exactly 1.0 and information is never destroyed.',
    hint: 'Think about conservation of probability and reversibility.',
  },
  pythonHandsOn: {
    title: "Exploring Single-Qubit Unitary Matrices in Qiskit",
    description: "Construct single-qubit quantum gates (X, Y, Z, H, S, T) in Qiskit and compute their exact 2x2 complex unitary matrices.",
    packages: ["qiskit", "numpy"],
    installCommand: "pip install qiskit numpy",
    imports: [
      { code: "from qiskit import QuantumCircuit", explanation: "Circuit module" },
      { code: "from qiskit.quantum_info import Operator", explanation: "Operator matrix extractor" },
      { code: "import numpy as np", explanation: "NumPy for formatting" }
    ],
    code: [
      { code: "gate_names = ['X (NOT)', 'Y', 'Z (Phase)', 'H (Hadamard)', 'S (pi/2)', 'T (pi/4)']", explanation: "List of gates" },
      { code: "print('=== Fundamental Single-Qubit Gate Matrices in Qiskit ===\\n')", explanation: "Header" },
      { code: "for name in gate_names:", explanation: "Loop gates" },
      { code: "    qc = QuantumCircuit(1)", explanation: "Create 1-qubit circuit" },
      { code: "    if 'X' in name: qc.x(0)", explanation: "Apply X" },
      { code: "    elif 'Y' in name: qc.y(0)", explanation: "Apply Y" },
      { code: "    elif 'Z' in name: qc.z(0)", explanation: "Apply Z" },
      { code: "    elif 'H' in name: qc.h(0)", explanation: "Apply H" },
      { code: "    elif 'S' in name: qc.s(0)", explanation: "Apply S" },
      { code: "    elif 'T' in name: qc.t(0)", explanation: "Apply T" },
      { code: "    matrix = Operator(qc).data", explanation: "Extract matrix" },
      { code: "    print(f'{name} Unitary Matrix:')", explanation: "Print name" },
      { code: "    print(np.round(matrix, 3))", explanation: "Print rounded matrix" },
      { code: "    print()", explanation: "Spacing" }
    ],
    executionFlow: [
      { number: 1, title: "Instantiate Circuits", description: "Create circuits applying individual single-qubit gates." },
      { number: 2, title: "Extract Unitaries", description: "Use Qiskit Operator to compute the exact 2x2 complex matrix representation." },
      { number: 3, title: "Inspect Transformations", description: "Display matrices demonstrating rotational actions on the Bloch sphere." }
    ],
    input: "Single-qubit circuits with X, Y, Z, H, S, and T gates.",
    output: "2x2 unitary matrices for each gate:\nX: [[0, 1], [1, 0]]\nZ: [[1, 0], [0, -1]]\nH: [[0.707, 0.707], [0.707, -0.707]]\nS: [[1, 0], [0, 1j]]",
    interpretation: "Every single-qubit gate corresponds to a 2x2 complex unitary matrix that preserves vector norms, rotating the state vector across the continuous Bloch sphere.",
    colabInstructions: [
      "Click 'Copy for Google Colab' to copy the complete runnable script",
      "Open Google Colab at colab.research.google.com",
      "Paste into a code cell and press Shift + Enter to run",
    ],
  },
  mcqs: [
    {
      id: 'q1',
      question: 'What is the matrix dimension of a quantum gate that acts on 2 qubits simultaneously (e.g. CNOT)?',
      options: [
        { id: 'a', text: '4 x 4 (because 2^2 = 4 basis states)' },
        { id: 'b', text: '2 x 2' },
        { id: 'c', text: '8 x 8' },
        { id: 'd', text: '2 x 4' },
      ],
      correctAnswer: 'a',
      explanation: 'A single qubit has 2 states (2x2 matrix). Two qubits have 2^2 = 4 states, requiring a 4x4 unitary matrix to transform their joint state space.',
      incorrectFeedback: 'Two qubits require a 4x4 matrix.',
    },
  ],
};

export const pauliXGate: Topic = {
  id: 'pauli-x-gate',
  moduleId: 'quantum-circuits',
  number: 4,
  title: 'The Pauli-X Gate: The Quantum NOT Gate',
  description: 'Master the fundamental bit-flip gate: matrix formulation, 180-degree rotation around the X-axis of the Bloch sphere, and code execution.',
  objectives: [
    'Define the Pauli-X matrix: [[0, 1], [1, 0]]',
    'Demonstrate bit-flip action: X|0> = |1> and X|1> = |0>',
    'Visualize the 180-degree rotation around the X-axis on the Bloch Sphere',
  ],
  story: `In classical computers, the simplest gate is the NOT gate (the inverter): 0 becomes 1, and 1 becomes 0.
  
In quantum computing, its direct analog is named after Austrian theoretical physicist Wolfgang Pauli: the **Pauli-X Gate**.
  
When you pass a qubit through an X gate:
- If it was at the North Pole ($|0\\rangle$), it flips to the South Pole ($|1\\rangle$).
- If it was at the South Pole ($|1\\rangle$), it flips to the North Pole ($|0\\rangle$).
  
On the Bloch sphere, this corresponds to spinning the entire globe 180 degrees ($\\pi$ radians) around the horizontal X-axis!`,
  motivation: `**The foundational bit-flip operator**: The X gate is the universal initialization and state-flipping tool used across virtually all quantum algorithms to prepare excited states, construct ancilla qubits, and implement conditional logic.`,
  concept: {
    simple: `The Pauli-X gate is the Quantum NOT gate:
- X flips $|0\\rangle$ into $|1\\rangle$.
- X flips $|1\\rangle$ into $|0\\rangle$.
- If you apply X twice in a row, it flips it back to where it started ($X \\cdot X = I$)!`,
    technical: `The Pauli-X operator $\\sigma_x \\in \\mathbb{C}^{2 \\times 2}$ is represented in the computational basis by the Hermitian and unitary matrix:
$$X = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$$
It acts as a bit-flip operator: $X|x\\rangle = |x \\oplus 1\\rangle$ for $x \\in \\{0, 1\\}$. Geometrically, it generates the rotation group element $R_x(\\pi) = -iX$ corresponding to a $\\pi$-radian rotation about the $\\hat{x}$ axis of the Bloch sphere.`,
  },
  keyTerms: [
    { term: 'Pauli-X Gate', simple: 'The quantum NOT gate that flips 0 to 1 and 1 to 0.', technical: 'The $\\sigma_x$ Pauli matrix operating as a bit-flip transformation with eigenvalues $+1$ and $-1$.' },
    { term: 'Eigenstates of X (|+> and |->)', simple: 'Special states that don’t flip when hit with an X gate, only changing by a plus or minus sign.', technical: 'The vectors $|+\\rangle = \\frac{|0\\rangle+|1\\rangle}{\\sqrt{2}}$ (eigenvalue $+1$) and $|-\\rangle = \\frac{|0\\rangle-|1\\rangle}{\\sqrt{2}}$ (eigenvalue $-1$).' },
  ],
  equations: [
    {
      latex: 'X = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}, \\quad X |0\\rangle = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix} \\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ 1 \\end{pmatrix} = |1\\rangle',
      explanation: 'Matrix multiplication proving that the Pauli-X matrix flips the ground state vector [1, 0]^T into the excited state vector [0, 1]^T.',
      symbols: [
        { symbol: 'X', meaning: 'Pauli-X matrix', interpretation: 'Quantum NOT gate' },
        { symbol: '|0\\rangle', meaning: 'Ground state [1, 0]^T', interpretation: 'Input' },
        { symbol: '|1\\rangle', meaning: 'Excited state [0, 1]^T', interpretation: 'Flipped output' },
      ],
      example: {
        description: 'Applying X to state |1>: X * [0, 1]^T = [1, 0]^T = |0>.',
        calculation: 'X |1\\rangle = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix} \\begin{pmatrix} 0 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix} = |0\\rangle',
        result: 'State successfully flipped from 1 to 0',
      },
    },
  ],
  howItWorks: [
    { number: 1, title: 'Input State', description: 'Ingest single qubit state alpha|0> + beta|1>.' },
    { number: 2, title: 'Swap Amplitudes', description: 'The X gate swaps the amplitudes: beta|0> + alpha|1>.' },
    { number: 3, title: 'Reversibility', description: 'Applying X a second time swaps them back to alpha|0> + beta|1>.' },
  ],
  applications: [
    { title: 'Ancilla Initialization in Grover’s Search', problem: 'Grover’s algorithm requires an auxiliary qubit initialized to the minus state |->.', solution: 'Applying X followed by H to |0> produces state |->: H(X|0>) = H|1> = |->.' },
  ],
  activity: {
    type: 'mcq',
    title: 'Pauli-X Action on Superposition',
    question: 'If you apply a Pauli-X gate to the superposition state |+> = (|0> + |1>)/sqrt(2), what is the resulting state?',
    options: [
      { id: 'a', text: 'It remains |+> (because flipping |0> to |1> and |1> to |0> leaves (|1> + |0>)/sqrt(2) which is identical!)' },
      { id: 'b', text: 'It collapses to |0>' },
      { id: 'c', text: 'It becomes |->' },
      { id: 'd', text: 'It turns to 0' },
    ],
    correctAnswer: 'a',
    explanation: 'X(|0> + |1>)/sqrt(2) = (X|0> + X|1>)/sqrt(2) = (|1> + |0>)/sqrt(2) = |+>. |+> is an eigenstate of the X operator with eigenvalue +1!',
    hint: 'Swap the 0 and 1 inside (|0> + |1>) and see what you get.',
  },
  pythonHandsOn: {
    title: "Simulating the Quantum NOT (Pauli-X) Gate in Qiskit",
    description: "Apply the Pauli-X gate to basis states |0> and |1> in Qiskit and verify bit-flip behavior with Statevector simulation.",
    packages: ["qiskit"],
    installCommand: "pip install qiskit",
    imports: [
      { code: "from qiskit import QuantumCircuit", explanation: "Circuit module" },
      { code: "from qiskit.quantum_info import Statevector", explanation: "Statevector module" }
    ],
    code: [
      { code: "# 1. Apply X to |0> -> should yield |1>", explanation: "Flip 0" },
      { code: "qc0 = QuantumCircuit(1)", explanation: "Init |0>" },
      { code: "qc0.x(0)  # Apply Pauli-X", explanation: "Apply X" },
      { code: "sv0 = Statevector.from_instruction(qc0)", explanation: "Simulate" },
      { code: "print('Input |0> -> After X gate:', sv0.data.round(2))", explanation: "Result |1>" },
      { code: "print('Probabilities:', sv0.probabilities_dict())", explanation: "{'1': 1.0}" },
      { code: "", explanation: "" },
      { code: "# 2. Apply X to |1> -> should yield |0>", explanation: "Flip 1" },
      { code: "qc1 = QuantumCircuit(1)", explanation: "Init |0>" },
      { code: "qc1.x(0)  # Make |1>", explanation: "Flip to 1" },
      { code: "qc1.x(0)  # Apply X again", explanation: "Flip back to 0" },
      { code: "sv1 = Statevector.from_instruction(qc1)", explanation: "Simulate" },
      { code: "print('\\nInput |1> -> After X gate:', sv1.data.round(2))", explanation: "Result |0>" },
      { code: "print('Probabilities:', sv1.probabilities_dict())", explanation: "{'0': 1.0}" },
      { code: "print('\\nProves: X * X = I (Pauli-X is self-inverse)')", explanation: "Self-inverse" }
    ],
    executionFlow: [
      { number: 1, title: "Apply X to |0>", description: "Verify that state |0> rotates 180 degrees around X-axis into state |1>." },
      { number: 2, title: "Apply X to |1>", description: "Verify that applying X again restores state |0>." },
      { number: 3, title: "Self-Inverse Check", description: "Confirm that X^2 = Identity." }
    ],
    input: "QuantumCircuit(1) with X and X^2 operations.",
    output: "Input |0> -> After X: [0.0, 1.0] -> P(1) = 100%\nInput |1> -> After X: [1.0, 0.0] -> P(0) = 100%\nX * X = I",
    interpretation: "The Pauli-X gate acts as the quantum equivalent of the classical NOT gate, rotating states by pi radians around the X-axis of the Bloch sphere.",
    colabInstructions: [
      "Click 'Copy for Google Colab' to copy the complete runnable script",
      "Open Google Colab at colab.research.google.com",
      "Paste into a code cell and press Shift + Enter to run",
    ],
  },
  mcqs: [
    {
      id: 'q1',
      question: 'Geometrically on the Bloch Sphere, what physical rotation does the Pauli-X gate execute?',
      options: [
        { id: 'a', text: 'A 180-degree (pi radian) rotation around the X-axis' },
        { id: 'b', text: 'A 90-degree rotation around the Z-axis' },
        { id: 'c', text: 'It collapses the sphere to a flat sheet' },
        { id: 'd', text: 'A 360-degree rotation around the Y-axis' },
      ],
      correctAnswer: 'a',
      explanation: 'The Pauli-X gate corresponds to a pi-radian (180 degree) rotation around the x-axis, taking the North Pole (|0>) directly to the South Pole (|1>).',
      incorrectFeedback: 'Pauli-X executes a 180-degree rotation about the x-axis.',
    },
  ],
};

export const pauliYGate: Topic = {
  id: 'pauli-y-gate',
  moduleId: 'quantum-circuits',
  number: 5,
  title: 'The Pauli-Y Gate: Bit and Phase Flip with Complex Numbers',
  description: 'Master the second Pauli matrix: simultaneous bit-flip and phase-flip using imaginary units ($i$).',
  objectives: [
    'Define the Pauli-Y matrix: [[0, -i], [i, 0]]',
    'Demonstrate simultaneous bit-flip and phase-flip: Y|0> = i|1> and Y|1> = -i|0>',
    'Visualize 180-degree rotation around the Y-axis of the Bloch sphere',
  ],
  story: `Wolfgang Pauli wasn't satisfied with just the X gate. In 1927, to describe the three-dimensional spin of electrons in magnetic fields, he introduced a triplet of $2 \\times 2$ matrices: $\\sigma_x$, $\\sigma_y$, and $\\sigma_z$.
  
While the X gate is purely real, the **Pauli-Y Gate** plunges directly into the complex plane:
$$Y = \\begin{pmatrix} 0 & -i \\\\ i & 0 \\end{pmatrix}$$
  
It does something remarkable: it performs a **bit-flip** (turning 0 into 1 and 1 into 0) AND adds a **90-degree phase shift** ($i$ and $-i$) simultaneously!
  
On the Bloch sphere, it rotates the qubit 180 degrees around the Y-axis, connecting the real equator with the imaginary equator.`,
  motivation: `**The complete basis of quantum errors**: Any physical error that can happen to a qubit in the real world can be mathematically decomposed into a combination of Pauli-X (bit flip), Pauli-Z (phase flip), and Pauli-Y (both simultaneously).`,
  concept: {
    simple: `The Pauli-Y gate is a double agent:
- It flips the bit (0 becomes 1, 1 becomes 0)
- AND it twists the phase into the imaginary world by multiplying by $i$ (the square root of -1)!
On the 3D globe, it spins the ball 180 degrees around the Y-axis.`,
    technical: `The Pauli-Y matrix $\\sigma_y \\in \\mathbb{C}^{2 \\times 2}$ is Hermitian ($Y = Y^\\dagger$) and unitary ($Y^2 = I$):
$$Y = \\begin{pmatrix} 0 & -i \\\\ i & 0 \\end{pmatrix} = i X Z$$
It acts on computational basis states as $Y|0\\rangle = i|1\\rangle$ and $Y|1\\rangle = -i|0\\rangle$. Its eigenstates are $|+i\\rangle = \\frac{|0\\rangle + i|1\\rangle}{\\sqrt{2}}$ and $|-i\\rangle = \\frac{|0\\rangle - i|1\\rangle}{\\sqrt{2}}$ with eigenvalues $+1$ and $-1$.`,
  },
  keyTerms: [
    { term: 'Pauli-Y Gate', simple: 'The gate that flips the bit and adds an imaginary phase (i).', technical: 'The $\\sigma_y$ operator generating $\\pi$-rotations about the $\\hat{y}$-axis of the Bloch sphere.' },
    { term: 'Imaginary Unit ($i$)', simple: 'The mathematical number defined as the square root of -1 ($i^2 = -1$).', technical: 'The fundamental imaginary unit enabling complex phase rotations in Hilbert space.' },
  ],
  equations: [
    {
      latex: 'Y = \\begin{pmatrix} 0 & -i \\\\ i & 0 \\end{pmatrix}, \\quad Y |0\\rangle = \\begin{pmatrix} 0 & -i \\\\ i & 0 \\end{pmatrix} \\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ i \\end{pmatrix} = i|1\\rangle',
      explanation: 'Matrix multiplication demonstrating that applying Pauli-Y to ground state |0> outputs excited state |1> scaled by complex phase i.',
      symbols: [
        { symbol: 'Y', meaning: 'Pauli-Y matrix', interpretation: 'Combined bit and phase flip' },
        { symbol: 'i', meaning: 'Imaginary unit', interpretation: '90-degree phase shift' },
      ],
      example: {
        description: 'Applying Y to state |1>: Y * [0, 1]^T = [-i, 0]^T = -i|0>.',
        calculation: 'Y |1\\rangle = \\begin{pmatrix} 0 & -i \\\\ i & 0 \\end{pmatrix} \\begin{pmatrix} 0 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} -i \\\\ 0 \\end{pmatrix} = -i |0\\rangle',
        result: 'State flipped to |0> with negative imaginary phase -i',
      },
    },
  ],
  howItWorks: [
    { number: 1, title: 'Complex Product', description: 'Multiply state by [[0, -i], [i, 0]].' },
    { number: 2, title: 'Phase Attachment', description: 'Assigns phase factor +i to component |1> and -i to component |0>.' },
    { number: 3, title: 'Bloch Rotation', description: 'Rotates Bloch vector 180 degrees around Y-axis.' },
  ],
  applications: [
    { title: 'Quantum Error Correction Syndrome Extraction', problem: 'Detecting combined bit-flip and phase-flip noise in quantum memory.', solution: 'Surface code stabilizer circuits measure Pauli-Y syndrome operators to identify compound errors.' },
  ],
  activity: {
    type: 'mcq',
    title: 'Pauli-Y Probability Check',
    question: 'When Y is applied to |0>, the resulting state is i|1>. What is the probability of measuring outcome 1?',
    options: [
      { id: 'a', text: '100% (|i|² = 1.0)' },
      { id: 'b', text: '-100%' },
      { id: 'c', text: '50%' },
      { id: 'd', text: '0%' },
    ],
    correctAnswer: 'a',
    explanation: 'By the Born rule, the probability is the modulus squared of the amplitude: |i|^2 = (0)^2 + (1)^2 = 1.0 = 100%. The phase i does not change the measurement probability.',
    hint: 'Remember that |i|² = 1.',
  },
  pythonHandsOn: {
    title: "Simulating the Pauli-Y Gate & Complex Phases in Qiskit",
    description: "Apply the Pauli-Y gate to analyze simultaneous bit-flips and imaginary phase rotations (+i and -i) in Qiskit.",
    packages: ["qiskit"],
    installCommand: "pip install qiskit",
    imports: [
      { code: "from qiskit import QuantumCircuit", explanation: "Circuit constructor" },
      { code: "from qiskit.quantum_info import Statevector", explanation: "Statevector simulator" }
    ],
    code: [
      { code: "# Pauli-Y matrix: [[0, -i], [i, 0]]", explanation: "Pauli Y definition" },
      { code: "# Y|0> = i|1>,  Y|1> = -i|0>", explanation: "Mathematical behavior" },
      { code: "qc = QuantumCircuit(1)", explanation: "Single qubit in |0>" },
      { code: "qc.y(0)", explanation: "Apply Pauli-Y gate" },
      { code: "sv = Statevector.from_instruction(qc)", explanation: "Extract statevector" },
      { code: "print('Input |0> after Pauli-Y gate:')", explanation: "Label" },
      { code: "print('  Amplitudes:', sv.data)", explanation: "Complex amplitudes" },
      { code: "print(f'  |0> amplitude: {sv.data[0]}')", explanation: "Amplitude 0" },
      { code: "print(f'  |1> amplitude: {sv.data[1]} (Imaginary unit i!)')", explanation: "Amplitude 1 = 1j" },
      { code: "print('  Measurement probabilities:', sv.probabilities_dict())", explanation: "100% chance of |1> upon measurement" }
    ],
    executionFlow: [
      { number: 1, title: "Apply Pauli-Y", description: "Rotate state |0> by pi radians around the Y-axis." },
      { number: 2, title: "Extract Complex Amplitudes", description: "Observe that the state transforms to i|1>." },
      { number: 3, title: "Measure Probabilities", description: "Observe that while the phase is imaginary (i), measurement probability is |i|^2 = 1.0." }
    ],
    input: "QuantumCircuit(1) with Y(0).",
    output: "Amplitudes: [0.0 + 0.0j, 0.0 + 1.0j]\n|1> amplitude = 1j\nMeasurement probabilities: {'1': 1.0}",
    interpretation: "Pauli-Y combines a bit-flip with a quarter-turn complex phase shift of +i. Because |i|^2 = 1, it measures as 1 with certainty but carries an imaginary relative phase.",
    colabInstructions: [
      "Click 'Copy for Google Colab' to copy the complete runnable script",
      "Open Google Colab at colab.research.google.com",
      "Paste into a code cell and press Shift + Enter to run",
    ],
  },
  mcqs: [
    {
      id: 'q1',
      question: 'What is the mathematical relationship between the three Pauli matrices X, Y, and Z?',
      options: [
        { id: 'a', text: 'Y = i * X * Z (up to global phase, Y is the product of a bit flip and a phase flip)' },
        { id: 'b', text: 'Y = X + Z' },
        { id: 'c', text: 'Y = X / Z' },
        { id: 'd', text: 'They are completely unrelated' },
      ],
      correctAnswer: 'a',
      explanation: 'The Pauli matrices satisfy the algebraic Lie algebra relation: i*X*Z = i*(-i*Y) = Y. A Pauli-Y error is simply a simultaneous bit-flip and phase-flip.',
      incorrectFeedback: 'Y is proportional to the matrix product of X and Z.',
    },
  ],
};

export const pauliZGate: Topic = {
  id: 'pauli-z-gate',
  moduleId: 'quantum-circuits',
  number: 6,
  title: 'The Pauli-Z Gate: The Phase-Flip Operator',
  description: 'Master the phase-flip gate: leaving |0> unchanged while multiplying |1> by -1, rotating 180 degrees around the Z-axis.',
  objectives: [
    'Define the Pauli-Z matrix: [[1, 0], [0, -1]]',
    'Understand the Phase Flip: Z|0> = |0> and Z|1> = -|1>',
    'Examine how phase flips convert |+> to |-> without altering measurement probabilities in the Z-basis',
  ],
  story: `Suppose you have a light bulb in a dark room.
  
If you flip the switch (an X gate), the light turns ON or OFF. Everyone in the room can see the change immediately.
  
Now imagine a magical quantum switch called the **Pauli-Z Gate**.
- If the bulb is OFF ($|0\\rangle$), it does nothing ($Z|0\\rangle = |0\\rangle$).
- If the bulb is ON ($|1\\rangle$), it keeps the light ON, but subtly changes its invisible quantum phase by 180 degrees ($Z|1\\rangle = -|1\\rangle$)!
  
If you look at the bulb with your naked eye (measuring in the classical Z-basis), you notice absolutely nothing! It still looks 100% ON ($|-1|^2 = 1.0$).
  
The phase change is completely invisible to classical eyes—until you collide it with another wave in a quantum interference circuit!`,
  motivation: `**The secret weapon of quantum algorithms**: In Grover’s search, Shor’s algorithm, and Quantum Fourier Transforms, the computer never flips bits directly; it marks answers by flipping their **phase** using Z gates.`,
  concept: {
    simple: `The Pauli-Z gate is a Phase-Flip:
- It leaves $|0\\rangle$ completely untouched.
- It attaches a minus sign ($-1$) to $|1\\rangle$.
- It turns $|+\\rangle$ into $|-\\rangle$!
On the Bloch sphere globe, it spins the earth 180 degrees around the North-South axis (the Z-axis).`,
    technical: `The Pauli-Z operator $\\sigma_z \\in \\mathbb{C}^{2 \\times 2}$ is represented in the computational basis by the diagonal matrix:
$$Z = \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}$$
It acts as $Z|x\\rangle = (-1)^x |x\\rangle$. It leaves the computational basis states invariant up to eigenvalue ($Z|0\\rangle = +1|0\\rangle, Z|1\\rangle = -1|1\\rangle$), but maps transverse states $Z|+\\rangle = |-\\rangle$ and $Z|-\\rangle = |+\\rangle$.`,
  },
  keyTerms: [
    { term: 'Pauli-Z Gate (Phase Flip)', simple: 'Leaves 0 alone, but puts a minus sign on 1.', technical: 'The diagonal $\\sigma_z$ operator introducing a relative phase shift of $\\pi$ radians between computational basis states.' },
    { term: 'Phase Invariant', simple: 'A state whose probability of measuring 0 and 1 doesn’t change after applying a phase gate.', technical: 'An observable property where diagonal basis projections $|\\langle z | \\psi \\rangle|^2$ remain invariant under $Z$.' },
  ],
  equations: [
    {
      latex: 'Z = \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}, \\quad Z |+\\rangle = Z\\left(\\frac{|0\\rangle + |1\\rangle}{\\sqrt{2}}\\right) = \\frac{|0\\rangle - |1\\rangle}{\\sqrt{2}} = |-\\rangle',
      explanation: 'Applying the Pauli-Z gate to the superposition state |+>: flips the relative plus sign into a minus sign, converting |+> into |->.',
      symbols: [
        { symbol: 'Z', meaning: 'Pauli-Z matrix', interpretation: 'Phase inverter' },
        { symbol: '|+\\rangle', meaning: 'Plus superposition', interpretation: 'Input' },
        { symbol: '|-\\rangle', meaning: 'Minus superposition', interpretation: 'Output with flipped phase' },
      ],
      example: {
        description: 'Measuring |+> in Z-basis gives 50% 0 and 50% 1. After applying Z to get |->, measuring in Z-basis STILL gives 50% 0 and 50% 1.',
        calculation: 'P(0)_{|+\\rangle} = |1/\\sqrt{2}|^2 = 0.5, \\quad P(0)_{|-\\rangle} = |1/\\sqrt{2}|^2 = 0.5',
        result: 'Probabilities in Z-basis are unchanged; phase is flipped',
      },
    },
  ],
  howItWorks: [
    { number: 1, title: 'Diagonal Action', description: 'Leaves |0> amplitude unchanged (multiplies by +1).' },
    { number: 2, title: 'Phase Inversion', description: 'Multiplies |1> amplitude by -1.' },
    { number: 3, title: 'Z-Axis Rotation', description: 'Rotates equator coordinates by 180 degrees around vertical Z-axis.' },
  ],
  applications: [
    { title: 'The Oracle in Grover’s Algorithm', problem: 'Marking the winning item in an unsorted database without destroying the superposition.', solution: 'The Grover Oracle applies a controlled-Z gate that flips the phase of the winning solution to negative: -|winner>.' },
  ],
  activity: {
    type: 'mcq',
    title: 'Phase Flip Detection',
    question: 'If you have a qubit in state |1>, and you apply a Pauli-Z gate, what is the resulting state vector?',
    options: [
      { id: 'a', text: '-|1> (or [0, -1]^T)' },
      { id: 'b', text: '|0>' },
      { id: 'c', text: '0' },
      { id: 'd', text: '|1>' },
    ],
    correctAnswer: 'a',
    explanation: 'Z|1> = -1 * |1> = -|1>. In column vector form: [[1, 0], [0, -1]] * [0, 1]^T = [0, -1]^T.',
    hint: 'Z multiplies the |1> component by -1.',
  },
  pythonHandsOn: {
    title: "Simulating the Pauli-Z Phase-Flip Gate in Qiskit",
    description: "Demonstrate the quantum phase-flip gate: show that Z leaves |0> unaffected while flipping the relative phase of |1> to -|1>.",
    packages: ["qiskit"],
    installCommand: "pip install qiskit",
    imports: [
      { code: "from qiskit import QuantumCircuit", explanation: "Circuit module" },
      { code: "from qiskit.quantum_info import Statevector", explanation: "Statevector module" }
    ],
    code: [
      { code: "# 1. Action on Basis States: Z|0> = |0>, Z|1> = -|1>", explanation: "Basis action" },
      { code: "qc_basis = QuantumCircuit(1)", explanation: "Init |0>" },
      { code: "qc_basis.z(0)  # Z on |0>", explanation: "Apply Z to 0" },
      { code: "print('Z on |0> -> Leaves state unchanged:', Statevector.from_instruction(qc_basis).data.round(2))", explanation: "Result [1, 0]" },
      { code: "", explanation: "" },
      { code: "# 2. Action on Superposition: Z|+> = |->", explanation: "Superposition action" },
      { code: "qc_super = QuantumCircuit(1)", explanation: "Init qubit" },
      { code: "qc_super.h(0)  # Create |+> = (|0> + |1>)/sqrt(2)", explanation: "Put in |+>" },
      { code: "print('Before Z (State |+>):', Statevector.from_instruction(qc_super).data.round(3))", explanation: "[0.707, 0.707]" },
      { code: "qc_super.z(0)  # Apply Z -> transforms to |-> = (|0> - |1>)/sqrt(2)", explanation: "Apply Z" },
      { code: "sv_minus = Statevector.from_instruction(qc_super)", explanation: "Extract state" },
      { code: "print('After Z  (State |->):', sv_minus.data.round(3))", explanation: "[0.707, -0.707]" },
      { code: "print('Notice: Probabilities for both |+> and |-> are 50/50, but relative phase is flipped!')", explanation: "Phase insight" }
    ],
    executionFlow: [
      { number: 1, title: "Apply Z to |0>", description: "Verify that basis state |0> is an eigenstate with eigenvalue +1." },
      { number: 2, title: "Apply Z to |+>", description: "Verify that relative phase flips, transforming |+> into |-> with eigenvalue -1 on the |1> component." },
      { number: 3, title: "Compare Probabilities", description: "Observe that measurement probabilities remain 50/50, demonstrating phase sensitivity." }
    ],
    input: "Quantum circuits applying Z to |0> and |+>.",
    output: "Z on |0> -> [1.0, 0.0]\nBefore Z (|+>): [0.707, 0.707]\nAfter Z (|->): [0.707, -0.707]",
    interpretation: "The Pauli-Z gate has no classical equivalent: it leaves classical probabilities unchanged while altering the relative quantum phase that drives wave interference in quantum algorithms.",
    colabInstructions: [
      "Click 'Copy for Google Colab' to copy the complete runnable script",
      "Open Google Colab at colab.research.google.com",
      "Paste into a code cell and press Shift + Enter to run",
    ],
  },
  mcqs: [
    {
      id: 'q1',
      question: 'Which of the following describes the difference between a Pauli-X gate and a Pauli-Z gate?',
      options: [
        { id: 'a', text: 'X is a bit-flip gate (swapping 0 and 1); Z is a phase-flip gate (leaving 0 unchanged and multiplying 1 by -1)' },
        { id: 'b', text: 'X is classical, Z is quantum' },
        { id: 'c', text: 'Z requires 2 qubits, X requires 1' },
        { id: 'd', text: 'X is faster than Z' },
      ],
      correctAnswer: 'a',
      explanation: 'X is the bit-flip operator (swapping computational basis amplitudes), while Z is the phase-flip operator (inverting the relative phase of the excited state).',
      incorrectFeedback: 'X flips bits; Z flips phase.',
    },
  ],
};

export const hadamardGate: Topic = {
  id: 'hadamard-gate',
  moduleId: 'quantum-circuits',
  number: 7,
  title: 'The Hadamard Gate: The Superposition Generator',
  description: 'Master the most important single-qubit gate in quantum computing: creating equal superpositions and switching between computational and diagonal bases.',
  objectives: [
    'Define the Hadamard matrix: (1/sqrt(2)) * [[1, 1], [1, -1]]',
    'Demonstrate superposition generation: H|0> = |+> and H|1> = |->',
    'Visualize Hadamard as a 180-degree rotation around the diagonal (X+Z) axis',
    'Understand basis switching: measuring in the X-basis via H followed by Z-measurement',
  ],
  story: `French mathematician Jacques Hadamard had no idea his 1893 matrix would become the beating heart of quantum computers a century later.
  
If you look at modern quantum circuits, almost every single one begins with a vertical column of **H** gates.
  
Why? Because every quantum algorithm needs to explore multiple paths. When you start your computer, all your qubits are sleeping in the boring, classical state $|00\\dots0\\rangle$.
  
A single flash of the **Hadamard Gate** strikes every qubit like a tuning fork, kicking them into an equal, shimmering superposition of all possible states simultaneously. The Hadamard gate is the portal connecting the classical world to the quantum multiverse.`,
  motivation: `**The universal workhorse**: The Hadamard gate is the most frequently executed gate in quantum computing. It creates superposition, enables basis transformation, and serves as the core of quantum Fourier transforms.`,
  concept: {
    simple: `The Hadamard gate is the coin spinner:
- If you give it $|0\\rangle$, it starts spinning: $|+\\rangle = (|0\\rangle + |1\\rangle)/\\sqrt{2}$.
- If you give it $|1\\rangle$, it spins with a negative twist: $|-\\rangle = (|0\\rangle - |1\\rangle)/\\sqrt{2}$.
- If you apply it a second time to the spinning coin, it catches it and stops it back to where it began ($H \\cdot H = I$)!`,
    technical: `The Hadamard gate $H \\in U(2)$ is a Hermitian and unitary operator:
$$H = \\frac{1}{\\sqrt{2}} \\begin{pmatrix} 1 & 1 \\\\ 1 & -1 \\end{pmatrix} = \\frac{X + Z}{\\sqrt{2}}$$
It maps between the computational $Z$-basis $\\{|0\\rangle, |1\\rangle\\}$ and the transversal $X$-basis $\\{|+\\rangle, |-\\rangle\\}$: $H|0\\rangle = |+\\rangle, H|1\\rangle = |-\\rangle, H|+\\rangle = |0\\rangle, H|-\\rangle = |1\\rangle$. Geometrically on the Bloch sphere, it represents a $\\pi$-rotation around the diagonal axis $\\frac{\\hat{x} + \\hat{z}}{\\sqrt{2}}$.`,
  },
  keyTerms: [
    { term: 'Hadamard Gate (H)', simple: 'The gate that creates equal superposition (50/50 chance of 0 or 1).', technical: 'Unitary operator mapping $Z$-basis to $X$-basis with matrix representation $\\frac{1}{\\sqrt{2}}[[1, 1], [1, -1]]$.' },
    { term: 'Basis Transformation', simple: 'Changing your measuring perspective from North/South to East/West.', technical: 'Unitary transformation rotating state space to diagonalize non-computational observables.' },
  ],
  equations: [
    {
      latex: 'H = \\frac{1}{\\sqrt{2}} \\begin{pmatrix} 1 & 1 \\\\ 1 & -1 \\end{pmatrix}, \\quad H^{\\otimes n} |0\\rangle^{\\otimes n} = \\frac{1}{\\sqrt{2^n}} \\sum_{x=0}^{2^n-1} |x\\rangle',
      explanation: 'Applying Hadamard across n qubits creates a uniform superposition of all 2^n integers with equal amplitude 1/sqrt(2^n).',
      symbols: [
        { symbol: 'H^{\\otimes n}', meaning: 'Hadamard applied to all n qubits', interpretation: 'Parallel superposition transform' },
        { symbol: '1/\\sqrt{2^n}', meaning: 'Uniform amplitude', interpretation: 'Each state has probability 1/2^n' },
      ],
      example: {
        description: 'Applying H to 2 qubits: H(x)H on |00> creates (1/2)(|00> + |01> + |10> + |11>).',
        calculation: 'P(00) = |1/2|^2 = 1/4 = 25\\%',
        result: 'All 4 binary combinations held with 25% equal probability',
      },
    },
  ],
  howItWorks: [
    { number: 1, title: 'Input Basis', description: 'Receives deterministic computational basis state |0> or |1>.' },
    { number: 2, title: 'Equator Rotation', description: 'Rotates vector 180 degrees around diagonal (X+Z) axis onto the Bloch equator.' },
    { number: 3, title: 'Self-Inverse Property', description: 'Because H = H_dagger = H^-1, applying H twice restores original state: H(H|psi>) = |psi>.' },
  ],
  applications: [
    { title: 'Bernstein-Vazirani & Deutsch-Jozsa Algorithms', problem: 'Finding a hidden N-bit binary string in a single black-box query.', solution: 'Sandwiching an oracle between layers of Hadamard gates leverages constructive interference to extract the string in $O(1)$ query.' },
  ],
  activity: {
    type: 'mcq',
    title: 'Hadamard Self-Inverse Check',
    question: 'What happens if you apply a Hadamard gate to a qubit, and then immediately apply another Hadamard gate to the same qubit (H followed by H)?',
    options: [
      { id: 'a', text: 'It returns to the exact starting state (H * H = Identity matrix I)' },
      { id: 'b', text: 'It collapses into random noise' },
      { id: 'c', text: 'It flips the bit like an X gate' },
      { id: 'd', text: 'It causes a permanent decoherence error' },
    ],
    correctAnswer: 'a',
    explanation: 'The Hadamard gate is its own inverse (Hermitian and unitary: H = H_dagger = H^-1). Therefore, H * H = I (the identity operator), restoring the original state.',
    hint: 'Calculate H multiplied by H.',
  },
  pythonHandsOn: {
    title: "Creating Equal Superposition with the Hadamard Gate in Qiskit",
    description: "Construct the fundamental building block of quantum parallelism: apply the Hadamard gate and verify the basis transformation.",
    packages: ["qiskit"],
    installCommand: "pip install qiskit",
    imports: [
      { code: "from qiskit import QuantumCircuit", explanation: "Circuit module" },
      { code: "from qiskit.quantum_info import Statevector", explanation: "Statevector module" }
    ],
    code: [
      { code: "# 1. Apply H to |0> -> creates |+> = (|0> + |1>)/sqrt(2)", explanation: "H on 0" },
      { code: "qc0 = QuantumCircuit(1)", explanation: "1 qubit" },
      { code: "qc0.h(0)", explanation: "Apply H" },
      { code: "sv0 = Statevector.from_instruction(qc0)", explanation: "Statevector" },
      { code: "print('H on |0> -> State |+>:', sv0.data.round(4))", explanation: "Amplitudes [0.7071, 0.7071]" },
      { code: "print('Probabilities:', sv0.probabilities_dict())", explanation: "{'0': 0.5, '1': 0.5}" },
      { code: "", explanation: "" },
      { code: "# 2. Apply H to |1> -> creates |-> = (|0> - |1>)/sqrt(2)", explanation: "H on 1" },
      { code: "qc1 = QuantumCircuit(1)", explanation: "1 qubit" },
      { code: "qc1.x(0)  # Make |1>", explanation: "Flip to 1" },
      { code: "qc1.h(0)  # Apply H", explanation: "Apply H to 1" },
      { code: "sv1 = Statevector.from_instruction(qc1)", explanation: "Statevector" },
      { code: "print('\\nH on |1> -> State |->:', sv1.data.round(4))", explanation: "Amplitudes [0.7071, -0.7071]" },
      { code: "print('Probabilities:', sv1.probabilities_dict())", explanation: "{'0': 0.5, '1': 0.5}" },
      { code: "print('\\nNotice: Both have 50% probability, but |-> carries a negative phase!')", explanation: "Phase note" }
    ],
    executionFlow: [
      { number: 1, title: "Hadamard on |0>", description: "Transforms Z-basis |0> into X-basis state |+>." },
      { number: 2, title: "Hadamard on |1>", description: "Transforms Z-basis |1> into X-basis state |->." },
      { number: 3, title: "Phase Verification", description: "Demonstrates equal 50% probabilities with opposite relative phases." }
    ],
    input: "QuantumCircuit(1) with H applied to |0> and |1>.",
    output: "H on |0>: [0.7071, 0.7071] -> P(0)=0.5, P(1)=0.5\nH on |1>: [0.7071, -0.7071] -> P(0)=0.5, P(1)=0.5",
    interpretation: "The Hadamard gate acts as a 50/50 beam splitter, rotating the computational Z-basis into the superposition X-basis. It is the first gate in nearly every quantum algorithm.",
    colabInstructions: [
      "Click 'Copy for Google Colab' to copy the complete runnable script",
      "Open Google Colab at colab.research.google.com",
      "Paste into a code cell and press Shift + Enter to run",
    ],
  },
  mcqs: [
    {
      id: 'q1',
      question: 'Which state is produced when a Hadamard gate is applied to state |1>?',
      options: [
        { id: 'a', text: '|-> = (|0> - |1>) / sqrt(2)' },
        { id: 'b', text: '|+> = (|0> + |1>) / sqrt(2)' },
        { id: 'c', text: '|0>' },
        { id: 'd', text: '-|1>' },
      ],
      correctAnswer: 'a',
      explanation: 'H|1> = (1/sqrt(2)) * [1(0) + 1(1), 1(0) - 1(1)] = (|0> - |1>)/sqrt(2) = |->. The relative minus sign represents a 180-degree phase shift.',
      incorrectFeedback: 'H applied to |0> produces |+>; H applied to |1> produces |->.',
    },
  ],
};

export const controlledGates: Topic = {
  id: 'controlled-gates',
  moduleId: 'quantum-circuits',
  number: 8,
  title: 'Controlled Gates: The If-Then Logic of Quantum Circuits',
  description: 'Understand conditional quantum logic: Controlled-NOT (CNOT), Controlled-Z (CZ), Controlled-Phase (CPHASE), and multi-qubit gates.',
  objectives: [
    'Define the Controlled-U operation: |0><0| ⊗ I + |1><1| ⊗ U',
    'Understand control and target qubits in circuit diagrams',
    'Examine Controlled-Z (CZ) symmetry and phase kickback',
  ],
  story: `In classical programming, the most fundamental conditional statement is the **if-statement**:
\`\`\`python
if condition == True:
    do_action()
\`\`\`
How do we do an "if-statement" in a quantum circuit without collapsing the quantum superposition?
  
We use **Controlled Gates**!
  
In a controlled gate, we connect two qubits:
1. The **Control Qubit** (marked with a solid black dot •).
2. The **Target Qubit** (marked with the gate box U).
  
If the control qubit is in state $|0\\rangle$, the target qubit is left completely untouched.
If the control qubit is in state $|1\\rangle$, the gate $U$ is applied to the target qubit.
  
And what if the control qubit is in a **superposition of both 0 and 1**?
Then the target qubit becomes **entangled** with the control qubit!`,
  motivation: `**The engine of quantum correlation**: Single-qubit gates can only rotate individual qubits. Controlled gates allow qubits to interact, communicate, and entangle, unlocking exponential computational spaces.`,
  concept: {
    simple: `Controlled gates are quantum IF statements:
- "IF the top qubit is 1, THEN do this move to the bottom qubit!"
- "IF the top qubit is 0, do nothing!"
Because the top qubit can be BOTH 0 and 1 at the same time, it does BOTH at the same time, creating spooky quantum entanglement!`,
    technical: `A Controlled-U gate on a bipartite system $\\mathcal{H}_c \\otimes \\mathcal{H}_t$ implements the block-diagonal unitary:
$$C(U) = |0\\rangle\\langle 0| \\otimes I + |1\\rangle\\langle 1| \\otimes U = \\begin{pmatrix} I & 0 \\\\ 0 & U \\end{pmatrix}$$
If the control is in superposition $\\alpha|0\\rangle + \\beta|1\\rangle$, the output state is $\\alpha|0\\rangle|\\psi\\rangle + \\beta|1\\rangle U|\\psi\\rangle$, synthesizing non-separable entangled states. In Controlled-Phase gates (CZ), $CZ = |00\\rangle\\langle 00| + |01\\rangle\\langle 01| + |10\\rangle\\langle 10| - |11\\rangle\\langle 11|$, demonstrating symmetric control-target equivalence.`,
  },
  keyTerms: [
    { term: 'Control Qubit', simple: 'The qubit whose state decides whether the gate fires.', technical: 'The conditioning register in a bipartite controlled unitary operation.' },
    { term: 'Target Qubit', simple: 'The qubit that gets transformed if the control qubit is active.', technical: 'The register to which unitary operator $U$ is applied conditioned on control subspace projection.' },
    { term: 'Phase Kickback', simple: 'When an operation on the target qubit bounces backwards and changes the phase of the control qubit!', technical: 'Quantum phenomenon where eigenvalues of an operator acting on the target qubit are transferred to the phase of the control qubit.' },
  ],
  equations: [
    {
      latex: 'C(U) = \\begin{pmatrix} 1 & 0 & 0 & 0 \\\\ 0 & 1 & 0 & 0 \\\\ 0 & 0 & u_{00} & u_{01} \\\\ 0 & 0 & u_{10} & u_{11} \\end{pmatrix}',
      explanation: 'General 4x4 matrix representation of a Controlled-U gate: the upper 2x2 block is the identity matrix I (active when control=0); the lower 2x2 block is the gate U (active when control=1).',
      symbols: [
        { symbol: 'C(U)', meaning: 'Controlled-U matrix', interpretation: 'Conditional 2-qubit gate' },
        { symbol: 'u_{ij}', meaning: 'Elements of gate U', interpretation: 'Target transformation' },
      ],
      example: {
        description: 'Controlled-Z (CZ) gate where U = Z = [[1, 0], [0, -1]]. Only state |11> receives a minus sign.',
        calculation: 'CZ = \\text{diag}(1, 1, 1, -1)',
        result: 'Flips phase only when BOTH qubits are 1',
      },
    },
  ],
  howItWorks: [
    { number: 1, title: 'Subspace Projection', description: 'Decomposes state into control=|0> and control=|1> subspaces.' },
    { number: 2, title: 'Conditional Evolution', description: 'Leaves control=|0> branch untouched; applies U to control=|1> branch.' },
    { number: 3, title: 'Entanglement Emergence', description: 'Generates non-local correlations if control was in superposition.' },
  ],
  applications: [
    { title: 'Quantum Phase Estimation (QPE)', problem: 'Estimating the eigenvalues and phase of a unitary operator with high precision.', solution: 'Uses a cascade of Controlled-U^(2^j) gates to kick eigenvalues back into a measurement register.' },
  ],
  activity: {
    type: 'mcq',
    title: 'Controlled-Z Symmetry Check',
    question: 'The Controlled-Z (CZ) gate has matrix diag(1, 1, 1, -1). If you swap the control qubit and the target qubit, does the operation change?',
    options: [
      { id: 'a', text: 'No, the CZ gate is mathematically symmetric; either qubit can be viewed as the control or target' },
      { id: 'b', text: 'Yes, it reverses the circuit' },
      { id: 'c', text: 'Yes, it turns into an X gate' },
      { id: 'd', text: 'It causes an error' },
    ],
    correctAnswer: 'a',
    explanation: 'Because CZ only applies a phase flip (-1) when both qubits are 1 (|11>), it is completely symmetric with respect to qubit interchange: CZ_12 = CZ_21.',
    hint: 'Notice that only |11> has a minus sign.',
  },
  pythonHandsOn: {
    title: "Simulating Controlled-Z (CZ) and Phase Kickback in Qiskit",
    description: "Construct multi-qubit controlled gates in Qiskit and demonstrate controlled phase kickback and symmetry.",
    packages: ["qiskit"],
    installCommand: "pip install qiskit",
    imports: [
      { code: "from qiskit import QuantumCircuit", explanation: "Circuit constructor" },
      { code: "from qiskit.quantum_info import Statevector", explanation: "Statevector analysis" }
    ],
    code: [
      { code: "# Controlled-Z applies a -1 phase ONLY when BOTH qubits are in state |1>", explanation: "CZ explanation" },
      { code: "qc = QuantumCircuit(2)", explanation: "2 qubits" },
      { code: "qc.h([0, 1])  # Put both qubits into superposition |+>|+>", explanation: "Equal superposition" },
      { code: "print('State before CZ (|++>):', Statevector.from_instruction(qc).data.round(2))", explanation: "Before CZ [0.5, 0.5, 0.5, 0.5]" },
      { code: "qc.cz(0, 1)   # Apply Controlled-Z", explanation: "Apply CZ gate" },
      { code: "sv_after = Statevector.from_instruction(qc)", explanation: "Extract statevector" },
      { code: "print('State after CZ:        ', sv_after.data.round(2))", explanation: "After CZ [0.5, 0.5, 0.5, -0.5]" },
      { code: "print('\\nNotice: Only the amplitude of |11> flipped from +0.5 to -0.5!')", explanation: "CZ action" },
      { code: "print('Circuit diagram:')", explanation: "Diagram" },
      { code: "print(qc.draw('text'))", explanation: "Draw diagram" }
    ],
    executionFlow: [
      { number: 1, title: "Initialize Joint Superposition", description: "Apply H to both qubits, creating equal superposition of |00>, |01>, |10>, |11>." },
      { number: 2, title: "Execute Controlled-Z", description: "The CZ gate conditionally applies a pi phase shift only when both control and target are 1." },
      { number: 3, title: "Observe Entangled State", description: "State transforms into cluster state (|00> + |01> + |10> - |11>)/2." }
    ],
    input: "QuantumCircuit(2) with H on both wires and CZ(0, 1).",
    output: "Before CZ: [0.5, 0.5, 0.5, 0.5]\nAfter CZ:  [0.5, 0.5, 0.5, -0.5]\nOnly |11> receives -1 phase factor.",
    interpretation: "Controlled gates enable conditional quantum logic. Because CZ is completely symmetric, control and target roles can be swapped with zero change to the resulting physical state.",
    colabInstructions: [
      "Click 'Copy for Google Colab' to copy the complete runnable script",
      "Open Google Colab at colab.research.google.com",
      "Paste into a code cell and press Shift + Enter to run",
    ],
  },
  mcqs: [
    {
      id: 'q1',
      question: 'What is the matrix dimension of a Controlled-NOT (CNOT) gate acting on a 2-qubit register?',
      options: [
        { id: 'a', text: '4 x 4' },
        { id: 'b', text: '2 x 2' },
        { id: 'c', text: '8 x 8' },
        { id: 'd', text: '16 x 16' },
      ],
      correctAnswer: 'a',
      explanation: 'Two qubits span a 4-dimensional Hilbert space (basis states |00>, |01>, |10>, |11>), so all 2-qubit operators are represented by 4x4 unitary matrices.',
      incorrectFeedback: 'Two-qubit gates are 4x4 matrices.',
    },
  ],
};

export const cnotGate: Topic = {
  id: 'cnot-gate',
  moduleId: 'quantum-circuits',
  number: 9,
  title: 'The CNOT Gate: Entanglement & The XOR Truth Table',
  description: 'Master the crown jewel of two-qubit gates: the Controlled-NOT (CNOT) gate, parity flips, and synthesizing Bell states.',
  objectives: [
    'Define the 4x4 CNOT matrix and its Boolean truth table',
    'Demonstrate the parity action: |c, t> -> |c, c XOR t>',
    'Understand why CNOT + single-qubit rotations forms a Universal Quantum Computer',
  ],
  story: `In 1995, Spanish theoretical physicists Ignacio Cirac and Peter Zoller were sitting in an Austrian coffee house scribbling on napkins.
  
They were trying to figure out how to build the first physical two-qubit quantum gate using laser beams and cold ions trapped in an electromagnetic vacuum.
  
The gate they chose to build was the **Controlled-NOT (CNOT)** gate.
  
Why CNOT? Because mathematicians had just proven a theorem of monumental importance:
If you have single-qubit rotations (Hadamard, Phase) AND a CNOT gate, you have a **Universal Quantum Computer**!
  
You can construct ANY quantum algorithm, simulate ANY molecule, and crack ANY encryption code using nothing more than single-qubit rotations and CNOT gates. CNOT is the universal glue of quantum computing.`,
  motivation: `**The universal entangler**: CNOT is the primary multi-qubit gate supported by IBM, Google, and IonQ hardware. Understanding its truth table, matrix structure, and phase properties is essential for every quantum circuit you will ever design.`,
  concept: {
    simple: `The CNOT Gate (Controlled-NOT):
- **Control Qubit (Top)**: The Boss. It never changes!
- **Target Qubit (Bottom)**: The Worker.
The Rule:
- If Control is 0 -> Target stays unchanged.
- If Control is 1 -> Target FLIPS (0 becomes 1, 1 becomes 0)!
In binary math, it computes the XOR sum: $|c, t\\rangle \\rightarrow |c, c \\oplus t\\rangle$.`,
    technical: `The Controlled-NOT gate $CX \\in U(4)$ is a linear operator whose computational action is:
$$CX |c, t\\rangle = |c, c \\oplus t\\rangle$$
where $\\oplus$ denotes addition modulo 2 (exclusive OR). In matrix form:
$$CX = \\begin{pmatrix} 1 & 0 & 0 & 0 \\\\ 0 & 1 & 0 & 0 \\\\ 0 & 0 & 0 & 1 \\\\ 0 & 0 & 1 & 0 \\end{pmatrix}$$
Together with single-qubit unitary operations $U(2)$, the set $\\{CX, U(2)\\}$ forms a universal gate library capable of exact synthesis of any element in $U(2^n)$ via the Barenco et al. (1995) construction.`,
  },
  keyTerms: [
    { term: 'CNOT (Controlled-X)', simple: 'Flips the target qubit if and only if the control qubit is 1.', technical: 'Two-qubit unitary operator mapping basis state $|c, t\\rangle$ to $|c, c \\oplus t\\rangle$.' },
    { term: 'XOR (Exclusive OR)', simple: 'Outputs 1 if inputs are different; outputs 0 if inputs are the same.', technical: 'Addition modulo 2 in Galois field $\\mathbb{F}_2$.' },
    { term: 'Universal Gate Library', simple: 'A small set of gates that can build any possible quantum computer circuit.', technical: 'A collection of gates whose generated subgroup is dense in $SU(2^n)$.' },
  ],
  equations: [
    {
      latex: 'CX |c, t\\rangle = |c, c \\oplus t\\rangle, \\quad CX = \\begin{pmatrix} 1 & 0 & 0 & 0 \\\\ 0 & 1 & 0 & 0 \\\\ 0 & 0 & 0 & 1 \\\\ 0 & 0 & 1 & 0 \\end{pmatrix}',
      explanation: 'The CNOT truth mapping: flips target qubit t if control c is 1. The matrix swaps basis states |10> and |11> while leaving |00> and |01> unchanged.',
      symbols: [
        { symbol: 'c', meaning: 'Control bit (0 or 1)', interpretation: 'Leaves unchanged' },
        { symbol: 't', meaning: 'Target bit (0 or 1)', interpretation: 'Flipped if c=1' },
        { symbol: '\\oplus', meaning: 'XOR operation', interpretation: 'Addition modulo 2' },
      ],
      example: {
        description: 'Input |10>: control is 1, target is 0. Target flips to 1. Output is |11>.',
        calculation: 'c = 1, \\quad t = 0 \\oplus 1 = 1 \\implies CX|10\\rangle = |11\\rangle',
        result: 'State transformed from |10> to |11>',
      },
    },
  ],
  howItWorks: [
    { number: 1, title: '|00> -> |00>', description: 'Control is 0; target 0 stays 0.' },
    { number: 2, title: '|01> -> |01>', description: 'Control is 0; target 1 stays 1.' },
    { number: 3, title: '|10> -> |11>', description: 'Control is 1; target 0 flips to 1.' },
    { number: 4, title: '|11> -> |10>', description: 'Control is 1; target 1 flips to 0.' },
  ],
  applications: [
    { title: 'Bell State Generation', problem: 'Creating maximally entangled pairs for quantum communications.', solution: 'Hadamard on qubit 0 followed by CNOT(0, 1) creates canonical Bell pair (|00> + |11>)/sqrt(2).' },
    { title: 'Quantum Parity Checking', problem: 'Measuring whether two qubits are identical or different without measuring their individual values.', solution: 'CNOT targets an ancilla qubit, recording parity c1 XOR c2.' },
  ],
  activity: {
    type: 'mcq',
    title: 'CNOT Truth Table Verification',
    question: 'If the input to a CNOT gate is |11>, what is the output state?',
    options: [
      { id: 'a', text: '|10> (Control remains 1, target 1 flips to 0)' },
      { id: 'b', text: '|11>' },
      { id: 'c', text: '|00>' },
      { id: 'd', text: '|01>' },
    ],
    correctAnswer: 'a',
    explanation: 'Control is 1, so the target bit flips from 1 to 0. The control bit never changes, so the output is |10>.',
    hint: 'Control stays 1; target flips from 1 to 0.',
  },
  pythonHandsOn: {
    title: "Verifying the 2-Qubit CNOT (Controlled-NOT) Truth Table in Qiskit",
    description: "Construct and evaluate the CNOT gate across all 4 computational basis states |00>, |01>, |10>, and |11> in Qiskit.",
    packages: ["qiskit"],
    installCommand: "pip install qiskit",
    imports: [
      { code: "from qiskit import QuantumCircuit", explanation: "Circuit module" },
      { code: "from qiskit.quantum_info import Statevector", explanation: "Statevector module" }
    ],
    code: [
      { code: "basis_states = ['00', '01', '10', '11']", explanation: "4 input states" },
      { code: "print('=== CNOT Gate Truth Table in Qiskit ===')", explanation: "Header" },
      { code: "print('Control (q0) | Target (q1) -> Output State')", explanation: "Columns" },
      { code: "print('-' * 42)", explanation: "Divider" },
      { code: "for s in basis_states:", explanation: "Loop basis inputs" },
      { code: "    qc = QuantumCircuit(2)", explanation: "2 qubits" },
      { code: "    if s[0] == '1': qc.x(0)  # Set control to |1>", explanation: "Set control" },
      { code: "    if s[1] == '1': qc.x(1)  # Set target to |1>", explanation: "Set target" },
      { code: "    qc.cx(0, 1)  # Apply CNOT: flips target if control is 1", explanation: "Apply CNOT" },
      { code: "    out_state = list(Statevector.from_instruction(qc).probabilities_dict().keys())[0]", explanation: "Get output" },
      { code: "    print(f'     |{s[0]}>     |     |{s[1]}>     ->     |{out_state}>')", explanation: "Row output" },
      { code: "print('\\nNotice: Target flips ONLY when Control is |1> (quantum XOR operation).')", explanation: "Conclusion" }
    ],
    executionFlow: [
      { number: 1, title: "Loop Basis Inputs", description: "Prepare all 4 binary states |00>, |01>, |10>, |11> using Pauli-X." },
      { number: 2, title: "Apply CNOT", description: "Execute cx(0, 1) where wire 0 is control and wire 1 is target." },
      { number: 3, title: "Verify Truth Table", description: "Confirm that |10> becomes |11> and |11> becomes |10>." }
    ],
    input: "4 circuits evaluating CNOT across all computational basis states.",
    output: "Control |0>, Target |0> -> |00>\nControl |0>, Target |1> -> |01>\nControl |1>, Target |0> -> |11> (Flipped!)\nControl |1>, Target |1> -> |10> (Flipped!)",
    interpretation: "The CNOT gate computes the reversible quantum XOR function |c, t> -> |c, c XOR t>. Together with single-qubit rotations, CNOT forms a universal gate set for all quantum computation.",
    colabInstructions: [
      "Click 'Copy for Google Colab' to copy the complete runnable script",
      "Open Google Colab at colab.research.google.com",
      "Paste into a code cell and press Shift + Enter to run",
    ],
  },
  mcqs: [
    {
      id: 'q1',
      question: 'Why is the CNOT gate called reversible when classical XOR gates are irreversible?',
      options: [
        { id: 'a', text: 'Because CNOT retains the control bit alongside the XOR output, preserving all 2 bits of information without data loss' },
        { id: 'b', text: 'Because quantum computers run backwards' },
        { id: 'c', text: 'Because CNOT uses zero electricity' },
        { id: 'd', text: 'Because XOR is only for addition' },
      ],
      correctAnswer: 'a',
      explanation: 'Classical XOR takes 2 inputs and outputs 1 bit (destroying 1 bit). CNOT keeps the control bit unchanged, taking 2 inputs and outputting 2 bits ($c, c \\oplus t$), making it completely reversible.',
      incorrectFeedback: 'CNOT preserves the control qubit, maintaining reversibility.',
    },
  ],
};

export const measurementQC: Topic = {
  id: 'measurement-qc',
  moduleId: 'quantum-circuits',
  number: 10,
  title: 'Measurement in Quantum Circuits: Projection & Classical Registers',
  description: 'Understand how measurements are sequenced in circuits: mid-circuit measurement, deferred measurement principle, and classical conditioning.',
  objectives: [
    'Sequence measurements into classical register bits',
    'Understand the Principle of Deferred Measurement',
    'Explore mid-circuit measurement and dynamic quantum circuits (feed-forward)',
  ],
  story: `For decades, quantum computing followed a rigid textbook rule:
"Perform all quantum gate rotations first, and only measure at the very end of the circuit."
  
In 2021, quantum hardware engineers unlocked a dramatic capability: **Mid-Circuit Measurement and Reset (MCMR)**.
  
Now, you can pause in the middle of a quantum calculation, measure a single qubit, read its classical 0 or 1 result, and conditionally fire a microwave pulse to adjust other qubits based on that measurement!
  
This dynamic feed-forward capability is the essential prerequisite for real-time quantum error correction, allowing chips to catch and fix errors while the calculation is actively running.`,
  motivation: `**Dynamic circuits**: Mid-circuit measurement reduces required qubit counts and powers fault-tolerant quantum error correction. Understanding how measurement interfaces with classical control logic is modern state of the art.`,
  concept: {
    simple: `Measurement is the exit door of the quantum world:
- The meter icon ` + '`[ M ]`' + ` takes a qubit and looks at it.
- The delicate quantum state collapses into a regular 0 or 1.
- That 0 or 1 is written onto a double wire (classical bit).
- You can even use that 0 or 1 to decide what move to make next (Dynamic Circuits)!`,
    technical: `Projective measurement on qubit $j$ applies projection operators $P_0 = I \\otimes |0\\rangle\\langle 0| \\otimes I$ and $P_1 = I \\otimes |1\\rangle\\langle 1| \\otimes I$. The **Principle of Deferred Measurement** (Nielsen & Chuang) proves that any mid-circuit measurement followed by classically conditioned gates is computationally equivalent to deferring the measurement to the end of the circuit using coherent quantum controlled gates.`,
  },
  keyTerms: [
    { term: 'Principle of Deferred Measurement', simple: 'A math rule proving that measuring in the middle of a circuit can always be moved to the very end without changing the answer.', technical: 'Theorem establishing that measurement operations commute with control lines when replaced by coherent quantum control gates.' },
    { term: 'Mid-Circuit Measurement (MCMR)', simple: 'Measuring a qubit in the middle of a computation to fix errors or reuse the qubit.', technical: 'Executing non-terminal projective measurement and active reset within coherence time window $t < T_2$.' },
  ],
  equations: [
    {
      latex: 'P(b_j = 0) = \\text{Tr}\\left( (I \\otimes |0\\rangle\\langle 0|_j \\otimes I) \\rho \\right)',
      explanation: 'Probability of measuring 0 on qubit j in a multi-qubit density matrix rho using the partial trace projection.',
      symbols: [
        { symbol: '|0\\rangle\\langle 0|_j', meaning: 'Projection on qubit j', interpretation: 'Filter for 0' },
        { symbol: '\\rho', meaning: 'System density matrix', interpretation: 'Current multi-qubit state' },
      ],
      example: {
        description: 'Measuring qubit 0 of Bell state (|00> + |11>)/sqrt(2). Probability of 0 is 50%.',
        calculation: 'P(0) = |1/\\sqrt{2}|^2 = 0.5',
        result: '50% chance of 0',
      },
    },
  ],
  howItWorks: [
    { number: 1, title: 'Gate Execution', description: 'Complete coherent unitary operations.' },
    { number: 2, title: 'Projective Collapse', description: 'Coupled readout resonator collapses selected qubit.' },
    { number: 3, title: 'Classical Register Storage', description: 'Write binary bit string into classical register c[0], c[1]... for host computer analysis.' },
  ],
  applications: [
    { title: 'Quantum Error Correction (Syndrome Extraction)', problem: 'Detecting bit-flips without destroying the stored quantum data.', solution: 'Mid-circuit measurements read ancilla qubits to detect error locations while data qubits remain in superpositions.' },
  ],
  activity: {
    type: 'mcq',
    title: 'Deferred Measurement Check',
    question: 'According to the Principle of Deferred Measurement, can a mid-circuit measurement always be replaced by moving the measurement to the end of the circuit?',
    options: [
      { id: 'a', text: 'Yes, by replacing classically conditioned controls with quantum controlled gates' },
      { id: 'b', text: 'No, physics forbids it' },
      { id: 'c', text: 'Only if the computer has 1,000 qubits' },
      { id: 'd', text: 'Only on Mondays' },
    ],
    correctAnswer: 'a',
    explanation: 'The Principle of Deferred Measurement proves that any measurement followed by classically conditioned operations is mathematically equivalent to postponing measurement until the end using coherent quantum control gates.',
    hint: 'Classical conditioning can be replaced by quantum controlled gates.',
  },
  pythonHandsOn: {
    title: "Simulating Mid-Circuit and Terminal Measurement in Qiskit",
    description: "Assemble quantum circuits with classical registers and simulate measurement readouts using AerSimulator.",
    packages: ["qiskit", "qiskit-aer"],
    installCommand: "pip install qiskit qiskit-aer",
    imports: [
      { code: "from qiskit import QuantumCircuit", explanation: "Circuit constructor" },
      { code: "from qiskit_aer import AerSimulator", explanation: "Aer simulator" }
    ],
    code: [
      { code: "# 1. Build circuit with H, CNOT and Measurement", explanation: "Circuit setup" },
      { code: "qc = QuantumCircuit(2, 2)", explanation: "2 qubits, 2 classical bits" },
      { code: "qc.h(0)", explanation: "Superposition on control" },
      { code: "qc.cx(0, 1)", explanation: "CNOT to entangle" },
      { code: "qc.measure([0, 1], [0, 1])  # Map q0 -> c0, q1 -> c1", explanation: "Measurement mapping" },
      { code: "print('Circuit Diagram with Measurement Gauges:')", explanation: "Label" },
      { code: "print(qc.draw('text'))", explanation: "Print diagram" },
      { code: "", explanation: "" },
      { code: "# 2. Execute 1,024 measurement shots on AerSimulator", explanation: "Run simulation" },
      { code: "sim = AerSimulator()", explanation: "Initialize simulator" },
      { code: "counts = sim.run(qc, shots=1024).result().get_counts()", explanation: "Run shots" },
      { code: "print('\\nMeasurement Readout (1,024 shots):')", explanation: "Readout header" },
      { code: "for outcome, freq in counts.items():", explanation: "Print results" },
      { code: "    pct = (freq / 1024) * 100", explanation: "Calculate percent" },
      { code: "    print(f'  State \\'{outcome}\\' : {freq} shots ({pct:.1f}%)')", explanation: "Print row" }
    ],
    executionFlow: [
      { number: 1, title: "Create Entangled Pair", description: "Prepare (|00> + |11>)/sqrt(2)." },
      { number: 2, title: "Attach Readout Gauges", description: "Map quantum state collapse onto classical bit registers." },
      { number: 3, title: "Sample 1,024 Shots", description: "Observe identical bit outcomes ('00' and '11') with zero cross-terms." }
    ],
    input: "QuantumCircuit(2, 2) with Bell state and measurement.",
    output: "State '00': ~512 shots (50.0%)\nState '11': ~512 shots (50.0%)\nState '01': 0 shots\nState '10': 0 shots",
    interpretation: "Measurement converts continuous quantum probability amplitudes into discrete classical bitstrings. The perfect agreement between bit 0 and bit 1 confirms entanglement.",
    colabInstructions: [
      "Click 'Copy for Google Colab' to copy the complete runnable script",
      "Open Google Colab at colab.research.google.com",
      "Paste into a code cell and press Shift + Enter to run",
    ],
  },
  mcqs: [
    {
      id: 'q1',
      question: 'Why do quantum cloud platforms (like IBM Quantum) run circuits for multiple "shots" (e.g. 1,024 or 4,096 shots) rather than executing once?',
      options: [
        { id: 'a', text: 'Because quantum measurement is probabilistic; running multiple shots builds a statistical frequency histogram of outcomes' },
        { id: 'b', text: 'Because the server has to warm up' },
        { id: 'c', text: 'To use up cloud credits' },
        { id: 'd', text: 'Because qubits only work in groups of 1,000' },
      ],
      correctAnswer: 'a',
      explanation: 'A single shot yields only one binary string (e.g. "01"). Re-running the circuit multiple times compiles the empirical probability distribution needed to verify the quantum state.',
      incorrectFeedback: 'Multiple shots build an empirical probability distribution.',
    },
  ],
};

export const buildingQuantumCircuit: Topic = {
  id: 'building-quantum-circuit',
  moduleId: 'quantum-circuits',
  number: 11,
  title: 'Building Quantum Circuits in Code: Qiskit Syntax',
  description: 'Construct, manipulate, and compile quantum circuits using industry-standard Python frameworks (Qiskit QuantumCircuit API).',
  objectives: [
    'Construct QuantumCircuit objects with QuantumRegister and ClassicalRegister',
    'Attach single- and two-qubit gates: qc.h(), qc.x(), qc.cx()',
    'Compile circuits and generate OpenQASM 2.0/3.0 assembly code',
  ],
  story: `In 2017, an IBM research team led by Jay Gambetta open-sourced **Qiskit** (Quantum Information Science Kit).
  
Before Qiskit, if you wanted to run a quantum algorithm on IBM's 5-qubit cloud chip, you had to write raw machine pulses or low-level assembly.
  
Qiskit introduced an object-oriented Python API that made building quantum circuits as natural as writing standard Python:
\`\`\`python
qc = QuantumCircuit(2, 2)
qc.h(0)
qc.cx(0, 1)
qc.measure([0, 1], [0, 1])
\`\`\`
Today, Qiskit is the most widely used quantum programming framework in the world, downloaded millions of times and supported across academic and enterprise research.`,
  motivation: `**The industry programming standard**: Writing clean Qiskit code is the primary technical skill evaluated in quantum computing developer interviews and research collaborations worldwide.`,
  concept: {
    simple: `Building a quantum circuit in Python:
1. ` + '`qc = QuantumCircuit(2, 2)`' + `: Create a circuit with 2 qubits and 2 classical bits.
2. ` + '`qc.h(0)`' + `: Put qubit 0 into superposition!
3. ` + '`qc.cx(0, 1)`' + `: Entangle qubit 0 and qubit 1 with a CNOT gate!
4. ` + '`qc.measure_all()`' + `: Measure all qubits!
5. Send to a simulator or real IBM quantum computer to run!`,
    technical: `The Qiskit ` + '`QuantumCircuit`' + ` class represents an internal directed acyclic graph (DAGCircuit) of quantum operations. Methods like ` + '`qc.h(q)`' + `, ` + '`qc.cx(c, t)`' + `, and ` + '`qc.append(gate, qargs)`' + ` append ` + '`CircuitInstruction`' + ` nodes to the DAG. Circuits serialize to standard OpenQASM intermediate representation for compiler passes and hardware transpilation.`,
  },
  keyTerms: [
    { term: 'QuantumCircuit', simple: 'The master Python object used to construct quantum programs in Qiskit.', technical: 'Core class in qiskit.circuit representing a quantum program composed of registers, gates, and instructions.' },
    { term: 'OpenQASM', simple: 'The assembly language of quantum computers (like machine code for qubits).', technical: 'Quantum Assembly Language (OpenQASM 3.0) intermediate representation for quantum circuits.' },
    { term: 'Transpilation', simple: 'Rewriting your high-level quantum circuit so it matches the specific layout and native gates of a real physical chip.', technical: 'Compilation pass mapping abstract circuits to hardware-native coupling graphs and basis gate sets while minimizing circuit depth.' },
  ],
  howItWorks: [
    { number: 1, title: 'Circuit Instantiation', description: 'Define qubit and bit counts: qc = QuantumCircuit(2, 2).' },
    { number: 2, title: 'Gate Appending', description: 'Call gate methods sequentially: qc.h(0), qc.x(1), qc.cx(0, 1).' },
    { number: 3, title: 'Measurement Mapping', description: 'Map quantum registers to classical bits: qc.measure(0, 0).' },
  ],
  applications: [
    { title: 'Cloud Quantum Execution', problem: 'Submitting a quantum circuit from a laptop in London to run on a dilution refrigerator in Yorktown Heights, New York.', solution: 'Qiskit Runtime serializes the QuantumCircuit and streams measurement counts back over secure HTTPS.' },
  ],
  activity: {
    type: 'mcq',
    title: 'Qiskit Syntax Check',
    question: 'In Qiskit, what code attaches a CNOT gate with qubit 0 as control and qubit 1 as target?',
    options: [
      { id: 'a', text: 'qc.cx(0, 1)' },
      { id: 'b', text: 'qc.cnot(1, 0)' },
      { id: 'c', text: 'qc.entangle(0, 1)' },
      { id: 'd', text: 'qc.xor(0, 1)' },
    ],
    correctAnswer: 'a',
    explanation: 'In Qiskit, qc.cx(control, target) is the standard method to apply a Controlled-NOT gate.',
    hint: 'Controlled-X is abbreviated as cx(control, target).',
  },
  pythonHandsOn: {
    title: "Building and Drawing a 3-Qubit GHZ State Circuit in Qiskit",
    description: "Construct an industry-standard 3-qubit Greenberger-Horne-Zeilinger (GHZ) state circuit in Qiskit and inspect its structure.",
    packages: ["qiskit"],
    installCommand: "pip install qiskit",
    imports: [
      { code: "from qiskit import QuantumCircuit", explanation: "Circuit module" },
      { code: "from qiskit.quantum_info import Statevector", explanation: "Statevector module" }
    ],
    code: [
      { code: "# Build a 3-Qubit GHZ State: (|000> + |111>)/sqrt(2)", explanation: "GHZ circuit" },
      { code: "qc = QuantumCircuit(3, 3)", explanation: "3 qubits and 3 classical bits" },
      { code: "qc.h(0)           # Superposition on qubit 0", explanation: "Step 1: H on q0" },
      { code: "qc.cx(0, 1)       # Entangle q0 with q1", explanation: "Step 2: CNOT q0->q1" },
      { code: "qc.cx(1, 2)       # Entangle q1 with q2", explanation: "Step 3: CNOT q1->q2" },
      { code: "qc.measure([0, 1, 2], [0, 1, 2])", explanation: "Measure all 3 qubits" },
      { code: "print('=== 3-Qubit GHZ State Circuit Diagram ===')", explanation: "Header" },
      { code: "print(qc.draw('text'))", explanation: "Print text diagram" },
      { code: "", explanation: "" },
      { code: "# Analyze Statevector before measurement", explanation: "Statevector analysis" },
      { code: "qc_no_meas = qc.remove_final_measurements(inplace=False)", explanation: "Strip measurement" },
      { code: "sv = Statevector.from_instruction(qc_no_meas)", explanation: "Compute statevector" },
      { code: "print('\\nNon-zero basis state probabilities:')", explanation: "Label" },
      { code: "for state, prob in sv.probabilities_dict().items():", explanation: "Print probabilities" },
      { code: "    if prob > 0.01:", explanation: "Filter non-zero" },
      { code: "        print(f'  |{state}> : {prob * 100:.1f}%')", explanation: "Show 50% |000> and 50% |111>" }
    ],
    executionFlow: [
      { number: 1, title: "Hadamard on Seed Qubit", description: "Initialize superposition on qubit 0." },
      { number: 2, title: "Cascade CNOT Gates", description: "Propagate entanglement through qubits 1 and 2 to create tripartite correlation." },
      { number: 3, title: "Simulate & Draw", description: "Inspect circuit diagram and verify non-local 3-qubit superposition (|000> + |111>)/sqrt(2)." }
    ],
    input: "QuantumCircuit(3, 3) implementing GHZ state.",
    output: "q_0: \u2500\u2500[ H ]\u2500\u2500\u25a0\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500[ M ]\n              \u2502              \u2551\nq_1: \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500X\u2500\u2500\u2500\u2500\u25a0\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500[ M ]\n                   \u2502         \u2551\nq_2: \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500X\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500[ M ]\nProbabilities: |000>: 50.0%, |111>: 50.0%",
    interpretation: "The GHZ state represents genuine tripartite entanglement: all 3 qubits are entangled such that measuring any single qubit immediately collapses all 3 qubits simultaneously.",
    colabInstructions: [
      "Click 'Copy for Google Colab' to copy the complete runnable script",
      "Open Google Colab at colab.research.google.com",
      "Paste into a code cell and press Shift + Enter to run",
    ],
  },
  mcqs: [
    {
      id: 'q1',
      question: 'What is the purpose of the Qiskit Transpiler?',
      options: [
        { id: 'a', text: 'To rewrite and optimize an abstract quantum circuit so it matches the specific physical connectivity graph and native basis gates of a real quantum processor' },
        { id: 'b', text: 'To convert Python into JavaScript' },
        { id: 'c', text: 'To translate code into German' },
        { id: 'd', text: 'To delete quantum circuits' },
      ],
      correctAnswer: 'a',
      explanation: 'Real quantum chips have limited physical connectivity (qubit 0 might not be physically connected to qubit 4). Transpilation routes gates and decomposes them into physical native hardware pulses.',
      incorrectFeedback: 'Transpilation optimizes and maps circuits to target hardware topology.',
    },
  ],
};

export const quantumCircuitSimulation: Topic = {
  id: 'quantum-circuit-simulation',
  moduleId: 'quantum-circuits',
  number: 12,
  title: 'Quantum Circuit Simulation: Module 6 Capstone',
  description: 'Synthesize Module 6: build a complete state-vector simulator in Python that evolves multi-qubit states and computes measurement histograms.',
  objectives: [
    'Construct a complete Matrix-based Quantum Simulator in Python',
    'Simulate the 2-qubit Bell State and 3-qubit GHZ (Greenberger-Horne-Zeilinger) state',
    'Calculate state fidelity and plot output measurement histograms',
  ],
  story: `In 1989, Daniel Greenberger, Michael Horne, and Anton Zeilinger proposed an extreme quantum state that pushed entanglement to three particles:
$$|\\text{GHZ}\\rangle = \\frac{|000\\rangle + |111\\rangle}{\\sqrt{2}}$$
In this state, three separate particles across the universe share an unbreakable tri-partite entanglement.
  
In this Module 6 Capstone, you will build a complete quantum circuit simulator from scratch in pure Python. You will assemble the quantum gates, compute tensor products, evolve a 3-qubit register, and verify the generation of the famous **GHZ State**!`,
  motivation: `**Mastery of quantum circuit execution**: When you can write a working quantum circuit simulator from scratch using linear algebra, you have mastered the foundational mechanics of quantum information science.`,
  concept: {
    simple: `We are building our own mini quantum computer simulator:
1. Start with 3 qubits all set to 0: $|000\\rangle$.
2. Apply Hadamard to qubit 0 to make it spin: $(|0\\rangle + |1\\rangle)/\\sqrt{2}$.
3. Use CNOT from qubit 0 to qubit 1: now both are entangled: $(|00\\rangle + |11\\rangle)/\\sqrt{2}$.
4. Use CNOT from qubit 1 to qubit 2: now all three are entangled: $(|000\\rangle + |111\\rangle)/\\sqrt{2}$!
This is the famous GHZ state!`,
    technical: `Full-state vector simulation tracks state vector $|\\psi\\rangle \\in \\mathbb{C}^{2^n}$. When gate $U$ acts on qubit $k$, the full operator is embedded via Kronecker products: $U_{full} = I^{\\otimes k} \\otimes U \\otimes I^{\\otimes (n-k-1)}$. Two-qubit gates are synthesized via projector decomposition. Born rule sampling generates empirical shot distributions.`,
  },
  keyTerms: [
    { term: 'GHZ State', simple: 'A 3-qubit entangled state: (|000> + |111>) / sqrt(2).', technical: 'Maximally entangled tri-partite state $\\frac{|000\\rangle + |111\\rangle}{\\sqrt{2}}$ exhibiting non-local quantum correlations.' },
    { term: 'Statevector Simulator', simple: 'A simulator that tracks the exact complex amplitudes of all states without noise.', technical: 'An idealized quantum simulator that computes exact wavefunction evolution via matrix-vector multiplication without sampling error.' },
  ],
  equations: [
    {
      latex: '|\\text{GHZ}\\rangle = CX_{12} \\cdot CX_{01} \\cdot (H_0 \\otimes I_1 \\otimes I_2) |000\\rangle = \\frac{|000\\rangle + |111\\rangle}{\\sqrt{2}}',
      explanation: 'The GHZ state synthesis circuit: Hadamard on qubit 0, followed by CNOT cascading across qubits 0->1 and 1->2.',
      symbols: [
        { symbol: '|\\text{GHZ}\\rangle', meaning: 'Greenberger-Horne-Zeilinger state', interpretation: '3-qubit entangled state' },
        { symbol: 'CX', meaning: 'CNOT gate', interpretation: 'Entangling operator' },
      ],
      example: {
        description: 'Measuring the GHZ state: 50% chance of getting "000", 50% chance of getting "111". All other 6 states (|001>, |010>, etc.) have 0% probability.',
        calculation: 'P(000) = |1/\\sqrt{2}|^2 = 0.5, \\quad P(111) = |1/\\sqrt{2}|^2 = 0.5',
        result: 'Perfect tri-partite correlation',
      },
    },
  ],
  howItWorks: [
    { number: 1, title: 'State Initialization', description: 'Initialize length-8 vector |000>.' },
    { number: 2, title: 'Hadamard on Q0', description: 'Creates (|000> + |100>)/sqrt(2).' },
    { number: 3, title: 'CNOT 0->1', description: 'Flips Q1 if Q0 is 1: (|000> + |110>)/sqrt(2).' },
    { number: 4, title: 'CNOT 1->2', description: 'Flips Q2 if Q1 is 1: (|000> + |111>)/sqrt(2).' },
  ],
  applications: [
    { title: 'Multi-Party Quantum Secret Sharing', problem: 'Sharing an encryption key among 3 intelligence officials such that no two can decrypt without the third.', solution: 'GHZ state correlations require all 3 parties to collaborate to reconstruct the key.' },
  ],
  activity: {
    type: 'mcq',
    title: 'GHZ Measurement Prediction',
    question: 'In a 3-qubit GHZ state (|000> + |111>)/sqrt(2), what is the probability of measuring the state |010>?',
    options: [
      { id: 'a', text: '0.0% (Zero: the state has non-zero amplitude only for 000 and 111)' },
      { id: 'b', text: '50.0%' },
      { id: 'c', text: '12.5%' },
      { id: 'd', text: '100%' },
    ],
    correctAnswer: 'a',
    explanation: 'The GHZ state only has non-zero amplitudes for |000> and |111>. All other 6 combinations (including |010>) have an amplitude of exactly 0, meaning 0.0% probability.',
    hint: 'Does |010> appear in (|000> + |111>)/sqrt(2)?',
  },
  pythonHandsOn: {
    title: "Statevector vs Shot-Based Simulation in Qiskit",
    description: "Compare ideal analytical statevector simulation against stochastic shot-based sampling with AerSimulator in Qiskit.",
    packages: ["qiskit", "qiskit-aer"],
    installCommand: "pip install qiskit qiskit-aer",
    imports: [
      { code: "from qiskit import QuantumCircuit", explanation: "Circuit constructor" },
      { code: "from qiskit.quantum_info import Statevector", explanation: "Analytical statevector simulator" },
      { code: "from qiskit_aer import AerSimulator", explanation: "Stochastic shot-based simulator" }
    ],
    code: [
      { code: "# 1. Define quantum circuit", explanation: "Circuit setup" },
      { code: "qc = QuantumCircuit(2, 2)", explanation: "2 qubits" },
      { code: "qc.h(0)", explanation: "Superposition" },
      { code: "qc.cx(0, 1)", explanation: "CNOT" },
      { code: "", explanation: "" },
      { code: "# 2. Analytical Simulation: Statevector (Exact Probabilities)", explanation: "Method 1" },
      { code: "sv = Statevector.from_instruction(qc)", explanation: "Compute exact amplitudes" },
      { code: "print('--- Method 1: Statevector Simulation (Exact) ---')", explanation: "Header 1" },
      { code: "print('Exact Probabilities:', sv.probabilities_dict())", explanation: "{'00': 0.5, '11': 0.5}" },
      { code: "", explanation: "" },
      { code: "# 3. Stochastic Simulation: AerSimulator (Shot-based Sampling)", explanation: "Method 2" },
      { code: "qc.measure([0, 1], [0, 1])", explanation: "Add measurements" },
      { code: "sim = AerSimulator()", explanation: "Initialize simulator" },
      { code: "counts_100 = sim.run(qc, shots=100).result().get_counts()", explanation: "Run 100 shots" },
      { code: "counts_10000 = sim.run(qc, shots=10000).result().get_counts()", explanation: "Run 10,000 shots" },
      { code: "print('\\n--- Method 2: AerSimulator (Statistical Sampling) ---')", explanation: "Header 2" },
      { code: "print('100 Shots Counts   :', counts_100)", explanation: "Show statistical noise at low shots" },
      { code: "print('10,000 Shots Counts:', counts_10000)", explanation: "Show convergence to 50/50 at high shots" },
      { code: "print('\\nNotice: As shots increase, empirical frequencies converge to exact Born rule probabilities!')", explanation: "Law of large numbers" }
    ],
    executionFlow: [
      { number: 1, title: "Analytical Statevector Method", description: "Compute exact 2^n complex amplitudes analytically without measurement collapse." },
      { number: 2, title: "Stochastic Sampling Method", description: "Simulate physical quantum hardware shots, observing statistical sampling variance." },
      { number: 3, title: "Convergence Comparison", description: "Observe how 10,000 shots approaches the exact 50.0% theoretical probability." }
    ],
    input: "Bell state circuit evaluated with Statevector and AerSimulator (100 vs 10,000 shots).",
    output: "Exact: {'00': 0.5, '11': 0.5}\n100 Shots: {'00': ~48, '11': ~52}\n10,000 Shots: {'00': ~5004, '11': ~4996}",
    interpretation: "Statevector simulation computes the mathematical wave function directly (useful for small circuits up to 30 qubits). AerSimulator models physical quantum hardware sampling, where multiple shots are required to reconstruct probability distributions.",
    colabInstructions: [
      "Click 'Copy for Google Colab' to copy the complete runnable script",
      "Open Google Colab at colab.research.google.com",
      "Paste into a code cell and press Shift + Enter to run",
    ],
  },
  mcqs: [
    {
      id: 'q1',
      question: 'In the GHZ state (|000> + |111>)/sqrt(2), if qubit 0 is measured and collapses to outcome "1", what will subsequent measurements of qubits 1 and 2 yield?',
      options: [
        { id: 'a', text: 'Both qubits 1 and 2 will collapse to outcome "1" with 100% certainty' },
        { id: 'b', text: 'Both will collapse to "0"' },
        { id: 'c', text: 'They will be randomly 50/50' },
        { id: 'd', text: 'The circuit will reset' },
      ],
      correctAnswer: 'a',
      explanation: 'Because the state is entangled as (|000> + |111>)/sqrt(2), measuring qubit 0 as 1 collapses the entire 3-qubit wavefunction to |111>. Therefore, qubits 1 and 2 are guaranteed to be 1.',
      incorrectFeedback: 'Tri-partite entanglement guarantees identical correlated outcomes.',
    },
  ],
};

export const module6Topics: Topic[] = [
  quantumCircuit,
  quantumRegister,
  quantumGates,
  pauliXGate,
  pauliYGate,
  pauliZGate,
  hadamardGate,
  controlledGates,
  cnotGate,
  measurementQC,
  buildingQuantumCircuit,
  quantumCircuitSimulation,
];
