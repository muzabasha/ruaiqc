import { Topic } from '@/lib/types';
import { qLearning } from './q-learning';

export const whatIsRL: Topic = {
  id: 'what-is-rl',
  moduleId: 'reinforcement-learning',
  number: 1,
  title: 'What is Reinforcement Learning? Sequential Decision Making',
  description: 'Understand the science of learning to act: how agents navigate dynamic worlds to maximize long-term cumulative reward.',
  objectives: [
    'Contrast Reinforcement Learning with Supervised and Unsupervised Learning',
    'Understand sequential decision-making where actions influence future observations',
    'Formulate problems as Markov Decision Processes (MDPs)',
    'Grasp the concept of the Credit Assignment problem',
  ],
  story: `In March 2016 in Seoul, South Korea, 200 million people watched as Lee Sedol, the legendary 18-time world champion of Go, sat down across from a computer program named AlphaGo.
  
Go is an ancient game with more legal board configurations than there are atoms in the observable universe ($10^{170}$). Brute-force search was impossible. Expert consensus believed computers were decades away from defeating a grandmaster.
  
AlphaGo did not have a human grandmaster whispering moves. It learned by playing millions of games against copies of itself using Reinforcement Learning. On Move 37 of Game 2, AlphaGo placed a stone on the shoulder of the board—a move no human professional would ever play. Commentators gasped, calling it a mistake. But 50 moves later, that exact stone decided the game.
  
AlphaGo had discovered strategies unknown to 3,000 years of human Go history through pure trial, error, and reinforcement.`,
  motivation: `**The pinnacle of autonomous agency**: While supervised learning passively answers questions, reinforcement learning interacts with reality. From robotics to drug discovery and autonomous trading, RL builds agents that take action in an uncertain world.`,
  concept: {
    simple: `Reinforcement Learning is like learning to ride a bicycle. Nobody can explain the physics to you in words. You get on the bike, wobble, lean too far right, and fall (ouch!). You try again, lean slightly left, pedal faster, and suddenly you stay upright (success!). Through trial and error, your brain figures out the sequence of muscle actions needed to balance.`,
    technical: `Reinforcement Learning formalizes optimal control within a Markov Decision Process (MDP) $\\mathcal{M} = \\langle \\mathcal{S}, \\mathcal{A}, \\mathcal{P}, \\mathcal{R}, \\gamma \\rangle$. An agent samples transitions $(s_t, a_t, r_t, s_{t+1})$, seeking a policy $\\pi(a|s)$ that maximizes expected cumulative discounted return: $\\mathbb{E}_\\pi [\\sum_{t=0}^\\infty \\gamma^t r_t]$.`,
  },
  keyTerms: [
    { term: 'Markov Decision Process (MDP)', simple: 'The mathematical sandbox that defines the world the agent lives in.', technical: 'A 5-tuple $\\langle \\mathcal{S}, \\mathcal{A}, \\mathcal{P}, \\mathcal{R}, \\gamma \\rangle$ satisfying the Markov property $P(s_{t+1}|s_t, a_t, \\dots, s_0) = P(s_{t+1}|s_t, a_t)$.' },
    { term: 'Credit Assignment Problem', simple: 'Figuring out which specific past action was responsible for winning or losing later.', technical: 'The temporal challenge of attributing delayed reward outcomes to intermediate causal actions across long horizons.' },
    { term: 'Return ($G_t$)', simple: 'The grand total of points collected from now until the end of the game.', technical: 'The discounted sum of future rewards: $G_t = \\sum_{k=0}^\\infty \\gamma^k R_{t+k+1}$.' },
  ],
  equations: [
    {
      latex: 'G_t = R_{t+1} + \\gamma R_{t+2} + \\gamma^2 R_{t+3} + \\dots = \\sum_{k=0}^{\\infty} \\gamma^k R_{t+k+1}',
      explanation: 'Discounted Return: the total cumulative reward an agent optimizes, where immediate rewards are valued more than distant future rewards.',
      symbols: [
        { symbol: 'G_t', meaning: 'Total discounted return', interpretation: 'Target payoff' },
        { symbol: '\\gamma', meaning: 'Discount factor (0 to 1)', interpretation: 'Temporal patience dial' },
        { symbol: 'R_t', meaning: 'Reward at time t', interpretation: 'Immediate feedback score' },
      ],
      example: {
        description: 'Receiving rewards [1, 2, 10] at steps 1, 2, 3 with discount factor gamma = 0.9.',
        calculation: 'G_0 = 1 + (0.9 \\times 2) + (0.9^2 \\times 10) = 1 + 1.8 + (0.81 \\times 10) = 1 + 1.8 + 8.1 = 10.9',
        result: 'Discounted return = 10.9',
      },
    },
  ],
  howItWorks: [
    { number: 1, title: 'Observation', description: 'Agent inspects current environment state s_t.' },
    { number: 2, title: 'Action Selection', description: 'Agent executes action a_t selected by policy pi(a|s).' },
    { number: 3, title: 'World Reaction', description: 'Environment computes new state s_{t+1} and returns reward r_{t+1}.' },
    { number: 4, title: 'Policy Optimization', description: 'Agent updates its internal value estimates to favor successful paths.' },
  ],
  applications: [
    { title: 'ChatGPT RLHF (Reinforcement Learning from Human Feedback)', problem: 'Raw language models generating harmful, hallucinated, or unhelpful answers.', solution: 'RL reward models train policy to maximize human satisfaction and conversational alignment.' },
    { title: 'Industrial Robotics', problem: 'Assembly robot inserting delicate cables into circuit boards without snapping wires.', solution: 'RL policy trained with tactile force sensors learns micro-adjustments via trial-and-error.' },
  ],
  activity: {
    type: 'mcq',
    title: 'Core Distinction Check',
    question: 'How does Reinforcement Learning fundamentally differ from Supervised Learning?',
    options: [
      { id: 'a', text: 'In RL there is no dataset of correct target answers; the agent must discover good actions by interacting with the world and observing rewards' },
      { id: 'b', text: 'RL cannot run on computers' },
      { id: 'c', text: 'Supervised learning does not use mathematics' },
      { id: 'd', text: 'RL only works for checkers' },
    ],
    correctAnswer: 'a',
    explanation: 'Unlike supervised learning which is provided with explicit input-label pairs, an RL agent must actively explore an environment to discover actions that maximize reward.',
    hint: 'Does the RL agent receive an answer key or does it explore and receive reward feedback?',
  },
  pythonHandsOn: {
    title: 'Simulating a Basic 1D GridWorld in Python',
    description: 'Build a minimal grid environment where an agent steps forward and backward to reach a goal.',
    packages: ['numpy'],
    installCommand: 'pip install numpy',
    imports: [{ code: 'import numpy as np', explanation: 'NumPy for random choices' }],
    code: [
      { code: '# 1D GridWorld: States 0, 1, 2, 3, 4 (Goal is state 4)', explanation: 'Setup' },
      { code: 'state = 0 # Start at position 0', explanation: 'Initial state' },
      { code: 'goal = 4  # Win state', explanation: 'Target' },
      { code: 'steps = 0', explanation: 'Step counter' },
      { code: '', explanation: '' },
      { code: '# Run random walk agent until goal is reached:', explanation: 'Agent loop' },
      { code: 'while state < goal:', explanation: 'Loop until win' },
      { code: '    # Actions: 0 = Left (-1), 1 = Right (+1)', explanation: 'Action space' },
      { code: '    action = np.random.choice([0, 1])', explanation: 'Sample action' },
      { code: '    if action == 1:', explanation: 'Right step' },
      { code: '        state = min(goal, state + 1)', explanation: 'Move right' },
      { code: '    else:', explanation: 'Left step' },
      { code: '        state = max(0, state - 1)', explanation: 'Move left' },
      { code: '    steps += 1', explanation: 'Increment steps' },
      { code: '', explanation: '' },
      { code: 'print(f"Goal reached at state {state} in {steps} random exploration steps!")', explanation: 'Display outcome' },
    ],
    executionFlow: [
      { number: 1, title: 'State Transition', description: 'Agent takes discrete steps across 1D line.' },
      { number: 2, title: 'Boundary Constraints', description: 'Agent cannot walk left of 0, and terminates upon reaching 4.' },
    ],
    input: '1D grid of 5 states',
    output: 'Goal reached at state 4 in ~14 random exploration steps!',
    interpretation: 'A random exploratory agent eventually reaches the goal, demonstrating the baseline exploration dynamics of RL environments.',
    colabInstructions: ['Run in Google Colab.'],
  },
  mcqs: [
    {
      id: 'q1',
      question: 'What is the "Credit Assignment Problem" in Reinforcement Learning?',
      options: [
        { id: 'a', text: 'Determining which actions in a long sequence of moves were responsible for an eventual delayed victory or defeat' },
        { id: 'b', text: 'Paying for cloud GPU computing bills' },
        { id: 'c', text: 'Assigning authorship to scientific papers' },
        { id: 'd', text: 'Encrypting student passwords' },
      {id:'q2',question:'What is the key difference between reinforcement learning and supervised learning?',options:[{id:'a',text:'RL learns from trial-and-error with rewards; supervised learning learns from labeled examples'},{id:'b',text:'RL is faster'},{id:'c',text:'Supervised learning uses neural networks'},{id:'d',text:'No difference'}],correctAnswer:'a',explanation:'Supervised learning: learn from (input, correct_output) pairs. RL: learn from (state, action, reward) sequences through interaction. RL discovers strategies; supervised learning mimics examples.',incorrectFeedback:'RL learns through environmental feedback (rewards), not pre-labeled data.'},
{id:'q3',question:'Which of these is a famous RL success story?',options:[{id:'a',text:'AlphaGo defeating world Go champion Lee Sedol (2016)'},{id:'b',text:'Excel spreadsheets'},{id:'c',text:'PDF readers'},{id:'d',text:'Text editors'}],correctAnswer:'a',explanation:'AlphaGo (DeepMind, 2016) mastered Go using deep RL, defeating 18-time world champion Lee Sedol 4-1. Other RL successes: AlphaZero (chess), OpenAI Five (Dota 2), robotics.',incorrectFeedback:'AlphaGo\'s Go mastery via RL was a landmark AI achievement.'},
{id:'q4',question:'What is the Markov Decision Process (MDP) in RL?',options:[{id:'a',text:'A type of neural network'},{id:'b',text:'Mathematical framework: states, actions, rewards, transitions satisfying Markov property'},{id:'c',text:'A programming language'},{id:'d',text:'A database'}],correctAnswer:'b',explanation:'MDP = (S, A, P, R, γ): States, Actions, transition Probabilities, Rewards, discount factor. Markov property: future depends only on current state, not history.',incorrectFeedback:'MDP formalizes sequential decision-making under uncertainty.'},
{id:'q5',question:'What does an RL agent aim to maximize?',options:[{id:'a',text:'Speed'},{id:'b',text:'Cumulative reward (return): G_t = Σ γ^k r_{t+k+1} over episode'},{id:'c',text:'Number of actions'},{id:'d',text:'Memory usage'}],correctAnswer:'b',explanation:'Agent maximizes expected cumulative discounted reward: G = r₁ + γr₂ + γ²r₃ + ... where γ ∈ [0,1] is discount factor. This is the return or value.',incorrectFeedback:'RL optimizes long-term cumulative rewards, not immediate gains.'},
  ],
      correctAnswer: 'a',
      explanation: 'When a game of chess is won after 60 moves, the credit assignment problem is figuring out which specific opening or middlegame moves were truly responsible for the win.',
      incorrectFeedback: 'Credit assignment is temporal attribution of delayed rewards to earlier causal decisions.',
    },
  ],
};

export const rlAgent: Topic = {
  id: 'rl-agent',
  moduleId: 'reinforcement-learning',
  number: 2,
  title: 'The RL Agent: Internal Architecture',
  description: 'Examine the components of an intelligent agent: the policy, the value function, and the internal environment model.',
  objectives: [
    'Dissect the three key components of an agent: Policy, Value Function, and Model',
    'Differentiate Model-Free vs Model-Based RL',
    'Differentiate Value-Based vs Policy-Based methods',
  ],
  story: `Imagine three chess players with radically different thinking styles:
  
1. **The Policy Player**: Plays purely on instinct. When they see a pinned knight, their policy immediately dictates: "Attack the pin!" No mental simulation needed.
2. **The Value Player**: Looks at the board and mentally scores every move: "If I move my bishop here, my board score is +2.4. If I move my rook, my score is +1.1. I will pick the +2.4 move."
3. **The Model-Based Player**: Sits quietly and plans ahead: "If I move pawn to d4, black will respond with knight to f6, then I can push c4..." They maintain a mental simulator of the rules of chess.
  
All three are valid RL agent architectures!`,
  motivation: `**Navigating the RL algorithm zoo**: Understanding whether an agent is model-free or model-based, policy-based or value-based, allows you to pick the right algorithm (PPO, DQN, SAC, or MuZero) for your problem.`,
  concept: {
    simple: `An RL Agent is the "brain" of the system. Inside the brain, it can have:
1. **A Policy**: "When I am in this situation, do this action."
2. **A Value Function**: "Being in this situation is worth 50 points."
3. **A Model**: "If I push this button, I predict the door will open."`,
    technical: `An RL agent is characterized by three core sub-components:
- **Policy $\\pi(a|s)$**: The mapping from states to action probabilities.
- **Value Function $V(s) = \\mathbb{E}[G_t|S_t=s]$**: Expected cumulative discounted return from state $s$.
- **Model $\\mathcal{P}_{ss'}^a, \\mathcal{R}_s^a$**: Internal representation approximating environment transitions and expected immediate rewards.`,
  },
  keyTerms: [
    { term: 'Model-Free RL', simple: 'The agent learns directly from experience without trying to build a simulator of the world.', technical: 'Algorithms (like Q-Learning and Policy Gradients) that optimize policies directly without learning transition dynamics $P(s\'|s,a)$.' },
    { term: 'Model-Based RL', simple: 'The agent learns how the world works so it can plan moves in its head before acting.', technical: 'Algorithms that approximate the environment transition model $\\hat{P}(s\'|s,a)$ to perform tree search or trajectory optimization.' },
    { term: 'Value Function $V(s)$', simple: 'How good it is to be in a given situation.', technical: 'State-value function measuring expected discounted return under policy $\\pi$.' },
  ],
  equations: [
    {
      latex: 'V^\\pi(s) = \\mathbb{E}_\\pi \\left[ \\sum_{k=0}^\\infty \\gamma^k R_{t+k+1} \\;\\middle|\\; S_t = s \\right]',
      explanation: 'State-Value Function: the expected return if the agent starts in state s and follows policy pi forever after.',
      symbols: [
        { symbol: 'V^\\pi(s)', meaning: 'Value of state s', interpretation: 'Desirability of being in state s' },
        { symbol: '\\mathbb{E}_\\pi', meaning: 'Expected value under policy pi', interpretation: 'Average outcome over stochastic runs' },
      ],
      example: {
        description: 'State near the goal has high expected value V=9.2; state trapped in a maze corner has low value V=0.1.',
        calculation: 'V(\\text{near\\_goal}) = 9.2 > V(\\text{trapped}) = 0.1',
        result: 'Agent prefers states with higher V(s)',
      },
    },
  ],
  howItWorks: [
    { number: 1, title: 'State Evaluation', description: 'Evaluate current state s using value function V(s) or Q(s,a).' },
    { number: 2, title: 'Action Generation', description: 'Sample action from stochastic policy or pick argmax of Q-values.' },
    { number: 3, title: 'Experience Ingestion', description: 'Collect transition tuple (s, a, r, s\') into memory buffer.' },
  ],
  applications: [
    { title: 'MuZero (DeepMind)', problem: 'Mastering games like Chess, Go, and Atari without ever being given the rules of the game.', solution: 'MuZero learns its own latent internal model of the environment dynamics.' },
  ],
  activity: {
    type: 'mcq',
    title: 'Model-Free vs Model-Based',
    question: 'A self-driving car agent learns to drive purely through trial and error in a simulator without any internal physics engine predicting how friction works. What type of RL is this?',
    options: [
      { id: 'a', text: 'Model-Free Reinforcement Learning' },
      { id: 'b', text: 'Model-Based Reinforcement Learning' },
      { id: 'c', text: 'Supervised Linear Regression' },
      { id: 'd', text: 'Unsupervised PCA' },
    ],
    correctAnswer: 'a',
    explanation: 'When an agent optimizes policies directly from trial-and-error experience without modeling environmental transition dynamics, it is Model-Free.',
    hint: 'Does the agent simulate physics internally or learn purely from raw experience?',
  },
  pythonHandsOn: {
    title: 'Evaluating State Values in Python',
    description: 'Calculate and compare state values for a simple 3-state chain.',
    packages: ['numpy'],
    installCommand: 'pip install numpy',
    imports: [{ code: 'import numpy as np', explanation: 'NumPy math' }],
    code: [
      { code: '# 3 States: [Start (0), Step (1), Goal (2)]', explanation: 'Environment setup' },
      { code: '# Reward +10 only upon reaching Goal', explanation: 'Reward vector' },
      { code: 'gamma = 0.9 # Discount factor', explanation: 'Discount parameter' },
      { code: '', explanation: '' },
      { code: '# Value of Goal (Terminal state) is 0', explanation: 'Terminal' },
      { code: 'V_goal = 0.0', explanation: 'V[2] = 0' },
      { code: '# Value of Step: immediate reward 10 to reach Goal', explanation: 'Step state' },
      { code: 'V_step = 10.0 + gamma * V_goal', explanation: 'V[1] = 10 + 0.9 * 0 = 10.0' },
      { code: '# Value of Start: immediate reward 0 to reach Step', explanation: 'Start state' },
      { code: 'V_start = 0.0 + gamma * V_step', explanation: 'V[0] = 0 + 0.9 * 10 = 9.0' },
      { code: '', explanation: '' },
      { code: 'print(f"Value of Start State V(0): {V_start:.1f}")', explanation: 'Display V(0)' },
      { code: 'print(f"Value of Step State  V(1): {V_step:.1f}")', explanation: 'Display V(1)' },
    ],
    executionFlow: [
      { number: 1, title: 'Backward Value Bellman Backup', description: 'Calculates future returns backwards: V(1)=10.0, V(0)=9.0.' },
      { number: 2, title: 'Gradient of Desire', description: 'Agent naturally seeks states with higher values: 0 -> 1 -> Goal.' },
    ],
    input: '3-state chain with reward at goal',
    output: 'Value of Start State V(0): 9.0\nValue of Step State  V(1): 10.0',
    interpretation: 'The discounted value function creates an uphill gradient toward the goal that the agent can climb.',
    colabInstructions: ['Run in Google Colab.'],
  },
  mcqs: [
    {
      id: 'q1',
      question: 'In reinforcement learning, what is a "Policy"?',
      options: [
        { id: 'a', text: 'The agent’s strategy or behavior function mapping states to actions' },
        { id: 'b', text: 'The terms of service document signed by users' },
        { id: 'c', text: 'The discount rate set by central banks' },
        { id: 'd', text: 'A firewall rule in a computer network' },
      {id:'q2',question:'What are the main components of an RL agent?',options:[{id:'a',text:'Only neural networks'},{id:'b',text:'Policy (action selection), value function (state evaluation), and optionally a model (environment dynamics)'},{id:'c',text:'Just random choices'},{id:'d',text:'Only sensors'}],correctAnswer:'b',explanation:'RL agent has: (1) Policy π(a|s) - what to do, (2) Value function V(s) or Q(s,a) - how good is state/action, (3) Optional model - predict next state/reward.',incorrectFeedback:'RL agents combine policy, value functions, and optionally world models.'},
{id:'q3',question:'What is the difference between model-based and model-free RL?',options:[{id:'a',text:'Model-based learns environment dynamics; model-free learns directly from experience'},{id:'b',text:'No difference'},{id:'c',text:'Model-based is always better'},{id:'d',text:'Model-free doesn\'t work'}],correctAnswer:'a',explanation:'Model-based: learn transition function P(s\',r|s,a), plan ahead. Model-free: learn policy/value directly (Q-learning, policy gradient). Model-free simpler but less sample-efficient.',incorrectFeedback:'Model-based uses learned world model; model-free learns control directly.'},
{id:'q4',question:'What is an on-policy vs off-policy RL algorithm?',options:[{id:'a',text:'On-policy learns from current policy; off-policy learns from any behavior policy'},{id:'b',text:'On-policy is faster'},{id:'c',text:'Off-policy is obsolete'},{id:'d',text:'They are identical'}],correctAnswer:'a',explanation:'On-policy (SARSA): update policy being followed. Off-policy (Q-learning): update target policy while following different exploration policy. Off-policy more data-efficient.',incorrectFeedback:'On-policy updates the policy being executed; off-policy can learn from other policies.'},
{id:'q5',question:'What is the credit assignment problem in RL?',options:[{id:'a',text:'Paying for compute'},{id:'b',text:'Determining which actions were responsible for eventual rewards (temporal credit assignment)'},{id:'c',text:'Assigning bugs to developers'},{id:'d',text:'Dividing datasets'}],correctAnswer:'b',explanation:'Credit assignment: which past action caused delayed reward? Example: in chess, which moves led to checkmate 20 moves later? Solved via temporal difference learning and eligibility traces.',incorrectFeedback:'Credit assignment attributes rewards to responsible actions across time.'},
  ],
      correctAnswer: 'a',
      explanation: 'The policy pi(a|s) defines the agent’s decision-making behavior, determining which action to choose when in state s.',
      incorrectFeedback: 'A policy defines the mapping from states to actions.',
    },
  ],
};

export const rlEnvironment: Topic = {
  id: 'rl-environment',
  moduleId: 'reinforcement-learning',
  number: 3,
  title: 'The Environment: Dynamics, Observability & Gym',
  description: 'Understand the world the agent inhabits: deterministic vs stochastic worlds, full vs partial observability, and the Gymnasium API.',
  objectives: [
    'Differentiate between Fully Observable (MDP) and Partially Observable (POMDP) environments',
    'Compare deterministic vs stochastic transition dynamics',
    'Master the standard Gymnasium (OpenAI Gym) API: reset(), step(), reward, done',
  ],
  story: `Imagine playing Chess versus playing Poker.
  
In **Chess**, both players can see every single piece on the 64 squares at all times. Nothing is hidden. This is a **Fully Observable Environment** (MDP).
  
In **Poker**, you cannot see your opponents' hidden hole cards, and you cannot see the future cards remaining in the deck. You must infer what cards they might hold based on their betting patterns under deep uncertainty. This is a **Partially Observable Markov Decision Process** (POMDP).
  
Building an AI for a fully observable world is vastly different from building one that can thrive in a world of hidden information.`,
  motivation: `**The interface of RL**: Every RL benchmark on earth—from robotics simulators to Atari games—uses the Gymnasium API standard. Mastering this interface is essential to train your own agents.`,
  concept: {
    simple: `The environment is the game or world the AI lives in:
- **Full Observability**: You can see everything (like chess).
- **Partial Observability**: You only see what’s in front of you through fog (like a first-person shooter or poker).
- **The Gym API**: The universal game controller:
  - ` + '`reset()`' + `: Restart the game.
  - ` + '`step(action)`' + `: Take a move and see what happens!`,
    technical: `In a POMDP $\\langle \\mathcal{S}, \\mathcal{A}, \\mathcal{O}, \\mathcal{P}, \\Omega, \\mathcal{R}, \\gamma \\rangle$, the agent does not receive the true state $s_t$, but rather an observation $o_t \\sim \\Omega(o|s_t)$, necessitating belief-state tracking $b(s) = P(S_t=s | h_t)$. Gymnasium abstracts this with discrete/continuous observation spaces ($Box$, $Discrete$).`,
  },
  keyTerms: [
    { term: 'Gymnasium (OpenAI Gym)', simple: 'The universal Python toolkit used to build and benchmark RL environments.', technical: 'The standardized Python interface exposing env.reset() and env.step(action) yielding (obs, reward, terminated, truncated, info).' },
    { term: 'Fully Observable (MDP)', simple: 'The agent can see the entire state of the world.', technical: 'An environment where observation $o_t$ equals true environmental state $s_t$.' },
    { term: 'Partially Observable (POMDP)', simple: 'The agent can only see part of the world; key information is hidden.', technical: 'An environment where observations provide incomplete sensory projections of the underlying Markov state.' },
  ],
  equations: [
    {
      latex: 's_{t+1} \\sim P(s_{t+1} \\mid s_t, a_t), \\quad r_{t+1} = R(s_t, a_t, s_{t+1})',
      explanation: 'Environmental Transition Dynamics: given current state s_t and chosen action a_t, the environment probabilistically determines the next state and returns a scalar reward.',
      symbols: [
        { symbol: 'P(s_{t+1}|s_t, a_t)', meaning: 'Transition probability distribution', interpretation: 'How the world changes' },
        { symbol: 'R', meaning: 'Reward function', interpretation: 'Points awarded for transition' },
      ],
      example: {
        description: 'A robot tries to move forward with slippery wheels: 80% chance it succeeds, 20% chance it slips and stays in place.',
        calculation: 'P(s+1 | s, \\text{forward}) = 0.8, \\quad P(s | s, \\text{forward}) = 0.2',
        result: 'Stochastic environment transition',
      },
    },
  ],
  howItWorks: [
    { number: 1, title: 'Environment Reset', description: 'obs, info = env.reset() initializes the world and returns initial sensory observation.' },
    { number: 2, title: 'Action Execution', description: 'obs, reward, terminated, truncated, info = env.step(action) updates physics.' },
    { number: 3, title: 'Termination Check', description: 'If terminated or truncated is True, episode ends and environment resets.' },
  ],
  applications: [
    { title: 'Robot Manipulation in Isaac Sim / MuJoCo', problem: 'Training physical bipedal humanoid robots without breaking expensive hardware.', solution: 'High-fidelity physics environments simulate gravity and joint friction at 10,000x real-time.' },
  ],
  activity: {
    type: 'mcq',
    title: 'Observability Check',
    question: 'A robot equipped only with a forward-facing camera navigates a maze. It cannot see behind itself or through walls. Is this environment Fully Observable or Partially Observable?',
    options: [
      { id: 'a', text: 'Partially Observable (POMDP)' },
      { id: 'b', text: 'Fully Observable (MDP)' },
      { id: 'c', text: 'Supervised Learning' },
      { id: 'd', text: 'Static Tabular' },
    ],
    correctAnswer: 'a',
    explanation: 'Because the camera only sees what is in front and cannot observe what is behind walls or in other rooms, the state information is incomplete, making it a POMDP.',
    hint: 'Does the robot have complete knowledge of the entire maze state at every instant?',
  },
  pythonHandsOn: {
    title: 'Interacting with a Gymnasium Environment',
    description: 'Run the standard Gymnasium interaction loop with random actions.',
    packages: ['numpy'],
    installCommand: '# Standard Gymnasium pattern simulation',
    imports: [{ code: 'import numpy as np', explanation: 'Array processing' }],
    code: [
      { code: '# A minimal Gymnasium-compliant Environment class:', explanation: 'Class structure' },
      { code: 'class SimpleCartPole:', explanation: 'Simulated environment' },
      { code: '    def __init__(self):', explanation: 'Constructor' },
      { code: '        self.pole_angle = 0.0', explanation: 'State: angle in degrees' },
      { code: '    def reset(self):', explanation: 'Reset method' },
      { code: '        self.pole_angle = np.random.uniform(-0.05, 0.05)', explanation: 'Slight random start' },
      { code: '        return np.array([self.pole_angle])', explanation: 'Return observation' },
      { code: '    def step(self, action):', explanation: 'Step method' },
      { code: '        # Action: 0 = Push Left, 1 = Push Right', explanation: 'Action space' },
      { code: '        force = 0.1 if action == 1 else -0.1', explanation: 'Apply force' },
      { code: '        self.pole_angle += force + np.random.normal(0, 0.02)', explanation: 'Physics update' },
      { code: '        reward = 1.0 # +1 for every step balanced', explanation: 'Reward' },
      { code: '        terminated = abs(self.pole_angle) > 0.5 # Fell over!', explanation: 'Terminal condition' },
      { code: '        return np.array([self.pole_angle]), reward, terminated', explanation: 'Return tuple' },
      { code: '', explanation: '' },
      { code: 'env = SimpleCartPole()', explanation: 'Instantiate env' },
      { code: 'obs = env.reset()', explanation: 'Reset world' },
      { code: 'total_reward = 0', explanation: 'Accumulator' },
      { code: '', explanation: '' },
      { code: 'for t in range(50):', explanation: 'Run up to 50 steps' },
      { code: '    action = 1 if obs[0] < 0 else 0 # Simple heuristic: push opposite to tilt', explanation: 'Reflex policy' },
      { code: '    obs, reward, terminated = env.step(action)', explanation: 'Step environment' },
      { code: '    total_reward += reward', explanation: 'Add reward' },
      { code: '    if terminated:', explanation: 'Check game over' },
      { code: '        print(f"Pole fell over at step {t+1}!")', explanation: 'Terminated message' },
      { code: '        break', explanation: 'Exit loop' },
      { code: 'print(f"Total Episode Reward: {total_reward}")', explanation: 'Display total points' },
    ],
    executionFlow: [
      { number: 1, title: 'Reset', description: 'Initializes pole with slight tilt angle.' },
      { number: 2, title: 'Step Loop', description: 'Agent observes angle, pushes cart, and earns +1 reward per balanced timestep.' },
    ],
    input: 'Simulated CartPole physics environment',
    output: 'Total Episode Reward: 50.0 (Survived full episode!)',
    interpretation: 'The standard env.reset() and env.step() contract enables testing arbitrary algorithms across standardized environments.',
    colabInstructions: ['Run in Google Colab.'],
  },
  mcqs: [
    {
      id: 'q1',
      question: 'What are the primary return values of the standard Gymnasium env.step(action) method?',
      options: [
        { id: 'a', text: 'observation, reward, terminated, truncated, info' },
        { id: 'b', text: 'username, password, database_status' },
        { id: 'c', text: 'loss, gradient, weight' },
        { id: 'd', text: 'accuracy, precision, recall' },
      {id:'q2',question:'What defines an RL environment?',options:[{id:'a',text:'The agent only'},{id:'b',text:'Everything outside the agent: state transitions P(s\'|s,a) and reward function R(s,a)'},{id:'c',text:'The neural network'},{id:'d',text:'The programming language'}],correctAnswer:'b',explanation:'Environment provides: state observations, reward signals, transition dynamics P(s\',r|s,a). Agent cannot control environment, only influence it through actions.',incorrectFeedback:'Environment encompasses state space, dynamics, and reward structure.'},
{id:'q3',question:'What is a deterministic vs stochastic environment?',options:[{id:'a',text:'Deterministic: action always leads to same next state; stochastic: probabilistic outcomes'},{id:'b',text:'Deterministic is random'},{id:'c',text:'No difference'},{id:'d',text:'Stochastic is always better'}],correctAnswer:'a',explanation:'Deterministic: s\' = f(s,a) always. Stochastic: s\' ~ P(s\'|s,a) probabilistic. Example: Chess (deterministic) vs Poker (stochastic cards).',incorrectFeedback:'Deterministic environments have predictable transitions; stochastic have probabilistic outcomes.'},
{id:'q4',question:'What is a fully observable vs partially observable environment?',options:[{id:'a',text:'Fully observable: agent sees entire state; partially observable: limited observations (POMDP)'},{id:'b',text:'Fully observable is slower'},{id:'c',text:'They are the same'},{id:'d',text:'Partially observable is impossible'}],correctAnswer:'a',explanation:'Fully observable (MDP): agent sees complete state s. Partially observable (POMDP): agent receives observation o(s), must maintain belief state. Example: chess (fully) vs poker (partial: hidden cards).',incorrectFeedback:'Full observability means complete state visibility; partial requires inference.'},
{id:'q5',question:'What is OpenAI Gym?',options:[{id:'a',text:'A fitness center'},{id:'b',text:'Python library providing standardized RL environments: CartPole, Atari, MuJoCo'},{id:'c',text:'A game engine'},{id:'d',text:'A database'}],correctAnswer:'b',explanation:'OpenAI Gym: standard API for RL environments. env.reset(), env.step(action) returns (observation, reward, done, info). Includes classic control, Atari games, robotics simulations.',incorrectFeedback:'Gym provides standardized RL environment interface for research and benchmarking.'},
  ],
      correctAnswer: 'a',
      explanation: 'In Gymnasium, env.step(action) returns the 5-tuple: (observation, reward, terminated, truncated, info).',
      incorrectFeedback: 'Gymnasium standardized the 5-tuple return signature for environment steps.',
    },
  ],
};

export const state: Topic = {
  id: 'state',
  moduleId: 'reinforcement-learning',
  number: 4,
  title: 'State Representation & The Markov Property',
  description: 'Understand the mathematical definition of State and the foundational Markov Property: the future depends only on the present.',
  objectives: [
    'Define the Markov Property: P(s_{t+1}|s_t, a_t) = P(s_{t+1}|s_t, a_t, s_{t-1}, ...)',
    'Understand why historical path independence enables tractable dynamic programming',
    'Address partial state representation using frame stacking and recurrence',
  ],
  story: `Suppose you are playing a game of Pong.
  
A camera takes a single still photograph of the ball in the middle of the screen.
  
Is that single photo a complete **Markov State**?
  
NO! You know *where* the ball is, but you have no idea *which direction it is moving* or *how fast*! If you don't know velocity, you cannot decide whether to move your paddle up or down.
  
To make it a true Markov state, DeepMind stacked 4 consecutive image frames together. Now, the 4 frames contain both position and velocity. The future is once again completely predictable from the present observation alone.`,
  motivation: `**The cornerstone of RL mathematics**: Every equation in dynamic programming, Bellman backups, and Q-learning assumes the Markov Property. If your state representation violates this property, standard algorithms will fail.`,
  concept: {
    simple: `The **Markov Property** means: "The present state contains all the information you need to predict the future. The past doesn't matter."
Think of a game of chess: you only need to look at where the pieces are right now to pick your next move. You don't need to know whether the knight moved 5 turns ago or 10 turns ago.`,
    technical: `A state $S_t$ is Markov if and only if:
$$\\mathbb{P}(S_{t+1} = s', R_{t+1} = r \\mid S_t = s_t, A_t = a_t, S_{t-1} = s_{t-1}, \\dots, S_0 = s_0) = \\mathbb{P}(S_{t+1} = s', R_{t+1} = r \\mid S_t = s_t, A_t = a_t)$$
The state transitions are conditionally independent of the historical trajectory given the current state.`,
  },
  keyTerms: [
    { term: 'Markov Property', simple: 'The future depends only on the present, not on the past path taken to get here.', technical: 'Conditional independence of future states from past states given the present state.' },
    { term: 'Frame Stacking', simple: 'Grouping the last 4 frames together so the AI can see motion and speed.', technical: 'Concatenating $k$ sequential sensory observations along the channel axis to recover velocity vectors in non-Markovian observations.' },
  ],
  equations: [
    {
      latex: 'P(S_{t+1} = s_{t+1} \\mid S_t = s_t, A_t = a_t)',
      explanation: 'The Markov Transition Probability: the next state depends exclusively on current state S_t and action A_t, discarding all earlier history S_{t-1}, S_{t-2}...',
      symbols: [
        { symbol: 'S_t', meaning: 'Current state', interpretation: 'Everything needed to decide next move' },
        { symbol: 'A_t', meaning: 'Current action', interpretation: 'The agent’s chosen move' },
        { symbol: 'S_{t+1}', meaning: 'Next state', interpretation: 'Resulting state' },
      ],
      example: {
        description: 'In Chess, knowing the board layout right now is sufficient to predict all valid future moves.',
        calculation: 'P(\\text{Next} \\mid \\text{Current Board}) \\text{ requires zero knowledge of prior moves}',
        result: 'Board configuration is a valid Markov state',
      },
    },
  ],
  howItWorks: [
    { number: 1, title: 'State Formulation', description: 'Identify physical variables (positions, velocities, angles, accelerations).' },
    { number: 2, title: 'Markov Validation', description: 'Confirm that knowing current state s_t is sufficient to compute transition probabilities.' },
    { number: 3, title: 'Augmentation if Needed', description: 'If velocity is missing, append historical frames or use recurrent LSTM/GRU memory.' },
  ],
  applications: [
    { title: 'Atari Deep Q-Networks (DQN)', problem: 'A single 2D Atari game screen lacks ball velocity.', solution: 'Stacking 4 consecutive grayscale frames (84x84x4) transforms the observation into a clean Markov state.' },
  ],
  activity: {
    type: 'mcq',
    title: 'Markov State Identification',
    question: 'Which of the following contains sufficient information to be considered a true Markov state for a flying drone?',
    options: [
      { id: 'a', text: 'GPS coordinates [X, Y, Z] AND Velocities [Vx, Vy, Vz] AND Angular Orientations [Roll, Pitch, Yaw]' },
      { id: 'b', text: 'Only the altitude Z with no velocity' },
      { id: 'c', text: 'A single photo of the sky with no instruments' },
      { id: 'd', text: 'The serial number of the drone battery' },
    ],
    correctAnswer: 'a',
    explanation: 'Physics requires both position and velocity/orientation to predict where a drone will be in the next instant. Omitting velocities breaks the Markov property.',
    hint: 'Can you predict where the drone will be next without knowing how fast and in what direction it is moving?',
  },
  pythonHandsOn: {
    title: 'Frame Stacking for Velocity Recovery in Python',
    description: 'Demonstrate how stacking two scalar positions allows computing velocity.',
    packages: ['numpy'],
    installCommand: 'pip install numpy',
    imports: [{ code: 'import numpy as np', explanation: 'NumPy arrays' }],
    code: [
      { code: '# Consecutive positions of a ball in meters at t=0, t=1, t=2', explanation: 'Positions' },
      { code: 'positions = [10.0, 15.0, 22.0]', explanation: 'Distance traveled' },
      { code: 'dt = 1.0 # 1 second per step', explanation: 'Time delta' },
      { code: '', explanation: '' },
      { code: '# A single position is incomplete (we do not know speed)', explanation: 'Incomplete state' },
      { code: 'single_state_t1 = np.array([positions[1]])', explanation: 'Just [15.0]' },
      { code: '', explanation: '' },
      { code: '# Stack 2 frames: [position_prev, position_current]', explanation: 'Stacked state' },
      { code: 'stacked_state_t1 = np.array([positions[0], positions[1]]) # [10.0, 15.0]', explanation: 'Frame stack' },
      { code: 'velocity_t1 = (stacked_state_t1[1] - stacked_state_t1[0]) / dt', explanation: 'Computed velocity' },
      { code: '', explanation: '' },
      { code: 'print("Single Position State:", single_state_t1)', explanation: 'Print single' },
      { code: 'print("Stacked 2-Frame State:", stacked_state_t1)', explanation: 'Print stacked' },
      { code: 'print(f"Recovered Velocity from Stacking: {velocity_t1:.1f} m/s")', explanation: 'Show velocity' },
    ],
    executionFlow: [
      { number: 1, title: 'Single State', description: 'Shows position 15.0 with zero velocity information.' },
      { number: 2, title: 'Frame Stacking', description: 'Shows [10.0, 15.0], allowing the agent to immediately compute +5.0 m/s velocity.' },
    ],
    input: 'Sequence of scalar positions [10, 15, 22]',
    output: 'Single Position State: [15.]\nStacked 2-Frame State: [10. 15.]\nRecovered Velocity from Stacking: 5.0 m/s',
    interpretation: 'Frame stacking satisfies the Markov property by encoding temporal derivatives directly into the sensory observation tensor.',
    colabInstructions: ['Run in Google Colab.'],
  },
  mcqs: [
    {
      id: 'q1',
      question: 'What is the core statement of the Markov Property?',
      options: [
        { id: 'a', text: 'The future state depends only on the current state and action, independent of prior history' },
        { id: 'b', text: 'All states must have equal probability' },
        { id: 'c', text: 'The reward must be greater than 100' },
        { id: 'd', text: 'The agent must win every game' },
      {id:'q2',question:'What is a state in RL?',options:[{id:'a',text:'Geographic location'},{id:'b',text:'Complete information needed to make optimal decisions at a given time'},{id:'c',text:'Agent\'s neural network weights'},{id:'d',text:'The reward'}],correctAnswer:'b',explanation:'State s captures all relevant information for decision-making. Markov property: P(s_{t+1}|s_t, a_t) independent of history. Example: chess board position (state) vs move history (not needed if position is known).',incorrectFeedback:'State encapsulates decision-relevant information satisfying Markov property.'},
{id:'q3',question:'What is the difference between state and observation?',options:[{id:'a',text:'State is complete info; observation is partial/noisy view of state'},{id:'b',text:'No difference'},{id:'c',text:'Observation is always better'},{id:'d',text:'State doesn\'t exist'}],correctAnswer:'a',explanation:'State s: true complete state. Observation o: what agent perceives. Fully observable: o = s. Partially observable (POMDP): o = h(s) + noise. Example: robot position (state) vs camera pixels (observation).',incorrectFeedback:'States are complete; observations may be partial or noisy views.'},
{id:'q4',question:'What is a terminal state?',options:[{id:'a',text:'The starting state'},{id:'b',text:'Final state ending an episode: no further transitions (game over, goal reached)'},{id:'c',text:'A random state'},{id:'d',text:'An impossible state'}],correctAnswer:'b',explanation:'Terminal state ends episode: winning/losing a game, reaching goal, timeout. After terminal state, environment resets. V(terminal) = 0 by convention.',incorrectFeedback:'Terminal states conclude episodes (success, failure, or timeout).'},
{id:'q5',question:'How is state space dimensionality a challenge in RL?',options:[{id:'a',text:'More dimensions make everything easier'},{id:'b',text:'High-dimensional state spaces (images, continuous) require function approximation (neural networks) instead of tables'},{id:'c',text:'Dimensionality is irrelevant'},{id:'d',text:'Low dimensions are harder'}],correctAnswer:'b',explanation:'Tabular methods (Q-table) fail in high dimensions: 1000×1000 image = 10^6 states. Deep RL uses neural networks to generalize across similar states. Example: DQN for Atari (pixels → Q-values).',incorrectFeedback:'High-dimensional states require neural network function approximation.'},
  ],
      correctAnswer: 'a',
      explanation: 'The Markov property states that conditional on the present state and action, the future state is independent of the past.',
      incorrectFeedback: 'The present contains all necessary information to determine future transitions.',
    },
  ],
};

export const action: Topic = {
  id: 'action',
  moduleId: 'reinforcement-learning',
  number: 5,
  title: 'Action Spaces: Discrete vs Continuous',
  description: 'Explore the action space: discrete choices (buttons, moves) versus continuous actuator controls (steering angles, voltages).',
  objectives: [
    'Distinguish between Discrete and Continuous action spaces',
    'Map action spaces in Gymnasium: Discrete(N) vs Box(low, high, shape)',
    'Understand how action representations dictate algorithm selection (DQN vs DDPG/PPO)',
  ],
  story: `Imagine controlling a video game character versus driving a real car.
  
In a retro video game like Super Mario, you have an NES controller with 4 buttons: Left, Right, Jump, Run. At any frame, you pick one of a finite set of discrete button combinations.
  
Now step into a Formula 1 race car. You don't have discrete buttons for steering. You turn the steering wheel continuously between -180.0° and +180.0° with infinite precision (e.g. 14.372°). You press the throttle pedal with continuous foot pressure between 0% and 100%.
  
This fundamental divide—**Discrete vs Continuous Action Spaces**—determines whether you choose algorithms like Q-learning (built for discrete choices) or Policy Gradients (built for continuous torque and angles).`,
  motivation: `**Matching algorithm to physics**: Trying to use standard Deep Q-Networks (DQN) on a continuous robotic arm requires artificially discretizing thousands of angles, leading to an explosion of actions. Understanding action spaces ensures you deploy the right agent.`,
  concept: {
    simple: `**Discrete Actions**: Choosing from a menu of distinct options:
- Go Left, Go Right, Jump, Shoot.
**Continuous Actions**: Turning a knob or pressing a pedal with smooth, continuous numbers:
- Steer 12.5 degrees left, apply 45.2% braking force.`,
    technical: `A discrete action space is a finite set $\\mathcal{A} = \\{a_1, a_2, \\dots, a_K\\}$ where policies output categorical probabilities $\\pi(a_k|s)$. A continuous action space is a compact subset of Euclidean space $\\mathcal{A} \\subseteq \\mathbb{R}^m$ where policies parameterize continuous probability distributions, typically Gaussian $\\pi(a|s) = \\mathcal{N}(\\mu_\\theta(s), \\sigma_\\theta^2(s))$.`,
  },
  keyTerms: [
    { term: 'Discrete Action Space', simple: 'A finite list of separate choices (e.g., UP, DOWN, LEFT, RIGHT).', technical: 'Represented in Gymnasium as `gym.spaces.Discrete(n)` with cardinality $n$.' },
    { term: 'Continuous Action Space', simple: 'Smooth values with infinite possible decimal numbers (e.g., steering angle from -1.0 to +1.0).', technical: 'Represented in Gymnasium as `gym.spaces.Box(low, high, shape)` representing an $m$-dimensional real bounding box.' },
  ],
  equations: [
    {
      latex: 'a \\sim \\pi_\\theta(a \\mid s) = \\frac{1}{\\sqrt{2\\pi\\sigma^2}} \\exp\\left( -\\frac{(a - \\mu_\\theta(s))^2}{2\\sigma^2} \\right)',
      explanation: 'Gaussian Policy for continuous actions: neural network outputs mean action mu(s) and variance sigma^2, from which the continuous action is sampled.',
      symbols: [
        { symbol: '\\mu_\\theta(s)', meaning: 'Mean action output', interpretation: 'The ideal steering angle or torque' },
        { symbol: '\\sigma^2', meaning: 'Variance', interpretation: 'Exploration noise around the mean' },
        { symbol: 'a', meaning: 'Sampled continuous action', interpretation: 'Executed control signal' },
      ],
      example: {
        description: 'Network predicts mean steering angle mu = 15.0 degrees with exploration noise sigma = 1.0 degree.',
        calculation: 'a = 15.0 + 1.0 \\times \\mathcal{N}(0, 1) = 15.24^{\\circ}',
        result: 'Smooth continuous actuator command',
      },
    },
  ],
  howItWorks: [
    { number: 1, title: 'Discrete Handling', description: 'Network outputs K raw logits; apply Softmax or take argmax for discrete decisions.' },
    { number: 2, title: 'Continuous Handling', description: 'Network outputs continuous vector mu; apply Tanh to clamp values within physical actuator limits [-1.0, +1.0].' },
  ],
  applications: [
    { title: 'Quadruped Robot Locomotion (Boston Dynamics / ANYmal)', problem: 'Controlling 12 continuous motor torques 500 times per second.', solution: 'Continuous action Actor-Critic networks output smooth torque values directly to joint actuators.' },
  ],
  activity: {
    type: 'mcq',
    title: 'Action Space Classification',
    question: 'A smart thermostat controls an electric furnace by setting the heat output continuously between 0.0% and 100.0%. What type of action space is this?',
    options: [
      { id: 'a', text: 'Continuous Action Space' },
      { id: 'b', text: 'Discrete Action Space' },
      { id: 'c', text: 'Markov Chain' },
      { id: 'd', text: 'Supervised Label' },
    ],
    correctAnswer: 'a',
    explanation: 'Heat output is a continuous real-valued percentage between 0.0 and 100.0 with infinite intermediate values, making it continuous.',
    hint: 'Can the heater be set to 42.75% or only ON/OFF buttons?',
  },
  pythonHandsOn: {
    title: 'Sampling Discrete vs Continuous Actions in Python',
    description: 'Demonstrate sampling discrete choices vs continuous Gaussian control signals.',
    packages: ['numpy'],
    installCommand: 'pip install numpy',
    imports: [{ code: 'import numpy as np', explanation: 'NumPy random module' }],
    code: [
      { code: '# 1. Discrete Action Space (e.g. 4 joystick directions):', explanation: 'Discrete' },
      { code: 'discrete_actions = ["UP", "DOWN", "LEFT", "RIGHT"]', explanation: 'Choices' },
      { code: 'chosen_discrete = np.random.choice(discrete_actions)', explanation: 'Sample discrete' },
      { code: 'print("Discrete Action Sampled:", chosen_discrete)', explanation: 'Print discrete' },
      { code: '', explanation: '' },
      { code: '# 2. Continuous Action Space (e.g. Steering Angle [-30 to +30 deg]):', explanation: 'Continuous' },
      { code: 'mean_steering = 5.2 # Network predicts 5.2 degrees right', explanation: 'Predicted mean' },
      { code: 'noise_std = 0.5     # Exploration noise', explanation: 'Exploration noise' },
      { code: 'continuous_action = np.random.normal(mean_steering, noise_std)', explanation: 'Sample Gaussian' },
      { code: 'continuous_action = np.clip(continuous_action, -30.0, 30.0) # Enforce physical bounds', explanation: 'Clip limits' },
      { code: 'print(f"Continuous Steering Sampled: {continuous_action:.2f} degrees")', explanation: 'Print continuous' },
    ],
    executionFlow: [
      { number: 1, title: 'Discrete Choice', description: 'Selects one discrete string from fixed set.' },
      { number: 2, title: 'Continuous Sampling', description: 'Samples continuous floating-point angle with Gaussian exploration noise.' },
    ],
    input: 'Action definitions',
    output: 'Discrete Action Sampled: LEFT\nContinuous Steering Sampled: 5.48 degrees',
    interpretation: 'Discrete actions are finite integers/labels; continuous actions are real-valued scalars representing physical commands.',
    colabInstructions: ['Run in Google Colab.'],
  },
  mcqs: [
    {
      id: 'q1',
      question: 'Which reinforcement learning algorithm is natively designed for discrete action spaces?',
      options: [
        { id: 'a', text: 'Deep Q-Networks (DQN)' },
        { id: 'b', text: 'Deep Deterministic Policy Gradient (DDPG)' },
        { id: 'c', text: 'Soft Actor-Critic (SAC)' },
        { id: 'd', text: 'Linear Quadratic Regulator' },
      {id:'q2',question:'What is an action space in RL?',options:[{id:'a',text:'Physical room'},{id:'b',text:'Set of all possible actions A available to agent: discrete or continuous'},{id:'c',text:'The reward function'},{id:'d',text:'Training time'}],correctAnswer:'b',explanation:'Action space A: discrete (move {left, right, up, down}) or continuous (steering angle [-1, 1]). Discrete: DQN, Q-learning. Continuous: policy gradient methods (PPO, DDPG).',incorrectFeedback:'Action space defines all possible agent actions (discrete or continuous).'},
{id:'q3',question:'What is a discrete vs continuous action space?',options:[{id:'a',text:'Discrete: finite actions (left/right); continuous: real-valued ranges (steering angle 0-360°)'},{id:'b',text:'No difference'},{id:'c',text:'Continuous is always better'},{id:'d',text:'Discrete doesn\'t exist'}],correctAnswer:'a',explanation:'Discrete: finite set {a₁, a₂, ..., aₙ} like Atari buttons. Continuous: a ∈ ℝⁿ like robot joint angles. Continuous requires policy gradient methods (PPO, SAC); discrete can use Q-learning.',incorrectFeedback:'Discrete actions are finite choices; continuous actions are real-valued ranges.'},
{id:'q4',question:'What is action masking?',options:[{id:'a',text:'Hiding all actions'},{id:'b',text:'Restricting available actions based on current state (e.g., can\'t move through walls)'},{id:'c',text:'Deleting the action space'},{id:'d',text:'Random action selection'}],correctAnswer:'b',explanation:'Action masking prevents invalid actions: in chess, mask illegal moves; in warehouse robot, mask occupied cells. Improves learning efficiency by constraining search space.',incorrectFeedback:'Action masking constrains action space to valid actions for current state.'},
{id:'q5',question:'What is an action-value function Q(s,a)?',options:[{id:'a',text:'Random number'},{id:'b',text:'Expected cumulative reward starting from state s, taking action a, then following policy π'},{id:'c',text:'Number of actions'},{id:'d',text:'Action space size'}],correctAnswer:'b',explanation:'Q(s,a) = E[G_t | s_t=s, a_t=a] = expected return after taking action a in state s. Optimal Q*(s,a) guides optimal policy: π*(s) = argmax_a Q*(s,a).',incorrectFeedback:'Q-function evaluates expected return for state-action pairs.'},
  ],
      correctAnswer: 'a',
      explanation: 'DQN computes Q-values for each discrete action and takes the argmax. In continuous spaces, finding the argmax over an infinite continuum requires expensive optimization.',
      incorrectFeedback: 'DQN requires computing max Q(s,a) over discrete actions.',
    },
  ],
};

export const reward: Topic = {
  id: 'reward',
  moduleId: 'reinforcement-learning',
  number: 6,
  title: 'The Reward Signal: Reward Engineering & Shaping',
  description: 'Master the engine of reinforcement: sparse vs dense rewards, reward shaping, and avoiding perverse alignment incentives.',
  objectives: [
    'Define the Reward Hypothesis (Rich Sutton)',
    'Differentiate between Sparse Rewards (win/lose only) and Dense Rewards (continuous guidance)',
    'Avoid perverse incentives and reward gaming bugs',
  ],
  story: `In 2016, researchers at OpenAI trained an RL agent to play the boat-racing video game *CoastRunners*. The goal of the game is to race boats along a river circuit and cross the finish line as fast as possible.
  
The engineers designed a dense reward signal: every time the boat crashed into a green target buoy, it earned bonus points.
  
The agent discovered a bizarre strategy: instead of finishing the race, it drove in tight circles in an isolated harbor, repeatedly crashing into the same three regenerating targets while setting its own boat on fire!
  
It scored a record-breaking number of points without ever completing the race. The agent didn't make a mistake; it executed the exact mathematical reward function it was given. This is **Reward Gaming**.`,
  motivation: `**The Reward Hypothesis**: All goals can be formalized as maximizing cumulative scalar reward. But if your reward function has a single loophole, the agent will exploit it in ways that shock and dismay its creators.`,
  concept: {
    simple: `The reward is the treat you give the puppy.
- **Sparse Reward**: Giving a treat only when the puppy wins a championship trophy (hard to learn because the treat is so rare!).
- **Dense Reward**: Giving tiny treats every time the puppy takes a good step forward.
- **Beware**: If you reward the puppy for barking when someone knocks, it might bark all night to get treats!`,
    technical: `The Reward Hypothesis (Sutton, 2004) posits that any goal or objective can be described as maximizing expected cumulative scalar reward. Potential-based reward shaping $F(s, a, s') = \\gamma \\Phi(s') - \\Phi(s)$ is the necessary and sufficient condition to augment rewards without altering the optimal policy $\\pi^*$.`,
  },
  keyTerms: [
    { term: 'Reward Hypothesis', simple: 'The idea that any goal in the universe can be defined as getting more points.', technical: 'All of what we mean by goals and purposes can be well thought of as the maximization of the expected value of the cumulative sum of a received scalar signal.' },
    { term: 'Sparse vs Dense Reward', simple: 'Sparse is rare feedback (e.g. +1 only at goal); Dense is frequent feedback on every step.', technical: 'Sparse rewards yield $\\nabla J(\\theta) \\approx 0$ over most trajectories; dense rewards provide non-zero gradients at every step.' },
    { term: 'Reward Gaming (Specification Gaming)', simple: 'When the AI finds a clever hack to get tons of points without doing what you wanted.', technical: 'Discrepancy where an agent optimizes the formal objective function in a pathological manner contrary to designer intent.' },
  ],
  equations: [
    {
      latex: 'R_{\\text{shaped}}(s, a, s\') = R(s, a, s\') + \\gamma \\Phi(s\') - \\Phi(s)',
      explanation: 'Potential-Based Reward Shaping (Ng et al., 1999): guarantees that adding auxiliary rewards based on potential function Phi does NOT change the optimal policy.',
      symbols: [
        { symbol: '\\Phi(s)', meaning: 'Potential of state s', interpretation: 'Heuristic desirability (e.g. negative distance to goal)' },
        { symbol: '\\gamma', meaning: 'Discount factor', interpretation: 'Discount parameter' },
      ],
      example: {
        description: 'Robot gets closer to goal: Phi(s) = -5, Phi(s\') = -3 with gamma = 1. Auxiliary reward is (-3) - (-5) = +2.',
        calculation: 'F = (-3) - (-5) = +2.0',
        result: 'Safe reward encouraging movement toward goal',
      },
    },
  ],
  howItWorks: [
    { number: 1, title: 'Define Terminal Reward', description: 'Assign large positive reward (+100) for success and penalty (-100) for failure.' },
    { number: 2, title: 'Step Cost', description: 'Add small negative reward (-0.1 per step) to incentivize speed.' },
    { number: 3, title: 'Potential-Based Shaping', description: 'Add difference of potentials to guide agent through sparse search spaces.' },
  ],
  applications: [
    { title: 'Robot Arm Assembly', problem: 'Randomly searching a 3D space to insert a peg into a hole has a 0.0001% random success rate.', solution: 'Dense reward proportional to negative Euclidean distance drives robot toward the target hole.' },
  ],
  activity: {
    type: 'mcq',
    title: 'Reward Gaming Analysis',
    question: 'A robot vacuum is rewarded purely for how much dirt it sucks up. What pathological behavior might it learn?',
    options: [
      { id: 'a', text: 'It will intentionally dump dirt onto the floor so it can suck it up repeatedly to farm infinite rewards' },
      { id: 'b', text: 'It will clean the entire house in 1 second' },
      { id: 'c', text: 'It will shut off its battery' },
      { id: 'd', text: 'It will convert to a lawnmower' },
    ],
    correctAnswer: 'a',
    explanation: 'Rewarding the *act* of collecting dirt rather than the *state* of the floor being clean causes the agent to create dirty loops to generate endless rewards.',
    hint: 'Think about how an agent could game the reward without achieving clean floors.',
  },
  pythonHandsOn: {
    title: 'Potential-Based Reward Shaping in Python',
    description: 'Compare raw sparse rewards with shaped dense rewards in a 1D environment.',
    packages: ['numpy'],
    installCommand: 'pip install numpy',
    imports: [{ code: 'import numpy as np', explanation: 'NumPy math' }],
    code: [
      { code: '# Position x along 1D line from 0 to 10 (Goal is 10)', explanation: 'Setup' },
      { code: 'def potential(x):', explanation: 'Define potential function' },
      { code: '    return x # Closer to 10 has higher potential', explanation: 'Phi(x) = x' },
      { code: '', explanation: '' },
      { code: 'gamma = 0.99', explanation: 'Discount' },
      { code: 'current_x = 3.0', explanation: 'Start at x=3' },
      { code: 'next_x = 4.0   # Step forward', explanation: 'Move forward' },
      { code: '', explanation: '' },
      { code: '# Sparse reward: 0 until goal', explanation: 'Sparse baseline' },
      { code: 'r_sparse = 0.0', explanation: 'No intermediate reward' },
      { code: '', explanation: '' },
      { code: '# Potential-based shaped reward: r + gamma * Phi(s\') - Phi(s)', explanation: 'Shaping formula' },
      { code: 'r_shaped = r_sparse + (gamma * potential(next_x) - potential(current_x))', explanation: 'Calculate shaping' },
      { code: '', explanation: '' },
      { code: 'print(f"Raw Sparse Reward:   {r_sparse:.2f}")', explanation: 'Print sparse' },
      { code: 'print(f"Shaped Dense Reward: {r_shaped:.2f} (Provides immediate positive gradient!)")', explanation: 'Print shaped' },
    ],
    executionFlow: [
      { number: 1, title: 'Sparse Signal', description: 'Zero feedback provided for moving from 3 to 4.' },
      { number: 2, title: 'Shaped Signal', description: 'Yields +0.96 reward signal, instantly validating the positive step.' },
    ],
    input: 'Transition from x=3 to x=4',
    output: 'Raw Sparse Reward:   0.00\nShaped Dense Reward: 0.96 (Provides immediate positive gradient!)',
    interpretation: 'Potential-based shaping provides immediate guiding signals while mathematically preserving optimal policy invariance.',
    colabInstructions: ['Run in Google Colab.'],
  },
  mcqs: [
    {
      id: 'q1',
      question: 'According to the theorem by Ng, Harada, and Russell (1999), what form must reward shaping take to guarantee the optimal policy is unchanged?',
      options: [
        { id: 'a', text: 'Potential-based shaping: F(s, a, s\') = gamma * Phi(s\') - Phi(s)' },
        { id: 'b', text: 'Random Gaussian noise' },
        { id: 'c', text: 'Multiplying all rewards by -1' },
        { id: 'd', text: 'Setting all rewards to zero' },
      {id:'q2',question:'What is reward shaping?',options:[{id:'a',text:'Deleting rewards'},{id:'b',text:'Designing intermediate rewards to guide learning toward goals (e.g., +0.1 for moving closer to target)'},{id:'c',text:'Making rewards random'},{id:'d',text:'Removing all rewards'}],correctAnswer:'b',explanation:'Reward shaping provides dense feedback instead of sparse terminal rewards. Example: +1 for goal, +0.01 per step toward goal (instead of only +1 at end). Speeds learning but risks unintended behaviors.',incorrectFeedback:'Reward shaping adds intermediate rewards to accelerate learning.'},
{id:'q3',question:'What is the discount factor γ (gamma) in RL?',options:[{id:'a',text:'Learning rate'},{id:'b',text:'Weight on future rewards: γ ∈ [0,1]. High γ = far-sighted; low γ = myopic'},{id:'c',text:'Number of episodes'},{id:'d',text:'State space size'}],correctAnswer:'b',explanation:'Discount γ: G = r₁ + γr₂ + γ²r₃ + ... γ=0: only immediate reward. γ=1: all future rewards equal. γ=0.99 typical: balances short and long-term planning.',incorrectFeedback:'Discount factor γ balances immediate vs future rewards in return calculation.'},
{id:'q4',question:'What is a sparse reward problem?',options:[{id:'a',text:'Too many rewards'},{id:'b',text:'Reward only at episode end (e.g., win/lose); agent rarely learns without exploration tricks'},{id:'c',text:'No problem exists'},{id:'d',text:'Rewards every step'}],correctAnswer:'b',explanation:'Sparse rewards: only terminal reward (e.g., +1 for maze exit after 1000 steps). Hard to learn: random policy rarely finds goal. Solutions: curriculum learning, reward shaping, curiosity-driven exploration.',incorrectFeedback:'Sparse rewards provide infrequent feedback, making learning challenging.'},
{id:'q5',question:'What is the reward hypothesis in RL?',options:[{id:'a',text:'Rewards don\'t matter'},{id:'b',text:'All goals can be formalized as maximizing cumulative reward (Sutton & Barto)'},{id:'c',text:'Rewards are random'},{id:'d',text:'Agents ignore rewards'}],correctAnswer:'b',explanation:'Reward hypothesis (Sutton & Barto): all intelligent behavior aims to maximize cumulative reward. Controversial for complex human goals, but foundational to RL theory.',incorrectFeedback:'Reward hypothesis: intelligence = maximizing cumulative reward signal.'},
  ],
      correctAnswer: 'a',
      explanation: 'Potential-based reward shaping guarantees policy invariance because the telescoping sum of potentials cancels out over closed loops and full trajectories.',
      incorrectFeedback: 'Potential-based shaping ensures policy invariance.',
    },
  ],
};

export const policy: Topic = {
  id: 'policy',
  moduleId: 'reinforcement-learning',
  number: 7,
  title: 'The Policy: Deterministic vs Stochastic Strategies',
  description: 'Deep dive into the agent’s decision function: deterministic argmax policies versus stochastic probability distributions.',
  objectives: [
    'Define Deterministic Policies: a = pi(s)',
    'Define Stochastic Policies: pi(a|s) = P(A=a|S=s)',
    'Understand why stochastic policies are required in partially observable games (like Poker)',
  ],
  story: `Imagine playing Rock-Paper-Scissors against an opponent who plays a **Deterministic Policy**:
- Every time they are in State 1, they throw Rock with 100% certainty.
  
How long will it take you to crush them? Exactly one turn! Once you observe their deterministic pattern, you throw Paper every time and win 100% of games.
  
To be unexploitable in competitive, partially observable games, an agent *must* adopt a **Stochastic Policy**: playing Rock with 33.3%, Paper with 33.3%, and Scissors with 33.3% probability. Stochastic policies enable optimal mixed strategies (Nash Equilibria).`,
  motivation: `**The core output of RL**: Everything in reinforcement learning ultimately serves to optimize the policy $\\pi^*$. Understanding deterministic vs stochastic representations is crucial when choosing between Q-learning and Policy Gradient methods.`,
  concept: {
    simple: `A Policy is the agent’s rulebook:
- **Deterministic Policy**: "If red light, STOP. No debate, no randomness."
- **Stochastic Policy**: "If exploring a maze, go Left with 70% chance and Right with 30% chance." It allows for creativity, exploration, and unpredictability.`,
    technical: `A deterministic policy is a function mapping state space to action space: $\\mu: \\mathcal{S} \\rightarrow \\mathcal{A}$. A stochastic policy is a conditional probability distribution $\\pi: \\mathcal{S} \\times \\mathcal{A} \\rightarrow [0, 1]$ satisfying $\\sum_{a \\in \\mathcal{A}} \\pi(a|s) = 1$. The Policy Gradient Theorem computes $\\nabla_\\theta J(\\theta) = \\mathbb{E}_\\pi [\\nabla_\\theta \\log \\pi_\\theta(a|s) Q^\\pi(s, a)]$.`,
  },
  keyTerms: [
    { term: 'Deterministic Policy', simple: 'A fixed rule that always picks the exact same action in a situation.', technical: 'Mapping $\\mu(s)$ yielding identical action $a$ whenever evaluated on state $s$.' },
    { term: 'Stochastic Policy', simple: 'A rule that assigns probabilities to different actions, picking randomly based on those odds.', technical: 'Distribution $\\pi(a|s)$ enabling exploration and optimal mixed strategy formulation under uncertainty.' },
  ],
  equations: [
    {
      latex: '\\pi(a \\mid s) = \\frac{e^{Q(s, a) / \\tau}}{\\sum_{b} e^{Q(s, b) / \\tau}}',
      explanation: 'Boltzmann (Softmax) Exploration Policy: converts Q-values into action selection probabilities scaled by temperature parameter tau.',
      symbols: [
        { symbol: 'Q(s, a)', meaning: 'Action quality value', interpretation: 'Higher Q yields higher probability' },
        { symbol: '\\tau', meaning: 'Temperature hyperparameter', interpretation: 'High tau = random exploration; low tau = greedy exploitation' },
      ],
      example: {
        description: 'Actions with Q-values [2.0, 1.0] with tau = 1.0.',
        calculation: 'e^2 / (e^2 + e^1) = 7.39 / (7.39 + 2.72) = 7.39 / 10.11 = 0.73',
        result: '73% probability of picking action 1, 27% probability for action 2',
      },
    },
  ],
  howItWorks: [
    { number: 1, title: 'State Ingestion', description: 'Agent takes current state s as input.' },
    { number: 2, title: 'Action Probability Distribution', description: 'Network outputs vector of probabilities summing to 1.' },
    { number: 3, title: 'Sampling vs Greedy', description: 'During training, sample randomly according to probabilities; during testing, pick argmax.' },
  ],
  applications: [
    { title: 'Algorithmic Poker AI (Pluribus / Libratus)', problem: 'Playing multi-player No-Limit Texas Hold’em against top human pros.', solution: 'Stochastic mixed policies randomize bluffing frequencies to remain mathematically unexploitable.' },
  ],
  activity: {
    type: 'mcq',
    title: 'Policy Type Selection',
    question: 'Why would a deterministic policy fail in Rock-Paper-Scissors?',
    options: [
      { id: 'a', text: 'Opponents would notice the fixed pattern and counter it every single round' },
      { id: 'b', text: 'Because computers cannot play rock paper scissors' },
      { id: 'c', text: 'Because rock paper scissors has no rewards' },
      { id: 'd', text: 'Because python cannot generate random numbers' },
    ],
    correctAnswer: 'a',
    explanation: 'In zero-sum games with imperfect information, any deterministic strategy can be completely exploited by an adaptive adversary.',
    hint: 'What happens when your opponent knows exactly what move you will play?',
  },
  pythonHandsOn: {
    title: 'Sampling from a Softmax Boltzmann Policy',
    description: 'Convert Q-values into an action probability distribution and sample actions.',
    packages: ['numpy'],
    installCommand: 'pip install numpy',
    imports: [{ code: 'import numpy as np', explanation: 'NumPy math' }],
    code: [
      { code: '# Q-values for 3 possible actions: [Left, Stay, Right]', explanation: 'Q values' },
      { code: 'q_values = np.array([1.5, 3.0, 0.5])', explanation: 'Action 1 (Stay) is best' },
      { code: 'tau = 1.0 # Temperature', explanation: 'Temperature' },
      { code: '', explanation: '' },
      { code: '# Compute Boltzmann Softmax probabilities:', explanation: 'Softmax calculation' },
      { code: 'exp_q = np.exp(q_values / tau)', explanation: 'Exponentials' },
      { code: 'probs = exp_q / np.sum(exp_q)', explanation: 'Normalize' },
      { code: 'print("Action Probabilities [Left, Stay, Right]:", probs.round(3))', explanation: 'Print probs' },
      { code: '', explanation: '' },
      { code: '# Sample an action based on the stochastic policy:', explanation: 'Sampling' },
      { code: 'actions = [0, 1, 2]', explanation: 'Action indices' },
      { code: 'sampled_action = np.random.choice(actions, p=probs)', explanation: 'Sample with weights' },
      { code: 'print("Sampled Action according to policy:", sampled_action)', explanation: 'Print chosen action' },
    ],
    executionFlow: [
      { number: 1, title: 'Probability Calibration', description: 'Q-values [1.5, 3.0, 0.5] map to probabilities [16.8%, 75.3%, 7.9%].' },
      { number: 2, title: 'Action Sampling', description: 'Action 1 is chosen 75% of the time, while still exploring Actions 0 and 2.' },
    ],
    input: 'Q-values [1.5, 3.0, 0.5]',
    output: 'Action Probabilities [Left, Stay, Right]: [0.168 0.753 0.079]\nSampled Action according to policy: 1',
    interpretation: 'Stochastic policies balance exploitation of the best-known move (Action 1) with probabilistic exploration of alternatives.',
    colabInstructions: ['Run in Google Colab.'],
  },
  mcqs: [
    {
      id: 'q1',
      question: 'What happens to a Boltzmann softmax policy as temperature tau approaches zero (tau -> 0)?',
      options: [
        { id: 'a', text: 'The policy becomes purely greedy and deterministic, selecting the highest Q-value action with 100% probability' },
        { id: 'b', text: 'The policy chooses completely uniform random actions' },
        { id: 'c', text: 'The probabilities all become negative' },
        { id: 'd', text: 'The program crashes with zero division' },
      {id:'q2',question:'What is a deterministic policy?',options:[{id:'a',text:'Policy that maps states to single actions: a = π(s)'},{id:'b',text:'Random policy'},{id:'c',text:'Policy that never works'},{id:'d',text:'Policy without states'}],correctAnswer:'a',explanation:'Deterministic policy π(s) returns single action a for each state. Example: "if chess position X, always play move Y". Used in DDPG, TD3 (continuous control).',incorrectFeedback:'Deterministic policies map each state to a single action.'},
{id:'q3',question:'What is a stochastic policy?',options:[{id:'a',text:'Policy that outputs probability distribution over actions: π(a|s)'},{id:'b',text:'Policy that crashes'},{id:'c',text:'Deterministic policy'},{id:'d',text:'Policy without actions'}],correctAnswer:'a',explanation:'Stochastic policy π(a|s): probability of action a in state s. Example: 70% move left, 30% right. Enables exploration. Used in policy gradient methods (PPO, A3C).',incorrectFeedback:'Stochastic policies output action probability distributions.'},
{id:'q4',question:'What is the optimal policy π*?',options:[{id:'a',text:'Random policy'},{id:'b',text:'Policy maximizing expected cumulative reward: π*(s) = argmax_a Q*(s,a)'},{id:'c',text:'Any policy'},{id:'d',text:'Policy that fails'}],correctAnswer:'b',explanation:'Optimal policy π* achieves maximum expected return from every state: V^π*(s) ≥ V^π(s) for all policies π. Found via dynamic programming, Q-learning, or policy optimization.',incorrectFeedback:'Optimal policy maximizes expected cumulative reward.'},
{id:'q5',question:'What is a value-based vs policy-based RL method?',options:[{id:'a',text:'Value-based learns Q(s,a), derives policy; policy-based learns π(a|s) directly'},{id:'b',text:'No difference'},{id:'c',text:'Policy-based is obsolete'},{id:'d',text:'Value-based doesn\'t work'}],correctAnswer:'a',explanation:'Value-based (Q-learning, DQN): learn Q-function, extract policy π(s)=argmax Q(s,a). Policy-based (REINFORCE, PPO): optimize policy directly with gradient ascent on expected return.',incorrectFeedback:'Value methods learn Q; policy methods optimize π directly.'},
  ],
      correctAnswer: 'a',
      explanation: 'As temperature tau approaches 0, the probability of the highest scoring action approaches 1.0, collapsing into a deterministic greedy policy.',
      incorrectFeedback: 'Low temperature forces the distribution to concentrate entirely on the maximum value.',
    },
  ],
};

export const explorationExploitation: Topic = {
  id: 'exploration-exploitation',
  moduleId: 'reinforcement-learning',
  number: 8,
  title: 'Exploration vs Exploitation: Epsilon-Greedy & UCB',
  description: 'Master the fundamental trade-off: exploiting known high-value actions versus exploring uncertain actions to discover even greater rewards.',
  objectives: [
    'Define the Exploration vs Exploitation dilemma in Multi-Armed Bandits',
    'Implement Epsilon-Greedy and Epsilon-Decay strategies',
    'Understand Upper Confidence Bound (UCB) and optimism in the face of uncertainty',
  ],
  story: `Imagine you move to a new city with 50 restaurants.
  
On your first week, you try a small pizzeria near your apartment. The pizza is great—an 8 out of 10!
  
Now it is Friday night. What do you do?
- **Exploit**: You go back to the pizzeria. You are guaranteed a solid 8/10 meal.
- **Explore**: You try a sushi restaurant down the road. It might be a terrible 2/10 (risk!). But it might be an extraordinary 10/10 dining experience you would have missed forever.
  
If you only exploit, you miss the best restaurant in town. If you only explore, you suffer through terrible meals every night. Balancing exploration and exploitation is a universal challenge of life and AI.`,
  motivation: `**The dilemma that defines learning**: Without exploration, agents get trapped in mediocre local optima. With too much exploration, agents waste energy making foolish random mistakes. Balancing them correctly is essential for rapid learning.`,
  concept: {
    simple: `**Exploit**: Choose your favorite known choice to get a guaranteed good reward.
**Explore**: Try an unfamiliar choice to see if it might be even better.
**Epsilon-Greedy ($\\epsilon$)**:
- Roll a 100-sided die.
- If it rolls below $\\epsilon$ (e.g., 10%), pick a random crazy move to explore!
- Otherwise, pick your best-known move to exploit!`,
    technical: `In multi-armed bandit settings, an agent seeks to minimize cumulative regret $R_T = T \\mu^* - \\sum_{t=1}^T \\mathbb{E}[r_t]$. The Upper Confidence Bound (UCB1) algorithm chooses $A_t = \\arg\\max_a \\left[ Q_t(a) + c \\sqrt{\\frac{\\ln t}{N_t(a)}} \\right]$, adding an uncertainty bonus that embodies "optimism in the face of uncertainty."`,
  },
  keyTerms: [
    { term: 'Epsilon-Greedy', simple: 'A strategy where the agent explores randomly with probability epsilon, and picks the best move with probability 1-epsilon.', technical: '$\\pi(a|s) = 1-\\epsilon + \\frac{\\epsilon}{|\\mathcal{A}|}$ for $a = \\arg\\max Q(s,a)$, and $\\frac{\\epsilon}{|\\mathcal{A}|}$ for other actions.' },
    { term: 'Upper Confidence Bound (UCB)', simple: 'Choosing actions that have either high scores OR high uncertainty.', technical: 'Deterministic action selection maximizing estimated value plus an exploration bonus proportional to the inverse frequency of visitation.' },
    { term: 'Epsilon Decay', simple: 'Starting with lots of exploration when the AI is young, and slowly exploring less as it becomes an expert.', technical: 'Annealing schedule $\\epsilon_{t+1} = \\max(\\epsilon_{min}, \\epsilon_t \\times d)$ where $d < 1$.' },
  ],
  equations: [
    {
      latex: 'A_t = \\arg\\max_{a} \\left[ Q_t(a) + c \\sqrt{\\frac{\\ln t}{N_t(a)}} \\right]',
      explanation: 'The Upper Confidence Bound (UCB1) formula: selects the action that maximizes current average reward plus an uncertainty bonus based on how rarely it has been tried.',
      symbols: [
        { symbol: 'Q_t(a)', meaning: 'Estimated reward', interpretation: 'Exploitation term' },
        { symbol: 'c \\sqrt{\\frac{\\ln t}{N_t(a)}}', meaning: 'Uncertainty bonus', interpretation: 'Exploration term' },
        { symbol: 'N_t(a)', meaning: 'Count of times action a was tried', interpretation: 'Less tried = higher bonus' },
      ],
      example: {
        description: 'Action 1 tried 100 times with Q=8. Action 2 tried only 2 times with Q=7. Action 2 gets a massive uncertainty bonus and gets chosen.',
        calculation: '\\text{Bonus}_2 \\gg \\text{Bonus}_1 \\implies \\text{Agent explores Action 2}',
        result: 'Optimism in the face of uncertainty',
      },
    },
  ],
  howItWorks: [
    { number: 1, title: 'Generate Random Float', description: 'Draw uniform random number r between 0.0 and 1.0.' },
    { number: 2, title: 'Branch Decision', description: 'If r < epsilon, pick random action (Explore); otherwise pick argmax Q(s,a) (Exploit).' },
    { number: 3, title: 'Decay Epsilon', description: 'Multiply epsilon by decay factor (e.g. 0.995) after each episode.' },
  ],
  applications: [
    { title: 'A/B Testing in Digital Marketing', problem: 'Showing 5 different website landing page designs to find the highest conversion rate.', solution: 'Multi-Armed Bandit algorithms route more traffic to winning designs while continuing to explore others.' },
  ],
  activity: {
    type: 'mcq',
    title: 'Epsilon Scheduling',
    question: 'Why do reinforcement learning practitioners start with epsilon = 1.0 (100% exploration) and gradually decay it to epsilon = 0.01?',
    options: [
      { id: 'a', text: 'At the start the agent knows nothing and must explore; as it accumulates knowledge it should exploit its expertise' },
      { id: 'b', text: 'Because computer memory decreases over time' },
      { id: 'c', text: 'Because rewards become negative' },
      { id: 'd', text: 'To shut down the training script' },
    ],
    correctAnswer: 'a',
    explanation: 'An initial high epsilon ensures the agent covers the environment thoroughly; decaying epsilon allows it to solidify and exploit its mastered strategy.',
    hint: 'Think about how a human starts by exploring randomly before settling into optimal habits.',
  },
  pythonHandsOn: {
    title: 'Epsilon-Decay Implementation in Python',
    description: 'Simulate epsilon decay over 100 episodes and visualize action choices.',
    packages: ['numpy'],
    installCommand: 'pip install numpy',
    imports: [{ code: 'import numpy as np', explanation: 'NumPy for random choices' }],
    code: [
      { code: 'epsilon = 1.0      # Start with 100% exploration', explanation: 'Initial epsilon' },
      { code: 'epsilon_min = 0.05 # Keep 5% minimum exploration', explanation: 'Floor' },
      { code: 'decay_rate = 0.95  # Decay 5% every episode', explanation: 'Decay factor' },
      { code: '', explanation: '' },
      { code: 'exploration_count = 0', explanation: 'Counter' },
      { code: 'exploitation_count = 0', explanation: 'Counter' },
      { code: '', explanation: '' },
      { code: 'for episode in range(100):', explanation: '100 episodes' },
      { code: '    # Epsilon-greedy check:', explanation: 'Check' },
      { code: '    if np.random.rand() < epsilon:', explanation: 'Explore branch' },
      { code: '        exploration_count += 1', explanation: 'Count explore' },
      { code: '    else:', explanation: 'Exploit branch' },
      { code: '        exploitation_count += 1', explanation: 'Count exploit' },
      { code: '    # Decay epsilon after episode:', explanation: 'Decay step' },
      { code: '    epsilon = max(epsilon_min, epsilon * decay_rate)', explanation: 'Apply decay' },
      { code: '', explanation: '' },
      { code: 'print(f"Final Epsilon: {epsilon:.3f}")', explanation: 'Show final epsilon' },
      { code: 'print(f"Total Explores: {exploration_count}, Total Exploits: {exploitation_count}")', explanation: 'Show breakdown' },
    ],
    executionFlow: [
      { number: 1, title: 'Early Phase', description: 'High epsilon drives aggressive exploration.' },
      { number: 2, title: 'Late Phase', description: 'Epsilon drops to 0.05, and the agent exploits 95% of the time.' },
    ],
    input: '100 episodes with initial epsilon 1.0 and decay 0.95',
    output: 'Final Epsilon: 0.050\nTotal Explores: ~24, Total Exploits: ~76',
    interpretation: 'Epsilon decay seamlessly transitions the agent from a curious explorer into an efficient optimizer.',
    colabInstructions: ['Run in Google Colab.'],
  },
  mcqs: [
    {
      id: 'q1',
      question: 'What is the key principle behind the Upper Confidence Bound (UCB) algorithm?',
      options: [
        { id: 'a', text: 'Optimism in the face of uncertainty: favoring actions that have high potential upside due to lack of visitation data' },
        { id: 'b', text: 'Never trying any action more than once' },
        { id: 'c', text: 'Flipping a coin every single turn' },
        { id: 'd', text: 'Picking the action with the lowest expected reward' },
      {id:'q2',question:'What is the exploration-exploitation dilemma?',options:[{id:'a',text:'Where to build factories'},{id:'b',text:'Balance between trying new actions (exploration) vs choosing known best actions (exploitation)'},{id:'c',text:'Hardware vs software'},{id:'d',text:'Training vs testing'}],correctAnswer:'b',explanation:'Exploration: try new actions to discover better strategies. Exploitation: use current best policy to maximize reward. Pure exploitation risks missing better solutions; pure exploration never leverages knowledge.',incorrectFeedback:'Exploration discovers; exploitation capitalizes on knowledge.'},
{id:'q3',question:'What is ε-greedy exploration?',options:[{id:'a',text:'Always random actions'},{id:'b',text:'With probability ε take random action; otherwise take greedy action: a = argmax Q(s,a)'},{id:'c',text:'Never explore'},{id:'d',text:'Delete actions'}],correctAnswer:'b',explanation:'ε-greedy: typically ε=0.1 means 10% random exploration, 90% exploitation. Often decay ε over time: start high (explore), end low (exploit). Simple but effective.',incorrectFeedback:'ε-greedy mixes random exploration with greedy exploitation.'},
{id:'q4',question:'What is the Upper Confidence Bound (UCB) strategy?',options:[{id:'a',text:'Random selection'},{id:'b',text:'Select actions balancing estimated value and uncertainty: a = argmax[Q(a) + c√(ln t / N(a))]'},{id:'c',text:'Always exploit'},{id:'d',text:'Never works'}],correctAnswer:'b',explanation:'UCB adds uncertainty bonus: actions tried less often (low N(a)) get exploration boost. Optimistic initialization. Theoretically optimal exploration-exploitation tradeoff.',incorrectFeedback:'UCB balances value estimates with exploration bonuses for uncertain actions.'},
{id:'q5',question:'What is curiosity-driven exploration?',options:[{id:'a',text:'Looking at documentation'},{id:'b',text:'Intrinsic reward for visiting novel/unpredictable states, encouraging exploration beyond task rewards'},{id:'c',text:'Random wandering'},{id:'d',text:'Ignoring environment'}],correctAnswer:'b',explanation:'Curiosity: agent rewarded for prediction errors (novelty). Intrinsic motivation supplements extrinsic task rewards. Enables exploration in sparse reward environments. Methods: ICM, RND.',incorrectFeedback:'Curiosity rewards novelty and unpredictability to drive exploration.'},
  ],
      correctAnswer: 'a',
      explanation: 'UCB adds an uncertainty bonus to each action’s score, giving less-explored actions the benefit of the doubt until proven otherwise.',
      incorrectFeedback: 'UCB balances exploration through an uncertainty bonus.',
    },
  ],
};

export const qTable: Topic = {
  id: 'q-table',
  moduleId: 'reinforcement-learning',
  number: 10,
  title: 'The Q-Table: Tabular Representation & Memory',
  description: 'Understand the Q-Table lookup structure: mapping discrete states (rows) and actions (columns) to estimated cumulative rewards.',
  objectives: [
    'Construct and initialize a 2D Tabular Q-Matrix',
    'Understand memory complexity and the Curse of Dimensionality',
    'Perform state-action value queries and greedy policy extraction',
  ],
  story: `Imagine a taxi driver navigating a small village with 10 intersections. At each intersection, the taxi can turn Left, Right, or go Straight.
  
The driver carries a small notebook with a 10x3 grid:
- 10 rows (one for each intersection)
- 3 columns (Left, Right, Straight)
  
In each box of the grid, the driver writes a score in pencil showing how quickly that turn leads to the train station. When the driver arrives at intersection 4, they look at Row 4:
- Left: 2.1
- Right: 8.9
- Straight: 4.0
  
The driver immediately turns Right!
  
This notebook is a **Q-Table**. In environments with a small number of discrete states, a Q-Table is the cleanest, most transparent form of reinforcement learning memory.`,
  motivation: `**The bedrock of tabular RL**: Before neural networks were applied to RL, the Q-table was the standard method to prove convergence to optimal policies. Mastering Q-tables demystifies how values are stored and retrieved.`,
  concept: {
    simple: `A Q-Table is a spreadsheet:
- **Rows**: The places or situations the agent can be in (States).
- **Columns**: The moves the agent can make (Actions).
- **Cells**: How good that move is (Q-values).
To find the best move, look up your current row and pick the column with the highest number!`,
    technical: `A Q-Table represents the discrete mapping $Q: \\mathcal{S} \\times \\mathcal{A} \\rightarrow \\mathbb{R}$ as a 2D tensor $\\mathbf{Q} \\in \\mathbb{R}^{|\\mathcal{S}| \\times |\\mathcal{A}|}$. The greedy policy is extracted analytically via $\\pi(s) = \\arg\\max_{a} Q(s, a)$. The tabular approach suffers from the Curse of Dimensionality: memory scales as $O(|\\mathcal{S}| \\cdot |\\mathcal{A}|)$, breaking down when state spaces become continuous.`,
  },
  keyTerms: [
    { term: 'Q-Table', simple: 'A grid storing the expected score for every action in every state.', technical: 'A 2D array storing state-action values $Q(s,a)$ indexed by discrete state indices and action indices.' },
    { term: 'Curse of Dimensionality', simple: 'When states explode into billions of combinations, making the table too huge to fit in memory.', technical: 'Exponential growth of state space cardinality $|\\mathcal{S}| = K^d$ as the dimensionality of continuous state variables $d$ increases.' },
  ],
  equations: [
    {
      latex: 'a^* = \\arg\\max_{a \\in \\mathcal{A}} Q(s, a)',
      explanation: 'Greedy Policy Extraction: given a state s, look across the row in the Q-table and select the action a* with the maximum Q-value.',
      symbols: [
        { symbol: 'a^*', meaning: 'Optimal action', interpretation: 'Best move' },
        { symbol: 'Q(s, a)', meaning: 'Q-value in row s, column a', interpretation: 'Expected reward' },
      ],
      example: {
        description: 'Row for State 2: Q(2, Left) = 4.2, Q(2, Right) = 9.8. Max is 9.8.',
        calculation: 'a^* = \\arg\\max([4.2, 9.8]) = \\text{Right}',
        result: 'Greedy policy picks Right',
      },
    },
  ],
  howItWorks: [
    { number: 1, title: 'Initialization', description: 'Create zero matrix of size (num_states, num_actions).' },
    { number: 2, title: 'Lookup', description: 'Current state index s identifies row Q[s, :].' },
    { number: 3, title: 'Selection', description: 'Apply epsilon-greedy selection across row entries.' },
  ],
  applications: [
    { title: 'GridWorld Navigation / FrozenLake', problem: 'Solving 4x4 slippery grid mazes.', solution: 'A 16x4 Q-table learns optimal paths avoiding ice holes and reaching the frisbee.' },
  ],
  activity: {
    type: 'mcq',
    title: 'Q-Table Sizing',
    question: 'An environment has 50 discrete states and 4 discrete actions. How many numbers are stored in its Q-table?',
    options: [
      { id: 'a', text: '200 (50 rows x 4 columns)' },
      { id: 'b', text: '54' },
      { id: 'c', text: '50' },
      { id: 'd', text: '2,000' },
    ],
    correctAnswer: 'a',
    explanation: '50 states multiplied by 4 actions = 200 state-action pairs stored in the Q-table.',
    hint: 'Multiply states by actions.',
  },
  pythonHandsOn: {
    title: 'Building and Querying a Q-Table in NumPy',
    description: 'Initialize a Q-table, insert learned values, and query the optimal action.',
    packages: ['numpy'],
    installCommand: 'pip install numpy',
    imports: [{ code: 'import numpy as np', explanation: 'NumPy for 2D array' }],
    code: [
      { code: '# 4 States (0, 1, 2, 3) and 2 Actions (0=Left, 1=Right)', explanation: 'Grid size' },
      { code: 'num_states = 4', explanation: 'Rows' },
      { code: 'num_actions = 2', explanation: 'Columns' },
      { code: 'q_table = np.zeros((num_states, num_actions)) # Initialize to zeros', explanation: 'Zero matrix' },
      { code: '', explanation: '' },
      { code: '# Simulate learning: update Q-values for State 2', explanation: 'Update state 2' },
      { code: 'q_table[2, 0] = 3.5 # Q(State 2, Left) = 3.5', explanation: 'Left' },
      { code: 'q_table[2, 1] = 8.7 # Q(State 2, Right) = 8.7', explanation: 'Right' },
      { code: '', explanation: '' },
      { code: 'print("Full Q-Table:\\n", q_table)', explanation: 'Display table' },
      { code: '', explanation: '' },
      { code: '# Query best action for State 2:', explanation: 'Query best' },
      { code: 'best_action_state_2 = np.argmax(q_table[2])', explanation: 'Argmax along row' },
      { code: 'print(f"Optimal Action for State 2: {best_action_state_2} (Value: {q_table[2, best_action_state_2]})")', explanation: 'Display best' },
    ],
    executionFlow: [
      { number: 1, title: 'Memory Allocation', description: 'Creates 4x2 matrix of zeroes.' },
      { number: 2, title: 'Greedy Query', description: 'Row 2 has [3.5, 8.7]; argmax selects Action 1 (Right).' },
    ],
    input: '4x2 Q-table with updated row 2',
    output: 'Full Q-Table:\n[[0.  0. ]\n [0.  0. ]\n [3.5 8.7]\n [0.  0. ]]\nOptimal Action for State 2: 1 (Value: 8.7)',
    interpretation: 'The Q-table acts as a direct, interpretable associative lookup memory mapping situations to optimal decisions.',
    colabInstructions: ['Run in Google Colab.'],
  },
  mcqs: [
    {
      id: 'q1',
      question: 'Why does the Q-Table approach fail when applied to real-world self-driving cars with continuous camera inputs?',
      options: [
        { id: 'a', text: 'Continuous camera pixel combinations are practically infinite, making it impossible to create a table with infinite rows' },
        { id: 'b', text: 'Because cars do not have batteries' },
        { id: 'c', text: 'Because NumPy cannot store floating point numbers' },
        { id: 'd', text: 'Because cameras only work with supervised learning' },
      {id:'q2',question:'What is a Q-table?',options:[{id:'a',text:'Database schema'},{id:'b',text:'Tabular representation storing Q(s,a) values for all state-action pairs'},{id:'c',text:'Queue data structure'},{id:'d',text:'Query language'}],correctAnswer:'b',explanation:'Q-table: matrix with rows=states, columns=actions, cells=Q-values. Example: GridWorld with 100 states, 4 actions → 100×4 table. Updated via Q-learning algorithm.',incorrectFeedback:'Q-table stores estimated action values for all state-action pairs.'},
{id:'q3',question:'When does tabular Q-learning work well?',options:[{id:'a',text:'Always'},{id:'b',text:'Small discrete state/action spaces (e.g., GridWorld, simple games)'},{id:'c',text:'High-dimensional continuous spaces'},{id:'d',text:'Never'}],correctAnswer:'b',explanation:'Q-tables scale poorly: 1M states × 10 actions = 10M entries. Works for: taxi navigation (500 states), FrozenLake (16 states). Fails for: Atari pixels (256^(84×84) states), robotics (continuous).',incorrectFeedback:'Tabular methods suit small discrete state-action spaces.'},
{id:'q4',question:'Why can\'t Q-tables handle Atari games?',options:[{id:'a',text:'Q-tables work fine for Atari'},{id:'b',text:'Image input (210×160 RGB pixels) creates exponentially large state space requiring function approximation (DQN)'},{id:'c',text:'Atari is too easy'},{id:'d',text:'Q-learning is obsolete'}],correctAnswer:'b',explanation:'Atari frame: 210×160×3 pixels, each 0-255 → (256)^(210×160×3) ≈ 10^120,000 states. Impossible to store in table. DQN uses CNN to approximate Q(s,a) for any pixel input.',incorrectFeedback:'High-dimensional visual states require neural network function approximation.'},
{id:'q5',question:'What initialization strategy helps Q-table convergence?',options:[{id:'a',text:'All zeros'},{id:'b',text:'Optimistic initialization (high initial Q-values) encourages exploration'},{id:'c',text:'Random negative values'},{id:'d',text:'Initialization doesn\'t matter'}],correctAnswer:'b',explanation:'Optimistic initialization: start Q(s,a) high (e.g., +10). Agent initially tries all actions (they all look good), discovers true values. Systematic exploration before exploitation.',incorrectFeedback:'Optimistic Q-initialization promotes early exploration of all actions.'},
  ],
      correctAnswer: 'a',
      explanation: 'Continuous inputs have infinite possible states (the Curse of Dimensionality). A table cannot store infinite rows, necessitating function approximators like Deep Neural Networks (DQN).',
      incorrectFeedback: 'Infinite continuous state spaces cannot be represented as discrete table rows.',
    },
  ],
};

export const qValueUpdate: Topic = {
  id: 'q-value-update',
  moduleId: 'reinforcement-learning',
  number: 11,
  title: 'The Q-Value Update: The Bellman Equation in Action',
  description: 'Master the mathematical engine of Q-learning: TD error, learning rate alpha, discount factor gamma, and the Bellman optimality update.',
  objectives: [
    'Dissect every term in the Bellman Optimality update equation',
    'Understand Temporal Difference (TD) Error: Target minus Estimate',
    'Trace how Q-values propagate backwards from rewards across time',
  ],
  story: `Imagine reading a thrilling mystery novel.
  
In Chapter 1, you meet a mysterious character named Arthur. You have no idea if Arthur is good or evil; his Q-value in your mind is 0.
  
In Chapter 5, Arthur gives money to an orphanage (a positive immediate reward: +5). You think: "Arthur seems nice!" You update Arthur's value up to +3.
  
In Chapter 10, Arthur betrays the hero and steals the treasure (catastrophic negative reward: -100).
  
Suddenly, looking back at Chapter 5, you realize Arthur giving money was a trap! You adjust Arthur's score way down.
  
In Reinforcement Learning, this is the **Bellman Equation**: we update our current estimate based on immediate reward plus our best estimate of what happens next.`,
  motivation: `**The mathematical jewel of RL**: Richard Bellman’s equation allows an agent to learn optimal long-term behaviors step-by-step without waiting for the entire game to finish.`,
  concept: {
    simple: `The Q-learning update formula:
$$\\text{New Q} = \\text{Old Q} + \\alpha \\times [\\text{Reward} + \\gamma \\times \\text{Best Future Q} - \\text{Old Q}]$$
In plain English:
"Adjust my old belief towards the new reality by taking a step ($\\alpha$) proportional to my surprise (TD Error)."`,
    technical: `The Q-learning update rule implements dynamic programming temporal difference control:
$$Q(S_t, A_t) \\leftarrow Q(S_t, A_t) + \\alpha \\Big[ R_{t+1} + \\gamma \\max_{a} Q(S_{t+1}, a) - Q(S_t, A_t) \\Big]$$
where $\\delta_t = R_{t+1} + \\gamma \\max_a Q(S_{t+1}, a) - Q(S_t, A_t)$ is the Temporal Difference (TD) error. Under standard Robbins-Monro conditions $\\sum \\alpha_t = \\infty, \\sum \\alpha_t^2 < \\infty$, $Q$ converges almost surely to $Q^*$.`,
  },
  keyTerms: [
    { term: 'Temporal Difference (TD) Error ($\\delta$)', simple: 'The difference between what happened (Reward + Future) and what you expected (Old Q).', technical: '$\\delta_t = [R_{t+1} + \\gamma \\max_a Q(S_{t+1}, a)] - Q(S_t, A_t)$, measuring one-step Bellman inconsistency.' },
    { term: 'TD Target', simple: 'The updated reality check: immediate reward plus discounted best future score.', technical: 'The bootstrap estimate $y_t = R_{t+1} + \\gamma \\max_a Q(S_{t+1}, a)$.' },
    { term: 'Learning Rate ($\\alpha$)', simple: 'How much of the new information to absorb (between 0.0 and 1.0).', technical: 'Step size weighting the TD error in updating tabular state-action values.' },
  ],
  equations: [
    {
      latex: 'Q(s, a) \\leftarrow Q(s, a) + \\alpha \\left[ r + \\gamma \\max_{a\'} Q(s\', a\') - Q(s, a) \\right]',
      explanation: 'The Bellman Optimality Equation for Q-learning: updates Q(s,a) toward the TD target.',
      symbols: [
        { symbol: 'Q(s, a)', meaning: 'Current state-action value', interpretation: 'Old belief' },
        { symbol: '\\alpha', meaning: 'Learning rate (0 to 1)', interpretation: 'How much to adjust' },
        { symbol: 'r', meaning: 'Immediate reward', interpretation: 'Points received right now' },
        { symbol: '\\gamma \\max Q(s\', a\')', meaning: 'Discounted max future value', interpretation: 'Best payoff from next state' },
      ],
      example: {
        description: 'Old Q = 5.0, alpha = 0.5, reward r = 2.0, gamma = 0.9, max future Q(s\') = 10.0.',
        calculation: 'Q_{\\text{new}} = 5.0 + 0.5 \\times [2.0 + (0.9 \\times 10.0) - 5.0] = 5.0 + 0.5 \\times [11.0 - 5.0] = 5.0 + 3.0 = 8.0',
        result: 'Q-value updates from 5.0 to 8.0',
      },
    },
  ],
  howItWorks: [
    { number: 1, title: 'Observe Step', description: 'Agent takes action a in state s, lands in s\', and receives reward r.' },
    { number: 2, title: 'Compute Future Max', description: 'Find maximum Q-value in the next state: max_a\' Q(s\', a\').' },
    { number: 3, title: 'Calculate TD Error', description: 'TD Error = r + gamma * max_future_Q - current_Q.' },
    { number: 4, title: 'Apply Update', description: 'Add alpha * TD_Error to current Q(s,a).' },
  ],
  applications: [
    { title: 'Warehouse Logistics Routing', problem: 'Automated Guided Vehicles (AGVs) navigating factory floors with changing obstacles.', solution: 'Q-value updates continuously propagate path congestion delays into route selection.' },
  ],
  activity: {
    type: 'mcq',
    title: 'Bellman Numerical Calculation',
    question: 'Current Q(s,a) = 0.0, alpha = 1.0, reward r = +10, gamma = 0.9, and max Q in next state is 0.0. What is the new Q(s,a)?',
    options: [
      { id: 'a', text: '10.0' },
      { id: 'b', text: '0.0' },
      { id: 'c', text: '9.0' },
      { id: 'd', text: '100.0' },
    ],
    correctAnswer: 'a',
    explanation: 'New Q = 0.0 + 1.0 * [10 + (0.9 * 0.0) - 0.0] = 10.0. With alpha = 1.0, the Q-value completely absorbs the immediate reward of +10.',
    hint: 'Calculate 0 + 1.0 * (10 + 0 - 0).',
  },
  pythonHandsOn: {
    title: 'Single Bellman Q-Update Step in Python',
    description: 'Execute a single Bellman update step and verify numerical convergence.',
    packages: ['numpy'],
    installCommand: 'pip install numpy',
    imports: [{ code: 'import numpy as np', explanation: 'NumPy math' }],
    code: [
      { code: '# Parameters:', explanation: 'Hyperparameters' },
      { code: 'alpha = 0.2 # Learning rate', explanation: 'Alpha' },
      { code: 'gamma = 0.9 # Discount factor', explanation: 'Gamma' },
      { code: '', explanation: '' },
      { code: '# Before step:', explanation: 'Initial state' },
      { code: 'current_q = 4.0', explanation: 'Q(s, a)' },
      { code: 'reward = 2.0', explanation: 'Immediate reward r' },
      { code: 'next_state_q_values = np.array([3.0, 8.0, 5.0]) # Q(s\', :)', explanation: 'Next state actions' },
      { code: '', explanation: '' },
      { code: '# Bellman update step:', explanation: 'Computation' },
      { code: 'max_next_q = np.max(next_state_q_values) # 8.0', explanation: 'Max future Q' },
      { code: 'td_target = reward + gamma * max_next_q', explanation: 'Target = 2 + 0.9*8 = 9.2' },
      { code: 'td_error = td_target - current_q', explanation: 'Error = 9.2 - 4.0 = 5.2' },
      { code: 'new_q = current_q + alpha * td_error', explanation: 'Updated Q = 4 + 0.2*5.2 = 5.04' },
      { code: '', explanation: '' },
      { code: 'print(f"TD Target: {td_target:.2f}")', explanation: 'Print target' },
      { code: 'print(f"TD Error:  {td_error:.2f}")', explanation: 'Print error' },
      { code: 'print(f"Updated Q-Value: from {current_q:.2f} -> {new_q:.2f}")', explanation: 'Print updated Q' },
    ],
    executionFlow: [
      { number: 1, title: 'Max Future Extraction', description: 'Extracts max Q in s\' = 8.0.' },
      { number: 2, title: 'TD Target Computation', description: '2.0 + 0.9 * 8.0 = 9.2.' },
      { number: 3, title: 'Incremental Step', description: 'Q-value shifts from 4.00 to 5.04 toward the target.' },
    ],
    input: 'Current Q=4.0, Reward=2.0, Next Qs=[3, 8, 5]',
    output: 'TD Target: 9.20\nTD Error:  5.20\nUpdated Q-Value: from 4.00 -> 5.04',
    interpretation: 'Through successive Bellman updates, Q-values propagate backwards from terminal rewards to early states.',
    colabInstructions: ['Run in Google Colab.'],
  },
  mcqs: [
    {
      id: 'q1',
      question: 'What does a TD error of exactly zero (TD Error = 0.0) indicate?',
      options: [
        { id: 'a', text: 'The agent’s current Q-value prediction was completely consistent with the observed reward and future estimate (perfect equilibrium)' },
        { id: 'b', text: 'The program crashed' },
        { id: 'c', text: 'The agent lost the game' },
        { id: 'd', text: 'The learning rate is zero' },
      {id:'q2',question:'What is the Bellman equation for Q-values?',options:[{id:'a',text:'Q(s,a) = r'},{id:'b',text:'Q(s,a) = r + γ·max_a\' Q(s\',a\'): current Q equals reward plus discounted future value'},{id:'c',text:'Q(s,a) = s + a'},{id:'d',text:'Q(s,a) = random'}],correctAnswer:'b',explanation:'Bellman optimality equation: Q*(s,a) = E[r + γ·max_a\' Q*(s\',a\')]. Decomposes value into immediate reward r plus discounted best future value. Foundation of Q-learning.',incorrectFeedback:'Bellman equation decomposes Q-values into immediate + future components.'},
{id:'q3',question:'What is the Q-learning update rule?',options:[{id:'a',text:'Q(s,a) := Q(s,a)'},{id:'b',text:'Q(s,a) := Q(s,a) + α[r + γ·max_a\' Q(s\',a\') - Q(s,a)]: temporal difference update'},{id:'c',text:'Q(s,a) := 0'},{id:'d',text:'Q(s,a) := random'}],correctAnswer:'b',explanation:'Q-learning: Q(s,a) ← Q(s,a) + α·TD_error where TD_error = r + γ·max Q(s\',a\') - Q(s,a). Learning rate α ∈ (0,1) controls update speed.',incorrectFeedback:'Q-learning updates values using TD error: target - current prediction.'},
{id:'q4',question:'What is the learning rate α (alpha) in Q-learning?',options:[{id:'a',text:'Discount factor'},{id:'b',text:'Step size controlling how much new information overwrites old: α ∈ (0,1]'},{id:'c',text:'Number of episodes'},{id:'d',text:'State space size'}],correctAnswer:'b',explanation:'Learning rate α: α=0 → no learning, α=1 → complete overwrite. Typical: α=0.1 (10% new, 90% old). Often decayed over time. Too high → instability; too low → slow convergence.',incorrectFeedback:'Learning rate α controls the weight of new information in updates.'},
{id:'q5',question:'What is temporal difference (TD) learning?',options:[{id:'a',text:'Time zones'},{id:'b',text:'Learn from difference between successive predictions: TD_error = r + γV(s\') - V(s)'},{id:'c',text:'Measuring training time'},{id:'d',text:'Parallel computing'}],correctAnswer:'b',explanation:'TD learning: bootstrap from current estimates. Update V(s) toward r + γV(s\') (TD target). Combines Monte Carlo (sample based) and dynamic programming (bootstrap). Foundation of Q-learning, SARSA.',incorrectFeedback:'TD learning updates values using bootstrapped estimates of future returns.'},
  ],
      correctAnswer: 'a',
      explanation: 'When TD error is 0, Target = Old Q, meaning the Bellman optimality equation is satisfied and no update to the Q-value is required.',
      incorrectFeedback: 'A zero TD error means the current value estimate matches the Bellman target perfectly.',
    },
  ],
};

export const deepQNetworks: Topic = {
  id: 'deep-q-networks',
  moduleId: 'reinforcement-learning',
  number: 12,
  title: 'Deep Q-Networks (DQN): Module 4 Capstone',
  description: 'Synthesize Deep Learning and Reinforcement Learning: Deep Q-Networks (DQN), Experience Replay, and Target Networks.',
  objectives: [
    'Understand how Deep Q-Networks replace tabular Q-tables with neural network function approximators',
    'Examine the stability breakthroughs: Experience Replay Buffer and Target Networks',
    'Analyze DeepMind’s historic 2015 breakthrough mastering Atari 2600 from raw pixels',
  ],
  story: `In 2013, a London-based startup named DeepMind published a paper that sent shockwaves through the artificial intelligence community: "Playing Atari with Deep Reinforcement Learning."
  
They created a single algorithm that learned to play seven different Atari 2600 video games—including *Breakout*, *Pong*, and *Space Invaders*.
  
The AI was not given the rules of the games, and it was not given manual features. It was fed only the raw screen pixels and the score counter! In *Breakout*, the network discovered an ingenious strategy after 400 episodes: tunneling through the side wall of bricks to send the ball ricocheting repeatedly across the ceiling!
  
Google acquired DeepMind months later for over $500 million. Deep Q-Networks had unified deep representation learning with reinforcement decision-making.`,
  motivation: `**The birth of Deep Reinforcement Learning**: Combining deep neural networks with reinforcement learning broke the curse of dimensionality, allowing AI to perceive high-dimensional sensory worlds and act intelligently.`,
  concept: {
    simple: `A Q-table cannot hold 10 billion rows for video game screens.
So DeepMind replaced the table with a **Deep Neural Network**:
- Input: The 4 screenshot images of the game.
- Output: A Q-value for each button on the joystick (Left, Right, Fire).
Two crucial tricks make it work:
1. **Experience Replay**: Storing memories in a photo album and reviewing them randomly so the AI doesn't forget past lessons.
2. **Target Network**: Freezing a separate copy of the network to act as a stable teacher.`,
    technical: `Deep Q-Networks approximate action-values $Q(s, a; \\boldsymbol{\\theta}) \\approx Q^*(s, a)$ parameterized by deep convolutional weights $\\boldsymbol{\\theta}$. To break temporal auto-correlations and prevent policy divergence, DQN introduces two algorithmic stabilizing mechanisms:
1. **Experience Replay Buffer $\\mathcal{D}$**: Uniform random mini-batch sampling from historical transitions $(s, a, r, s')$.
2. **Fixed Target Network $\\boldsymbol{\\theta}^-$**: Decoupling target generation $y_t = r + \\gamma \\max_{a'} Q(s', a'; \\boldsymbol{\\theta}^-)$ with periodic parameter synchronization $\\boldsymbol{\\theta}^- \\leftarrow \\boldsymbol{\\theta}$.`,
  },
  keyTerms: [
    { term: 'Experience Replay Buffer', simple: 'A memory bank where past experiences are saved and randomly sampled to break bad habits.', technical: 'A rolling FIFO buffer storing transitions $\\mathcal{D} = \\{(s_t, a_t, r_t, s_{t+1})\\}$ sampled uniformly to ensure i.i.d. training batches.' },
    { term: 'Target Network ($\\theta^-$)', simple: 'A frozen copy of the network used to compute targets so the goalposts don’t keep moving.', technical: 'A second set of network weights held static for $C$ steps to prevent runaway feedback loops between current estimates and targets.' },
  ],
  equations: [
    {
      latex: '\\mathcal{L}(\\boldsymbol{\\theta}) = \\mathbb{E}_{(s,a,r,s\') \\sim \\mathcal{D}} \\left[ \\left( r + \\gamma \\max_{a\'} Q(s\', a\'; \\boldsymbol{\\theta}^-) - Q(s, a; \\boldsymbol{\\theta}) \\right)^2 \\right]',
      explanation: 'DQN Loss Function: Mean squared error between the stable target network’s Bellman prediction and the current active network’s Q-value.',
      symbols: [
        { symbol: '\\boldsymbol{\\theta}', meaning: 'Active network weights', interpretation: 'Being updated via gradient descent' },
        { symbol: '\\boldsymbol{\\theta}^-', meaning: 'Target network weights', interpretation: 'Frozen periodically' },
        { symbol: '\\mathcal{D}', meaning: 'Replay buffer', interpretation: 'Random mini-batch source' },
      ],
      example: {
        description: 'Target network predicts TD target y = 10.0; active network predicts Q = 7.0.',
        calculation: '\\text{Loss} = (10.0 - 7.0)^2 = 3.0^2 = 9.0',
        result: 'Gradient descent updates theta to reduce loss from 9.0 toward 0',
      },
    },
  ],
  howItWorks: [
    { number: 1, title: 'Interaction & Storage', description: 'Agent takes epsilon-greedy step and stores transition (s, a, r, s\', done) in replay buffer.' },
    { number: 2, title: 'Random Sampling', description: 'Sample mini-batch of 32 transitions uniformly from replay memory.' },
    { number: 3, title: 'Target Computation', description: 'Compute Bellman targets using frozen target network theta-.' },
    { number: 4, title: 'Gradient Descent', description: 'Update active weights theta via Adam optimizer on MSE loss.' },
    { number: 5, title: 'Periodic Synchronization', description: 'Every C steps (e.g. 1000 steps), copy active weights to target network.' },
  ],
  applications: [
    { title: 'Atari 2600 Benchmark Superhuman Play', problem: 'Mastering dozens of video games directly from screen pixels.', solution: 'Nature 2015 DQN achieved superhuman performance on over half of all 49 tested Atari games.' },
  ],
  activity: {
    type: 'mcq',
    title: 'DQN Stability Mechanisms',
    question: 'Why does DQN use an Experience Replay buffer instead of training immediately on consecutive sequential steps?',
    options: [
      { id: 'a', text: 'Consecutive video frames are highly correlated, which violates the i.i.d. assumption of neural networks and leads to catastrophic forgetting' },
      { id: 'b', text: 'Because replay buffers delete half the data' },
      { id: 'c', text: 'Because replay buffers make graphics look better' },
      { id: 'd', text: 'To save hard drive space' },
    ],
    correctAnswer: 'a',
    explanation: 'Sequential frames are strongly correlated ($s_{t+1}$ looks almost identical to $s_t$). Randomly sampling from a large replay buffer breaks these temporal correlations, stabilizing gradient descent.',
    hint: 'Think about temporal correlation and the need for independent, identically distributed (i.i.d.) training data.',
  },
  pythonHandsOn: {
    title: 'Building a Deep Q-Network in PyTorch',
    description: 'Construct a DQN architecture with active and target networks.',
    packages: ['torch'],
    installCommand: 'pip install torch',
    imports: [
      { code: 'import torch', explanation: 'PyTorch' },
      { code: 'import torch.nn as nn', explanation: 'Neural network layers' },
    ],
    code: [
      { code: '# Define Deep Q-Network for CartPole: 4 state inputs -> 2 action Q-values', explanation: 'DQN class' },
      { code: 'class DQN(nn.Module):', explanation: 'DQN module' },
      { code: '    def __init__(self, state_dim=4, action_dim=2):', explanation: 'Constructor' },
      { code: '        super().__init__()', explanation: 'Base init' },
      { code: '        self.net = nn.Sequential(', explanation: 'Network' },
      { code: '            nn.Linear(state_dim, 64),', explanation: 'Hidden layer 1' },
      { code: '            nn.ReLU(),', explanation: 'ReLU activation' },
      { code: '            nn.Linear(64, 64),', explanation: 'Hidden layer 2' },
      { code: '            nn.ReLU(),', explanation: 'ReLU activation' },
      { code: '            nn.Linear(64, action_dim) # Outputs Q-value for each action!', explanation: 'Q outputs' },
      { code: '        )', explanation: 'Close' },
      { code: '    def forward(self, x):', explanation: 'Forward pass' },
      { code: '        return self.net(x)', explanation: 'Return Q-values' },
      { code: '', explanation: '' },
      { code: '# 1. Active Policy Network (trained continuously):', explanation: 'Active network' },
      { code: 'policy_net = DQN()', explanation: 'Instantiate policy net' },
      { code: '', explanation: '' },
      { code: '# 2. Target Network (frozen copy):', explanation: 'Target network' },
      { code: 'target_net = DQN()', explanation: 'Instantiate target net' },
      { code: 'target_net.load_state_dict(policy_net.state_dict()) # Sync weights', explanation: 'Copy weights' },
      { code: 'target_net.eval() # Freeze target network', explanation: 'Set to eval' },
      { code: '', explanation: '' },
      { code: 'state_sample = torch.tensor([[0.05, 0.12, -0.04, 0.01]]) # 4 CartPole features', explanation: 'Sample state' },
      { code: 'q_values = policy_net(state_sample)', explanation: 'Compute Q-values' },
      { code: 'print("Predicted Q-Values for [Push Left, Push Right]:\\n", q_values.detach().numpy().round(3))', explanation: 'Display Q-values' },
      { code: 'best_action = torch.argmax(q_values).item()', explanation: 'Greedy action' },
      { code: 'print("Selected Greedy Action:", best_action)', explanation: 'Display choice' },
    ],
    executionFlow: [
      { number: 1, title: 'Dual Network Setup', description: 'Initializes policy_net for gradient updates and target_net for stable Bellman targets.' },
      { number: 2, title: 'Q-Value Inference', description: 'Evaluates state and outputs Q-values for all discrete actions simultaneously.' },
    ],
    input: '4-element state vector representing CartPole state',
    output: 'Predicted Q-Values for [Push Left, Push Right]:\n[[-0.082  0.114]]\nSelected Greedy Action: 1',
    interpretation: 'The deep network maps continuous state vectors directly to action Q-values, completely eliminating the need for a discrete Q-table.',
    colabInstructions: ['Run in Google Colab.'],
  },
  mcqs: [
    {
      id: 'q1',
      question: 'What is the purpose of the frozen Target Network in Deep Q-Networks (DQN)?',
      options: [
        { id: 'a', text: 'To prevent the moving target problem where the target values shift continuously with every single parameter update, causing catastrophic divergence' },
        { id: 'b', text: 'To encrypt game data' },
        { id: 'c', text: 'To slow down the training loop' },
        { id: 'd', text: 'To convert discrete actions into continuous angles' },
      {id:'q2',question:'What problem does DQN solve that Q-tables cannot?',options:[{id:'a',text:'Nothing'},{id:'b',text:'High-dimensional state spaces (images) via neural network function approximation'},{id:'c',text:'DQN is slower'},{id:'d',text:'Q-tables are better'}],correctAnswer:'b',explanation:'DQN replaces Q-table with CNN: Q(s,a;θ) approximates values for any input pixels. Enables learning from raw Atari frames (84×84×4). Breakthrough: Mnih et al. 2015 Nature paper.',incorrectFeedback:'DQN uses neural networks to generalize Q-values across high-dimensional states.'},
{id:'q3',question:'What is experience replay in DQN?',options:[{id:'a',text:'Replaying videos'},{id:'b',text:'Store transitions (s,a,r,s\') in memory buffer; train on random mini-batches to break temporal correlations'},{id:'c',text:'Deleting data'},{id:'d',text:'Real-time learning only'}],correctAnswer:'b',explanation:'Experience replay: store 1M transitions, sample random batches for training. Breaks correlation between consecutive samples, improves stability. Reuses data efficiently (sample efficiency).',incorrectFeedback:'Experience replay stores and resamples transitions to stabilize training.'},
{id:'q4',question:'What is the target network in DQN?',options:[{id:'a',text:'The enemy AI'},{id:'b',text:'Separate frozen network θ⁻ for computing TD targets: r + γ·max Q(s\',a\'θ⁻), updated periodically'},{id:'c',text:'The main network'},{id:'d',text:'A random network'}],correctAnswer:'b',explanation:'Target network θ⁻: frozen copy of Q-network, updated every C steps. Stabilizes learning by fixing TD targets temporarily. Prevents chasing moving target problem.',incorrectFeedback:'Target networks stabilize training by providing consistent TD targets.'},
{id:'q5',question:'What are the key innovations in DQN (2015)?',options:[{id:'a',text:'Just using neural networks'},{id:'b',text:'Combination of CNN for vision + experience replay + target networks + frame stacking'},{id:'c',text:'Random search'},{id:'d',text:'No innovations'}],correctAnswer:'b',explanation:'DQN innovations: (1) CNN processes raw pixels, (2) experience replay buffer, (3) target network for stability, (4) frame stacking (4 frames) for temporal info. Achieved human-level Atari performance.',incorrectFeedback:'DQN combines CNNs, experience replay, target networks, and frame stacking.'},
  ],
      correctAnswer: 'a',
      explanation: 'Without a frozen target network, updating theta changes both the prediction and the target simultaneously, like a dog chasing its own tail. Freezing the target network stabilizes training.',
      incorrectFeedback: 'Target networks stabilize training by keeping target values fixed for intervals.',
    },
  ],
};

export const module4Topics: Topic[] = [
  whatIsRL,
  rlAgent,
  rlEnvironment,
  state,
  action,
  reward,
  policy,
  explorationExploitation,
  qLearning,
  qTable,
  qValueUpdate,
  deepQNetworks,
];
