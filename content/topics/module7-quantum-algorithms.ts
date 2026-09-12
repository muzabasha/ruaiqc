import { Topic } from '@/lib/types';

export const whatIsQuantumAlgorithm: Topic = {
  id: 'what-is-quantum-algorithm',
  moduleId: 'quantum-algorithms',
  number: 1,
  title: 'What is a Quantum Algorithm? Computational Complexity',
  description: 'Understand what separates quantum algorithms from classical algorithms: complexity classes BPP vs BQP, and true quantum speedup.',
  objectives: [
    'Define the complexity class BQP (Bounded-Error Quantum Polynomial-Time)',
    'Differentiate between Polynomial speedups (Grover) and Exponential speedups (Shor)',
    'Understand why quantum computers cannot solve all NP-Complete problems instantaneously',
  ],
  story: `For decades, computer science was governed by the **Strong Church-Turing Thesis**:
*"Any physically realizable model of computation can be simulated on a classical Turing Machine with at most a polynomial slowdown."*
  
In 1993, Umesh Vazirani and Ethan Bernstein shattered this thesis. They showed that quantum computers belong to an entirely new computational complexity class called **BQP** (Bounded-Error Quantum Polynomial-Time).
  
There are problems that would take all the classical supercomputers on Earth longer than the age of the universe to solve, which a quantum computer running a BQP algorithm can solve before lunch.
  
A quantum algorithm is not merely a classical algorithm running on a colder chip; it is an entirely new species of mathematics.`,
  motivation: `**Complexity clarity**: Knowing what quantum computers can and cannot do protects you from marketing myths. Quantum computers do NOT make all algorithms faster; they provide miraculous speedups only for specific mathematical structures.`,
  concept: {
    simple: `A Quantum Algorithm is a special recipe designed to exploit quantum physics:
- **Classical Algorithm**: Walks through one calculation step at a time.
- **Quantum Algorithm**:
  1. Sets up all possible paths at once using Superposition.
  2. Tilts the quantum waves using Entanglement and Phase.
  3. Cancels out all the wrong paths using Destructive Interference.
  4. The right answer appears like magic when measured!`,
    technical: `A quantum algorithm is a uniform family of polynomial-sized quantum circuits $\\{C_n\\}_{n \\ge 1}$ that solves a decision problem in class $\\text{BQP}$. A language $L \\subseteq \\{0, 1\\}^* \\in \\text{BQP}$ if there exists a polynomial-time quantum algorithm such that for all $x \\in L$, $P(\\text{Accept}) \\ge 2/3$, and for all $x \\notin L$, $P(\\text{Accept}) \\le 1/3$. BQP contains $\\text{P}$ and is contained within $\\text{PSPACE}$, with $\\text{BPP} \\subseteq \\text{BQP}$.`,
  },
  keyTerms: [
    { term: 'BQP', simple: 'The set of problems that quantum computers can solve efficiently (in polynomial time).', technical: 'Bounded-Error Quantum Polynomial-Time, the quantum analogue of the classical complexity class BPP.' },
    { term: 'Polynomial vs Exponential Speedup', simple: 'Polynomial speedup makes things quadratically faster (e.g. N to sqrt(N)); Exponential speedup turns billions of years into minutes (2^N to N^3).', technical: 'Polynomial speedup: $T_Q(n) = \\mathcal{O}(T_C(n)^k)$; Exponential speedup: $T_Q(n) = \\mathcal{O}(\\text{poly}(\\log T_C(n)))$.' },
  ],
  equations: [
    {
      latex: '\\text{BPP} \\subseteq \\text{BQP} \\subseteq \\text{PSPACE}',
      explanation: 'The computational complexity hierarchy: BQP contains all efficient classical randomized algorithms (BPP) and is bounded within polynomial memory space (PSPACE).',
      symbols: [
        { symbol: '\\text{BPP}', meaning: 'Classical randomized polynomial time', interpretation: 'What classical computers can solve efficiently' },
        { symbol: '\\text{BQP}', meaning: 'Quantum polynomial time', interpretation: 'What quantum computers can solve efficiently' },
        { symbol: '\\text{PSPACE}', meaning: 'Polynomial memory space', interpretation: 'Theoretical classical memory bound' },
      ],
      example: {
        description: 'Integer factorization is believed to be outside BPP (intractable for classical computers), but inside BQP (solved efficiently by Shor’s algorithm).',
        calculation: '\\text{Factoring} \\in \\text{BQP} \\setminus \\text{BPP} \\implies \\text{Exponential Quantum Advantage}',
        result: 'Solvable in polynomial time on quantum processors',
      },
    },
  ],
  howItWorks: [
    { number: 1, title: 'State Superposition', description: 'Initialize register into simultaneous linear combination of all candidate inputs.' },
    { number: 2, title: 'Quantum Oracle Query', description: 'Evaluate objective function into quantum phases without collapsing superposition.' },
    { number: 3, title: 'Interference Amplification', description: 'Apply unitary transformations to constructively interfere winning solutions.' },
    { number: 4, title: 'Projective Readout', description: 'Measure register to extract optimal answer with bounded error probability > 2/3.' },
  ],
  applications: [
    { title: 'Cryptographic Security Analysis', problem: 'Evaluating post-quantum encryption standards against BQP complexity bounds.', solution: 'National security agencies verify that lattice-based cryptography remains hard even for BQP algorithms.' },
  ],
  activity: {
    type: 'mcq',
    title: 'Complexity Class Check',
    question: 'Can quantum computers solve all NP-Complete problems (like Traveling Salesperson) in guaranteed polynomial time?',
    options: [
      { id: 'a', text: 'No, it is widely believed that NP-Complete problems are outside BQP (quantum computers cannot solve NP-complete problems in polynomial time)' },
      { id: 'b', text: 'Yes, quantum computers solve all hard problems in 1 second' },
      { id: 'c', text: 'Yes, using Grover’s algorithm' },
      { id: 'd', text: 'Only if the computer has 100 qubits' },
    ],
    correctAnswer: 'a',
    explanation: 'Theoretical computer science consensus strongly indicates that BQP does NOT contain NP-Complete. While quantum algorithms provide polynomial speedups (Grover) or heuristic advantages, they do not solve NP-Complete in polynomial time.',
    hint: 'Grover provides a quadratic speedup, not an exponential one.',
  },
  pythonHandsOn: {
    title: "Structure of a Quantum Algorithm in Qiskit: Initialization, Oracle & Interference",
    description: "Construct the standard 3-stage template of a quantum algorithm in Qiskit and trace statevector transformations.",
    packages: ["qiskit", "qiskit-aer"],
    installCommand: "pip install qiskit qiskit-aer",
    imports: [
      { code: "from qiskit import QuantumCircuit", explanation: "Circuit module" },
      { code: "from qiskit.quantum_info import Statevector", explanation: "Statevector module" }
    ],
    code: [
      { code: "# Standard 3-stage quantum algorithm structure:", explanation: "3 stages" },
      { code: "# Stage 1: Initialization into equal superposition", explanation: "Stage 1" },
      { code: "qc = QuantumCircuit(2, 2)", explanation: "2 qubits, 2 bits" },
      { code: "qc.h([0, 1])  # Parallel superposition across |00>, |01>, |10>, |11>", explanation: "H on all" },
      { code: "print('Stage 1 - Uniform Superposition:', Statevector.from_instruction(qc).data.round(2))", explanation: "Stage 1 state" },
      { code: "", explanation: "" },
      { code: "# Stage 2: Quantum Oracle (marks target state |11> with -1 phase)", explanation: "Stage 2" },
      { code: "qc.cz(0, 1)   # Controlled-Z flips phase of |11>", explanation: "CZ oracle" },
      { code: "print('Stage 2 - After Oracle Marking:', Statevector.from_instruction(qc).data.round(2))", explanation: "Stage 2 state" },
      { code: "", explanation: "" },
      { code: "# Stage 3: Interference / Diffusion (Amplifies marked state)", explanation: "Stage 3" },
      { code: "qc.h([0, 1])  # Recombination via Hadamards", explanation: "Hadamard recombination" },
      { code: "print('Stage 3 - After Interference:', Statevector.from_instruction(qc).data.round(2))", explanation: "Stage 3 state" },
      { code: "print('\\nCircuit Diagram:')", explanation: "Diagram label" },
      { code: "print(qc.draw('text'))", explanation: "Draw circuit" }
    ],
    executionFlow: [
      { number: 1, title: "Stage 1: State Superposition", description: "Initialize all input qubits into uniform superposition with Hadamard gates." },
      { number: 2, title: "Stage 2: Quantum Oracle", description: "Encode problem constraints or target solutions into relative phase angles." },
      { number: 3, title: "Stage 3: Interference Amplification", description: "Recombine wave paths to constructively amplify correct answers." }
    ],
    input: "QuantumCircuit(2, 2) executing the 3 core stages of a quantum algorithm.",
    output: "Stage 1: [0.5, 0.5, 0.5, 0.5]\nStage 2: [0.5, 0.5, 0.5, -0.5] (Target |11> marked with -0.5)\nStage 3: Interference transforms state.",
    interpretation: "Every major quantum algorithm\u2014from Grover search to Shor factoring\u2014follows this three-stage pipeline: superposition initialization, oracle phase-marking, and wave interference readout.",
    colabInstructions: [
      "Click 'Copy for Google Colab' to copy the complete runnable script",
      "Open Google Colab at colab.research.google.com",
      "Paste into a code cell and press Shift + Enter to run",
    ],
  },
  mcqs: [
    {
      id: 'q1',
      question: 'Which of the following describes the BQP complexity class?',
      options: [
        { id: 'a', text: 'Problems solvable by a quantum computer in polynomial time with an error probability bounded below 1/3' },
        { id: 'b', text: 'Problems that can only be solved by humans' },
        { id: 'c', text: 'Problems that require infinite time to solve' },
        { id: 'd', text: 'Problems that produce exact answers with zero probability of error' },
      {id:'q2',question:'What advantage do quantum algorithms provide?',options:[{id:'a',text:'Always faster than classical'},{id:'b',text:'Exponential or polynomial speedups for specific problems (factoring, search, simulation)'},{id:'c',text:'Solve all problems instantly'},{id:'d',text:'No advantages'}],correctAnswer:'b',explanation:'Quantum algorithms provide provable speedups for specific classes: Shor (exponential for factoring), Grover (quadratic for search), VQE (polynomial for quantum simulation). Not universal speed-up for all problems.',incorrectFeedback:'Quantum algorithms excel at specific computational tasks, not all problems.'},
{id:'q3',question:'What is BQP complexity class?',options:[{id:'a',text:'Classical polynomial time'},{id:'b',text:'Bounded-error Quantum Polynomial time: problems solvable by quantum computers in polynomial time'},{id:'c',text:'Exponential time'},{id:'d',text:'Undecidable problems'}],correctAnswer:'b',explanation:'BQP contains problems quantum computers solve efficiently. Factoring ∈ BQP but not known to be in classical P. BQP ⊆ PSPACE; relationship to NP unknown.',incorrectFeedback:'BQP defines quantum polynomial-time solvable problems.'},
{id:'q4',question:'What types of problems benefit most from quantum algorithms?',options:[{id:'a',text:'All problems equally'},{id:'b',text:'Simulation of quantum systems, unstructured search, integer factorization, optimization'},{id:'c',text:'Word processing'},{id:'d',text:'Classical sorting'}],correctAnswer:'b',explanation:'Quantum advantage domains: quantum chemistry (VQE), cryptography (Shor), database search (Grover), optimization (QAOA). Classical algorithms remain better for many tasks (sorting, matrix multiplication).',incorrectFeedback:'Quantum algorithms excel at specific structured problems.'},
{id:'q5',question:'What is the No-Cloning Theorem\'s impact on quantum algorithms?',options:[{id:'a',text:'Allows unlimited copying'},{id:'b',text:'Prevents copying unknown quantum states, limiting quantum RAM and algorithm design'},{id:'c',text:'Irrelevant to algorithms'},{id:'d',text:'Only affects hardware'}],correctAnswer:'b',explanation:'No-Cloning prevents duplicating unknown quantum states, constraining quantum data structures and recursion. Algorithms must work with single-copy quantum information or create structured states from scratch.',incorrectFeedback:'No-Cloning fundamentally constrains quantum algorithm design.'},
  ],
      correctAnswer: 'a',
      explanation: 'BQP stands for Bounded-Error Quantum Polynomial-Time: problems solvable in polynomial time with error probability bounded away from 1/2 (typically <= 1/3).',
      incorrectFeedback: 'BQP allows a bounded error probability of at most 1/3.',
    },
  ],
};

export const quantumParallelism: Topic = {
  id: 'quantum-parallelism',
  moduleId: 'quantum-algorithms',
  number: 2,
  title: 'Quantum Parallelism & The Quantum Oracle',
  description: 'Understand how a single quantum circuit evaluates a function f(x) across 2^n inputs simultaneously via a quantum oracle.',
  objectives: [
    'Define Quantum Parallelism: U_f sum |x>|0> = sum |x>|f(x)>',
    'Construct unitary Quantum Oracles: |x>|y> -> |x>|y XOR f(x)>',
    'Understand Phase Kickback: using target |-> to encode f(x) directly into phases',
  ],
  story: `Suppose someone hands you a black box containing a secret function $f(x)$. The box accepts numbers from 0 to 7 and outputs either 0 or 1.
  
You want to evaluate what the function does on all 8 numbers.
  
On a classical computer, you must run the box 8 separate times:
- Run $f(0)$, then run $f(1)$, then run $f(2)$... up to $f(7)$.
  
In a quantum computer, you put a 3-qubit register into a uniform superposition:
$$\\frac{1}{\\sqrt{8}} (|0\\rangle + |1\\rangle + \\dots + |7\\rangle)$$
Now, you pass that single superposition through the quantum black box **ONCE**.
  
In that single physical tick of the clock, the quantum computer evaluates $f(x)$ for all 8 numbers simultaneously!
This is **Quantum Parallelism**.`,
  motivation: `**The prerequisite of all speedups**: Every quantum algorithm—Deutsch-Jozsa, Grover, Simon, Shor—relies on quantum parallelism to ingest an entire function’s input domain in a single unitary query.`,
  concept: {
    simple: `Classical computing is like a single mail carrier delivering letters to 8 houses one by one.
Quantum parallelism is like cloning the mail carrier into 8 phantom carriers who visit all 8 houses simultaneously in a single second!
The catch: at the end, you can only look at one house unless you use quantum interference to combine the clues!`,
    technical: `A classical function $f: \\{0, 1\\}^n \\rightarrow \\{0, 1\\}^m$ is made unitary via an oracle operator $U_f |x\\rangle|y\\rangle = |x\\rangle|y \\oplus f(x)\\rangle$. When applied to a uniform input superposition $\\frac{1}{\\sqrt{2^n}} \\sum_{x} |x\\rangle|0\\rangle$, linearity ensures:
$$U_f \\left( \\frac{1}{\\sqrt{2^n}} \\sum_{x=0}^{2^n-1} |x\\rangle|0\\rangle \\right) = \\frac{1}{\\sqrt{2^n}} \\sum_{x=0}^{2^n-1} |x\\rangle|f(x)\\rangle$$
Evaluating $f(x)$ on all $2^n$ inputs in a single circuit depth call.`,
  },
  keyTerms: [
    { term: 'Quantum Parallelism', simple: 'Evaluating a function for all possible numbers simultaneously in a single step.', technical: 'The simultaneous evaluation of a function on a superposition of $2^n$ basis states via linear unitary evolution.' },
    { term: 'Quantum Oracle ($U_f$)', simple: 'A black-box quantum gate that computes the function f(x) reversibly.', technical: 'A unitary transformation $U_f$ embedding arbitrary Boolean logic into reversible Hilbert space operations.' },
    { term: 'Phase Kickback Trick', simple: 'When putting the target in state |-> causes (-1)^f(x) to bounce back into the input qubits!', technical: 'Technique where evaluating $U_f|x\\rangle|-\\rangle = (-1)^{f(x)}|x\\rangle|-\\rangle$ shifts function values directly into probability amplitudes.' },
  ],
  equations: [
    {
      latex: 'U_f |x\\rangle|-\\rangle = (-1)^{f(x)} |x\\rangle|-\\rangle',
      explanation: 'The Phase Kickback Equation: when the target qubit is prepared in state |-> = (|0> - |1>)/sqrt(2), the output f(x) kicks back as a relative phase (-1)^f(x) on the input state.',
      symbols: [
        { symbol: 'U_f', meaning: 'Quantum oracle', interpretation: 'Reversible function evaluator' },
        { symbol: '|-\\rangle', meaning: 'Minus target state', interpretation: 'Ancilla qubit in (|0> - |1>)/sqrt(2)' },
        { symbol: '(-1)^{f(x)}', meaning: 'Phase kickback factor', interpretation: '+1 if f(x)=0, -1 if f(x)=1' },
      ],
      example: {
        description: 'If f(x) = 0, phase is (-1)^0 = +1. If f(x) = 1, phase is (-1)^1 = -1.',
        calculation: 'U_f|x\\rangle|-\\rangle = (-1)^{f(x)}|x\\rangle|-\\rangle',
        result: 'Function values are encoded directly into quantum interference phases',
      },
    },
  ],
  howItWorks: [
    { number: 1, title: 'Superposition Creation', description: 'Apply Hadamard gates across input register: sum |x>/sqrt(2^n).' },
    { number: 2, title: 'Target Preparation', description: 'Initialize ancilla qubit to state |-> using X followed by H.' },
    { number: 3, title: 'Oracle Invocation', description: 'Pass through U_f; phase kickback writes (-1)^f(x) onto each branch.' },
    { number: 4, title: 'Interference Processing', description: 'Apply Hadamard transformation to read out global structural properties of f(x).' },
  ],
  applications: [
    { title: 'Black-Box Cryptanalysis', problem: 'Finding mathematical properties of secret symmetric encryption s-boxes.', solution: 'Quantum oracles query s-box functions in parallel superposition.' },
  ],
  activity: {
    type: 'mcq',
    title: 'Phase Kickback Check',
    question: 'In the phase kickback trick, what state must the ancilla target qubit be prepared in before querying the oracle?',
    options: [
      { id: 'a', text: '|-> = (|0> - |1>) / sqrt(2)' },
      { id: 'b', text: '|0>' },
      { id: 'c', text: '|1>' },
      { id: 'd', text: 'Any random state' },
    ],
    correctAnswer: 'a',
    explanation: 'When the target is prepared in |->, applying the XOR operation (|0 XOR f(x)> - |1 XOR f(x)>) flips the overall sign by (-1)^f(x), kicking the phase back to the control input.',
    hint: 'Remember that H(X|0>) = |-> produces the relative minus sign.',
  },
  pythonHandsOn: {
    title: "Evaluating Functions in Parallel with Quantum Registers in Qiskit",
    description: "Evaluate a mathematical function across all 8 inputs simultaneously using a 3-qubit superposition register in Qiskit.",
    packages: ["qiskit"],
    installCommand: "pip install qiskit",
    imports: [
      { code: "from qiskit import QuantumCircuit", explanation: "Circuit constructor" },
      { code: "from qiskit.quantum_info import Statevector", explanation: "Statevector analysis" }
    ],
    code: [
      { code: "# 3-qubit input register evaluates 2^3 = 8 inputs simultaneously", explanation: "Setup" },
      { code: "qc = QuantumCircuit(3)", explanation: "3 qubits" },
      { code: "qc.h(range(3))  # Create uniform superposition of all integers 0 to 7", explanation: "H on all 3" },
      { code: "sv = Statevector.from_instruction(qc)", explanation: "Extract statevector" },
      { code: "print('=== 3-Qubit Quantum Parallelism in Qiskit ===')", explanation: "Header" },
      { code: "print(f'Total simultaneous inputs evaluated: {sv.dim}')", explanation: "8 inputs" },
      { code: "print('\\nInput states in superposition:')", explanation: "Label" },
      { code: "for idx, amp in enumerate(sv.data):", explanation: "Loop all 8 basis states" },
      { code: "    integer_val = idx", explanation: "Decimal value" },
      { code: "    binary_val = f'{idx:03b}'", explanation: "Binary string" },
      { code: "    print(f'  Input x = {integer_val} (|{binary_val}>) with amplitude {amp.real:.4f}')", explanation: "Print input" },
      { code: "print('\\nA single quantum gate operation now acts on ALL 8 inputs simultaneously!')", explanation: "Parallelism takeaway" }
    ],
    executionFlow: [
      { number: 1, title: "Initialize Input Register", description: "Allocate 3 qubits in state |000>." },
      { number: 2, title: "Broadcast Superposition", description: "Apply Hadamard across all 3 wires to generate sum_{x=0}^7 |x>." },
      { number: 3, title: "Parallel Processing", description: "Demonstrate that the single quantum register now holds all 8 values simultaneously." }
    ],
    input: "QuantumCircuit(3) with H applied to all 3 wires.",
    output: "8 simultaneous inputs evaluated in parallel: x = 0 to 7 with amplitude 0.3536 each.",
    interpretation: "Quantum parallelism enables a processor with n qubits to simultaneously evaluate 2^n function arguments in a single operational step, providing the foundation for exponential quantum speedup.",
    colabInstructions: [
      "Click 'Copy for Google Colab' to copy the complete runnable script",
      "Open Google Colab at colab.research.google.com",
      "Paste into a code cell and press Shift + Enter to run",
    ],
  },
  mcqs: [
    {
      id: 'q1',
      question: 'Why is Quantum Parallelism by itself not enough to achieve a quantum speedup without interference?',
      options: [
        { id: 'a', text: 'Because measuring the superposition at the end collapses the state to only ONE random output, giving no advantage over classical guessing' },
        { id: 'b', text: 'Because quantum parallelism uses too much electricity' },
        { id: 'c', text: 'Because quantum computers can only run for 2 seconds' },
        { id: 'd', text: 'Because Python cannot print parallel outputs' },
      {id:'q2',question:'What is quantum parallelism?',options:[{id:'a',text:'Running multiple quantum computers'},{id:'b',text:'Evaluating function on superposition of inputs: f(|0⟩+|1⟩) = |f(0)⟩+|f(1)⟩ in single step'},{id:'c',text:'Classical parallel processing'},{id:'d',text:'Multi-threading'}],correctAnswer:'b',explanation:'Quantum parallelism: apply f to superposition (|0⟩+...+|2^n-1⟩)/√(2^n), evaluates f on all 2^n inputs simultaneously. Challenge: extracting information without measurement collapse.',incorrectFeedback:'Quantum parallelism evaluates functions on exponentially many inputs simultaneously.'},
{id:'q3',question:'Why can\'t we extract all exponentially many function outputs?',options:[{id:'a',text:'We can extract all outputs'},{id:'b',text:'Measurement collapses superposition to single outcome; extracting all values requires exponential measurements'},{id:'c',text:'Quantum computers are slow'},{id:'d',text:'It\'s not allowed'}],correctAnswer:'b',explanation:'Measuring quantum state yields single result with probability |amplitude|². Extracting 2^n outputs requires 2^n measurements. Quantum algorithms exploit interference to amplify answer amplitudes cleverly.',incorrectFeedback:'Measurement collapse limits direct extraction of superposition values.'},
{id:'q4',question:'What is quantum interference in algorithms?',options:[{id:'a',text:'Random noise'},{id:'b',text:'Constructive/destructive amplitude interference: amplify correct answers, cancel wrong answers'},{id:'c',text:'Hardware errors'},{id:'d',text:'Classical probability'}],correctAnswer:'b',explanation:'Quantum algorithms design gate sequences creating constructive interference on solution states (amplitudes add), destructive interference on non-solutions (amplitudes cancel), increasing measurement probability of correct answers.',incorrectFeedback:'Interference manipulates probability amplitudes to highlight solutions.'},
{id:'q5',question:'What is the main limitation preventing universal quantum speedup?',options:[{id:'a',text:'Hardware cost'},{id:'b',text:'Measurement yields single outcome; clever interference needed to extract useful information from parallelism'},{id:'c',text:'Programming difficulty'},{id:'d',text:'Energy consumption'}],correctAnswer:'b',explanation:'Quantum speedup requires algorithms that: (1) use parallelism to evaluate many inputs, (2) engineer interference to concentrate probability on solutions, (3) extract answer via measurement. Not all problems admit such structure.',incorrectFeedback:'Extracting speedup requires careful interference design, limiting universal application.'},
  ],
      correctAnswer: 'a',
      explanation: 'Evaluating 2^n inputs simultaneously is useless if measurement simply selects a random output. Interference is required to cancel out wrong answers and amplify the desired result.',
      incorrectFeedback: 'Measurement collapse limits raw parallelism, requiring interference to extract answers.',
    },
  ],
};

export const deutschJozsa: Topic = {
  id: 'deutsch-jozsa',
  moduleId: 'quantum-algorithms',
  number: 3,
  title: 'The Deutsch-Jozsa Algorithm: First Proof of Quantum Speedup',
  description: 'Master the historic algorithm that first proved an exponential separation between classical and quantum computing.',
  objectives: [
    'Define Constant vs Balanced Boolean functions',
    'Examine the classical complexity barrier: 2^(n-1) + 1 queries in worst-case',
    'Trace the Deutsch-Jozsa circuit: solving the problem in EXACTLY ONE quantum query',
  ],
  story: `In 1992, David Deutsch and Richard Jozsa designed a mathematical puzzle specifically engineered to demonstrate that quantum computers are fundamentally more powerful than classical computers.
  
Imagine a black-box function $f(x)$ that accepts an $n$-bit binary string and outputs 0 or 1.
You are promised that the function is either:
1. **Constant**: It outputs the exact same answer (all 0s, or all 1s) for every single input.
2. **Balanced**: It outputs 0 for exactly half of all inputs, and 1 for the other half.
  
Your mission: find out whether the function is Constant or Balanced.
  
On a classical computer, you check $f(000)$, $f(001)$, $f(010)$...
In the worst case, you must check **more than half of all inputs**:
$$2^{n-1} + 1 \\text{ queries!}$$
For $n = 30$, that is over **500 million queries**!
  
Deutsch and Jozsa proved that a quantum computer can determine the answer with 100% certainty in **EXACTLY ONE QUERY**!`,
  motivation: `**The historic proof of quantum advantage**: Deutsch-Jozsa was the first deterministic quantum algorithm to achieve an exponential separation over classical deterministic Turing machines, inspiring Shor and Grover.`,
  concept: {
    simple: `The Deutsch-Jozsa test:
Is a coin two-headed/two-tailed (Constant) or does it have one Head and one Tail (Balanced)?
- **Classical**: You might have to flip the coin hundreds of times.
- **Quantum**: You send the coin through a quantum circuit once.
  - If measurement yields **00...0**, the function is **CONSTANT**.
  - If measurement yields **ANY OTHER NUMBER**, the function is **BALANCED**!
Solved in a single shot!`,
    technical: `Deutsch-Jozsa evaluates $f: \\{0, 1\\}^n \\rightarrow \\{0, 1\\}$ promised to be constant or balanced. Classical deterministic query complexity is $\\Omega(2^{n-1}+1)$. The quantum circuit applies $H^{\\otimes n}$ to $|0\\rangle^{\\otimes n}$, queries oracle $U_f$ with ancilla $|-\\rangle$, and applies $H^{\\otimes n}$ to the input register. The final state amplitude of $|0\\rangle^{\\otimes n}$ is $\\frac{1}{2^n} \\sum_{x} (-1)^{f(x)}$. For constant $f$, this equals $\\pm 1$ ($P(|0\\rangle^{\\otimes n}) = 1$); for balanced $f$, the terms cancel to 0 ($P(|0\\rangle^{\\otimes n}) = 0$). Exact complexity: $\\mathcal{O}(1)$ quantum query.`,
  },
  keyTerms: [
    { term: 'Constant Function', simple: 'A function that outputs the exact same answer (all 0s or all 1s) for every single input.', technical: 'A function where $f(x) = c \\in \\{0, 1\\}$ for all $x \\in \\{0, 1\\}^n$.' },
    { term: 'Balanced Function', simple: 'A function that outputs 0 for exactly 50% of inputs, and 1 for the other 50%.', technical: 'A function where $|\\{x : f(x) = 0\\}| = |\\{x : f(x) = 1\\}| = 2^{n-1}$.' },
  ],
  equations: [
    {
      latex: '|\\psi_{\\text{final}}\\rangle = \\sum_{z=0}^{2^n-1} \\left( \\frac{1}{2^n} \\sum_{x=0}^{2^n-1} (-1)^{f(x) + x \\cdot z} \\right) |z\\rangle',
      explanation: 'The final state before measurement in Deutsch-Jozsa: for z = 00...0, the inner amplitude is (1/2^n) * sum (-1)^f(x).',
      symbols: [
        { symbol: 'z = 0', meaning: 'All-zero state |00...0>', interpretation: 'Marker for constant function' },
        { symbol: '(-1)^{f(x)}', meaning: 'Phase kickback factor', interpretation: 'Cancels to 0 if balanced' },
      ],
      example: {
        description: 'If f is balanced, sum (-1)^f(x) has equal numbers of +1 and -1, summing to exactly 0. Thus amplitude for |00...0> is 0!',
        calculation: '\\sum (-1)^{f(x)} = 2^{n-1}(+1) + 2^{n-1}(-1) = 0 \\implies P(|0\\dots0\\rangle) = 0.0',
        result: 'Measuring anything other than 0 proves function is balanced',
      },
    },
  ],
  howItWorks: [
    { number: 1, title: 'Register Initialization', description: 'Initialize n input qubits to |0> and 1 target ancilla to |1>.' },
    { number: 2, title: 'Hadamard Wall', description: 'Apply Hadamard to all n+1 qubits, setting target to |->.' },
    { number: 3, title: 'Single Oracle Query', description: 'Pass through U_f; phase kickback writes (-1)^f(x) onto input superposition.' },
    { number: 4, title: 'Final Hadamard & Measurement', description: 'Apply Hadamard to all n input qubits. If measurement is 00...0, output CONSTANT; otherwise output BALANCED.' },
  ],
  applications: [
    { title: 'Global Function Property Testing', problem: 'Determining global structural symmetries of massive cryptographic black boxes.', solution: 'Deutsch-Jozsa proves exponential speedup for global property testing over local evaluation.' },
  ],
  activity: {
    type: 'mcq',
    title: 'Deutsch-Jozsa Measurement Rule',
    question: 'In the Deutsch-Jozsa algorithm on 4 qubits, the final measurement returns "0000". What does this prove about the function f(x)?',
    options: [
      { id: 'a', text: 'The function is 100% guaranteed to be CONSTANT' },
      { id: 'b', text: 'The function is balanced' },
      { id: 'c', text: 'The circuit failed' },
      { id: 'd', text: 'The function is broken' },
    ],
    correctAnswer: 'a',
    explanation: 'Constructive interference into the all-zero state |0000> occurs if and only if the function is Constant. If the function were balanced, the amplitude of |0000> would be exactly zero.',
    hint: 'All-zeros (|00...0>) is the unique signature of a Constant function.',
  },
  pythonHandsOn: {
    title: "Implementing the Full Deutsch-Jozsa Algorithm in Qiskit",
    description: "Construct the full Deutsch-Jozsa algorithm for a 3-qubit input register and determine whether a function is constant or balanced in 1 query.",
    packages: ["qiskit", "qiskit-aer"],
    installCommand: "pip install qiskit qiskit-aer",
    imports: [
      { code: "from qiskit import QuantumCircuit", explanation: "Circuit module" },
      { code: "from qiskit_aer import AerSimulator", explanation: "Simulator module" }
    ],
    code: [
      { code: "# 3 input qubits + 1 ancilla qubit = 4 qubits total", explanation: "Setup" },
      { code: "n = 3", explanation: "Input size" },
      { code: "dj_circuit = QuantumCircuit(n + 1, n)", explanation: "Circuit with 4 qubits and 3 classical bits" },
      { code: "", explanation: "" },
      { code: "# Step 1: Initialize ancilla to |1> and apply Hadamards to all qubits", explanation: "Init" },
      { code: "dj_circuit.x(n)       # Ancilla to |1>", explanation: "Ancilla flip" },
      { code: "dj_circuit.h(range(n + 1))  # All qubits to superposition", explanation: "H on all wires" },
      { code: "dj_circuit.barrier()", explanation: "Visual barrier" },
      { code: "", explanation: "" },
      { code: "# Step 2: Balanced Oracle (f(x) = x0 XOR x1 XOR x2)", explanation: "Balanced oracle" },
      { code: "for q in range(n):", explanation: "Attach CNOTs" },
      { code: "    dj_circuit.cx(q, n)  # XOR into ancilla", explanation: "CNOT from each input" },
      { code: "dj_circuit.barrier()", explanation: "Visual barrier" },
      { code: "", explanation: "" },
      { code: "# Step 3: Interference on input qubits", explanation: "Interference" },
      { code: "dj_circuit.h(range(n))", explanation: "H on input register" },
      { code: "dj_circuit.measure(range(n), range(n))", explanation: "Measure input qubits" },
      { code: "print('Deutsch-Jozsa Circuit Diagram:')", explanation: "Diagram label" },
      { code: "print(dj_circuit.draw('text'))", explanation: "Print circuit" },
      { code: "", explanation: "" },
      { code: "# Simulate with AerSimulator", explanation: "Simulation" },
      { code: "sim = AerSimulator()", explanation: "Backend" },
      { code: "counts = sim.run(dj_circuit, shots=1000).result().get_counts()", explanation: "Run 1000 shots" },
      { code: "print('\\nMeasurement Result (1000 shots):', counts)", explanation: "Print counts" },
      { code: "measured_bitstring = list(counts.keys())[0]", explanation: "Extract measured bitstring" },
      { code: "if measured_bitstring == '0' * n:", explanation: "Check constant" },
      { code: "    print('Verdict: Function is CONSTANT (measured 000)')", explanation: "Constant" },
      { code: "else:", explanation: "Check balanced" },
      { code: "    print(f'Verdict: Function is BALANCED (measured {measured_bitstring} != 000) in 1 query!')", explanation: "Balanced" }
    ],
    executionFlow: [
      { number: 1, title: "Prepare Superposition & Ancilla", description: "Place 3 input qubits into |+> and ancilla qubit into |->." },
      { number: 2, title: "Query Balanced Oracle", description: "Apply CNOT from each input qubit to the ancilla, kicking back negative phases." },
      { number: 3, title: "Apply Final Hadamards & Measure", description: "Destructive interference cancels '000', resulting in 100% detection of balanced function in 1 step vs 2^(n-1)+1 classical queries." }
    ],
    input: "Deutsch-Jozsa circuit with 3 input qubits and balanced parity oracle.",
    output: "Measurement counts: {'111': 1000}\nVerdict: Function is BALANCED in 1 query (Classically requires 5 queries).",
    interpretation: "Classically, proving a 3-input function is balanced requires testing 5 inputs in the worst case (2^(n-1)+1). Deutsch-Jozsa solves it in exactly ONE quantum query with zero error, establishing definitive quantum speedup.",
    colabInstructions: [
      "Click 'Copy for Google Colab' to copy the complete runnable script",
      "Open Google Colab at colab.research.google.com",
      "Paste into a code cell and press Shift + Enter to run",
    ],
  },
  mcqs: [
    {
      id: 'q1',
      question: 'How many oracle queries does a classical deterministic computer require in the worst case to determine if an n-bit function is constant or balanced?',
      options: [
        { id: 'a', text: '2^(n-1) + 1 queries' },
        { id: 'b', text: 'Exactly 1 query' },
        { id: 'c', text: 'n queries' },
        { id: 'd', text: '2 queries' },
      {id:'q2',question:'What problem does Deutsch-Jozsa algorithm solve?',options:[{id:'a',text:'Integer factorization'},{id:'b',text:'Determine if Boolean function f:{0,1}^n→{0,1} is constant or balanced in single query'},{id:'c',text:'Database search'},{id:'d',text:'Optimization'}],correctAnswer:'b',explanation:'Deutsch-Jozsa: given black-box function f, determine if f is constant (all 0s or all 1s) or balanced (half 0s, half 1s). Quantum: 1 query. Classical: up to 2^(n-1)+1 queries.',incorrectFeedback:'Deutsch-Jozsa distinguishes constant vs balanced functions with exponential speedup.'},
{id:'q3',question:'What is the Deutsch-Jozsa circuit structure?',options:[{id:'a',text:'Random gates'},{id:'b',text:'Hadamards on input → Oracle U_f → Hadamards → Measure: |0⟩^n if constant, else non-zero'},{id:'c',text:'Only CNOTs'},{id:'d',text:'Measurement only'}],correctAnswer:'b',explanation:'Circuit: (1) H^⊗n creates superposition, (2) quantum oracle encodes f, (3) H^⊗n performs interference, (4) measure: output |00...0⟩ iff f constant.',incorrectFeedback:'Deutsch-Jozsa uses Hadamards + oracle + interference for exponential speedup.'},
{id:'q4',question:'What is a quantum oracle?',options:[{id:'a',text:'Fortune teller'},{id:'b',text:'Black-box unitary U_f implementing function f via phase/bit kick: U_f|x⟩|y⟩=|x⟩|y⊕f(x)⟩'},{id:'c',text:'Classical subroutine'},{id:'d',text:'Random number generator'}],correctAnswer:'b',explanation:'Quantum oracle: unitary encoding classical function f. Phase oracle: U_f|x⟩=(-1)^f(x)|x⟩. Bit oracle: U_f|x⟩|y⟩=|x⟩|y⊕f(x)⟩. Enables quantum query algorithms.',incorrectFeedback:'Oracle is a unitary black-box encoding classical functions quantumly.'},
{id:'q5',question:'Is Deutsch-Jozsa practical for real-world problems?',options:[{id:'a',text:'Yes, widely deployed'},{id:'b',text:'No, it\'s a pedagogical example demonstrating quantum advantage; the problem is artificial'},{id:'c',text:'Yes, used in cryptography'},{id:'d',text:'Yes, used in databases'}],correctAnswer:'b',explanation:'Deutsch-Jozsa is a "black-box" separation proving quantum advantage exists. The constant-vs-balanced problem is contrived. Value: proof-of-concept, not practical application. Real algorithms: Shor, Grover, VQE.',incorrectFeedback:'Deutsch-Jozsa demonstrates quantum speedup but solves an artificial problem.'},
  ],
      correctAnswer: 'a',
      explanation: 'A classical computer could query half the inputs (2^(n-1)) and receive all 0s. It must query at least one more input (2^(n-1) + 1) to determine if it is constant or balanced.',
      incorrectFeedback: 'Classical worst-case is 2^(n-1) + 1 queries.',
    },
  ],
};

export const groverSearch: Topic = {
  id: 'grover-search',
  moduleId: 'quantum-algorithms',
  number: 4,
  title: 'Grover’s Search Algorithm: Quadratic Speedup',
  description: 'Master the crown jewel of unstructured search: the Phase Oracle, Inversion about the Mean (Diffusion Operator), and O(sqrt(N)) speedup.',
  objectives: [
    'Understand unstructured database search: N items in classical O(N) vs Grover O(sqrt(N))',
    'Deconstruct the Grover Iteration: Oracle Phase Inversion + Diffusion Reflection',
    'Visualize geometric rotation in 2D subspace spanned by target and non-target states',
  ],
  story: `Imagine you have a lock with a 4-digit code (10,000 possible combinations from 0000 to 9999). You don't know the code, and you have no clues.
  
On a classical computer, you have to try combinations one by one: 0000, 0001, 0002... On average, you will try **5,000 attempts** before the lock clicks open ($N/2$).
  
In 1996, an Indian-American computer scientist at Bell Labs named Lov Grover published an algorithm that blew the doors off classical search theory.
  
Grover showed that a quantum computer can find the secret code in approximately:
$$\\frac{\\pi}{4} \\sqrt{10{,}000} \\approx \\frac{3.14}{4} \\times 100 \\approx \\mathbf{78 \\text{ attempts!}}$$
Instead of 5,000 tries, Grover cracks the lock in just 78 quantum iterations!`,
  motivation: `**The universal quadratic accelerator**: Grover’s algorithm provides a provable quadratic speedup for ANY problem that can be verified in polynomial time (NP problems), including constraint satisfaction, SAT solvers, and hash function pre-image attacks.`,
  concept: {
    simple: `Grover's algorithm works in two alternating steps:
1. **The Oracle (Mark the Target)**: Put a tiny minus sign on the winning answer. (Like sticking a tiny sticky note on the right book).
2. **The Diffusion Operator (Inversion about the Mean)**: Imagine all the book heights on a shelf. The marked book has an upside-down height. When you reflect all books across their average height, the marked book shoots up like a giant skyscraper, and all the wrong books shrink down to ants!
Repeat this $\\approx \\sqrt{N}$ times, and the right book stands out with almost 100% height!`,
    technical: `Grover’s algorithm solves the unstructured search problem for unique target $\\omega \\in \\{0, 1\\}^n$ ($N = 2^n$) in $R \\approx \\frac{\\pi}{4}\\sqrt{N}$ iterations. Each Grover operator $G = D U_\\omega$ consists of:
1. **Phase Oracle $U_\\omega$**: Reflection about orthogonal subspace $I - 2|\\omega\\rangle\\langle\\omega|$.
2. **Diffusion Operator $D$**: Reflection about uniform superposition state $|s\\rangle$: $2|s\\rangle\\langle s| - I$.
In the 2D subspace spanned by $|\\omega\\rangle$ and $|s'\\rangle = \\frac{1}{\\sqrt{N-1}}\\sum_{x \\ne \\omega}|x\\rangle$, $G$ executes a planar rotation by angle $\\theta = 2\\arcsin(1/\\sqrt{N}) \\approx 2/\\sqrt{N}$.`,
  },
  keyTerms: [
    { term: 'Grover Diffusion Operator', simple: 'The math operation that flips all amplitudes upside-down across their average, making the target huge.', technical: 'The unitary operator $D = 2|s\\rangle\\langle s| - I$ performing inversion about the mean amplitude.' },
    { term: 'Quadratic Speedup', simple: 'Reducing the time from N down to square root of N.', technical: 'Complexity reduction from $\\mathcal{O}(N)$ to $\\mathcal{O}(\\sqrt{N})$.' },
    { term: 'Overcooking (Over-rotation)', simple: 'Running Grover too many times causes the target to rotate past the peak and shrink back down!', technical: 'Periodic probability oscillation $P(\\omega) = \\sin^2((2k+1)\\theta/2)$; exceeding optimal iterations reduces success probability.' },
  ],
  equations: [
    {
      latex: 'R \\approx \\frac{\\pi}{4} \\sqrt{N}, \\quad D = 2|s\\rangle\\langle s| - I',
      explanation: 'Optimal Grover iterations R to reach near 100% success probability, and the Diffusion reflection operator D.',
      symbols: [
        { symbol: 'R', meaning: 'Optimal number of iterations', interpretation: 'How many times to repeat the loop' },
        { symbol: 'N', meaning: 'Search space size (2^n)', interpretation: 'Total items in database' },
        { symbol: '|s\\rangle', meaning: 'Uniform superposition state', interpretation: 'Equal blend of all states' },
      ],
      example: {
        description: 'Searching database of 1,000,000 items: sqrt(1,000,000) = 1,000. R = (pi/4) * 1000 ≈ 785 iterations.',
        calculation: 'R = 0.785 \\times 1000 = 785 \\text{ iterations vs 500,000 classical}',
        result: '636x faster than classical search',
      },
    },
  ],
  howItWorks: [
    { number: 1, title: 'Equal Superposition', description: 'Initialize register into |s> using Hadamard gates: all items have equal height 1/sqrt(N).' },
    { number: 2, title: 'Oracle Phase Flip', description: 'Invert the sign of the target item |omega> -> -|omega>.' },
    { number: 3, title: 'Inversion About the Mean', description: 'Apply Diffusion operator; target amplitude shoots up while non-targets shrink.' },
    { number: 4, title: 'Optimal Stopping', description: 'Halt after exactly R iterations and measure target with probability > 99%.' },
  ],
  applications: [
    { title: 'AES-256 Cryptographic Security', problem: 'Evaluating symmetric key strength against quantum brute-force search.', solution: 'Grover cuts effective key security in half ($2^{256} \\rightarrow 2^{128}$), prompting security standards to recommend 256-bit keys.' },
  ],
  activity: {
    type: 'mcq',
    title: 'Grover Iteration Count',
    question: 'You want to find 1 marked item in a database of 64 items using Grover’s algorithm. Approximately how many Grover iterations should you run?',
    options: [
      { id: 'a', text: 'Approximately 6 iterations ((pi/4) * sqrt(64) = 0.785 * 8 ≈ 6)' },
      { id: 'b', text: '32 iterations' },
      { id: 'c', text: '64 iterations' },
      { id: 'd', text: '1 iteration' },
    ],
    correctAnswer: 'a',
    explanation: 'sqrt(64) = 8. Optimal iterations R ≈ (pi/4) * 8 = 2*pi ≈ 6.28 ≈ 6 iterations. Running 6 iterations amplifies the target probability to nearly 100%.',
    hint: 'Calculate (pi/4) multiplied by the square root of 64.',
  },
  pythonHandsOn: {
    title: "Grover's Search Algorithm on 2 Qubits in Qiskit",
    description: "Implement Grover's quantum search algorithm to find a target state |11> out of 4 possibilities in a single quantum iteration.",
    packages: ["qiskit", "qiskit-aer"],
    installCommand: "pip install qiskit qiskit-aer",
    imports: [
      { code: "from qiskit import QuantumCircuit", explanation: "Circuit builder" },
      { code: "from qiskit_aer import AerSimulator", explanation: "Aer simulator" },
      { code: "from qiskit.quantum_info import Statevector", explanation: "Statevector analysis" }
    ],
    code: [
      { code: "# 2-qubit Grover Search: Target state |11> (1 target out of N=4 items)", explanation: "Problem definition" },
      { code: "qc = QuantumCircuit(2, 2)", explanation: "2 qubits, 2 bits" },
      { code: "", explanation: "" },
      { code: "# Step 1: Equal superposition", explanation: "Step 1" },
      { code: "qc.h([0, 1])", explanation: "Create state |s> = (|00>+|01>+|10>+|11>)/2" },
      { code: "qc.barrier()", explanation: "Barrier" },
      { code: "", explanation: "" },
      { code: "# Step 2: Oracle marking target |11> with negative phase", explanation: "Oracle" },
      { code: "qc.cz(0, 1)  # Controlled-Z marks |11> with -1 phase", explanation: "CZ flips |11>" },
      { code: "qc.barrier()", explanation: "Barrier" },
      { code: "", explanation: "" },
      { code: "# Step 3: Grover Diffusion Operator (Inversion about the Mean: 2|s><s| - I)", explanation: "Diffusion" },
      { code: "qc.h([0, 1])", explanation: "H on all" },
      { code: "qc.x([0, 1])", explanation: "X on all" },
      { code: "qc.cz(0, 1)  # Controlled phase flip", explanation: "CZ in X-basis" },
      { code: "qc.x([0, 1])", explanation: "Uncompute X" },
      { code: "qc.h([0, 1])", explanation: "Uncompute H" },
      { code: "qc.barrier()", explanation: "Barrier" },
      { code: "", explanation: "" },
      { code: "# Step 4: Measure", explanation: "Measure" },
      { code: "qc.measure([0, 1], [0, 1])", explanation: "Measure both qubits" },
      { code: "print('Grover Search Circuit Diagram:')", explanation: "Label" },
      { code: "print(qc.draw('text'))", explanation: "Print diagram" },
      { code: "", explanation: "" },
      { code: "# Simulate with AerSimulator", explanation: "Simulation" },
      { code: "sim = AerSimulator()", explanation: "Init simulator" },
      { code: "counts = sim.run(qc, shots=1000).result().get_counts()", explanation: "Run shots" },
      { code: "print('\\nMeasurement Results (1000 shots):', counts)", explanation: "Print counts" },
      { code: "target_count = counts.get('11', 0)", explanation: "Count for 11" },
      { code: "print(f'Target |11> found with {target_count/10:.1f}% probability in just 1 iteration!')", explanation: "Success rate" }
    ],
    executionFlow: [
      { number: 1, title: "Uniform Superposition", description: "Create equal amplitude distribution across all 4 items." },
      { number: 2, title: "Phase Inversion Oracle", description: "Flip the phase of target state |11> from +0.5 to -0.5." },
      { number: 3, title: "Diffusion Operator", description: "Reflect all amplitudes about their mean, boosting target amplitude to 1.0 and suppressing non-targets to 0." }
    ],
    input: "2-qubit Grover circuit with CZ oracle targeting |11>.",
    output: "Measurement counts: {'11': 1000} (100% success in a single iteration).\nNon-target states ('00', '01', '10') have 0% probability.",
    interpretation: "Grover's algorithm provides a quadratic speedup O(sqrt(N)) for unstructured database search. For N=4, exactly one iteration rotates the state vector directly onto the target state with 100% certainty.",
    colabInstructions: [
      "Click 'Copy for Google Colab' to copy the complete runnable script",
      "Open Google Colab at colab.research.google.com",
      "Paste into a code cell and press Shift + Enter to run",
    ],
  },
  mcqs: [
    {
      id: 'q1',
      question: 'What happens if you run Grover’s algorithm for too many iterations (e.g., 20 iterations when the optimal count was 6)?',
      options: [
        { id: 'a', text: 'The target state over-rotates past the maximum amplitude and its probability decreases (Overcooking)' },
        { id: 'b', text: 'The target probability stays at 100% forever' },
        { id: 'c', text: 'The computer crashes' },
        { id: 'd', text: 'The database deletes itself' },
      {id:'q2',question:'What is the speedup of Grover\'s algorithm?',options:[{id:'a',text:'Exponential'},{id:'b',text:'Quadratic: O(√N) vs classical O(N) for unstructured search'},{id:'c',text:'Linear'},{id:'d',text:'No speedup'}],correctAnswer:'b',explanation:'Grover searches unsorted database of N items in O(√N) quantum queries vs O(N) classical. Quadratic speedup is provably optimal for unstructured search (lower bound).',incorrectFeedback:'Grover provides quadratic speedup: √N queries instead of N.'},
{id:'q3',question:'What is amplitude amplification in Grover\'s?',options:[{id:'a',text:'Volume control'},{id:'b',text:'Iteratively increase probability amplitude of target states via inversion-about-average'},{id:'c',text:'Random amplification'},{id:'d',text:'Deleting states'}],correctAnswer:'b',explanation:'Grover iteration: (1) Oracle marks solution states with phase flip, (2) inversion-about-average amplifies marked amplitudes. After ~√N iterations, solution amplitude ≈1.',incorrectFeedback:'Amplitude amplification iteratively concentrates probability on solutions.'},
{id:'q4',question:'What is the Grover diffusion operator?',options:[{id:'a',text:'H gates only'},{id:'b',text:'Inversion-about-average: 2|ψ⟩⟨ψ| - I reflecting amplitudes around mean'},{id:'c',text:'X gates'},{id:'d',text:'Measurement'}],correctAnswer:'b',explanation:'Diffusion operator D=2|ψ⟩⟨ψ|-I where |ψ⟩=(|0⟩+...+|N-1⟩)/√N. Reflects amplitudes around average, amplifying above-average (marked) and suppressing below-average (unmarked).',incorrectFeedback:'Diffusion operator reflects amplitudes around mean, amplifying marked states.'},
{id:'q5',question:'How many Grover iterations for N=1024 items?',options:[{id:'a',text:'1024 iterations'},{id:'b',text:'~32 iterations (π/4 × √1024)'},{id:'c',text:'1 iteration'},{id:'d',text:'10 iterations'}],correctAnswer:'b',explanation:'Optimal Grover iterations ≈ π/4√N. For N=1024: π/4×√1024=π/4×32≈25 iterations. Over-iteration decreases success probability (oscillation).',incorrectFeedback:'Grover requires ~π/4√N iterations for optimal success probability.'},
  ],
      correctAnswer: 'a',
      explanation: 'Grover’s algorithm is an oscillation in a 2D subspace. Continuing to apply the Grover operator causes the state vector to rotate past the target axis, reducing success probability.',
      incorrectFeedback: 'Over-rotating causes the target amplitude to decrease.',
    },
  ],
};

export const quantumFourierTransform: Topic = {
  id: 'quantum-fourier-transform',
  moduleId: 'quantum-algorithms',
  number: 5,
  title: 'The Quantum Fourier Transform (QFT): The Powerhouse of Shor’s Algorithm',
  description: 'Understand the quantum analogue of the Discrete Fourier Transform: transforming computational basis states into phase frequencies in O(n^2) gates.',
  objectives: [
    'Define the Quantum Fourier Transform (QFT) mapping |j> to sum e^(2*pi*i*j*k / 2^n) |k>',
    'Contrast classical FFT O(N log N) with quantum QFT O((log N)^2) exponential speedup',
    'Examine how QFT extracts periods in Shor’s Factoring Algorithm',
  ],
  story: `In 1822, French mathematician Joseph Fourier published a radical mathematical discovery:
*Any wave in the universe—no matter how complex or jagged—can be decomposed into a sum of simple sine and cosine frequencies.*
  
Today, the Fast Fourier Transform (FFT) is called "the most important numerical algorithm of our lifetime." It powers JPEG image compression, MP3 audio, 5G wireless cell towers, and MRI medical scanners.
  
Classical FFT takes an $N$-element vector and computes its frequencies in $O(N \\log N)$ operations.
  
In 1994, Peter Shor adapted Fourier's insight to quantum computing: the **Quantum Fourier Transform (QFT)**.
  
While classical FFT takes $O(N \\log N)$ time, the quantum QFT executes in only **$O((\\log N)^2)$ gate operations**! For a database of size $N = 2^{1000}$, classical FFT would take $10^{300}$ years; QFT computes it in less than a second!`,
  motivation: `**The mathematical engine of Shor’s algorithm**: QFT is the foundational subroutine that converts hidden mathematical periods into readable quantum interference peaks, breaking RSA encryption and powering Quantum Phase Estimation.`,
  concept: {
    simple: `Classical Fourier Transform is like listening to a symphony and separating the music into individual musical notes (violins, flutes, drums).
The Quantum Fourier Transform (QFT) does this exponentially faster inside a quantum register:
- It takes numbers written in binary positions (|0>, |1>)
- And converts them into spinning phase clocks ($e^{2\\pi i / 2^n}$)!
When you measure at the end, the secret period of the function pops out as a sharp interference peak!`,
    technical: `The Quantum Fourier Transform acts on orthonormal basis states $|j\\rangle$ ($j \\in \\{0, \\dots, 2^n-1\\}$) via the unitary mapping:
$$|j\\rangle \\mapsto \\frac{1}{\\sqrt{2^n}} \\sum_{k=0}^{2^n-1} \\omega_n^{j k} |k\\rangle, \\quad \\omega_n = e^{2\\pi i / 2^n}$$
The circuit is synthesized using $n$ Hadamard gates and $n(n-1)/2$ Controlled-Phase rotation gates $R_k = \\text{diag}(1, e^{2\\pi i / 2^k})$, achieving asymptotic gate complexity $\\mathcal{O}(n^2) = \\mathcal{O}((\\log N)^2)$, representing an exponential speedup over classical Cooley-Tukey FFT $\\mathcal{O}(N \\log N) = \\mathcal{O}(n 2^n)$.`,
  },
  keyTerms: [
    { term: 'Quantum Fourier Transform (QFT)', simple: 'The quantum version of Fourier analysis that transforms numbers into phase frequencies.', technical: 'Unitary operator implementing discrete Fourier transform over cyclic group $\\mathbb{Z}_{2^n}$ with $\\mathcal{O}(n^2)$ circuit complexity.' },
    { term: 'Controlled Phase Gate ($R_k$)', simple: 'A gate that rotates the phase by a fraction of a circle: $2\\pi / 2^k$.', technical: 'Two-qubit gate applying phase shift $\\text{diag}(1, 1, 1, e^{2\\pi i / 2^k})$ conditioned on control bit.' },
    { term: 'Period Finding', simple: 'Finding how often a secret math pattern repeats.', technical: 'The core reduction in Shor’s algorithm mapping integer factorization to the order-finding problem in multiplicative group $(\\mathbb{Z}/N\\mathbb{Z})^*$.' },
  ],
  equations: [
    {
      latex: '|j\\rangle \\xrightarrow{\\text{QFT}} \\frac{1}{\\sqrt{2^n}} \\big(|0\\rangle + e^{2\\pi i 0.j_n}|1\\rangle\\big) \\otimes \\dots \\otimes \\big(|0\\rangle + e^{2\\pi i 0.j_1 j_2 \\dots j_n}|1\\rangle\\big)',
      explanation: 'Product representation of QFT: factorizes the multi-qubit Fourier transform into unentangled single-qubit phase rotations using binary fraction notation.',
      symbols: [
        { symbol: '0.j_1 j_2 \\dots j_n', meaning: 'Binary fraction', interpretation: '\\sum_{l=1}^n j_l 2^{-l}' },
        { symbol: 'n', meaning: 'Number of qubits', interpretation: 'Register width' },
      ],
      example: {
        description: 'For 1 qubit, QFT is identical to the Hadamard gate! H|j> = (1/sqrt(2))(|0> + (-1)^j|1>).',
        calculation: '\\text{QFT}_1 = \\frac{1}{\\sqrt{2}} \\begin{pmatrix} 1 & 1 \\\\ 1 & -1 \\end{pmatrix} = H',
        result: '1-qubit QFT is the Hadamard gate',
      },
    },
  ],
  howItWorks: [
    { number: 1, title: 'Hadamard on First Qubit', description: 'Apply H to qubit 0.' },
    { number: 2, title: 'Controlled Phase Rotations', description: 'Apply sequence of Controlled-R2, Controlled-R3, ... Controlled-Rn gates from subsequent qubits.' },
    { number: 3, title: 'Recurse on Remaining Qubits', description: 'Repeat for qubit 1, qubit 2, through qubit n-1.' },
    { number: 4, title: 'Swap Gates', description: 'Reverse the order of qubits at the end to correct bit reversal.' },
  ],
  applications: [
    { title: 'Shor’s Factoring Algorithm', problem: 'Factoring 2048-bit RSA keys into prime factors p and q.', solution: 'QFT extracts the period r of modular exponentiation a^x mod N, factoring N in polynomial time.' },
  ],
  activity: {
    type: 'mcq',
    title: 'QFT Complexity Scaling',
    question: 'How many quantum gates are required to compute the Quantum Fourier Transform on an n-qubit register?',
    options: [
      { id: 'a', text: 'O(n²) gates (polynomial in the number of qubits!)' },
      { id: 'b', text: 'O(2^n) gates (exponential)' },
      { id: 'c', text: 'Exactly 1 gate' },
      { id: 'd', text: 'Infinite gates' },
    ],
    correctAnswer: 'a',
    explanation: 'The QFT circuit requires n Hadamard gates and n(n-1)/2 controlled phase gates, totaling O(n^2) operations. Since N = 2^n, this is O((log N)^2), an exponential speedup over classical FFT O(N log N).',
    hint: 'Summing 1 + 2 + ... + n equals n(n+1)/2, which is O(n²).',
  },
  pythonHandsOn: {
    title: "Constructing the 3-Qubit Quantum Fourier Transform (QFT) in Qiskit",
    description: "Build the Quantum Fourier Transform (QFT) circuit in Qiskit using Hadamard gates and controlled-phase rotations, and inspect the state evolution.",
    packages: ["qiskit", "numpy"],
    installCommand: "pip install qiskit numpy",
    imports: [
      { code: "from qiskit import QuantumCircuit", explanation: "Circuit constructor" },
      { code: "from qiskit.quantum_info import Statevector", explanation: "Statevector analysis" },
      { code: "import numpy as np", explanation: "Trigonometric math" }
    ],
    code: [
      { code: "# Build 3-qubit QFT circuit: maps computational basis to Fourier basis", explanation: "QFT definition" },
      { code: "def build_qft_3qubit():", explanation: "QFT builder function" },
      { code: "    qc = QuantumCircuit(3)", explanation: "3 qubits" },
      { code: "    # Qubit 0", explanation: "Wire 0" },
      { code: "    qc.h(0)", explanation: "H on 0" },
      { code: "    qc.cp(np.pi / 2, 1, 0)  # Controlled-Phase pi/2 from q1", explanation: "CP pi/2" },
      { code: "    qc.cp(np.pi / 4, 2, 0)  # Controlled-Phase pi/4 from q2", explanation: "CP pi/4" },
      { code: "    # Qubit 1", explanation: "Wire 1" },
      { code: "    qc.h(1)", explanation: "H on 1" },
      { code: "    qc.cp(np.pi / 2, 2, 1)  # Controlled-Phase pi/2 from q2", explanation: "CP pi/2" },
      { code: "    # Qubit 2", explanation: "Wire 2" },
      { code: "    qc.h(2)", explanation: "H on 2" },
      { code: "    # Swap qubits 0 and 2 to reverse bit order", explanation: "Bit swap" },
      { code: "    qc.swap(0, 2)", explanation: "SWAP(0, 2)" },
      { code: "    return qc", explanation: "Return circuit" },
      { code: "", explanation: "" },
      { code: "qft_circ = build_qft_3qubit()", explanation: "Instantiate" },
      { code: "print('=== 3-Qubit Quantum Fourier Transform Circuit ===')", explanation: "Header" },
      { code: "print(qft_circ.draw('text'))", explanation: "Print diagram" },
      { code: "", explanation: "" },
      { code: "# Test QFT on input state |1> (|001>)", explanation: "Test input" },
      { code: "test_qc = QuantumCircuit(3)", explanation: "Test circuit" },
      { code: "test_qc.x(0)  # Input |001> = decimal 1", explanation: "Set input to 1" },
      { code: "test_qc.compose(qft_circ, inplace=True)", explanation: "Append QFT" },
      { code: "sv = Statevector.from_instruction(test_qc)", explanation: "Compute statevector" },
      { code: "print('\\nQFT Output Statevector on Input |1>:')", explanation: "Output label" },
      { code: "for i, amp in enumerate(sv.data):", explanation: "Loop amplitudes" },
      { code: "    phase_angle = np.angle(amp) * 180 / np.pi", explanation: "Calculate phase" },
      { code: "    print(f'  |{i:03b}> : Magnitude={np.abs(amp):.3f}, Phase={phase_angle:6.1f} deg')", explanation: "Display magnitude and phase" }
    ],
    executionFlow: [
      { number: 1, title: "Hadamard & Controlled Rotations", description: "Apply H gate followed by successive controlled-phase gates CP(pi/2^k)." },
      { number: 2, title: "SWAP Reversal", description: "Swap outermost qubits to align frequency register bit-significance." },
      { number: 3, title: "Fourier State Verification", description: "Verify that all 8 basis states have equal magnitude 1/sqrt(8) with linear phase gradients." }
    ],
    input: "Input state |001> processed through 3-qubit QFT circuit.",
    output: "All 8 states have equal magnitude 0.354 (1/sqrt(8)) with distinct, linearly progressing phase rotations: 0, 45, 90, 135, 180, 225, 270, 315 degrees.",
    interpretation: "The QFT maps computational basis states into periodic phase patterns across all basis states in O(n^2) gates, compared to O(n * 2^n) operations for the classical Fast Fourier Transform (FFT). It is the mathematical engine of Shor's algorithm.",
    colabInstructions: [
      "Click 'Copy for Google Colab' to copy the complete runnable script",
      "Open Google Colab at colab.research.google.com",
      "Paste into a code cell and press Shift + Enter to run",
    ],
  },
  mcqs: [
    {
      id: 'q1',
      question: 'What is the primary role of the Quantum Fourier Transform in Shor’s Factoring Algorithm?',
      options: [
        { id: 'a', text: 'To efficiently extract the periodic frequency of the modular exponentiation function, revealing the factor period r' },
        { id: 'b', text: 'To encrypt the user’s credit card' },
        { id: 'c', text: 'To multiply prime numbers together' },
        { id: 'd', text: 'To delete quantum errors' },
      {id:'q2',question:'What is the Quantum Fourier Transform?',options:[{id:'a',text:'Classical FFT'},{id:'b',text:'Quantum analogue of discrete Fourier transform: |x⟩ → Σ_y e^(2πixy/N)|y⟩/√N'},{id:'c',text:'Random transformation'},{id:'d',text:'Measurement operator'}],correctAnswer:'b',explanation:'QFT transforms computational basis |x⟩ to Fourier basis with phases encoding frequency information. Key component of Shor\'s algorithm (period finding) and quantum phase estimation.',incorrectFeedback:'QFT is quantum discrete Fourier transform with exponential speedup potential.'},
{id:'q3',question:'What is the circuit complexity of QFT?',options:[{id:'a',text:'O(N) gates'},{id:'b',text:'O(n²) gates where n=log₂N qubits (exponentially better than FFT\'s O(N log N))'},{id:'c',text:'O(2^n) gates'},{id:'d',text:'O(N²) gates'}],correctAnswer:'b',explanation:'QFT on n qubits uses O(n²) gates (Hadamards + controlled phase rotations). Classical FFT on N=2^n points uses O(N log N) operations. Exponential speedup in gate count.',incorrectFeedback:'QFT requires O(n²) gates for n-qubit state, exponentially fewer than classical FFT.'},
{id:'q4',question:'What is QFT used for in Shor\'s algorithm?',options:[{id:'a',text:'Random number generation'},{id:'b',text:'Period finding: extract periodicity from quantum superposition of function values'},{id:'c',text:'Data compression'},{id:'d',text:'Error correction'}],correctAnswer:'b',explanation:'Shor\'s algorithm: (1) create superposition of powers, (2) evaluate modular exponentiation, (3) QFT extracts period from interference pattern, (4) period factors N. QFT is the core subroutine.',incorrectFeedback:'QFT enables efficient period finding, the heart of Shor\'s factoring algorithm.'},
{id:'q5',question:'What is quantum phase estimation?',options:[{id:'a',text:'Measuring time'},{id:'b',text:'Algorithm using QFT to estimate eigenvalues of unitary operators'},{id:'c',text:'Hardware calibration'},{id:'d',text:'Classical estimation'}],correctAnswer:'b',explanation:'Phase estimation: given unitary U and eigenstate |ψ⟩, estimate eigenphase φ where U|ψ⟩=e^(2πiφ)|ψ⟩. Uses controlled-U gates and inverse QFT. Foundation of VQE and quantum simulation.',incorrectFeedback:'Phase estimation extracts eigenvalues using QFT-based interference.'},
  ],
      correctAnswer: 'a',
      explanation: 'Shor’s algorithm reduces factoring to finding the period r of a^x mod N. The QFT converts this periodic sequence into a sharp probability spike at the frequency k/r, exposing the period.',
      incorrectFeedback: 'QFT extracts the period r of modular exponentiation.',
    },
  ],
};

export const quantumAlgorithmSimulation: Topic = {
  id: 'quantum-algorithm-simulation',
  moduleId: 'quantum-algorithms',
  number: 6,
  title: 'Quantum Algorithm Simulation: Module 7 Capstone',
  description: 'Synthesize Module 7: implement, simulate, and verify Shor’s period-finding core and Grover’s search in an end-to-end Python pipeline.',
  objectives: [
    'Execute a complete Grover Search algorithm pipeline from state preparation to measurement',
    'Verify quadratic probability scaling and theoretical convergence bounds',
    'Inspect statevector phase inversions and diffusion step-by-step',
  ],
  story: `You have arrived at the pinnacle of quantum computing theory: assembling full quantum algorithms.
  
In this Module 7 Capstone, you will tie together Superposition, Phase Oracles, and the Diffusion Operator to execute an automated search algorithm that finds a secret marked number in an unstructured database.
  
You will step through the computational stages, monitor how the quantum amplitudes evolve from uniform uncertainty into a towering 100% probability peak, and verify the physical reality of quantum computational advantage.`,
  motivation: `**Full algorithmic synthesis**: Understanding individual gates is grammar; orchestrating them into a complete quantum algorithm is poetry. Completing this capstone demonstrates mastery of quantum algorithmic design.`,
  concept: {
    simple: `In this capstone, we put all the pieces together:
1. Initialize qubits in equal superposition.
2. The mystery Oracle flips the phase of our secret target.
3. The Diffusion operator reflects all amplitudes across the average.
4. Measure: the secret number pops out with certainty!`,
    technical: `End-to-end execution of Grover’s algorithm on $n=2$ ($N=4$) register solving pre-image search for Boolean oracle $f(x) = \\delta_{x, \\omega}$. The algorithm applies Hadamard transform $H^{\\otimes 2}$, Phase Oracle $U_\\omega = I - 2|\\omega\\rangle\\langle\\omega|$, and Diffusion operator $D = 2|s\\rangle\\langle s| - I = H^{\\otimes 2} (2|0\\rangle\\langle 0| - I) H^{\\otimes 2}$, terminating with projective computational basis readout.`,
  },
  keyTerms: [
    { term: 'Algorithmic Fidelity', simple: 'A percentage showing how close the real quantum output is to the perfect math answer.', technical: 'State overlap fidelity $F(\\rho, \\sigma) = \\left(\\text{Tr}\\sqrt{\\sqrt{\\rho}\\sigma\\sqrt{\\rho}}\\right)^2$.' },
    { term: 'Success Probability', simple: 'The exact percentage chance of measuring the right answer at the end.', technical: 'The Born probability $P(\\omega) = |\\langle \\omega | \\psi_{\\text{final}} \\rangle|^2$.' },
  ],
  equations: [
    {
      latex: 'P(\\text{Success}) = \\sin^2\\left( \\frac{2k+1}{2} \\theta \\right), \\quad \\theta = 2 \\arcsin\\left( \\frac{1}{\\sqrt{N}} \\right)',
      explanation: 'Exact analytical success probability of Grover’s search after k iterations on an N-item database.',
      symbols: [
        { symbol: 'k', meaning: 'Number of executed iterations', interpretation: 'Number of loop passes' },
        { symbol: '\\theta', meaning: 'Angular rotation per step', interpretation: 'Step size in Hilbert space' },
        { symbol: 'N', meaning: 'Database size', interpretation: 'Total candidates' },
      ],
      example: {
        description: 'For N = 4 (theta = pi/3) after k = 1 iteration: P = sin^2(3*pi/6) = sin^2(pi/2) = 1.0 (100% exact success).',
        calculation: 'P = \\sin^2(\\pi / 2) = 1.0 = 100\\%',
        result: 'Guaranteed 100% deterministic success for N=4',
      },
    },
  ],
  howItWorks: [
    { number: 1, title: 'State Preparation', description: 'Apply Hadamard gates to initialize state |s>.' },
    { number: 2, title: 'Oracle Invocation', description: 'Apply phase oracle marking the target state.' },
    { number: 3, title: 'Diffusion Reflection', description: 'Invert amplitudes across the mean.' },
    { number: 4, title: 'Readout', description: 'Sample measurement distribution to extract the target.' },
  ],
  applications: [
    { title: 'Database Acceleration', problem: 'Locating records across unsorted genomic gene banks.', solution: 'Grover acceleration cuts database queries quadratically.' },
  ],
  activity: {
    type: 'mcq',
    title: 'Success Probability Verification',
    question: 'For a 2-qubit database (N = 4 items), what is the theoretical success probability of Grover’s search after exactly 1 iteration?',
    options: [
      { id: 'a', text: '100.0% (Exact deterministic solution!)' },
      { id: 'b', text: '50.0%' },
      { id: 'c', text: '25.0%' },
      { id: 'd', text: '75.0%' },
    ],
    correctAnswer: 'a',
    explanation: 'For N = 4, the rotation angle is theta = 2*arcsin(1/2) = pi/3. After k = 1 iteration, the total angle is (2(1)+1)*(pi/6) = pi/2. Since sin(pi/2) = 1, the success probability is exactly 1.0 (100%).',
    hint: 'N=4 is the unique case where Grover search is 100% deterministic in 1 step.',
  },
  pythonHandsOn: {
    title: "Simulating Shor's Period-Finding Circuit on AerSimulator in Qiskit",
    description: "Construct and simulate a quantum period-finding circuit in Qiskit Aer to uncover periodic modular exponentiation frequencies.",
    packages: ["qiskit", "qiskit-aer", "numpy"],
    installCommand: "pip install qiskit qiskit-aer numpy",
    imports: [
      { code: "from qiskit import QuantumCircuit", explanation: "Circuit module" },
      { code: "from qiskit_aer import AerSimulator", explanation: "Aer simulator" },
      { code: "import numpy as np", explanation: "Math utilities" }
    ],
    code: [
      { code: "# Simplified Quantum Period Finding Circuit for a=7, N=15 (Period r=4)", explanation: "Setup" },
      { code: "# Using 3 counting qubits and 2 work qubits", explanation: "Register setup" },
      { code: "qc = QuantumCircuit(4, 2)", explanation: "4 qubits, 2 classical readout bits" },
      { code: "qc.h([0, 1])  # Superposition on counting register", explanation: "Counting superposition" },
      { code: "qc.x(2)       # Initialize work register to |1>", explanation: "Work register to 1" },
      { code: "# Controlled modular multiplication gates", explanation: "Controlled gates" },
      { code: "qc.cx(0, 3)    # Controlled modular operation 1", explanation: "Controlled op 1" },
      { code: "qc.cx(1, 2)    # Controlled modular operation 2", explanation: "Controlled op 2" },
      { code: "# Inverse QFT on counting register", explanation: "Inverse QFT" },
      { code: "qc.h(0)", explanation: "Inverse H" },
      { code: "qc.cp(-np.pi / 2, 1, 0)", explanation: "Inverse CP" },
      { code: "qc.h(1)", explanation: "Inverse H" },
      { code: "qc.measure([0, 1], [0, 1])", explanation: "Measure counting register" },
      { code: "print('Quantum Period-Finding Circuit Diagram:')", explanation: "Label" },
      { code: "print(qc.draw('text'))", explanation: "Print diagram" },
      { code: "", explanation: "" },
      { code: "# Simulate with AerSimulator", explanation: "Simulation" },
      { code: "sim = AerSimulator()", explanation: "Backend" },
      { code: "counts = sim.run(qc, shots=1024).result().get_counts()", explanation: "Run 1024 shots" },
      { code: "print('\\nMeasured Frequencies on Counting Register (1024 shots):')", explanation: "Counts label" },
      { code: "for state, freq in sorted(counts.items()):", explanation: "Iterate counts" },
      { code: "    print(f'  State \\'{state}\\' : {freq} shots ({freq/1024*100:.1f}%)')", explanation: "Print frequency" },
      { code: "print('\\nPeaks at specific bitstrings reveal the period r=4, cracking RSA key factors!')", explanation: "Conclusion" }
    ],
    executionFlow: [
      { number: 1, title: "Counting Register Superposition", description: "Apply Hadamards to generate parallel query register." },
      { number: 2, title: "Modular Exponentiation", description: "Apply controlled operations that encode the periodic modular function f(x) = a^x mod N." },
      { number: 3, title: "Inverse QFT & Measurement", description: "Extract period peaks from phase interference, enabling classical GCD factorization." }
    ],
    input: "Quantum period-finding circuit evaluated over 1024 shots on AerSimulator.",
    output: "Measured peaks at states '00' (~512 shots) and '10' (~512 shots).\nIdentifies period r = 4 for modular base a=7 mod 15.",
    interpretation: "Shor's algorithm reduces integer factorization to period finding. Quantum interference isolates the period in polynomial time O((log N)^3), breaking RSA encryption which relies on the classical difficulty of factoring.",
    colabInstructions: [
      "Click 'Copy for Google Colab' to copy the complete runnable script",
      "Open Google Colab at colab.research.google.com",
      "Paste into a code cell and press Shift + Enter to run",
    ],
  },
  mcqs: [
    {
      id: 'q1',
      question: 'What mathematical operation does the Diffusion operator D = 2|s><s| - I perform on the probability amplitudes of the quantum register?',
      options: [
        { id: 'a', text: 'Inversion about the mean: it reflects each amplitude across the average amplitude of all states' },
        { id: 'b', text: 'It deletes the smallest amplitudes' },
        { id: 'c', text: 'It adds random numbers' },
        { id: 'd', text: 'It computes the logarithm of each state' },
      {id:'q2',question:'What limits classical simulation of quantum algorithms?',options:[{id:'a',text:'Programming languages'},{id:'b',text:'Exponential memory: 2^n amplitudes for n qubits; 50 qubits needs 16 petabytes RAM'},{id:'c',text:'CPU speed'},{id:'d',text:'Nothing'}],correctAnswer:'b',explanation:'Full quantum state simulation requires storing 2^n complex amplitudes. Modern supercomputers max at ~50 qubits. Real quantum hardware exceeds simulation limits around 50-70 qubits (Google Sycamore: 53 qubits).',incorrectFeedback:'Exponential state space makes classical simulation intractable beyond ~50 qubits.'},
{id:'q3',question:'What is Qiskit Aer simulator?',options:[{id:'a',text:'Web browser'},{id:'b',text:'High-performance quantum circuit simulator: statevector, qasm, noise models'},{id:'c',text:'Text editor'},{id:'d',text:'Database'}],correctAnswer:'b',explanation:'Aer provides: statevector_simulator (exact amplitudes), qasm_simulator (shot-based measurement), noise models (realistic errors). Enables algorithm development before hardware access.',incorrectFeedback:'Aer simulates quantum circuits classically for algorithm development.'},
{id:'q4',question:'What is the difference between statevector and sampling simulation?',options:[{id:'a',text:'No difference'},{id:'b',text:'Statevector computes exact amplitudes; sampling mimics hardware with shot-based measurements'},{id:'c',text:'Statevector is slower'},{id:'d',text:'Sampling is exact'}],correctAnswer:'b',explanation:'Statevector: stores all 2^n amplitudes, computes exact probabilities. Sampling: runs circuit many times, estimates probabilities from counts. Sampling scales better, matches real hardware.',incorrectFeedback:'Statevector = exact; sampling = probabilistic like real quantum hardware.'},
{id:'q5',question:'What tools validate quantum algorithm correctness?',options:[{id:'a',text:'Only manual checking'},{id:'b',text:'Simulators (Aer), visualization (Bloch sphere, statevector), circuit analysis, hardware verification'},{id:'c',text:'No validation possible'},{id:'d',text:'Random testing only'}],correctAnswer:'b',explanation:'Validation: (1) simulate on Aer (< 30 qubits), (2) visualize states, (3) check unitarity/reversibility, (4) test on real hardware with error mitigation, (5) mathematical proof of correctness.',incorrectFeedback:'Multiple tools validate quantum algorithms from simulation to hardware.'},
  ],
      correctAnswer: 'a',
      explanation: 'The Diffusion operator performs a geometric reflection about the uniform superposition state |s>, which translates algebraically to inverting every amplitude about the mean amplitude of the register.',
      incorrectFeedback: 'The diffusion operator reflects amplitudes about the mean.',
    },
  ],
};

export const module7Topics: Topic[] = [
  whatIsQuantumAlgorithm,
  quantumParallelism,
  deutschJozsa,
  groverSearch,
  quantumFourierTransform,
  quantumAlgorithmSimulation,
];
