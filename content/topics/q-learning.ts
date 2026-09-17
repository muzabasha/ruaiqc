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
  learningResource: {
    title: 'Lesson 6: Reinforcement Learning Foundations',
    pdfUrl: '/presentations/Lesson6.pdf',
    description: 'Q-learning, Bellman optimality equation, exploration-exploitation trade-offs, and deep Q-learning.',
    lessonNumber: 6,
    pages: 12,
    author: 'Dr. Syed Muzamil Basha',
  },
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
        code: '# ─── SECTION 1: ENVIRONMENT SETUP ───────────────────────────────────────',
        explanation: '📌 Section 1 begins here. We first describe the world the agent lives in — a 5×5 grid with 25 cells. This is the "environment" in reinforcement learning.',
      },
      {
        code: '# Define the environment',
        explanation: '💬 Comment: This block sets up the rules of the grid world — its size, where the agent starts, and where the goal is.',
      },
      {
        code: 'GRID_SIZE = 5',
        explanation: '📐 Sets the grid to 5 columns × 5 rows = 25 total cells. States are numbered 0 to 24 (top-left = 0, bottom-right = 24). UPPER_CASE naming signals this is a constant that should not change during the run.',
      },
      {
        code: 'START_STATE = 0',
        explanation: '🚀 The agent always begins at state 0 (top-left corner, row=0, col=0). This is reset at the start of every episode so the agent re-learns from the same starting point each time.',
      },
      {
        code: 'GOAL_STATE = 24',
        explanation: '🎯 The destination is state 24 (bottom-right corner, row=4, col=4). When the agent reaches this state, the episode ends with a large reward. The entire purpose of training is to learn the fastest path from state 0 → state 24.',
      },
      {
        code: '',
        explanation: '',
      },
      {
        code: '# ─── SECTION 2: HYPERPARAMETERS ────────────────────────────────────────────',
        explanation: '📌 Section 2: Hyperparameters are knobs you tune to control how the agent learns. These are NOT learned — you choose them before training.',
      },
      {
        code: '# Q-learning parameters',
        explanation: '💬 Comment: These four numbers control the speed, depth, curiosity, and duration of learning.',
      },
      {
        code: 'LEARNING_RATE = 0.1',
        explanation: '📈 Alpha (α) = 0.1. This controls HOW FAST the agent updates its Q-values when it learns something new. Think of it as "how seriously do I take new information?"\n• α = 0.1 → 10% of new info replaces old belief each step (stable, gradual learning)\n• α = 1.0 → completely replaces old belief (too fast, unstable)\n• α = 0.0 → agent never learns at all\n✅ 0.1 is a safe, standard choice for small environments.',
      },
      {
        code: 'DISCOUNT_FACTOR = 0.9',
        explanation: '⏳ Gamma (γ) = 0.9. Controls HOW MUCH the agent values FUTURE rewards versus IMMEDIATE rewards.\n• γ = 0.9 → future reward is worth 90% of an equal immediate reward (forward-thinking agent)\n• γ = 0.0 → agent is completely greedy, only cares about the next immediate reward\n• γ = 1.0 → agent values all future rewards equally (can cause instability)\n✅ 0.9 makes the agent plan ahead — essential for navigating a grid where the goal is many steps away.',
      },
      {
        code: 'EPSILON = 0.1',
        explanation: '🎲 Epsilon (ε) = 0.1. Controls the EXPLORATION vs EXPLOITATION trade-off.\n• With 10% probability, the agent tries a RANDOM action (explore — discover new paths)\n• With 90% probability, the agent picks the BEST known action (exploit — use what it learned)\n✅ This prevents the agent from getting stuck always doing the same thing. Without exploration, it might never find the optimal path.',
      },
      {
        code: 'EPISODES = 500',
        explanation: '🔁 The agent will train for 500 complete episodes. One episode = one attempt to go from START → GOAL (or max 100 steps). More episodes = more practice = better Q-values. 500 is enough to converge on a good policy for this small 5×5 grid.',
      },
      {
        code: '',
        explanation: '',
      },
      {
        code: '# ─── SECTION 3: Q-TABLE INITIALIZATION ─────────────────────────────────────',
        explanation: '📌 Section 3: The Q-table is the agent\'s "brain" — a memory of how good each action is in each state.',
      },
      {
        code: '# Initialize Q-table',
        explanation: '💬 Comment: Before training, the agent knows nothing, so all Q-values start at zero.',
      },
      {
        code: 'num_states = GRID_SIZE * GRID_SIZE',
        explanation: '🧮 Calculates total number of states: 5 × 5 = 25. Each cell in the grid is one state. This tells us how many rows the Q-table needs.',
      },
      {
        code: 'num_actions = 4  # up, down, left, right',
        explanation: '🧭 The agent has 4 possible moves at every state:\n• Action 0 = UP    (move to the row above)\n• Action 1 = DOWN  (move to the row below)\n• Action 2 = LEFT  (move to the column left)\n• Action 3 = RIGHT (move to the column right)\nThe comment reminds us of this mapping. This tells us how many columns the Q-table needs.',
      },
      {
        code: 'Q = np.zeros((num_states, num_actions))',
        explanation: '🗃️ Creates the Q-table: a 25×4 matrix (25 states × 4 actions), filled entirely with zeros.\n• Each row = one state (a grid cell)\n• Each column = one action (up/down/left/right)\n• Each cell Q[s, a] = estimated quality of taking action a in state s\n→ At start, Q[0,0]=0, Q[0,1]=0, Q[0,2]=0, Q[0,3]=0 ... all zeros\n→ After training, Q[0,3] might be large because "go right" from start is a good idea.',
      },
      {
        code: '',
        explanation: '',
      },
      {
        code: '# ─── SECTION 4: HELPER FUNCTIONS ───────────────────────────────────────────',
        explanation: '📌 Section 4: Two small utility functions that the training loop will call thousands of times.',
      },
      {
        code: '# Helper function: get next state',
        explanation: '💬 Comment: This function simulates the physics of the grid — what happens when the agent moves.',
      },
      {
        code: 'def get_next_state(state, action):',
        explanation: '🔧 Defines a function that takes the current state (0–24) and chosen action (0–3), and returns the resulting next state. It handles wall collisions — if the agent tries to move off the grid, it stays in place.',
      },
      {
        code: '    row, col = state // GRID_SIZE, state % GRID_SIZE',
        explanation: '🗺️ Converts the flat state number into 2D grid coordinates:\n• row = state // 5  (integer division: state 7 → row 1)\n• col = state %  5  (remainder:         state 7 → col 2)\nExample: state 12 → row=2, col=2 (center of the grid)\nThis lets us check if moving would go out of bounds.',
      },
      {
        code: '    if action == 0 and row > 0: row -= 1  # up',
        explanation: '⬆️ Action 0 = UP. Subtracts 1 from the row (moves toward the top). The guard "row > 0" ensures the agent doesn\'t go above the top edge. If at row=0 and tries to go up → stays at row=0 (wall collision).',
      },
      {
        code: '    elif action == 1 and row < GRID_SIZE-1: row += 1  # down',
        explanation: '⬇️ Action 1 = DOWN. Adds 1 to the row (moves toward the bottom). Guard "row < 4" prevents going below the last row. If at row=4 (bottom edge) and tries to go down → stays at row=4.',
      },
      {
        code: '    elif action == 2 and col > 0: col -= 1  # left',
        explanation: '⬅️ Action 2 = LEFT. Subtracts 1 from the column (moves toward the left). Guard "col > 0" prevents going off the left edge. If at col=0 (left edge) and tries to go left → stays at col=0.',
      },
      {
        code: '    elif action == 3 and col < GRID_SIZE-1: col += 1  # right',
        explanation: '➡️ Action 3 = RIGHT. Adds 1 to the column (moves toward the right). Guard "col < 4" prevents going off the right edge. If at col=4 (right edge) and tries to go right → stays at col=4.',
      },
      {
        code: '    return row * GRID_SIZE + col',
        explanation: '🔄 Converts 2D coordinates back to a flat state number:\nnext_state = row × 5 + col\nExample: row=2, col=3 → state = 2×5+3 = 13\nThis reverses the earlier decomposition and gives a single integer the Q-table can use as an index.',
      },
      {
        code: '',
        explanation: '',
      },
      {
        code: '# Helper function: get reward',
        explanation: '💬 Comment: Defines the reward signal — the feedback the agent receives after each action.',
      },
      {
        code: 'def get_reward(state):',
        explanation: '🏆 Defines a reward function. Takes the state the agent just moved into and returns a number:\n• Positive number = good outcome\n• Negative number = bad/costly outcome\nThis is how the environment "tells" the agent whether it did something worthwhile.',
      },
      {
        code: '    if state == GOAL_STATE: return 100',
        explanation: '✅ If the agent reaches state 24 (the goal), it gets a reward of +100. This large positive signal teaches the agent that reaching the goal is highly desirable. The agent will update Q-values to make goal-reaching actions much more attractive.',
      },
      {
        code: '    else: return -1',
        explanation: '⏱️ Every step that is NOT the goal gives a reward of -1. This "step penalty" encourages efficiency — the agent is penalized for wasting time. Without this, the agent might wander aimlessly and still get the +100 eventually. With -1 per step, the agent learns to reach the goal in as few moves as possible.',
      },
      {
        code: '',
        explanation: '',
      },
      {
        code: '# ─── SECTION 5: TRAINING LOOP ──────────────────────────────────────────────',
        explanation: '📌 Section 5: The core of Q-learning — repeatedly running episodes and updating the Q-table after every step.',
      },
      {
        code: '# Training loop',
        explanation: '💬 Comment: This is where the actual learning happens over 500 episodes.',
      },
      {
        code: 'rewards_per_episode = []',
        explanation: '📊 Creates an empty Python list to record the total reward earned in each episode. After training, we\'ll plot this list to see how the agent improved over time. If rewards increase episode-by-episode, the agent is learning!',
      },
      {
        code: '',
        explanation: '',
      },
      {
        code: 'for episode in range(EPISODES):',
        explanation: '🔁 Outer loop: repeats 500 times (episode = 0, 1, 2, ... 499). Each iteration is one complete training attempt — the agent starts fresh at state 0 and tries to reach state 24.',
      },
      {
        code: '    state = START_STATE',
        explanation: '📍 Resets the agent\'s position to state 0 (top-left corner) at the start of every episode. This ensures each episode is a fresh attempt, just like a player starting a new game from the beginning.',
      },
      {
        code: '    total_reward = 0',
        explanation: '💰 Initializes a running counter for the total reward accumulated during this episode. Starts at 0 and we add to it after each step. At the end of the episode, this tells us how well the agent performed.',
      },
      {
        code: '    steps = 0',
        explanation: '👟 Counter for how many steps taken in this episode. Used to enforce the max-100-step limit. Prevents infinite loops in case the agent gets stuck in a cycle without reaching the goal.',
      },
      {
        code: '    ',
        explanation: '',
      },
      {
        code: '    while state != GOAL_STATE and steps < 100:',
        explanation: '🔄 Inner loop: runs until EITHER the goal is reached (state == 24) OR 100 steps have been taken. This inner loop is one episode\'s decision-action-learn cycle. The 100-step cap prevents the agent from running forever early in training when it\'s mostly lost.',
      },
      {
        code: '        # Choose action (epsilon-greedy)',
        explanation: '💬 Comment: The ε-greedy strategy decides whether to explore or exploit on each step.',
      },
      {
        code: '        if np.random.random() < EPSILON:',
        explanation: '🎲 np.random.random() generates a float between 0.0 and 1.0 uniformly at random. If it falls below EPSILON (0.1), we explore. Since EPSILON=0.1, this happens ~10% of the time. The other 90% we exploit what we already know.',
      },
      {
        code: '            action = np.random.randint(0, num_actions)',
        explanation: '🃏 EXPLORE: picks a random action integer from {0, 1, 2, 3} with equal probability. This is the exploration step — the agent tries something it might not normally choose, which might reveal a better path it didn\'t know about.',
      },
      {
        code: '        else:',
        explanation: '🧠 EXPLOIT: we skip the random choice and use what the agent has learned.',
      },
      {
        code: '            action = np.argmax(Q[state])',
        explanation: '🏹 Q[state] is a 1D array of 4 Q-values (one per action) for the current state.\nnp.argmax() returns the index of the LARGEST value — the action the agent currently believes is best.\nExample: if Q[5] = [2.1, 4.7, 1.3, 3.9], then argmax = 1 (DOWN has the highest Q-value → take action DOWN).',
      },
      {
        code: '        ',
        explanation: '',
      },
      {
        code: '        # Take action',
        explanation: '💬 Comment: Execute the chosen action and observe what happens in the environment.',
      },
      {
        code: '        next_state = get_next_state(state, action)',
        explanation: '🌍 Calls our helper function to simulate the action: given the current state and chosen action, what cell does the agent land in? The result is the "next_state" — the agent\'s new position on the grid.',
      },
      {
        code: '        reward = get_reward(next_state)',
        explanation: '🏅 Asks the environment: "What reward do I get for being in next_state?" Returns either +100 (goal reached!) or -1 (any other cell). This reward will be used to update the Q-value for the action just taken.',
      },
      {
        code: '        ',
        explanation: '',
      },
      {
        code: '        # Q-learning update',
        explanation: '💬 Comment: This is the heart of the algorithm — updating the Q-table using the Bellman equation.',
      },
      {
        code: '        best_next_q = np.max(Q[next_state])',
        explanation: '🔭 Looks ahead: "What is the BEST Q-value I could get from the next_state, regardless of which action I would take?" np.max(Q[next_state]) scans all 4 action Q-values in the next state and returns the maximum. This is the max Q(s\',a\') term from the Bellman equation.',
      },
      {
        code: '        Q[state, action] = Q[state, action] + LEARNING_RATE * (reward + DISCOUNT_FACTOR * best_next_q - Q[state, action])',
        explanation: '⚡ THE BELLMAN UPDATE — the single most important line in Q-learning!\n\nBreaking it down step-by-step:\n① reward + DISCOUNT_FACTOR * best_next_q\n   → "What is this action actually worth?" = immediate reward + (0.9 × best future value)\n   → This is called the TD Target (Temporal Difference Target)\n\n② TD Target - Q[state, action]\n   → "How surprised are we?" = difference between what we expected vs what actually happened\n   → This is called the TD Error\n\n③ LEARNING_RATE * TD_Error\n   → "How much do we adjust?" = 0.1 × TD Error (small, gradual adjustment)\n\n④ Q[state, action] = Q[state, action] + adjustment\n   → Update the Q-value: nudge it toward reality\n\nIf TD Error is positive → we underestimated, Q goes UP\nIf TD Error is negative → we overestimated, Q goes DOWN\nIf TD Error is zero → our estimate was perfect, Q stays SAME',
      },
      {
        code: '        ',
        explanation: '',
      },
      {
        code: '        state = next_state',
        explanation: '📍 The agent "moves" — updates its current state to the new state. Now the agent is at the cell it just moved to. The next iteration of the while loop will start decision-making from this new position.',
      },
      {
        code: '        total_reward += reward',
        explanation: '💰 Adds the step\'s reward to the episode\'s running total. After the episode ends, this sum tells us how well the agent did overall. Early episodes: very negative (many -1 steps, rarely reaches +100). Late episodes: near +100 - (few steps × 1) = efficient paths.',
      },
      {
        code: '        steps += 1',
        explanation: '👟 Increments the step counter by 1 so the while-loop condition (steps < 100) can eventually stop an episode where the agent is wandering. Without this counter, a lost agent would loop forever.',
      },
      {
        code: '    ',
        explanation: '',
      },
      {
        code: '    rewards_per_episode.append(total_reward)',
        explanation: '📈 At the END of each episode, save the total reward to the list. After 500 episodes, this list has 500 numbers. Plotting them reveals the learning curve: should trend upward from very negative (lost/wandering) to near positive (efficient goal-reaching).',
      },
      {
        code: '',
        explanation: '',
      },
      {
        code: '# ─── SECTION 6: VISUALIZATION ──────────────────────────────────────────────',
        explanation: '📌 Section 6: Plot the learning curve to visually confirm the agent improved over time.',
      },
      {
        code: '# Visualize learning progress',
        explanation: '💬 Comment: Create a graph showing how the agent\'s total reward per episode changed over training.',
      },
      {
        code: 'plt.figure(figsize=(10, 5))',
        explanation: '🖼️ Creates a new matplotlib figure (plot canvas) with width=10 inches and height=5 inches. Always call this before plt.plot() to control the output size. A wider figure makes the learning curve easier to read.',
      },
      {
        code: 'plt.plot(rewards_per_episode)',
        explanation: '📉📈 Plots the 500 episode rewards as a line graph:\n• X-axis = episode number (0 to 499)\n• Y-axis = total reward that episode\n• You should see the line start very low (negative, many wasted steps) and gradually climb higher (agent finds shorter paths and collects less penalties).',
      },
      {
        code: 'plt.xlabel(\'Episode\')',
        explanation: '🏷️ Labels the X-axis "Episode" so readers know each point on the x-axis represents one complete training attempt.',
      },
      {
        code: 'plt.ylabel(\'Total Reward\')',
        explanation: '🏷️ Labels the Y-axis "Total Reward" — the sum of all rewards in an episode. Negative values = agent was slow. Values close to +100 = agent found the goal quickly with few wasted steps.',
      },
      {
        code: 'plt.title(\'Q-Learning Progress: Reward per Episode\')',
        explanation: '📋 Adds a descriptive title to the chart. This makes the plot self-explanatory when shared or included in a report.',
      },
      {
        code: 'plt.grid(True)',
        explanation: '📏 Adds a light grey grid to the plot background. Grids make it much easier to read values off the chart and spot trends, especially whether the curve is flat or rising.',
      },
      {
        code: 'plt.show()',
        explanation: '👁️ Renders and displays the finished plot. In Google Colab, this appears inline below the cell. In a local script, it opens a pop-up window. Without plt.show(), nothing appears on screen.',
      },
      {
        code: '',
        explanation: '',
      },
      {
        code: 'print(f"Training completed over {EPISODES} episodes")',
        explanation: '📢 Prints a confirmation message after all training is done. The f-string inserts the value of EPISODES (500) into the string automatically → "Training completed over 500 episodes".',
      },
      {
        code: 'print(f"Final average reward (last 100 episodes): {np.mean(rewards_per_episode[-100:]):.2f}")',
        explanation: '📊 Evaluates and prints the agent\'s final performance:\n• rewards_per_episode[-100:] → slices the LAST 100 values from the list\n• np.mean(...) → computes the average of those 100 values\n• :.2f → formats the float to 2 decimal places\n\nWhy the last 100 episodes? Because early training is chaotic — the agent is still learning. The last 100 episodes represent the agent after it has mostly converged to a good policy. A high average here confirms successful learning.',
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
