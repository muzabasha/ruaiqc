import { Topic } from '@/lib/types';

export const qLearning: Topic = {
  id: 'q-learning',
  moduleId: 'reinforcement-learning',
  number: 9,
  title: 'Q-Learning',
  description: 'Learn how agents discover optimal strategies through Q-learning, a fundamental reinforcement learning algorithm.',
  objectives: [
    'Understand the Q-learning algorithm',
    'Learn how Q-values represent action quality',
    'Implement a simple Q-learning example in Python',
    'Visualize the learning process',
  ],
  story: `Imagine you're in a new city trying to find the best route from your hotel to a famous landmark. You don't have a map, but you can explore.

On your first attempt, you take random turns, sometimes getting closer, sometimes farther away. When you finally reach your destination, you remember which turns led you forward and which led you astray.

The next day, you try again. This time, you favor the turns that worked well yesterday, but you also try a few new paths — maybe there's an even better route. Over many days, you learn not just one route, but the value of taking each possible turn at each intersection.

Eventually, you know exactly which turn to take at every point to reach your destination as quickly as possible. This is essentially how Q-learning works — an agent learns the value (quality) of each action in each situation through trial, error, and experience.`,
  motivation: `**Why learn Q-learning?**

1. **Foundational algorithm**: Q-learning is one of the most important and widely-used reinforcement learning algorithms.

2. **No model required**: Unlike some methods, Q-learning doesn't need to know how the environment works — it learns purely from experience.

3. **Proven effectiveness**: Q-learning has successfully solved games, robot control, resource management, and many real-world problems.

4. **Gateway to deep RL**: Understanding Q-learning is essential before learning Deep Q-Networks (DQN) and modern deep reinforcement learning.

5. **Practical applications**: Used in robotics, game AI, recommendation systems, traffic control, and resource optimization.`,
  concept: {
    simple: `Q-learning is a method where an agent learns the "quality" (Q-value) of taking each possible action in each possible situation. It explores the environment, tries different actions, receives rewards, and gradually learns which actions lead to the best long-term outcomes. The "Q" stands for "quality" — how good is this action in this situation?`,
    technical: `Q-learning is a model-free, off-policy reinforcement learning algorithm that learns the optimal action-value function Q*(s,a), which represents the expected cumulative reward of taking action a in state s and following the optimal policy thereafter. The algorithm updates Q-values iteratively using the Bellman equation, balancing exploration and exploitation to converge to the optimal policy.`,
  },
  keyTerms: [
    {
      term: 'Q-Value',
      simple: 'A number representing how good an action is in a particular situation',
      technical: 'The expected cumulative future reward for taking a specific action in a specific state and following the optimal policy thereafter',
    },
    {
      term: 'Q-Table',
      simple: 'A table storing Q-values for all state-action pairs',
      technical: 'A lookup table with states as rows and actions as columns, where each cell contains the Q-value Q(s,a)',
    },
    {
      term: 'Learning Rate (α)',
      simple: 'How quickly the agent updates its knowledge',
      technical: 'A hyperparameter (0 < α ≤ 1) controlling the degree to which new information overrides old information in Q-value updates',
    },
    {
      term: 'Discount Factor (γ)',
      simple: 'How much the agent values future rewards compared to immediate ones',
      technical: 'A hyperparameter (0 ≤ γ ≤ 1) determining the present value of future rewards',
    },
  ],
  equations: [
    {
      latex: 'Q(s,a) \\leftarrow Q(s,a) + \\alpha[r + \\gamma \\max_{a\'} Q(s\',a\') - Q(s,a)]',
      explanation: 'This is the Q-learning update rule. It adjusts the Q-value for taking action a in state s based on the reward received and the expected future rewards.',
      symbols: [
        {
          symbol: 'Q(s,a)',
          meaning: 'Current Q-value for state s and action a',
          interpretation: 'How good we currently think this action is in this situation',
        },
        {
          symbol: 'α (alpha)',
          meaning: 'Learning rate',
          interpretation: 'How much we update our belief (typically 0.1 to 0.5)',
        },
        {
          symbol: 'r',
          meaning: 'Reward received',
          interpretation: 'Immediate feedback from taking the action',
        },
        {
          symbol: 'γ (gamma)',
          meaning: 'Discount factor',
          interpretation: 'How much we care about future rewards (typically 0.9 to 0.99)',
        },
        {
          symbol: 's\'',
          meaning: 'Next state',
          interpretation: 'The new situation after taking the action',
        },
        {
          symbol: 'max Q(s\',a\')',
          meaning: 'Maximum Q-value in next state',
          interpretation: 'The value of the best action we can take from the new situation',
        },
      ],
      example: {
        description: 'Suppose we are in state s=5, take action a=\'right\', receive reward r=10, move to state s\'=7, and our learning rate α=0.1 and discount factor γ=0.9. Current Q(5,right)=20, and the maximum Q-value in state 7 is 30.',
        calculation: `Q(5,right) = 20 + 0.1[10 + 0.9×30 - 20]
Q(5,right) = 20 + 0.1[10 + 27 - 20]
Q(5,right) = 20 + 0.1[17]
Q(5,right) = 20 + 1.7
Q(5,right) = 21.7`,
        result: 'The Q-value for taking action "right" in state 5 increases from 20 to 21.7, indicating we now believe this action is slightly better than we thought before.',
      },
    },
  ],
  howItWorks: [
    {
      number: 1,
      title: 'Initialize Q-Table',
      description: 'Create a table with all possible states and actions. Set all Q-values to zero (or small random values).',
    },
    {
      number: 2,
      title: 'Observe Current State',
      description: 'The agent looks at its current situation in the environment.',
    },
    {
      number: 3,
      title: 'Choose Action',
      description: 'Select an action using an exploration strategy (like epsilon-greedy): usually pick the best known action, but sometimes try random actions to explore.',
    },
    {
      number: 4,
      title: 'Take Action and Observe',
      description: 'Execute the action, observe the reward received and the new state.',
    },
    {
      number: 5,
      title: 'Update Q-Value',
      description: 'Use the Q-learning formula to update the Q-value based on the reward and expected future rewards.',
    },
    {
      number: 6,
      title: 'Repeat',
      description: 'Continue this process for many episodes until Q-values converge to optimal values.',
    },
  ],
  applications: [
    {
      title: 'Game Playing',
      problem: 'Teaching a computer to play games optimally without programming specific strategies.',
      solution: 'Q-learning discovers winning strategies by playing many games and learning which moves lead to victory.',
    },
    {
      title: 'Robot Navigation',
      problem: 'A robot needs to learn to navigate through a space and reach goals while avoiding obstacles.',
      solution: 'Q-learning allows the robot to learn optimal paths through trial and error, discovering efficient routes.',
    },
    {
      title: 'Resource Management',
      problem: 'Optimizing when to charge batteries, allocate server resources, or schedule tasks efficiently.',
      solution: 'Q-learning learns optimal timing and allocation strategies that maximize long-term efficiency.',
    },
  ],
  pythonHandsOn: {
    title: 'Simple Q-Learning: Grid World Navigation',
    description: 'We\'ll implement Q-learning for a simple grid world where an agent learns to reach a goal.',
    packages: ['numpy', 'matplotlib'],
    installCommand: '!pip install numpy matplotlib',
    imports: [
      {
        code: 'import numpy as np',
        explanation: 'NumPy provides numerical array operations for our Q-table and calculations.',
      },
      {
        code: 'import matplotlib.pyplot as plt',
        explanation: 'Matplotlib helps us visualize the learning progress and Q-values.',
      },
    ],
    code: [
      {
        code: '# Define the environment',
        explanation: 'We\'ll create a simple 5x5 grid world.',
      },
      {
        code: 'GRID_SIZE = 5',
        explanation: 'Our environment is a 5x5 grid (states 0-24).',
      },
      {
        code: 'START_STATE = 0',
        explanation: 'Agent starts at the top-left corner.',
      },
      {
        code: 'GOAL_STATE = 24',
        explanation: 'Goal is at the bottom-right corner.',
      },
      {
        code: '',
        explanation: '',
      },
      {
        code: '# Q-learning parameters',
        explanation: 'Set hyperparameters for the learning process.',
      },
      {
        code: 'LEARNING_RATE = 0.1',
        explanation: 'Alpha: how fast we update Q-values.',
      },
      {
        code: 'DISCOUNT_FACTOR = 0.9',
        explanation: 'Gamma: how much we value future rewards.',
      },
      {
        code: 'EPSILON = 0.1',
        explanation: 'Probability of exploring (random action).',
      },
      {
        code: 'EPISODES = 500',
        explanation: 'Number of training episodes.',
      },
      {
        code: '',
        explanation: '',
      },
      {
        code: '# Initialize Q-table',
        explanation: 'Create table with Q-values for all state-action pairs.',
      },
      {
        code: 'num_states = GRID_SIZE * GRID_SIZE',
        explanation: 'Total states = 5 × 5 = 25 positions.',
      },
      {
        code: 'num_actions = 4  # up, down, left, right',
        explanation: 'Four possible actions at each state.',
      },
      {
        code: 'Q = np.zeros((num_states, num_actions))',
        explanation: 'Q-table initialized with zeros.',
      },
      {
        code: '',
        explanation: '',
      },
      {
        code: '# Helper function: get next state',
        explanation: 'Determines where the agent moves based on action.',
      },
      {
        code: 'def get_next_state(state, action):',
        explanation: 'Function to calculate the result of taking an action.',
      },
      {
        code: '    row, col = state // GRID_SIZE, state % GRID_SIZE',
        explanation: 'Convert state number to row and column position.',
      },
      {
        code: '    if action == 0 and row > 0: row -= 1  # up',
        explanation: 'Move up if not at top edge.',
      },
      {
        code: '    elif action == 1 and row < GRID_SIZE-1: row += 1  # down',
        explanation: 'Move down if not at bottom edge.',
      },
      {
        code: '    elif action == 2 and col > 0: col -= 1  # left',
        explanation: 'Move left if not at left edge.',
      },
      {
        code: '    elif action == 3 and col < GRID_SIZE-1: col += 1  # right',
        explanation: 'Move right if not at right edge.',
      },
      {
        code: '    return row * GRID_SIZE + col',
        explanation: 'Convert row, column back to state number.',
      },
      {
        code: '',
        explanation: '',
      },
      {
        code: '# Helper function: get reward',
        explanation: 'Defines rewards for reaching different states.',
      },
      {
        code: 'def get_reward(state):',
        explanation: 'Returns reward based on the state reached.',
      },
      {
        code: '    if state == GOAL_STATE: return 100',
        explanation: 'Large positive reward for reaching the goal.',
      },
      {
        code: '    else: return -1',
        explanation: 'Small negative reward for each step (encourages efficiency).',
      },
      {
        code: '',
        explanation: '',
      },
      {
        code: '# Training loop',
        explanation: 'Run multiple episodes to train the agent.',
      },
      {
        code: 'rewards_per_episode = []',
        explanation: 'Track total reward in each episode.',
      },
      {
        code: '',
        explanation: '',
      },
      {
        code: 'for episode in range(EPISODES):',
        explanation: 'Loop through training episodes.',
      },
      {
        code: '    state = START_STATE',
        explanation: 'Start each episode at the initial position.',
      },
      {
        code: '    total_reward = 0',
        explanation: 'Track cumulative reward for this episode.',
      },
      {
        code: '    steps = 0',
        explanation: 'Count steps taken in this episode.',
      },
      {
        code: '    ',
        explanation: '',
      },
      {
        code: '    while state != GOAL_STATE and steps < 100:',
        explanation: 'Continue until goal reached or max steps.',
      },
      {
        code: '        # Choose action (epsilon-greedy)',
        explanation: 'Balance exploration vs exploitation.',
      },
      {
        code: '        if np.random.random() < EPSILON:',
        explanation: 'With probability epsilon, explore randomly.',
      },
      {
        code: '            action = np.random.randint(0, num_actions)',
        explanation: 'Pick a random action.',
      },
      {
        code: '        else:',
        explanation: 'Otherwise, exploit current knowledge.',
      },
      {
        code: '            action = np.argmax(Q[state])',
        explanation: 'Pick action with highest Q-value.',
      },
      {
        code: '        ',
        explanation: '',
      },
      {
        code: '        # Take action',
        explanation: 'Execute the chosen action.',
      },
      {
        code: '        next_state = get_next_state(state, action)',
        explanation: 'Observe resulting state.',
      },
      {
        code: '        reward = get_reward(next_state)',
        explanation: 'Get reward for reaching new state.',
      },
      {
        code: '        ',
        explanation: '',
      },
      {
        code: '        # Q-learning update',
        explanation: 'Apply the Q-learning formula.',
      },
      {
        code: '        best_next_q = np.max(Q[next_state])',
        explanation: 'Find best Q-value in next state.',
      },
      {
        code: '        Q[state, action] = Q[state, action] + LEARNING_RATE * (reward + DISCOUNT_FACTOR * best_next_q - Q[state, action])',
        explanation: 'Update Q-value using the Q-learning equation.',
      },
      {
        code: '        ',
        explanation: '',
      },
      {
        code: '        state = next_state',
        explanation: 'Move to next state.',
      },
      {
        code: '        total_reward += reward',
        explanation: 'Accumulate reward.',
      },
      {
        code: '        steps += 1',
        explanation: 'Count the step.',
      },
      {
        code: '    ',
        explanation: '',
      },
      {
        code: '    rewards_per_episode.append(total_reward)',
        explanation: 'Store episode reward for analysis.',
      },
      {
        code: '',
        explanation: '',
      },
      {
        code: '# Visualize learning progress',
        explanation: 'Plot how rewards improved over time.',
      },
      {
        code: 'plt.figure(figsize=(10, 5))',
        explanation: 'Create a figure for the plot.',
      },
      {
        code: 'plt.plot(rewards_per_episode)',
        explanation: 'Plot rewards vs episode number.',
      },
      {
        code: 'plt.xlabel(\'Episode\')',
        explanation: 'Label x-axis.',
      },
      {
        code: 'plt.ylabel(\'Total Reward\')',
        explanation: 'Label y-axis.',
      },
      {
        code: 'plt.title(\'Q-Learning Progress: Reward per Episode\')',
        explanation: 'Add title.',
      },
      {
        code: 'plt.grid(True)',
        explanation: 'Add grid for readability.',
      },
      {
        code: 'plt.show()',
        explanation: 'Display the plot.',
      },
      {
        code: '',
        explanation: '',
      },
      {
        code: 'print(f"Training completed over {EPISODES} episodes")',
        explanation: 'Print confirmation message.',
      },
      {
        code: 'print(f"Final average reward (last 100 episodes): {np.mean(rewards_per_episode[-100:]):.2f}")',
        explanation: 'Show average performance in final episodes.',
      },
    ],
    executionFlow: [
      {
        number: 1,
        title: 'Environment Setup',
        description: 'Define grid world parameters and initialize Q-table with zeros.',
      },
      {
        number: 2,
        title: 'Episode Loop',
        description: 'Run 500 training episodes where the agent explores and learns.',
      },
      {
        number: 3,
        title: 'Action Selection',
        description: 'Use epsilon-greedy strategy to balance exploration and exploitation.',
      },
      {
        number: 4,
        title: 'Q-Value Update',
        description: 'Apply Q-learning formula to update knowledge based on experience.',
      },
      {
        number: 5,
        title: 'Visualization',
        description: 'Plot learning progress showing improvement over episodes.',
      },
    ],
    input: 'A 5×5 grid environment with start state (0) and goal state (24).',
    output: 'A trained Q-table and a plot showing learning progress over 500 episodes.',
    interpretation: 'Initially, the agent explores randomly, receiving negative rewards. As training progresses, the Q-table improves, and the agent learns to reach the goal more efficiently. The upward trend in the reward plot shows successful learning — the agent discovers better strategies over time.',
    colabInstructions: [
      'Open Google Colab (colab.research.google.com)',
      'Create a new notebook',
      'Copy the complete code above',
      'Paste into a Colab cell',
      'Run the cell (Shift + Enter)',
      'Observe the learning progress plot',
    ],
  },
  mcqs: [
    {
      id: 'q1',
      question: 'What does the "Q" in Q-learning stand for?',
      options: [
        { id: 'a', text: 'Quantum' },
        { id: 'b', text: 'Quality' },
        { id: 'c', text: 'Question' },
        { id: 'd', text: 'Quick' },
      ],
      correctAnswer: 'b',
      explanation: 'The "Q" stands for "Quality". Q-values represent the quality or expected value of taking a particular action in a particular state.',
      incorrectFeedback: 'Q-learning gets its name from the Q-value, which represents the quality (expected cumulative reward) of taking an action in a given state.',
    },
    {
      id: 'q2',
      question: 'What is the purpose of the learning rate (α) in Q-learning?',
      options: [
        { id: 'a', text: 'It determines how many episodes to run' },
        { id: 'b', text: 'It controls how quickly Q-values are updated with new information' },
        { id: 'c', text: 'It sets the maximum reward value' },
        { id: 'd', text: 'It defines the number of states' },
      ],
      correctAnswer: 'b',
      explanation: 'The learning rate α controls how much new information overrides old Q-values. A higher α means faster updates, while a lower α means more gradual learning that weighs historical data more heavily.',
      incorrectFeedback: 'The learning rate (α) is a parameter that determines how much we update our Q-values when we learn something new. It balances new experience with existing knowledge.',
    },
    {
      id: 'q3',
      question: 'What does the discount factor (γ) control?',
      options: [
        { id: 'a', text: 'How much the agent values immediate vs. future rewards' },
        { id: 'b', text: 'The size of the Q-table' },
        { id: 'c', text: 'The number of actions available' },
        { id: 'd', text: 'The exploration rate' },
      ],
      correctAnswer: 'a',
      explanation: 'The discount factor γ determines how much the agent values future rewards compared to immediate rewards. A γ close to 1 means future rewards are almost as valuable as immediate rewards, while γ close to 0 makes the agent focus on immediate rewards.',
      incorrectFeedback: 'The discount factor (γ) determines the present value of future rewards. It answers: "How much do I care about long-term consequences versus immediate benefits?"',
    },
    {
      id: 'q4',
      question: 'In the Q-learning update formula, what does max Q(s\',a\') represent?',
      options: [
        { id: 'a', text: 'The worst possible next action' },
        { id: 'b', text: 'The value of the best action we can take from the next state' },
        { id: 'c', text: 'The average of all Q-values' },
        { id: 'd', text: 'The current reward' },
      ],
      correctAnswer: 'b',
      explanation: 'max Q(s\',a\') finds the highest Q-value among all possible actions in the next state s\'. This represents the best action we could take from that new state, which helps us estimate the total future value of our current action.',
      incorrectFeedback: 'max Q(s\',a\') looks ahead to the next state and asks: "What\'s the best thing I could do from there?" This expected future value is crucial for learning long-term strategies.',
    },
    {
      id: 'q5',
      question: 'Why is the epsilon-greedy strategy used in Q-learning?',
      options: [
        { id: 'a', text: 'To make the algorithm run faster' },
        { id: 'b', text: 'To balance exploration of new actions with exploitation of known good actions' },
        { id: 'c', text: 'To reduce memory usage' },
        { id: 'd', text: 'To initialize Q-values' },
      ],
      correctAnswer: 'b',
      explanation: 'Epsilon-greedy balances exploration (trying new actions to discover potentially better strategies) with exploitation (using currently known best actions). Without exploration, the agent might miss better solutions. Without exploitation, it never uses what it learned.',
      incorrectFeedback: 'Epsilon-greedy addresses a fundamental dilemma: should we try new things (explore) or use what we know works (exploit)? By randomly exploring with probability ε and exploiting otherwise, we gradually discover optimal strategies while also benefiting from current knowledge.',
    },
  ],
};
