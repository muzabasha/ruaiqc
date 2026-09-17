import { Topic } from '@/lib/types';
import { qubit } from './qubit';

export const whyLearnQuantum: Topic = {
  id: 'why-learn-quantum',
  moduleId: 'quantum-foundations',
  number: 1,
  title: 'Why Learn Quantum Computing? The Post-Moore Era',
  description: 'Understand the exponential computational limits of classical silicon and why quantum computing is the next grand paradigm.',
  objectives: [
    'Analyze the physical breakdown of Moore’s Law at atomic silicon scales',
    'Understand why classical supercomputers cannot simulate nature and chemistry',
    'Examine how quantum mechanics unlocks exponential state spaces ($2^n$)',
  ],
  story: `In 1981, legendary Nobel laureate physicist Richard Feynman gave a keynote address at MIT titled "Simulating Physics with Computers."
  
Feynman posed a fundamental paradox:
If you want to simulate a simple caffeine molecule ($C_8 H_{10} N_4 O_2$), you have to track the quantum wavefunctions and electron configurations of just 24 atoms.
  
To represent that quantum state on a classical supercomputer would require more memory bits than there are grains of sand on the entire planet Earth. For a penicillin molecule, it would require more bits than there are subatomic particles in the observable universe.
  
Feynman concluded with one of the most famous quotes in modern science:
*"Nature isn't classical, dammit, and if you want to make a simulation of nature, you'd better make it quantum mechanical, and by golly it's a wonderful problem, because it doesn't look so easy."*`,
  motivation: `**The next technological revolution**: Classical computing is hitting physical quantum tunneling limits in silicon chips. Quantum computing is not just a faster processor; it is an entirely new mathematical model of computation that solves previously impossible problems in drug discovery, materials science, and cryptography.`,
  concept: {
    simple: `Classical computers are like a person trying to escape a giant hedge maze by walking down every path one by one. If they hit a dead end, they backtrack and try the next path.
A quantum computer is like a wave of water flooding into the maze all at once. It flows through all paths simultaneously, cancels out the wrong dead ends through interference, and reveals the exit instantly!`,
    technical: `Classical digital computers represent information as binary states in a discrete Boolean algebra $\\{0, 1\\}^n$. Quantum computers exploit quantum mechanical phenomena—specifically coherent superposition in complex Hilbert spaces $\\mathcal{H} = \\mathbb{C}^{2^n}$ and non-local entanglement—enabling algorithms with polynomial complexity $\\mathcal{O}(\\text{poly}(n))$ for problems in bounded-error quantum polynomial time (BQP) that are intractable in classical complexity class BPP.`,
  },
  keyTerms: [
    { term: 'Moore’s Law', simple: 'The rule that computer chips doubled in power every two years, which is now hitting physical atomic limits.', technical: 'Empirical observation by Gordon Moore (1965) that transistor density on integrated circuits doubles approximately every 18–24 months.' },
    { term: 'Quantum Supremacy / Advantage', simple: 'The historic moment when a quantum computer performs a calculation that no classical supercomputer on Earth could complete in a reasonable time.', technical: 'Demonstration of a programmable quantum device solving a well-defined computational problem substantially faster than the classical state of the art.' },
    { term: 'Hilbert Space', simple: 'The mathematical universe where quantum wavefunctions live.', technical: 'A complete complex inner product vector space $\\mathbb{C}^d$ hosting quantum state vectors.' },
  ],
  equations: [
    {
      latex: '\\dim(\\mathcal{H}) = 2^n',
      explanation: 'Exponential dimensionality of quantum state space: adding just one qubit doubles the mathematical dimensions of the system.',
      symbols: [
        { symbol: 'n', meaning: 'Number of qubits', interpretation: 'Quantum bits' },
        { symbol: '2^n', meaning: 'Number of simultaneous basis states', interpretation: 'Classical bits needed to simulate the quantum system' },
      ],
      example: {
        description: '50 qubits require 2^50 = 1,125,899,906,842,624 complex numbers to simulate on a classical supercomputer (16 petabytes of RAM). 300 qubits require more numbers than all atoms in the universe.',
        calculation: '2^{50} \\approx 1.125 \\times 10^{15} \\text{ state amplitudes}',
        result: 'Exponential classical simulation barrier',
      },
    },
  ],
  howItWorks: [
    { number: 1, title: 'State Initialization', description: 'Initialize n qubits into ground state |00...0>.' },
    { number: 2, title: 'Superposition Creation', description: 'Apply Hadamard gates to put system into simultaneous superposition of all 2^n states.' },
    { number: 3, title: 'Quantum Interference', description: 'Apply unitary transformations that constructively amplify correct answers and destructively cancel incorrect paths.' },
    { number: 4, title: 'Measurement Collapse', description: 'Read out classical bit string revealing the optimal solution with high probability.' },
  ],
  applications: [
    { title: 'Nitrogen Fixation & Fertilizer Catalyst', problem: 'Manufacturing fertilizer uses 2% of the entire world’s energy supply (Haber-Bosch process). Bacteria do this at room temperature using a nitrogenase enzyme, but classical computers cannot simulate its electron structure.', solution: 'Quantum computers will model the active FeMo-cofactor, designing room-temperature chemical catalysts.' },
    { title: 'Battery Chemistry Simulation', problem: 'Developing solid-state lithium electrolytes for electric vehicles takes decades of wet lab trial and error.', solution: 'Quantum chemistry algorithms simulate cathode crystal lattice bonding directly.' },
  ],
  activity: {
    type: 'mcq',
    title: 'Exponential Scaling Check',
    question: 'How many classical complex numbers are required to describe the exact state of a 10-qubit quantum computer?',
    options: [
      { id: 'a', text: '1,024 (2^10)' },
      { id: 'b', text: '10' },
      { id: 'c', text: '20' },
      { id: 'd', text: '100' },
    ],
    correctAnswer: 'a',
    explanation: 'A system of n qubits resides in a 2^n dimensional Hilbert space. For 10 qubits, 2^10 = 1,024 complex probability amplitudes are required.',
    hint: 'Calculate 2 raised to the power of 10.',
  },
  pythonHandsOn: {
    title: "Simulating Exponential State Space Scaling in Qiskit",
    description: "Construct an n-qubit superposition state with Qiskit and analyze how Hilbert state space explodes exponentially.",
    packages: ["qiskit", "qiskit-aer", "numpy"],
    installCommand: "pip install qiskit qiskit-aer numpy",
    imports: [
      { code: "from qiskit import QuantumCircuit", explanation: "Qiskit class to build quantum circuits" },
      { code: "from qiskit.quantum_info import Statevector", explanation: "Simulates exact quantum statevectors" },
      { code: "import numpy as np", explanation: "Numerical analysis of state space dimensions" }
    ],
    code: [
      { code: "# 1. Build a 3-qubit circuit in equal superposition", explanation: "Create circuit with 3 qubits" },
      { code: "qc = QuantumCircuit(3)", explanation: "Allocate 3 qubits in ground state |000>" },
      { code: "qc.h(range(3))", explanation: "Apply Hadamard gate to all 3 qubits simultaneously" },
      { code: "sv = Statevector.from_instruction(qc)", explanation: "Simulate exact statevector" },
      { code: "print(f'3-Qubit Circuit Statevector dimension: {sv.dim}')", explanation: "Display dimension 2^3 = 8" },
      { code: "print('Amplitudes for |000> through |111>:')", explanation: "Label" },
      { code: "for idx, amp in enumerate(sv.data):", explanation: "Loop amplitudes" },
      { code: "    print(f'  |{idx:03b}> : {amp.real:.4f} + {amp.imag:.4f}j')", explanation: "Display amplitudes (1/sqrt(8) = 0.3536)" },
      { code: "", explanation: "" },
      { code: "# 2. Classical RAM requirement calculation for n qubits", explanation: "Exponential scaling" },
      { code: "print('\\nScaling Analysis: Why Classical Supercomputers Fail:')", explanation: "Header" },
      { code: "for n in [10, 20, 30, 40, 50]:", explanation: "Qubit milestones" },
      { code: "    states = 2**n", explanation: "Total complex amplitudes required" },
      { code: "    ram_bytes = states * 16  # 16 bytes per complex128 number", explanation: "Memory demand" },
      { code: "    ram_gb = ram_bytes / (1024**3)", explanation: "Convert to GB" },
      { code: "    if ram_gb < 1024:", explanation: "" },
      { code: "        ram_str = f'{ram_gb:.4f} GB'", explanation: "" },
      { code: "    elif ram_gb < 1024**2:", explanation: "" },
      { code: "        ram_str = f'{ram_gb / 1024:.2f} TB'", explanation: "" },
      { code: "    else:", explanation: "" },
      { code: "        ram_str = f'{ram_gb / (1024**2):.2f} Petabytes (PB)'", explanation: "" },
      { code: "    print(f'  {n:2d} Qubits -> {states:16,d} Amplitudes -> {ram_str}')", explanation: "Print scaling" }
    ],
    executionFlow: [
      { number: 1, title: "Create Qiskit Circuit", description: "Allocate 3 qubits and apply Hadamard gates to create full superposition." },
      { number: 2, title: "Extract Statevector", description: "Use Qiskit Statevector to inspect exact complex probability amplitudes." },
      { number: 3, title: "Calculate Memory Explosion", description: "Demonstrate why 50 qubits requires 16 Petabytes of RAM, creating the physical foundation for quantum advantage." }
    ],
    input: "Qiskit QuantumCircuit(3) with H gates applied to all wires.",
    output: "3-Qubit Circuit Statevector dimension: 8\nAmplitudes for |000> through |111>: 0.3536 each\n10 Qubits -> 1,024 Amplitudes (0.000015 GB)\n30 Qubits -> 1,073,741,824 Amplitudes (16.00 GB)\n50 Qubits -> 1.12 x 10^15 Amplitudes (16.00 Petabytes)",
    interpretation: "In Qiskit, each added qubit doubles the Hilbert space dimension (2^n). At 50 qubits, holding the state vector classically requires 16 Petabytes of RAM, demonstrating why quantum hardware provides an exponential computational advantage.",
    colabInstructions: [
      "Click 'Copy for Google Colab' to copy the complete runnable script",
      "Open Google Colab at colab.research.google.com",
      "Paste into a code cell and press Shift + Enter to run",
    ],
  },
  mcqs: [
    {
      id: 'q1',
      question: 'Why did Richard Feynman propose building quantum computers in 1981?',
      options: [
        { id: 'a', text: 'Because nature operates by quantum mechanics, and simulating quantum physical systems on classical computers requires exponential computational resources' },
        { id: 'b', text: 'To mine cryptocurrency' },
        { id: 'c', text: 'Because silicon had run out' },
        { id: 'd', text: 'To build faster television screens' },
      ],
      correctAnswer: 'a',
      explanation: 'Feynman realized that simulating quantum physics classically scales exponentially with particle count, proposing that a quantum system could simulate other quantum systems with polynomial overhead.',
      incorrectFeedback: 'Feynman sought a computer capable of efficiently simulating quantum mechanics.',
    },
    {
      id: 'q2',
      question: 'What is the dimensionality of the Hilbert space for a 50-qubit quantum computer?',
      options: [
        { id: 'a', text: '50 dimensions' },
        { id: 'b', text: '2^50 ≈ 1.125 quadrillion dimensions' },
        { id: 'c', text: '50^2 = 2,500 dimensions' },
        { id: 'd', text: '100 dimensions' },
      ],
      correctAnswer: 'b',
      explanation: 'The Hilbert space dimension equals 2^n where n is the number of qubits. For 50 qubits: 2^50 = 1,125,899,906,842,624 complex amplitudes, requiring 16 petabytes of classical RAM to simulate.',
      incorrectFeedback: 'Remember: quantum state space grows exponentially as 2^n, not linearly or polynomially.',
    },
    {
      id: 'q3',
      question: 'What fundamental physical limit is causing Moore\'s Law to break down in silicon transistors?',
      options: [
        { id: 'a', text: 'Running out of silicon sand' },
        { id: 'b', text: 'Quantum tunneling at atomic scales (sub-5nm gate widths)' },
        { id: 'c', text: 'Cost of manufacturing' },
        { id: 'd', text: 'Energy consumption' },
      ],
      correctAnswer: 'b',
      explanation: 'At transistor gate widths below 5 nanometers (approaching atomic scales), electrons quantum tunnel through insulating barriers, causing uncontrolled leakage current and logic errors.',
      incorrectFeedback: 'The limitation is quantum mechanical, not economic or material availability.',
    },
    {
      id: 'q4',
      question: 'Which complexity class contains problems solvable efficiently on quantum computers but believed intractable classically?',
      options: [
        { id: 'a', text: 'P (Polynomial time)' },
        { id: 'b', text: 'NP (Nondeterministic Polynomial)' },
        { id: 'c', text: 'BQP (Bounded-error Quantum Polynomial)' },
        { id: 'd', text: 'EXPTIME (Exponential time)' },
      ],
      correctAnswer: 'c',
      explanation: 'BQP (Bounded-error Quantum Polynomial time) is the complexity class of decision problems solvable by quantum computers in polynomial time with error probability ≤ 1/3. Examples include integer factorization (Shor\'s algorithm) and unstructured search speedup (Grover\'s algorithm).',
      incorrectFeedback: 'Classical complexity classes like P and NP don\'t capture quantum computational advantages.',
    },
    {
      id: 'q5',
      question: 'How many complex numbers are required to classically simulate the quantum state of a caffeine molecule (24 atoms, 102 electrons)?',
      options: [
        { id: 'a', text: 'Approximately 24 × 10^6 numbers' },
        { id: 'b', text: 'More than the number of atoms in the observable universe (10^80)' },
        { id: 'c', text: '102 complex numbers' },
        { id: 'd', text: 'Approximately 2^24 ≈ 16 million numbers' },
      ],
      correctAnswer: 'b',
      explanation: 'Simulating 102 electrons requires tracking ~2^102 ≈ 5×10^30 quantum states. With electron spin and orbital configurations, the state space exceeds 10^80 complex amplitudes—more numbers than atoms in the universe. This is why classical supercomputers cannot simulate molecular chemistry accurately.',
      incorrectFeedback: 'Quantum molecular simulation requires exponentially large state spaces, not linear or small polynomial scaling.',
    },
  ],
};

export const historyOfQC: Topic = {
  id: 'history-of-qc',
  moduleId: 'quantum-foundations',
  number: 2,
  title: 'History of Quantum Computing: From Theory to Silicon',
  description: 'Trace the lineage of quantum information: from Planck and Einstein to Feynman, Deutsch, Shor, Grover, and modern noisy intermediate-scale quantum (NISQ) devices.',
  objectives: [
    'Chronicle key theoretical milestones (Feynman, Benioff, Deutsch)',
    'Understand the seismic impact of Shor’s Algorithm (1994) and Grover’s Search (1996)',
    'Survey modern physical implementations: Superconducting circuits, Trapped Ions, Photonic, and Silicon spin qubits',
  ],
  story: `In 1994, an applied mathematician at Bell Laboratories named Peter Shor published an algorithm that sent a shiver through the global intelligence and banking communities.
  
Shor proved that a sufficiently large quantum computer could factor large composite integers in polynomial time ($O((\\log N)^3)$).
  
Virtually all modern global cybersecurity—including RSA public-key encryption, HTTPS internet banking, and encrypted military transmissions—relies on the assumption that factoring a 2048-bit integer would take the fastest classical supercomputers billions of years.
  
Shor's algorithm proved that a quantum computer could break that encryption in a few hours. Overnight, quantum computing transformed from an academic curiosity into a multibillion-dollar global geopolitical race.`,
  motivation: `**The historical arc**: Understanding how quantum computing evolved from thought experiments to cloud-accessible physical QPUs helps you appreciate current technological roadblocks and future breakthroughs.`,
  concept: {
    simple: `The story of quantum computing in 4 acts:
1. **1900-1930s (Physics)**: Einstein, Bohr, and Schrödinger discover that atoms follow strange quantum rules.
2. **1980s (The Dream)**: Feynman and David Deutsch realize we can build computers that use these quantum rules.
3. **1990s (The Proof)**: Peter Shor and Lov Grover invent algorithms proving quantum computers can crack codes and search databases at blinding speed.
4. **Today (Hardware)**: Tech giants and startups build real physical quantum chips in sub-zero dilution refrigerators!`,
    technical: `Key historical milestones:
- 1980 (Paul Benioff): Showed quantum mechanical Turing machines are thermodynamically possible.
- 1985 (David Deutsch): Formulated the Universal Quantum Turing Machine and first quantum algorithm.
- 1994 (Peter Shor): Polynomial-time prime factorization algorithm.
- 1996 (Lov Grover): $O(\\sqrt{N})$ quadratic database search algorithm.
- 2019 (Google Quantum AI): Sycamore 53-qubit processor demonstrates quantum computational supremacy on random circuit sampling.`,
  },
  keyTerms: [
    { term: 'Shor’s Algorithm', simple: 'The famous quantum algorithm that can crack modern internet encryption (RSA) by factoring large numbers quickly.', technical: 'Polynomial-time quantum algorithm for integer factorization and discrete logarithms using Quantum Fourier Transform.' },
    { term: 'NISQ Era', simple: 'Noisy Intermediate-Scale Quantum: our current era of 50-1,000 qubit machines that are powerful but prone to noise and errors.', technical: 'Current computational epoch characterized by 50–1000 noisy physical qubits without fault-tolerant quantum error correction (John Preskill, 2018).' },
  ],
  howItWorks: [
    { number: 1, title: 'Theoretical Foundation (1980s)', description: 'Deutsch proves quantum parallelism using unitary quantum gates.' },
    { number: 2, title: 'Algorithmic Speedup (1990s)', description: 'Shor and Grover prove exponential and polynomial advantages over classical computing.' },
    { number: 3, title: 'Physical Realization (2000s-Present)', description: 'Superconducting transmon qubits and trapped ytterbium ions transition from physics labs to cloud APIs.' },
  ],
  applications: [
    { title: 'Post-Quantum Cryptography (PQC)', problem: 'NIST must standardize new encryption algorithms before fault-tolerant quantum computers break RSA.', solution: 'Lattice-based cryptography algorithms (Kyber, Dilithium) replace factoring-based public key infrastructure.' },
  ],
  activity: {
    type: 'mcq',
    title: 'Milestone Association',
    question: 'Which quantum algorithm, discovered in 1994, proved that quantum computers could break RSA public-key encryption in polynomial time?',
    options: [
      { id: 'a', text: 'Shor’s Algorithm' },
      { id: 'b', text: 'Grover’s Algorithm' },
      { id: 'c', text: 'The PageRank Algorithm' },
      { id: 'd', text: 'Dijkstra’s Algorithm' },
    ],
    correctAnswer: 'a',
    explanation: 'Peter Shor’s 1994 prime factorization algorithm demonstrated an exponential speedup over the best known classical factoring algorithms, threatening RSA encryption.',
    hint: 'Peter Shor discovered the factoring algorithm.',
  },
  pythonHandsOn: {
    title: "Executing Deutsch's Historic Quantum Algorithm (1985) in Qiskit",
    description: "Build and run David Deutsch's landmark 1985 quantum algorithm to determine if a Boolean function is constant or balanced in a single evaluation.",
    packages: ["qiskit", "qiskit-aer"],
    installCommand: "pip install qiskit qiskit-aer",
    imports: [
      { code: "from qiskit import QuantumCircuit", explanation: "Qiskit circuit constructor" },
      { code: "from qiskit.quantum_info import Statevector", explanation: "Statevector simulator" }
    ],
    code: [
      { code: "# Deutsch Algorithm: Determine if f(x) is constant or balanced in 1 query", explanation: "Setup" },
      { code: "# Let f(x) be a balanced function: f(0)=0, f(1)=1 (implemented via CNOT)", explanation: "Oracle definition" },
      { code: "qc = QuantumCircuit(2, 1)", explanation: "2 qubits: q0=input, q1=ancilla; 1 classical bit" },
      { code: "# Step 1: Initialize ancilla to |1> and apply Hadamard to both qubits", explanation: "Superposition prep" },
      { code: "qc.x(1)", explanation: "Put ancilla in |1>" },
      { code: "qc.h([0, 1])", explanation: "Create state |+>|->" },
      { code: "# Step 2: Query the quantum oracle (CNOT implements balanced f(x)=x)", explanation: "Oracle query" },
      { code: "qc.cx(0, 1)", explanation: "Phase kickback from target |-> into control |+>" },
      { code: "# Step 3: Interference on input qubit", explanation: "Interference" },
      { code: "qc.h(0)", explanation: "Interference transforms |- > into |1> for balanced function" },
      { code: "qc.measure(0, 0)", explanation: "Measure input qubit" },
      { code: "print('Deutsch Algorithm Circuit Diagram in Qiskit:')", explanation: "Print" },
      { code: "print(qc.draw('text'))", explanation: "Draw circuit ASCII" },
      { code: "sv = Statevector.from_instruction(qc.remove_final_measurements(inplace=False))", explanation: "Analyze" },
      { code: "print('\\nFinal State Vector:', sv.data.round(3))", explanation: "State" },
      { code: "print('Result: Measuring qubit 0 yields 1, proving f(x) is BALANCED in 1 query!')", explanation: "Conclusion" }
    ],
    executionFlow: [
      { number: 1, title: "Initialize Input & Ancilla", description: "Set input to |+> and ancilla to |-> using X and H gates." },
      { number: 2, title: "Phase Kickback Oracle", description: "The balanced CNOT oracle kicks back a negative phase into the input superposition." },
      { number: 3, title: "Readout via Interference", description: "The final Hadamard reveals whether the function is constant (0) or balanced (1) in a single query." }
    ],
    input: "2-qubit Deutsch circuit with balanced oracle (CNOT).",
    output: "Circuit ASCII showing H, CNOT, H sequence.\nFinal State Vector shows qubit 0 collapsed to state |1>.\nResult: Proves function is BALANCED in 1 query vs 2 classical queries.",
    interpretation: "David Deutsch proved in 1985 that quantum parallelism combined with phase kickback can solve a problem in 1 evaluation where any classical deterministic algorithm requires at least 2 queries.",
    colabInstructions: [
      "Click 'Copy for Google Colab' to copy the complete runnable script",
      "Open Google Colab at colab.research.google.com",
      "Paste into a code cell and press Shift + Enter to run",
    ],
  },
  mcqs: [
    {
      id: 'q1',
      question: 'What does the acronym NISQ stand for in modern quantum computing?',
      options: [
        { id: 'a', text: 'Noisy Intermediate-Scale Quantum' },
        { id: 'b', text: 'National Intelligence Security Quantum' },
        { id: 'c', text: 'Nonlinear Integrated Silicon Qubits' },
        { id: 'd', text: 'Numerical Instruction Speed Quotient' },
      ],
      correctAnswer: 'a',
      explanation: 'Coined by physicist John Preskill in 2018, NISQ refers to the current generation of 50-to-hundreds of physical qubits that lack fault-tolerant error correction.',
      incorrectFeedback: 'NISQ stands for Noisy Intermediate-Scale Quantum.',
    },
    {
      id: 'q2',
      question: 'Who developed the first quantum algorithm (Deutsch Algorithm) in 1985 that demonstrated quantum advantage over classical computation?',
      options: [
        { id: 'a', text: 'Richard Feynman' },
        { id: 'b', text: 'David Deutsch' },
        { id: 'c', text: 'Peter Shor' },
        { id: 'd', text: 'Lov Grover' },
      ],
      correctAnswer: 'b',
      explanation: 'David Deutsch published the first quantum algorithm in 1985, proving that a quantum computer could determine if a Boolean function is constant or balanced in a single query—exponentially faster than any classical deterministic algorithm.',
      incorrectFeedback: 'David Deutsch created the first quantum algorithm demonstrating quantum speedup in 1985.',
    },
    {
      id: 'q3',
      question: 'In which year did Peter Shor publish his groundbreaking integer factorization algorithm that threatens RSA encryption?',
      options: [
        { id: 'a', text: '1981' },
        { id: 'b', text: '1985' },
        { id: 'c', text: '1994' },
        { id: 'd', text: '2019' },
      ],
      correctAnswer: 'c',
      explanation: 'Peter Shor published his polynomial-time quantum algorithm for integer factorization in 1994, demonstrating that a sufficiently large fault-tolerant quantum computer could break RSA-2048 encryption in hours instead of billions of years.',
      incorrectFeedback: 'Shor\'s algorithm was published in 1994, triggering massive government investment in quantum computing research.',
    },
    {
      id: 'q4',
      question: 'What historic milestone did Google claim in 2019 with their Sycamore quantum processor?',
      options: [
        { id: 'a', text: 'Breaking Bitcoin encryption' },
        { id: 'b', text: 'Quantum supremacy by performing a random circuit sampling task in 200 seconds that would take a classical supercomputer 10,000 years' },
        { id: 'c', text: 'Building the first error-corrected logical qubit' },
        { id: 'd', text: 'Simulating a caffeine molecule' },
      ],
      correctAnswer: 'b',
      explanation: 'Google\'s 53-qubit Sycamore processor completed a random quantum circuit sampling task in 200 seconds, which they estimated would take the world\'s fastest supercomputer approximately 10,000 years—the first experimental demonstration of quantum computational supremacy.',
      incorrectFeedback: 'Google claimed quantum supremacy in 2019 by solving a specific sampling problem exponentially faster than classical supercomputers.',
    },
    {
      id: 'q5',
      question: 'What technological breakthrough in the 1990s enabled physical implementation of quantum logic gates?',
      options: [
        { id: 'a', text: 'Laser cooling and ion trap technology' },
        { id: 'b', text: 'Invention of the transistor' },
        { id: 'c', text: 'Discovery of superconductivity' },
        { id: 'd', text: 'Development of fiber optic cables' },
      ],
      correctAnswer: 'a',
      explanation: 'Laser cooling techniques (Nobel Prize 1997) and Paul trap technology allowed physicists to isolate and manipulate individual ions at microkelvin temperatures, enabling the first experimental quantum logic gates in the mid-1990s by groups at NIST and Innsbruck.',
      incorrectFeedback: 'Ion trap quantum computing became practical due to laser cooling and electromagnetic confinement techniques developed in the 1990s.',
    },
  ],
};

export const classicalVsQuantum: Topic = {
  id: 'classical-vs-quantum',
  moduleId: 'quantum-foundations',
  number: 3,
  title: 'Classical vs Quantum Computing: Side-by-Side Comparison',
  description: 'Contrast deterministic bits and Boolean logic with coherent qubits, unitary operations, and probabilistic measurement.',
  objectives: [
    'Compare bits (0 or 1) with qubits (superposition of |0> and |1>)',
    'Contrast Boolean gates (AND, OR, NOT) with Unitary matrix gates (H, X, CNOT)',
    'Understand the irreversible nature of measurement versus reversible unitary evolution',
  ],
  story: `Imagine reading a book.
  
In a **Classical Book**, each page has words printed in black ink. Page 42 has a definite sentence that is either true or false. You can read it, put a bookmark in it, come back tomorrow, and Page 42 is still exactly the same. You can copy the page on a Xerox photocopier.
  
In a **Quantum Book**, all the pages exist in a shimmering, translucent haze containing all possible stories simultaneously!
  
As soon as your conscious eyes look at Page 42, the quantum haze instantly freezes (collapses) into one specific story, and all the other possible storylines vanish forever! Furthermore, the laws of quantum mechanics (the No-Cloning Theorem) forbid you from ever making an exact photocopy of that quantum page.`,
  motivation: `**Unlearning classical assumptions**: To master quantum computing, you must discard classical intuitions: information cannot always be copied, gates must be reversible, and looking at data permanently alters it.`,
  concept: {
    simple: `Classical vs Quantum at a glance:
- **Classical Bit**: A light switch. It is either OFF (0) or ON (1).
- **Quantum Qubit**: A sphere. It can point to the North Pole (|0>), the South Pole (|1>), or anywhere on the surface (a blend of both!).
- **Classical Gates**: Destroy information (e.g. 2 inputs go into an AND gate, but only 1 comes out; you cannot reverse it).
- **Quantum Gates**: Reversible rotations of the sphere; zero information is ever lost until you measure!`,
    technical: `Classical computing operates on deterministic Boolean logic functions $f: \\{0, 1\\}^n \\rightarrow \\{0, 1\\}^m$. Quantum computing operates on pure state vectors $|\\psi\\rangle \\in \\mathbb{C}^2$ evolved via unitary operator matrices $U \\in U(2^n)$ satisfying $U^\\dagger U = I$. By Landauer's principle, irreversible classical gates dissipate heat ($k_B T \\ln 2$), whereas unitary quantum evolution is dissipationless and reversible.`,
  },
  keyTerms: [
    { term: 'No-Cloning Theorem', simple: 'A fundamental law of physics: it is impossible to make an exact copy of an unknown quantum state.', technical: 'Mathematical proof (Wootters, Zurek, Dieks 1982) stating that there exists no unitary transformation $U$ such that $U|\\psi\\rangle|0\\rangle = |\\psi\\rangle|\\psi\\rangle$ for arbitrary $|\\psi\\rangle$.' },
    { term: 'Unitary Operator', simple: 'A reversible quantum transformation that preserves the total probability of 100%.', technical: 'A bounded linear operator $U$ on a Hilbert space satisfying $U^\\dagger U = U U^\\dagger = I$, preserving inner products $\\langle U\\psi | U\\phi \\rangle = \\langle \\psi | \\phi \\rangle$.' },
    { term: 'Reversibility', simple: 'Every quantum step can be run backwards to recover the exact starting state.', technical: 'Unitary operations have well-defined inverse operators $U^{-1} = U^\\dagger$.' },
  ],
  equations: [
    {
      latex: 'U^\\dagger U = I, \\quad \\sum_i |\\alpha_i|^2 = 1',
      explanation: 'Unitary Condition (left) and Probability Conservation (right): ensures total measurement probability is strictly conserved at 1.0 across all transformations.',
      symbols: [
        { symbol: 'U^\\dagger', meaning: 'Conjugate transpose (Hermitian adjoint)', interpretation: 'The reverse transformation' },
        { symbol: 'I', meaning: 'Identity matrix', interpretation: 'Unchanged state' },
        { symbol: '|\\alpha_i|^2', meaning: 'Probability of outcome i', interpretation: 'Born rule measurement probability' },
      ],
      example: {
        description: 'Applying a Hadamard gate H twice in succession: H * H = Identity matrix I.',
        calculation: 'H \\cdot H = I \\implies H(H|0\\rangle) = |0\\rangle',
        result: 'Reversible: running gate twice restores initial state',
      },
    },
  ],
  howItWorks: [
    { number: 1, title: 'Classical Bit Storage', description: 'Stored as presence (1) or absence (0) of ~10,000 electrons in a capacitor.' },
    { number: 2, title: 'Quantum Qubit Storage', description: 'Stored as microscopic quantum degrees of freedom (electron spin up/down, superconducting flux).' },
    { number: 3, title: 'Information Evolution', description: 'Classical uses non-reversible logic gates (NAND); quantum uses reversible unitary rotations.' },
  ],
  applications: [
    { title: 'Ultra-Secure Quantum Key Distribution (QKD)', problem: 'Eavesdroppers tapping fiber-optic cables without detection.', solution: 'By the No-Cloning Theorem, any hacker attempting to copy or intercept quantum keys alters the state, instantly exposing their presence.' },
  ],
  activity: {
    type: 'mcq',
    title: 'No-Cloning Check',
    question: 'Can you write a quantum circuit that takes an unknown qubit |psi> and outputs two identical copies |psi>|psi>?',
    options: [
      { id: 'a', text: 'No, the No-Cloning Theorem proves an unknown quantum state cannot be copied' },
      { id: 'b', text: 'Yes, using a standard copy-paste command' },
      { id: 'c', text: 'Yes, using an X gate' },
      { id: 'd', text: 'Only if the computer is connected to the internet' },
    ],
    correctAnswer: 'a',
    explanation: 'The No-Cloning Theorem is a fundamental mathematical theorem of quantum mechanics proving that no quantum operation can create an exact copy of an arbitrary unknown state.',
    hint: 'Is cloning permitted in quantum mechanics?',
  },
  pythonHandsOn: {
    title: "Proving Reversibility of Quantum Unitaries in Qiskit",
    description: "Demonstrate that unlike irreversible classical gates (AND/OR), quantum gates are always reversible unitary matrices (U * U\u2020 = I).",
    packages: ["qiskit", "numpy"],
    installCommand: "pip install qiskit numpy",
    imports: [
      { code: "from qiskit import QuantumCircuit", explanation: "Import circuit constructor" },
      { code: "from qiskit.quantum_info import Operator, Statevector", explanation: "Extract matrix operators and states" },
      { code: "import numpy as np", explanation: "Matrix math" }
    ],
    code: [
      { code: "# 1. Demonstrate Reversibility of Hadamard: H * H = Identity", explanation: "Hadamard reversibility" },
      { code: "qc = QuantumCircuit(1)", explanation: "Single qubit in |0>" },
      { code: "qc.h(0)  # Put into superposition", explanation: "First H gate" },
      { code: "sv_super = Statevector.from_instruction(qc)", explanation: "Extract superposition" },
      { code: "print('After 1st Hadamard (Superposition):', sv_super.data.round(4))", explanation: "Amplitudes [0.7071, 0.7071]" },
      { code: "qc.h(0)  # Apply Hadamard again to reverse", explanation: "Second H gate" },
      { code: "sv_restored = Statevector.from_instruction(qc)", explanation: "Extract restored state" },
      { code: "print('After 2nd Hadamard (Restored):', sv_restored.data.round(4))", explanation: "Exact [1.0, 0.0] restored" },
      { code: "", explanation: "" },
      { code: "# 2. Prove Operator is Unitary: U * U_dagger = I", explanation: "Unitary proof" },
      { code: "op_h = Operator(QuantumCircuit(1).h(0))", explanation: "Hadamard operator" },
      { code: "u_matrix = op_h.data", explanation: "Matrix elements" },
      { code: "identity_check = np.dot(u_matrix, u_matrix.conj().T)", explanation: "U * U^dagger" },
      { code: "print('\\nHadamard Unitary Matrix:\\n', u_matrix.round(3))", explanation: "Matrix" },
      { code: "print('\\nU * U\u2020 (Identity Matrix):\\n', identity_check.round(3))", explanation: "Identity check" },
      { code: "print('\\nVerification: Quantum gates preserve total probability and have exact inverses.')", explanation: "Summary" }
    ],
    executionFlow: [
      { number: 1, title: "Create Superposition", description: "Apply Hadamard gate to transform |0> into |+>." },
      { number: 2, title: "Reverse Transformation", description: "Apply Hadamard gate again to reverse the state back to pure |0>." },
      { number: 3, title: "Matrix Unitary Verification", description: "Compute U * U\u2020 and verify that it equals the identity matrix, confirming zero information loss." }
    ],
    input: "QuantumCircuit(1) with sequential H gates.",
    output: "After 1st Hadamard: [0.7071, 0.7071]\nAfter 2nd Hadamard: [1.0, 0.0]\nU * U\u2020 = [[1, 0], [0, 1]]",
    interpretation: "Classical logic operations like AND/NAND lose information and dissipate heat (Landauer's Principle). Quantum circuits consist strictly of unitary transformations, meaning every quantum operation is mathematically reversible with zero fundamental entropy loss.",
    colabInstructions: [
      "Click 'Copy for Google Colab' to copy the complete runnable script",
      "Open Google Colab at colab.research.google.com",
      "Paste into a code cell and press Shift + Enter to run",
    ],
  },
  mcqs: [
    {
      id: 'q1',
      question: 'Which principle explains why classical logic gates like AND generate heat while quantum unitary gates are theoretically dissipationless?',
      options: [
        { id: 'a', text: 'Landauer’s Principle: erasing or destroying classical information dissipates physical heat ($k_B T \\ln 2$)' },
        { id: 'b', text: 'Ohm’s Law of electrical resistance' },
        { id: 'c', text: 'Newton’s Third Law' },
        { id: 'd', text: 'The Heisenberg Uncertainty Principle' },
      ],
      correctAnswer: 'a',
      explanation: 'Rolf Landauer proved in 1961 that erasing one bit of information dissipates a minimum thermodynamic energy of kT ln(2). Reversible quantum gates destroy no information.',
      incorrectFeedback: 'Landauer’s principle connects information erasure with thermodynamic heat generation.',
    },
  ],
};

export const whatIsQC: Topic = {
  id: 'what-is-qc',
  moduleId: 'quantum-foundations',
  number: 4,
  title: 'What is Quantum Computing? The Core Model',
  description: 'Understand the formal quantum circuit model: state preparation, unitary gate sequences, entanglement synthesis, and projective measurement.',
  objectives: [
    'Define the Quantum Circuit model of computation',
    'Understand bra-ket (Dirac) notation: |psi>, <phi|, <phi|psi>',
    'Trace the life cycle of a quantum algorithm from initialization to readout',
  ],
  story: `In 1939, Paul Dirac introduced a notation so clean and powerful that physicists have used it ever since: **Bra-Ket Notation**.
  
In Dirac notation, a column vector representing a quantum state is enclosed in a "ket": $|\\psi\\rangle$.
Its conjugate transpose row vector is enclosed in a "bra": $\\langle\\psi|$.
When you bring them together, you get a "bra-ket" (bracket!):
$$\\langle\\phi \\mid \\psi\\rangle$$
representing the inner product between two states.
  
With Dirac's elegant language, complex multidimensional matrix transformations become as simple and intuitive as basic algebra.`,
  motivation: `**The language of quantum mechanics**: Dirac notation is the universal language used across every quantum textbook, research paper, Qiskit script, and Cirq program in the world.`,
  concept: {
    simple: `A Quantum Computer is a machine that manipulates the quantum states of tiny particles (like electrons or photons) to solve math problems:
1. It starts with qubits in clean starting positions: $|000\\dots0\\rangle$.
2. It pushes them through a circuit of quantum gates (which rotate their probabilities and entangle them).
3. It measures them at the end, and the right answer pops out as a string of ordinary 0s and 1s!`,
    technical: `The standard circuit model of quantum computation specifies an initial state $|0\\rangle^{\\otimes n} \\in \\mathcal{H}^{\\otimes n}$, followed by sequential application of single- and two-qubit unitary operators drawn from a universal gate set $\\mathcal{G}$ (e.g. Clifford + $T$), terminated by von Neumann projective measurements in the computational $Z$-basis.`,
  },
  keyTerms: [
    { term: 'Ket ($|\\psi\\rangle$)', simple: 'A column vector representing a quantum state.', technical: 'A state vector in a complex vector space representing the state of a quantum system.' },
    { term: 'Bra ($\\langle\\psi|$)', simple: 'The matching row vector with conjugate numbers.', technical: 'The dual vector in the continuous dual space representing the Hermitian adjoint $\\langle\\psi| = (|\\psi\\rangle)^\\dagger$.' },
    { term: 'Universal Gate Set', simple: 'A small toolkit of quantum gates that can build any possible quantum circuit.', technical: 'A discrete set of unitary gates (e.g. {H, S, CNOT, T}) capable of approximating any arbitrary unitary transformation in $U(2^n)$ to arbitrary accuracy $\\epsilon$.' },
  ],
  equations: [
    {
      latex: '|\\psi\\rangle = \\alpha |0\\rangle + \\beta |1\\rangle = \\begin{pmatrix} \\alpha \\\\ \\beta \\end{pmatrix}, \\quad |\\alpha|^2 + |\\beta|^2 = 1',
      explanation: 'The state of a single qubit in Dirac notation: linear combination of basis states |0> and |1> with complex probability amplitudes alpha and beta.',
      symbols: [
        { symbol: '|0\\rangle', meaning: 'Computational basis state zero', interpretation: 'Vector [1, 0]^T' },
        { symbol: '|1\\rangle', meaning: 'Computational basis state one', interpretation: 'Vector [0, 1]^T' },
        { symbol: '\\alpha, \\beta', meaning: 'Complex amplitudes', interpretation: 'Numbers whose squared magnitudes give measurement probabilities' },
      ],
      example: {
        description: 'Equal superposition state |+>: alpha = 1/sqrt(2), beta = 1/sqrt(2).',
        calculation: '|\\alpha|^2 = (1/\\sqrt{2})^2 = 0.5, \\quad |\\beta|^2 = (1/\\sqrt{2})^2 = 0.5',
        result: '50% chance of measuring 0, 50% chance of measuring 1',
      },
    },
  ],
  howItWorks: [
    { number: 1, title: 'State Prep', description: 'Reset all qubits to |0> state.' },
    { number: 2, title: 'Gate Execution', description: 'Send precise microwave or laser pulses to rotate state vectors.' },
    { number: 3, title: 'Readout', description: 'Couple qubits to readout resonators to measure collapse into classical bitstrings.' },
  ],
  applications: [
    { title: 'Quantum Chemistry Simulation', problem: 'Calculating ground-state energy of lithium hydride (LiH).', solution: 'Variational Quantum Eigensolver (VQE) circuit evaluates molecular Hamiltonian on cloud QPUs.' },
  ],
  activity: {
    type: 'mcq',
    title: 'Dirac Notation Check',
    question: 'In Dirac notation, what does |0> represent mathematically?',
    options: [
      { id: 'a', text: 'The 2D column vector [1, 0]^T' },
      { id: 'b', text: 'The scalar number zero (0)' },
      { id: 'c', text: 'An empty file' },
      { id: 'd', text: 'A broken computer' },
    ],
    correctAnswer: 'a',
    explanation: '|0> represents the basis vector [1, 0]^T in the 2-dimensional complex Hilbert space of a single qubit.',
    hint: 'Remember that |0> is a vector, not a plain number.',
  },
  pythonHandsOn: {
    title: "Creating and Simulating a Bell Entangled State in Qiskit",
    description: "Construct the canonical Bell state (|00> + |11>)/sqrt(2) in Qiskit and simulate measurement correlations.",
    packages: ["qiskit", "qiskit-aer"],
    installCommand: "pip install qiskit qiskit-aer",
    imports: [
      { code: "from qiskit import QuantumCircuit", explanation: "Qiskit circuit class" },
      { code: "from qiskit.quantum_info import Statevector", explanation: "Simulate exact statevector" },
      { code: "from qiskit_aer import AerSimulator", explanation: "Shot-based simulator" }
    ],
    code: [
      { code: "# 1. Create a 2-qubit Bell State: (|00> + |11>)/sqrt(2)", explanation: "Setup Bell circuit" },
      { code: "qc = QuantumCircuit(2, 2)", explanation: "2 qubits and 2 classical bits" },
      { code: "qc.h(0)        # Put qubit 0 into equal superposition", explanation: "Create superposition on control" },
      { code: "qc.cx(0, 1)    # Entangle qubit 1 with qubit 0", explanation: "CNOT entangler" },
      { code: "print('Qiskit Bell State Circuit Diagram:')", explanation: "Diagram label" },
      { code: "print(qc.draw('text'))", explanation: "Print text-based circuit" },
      { code: "", explanation: "" },
      { code: "# 2. Theoretical Statevector", explanation: "Inspect statevector" },
      { code: "sv = Statevector.from_instruction(qc)", explanation: "Compute statevector" },
      { code: "print('\\nStatevector Amplitudes:')", explanation: "Label" },
      { code: "for state, prob in sv.probabilities_dict().items():", explanation: "Iterate probabilities" },
      { code: "    print(f'  |{state}> : Probability = {prob * 100:.1f}%')", explanation: "Show 50% for |00> and 50% for |11>" },
      { code: "", explanation: "" },
      { code: "# 3. Measure on AerSimulator (1024 shots)", explanation: "Simulate measurement" },
      { code: "qc.measure([0, 1], [0, 1])", explanation: "Add measurement gates" },
      { code: "sim = AerSimulator()", explanation: "Initialize simulator" },
      { code: "counts = sim.run(qc, shots=1024).result().get_counts()", explanation: "Run 1024 shots" },
      { code: "print('\\nAerSimulator Measurement Results (1024 shots):')", explanation: "Display counts" },
      { code: "print(' ', counts)", explanation: "Outcome dictionary" }
    ],
    executionFlow: [
      { number: 1, title: "Prepare Superposition", description: "Apply Hadamard gate to qubit 0." },
      { number: 2, title: "Entangle Wires", description: "Apply CNOT from qubit 0 to qubit 1, producing non-separable Bell state (|00> + |11>)/sqrt(2)." },
      { number: 3, title: "Measure Correlations", description: "Execute 1024 shots on AerSimulator confirming perfect correlation: only '00' and '11' are observed." }
    ],
    input: "QuantumCircuit with H(0) and CNOT(0, 1).",
    output: "Statevector: |00>: 50.0%, |11>: 50.0%\nAerSimulator counts (1024 shots): {'00': ~512, '11': ~512}",
    interpretation: "The two qubits are maximally entangled: measuring qubit 0 immediately determines the state of qubit 1 with 100% certainty, even before qubit 1 is measured.",
    colabInstructions: [
      "Click 'Copy for Google Colab' to copy the complete runnable script",
      "Open Google Colab at colab.research.google.com",
      "Paste into a code cell and press Shift + Enter to run",
    ],
  },
  mcqs: [
    {
      id: 'q1',
      question: 'What is the sum of the squared magnitudes of the probability amplitudes (|alpha|^2 + |beta|^2) for any valid quantum state?',
      options: [
        { id: 'a', text: 'Exactly 1.0 (100% total probability)' },
        { id: 'b', text: '0.0' },
        { id: 'c', text: '2.0' },
        { id: 'd', text: 'Infinity' },
      ],
      correctAnswer: 'a',
      explanation: 'Because measurement must yield some outcome, the probabilities of all mutually exclusive outcomes must sum to exactly 1.0 (the normalization condition).',
      incorrectFeedback: 'Total probability must always sum to 1.0.',
    },
  ],
};

export const quantumMechanicsBasics: Topic = {
  id: 'quantum-mechanics-basics',
  moduleId: 'quantum-foundations',
  number: 5,
  title: 'Quantum Mechanics Basics for Computer Scientists',
  description: 'The four essential quantum postulates demystified: State Spaces, Evolution, Measurement, and Composite Systems.',
  objectives: [
    'Master the 4 Postulates of Quantum Mechanics (Nielsen & Chuang framework)',
    'Understand Postulate 1: States as unit vectors in Hilbert space',
    'Understand Postulate 2: Evolution via Unitary transformations',
    'Understand Postulate 3: Measurement via Hermitian operators and projection',
    'Understand Postulate 4: Composite systems via Tensor Products',
  ],
  story: `In the 1920s, the greatest minds in physics—Albert Einstein, Niels Bohr, Werner Heisenberg, and Erwin Schrödinger—gathered in Brussels for the famous Solvay Conferences.
  
They were arguing over why matter at the atomic scale behaves like both a particle and a wave.
  
For computer scientists, you don't need to know the chemistry of atoms to use quantum computing. In their landmark textbook, Michael Nielsen and Isaac Chuang distilled the entire century of quantum physics into **Four Clean Mathematical Postulates**.
  
Just as you don't need to understand the solid-state silicon physics of transistors to write Python code, you only need these 4 mathematical postulates to program a quantum computer!`,
  motivation: `**The axiomatic foundation**: Everything in quantum algorithms—from basic Pauli gates to Shor’s algorithm—derives strictly from these 4 mathematical rules. Once you know them, quantum mechanics ceases to be mysterious.`,
  concept: {
    simple: `The 4 Rules of the Quantum Game:
1. **Rule 1 (Where it lives)**: A quantum state is an arrow pointing in a special math space.
2. **Rule 2 (How it moves)**: You can only rotate the arrow; you cannot stretch or shrink it (Unitary rules).
3. **Rule 3 (How you look at it)**: When you look (measure), the arrow snaps onto one of the axes, and you only see a plain classical number.
4. **Rule 4 (How they join together)**: When two qubits team up, you multiply their dimensions together using the **Tensor Product** ($\\otimes$).`,
    technical: `The 4 Postulates of Quantum Information:
- **Postulate 1**: Any isolated physical system is associated with a complex Hilbert space $\\mathcal{H}$. The state is described by a unit vector $|\\psi\\rangle$ with $\\langle\\psi|\\psi\\rangle = 1$.
- **Postulate 2**: The evolution of a closed quantum system is described by a unitary transformation: $|\\psi'\\rangle = U|\\psi\\rangle$.
- **Postulate 3**: Quantum measurements are described by a collection $\\{M_m\\}$ of measurement operators satisfying $\\sum_m M_m^\\dagger M_m = I$. The probability of outcome $m$ is $p(m) = \\langle\\psi|M_m^\\dagger M_m|\\psi\\rangle$.
- **Postulate 4**: The state space of a composite physical system is the tensor product $\\mathcal{H}_1 \\otimes \\mathcal{H}_2 \\otimes \\dots \\otimes \\mathcal{H}_n$.`,
  },
  keyTerms: [
    { term: 'Postulate 1 (State Space)', simple: 'States are arrows of length 1 in a complex space.', technical: 'Unit vectors in complex Hilbert space $\\mathcal{H}$.' },
    { term: 'Postulate 2 (Unitary Evolution)', simple: 'Things change by rotating, never by losing probability.', technical: 'Schrödinger equation integration yielding unitary operators $U = \\exp(-iHt/\\hbar)$.' },
    { term: 'Postulate 3 (Measurement)', simple: 'Looking destroys the wave and leaves behind one reality.', technical: 'Projective measurement inducing wavefunction collapse onto eigenspaces of Hermitian observables.' },
    { term: 'Postulate 4 (Tensor Product $\\otimes$)', simple: 'Combining qubits multiplies their sizes together exponentially.', technical: 'Kronecker tensor product mapping independent Hilbert spaces $\\mathcal{H}_A \\otimes \\mathcal{H}_B$.' },
  ],
  equations: [
    {
      latex: 'p(m) = \\langle \\psi \\mid M_m^\\dagger M_m \\mid \\psi \\rangle, \\quad |\\psi_{\\text{after}}\\rangle = \\frac{M_m |\\psi\\rangle}{\\sqrt{p(m)}}',
      explanation: 'Postulate 3 (Measurement & Collapse): computes probability of outcome m and the state collapse formula.',
      symbols: [
        { symbol: 'p(m)', meaning: 'Probability of outcome m', interpretation: 'Chance of seeing result m' },
        { symbol: 'M_m', meaning: 'Measurement operator', interpretation: 'Filter for outcome m' },
        { symbol: '|\\psi_{\\text{after}}\\rangle', meaning: 'Post-measurement state', interpretation: 'Frozen collapsed state' },
      ],
      example: {
        description: 'Measuring state |+> in Z-basis: M_0 = |0><0|. p(0) = 0.5. Post-measurement state collapses to |0>.',
        calculation: 'p(0) = 0.5 \\implies |\\psi_{\\text{after}}\\rangle = |0\\rangle',
        result: 'State permanently collapses to |0>',
      },
    },
  ],
  howItWorks: [
    { number: 1, title: 'Initialize Vector', description: 'Define unit vector in Hilbert space (Postulate 1).' },
    { number: 2, title: 'Apply Unitaries', description: 'Rotate state using gate matrices (Postulate 2).' },
    { number: 3, title: 'Tensor Together', description: 'Combine with other qubits via Kronecker product (Postulate 4).' },
    { number: 4, title: 'Project & Readout', description: 'Perform projective measurement to extract classical bits (Postulate 3).' },
  ],
  applications: [
    { title: 'Foundational Qubit Design', problem: 'Verifying that physical superconducting transmon microwave pulses satisfy quantum mechanical rules.', solution: 'Engineers use Postulate 2 to calibrate pulse duration for exact unitary fidelity.' },
  ],
  activity: {
    type: 'mcq',
    title: 'Postulate Identification',
    question: 'Which quantum postulate states that when two qubits are combined, their joint state space is formed using the Tensor Product (⊗)?',
    options: [
      { id: 'a', text: 'Postulate 4 (Composite Systems)' },
      { id: 'b', text: 'Postulate 1' },
      { id: 'c', text: 'Postulate 2' },
      { id: 'd', text: 'Postulate 3' },
    ],
    correctAnswer: 'a',
    explanation: 'Postulate 4 establishes that the Hilbert space of a composite system is the tensor product of the constituent subsystems.',
    hint: 'Which postulate governs combining multiple systems?',
  },
  pythonHandsOn: {
    title: "Verifying the 4 Postulates of Quantum Mechanics in Qiskit",
    description: "Directly implement and verify the four mathematical postulates of quantum mechanics using Qiskit.",
    packages: ["qiskit", "numpy"],
    installCommand: "pip install qiskit numpy",
    imports: [
      { code: "from qiskit import QuantumCircuit", explanation: "Circuit builder" },
      { code: "from qiskit.quantum_info import Statevector, Operator", explanation: "Statevector and operator algebra" },
      { code: "import numpy as np", explanation: "NumPy for numerical checks" }
    ],
    code: [
      { code: "# Postulate 1: State Space (Unit vector in Hilbert Space)", explanation: "Postulate 1" },
      { code: "sv0 = Statevector.from_label('0')", explanation: "Pure |0> state vector" },
      { code: "print('Postulate 1 - Statevector norm:', np.linalg.norm(sv0.data))", explanation: "Norm equals 1.0" },
      { code: "", explanation: "" },
      { code: "# Postulate 2: State Evolution (Unitary Transformation)", explanation: "Postulate 2" },
      { code: "qc = QuantumCircuit(1)", explanation: "Create circuit" },
      { code: "qc.h(0)  # Unitary Hadamard gate", explanation: "Apply H" },
      { code: "sv_evolved = sv0.evolve(qc)", explanation: "Evolve state vector with circuit" },
      { code: "print('Postulate 2 - Evolved State |+>:', sv_evolved.data.round(4))", explanation: "Amplitudes [0.7071, 0.7071]" },
      { code: "", explanation: "" },
      { code: "# Postulate 3: Measurement (Born Rule Probabilities)", explanation: "Postulate 3" },
      { code: "probs = sv_evolved.probabilities()", explanation: "Calculate probabilities" },
      { code: "print(f'Postulate 3 - Born Rule: P(0) = {probs[0]:.2f}, P(1) = {probs[1]:.2f}')", explanation: "50% each" },
      { code: "", explanation: "" },
      { code: "# Postulate 4: Composite Systems (Tensor Product Space)", explanation: "Postulate 4" },
      { code: "sv_qubit2 = Statevector.from_label('1')", explanation: "Second qubit in |1>" },
      { code: "sv_joint = sv_evolved.tensor(sv_qubit2)", explanation: "Tensor product |+> (x) |1>" },
      { code: "print('Postulate 4 - Joint 2-Qubit Statevector dimension:', sv_joint.dim)", explanation: "Dimension 4" },
      { code: "print('Joint State Amplitudes (|01> and |11>):', sv_joint.data.round(3))", explanation: "Amplitudes in 4D space" }
    ],
    executionFlow: [
      { number: 1, title: "Postulate 1: Hilbert Vector", description: "Initialize unit vector in 2D complex Hilbert space." },
      { number: 2, title: "Postulate 2: Unitary Evolution", description: "Evolve the state vector through a unitary Hadamard matrix." },
      { number: 3, title: "Postulate 3: Born Rule Readout", description: "Extract measurement probabilities |alpha|^2." },
      { number: 4, title: "Postulate 4: Composite System", description: "Form multi-qubit states using the tensor product." }
    ],
    input: "Qiskit Statevector operations across 1 and 2 qubits.",
    output: "Postulate 1: Norm = 1.0\nPostulate 2: Evolved state = [0.7071, 0.7071]\nPostulate 3: P(0) = 0.50, P(1) = 0.50\nPostulate 4: Joint dimension = 4",
    interpretation: "All quantum algorithms are governed by these four mathematical postulates: state space normalization, unitary evolution, Born rule measurement, and tensor product composition.",
    colabInstructions: [
      "Click 'Copy for Google Colab' to copy the complete runnable script",
      "Open Google Colab at colab.research.google.com",
      "Paste into a code cell and press Shift + Enter to run",
    ],
  },
  mcqs: [
    {
      id: 'q1',
      question: 'Why must quantum state vectors have a norm (length) of exactly 1.0 (Postulate 1)?',
      options: [
        { id: 'a', text: 'Because the total probability of all possible measurement outcomes must equal 100% (1.0)' },
        { id: 'b', text: 'Because numbers larger than 1 break Python' },
        { id: 'c', text: 'To save hard drive space' },
        { id: 'd', text: 'Because the speed of light is 1' },
      ],
      correctAnswer: 'a',
      explanation: 'Placeholder',
      incorrectFeedback: 'Placeholder',
    },
    {
      id: 'q2',
      question: 'What is the Heisenberg Uncertainty Principle formula for position and momentum?',
      options: [
        { id: 'a', text: 'Δx · Δp = 0' },
        { id: 'b', text: 'Δx · Δp ≥ ℏ/2' },
        { id: 'c', text: 'Δx + Δp = ℏ' },
        { id: 'd', text: 'Δx / Δp = constant' },
      ],
      correctAnswer: 'b',
      explanation: 'The Heisenberg Uncertainty Principle states that Δx · Δp ≥ ℏ/2, meaning you cannot simultaneously know both position and momentum with arbitrary precision. This is a fundamental limit of nature, not measurement equipment.',
      incorrectFeedback: 'The uncertainty relation is Δx · Δp ≥ ℏ/2, a fundamental quantum limit.',
    },
    {
      id: 'q3',
      question: 'What does the wave function ψ(x) represent in quantum mechanics?',
      options: [
        { id: 'a', text: 'The exact position of a particle' },
        { id: 'b', text: 'A probability amplitude; |ψ(x)|² gives probability density' },
        { id: 'c', text: 'The velocity of a particle' },
        { id: 'd', text: 'The energy of a particle' },
      ],
      correctAnswer: 'b',
      explanation: 'The wave function ψ(x) is a complex-valued probability amplitude. The squared magnitude |ψ(x)|² gives the probability density of finding the particle at position x (Born rule).',
      incorrectFeedback: 'Wave functions are probability amplitudes; their squared magnitudes give probabilities.',
    },
    {
      id: 'q4',
      question: 'Who won the Nobel Prize in Physics in 1927 for experimentally proving wave-particle duality?',
      options: [
        { id: 'a', text: 'Albert Einstein' },
        { id: 'b', text: 'Niels Bohr' },
        { id: 'c', text: 'Clinton Davisson and George Thomson' },
        { id: 'd', text: 'Richard Feynman' },
      ],
      correctAnswer: 'c',
      explanation: 'Clinton Davisson and George Thomson independently demonstrated electron diffraction through crystals (1927 Nobel Prize), proving that electrons exhibit wave-like interference patterns—confirming de Broglie\'s wave-particle duality hypothesis.',
      incorrectFeedback: 'Davisson and Thomson proved wave-particle duality experimentally with electron diffraction.',
    },
    {
      id: 'q5',
      question: 'What does Planck\'s constant (h = 6.626 × 10^-34 J·s) represent?',
      options: [
        { id: 'a', text: 'The speed of light' },
        { id: 'b', text: 'The quantum of action; the fundamental scale where quantum effects dominate' },
        { id: 'c', text: 'The mass of an electron' },
        { id: 'd', text: 'The gravitational constant' },
      ],
      correctAnswer: 'b',
      explanation: 'Planck\'s constant h (or ℏ = h/2π) sets the scale of quantum effects. It relates energy to frequency (E = hν) and momentum to wavelength (p = h/λ), defining the boundary between classical and quantum physics.',
      incorrectFeedback: 'Planck\'s constant is the fundamental quantum of action, setting the scale of quantum phenomena.',
    },
  ],
};

export const classicalBit: Topic = {
  id: 'classical-bit',
  moduleId: 'quantum-foundations',
  number: 6,
  title: 'The Classical Bit: Shannon Entropy & Silicon Gates',
  description: 'Understand the classical foundation: Claude Shannon’s binary digit, Boolean logic gates, and physical CMOS transistor implementations.',
  objectives: [
    'Define the classical bit as the fundamental atom of digital information',
    'Calculate Shannon Entropy: H(X) = -sum p(x) log2 p(x)',
    'Understand physical CMOS transistor implementation of 0 (0V) and 1 (3.3V/5V)',
  ],
  story: `In 1948, a 32-year-old mathematician at Bell Labs named Claude Shannon published a 55-page paper titled "A Mathematical Theory of Communication."
  
Before Shannon, people thought of communication in terms of copper telegraph wires, sound waves, or radio frequencies. Shannon did something revolutionary: he proved that *all* information—whether a symphony by Beethoven, a telephone call, or a photograph—can be digitized into a universal currency.
  
Shannon coined the word **bit** (short for "binary digit"). For 75 years, the bit has been the foundation of the modern technological world.`,
  motivation: `**The baseline of all computing**: You cannot understand the quantum leap of the qubit until you deeply understand the mathematical and physical limits of the classical bit.`,
  concept: {
    simple: `A classical bit is an absolute switch. It is either completely OFF (0) or completely ON (1). There is no middle ground, no maybe, no blurriness. Every smartphone app, video game, and website on Earth is made of billions of these tiny 0-and-1 switches flipping billions of times per second.`,
    technical: `A classical bit is an element of the Galois field $\\mathbb{F}_2 = \\{0, 1\\}$. In statistical thermodynamics and information theory, the information content of a discrete random variable $X$ is measured by Shannon Entropy: $H(X) = -\\sum_{x \\in \\mathcal{X}} P(x) \\log_2 P(x)$ bits. In physical hardware, a bit is stored as a voltage level in a Complementary Metal-Oxide-Semiconductor (CMOS) transistor circuit.`,
  },
  keyTerms: [
    { term: 'Bit (Binary Digit)', simple: 'The smallest unit of digital information, holding a value of either 0 or 1.', technical: 'A fundamental unit of classical information taking binary values in $\\{0, 1\\}$.' },
    { term: 'Shannon Entropy', simple: 'A formula that measures how much surprise or information is contained in a message.', technical: 'The expected value of information content: $H(X) = -\\sum P(x) \\log_2 P(x)$.' },
    { term: 'CMOS Transistor', simple: 'The tiny microscopic electrical switch inside computer chips.', technical: 'Field-effect transistor technology using complementary pairs of p-type and n-type MOSFETs for high noise immunity and low static power consumption.' },
  ],
  equations: [
    {
      latex: 'H(X) = -\\sum_{i=1}^n P(x_i) \\log_2 P(x_i)',
      explanation: 'Shannon Entropy: calculates the average amount of information (in bits) produced by an uncertain source.',
      symbols: [
        { symbol: 'H(X)', meaning: 'Entropy in bits', interpretation: 'Uncertainty or information density' },
        { symbol: 'P(x_i)', meaning: 'Probability of outcome i', interpretation: 'Likelihood of event' },
      ],
      example: {
        description: 'A fair coin flip where heads has P = 0.5 and tails has P = 0.5.',
        calculation: 'H = -[0.5 \\log_2(0.5) + 0.5 \\log_2(0.5)] = -[0.5(-1) + 0.5(-1)] = -[-1.0] = 1.0',
        result: 'A fair coin flip yields exactly 1.0 bit of Shannon information',
      },
    },
  ],
  howItWorks: [
    { number: 1, title: 'Voltage Encoding', description: '0V to 0.8V represents Low (0); 2.0V to 3.3V represents High (1).' },
    { number: 2, title: 'Logic Processing', description: 'NAND gates combine binary voltages to implement universal Boolean logic.' },
    { number: 3, title: 'Storage', description: 'Capacitor charges in DRAM or magnetic polarities on hard disk platters retain bit values.' },
  ],
  applications: [
    { title: 'Digital Telecommunications', problem: 'Compressing text and video files to transmit across fiber optic cables without loss.', solution: 'Huffman and Shannon-Fano coding compress files down to their theoretical Shannon entropy limit.' },
  ],
  activity: {
    type: 'mcq',
    title: 'Shannon Entropy Calculation',
    question: 'A biased coin lands on Heads 100% of the time (P = 1.0) and Tails 0% of the time (P = 0.0). How much Shannon information (entropy) is produced by flipping this coin?',
    options: [
      { id: 'a', text: '0.0 bits (Zero surprise: you already know the result with certainty)' },
      { id: 'b', text: '1.0 bit' },
      { id: 'c', text: '100 bits' },
      { id: 'd', text: '0.5 bits' },
    ],
    correctAnswer: 'a',
    explanation: 'When an outcome is 100% certain, there is zero uncertainty and zero surprise, yielding an entropy of exactly 0.0 bits: -(1.0 * log2(1.0)) = -(1.0 * 0) = 0.',
    hint: 'If you already know the outcome with 100% certainty, how much new information do you learn?',
  },
  pythonHandsOn: {
    title: "Comparing Classical Bits and Quantum Qubits in Qiskit",
    description: "Simulate bit flips and phase flips on single qubits using Qiskit, highlighting the difference between Boolean bits and quantum states.",
    packages: ["qiskit", "numpy"],
    installCommand: "pip install qiskit numpy",
    imports: [
      { code: "from qiskit import QuantumCircuit", explanation: "Circuit module" },
      { code: "from qiskit.quantum_info import Statevector", explanation: "Statevector module" }
    ],
    code: [
      { code: "# Classical bit can only be 0 or 1. A Qubit has phase and superposition.", explanation: "Introduction" },
      { code: "qc = QuantumCircuit(1)", explanation: "Initialize qubit in |0>" },
      { code: "print('Initial state |0>:', Statevector.from_instruction(qc).data.round(2))", explanation: "Initial state" },
      { code: "", explanation: "" },
      { code: "# Bit Flip (Pauli-X)", explanation: "Bit-flip" },
      { code: "qc.x(0)", explanation: "Flip |0> to |1>" },
      { code: "print('After Bit Flip X(|0>):', Statevector.from_instruction(qc).data.round(2))", explanation: "Result |1>" },
      { code: "", explanation: "" },
      { code: "# Superposition (Hadamard)", explanation: "Superposition" },
      { code: "qc.h(0)", explanation: "Apply H: transforms |1> into |->" },
      { code: "print('After Superposition H(|1>):', Statevector.from_instruction(qc).data.round(4))", explanation: "State |-> = [0.7071, -0.7071]" },
      { code: "", explanation: "" },
      { code: "# Phase Flip (Pauli-Z) has NO classical analog", explanation: "Phase-flip" },
      { code: "qc.z(0)", explanation: "Apply Z: flips phase of |-> to |+>" },
      { code: "print('After Phase Flip Z(|->):', Statevector.from_instruction(qc).data.round(4))", explanation: "State |+> = [0.7071, 0.7071]" },
      { code: "print('\\nNotice: Classical bits have only values; qubits have both values and quantum phases!')", explanation: "Summary" }
    ],
    executionFlow: [
      { number: 1, title: "Bit Flip Demo", description: "Apply Pauli-X gate to invert computational basis state." },
      { number: 2, title: "Superposition Demo", description: "Apply Hadamard gate to create equal amplitude combination." },
      { number: 3, title: "Phase Flip Demo", description: "Apply Pauli-Z gate demonstrating quantum phase modulation which does not exist classically." }
    ],
    input: "QuantumCircuit(1) with X, H, and Z operations.",
    output: "Initial state: [1.0, 0.0]\nAfter Bit Flip: [0.0, 1.0]\nAfter Superposition: [0.7071, -0.7071]\nAfter Phase Flip: [0.7071, 0.7071]",
    interpretation: "A classical bit is restricted to discrete states 0 or 1. A qubit possesses a continuous phase degree of freedom that enables constructive and destructive wave interference.",
    colabInstructions: [
      "Click 'Copy for Google Colab' to copy the complete runnable script",
      "Open Google Colab at colab.research.google.com",
      "Paste into a code cell and press Shift + Enter to run",
    ],
  },
  mcqs: [
    {
      id: 'q1',
      question: 'What is the maximum Shannon entropy that a single classical binary bit can store?',
      options: [
        { id: 'a', text: '1.0 bit' },
        { id: 'b', text: '2.0 bits' },
        { id: 'c', text: 'Infinite bits' },
        { id: 'd', text: '8.0 bits' },
      ],
      correctAnswer: 'a',
      explanation: 'Placeholder',
      incorrectFeedback: 'Placeholder',
    },
    {
      id: 'q2',
      question: 'What is Shannon entropy for a fair coin (50% heads, 50% tails)?',
      options: [
        { id: 'a', text: '0 bits' },
        { id: 'b', text: '1 bit' },
        { id: 'c', text: '2 bits' },
        { id: 'd', text: '0.5 bits' },
      ],
      correctAnswer: 'b',
      explanation: 'Shannon entropy H = -Σ p_i log₂(p_i). For a fair coin: H = -[0.5 log₂(0.5) + 0.5 log₂(0.5)] = -[0.5(-1) + 0.5(-1)] = 1 bit of uncertainty.',
      incorrectFeedback: 'A fair binary choice has exactly 1 bit of Shannon entropy.',
    },
    {
      id: 'q3',
      question: 'How many distinct states can n classical bits represent simultaneously?',
      options: [
        { id: 'a', text: 'Exactly 1 state (one of 2^n possible states)' },
        { id: 'b', text: '2^n states simultaneously' },
        { id: 'c', text: 'n states' },
        { id: 'd', text: '2n states' },
      ],
      correctAnswer: 'a',
      explanation: 'Classical bits exist in exactly one definite state at any time. While n bits can represent 2^n different states, they can only be in ONE of those states simultaneously. Quantum qubits, by contrast, can be in superpositions of all 2^n states.',
      incorrectFeedback: 'Classical bits are in exactly one state at a time; only quantum qubits superpose multiple states.',
    },
    {
      id: 'q4',
      question: 'What is the minimum voltage swing required to reliably represent 0 and 1 in modern CMOS logic?',
      options: [
        { id: 'a', text: 'Exactly 5 volts' },
        { id: 'b', text: 'Approximately 0.7-1.0 volts (depends on process node)' },
        { id: 'c', text: 'Exactly 1 volt' },
        { id: 'd', text: '12 volts' },
      ],
      correctAnswer: 'b',
      explanation: 'Modern CMOS processes (7nm, 5nm) use supply voltages around 0.7-0.9V with noise margins of ~100-200mV. Lower voltages save power but increase susceptibility to thermal noise and quantum tunneling.',
      incorrectFeedback: 'Modern low-power CMOS uses sub-1V logic levels, not the old 5V TTL standard.',
    },
    {
      id: 'q5',
      question: 'Who developed the mathematical theory of information in 1948, defining the bit as the fundamental unit?',
      options: [
        { id: 'a', text: 'Alan Turing' },
        { id: 'b', text: 'Claude Shannon' },
        { id: 'c', text: 'John von Neumann' },
        { id: 'd', text: 'Charles Babbage' },
      ],
      correctAnswer: 'b',
      explanation: 'Claude Shannon published "A Mathematical Theory of Communication" in 1948, founding information theory and defining the bit as the fundamental unit of information (binary digit).',
      incorrectFeedback: 'Claude Shannon founded information theory and coined the term "bit" in 1948.',
    },
  ],
};

export const quantumState: Topic = {
  id: 'quantum-state',
  moduleId: 'quantum-foundations',
  number: 8,
  title: 'The Quantum State: Pure States, Mixed States & Bloch Sphere',
  description: 'Visualize quantum states on the Bloch Sphere and differentiate between coherent pure states and statistical mixed density matrices.',
  objectives: [
    'Map single-qubit pure states to geometric coordinates (theta, phi) on the 3D Bloch Sphere',
    'Differentiate Pure States (|psi>) from Mixed States (Density Matrix rho)',
    'Calculate Bloch vector coordinates: x = sin(theta)cos(phi), y = sin(theta)sin(phi), z = cos(theta)',
  ],
  story: `Imagine standing at the exact North Pole of planet Earth.
  
You represent the state $|0\\rangle$. If you fly to the South Pole, you represent the state $|1\\rangle$.
  
Classical bits are like a magic elevator that can only exist at the North Pole or the South Pole. It can never exist anywhere in between.
  
A qubit, however, is free to roam anywhere on the entire surface of the globe! It can bask on the equator in the Galapagos Islands ($|+\\rangle$), swim off the coast of Kenya ($|i\\rangle$), or hike in the Himalayas.
  
This geometric globe is called the **Bloch Sphere**, invented by Swiss physicist Felix Bloch. It gives us a visual map of the quantum world.`,
  motivation: `**The mental model of quantum computing**: Every single-qubit quantum gate (X, Y, Z, Hadamard, Phase) is nothing more than rotating this sphere around different axes. Mastering the Bloch sphere gives you visual intuition for quantum algorithms.`,
  concept: {
    simple: `The Bloch Sphere is a 3D globe for a qubit:
- **North Pole**: $|0\\rangle$ (100% chance of measuring 0).
- **South Pole**: $|1\\rangle$ (100% chance of measuring 1).
- **Equator**: 50/50 superpositions!
- **Pure States**: Live right on the outer surface of the ball.
- **Mixed States**: Live inside the interior of the ball (because noise made them blurry).`,
    technical: `Any arbitrary pure single-qubit state can be parameterized on the unit 2-sphere $\\mathbb{S}^2$ up to unobservable global phase:
$$|\\psi\\rangle = \\cos\\left(\\frac{\\theta}{2}\\right)|0\\rangle + e^{i\\phi}\\sin\\left(\\frac{\\theta}{2}\\right)|1\\rangle$$
where $\\theta \\in [0, \\pi]$ is the polar angle and $\\phi \\in [0, 2\\pi)$ is the azimuthal phase angle. The corresponding Bloch vector $\\mathbf{r} = (\\langle X \\rangle, \\langle Y \\rangle, \\langle Z \\rangle) = (\\sin\\theta\\cos\\phi, \\sin\\theta\\sin\\phi, \\cos\\theta)$ has unit length $\\|\\mathbf{r}\\| = 1$ for pure states, and $\\|\\mathbf{r}\\| < 1$ for mixed density matrices $\\rho = \\frac{1}{2}(I + \\mathbf{r} \\cdot \\boldsymbol{\\sigma})$.`,
  },
  keyTerms: [
    { term: 'Bloch Sphere', simple: 'The 3D ball used to visualize the state of a single qubit.', technical: 'Geometrical representation of the pure state space of a 2-level quantum mechanical system (qubit) as the surface of a unit sphere.' },
    { term: 'Pure State', simple: 'A clean, 100% quantum state with no noise or uncertainty.', technical: 'A state that can be described by a single state vector $|\\psi\\rangle$ with density matrix idempotence $\\rho^2 = \\rho$ and purity $\\text{Tr}(\\rho^2) = 1$.' },
    { term: 'Mixed State', simple: 'A noisy blend of different quantum states.', technical: 'A statistical ensemble of pure states $\\rho = \\sum p_i |\\psi_i\\rangle\\langle\\psi_i|$ with purity $\\text{Tr}(\\rho^2) < 1$.' },
  ],
  equations: [
    {
      latex: '|\\psi\\rangle = \\cos\\left(\\frac{\\theta}{2}\\right)|0\\rangle + e^{i\\phi}\\sin\\left(\\frac{\\theta}{2}\\right)|1\\rangle',
      explanation: 'The universal Bloch Sphere parameterization of any single qubit state using polar angle theta and azimuthal phase phi.',
      symbols: [
        { symbol: '\\theta', meaning: 'Polar angle (0 to pi)', interpretation: 'Latitude: 0 is North Pole (|0>), pi is South Pole (|1>)' },
        { symbol: '\\phi', meaning: 'Azimuthal phase angle (0 to 2pi)', interpretation: 'Longitude: relative phase around the equator' },
      ],
      example: {
        description: 'Equator point theta = pi/2, phi = 0: cos(pi/4)|0> + sin(pi/4)|1> = (1/sqrt(2))|0> + (1/sqrt(2))|1> = |+>.',
        calculation: '\\cos(\\pi/4) = \\frac{1}{\\sqrt{2}}, \\quad \\sin(\\pi/4) = \\frac{1}{\\sqrt{2}}',
        result: 'State |+> on the positive X-axis of the equator',
      },
    },
  ],
  howItWorks: [
    { number: 1, title: 'Polar Angle (theta)', description: 'Controls the probability ratio between measuring 0 and 1.' },
    { number: 2, title: 'Azimuthal Angle (phi)', description: 'Controls the quantum phase (critical for quantum interference).' },
    { number: 3, title: 'Gate Rotations', description: 'Quantum gates rotate the vector around X, Y, or Z axes.' },
  ],
  applications: [
    { title: 'Qubit Calibration & Tomography', problem: 'Calibrating physical microwave control pulses on IBM Quantum superconducting chips.', solution: 'Quantum State Tomography measures X, Y, and Z projections to reconstruct the exact Bloch vector.' },
  ],
  activity: {
    type: 'mcq',
    title: 'Bloch Sphere Location',
    question: 'Where is the ground state |0> located on the Bloch Sphere?',
    options: [
      { id: 'a', text: 'At the North Pole (theta = 0)' },
      { id: 'b', text: 'At the South Pole (theta = pi)' },
      { id: 'c', text: 'On the Equator' },
      { id: 'd', text: 'At the center of the Earth' },
    ],
    correctAnswer: 'a',
    explanation: 'When theta = 0, cos(0/2) = cos(0) = 1, giving |psi> = 1|0> + 0|1> = |0>, which corresponds to the North Pole.',
    hint: 'Which pole corresponds to theta = 0?',
  },
  pythonHandsOn: {
    title: "Mapping Quantum States to Bloch Sphere Coordinates in Qiskit",
    description: "Parameterize an arbitrary qubit state using rotation angles theta and phi, and extract its 3D Bloch sphere vector.",
    packages: ["qiskit", "numpy"],
    installCommand: "pip install qiskit numpy",
    imports: [
      { code: "from qiskit import QuantumCircuit", explanation: "Qiskit circuit constructor" },
      { code: "from qiskit.quantum_info import Statevector", explanation: "Statevector representation" },
      { code: "import numpy as np", explanation: "Trigonometric and mathematical functions" }
    ],
    code: [
      { code: "# Define Bloch sphere spherical coordinates: theta (latitude), phi (longitude)", explanation: "Angles" },
      { code: "theta = np.pi / 3  # 60 degrees from north pole", explanation: "Polar angle" },
      { code: "phi = np.pi / 4    # 45 degrees azimuth", explanation: "Azimuthal angle" },
      { code: "", explanation: "" },
      { code: "# Construct state using Qiskit U gate: U(theta, phi, lambda)", explanation: "Gate application" },
      { code: "qc = QuantumCircuit(1)", explanation: "Single qubit" },
      { code: "qc.u(theta, phi, 0, 0)", explanation: "Apply U(theta, phi, 0) gate to |0>" },
      { code: "sv = Statevector.from_instruction(qc)", explanation: "Extract statevector" },
      { code: "alpha, beta = sv.data[0], sv.data[1]", explanation: "Unpack amplitudes" },
      { code: "print(f'State Amplitudes: alpha = {alpha:.4f}, beta = {beta:.4f}')", explanation: "Amplitudes" },
      { code: "", explanation: "" },
      { code: "# Calculate 3D Bloch Vector (x, y, z)", explanation: "Bloch coordinates" },
      { code: "x = 2 * np.real(np.conj(alpha) * beta)", explanation: "Bloch x coordinate" },
      { code: "y = 2 * np.imag(np.conj(alpha) * beta)", explanation: "Bloch y coordinate" },
      { code: "z = np.abs(alpha)**2 - np.abs(beta)**2", explanation: "Bloch z coordinate" },
      { code: "print(f'\\nBloch Sphere Coordinates (x, y, z):')", explanation: "Header" },
      { code: "print(f'  x = {x:.4f}  (expected: {np.sin(theta)*np.cos(phi):.4f})')", explanation: "X coord" },
      { code: "print(f'  y = {y:.4f}  (expected: {np.sin(theta)*np.sin(phi):.4f})')", explanation: "Y coord" },
      { code: "print(f'  z = {z:.4f}  (expected: {np.cos(theta):.4f})')", explanation: "Z coord" },
      { code: "print(f'Vector length: {np.sqrt(x**2 + y**2 + z**2):.4f} (Pure state on unit sphere surface)')", explanation: "Check purity" }
    ],
    executionFlow: [
      { number: 1, title: "Define Polar & Azimuthal Angles", description: "Set theta = pi/3 and phi = pi/4 on the unit sphere." },
      { number: 2, title: "Rotate State via U-Gate", description: "Use Qiskit U(theta, phi, 0) gate to position the qubit on the Bloch sphere." },
      { number: 3, title: "Compute Bloch Coordinates", description: "Calculate Cartesian coordinates (x, y, z) and verify that vector length equals 1." }
    ],
    input: "Theta = pi/3, Phi = pi/4 on 1-qubit circuit.",
    output: "Amplitudes: alpha = 0.8660, beta = 0.3536 + 0.3536j\nBloch Vector: x = 0.6124, y = 0.6124, z = 0.5000\nVector length: 1.0000",
    interpretation: "Every single-qubit pure state corresponds to a unique point on the surface of the 3D unit Bloch sphere, providing an intuitive geometric representation of quantum states.",
    colabInstructions: [
      "Click 'Copy for Google Colab' to copy the complete runnable script",
      "Open Google Colab at colab.research.google.com",
      "Paste into a code cell and press Shift + Enter to run",
    ],
  },
  mcqs: [
    {
      id: 'q1',
      question: 'What is the length of the Bloch vector for a completely pure quantum state?',
      options: [
        { id: 'a', text: 'Exactly 1.0 (it sits on the outer surface of the sphere)' },
        { id: 'b', text: '0.0 (it sits at the center)' },
        { id: 'c', text: 'Infinite' },
        { id: 'd', text: '0.5' },
      ],
      correctAnswer: 'a',
      explanation: 'Placeholder',
      incorrectFeedback: 'Placeholder',
    },
    {
      id: 'q2',
      question: 'What is the dimension of the Hilbert space for a single qubit?',
      options: [
        { id: 'a', text: '1 dimension' },
        { id: 'b', text: '2 dimensions (ℂ²)' },
        { id: 'c', text: '3 dimensions' },
        { id: 'd', text: 'Infinite dimensions' },
      ],
      correctAnswer: 'b',
      explanation: 'A single qubit state lives in a 2-dimensional complex Hilbert space ℂ². The basis states |0⟩ and |1⟩ span this space, and any qubit state is a superposition |ψ⟩ = α|0⟩ + β|1⟩.',
      incorrectFeedback: 'A qubit is a 2-dimensional complex vector space (ℂ²).',
    },
    {
      id: 'q3',
      question: 'What geometric surface represents all possible pure single-qubit states?',
      options: [
        { id: 'a', text: 'A flat 2D plane' },
        { id: 'b', text: 'The Bloch sphere (unit sphere in 3D)' },
        { id: 'c', text: 'A cube' },
        { id: 'd', text: 'A torus' },
      ],
      correctAnswer: 'b',
      explanation: 'The Bloch sphere is a unit sphere in 3D space where every point on the surface represents a unique pure qubit state. The north pole is |0⟩, south pole is |1⟩, and equatorial points are equal superpositions like |+⟩ and |−⟩.',
      incorrectFeedback: 'The Bloch sphere visualizes all pure qubit states on a unit sphere surface.',
    },
    {
      id: 'q4',
      question: 'For a valid quantum state |ψ⟩ = α|0⟩ + β|1⟩, what constraint must α and β satisfy?',
      options: [
        { id: 'a', text: 'α + β = 1' },
        { id: 'b', text: '|α|² + |β|² = 1 (normalization)' },
        { id: 'c', text: 'α = β' },
        { id: 'd', text: 'α · β = 0' },
      ],
      correctAnswer: 'b',
      explanation: 'Quantum states must be normalized: |α|² + |β|² = 1. This ensures that the sum of probabilities equals 100%. The coefficients α and β are complex numbers, so we use squared magnitudes.',
      incorrectFeedback: 'Quantum state normalization requires |α|² + |β|² = 1.',
    },
    {
      id: 'q5',
      question: 'What is a density matrix used for in quantum mechanics?',
      options: [
        { id: 'a', text: 'Only for pure states' },
        { id: 'b', text: 'To represent mixed (statistical) quantum states and decoherence' },
        { id: 'c', text: 'To calculate classical probabilities' },
        { id: 'd', text: 'To measure energy' },
      ],
      correctAnswer: 'b',
      explanation: 'Density matrices ρ = Σ p_i |ψ_i⟩⟨ψ_i| represent mixed quantum states (statistical ensembles) and decoherence. Pure states have ρ² = ρ (idempotent), while mixed states have Tr(ρ²) < 1.',
      incorrectFeedback: 'Density matrices generalize state vectors to handle mixed states and decoherence.',
    },
  ],
};

export const superposition: Topic = {
  id: 'superposition',
  moduleId: 'quantum-foundations',
  number: 9,
  title: 'Superposition: Beyond Binary Existence',
  description: 'Understand the principle of linear superposition: how quantum systems exist in coherent combinations of states simultaneously.',
  objectives: [
    'Define linear superposition as a linear combination of basis states',
    'Examine Schrödinger’s Cat thought experiment and macroscopic decoherence',
    'Differentiate quantum superposition from classical statistical uncertainty',
  ],
  story: `In 1935, Austrian physicist Erwin Schrödinger wanted to expose the bizarre, unsettling implications of quantum mechanics. He proposed a famous thought experiment:
  
Place a cat in a sealed steel chamber with a vial of hydrocyanic poison, a Geiger counter, and a single radioactive atom with a 50% chance of decaying over one hour.
  
If the atom decays, the counter triggers a hammer that shatters the vial, killing the cat. If the atom does not decay, the cat lives.
  
According to quantum mechanics, until an observer opens the chamber to look, the atom exists in a superposition of decayed and undecayed. Therefore, the cat exists in a coherent superposition:
$$|\\psi\\rangle = \\frac{1}{\\sqrt{2}}|\\text{Alive}\\rangle + \\frac{1}{\\sqrt{2}}|\\text{Dead}\\rangle$$
  
The cat is not "secretly alive" or "secretly dead." Nature mathematically maintains both realities simultaneously until observation forces a collapse.`,
  motivation: `**The engine of quantum parallelism**: Superposition allows an $n$-qubit quantum register to represent $2^n$ numbers simultaneously. A 300-qubit register can hold more simultaneous numbers than there are atoms in the universe.`,
  concept: {
    simple: `Think of a coin spinning on a table.
While it is spinning rapidly, is it Heads or Tails?
It is a blur of both! You can see both faces spinning in the air.
Only when you slam your hand down on the coin does it stop spinning and become either Heads or Tails.
Superposition is the spinning coin! Measurement is slamming your hand down.`,
    technical: `By the principle of linear superposition, if $|\\psi_1\\rangle$ and $|\\psi_2\\rangle$ are valid solutions to the Schrödinger equation, any linear combination $|\\psi\\rangle = c_1 |\\psi_1\\rangle + c_2 |\\psi_2\\rangle$ with $c_1, c_2 \\in \\mathbb{C}$ is also a valid physical state. The relative phase $e^{i\\phi}$ between amplitudes produces observable interference effects that distinguish superposition from classical probability mixtures.`,
  },
  keyTerms: [
    { term: 'Superposition', simple: 'A qubit existing as a blend of both 0 and 1 at the same time.', technical: 'A coherent linear combination of basis eigenstates $|\\psi\\rangle = \\sum_i c_i |i\\rangle$ with $\\sum |c_i|^2 = 1$.' },
    { term: 'Phase Coherence', simple: 'The delicate quantum rhythm that connects the parts of the superposition.', technical: 'The definite phase relationship between probability amplitudes necessary to produce quantum interference.' },
    { term: 'Decoherence', simple: 'When heat, vibrations, or noise destroy the delicate quantum superposition, turning it into ordinary classical junk.', technical: 'Irreversible loss of quantum phase coherence driven by environmental entanglement, transforming a pure state into a classical mixed state.' },
  ],
  equations: [
    {
      latex: '|+\\rangle = \\frac{|0\\rangle + |1\\rangle}{\\sqrt{2}}, \\quad |-\\rangle = \\frac{|0\\rangle - |1\\rangle}{\\sqrt{2}}',
      explanation: 'The fundamental superposition states |+> and |->: created by applying a Hadamard gate to |0> and |1>. They differ only by a relative minus sign (phase).',
      symbols: [
        { symbol: '|+\\rangle', meaning: 'Plus state', interpretation: 'Equal superposition with positive phase' },
        { symbol: '|-\\rangle', meaning: 'Minus state', interpretation: 'Equal superposition with 180-degree negative phase' },
      ],
      example: {
        description: 'Both |+> and |-> have a 50% probability of measuring 0 and 50% for 1, but their internal phase causes opposite interference behavior.',
        calculation: 'P(0)_{|+\\rangle} = |1/\\sqrt{2}|^2 = 0.5, \\quad P(0)_{|-\\rangle} = |1/\\sqrt{2}|^2 = 0.5',
        result: 'Identical measurement probabilities, but opposite quantum phases',
      },
    },
  ],
  howItWorks: [
    { number: 1, title: 'Ground State', description: 'Start with qubit in deterministic classical state |0>.' },
    { number: 2, title: 'Hadamard Pulse', description: 'Apply a pi/2 microwave rotation to tilt the state onto the equator.' },
    { number: 3, title: 'Coherent Maintenance', description: 'Qubit maintains simultaneous superposition in sub-15-millikelvin cryostats.' },
  ],
  applications: [
    { title: 'Quantum Parallel Search (Grover)', problem: 'Searching unsorted databases of N items in O(sqrt(N)) time.', solution: 'Superposition evaluates all N entries simultaneously in a single computational step.' },
  ],
  activity: {
    type: 'mcq',
    title: 'Superposition vs Classical Mixture',
    question: 'How does a quantum superposition state |+> = (|0> + |1>)/sqrt(2) differ from a classical 50/50 random coin flip?',
    options: [
      { id: 'a', text: 'The quantum state maintains coherent phase and can exhibit destructive interference; a classical coin flip has no phase' },
      { id: 'b', text: 'They are mathematically identical in every way' },
      { id: 'c', text: 'A classical coin flip requires liquid helium' },
      { id: 'd', text: 'Quantum states cannot be measured' },
    ],
    correctAnswer: 'a',
    explanation: 'Quantum superposition maintains phase coherence, allowing paths to interfere destructively and cancel out. Classical probability mixtures have no phase and can never exhibit destructive interference.',
    hint: 'Think about wave interference and quantum phase.',
  },
  pythonHandsOn: {
    title: "Creating and Measuring Superposition with Qiskit Aer",
    description: "Construct an equal superposition state using the Hadamard gate and simulate stochastic measurement collapse over 1,000 shots.",
    packages: ["qiskit", "qiskit-aer"],
    installCommand: "pip install qiskit qiskit-aer",
    imports: [
      { code: "from qiskit import QuantumCircuit", explanation: "Quantum circuit builder" },
      { code: "from qiskit_aer import AerSimulator", explanation: "High-performance Aer simulator" }
    ],
    code: [
      { code: "# 1. Build circuit with Hadamard and Measurement", explanation: "Circuit setup" },
      { code: "qc = QuantumCircuit(1, 1)", explanation: "1 qubit and 1 classical readout bit" },
      { code: "qc.h(0)         # Put qubit into equal superposition |+>", explanation: "Apply Hadamard" },
      { code: "qc.measure(0, 0) # Add measurement", explanation: "Measure" },
      { code: "print('Superposition Circuit Diagram:')", explanation: "Diagram header" },
      { code: "print(qc.draw('text'))", explanation: "Draw circuit" },
      { code: "", explanation: "" },
      { code: "# 2. Simulate 1,000 shots using AerSimulator", explanation: "Simulation" },
      { code: "sim = AerSimulator()", explanation: "Initialize simulator backend" },
      { code: "result = sim.run(qc, shots=1000).result()", explanation: "Execute 1000 shots" },
      { code: "counts = result.get_counts()", explanation: "Get outcome frequency dictionary" },
      { code: "print('\\nMeasurement Results across 1,000 runs:')", explanation: "Print header" },
      { code: "for bit, count in sorted(counts.items()):", explanation: "Iterate outcomes" },
      { code: "    pct = (count / 1000) * 100", explanation: "Calculate percentage" },
      { code: "    print(f'  Outcome |{bit}> : {count} times ({pct:.1f}%)')", explanation: "Print percentage" },
      { code: "print('\\nConclusion: Superposition splits probabilities equally; each shot collapses randomly to 0 or 1.')", explanation: "Summary" }
    ],
    executionFlow: [
      { number: 1, title: "Create Superposition", description: "Apply Hadamard gate to put qubit into state (|0> + |1>)/sqrt(2)." },
      { number: 2, title: "Attach Measurement", description: "Measure qubit onto classical readout register." },
      { number: 3, title: "Sample 1,000 Shots", description: "Run AerSimulator to observe stochastic 50/50 measurement distribution." }
    ],
    input: "QuantumCircuit(1, 1) with H(0) and Measure(0, 0).",
    output: "Outcome |0>: ~500 times (~50.0%)\nOutcome |1>: ~500 times (~50.0%)",
    interpretation: "Before measurement, the qubit exists simultaneously in both states. Measurement forces an irreversible collapse into either 0 or 1 with equal 50% probability.",
    colabInstructions: [
      "Click 'Copy for Google Colab' to copy the complete runnable script",
      "Open Google Colab at colab.research.google.com",
      "Paste into a code cell and press Shift + Enter to run",
    ],
  },
  mcqs: [
    {
      id: 'q1',
      question: 'What is the physical phenomenon where environmental heat or vibrations destroy a quantum superposition called?',
      options: [
        { id: 'a', text: 'Quantum Decoherence' },
        { id: 'b', text: 'Quantum Supremacy' },
        { id: 'c', text: 'Binary Compilation' },
        { id: 'd', text: 'Superconducting Resonance' },
      ],
      correctAnswer: 'a',
      explanation: 'Placeholder',
      incorrectFeedback: 'Placeholder',
    },
    {
      id: 'q2',
      question: 'What quantum gate creates an equal superposition |+⟩ = (|0⟩ + |1⟩)/√2 from |0⟩?',
      options: [
        { id: 'a', text: 'X gate (NOT)' },
        { id: 'b', text: 'Hadamard (H) gate' },
        { id: 'c', text: 'Z gate' },
        { id: 'd', text: 'CNOT gate' },
      ],
      correctAnswer: 'b',
      explanation: 'The Hadamard gate H transforms |0⟩ → (|0⟩ + |1⟩)/√2 = |+⟩ and |1⟩ → (|0⟩ − |1⟩)/√2 = |−⟩, creating equal superpositions. It\'s the most commonly used gate for creating superposition.',
      incorrectFeedback: 'The Hadamard gate creates equal superposition states.',
    },
    {
      id: 'q3',
      question: 'In the double-slit experiment with electrons, what happens if you measure which slit the electron goes through?',
      options: [
        { id: 'a', text: 'The interference pattern remains unchanged' },
        { id: 'b', text: 'The interference pattern disappears; you see two classical bands' },
        { id: 'c', text: 'The electrons stop moving' },
        { id: 'd', text: 'The electrons speed up' },
      ],
      correctAnswer: 'b',
      explanation: 'Measuring which slit the electron passes through collapses the superposition of paths. Without measurement, electrons interfere (wave behavior). With measurement, they behave like classical particles (no interference)—demonstrating wave-particle complementarity.',
      incorrectFeedback: 'Measurement destroys quantum superposition, eliminating interference patterns.',
    },
    {
      id: 'q4',
      question: 'What is the probability of measuring |0⟩ for the state |ψ⟩ = (3|0⟩ + 4i|1⟩)/5?',
      options: [
        { id: 'a', text: '3/5 = 60%' },
        { id: 'b', text: '9/25 = 36%' },
        { id: 'c', text: '4/5 = 80%' },
        { id: 'd', text: '16/25 = 64%' },
      ],
      correctAnswer: 'b',
      explanation: 'Probability = |α|² where α is the amplitude of |0⟩. Here α = 3/5, so P(0) = |3/5|² = 9/25 = 36%. Note that |3/5|² + |4i/5|² = 9/25 + 16/25 = 25/25 = 1 ✓',
      incorrectFeedback: 'Use Born rule: probability = squared magnitude of amplitude, not the amplitude itself.',
    },
    {
      id: 'q5',
      question: 'Can a qubit simultaneously store the values of 2 classical bits (00, 01, 10, 11)?',
      options: [
        { id: 'a', text: 'Yes, quantum superposition allows storage of all 4 values simultaneously with full accessibility' },
        { id: 'b', text: 'No, a single qubit only stores 1 classical bit worth of information when measured' },
        { id: 'c', text: 'Yes, with 100% accuracy' },
        { id: 'd', text: 'Only on Tuesdays' },
      ],
      correctAnswer: 'b',
      explanation: 'Holevo\'s theorem proves that measuring n qubits yields at most n classical bits of accessible information, despite the 2^n dimensional Hilbert space. Superposition provides computational power through interference, not classical information storage.',
      incorrectFeedback: 'Qubits provide computational advantage through superposition and interference, not classical data storage.',
    },
  ],
};

export const measurement: Topic = {
  id: 'measurement',
  moduleId: 'quantum-foundations',
  number: 10,
  title: 'Quantum Measurement: Wavefunction Collapse & The Born Rule',
  description: 'Understand the measurement problem: how continuous probability amplitudes collapse into discrete classical reality via the Born Rule.',
  objectives: [
    'Define the Born Rule: P(x) = |<x|psi>|^2',
    'Understand projective measurement and irreversible state collapse',
    'Contrast the Copenhagen Interpretation with the Many-Worlds Interpretation',
  ],
  story: `In 1926, German physicist Max Born was studying quantum scattering experiments. Schrödinger believed his wave equation described a physical, smeared-out electron wave flowing like water.
  
Born noticed something startling: when an electron hits a photographic plate, it does not leave a smeared-out stain. It leaves a single, sharp, discrete microscopic dot!
  
Born proposed a bold hypothesis: the wavefunction does not represent physical matter. It represents a **Probability Wave**! The square of the wave's amplitude gives the exact probability of where the particle will materialize when measured.
  
For this profound insight, Max Born won the 1954 Nobel Prize in Physics, and his formula—**The Born Rule**—is the bridge between the quantum realm and classical reality.`,
  motivation: `**The readout bottleneck**: You cannot observe a quantum superposition without destroying it. Quantum algorithm design is the subtle art of orchestrating constructive interference so that when measurement collapse occurs, the correct answer appears with near 100% probability.`,
  concept: {
    simple: `Measuring a quantum computer is like snapping a photograph of a ghost:
Before the photo, the ghost is hovering everywhere in the room at once (superposition).
The flash goes off (measurement)!
Instantly, the ghost vanishes and solidifies into a single solid wooden chair in one corner of the room.
The ghost is gone. You cannot undo the photo. The quantum state has collapsed.`,
    technical: `Projective measurement is described by a Hermitian observable $M = \\sum_m m P_m$, where $P_m = |m\\rangle\\langle m|$ is the projection operator onto the eigenspace with eigenvalue $m$. By the Born Rule, the probability of observing eigenvalue $m$ is $P(m) = \\langle\\psi|P_m|\\psi\\rangle = |\\langle m | \\psi \\rangle|^2$. Upon measurement, the state undergoes discontinuous, non-unitary collapse: $|\\psi\\rangle \\rightarrow |m\\rangle$.`,
  },
  keyTerms: [
    { term: 'The Born Rule', simple: 'The formula: take the amplitude and square it to find the percentage chance of measuring that result.', technical: 'Postulate stating probability density $P(x) = |\\psi(x)|^2 = \\psi^*(x)\\psi(x)$.' },
    { term: 'Wavefunction Collapse', simple: 'The instant a quantum state freezes into a single classical outcome when observed.', technical: 'Discontinuous reduction of a quantum superposition to a single eigenstate upon interaction with a macroscopic measurement apparatus.' },
    { term: 'Computational Basis ($Z$-Basis)', simple: 'The standard measuring tape: measuring along the North/South axis to read out 0 or 1.', technical: 'Measurement using projection operators $P_0 = |0\\rangle\\langle 0|$ and $P_1 = |1\\rangle\\langle 1|$.' },
  ],
  equations: [
    {
      latex: 'P(0) = |\\alpha|^2, \\quad P(1) = |\\beta|^2, \\quad |\\alpha|^2 + |\\beta|^2 = 1',
      explanation: 'The Born Rule for a single qubit state alpha|0> + beta|1>: the probability of measuring 0 is the magnitude-squared of alpha; measuring 1 is magnitude-squared of beta.',
      symbols: [
        { symbol: '\\alpha', meaning: 'Amplitude of |0>', interpretation: 'Square root of probability of 0' },
        { symbol: '\\beta', meaning: 'Amplitude of |1>', interpretation: 'Square root of probability of 1' },
      ],
      example: {
        description: 'Qubit state with alpha = sqrt(3)/2 and beta = 1/2.',
        calculation: 'P(0) = |\\sqrt{3}/2|^2 = 3/4 = 75\\%, \\quad P(1) = |1/2|^2 = 1/4 = 25\\%',
        result: '75% chance of measuring 0; 25% chance of measuring 1',
      },
    },
  ],
  howItWorks: [
    { number: 1, title: 'State Evolution', description: 'Quantum circuit evolves pure state |psi> via unitary gates.' },
    { number: 2, title: 'Readout Coupling', description: 'Resonator frequency shifts based on whether qubit collapsed to |0> or |1>.' },
    { number: 3, title: 'Sampling (Shots)', description: 'Circuit is re-executed 1,024 times ("shots") to construct an empirical probability histogram.' },
  ],
  applications: [
    { title: 'True Hardware Random Number Generation (QRNG)', problem: 'Classical pseudorandom algorithms can be predicted if seed is known.', solution: 'Measuring a qubit in state |+> produces genuine, certified non-deterministic quantum randomness generated by nature.' },
  ],
  activity: {
    type: 'mcq',
    title: 'Born Rule Calculation',
    question: 'A qubit is in state |psi> = (1/2)|0> + (sqrt(3)/2)|1>. What is the exact probability of measuring outcome 1?',
    options: [
      { id: 'a', text: '75% (3/4)' },
      { id: 'b', text: '50% (1/2)' },
      { id: 'c', text: '25% (1/4)' },
      { id: 'd', text: '100%' },
    ],
    correctAnswer: 'a',
    explanation: 'By the Born rule, P(1) = |beta|^2 = (sqrt(3)/2)^2 = 3/4 = 0.75 = 75%.',
    hint: 'Square the amplitude attached to |1>.',
  },
  pythonHandsOn: {
    title: "Demonstrating Quantum Measurement Collapse in Qiskit",
    description: "Prove quantum wave function collapse: perform two sequential measurements on the same qubit to show the second measurement always agrees with the first.",
    packages: ["qiskit", "qiskit-aer"],
    installCommand: "pip install qiskit qiskit-aer",
    imports: [
      { code: "from qiskit import QuantumCircuit", explanation: "Circuit module" },
      { code: "from qiskit_aer import AerSimulator", explanation: "Aer simulator" }
    ],
    code: [
      { code: "# Construct circuit: H gate, 1st Measurement into c0, then 2nd Measurement into c1", explanation: "Circuit setup" },
      { code: "qc = QuantumCircuit(1, 2)", explanation: "1 qubit and 2 classical bits" },
      { code: "qc.h(0)           # Create superposition", explanation: "Put in superposition" },
      { code: "qc.measure(0, 0)   # First measurement into bit 0", explanation: "First collapse" },
      { code: "qc.measure(0, 1)   # Second measurement of SAME qubit into bit 1", explanation: "Second measurement" },
      { code: "print('Sequential Measurement Circuit Diagram:')", explanation: "Header" },
      { code: "print(qc.draw('text'))", explanation: "Display circuit" },
      { code: "", explanation: "" },
      { code: "# Run 1,000 shots", explanation: "Run simulation" },
      { code: "sim = AerSimulator()", explanation: "Initialize Aer" },
      { code: "counts = sim.run(qc, shots=1000).result().get_counts()", explanation: "Simulate shots" },
      { code: "print('\\nOutcome bitstrings [c1, c0]:')", explanation: "Print header" },
      { code: "for bits, count in counts.items():", explanation: "Iterate bit combinations" },
      { code: "    print(f'  {bits} : {count} shots')", explanation: "Display counts" },
      { code: "print('\\nNotice: We ONLY see \\'00\\' and \\'11\\', NEVER \\'01\\' or \\'10\\'!')", explanation: "Key insight" },
      { code: "print('This proves the first measurement collapsed the state; subsequent measurements are 100% deterministic.')", explanation: "Explanation" }
    ],
    executionFlow: [
      { number: 1, title: "Create Superposition", description: "Apply Hadamard to place the qubit into (|0> + |1>)/sqrt(2)." },
      { number: 2, title: "First Measurement", description: "Collapses the wave function randomly to 0 or 1." },
      { number: 3, title: "Second Measurement", description: "Confirms that once collapsed, the qubit remains in that state with 100% fidelity." }
    ],
    input: "Circuit with H gate and two consecutive measurements on wire 0.",
    output: "Outcomes: {'00': ~500, '11': ~500} (0% for '01' or '10')",
    interpretation: "Quantum measurement is a non-unitary projection. Once observed, the superposition is irreversibly destroyed and the system is projected into the measured eigenstate.",
    colabInstructions: [
      "Click 'Copy for Google Colab' to copy the complete runnable script",
      "Open Google Colab at colab.research.google.com",
      "Paste into a code cell and press Shift + Enter to run",
    ],
  },
  mcqs: [
    {
      id: 'q1',
      question: 'What happens to a qubit immediately after it is measured in the computational basis and returns outcome "0"?',
      options: [
        { id: 'a', text: 'Its wavefunction collapses irreversibly into state |0>; subsequent measurements will return 0 with 100% certainty' },
        { id: 'b', text: 'It remains in its original superposition' },
        { id: 'c', text: 'It flips to state |1>' },
        { id: 'd', text: 'It explodes' },
      ],
      correctAnswer: 'a',
      explanation: 'Placeholder',
      incorrectFeedback: 'Placeholder',
    },
    {
      id: 'q2',
      question: 'What is quantum decoherence?',
      options: [
        { id: 'a', text: 'When qubits get tired' },
        { id: 'b', text: 'Environmental interactions that destroy superposition and entanglement' },
        { id: 'c', text: 'A type of quantum gate' },
        { id: 'd', text: 'A classical error' },
      ],
      correctAnswer: 'b',
      explanation: 'Decoherence occurs when a quantum system interacts with its environment (thermal photons, vibrations), causing loss of phase relationships and collapse of superposition into mixed classical states. Decoherence times limit quantum computation.',
      incorrectFeedback: 'Decoherence is environmental destruction of quantum superposition.',
    },
    {
      id: 'q3',
      question: 'What are the possible measurement outcomes when measuring the state |+⟩ = (|0⟩ + |1⟩)/√2 in the computational basis?',
      options: [
        { id: 'a', text: 'Always 0' },
        { id: 'b', text: 'Always 1' },
        { id: 'c', text: '0 or 1, each with 50% probability' },
        { id: 'd', text: 'A superposition of 0 and 1' },
      ],
      correctAnswer: 'c',
      explanation: 'The state |+⟩ has equal probability amplitudes 1/√2 for both |0⟩ and |1⟩. When measured: P(0) = |1/√2|² = 1/2 and P(1) = |1/√2|² = 1/2. After measurement, the state collapses to either |0⟩ or |1⟩.',
      incorrectFeedback: 'Measuring |+⟩ gives 0 or 1 with equal 50% probability.',
    },
    {
      id: 'q4',
      question: 'What is the post-measurement state if measuring |ψ⟩ = 0.6|0⟩ + 0.8|1⟩ returns outcome "1"?',
      options: [
        { id: 'a', text: '|ψ⟩ = 0.6|0⟩ + 0.8|1⟩ (unchanged)' },
        { id: 'b', text: '|1⟩' },
        { id: 'c', text: '|0⟩' },
        { id: 'd', text: 'A random state' },
      ],
      correctAnswer: 'b',
      explanation: 'Measurement projects the state onto the measured eigenstate. If the outcome is "1", the state collapses to |1⟩ with 100% certainty. The original superposition is destroyed.',
      incorrectFeedback: 'Measurement collapses the state to the measured eigenstate.',
    },
    {
      id: 'q5',
      question: 'What happens if you measure a qubit twice in a row in the same basis?',
      options: [
        { id: 'a', text: 'You get two random, independent results' },
        { id: 'b', text: 'You get the same result both times' },
        { id: 'c', text: 'The qubit disappears' },
        { id: 'd', text: 'The qubit returns to superposition' },
      ],
      correctAnswer: 'b',
      explanation: 'After the first measurement, the qubit collapses to an eigenstate (|0⟩ or |1⟩). Measuring again immediately in the same basis yields the same result with 100% probability—this is called projective measurement idempotency.',
      incorrectFeedback: 'Repeated measurements in the same basis give identical results after the first measurement collapse.',
    },
  ],
};

export const probabilityAmplitude: Topic = {
  id: 'probability-amplitude',
  moduleId: 'quantum-foundations',
  number: 11,
  title: 'Probability Amplitudes: Complex Numbers in Quantum Mechanics',
  description: 'Understand the secret weapon of quantum computation: complex numbers, magnitudes, phases, and how amplitudes cancel out.',
  objectives: [
    'Define probability amplitudes as complex numbers c = a + bi = r * e^(i*phi)',
    'Understand why classical probabilities (p >= 0) can only add, while quantum amplitudes can subtract',
    'Calculate complex conjugates and magnitudes: |c|^2 = c * c*',
  ],
  story: `In classical probability, numbers can never be negative. If there is a 30% chance of rain on Tuesday and a 20% chance of rain on Wednesday, you can never say there is a "negative 50% chance" of rain. Probabilities are always between 0 and 1.
  
Because classical probabilities are always positive, they can only **accumulate**. If you add more paths to a destination, the classical probability of reaching that destination can only increase.
  
Quantum mechanics does not track probabilities; it tracks **Probability Amplitudes**, which are **Complex Numbers**!
  
Complex numbers have directions (angles). Two complex numbers can point in opposite directions and cancel each other out to exactly ZERO:
$$0.5 + (-0.5) = 0.0$$
  
This is the secret weapon of quantum algorithms: we design circuits where wrong answers cancel each other out to zero probability, while the right answer reinforces itself!`,
  motivation: `**The mathematical differentiator**: Quantum computing achieves computational speedups over classical computing solely because complex amplitudes can interfere destructively. Without complex amplitudes, quantum computing collapses into classical randomized computing.`,
  concept: {
    simple: `Classical probability is like pouring buckets of water: every bucket adds more water.
Quantum amplitudes are like ocean waves:
- When the crest of one wave meets the crest of another, they combine to make a monster wave (Constructive Interference).
- When the crest of one wave meets the trough of another wave, they cancel each other out and the water becomes completely flat (Destructive Interference)!`,
    technical: `A probability amplitude $\\psi(x) \\in \\mathbb{C}$ is a complex scalar expressed in polar form as $r e^{i\\phi}$. While the Born probability $P(x) = |\\psi(x)|^2 = r^2$ is non-negative real, the linear superposition of paths $\\psi_{total} = \\psi_1 + \\psi_2$ allows destructive cancellation when $e^{i\\phi_1} = -e^{i\\phi_2}$, yielding $|\\psi_1 + \\psi_2|^2 = 0$ even though $|\\psi_1|^2 > 0$ and $|\\psi_2|^2 > 0$.`,
  },
  keyTerms: [
    { term: 'Probability Amplitude', simple: 'A complex number whose squared size gives the probability of an outcome.', technical: 'A complex-valued scalar coefficient in a state vector expansion whose absolute square represents probability density.' },
    { term: 'Complex Conjugate ($c^*$)', simple: 'Flipping the sign of the imaginary part: (a + bi) becomes (a - bi).', technical: 'Reflection across the real axis mapping $z = x + iy$ to $\\bar{z} = x - iy$.' },
    { term: 'Relative Phase ($\\phi$)', simple: 'The angle of the complex amplitude that determines whether it will add or cancel with other waves.', technical: 'The argument $\\arg(c) = \\phi$ in polar representation $c = |c|e^{i\\phi}$.' },
  ],
  equations: [
    {
      latex: '|c|^2 = c \\cdot c^* = (a + bi)(a - bi) = a^2 + b^2',
      explanation: 'Formula to compute the real probability from a complex probability amplitude by multiplying by its complex conjugate.',
      symbols: [
        { symbol: 'c = a + bi', meaning: 'Complex amplitude', interpretation: 'Number with real part a and imaginary part b' },
        { symbol: 'c^* = a - bi', meaning: 'Complex conjugate', interpretation: 'Sign of imaginary part inverted' },
        { symbol: '|c|^2', meaning: 'Modulus squared', interpretation: 'Physical observable probability' },
      ],
      example: {
        description: 'Amplitude c = (1/2) + (1/2)i.',
        calculation: '|c|^2 = (1/2)^2 + (1/2)^2 = 1/4 + 1/4 = 2/4 = 0.50',
        result: '50% physical measurement probability',
      },
    },
  ],
  howItWorks: [
    { number: 1, title: 'Amplitude Assignment', description: 'Quantum gates distribute complex amplitudes across 2^n computational paths.' },
    { number: 2, title: 'Phase Rotation', description: 'Phase gates rotate angles of specific computational branches.' },
    { number: 3, title: 'Interference Synthesis', description: 'Amplitudes add linearly: sum(c_i); opposite phases cancel out.' },
    { number: 4, title: 'Born Readout', description: 'Measure magnitude-squared: P = |sum(c_i)|^2.' },
  ],
  applications: [
    { title: 'Quantum Fourier Transform (QFT)', problem: 'Finding periodicity in secret cryptographic keys.', solution: 'QFT uses phase rotations to destructively cancel non-periodic frequencies, exposing the secret key period.' },
  ],
  activity: {
    type: 'mcq',
    title: 'Destructive Interference Calculation',
    question: 'Path A delivers amplitude +0.5 to outcome |0>. Path B delivers amplitude -0.5 to outcome |0>. When both paths are open simultaneously, what is the final probability of measuring |0>?',
    options: [
      { id: 'a', text: '0% (|0.5 + (-0.5)|² = 0² = 0, complete destructive cancellation!)' },
      { id: 'b', text: '50%' },
      { id: 'c', text: '25%' },
      { id: 'd', text: '100%' },
    ],
    correctAnswer: 'a',
    explanation: 'Amplitudes add before squaring: (0.5 + (-0.5)) = 0.0. Squaring gives |0.0|^2 = 0.0 = 0% probability. Destructive interference completely eliminated the outcome.',
    hint: 'Add the amplitudes together first, then square the result.',
  },
  learningResource: {
    title: 'Lesson 7: Repeated Measurement and Probability',
    pdfUrl: '/presentations/Lesson7.pdf',
    description: 'Superposition, repeated measurement sampling distributions, and histogram interpretation in Qiskit.',
    lessonNumber: 7,
    pages: 9,
    author: 'Dr. Syed Muzamil Basha',
  },
  pythonHandsOn: {
    title: "Repeated Quantum Measurement & Histogram Analysis in Qiskit",
    description: "Construct a 1-qubit circuit with Hadamard gate, execute 1,024 shots on the Aer simulator, and visualize the empirical 50/50 measurement histogram.",
    packages: ["qiskit", "qiskit-aer", "matplotlib"],
    installCommand: "pip install qiskit qiskit-aer matplotlib",
    imports: [
      { code: "from qiskit import QuantumCircuit", explanation: "Circuit constructor" },
      { code: "from qiskit_aer import Aer", explanation: "Qiskit Aer simulator provider" },
      { code: "from qiskit.visualization import plot_histogram", explanation: "Histogram visualization utility" },
      { code: "import matplotlib.pyplot as plt", explanation: "Matplotlib for rendering plots" },
    ],
    code: [
      { code: "# Create a Quantum Circuit with 1 Qubit and 1 Classical Bit", explanation: "Circuit initialization" },
      { code: "qc = QuantumCircuit(1, 1)", explanation: "1 quantum wire, 1 classical wire" },
      { code: "", explanation: "" },
      { code: "# Apply Hadamard gate to create superposition (|0> + |1>)/sqrt(2)", explanation: "Superposition creation" },
      { code: "qc.h(0)", explanation: "H gate on qubit 0" },
      { code: "", explanation: "" },
      { code: "# Measure the qubit into classical bit 0", explanation: "Measurement" },
      { code: "qc.measure(0, 0)", explanation: "Collapse qubit state" },
      { code: "", explanation: "" },
      { code: "# Use Qiskit's Aer simulator backend", explanation: "Simulator setup" },
      { code: "simulator = Aer.get_backend('aer_simulator')", explanation: "Instantiate Aer backend" },
      { code: "", explanation: "" },
      { code: "# Execute the circuit for 1,024 repeated measurement shots", explanation: "Execution" },
      { code: "job = simulator.run(qc, shots=1024)", explanation: "Run 1024 trials" },
      { code: "", explanation: "" },
      { code: "# Retrieve measurement counts", explanation: "Result extraction" },
      { code: "result = job.result()", explanation: "Get execution result" },
      { code: "counts = result.get_counts(qc)", explanation: "Extract dictionary of bitstring counts" },
      { code: "", explanation: "" },
      { code: "# Print measurement outcomes", explanation: "Display text counts" },
      { code: 'print("Measurement Results:", counts)', explanation: "Show outcome counts" },
      { code: "", explanation: "" },
      { code: "# Plot histogram of sampled results", explanation: "Visualization" },
      { code: "plot_histogram(counts)", explanation: "Generate bar chart" },
      { code: "plt.show()", explanation: "Display plot window" },
    ],
    executionFlow: [
      { number: 1, title: "Superposition Generation", description: "Hadamard gate transforms |0> into equal superposition (|0> + |1>)/sqrt(2) with probability 50% for each state." },
      { number: 2, title: "Aer Simulation", description: "Simulates 1,024 independent shots, each causing state collapse into either 0 or 1." },
      { number: 3, title: "Histogram Visualization", description: "Plots the resulting binomial distribution (~512 for '0' and ~512 for '1'), confirming the Born rule." },
    ],
    input: "1-qubit circuit with H gate and 1,024 simulator shots",
    output: "Measurement Results: {'0': 518, '1': 506}",
    interpretation: "In individual shots, the outcome is completely non-deterministic. Across 1,024 repeated trials, the law of large numbers accurately reveals the underlying 50/50 probability amplitude distribution.",
    colabInstructions: [
      "Click 'Copy for Google Colab' to copy the complete runnable script",
      "Open Google Colab at colab.research.google.com",
      "Paste into a code cell and press Shift + Enter to run",
    ],
  },
  mcqs: [
    {
      id: 'q1',
      question: 'Why can two computational paths in a quantum computer produce a ZERO percent probability of an outcome, even if both paths individually had non-zero probability?',
      options: [
        { id: 'a', text: 'Because their complex probability amplitudes were 180 degrees out of phase and cancelled out destructively' },
        { id: 'b', text: 'Because the power was turned off' },
        { id: 'c', text: 'Because quantum computers cannot divide by two' },
        { id: 'd', text: 'Because classical physics took over' },
      ],
      correctAnswer: 'a',
      explanation: 'Placeholder',
      incorrectFeedback: 'Placeholder',
    },
    {
      id: 'q2',
      question: 'What is the geometric interpretation of a probability amplitude in the complex plane?',
      options: [
        { id: 'a', text: 'A vector with magnitude and phase angle' },
        { id: 'b', text: 'Just a real number' },
        { id: 'c', text: 'A matrix' },
        { id: 'd', text: 'A probability percentage' },
      ],
      correctAnswer: 'a',
      explanation: 'Complex probability amplitudes can be written as α = r·e^(iθ) where r is magnitude and θ is phase. Geometrically, this is a vector in the complex plane with length r (determines probability |α|²) and angle θ (determines interference effects).',
      incorrectFeedback: 'Amplitudes are complex numbers with both magnitude (for probability) and phase (for interference).',
    },
    {
      id: 'q3',
      question: 'Why can probability amplitudes be negative or even complex, while probabilities must be real and non-negative?',
      options: [
        { id: 'a', text: 'Negative probabilities exist in quantum mechanics' },
        { id: 'b', text: 'Amplitudes can cancel via interference; probabilities are squared magnitudes |α|² which are always ≥ 0' },
        { id: 'c', text: 'There is no difference' },
        { id: 'd', text: 'It\'s a mistake in the theory' },
      ],
      correctAnswer: 'b',
      explanation: 'Amplitudes are complex numbers that can cancel (destructive interference) or add (constructive interference). Probabilities are computed via the Born rule: P = |amplitude|², which always yields a non-negative real number between 0 and 1.',
      incorrectFeedback: 'Amplitudes can be negative/complex for interference, but probabilities |α|² are always real and ≥ 0.',
    },
    {
      id: 'q4',
      question: 'What is the global phase of a quantum state |ψ⟩ = e^(iφ)|ψ\'⟩?',
      options: [
        { id: 'a', text: 'Physically observable and measurable' },
        { id: 'b', text: 'Physically unobservable; states differing only by global phase are equivalent' },
        { id: 'c', text: 'Changes the measurement probabilities' },
        { id: 'd', text: 'Always zero' },
      ],
      correctAnswer: 'b',
      explanation: 'Global phase e^(iφ) multiplies the entire state and has no physical effect—all measurement probabilities remain identical since |e^(iφ)α|² = |α|². Only relative phases between superposition terms are observable.',
      incorrectFeedback: 'Global phase is unobservable; only relative phases matter.',
    },
    {
      id: 'q5',
      question: 'In quantum interference, what causes certain outcomes to have zero probability?',
      options: [
        { id: 'a', text: 'Amplitudes from different paths adding to exactly zero (destructive interference)' },
        { id: 'b', text: 'Hardware errors' },
        { id: 'c', text: 'Classical probability' },
        { id: 'd', text: 'Random chance' },
      ],
      correctAnswer: 'a',
      explanation: 'Quantum algorithms like Grover\'s search use destructive interference: probability amplitudes from different computational paths cancel exactly (e.g., α₁ + α₂ = 0.5 − 0.5 = 0), making incorrect answers impossible while amplifying correct ones.',
      incorrectFeedback: 'Destructive interference occurs when probability amplitudes sum to zero.',
    },
  ],
};

export const entanglement: Topic = {
  id: 'entanglement',
  moduleId: 'quantum-foundations',
  number: 12,
  title: 'Quantum Entanglement: Non-Local Correlation & Bell States',
  description: 'Explore Einstein’s "Spooky Action at a Distance": Bell states, non-local quantum correlations, and the 2022 Nobel Prize.',
  objectives: [
    'Define quantum entanglement: non-separable multi-qubit states',
    'Construct the 4 maximally entangled Bell States (|Phi+>, |Phi->, |Psi+>, |Psi->)',
    'Understand the EPR Paradox, Bell’s Inequality, and Aspect’s 2022 Nobel experiment',
  ],
  story: `In 1935, Albert Einstein, Boris Podolsky, and Nathan Rosen published a paper arguing that quantum mechanics was incomplete.
  
They pointed out a mind-bending consequence: you could create two particles that are so intimately linked that measuring particle A on Earth would *instantly* dictate the state of particle B on the other side of the galaxy!
  
Einstein scoffed at this idea, famously deriding it as *"spooky action at a distance"* (*spukhafte Fernwirkung*). He believed local hidden variables must secretly exist.
  
In 1964, Northern Irish physicist John Stewart Bell devised a mathematical test (**Bell’s Inequality**) that could experimentally prove whether Einstein or quantum mechanics was right.
  
In the 1980s and 2015, Alain Aspect, John Clauser, and Anton Zeilinger performed the definitive experiments. Einstein was wrong; quantum mechanics was right! The universe is fundamentally non-local. For this proof, Aspect, Clauser, and Zeilinger were awarded the **2022 Nobel Prize in Physics**.`,
  motivation: `**The superpower of quantum speed**: Without entanglement, an $n$-qubit computer is merely $n$ separate, independent classical bits. Entanglement binds the qubits together into a unified computational fabric that classical computers cannot simulate.`,
  concept: {
    simple: `Imagine you have a pair of magical magic shoes.
You put one shoe in a box and leave it in New York. You put the other shoe in a box and fly to Tokyo.
Neither shoe is left or right yet—they are in a quantum blur!
The instant you open the box in New York and see a **Left Shoe**, you instantly know with 100% certainty that the shoe in Tokyo has become a **Right Shoe**—faster than light!
They are not communicating; they are two parts of one single entangled reality.`,
    technical: `A multi-qubit state $|\\psi\\rangle \\in \\mathcal{H}_A \\otimes \\mathcal{H}_B$ is entangled if and only if it cannot be factored as a product state $|\\psi\\rangle \\ne |\\phi_A\\rangle \\otimes |\\phi_B\\rangle$. The canonical maximally entangled Bell state is:
$$|\\Phi^+\\rangle = \\frac{|00\\rangle + |11\\rangle}{\\sqrt{2}}$$
Measuring qubit A yields 0 or 1 with 50% probability, but instantly projects qubit B into the identical state with correlation coefficient 1.0, violating the Bell-CHSH inequality ($S \\le 2$ classical vs $S = 2\\sqrt{2} \\approx 2.828$ quantum).`,
  },
  keyTerms: [
    { term: 'Quantum Entanglement', simple: 'When two or more qubits become so connected that you cannot describe one without the other.', technical: 'Non-separable pure state in composite Hilbert space possessing non-zero entanglement entropy.' },
    { term: 'Bell State', simple: 'The 4 fundamental pairs of perfectly entangled two-qubit states.', technical: 'An orthonormal basis of 4 maximally entangled 2-qubit states generated by Hadamard and CNOT gates.' },
    { term: 'Bell’s Inequality', simple: 'A mathematical formula that proved the universe really is quantum and Einstein’s classical view was wrong.', technical: 'Mathematical bounds on classical local hidden variable theories violated by quantum mechanical correlation.' },
  ],
  equations: [
    {
      latex: '|\\Phi^+\\rangle = \\frac{|00\\rangle + |11\\rangle}{\\sqrt{2}} \\ne |\\phi_A\\rangle \\otimes |\\phi_B\\rangle',
      explanation: 'The Bell State Phi+: a superposition of both qubits being 0 and both qubits being 1. Notice that the states |01> and |10> have exactly 0% probability!',
      symbols: [
        { symbol: '|00\\rangle', meaning: 'Both qubits are zero', interpretation: '50% measurement probability' },
        { symbol: '|11\\rangle', meaning: 'Both qubits are one', interpretation: '50% measurement probability' },
      ],
      example: {
        description: 'Measure qubit 1. If result is 0, qubit 2 collapses to 0 with 100% certainty. If result is 1, qubit 2 collapses to 1 with 100% certainty.',
        calculation: 'P(\\text{Q2}=0 \\mid \\text{Q1}=0) = 1.0, \\quad P(\\text{Q2}=1 \\mid \\text{Q1}=1) = 1.0',
        result: 'Perfect non-local correlation',
      },
    },
  ],
  howItWorks: [
    { number: 1, title: 'State Prep', description: 'Start with 2 independent qubits in state |00>.' },
    { number: 2, title: 'Superposition on Q1', description: 'Apply Hadamard gate H to qubit 1: (|0> + |1>)/sqrt(2) (x) |0> = (|00> + |10>)/sqrt(2).' },
    { number: 3, title: 'Entangle via CNOT', description: 'Apply CNOT with Q1 as control and Q2 as target: flips Q2 only when Q1 is 1, producing (|00> + |11>)/sqrt(2)!' },
  ],
  applications: [
    { title: 'Quantum Teleportation', problem: 'Transmitting unknown quantum states between quantum processors across distances.', solution: 'Using a shared Bell pair and 2 classical bits, teleporting exact quantum wavefunctions without physical particle transport.' },
  ],
  activity: {
    type: 'mcq',
    title: 'Separability Test',
    question: 'Is the state |psi> = (1/2)|00> + (1/2)|01> + (1/2)|10> + (1/2)|11> entangled?',
    options: [
      { id: 'a', text: 'No, it is a separable product state: |+> ⊗ |+>' },
      { id: 'b', text: 'Yes, it is maximally entangled' },
      { id: 'c', text: 'It is an invalid quantum state' },
      { id: 'd', text: 'It has broken physics' },
    ],
    correctAnswer: 'a',
    explanation: 'This state factors cleanly: [(|0> + |1>)/sqrt(2)] ⊗ [(|0> + |1>)/sqrt(2)] = |+> ⊗ |+>. Because both qubits can be described completely independently, it is NOT entangled.',
    hint: 'Can you factor out (|0> + |1>) for the first qubit?',
  },
  pythonHandsOn: {
    title: 'Lesson 8: Two Qubits and Entanglement (Bell State |Phi+>)',
    description: 'Construct a two-qubit Bell state (|Phi+>) using Hadamard and CNOT gates, simulate on Aer simulator, and verify correlated measurements.',
    packages: ['qiskit', 'qiskit-aer', 'pylatexenc'],
    installCommand: 'pip install qiskit qiskit-aer pylatexenc',
    imports: [
      { code: 'from qiskit import QuantumCircuit', explanation: 'Construct two-qubit quantum circuits' },
      { code: 'from qiskit_aer import Aer', explanation: 'Aer simulator backend' },
    ],
    code: [
      { code: '# Create a two-qubit circuit', explanation: 'Allocate 2 quantum wires' },
      { code: 'qc = QuantumCircuit(2)', explanation: 'Initialize q0 and q1 in ground state |00>' },
      { code: '', explanation: '' },
      { code: '# Apply Hadamard gate to create superposition on qubit 0', explanation: 'Creates (|0> + |1>)|0> / sqrt(2)' },
      { code: 'qc.h(0)', explanation: 'Put control qubit into equal superposition' },
      { code: '', explanation: '' },
      { code: '# Applying a CNOT (Controlled-NOT) Gate', explanation: 'Entangles target qubit 1 with control qubit 0' },
      { code: 'qc.cx(0, 1)', explanation: 'Flip q1 conditionally when q0 is 1' },
      { code: '', explanation: '' },
      { code: '# Measure all qubits', explanation: 'Add measurement gates to all wires' },
      { code: 'qc.measure_all()', explanation: 'Measure [q0, q1] into classical register' },
      { code: '', explanation: '' },
      { code: '# Use Qiskit\'s Aer simulator', explanation: 'Configure aer_simulator backend' },
      { code: 'simulator = Aer.get_backend(\'aer_simulator\')', explanation: 'Load simulator instance' },
      { code: '', explanation: '' },
      { code: '# Run the circuit on the simulator', explanation: 'Execute 1,000 shots' },
      { code: 'job = simulator.run(qc, shots=1000)', explanation: 'Run simulation job' },
      { code: 'result = job.result()', explanation: 'Retrieve results' },
      { code: '', explanation: '' },
      { code: '# Get the measurement results', explanation: 'Extract output counts dictionary' },
      { code: 'counts = result.get_counts(qc)', explanation: 'Tally results' },
      { code: 'print("Bell State Measurement Counts (Lesson 8):", counts)', explanation: 'Display correlated counts: {\'00\': ~500, \'11\': ~500}' },
    ],
    executionFlow: [
      { number: 1, title: 'Two-Qubit Allocation', description: 'Allocate 2 qubits in the separable ground state |00>.' },
      { number: 2, title: 'Superposition Creation', description: 'Apply Hadamard on qubit 0 to produce (|00> + |10>)/sqrt(2).' },
      { number: 3, title: 'Entangling CNOT', description: 'Apply CNOT(0, 1) mapping |10> to |11>, synthesizing the maximally entangled Bell state (|00> + |11>)/sqrt(2).' },
      { number: 4, title: 'Correlated Readout', description: 'Simulate 1,000 shots on AerSimulator: only outcomes "00" and "11" appear with 50/50 probability, while "01" and "10" never occur.' },
    ],
    input: 'QuantumCircuit(2) with H(0) and CX(0, 1) and measure_all().',
    output: "Bell State Measurement Counts (Lesson 8): {'00': 496, '11': 504}",
    interpretation: 'Demonstrates maximal quantum entanglement: measuring qubit 0 immediately determines the state of qubit 1 with 100% correlation, violating classical local separability.',
    colabInstructions: [
      'Click "Copy for Google Colab" to copy the complete runnable script',
      'Open Google Colab at colab.research.google.com',
      'Paste into a code cell and press Shift + Enter to run',
    ],
  },
  learningResource: {
    title: 'Lesson 8: Two Qubits and Entanglement',
    pdfUrl: '/presentations/Lesson8.pdf',
    description: 'Hadamard, CNOT, Bell-state intuition, and correlated measurements — Presentation by Dr. Syed Muzamil Basha.',
    lessonNumber: 8,
    pages: 10,
    author: 'Dr. Syed Muzamil Basha',
  },
  mcqs: [
    {
      id: 'q1',
      question: 'What won the 2022 Nobel Prize in Physics for Alain Aspect, John Clauser, and Anton Zeilinger?',
      options: [
        { id: 'a', text: 'Experiments with entangled photons demonstrating the violation of Bell’s inequalities and pioneering quantum information science' },
        { id: 'b', text: 'Invention of the internet' },
        { id: 'c', text: 'Discovery of the electron' },
        { id: 'd', text: 'Building the first smartphone' },
      ],
      correctAnswer: 'a',
      explanation: 'Placeholder',
      incorrectFeedback: 'Placeholder',
    },
    {
      id: 'q2',
      question: 'What is the most famous entangled two-qubit state?',
      options: [
        { id: 'a', text: '|00⟩' },
        { id: 'b', text: 'Bell state |Φ⁺⟩ = (|00⟩ + |11⟩)/√2' },
        { id: 'c', text: '|01⟩' },
        { id: 'd', text: '|+⟩|+⟩' },
      ],
      correctAnswer: 'b',
      explanation: 'The Bell state |Φ⁺⟩ = (|00⟩ + |11⟩)/√2 is maximally entangled. Measuring qubit 1 immediately determines qubit 2: if qubit 1 is |0⟩, qubit 2 must be |0⟩; if qubit 1 is |1⟩, qubit 2 must be |1⟩—regardless of physical distance.',
      incorrectFeedback: 'Bell states like |Φ⁺⟩ = (|00⟩ + |11⟩)/√2 are maximally entangled.',
    },
    {
      id: 'q3',
      question: 'What gate, combined with a Hadamard, creates a Bell state from |00⟩?',
      options: [
        { id: 'a', text: 'X gate' },
        { id: 'b', text: 'CNOT (Controlled-NOT) gate' },
        { id: 'c', text: 'Z gate' },
        { id: 'd', text: 'Toffoli gate' },
      ],
      correctAnswer: 'b',
      explanation: 'Circuit: Apply H to qubit 1, then CNOT(1→2). This transforms |00⟩ → H⊗I → (|0⟩+|1⟩)|0⟩/√2 → CNOT → (|00⟩+|11⟩)/√2 = |Φ⁺⟩ Bell state.',
      incorrectFeedback: 'Hadamard + CNOT is the standard circuit for creating Bell states.',
    },
    {
      id: 'q4',
      question: 'Can entanglement be used to send information faster than light?',
      options: [
        { id: 'a', text: 'Yes, quantum teleportation proves this' },
        { id: 'b', text: 'No, measurement outcomes are random; classical communication is still required' },
        { id: 'c', text: 'Yes, but only on Sundays' },
        { id: 'd', text: 'Yes, with enough qubits' },
      ],
      correctAnswer: 'b',
      explanation: 'Entanglement alone cannot transmit information. Measuring an entangled qubit gives a random result; correlations only appear after comparing results via classical communication (limited by speed of light). This protects causality.',
      incorrectFeedback: 'Entanglement produces correlations, not faster-than-light communication.',
    },
    {
      id: 'q5',
      question: 'What did the 2022 Nobel Prize in Physics experimentally confirm about entanglement?',
      options: [
        { id: 'a', text: 'Entanglement doesn\'t exist' },
        { id: 'b', text: 'Bell inequality violations prove quantum mechanics is nonlocal and cannot be explained by hidden variables' },
        { id: 'c', text: 'Entanglement works classically' },
        { id: 'd', text: 'Nothing new' },
      ],
      correctAnswer: 'b',
      explanation: 'Alain Aspect, John Clauser, and Anton Zeilinger won the 2022 Nobel Prize for experiments demonstrating Bell inequality violations, proving quantum mechanics exhibits genuine nonlocal correlations that no local hidden variable theory can explain.',
      incorrectFeedback: 'The 2022 Nobel Prize confirmed Bell inequality violations and quantum nonlocality.',
    },
  ],
};

export const quantumInterference: Topic = {
  id: 'quantum-interference',
  moduleId: 'quantum-foundations',
  number: 13,
  title: 'Quantum Interference: Constructive and Destructive',
  description: 'Master the fundamental computational mechanism of quantum advantage: canceling wrong answers while amplifying correct solutions.',
  objectives: [
    'Understand Young’s Double-Slit Experiment as the prototype of quantum interference',
    'Calculate constructive interference (peaks align) vs destructive interference (peak meets trough)',
    'Explain how quantum algorithms leverage interference to beat classical complexity limits',
  ],
  story: `In 1801, English polymath Thomas Young performed the legendary **Double-Slit Experiment**.
  
He shone sunlight through two narrow parallel slits onto a screen. If light consisted of classical particles (like tiny pellets), you would expect to see two bright bands on the wall directly opposite the slits.
  
Instead, Young saw a series of alternating bright and dark zebra stripes!
  
Where the crest of light waves from slit 1 met the crest from slit 2, they reinforced each other to create a bright stripe (**Constructive Interference**).
Where the crest from slit 1 met the trough from slit 2, they cancelled each other out into total darkness (**Destructive Interference**)!
  
When electrons and qubits are passed through quantum gates, their probability waves interfere in this exact same way.`,
  motivation: `**The core secret of all quantum algorithms**: Quantum computers do not simply "try all answers at once." If they did, measuring at the end would just return a random useless answer. The magic lies in **quantum interference**: engineering the gates so that incorrect paths cancel out to 0% probability, leaving only the correct answer standing.`,
  concept: {
    simple: `Noise-canceling headphones use tiny microphones to listen to background airplane engine hum. The headphones instantly generate a sound wave that is the exact upside-down mirror image of the engine noise. The two waves collide and cancel each other out into silence!
Quantum computing does the exact same thing to bad answers in math problems: it uses destructive interference to cancel out wrong answers into silence!`,
    technical: `Quantum interference is the mathematical consequence of unitarity and the linearity of quantum state evolution. For two computational paths $|s\\rangle \\rightarrow |x\\rangle$ with amplitudes $A_1 = r_1 e^{i\\phi_1}$ and $A_2 = r_2 e^{i\\phi_2}$, the total measurement probability is:
$$P(x) = |A_1 + A_2|^2 = r_1^2 + r_2^2 + 2 r_1 r_2 \\cos(\\phi_1 - \\phi_2)$$
The cross-term $2 r_1 r_2 \\cos(\\Delta\\phi)$ represents quantum interference: strictly positive when $\\Delta\\phi = 0$ (constructive), and maximally negative ($-2r_1 r_2$) when $\\Delta\\phi = \\pi$ (destructive).`,
  },
  keyTerms: [
    { term: 'Constructive Interference', simple: 'Waves reinforcing each other to make an answer much more likely to be measured.', technical: 'Amplification of probability when paths share identical phase ($\\Delta\\phi = 0$), maximizing $|A_1 + A_2|^2$.' },
    { term: 'Destructive Interference', simple: 'Waves canceling each other out to make an answer impossible to measure.', technical: 'Cancellation of probability density when paths have opposite phase ($\\Delta\\phi = \\pi$), minimizing $|A_1 + A_2|^2$.' },
    { term: 'Amplitude Amplification', simple: 'The general quantum trick that systematically increases the probability of the right answer.', technical: 'Iterative unitary operator rotating state vector toward target subspace by reflection about the mean.' },
  ],
  equations: [
    {
      latex: 'P(x) = |A_1 + A_2|^2 = |A_1|^2 + |A_2|^2 + 2 \\text{Re}(A_1^* A_2)',
      explanation: 'The Quantum Interference Equation: classical probability (|A1|^2 + |A2|^2) is modified by the quantum interference term 2*Re(A1* * A2).',
      symbols: [
        { symbol: 'A_1, A_2', meaning: 'Complex path amplitudes', interpretation: 'Alternative computational branches' },
        { symbol: '2\\text{Re}(A_1^* A_2)', meaning: 'Interference term', interpretation: 'Can be positive, negative, or zero' },
      ],
      example: {
        description: 'Two paths each with magnitude 0.5. If phases match (0 deg), P = |0.5 + 0.5|^2 = 1.0 (Constructive). If phases are opposite (180 deg), P = |0.5 - 0.5|^2 = 0.0 (Destructive).',
        calculation: 'P_{\\text{constructive}} = 1.0, \\quad P_{\\text{destructive}} = 0.0',
        result: 'Interference swings outcome probability from 100% down to 0%',
      },
    },
  ],
  howItWorks: [
    { number: 1, title: 'Branching', description: 'Hadamard gates split computation across 2^n paths.' },
    { number: 2, title: 'Phase Inversion (Oracle)', description: 'The quantum algorithm marks correct solutions by flipping their phase by 180 degrees (multiplying by -1).' },
    { number: 3, title: 'Diffusion / Interference', description: 'Inversion about the mean causes marked solutions to amplify constructively while unmarked paths cancel destructively.' },
  ],
  applications: [
    { title: 'Grover’s Search Algorithm', problem: 'Searching an unsorted telephone directory of 1,000,000 names.', solution: 'Grover iterations use interference to boost the target name’s probability to >99% in only ~1,000 steps.' },
  ],
  activity: {
    type: 'mcq',
    title: 'Interference Term Sign',
    question: 'If the phase difference between two equal amplitudes is pi (180 degrees), what is the value of cos(Delta phi) and what type of interference occurs?',
    options: [
      { id: 'a', text: 'cos(pi) = -1, leading to Destructive Interference (complete cancellation)' },
      { id: 'b', text: 'cos(pi) = +1, leading to Constructive Interference' },
      { id: 'c', text: 'cos(pi) = 0' },
      { id: 'd', text: 'It creates an error' },
    ],
    correctAnswer: 'a',
    explanation: 'cos(pi) = -1. This makes the interference term 2*r1*r2*(-1) negative, subtracting from the probability and causing complete destructive interference.',
    hint: 'What is the cosine of 180 degrees (pi radians)?',
  },
  pythonHandsOn: {
    title: "Simulating Quantum Wave Interference in Qiskit",
    description: "Construct a quantum interferometer in Qiskit demonstrating how constructive and destructive interference select specific computational outcomes.",
    packages: ["qiskit"],
    installCommand: "pip install qiskit",
    imports: [
      { code: "from qiskit import QuantumCircuit", explanation: "Circuit module" },
      { code: "from qiskit.quantum_info import Statevector", explanation: "Statevector module" }
    ],
    code: [
      { code: "# Experiment 1: Constructive Interference (H -> H)", explanation: "Exp 1" },
      { code: "qc1 = QuantumCircuit(1)", explanation: "1 qubit" },
      { code: "qc1.h(0)", explanation: "Path splitting: |0> -> (|0> + |1>)/sqrt(2)" },
      { code: "qc1.h(0)", explanation: "Recombination: paths to |1> destructively cancel, |0> constructively adds" },
      { code: "sv1 = Statevector.from_instruction(qc1)", explanation: "Extract statevector" },
      { code: "print('Exp 1 (H -> H): Output is 100% |0> due to constructive interference:')", explanation: "Label" },
      { code: "print('  Statevector:', sv1.data.round(3))", explanation: "[1.0, 0.0]" },
      { code: "", explanation: "" },
      { code: "# Experiment 2: Destructive Interference via Phase Flip (H -> Z -> H)", explanation: "Exp 2" },
      { code: "qc2 = QuantumCircuit(1)", explanation: "1 qubit" },
      { code: "qc2.h(0)", explanation: "Path splitting: |0> -> (|0> + |1>)/sqrt(2)" },
      { code: "qc2.z(0)", explanation: "Apply phase flip: changes relative phase to (|0> - |1>)/sqrt(2)" },
      { code: "qc2.h(0)", explanation: "Recombination: paths to |0> destructively cancel, |1> constructively adds" },
      { code: "sv2 = Statevector.from_instruction(qc2)", explanation: "Extract statevector" },
      { code: "print('\\nExp 2 (H -> Z -> H): Phase flip switches interference from |0> to |1>:')", explanation: "Label" },
      { code: "print('  Statevector:', sv2.data.round(3))", explanation: "[0.0, 1.0]" }
    ],
    executionFlow: [
      { number: 1, title: "Path Splitting", description: "Hadamard gate acts as a 50/50 quantum beamsplitter." },
      { number: 2, title: "Phase Modulation", description: "Pauli-Z gate alters the relative wave phase of the paths." },
      { number: 3, title: "Recombination", description: "Second Hadamard recombines paths, demonstrating constructive interference toward the target state." }
    ],
    input: "Quantum circuits implementing Mach-Zehnder interferometer paths.",
    output: "Exp 1 (H -> H): [1.0, 0.0] (100% |0>)\nExp 2 (H -> Z -> H): [0.0, 1.0] (100% |1>)",
    interpretation: "Quantum speedups depend fundamentally on interference: designing circuits such that incorrect computational paths destructively cancel while correct solutions constructively amplify.",
    colabInstructions: [
      "Click 'Copy for Google Colab' to copy the complete runnable script",
      "Open Google Colab at colab.research.google.com",
      "Paste into a code cell and press Shift + Enter to run",
    ],
  },
  mcqs: [
    {
      id: 'q1',
      question: 'What is the primary role of quantum interference in quantum algorithms like Grover’s Search and Shor’s Algorithm?',
      options: [
        { id: 'a', text: 'To cancel out incorrect computational branches through destructive interference and amplify the correct answer through constructive interference' },
        { id: 'b', text: 'To encrypt emails' },
        { id: 'c', text: 'To make the quantum chip colder' },
        { id: 'd', text: 'To convert digital audio to analog' },
      ],
      correctAnswer: 'a',
      explanation: 'Placeholder',
      incorrectFeedback: 'Placeholder',
    },
    {
      id: 'q2',
      question: 'In the Mach-Zehnder interferometer, what happens if you place a detector on one path to see which way the photon went?',
      options: [
        { id: 'a', text: 'Interference pattern remains' },
        { id: 'b', text: 'Interference pattern disappears (which-path information destroys interference)' },
        { id: 'c', text: 'Photon disappears' },
        { id: 'd', text: 'Photon speed increases' },
      ],
      correctAnswer: 'b',
      explanation: 'Gaining "which-path" information collapses the superposition of paths. Without this information, photons interfere. With it, they behave classically—demonstrating Bohr\'s complementarity principle.',
      incorrectFeedback: 'Measuring which path destroys quantum interference (complementarity).',
    },
    {
      id: 'q3',
      question: 'What is the key mathematical operation in Grover\'s search algorithm?',
      options: [
        { id: 'a', text: 'Classical sorting' },
        { id: 'b', text: 'Amplitude amplification via inversion-about-average' },
        { id: 'c', text: 'Binary search' },
        { id: 'd', text: 'Hash tables' },
      ],
      correctAnswer: 'b',
      explanation: 'Grover\'s algorithm uses iterative "inversion about average" to amplify the amplitude of the target state while suppressing others through destructive interference, achieving O(√N) search instead of classical O(N).',
      incorrectFeedback: 'Grover\'s algorithm uses amplitude amplification via inversion-about-average.',
    },
    {
      id: 'q4',
      question: 'What is the speedup of Grover\'s search algorithm over classical brute-force search?',
      options: [
        { id: 'a', text: 'Exponential speedup O(1) vs O(N)' },
        { id: 'b', text: 'Quadratic speedup O(√N) vs O(N)' },
        { id: 'c', text: 'No speedup' },
        { id: 'd', text: 'Linear speedup' },
      ],
      correctAnswer: 'b',
      explanation: 'Grover\'s algorithm finds a target in an unsorted database of N items in O(√N) queries, compared to classical O(N/2) average. This is a provably optimal quantum speedup for unstructured search.',
      incorrectFeedback: 'Grover\'s provides quadratic speedup: O(√N) queries instead of O(N).',
    },
    {
      id: 'q5',
      question: 'What happens if two probability amplitudes have opposite phases (π radians apart)?',
      options: [
        { id: 'a', text: 'They add constructively' },
        { id: 'b', text: 'They cancel via destructive interference' },
        { id: 'c', text: 'Nothing happens' },
        { id: 'd', text: 'They create entanglement' },
      ],
      correctAnswer: 'b',
      explanation: 'Amplitudes with opposite phases (e.g., +α and −α) cancel exactly: α + (−α) = 0, resulting in zero probability for that outcome. This destructive interference is exploited in quantum algorithms to eliminate wrong answers.',
      incorrectFeedback: 'Opposite phases cause destructive interference (amplitudes cancel).',
    },
  ],
};

export const qcApplications: Topic = {
  id: 'qc-applications',
  moduleId: 'quantum-foundations',
  number: 14,
  title: 'Real-World Applications of Quantum Computing',
  description: 'Survey industries poised for disruption: Quantum Chemistry, Drug Discovery, Financial Portfolio Optimization, Logistics, and Cryptography.',
  objectives: [
    'Analyze primary industrial domains primed for quantum advantage',
    'Understand Molecular Simulation and ground-state energy computation',
    'Examine Quantum Combinatorial Optimization (QAOA, VQE) in supply chain logistics',
  ],
  story: `In 2020, pharmaceutical researchers synthesized millions of candidate molecules in the race to develop treatments for COVID-19.
  
Testing drug molecules in biological wet labs takes 10 to 15 years and costs over $2.5 billion per approved therapeutic drug, with a 90% failure rate in human clinical trials. Why? Because classical computers cannot simulate how complex folded proteins bond with drug candidates at the quantum mechanical electron level.
  
With quantum computers, biochemists will simulate molecular binding affinity in silico with atomic precision before synthesizing a single chemical drop in the lab. Quantum computing promises to compress a 10-year drug discovery pipeline into weeks.`,
  motivation: `**Commercial value creation**: Quantum computing is not an academic exercise. McKinsey estimates that quantum computing will create over **$1.3 Trillion in corporate value** across chemistry, finance, automotive, and logistics by 2035.`,
  concept: {
    simple: `Where quantum computers will change the world:
1. **Medicine**: Designing custom cancer therapies atom-by-atom on a screen.
2. **Clean Energy**: Designing room-temperature superconductors that transmit electricity with zero power loss.
3. **Logistics**: Routing 100,000 FedEx delivery planes and ships in the optimal fuel-saving path.
4. **Finance**: Finding the most profitable investment portfolios under complex market risks.`,
    technical: `Quantum computing applications target problems whose mathematical structure maps to:
- **Quantum Simulation**: Hamiltonian simulation $e^{-iHt}$ for quantum chemistry and material science.
- **Combinatorial Optimization**: Quadratic Unconstrained Binary Optimization (QUBO) mapped to Ising spin Hamiltonians solved via Quantum Approximate Optimization Algorithm (QAOA).
- **Linear Systems**: Inverting $N \\times N$ sparse matrices in $O(\\text{poly}(\\log N))$ via the Harrow-Hassidim-Lloyd (HHL) algorithm.`,
  },
  keyTerms: [
    { term: 'Variational Quantum Eigensolver (VQE)', simple: 'A hybrid algorithm where a quantum computer works with a classical computer to find the lowest energy of a molecule.', technical: 'Hybrid quantum-classical algorithm using parameterized quantum circuits to minimize expectation values $\\langle \\psi(\\theta) | H | \\psi(\\theta) \\rangle$ via classical gradient descent.' },
    { term: 'QAOA', simple: 'A quantum algorithm designed to find the best solution to complex scheduling and logistics puzzles.', technical: 'Quantum Approximate Optimization Algorithm for combinatorial optimization on NISQ hardware.' },
  ],
  howItWorks: [
    { number: 1, title: 'Problem Mapping', description: 'Translate business problem (e.g. traveling salesperson or chemical molecule) into an Ising spin Hamiltonian matrix H.' },
    { number: 2, title: 'Hybrid Optimization', description: 'Quantum computer evaluates quantum expectation values; classical optimizer updates circuit parameters theta.' },
    { number: 3, title: 'Convergence', description: 'Iterate until minimum energy ground state reveals optimal logistical schedule or molecular energy.' },
  ],
  applications: [
    { title: 'Air Traffic Optimization (Airbus)', problem: 'Routing hundreds of aircraft through airport runways during severe thunderstorm disruptions.', solution: 'QAOA combinatorial algorithms compute optimal gate reassignments in seconds.' },
    { title: 'Financial Risk Management (Goldman Sachs / JPMorgan)', problem: 'Pricing complex multi-asset derivatives using Monte Carlo simulation requires hours of compute.', solution: 'Quantum Amplitude Estimation achieves quadratic speedup ($O(1/\\epsilon)$ vs $O(1/\\epsilon^2)$).' },
  ],
  activity: {
    type: 'mcq',
    title: 'Application Domain Matching',
    question: 'Which of the following problems is best suited for a Quantum Computer rather than a classical computer?',
    options: [
      { id: 'a', text: 'Simulating the quantum molecular electron interactions of a new battery electrolyte' },
      { id: 'b', text: 'Streaming a 4K movie on Netflix' },
      { id: 'c', text: 'Sending an email to 100 people' },
      { id: 'd', text: 'Browsing social media feeds' },
    ],
    correctAnswer: 'a',
    explanation: 'Simulating quantum electron bonding in molecules is a natural quantum mechanical problem that scales exponentially on classical computers, making it an ideal target for quantum advantage.',
    hint: 'Which problem involves quantum physics and exponential complexity?',
  },
  learningResource: {
    title: 'Lesson 13: Quantum Chemistry with VQE',
    pdfUrl: '/presentations/Lesson13.pdf',
    description: 'Molecular H2 electronic structure, Jordan-Wigner fermion-to-qubit mapping, TwoLocal ansatz, and VQE ground state energy computation.',
    lessonNumber: 13,
    pages: 11,
    author: 'Dr. Syed Muzamil Basha',
  },
  pythonHandsOn: {
    title: "Quantum Chemistry with VQE: Ground State Energy of Hydrogen Molecule (H2)",
    description: "Simulate the electronic ground state energy of the H2 molecule using PySCFDriver, JordanWignerMapper, TwoLocal ansatz, and the VQE algorithm in Qiskit Nature.",
    packages: ["qiskit", "qiskit-nature", "qiskit-algorithms", "pyscf"],
    installCommand: "pip install qiskit qiskit-nature qiskit-algorithms pyscf",
    imports: [
      { code: "import numpy as np", explanation: "NumPy math library" },
      { code: "from qiskit_nature.second_q.drivers import PySCFDriver", explanation: "Hartree-Fock quantum chemistry driver" },
      { code: "from qiskit_nature.second_q.problems import ElectronicStructureProblem", explanation: "Electronic structure Hamiltonian formulation" },
      { code: "from qiskit_nature.second_q.transformers import FreezeCoreTransformer", explanation: "Core electron orbital freezing approximation" },
      { code: "from qiskit_nature.second_q.mappers import JordanWignerMapper", explanation: "Fermionic to qubit operator mapping" },
      { code: "from qiskit.circuit.library import TwoLocal", explanation: "Parameterized variational ansatz circuit" },
      { code: "from qiskit_algorithms import VQE", explanation: "Variational Quantum Eigensolver solver" },
      { code: "from qiskit_algorithms.optimizers import COBYLA", explanation: "Derivative-free classical optimizer" },
      { code: "from qiskit.primitives import Estimator", explanation: "Qiskit primitive for expectation value evaluation" },
    ],
    code: [
      { code: "# Define molecule (H2) geometry with 0.735 Angstrom bond distance", explanation: "Molecular geometry" },
      { code: 'molecule_geometry = "H 0 0 0; H 0 0 0.735"', explanation: "H2 spatial coordinates" },
      { code: "", explanation: "" },
      { code: "# Use PySCFDriver to compute molecular integrals with STO-3G basis set", explanation: "Driver setup" },
      { code: 'driver = PySCFDriver(atom=molecule_geometry, basis="sto3g")', explanation: "PySCF electronic driver" },
      { code: "es_problem = ElectronicStructureProblem(driver)", explanation: "Electronic structure problem" },
      { code: "", explanation: "" },
      { code: "# Apply freeze-core approximation", explanation: "Core transformation" },
      { code: "transformer = FreezeCoreTransformer()", explanation: "Freeze core transformer" },
      { code: "es_problem = transformer.transform(es_problem)", explanation: "Reduce active space" },
      { code: "", explanation: "" },
      { code: "# Map fermionic creation/annihilation operators to qubit Pauli terms", explanation: "Qubit mapping" },
      { code: "mapper = JordanWignerMapper()", explanation: "Jordan-Wigner transformation" },
      { code: "hamiltonian = mapper.map(es_problem.hamiltonian.second_q_op())", explanation: "Qubit Hamiltonian" },
      { code: "", explanation: "" },
      { code: "# Define variational ansatz (TwoLocal circuit with Ry, Rz and CZ gates)", explanation: "Ansatz" },
      { code: 'ansatz = TwoLocal(rotation_blocks=["ry", "rz"], entanglement_blocks="cz")', explanation: "Hardware-efficient ansatz" },
      { code: "", explanation: "" },
      { code: "# Set up COBYLA optimizer and Estimator primitive", explanation: "Optimizer" },
      { code: "optimizer = COBYLA(maxiter=100)", explanation: "100 optimization steps" },
      { code: "estimator = Estimator()", explanation: "Estimator primitive" },
      { code: "", explanation: "" },
      { code: "# Execute Variational Quantum Eigensolver (VQE)", explanation: "VQE execution" },
      { code: "vqe = VQE(estimator, ansatz, optimizer)", explanation: "Instantiate VQE" },
      { code: "result = vqe.compute_minimum_eigenvalue(hamiltonian)", explanation: "Optimize ground state" },
      { code: 'print(f"Estimated ground state energy: {result.optimal_value:.4f} Hartree")', explanation: "Print ground state energy" },
    ],
    executionFlow: [
      { number: 1, title: "Molecular Formulation", description: "PySCFDriver computes 1- and 2-electron integrals for H2 at 0.735Å equilibrium bond length." },
      { number: 2, title: "Jordan-Wigner Transformation", description: "Maps electron orbital anti-commutation relations to a multi-qubit Pauli operator Hamiltonian." },
      { number: 3, title: "VQE Ground State Convergence", description: "TwoLocal ansatz and COBYLA iteratively minimize the energy expectation value to locate the ground state energy (~ -1.137 Hartree)." },
    ],
    input: "Hydrogen molecule H2 geometry with STO-3G basis set",
    output: "Estimated ground state energy: -1.1373 Hartree",
    interpretation: "The hybrid VQE algorithm successfully converged to the ground state potential energy of H2, demonstrating how near-term quantum computers can tackle real quantum chemistry problems without exponential classical memory.",
    colabInstructions: [
      "Click 'Copy for Google Colab' to copy the complete runnable script",
      "Open Google Colab at colab.research.google.com",
      "Paste into a code cell and press Shift + Enter to run",
    ],
  },
  mcqs: [
    {
      id: 'q1',
      question: 'What is the primary commercial motivation for using quantum computers in the pharmaceutical industry?',
      options: [
        { id: 'a', text: 'To accurately simulate complex molecular binding and protein folding in silico, reducing billions of dollars and years of wet lab trial-and-error' },
        { id: 'b', text: 'To replace doctors with robots' },
        { id: 'c', text: 'To print 3D pills faster' },
        { id: 'd', text: 'To decrease the cost of hospital beds' },
      ],
      correctAnswer: 'a',
      explanation: 'Placeholder',
      incorrectFeedback: 'Placeholder',
    },
    {
      id: 'q2',
      question: 'What is the primary application of quantum computers in cryptography?',
      options: [
        { id: 'a', text: 'Mining Bitcoin faster' },
        { id: 'b', text: 'Breaking RSA encryption via Shor\'s factorization algorithm' },
        { id: 'c', text: 'Creating stronger passwords' },
        { id: 'd', text: 'Sending emails' },
      ],
      correctAnswer: 'b',
      explanation: 'Shor\'s algorithm can factor large numbers in polynomial time, breaking RSA-2048 encryption. A fault-tolerant quantum computer with ~4000 logical qubits could break current public-key cryptography, motivating post-quantum cryptography research.',
      incorrectFeedback: 'Quantum computers threaten RSA via Shor\'s factoring algorithm.',
    },
    {
      id: 'q3',
      question: 'What is Variational Quantum Eigensolver (VQE) used for?',
      options: [
        { id: 'a', text: 'Web browsing' },
        { id: 'b', text: 'Finding ground state energies of molecules for drug discovery and materials science' },
        { id: 'c', text: 'Playing video games' },
        { id: 'd', text: 'Image recognition' },
      ],
      correctAnswer: 'b',
      explanation: 'VQE is a hybrid quantum-classical algorithm that finds molecular ground state energies using NISQ quantum computers. It\'s used for simulating chemical reactions, drug discovery, and materials design.',
      incorrectFeedback: 'VQE finds molecular ground states for quantum chemistry simulations.',
    },
    {
      id: 'q4',
      question: 'What industry problem can quantum computers solve via quantum annealing?',
      options: [
        { id: 'a', text: 'Social media analytics' },
        { id: 'b', text: 'Combinatorial optimization (logistics, scheduling, portfolio optimization)' },
        { id: 'c', text: 'Video streaming' },
        { id: 'd', text: 'Text editing' },
      ],
      correctAnswer: 'b',
      explanation: 'Quantum annealers (like D-Wave systems) solve combinatorial optimization problems: vehicle routing, flight scheduling, protein folding, portfolio optimization, and resource allocation—problems with exponentially many possible solutions.',
      incorrectFeedback: 'Quantum annealing solves combinatorial optimization problems.',
    },
    {
      id: 'q5',
      question: 'What is quantum machine learning (QML)?',
      options: [
        { id: 'a', text: 'Classical ML on quantum computers' },
        { id: 'b', text: 'Using quantum computers to speed up certain ML tasks like classification, clustering, and linear algebra' },
        { id: 'c', text: 'Teaching AI about quantum physics' },
        { id: 'd', text: 'A type of neural network' },
      ],
      correctAnswer: 'b',
      explanation: 'Quantum machine learning exploits quantum superposition and interference to potentially accelerate tasks like support vector machines, principal component analysis, and neural network training—though practical advantages remain under research.',
      incorrectFeedback: 'QML uses quantum computers to potentially accelerate certain machine learning algorithms.',
    },
  ],
};

export const qcLimitations: Topic = {
  id: 'qc-limitations',
  moduleId: 'quantum-foundations',
  number: 15,
  title: 'Quantum Computing Limitations & The Road Ahead',
  description: 'Separate reality from hype: Decoherence, Quantum Error Correction (QEC), physical qubit overhead, and realistic timelines.',
  objectives: [
    'Debunk popular myths: quantum computers will NOT replace classical smartphones or laptops',
    'Understand the Quantum Error Correction barrier: physical vs logical qubits',
    'Examine Surface Codes and fault-tolerant thresholds',
  ],
  story: `If you read popular science headlines, you might think you will soon have a "quantum iPhone" in your pocket that downloads movies in zero seconds and plays video games with infinite frame rates.
  
This is complete science fiction.
  
A state-of-the-art superconducting quantum processor must be chilled inside a multi-million-dollar dilution refrigerator to **15 millikelvin**—a temperature colder than deep outer space! If a stray cosmic ray, WiFi signal, or thermal vibration touches a qubit, its quantum superposition collapses in microseconds.
  
Furthermore, quantum computers are terrible at everyday tasks: they cannot browse web pages, store text files, or render graphics faster than classical computers. Quantum computing is a specialized accelerator designed strictly for narrow, mathematically complex algorithms.`,
  motivation: `**Sobriety and engineering reality**: To be a credible professional in this field, you must be able to separate genuine technological progress from marketing hype, understanding the immense engineering challenges of fault-tolerant error correction.`,
  concept: {
    simple: `Why you won't have a quantum laptop:
1. **Extreme Cold**: Qubits must be kept at -459°F (-273°C) colder than interstellar space!
2. **Fragile Noise**: A microscopic vibration ruins the calculation in a fraction of a millisecond (Decoherence).
3. **Qubit Overhead**: To build 1 reliable, error-free "Logical Qubit," we currently need 1,000 to 10,000 noisy physical qubits to correct mistakes!
4. **Specialized Use**: Quantum computers are mathematical accelerators for specific hard problems, not general-purpose replacements for PCs.`,
    technical: `Physical qubits suffer from finite coherence times $T_1$ (longitudinal relaxation) and $T_2$ (transverse dephasing), leading to gate error rates $\\sim 10^{-3}$, far above classical CMOS error rates ($\\sim 10^{-17}$). Quantum Error Correction (QEC) uses topological Surface Codes where thousands of entangled physical data and syndrome qubits encode one fault-tolerant logical qubit below the threshold theorem error rate $\\sim 1\\%$.`,
  },
  keyTerms: [
    { term: 'Physical vs Logical Qubit', simple: 'A physical qubit is a real, noisy chip component; a logical qubit is a protected, error-free qubit made of 1,000 physical qubits working together.', technical: 'Physical qubits represent noisy hardware elements; logical qubits are fault-tolerant error-protected states encoded across topological codes.' },
    { term: 'T1 Relaxation Time', simple: 'How long a qubit can stay in state 1 before falling back down to 0.', technical: 'Longitudinal energy relaxation timescale for spontaneous decay $|1\\rangle \\rightarrow |0\\rangle$.' },
    { term: 'T2 Dephasing Time', simple: 'How long a qubit can hold its quantum phase before noise scrambles it.', technical: 'Transverse phase coherence relaxation timescale governing loss of off-diagonal density matrix elements.' },
    { term: 'Surface Code', simple: 'The leading blueprint for quantum error correction using a 2D grid of physical qubits.', technical: 'A 2D topological stabilizer code with local weight-4 stabilizer measurements and a relatively high fault-tolerant error threshold (~1%).' },
  ],
  equations: [
    {
      latex: 'N_{\\text{physical}} \\approx 1{,}000 \\times N_{\\text{logical}}',
      explanation: 'Surface Code Overhead Rule of Thumb: due to current physical gate error rates (~10^-3), approximately 1,000 physical qubits are required to build a single fault-tolerant logical qubit.',
      symbols: [
        { symbol: 'N_{\\text{logical}}', meaning: 'Number of clean logical qubits', interpretation: 'What the algorithm needs (e.g. 2,048 for RSA)' },
        { symbol: 'N_{\\text{physical}}', meaning: 'Physical qubits on chip', interpretation: 'Hardware requirement (~2,000,000 physical qubits)' },
      ],
      example: {
        description: 'Factoring 2048-bit RSA requires ~2,000 logical qubits. At 1,000 physical qubits per logical qubit, hardware requires ~2 million physical qubits.',
        calculation: '2{,}000 \\times 1{,}000 = 2{,}000{,}000 \\text{ physical qubits}',
        result: 'Explains why fault-tolerant codebreaking remains a multi-year hardware engineering roadmap',
      },
    },
  ],
  howItWorks: [
    { number: 1, title: 'NISQ Optimization', description: 'Run lightweight variational algorithms (VQE/QAOA) that tolerate noisy physical qubits today.' },
    { number: 2, title: 'Syndrome Measurement', description: 'Measure parity operators across ancilla qubits to detect bit-flip (X) and phase-flip (Z) errors without collapsing data.' },
    { number: 3, title: 'Fault-Tolerant Threshold', description: 'Scale physical chips past 1 million physical qubits to enable fully error-corrected logical quantum computation.' },
  ],
  applications: [
    { title: 'Current NISQ Algorithms', problem: 'Doing useful work today on 100-qubit chips before full error correction exists.', solution: 'Error mitigation techniques (Zero-Noise Extrapolation, Readout Calibration) suppress noise artifacts.' },
  ],
  activity: {
    type: 'mcq',
    title: 'Hype vs Reality Check',
    question: 'Will quantum computers eventually replace classical smartphones, laptops, and web servers for general everyday use?',
    options: [
      { id: 'a', text: 'No, quantum computers are specialized accelerators for specific mathematical problems and require extreme cryogenic support; classical computers are far superior for everyday computing' },
      { id: 'b', text: 'Yes, all iPhones will be quantum by next year' },
      { id: 'c', text: 'Yes, quantum computers run Microsoft Word 1,000 times faster' },
      { id: 'd', text: 'Yes, because classical physics is obsolete' },
    ],
    correctAnswer: 'a',
    explanation: 'Quantum computers offer exponential speedups only for specific mathematical problems (factoring, quantum simulation, amplitude amplification). For word processing, video streaming, and general database tasks, classical computers are fundamentally better suited and infinitely more practical.',
    hint: 'Think about whether quantum computers are general-purpose or specialized accelerators.',
  },
  pythonHandsOn: {
    title: "Simulating Noise and Decoherence in Qiskit Aer",
    description: "Simulate quantum hardware noise (depolarizing errors) in Qiskit Aer to observe how decoherence degrades quantum circuit fidelity.",
    packages: ["qiskit", "qiskit-aer"],
    installCommand: "pip install qiskit qiskit-aer",
    imports: [
      { code: "from qiskit import QuantumCircuit", explanation: "Circuit module" },
      { code: "from qiskit_aer import AerSimulator", explanation: "Simulator module" },
      { code: "from qiskit_aer.noise import NoiseModel, depolarizing_error", explanation: "Noise simulation module" }
    ],
    code: [
      { code: "# 1. Build Ideal Bell State Circuit", explanation: "Ideal circuit" },
      { code: "qc = QuantumCircuit(2, 2)", explanation: "2 qubits, 2 bits" },
      { code: "qc.h(0)", explanation: "Superposition" },
      { code: "qc.cx(0, 1)", explanation: "Entangle" },
      { code: "qc.measure([0, 1], [0, 1])", explanation: "Measurement" },
      { code: "", explanation: "" },
      { code: "# 2. Run Ideal Simulation (No Noise)", explanation: "Run ideal" },
      { code: "sim_ideal = AerSimulator()", explanation: "Ideal backend" },
      { code: "counts_ideal = sim_ideal.run(qc, shots=1000).result().get_counts()", explanation: "Ideal shots" },
      { code: "print('Ideal Circuit Counts (100% Correlated):', counts_ideal)", explanation: "Ideal output" },
      { code: "", explanation: "" },
      { code: "# 3. Build Realistic NISQ Noise Model (5% 2-qubit gate error)", explanation: "Noise model" },
      { code: "noise_model = NoiseModel()", explanation: "Initialize noise model" },
      { code: "error_cnot = depolarizing_error(0.05, 2)  # 5% depolarizing noise", explanation: "5% error on CNOT" },
      { code: "noise_model.add_all_qubit_quantum_error(error_cnot, ['cx'])", explanation: "Attach to CNOT" },
      { code: "", explanation: "" },
      { code: "# 4. Run Noisy Simulation", explanation: "Run noisy" },
      { code: "sim_noisy = AerSimulator(noise_model=noise_model)", explanation: "Noisy backend" },
      { code: "counts_noisy = sim_noisy.run(qc, shots=1000).result().get_counts()", explanation: "Noisy shots" },
      { code: "print('\\nNoisy Circuit Counts (With Gate Errors):', counts_noisy)", explanation: "Noisy output" },
      { code: "err_pct = ((counts_noisy.get('01', 0) + counts_noisy.get('10', 0)) / 1000) * 100", explanation: "Calculate error rate" },
      { code: "print(f'Unwanted Error States (01/10): {err_pct:.1f}% of total shots')", explanation: "Error rate" },
      { code: "print('This demonstration illustrates why Quantum Error Mitigation and Correction are essential!')", explanation: "Summary" }
    ],
    executionFlow: [
      { number: 1, title: "Ideal Simulation", description: "Verify that an ideal Bell circuit produces only '00' and '11'." },
      { number: 2, title: "Inject Depolarizing Noise", description: "Configure a 5% gate error rate using Qiskit Aer's NoiseModel." },
      { number: 3, title: "Observe Error Outgrowths", description: "Observe unwanted '01' and '10' states appearing, demonstrating physical NISQ hardware limits." }
    ],
    input: "Bell state circuit on AerSimulator with depolarizing_error(0.05, 2).",
    output: "Ideal: {'00': 503, '11': 497}\nNoisy: {'00': 480, '11': 470, '01': 26, '10': 24}\nUnwanted Error States: ~5.0%",
    interpretation: "Current NISQ quantum computers suffer from environmental noise and gate imperfections. This demonstration shows how physical noise scrambles quantum states, highlighting the urgent need for Quantum Error Correction (QEC).",
    colabInstructions: [
      "Click 'Copy for Google Colab' to copy the complete runnable script",
      "Open Google Colab at colab.research.google.com",
      "Paste into a code cell and press Shift + Enter to run",
    ],
  },
  mcqs: [
    {
      id: 'q1',
      question: 'What is the primary reason why building a fault-tolerant quantum computer capable of breaking RSA encryption requires millions of physical qubits?',
      options: [
        { id: 'a', text: 'Quantum Error Correction requires hundreds to thousands of physical qubits to encode and protect a single error-free logical qubit' },
        { id: 'b', text: 'Because each qubit can only store one character of text' },
        { id: 'c', text: 'Because quantum computers need extra physical qubits to display graphics' },
        { id: 'd', text: 'Because physicists enjoy building larger chips' },
      ],
      correctAnswer: 'a',
      explanation: 'Placeholder',
      incorrectFeedback: 'Placeholder',
    },
    {
      id: 'q2',
      question: 'What is the typical decoherence time for superconducting qubits in 2024?',
      options: [
        { id: 'a', text: 'Infinite (qubits never decohere)' },
        { id: 'b', text: '~100 microseconds' },
        { id: 'c', text: '10 seconds' },
        { id: 'd', text: '1 hour' },
      ],
      correctAnswer: 'b',
      explanation: 'Modern superconducting transmon qubits have T1 (energy relaxation) times of ~100 μs and T2 (dephasing) times of ~50-200 μs. This limits circuit depth to ~1000 gates before errors accumulate, necessitating quantum error correction.',
      incorrectFeedback: 'Current superconducting qubits decohere in ~100 microseconds.',
    },
    {
      id: 'q3',
      question: 'How many physical qubits are estimated to encode one logical error-corrected qubit using surface codes?',
      options: [
        { id: 'a', text: '1 physical = 1 logical (no overhead)' },
        { id: 'b', text: '~1000 physical qubits per logical qubit' },
        { id: 'c', text: '10 physical qubits' },
        { id: 'd', text: '10,000,000 physical qubits' },
      ],
      correctAnswer: 'b',
      explanation: 'Surface code error correction requires ~1000 physical qubits per logical qubit (depending on physical error rates). Breaking RSA-2048 requires ~4000 logical qubits = ~4 million physical qubits—a major engineering challenge.',
      incorrectFeedback: 'Surface codes require ~1000 physical qubits per error-corrected logical qubit.',
    },
    {
      id: 'q4',
      question: 'What operating temperature do superconducting quantum computers require?',
      options: [
        { id: 'a', text: 'Room temperature (20°C)' },
        { id: 'b', text: '~15 millikelvin (0.015 K, colder than outer space)' },
        { id: 'c', text: '0°C (freezing point of water)' },
        { id: 'd', text: '100°C' },
      ],
      correctAnswer: 'b',
      explanation: 'Superconducting qubits require dilution refrigerators cooled to ~15 mK (millikelvin) to suppress thermal noise below the qubit energy gap (~5 GHz ≈ 0.2 K). This is 200× colder than outer space (2.7 K cosmic microwave background).',
      incorrectFeedback: 'Superconducting quantum computers operate at ~15 millikelvin.',
    },
    {
      id: 'q5',
      question: 'Why can\'t quantum computers efficiently solve NP-complete problems like the traveling salesman problem?',
      options: [
        { id: 'a', text: 'They can solve all NP-complete problems in polynomial time' },
        { id: 'b', text: 'No known quantum algorithm provides exponential speedup for NP-complete problems (BQP ≠ NP-complete)' },
        { id: 'c', text: 'Quantum computers are slower than classical computers' },
        { id: 'd', text: 'NP-complete problems don\'t exist' },
      ],
      correctAnswer: 'b',
      explanation: 'While quantum computers excel at specific problems (factoring, unstructured search), there\'s no evidence they can solve NP-complete problems in polynomial time. Grover\'s algorithm provides only quadratic speedup for NP search, not exponential.',
      incorrectFeedback: 'Quantum computers don\'t provide exponential speedup for NP-complete problems.',
    },
  ],
};

export const module5Topics: Topic[] = [
  whyLearnQuantum,
  historyOfQC,
  classicalVsQuantum,
  whatIsQC,
  quantumMechanicsBasics,
  classicalBit,
  qubit,
  quantumState,
  superposition,
  measurement,
  probabilityAmplitude,
  entanglement,
  quantumInterference,
  qcApplications,
  qcLimitations,
];
