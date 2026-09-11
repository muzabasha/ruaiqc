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
    title: 'Comparing Classical vs Quantum Algorithmic Scaling in Python',
    description: 'Plot runtime curves for Classical Brute Force, Grover Quadratic, and Shor Exponential.',
    packages: ['numpy'],
    installCommand: 'pip install numpy',
    imports: [{ code: 'import numpy as np', explanation: 'NumPy math' }],
    code: [
      { code: '# Problem sizes N (Search space: 1,000 to 1,000,000 items)', explanation: 'Sizes' },
      { code: 'N = np.array([1000, 10000, 100000, 1000000])', explanation: 'Array' },
      { code: '', explanation: '' },
      { code: '# Classical Search: O(N) queries on average (N/2)', explanation: 'Classical' },
      { code: 'classical_queries = N / 2', explanation: 'N/2' },
      { code: '', explanation: '' },
      { code: '# Grover Quantum Search: O(sqrt(N)) queries (pi/4 * sqrt(N))', explanation: 'Grover' },
      { code: 'grover_queries = (np.pi / 4) * np.sqrt(N)', explanation: 'pi/4 * sqrt(N)' },
      { code: '', explanation: '' },
      { code: 'print("Database Size | Classical Queries | Grover Quantum Queries | Speedup")', explanation: 'Header' },
      { code: 'print("-" * 65)', explanation: 'Line' },
      { code: 'for n_items, c_q, g_q in zip(N, classical_queries, grover_queries):', explanation: 'Loop' },
      { code: '    speedup = c_q / g_q', explanation: 'Ratio' },
      { code: '    print(f"{n_items:13,d} | {int(c_q):17,d} | {int(g_q):22,d} | {speedup:6.1f}x")', explanation: 'Row' },
    ],
    executionFlow: [
      { number: 1, title: 'Complexity Evaluation', description: 'Calculates query scaling across 4 orders of magnitude.' },
      { number: 2, title: 'Speedup Growth', description: 'Shows quadratic Grover speedup growing from 20x to 636x as dataset scales to 1 million items.' },
    ],
    input: 'Database sizes [1k, 10k, 100k, 1M]',
    output: 'Database Size | Classical Queries | Grover Quantum Queries | Speedup\n-----------------------------------------------------------------\n        1,000 |               500 |                     24 |   20.1x\n       10,000 |             5,000 |                     78 |   63.7x\n      100,000 |            50,000 |                    248 |  201.3x\n    1,000,000 |           500,000 |                    785 |  636.6x',
    interpretation: 'Grover’s algorithm reduces search from 500,000 steps down to just 785 steps on a 1-million item database.',
    colabInstructions: ['Run in Google Colab.'],
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
    title: 'Simulating Phase Kickback in Python',
    description: 'Demonstrate phase kickback using a CNOT oracle and state |-> in Python.',
    packages: ['numpy'],
    installCommand: 'pip install numpy',
    imports: [{ code: 'import numpy as np', explanation: 'NumPy' }],
    code: [
      { code: '# Input qubit in superposition |+> = (|0> + |1>) / sqrt(2)', explanation: 'Input |+>' },
      { code: '# Target qubit in state |-> = (|0> - |1>) / sqrt(2)', explanation: 'Target |->' },
      { code: 'H = (1 / np.sqrt(2)) * np.array([[1, 1], [1, -1]])', explanation: 'H' },
      { code: 'ket_plus = np.dot(H, np.array([1, 0]))  # |+>', explanation: '|+>' },
      { code: 'ket_minus = np.dot(H, np.array([0, 1])) # |->', explanation: '|->' },
      { code: '', explanation: '' },
      { code: '# Combined 2-qubit state: |+> (x) |->', explanation: 'Joint state' },
      { code: 'state_in = np.kron(ket_plus, ket_minus)', explanation: 'Input tensor' },
      { code: '', explanation: '' },
      { code: '# CNOT Oracle: computes f(x) = x (flips target if input is 1)', explanation: 'CNOT matrix' },
      { code: 'CNOT = np.array([', explanation: 'Matrix' },
      { code: '    [1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]', explanation: 'Standard CNOT' },
      { code: '])', explanation: 'Close' },
      { code: '', explanation: '' },
      { code: '# Run oracle:', explanation: 'Execute' },
      { code: 'state_out = np.dot(CNOT, state_in)', explanation: 'CNOT @ state_in' },
      { code: '', explanation: '' },
      { code: '# Factor out target |-> to see what happened to input qubit:', explanation: 'Analyze input' },
      { code: '# Input qubit flipped from |+> to |-> due to phase kickback!', explanation: 'Result' },
      { code: 'expected_out = np.kron(ket_minus, ket_minus)', explanation: '|-> (x) |->' },
      { code: 'print("Kickback Verified:", np.allclose(state_out, expected_out))', explanation: 'True' },
      { code: 'print("Input qubit started as |+> and was kicked into |->!")', explanation: 'Explanation' },
    ],
    executionFlow: [
      { number: 1, title: 'Input Setup', description: 'Prepares input in |+> and target in |->.' },
      { number: 2, title: 'Phase Kickback Execution', description: 'CNOT leaves target in |->, but kicks phase back to input, converting input from |+> into |->.' },
    ],
    input: 'State |+> ⊗ |-> through CNOT oracle',
    output: 'Kickback Verified: True\nInput qubit started as |+> and was kicked into |->!',
    interpretation: 'Phase kickback transferred the oracle answer directly into the phase of the input qubit without measuring the target.',
    colabInstructions: ['Run in Google Colab.'],
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
    title: 'Simulating the Deutsch-Jozsa Algorithm in Python',
    description: 'Simulate the complete Deutsch-Jozsa algorithm on a balanced function in Python.',
    packages: ['numpy'],
    installCommand: 'pip install numpy',
    imports: [{ code: 'import numpy as np', explanation: 'NumPy linear algebra' }],
    code: [
      { code: '# 1-Qubit Deutsch problem: f(x) is balanced (f(0)=0, f(1)=1)', explanation: 'Balanced f(x)=x' },
      { code: 'H = (1 / np.sqrt(2)) * np.array([[1, 1], [1, -1]])', explanation: 'Hadamard' },
      { code: '', explanation: '' },
      { code: '# Initialize: q0=|0>, q1=|1>', explanation: 'Initial state' },
      { code: 'q0 = np.array([1, 0])', explanation: '|0>' },
      { code: 'q1 = np.array([0, 1])', explanation: '|1>' },
      { code: '', explanation: '' },
      { code: '# Apply Hadamard to both: q0 -> |+>, q1 -> |->', explanation: 'Superposition' },
      { code: 'state_in = np.kron(np.dot(H, q0), np.dot(H, q1))', explanation: '|+> (x) |->' },
      { code: '', explanation: '' },
      { code: '# Balanced Oracle: CNOT gate computes f(x) = x', explanation: 'Oracle' },
      { code: 'CNOT = np.array([[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]])', explanation: 'CNOT matrix' },
      { code: 'state_after_oracle = np.dot(CNOT, state_in)', explanation: 'Single query!' },
      { code: '', explanation: '' },
      { code: '# Apply final Hadamard to input qubit q0 (H (x) I):', explanation: 'Final H on q0' },
      { code: 'I = np.eye(2)', explanation: 'Identity' },
      { code: 'state_final = np.dot(np.kron(H, I), state_after_oracle)', explanation: 'Apply H to q0' },
      { code: '', explanation: '' },
      { code: '# Measure q0: basis [|00>, |01>, |10>, |11>]', explanation: 'Measurement' },
      { code: 'p_q0_is_0 = state_final[0]**2 + state_final[1]**2', explanation: 'P(q0 = 0)' },
      { code: 'p_q0_is_1 = state_final[2]**2 + state_final[3]**2', explanation: 'P(q0 = 1)' },
      { code: 'print(f"P(q0 = 0) [Constant Sign]: {p_q0_is_0:.1%}")', explanation: 'Should be 0%' },
      { code: 'print(f"P(q0 = 1) [Balanced Sign]: {p_q0_is_1:.1%}")', explanation: 'Should be 100%' },
      { code: 'result = "BALANCED" if p_q0_is_1 > 0.99 else "CONSTANT"', explanation: 'Verdict' },
      { code: 'print(f"Quantum Verdict in EXACTLY ONE QUERY: {result}!")', explanation: 'Display verdict' },
    ],
    executionFlow: [
      { number: 1, title: 'Single Oracle Pass', description: 'Evaluates balanced oracle once.' },
      { number: 2, title: 'Interference Collapse', description: 'Amplitude for q0=0 cancels to 0.0; amplitude for q0=1 reaches 100%.' },
      { number: 3, title: 'Definitive Output', description: 'Outputs BALANCED with 100% certainty.' },
    ],
    input: 'Balanced function f(x)=x tested with 1 quantum query',
    output: 'P(q0 = 0) [Constant Sign]: 0.0%\nP(q0 = 1) [Balanced Sign]: 100.0%\nQuantum Verdict in EXACTLY ONE QUERY: BALANCED!',
    interpretation: 'A single quantum query definitively classified the function, while a classical computer would require multiple queries.',
    colabInstructions: ['Run in Google Colab.'],
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
    title: 'Simulating 2-Qubit Grover’s Search in Python',
    description: 'Run Grover’s algorithm on 4 items to find the target state |11> in exactly 1 iteration.',
    packages: ['numpy'],
    installCommand: 'pip install numpy',
    imports: [{ code: 'import numpy as np', explanation: 'NumPy' }],
    code: [
      { code: '# 2 Qubits -> N = 4 items (|00>, |01>, |10>, |11>)', explanation: 'Search space N=4' },
      { code: '# For N=4, optimal iterations R = (pi/4)*sqrt(4) = pi/4 * 2 = 1.57 -> EXACTLY 1 iteration achieves 100%!', explanation: 'Optimal R=1' },
      { code: 'target_idx = 3 # We want to find state |11> (index 3)', explanation: 'Target |11>' },
      { code: '', explanation: '' },
      { code: '# Step 1: Initialize uniform superposition |s> = [0.5, 0.5, 0.5, 0.5]', explanation: 'Step 1' },
      { code: 'state = np.full(4, 0.5)', explanation: 'Uniform state' },
      { code: 'print("Initial Amplitudes (Equal):", state)', explanation: 'Print init' },
      { code: '', explanation: '' },
      { code: '# Step 2: Phase Oracle (Flip sign of target index 3):', explanation: 'Step 2' },
      { code: 'state[target_idx] *= -1 # [0.5, 0.5, 0.5, -0.5]', explanation: 'Phase flip' },
      { code: 'print("After Oracle Phase Flip:     ", state)', explanation: 'Print oracle' },
      { code: '', explanation: '' },
      { code: '# Step 3: Diffusion Operator (Inversion about mean): new = 2*mean - old', explanation: 'Step 3' },
      { code: 'mean_amp = np.mean(state) # (0.5 + 0.5 + 0.5 - 0.5) / 4 = 1.0 / 4 = 0.25', explanation: 'Compute mean' },
      { code: 'state = 2 * mean_amp - state', explanation: 'Reflect about mean' },
      { code: 'print("After Diffusion (Inversion): ", state.round(3))', explanation: 'Print diffusion' },
      { code: '', explanation: '' },
      { code: '# Probability check:', explanation: 'Probabilities' },
      { code: 'probs = state**2', explanation: 'Born rule' },
      { code: 'print(f"\\nProbability of finding target |11>: {probs[3]:.1%}")', explanation: '100%!' },
    ],
    executionFlow: [
      { number: 1, title: 'Equal Start', description: 'All 4 items have amplitude 0.5 (25% probability each).' },
      { number: 2, title: 'Oracle', description: 'Inverts target to -0.5, shifting mean to 0.25.' },
      { number: 3, title: 'Diffusion', description: 'Inversion about mean: non-targets become 2*(0.25) - 0.5 = 0.0; target becomes 2*(0.25) - (-0.5) = 1.0! Exact 100.0% probability!' },
    ],
    input: '4-item database searched with 1 Grover iteration',
    output: 'Initial Amplitudes (Equal): [0.5 0.5 0.5 0.5]\nAfter Oracle Phase Flip:      [ 0.5  0.5  0.5 -0.5]\nAfter Diffusion (Inversion):  [0. 0. 0. 1.]\n\nProbability of finding target |11>: 100.0%',
    interpretation: 'In exactly 1 iteration, Grover’s algorithm amplified the target to 100% probability while extinguishing all other candidates.',
    colabInstructions: ['Run in Google Colab.'],
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
    title: 'Constructing the 2-Qubit QFT Matrix in Python',
    description: 'Calculate the 4x4 QFT matrix using complex roots of unity in Python.',
    packages: ['numpy'],
    installCommand: 'pip install numpy',
    imports: [{ code: 'import numpy as np', explanation: 'NumPy' }],
    code: [
      { code: '# 2-Qubit QFT matrix dimension N = 2^2 = 4', explanation: 'N=4' },
      { code: 'N = 4', explanation: '4 basis states' },
      { code: 'omega = np.exp(2j * np.pi / N) # omega = e^(2*pi*i / 4) = i', explanation: 'Primitive root of unity' },
      { code: '', explanation: '' },
      { code: '# Construct NxN QFT matrix: QFT[j, k] = omega^(j*k) / sqrt(N)', explanation: 'Matrix loop' },
      { code: 'QFT = np.zeros((N, N), dtype=complex)', explanation: 'Empty complex matrix' },
      { code: 'for j in range(N):', explanation: 'Row j' },
      { code: '    for k in range(N):', explanation: 'Col k' },
      { code: '        QFT[j, k] = (omega ** (j * k)) / np.sqrt(N)', explanation: 'Formula' },
      { code: '', explanation: '' },
      { code: 'print("2-Qubit QFT Matrix (4x4):")', explanation: 'Header' },
      { code: 'print(QFT.round(2))', explanation: 'Show matrix' },
      { code: '', explanation: '' },
      { code: '# Verify Unitarity: QFT_dagger @ QFT == Identity', explanation: 'Unitary check' },
      { code: 'is_unit = np.allclose(np.dot(np.conj(QFT.T), QFT), np.eye(N))', explanation: 'Check identity' },
      { code: 'print("\\nIs QFT perfectly Unitary?", is_unit)', explanation: 'True' },
    ],
    executionFlow: [
      { number: 1, title: 'Roots of Unity Matrix', description: 'Generates 4x4 discrete Fourier matrix using powers of omega = e^(i*pi/2) = i.' },
      { number: 2, title: 'Unitarity Verification', description: 'Confirms QFT_dagger @ QFT = I.' },
    ],
    input: '4x4 discrete Fourier matrix definition',
    output: '2-Qubit QFT Matrix (4x4):\n[[ 0.5 +0.j   0.5 +0.j   0.5 +0.j   0.5 +0.j ]\n [ 0.5 +0.j   0.  +0.5j -0.5 +0.j  -0.  -0.5j]\n [ 0.5 +0.j  -0.5 +0.j   0.5 +0.j  -0.5 +0.j ]\n [ 0.5 +0.j  -0.  -0.5j -0.5 +0.j   0.  +0.5j]]\n\nIs QFT perfectly Unitary? True',
    interpretation: 'The QFT matrix distributes computational basis states into orthogonal harmonic phase frequencies across the register.',
    colabInstructions: ['Run in Google Colab.'],
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
    title: 'Complete Grover Search Algorithm Pipeline in Python',
    description: 'Execute a full Grover search pipeline searching for secret item 2 (|10>) in Python.',
    packages: ['numpy'],
    installCommand: 'pip install numpy',
    imports: [{ code: 'import numpy as np', explanation: 'NumPy linear algebra' }],
    code: [
      { code: '# Secret target we want the quantum computer to find: target = 2 (|10>)', explanation: 'Target 2' },
      { code: 'secret_target = 2', explanation: 'Secret = 2' },
      { code: 'N = 4 # 2 qubits', explanation: '4 items' },
      { code: '', explanation: '' },
      { code: '# 1. State Preparation: Uniform Superposition |s>:', explanation: 'Init |s>' },
      { code: 'H = (1 / np.sqrt(2)) * np.array([[1, 1], [1, -1]])', explanation: 'H' },
      { code: 'H2 = np.kron(H, H) # 2-qubit Hadamard', explanation: 'H2' },
      { code: 'state = np.dot(H2, np.array([1, 0, 0, 0])) # |s> = [0.5, 0.5, 0.5, 0.5]', explanation: 'Equal state' },
      { code: '', explanation: '' },
      { code: '# 2. Phase Oracle U_omega = I - 2|target><target|:', explanation: 'Phase Oracle' },
      { code: 'oracle = np.eye(N)', explanation: 'Identity' },
      { code: 'oracle[secret_target, secret_target] = -1.0 # Flip phase of target 2', explanation: 'Flip target' },
      { code: 'state = np.dot(oracle, state)', explanation: 'Apply oracle' },
      { code: '', explanation: '' },
      { code: '# 3. Diffusion Operator D = 2|s><s| - I:', explanation: 'Diffusion' },
      { code: 'ket_s = np.full((N, 1), 1.0 / np.sqrt(N))', explanation: 'Vector |s>' },
      { code: 'diffusion = 2 * np.dot(ket_s, ket_s.T) - np.eye(N)', explanation: '2|s><s| - I' },
      { code: 'state = np.dot(diffusion, state)', explanation: 'Apply diffusion' },
      { code: '', explanation: '' },
      { code: '# 4. Measurement Probability Readout:', explanation: 'Measurement' },
      { code: 'probabilities = state**2', explanation: 'Born rule' },
      { code: 'print("Measurement Probability Distribution:")', explanation: 'Header' },
      { code: 'for i in range(N):', explanation: 'Loop over 4 states' },
      { code: '    bin_str = format(i, "02b")', explanation: '00 to 11' },
      { code: '    marker = " <-- TARGET FOUND!" if i == secret_target else ""', explanation: 'Marker' },
      { code: '    print(f"  |{bin_str}> (State {i}): {probabilities[i]:6.1%}{marker}")', explanation: 'Row' },
    ],
    executionFlow: [
      { number: 1, title: 'State Initialization', description: 'Starts with 4 states each having 25.0% probability.' },
      { number: 2, title: 'Oracle & Diffusion', description: 'Phase oracle marks state 2 (|10>), and diffusion amplifies it.' },
      { number: 3, title: '100% Convergence', description: 'State 2 reaches 100.0% probability, while all other states drop to 0.0%.' },
    ],
    input: 'Secret target index 2 (|10>)',
    output: 'Measurement Probability Distribution:\n  |00> (State 0):   0.0%\n  |01> (State 1):   0.0%\n  |10> (State 2): 100.0% <-- TARGET FOUND!\n  |11> (State 3):   0.0%',
    interpretation: 'The full Grover pipeline successfully discovered secret item |10> with 100% deterministic quantum confidence in a single iteration.',
    colabInstructions: ['Run in Google Colab.'],
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
