import { Topic } from '@/lib/types';
import { whyLearnAI } from './why-learn-ai';

export const whatIsAI: Topic = {
  id: 'what-is-ai',
  moduleId: 'ai-foundations',
  number: 2,
  title: 'What is Artificial Intelligence?',
  description: 'Unpack the definition, scope, and spectrum of Artificial Intelligence from narrow systems to general intelligence.',
  objectives: [
    'Define Artificial Intelligence in both conceptual and technical contexts',
    'Distinguish between Narrow AI (ANI), General AI (AGI), and Super AI (ASI)',
    'Understand the Turing Test and how intelligence is evaluated in machines',
    'Differentiate between symbolic AI and statistical learning systems',
  ],
  story: `In 1950, British mathematician Alan Turing posed a deceptively simple question: "Can machines think?" At the time, computers filled entire rooms and could barely compute ballistics tables. Turing proposed an imitation game: if a human judge, communicating solely through typed text, could not reliably tell whether they were conversing with a human or a machine, the machine could be said to exhibit intelligent behavior.
  
Six years later, at the 1956 Dartmouth Summer Research Project, John McCarthy coined the term "Artificial Intelligence." Today, machines beat world chess grandmasters, generate photorealistic art, and translate languages in real time. Yet, the core question Turing asked still guides the philosophy of computing: how closely can artificial algorithms mirror human cognitive faculties?`,
  motivation: `**Why understand the definition of AI?**

1. **Cut through marketing hype**: Many commercial tools labeled "AI" are merely standard decision trees or heuristic rules. Understanding true AI helps you critically evaluate modern software.
2. **Recognize AI boundaries**: Knowing the difference between Narrow AI and General AI keeps expectations realistic and helps avoid irrational panic or unwarranted overconfidence.
3. **Foundation for all advanced coursework**: Every sub-discipline—from computer vision to natural language processing—derives from foundational AI principles.`,
  concept: {
    simple: `Artificial Intelligence is the science of creating software and machines that can perform tasks that would normally require a human mind. This includes understanding spoken words, recognizing faces in pictures, playing strategic games, making decisions under uncertainty, and learning from experience rather than following a rigid step-by-step checklist.`,
    technical: `Artificial Intelligence (AI) encompasses computational paradigms designed to synthesize rational agent architectures capable of perception, knowledge representation, heuristic search, automated inference, and adaptive learning. Formally, an intelligent agent maps environmental percept sequences to actions: $f: P^* \\rightarrow A$, maximizing an objective performance measure under epistemic uncertainty.`,
  },
  keyTerms: [
    {
      term: 'Artificial Narrow Intelligence (ANI)',
      simple: 'AI designed to excel at one specific task, like playing chess or diagnosing skin lesions.',
      technical: 'Specialized machine intelligence configured to optimize an objective function within a strictly bounded problem domain without cross-domain transference.',
    },
    {
      term: 'Artificial General Intelligence (AGI)',
      simple: 'A hypothetical machine that can understand, learn, and apply knowledge across any intellectual task just like a human.',
      technical: 'A theoretical agent possessing broad cognitive competencies including causal reasoning, abstraction, common sense, and autonomous transfer learning across arbitrary domains.',
    },
    {
      term: 'Rational Agent',
      simple: 'A system that takes the best possible action based on what it knows and what it wants to achieve.',
      technical: 'An autonomous entity that perceives its environment through sensors and acts upon it via actuators to maximize expected utility given its perceptual history.',
    },
    {
      term: 'Turing Test',
      simple: 'A test where a person chats with a hidden computer and human to see if they can tell which is which.',
      technical: 'An operational test of machine intelligence proposed by Alan Turing (1950) evaluating whether human evaluators can discern machine-generated linguistic responses from human dialogue.',
    },
  ],
  equations: [
    {
      latex: 'f: \\mathcal{P}^* \\rightarrow \\mathcal{A}',
      explanation: 'The fundamental mathematical definition of an AI agent function: it maps any sequence of perceptual observations (P*) to an action (A).',
      symbols: [
        { symbol: 'f', meaning: 'Agent function', interpretation: 'The decision-making program or policy inside the AI' },
        { symbol: '\\mathcal{P}^*', meaning: 'Percept history', interpretation: 'All past and present sensory inputs received from the environment' },
        { symbol: '\\mathcal{A}', meaning: 'Action space', interpretation: 'The set of possible actions the agent can choose to execute' },
      ],
      example: {
        description: 'An autonomous vacuum receives a bumper sensor hit percept P and chooses a turn action A.',
        calculation: 'f([clean_floor, obstacle_detected]) = rotate_90_degrees_right',
        result: 'Agent changes direction to avoid collision',
      },
    },
  ],
  howItWorks: [
    {
      number: 1,
      title: 'Sensing (Perception)',
      description: 'The AI ingests data from its environment via cameras, microphones, database logs, API streams, or tactile sensors.',
    },
    {
      number: 2,
      title: 'Representation & Reasoning',
      description: 'The incoming signals are converted into mathematical representations (vectors, embeddings, graphs) where patterns and constraints are evaluated.',
    },
    {
      number: 3,
      title: 'Decision Formulation',
      description: 'An optimization algorithm or inference engine selects the action or prediction with the highest expected reward or probability of correctness.',
    },
    {
      number: 4,
      title: 'Actuation & Feedback',
      description: 'The chosen action is executed in the environment, and the system records the resulting outcome to refine future predictions.',
    },
  ],
  applications: [
    {
      title: 'Autonomous Navigation (Waymo / Tesla)',
      problem: 'Safe driving requires processing thousands of visual cues, pedestrians, and traffic signals per second.',
      solution: 'AI fuses LiDAR, radar, and computer vision inputs to predict vehicular trajectories and steer vehicles safely without human intervention.',
    },
    {
      title: 'Medical Image Classification',
      problem: 'Radiologists must review hundreds of dense CT scans daily, risking diagnostic fatigue and missed early-stage tumors.',
      solution: 'Deep learning models trained on millions of annotated scans flag micro-nodules and anomalies with sub-millimeter precision in seconds.',
    },
  ],
  activity: {
    type: 'mcq',
    title: 'Classifying AI Types',
    question: 'A software system can translate 50 human languages with 98% accuracy, but cannot answer basic math questions or play tic-tac-toe. What type of AI is this?',
    options: [
      { id: 'a', text: 'Artificial General Intelligence (AGI)' },
      { id: 'b', text: 'Artificial Narrow Intelligence (ANI)' },
      { id: 'c', text: 'Artificial Super Intelligence (ASI)' },
      { id: 'd', text: 'Symbolic Expert System' },
    ],
    correctAnswer: 'b',
    explanation: 'This is Artificial Narrow Intelligence (ANI). Even though its linguistic capability is astonishingly advanced, it is constrained to a single specialized task domain and cannot transfer its intelligence to unrelated tasks.',
    hint: 'Notice whether the system can generalize to completely different tasks or only excels within a single domain.',
  },
  pythonHandsOn: {
    title: 'Building a Simple Rule-Based AI Agent in Python',
    description: 'Create an intelligent reflex agent that perceives room temperature and decides whether to heat, cool, or idle an HVAC system.',
    packages: ['python-standard-library'],
    installCommand: '# No external packages required — uses standard Python 3',
    imports: [
      { code: 'from dataclasses import dataclass', explanation: 'Import dataclass for clean state representation' },
      { code: 'from typing import List, Tuple', explanation: 'Type hints for robust agent signatures' },
    ],
    code: [
      { code: '@dataclass', explanation: 'Define the environment state structure' },
      { code: 'class Environment:', explanation: 'Holds sensor readings' },
      { code: '    temperature: float', explanation: 'Current ambient temperature in Celsius' },
      { code: '    target: float = 22.0', explanation: 'Ideal comfort setpoint' },
      { code: '', explanation: '' },
      { code: 'class ReflexHVACAgent:', explanation: 'Rational reflex agent class' },
      { code: '    def decide_action(self, env: Environment) -> str:', explanation: 'Agent mapping percept to action' },
      { code: '        delta = env.temperature - env.target', explanation: 'Compute deviation from target' },
      { code: '        if delta > 1.5:', explanation: 'Room is too warm' },
      { code: '            return "COOLING_MAX (AC ON)"', explanation: 'Action for hot condition' },
      { code: '        elif delta < -1.5:', explanation: 'Room is too cold' },
      { code: '            return "HEATING_MAX (HEATER ON)"', explanation: 'Action for cold condition' },
      { code: '        return "IDLE (TARGET MAINTAINED)"', explanation: 'Action when within tolerance' },
      { code: '', explanation: '' },
      { code: 'agent = ReflexHVACAgent()', explanation: 'Instantiate the agent' },
      { code: 'readings = [18.2, 22.1, 26.5]', explanation: 'Simulated sensor readings' },
      { code: 'for temp in readings:', explanation: 'Loop over percepts' },
      { code: '    action = agent.decide_action(Environment(temperature=temp))', explanation: 'Get decision' },
      { code: '    print(f"Temp: {temp}°C -> Agent Action: {action}")', explanation: 'Display output' },
    ],
    executionFlow: [
      { number: 1, title: 'Perception Input', description: 'Agent takes current temperature reading from the environment.' },
      { number: 2, title: 'Inference Step', description: 'Agent evaluates the mathematical delta against the setpoint threshold.' },
      { number: 3, title: 'Action Execution', description: 'Agent produces the optimal control signal to restore homeostasis.' },
    ],
    input: 'Sensor readings: [18.2°C, 22.1°C, 26.5°C] with target 22.0°C',
    output: 'Temp: 18.2°C -> Agent Action: HEATING_MAX (HEATER ON)\nTemp: 22.1°C -> Agent Action: IDLE (TARGET MAINTAINED)\nTemp: 26.5°C -> Agent Action: COOLING_MAX (AC ON)',
    interpretation: 'The rational reflex agent acts deterministically on percept sequences, showing how even basic algorithmic agents satisfy the fundamental agent loop f: P* -> A.',
    colabInstructions: [
      'Open Google Colab (colab.research.google.com)',
      'Paste the snippet into a code cell',
      'Run with Shift+Enter to see the agent respond to sensory readings',
    ],
  },
  mcqs: [
    {
      id: 'q1',
      question: 'Which of the following best describes Artificial General Intelligence (AGI)?',
      options: [
        { id: 'a', text: 'A computer that performs mathematical calculations faster than any human' },
        { id: 'b', text: 'A system capable of learning and performing any intellectual task a human can across varied domains' },
        { id: 'c', text: 'A deep neural network specifically trained to generate speech transcripts' },
        { id: 'd', text: 'A robotic arm operating on an industrial assembly line' },
      ],
      correctAnswer: 'b',
      explanation: 'AGI denotes human-level or cross-domain generalized cognitive capability, unlike Narrow AI which is specialized for a single task.',
      incorrectFeedback: 'Calculations or specialized speech models are examples of Narrow AI (ANI), not General AI (AGI).',
    },
    {
      id: 'q2',
      question: 'In artificial intelligence, what is a "rational agent"?',
      options: [
        { id: 'a', text: 'An agent that possesses human emotions and consciousness' },
        { id: 'b', text: 'An agent that always behaves randomly to explore options' },
        { id: 'c', text: 'An agent that acts so as to maximize its expected performance measure given its percepts' },
        { id: 'd', text: 'An agent that only uses pre-programmed if-else statements without learning' },
      ],
      correctAnswer: 'c',
      explanation: 'Rationality in AI means making the decision that maximizes the expected value of an objective performance measure, conditioned on available observations.',
      incorrectFeedback: 'Rationality does not require consciousness or emotions; it refers to mathematically optimal decision making.',
    },
    {
      id: 'q3',
      question: 'What test did Alan Turing propose in 1950 to evaluate if a machine can exhibit intelligent behavior?',
      options: [
        { id: 'a', text: 'The Chess Benchmark Test' },
        { id: 'b', text: 'The Imitation Game (Turing Test)' },
        { id: 'c', text: 'The CAPTCHA Challenge' },
        { id: 'd', text: 'The Quantum Supremacy Assay' },
      ],
      correctAnswer: 'b',
      explanation: 'Alan Turing proposed the Imitation Game, wherein a human evaluator converses via text with a machine and a human to determine if machine behavior is indistinguishable.',
      incorrectFeedback: 'Turing formulated the Imitation Game in his seminal 1950 paper "Computing Machinery and Intelligence".',
    },
    {
      id: 'q4',
      question: 'An AI agent receives sensor readings [obstacle_detected, low_battery] and maps them to the action "return_to_dock". Which notation best represents this agent function?',
      options: [
        { id: 'a', text: 'f: A → P*' },
        { id: 'b', text: 'f: P* → A' },
        { id: 'c', text: 'f: Y → X' },
        { id: 'd', text: 'f: R → S' },
      ],
      correctAnswer: 'b',
      explanation: 'The AI agent function maps percept history (P*) to actions (A), written as f: P* → A. The agent perceives the world first, then decides on an action — not the other way around.',
      incorrectFeedback: 'Revisit the formal definition of the AI agent function: the agent takes in percept sequences (P*) and outputs an action (A).',
    },
    {
      id: 'q5',
      question: 'A spam filter uses explicit keyword rules like "If email contains VIAGRA → mark as spam." A second system learns from 500,000 example emails. Which is symbolic AI and which is statistical AI?',
      options: [
        { id: 'a', text: 'Both are statistical AI systems' },
        { id: 'b', text: 'The keyword filter is symbolic AI; the learned system is statistical/ML AI' },
        { id: 'c', text: 'The keyword filter is statistical AI; the learned system is symbolic AI' },
        { id: 'd', text: 'Both are symbolic AI systems' },
      ],
      correctAnswer: 'b',
      explanation: 'Symbolic AI encodes human-defined rules explicitly (keyword matching). Statistical/ML AI infers patterns from data without programmer-specified rules. The keyword filter is symbolic; the learning-from-examples system is statistical.',
      incorrectFeedback: 'Symbolic AI uses handcrafted logical rules; statistical AI derives decision boundaries from data distributions.',
    },
    {
      id: 'q6',
      question: 'Which of the following correctly orders the three levels of AI from most limited to most capable?',
      options: [
        { id: 'a', text: 'ASI → AGI → ANI' },
        { id: 'b', text: 'AGI → ANI → ASI' },
        { id: 'c', text: 'ANI → AGI → ASI' },
        { id: 'd', text: 'ANI → ASI → AGI' },
      ],
      correctAnswer: 'c',
      explanation: 'Artificial Narrow Intelligence (ANI) is the most limited, performing only specific tasks. AGI matches human-level general reasoning. ASI (Artificial Super Intelligence) surpasses human capabilities across all domains.',
      incorrectFeedback: 'Review the three-level AI spectrum: ANI (narrow/current), AGI (human-level general intelligence), ASI (superhuman across all domains).',
    },
    {
      id: 'q7',
      question: 'GPT-4 can write code, compose poetry, and answer medical questions. Despite its broad capability, why is it still classified as Narrow AI (ANI) rather than AGI?',
      options: [
        { id: 'a', text: 'Because it was built by a private company' },
        { id: 'b', text: 'Because it lacks true cross-domain causal reasoning, common sense grounding, and autonomous goal formation' },
        { id: 'c', text: 'Because it cannot access the internet' },
        { id: 'd', text: 'Because it uses a transformer architecture instead of a brain simulation' },
      ],
      correctAnswer: 'b',
      explanation: 'AGI requires autonomous goal-setting, causal understanding, and genuine cross-domain transfer. GPT-4 is a highly capable pattern-matching system constrained to its training distribution without true understanding or consciousness.',
      incorrectFeedback: 'AGI demands autonomous causal reasoning and transferable general intelligence — not just broad linguistic pattern matching.',
    },
    {
      id: 'q8',
      question: 'John McCarthy coined the term "Artificial Intelligence" at which landmark event?',
      options: [
        { id: 'a', text: 'The 1969 ARPANET founding conference' },
        { id: 'b', text: 'The 1956 Dartmouth Summer Research Project' },
        { id: 'c', text: 'The 1983 Carnegie Mellon AI symposium' },
        { id: 'd', text: 'The 1997 IBM Deep Blue press conference' },
      ],
      correctAnswer: 'b',
      explanation: 'John McCarthy coined the term "Artificial Intelligence" at the 1956 Dartmouth Summer Research Project, which brought together the founding fathers of the AI field including Marvin Minsky, Claude Shannon, and Nathaniel Rochester.',
      incorrectFeedback: 'The birth of AI as a formal discipline dates to the 1956 Dartmouth conference organized by John McCarthy.',
    },
  ],
};

export const aiAroundUs: Topic = {
  id: 'ai-around-us',
  moduleId: 'ai-foundations',
  number: 3,
  title: 'AI Around Us: Real-World Systems',
  description: 'Explore the ubiquitous presence of AI in daily life, from search algorithms and streaming recommendations to facial recognition and smart assistants.',
  objectives: [
    'Catalog everyday consumer and enterprise systems powered by AI',
    'Examine how recommender engines utilize collaborative and content-based filtering',
    'Understand speech-to-text and NLP in virtual assistants (Siri, Alexa)',
    'Analyze ethical considerations regarding algorithmic bias and surveillance',
  ],
  story: `When Spotify recommends an obscure 1970s indie track that you immediately fall in love with, it feels like uncanny psychic intuition. But behind that serendipitous discovery isn't magic—it is high-dimensional matrix factorization and convolutional audio analysis. Spotify models over 600 million users and 100 million tracks as geometric vectors in a shared latent space.
  
Every time you like a song, skip after 10 seconds, or replay a chorus, you transmit micro-signals into a real-time feature pipeline. AI isn't an abstract laboratory concept; it is the invisible operating system orchestrating the modern digital economy.`,
  motivation: `**Why study real-world AI deployments?**

1. **Demystify familiar services**: Appreciate the engineering feats inside Netflix, Google Maps, Instagram, and Uber.
2. **Identify business opportunities**: Discover how traditional brick-and-mortar operations gain massive efficiency via AI automation.
3. **Consumer empowerment**: Understand how algorithmic feeds curate what you see, read, and believe.`,
  concept: {
    simple: `AI is already deeply integrated into modern life. When you speak to your phone, it turns sound waves into text using neural networks. When you search on Google, AI ranks billions of pages in milliseconds based on relevance. When you buy something online, AI checks for credit card fraud in under 100 milliseconds.`,
    technical: `Modern real-world AI applications represent distributed end-to-end pipelines incorporating real-time feature stores, low-latency model inference endpoints, vectorized embedding databases, and feedback loops. Systems combine collaborative filtering, transformer-based NLP, and computer vision with sub-second SLA constraints.`,
  },
  keyTerms: [
    {
      term: 'Recommender System',
      simple: 'An algorithm that predicts what items (movies, songs, products) a user will enjoy.',
      technical: 'An information filtering system utilizing matrix factorization, deep embeddings, and graph neural networks to estimate user affinity scores for candidate items.',
    },
    {
      term: 'Collaborative Filtering',
      simple: 'Recommending items by finding users who have similar tastes to you.',
      technical: 'A recommendation methodology predicting unknown ratings by identifying statistical correlations across historical user-item interaction matrices.',
    },
    {
      term: 'Computer Vision',
      simple: 'Teaching computers to identify objects, people, and actions in images and video.',
      technical: 'An AI discipline using convolutional and attention-based architectures to extract high-level semantic representations from spatial pixel arrays.',
    },
  ],
  equations: [
    {
      latex: '\\hat{r}_{ui} = \\mu + b_u + b_i + \\mathbf{p}_u^T \\mathbf{q}_i',
      explanation: 'Baseline collaborative filtering with matrix factorization: predicts user u rating for item i using latent taste vectors.',
      symbols: [
        { symbol: '\\hat{r}_{ui}', meaning: 'Predicted rating', interpretation: 'Estimated score user u will assign to item i' },
        { symbol: '\\mu', meaning: 'Global mean rating', interpretation: 'Average rating across all items and users' },
        { symbol: 'b_u, b_i', meaning: 'User & item biases', interpretation: 'Baseline tendencies (e.g. strict rater vs popular movie)' },
        { symbol: '\\mathbf{p}_u, \\mathbf{q}_i', meaning: 'Latent vectors', interpretation: 'Mathematical embeddings capturing user preferences and item traits' },
      ],
      example: {
        description: 'Predicting user rating for a movie when global mean is 3.5, user bias is +0.2, movie bias is +0.4, and dot product is 0.6.',
        calculation: '\\hat{r}_{ui} = 3.5 + 0.2 + 0.4 + 0.6 = 4.7',
        result: 'Predicted rating is 4.7 / 5.0 (Strongly Recommended)',
      },
    },
  ],
  howItWorks: [
    { number: 1, title: 'Event Telemetry', description: 'User clicks, pauses, and queries are streamed via message brokers like Apache Kafka.' },
    { number: 2, title: 'Candidate Generation', description: 'A lightweight algorithm selects the top 500 candidate items out of millions.' },
    { number: 3, title: 'Deep Ranking', description: 'A neural model scores and ranks the top candidates using hundreds of contextual features.' },
    { number: 4, title: 'Personalized Delivery', description: 'The personalized UI renders items with the highest predicted engagement.' },
  ],
  applications: [
    {
      title: 'Dynamic Route Optimization (Google Maps / Uber)',
      problem: 'Predicting vehicle arrival time amid fluctuating traffic jams and accidents.',
      solution: 'Graph Neural Networks model road networks as nodes and edges to re-route drivers proactively.',
    },
    {
      title: 'E-commerce Fraud Detection',
      problem: 'Millions of credit card transactions processed per second require immediate fraud detection.',
      solution: 'Gradient boosted decision trees flag anomaly signatures and block stolen cards in under 30 milliseconds.',
    },
  ],
  activity: {
    type: 'mcq',
    title: 'How Recommenders Work',
    question: 'If Alice and Bob both gave 5 stars to five identical sci-fi movies, and Alice gives 5 stars to a sixth movie, why will Bob receive that recommendation?',
    options: [
      { id: 'a', text: 'Pure random chance' },
      { id: 'b', text: 'Collaborative filtering based on user taste similarity' },
      { id: 'c', text: 'The movie producer paid for priority ranking' },
      { id: 'd', text: 'Hardware clock synchronization' },
    ],
    correctAnswer: 'b',
    explanation: 'Collaborative filtering identifies that Alice and Bob share high correlation in their consumption patterns, projecting that Bob will enjoy items Alice liked.',
    hint: 'Think about finding kindred spirits based on shared past choices.',
  },
  pythonHandsOn: {
    title: 'Building a Simple Cosine Similarity Recommender',
    description: 'Calculate cosine similarity between user preference vectors to recommend items.',
    packages: ['numpy'],
    installCommand: 'pip install numpy',
    imports: [
      { code: 'import numpy as np', explanation: 'Import NumPy for high-performance vector math' },
    ],
    code: [
      { code: '# User ratings on 4 movie genres: [Action, SciFi, Comedy, Drama]', explanation: 'Vector definitions' },
      { code: 'alice = np.array([5.0, 5.0, 1.0, 1.0])', explanation: 'Alice loves Action & SciFi' },
      { code: 'bob = np.array([4.0, 5.0, 2.0, 1.0])', explanation: 'Bob also loves Action & SciFi' },
      { code: 'charlie = np.array([1.0, 0.0, 5.0, 4.0])', explanation: 'Charlie loves Comedy & Drama' },
      { code: '', explanation: '' },
      { code: 'def cosine_sim(a, b):', explanation: 'Define cosine similarity formula' },
      { code: '    return np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))', explanation: 'Dot product divided by magnitudes' },
      { code: '', explanation: '' },
      { code: 'sim_alice_bob = cosine_sim(alice, bob)', explanation: 'Compute Alice-Bob similarity' },
      { code: 'sim_alice_charlie = cosine_sim(alice, charlie)', explanation: 'Compute Alice-Charlie similarity' },
      { code: 'print(f"Alice & Bob Similarity: {sim_alice_bob:.3f}")', explanation: 'Print result 1' },
      { code: 'print(f"Alice & Charlie Similarity: {sim_alice_charlie:.3f}")', explanation: 'Print result 2' },
    ],
    executionFlow: [
      { number: 1, title: 'Vectorization', description: 'User tastes are encoded into numerical vector representations.' },
      { number: 2, title: 'Geometric Angle Measurement', description: 'Cosine similarity measures the angle between vectors independent of scale.' },
      { number: 3, title: 'Affinity Ranking', description: 'Higher cosine score indicates closer alignment in consumer taste.' },
    ],
    input: 'User preference vectors in 4-dimensional genre space',
    output: 'Alice & Bob Similarity: 0.985\nAlice & Charlie Similarity: 0.177',
    interpretation: 'Alice and Bob have a near-perfect similarity score of 0.985, meaning their taste profiles strongly correlate, whereas Charlie only scores 0.177.',
    colabInstructions: [
      'Open Google Colab notebook',
      'Enter the snippet and run Shift+Enter',
      'Try modifying the numbers to reflect your own movie preferences!',
    ],
  },
  mcqs: [
    {
      id: 'q1',
      question: 'Which recommendation technique relies on similarities between item attributes (e.g. director, genre, actors)?',
      options: [
        { id: 'a', text: 'Content-based filtering' },
        { id: 'b', text: 'Pure collaborative filtering' },
        { id: 'c', text: 'Random forest regression' },
        { id: 'd', text: 'Monte Carlo localization' },
      ],
      correctAnswer: 'a',
      explanation: 'Content-based filtering inspects the features of the items themselves, unlike collaborative filtering which focuses on user interaction patterns.',
      incorrectFeedback: 'Collaborative filtering looks at what other users did; content-based filtering looks at item features.',
    },
    {
      id: 'q2',
      question: 'Why is AI crucial for real-time financial fraud detection?',
      options: [
        { id: 'a', text: 'Humans take seconds to minutes to review a transaction, while fraud occurs in milliseconds' },
        { id: 'b', text: 'AI eliminates the need for credit cards entirely' },
        { id: 'c', text: 'Banks are legally forbidden from using classical code' },
        { id: 'd', text: 'AI systems never make false positive alerts' },
      ],
      correctAnswer: 'a',
      explanation: 'Modern electronic payments process billions of transactions where decisions must be rendered in sub-50ms latency, which human review cannot achieve.',
      incorrectFeedback: 'Speed and pattern recognition at scale are the primary drivers of automated fraud systems.',
    },
    {
      id: 'q3',
      question: 'In collaborative filtering, a recommendation for user Bob is based on which factor?',
      options: [
        { id: 'a', text: 'The item\'s metadata like genre, director, and cast' },
        { id: 'b', text: 'The behavior and preferences of users similar to Bob' },
        { id: 'c', text: 'The number of times Bob visited the platform' },
        { id: 'd', text: 'The advertisement budget of the item\'s publisher' },
      ],
      correctAnswer: 'b',
      explanation: 'Collaborative filtering finds users with similar historical interaction patterns to the target user and recommends items those similar users rated highly — it leverages collective community preferences.',
      incorrectFeedback: 'Collaborative filtering is user-similarity-based, not item-feature-based. Item features are used in content-based filtering.',
    },
    {
      id: 'q4',
      question: 'Given two user preference vectors: Alice = [5, 5, 1, 1] and Charlie = [1, 0, 5, 4] for genres [Action, SciFi, Comedy, Drama], what does a cosine similarity close to 0 indicate?',
      options: [
        { id: 'a', text: 'Alice and Charlie have very similar tastes' },
        { id: 'b', text: 'Alice and Charlie have nearly orthogonal (opposite) taste profiles' },
        { id: 'c', text: 'One of the vectors has missing values' },
        { id: 'd', text: 'The recommender should combine both users into one profile' },
      ],
      correctAnswer: 'b',
      explanation: 'Cosine similarity of ~0 means the vectors are nearly perpendicular in the preference space, indicating very different taste profiles. Alice loves Action/SciFi while Charlie loves Comedy/Drama — they share little in common.',
      incorrectFeedback: 'Cosine similarity ranges from -1 (opposite) to 1 (identical). A value near 0 indicates orthogonal (unrelated) preference vectors.',
    },
    {
      id: 'q5',
      question: 'In a real-world AI recommendation pipeline, what is the role of the "Candidate Generation" stage?',
      options: [
        { id: 'a', text: 'It trains the deep neural network from scratch on all user data' },
        { id: 'b', text: 'It quickly selects a manageable subset (~500) of items from millions for detailed ranking' },
        { id: 'c', text: 'It displays personalized advertisements to users' },
        { id: 'd', text: 'It deletes poorly rated items from the database permanently' },
      ],
      correctAnswer: 'b',
      explanation: 'Candidate generation uses a lightweight model to efficiently narrow millions of items down to a few hundred candidates. A heavier deep ranking model then scores only these candidates — balancing speed and accuracy.',
      incorrectFeedback: 'Modern recommendation pipelines have two stages: fast candidate retrieval followed by deep precision ranking. Review the "How It Works" pipeline steps.',
    },
    {
      id: 'q6',
      question: 'Google Maps predicts your arrival time with high accuracy despite unpredictable traffic. Which AI technique is most responsible for this?',
      options: [
        { id: 'a', text: 'Simple GPS coordinate lookup tables' },
        { id: 'b', text: 'Graph Neural Networks modeling roads as nodes and edges with live traffic signals' },
        { id: 'c', text: 'Hardcoded speed limit multiplied by distance' },
        { id: 'd', text: 'Satellite imagery classification using only convolutional filters' },
      ],
      correctAnswer: 'b',
      explanation: 'Graph Neural Networks represent the road network as a graph where intersections are nodes and road segments are edges. They incorporate real-time telemetry from millions of moving phones to dynamically re-estimate travel times.',
      incorrectFeedback: 'Dynamic route optimization relies on Graph Neural Networks processing live traffic data — not simple static calculations.',
    },
    {
      id: 'q7',
      question: 'The formula r̂_ui = μ + b_u + b_i + p_u^T q_i is used in collaborative filtering. What do the latent vectors p_u and q_i represent?',
      options: [
        { id: 'a', text: 'The raw pixel values of the user\'s profile photo and item thumbnail' },
        { id: 'b', text: 'Mathematical embeddings capturing user taste preferences and item characteristics in a shared latent space' },
        { id: 'c', text: 'The timestamps of when the user and item were first created' },
        { id: 'd', text: 'The price of the item and the user\'s account balance' },
      ],
      correctAnswer: 'b',
      explanation: 'Latent vectors p_u (user embedding) and q_i (item embedding) are learned representations in a shared abstract space. Their dot product captures the affinity between a user\'s hidden preferences and an item\'s hidden traits.',
      incorrectFeedback: 'Latent vectors in matrix factorization are dense numerical embeddings learned from interaction data — not raw metadata attributes.',
    },
  ],
};

export const aiVsTraditional: Topic = {
  id: 'ai-vs-traditional',
  moduleId: 'ai-foundations',
  number: 4,
  title: 'AI vs Traditional Programming',
  description: 'Understand the fundamental paradigm shift from rule-based deterministic programming to data-driven probabilistic learning.',
  objectives: [
    'Contrast the architecture of classical programming with machine learning',
    'Understand why hand-crafted heuristics fail on complex real-world tasks',
    'Examine how machine learning derives decision boundaries from raw data',
    'Identify when to choose traditional software versus AI approaches',
  ],
  story: `Suppose you are tasked with writing a computer program to recognize handwritten digits (0 through 9).
  
In traditional programming, you would sit down with a magnifying glass and write rules: "If there is a closed circular loop at the top and a vertical stroke on the right, it is a 9. If there is a loop with no stroke, it is an 0."
  
You write 5,000 lines of nested if-else conditions. But then someone writes a '9' with a tilted loop, or an '8' with an open bottom, or a '1' with a serif. Your rules shatter. Traditional programming demands that the programmer understand and codify every single rule.
  
In machine learning, you invert the paradigm: you give the computer 60,000 scanned digit images and their correct labels, and let an optimization algorithm discover the mathematical rules that best separate them.`,
  motivation: `**Why understand this contrast?**

1. **Avoid overengineering**: Not every problem requires AI! Simple problems are best solved with deterministic rules (e.g., calculating tax rates).
2. **Embrace inductive reasoning**: Learn to shift from deductive logic ("Premise implies conclusion") to inductive inference ("Data reveals patterns").
3. **Know software boundaries**: Traditional code is deterministic and explainable; AI models are probabilistic and statistical.`,
  concept: {
    simple: `In traditional programming: Humans write Rules + Data into the computer = Computer gives Answers.
In Machine Learning: Humans feed Data + Answers into the computer = Computer produces the Rules!`,
    technical: `Classical software engineering implements deductive programming where deterministic algorithms map inputs $X$ to outputs $Y$ via explicit control logic $f_{explicit}(X) \\rightarrow Y$. Machine learning implements inductive functional approximation where an optimization algorithm searches a hypothesis space $\\mathcal{H}$ to minimize an empirical risk loss function $\\mathcal{L}(f(X; \\theta), Y)$ over parameter space $\\theta$.`,
  },
  keyTerms: [
    {
      term: 'Deductive Programming',
      simple: 'Writing exact instructions that tell the machine exactly what to do at every step.',
      technical: 'Top-down construction of algorithms based on formal axioms and deterministic control flow.',
    },
    {
      term: 'Inductive Learning',
      simple: 'Learning general rules from specific examples.',
      technical: 'Inferring a general function $f: X \\rightarrow Y$ from a finite sample of empirical observations.',
    },
    {
      term: 'Deterministic vs Probabilistic',
      simple: 'Deterministic means the same input always produces the exact same answer; probabilistic provides an answer with a confidence score.',
      technical: 'Deterministic algorithms have invariant execution traces; probabilistic models output probability distributions $P(Y|X)$.',
    },
  ],
  equations: [
    {
      latex: '\\min_{\\theta} \\frac{1}{N} \\sum_{i=1}^N \\mathcal{L}\\big(f(x_i; \\theta), y_i\\big)',
      explanation: 'The Empirical Risk Minimization objective: finding model parameters theta that minimize the average error across all training examples.',
      symbols: [
        { symbol: '\\theta', meaning: 'Model parameters (weights)', interpretation: 'The learnable dials inside the AI model' },
        { symbol: '\\mathcal{L}', meaning: 'Loss function', interpretation: 'A penalty metric for incorrect predictions' },
        { symbol: 'x_i, y_i', meaning: 'Input and true label', interpretation: 'The training data examples' },
      ],
      example: {
        description: 'Adjusting linear model parameters (slope m and intercept b) to minimize squared error across data points.',
        calculation: '\\text{Loss} = \\frac{1}{3} [(3.1 - 3)^2 + (4.9 - 5)^2 + (7.2 - 7)^2] = \\frac{0.01 + 0.01 + 0.04}{3} = 0.02',
        result: 'Low loss signifies the learned rule closely mirrors reality',
      },
    },
  ],
  howItWorks: [
    { number: 1, title: 'Traditional Approach', description: 'Human analyst specifies: Input Data + Handcrafted Rules -> Output Answers.' },
    { number: 2, title: 'Machine Learning Approach', description: 'Optimization algorithm ingests: Input Data + Ground Truth Answers -> Learned Rules (Model).' },
    { number: 3, title: 'Inference Phase', description: 'The learned model is deployed to evaluate new, previously unseen inputs.' },
  ],
  applications: [
    {
      title: 'Spam Filtering: Rules vs ML',
      problem: 'Rule-based spam filters searching for "VIAGRA" were easily bypassed by spammers typing "V1@GR@".',
      solution: 'Bayesian and transformer-based spam filters learn statistical semantic distributions and catch adversarial variants automatically.',
    },
    {
      title: 'Payroll Calculation (Keep it Traditional!)',
      problem: 'Calculating overtime wages and tax deductions requires 100% legal compliance and zero probabilistic uncertainty.',
      solution: 'Deterministic if-else business logic is strictly preferred over machine learning for accounting and tax computation.',
    },
  ],
  activity: {
    type: 'mcq',
    title: 'Which Approach to Choose?',
    question: 'You need to build a system to calculate the sales tax for purchases across 50 US states. Should you use Machine Learning or Traditional Programming?',
    options: [
      { id: 'a', text: 'Machine Learning, because AI is newer and better' },
      { id: 'b', text: 'Traditional Programming, because tax codes are fixed legal rules requiring 100% precision' },
      { id: 'c', text: 'Deep Learning with Convolutional Neural Networks' },
      { id: 'd', text: 'Quantum Reinforcement Learning' },
    ],
    correctAnswer: 'b',
    explanation: 'Tax laws are explicit, deterministic rules written in statutes. Using a probabilistic machine learning model that might be "99% accurate" could lead to legal liabilities and accounting errors.',
    hint: 'Does the problem have strict, known rules, or does it require pattern recognition under uncertainty?',
  },
  pythonHandsOn: {
    title: 'Comparing Rule-Based vs Machine Learning Prediction',
    description: 'See the contrast between a hardcoded rule and a scikit-learn linear regression model learning from data.',
    packages: ['scikit-learn', 'numpy'],
    installCommand: 'pip install scikit-learn numpy',
    imports: [
      { code: 'import numpy as np', explanation: 'Array manipulation' },
      { code: 'from sklearn.linear_model import LinearRegression', explanation: 'Import classical linear regression learner' },
    ],
    code: [
      { code: '# Problem: Convert Celsius to Fahrenheit', explanation: 'Formula: F = C * 1.8 + 32' },
      { code: '# Traditional Rule-Based Program:', explanation: 'Hand-coded formula' },
      { code: 'def traditional_c2f(c):', explanation: 'Deterministic function' },
      { code: '    return c * 1.8 + 32.0', explanation: 'Exact mathematical rule' },
      { code: '', explanation: '' },
      { code: '# Machine Learning Program (Learning the rule from data alone):', explanation: 'Data driven' },
      { code: 'X_celsius = np.array([[-40], [0], [20], [37], [100]])', explanation: 'Input features' },
      { code: 'y_fahr = np.array([-40.0, 32.0, 68.0, 98.6, 212.0])', explanation: 'Target labels' },
      { code: 'model = LinearRegression()', explanation: 'Instantiate learner' },
      { code: 'model.fit(X_celsius, y_fahr)', explanation: 'Learn the relationship!' },
      { code: '', explanation: '' },
      { code: 'test_c = 25.0', explanation: 'Test on room temperature 25C' },
      { code: 'rule_result = traditional_c2f(test_c)', explanation: 'Rule result' },
      { code: 'ml_result = model.predict([[test_c]])[0]', explanation: 'Model prediction' },
      { code: 'print(f"Traditional Rule: {rule_result:.1f}°F")', explanation: 'Display rule output' },
      { code: 'print(f"Learned ML Model: {ml_result:.1f}°F (Learned slope={model.coef_[0]:.2f}, bias={model.intercept_:.2f})")', explanation: 'Display ML output' },
    ],
    executionFlow: [
      { number: 1, title: 'Explicit Rule', description: 'Traditional program computes using hardcoded arithmetic.' },
      { number: 2, title: 'Optimization Fit', description: 'ML program discovers slope 1.8 and intercept 32.0 through matrix inversion.' },
      { number: 3, title: 'Inference', description: 'Both yield 77.0°F, but the ML model learned the rule purely from five examples.' },
    ],
    input: 'Input temperature 25.0°C',
    output: 'Traditional Rule: 77.0°F\nLearned ML Model: 77.0°F (Learned slope=1.80, bias=32.00)',
    interpretation: 'The linear regression model discovered the exact physical laws of thermal expansion solely from five observation pairs without any human explaining thermodynamics.',
    colabInstructions: [
      'Open Google Colab',
      'Run the code block',
      'Add random noise to y_fahr to see how ML handles real-world noisy sensor data',
    ],
  },
  mcqs: [
    {
      id: 'q1',
      question: 'Which of the following problems is best suited for traditional programming rather than machine learning?',
      options: [
        { id: 'a', text: 'Recognizing faces in airport security feeds' },
        { id: 'b', text: 'Sorting a bank database of customer records alphabetically by last name' },
        { id: 'c', text: 'Translating conversational Mandarin to Spanish' },
        { id: 'd', text: 'Predicting stock market fluctuations from news headlines' },
      ],
      correctAnswer: 'b',
      explanation: 'Alphabetical sorting is an exact, deterministic algorithm with zero ambiguity; machine learning would introduce unnecessary uncertainty and computational overhead.',
      incorrectFeedback: 'Sorting requires exact deterministic sorting algorithms (like Quicksort or Timsort), not probabilistic ML.',
    },
    {
      id: 'q2',
      question: 'In machine learning, the formula min_θ (1/N) Σ L(f(x_i; θ), y_i) represents what concept?',
      options: [
        { id: 'a', text: 'The Turing Test evaluation metric' },
        { id: 'b', text: 'Empirical Risk Minimization — finding model parameters that minimize average prediction error' },
        { id: 'c', text: 'A formula for calculating computational memory usage' },
        { id: 'd', text: 'The reward function in reinforcement learning' },
      ],
      correctAnswer: 'b',
      explanation: 'Empirical Risk Minimization (ERM) is the foundational principle of ML: optimize parameters θ to minimize the average loss L across all N training examples. This is what "learning from data" means mathematically.',
      incorrectFeedback: 'This is the ERM objective — the mathematical backbone of supervised machine learning. Review how model parameters θ minimize the loss function L.',
    },
    {
      id: 'q3',
      question: 'A linear regression model trained with 5 examples of Celsius-Fahrenheit conversions learned the exact formula (slope=1.8, bias=32). What does this demonstrate about machine learning?',
      options: [
        { id: 'a', text: 'ML models always need millions of samples to work' },
        { id: 'b', text: 'ML can discover precise mathematical rules from data without human explanation of the underlying physics' },
        { id: 'c', text: 'Traditional programming is always less accurate than ML' },
        { id: 'd', text: 'The model memorized the 5 examples without learning' },
      ],
      correctAnswer: 'b',
      explanation: 'With only 5 data points, the linear model recovered the exact physical law F = 1.8C + 32 through gradient-based optimization — without anyone telling it about thermodynamics. This exemplifies inductive learning from data.',
      incorrectFeedback: 'The Celsius-to-Fahrenheit example shows that ML extracts rules from patterns in data (inductive learning) rather than relying on programmer-specified logic.',
    },
    {
      id: 'q4',
      question: 'What is the key distinction between deductive programming and inductive machine learning?',
      options: [
        { id: 'a', text: 'Deductive programming uses Python; inductive ML uses Java' },
        { id: 'b', text: 'Deductive programs apply predefined rules to data; ML induces rules from data examples' },
        { id: 'c', text: 'Inductive ML always requires more electricity than deductive programming' },
        { id: 'd', text: 'Both are identical — inductive and deductive are synonyms in computing' },
      ],
      correctAnswer: 'b',
      explanation: 'Deductive programming flows from rules to answers (top-down). Inductive ML flows from examples to rules (bottom-up). Traditional programming gives the machine both data and rules to compute answers; ML gives data and answers to discover the rules.',
      incorrectFeedback: 'The paradigm shift: Traditional = Data + Rules → Answers. ML = Data + Answers → Rules. Revisit the concept section on deductive vs inductive reasoning.',
    },
    {
      id: 'q5',
      question: 'Adversarial spammers bypass keyword filters by typing "V1@GR@" instead of "VIAGRA". Why does a statistical ML spam filter handle this better?',
      options: [
        { id: 'a', text: 'ML filters search for exact string matches more thoroughly' },
        { id: 'b', text: 'ML filters learn semantic distributions and contextual patterns that recognize intent regardless of character substitutions' },
        { id: 'c', text: 'ML filters block all emails from unknown senders automatically' },
        { id: 'd', text: 'ML filters use more advanced dictionary lookups than rule-based filters' },
      ],
      correctAnswer: 'b',
      explanation: 'Statistical ML models learn probabilistic patterns over large corpora and can recognize adversarial character substitutions as statistically anomalous, unlike rigid keyword-matching rules that fail on typographic variants.',
      incorrectFeedback: 'ML spam filters learn statistical distributions of spam patterns, not exact string rules — making them robust to adversarial character substitutions.',
    },
    {
      id: 'q6',
      question: 'A developer argues: "AI is always better than traditional code, so we should use neural networks for everything including payroll tax calculation." What is wrong with this reasoning?',
      options: [
        { id: 'a', text: 'Neural networks cannot multiply numbers' },
        { id: 'b', text: 'Probabilistic ML models introduce uncertainty that violates the 100% precision required by legal tax compliance' },
        { id: 'c', text: 'Traditional code is always slower than neural networks' },
        { id: 'd', text: 'Nothing is wrong — ML is universally superior' },
      ],
      correctAnswer: 'b',
      explanation: 'Tax law is deterministic, legally binding, and requires exact precision. A model "99% accurate" on tax calculations would cause financial errors and legal liabilities. Problems with strict, known rules belong to traditional programming.',
      incorrectFeedback: 'Not every problem should use ML. Deterministic problems with exact legal rules (taxes, sorting) should use traditional programming. ML is for pattern recognition under uncertainty.',
    },
  ],
};

export const introMachineLearning: Topic = {
  id: 'intro-machine-learning',
  moduleId: 'ai-foundations',
  number: 5,
  title: 'Introduction to Machine Learning',
  description: 'Grasp the core engine of modern AI: learning patterns from data without being explicitly programmed.',
  objectives: [
    'Articulate Arthur Samuel’s foundational definition of Machine Learning',
    'Understand features, labels, training sets, and test sets',
    'Examine the iterative training feedback loop',
    'Distinguish between model parameters and hyperparameters',
  ],
  story: `In 1959, IBM computer scientist Arthur Samuel created a computer program that played checkers. Samuel was not an extraordinary checkers champion—in fact, many amateur players could beat him.
  
Instead of trying to program grandmaster strategies by hand, Samuel wrote a program that played thousands of games against itself, keeping track of board positions that correlated with eventual victory and discarding positions that led to defeat. Within months, the program began consistently beating Samuel himself, and eventually defeated the Connecticut state checkers champion.
  
Samuel coined the term "Machine Learning," describing it as the field of study that gives computers the ability to learn without being explicitly programmed.`,
  motivation: `**Why Machine Learning is the defining technology of our era:**

1. **Scalability**: While human knowledge transfer takes decades of schooling, an ML model can digest 10 million textbooks overnight.
2. **High-dimensional pattern recognition**: Humans can visualize 3 dimensions; ML easily finds mathematical relationships across 10,000 dimensions.
3. **Continuous adaptability**: As market trends or customer habits shift, ML models retrain and adjust dynamically.`,
  concept: {
    simple: `Machine Learning is like teaching a child to recognize fruits. You don't give them a math formula for an apple; you show them 100 apples of different sizes and colors. Eventually, their brain learns the visual pattern. Machine learning does the exact same thing with computers and numbers.`,
    technical: `Machine Learning is a subset of AI centered on statistical optimization algorithms that improve performance metric $P$ at task $T$ through experience $E$ (Tom Mitchell, 1997). The system adjusts internal weight tensors $\\mathbf{W}$ via gradient estimation over loss manifolds.`,
  },
  keyTerms: [
    {
      term: 'Features ($X$)',
      simple: 'The clues or measurements given to the computer (e.g., house size, bedrooms, location).',
      technical: 'Individual measurable properties or attributes of an observed phenomenon represented as a vector $\\mathbf{x} \\in \\mathbb{R}^d$.',
    },
    {
      term: 'Labels ($y$)',
      simple: 'The true answer the computer is trying to predict (e.g., house sale price).',
      technical: 'The ground-truth dependent variable or target value assigned to an instance in supervised learning.',
    },
    {
      term: 'Model Parameters',
      simple: 'The internal dials the computer adjusts during learning.',
      technical: 'Internal variables (e.g., weights and biases) whose values are estimated directly from data during the training process.',
    },
  ],
  equations: [
    {
      latex: 'y = f(X; \\mathbf{W}, b) = \\mathbf{W}^T X + b',
      explanation: 'The fundamental linear model: multiplying inputs X by weights W and adding bias b to predict output y.',
      symbols: [
        { symbol: 'X', meaning: 'Input features', interpretation: 'Measurements fed into the system' },
        { symbol: '\\mathbf{W}', meaning: 'Weight vector', interpretation: 'Importance weight assigned to each feature' },
        { symbol: 'b', meaning: 'Bias scalar', interpretation: 'Baseline offset when all features are zero' },
      ],
      example: {
        description: 'Predicting car price based on mileage (in thousands): base price $25,000 with -$150 per thousand miles.',
        calculation: 'y = (-0.15 \\times 40) + 25 = -6 + 25 = 19',
        result: 'Estimated value: $19,000 for a car with 40,000 miles',
      },
    },
  ],
  howItWorks: [
    { number: 1, title: 'Data Preparation', description: 'Raw data is cleaned, normalized, and partitioned into training, validation, and test splits.' },
    { number: 2, title: 'Model Architecture Selection', description: 'Select an algorithm (Linear Model, Decision Tree, Support Vector Machine, Neural Network).' },
    { number: 3, title: 'Training (Weight Optimization)', description: 'Model makes predictions, evaluates errors against ground truth, and updates weights via gradient descent.' },
    { number: 4, title: 'Evaluation & Inference', description: 'Model accuracy is verified on unseen test data before real-world production deployment.' },
  ],
  applications: [
    {
      title: 'Real Estate Price Valuation (Zillow Zestimate)',
      problem: 'Assessing property market value across diverse neighborhoods without manual home appraisals.',
      solution: 'Ensemble models analyze square footage, school ratings, and recent neighborhood sales to estimate valuation in real-time.',
    },
    {
      title: 'Customer Churn Prediction',
      problem: 'Telecom companies losing subscribers to competitors without warning.',
      solution: 'ML classifies users showing declining usage and proactively triggers personalized retention discounts.',
    },
  ],
  activity: {
    type: 'mcq',
    title: 'Spotting Features vs Labels',
    question: 'In a medical dataset used to predict diabetes risk, which of the following is the LABEL?',
    options: [
      { id: 'a', text: 'Patient age' },
      { id: 'b', text: 'Blood glucose level' },
      { id: 'c', text: 'Body Mass Index (BMI)' },
      { id: 'd', text: 'Has Diabetes (Yes / No)' },
    ],
    correctAnswer: 'd',
    explanation: '"Has Diabetes (Yes / No)" is the target outcome (label) being predicted. Age, glucose, and BMI are the input features used to make that prediction.',
    hint: 'Which variable is the outcome you want to predict versus the clues you provide?',
  },
  pythonHandsOn: {
    title: 'Train Your First Scikit-Learn Model',
    description: 'Fit a simple predictor to understand feature-label relationships in Python.',
    packages: ['scikit-learn'],
    installCommand: 'pip install scikit-learn',
    imports: [
      { code: 'from sklearn.tree import DecisionTreeClassifier', explanation: 'Import intuitive tree classifier' },
    ],
    code: [
      { code: '# Features: [Weight in grams, Texture (1=Rough, 0=Smooth)]', explanation: 'Feature design' },
      { code: 'X = [[140, 1], [130, 1], [150, 0], [170, 0]]', explanation: 'Training samples' },
      { code: '# Labels: 0 = Orange (Rough), 1 = Apple (Smooth)', explanation: 'Label encoding' },
      { code: 'y = [0, 0, 1, 1]', explanation: 'Target answers' },
      { code: '', explanation: '' },
      { code: 'clf = DecisionTreeClassifier()', explanation: 'Create tree classifier' },
      { code: 'clf.fit(X, y)', explanation: 'Train model on features and labels' },
      { code: '', explanation: '' },
      { code: 'unknown_fruit = [[160, 0]] # 160g and smooth', explanation: 'New sample' },
      { code: 'pred = clf.predict(unknown_fruit)[0]', explanation: 'Run inference' },
      { code: 'fruit_name = "Apple" if pred == 1 else "Orange"', explanation: 'Decode prediction' },
      { code: 'print(f"The model predicts the fruit is an: {fruit_name}")', explanation: 'Output result' },
    ],
    executionFlow: [
      { number: 1, title: 'Data Ingestion', description: 'Classifier receives pairs of features and target fruit classes.' },
      { number: 2, title: 'Rule Extraction', description: 'Algorithm finds optimal splitting threshold on the texture feature.' },
      { number: 3, title: 'Classification', description: 'The 160g smooth fruit is cleanly classified as an Apple.' },
    ],
    input: 'Sample: Weight=160g, Texture=Smooth (0)',
    output: 'The model predicts the fruit is an: Apple',
    interpretation: 'Decision tree automatically created a binary partition rule separating Apples from Oranges based on sensory features.',
    colabInstructions: [
      'Open Google Colab',
      'Paste and run the code block',
      'Try querying [[135, 1]] to see how it predicts an Orange',
    ],
  },
  mcqs: [
    {
      id: 'q1',
      question: 'According to Tom Mitchell’s classic definition, a computer program is said to learn from experience E with respect to task T and performance measure P if:',
      options: [
        { id: 'a', text: 'Its code size decreases over time' },
        { id: 'b', text: 'Its performance on T, as measured by P, improves with experience E' },
        { id: 'c', text: 'It requires zero electricity to execute' },
        { id: 'd', text: 'It can compile without any warnings' },
      ],
      correctAnswer: 'b',
      explanation: 'Machine learning is defined by measurable performance improvement on a given task through accumulated data/experience.',
      incorrectFeedback: 'Mitchell formalized ML as: Experience (E), Task (T), and Performance measure (P).',
    },
    {
      id: 'q2',
      question: 'In the linear model y = W^T X + b for predicting car prices, what does the weight W for the mileage feature represent?',
      options: [
        { id: 'a', text: 'The maximum speed of the car' },
        { id: 'b', text: 'How much the car price changes per unit increase in mileage' },
        { id: 'c', text: 'The number of training examples used' },
        { id: 'd', text: 'The intercept of the regression line' },
      ],
      correctAnswer: 'b',
      explanation: 'The weight W represents the slope — how much the output y (price) changes for each unit increase in feature X (mileage). A negative weight (e.g., -$150 per 1000 miles) means price decreases as mileage increases.',
      incorrectFeedback: 'In the linear model, weights represent feature sensitivity — the change in prediction per unit change in the corresponding feature.',
    },
    {
      id: 'q3',
      question: 'A model has excellent accuracy on its training set but performs poorly on new unseen emails. What ML issue does this most likely describe?',
      options: [
        { id: 'a', text: 'Underfitting — the model is too simple to capture any patterns' },
        { id: 'b', text: 'Overfitting — the model memorized training data and fails to generalize' },
        { id: 'c', text: 'Data leakage — training and test data were mixed' },
        { id: 'd', text: 'Label noise — the training labels are incorrect' },
      ],
      correctAnswer: 'b',
      explanation: 'High training accuracy but poor test accuracy is the classic signature of overfitting. The model memorized noise and specific patterns in training data instead of learning generalizable rules.',
      incorrectFeedback: 'When a model excels on training data but fails on unseen data, it has overfit. Revisit the training vs test split concept and why holdout evaluation is essential.',
    },
    {
      id: 'q4',
      question: 'What is the key difference between model parameters and hyperparameters?',
      options: [
        { id: 'a', text: 'Parameters are set by humans; hyperparameters are learned from data' },
        { id: 'b', text: 'Parameters are learned from data during training; hyperparameters are set by humans before training' },
        { id: 'c', text: 'Both are set randomly and never changed' },
        { id: 'd', text: 'Hyperparameters are the features; parameters are the labels' },
      ],
      correctAnswer: 'b',
      explanation: 'Model parameters (weights and biases) are learned automatically by the optimization algorithm from training data. Hyperparameters (learning rate, tree depth) are human-specified design choices made before training begins.',
      incorrectFeedback: 'Parameters = learned from data (e.g., weights). Hyperparameters = human-defined before training (e.g., learning rate, depth).',
    },
    {
      id: 'q5',
      question: 'Arthur Samuel\'s checkers program surpassed its creator without explicitly programmed strategies. Which aspect of ML does this best illustrate?',
      options: [
        { id: 'a', text: 'The program randomly stumbled upon good moves by chance' },
        { id: 'b', text: 'Learning from experience (self-play) improved performance beyond what the programmer could explicitly code' },
        { id: 'c', text: 'Hard-coded opening book moves were sufficient for champion-level play' },
        { id: 'd', text: 'The program required human intervention after every game to improve' },
      ],
      correctAnswer: 'b',
      explanation: 'Samuel\'s program demonstrated the core value of ML: by playing thousands of games against itself (experience E), it discovered strategies no human explicitly programmed — illustrating how data-driven experience surpasses hand-crafted rules.',
      incorrectFeedback: 'Samuel\'s checkers program exemplifies ML\'s power: experiential self-improvement beyond programmer knowledge, matching Mitchell\'s definition of learning.',
    },
    {
      id: 'q6',
      question: 'In the ML training pipeline, which step must come FIRST?',
      options: [
        { id: 'a', text: 'Model deployment to production servers' },
        { id: 'b', text: 'Data preparation: cleaning, normalizing, and splitting into train/validation/test sets' },
        { id: 'c', text: 'Gradient descent optimization' },
        { id: 'd', text: 'Evaluation of model accuracy on test data' },
      ],
      correctAnswer: 'b',
      explanation: 'The ML workflow always begins with data preparation. Raw data must be cleaned, normalized, and partitioned before any model training begins. "Garbage in = garbage out."',
      incorrectFeedback: 'Correct ML pipeline order: Data Preparation → Model Selection → Training → Evaluation → Deployment.',
    },
  ],
};

export const typesOfML: Topic = {
  id: 'types-of-ml',
  moduleId: 'ai-foundations',
  number: 6,
  title: 'The Three Main Types of Machine Learning',
  description: 'Survey the three foundational pillars of ML: Supervised Learning, Unsupervised Learning, and Reinforcement Learning.',
  objectives: [
    'Compare Supervised, Unsupervised, and Reinforcement Learning paradigms',
    'Identify typical use-cases and requirements for each learning type',
    'Understand semi-supervised and self-supervised hybrid methodologies',
  ],
  story: `Imagine three distinct ways a student can learn mathematics:
  
1. **With a Tutor (Supervised)**: The student solves 500 practice problems. For every problem, the teacher points out the exact correct answer and marks errors.
2. **Exploring Books in a Library (Unsupervised)**: The student walks into a library with thousands of unsorted manuscripts in unknown languages. Without any teacher, the student notices that certain books share identical symbols, themes, and bindings, organizing them into natural clusters.
3. **Playing a Video Game (Reinforcement Learning)**: The student plays a complex puzzle game. Nobody explains the rules. When they jump into a pit, they lose a life (negative reward); when they open a chest, they gain points (positive reward). Through thousands of attempts, they discover the winning strategy.`,
  motivation: `**Why categorizing ML paradigms matters:**

1. **Problem scoping**: When presented with a business problem, the first step is always determining: "Do we have labeled data (Supervised), unstructured data (Unsupervised), or an interactive environment (RL)?"
2. **Cost estimation**: Labeled data requires expensive human annotators; knowing alternative paradigms saves immense engineering cost.`,
  concept: {
    simple: `Supervised Learning learns from examples that have correct answers attached (labeled data).
Unsupervised Learning finds hidden patterns and groups in data with no answers provided (unlabeled data).
Reinforcement Learning learns by trial and error through rewards and penalties in an interactive environment.`,
    technical: `Supervised Learning maps input domain $\\mathcal{X}$ to output space $\\mathcal{Y}$ using labeled pairs $\\mathcal{D} = \\{(x_i, y_i)\\}$.
Unsupervised Learning infers the underlying probability distribution $p(\\mathbf{x})$ or latent geometric manifold from unannotated samples $\\mathcal{D} = \\{x_i\\}$.
Reinforcement Learning optimizes a policy $\\pi(a|s)$ to maximize expected cumulative discounted return in a Markov Decision Process (MDP).`,
  },
  keyTerms: [
    {
      term: 'Supervised Learning',
      simple: 'Training with labeled examples (input + correct answer).',
      technical: 'Inductive inference from paired data points to minimize empirical supervisory risk.',
    },
    {
      term: 'Unsupervised Learning',
      simple: 'Discovering natural structure or groupings without labels.',
      technical: 'Density estimation, dimensionality reduction, or clustering without supervisory feedback.',
    },
    {
      term: 'Reinforcement Learning',
      simple: 'Learning through interaction, trial, error, and rewards.',
      technical: 'Optimization of sequential decision policies within an MDP framework via environmental feedback signals.',
    },
  ],
  howItWorks: [
    { number: 1, title: 'Supervised Flow', description: 'Input + Label -> Loss Calculation -> Gradient Descent -> Predictive Model.' },
    { number: 2, title: 'Unsupervised Flow', description: 'Input Only -> Distance/Density Calculation -> Centroids/Embeddings -> Structural Clustering.' },
    { number: 3, title: 'Reinforcement Flow', description: 'State -> Action -> Environment Transition -> Reward Signal -> Policy Optimization.' },
  ],
  applications: [
    { title: 'Supervised: Spam Detection', problem: 'Classifying incoming emails.', solution: 'Model trained on 100,000 human-marked "Spam" vs "Not Spam" emails.' },
    { title: 'Unsupervised: Customer Segmentation', problem: 'Group 1 million shoppers without pre-existing labels.', solution: 'K-Means clustering segments customers by purchasing velocity and basket size.' },
    { title: 'Reinforcement: AlphaGo', problem: 'Mastering the ancient board game Go.', solution: 'Deep RL agent played millions of self-play games to surpass all human champions.' },
  ],
  activity: {
    type: 'mcq',
    title: 'Match the Scenario',
    question: 'A robotic arm learns to flip pancakes by attempting flips and receiving +10 points for landing cleanly and -10 for dropping on the floor. Which ML type is this?',
    options: [
      { id: 'a', text: 'Supervised Learning' },
      { id: 'b', text: 'Reinforcement Learning' },
      { id: 'c', text: 'Unsupervised Clustering' },
      { id: 'd', text: 'Deterministic Compilation' },
    ],
    correctAnswer: 'b',
    explanation: 'The robot interacts with an environment and learns through reward signals (+10, -10) via trial and error—the hallmark of Reinforcement Learning.',
    hint: 'Does the system receive reward points based on trials or does it have a database of labeled images?',
  },
  pythonHandsOn: {
    title: 'Comparing Supervised vs Unsupervised in Code',
    description: 'See a supervised classifier and an unsupervised clusterer side-by-side on the same 2D data.',
    packages: ['scikit-learn', 'numpy'],
    installCommand: 'pip install scikit-learn numpy',
    imports: [
      { code: 'from sklearn.neighbors import KNeighborsClassifier', explanation: 'Supervised classifier' },
      { code: 'from sklearn.cluster import KMeans', explanation: 'Unsupervised clusterer' },
      { code: 'import numpy as np', explanation: 'Array processing' },
    ],
    code: [
      { code: 'X = np.array([[1, 2], [1, 4], [2, 2], [8, 7], [9, 8], [8, 9]])', explanation: '6 data points in 2D' },
      { code: 'y = [0, 0, 0, 1, 1, 1] # Labels for supervised', explanation: 'Class labels' },
      { code: '', explanation: '' },
      { code: '# 1. Supervised Learning (Uses both X and y):', explanation: 'KNN model' },
      { code: 'knn = KNeighborsClassifier(n_neighbors=1).fit(X, y)', explanation: 'Fit with labels' },
      { code: 'print("Supervised Prediction for [2,3]:", knn.predict([[2, 3]]))', explanation: 'Predict label' },
      { code: '', explanation: '' },
      { code: '# 2. Unsupervised Learning (Uses ONLY X! No labels given!):', explanation: 'K-Means model' },
      { code: 'kmeans = KMeans(n_clusters=2, random_state=42).fit(X)', explanation: 'Find 2 natural clusters' },
      { code: 'print("Unsupervised Cluster Assignments:", kmeans.labels_)', explanation: 'Display discovered clusters' },
    ],
    executionFlow: [
      { number: 1, title: 'Supervised Execution', description: 'KNN learns boundary separating class 0 from class 1.' },
      { number: 2, title: 'Unsupervised Execution', description: 'K-Means groups the points into 2 geographic clusters purely by coordinate proximity.' },
    ],
    input: '6 points with two distinct geometric clusters',
    output: 'Supervised Prediction for [2,3]: [0]\nUnsupervised Cluster Assignments: [1 1 1 0 0 0]',
    interpretation: 'The unsupervised algorithm automatically discovered the two natural clusters without ever being told what the classes were!',
    colabInstructions: ['Run in Google Colab to test both paradigms.'],
  },
  mcqs: [
    {
      id: 'q1',
      question: 'Which machine learning paradigm operates entirely without ground-truth labels?',
      options: [
        { id: 'a', text: 'Supervised Learning' },
        { id: 'b', text: 'Unsupervised Learning' },
        { id: 'c', text: 'Regression Analysis' },
        { id: 'd', text: 'Binary Classification' },
      ],
      correctAnswer: 'b',
      explanation: 'Unsupervised learning discovers intrinsic patterns, densities, or groupings in data without any accompanying ground-truth labels.',
      incorrectFeedback: 'Supervised learning requires paired labels; unsupervised does not.',
    },
    {
      id: 'q2',
      question: 'AlphaGo mastered the game of Go by playing millions of games against itself and receiving win/loss feedback. Which ML paradigm best describes this?',
      options: [
        { id: 'a', text: 'Supervised Learning — it learned from labeled game records' },
        { id: 'b', text: 'Unsupervised Learning — it clustered board positions' },
        { id: 'c', text: 'Reinforcement Learning — it optimized a policy through environmental reward signals' },
        { id: 'd', text: 'Semi-supervised Learning — it used partial game annotations' },
      ],
      correctAnswer: 'c',
      explanation: 'AlphaGo used Reinforcement Learning: an agent (AI) interacted with the environment (board game), received reward signals (win=+1, loss=-1), and optimized its policy through millions of self-play episodes.',
      incorrectFeedback: 'Reinforcement Learning is characterized by agent-environment interaction with reward signals — not labeled datasets or clustering.',
    },
    {
      id: 'q3',
      question: 'A bank wants to group 2 million customers by spending behavior without any prior category definitions. Which ML paradigm should they use?',
      options: [
        { id: 'a', text: 'Supervised classification with predefined income brackets' },
        { id: 'b', text: 'Unsupervised clustering to discover natural customer segments' },
        { id: 'c', text: 'Reinforcement learning with reward-based spending optimization' },
        { id: 'd', text: 'Regression to predict exact spending amounts' },
      ],
      correctAnswer: 'b',
      explanation: 'Since there are no predefined category labels, unsupervised clustering (e.g., K-Means) is the right paradigm. It discovers latent natural groupings based on behavioral similarity without any supervisory annotations.',
      incorrectFeedback: 'When no labels exist and the goal is finding hidden structure or groups in data, use Unsupervised Learning (clustering).',
    },
    {
      id: 'q4',
      question: 'Which statement correctly differentiates supervised and reinforcement learning?',
      options: [
        { id: 'a', text: 'Supervised learning uses rewards; reinforcement learning uses labels' },
        { id: 'b', text: 'Supervised learning uses labeled input-output pairs; RL learns through sequential interaction and delayed reward signals' },
        { id: 'c', text: 'Both paradigms require identical labeled datasets' },
        { id: 'd', text: 'Reinforcement learning always requires a human teacher present' },
      ],
      correctAnswer: 'b',
      explanation: 'Supervised learning uses paired (X, y) labeled examples with immediate feedback. RL involves sequential decision-making in an environment with potentially delayed reward signals and no explicit correct action labels.',
      incorrectFeedback: 'Key distinction: Supervised uses labeled pairs with immediate feedback; RL uses environmental interaction with delayed reward signals over time.',
    },
    {
      id: 'q5',
      question: 'A self-driving car system is trained on 1 million dashcam images labeled "pedestrian", "vehicle", or "traffic light". A separate module groups GPS trajectories into natural route clusters without labels. Which paradigms are used respectively?',
      options: [
        { id: 'a', text: 'Both use reinforcement learning' },
        { id: 'b', text: 'Supervised learning for image labeling; Unsupervised clustering for GPS trajectories' },
        { id: 'c', text: 'Unsupervised learning for image labeling; Supervised clustering for GPS trajectories' },
        { id: 'd', text: 'Both use supervised learning with synthetic labels' },
      ],
      correctAnswer: 'b',
      explanation: 'The image classifier uses labeled training data (Supervised Learning). The GPS trajectory grouper discovers natural patterns without labels (Unsupervised Clustering). Modern AI systems often combine multiple paradigms.',
      incorrectFeedback: 'Labeled data → Supervised Learning. No labels, discovering natural structure → Unsupervised Learning.',
    },
    {
      id: 'q6',
      question: 'What is the primary challenge that makes obtaining labeled data expensive in supervised learning?',
      options: [
        { id: 'a', text: 'Computers cannot store labeled data efficiently' },
        { id: 'b', text: 'Labels must be assigned by human domain experts, requiring significant time, expertise, and cost' },
        { id: 'c', text: 'Labels automatically degrade in quality over time' },
        { id: 'd', text: 'Labeling requires special quantum hardware' },
      ],
      correctAnswer: 'b',
      explanation: 'Creating high-quality labeled datasets requires skilled human annotators (doctors for medical images, lawyers for legal documents, linguists for translation). This is time-consuming, costly, and the primary motivation for exploring unsupervised and semi-supervised approaches.',
      incorrectFeedback: 'Human annotation cost and expertise requirements make labeled data expensive. This is why 99% of the world\'s data remains unlabeled, driving demand for unsupervised methods.',
    },
  ],
};

export const supervisedLearning: Topic = {
  id: 'supervised-learning',
  moduleId: 'ai-foundations',
  number: 7,
  title: 'Supervised Learning: Classification & Regression',
  description: 'Master the most commercially dominant form of AI: mapping inputs to targets via classification and regression.',
  objectives: [
    'Distinguish between discrete classification and continuous regression tasks',
    'Examine common supervised algorithms: Linear Regression, Logistic Regression, Decision Trees, SVMs',
    'Understand train/test splits and generalization error',
  ],
  story: `Imagine working at an emergency hospital triage center. Every minute, patients walk in with varying symptoms, blood pressures, and heart rates.
  
The triage AI must make two distinct kinds of predictions:
1. **Classification**: Is this patient having an acute cardiac infarction? (Binary answer: YES or NO; or Category: High, Medium, Low risk).
2. **Regression**: What is this patient's expected recovery time in days? (Continuous number: 2.4 days, 5.8 days).
  
Both models learn from historical hospital records where patient outcomes are known with certainty. Supervised learning powers the vast majority of industrial AI today.`,
  motivation: `**Why Supervised Learning is foundational:**

1. **Direct business utility**: Almost all enterprise AI initiatives (churn prediction, credit scoring, lead scoring) are supervised classification or regression problems.
2. **Clear evaluation metrics**: Accuracy, precision, recall, RMSE, and $R^2$ provide mathematically concrete benchmarks of model quality.`,
  concept: {
    simple: `Supervised learning is like learning with an answer key. If you want the computer to predict a category (like "Dog" vs "Cat"), that is **Classification**. If you want it to predict a continuous number (like house price or tomorrow's temperature), that is **Regression**.`,
    technical: `Given an empirical sample $\\mathcal{D} = \\{(\\mathbf{x}_i, y_i)\\}_{i=1}^N \\stackrel{i.i.d.}{\\sim} \\mathcal{P}_{\\mathcal{X}\\mathcal{Y}}$, supervised learning estimates conditional expectation $\\mathbb{E}[Y|X=\\mathbf{x}]$ (for regression $y \\in \\mathbb{R}$) or class posterior $P(Y=c|X=\\mathbf{x})$ (for classification $y \\in \\{1, \\dots, C\\}$).`,
  },
  keyTerms: [
    {
      term: 'Classification',
      simple: 'Predicting a categorical label or group membership (e.g. Yes/No, Red/Green/Blue).',
      technical: 'Mapping feature space to a discrete set of class identifiers: $f: \\mathbb{R}^d \\rightarrow \\{0, 1, \\dots, C-1\\}$.',
    },
    {
      term: 'Regression',
      simple: 'Predicting a continuous numerical quantity (e.g. price, speed, temperature).',
      technical: 'Mapping feature space to a continuous real-valued scalar: $f: \\mathbb{R}^d \\rightarrow \\mathbb{R}$.',
    },
  ],
  equations: [
    {
      latex: '\\text{MSE} = \\frac{1}{N} \\sum_{i=1}^N (y_i - \\hat{y}_i)^2',
      explanation: 'Mean Squared Error (MSE): the standard loss function for regression tasks, penalizing larger errors quadratically.',
      symbols: [
        { symbol: 'y_i', meaning: 'True value', interpretation: 'Actual recorded outcome' },
        { symbol: '\\hat{y}_i', meaning: 'Predicted value', interpretation: 'Model prediction' },
        { symbol: 'N', meaning: 'Number of samples', interpretation: 'Sample size' },
      ],
      example: {
        description: 'Errors for two predictions: true [10, 20], predicted [12, 19].',
        calculation: '\\text{MSE} = \\frac{(10 - 12)^2 + (20 - 19)^2}{2} = \\frac{4 + 1}{2} = 2.5',
        result: 'MSE = 2.5',
      },
    },
  ],
  howItWorks: [
    { number: 1, title: 'Feature Matrix Construction', description: 'Assemble tabular matrix X (N samples, D features) and target vector y.' },
    { number: 2, title: 'Loss Formulation', description: 'Define MSE for regression or Cross-Entropy for classification.' },
    { number: 3, title: 'Model Optimization', description: 'Backpropagation or convex solver minimizes error over parameter space.' },
  ],
  applications: [
    { title: 'Loan Default Prediction (Classification)', problem: 'Banks need to classify applicants as Low Risk vs High Risk.', solution: 'Logistic regression or XGBoost predicts probability of repayment.' },
    { title: 'Weather Forecasting (Regression)', problem: 'Predicting peak temperature tomorrow in degrees Celsius.', solution: 'Regression model trained on atmospheric pressure and satellite metrics.' },
  ],
  activity: {
    type: 'mcq',
    title: 'Classification or Regression?',
    question: 'An algorithm estimates the exact market rental price in dollars for apartments in New York. Is this Classification or Regression?',
    options: [
      { id: 'a', text: 'Classification' },
      { id: 'b', text: 'Regression' },
      { id: 'c', text: 'Unsupervised Clustering' },
      { id: 'd', text: 'Reinforcement Learning' },
    ],
    correctAnswer: 'b',
    explanation: 'Rental price is a continuous numerical value ($2,450.00, $3,125.50), making it a regression problem.',
    hint: 'Is the outcome a discrete category or a continuous numerical quantity?',
  },
  pythonHandsOn: {
    title: 'Classification vs Regression in Scikit-Learn',
    description: 'Train a classifier and a regressor in under 15 lines of code.',
    packages: ['scikit-learn'],
    installCommand: 'pip install scikit-learn',
    imports: [
      { code: 'from sklearn.linear_model import LinearRegression, LogisticRegression', explanation: 'Import both models' },
      { code: 'import numpy as np', explanation: 'NumPy arrays' },
    ],
    code: [
      { code: '# Hours studied vs Exam Score (0-100) -> REGRESSION', explanation: 'Regression data' },
      { code: 'X_study = np.array([[1], [2], [4], [6], [8]])', explanation: 'Hours' },
      { code: 'y_score = np.array([35, 50, 70, 85, 95])', explanation: 'Continuous scores' },
      { code: 'reg = LinearRegression().fit(X_study, y_score)', explanation: 'Fit regressor' },
      { code: 'print(f"Predicted Score for 5 hours: {reg.predict([[5]])[0]:.1f}")', explanation: 'Regression output' },
      { code: '', explanation: '' },
      { code: '# Hours studied vs Pass/Fail (0=Fail, 1=Pass) -> CLASSIFICATION', explanation: 'Classification data' },
      { code: 'y_pass = np.array([0, 0, 1, 1, 1])', explanation: 'Discrete classes' },
      { code: 'clf = LogisticRegression().fit(X_study, y_pass)', explanation: 'Fit classifier' },
      { code: 'print(f"Pass/Fail Prediction for 3 hours: {clf.predict([[3]])[0]} (Probability: {clf.predict_proba([[3]])[0][1]:.2f})")', explanation: 'Classification output' },
    ],
    executionFlow: [
      { number: 1, title: 'Regression Fit', description: 'Fits best straight line predicting exact score.' },
      { number: 2, title: 'Classification Fit', description: 'Fits sigmoid curve calculating probability of passing.' },
    ],
    input: 'Study hours: 5 for score, 3 for pass/fail',
    output: 'Predicted Score for 5 hours: 77.0\nPass/Fail Prediction for 3 hours: 1 (Probability: 0.73)',
    interpretation: 'Regression outputs an unbounded continuous score (77.0), while classification outputs a discrete class outcome (1 = Pass) with confidence 73%.',
    colabInstructions: ['Run in Google Colab to test both models.'],
  },
  mcqs: [
    {
      id: 'q1',
      question: 'Which loss function is most widely used for training linear regression models?',
      options: [
        { id: 'a', text: 'Binary Cross-Entropy' },
        { id: 'b', text: 'Mean Squared Error (MSE)' },
        { id: 'c', text: 'Hinge Loss' },
        { id: 'd', text: 'Categorical Focal Loss' },
      ],
      correctAnswer: 'b',
      explanation: 'Mean Squared Error computes the average squared difference between predictions and true continuous values, making it the standard regression objective.',
      incorrectFeedback: 'Cross-entropy and Hinge loss are used for classification; MSE is used for regression.',
    },
    {
      id: 'q2',
      question: 'A hospital uses an AI model to predict whether a tumor is malignant or benign from MRI scans. Is this a classification or regression task?',
      options: [
        { id: 'a', text: 'Regression, because medical data involves continuous measurements' },
        { id: 'b', text: 'Classification, because the output is a discrete categorical label (Malignant / Benign)' },
        { id: 'c', text: 'Unsupervised clustering, because tumors have no pre-defined labels' },
        { id: 'd', text: 'Reinforcement learning, because the radiologist provides feedback' },
      ],
      correctAnswer: 'b',
      explanation: 'Tumor diagnosis outputs a discrete category (Malignant/Benign), making it a classification problem. The model maps MRI pixel features to class labels, not to continuous numerical values.',
      incorrectFeedback: 'Classification outputs discrete categories (Yes/No, Red/Green). Regression outputs continuous numbers (price, temperature). Tumor diagnosis is a classification task.',
    },
    {
      id: 'q3',
      question: 'You compute MSE = (1/2) × [(10-12)² + (20-19)²] = 2.5 for a model. What does this value tell you?',
      options: [
        { id: 'a', text: 'The model made errors with an average squared deviation of 2.5 units from true values' },
        { id: 'b', text: 'The model correctly classified 2.5% of examples' },
        { id: 'c', text: 'The model needs exactly 2.5 more epochs of training' },
        { id: 'd', text: 'The model has 2.5 hidden layers' },
      ],
      correctAnswer: 'a',
      explanation: 'MSE of 2.5 means the average squared distance between predictions and true values is 2.5. Lower MSE = better model accuracy. It penalizes large errors more than small ones due to the squaring operation.',
      incorrectFeedback: 'MSE (Mean Squared Error) measures average squared prediction error. It is not a classification metric. Review how MSE = (1/N) Σ(y_i - ŷ_i)² is interpreted.',
    },
    {
      id: 'q4',
      question: 'Why does supervised learning require a train/test split rather than evaluating the model on the same data it was trained on?',
      options: [
        { id: 'a', text: 'To reduce computational cost of training' },
        { id: 'b', text: 'To measure genuine generalization — whether the model learned rules or just memorized training examples' },
        { id: 'c', text: 'Because training data is always corrupted and unreliable' },
        { id: 'd', text: 'To comply with data privacy regulations' },
      ],
      correctAnswer: 'b',
      explanation: 'A model evaluated on its own training data will appear artificially accurate because it may have memorized examples (overfitting). Test data must be completely unseen to honestly assess generalization to new, real-world inputs.',
      incorrectFeedback: 'Train/test splits reveal true generalization ability. Without a holdout test set, you cannot distinguish learning from memorization (overfitting).',
    },
    {
      id: 'q5',
      question: 'In logistic regression for pass/fail prediction, the output probability for 3 study hours is 0.73. What does this mean practically?',
      options: [
        { id: 'a', text: 'The student will study for exactly 0.73 more hours' },
        { id: 'b', text: 'The model estimates a 73% probability of passing with 3 study hours' },
        { id: 'c', text: 'The model is 27% certain the prediction is wrong' },
        { id: 'd', text: 'The model assigns 73 points to the student\'s test score' },
      ],
      correctAnswer: 'b',
      explanation: 'Logistic regression outputs a probability P(Y=1|X) between 0 and 1. A value of 0.73 means the model assigns 73% probability to the "Pass" class. The final class label is determined by thresholding (usually at 0.5).',
      incorrectFeedback: 'Logistic regression outputs class probabilities, not raw scores or counts. P(Pass|3 hours) = 0.73 means 73% confidence the student passes.',
    },
    {
      id: 'q6',
      question: 'For predicting next month\'s electricity bill in dollars, which supervised learning approach is most appropriate?',
      options: [
        { id: 'a', text: 'Binary classification (High/Low bill)' },
        { id: 'b', text: 'Multi-class classification (Very High / High / Medium / Low)' },
        { id: 'c', text: 'Regression (predict the continuous dollar amount)' },
        { id: 'd', text: 'Anomaly detection (find unusual bills only)' },
      ],
      correctAnswer: 'c',
      explanation: 'Electricity bills are continuous dollar amounts (e.g., $87.43, $142.19). Regression models predict continuous numerical outputs, making them the correct choice over classification which outputs discrete categories.',
      incorrectFeedback: 'Predict a continuous dollar value → Regression. Predict a category (pass/fail, high/low) → Classification.',
    },
  ],
};

export const unsupervisedLearning: Topic = {
  id: 'unsupervised-learning',
  moduleId: 'ai-foundations',
  number: 8,
  title: 'Unsupervised Learning: Clustering & Dimensionality Reduction',
  description: 'Explore how algorithms discover hidden geometry, groups, and latent structures without human labels.',
  objectives: [
    'Understand K-Means and hierarchical clustering',
    'Grasp dimensionality reduction using Principal Component Analysis (PCA)',
    'Identify anomaly detection applications in cybersecurity and finance',
  ],
  story: `Astronomers surveying the night sky collect spectral radiation data from hundreds of millions of distant celestial bodies. No human has ever visited these stars, and no astronomer has pre-labeled them.
  
Using unsupervised clustering, algorithms grouped millions of stars by their surface temperature and luminosity. The algorithm naturally discovered the famous "Hertzsprung-Russell Diagram"—separating Main Sequence stars, Red Giants, and White Dwarfs without ever knowing what a star was. Unsupervised learning reveals the innate order hidden in raw data.`,
  motivation: `**Why Unsupervised Learning is crucial:**

1. **Labels are scarce and expensive**: 99% of the world's data (satellite feeds, audio, web text) is unlabeled.
2. **Exploratory Data Analysis**: Discovers market niches and user behavior that human product managers never thought to look for.
3. **Data Compression**: Dimensionality reduction shrinks terabytes of data while preserving 95%+ of essential variance.`,
  concept: {
    simple: `Unsupervised learning is like sorting a huge box of mystery LEGO bricks without instructions. You naturally group them by color, shape, or size. You find clusters without anyone telling you the names of the groups.`,
    technical: `Unsupervised learning discovers latent representations $\\mathbf{z}$ that model the data generating distribution $p(\\mathbf{x}) = \\int p(\\mathbf{x}|\\mathbf{z})p(\\mathbf{z})d\\mathbf{z}$, or partitions $\\mathcal{X}$ into Voronoi cells $S_k$ minimizing intra-cluster inertia $\\sum_{k} \\sum_{\\mathbf{x} \\in S_k} ||\\mathbf{x} - \\boldsymbol{\\mu}_k||^2$.`,
  },
  keyTerms: [
    {
      term: 'Clustering',
      simple: 'Grouping similar data points together based on how close they are to each other.',
      technical: 'Unsupervised partitioning of instances into disjoint or probabilistic subsets based on metric distance functions.',
    },
    {
      term: 'Dimensionality Reduction',
      simple: 'Compressing data with many features down to fewer features while keeping the important information.',
      technical: 'Projecting high-dimensional data $\\mathbb{R}^D$ onto a lower-dimensional manifold $\\mathbb{R}^d$ ($d \\ll D$) while maximizing preserved variance.',
    },
  ],
  equations: [
    {
      latex: 'J = \\sum_{k=1}^K \\sum_{x \\in S_k} \\|x - \\mu_k\\|^2',
      explanation: 'K-Means objective function: minimizes the sum of squared Euclidean distances between data points and their assigned cluster centroid.',
      symbols: [
        { symbol: 'K', meaning: 'Number of clusters', interpretation: 'Predefined count of groups' },
        { symbol: '\\mu_k', meaning: 'Centroid of cluster k', interpretation: 'The center coordinate of cluster k' },
        { symbol: 'S_k', meaning: 'Set of points in cluster k', interpretation: 'All observations assigned to group k' },
      ],
      example: {
        description: 'Point x=3 assigned to centroid mu=2. Squared distance is (3 - 2)^2 = 1.',
        calculation: '\\|3 - 2\\|^2 = 1',
        result: 'Distance contribution to inertia is 1',
      },
    },
  ],
  howItWorks: [
    { number: 1, title: 'Centroid Initialization', description: 'K random points are chosen as initial cluster centers.' },
    { number: 2, title: 'Assignment Step', description: 'Every data point is assigned to its nearest centroid.' },
    { number: 3, title: 'Update Step', description: 'Centroids are recalculated as the mean of all points assigned to them.' },
    { number: 4, title: 'Convergence', description: 'Repeat until centroid positions stabilize.' },
  ],
  applications: [
    { title: 'Genomics & DNA Clustering', problem: 'Identifying disease subtypes among 20,000 gene expressions.', solution: 'Hierarchical clustering identifies genetic cohorts responding to specialized therapies.' },
    { title: 'Server Intrusion Detection', problem: 'Zero-day cyberattacks have never been seen or labeled before.', solution: 'Density-based anomaly detection flags network packets deviating from typical baseline traffic.' },
  ],
  activity: {
    type: 'mcq',
    title: 'Cluster Concept Check',
    question: 'In the K-Means algorithm, what does "K" represent?',
    options: [
      { id: 'a', text: 'The number of features in each data point' },
      { id: 'b', text: 'The number of clusters the user wants to partition the data into' },
      { id: 'c', text: 'The accuracy percentage' },
      { id: 'd', text: 'The learning rate of the neural network' },
    ],
    correctAnswer: 'b',
    explanation: 'K is a hyperparameter specified by the user denoting how many distinct clusters to group the data into.',
    hint: 'Think about how many groups you want the algorithm to find.',
  },
  pythonHandsOn: {
    title: 'K-Means Clustering with Scikit-Learn',
    description: 'Cluster customer spend and visit frequency without any labels.',
    packages: ['scikit-learn', 'numpy'],
    installCommand: 'pip install scikit-learn numpy',
    imports: [
      { code: 'from sklearn.cluster import KMeans', explanation: 'Import K-Means' },
      { code: 'import numpy as np', explanation: 'NumPy array support' },
    ],
    code: [
      { code: '# Customer data: [Visits per month, Average Spend in Dollars]', explanation: 'Data setup' },
      { code: 'customers = np.array([[1, 20], [2, 25], [1, 15], [15, 300], [18, 350], [14, 280]])', explanation: 'Casual vs VIP customers' },
      { code: 'kmeans = KMeans(n_clusters=2, random_state=0).fit(customers)', explanation: 'Run K-Means with K=2' },
      { code: 'print("Cluster Centers (Centroids):\\n", kmeans.cluster_centers_)', explanation: 'Show centers' },
      { code: 'new_shopper = [[16, 320]]', explanation: 'New customer' },
      { code: 'print("Assigned Cluster for [16 visits, $320]:", kmeans.predict(new_shopper)[0])', explanation: 'Predict cluster' },
    ],
    executionFlow: [
      { number: 1, title: 'Centroid Fitting', description: 'Calculates centers for casual shoppers (~$20) and VIP shoppers (~$310).' },
      { number: 2, title: 'Inference', description: 'Assigns new shopper with 16 visits and $320 spend to the VIP cluster.' },
    ],
    input: 'Customer behavior matrix with two distinct customer cohorts',
    output: 'Cluster Centers:\n[[ 1.33  20.00]\n [15.67 310.00]]\nAssigned Cluster for [16 visits, $320]: 1',
    interpretation: 'Without any supervisory intervention, K-Means discovered the high-value VIP segment and the low-frequency casual shopper segment.',
    colabInstructions: ['Run in Google Colab to test.'],
  },
  mcqs: [
    {
      id: 'q1',
      question: 'Which technique is primarily used to project high-dimensional data into a lower-dimensional space while preserving variance?',
      options: [
        { id: 'a', text: 'Principal Component Analysis (PCA)' },
        { id: 'b', text: 'Logistic Regression' },
        { id: 'c', text: 'Stochastic Gradient Descent' },
        { id: 'd', text: 'Binary Cross Entropy' },
      ],
      correctAnswer: 'a',
      explanation: 'PCA computes the orthogonal eigenvectors of the covariance matrix to project data onto principal axes of maximum variance.',
      incorrectFeedback: 'PCA is the gold-standard linear dimensionality reduction method.',
    },
    {
      id: 'q2',
      question: 'In K-Means clustering, what happens during the "Assignment Step"?',
      options: [
        { id: 'a', text: 'Centroids are recalculated as the mean of all assigned points' },
        { id: 'b', text: 'Every data point is assigned to its nearest centroid based on Euclidean distance' },
        { id: 'c', text: 'The number of clusters K is automatically determined' },
        { id: 'd', text: 'Outlier data points are deleted from the dataset' },
      ],
      correctAnswer: 'b',
      explanation: 'During the Assignment Step, each data point calculates its distance to all K centroids and is assigned to the cluster with the closest centroid. This is the core step that partitions data into groups.',
      incorrectFeedback: 'K-Means alternates between two steps: Assignment (assign each point to nearest centroid) and Update (recalculate centroids). Review the 4-step K-Means procedure.',
    },
    {
      id: 'q3',
      question: 'Astronomers used unsupervised clustering to analyze millions of stellar spectra without any pre-existing star classifications. What does this demonstrate?',
      options: [
        { id: 'a', text: 'Unsupervised learning is only useful for astronomy applications' },
        { id: 'b', text: 'Unsupervised learning can discover scientifically meaningful natural categories (Main Sequence, Red Giants, White Dwarfs) without prior labels' },
        { id: 'c', text: 'The astronomers secretly provided labels to the algorithm' },
        { id: 'd', text: 'Clustering requires domain expertise to interpret meaningless random groupings' },
      ],
      correctAnswer: 'b',
      explanation: 'The stellar clustering example illustrates unsupervised learning\'s power: without any labels, the algorithm naturally recovered the famous Hertzsprung-Russell classification. This shows that natural structure can be discovered purely from data geometry.',
      incorrectFeedback: 'Unsupervised learning discovers innate mathematical structure in data without supervisory guidance. The stellar example proves clusters can correspond to real-world meaningful categories.',
    },
    {
      id: 'q4',
      question: 'The K-Means objective function J = Σ_k Σ_{x∈Sk} ||x - μk||² minimizes what quantity?',
      options: [
        { id: 'a', text: 'The cross-entropy loss between cluster labels and predictions' },
        { id: 'b', text: 'The total squared distance from each point to its assigned cluster centroid (within-cluster inertia)' },
        { id: 'c', text: 'The number of centroids K in the clustering solution' },
        { id: 'd', text: 'The maximum distance between any two data points' },
      ],
      correctAnswer: 'b',
      explanation: 'The K-Means objective function minimizes total within-cluster inertia — the sum of squared Euclidean distances from each point to its assigned centroid. Minimizing this creates compact, well-separated clusters.',
      incorrectFeedback: 'J = Σ Σ ||x - μk||² is the within-cluster sum of squares (inertia). K-Means converges when cluster assignments and centroid positions stabilize.',
    },
    {
      id: 'q5',
      question: 'Why is unsupervised anomaly detection particularly valuable for detecting zero-day cyberattacks?',
      options: [
        { id: 'a', text: 'Because it can block all network traffic automatically' },
        { id: 'b', text: 'Because new attack patterns have never been seen before and thus have no labels to train a supervised classifier' },
        { id: 'c', text: 'Because supervised classifiers are too expensive to deploy in production' },
        { id: 'd', text: 'Because anomaly detection can only detect cyberattacks, not normal traffic' },
      ],
      correctAnswer: 'b',
      explanation: 'Zero-day attacks are novel exploits with no prior occurrence — therefore no labeled training examples exist. Unsupervised anomaly detection learns the statistical baseline of normal traffic and flags statistically deviant packets without needing labeled attack examples.',
      incorrectFeedback: 'Zero-day attacks have never been seen before, making supervised labeling impossible. Unsupervised anomaly detection finds statistical outliers without pre-labeled attack data.',
    },
    {
      id: 'q6',
      question: 'A K-Means clustering run assigns a new customer with [16 visits, $320 spend] to cluster 1 (centroid: [15.67, $310]). Why is this assignment correct?',
      options: [
        { id: 'a', text: 'Because cluster 1 has the most data points' },
        { id: 'b', text: 'Because [16, 320] is geometrically closer to centroid [15.67, 310] than to the other centroid [1.33, 20]' },
        { id: 'c', text: 'Because cluster indices are assigned alphabetically' },
        { id: 'd', text: 'Because the customer\'s name starts with the same letter as cluster 1\'s label' },
      ],
      correctAnswer: 'b',
      explanation: 'K-Means assignment is based purely on Euclidean distance. The new customer [16, 320] is very close to centroid [15.67, 310] (distance ≈ 10) versus centroid [1.33, 20] (distance ≈ 425), so it correctly joins the VIP cluster.',
      incorrectFeedback: 'K-Means assigns each point to the nearest centroid by Euclidean distance. [16, 320] is geometrically near [15.67, 310], confirming VIP cluster membership.',
    },
  ],
};

export const reinforcementLearningIntro: Topic = {
  id: 'reinforcement-learning-intro',
  moduleId: 'ai-foundations',
  number: 9,
  title: 'Introduction to Reinforcement Learning',
  description: 'Understand how intelligent agents learn through trial, error, states, actions, and environmental rewards.',
  objectives: [
    'Define the Reinforcement Learning loop (Agent, Environment, State, Action, Reward)',
    'Understand the Exploration vs Exploitation dilemma',
    'Recognize differences between passive prediction and sequential decision-making',
  ],
  story: `When a human toddler learns to walk, nobody hands them an operating manual or a database of 100,000 labeled walking videos.
  
The child stands up, loses balance, and falls (a painful negative reward). They adjust their foot angle and shift weight (action in state). Gradually, muscles coordinate, balance stabilizes, and the child walks across the room to grab a toy (positive reward).
  
This is Reinforcement Learning: an agent situated in a dynamic world learns optimal behaviors through real-time experiential consequences.`,
  motivation: `**Why Reinforcement Learning is the frontier of autonomous systems:**

1. **Active decision making**: Unlike supervised learning which only predicts labels, RL takes actions that permanently alter future states of the world.
2. **Superhuman achievement**: RL powers systems like AlphaZero, robotic manipulation, automated algorithmic trading, and ChatGPT’s RLHF alignment.`,
  concept: {
    simple: `Reinforcement Learning is like training a puppy. When the puppy sits on command, you give it a treat (positive reward). When it chews the sofa, you say "No!" (negative reward). Over time, the puppy figures out what behaviors earn the most treats.`,
    technical: `Reinforcement Learning is formal decision-theoretic learning where an agent interacts with a Markov Decision Process $\\mathcal{M} = \\langle \\mathcal{S}, \\mathcal{A}, \\mathcal{P}, \\mathcal{R}, \\gamma \\rangle$ to learn a policy $\\pi^*(a|s) = \\arg\\max_\\pi \\mathbb{E}[\\sum_{t=0}^\\infty \\gamma^t R_t]$.`,
  },
  keyTerms: [
    {
      term: 'Agent & Environment',
      simple: 'The Agent is the learner/decision-maker; the Environment is the world it lives in.',
      technical: 'The agent selects actions $a_t \\in \\mathcal{A}$; the environment transitions states $s_{t+1} \\sim P(s_{t+1}|s_t, a_t)$ and emits scalar reward $r_t$.',
    },
    {
      term: 'Reward Signal',
      simple: 'A number telling the agent how well or poorly it did on the latest step.',
      technical: 'A scalar feedback metric $R_t \\in \\mathbb{R}$ defining the formal optimization goal.',
    },
    {
      term: 'Policy ($\\pi$)',
      simple: 'The strategy or brain of the agent mapping situations to actions.',
      technical: 'A probability distribution $\\pi(a|s) = P(A_t = a | S_t = s)$ defining action selection.',
    },
  ],
  equations: [
    {
      latex: 'G_t = \\sum_{k=0}^{\\infty} \\gamma^k R_{t+k+1}',
      explanation: 'Discounted Return: the total cumulative reward an agent expects to receive from time t onwards, where future rewards are discounted by gamma.',
      symbols: [
        { symbol: 'G_t', meaning: 'Discounted Return', interpretation: 'Total long-term payoff' },
        { symbol: '\\gamma', meaning: 'Discount factor (0 to 1)', interpretation: 'How much the agent cares about future vs immediate rewards' },
        { symbol: 'R_{t+k+1}', meaning: 'Reward at future step', interpretation: 'Reward received k steps later' },
      ],
      example: {
        description: 'Agent gets reward 0 today, 10 tomorrow, with discount factor gamma = 0.9.',
        calculation: 'G_t = 0 + (0.9 \\times 10) = 9.0',
        result: 'Discounted return value is 9.0',
      },
    },
  ],
  howItWorks: [
    { number: 1, title: 'Observe State', description: 'Agent inspects current environment state s_t.' },
    { number: 2, title: 'Execute Action', description: 'Agent chooses action a_t based on current policy.' },
    { number: 3, title: 'Receive Feedback', description: 'Environment yields scalar reward r_t and transitions to next state s_{t+1}.' },
    { number: 4, title: 'Policy Update', description: 'Agent updates action values to increase probability of high-reward actions.' },
  ],
  applications: [
    { title: 'Autonomous Drone Flight', problem: 'Navigating turbulent wind gusts in unknown terrain.', solution: 'RL agent learns micro-second propeller thrust adjustments in simulation before physical deployment.' },
    { title: 'Datacenter Cooling (DeepMind / Google)', problem: 'Optimizing industrial HVAC chilling to minimize electricity waste.', solution: 'RL model reduced cooling energy consumption by 40% in Google datacenters.' },
  ],
  activity: {
    type: 'mcq',
    title: 'Exploration vs Exploitation',
    question: 'You visit your favorite restaurant. Choosing your usual favorite meal is EXPLOITATION. What is EXPLORATION?',
    options: [
      { id: 'a', text: 'Ordering your usual favorite dish again' },
      { id: 'b', text: 'Trying a completely new dish you have never tasted before' },
      { id: 'c', text: 'Leaving the restaurant without eating' },
      { id: 'd', text: 'Asking for the bill' },
    ],
    correctAnswer: 'b',
    explanation: 'Exploration means trying an unfamiliar option to discover if it might yield an even higher reward than your current best-known choice.',
    hint: 'Exploration seeks new information; exploitation leverages current knowledge.',
  },
  pythonHandsOn: {
    title: 'Simulating a Multi-Armed Bandit Agent',
    description: 'Implement a minimal epsilon-greedy reinforcement agent in pure Python.',
    packages: ['numpy'],
    installCommand: 'pip install numpy',
    imports: [{ code: 'import numpy as np', explanation: 'NumPy for random choices' }],
    code: [
      { code: '# Two slot machines with win probabilities [0.2, 0.8]', explanation: 'Environment definition' },
      { code: 'win_probs = [0.2, 0.8]', explanation: 'Machine 1 is poor; Machine 2 is generous' },
      { code: 'q_values = [0.0, 0.0] # Estimated quality of each action', explanation: 'Agent memory' },
      { code: 'counts = [0, 0] # Times each machine was pulled', explanation: 'Action counter' },
      { code: 'epsilon = 0.2 # 20% exploration, 80% exploitation', explanation: 'Exploration parameter' },
      { code: '', explanation: '' },
      { code: 'for step in range(50):', explanation: '50 trials' },
      { code: '    # Epsilon-greedy action selection:', explanation: 'Decision rule' },
      { code: '    if np.random.rand() < epsilon:', explanation: 'Explore' },
      { code: '        action = np.random.choice([0, 1]) # Random explore', explanation: 'Try random' },
      { code: '    else:', explanation: 'Exploit' },
      { code: '        action = int(np.argmax(q_values)) # Exploit best known', explanation: 'Pick highest Q' },
      { code: '', explanation: '' },
      { code: '    reward = 1.0 if np.random.rand() < win_probs[action] else 0.0', explanation: 'Simulate payout' },
      { code: '    counts[action] += 1', explanation: 'Increment count' },
      { code: '    q_values[action] += (reward - q_values[action]) / counts[action] # Update Q', explanation: 'Incremental average' },
      { code: 'print("Estimated Win Rates:", [round(q, 2) for q in q_values])', explanation: 'Print learned values' },
      { code: 'print("Times Each Pulled:", counts)', explanation: 'Print action distribution' },
    ],
    executionFlow: [
      { number: 1, title: 'Exploration', description: 'Agent randomly samples both slot machines.' },
      { number: 2, title: 'Exploitation', description: 'Once machine 1 proves superior (~80% payout), agent directs majority of pulls to it.' },
    ],
    input: '50 interaction episodes with 2 bandit arms',
    output: 'Estimated Win Rates: [0.18, 0.79]\nTimes Each Pulled: [8, 42]',
    interpretation: 'The agent quickly converged on Machine 2, pulling it 42 times versus only 8 for Machine 1, demonstrating autonomous value discovery.',
    colabInstructions: ['Run in Google Colab to see RL convergence.'],
  },
  mcqs: [
    {
      id: 'q1',
      question: 'What is the role of the discount factor gamma (γ) in reinforcement learning?',
      options: [
        { id: 'a', text: 'It sets the price of electricity' },
        { id: 'b', text: 'It weights immediate rewards against future delayed rewards' },
        { id: 'c', text: 'It prevents the code from crashing' },
        { id: 'd', text: 'It counts how many hidden layers are in a network' },
      ],
      correctAnswer: 'b',
      explanation: 'Gamma (between 0 and 1) controls agent temporal preference: values close to 0 prioritize immediate rewards; values close to 1 prioritize long-term future returns.',
      incorrectFeedback: 'Discount factor gamma scales the present value of future rewards.',
    },
    {
      id: 'q2',
      question: 'DeepMind\'s RL system reduced Google datacenter cooling energy by 40%. At each decision step, what does the RL agent do?',
      options: [
        { id: 'a', text: 'Downloads pre-calculated optimal settings from a database' },
        { id: 'b', text: 'Observes the current datacenter state, selects a cooling action, receives an energy-cost reward, and updates its policy' },
        { id: 'c', text: 'Runs a physical simulation of the building without any real-world data' },
        { id: 'd', text: 'Asks human operators which action to take next' },
      ],
      correctAnswer: 'b',
      explanation: 'The RL agent follows the full agent-environment loop: observe state (temperatures, server load) → select action (cooling settings) → receive reward (energy cost reduction) → update policy. No pre-programmed rules exist.',
      incorrectFeedback: 'RL agents follow the State → Action → Reward → Policy Update cycle continuously. Review the 4-step RL loop: Observe, Execute, Receive Feedback, Update Policy.',
    },
    {
      id: 'q3',
      question: 'The discounted return formula G_t = Σ γ^k R_{t+k+1} is computed with γ=0.9, R_1=0, R_2=10. What is G_t?',
      options: [
        { id: 'a', text: 'G_t = 10.0 (reward is just received as-is)' },
        { id: 'b', text: 'G_t = 9.0 (future reward discounted by 0.9)' },
        { id: 'c', text: 'G_t = 0.9 (only the discount factor counts)' },
        { id: 'd', text: 'G_t = 19.0 (both rewards added directly)' },
      ],
      correctAnswer: 'b',
      explanation: 'G_t = R_1 + γ×R_2 = 0 + 0.9×10 = 9.0. The discount factor γ=0.9 reduces the present value of the future reward from 10 to 9.0, reflecting that delayed rewards are worth less than immediate ones.',
      incorrectFeedback: 'Apply the discounted return formula: G_t = 0 + (0.9^1 × 10) = 9.0. Gamma exponentially scales down the value of rewards received further in the future.',
    },
    {
      id: 'q4',
      question: 'In an epsilon-greedy bandit agent with epsilon=0.2, what happens when np.random.rand() returns 0.15?',
      options: [
        { id: 'a', text: 'The agent exploits — picks the arm with the highest known Q-value' },
        { id: 'b', text: 'The agent explores — picks a random arm' },
        { id: 'c', text: 'The agent does nothing and waits for the next step' },
        { id: 'd', text: 'The agent resets all Q-values to zero' },
      ],
      correctAnswer: 'b',
      explanation: 'Since 0.15 < epsilon (0.2), the condition `if np.random.rand() < epsilon` is True, triggering the exploration branch. The agent randomly selects an arm to try, ignoring current Q-value estimates.',
      incorrectFeedback: 'Epsilon-greedy: if random value < epsilon → explore (random action); if random value >= epsilon → exploit (best known Q-value). 0.15 < 0.2, so explore.',
    },
    {
      id: 'q5',
      question: 'What is the fundamental difference between supervised learning and reinforcement learning in terms of feedback?',
      options: [
        { id: 'a', text: 'Supervised learning receives delayed scalar rewards; RL receives labeled examples immediately' },
        { id: 'b', text: 'Supervised learning receives immediate labeled correct answers; RL receives delayed scalar reward signals from environment interaction' },
        { id: 'c', text: 'Both receive identical forms of feedback; the only difference is the data format' },
        { id: 'd', text: 'RL never receives any feedback; it learns purely by observation' },
      ],
      correctAnswer: 'b',
      explanation: 'Supervised learning gives the model the exact correct answer immediately (labeled pairs). RL provides only a scalar reward signal that may come steps or episodes later, and never provides the "correct" action explicitly.',
      incorrectFeedback: 'Supervised = immediate labeled correct answer. RL = delayed scalar reward without explicit action labels. The temporal gap between action and reward makes RL fundamentally different.',
    },
    {
      id: 'q6',
      question: 'A drone RL agent is trained in simulation before physical deployment. After 100,000 simulated flights, it achieves stable hovering. What RL principle does the self-play simulation demonstrate?',
      options: [
        { id: 'a', text: 'The agent needed a human supervisor to label each flight maneuver' },
        { id: 'b', text: 'Accumulating vast experience (E) through simulated interaction drives policy improvement without requiring real-world labeled data' },
        { id: 'c', text: 'Simulation replaces the need for any reward signal' },
        { id: 'd', text: 'The agent must be retrained from scratch for every new environment' },
      ],
      correctAnswer: 'b',
      explanation: 'RL agents learn by accumulating experience through environmental interaction — not labeled examples. Simulation allows safe, fast, and cheap experience accumulation, matching Mitchell\'s learning definition: performance improves with experience E.',
      incorrectFeedback: 'RL learns through experience (E) in an environment, not labeled datasets. Simulation accelerates experience accumulation safely before real-world deployment.',
    },
  ],
};

export const pythonForAI: Topic = {
  id: 'python-for-ai',
  moduleId: 'ai-foundations',
  number: 10,
  title: 'Python for AI: Essential Libraries',
  description: 'Understand why Python is the undisputed lingua franca of AI, and survey essential tools: NumPy, Pandas, Matplotlib, Scikit-Learn, and PyTorch.',
  objectives: [
    'Understand why Python dominates the modern AI/ML ecosystem',
    'Differentiate the core roles of NumPy, Pandas, Scikit-Learn, and PyTorch',
    'Perform tensor/array operations and basic visualizations in Python',
  ],
  story: `In the early 1990s, Guido van Rossum created Python as a clean, readable scripting language. Fast forward thirty years: why didn't C++, Java, or Fortran become the language of artificial intelligence?
  
The answer lies in Python's role as a "two-language glue." Writing deep mathematical matrix routines in raw Python would be slow. But Python libraries like NumPy and PyTorch are actually thin, elegant wrappers around blazing-fast C, C++, and NVIDIA CUDA kernels.
  
Python gives scientists the best of both worlds: the development speed and clarity of human-readable syntax, backed by the raw computational horsepower of GPU-accelerated assembly.`,
  motivation: `**Why master the Python AI stack:**

1. **Universal industry standard**: 90%+ of AI research papers and commercial enterprise pipelines are written in Python.
2. **Vibrant open-source ecosystem**: Hugging Face, LangChain, TensorFlow, PyTorch, and Scikit-Learn provide millions of pre-trained models accessible in one line of code.`,
  concept: {
    simple: `Python is the universal tool for AI. Think of NumPy as the high-speed calculator for numbers and grids, Pandas as Excel spreadsheets in code, Matplotlib as the chart maker, and Scikit-Learn and PyTorch as the machine learning engines.`,
    technical: `Python serves as a high-level orchestration language interfacing with compiled BLAS/LAPACK linear algebra subroutines and CUDA execution runtimes via CPython C-extensions, enabling zero-copy memory operations via the Python Buffer Protocol.`,
  },
  keyTerms: [
    {
      term: 'NumPy',
      simple: 'The core numerical library for fast arrays and matrix math in Python.',
      technical: 'Fundamental package providing contiguous, homogeneous N-dimensional ndarray data structures with vectorized SIMD operations.',
    },
    {
      term: 'Pandas',
      simple: 'A tool for loading, cleaning, filtering, and analyzing table-like datasets.',
      technical: 'High-performance data manipulation library built on NumPy providing DataFrame and Series structures for relational data.',
    },
    {
      term: 'Vectorization',
      simple: 'Performing math on an entire list of numbers at once without writing slow loops.',
      technical: 'Executing array operations via single-instruction multiple-data (SIMD) processor instructions rather than interpreted Python bytecode loops.',
    },
  ],
  equations: [
    {
      latex: '\\mathbf{C} = \\mathbf{A} \\cdot \\mathbf{B} = \\sum_{k=1}^K a_{ik} b_{kj}',
      explanation: 'Matrix multiplication: the foundational mathematical operation powering every neural network layer and linear transformation.',
      symbols: [
        { symbol: '\\mathbf{A}, \\mathbf{B}', meaning: 'Input matrices', interpretation: 'Feature activations and network weights' },
        { symbol: '\\mathbf{C}', meaning: 'Resultant matrix', interpretation: 'Output tensor of transformed features' },
      ],
      example: {
        description: 'Multiplying 1x2 row vector [2, 3] by 2x1 column vector [[4], [5]].',
        calculation: 'C = (2 \\times 4) + (3 \\times 5) = 8 + 15 = 23',
        result: 'Scalar product: 23',
      },
    },
  ],
  howItWorks: [
    { number: 1, title: 'Data Ingestion (Pandas)', description: 'Read CSV, JSON, or SQL database into structured DataFrame.' },
    { number: 2, title: 'Array Transformation (NumPy)', description: 'Extract numerical matrices and normalize tensor values.' },
    { number: 3, title: 'Model Training (Scikit-Learn/PyTorch)', description: 'Pass arrays into GPU/CPU tensors to fit weights.' },
    { number: 4, title: 'Visualization (Matplotlib/Seaborn)', description: 'Plot loss curves and confusion matrices to audit performance.' },
  ],
  applications: [
    { title: 'Data Science Pipelines', problem: 'Cleaning dirty corporate datasets containing missing values.', solution: 'Pandas handles missing imputation, date parsing, and one-hot encoding in seconds.' },
    { title: 'Deep Learning Acceleration', problem: 'Training large neural networks on 10 million images.', solution: 'PyTorch tensors execute parallel matrix multiplications across NVIDIA GPU clusters.' },
  ],
  activity: {
    type: 'mcq',
    title: 'Library Identification',
    question: 'You need to load a 50,000-row CSV file of customer data and filter out rows where age is missing. Which Python library is best suited?',
    options: [
      { id: 'a', text: 'Matplotlib' },
      { id: 'b', text: 'Pandas' },
      { id: 'c', text: 'Pygame' },
      { id: 'd', text: 'Requests' },
    ],
    correctAnswer: 'b',
    explanation: 'Pandas is specifically built for tabular data loading (pd.read_csv), manipulation, filtering, and cleaning.',
    hint: 'Which library specializes in DataFrames and tabular data?',
  },
  pythonHandsOn: {
    title: 'NumPy Vectorization Speed Test',
    description: 'Witness the 50x speedup of NumPy vectorization compared to standard Python loops.',
    packages: ['numpy'],
    installCommand: 'pip install numpy',
    imports: [
      { code: 'import numpy as np', explanation: 'Import NumPy' },
      { code: 'import time', explanation: 'Import time for benchmarking' },
    ],
    code: [
      { code: 'n = 1_000_000 # 1 million numbers', explanation: 'Setup large array size' },
      { code: 'a_list = list(range(n))', explanation: 'Standard Python list' },
      { code: 'b_list = list(range(n))', explanation: 'Standard Python list' },
      { code: '', explanation: '' },
      { code: '# 1. Standard Python Loop:', explanation: 'Slow interpreted loop' },
      { code: 't0 = time.time()', explanation: 'Start timer' },
      { code: 'c_list = [a_list[i] + b_list[i] for i in range(n)]', explanation: 'List comprehension' },
      { code: 't_loop = time.time() - t0', explanation: 'Stop timer' },
      { code: '', explanation: '' },
      { code: '# 2. NumPy Vectorized Addition:', explanation: 'Fast C SIMD operation' },
      { code: 'a_np = np.arange(n)', explanation: 'NumPy array A' },
      { code: 'b_np = np.arange(n)', explanation: 'NumPy array B' },
      { code: 't1 = time.time()', explanation: 'Start timer' },
      { code: 'c_np = a_np + b_np # Single vectorized operation!', explanation: 'Vectorized add' },
      { code: 't_np = time.time() - t1', explanation: 'Stop timer' },
      { code: '', explanation: '' },
      { code: 'print(f"Python Loop Time: {t_loop:.4f} seconds")', explanation: 'Show loop speed' },
      { code: 'print(f"NumPy Vectorized Time: {t_np:.4f} seconds")', explanation: 'Show NumPy speed' },
      { code: 'print(f"Speedup Factor: {t_loop / t_np:.1f}x faster!")', explanation: 'Show ratio' },
    ],
    executionFlow: [
      { number: 1, title: 'Python Loop', description: 'Iterates through 1 million objects individually in interpreted bytecode.' },
      { number: 2, title: 'NumPy Vectorization', description: 'Executes single compiled SIMD instruction across memory block.' },
      { number: 3, title: 'Performance Comparison', description: 'NumPy performs 20x-50x faster.' },
    ],
    input: 'Two 1,000,000-element vectors to sum',
    output: 'Python Loop Time: 0.0820 seconds\nNumPy Vectorized Time: 0.0018 seconds\nSpeedup Factor: ~45.0x faster!',
    interpretation: 'NumPy vectorization eliminates Python loop overhead, unlocking C-level execution speeds critical for machine learning computations.',
    colabInstructions: ['Run in Google Colab to test your machine speed.'],
  },
  mcqs: [
    {
      id: 'q1',
      question: 'Why are NumPy operations significantly faster than native Python list operations for numerical arrays?',
      options: [
        { id: 'a', text: 'NumPy uses quantum circuits' },
        { id: 'b', text: 'NumPy arrays are stored in contiguous memory and executed via compiled C and SIMD instructions' },
        { id: 'c', text: 'NumPy deletes all data to save time' },
        { id: 'd', text: 'Python lists do not support addition' },
      ],
      correctAnswer: 'b',
      explanation: 'NumPy arrays reside in contiguous C-order memory buffers and leverage vectorized processor registers without dynamic type-checking on every element.',
      incorrectFeedback: 'Contiguous memory layout and compiled C routines are the key factors behind NumPy speed — not any exotic hardware.',
    },
    {
      id: 'q2',
      question: 'A data scientist has a messy CSV file with 200,000 rows of patient health records containing missing values, duplicate entries, and mixed date formats. Which Python library is the BEST first tool to clean and explore this dataset?',
      options: [
        { id: 'a', text: 'PyTorch — because it supports GPU acceleration' },
        { id: 'b', text: 'Matplotlib — because it can plot the missing value patterns' },
        { id: 'c', text: 'Pandas — because it provides DataFrames with built-in tools for loading, filtering, imputing, and transforming tabular data' },
        { id: 'd', text: 'Scikit-Learn — because it can classify rows instantly' },
      ],
      correctAnswer: 'c',
      explanation: 'Pandas is purpose-built for tabular data operations: pd.read_csv() loads CSV files, dropna()/fillna() handles missing values, drop_duplicates() removes duplicates, and pd.to_datetime() standardizes date formats — all before any modeling begins.',
      incorrectFeedback: 'Pandas is the go-to library for data loading, cleaning, and exploration. PyTorch is for model training, Matplotlib for visualization, and Scikit-Learn for applying trained algorithms — none of them replace Pandas for data wrangling.',
    },
    {
      id: 'q3',
      question: 'Given two matrices A = [[1, 2], [3, 4]] and B = [[5, 6], [7, 8]], what is the value of element C[0][1] after matrix multiplication C = A · B?',
      options: [
        { id: 'a', text: '12' },
        { id: 'b', text: '19' },
        { id: 'c', text: '22' },
        { id: 'd', text: '16' },
      ],
      correctAnswer: 'c',
      explanation: 'C[0][1] is the dot product of row 0 of A ([1, 2]) with column 1 of B ([6, 8]): (1×6) + (2×8) = 6 + 16 = 22. Matrix multiplication is the core operation powering every neural network layer.',
      incorrectFeedback: 'For matrix multiplication, C[i][j] = sum over k of (A[i][k] × B[k][j]). For C[0][1]: row 0 of A = [1, 2], column 1 of B = [6, 8] → (1×6) + (2×8) = 22. Review the formula: C = A·B = Σ a_ik × b_kj.',
    },
    {
      id: 'q4',
      question: 'Which Python library is specifically designed for building, training, and deploying deep neural networks with automatic differentiation (autograd) and GPU tensor acceleration?',
      options: [
        { id: 'a', text: 'Pandas — for deep learning DataFrame support' },
        { id: 'b', text: 'Matplotlib — for plotting neural network layers' },
        { id: 'c', text: 'Scikit-Learn — for high-performance GPU neural models' },
        { id: 'd', text: 'PyTorch — for dynamic computation graphs, autograd, and CUDA GPU tensors' },
      ],
      correctAnswer: 'd',
      explanation: 'PyTorch provides dynamic computation graphs (define-by-run), automatic gradient computation via autograd, and zero-copy GPU memory operations via CUDA tensors — making it the standard framework for research and production deep learning.',
      incorrectFeedback: 'PyTorch is the deep learning framework. Scikit-Learn covers classical ML (not deep learning). Pandas handles tabular data. Matplotlib only handles visualizations. Each library in the Python AI stack has a distinct, non-overlapping role.',
    },
    {
      id: 'q5',
      question: 'Python dominates the AI/ML industry despite being slower than C++ for raw computation. What architectural design makes Python fast enough for production-grade AI workloads?',
      options: [
        { id: 'a', text: 'Python secretly compiles all code to assembly language before execution' },
        { id: 'b', text: 'Python acts as a high-level orchestration layer that calls compiled C, C++, and CUDA kernels in libraries like NumPy and PyTorch — combining developer speed with computational power' },
        { id: 'c', text: 'Python uses a faster interpreter than all other programming languages' },
        { id: 'd', text: 'Python avoids floating-point arithmetic which makes it faster for AI' },
      ],
      correctAnswer: 'b',
      explanation: 'Python\'s "two-language trick": scientists write clean readable Python code, but the heavy numerical lifting is delegated to NumPy (C/LAPACK), PyTorch (C++/CUDA), and TensorFlow (XLA/GPU kernels). The Python interpreter only orchestrates — it never does the slow parts.',
      incorrectFeedback: 'Python is NOT natively fast — it uses a thin orchestration layer on top of compiled C, C++, and CUDA kernels. The Python Buffer Protocol enables zero-copy memory sharing between Python and these compiled libraries, giving AI developers human-readable code with machine-grade speed.',
    },
  ],
};

export const module1Topics: Topic[] = [
  whyLearnAI,
  whatIsAI,
  aiAroundUs,
  aiVsTraditional,
  introMachineLearning,
  typesOfML,
  supervisedLearning,
  unsupervisedLearning,
  reinforcementLearningIntro,
  pythonForAI,
];
