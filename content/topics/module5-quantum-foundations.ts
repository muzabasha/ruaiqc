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
    title: 'Visualizing Quantum Exponential Scaling in Python',
    description: 'Calculate the classical RAM required to simulate quantum systems as qubits increase.',
    packages: ['numpy'],
    installCommand: 'pip install numpy',
    imports: [{ code: 'import numpy as np', explanation: 'NumPy for math' }],
    code: [
      { code: '# Number of bytes for a complex128 number (16 bytes)', explanation: 'Memory per amplitude' },
      { code: 'bytes_per_amplitude = 16', explanation: '16 bytes' },
      { code: '', explanation: '' },
      { code: 'print("Qubits | State Dimensions | Classical RAM Required")', explanation: 'Header' },
      { code: 'print("-" * 52)', explanation: 'Divider' },
      { code: '', explanation: '' },
      { code: 'for n in [10, 20, 30, 40, 50]:', explanation: 'Test qubit counts' },
      { code: '    states = 2**n', explanation: '2^n dimensions' },
      { code: '    ram_bytes = states * bytes_per_amplitude', explanation: 'Total bytes' },
      { code: '    if ram_bytes < 1024**2:', explanation: 'Format KB' },
      { code: '        ram_str = f"{ram_bytes / 1024:.1f} KB"', explanation: 'KB' },
      { code: '    elif ram_bytes < 1024**3:', explanation: 'Format MB' },
      { code: '        ram_str = f"{ram_bytes / 1024**2:.1f} MB"', explanation: 'MB' },
      { code: '    elif ram_bytes < 1024**4:', explanation: 'Format GB' },
      { code: '        ram_str = f"{ram_bytes / 1024**3:.1f} GB"', explanation: 'GB' },
      { code: '    elif ram_bytes < 1024**5:', explanation: 'Format TB' },
      { code: '        ram_str = f"{ram_bytes / 1024**4:.1f} TB"', explanation: 'TB' },
      { code: '    else:', explanation: 'Format PB' },
      { code: '        ram_str = f"{ram_bytes / 1024**5:.1f} Petabytes (PB)"', explanation: 'PB' },
      { code: '    print(f"{n:6d} | {states:16,d} | {ram_str}")', explanation: 'Row output' },
    ],
    executionFlow: [
      { number: 1, title: 'Calculates State Dimensions', description: 'Evaluates 2^n scaling from 10 to 50 qubits.' },
      { number: 2, title: 'RAM Projection', description: 'Demonstrates that at 50 qubits, over 16 Petabytes of RAM are required to simulate a single quantum state.' },
    ],
    input: 'Qubit counts [10, 20, 30, 40, 50]',
    output: 'Qubits | State Dimensions | Classical RAM Required\n----------------------------------------------------\n    10 |            1,024 | 16.0 KB\n    20 |        1,048,576 | 16.0 MB\n    30 |    1,073,741,824 | 16.0 GB\n    40 | 1,099,511,627,776 | 16.0 TB\n    50 | 1,125,899,906,842,624 | 16.0 Petabytes (PB)',
    interpretation: 'This exponential curve explains why classical supercomputers fail to simulate even modest quantum systems, necessitating physical quantum hardware.',
    colabInstructions: ['Run in Google Colab.'],
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
    title: 'Classical vs Quantum Factoring Complexity in Python',
    description: 'Compare the runtime scaling of classical factoring vs Shor’s quantum algorithm.',
    packages: ['numpy'],
    installCommand: 'pip install numpy',
    imports: [{ code: 'import numpy as np', explanation: 'NumPy for math' }],
    code: [
      { code: '# Bit lengths of cryptographic keys: [256, 512, 1024, 2048]', explanation: 'Key sizes' },
      { code: 'bits = np.array([256, 512, 1024, 2048])', explanation: 'Array of bits' },
      { code: '', explanation: '' },
      { code: '# Classical General Number Field Sieve (GNFS) complexity: exp(O(b^(1/3)))', explanation: 'Classical' },
      { code: '# Shor’s Quantum Algorithm complexity: O(b^3)', explanation: 'Quantum' },
      { code: 'shor_complexity = bits**3', explanation: 'Cubic polynomial scaling' },
      { code: '', explanation: '' },
      { code: 'print("Key Bits | Shor Quantum Operations (b^3)")', explanation: 'Header' },
      { code: 'print("-" * 42)', explanation: 'Line' },
      { code: 'for b, q_ops in zip(bits, shor_complexity):', explanation: 'Loop' },
      { code: '    print(f"{b:8d} | {q_ops:15,d} operations (Polynomial!)")', explanation: 'Row' },
    ],
    executionFlow: [
      { number: 1, title: 'Complexity Comparison', description: 'Shows that for 2048-bit RSA, Shor requires only ~8.5 billion operations, easily manageable on a fault-tolerant QPU, whereas classical factoring takes 10^30 operations.' },
    ],
    input: 'RSA key bit sizes',
    output: 'Key Bits | Shor Quantum Operations (b^3)\n------------------------------------------\n     256 |      16,777,216 operations (Polynomial!)\n     512 |     134,217,728 operations (Polynomial!)\n    1024 |   1,073,741,824 operations (Polynomial!)\n    2048 |   8,589,934,592 operations (Polynomial!)',
    interpretation: 'Polynomial O(b^3) scaling vs classical sub-exponential O(exp(b^(1/3))) explains why quantum computing is a game-changer for number theory.',
    colabInstructions: ['Run in Google Colab.'],
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
    title: 'Demonstrating Reversibility of Quantum Gates in NumPy',
    description: 'Verify in code that quantum gates are perfectly reversible by computing U_dagger * U.',
    packages: ['numpy'],
    installCommand: 'pip install numpy',
    imports: [{ code: 'import numpy as np', explanation: 'NumPy linear algebra' }],
    code: [
      { code: '# The Hadamard quantum gate matrix H:', explanation: 'Hadamard matrix' },
      { code: 'H = (1 / np.sqrt(2)) * np.array([[1, 1], [1, -1]])', explanation: 'Unitary matrix H' },
      { code: '', explanation: '' },
      { code: '# Compute conjugate transpose H_dagger:', explanation: 'Conjugate transpose' },
      { code: 'H_dagger = np.conj(H.T)', explanation: 'H_dagger' },
      { code: '', explanation: '' },
      { code: '# Check if H_dagger @ H == Identity Matrix I:', explanation: 'Unitary check' },
      { code: 'product = np.dot(H_dagger, H)', explanation: 'Multiply' },
      { code: 'print("H_dagger @ H (Must equal 2x2 Identity Matrix):\\n", product.round(3))', explanation: 'Print result' },
      { code: '', explanation: '' },
      { code: '# Demonstrate perfect reversibility on state |0> = [1, 0]:', explanation: 'Reversibility' },
      { code: 'state_0 = np.array([1, 0]) # Initial ground state', explanation: 'Pure |0>' },
      { code: 'superposition = np.dot(H, state_0) # Put into superposition |+>', explanation: 'Step 1: H|0>' },
      { code: 'print("\\nState in Superposition |+>:", superposition.round(3))', explanation: 'Print super' },
      { code: 'restored = np.dot(H, superposition) # Apply H again to reverse!', explanation: 'Step 2: H|+>' },
      { code: 'print("Restored Back to Initial State |0>:", restored.round(3))', explanation: 'Print restored' },
    ],
    executionFlow: [
      { number: 1, title: 'Unitary Check', description: 'Multiplies H_dagger by H, yielding exact identity matrix [[1, 0], [0, 1]].' },
      { number: 2, title: 'Reversibility', description: 'Applying H creates superposition [0.707, 0.707]; applying H again restores exact original state [1.0, 0.0].' },
    ],
    input: 'Hadamard matrix and state |0>',
    output: 'H_dagger @ H:\n[[1. 0.]\n [0. 1.]]\n\nState in Superposition |+>: [0.707 0.707]\nRestored Back to Initial State |0>: [1. 0.]',
    interpretation: 'Unlike classical gates which discard bits, quantum unitary gates preserve all information and are 100% reversible.',
    colabInstructions: ['Run in Google Colab.'],
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
    title: 'Representing Qubits and Bra-Ket Inner Products in Python',
    description: 'Calculate state vectors and inner products <phi|psi> using NumPy.',
    packages: ['numpy'],
    installCommand: 'pip install numpy',
    imports: [{ code: 'import numpy as np', explanation: 'NumPy' }],
    code: [
      { code: '# Define basis kets |0> and |1>:', explanation: 'Basis states' },
      { code: 'ket_0 = np.array([[1.0], [0.0]]) # |0>', explanation: 'Column vector |0>' },
      { code: 'ket_1 = np.array([[0.0], [1.0]]) # |1>', explanation: 'Column vector |1>' },
      { code: '', explanation: '' },
      { code: '# Define a state in equal superposition |+> = (|0> + |1>) / sqrt(2)', explanation: 'State |+>' },
      { code: 'ket_plus = (1 / np.sqrt(2)) * (ket_0 + ket_1)', explanation: 'Superposition vector' },
      { code: 'print("Ket |+> Column Vector:\\n", ket_plus.round(3))', explanation: 'Display ket' },
      { code: '', explanation: '' },
      { code: '# Compute bra <+| (conjugate transpose row vector):', explanation: 'Bra vector' },
      { code: 'bra_plus = np.conj(ket_plus.T)', explanation: 'Row vector' },
      { code: '', explanation: '' },
      { code: '# Compute inner product <+|0> (overlap with state 0):', explanation: 'Inner product' },
      { code: 'overlap = np.dot(bra_plus, ket_0)[0, 0]', explanation: '<+|0>' },
      { code: 'prob_0 = abs(overlap)**2', explanation: 'Born rule' },
      { code: 'print(f"\\nInner product <+|0>: {overlap:.4f}")', explanation: 'Print overlap' },
      { code: 'print(f"Measurement probability |<+|0>|²: {prob_0:.1%}")', explanation: 'Print probability' },
    ],
    executionFlow: [
      { number: 1, title: 'Ket Formulation', description: 'Creates column vectors for basis states.' },
      { number: 2, title: 'Inner Product Calculation', description: 'Evaluates bra-ket bracket <+|0> = 1/sqrt(2) ≈ 0.7071.' },
      { number: 3, title: 'Born Rule', description: 'Squaring the inner product amplitude yields exact 50.0% probability.' },
    ],
    input: 'Basis states |0>, |1> and superposition |+>',
    output: 'Ket |+> Column Vector:\n[[0.707]\n [0.707]]\n\nInner product <+|0>: 0.7071\nMeasurement probability |<+|0>|²: 50.0%',
    interpretation: 'Dirac notation vectors directly compute physical projection probabilities through complex inner products.',
    colabInstructions: ['Run in Google Colab.'],
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
    title: 'Computing Tensor Products (Postulate 4) in Python',
    description: 'Combine two individual qubits into a 4-dimensional joint state using the Kronecker tensor product.',
    packages: ['numpy'],
    installCommand: 'pip install numpy',
    imports: [{ code: 'import numpy as np', explanation: 'NumPy' }],
    code: [
      { code: '# Qubit A in state |0> = [1, 0]^T', explanation: 'Qubit A' },
      { code: 'qA = np.array([1.0, 0.0])', explanation: 'State |0>' },
      { code: '# Qubit B in state |1> = [0, 1]^T', explanation: 'Qubit B' },
      { code: 'qB = np.array([0.0, 1.0])', explanation: 'State |1>' },
      { code: '', explanation: '' },
      { code: '# Postulate 4: Joint State = qA (x) qB (Tensor product!)', explanation: 'Kronecker product' },
      { code: 'joint_state = np.kron(qA, qB)', explanation: 'Compute tensor product' },
      { code: '', explanation: '' },
      { code: 'print("Qubit A State |0>:", qA)', explanation: 'Print A' },
      { code: 'print("Qubit B State |1>:", qB)', explanation: 'Print B' },
      { code: 'print("\\nJoint 2-Qubit State |01> = |0> (x) |1>:")', explanation: 'Print joint' },
      { code: 'print("Vector (shape 4):", joint_state)', explanation: 'Print vector' },
      { code: 'print("Basis breakdown: [|00>, |01>, |10>, |11>] -> index 1 is 1.0!")', explanation: 'Index 1 is active' },
    ],
    executionFlow: [
      { number: 1, title: 'Kronecker Multiplication', description: 'np.kron([1, 0], [0, 1]) = [1*0, 1*1, 0*0, 0*1] = [0, 1, 0, 0].' },
      { number: 2, title: 'Joint Representation', description: 'Represents exact computational basis state |01> in 4-dimensional Hilbert space.' },
    ],
    input: 'Two individual 2-element qubit vectors',
    output: 'Qubit A State |0>: [1. 0.]\nQubit B State |1>: [0. 1.]\n\nJoint 2-Qubit State |01> = |0> (x) |1>:\nVector (shape 4): [0. 1. 0. 0.]\nBasis breakdown: [|00>, |01>, |10>, |11>] -> index 1 is 1.0!',
    interpretation: 'The tensor product multiplies state dimensions: 2 qubits produce 4 dimensions; 3 produce 8; n produce 2^n.',
    colabInstructions: ['Run in Google Colab.'],
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
      explanation: 'Unit vector normalization <psi|psi> = 1 ensures that the Born rule measurement probabilities sum to exactly 1.0.',
      incorrectFeedback: 'Normalization corresponds to the conservation of total probability.',
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
    title: 'Calculating Shannon Entropy in Python',
    description: 'Calculate Shannon entropy for fair vs biased binary coins.',
    packages: ['numpy'],
    installCommand: 'pip install numpy',
    imports: [{ code: 'import numpy as np', explanation: 'NumPy for log calculations' }],
    code: [
      { code: 'def shannon_entropy(probs):', explanation: 'Entropy function' },
      { code: '    # Filter out zero probabilities to avoid log2(0)', explanation: 'Zero guard' },
      { code: '    probs = [p for p in probs if p > 0]', explanation: 'Filter' },
      { code: '    return -sum(p * np.log2(p) for p in probs)', explanation: 'Compute sum' },
      { code: '', explanation: '' },
      { code: '# 1. Fair coin (50% Heads, 50% Tails):', explanation: 'Fair coin' },
      { code: 'h_fair = shannon_entropy([0.5, 0.5])', explanation: 'Fair entropy' },
      { code: 'print(f"Fair Coin Entropy:   {h_fair:.2f} bit (Maximum uncertainty)")', explanation: 'Print fair' },
      { code: '', explanation: '' },
      { code: '# 2. Biased coin (90% Heads, 10% Tails):', explanation: 'Biased coin' },
      { code: 'h_biased = shannon_entropy([0.9, 0.1])', explanation: 'Biased entropy' },
      { code: 'print(f"Biased Coin Entropy: {h_biased:.2f} bits (Lower uncertainty)")', explanation: 'Print biased' },
      { code: '', explanation: '' },
      { code: '# 3. Fixed coin (100% Heads):', explanation: 'Fixed coin' },
      { code: 'h_certain = shannon_entropy([1.0, 0.0])', explanation: 'Zero entropy' },
      { code: 'print(f"Certain Coin Entropy:{h_certain:.2f} bits (Zero new information)")', explanation: 'Print certain' },
    ],
    executionFlow: [
      { number: 1, title: 'Entropy Curve', description: 'Shows that entropy peaks at 1.0 bit for maximum uncertainty (50/50) and drops to 0.0 for certainty.' },
    ],
    input: 'Probability distributions [0.5, 0.5], [0.9, 0.1], [1.0, 0.0]',
    output: 'Fair Coin Entropy:   1.00 bit (Maximum uncertainty)\nBiased Coin Entropy: 0.47 bits (Lower uncertainty)\nCertain Coin Entropy:0.00 bits (Zero new information)',
    interpretation: 'A classical bit represents a single binary distinction, holding at most 1.0 bit of Shannon entropy.',
    colabInstructions: ['Run in Google Colab.'],
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
      explanation: 'A single classical bit has 2 states. Maximum entropy occurs when both are equally likely (p=0.5), yielding log2(2) = 1.0 bit.',
      incorrectFeedback: 'A single binary variable has a maximum entropy of 1.0 bit.',
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
    title: 'Bloch Sphere Coordinates Calculator in Python',
    description: 'Convert polar angles (theta, phi) into 3D Cartesian coordinates [X, Y, Z].',
    packages: ['numpy'],
    installCommand: 'pip install numpy',
    imports: [{ code: 'import numpy as np', explanation: 'NumPy trigonometry' }],
    code: [
      { code: 'def bloch_coordinates(theta, phi):', explanation: 'Converter function' },
      { code: '    # Spherical to Cartesian mapping:', explanation: 'Coordinates' },
      { code: '    x = np.sin(theta) * np.cos(phi)', explanation: 'X coordinate' },
      { code: '    y = np.sin(theta) * np.sin(phi)', explanation: 'Y coordinate' },
      { code: '    z = np.cos(theta)', explanation: 'Z coordinate' },
      { code: '    return np.array([x, y, z])', explanation: 'Return 3D vector' },
      { code: '', explanation: '' },
      { code: '# 1. North Pole |0> (theta=0, phi=0):', explanation: 'North Pole' },
      { code: 'print("North Pole |0> [X, Y, Z]:", bloch_coordinates(0, 0).round(2))', explanation: 'Print North' },
      { code: '', explanation: '' },
      { code: '# 2. South Pole |1> (theta=pi, phi=0):', explanation: 'South Pole' },
      { code: 'print("South Pole |1> [X, Y, Z]:", bloch_coordinates(np.pi, 0).round(2))', explanation: 'Print South' },
      { code: '', explanation: '' },
      { code: '# 3. Equator state |+> (theta=pi/2, phi=0):', explanation: 'Equator' },
      { code: 'print("Equator |+>    [X, Y, Z]:", bloch_coordinates(np.pi/2, 0).round(2))', explanation: 'Print Equator' },
    ],
    executionFlow: [
      { number: 1, title: 'Coordinate Translation', description: 'Calculates [0, 0, 1] for |0>, [0, 0, -1] for |1>, and [1, 0, 0] for |+>.' },
    ],
    input: 'Angles theta and phi',
    output: 'North Pole |0> [X, Y, Z]: [0. 0. 1.]\nSouth Pole |1> [X, Y, Z]: [ 0.  0. -1.]\nEquator |+>    [X, Y, Z]: [1. 0. 0.]',
    interpretation: 'The Bloch sphere visualizes all possible single-qubit states as geometric points on a 3D unit sphere.',
    colabInstructions: ['Run in Google Colab.'],
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
      explanation: 'Pure states have norm 1.0 and reside strictly on the 2D spherical surface. Mixed states undergo decoherence and have vector lengths strictly less than 1.0 inside the sphere.',
      incorrectFeedback: 'Pure states reside on the surface with unit radius r = 1.',
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
    title: 'Creating Superposition with Hadamard in Python',
    description: 'Apply the Hadamard gate matrix to state |0> and inspect amplitudes.',
    packages: ['numpy'],
    installCommand: 'pip install numpy',
    imports: [{ code: 'import numpy as np', explanation: 'NumPy' }],
    code: [
      { code: '# Hadamard Gate H:', explanation: 'Gate definition' },
      { code: 'H = (1 / np.sqrt(2)) * np.array([[1, 1], [1, -1]])', explanation: 'H matrix' },
      { code: 'ket_0 = np.array([1, 0]) # Initial state |0>', explanation: '|0>' },
      { code: '', explanation: '' },
      { code: '# Apply H to |0> to create state |+>:', explanation: 'Apply gate' },
      { code: 'ket_plus = np.dot(H, ket_0)', explanation: 'H |0>' },
      { code: 'print("State |+> Amplitudes [alpha, beta]:", ket_plus.round(4))', explanation: 'Print vector' },
      { code: '', explanation: '' },
      { code: '# Probabilities |alpha|^2 and |beta|^2:', explanation: 'Probabilities' },
      { code: 'p0 = ket_plus[0]**2', explanation: 'P(0)' },
      { code: 'p1 = ket_plus[1]**2', explanation: 'P(1)' },
      { code: 'print(f"P(Measuring 0): {p0:.1%}")', explanation: '50%' },
      { code: 'print(f"P(Measuring 1): {p1:.1%}")', explanation: '50%' },
    ],
    executionFlow: [
      { number: 1, title: 'Transformation', description: 'Hadamard rotates [1, 0] into [0.7071, 0.7071].' },
      { number: 2, title: 'Probability Extraction', description: 'Both outcomes have equal 50.0% probability of measurement.' },
    ],
    input: 'Hadamard matrix and state |0>',
    output: 'State |+> Amplitudes [alpha, beta]: [0.7071 0.7071]\nP(Measuring 0): 50.0%\nP(Measuring 1): 50.0%',
    interpretation: 'The Hadamard gate creates an equal superposition where the qubit simultaneously possesses both 0 and 1 amplitudes.',
    colabInstructions: ['Run in Google Colab.'],
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
      explanation: 'Decoherence is the interaction between a quantum system and its thermal environment that washes out phase coherence, collapsing superpositions into classical noise.',
      incorrectFeedback: 'Decoherence destroys quantum superpositions.',
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
    title: 'Simulating Quantum Measurement Shots in Python',
    description: 'Simulate 1,000 measurement shots on a superposition state and verify the Born Rule.',
    packages: ['numpy'],
    installCommand: 'pip install numpy',
    imports: [{ code: 'import numpy as np', explanation: 'NumPy' }],
    code: [
      { code: '# Qubit state: alpha = sqrt(0.8), beta = sqrt(0.2)', explanation: 'State definition' },
      { code: 'p0_theoretical = 0.8 # 80% chance of 0', explanation: 'P(0)' },
      { code: 'p1_theoretical = 0.2 # 20% chance of 1', explanation: 'P(1)' },
      { code: '', explanation: '' },
      { code: '# Simulate 1,000 quantum measurement "shots":', explanation: 'Simulate shots' },
      { code: 'num_shots = 1000', explanation: 'Shots' },
      { code: 'measurements = np.random.choice([0, 1], size=num_shots, p=[p0_theoretical, p1_theoretical])', explanation: 'Sample outcomes' },
      { code: '', explanation: '' },
      { code: 'count_0 = np.sum(measurements == 0)', explanation: 'Count 0' },
      { code: 'count_1 = np.sum(measurements == 1)', explanation: 'Count 1' },
      { code: 'print(f"Shots: {num_shots}")', explanation: 'Print shots' },
      { code: 'print(f"Measured 0: {count_0} times ({count_0/num_shots:.1%}) - Expected 80.0%")', explanation: 'Print count 0' },
      { code: 'print(f"Measured 1: {count_1} times ({count_1/num_shots:.1%}) - Expected 20.0%")', explanation: 'Print count 1' },
    ],
    executionFlow: [
      { number: 1, title: 'Shot Simulation', description: 'Simulates 1000 independent projective measurements.' },
      { number: 2, title: 'Statistical Convergence', description: 'Empirical frequencies closely match theoretical Born rule probabilities (~80% and ~20%).' },
    ],
    input: '80/20 quantum state measured 1,000 times',
    output: 'Shots: 1000\nMeasured 0: ~803 times (80.3%) - Expected 80.0%\nMeasured 1: ~197 times (19.7%) - Expected 20.0%',
    interpretation: 'Repeated measurement shots reconstruct the underlying probability amplitudes via statistical histograms.',
    colabInstructions: ['Run in Google Colab.'],
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
      explanation: 'Projective measurement causes irreversible collapse. Once collapsed to eigenstate |0>, any immediate follow-up measurement in the same basis returns outcome 0 with probability 1.0.',
      incorrectFeedback: 'Measurement projects the state into the observed eigenstate.',
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
  pythonHandsOn: {
    title: 'Complex Numbers and Destructive Interference in Python',
    description: 'Demonstrate complex amplitude cancellation in Python.',
    packages: ['numpy'],
    installCommand: 'pip install numpy',
    imports: [{ code: 'import numpy as np', explanation: 'NumPy complex support' }],
    code: [
      { code: '# Path 1 amplitude: positive real', explanation: 'Path 1' },
      { code: 'amp_1 = 0.5 + 0.0j', explanation: '+0.5' },
      { code: '# Path 2 amplitude: exactly 180 degrees out of phase (negative real)', explanation: 'Path 2' },
      { code: 'amp_2 = -0.5 + 0.0j', explanation: '-0.5' },
      { code: '', explanation: '' },
      { code: '# 1. Classical Probability intuition (wrong!):', explanation: 'Classical fallacy' },
      { code: 'p_classical = abs(amp_1)**2 + abs(amp_2)**2', explanation: '0.25 + 0.25 = 0.5' },
      { code: 'print(f"Classical Sum of Probabilities: {p_classical:.2f} (50% chance)")', explanation: 'Print classical' },
      { code: '', explanation: '' },
      { code: '# 2. Quantum Amplitude interference (True physics!):', explanation: 'Quantum reality' },
      { code: 'amp_total = amp_1 + amp_2 # Amplitudes add first!', explanation: '0.5 + (-0.5) = 0.0' },
      { code: 'p_quantum = abs(amp_total)**2', explanation: '|0.0|^2 = 0.0' },
      { code: 'print(f"Quantum Interfered Probability:  {p_quantum:.2f} (0% chance - Destructive Interference!)")', explanation: 'Print quantum' },
    ],
    executionFlow: [
      { number: 1, title: 'Linear Addition', description: 'Amplitudes cancel out to 0.0.' },
      { number: 2, title: 'Squaring', description: 'Final probability drops to 0.0%, proving that adding a second path can decrease probability.' },
    ],
    input: 'Two amplitudes: +0.5 and -0.5',
    output: 'Classical Sum of Probabilities: 0.50 (50% chance)\nQuantum Interfered Probability:  0.00 (0% chance - Destructive Interference!)',
    interpretation: 'This Python snippet demonstrates the core mathematical difference between classical and quantum computing.',
    colabInstructions: ['Run in Google Colab.'],
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
      explanation: 'Complex amplitudes add linearly before squaring. If amplitudes have opposite signs or phases, they subtract destructively to zero.',
      incorrectFeedback: 'Destructive phase interference cancels out amplitudes.',
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
    title: 'Creating a Bell State in Python',
    description: 'Simulate the Hadamard + CNOT circuit that creates a Bell state.',
    packages: ['numpy'],
    installCommand: 'pip install numpy',
    imports: [{ code: 'import numpy as np', explanation: 'NumPy linear algebra' }],
    code: [
      { code: '# 1. Start with 2 qubits in state |00> (length 4 vector):', explanation: 'Initial state' },
      { code: 'state_00 = np.array([1.0, 0.0, 0.0, 0.0]) # |00>', explanation: '|00>' },
      { code: '', explanation: '' },
      { code: '# 2. Apply Hadamard to Qubit 1: H (x) I', explanation: 'H on Q1' },
      { code: 'H = (1 / np.sqrt(2)) * np.array([[1, 1], [1, -1]])', explanation: 'H' },
      { code: 'I = np.eye(2)', explanation: 'Identity' },
      { code: 'H_I = np.kron(H, I) # 4x4 matrix', explanation: 'H (x) I' },
      { code: 'step1 = np.dot(H_I, state_00) # (|00> + |10>) / sqrt(2)', explanation: 'Step 1' },
      { code: '', explanation: '' },
      { code: '# 3. Apply CNOT gate (flips target Q2 if control Q1 is 1):', explanation: 'CNOT gate' },
      { code: 'CNOT = np.array([', explanation: 'CNOT matrix' },
      { code: '    [1, 0, 0, 0],', explanation: '|00> -> |00>' },
      { code: '    [0, 1, 0, 0],', explanation: '|01> -> |01>' },
      { code: '    [0, 0, 0, 1],', explanation: '|10> -> |11> (Flipped!)' },
      { code: '    [0, 0, 1, 0]  # |11> -> |10> (Flipped!)', explanation: '|11> -> |10>' },
      { code: '])', explanation: 'Close CNOT' },
      { code: '', explanation: '' },
      { code: 'bell_state = np.dot(CNOT, step1)', explanation: 'Create Bell State!' },
      { code: 'print("Bell State |Phi+> Amplitudes [|00>, |01>, |10>, |11>]:")', explanation: 'Header' },
      { code: 'print(bell_state.round(4))', explanation: 'Show amplitudes' },
      { code: 'print("\\nNotice: Amplitudes for |01> and |10> are exactly 0.0!")', explanation: 'Verification' },
    ],
    executionFlow: [
      { number: 1, title: 'Hadamard on Q1', description: 'Creates (|00> + |10>)/sqrt(2).' },
      { number: 2, title: 'CNOT Gate', description: 'Entangles qubits into (|00> + |11>)/sqrt(2), represented as [0.7071, 0, 0, 0.7071].' },
    ],
    input: 'State |00> transformed by H followed by CNOT',
    output: 'Bell State |Phi+> Amplitudes [|00>, |01>, |10>, |11>]:\n[0.7071 0.     0.     0.7071]\n\nNotice: Amplitudes for |01> and |10> are exactly 0.0!',
    interpretation: 'The qubits are now maximally entangled: measuring one instantly determines the other with 100% correlation.',
    colabInstructions: ['Run in Google Colab.'],
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
      explanation: 'The 2022 Nobel Prize recognized experimental confirmation of quantum entanglement and the violation of local realism via Bell inequality tests.',
      incorrectFeedback: 'The 2022 Nobel Prize honored pioneering experiments on quantum entanglement and Bell inequalities.',
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
    title: 'Simulating Quantum Interference with Hadamard Gates in Python',
    description: 'See constructive and destructive interference directly by passing |0> through H-Z-H.',
    packages: ['numpy'],
    installCommand: 'pip install numpy',
    imports: [{ code: 'import numpy as np', explanation: 'NumPy' }],
    code: [
      { code: '# Gates: Hadamard H and Pauli Z (Phase flip)', explanation: 'Gates' },
      { code: 'H = (1 / np.sqrt(2)) * np.array([[1, 1], [1, -1]])', explanation: 'Hadamard' },
      { code: 'Z = np.array([[1, 0], [0, -1]]) # Flips phase of |1>', explanation: 'Z gate' },
      { code: 'state_0 = np.array([1, 0]) # Start at |0>', explanation: '|0>' },
      { code: '', explanation: '' },
      { code: '# Experiment 1: H followed by H (Constructive on |0>, Destructive on |1>):', explanation: 'H-H circuit' },
      { code: 'res1 = np.dot(H, np.dot(H, state_0))', explanation: 'H @ H @ |0>' },
      { code: 'print("H @ H @ |0> (Interference restores |0>):", res1.round(2))', explanation: 'Returns [1, 0]' },
      { code: '', explanation: '' },
      { code: '# Experiment 2: H followed by Phase Flip Z, followed by H:', explanation: 'H-Z-H circuit' },
      { code: 'res2 = np.dot(H, np.dot(Z, np.dot(H, state_0)))', explanation: 'H @ Z @ H @ |0>' },
      { code: 'print("H @ Z @ H @ |0> (Phase flip redirected interference to |1>!):", res2.round(2))', explanation: 'Returns [0, 1]' },
    ],
    executionFlow: [
      { number: 1, title: 'H-H Circuit', description: 'Amplitudes for |1> cancel destructively: (1/2) + (-1/2) = 0. State collapses to |0>.' },
      { number: 2, title: 'H-Z-H Circuit', description: 'Z gate flips phase; now amplitudes for |0> cancel destructively: (1/2) + (-1/2) = 0, steering 100% of probability into |1>.' },
    ],
    input: 'Circuits H-H and H-Z-H applied to state |0>',
    output: 'H @ H @ |0> (Interference restores |0>): [1. 0.]\nH @ Z @ H @ |0> (Phase flip redirected interference to |1>!): [0. 1.]',
    interpretation: 'A single phase flip completely inverted the interference pattern, demonstrating how quantum algorithms steer probabilities.',
    colabInstructions: ['Run in Google Colab.'],
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
      explanation: 'Quantum speedups rely on designing algorithms that cancel out undesirable answer paths via destructive interference while amplifying correct solutions.',
      incorrectFeedback: 'Quantum algorithms use interference to amplify correct answers and cancel incorrect paths.',
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
  pythonHandsOn: {
    title: 'Mapping a 2-City Logistics Problem to an Ising Matrix',
    description: 'Express a minimal combinatorial optimization problem as an Ising Hamiltonian in Python.',
    packages: ['numpy'],
    installCommand: 'pip install numpy',
    imports: [{ code: 'import numpy as np', explanation: 'NumPy' }],
    code: [
      { code: '# 2-City logistics optimization: Choose either City 0 or City 1', explanation: 'Problem setup' },
      { code: '# Cost of City 0 is 10; Cost of City 1 is 4', explanation: 'Costs' },
      { code: 'costs = [10.0, 4.0]', explanation: 'Costs vector' },
      { code: '', explanation: '' },
      { code: '# Map to Ising diagonal Hamiltonian H = diag(costs):', explanation: 'Hamiltonian' },
      { code: 'H = np.diag(costs)', explanation: 'Diagonal matrix' },
      { code: 'print("Problem Hamiltonian Matrix H:\\n", H)', explanation: 'Print H' },
      { code: '', explanation: '' },
      { code: '# Evaluate ground state energy (minimum eigenvalue):', explanation: 'Eigenvalues' },
      { code: 'eigenvalues, eigenvectors = np.linalg.eigh(H)', explanation: 'Solve eigensystem' },
      { code: 'min_energy = eigenvalues[0]', explanation: 'Ground state' },
      { code: 'optimal_choice = np.argmax(eigenvectors[:, 0])', explanation: 'Optimal state' },
      { code: 'print(f"\\nGround State Energy (Min Cost): {min_energy}")', explanation: 'Show min cost' },
      { code: 'print(f"Optimal Quantum Solution Choice: City {optimal_choice}")', explanation: 'Show winner' },
    ],
    executionFlow: [
      { number: 1, title: 'Hamiltonian Mapping', description: 'Represents costs as diagonal matrix.' },
      { number: 2, title: 'Ground State Solution', description: 'Finds minimum eigenvalue = 4.0 corresponding to City 1.' },
    ],
    input: 'Cost vector [10.0, 4.0]',
    output: 'Problem Hamiltonian Matrix H:\n[[10.  0.]\n [ 0.  4.]]\n\nGround State Energy (Min Cost): 4.0\nOptimal Quantum Solution Choice: City 1',
    interpretation: 'Combinatorial optimization problems map to finding the lowest energy ground state of a physical Hamiltonian matrix.',
    colabInstructions: ['Run in Google Colab.'],
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
      explanation: 'Quantum simulation allows modeling electron interactions and chemical reaction barriers with high precision, transforming drug discovery.',
      incorrectFeedback: 'Accurate in silico molecular simulation is the key value driver.',
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
    title: 'Simulating Qubit T1 Energy Decay in Python',
    description: 'Simulate the exponential decay of a qubit from |1> to |0> due to environmental thermal relaxation.',
    packages: ['numpy'],
    installCommand: 'pip install numpy',
    imports: [{ code: 'import numpy as np', explanation: 'NumPy math' }],
    code: [
      { code: '# Typical superconducting transmon T1 time = 50 microseconds', explanation: 'T1 constant' },
      { code: 'T1 = 50.0 # microseconds', explanation: '50 us' },
      { code: 'times = np.array([0, 25, 50, 100, 150]) # Timesteps in microseconds', explanation: 'Timesteps' },
      { code: '', explanation: '' },
      { code: '# Probability of qubit remaining in excited state |1>: P(1) = exp(-t / T1)', explanation: 'Decay formula' },
      { code: 'prob_excited = np.exp(-times / T1)', explanation: 'Exponential decay' },
      { code: '', explanation: '' },
      { code: 'print("Elapsed Time | Chance Qubit Still in State |1>")', explanation: 'Header' },
      { code: 'print("-" * 48)', explanation: 'Divider' },
      { code: 'for t, p in zip(times, prob_excited):', explanation: 'Loop' },
      { code: '    print(f"{t:8d} µs    | {p:6.1%} (Thermal decay in action!)")', explanation: 'Row' },
    ],
    executionFlow: [
      { number: 1, title: 'Exponential Decay', description: 'At t=0, qubit is 100% in state |1>. By t=50 microseconds (T1), probability drops to 36.8%. By 150 microseconds, it has completely decayed to 5%.' },
    ],
    input: 'T1 relaxation constant of 50 microseconds',
    output: 'Elapsed Time | Chance Qubit Still in State |1>\n------------------------------------------------\n       0 µs    | 100.0% (Thermal decay in action!)\n      25 µs    |  60.7% (Thermal decay in action!)\n      50 µs    |  36.8% (Thermal decay in action!)\n     100 µs    |  13.5% (Thermal decay in action!)\n     150 µs    |   5.0% (Thermal decay in action!)',
    interpretation: 'This physical decay proves why quantum algorithms must execute in sub-microsecond bursts or employ quantum error correction.',
    colabInstructions: ['Run in Google Colab.'],
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
      explanation: 'Topological Surface Codes require approximately 1,000 noisy physical qubits to detect and correct bit and phase flip errors for each single clean logical qubit.',
      incorrectFeedback: 'Quantum error correction overhead is the primary reason for high physical qubit requirements.',
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
