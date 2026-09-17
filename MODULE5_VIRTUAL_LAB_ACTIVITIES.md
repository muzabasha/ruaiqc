# Module 5: Quantum Foundations — Learn by Doing Virtual Lab Manual
### Four-Level Pedagogical Model: *I Do (Teacher) → We Do (Teacher & Students) → You Do Together (All Students) → You Do Alone (Individual Student)*
### Featuring: Interactive 3D Q-Sphere State & Gate Demonstration

---

## Pedagogical Structure

This manual provides a **Learn by Doing Virtual Lab** curriculum for all 15 topics in **Module 5: Quantum Foundations** (REVA University FDP RU AI QC):
1. **Level 1 — Teacher Activity (*I Do*)**: Demonstration and concept setup.
2. **Level 2 — Teacher & Student Collaborative Activity (*We Do*)**: Guided co-investigation, parameter sweeps, and hypothesis testing.
3. **Level 3 — All Students Collaborative Activity (*You Do Together*)**: Small group / peer pod hands-on challenges and cross-verification.
4. **Level 4 — Individual Student Activity (*You Do Alone*)**: Independent solo mastery challenge with complete mathematical and simulation solutions.

---

## Interactive 3D Q-Sphere & Qubit State Visualizer

The interactive Q-Sphere component (`components/QSphereVisualizer.tsx`) provides:
- **3D Statevector Projection**: Shows $|\psi\rangle = \cos(\theta/2)|0\rangle + e^{i\phi}\sin(\theta/2)|1\rangle$ on the unit sphere with drag-to-orbit camera controls.
- **Node Size = Probability**: Radius of North Pole $|0\rangle$ and South Pole $|1\rangle$ markers scales as $\sqrt{P}$.
- **Node Color = Phase**: Maps complex phase $\phi \in [0, 2\pi)$ to an HSL color wheel ($0^\circ$: Red, $90^\circ$: Green, $180^\circ$: Cyan, $270^\circ$: Purple).
- **Unitary Gate Keypad**: Live application of $H, X, Y, Z, S, S^\dagger, T, T^\dagger, R_x, R_y, R_z$.
- **Born Rule Collapse**: Real-time measurement projection animation into $|0\rangle$ or $|1\rangle$ with multi-shot statistics.

---

## Topic 1: Why Learn Quantum Computing? The Post-Moore Era

### Level 1: Teacher Activity (*I Do*)
- **Objective**: Demonstrate exponential classical RAM failure ($2^n \times 16$ bytes) vs. physical $n$-qubit scaling.
- **Python Code**:
  ```python
  import numpy as np

  qubit_counts = [10, 20, 30, 40, 50, 60, 275]
  print(f"{'Qubits (n)':<12}{'Amplitudes (2^n)':<25}{'Classical RAM Required':<25}")
  print("-" * 62)
  for n in qubit_counts:
      amplitudes = 2**n
      ram_bytes = amplitudes * 16
      if ram_bytes < 1024**3:
          ram_str = f"{ram_bytes / (1024**2):.2f} MB"
      elif ram_bytes < 1024**4:
          ram_str = f"{ram_bytes / (1024**3):.2f} GB"
      elif ram_bytes < 1024**5:
          ram_str = f"{ram_bytes / (1024**4):.2f} TB"
      elif ram_bytes < 1024**6:
          ram_str = f"{ram_bytes / (1024**5):.2f} Petabytes (PB)"
      else:
          ram_str = f"{ram_bytes / (1024**8):.2e} Yottabytes (YB)"
      print(f"{n:<12}{amplitudes:<25,}{ram_str:<25}")
  ```
- **Output**:
  - $n=10$: $1,024$ amplitudes $\rightarrow$ $0.02\text{ MB}$.
  - $n=30$: $1,073,741,824$ amplitudes $\rightarrow$ $16.00\text{ GB}$ (laptop RAM ceiling).
  - $n=50$: $1.12 \times 10^{15}$ amplitudes $\rightarrow$ $16.00\text{ Petabytes}$ (supercomputer limit).
  - $n=275$: $2^{275} \approx 6.07 \times 10^{82} \rightarrow$ exceeds total particles in observable universe.

### Level 2: Teacher & Student (*We Do*)
- **Objective**: Collaboratively benchmark the physical memory threshold where student laptops trigger `MemoryError`.
- **Code**:
  ```python
  import numpy as np
  for n in range(20, 34, 2):
      try:
          size = 2**n
          mem_gb = (size * 16) / (1024**3)
          print(f"Allocating n={n} ({size:,} amplitudes = {mem_gb:.2f} GB)...", end="")
          vec = np.zeros(size, dtype=np.complex128)
          print(" SUCCESS!")
          del vec
      except MemoryError:
          print(f" FAILED! Crash at n={n}.")
          break
  ```
- **Outcome**: 8 GB laptops crash at $n=28$; 16 GB laptops crash at $n=30$.

### Level 3: All Students (*You Do Together*)
- **Objective**: Calculate simulation requirements for Caffeine ($160$ spin-orbitals) vs. Penicillin ($286$ spin-orbitals).
- **Solution**:
  - Caffeine: $\dim = 2^{160} \approx 1.46 \times 10^{48}$ complex numbers $\rightarrow 2.34 \times 10^{37}\text{ TB}$.
  - Penicillin: $\dim = 2^{286} \approx 9.38 \times 10^{85}$ numbers $\rightarrow$ exceeds total atoms in universe ($10^{80}$).

### Level 4: Individual Student (*You Do Alone*)
- **Task**: For a $0.9\text{ nm}$ silicon oxide gate barrier (silicon atomic diameter $= 0.234\text{ nm}$):
  1. Calculate barrier thickness in atoms: $\frac{0.9}{0.234} \approx 3.84 \approx 3 - 4$ atoms.
  2. Identify leakage mechanism: **Quantum Tunneling**.
  3. Hilbert space dimension for $n=42$ qubits: $\dim = 2^{42} = 4,398,046,511,104$ states ($70.37\text{ TB}$ RAM).

---

## Topic 2: History of Quantum Computing

### Level 1: Teacher Activity (*I Do*)
- **Demonstration**: Chronological milestone mapper from Feynman (1981), Deutsch (1985), Shor (1994), Grover (1996), Sycamore (2019) to Condor (2023).

### Level 2: Teacher & Student (*We Do*)
- **Objective**: Contrast RSA-2048 factoring: Classical GNFS ($> 10^{30}$ ops, billions of years) vs. Shor's algorithm ($(\log_2 N)^3 \approx 8.58 \times 10^9$ ops, minutes to hours).

### Level 3: All Students (*You Do Together*)
- **Objective**: Hardware platforms comparative table (Superconducting, Trapped Ion, Neutral Atom, Photonic, Silicon Spin).

### Level 4: Individual Student (*You Do Alone*)
- **Task**: Compute Grover search iterations on AES-128 ($N = 2^{128}$) vs. classical brute force.
  - Classical: $2^{127} \approx 1.70 \times 10^{38}$ queries.
  - Grover: $\frac{\pi}{4}\sqrt{2^{128}} \approx 1.45 \times 10^{19}$ queries.
  - Deduction: Grover halves key strength ($n \rightarrow n/2$); AES-256 provides $2^{128}$ quantum security.

---

## Topic 3: Classical vs Quantum Computing

### Level 1: Teacher Activity (*I Do*)
- **Demonstration**: Continuous $SU(2)$ rotation on the unit sphere vs. discrete Boolean switching $\{0, 1\}$.

### Level 2: Teacher & Student (*We Do*)
- **Objective**: Landauer's Principle: classical AND gate irreversibility vs. quantum reversible Toffoli gate ($U^\dagger U = I$).

### Level 3: All Students (*You Do Together*)
- **Objective**: Construct feature matrix: Bit vs. Qubit, Boolean logic vs. Unitary transforms, cloning vs. No-Cloning theorem.

### Level 4: Individual Student (*You Do Alone*)
- **Task**: Compute Landauer erasure energy $E = k_B T \ln 2$ at $T=300\text{ K}$ ($2.87 \times 10^{-21}\text{ J/bit}$). Power at $10^{11}\text{ bits/s} = 2.87 \times 10^{-10}\text{ W}$. Ideal quantum processor dissipates $0\text{ W}$ informational heat.

---

## Topic 4: What is Quantum Computing?

### Level 1: Teacher Activity (*I Do*)
- **Demonstration**: 4-step quantum lifecycle: Initialization $\rightarrow$ Superposition $\rightarrow$ Unitary Phase Interference $\rightarrow$ Measurement.

### Level 2: Teacher & Student (*We Do*)
- **Objective**: Verify $H^2 = I$ on single qubit using Q-Sphere and Qiskit.

### Level 3: All Students (*You Do Together*)
- **Objective**: Construct 2-qubit DiVincenzo pipeline (Bell state $|\Phi^+\rangle$) verifying joint entanglement and individual readouts.

### Level 4: Individual Student (*You Do Alone*)
- **Task**: Matrix multiplication proof that $H \times H = I_2$.

---

## Topic 5: Quantum Mechanics Basics

### Level 1: Teacher Activity (*I Do*)
- **Demonstration**: Young's double-slit interference pattern and wavefunction collapse upon detector observation.

### Level 2: Teacher & Student (*We Do*)
- **Objective**: Calculate transmon qubit gap $E = hf$ at $5\text{ GHz}$ ($3.31 \times 10^{-24}\text{ J}$) vs. thermal noise $k_B T$ at $300\text{ K}$ ($4.14 \times 10^{-21}\text{ J}$, $1250\times$ higher) vs. $15\text{ mK}$ ($0.06\times$).

### Level 3: All Students (*You Do Together*)
- **Objective**: Simulate Heisenberg uncertainty $\Delta x \Delta p \ge \hbar/2$ via Gaussian wavepackets and FFT.

### Level 4: Individual Student (*You Do Alone*)
- **Task**: De Broglie wavelength for $100\text{V}$ electron: $\lambda = \frac{h}{\sqrt{2m_e qV}} = 0.1226\text{ nm}$ (matches silicon crystal lattice).

---

## Topic 6: The Classical Bit

### Level 1: Teacher Activity (*I Do*)
- **Demonstration**: CMOS inverter Voltage Transfer Characteristic (VTC) restoring noisy inputs back to $0\text{V}$ or $V_{DD}$.

### Level 2: Teacher & Student (*We Do*)
- **Objective**: Build Half Adder ($\text{Sum} = A \oplus B, \text{Carry} = A \cdot B$) and verify truth table.

### Level 3: All Students (*You Do Together*)
- **Objective**: Plot Shannon entropy $H(X) = -p\log_2 p - (1-p)\log_2(1-p)$; peak at $p=0.5$ ($1\text{ bit}$).

### Level 4: Individual Student (*You Do Alone*)
- **Task**: 8-bit ASCII register: holds 1 state at clock cycle $t$. 8-qubit register holds all 256 states simultaneously in superposition.

---

## Topic 7: The Qubit (Quantum Bit)

### Level 1: Teacher Activity (*I Do*)
- **Demonstration**: Column matrix representation $|0\rangle = \begin{pmatrix} 1 \\ 0 \end{pmatrix}, |1\rangle = \begin{pmatrix} 0 \\ 1 \end{pmatrix}$, orthonormality $\langle 0|1\rangle = 0$, and normalization $\langle\psi|\psi\rangle = 1$.

### Level 2: Teacher & Student (*We Do*)
- **Objective**: Apparatus alignment simulation: rotate detector by $\theta$; probability $P = \cos^2(\theta/2)$. Sweep $\theta \in [0^\circ, 180^\circ]$.

### Level 3: All Students (*You Do Together*)
- **Objective**: Normalize raw vectors: $|\psi_A\rangle = 3|0\rangle + 4|1\rangle \rightarrow \frac{3}{5}|0\rangle + \frac{4}{5}|1\rangle$ ($P(0)=36\%, P(1)=64\%$).

### Level 4: Individual Student (*You Do Alone*)
- **Task**: Outer product projector $\Pi = |\phi\rangle\langle\phi|$ for $|\phi\rangle = \frac{1}{\sqrt{5}}|0\rangle + \frac{2i}{\sqrt{5}}|1\rangle$; prove $\Pi^2 = \Pi$.

---

## Topic 8: Quantum State & Dirac Notation

### Level 1: Teacher Activity (*I Do*)
- **Demonstration**: Bloch sphere coordinate mapping: $x = \sin\theta\cos\phi, y = \sin\theta\sin\phi, z = \cos\theta$.

### Level 2: Teacher & Student (*We Do*)
- **Objective**: State overlap and fidelity: $F = |\langle\psi|\phi\rangle|^2$ between $|+\rangle$ and $\cos(\pi/8)|0\rangle + \sin(\pi/8)|1\rangle$ ($F = 85.36\%$).

### Level 3: All Students (*You Do Together*)
- **Objective**: Reconstruct 4 mystery Bloch states from angles, kets, and coordinates.

### Level 4: Individual Student (*You Do Alone*)
- **Task**: Prove that states orthogonal in Hilbert space ($\langle\psi_1|\psi_2\rangle = 0$) are separated by $\pi$ ($180^\circ$, antipodal) on the Bloch sphere ($\vec{r}_1 \cdot \vec{r}_2 = -1$).

---

## Topic 9: Quantum Superposition

### Level 1: Teacher Activity (*I Do*)
- **Demonstration**: Equal superposition via Hadamard transform $H^{\otimes 3}|000\rangle$; verify 8 states with amplitude $1/\sqrt{8} \approx 0.3536$ on Q-Sphere.

### Level 2: Teacher & Student (*We Do*)
- **Objective**: Synthesize biased superposition: $P(0)=80\%, P(1)=20\%$ using $R_y(\theta)$ with $\theta = 2\arccos(\sqrt{0.8}) \approx 53.13^\circ$.

### Level 3: All Students (*You Do Together*)
- **Objective**: Construct 3-qubit W-state: $|W\rangle = \frac{1}{\sqrt{3}}(|001\rangle + |010\rangle + |100\rangle)$; verify zero amplitude for $|000\rangle$ and $|111\rangle$.

### Level 4: Individual Student (*You Do Alone*)
- **Task**: Compute $Z|+\rangle = |-\rangle$. Show computational basis probabilities remain $50/50$, but phase shifts by $\pi$ on South Pole.

---

## Topic 10: Quantum Measurement & Wavefunction Collapse

### Level 1: Teacher Activity (*I Do*)
- **Demonstration**: Sequential measurement in Qiskit: second measurement matches first with $100\%$ certainty ($00$ or $11$, never $01$ or $10$).

### Level 2: Teacher & Student (*We Do*)
- **Objective**: Quantum Zeno Effect: freeze state evolution via frequent projective measurements ($P_{\text{freeze}} \to 1.0$ as $N \to \infty$).

### Level 3: All Students (*You Do Together*)
- **Objective**: Measure in $X$-basis (apply $H$ before measure) and $Y$-basis (apply $S^\dagger H$ before measure).

### Level 4: Individual Student (*You Do Alone*)
- **Task**: Compute expectation values $\langle Z \rangle = 0.50$ and $\langle X \rangle = \frac{\sqrt{3}}{2} \approx 0.866$ for $|\psi\rangle = \frac{\sqrt{3}}{2}|0\rangle + \frac{1}{2}|1\rangle$.

---

## Topic 11: Probability Amplitude & Born Rule

### Level 1: Teacher Activity (*I Do*)
- **Demonstration**: Complex amplitude addition ($A_1 + A_2 = 0.5 - 0.5 = 0 \rightarrow P = 0$) vs. classical probability sum ($0.25 + 0.25 = 0.50$).

### Level 2: Teacher & Student (*We Do*)
- **Objective**: Measure $1/\sqrt{N}$ shot noise convergence: verify error drops below $0.1\%$ at $N = 100,000$ shots.

### Level 3: All Students (*You Do Together*)
- **Objective**: Global phase invariance ($e^{i\theta}|\psi\rangle$ undetectable) vs. relative phase observable sensitivity ($\cos^2(\theta/2)$).

### Level 4: Individual Student (*You Do Alone*)
- **Task**: 3-level qutrit: $|\psi\rangle = \frac{1}{\sqrt{14}}|0\rangle + \frac{2i}{\sqrt{14}}|1\rangle + \frac{3}{\sqrt{14}}|2\rangle$. Subspace $\text{span}\{|0\rangle, |1\rangle\}$ has $P = 5/14 \approx 35.71\%$; collapsed state is $\frac{1}{\sqrt{5}}|0\rangle + \frac{2i}{\sqrt{5}}|1\rangle$.

---

## Topic 12: Quantum Entanglement & Bell States

### Level 1: Teacher Activity (*I Do*)
- **Demonstration**: Construct $|\Phi^+\rangle = \frac{|00\rangle + |11\rangle}{\sqrt{2}}$ using $H$ and $\text{CNOT}$; prove mathematical non-factorizability.

### Level 2: Teacher & Student (*We Do*)
- **Objective**: CHSH Bell inequality violation: evaluate $S = 2\sqrt{2} \approx 2.828 > 2.0$, disproving local hidden variable theories.

### Level 3: All Students (*You Do Together*)
- **Objective**: Synthesize all 4 Bell states using local Pauli operations on Alice's qubit alone ($(I, Z, X, Y) \otimes I$).

### Level 4: Individual Student (*You Do Alone*)
- **Task**: Reduced density matrix $\rho_A = \text{Tr}_B(|\Phi^+\rangle\langle\Phi^+|) = \frac{1}{2}I_2$; local von Neumann entropy $S(\rho_A) = 1.0\text{ bit}$ (No-Signaling Theorem).

---

## Topic 13: Quantum Interference

### Level 1: Teacher Activity (*I Do*)
- **Demonstration**: Mach-Zehnder interferometer analog ($H \rightarrow R_z(\phi) \rightarrow H$); probability $P(0) = \cos^2(\phi/2)$.

### Level 2: Teacher & Student (*We Do*)
- **Objective**: Implement Deutsch Algorithm: distinguish Constant vs. Balanced oracle in a single query via destructive interference.

### Level 3: All Students (*You Do Together*)
- **Objective**: Track Grover diffusion operator ($D = 2|\psi\rangle\langle\psi| - I$); verify marked state amplification to $100\%$.

### Level 4: Individual Student (*You Do Alone*)
- **Task**: Interference of non-orthogonal states: normalization denominator $2\cos(\theta/2)$; constructive at $\theta=0$, destructive at $\theta=\pi$.

---

## Topic 14: Real-World Quantum Applications

### Level 1: Teacher Activity (*I Do*)
- **Demonstration**: BB84 QKD simulation: eavesdropper Eve induces $\approx 25\%$ Quantum Bit Error Rate (QBER), detecting interception.

### Level 2: Teacher & Student (*We Do*)
- **Objective**: Molecular $H_2$ ground-state simulation via VQE: optimize ansatz parameter $\theta$ to reach $-1.137\text{ Hartree}$.

### Level 3: All Students (*You Do Together*)
- **Objective**: Industrial use-case classification matrix (Simulation, Optimization, Linear Algebra).

### Level 4: Individual Student (*You Do Alone*)
- **Task**: Formulate 2-node Max-Cut Ising Hamiltonian $H_C = \frac{1}{2}Z_0 Z_1 - \frac{1}{2}I$; ground state energy $-1.0$ at opposite spins $|01\rangle$ and $|10\rangle$.

---

## Topic 15: Quantum Limitations, Noise & No-Cloning Theorem

### Level 1: Teacher Activity (*I Do*)
- **Demonstration**: Proof of No-Cloning Theorem: $U|\psi\rangle|0\rangle = |\psi\rangle|\psi\rangle$ implies $\langle\psi|\phi\rangle = (\langle\psi|\phi\rangle)^2$, which is only satisfied if states are identical or orthogonal.

### Level 2: Teacher & Student (*We Do*)
- **Objective**: Simulate bit-flip and phase-flip noise channels in Qiskit; trace purity loss from $1.0$ (pure) to $0.5$ (mixed).

### Level 3: All Students (*You Do Together*)
- **Objective**: Calculate circuit depth limit from $T_2 = 140\ \mu\text{s}$ and $t_{2q} = 300\text{ ns}$ ($\sim 466$ layers); surface code overhead ($\sim 1,458$ physical qubits per logical qubit).

### Level 4: Individual Student (*You Do Alone*)
- **Task**: Implement 3-Qubit Bit-Flip code with syndrome detection and Toffoli recovery, restoring corrupted state without collapsing superposition.
