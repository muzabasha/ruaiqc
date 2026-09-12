import { Topic } from '@/lib/types';

export const whyNeuralNetworks: Topic = {
  id: 'why-neural-networks',
  moduleId: 'deep-learning',
  number: 1,
  title: 'Why Neural Networks? Representation Learning',
  description: 'Understand the limits of manual feature engineering and why deep hierarchical neural networks revolutionized artificial intelligence.',
  objectives: [
    'Contrast manual feature engineering with automatic representation learning',
    'Understand the Universal Approximation Theorem',
    'Examine how depth enables compositional abstraction (edges -> parts -> objects)',
  ],
  story: `For fifty years, computer vision engineers struggled to make computers recognize objects. To detect a human face, scientists manually wrote mathematical filters for horizontal eye lines, curved nostril gradients, and cheek shadow intensities.
  
The resulting systems broke whenever lighting changed, someone turned their head 15 degrees, or someone put on sunglasses.
  
In 2012, Alex Krizhevsky, Ilya Sutskever, and Geoffrey Hinton submitted "AlexNet" to the ImageNet challenge. Instead of handcrafting rules, they trained an 8-layer deep convolutional neural network on two desktop GPUs. AlexNet crushed the competition by a staggering 10.8 percentage points.
  
The lesson was undeniable: deep networks do not need humans to design features; given enough data and depth, neural networks discover features far richer than any human engineer could ever conceive.`,
  motivation: `**The Power of Depth**: Deep learning powers modern speech recognition, self-driving vision, large language models (GPT-4, Gemini), and protein folding (AlphaFold). Understanding neural networks is the gateway to state-of-the-art AI.`,
  concept: {
    simple: `In classical machine learning, a human must decide what clues to look for (like measuring petal lengths or counting edges).
In Deep Learning, you feed raw pixels, raw audio, or raw text directly into a neural network. The network automatically learns to see edges in the first layer, shapes in the middle layers, and full objects (like cars, faces, dogs) in the final layers!`,
    technical: `Deep learning replaces hand-engineered feature extractors $\\phi(\\mathbf{x})$ with parameterized composite non-linear transformations $f(\\mathbf{x}) = f^{(L)}(f^{(L-1)}(\\dots f^{(1)}(\\mathbf{x})))$. By the Universal Approximation Theorem, feedforward networks with non-linear activations can approximate any Borel measurable function on compact subsets of $\\mathbb{R}^n$ to arbitrary precision.`,
  },
  keyTerms: [
    { term: 'Representation Learning', simple: 'The system automatically discovers the best features from raw data.', technical: 'Learning data representations that make it easier to extract useful information when building classifiers or predictors.' },
    { term: 'Universal Approximation Theorem', simple: 'A math proof showing neural networks can learn virtually any pattern if they have enough neurons.', technical: 'Theorem establishing that a feedforward network with a single hidden layer containing finite neurons and non-linear activation can approximate continuous functions on compact domains.' },
    { term: 'Hierarchical Abstraction', simple: 'Lower layers detect simple lines; higher layers combine them into complex objects.', technical: 'Compositional feature hierarchy where successive layers compute increasingly invariant, abstract semantic representations.' },
  ],
  equations: [
    {
      latex: '\\mathbf{h}^{(l)} = \\sigma\\big(\\mathbf{W}^{(l)} \\mathbf{h}^{(l-1)} + \\mathbf{b}^{(l)}\\big)',
      explanation: 'Layer-to-layer forward transformation: multiplying previous layer activations by weight matrix W, adding bias b, and applying non-linear activation sigma.',
      symbols: [
        { symbol: '\\mathbf{h}^{(l)}', meaning: 'Activation vector at layer l', interpretation: 'Outputs of the current layer' },
        { symbol: '\\mathbf{W}^{(l)}', meaning: 'Weight matrix', interpretation: 'Synaptic connection strengths' },
        { symbol: '\\sigma', meaning: 'Non-linear activation function', interpretation: 'Enables learning non-linear curves' },
      ],
      example: {
        description: 'Multiplying 2 inputs [1, 2] by weight matrix [[0.5, 0.5]] with bias 0.1 and ReLU activation.',
        calculation: 'z = (1 \\times 0.5 + 2 \\times 0.5) + 0.1 = 1.5 + 0.1 = 1.6 \\implies \\text{ReLU}(1.6) = 1.6',
        result: 'Neuron fires activation 1.6',
      },
    },
  ],
  howItWorks: [
    { number: 1, title: 'Raw Ingestion', description: 'Raw high-dimensional inputs (e.g., 224x224 RGB image pixels) are fed into the input layer.' },
    { number: 2, title: 'Low-Level Feature Detection', description: 'Early layers act as Gabor-like filters detecting localized edges, gradients, and frequencies.' },
    { number: 3, title: 'High-Level Semantic Synthesis', description: 'Deep layers combine motifs into semantic parts (eyes, wheels, textures).' },
    { number: 4, title: 'Classification Head', description: 'Final dense layer maps abstract representations to class probabilities via Softmax.' },
  ],
  applications: [
    { title: 'Autonomous Vehicle Perception', problem: 'Recognizing pedestrians and cyclists in rain, fog, and nighttime shadows.', solution: 'Deep neural networks learn robust visual invariants from millions of recorded driving hours.' },
    { title: 'Medical Diagnostics (Pathology)', problem: 'Detecting microscopic metastatic tumor cells in gigapixel biopsy slides.', solution: 'Deep networks scan millions of cell textures, outperforming human screening benchmarks.' },
  ],
  activity: {
    type: 'mcq',
    title: 'Representation Learning Check',
    question: 'What is the primary advantage of Deep Learning over traditional Machine Learning algorithms for image and audio processing?',
    options: [
      { id: 'a', text: 'Deep learning automatically learns hierarchical feature representations directly from raw data without manual feature engineering' },
      { id: 'b', text: 'Deep learning runs on solar power' },
      { id: 'c', text: 'Deep learning does not require any mathematics' },
      { id: 'd', text: 'Deep learning can only be run on smartphones' },
    ],
    correctAnswer: 'a',
    explanation: 'Deep learning eliminated the brittle bottleneck of handcrafting manual feature extractors by discovering optimal hierarchical representations directly from raw data.',
    hint: 'Think about how deep learning handles raw pixel arrays versus manual feature design.',
  },
  pythonHandsOn: {
    title: 'Visualizing Deep Feature Hierarchy with PyTorch',
    description: 'Construct a simple multi-layer neural network in PyTorch and inspect layer dimensions.',
    packages: ['torch'],
    installCommand: 'pip install torch',
    imports: [
      { code: 'import torch', explanation: 'Import PyTorch' },
      { code: 'import torch.nn as nn', explanation: 'Import neural network modules' },
    ],
    code: [
      { code: '# Define a 3-layer deep feedforward network', explanation: 'Architecture' },
      { code: 'model = nn.Sequential(', explanation: 'Sequential container' },
      { code: '    nn.Linear(784, 128),  # Layer 1: 784 pixels -> 128 low-level features', explanation: 'First dense layer' },
      { code: '    nn.ReLU(),            # Non-linear activation', explanation: 'Non-linearity' },
      { code: '    nn.Linear(128, 64),   # Layer 2: 128 features -> 64 abstract motifs', explanation: 'Second dense layer' },
      { code: '    nn.ReLU(),            # Non-linear activation', explanation: 'Non-linearity' },
      { code: '    nn.Linear(64, 10)     # Layer 3: 64 motifs -> 10 digit classes', explanation: 'Output head' },
      { code: ')', explanation: 'Close model' },
      { code: '', explanation: '' },
      { code: 'dummy_image = torch.randn(1, 784) # Simulated 28x28 grayscale image', explanation: 'Input tensor' },
      { code: 'output_logits = model(dummy_image)', explanation: 'Forward pass' },
      { code: 'print("Input Tensor Shape:", dummy_image.shape)', explanation: 'Print input size' },
      { code: 'print("Output Class Logits Shape:", output_logits.shape)', explanation: 'Print output size' },
      { code: 'total_params = sum(p.numel() for p in model.parameters())', explanation: 'Count parameters' },
      { code: 'print(f"Total Learnable Parameters: {total_params:,}")', explanation: 'Display weight count' },
    ],
    executionFlow: [
      { number: 1, title: 'Dimensionality Reduction & Transformation', description: '784 raw pixel inputs are projected into 128 hidden features, then 64 abstract features, and finally 10 output classes.' },
      { number: 2, title: 'Parameterization', description: 'The network has over 109,000 learnable weights to approximate complex non-linear functions.' },
    ],
    input: 'Single image vector of 784 pixels',
    output: 'Input Tensor Shape: torch.Size([1, 784])\nOutput Class Logits Shape: torch.Size([1, 10])\nTotal Learnable Parameters: 109,386',
    interpretation: 'In just 10 lines of code, PyTorch creates a parameter-rich non-linear model capable of mapping high-dimensional inputs to discrete categories.',
    colabInstructions: ['Run in Google Colab with Python 3 and PyTorch.'],
  },
  mcqs: [
    {
      id: 'q1',
      question: 'What is the purpose of non-linear activation functions (like ReLU) between linear neural network layers?',
      options: [
        { id: 'a', text: 'Without non-linear activations, stacking multiple linear layers collapses mathematically into a single linear transformation' },
        { id: 'b', text: 'To delete negative numbers from the computer' },
        { id: 'c', text: 'To speed up internet bandwidth' },
        { id: 'd', text: 'To prevent the computer from overheating' },
          {id:'q2',question:'What advantage do neural networks have over linear models?',options:[{id:'a',text:'They are faster'},{id:'b',text:'They can learn complex non-linear decision boundaries through activation functions and layered composition'},{id:'c',text:'They use less memory'},{id:'d',text:'They always converge'}],correctAnswer:'b',explanation:'Neural networks use non-linear activation functions (ReLU, sigmoid) and multiple layers to approximate arbitrary non-linear functions (universal approximation theorem). Linear models only fit hyperplanes.',incorrectFeedback:'Neural networks learn non-linear patterns through activation functions and depth.'},
    {id:'q3',question:'Who are the pioneers of backpropagation (1986)?',options:[{id:'a',text:'Alan Turing'},{id:'b',text:'Rumelhart, Hinton, and Williams'},{id:'c',text:'Mark Zuckerberg'},{id:'d',text:'Bill Gates'}],correctAnswer:'b',explanation:'David Rumelhart, Geoffrey Hinton, and Ronald Williams published the backpropagation algorithm in 1986, enabling efficient training of multi-layer neural networks.',incorrectFeedback:'Rumelhart, Hinton, Williams (1986) pioneered backpropagation.'},
    {id:'q4',question:'What caused the AI winter of the 1970s?',options:[{id:'a',text:'Lack of data and compute power; perceptrons could not solve XOR problem'},{id:'b',text:'Too much AI research'},{id:'c',text:'Neural networks were too powerful'},{id:'d',text:'Everyone lost interest'}],correctAnswer:'a',explanation:'Minsky & Papert (1969) showed single-layer perceptrons cannot solve XOR. Without backpropagation, GPUs, or big data, neural networks stagnated until the 1980s-2000s.',incorrectFeedback:'AI winter resulted from computational limits and theoretical dead-ends (XOR problem).'},
    {id:'q5',question:'What breakthrough reignited deep learning in 2012?',options:[{id:'a',text:'AlexNet winning ImageNet with CNNs + GPUs + ReLU + Dropout'},{id:'b',text:'Invention of the transistor'},{id:'c',text:'Moore\'s Law'},{id:'d',text:'Creation of Facebook'}],correctAnswer:'a',explanation:'AlexNet (Krizhevsky et al., 2012) won ImageNet with 8-layer CNN trained on GPUs, demonstrating deep learning\'s superiority. Catalyzed modern AI revolution.',incorrectFeedback:'AlexNet (2012) on ImageNet sparked the deep learning revolution.'},
  ],
      correctAnswer: 'a',
      explanation: 'Because matrix multiplication is associative, W2 * (W1 * x) = (W2 * W1) * x = W_new * x. Without non-linear activations, any deep network is mathematically identical to a 1-layer linear model.',
      incorrectFeedback: 'Non-linearities prevent the deep network from collapsing into a trivial single linear model.',
    },
  ],
};

export const artificialNeuron: Topic = {
  id: 'artificial-neuron',
  moduleId: 'deep-learning',
  number: 2,
  title: 'The Artificial Neuron: Perceptron & Math Foundations',
  description: 'Explore the biological inspiration and mathematical formulation of the Perceptron, the atomic building block of deep learning.',
  objectives: [
    'Trace the history of the McCulloch-Pitts neuron and Rosenblatt’s Perceptron (1958)',
    'Understand the linear combination of inputs, weights, and bias',
    'Examine why single-layer perceptrons cannot solve non-linear problems like XOR',
  ],
  story: `In 1943, neurophysiologist Warren McCulloch and logician Walter Pitts published a groundbreaking paper modeling the electrical behavior of biological neurons in the brain: dendrites receive electrochemical signals, the cell body sums them up, and if the voltage surpasses a threshold, an action potential fires down the axon.
  
In 1958, Frank Rosenblatt built the "Perceptron" on an analog computer called the Mark I at Cornell. The New York Times boldly declared it to be "the embryo of an electronic computer that will be able to walk, talk, see, write, reproduce itself and be conscious of its existence."
  
While that prediction was overly optimistic, the artificial neuron became the atomic transistor of modern AI.`,
  motivation: `**The foundational building block**: Every neural network—from tiny embedded microcontrollers to 1.8-trillion parameter GPT models—is constructed from billions of interconnected artificial neurons computing weighted sums.`,
  concept: {
    simple: `An artificial neuron works like a committee making a decision:
1. **Inputs ($x$)**: The opinions or pieces of evidence.
2. **Weights ($w$)**: How much trust or importance you give to each opinion.
3. **Bias ($b$)**: Your personal starting inclination (generous vs strict).
4. **Activation**: If the total score beats the threshold, the neuron fires YES (1); otherwise it stays silent (0).`,
    technical: `The artificial neuron computes a scalar pre-activation $z = \\sum_{i=1}^d w_i x_i + b = \\mathbf{w}^T \\mathbf{x} + b$, followed by an activation mapping $a = f(z)$. The classical Rosenblatt perceptron used a Heaviside step function $f(z) = \\mathbb{I}(z \\ge 0)$.`,
  },
  keyTerms: [
    { term: 'Perceptron', simple: 'The simplest artificial neuron model, invented by Frank Rosenblatt.', technical: 'A binary linear classifier computing $y = \\text{step}(\\mathbf{w}^T \\mathbf{x} + b)$ with an error-correcting update rule.' },
    { term: 'Bias ($b$)', simple: 'An internal dial that adjusts how easy or hard it is for the neuron to fire.', technical: 'An affine translation parameter shifting the decision threshold independently of input values.' },
    { term: 'The XOR Problem', simple: 'A simple puzzle that broke single neurons because it cannot be separated by a straight line.', technical: 'The fundamental limitation shown by Minsky & Papert (1969) proving single-layer linear threshold units cannot solve non-linearly separable Boolean functions.' },
  ],
  equations: [
    {
      latex: 'y = f\\left(\\sum_{i=1}^n w_i x_i + b\\right) = f\\big(\\mathbf{w}^T \\mathbf{x} + b\\big)',
      explanation: 'The fundamental equation of the artificial neuron: computing the weighted sum of inputs plus bias, passed through activation function f.',
      symbols: [
        { symbol: 'x_i', meaning: 'Inputs', interpretation: 'Sensory or feature signals' },
        { symbol: 'w_i', meaning: 'Synaptic weights', interpretation: 'Learned amplification or inhibition factors' },
        { symbol: 'b', meaning: 'Bias', interpretation: 'Threshold offset' },
        { symbol: 'f', meaning: 'Activation', interpretation: 'Firing function' },
      ],
      example: {
        description: 'Inputs [1, 0] with weights [3.0, 2.0] and bias -1.5.',
        calculation: 'z = (1 \\times 3.0) + (0 \\times 2.0) - 1.5 = 3.0 - 1.5 = 1.5 \\implies \\text{Step}(1.5) = 1',
        result: 'Neuron fires: Output = 1',
      },
    },
  ],
  howItWorks: [
    { number: 1, title: 'Signal Reception', description: 'Incoming numerical values x1, x2, ... xn are ingested via input channels.' },
    { number: 2, title: 'Weight Multiplication', description: 'Each input xi is scaled by its corresponding connection weight wi.' },
    { number: 3, title: 'Summation & Bias Offset', description: 'All weighted products are summed together with the scalar bias b.' },
    { number: 4, title: 'Threshold Evaluation', description: 'The aggregate sum z is passed through activation function f(z) to yield final output a.' },
  ],
  applications: [
    { title: 'Binary Logic Gates', problem: 'Implementing AND / OR gates using pure numerical weights.', solution: 'A single perceptron can compute AND by setting w1=1, w2=1, bias=-1.5.' },
    { title: 'Linear Decision Agents', problem: 'Approving or denying credit applications in financial workflows.', solution: 'A single artificial neuron weights income, credit score, and debt ratio.' },
  ],
  activity: {
    type: 'mcq',
    title: 'Solve the AND Gate',
    question: 'A neuron has inputs x1, x2 ∈ {0, 1}, weights w1 = 1, w2 = 1, and bias b = -1.5. If both inputs are 1, does the neuron fire (output 1)?',
    options: [
      { id: 'a', text: 'Yes, because z = (1*1 + 1*1) - 1.5 = +0.5 > 0' },
      { id: 'b', text: 'No, because 1 + 1 is less than 1.5' },
      { id: 'c', text: 'It outputs -1' },
      { id: 'd', text: 'It causes an overflow error' },
    ],
    correctAnswer: 'a',
    explanation: 'z = (1*1 + 1*1) - 1.5 = 2.0 - 1.5 = +0.5. Since z is positive (+0.5 > 0), the step activation fires 1, correctly executing logical AND.',
    hint: 'Calculate z = (w1*x1 + w2*x2) + b.',
  },
  pythonHandsOn: {
    title: 'Building a Perceptron from Scratch in Python',
    description: 'Implement a perceptron learning rule that learns the logical OR gate.',
    packages: ['numpy'],
    installCommand: 'pip install numpy',
    imports: [{ code: 'import numpy as np', explanation: 'NumPy for vector math' }],
    code: [
      { code: '# Logical OR truth table: inputs X, target y', explanation: 'Truth table' },
      { code: 'X = np.array([[0, 0], [0, 1], [1, 0], [1, 1]])', explanation: 'All 4 input pairs' },
      { code: 'y = np.array([0, 1, 1, 1]) # OR gate output', explanation: 'OR targets' },
      { code: '', explanation: '' },
      { code: 'w = np.zeros(2) # Initial weights [0, 0]', explanation: 'Weights' },
      { code: 'b = 0.0        # Initial bias', explanation: 'Bias' },
      { code: 'lr = 0.1       # Learning rate', explanation: 'Step size' },
      { code: '', explanation: '' },
      { code: 'for epoch in range(20):', explanation: 'Train 20 iterations' },
      { code: '    for i in range(len(X)):', explanation: 'Loop over samples' },
      { code: '        z = np.dot(X[i], w) + b', explanation: 'Linear sum' },
      { code: '        y_pred = 1 if z >= 0 else 0 # Step function', explanation: 'Activation' },
      { code: '        error = y[i] - y_pred', explanation: 'Perceptron error' },
      { code: '        w += lr * error * X[i] # Rosenblatt weight update', explanation: 'Update weights' },
      { code: '        b += lr * error        # Update bias', explanation: 'Update bias' },
      { code: '', explanation: '' },
      { code: 'print("Learned Weights:", w.round(2), "Bias:", round(b, 2))', explanation: 'Print parameters' },
      { code: 'for sample in X:', explanation: 'Verify on all inputs' },
      { code: '    pred = 1 if (np.dot(sample, w) + b) >= 0 else 0', explanation: 'Inference' },
      { code: '    print(f"Input {sample} -> Output: {pred}")', explanation: 'Display result' },
    ],
    executionFlow: [
      { number: 1, title: 'Perceptron Update', description: 'When prediction is wrong, weights are adjusted directly in the direction of the error.' },
      { number: 2, title: 'Convergence', description: 'Within 10 epochs, learns positive weights (~0.2, ~0.2) and negative bias (~ -0.1), perfectly solving the OR gate.' },
    ],
    input: '4 Boolean input pairs for logical OR',
    output: 'Learned Weights: [0.2 0.2] Bias: -0.1\nInput [0 0] -> Output: 0\nInput [0 1] -> Output: 1\nInput [1 0] -> Output: 1\nInput [1 1] -> Output: 1',
    interpretation: 'The perceptron converged on linear parameters that flawlessly separate 0 from 1 in the Boolean plane.',
    colabInstructions: ['Run in Google Colab to see perceptron convergence.'],
  },
  mcqs: [
    {
      id: 'q1',
      question: 'Why did research into neural networks slow dramatically in 1969 following the publication of Minsky & Papert’s book "Perceptrons"?',
      options: [
        { id: 'a', text: 'They proved mathematically that single-layer perceptrons cannot solve non-linearly separable problems like the XOR gate' },
        { id: 'b', text: 'All computers in the world broke down' },
        { id: 'c', text: 'Governments made AI illegal' },
        { id: 'd', text: 'Electricity was replaced with steam' },
          {id:'q2',question:'What is the role of weights in a neuron?',options:[{id:'a',text:'Weights determine the importance/influence of each input feature'},{id:'b',text:'Weights speed up computation'},{id:'c',text:'Weights store raw data'},{id:'d',text:'Weights are not used'}],correctAnswer:'a',explanation:'Weights w_i scale inputs: output = activation(Σ w_i x_i + b). Larger |w_i| means feature x_i has more influence on the decision. Learned via gradient descent.',incorrectFeedback:'Weights scale input importance; learned during training.'},
    {id:'q3',question:'What is the bias term in a neuron?',options:[{id:'a',text:'Data collection bias'},{id:'b',text:'Constant offset added before activation: z = w·x + b; allows shifting decision boundary'},{id:'c',text:'Programming error'},{id:'d',text:'Random noise'}],correctAnswer:'b',explanation:'Bias b shifts the activation threshold. Example: without bias, neuron activates when w·x=0. With bias, it activates when w·x=-b, enabling flexible decision boundaries.',incorrectFeedback:'Bias is a learnable offset parameter that shifts activation thresholds.'},
    {id:'q4',question:'How does a neuron make a decision?',options:[{id:'a',text:'Random choice'},{id:'b',text:'Computes weighted sum z=w·x+b, applies activation function σ(z), outputs result'},{id:'c',text:'Uses if-else statements'},{id:'d',text:'Asks the user'}],correctAnswer:'b',explanation:'Neuron pipeline: (1) Linear combination z=Σw_i x_i+b, (2) Non-linear activation a=σ(z) like sigmoid/ReLU. Output a determines decision/prediction.',incorrectFeedback:'Neurons compute weighted sum then apply activation function.'},
    {id:'q5',question:'What is the biological inspiration for artificial neurons?',options:[{id:'a',text:'Plant cells'},{id:'b',text:'Biological neurons in the brain: dendrites (inputs), soma (processing), axon (output)'},{id:'c',text:'Computer chips'},{id:'d',text:'Water pipes'}],correctAnswer:'b',explanation:'Biological neurons receive signals via dendrites (weights), process in soma (summation + threshold), output via axon (activation). McCulloch-Pitts (1943) formalized this mathematically.',incorrectFeedback:'Artificial neurons abstract biological neuron structure: inputs→processing→output.'},
  ],
      correctAnswer: 'a',
      explanation: 'Minsky & Papert demonstrated that a single-layer perceptron could never compute XOR, causing funding to plummet in the first "AI Winter" until multi-layer backpropagation emerged.',
      incorrectFeedback: 'The XOR limitation demonstrated by Minsky and Papert was the historic trigger of the first AI Winter.',
    },
  ],
};

export const activationFunctions: Topic = {
  id: 'activation-functions',
  moduleId: 'deep-learning',
  number: 3,
  title: 'Activation Functions: Sigmoid, Tanh, ReLU & Softmax',
  description: 'Master the mathematical non-linearities that allow neural networks to bend space: Sigmoid, Tanh, ReLU, Leaky ReLU, and Softmax.',
  objectives: [
    'Understand why non-linear activations are mathematically necessary in deep networks',
    'Diagnose the Vanishing Gradient problem in Sigmoid and Tanh',
    'Examine why Rectified Linear Units (ReLU) became the dominant standard',
    'Implement Softmax for multi-class probability normalization',
  ],
  story: `In the early 1990s, training deep neural networks with 5 or more layers was nearly impossible. Gradients would shrink exponentially as they backpropagated from the output layer toward the input layer, completely freezing the early layers.
  
For years, researchers blamed computer hardware. But in 2010, Xavier Glorot and Yoshua Bengio discovered the culprit: the beloved **Sigmoid** activation function!
  
Sigmoid saturates at both ends (near 0 and 1), where its derivative is practically zero ($< 0.05$). Multiplying these tiny fractions across 10 layers caused the gradients to vanish into nothingness.
  
The solution was shockingly simple: **ReLU** (Rectified Linear Unit), $f(x) = \\max(0, x)$. Its derivative for positive numbers is always exactly 1.0! This simple change unlocked the ability to train networks with hundreds of layers.`,
  motivation: `**Choosing the right activation**: The choice of activation function dictates gradient flow, convergence speed, and numerical stability. Using Sigmoid in deep hidden layers will ruin your training; using Softmax on the output layer guarantees calibrated probabilities.`,
  concept: {
    simple: `Activation functions decide whether a neuron should fire and how strongly:
1. **Sigmoid**: Squashes numbers between 0 and 1 (good for binary yes/no output).
2. **Tanh**: Squashes numbers between -1 and +1 (centered around 0).
3. **ReLU**: "If negative, turn to 0. If positive, leave it alone!" (The king of hidden layers).
4. **Softmax**: Turns a list of scores into a percentage pie chart that sums to 100%.`,
    technical: `Activation functions $\\sigma: \\mathbb{R} \\rightarrow \\mathbb{R}$ introduce point-wise non-linear mappings. Sigmoid $\\sigma(z) = \\frac{1}{1+e^{-z}}$ and Tanh $\\tanh(z) = \\frac{e^z - e^{-z}}{e^z + e^{-z}}$ have saturated regimes where $\\sigma'(z) \\rightarrow 0$, causing vanishing gradients. ReLU $f(z) = \\max(0, z)$ provides non-saturating gradients $\\frac{\\partial f}{\\partial z} = 1$ for $z > 0$. Softmax generalizes sigmoid to $C$ classes: $\\text{Softmax}(\\mathbf{z})_i = \\frac{e^{z_i}}{\\sum_{j=1}^C e^{z_j}}$.`,
  },
  keyTerms: [
    { term: 'ReLU (Rectified Linear Unit)', simple: 'The most popular activation: passes positive numbers through, blocks negatives.', technical: '$f(x) = \\max(0, x)$, non-saturating non-linear activation with constant unit derivative on positive domain.' },
    { term: 'Vanishing Gradient Problem', simple: 'When learning signals become so tiny that the first layers stop learning completely.', technical: 'Exponential decay of gradient magnitudes as backpropagation propagates through saturated activation derivatives.' },
    { term: 'Softmax', simple: 'Converts raw scores into probabilities that add up to 1.0 (100%).', technical: 'Normalized exponential function mapping unbounded logits $\\mathbf{z} \\in \\mathbb{R}^C$ to probability simplex $\\Delta^C$.' },
  ],
  equations: [
    {
      latex: '\\text{Softmax}(z_i) = \\frac{e^{z_i}}{\\sum_{j=1}^C e^{z_j}}, \\quad \\text{ReLU}(z) = \\max(0, z)',
      explanation: 'Softmax (left) transforms C raw logit scores into a valid probability distribution summing to 1. ReLU (right) provides linear pass-through for positive inputs.',
      symbols: [
        { symbol: 'z_i', meaning: 'Raw output logit for class i', interpretation: 'Unbounded score' },
        { symbol: 'C', meaning: 'Number of classes', interpretation: 'Total target categories' },
      ],
      example: {
        description: 'Applying Softmax to logits [2.0, 1.0, 0.1].',
        calculation: 'e^2 = 7.39, e^1 = 2.72, e^{0.1} = 1.11 \\implies \\text{Sum} = 11.22 \\implies P = [0.658, 0.242, 0.099]',
        result: 'Probabilities: 65.8%, 24.2%, 9.9% (Sum = 100%)',
      },
    },
  ],
  howItWorks: [
    { number: 1, title: 'Hidden Layers', description: 'Use ReLU (or Leaky ReLU / GELU) in all hidden layers to ensure healthy gradient flow.' },
    { number: 2, title: 'Binary Output Head', description: 'Use Sigmoid on a single output neuron for binary classification (outputs probability between 0 and 1).' },
    { number: 3, title: 'Multi-Class Output Head', description: 'Use Softmax across C output neurons for multi-class classification (outputs probability distribution summing to 1).' },
  ],
  applications: [
    { title: 'Computer Vision (CNNs)', problem: 'Deep 50-layer networks suffering from vanishing gradient failure.', solution: 'ReLU activations enable training deep ResNet architectures without gradient attenuation.' },
    { title: 'Large Language Models (Transformers)', problem: 'Selecting the most likely next word out of a 50,000-token vocabulary.', solution: 'Softmax temperature layer normalizes output token logits into next-word sampling probabilities.' },
  ],
  activity: {
    type: 'mcq',
    title: 'Activation Matching',
    question: 'You are building a neural network to classify photos into 10 mutually exclusive dog breeds. Which activation should be used on the FINAL output layer?',
    options: [
      { id: 'a', text: 'Softmax with 10 output neurons' },
      { id: 'b', text: 'ReLU with 1 neuron' },
      { id: 'c', text: 'Tanh with 5 neurons' },
      { id: 'd', text: 'No activation at all' },
    ],
    correctAnswer: 'a',
    explanation: 'For multi-class classification where classes are mutually exclusive, Softmax is used on the final layer to output a normalized probability distribution across the 10 classes.',
    hint: 'Which activation produces probabilities across multiple classes that sum to 1.0?',
  },
  pythonHandsOn: {
    title: 'Comparing Activation Functions in NumPy',
    description: 'Implement Sigmoid, ReLU, and Softmax and visualize their numerical outputs.',
    packages: ['numpy'],
    installCommand: 'pip install numpy',
    imports: [{ code: 'import numpy as np', explanation: 'NumPy for vector math' }],
    code: [
      { code: '# Raw input logits from negative to positive', explanation: 'Sample inputs' },
      { code: 'z = np.array([-3.0, -1.0, 0.0, 1.0, 3.0])', explanation: 'Range of test values' },
      { code: '', explanation: '' },
      { code: '# 1. Sigmoid Function: 1 / (1 + exp(-z))', explanation: 'Sigmoid formula' },
      { code: 'sigmoid = 1 / (1 + np.exp(-z))', explanation: 'Compute sigmoid' },
      { code: 'print("Sigmoid Outputs (0 to 1):\\n", sigmoid.round(3))', explanation: 'Print sigmoid' },
      { code: '', explanation: '' },
      { code: '# 2. ReLU Function: max(0, z)', explanation: 'ReLU formula' },
      { code: 'relu = np.maximum(0, z)', explanation: 'Compute ReLU' },
      { code: 'print("\\nReLU Outputs (0 for negatives):\\n", relu)', explanation: 'Print ReLU' },
      { code: '', explanation: '' },
      { code: '# 3. Softmax Function on 3-class logits [2.0, 1.0, 0.1]:', explanation: 'Softmax formula' },
      { code: 'logits = np.array([2.0, 1.0, 0.1])', explanation: 'Logit scores' },
      { code: 'exp_scores = np.exp(logits - np.max(logits)) # Subtract max for numerical stability', explanation: 'Exp step' },
      { code: 'softmax_probs = exp_scores / np.sum(exp_scores)', explanation: 'Normalize to 1.0' },
      { code: 'print("\\nSoftmax Class Probabilities:\\n", softmax_probs.round(3))', explanation: 'Print probs' },
      { code: 'print("Softmax Sum Check:", round(np.sum(softmax_probs), 3))', explanation: 'Verify sum is 1.0' },
    ],
    executionFlow: [
      { number: 1, title: 'Sigmoid', description: 'Compresses [-3, 3] smoothly into [0.047, 0.953].' },
      { number: 2, title: 'ReLU', description: 'Zeroes out negative values completely, keeping positives untouched.' },
      { number: 3, title: 'Softmax', description: 'Converts raw logits [2.0, 1.0, 0.1] into clean probabilities [0.658, 0.242, 0.099] summing to exactly 1.0.' },
    ],
    input: 'Test vectors z = [-3, -1, 0, 1, 3] and logits = [2.0, 1.0, 0.1]',
    output: 'Sigmoid Outputs:\n[0.047 0.269 0.5   0.731 0.953]\n\nReLU Outputs:\n[0. 0. 0. 1. 3.]\n\nSoftmax Class Probabilities:\n[0.658 0.242 0.099]\nSoftmax Sum Check: 1.0',
    interpretation: 'Each activation serves a distinct mathematical role: ReLU for deep hidden feature extraction, Sigmoid for binary probability, and Softmax for multi-class probability.',
    colabInstructions: ['Run in Google Colab to test.'],
  },
  mcqs: [
    {
      id: 'q1',
      question: 'Why is ReLU preferred over Sigmoid in deep hidden layers?',
      options: [
        { id: 'a', text: 'ReLU has a constant derivative of 1.0 for positive inputs, avoiding vanishing gradients' },
        { id: 'b', text: 'ReLU uses more memory than Sigmoid' },
        { id: 'c', text: 'Sigmoid is only compatible with Apple computers' },
        { id: 'd', text: 'ReLU is an unsupervised algorithm' },
          {id:'q2',question:'Why are activation functions necessary in neural networks?',options:[{id:'a',text:'To make networks colorful'},{id:'b',text:'To introduce non-linearity; without them, multi-layer networks collapse to linear models'},{id:'c',text:'To slow down training'},{id:'d',text:'They are optional'}],correctAnswer:'b',explanation:'Without activation functions, network becomes f(x)=W3(W2(W1x))=Wx (just linear regression). Activation functions enable learning complex non-linear patterns.',incorrectFeedback:'Activation functions provide essential non-linearity for deep learning.'},
    {id:'q3',question:'What is the ReLU activation function?',options:[{id:'a',text:'ReLU(x) = max(0, x): outputs x if positive, 0 otherwise'},{id:'b',text:'ReLU(x) = 1/(1+e^-x)'},{id:'c',text:'ReLU(x) = tanh(x)'},{id:'d',text:'ReLU(x) = x^2'}],correctAnswer:'a',explanation:'ReLU = max(0,x) is simple, computationally cheap, and reduces vanishing gradients. Became default activation for hidden layers after 2012. Dying ReLU problem: Leaky ReLU fixes.',incorrectFeedback:'ReLU outputs max(0,x): linear for positive, zero for negative.'},
    {id:'q4',question:'What is the sigmoid activation function used for?',options:[{id:'a',text:'Hidden layers in modern deep networks'},{id:'b',text:'Binary classification output layer: σ(x)=1/(1+e^-x) squashes to (0,1) probability'},{id:'c',text:'Image processing'},{id:'d',text:'It is obsolete'}],correctAnswer:'b',explanation:'Sigmoid σ(x)=1/(1+e^-x) outputs probabilities [0,1]. Used in output layer for binary classification (logistic regression). Suffers vanishing gradients in hidden layers (replaced by ReLU).',incorrectFeedback:'Sigmoid outputs probabilities; used in binary classification output layers.'},
    {id:'q5',question:'What is the softmax activation function?',options:[{id:'a',text:'Softmax converts logits to probability distribution: σ(z_i)=e^z_i / Σe^z_j'},{id:'b',text:'Same as ReLU'},{id:'c',text:'Linear function'},{id:'d',text:'Not used in neural networks'}],correctAnswer:'a',explanation:'Softmax outputs probability distribution over K classes: softmax(z)_i = e^z_i/Σe^z_j. Used in multi-class classification output. Example: [2.0, 1.0, 0.1] → [0.66, 0.24, 0.10].',incorrectFeedback:'Softmax converts raw scores (logits) to probability distributions.'},
  ],
      correctAnswer: 'a',
      explanation: 'The non-saturating derivative of ReLU (always 1 for x > 0) allows gradients to flow backwards through deep layers without exponential decay.',
      incorrectFeedback: 'ReLU avoids the vanishing gradient problem because its derivative does not saturate for positive values.',
    },
  ],
};

export const neuralNetworkArchitecture: Topic = {
  id: 'neural-network-architecture',
  moduleId: 'deep-learning',
  number: 4,
  title: 'Neural Network Architecture: Layers, Weights & Biases',
  description: 'Understand the anatomy of Multi-Layer Perceptrons (MLP): input layers, hidden layers, output layers, and parameter dimensions.',
  objectives: [
    'Define Input, Hidden, and Output layers',
    'Calculate weight tensor shapes and total parameter counts',
    'Contrast Dense (Fully Connected) layers with Convolutional and Recurrent layers',
  ],
  story: `When engineers designed the Boeing 777, they didn't carve it out of a single piece of steel. They assembled it from standardized components: wings, turbines, hydraulic actuators, and avionics computers.
  
A deep neural network is built with the same modular philosophy:
- An **Input Layer** that matches your data dimensions (e.g. 784 pixels or 30 medical measurements)
- Multiple **Hidden Layers** that transform representation space
- An **Output Layer** that formats the final answer
  
The art of deep learning architecture is selecting how many layers to stack, how wide each layer should be, and how information flows through the computational graph.`,
  motivation: `**Architectural intuition**: The layout of layers determines a model’s expressive capacity and computational footprint. Designing an architecture that is too small leads to underfitting; making it needlessly huge causes overfitting and explodes training costs.`,
  concept: {
    simple: `Think of a neural network as an assembly line in a factory:
1. **Input Station**: Unpacks raw materials (pixels, numbers).
2. **Hidden Stations**: Workers reshape, combine, and polish the materials into parts.
3. **Output Station**: Packages the finished product into a final decision.`,
    technical: `A Multi-Layer Perceptron (MLP) is a directed acyclic graph structured in discrete topological strata. A layer $l$ containing $N_l$ neurons connected to layer $l-1$ containing $N_{l-1}$ neurons is parameterized by weight matrix $\\mathbf{W}^{(l)} \\in \\mathbb{R}^{N_l \\times N_{l-1}}$ and bias vector $\\mathbf{b}^{(l)} \\in \\mathbb{R}^{N_l}$, yielding parameter complexity $\\sum_{l=1}^L (N_l \\cdot N_{l-1} + N_l)$.`,
  },
  keyTerms: [
    { term: 'Dense (Fully Connected) Layer', simple: 'A layer where every neuron is connected to every neuron in the previous layer.', technical: 'A linear mapping $\\mathbf{y} = \\mathbf{W}\\mathbf{x} + \\mathbf{b}$ where the connectivity graph between adjacent layer sets is a complete bipartite graph.' },
    { term: 'Width vs Depth', simple: 'Width is how many neurons are in a layer; Depth is how many layers are stacked.', technical: 'Width denotes layer cardinality $N_l$; Depth denotes graph length $L$ of computational path.' },
    { term: 'Feedforward Network', simple: 'Information moves in only one direction—from inputs to outputs—with no loops.', technical: 'A network graph with acyclic topology containing no recurrent feedback loops.' },
  ],
  equations: [
    {
      latex: '\\text{Parameters}^{(l)} = (N_{\\text{in}} \\times N_{\\text{out}}) + N_{\\text{out}}',
      explanation: 'Formula to calculate the total number of learnable parameters (weights + biases) in a fully connected dense layer.',
      symbols: [
        { symbol: 'N_{\\text{in}}', meaning: 'Number of input neurons', interpretation: 'Incoming connections' },
        { symbol: 'N_{\\text{out}}', meaning: 'Number of output neurons', interpretation: 'Neurons in current layer' },
      ],
      example: {
        description: 'Connecting layer with 100 inputs to a hidden layer of 50 neurons.',
        calculation: '\\text{Params} = (100 \\times 50) + 50 = 5000 + 50 = 5050',
        result: '5,050 learnable parameters',
      },
    },
  ],
  howItWorks: [
    { number: 1, title: 'Input Layer Mapping', description: 'Dimensionality matches input feature vector length D.' },
    { number: 2, title: 'Hidden Layer Transformation', description: 'Compresses or expands feature dimensions using non-linear activations.' },
    { number: 3, title: 'Output Layer Head', description: '1 neuron for regression/binary classification; C neurons with Softmax for multi-class.' },
  ],
  applications: [
    { title: 'Tabular Fraud Detection', problem: 'Analyzing 50 banking customer features.', solution: '3-layer MLP [50 -> 64 -> 32 -> 1] achieves high-throughput low-latency inference.' },
  ],
  activity: {
    type: 'mcq',
    title: 'Parameter Count Calculation',
    question: 'A dense layer receives 10 inputs and produces 5 outputs. How many total learnable parameters (weights + biases) does this layer possess?',
    options: [
      { id: 'a', text: '55 (50 weights + 5 biases)' },
      { id: 'b', text: '15' },
      { id: 'c', text: '500' },
      { id: 'd', text: '50' },
    ],
    correctAnswer: 'a',
    explanation: 'Weights = 10 * 5 = 50. Biases = 5 (one per output neuron). Total learnable parameters = 50 + 5 = 55.',
    hint: 'Multiply inputs by outputs, then add the output biases.',
  },
  pythonHandsOn: {
    title: 'Inspecting Model Architecture in PyTorch',
    description: 'Print layer-by-layer parameter summaries of a deep architecture.',
    packages: ['torch'],
    installCommand: 'pip install torch',
    imports: [
      { code: 'import torch.nn as nn', explanation: 'PyTorch neural network module' },
    ],
    code: [
      { code: 'class MultiLayerPerceptron(nn.Module):', explanation: 'Define network class' },
      { code: '    def __init__(self):', explanation: 'Constructor' },
      { code: '        super().__init__()', explanation: 'Initialize base module' },
      { code: '        self.fc1 = nn.Linear(20, 64) # 20 inputs -> 64 neurons', explanation: 'Hidden layer 1' },
      { code: '        self.relu = nn.ReLU()', explanation: 'Activation' },
      { code: '        self.fc2 = nn.Linear(64, 1)  # 64 neurons -> 1 output', explanation: 'Output layer' },
      { code: '', explanation: '' },
      { code: '    def forward(self, x):', explanation: 'Forward computation graph' },
      { code: '        return self.fc2(self.relu(self.fc1(x)))', explanation: 'Chain layers' },
      { code: '', explanation: '' },
      { code: 'net = MultiLayerPerceptron()', explanation: 'Instantiate network' },
      { code: 'print("Network Architecture:\\n", net)', explanation: 'Print structure' },
      { code: 'for name, param in net.named_parameters():', explanation: 'Loop over layers' },
      { code: '    print(f"{name}: shape {list(param.shape)} -> {param.numel()} parameters")', explanation: 'Print tensor shapes' },
    ],
    executionFlow: [
      { number: 1, title: 'Layer 1 Parameters', description: 'Weights [64, 20] = 1,280 + Biases [64] = 1,344 parameters.' },
      { number: 2, title: 'Layer 2 Parameters', description: 'Weights [1, 64] = 64 + Bias [1] = 65 parameters.' },
      { number: 3, title: 'Total Architecture', description: '1,409 total parameters ready for gradient descent.' },
    ],
    input: '20-dimensional input vector',
    output: 'Network Architecture:\nMultiLayerPerceptron(\n  (fc1): Linear(in_features=20, out_features=64, bias=True)\n  (relu): ReLU()\n  (fc2): Linear(in_features=64, out_features=1, bias=True)\n)\nfc1.weight: shape [64, 20] -> 1280 parameters\nfc1.bias: shape [64] -> 64 parameters\nfc2.weight: shape [1, 64] -> 64 parameters\nfc2.bias: shape [1] -> 1 parameters',
    interpretation: 'PyTorch automatically instantiates weight matrices and bias vectors matching exact input and output dimensions.',
    colabInstructions: ['Run in Google Colab.'],
  },
  mcqs: [
    {
      id: 'q1',
      question: 'What is the function of the bias vector in a neural network layer?',
      options: [
        { id: 'a', text: 'It allows the activation function to shift horizontally, enabling neurons to fire even when inputs are zero' },
        { id: 'b', text: 'It stores training data permanently on the hard drive' },
        { id: 'c', text: 'It speeds up GPU clock rates' },
        { id: 'd', text: 'It deletes unneeded layers' },
      {id:'q2',question:'What is the difference between shallow and deep neural networks?',options:[{id:'a',text:'Shallow has 1-2 hidden layers; deep has 3+ hidden layers enabling hierarchical feature learning'},{id:'b',text:'No difference'},{id:'c',text:'Deep networks are always better'},{id:'d',text:'Shallow networks don\'t exist'}],correctAnswer:'a',explanation:'Deep networks learn hierarchical representations: early layers detect edges, middle layers detect textures, deep layers detect objects. Depth enables feature abstraction.',incorrectFeedback:'Deep = 3+ hidden layers learning hierarchical abstractions.'},
{id:'q3',question:'What is a fully connected (dense) layer?',options:[{id:'a',text:'Every neuron connects to every neuron in the previous layer'},{id:'b',text:'Neurons connect randomly'},{id:'c',text:'Only some neurons connect'},{id:'d',text:'Neurons don\'t connect'}],correctAnswer:'a',explanation:'Fully connected layer: each neuron computes z_j = Σw_ij x_i + b_j. If layer has m inputs and n outputs, requires m×n weights. Also called Dense layer.',incorrectFeedback:'Fully connected means complete bipartite graph between layers.'},
{id:'q4',question:'What is the purpose of the output layer?',options:[{id:'a',text:'Store data'},{id:'b',text:'Produce final predictions: single neuron for regression, K neurons with softmax for classification'},{id:'c',text:'Delete inputs'},{id:'d',text:'Increase speed'}],correctAnswer:'b',explanation:'Output layer architecture matches task: 1 neuron (regression), 1 sigmoid (binary classification), K softmax (multi-class). Final layer uses task-specific activation.',incorrectFeedback:'Output layer structure depends on prediction task (regression vs classification).'},
{id:'q5',question:'What is ResNet\'s key innovation?',options:[{id:'a',text:'Skip connections (residual connections) enabling training of 100+ layer networks'},{id:'b',text:'Using only 3 layers'},{id:'c',text:'Removing all activations'},{id:'d',text:'Random weights'}],correctAnswer:'a',explanation:'ResNet skip connections: y = F(x) + x allow gradients to flow directly through network. Solved vanishing gradient in very deep networks. ResNet-152 won ImageNet 2015.',incorrectFeedback:'Skip connections enable ultra-deep networks by preserving gradients.'},
  ],
      correctAnswer: 'a',
      explanation: 'Without bias, if input x = 0, the output w*x is always 0. The bias allows shifting the decision boundary away from the origin.',
      incorrectFeedback: 'Bias provides an affine translation of the hyperplane away from the origin.',
    },
  ],
};

export const forwardPropagation: Topic = {
  id: 'forward-propagation',
  moduleId: 'deep-learning',
  number: 5,
  title: 'Forward Propagation: The Computational Flow',
  description: 'Trace data through the computational graph from input tensors to output activations via vectorized matrix multiplications.',
  objectives: [
    'Trace step-by-step tensor multiplications across successive layers',
    'Understand batch processing and batch matrix multiplication',
    'Examine how intermediate activations form internal representations',
  ],
  story: `When you look at a photograph of a red sports car, light bounces off the image and enters your eye. Photons hit your retinal rods and cones, producing electrical impulses.
  
Those impulses flow forward along the optic nerve into the primary visual cortex (V1), passing sequentially to V2, V4, and the inferior temporal cortex. At each biological stage, signals are filtered, integrated, and passed forward. Within 150 milliseconds, your conscious mind perceives "Ferrari."
  
In artificial neural networks, this instantaneous left-to-right cascade of information is called **Forward Propagation**.`,
  motivation: `**The engine of inference**: When you query ChatGPT or unlock your smartphone with FaceID, the model does not train; it executes a single, hyper-optimized forward propagation pass in milliseconds.`,
  concept: {
    simple: `Forward propagation is the journey data takes through the network:
1. Inputs arrive at Layer 1.
2. Layer 1 multiplies by weights, adds bias, applies ReLU, and hands the result to Layer 2.
3. Layer 2 repeats the process and hands to Layer 3.
4. Output layer gives the final prediction!`,
    technical: `Forward propagation evaluates the composite computational graph $\\mathbf{a}^{(0)} = \\mathbf{X}$, $\\mathbf{z}^{(l)} = \\mathbf{a}^{(l-1)} \\mathbf{W}^{(l)} + \\mathbf{b}^{(l)}$, $\\mathbf{a}^{(l)} = \\sigma(\\mathbf{z}^{(l)})$ for $l = 1, \\dots, L$. When executed over mini-batches of size $B$, operations leverage Level 3 BLAS general matrix multiplications (GEMM) $\\mathbf{Z} \\in \\mathbb{R}^{B \\times N_l}$.`,
  },
  keyTerms: [
    { term: 'Forward Pass', simple: 'Running data forward through the network to generate predictions.', technical: 'Evaluation of the sequence of nested non-linear matrix operations from input to objective loss.' },
    { term: 'Mini-Batch', simple: 'Processing a group of examples (e.g., 32 or 64) all at once for speed.', technical: 'A sub-sample of $B$ training instances packed into a 2D/3D tensor for parallelized GPU matrix operations.' },
    { term: 'Logits', simple: 'The raw, unnormalized prediction scores before applying Softmax.', technical: 'The unconstrained real-valued outputs $\\mathbf{z}^{(L)}$ produced by the final linear layer prior to probability calibration.' },
  ],
  equations: [
    {
      latex: '\\mathbf{Z}^{(l)} = \\mathbf{A}^{(l-1)} \\mathbf{W}^{(l)} + \\mathbf{b}^{(l)}, \\quad \\mathbf{A}^{(l)} = \\sigma\\big(\\mathbf{Z}^{(l)}\\big)',
      explanation: 'Mini-batch forward propagation equations: multiplying activation matrix A by weight matrix W and applying activation function sigma.',
      symbols: [
        { symbol: '\\mathbf{A}^{(l-1)}', meaning: 'Activations of previous layer (Batch x In)', interpretation: 'Features from earlier stage' },
        { symbol: '\\mathbf{W}^{(l)}', meaning: 'Weights (In x Out)', interpretation: 'Transformation matrix' },
        { symbol: '\\mathbf{b}^{(l)}', meaning: 'Broadcasted bias vector', interpretation: 'Row-wise added offset' },
      ],
      example: {
        description: 'Batch of 2 samples passed through layer: A = [[1, 2], [3, 4]], W = [[1], [1]], b = 0.',
        calculation: 'Z = [[1(1) + 2(1)], [3(1) + 4(1)]] = [[3], [7]]',
        result: 'Output activations: [[3], [7]]',
      },
    },
  ],
  howItWorks: [
    { number: 1, title: 'Batch Vectorization', description: 'Pack input instances into tensor of shape (Batch Size, Features).' },
    { number: 2, title: 'Linear Combination (GEMM)', description: 'Compute GPU-accelerated matrix product Z = X * W + b.' },
    { number: 3, title: 'Non-linear Activation', description: 'Apply element-wise activation function A = ReLU(Z).' },
    { number: 4, title: 'Repeat until Output', description: 'Chain intermediate activations until output head produces logits.' },
  ],
  applications: [
    { title: 'Real-Time Edge Inference', problem: 'Running facial recognition on a battery-powered security camera in 10 milliseconds.', solution: 'Quantized INT8 forward propagation executes fast matrix multiplications without backpropagation.' },
  ],
  activity: {
    type: 'mcq',
    title: 'Batch Dimension Check',
    question: 'If your input batch has shape (32, 100) and the weight matrix has shape (100, 50), what is the shape of the output matrix Z?',
    options: [
      { id: 'a', text: '(32, 50)' },
      { id: 'b', text: '(100, 100)' },
      { id: 'c', text: '(32, 100)' },
      { id: 'd', text: '(50, 32)' },
    ],
    correctAnswer: 'a',
    explanation: 'Matrix multiplication dimensions: (32 x 100) multiplied by (100 x 50) yields an output matrix of shape (32 x 50).',
    hint: 'Remember matrix multiplication rules: (M x K) * (K x N) = (M x N).',
  },
  pythonHandsOn: {
    title: 'Manual Forward Pass in Pure NumPy',
    description: 'Implement a 2-layer forward propagation pass by hand using matrix operations.',
    packages: ['numpy'],
    installCommand: 'pip install numpy',
    imports: [{ code: 'import numpy as np', explanation: 'NumPy for matrix operations' }],
    code: [
      { code: '# Input: Batch of 2 samples, 3 features each (shape: 2x3)', explanation: 'Input batch' },
      { code: 'X = np.array([[1.0, 2.0, 3.0], [0.5, -1.0, 2.0]])', explanation: '2 instances' },
      { code: '', explanation: '' },
      { code: '# Layer 1 Weights (3x4) and Biases (4,)', explanation: 'Layer 1' },
      { code: 'W1 = np.array([[0.2, -0.1, 0.5, 0.1], [0.4, 0.3, -0.2, 0.5], [-0.1, 0.2, 0.1, -0.3]])', explanation: 'W1 matrix' },
      { code: 'b1 = np.array([0.1, 0.1, 0.0, -0.1])', explanation: 'b1 bias' },
      { code: '', explanation: '' },
      { code: '# Layer 1 Forward Pass: Z1 = X @ W1 + b1, A1 = ReLU(Z1)', explanation: 'Layer 1 computation' },
      { code: 'Z1 = np.dot(X, W1) + b1', explanation: 'Linear combination' },
      { code: 'A1 = np.maximum(0, Z1) # ReLU', explanation: 'Activation' },
      { code: 'print("Layer 1 Activations (shape 2x4):\\n", A1.round(3))', explanation: 'Show activations' },
      { code: '', explanation: '' },
      { code: '# Layer 2 (Output Head): Weights (4x1) and Bias (1,)', explanation: 'Layer 2' },
      { code: 'W2 = np.array([[0.5], [-0.3], [0.8], [0.2]])', explanation: 'W2 matrix' },
      { code: 'b2 = np.array([0.0])', explanation: 'b2 bias' },
      { code: 'Z2 = np.dot(A1, W2) + b2', explanation: 'Final linear score' },
      { code: 'print("\\nFinal Output Predictions (shape 2x1):\\n", Z2.round(3))', explanation: 'Print predictions' },
    ],
    executionFlow: [
      { number: 1, title: 'GEMM 1', description: 'Maps batch of (2, 3) through W1 (3, 4) into hidden space (2, 4).' },
      { number: 2, title: 'Non-Linearity', description: 'ReLU clamps negative values to 0.0.' },
      { number: 3, title: 'GEMM 2', description: 'Projects (2, 4) through W2 (4, 1) to produce scalar outputs for each instance in the batch.' },
    ],
    input: 'Batch of 2 samples with 3 features',
    output: 'Layer 1 Activations (shape 2x4):\n[[0.8 1.2 0.4 0.1]\n [0.0 0.2 0.65 0.  ]]\n\nFinal Output Predictions (shape 2x1):\n[[0.38 ]\n [0.46 ]] ',
    interpretation: 'Vectorized forward propagation handles entire batches in parallel without any Python for-loops.',
    colabInstructions: ['Run in Google Colab to test.'],
  },
  mcqs: [
    {
      id: 'q1',
      question: 'During forward propagation, why do deep learning frameworks process data in mini-batches (e.g. 32 samples) rather than one sample at a time?',
      options: [
        { id: 'a', text: 'Mini-batches enable massive parallelism on GPU tensor cores using optimized Level-3 BLAS matrix routines' },
        { id: 'b', text: 'Because single samples are illegal in Python' },
        { id: 'c', text: 'To delete half the dataset to save RAM' },
        { id: 'd', text: 'Because batches make images look clearer' },
      {id:'q2',question:'What is forward propagation?',options:[{id:'a',text:'Computing network output by passing inputs through layers sequentially: x→layer1→layer2→...→output'},{id:'b',text:'Training the network'},{id:'c',text:'Updating weights'},{id:'d',text:'Deleting data'}],correctAnswer:'a',explanation:'Forward pass: (1) Input x, (2) Compute z1=W1x+b1, a1=σ(z1), (3) Repeat for all layers, (4) Output ŷ. No weight updates—just prediction.',incorrectFeedback:'Forward propagation computes predictions by passing data through layers.'},
{id:'q3',question:'What is the formula for a single neuron\'s output?',options:[{id:'a',text:'a = x + w'},{id:'b',text:'a = σ(w·x + b) where σ is activation function'},{id:'c',text:'a = w/x'},{id:'d',text:'a = random()'}],correctAnswer:'b',explanation:'Neuron: (1) Linear combination z=w·x+b, (2) Activation a=σ(z). Example with sigmoid: a = 1/(1+e^-(w·x+b)).',incorrectFeedback:'Neuron computes activation(weights·inputs + bias).'},
{id:'q4',question:'How are layers chained in forward propagation?',options:[{id:'a',text:'Randomly'},{id:'b',text:'Output of layer i becomes input to layer i+1: a^(l) = σ(W^(l)·a^(l-1) + b^(l))'},{id:'c',text:'Layers don\'t chain'},{id:'d',text:'Through database'}],correctAnswer:'b',explanation:'Chain rule: a^(0)=x → a^(1)=σ(W^(1)a^(0)+b^(1)) → a^(2)=σ(W^(2)a^(1)+b^(2)) → ... → ŷ. Each layer transforms representation.',incorrectFeedback:'Layers chain outputs to inputs sequentially.'},
{id:'q5',question:'What is the difference between forward and backward propagation?',options:[{id:'a',text:'Forward computes predictions; backward computes gradients and updates weights'},{id:'b',text:'They are the same'},{id:'c',text:'Forward is slower'},{id:'d',text:'Backward doesn\'t exist'}],correctAnswer:'a',explanation:'Forward: input → output (prediction). Backward: compute ∂Loss/∂weights via chain rule, update weights. Training requires both; inference only uses forward.',incorrectFeedback:'Forward = prediction; backward = gradient computation for learning.'},
  ],
      correctAnswer: 'a',
      explanation: 'GPUs are massively parallel SIMD processors designed to execute large matrix multiplications. Batching saturates thousands of GPU cores simultaneously.',
      incorrectFeedback: 'Mini-batching maximizes parallel GPU tensor core hardware utilization.',
    },
  ],
};

export const lossFunction: Topic = {
  id: 'loss-function',
  moduleId: 'deep-learning',
  number: 6,
  title: 'Loss Functions: Cross-Entropy & Mean Squared Error',
  description: 'Understand how mathematical loss functions measure prediction error and guide neural network optimization.',
  objectives: [
    'Differentiate between Mean Squared Error (MSE) and Cross-Entropy Loss',
    'Understand the information-theoretic meaning of Cross-Entropy and Surprisal',
    'Examine Binary Cross-Entropy (BCE) vs Categorical Cross-Entropy (CCE)',
  ],
  story: `Imagine coaching an archer.
  
If the archer is practicing target shooting where the arrow lands 10 centimeters from the bullseye, you measure the physical Euclidean distance. The error is a continuous distance in centimeters. This is **Mean Squared Error**.
  
Now imagine a meteorologist who announces: "There is a 99% chance of a bright sunny day today." An hour later, a ferocious blizzard blankets the city! The meteorologist wasn't just wrong; they were *supremely confident and wrong*. In probability theory, that massive error is called **Surprisal**.
  
**Cross-Entropy Loss** heavily penalizes models that are confidently wrong, driving them to calibrate their probabilities honestly.`,
  motivation: `**The compass of learning**: The network never sees your accuracy score; it only sees the loss gradient. Choosing the correct loss function is critical to prevent training stagnation and numerical divergence.`,
  concept: {
    simple: `A loss function is the teacher grading the network’s exam:
- **Mean Squared Error (MSE)**: Used when predicting numbers (like house prices or temperatures). Measures how far off the guess was.
- **Cross-Entropy Loss**: Used when predicting categories (like cat vs dog). It measures how surprised or confident the model was in its choice.`,
    technical: `In maximum likelihood estimation, minimizing Cross-Entropy is equivalent to minimizing the Kullback-Leibler (KL) divergence $D_{KL}(P \\parallel Q)$ between the empirical data distribution $P$ and model distribution $Q_\\theta$. For discrete multi-class classification, Categorical Cross-Entropy is $\\mathcal{L} = -\\sum_{c=1}^C y_c \\log(\\hat{y}_c)$.`,
  },
  keyTerms: [
    { term: 'Categorical Cross-Entropy', simple: 'The standard loss for multi-class problems; penalizes wrong probability guesses.', technical: 'Negative log-likelihood of the true class under the model distribution: $\\mathcal{L} = -\\log \\hat{y}_{true}$.' },
    { term: 'Binary Cross-Entropy (Log Loss)', simple: 'Cross-entropy specialized for two-choice (binary) problems.', technical: '$\\mathcal{L} = -[y \\log \\hat{y} + (1-y) \\log(1-\\hat{y})]$.' },
    { term: 'Mean Squared Error (MSE)', simple: 'The average squared distance between true and predicted numbers.', technical: '$\\frac{1}{N} \\sum (y - \\hat{y})^2$, optimal for targets with Gaussian noise distributions.' },
  ],
  equations: [
    {
      latex: '\\mathcal{L}_{BCE} = -\\frac{1}{N} \\sum_{i=1}^N \\Big[ y_i \\ln(\\hat{y}_i) + (1 - y_i) \\ln(1 - \\hat{y}_i) \\Big]',
      explanation: 'Binary Cross-Entropy Loss: penalizes discrepancies between true binary label y (0 or 1) and predicted probability y_hat.',
      symbols: [
        { symbol: 'y_i', meaning: 'Ground truth (0 or 1)', interpretation: 'Actual class label' },
        { symbol: '\\hat{y}_i', meaning: 'Predicted probability', interpretation: 'Model confidence between 0 and 1' },
      ],
      example: {
        description: 'True label y=1. If model predicts high confidence 0.90, loss is small: -ln(0.90) = 0.105. If model confidently predicts 0.01, loss explodes: -ln(0.01) = 4.605!',
        calculation: '\\text{Loss}_{\\text{good}} = -\\ln(0.90) = 0.105, \\quad \\text{Loss}_{\\text{bad}} = -\\ln(0.01) = 4.605',
        result: 'Confident errors are penalized 44x more severely',
      },
    },
  ],
  howItWorks: [
    { number: 1, title: 'Output Generation', description: 'Network outputs continuous probabilities via Sigmoid or Softmax.' },
    { number: 2, title: 'Log-Likelihood Calculation', description: 'Evaluate negative log probability assigned to the ground-truth class.' },
    { number: 3, title: 'Batch Averaging', description: 'Average loss scalars across the mini-batch to form scalar objective.' },
  ],
  applications: [
    { title: 'Image Classification (ImageNet)', problem: 'Evaluating classification across 1,000 competing categories.', solution: 'Categorical Cross-Entropy computes loss based solely on the probability assigned to the correct category.' },
    { title: 'Autonomous Vehicle Steering Control', problem: 'Predicting continuous steering wheel steering angle in degrees.', solution: 'MSE loss penalizes angular deviations from human driver demonstrations.' },
  ],
  activity: {
    type: 'mcq',
    title: 'Loss Selection',
    question: 'You are training a neural network to predict the exact price of Bitcoin in dollars. Which loss function is appropriate?',
    options: [
      { id: 'a', text: 'Mean Squared Error (MSE) or Mean Absolute Error (MAE)' },
      { id: 'b', text: 'Categorical Cross-Entropy' },
      { id: 'c', text: 'Binary Cross-Entropy' },
      { id: 'd', text: 'Dice Coefficient' },
    ],
    correctAnswer: 'a',
    explanation: 'Bitcoin price is a continuous numerical quantity (regression), which requires continuous loss metrics like MSE or MAE rather than categorical cross-entropy.',
    hint: 'Is price a continuous number or a discrete category?',
  },
  pythonHandsOn: {
    title: 'Computing Loss Functions in PyTorch',
    description: 'Calculate MSE and Cross-Entropy loss using built-in PyTorch loss functions.',
    packages: ['torch'],
    installCommand: 'pip install torch',
    imports: [
      { code: 'import torch', explanation: 'PyTorch library' },
      { code: 'import torch.nn as nn', explanation: 'Neural network loss modules' },
    ],
    code: [
      { code: '# 1. Mean Squared Error (Regression Example):', explanation: 'Regression loss' },
      { code: 'mse_loss = nn.MSELoss()', explanation: 'MSE loss criterion' },
      { code: 'y_pred = torch.tensor([10.5, 20.0, 31.0])', explanation: 'Continuous predictions' },
      { code: 'y_true = torch.tensor([10.0, 22.0, 30.0])', explanation: 'Ground truth targets' },
      { code: 'loss_reg = mse_loss(y_pred, y_true)', explanation: 'Compute MSE' },
      { code: 'print(f"MSE Loss: {loss_reg.item():.4f}")', explanation: 'Print MSE' },
      { code: '', explanation: '' },
      { code: '# 2. Cross-Entropy Loss (Classification Example):', explanation: 'Classification loss' },
      { code: 'ce_loss = nn.CrossEntropyLoss() # Combines Softmax + NLLLoss internally', explanation: 'Cross-entropy criterion' },
      { code: 'logits = torch.tensor([[2.0, 0.5, 0.1]]) # Unnormalized logits for 3 classes', explanation: 'Model raw scores' },
      { code: 'target_class = torch.tensor([0])         # True answer is Class 0', explanation: 'Correct class index' },
      { code: 'loss_clf = ce_loss(logits, target_class)', explanation: 'Compute Cross-Entropy' },
      { code: 'print(f"Cross-Entropy Loss: {loss_clf.item():.4f}")', explanation: 'Print CE loss' },
    ],
    executionFlow: [
      { number: 1, title: 'MSE Computation', description: 'Computes [(10.5-10)^2 + (20-22)^2 + (31-30)^2] / 3 = [0.25 + 4.0 + 1.0] / 3 = 1.75.' },
      { number: 2, title: 'Cross-Entropy Computation', description: 'Applies internal Softmax and computes negative log-likelihood of class 0 (~0.28).' },
    ],
    input: 'Regression targets and classification logits',
    output: 'MSE Loss: 1.7500\nCross-Entropy Loss: 0.2800',
    interpretation: 'PyTorch loss modules evaluate numerical errors efficiently on GPU/CPU tensors with full autograd tracking.',
    colabInstructions: ['Run in Google Colab.'],
  },
  mcqs: [
    {
      id: 'q1',
      question: 'What happens to Cross-Entropy loss when the model predicts a probability near 0.001 for the class that is actually true?',
      options: [
        { id: 'a', text: 'The loss approaches infinity (-log(0.001) is very large), delivering a massive penalty' },
        { id: 'b', text: 'The loss becomes negative' },
        { id: 'c', text: 'The loss is rounded to zero' },
        { id: 'd', text: 'The computer ignores the error' },
      {id:'q2',question:'What is Mean Squared Error (MSE) used for?',options:[{id:'a',text:'Classification'},{id:'b',text:'Regression: MSE = (1/n)Σ(ŷᵢ-yᵢ)² measures average squared prediction error'},{id:'c',text:'Clustering'},{id:'d',text:'Data cleaning'}],correctAnswer:'b',explanation:'MSE for regression: penalizes large errors quadratically. Example: predicting house prices. Alternative: MAE (Mean Absolute Error) for outlier robustness.',incorrectFeedback:'MSE is the standard regression loss function.'},
{id:'q3',question:'What is Cross-Entropy loss used for?',options:[{id:'a',text:'Regression'},{id:'b',text:'Classification: measures difference between predicted and true probability distributions'},{id:'c',text:'Image compression'},{id:'d',text:'Sorting'}],correctAnswer:'b',explanation:'Binary cross-entropy: L = -[y log(ŷ) + (1-y)log(1-ŷ)]. Categorical cross-entropy: L = -Σy_i log(ŷ_i). Penalizes confident wrong predictions heavily.',incorrectFeedback:'Cross-entropy loss for classification tasks.'},
{id:'q4',question:'Why do we need loss functions?',options:[{id:'a',text:'To slow down training'},{id:'b',text:'To quantify prediction error so gradient descent can optimize network weights'},{id:'c',text:'To delete bad data'},{id:'d',text:'For visualization only'}],correctAnswer:'b',explanation:'Loss function measures how wrong predictions are. Gradient descent minimizes loss by adjusting weights: w := w - η·∂Loss/∂w. Without loss, no training signal.',incorrectFeedback:'Loss functions provide optimization objective for learning.'},
{id:'q5',question:'What is regularization in the loss function?',options:[{id:'a',text:'Making training faster'},{id:'b',text:'Adding penalty term to loss to constrain weights: Loss = DataLoss + λ·||w||²'},{id:'c',text:'Deleting neurons'},{id:'d',text:'Using more data'}],correctAnswer:'b',explanation:'L2 regularization: Loss = MSE + λΣw². Penalizes large weights, preventing overfitting. L1 (Lasso) encourages sparsity. Dropout is another regularization technique.',incorrectFeedback:'Regularization penalizes model complexity to prevent overfitting.'},
  ],
      correctAnswer: 'a',
      explanation: 'As predicted probability p -> 0 for the correct class, -ln(p) -> infinity. This asymmetric penalty heavily punishes confident mistakes.',
      incorrectFeedback: 'The logarithmic curve approaches infinity as predicted probability of the true class approaches zero.',
    },
  ],
};

export const gradientDescent: Topic = {
  id: 'gradient-descent',
  moduleId: 'deep-learning',
  number: 7,
  title: 'Gradient Descent & Backpropagation',
  description: 'Unravel the mathematical core of deep learning: computing analytical gradients via the multivariable Chain Rule and stepping down loss landscapes.',
  objectives: [
    'Understand gradient vectors as directions of steepest ascent',
    'Trace Backpropagation using the calculus Chain Rule',
    'Compare Batch GD, Stochastic GD (SGD), and Adam optimizers',
    'Tune learning rate hyperparameters and avoid saddle points',
  ],
  story: `Imagine being dropped blindfolded onto a rugged mountain range in dense fog. Your mission is to find the deepest valley (the minimum loss) as quickly as possible.
  
You cannot see ahead. What do you do?
  
You extend your foot and feel the slope of the ground directly beneath you. Whichever direction slopes downward most steeply, you take one cautious step in that direction. You repeat this step after step.
  
In machine learning, this is **Gradient Descent**. The slope beneath your feet is the **Gradient vector** (calculated via the calculus Chain Rule / Backpropagation), and your stride length is the **Learning Rate** ($\\alpha$).`,
  motivation: `**The core algorithm of modern AI**: Without gradient descent and backpropagation, training billion-parameter neural networks would be computationally impossible. It is the universal optimization engine powering all deep learning.`,
  concept: {
    simple: `Gradient descent is walking down a hill to find the bottom of the valley:
1. **The Gradient**: An arrow pointing uphill. To go down, we step in the exact opposite direction!
2. **Learning Rate**: How big of a step you take. Too big, and you stumble over the valley; too small, and you take 100 years to reach the bottom.
3. **Backpropagation**: The math trick (the Chain Rule) that calculates how to tweak every single weight in the network.`,
    technical: `Gradient descent updates parameter vector $\\boldsymbol{\\theta} \\in \\mathbb{R}^P$ along the negative gradient of the empirical risk: $\\boldsymbol{\\theta}_{t+1} = \\boldsymbol{\\theta}_t - \\alpha \\nabla_\\theta \\mathcal{L}(\\boldsymbol{\\theta}_t)$. Backpropagation evaluates the gradient efficiently in $O(P)$ operations by applying reverse-mode automatic differentiation across the computational graph using the multivariate chain rule $\\frac{\\partial \\mathcal{L}}{\\partial w_{ij}^{(l)}} = \\delta_i^{(l)} a_j^{(l-1)}$.`,
  },
  keyTerms: [
    { term: 'Backpropagation', simple: 'Calculating who is to blame for the mistake, working backwards from the output to the first layer.', technical: 'Reverse-mode automatic differentiation propagating error sensitivities $\\delta^{(l)}$ backwards through transposed weight matrices.' },
    { term: 'Learning Rate ($\\alpha$)', simple: 'The size of the step taken down the hill on each update.', technical: 'Scalar hyperparameter scaling the gradient step size during parameter updates.' },
    { term: 'Adam Optimizer', simple: 'A smart version of gradient descent that gives each parameter its own custom, adaptive step size.', technical: 'Adaptive Moment Estimation combining first-order momentum (running average of gradients) and second-order RMSprop (running average of squared gradients).' },
  ],
  equations: [
    {
      latex: '\\boldsymbol{\\theta}_{t+1} = \\boldsymbol{\\theta}_t - \\alpha \\nabla_{\\boldsymbol{\\theta}} \\mathcal{L}(\\boldsymbol{\\theta}_t)',
      explanation: 'The Gradient Descent update rule: subtract the learning rate alpha times the gradient vector from the current parameter weights.',
      symbols: [
        { symbol: '\\boldsymbol{\\theta}_t', meaning: 'Current weights', interpretation: 'Where we are on the mountain' },
        { symbol: '\\alpha', meaning: 'Learning rate', interpretation: 'Step size' },
        { symbol: '\\nabla \\mathcal{L}', meaning: 'Gradient vector', interpretation: 'Slope of steepest ascent' },
      ],
      example: {
        description: 'Current weight w = 5.0, gradient dL/dw = 4.0, learning rate alpha = 0.1.',
        calculation: 'w_{new} = 5.0 - (0.1 \\times 4.0) = 5.0 - 0.4 = 4.6',
        result: 'Weight moves from 5.0 down to 4.6',
      },
    },
  ],
  howItWorks: [
    { number: 1, title: 'Forward Pass', description: 'Compute predictions and evaluate scalar loss L.' },
    { number: 2, title: 'Backward Pass (Backprop)', description: 'Traverse graph in reverse, computing partial derivatives dL/dw for every weight.' },
    { number: 3, title: 'Optimizer Step', description: 'Update parameters using gradient descent or Adam step.' },
    { number: 4, title: 'Zero Gradients', description: 'Reset accumulated gradient buffers before the next iteration.' },
  ],
  applications: [
    { title: 'Training Large Language Models', problem: 'Optimizing 175 billion weights simultaneously across GPU clusters.', solution: 'Distributed AdamW optimizer synchronizes gradients across thousands of tensor cores.' },
  ],
  activity: {
    type: 'mcq',
    title: 'Learning Rate Consequences',
    question: 'What happens if your learning rate (alpha) is set way too high (e.g., alpha = 100.0)?',
    options: [
      { id: 'a', text: 'The loss will overshoot the minimum, oscillate wildly, and diverge to infinity (NaN)' },
      { id: 'b', text: 'The network will train in 1 millisecond' },
      { id: 'c', text: 'The computer will automatically shut down' },
      { id: 'd', text: 'It will guarantee zero error' },
    ],
    correctAnswer: 'a',
    explanation: 'An excessively large learning rate causes the parameters to catapult completely past the valley, leading to exploding loss values and numerical overflow (NaN).',
    hint: 'Think about taking giant leaps across a narrow canyon.',
  },
  pythonHandsOn: {
    title: 'PyTorch Automatic Differentiation (Autograd)',
    description: 'Witness PyTorch calculate exact analytical derivatives automatically using computational graphs.',
    packages: ['torch'],
    installCommand: 'pip install torch',
    imports: [{ code: 'import torch', explanation: 'PyTorch autograd engine' }],
    code: [
      { code: '# Define a learnable weight tensor w with requires_grad=True', explanation: 'Track gradients' },
      { code: 'w = torch.tensor(3.0, requires_grad=True)', explanation: 'Variable w' },
      { code: '', explanation: '' },
      { code: '# Define a computational function: Loss = w^3 - 2*w + 5', explanation: 'Function' },
      { code: 'loss = w**3 - 2*w + 5', explanation: 'Compute forward pass' },
      { code: 'print("Forward Pass Loss Value:", loss.item())', explanation: 'Loss = 3^3 - 6 + 5 = 26' },
      { code: '', explanation: '' },
      { code: '# Trigger Backpropagation via the Chain Rule!', explanation: 'Backward pass' },
      { code: 'loss.backward()', explanation: 'Calculates dLoss/dw automatically!' },
      { code: '', explanation: '' },
      { code: '# Calculus check: dLoss/dw = 3*w^2 - 2 = 3*(3^2) - 2 = 27 - 2 = 25', explanation: 'Analytical derivative' },
      { code: 'print("PyTorch Autograd Computed Gradient dLoss/dw:", w.grad.item())', explanation: 'Print gradient' },
      { code: '', explanation: '' },
      { code: '# Take one Gradient Descent step with learning rate 0.01:', explanation: 'Optimizer step' },
      { code: 'with torch.no_grad():', explanation: 'Disable tracking during update' },
      { code: '    w -= 0.01 * w.grad', explanation: 'w = 3.0 - (0.01 * 25) = 2.75' },
      { code: 'print("Updated Weight w:", round(w.item(), 3))', explanation: 'Print updated weight' },
    ],
    executionFlow: [
      { number: 1, title: 'Graph Construction', description: 'PyTorch dynamically constructs computational DAG linking w to loss.' },
      { number: 2, title: 'Backward Sweep', description: 'loss.backward() evaluates reverse-mode gradient: 3*(3^2) - 2 = 25.0.' },
      { number: 3, title: 'Weight Step', description: 'Subtracts alpha * gradient, stepping weight from 3.0 down to 2.75 toward minimum.' },
    ],
    input: 'Scalar variable w = 3.0',
    output: 'Forward Pass Loss Value: 26.0\nPyTorch Autograd Computed Gradient dLoss/dw: 25.0\nUpdated Weight w: 2.75',
    interpretation: 'PyTorch Autograd computes exact calculus derivatives across arbitrary complex graphs without manual derivation.',
    colabInstructions: ['Run in Google Colab.'],
  },
  mcqs: [
    {
      id: 'q1',
      question: 'What is the key advantage of the Adam optimizer over basic Stochastic Gradient Descent (SGD)?',
      options: [
        { id: 'a', text: 'Adam computes individual adaptive learning rates for every single parameter using momentum and squared gradients' },
        { id: 'b', text: 'Adam does not require any training data' },
        { id: 'c', text: 'Adam only runs on CPU' },
        { id: 'd', text: 'Adam guarantees 100% test accuracy' },
      {id:'q2',question:'What is the gradient in gradient descent?',options:[{id:'a',text:'Random direction'},{id:'b',text:'Vector of partial derivatives ∇L = [∂L/∂w₁, ∂L/∂w₂, ...] pointing in direction of steepest loss increase'},{id:'c',text:'The loss value'},{id:'d',text:'Number of epochs'}],correctAnswer:'b',explanation:'Gradient ∇L points uphill (direction of maximum loss increase). We move opposite direction: w := w - η·∇L to descend toward minimum.',incorrectFeedback:'Gradient is the vector of partial derivatives indicating steepest ascent direction.'},
{id:'q3',question:'What is the learning rate (η) in gradient descent?',options:[{id:'a',text:'Number of layers'},{id:'b',text:'Step size controlling how much weights change: w := w - η·∇L'},{id:'c',text:'Number of training examples'},{id:'d',text:'Loss value'}],correctAnswer:'b',explanation:'Learning rate η scales gradient: too large → overshooting/divergence, too small → slow convergence. Typical values: 0.001-0.1. Adaptive methods: Adam, RMSprop.',incorrectFeedback:'Learning rate controls the step size in weight updates.'},
{id:'q4',question:'What is the difference between batch, stochastic, and mini-batch gradient descent?',options:[{id:'a',text:'No difference'},{id:'b',text:'Batch uses all data; Stochastic uses 1 sample; Mini-batch uses small subset (e.g., 32-256)'},{id:'c',text:'Batch is always best'},{id:'d',text:'Stochastic is obsolete'}],correctAnswer:'b',explanation:'Batch GD: accurate but slow. SGD: fast, noisy. Mini-batch (default): balance speed and stability. Mini-batch size 32-256 typical for deep learning.',incorrectFeedback:'Mini-batch GD balances batch (slow/accurate) and SGD (fast/noisy).'},
{id:'q5',question:'What is backpropagation?',options:[{id:'a',text:'Forward propagation'},{id:'b',text:'Efficiently computing gradients ∂Loss/∂weights using chain rule from output to input'},{id:'c',text:'Deleting weights'},{id:'d',text:'Random weight initialization'}],correctAnswer:'b',explanation:'Backpropagation applies chain rule layer-by-layer backward: ∂L/∂w^(l) = ∂L/∂a^(l) · ∂a^(l)/∂z^(l) · ∂z^(l)/∂w^(l). Enables efficient gradient computation in deep networks.',incorrectFeedback:'Backpropagation computes gradients efficiently via chain rule.'},
  ],
      correctAnswer: 'a',
      explanation: 'Adam dynamically adapts the step size for each parameter by maintaining exponentially decaying moving averages of past gradients and past squared gradients.',
      incorrectFeedback: 'Adaptive per-parameter learning rates and momentum are Adam’s primary innovations.',
    },
  ],
};

export const introTensorFlow: Topic = {
  id: 'intro-tensorflow',
  moduleId: 'deep-learning',
  number: 8,
  title: 'Introduction to TensorFlow and Keras',
  description: 'Explore Google’s enterprise deep learning framework: static computational graphs, high-level Keras Sequential API, and TensorBoard.',
  objectives: [
    'Understand TensorFlow’s architecture and ecosystem',
    'Build models using Keras Sequential and Functional APIs',
    'Compile models with optimizers, loss functions, and metrics',
    'Monitor training with Callbacks (EarlyStopping, ModelCheckpoint)',
  ],
  story: `In 2015, Google open-sourced TensorFlow, the successor to their internal DistBelief machine learning engine.
  
TensorFlow was engineered for massive industrial scale: training models across thousands of Google TPU (Tensor Processing Unit) chips and serving predictions to billions of search, YouTube, and Google Photos users with millisecond latency.
  
With the integration of François Chollet's **Keras** API as TensorFlow’s official high-level interface, building state-of-the-art deep networks became as simple as stacking LEGO bricks.`,
  motivation: `**Enterprise production standard**: TensorFlow powers mission-critical deployments across Fortune 500 enterprises, Android mobile runtimes (TFLite), and web browsers (TensorFlow.js).`,
  concept: {
    simple: `TensorFlow is Google's deep learning powerhouse. Keras is the friendly steering wheel on top of it.
With Keras, you build a neural network in 3 lines:
1. ` + '`model = Sequential()`' + ` (Create empty network)
2. ` + '`model.add(Dense(64))`' + ` (Add a layer of 64 neurons)
3. ` + '`model.fit(X, y)`' + ` (Train on data!)`,
    technical: `TensorFlow 2.x executes eager tensor execution backed by AutoGraph compilation (` + '`@tf.function`' + `) targeting XLA (Accelerated Linear Algebra) compilers. The Keras high-level API encapsulates model compilation, optimizer registration, and lifecycle callback hooks for distributed execution.`,
  },
  keyTerms: [
    { term: 'TensorFlow', simple: 'Google’s open-source framework for deep learning.', technical: 'An end-to-end open-source machine learning platform with multi-device execution (CPU, GPU, TPU) and graph optimization.' },
    { term: 'Keras', simple: 'The easy, user-friendly API for building neural networks inside TensorFlow.', technical: 'High-level deep learning API specification running on top of TensorFlow, emphasizing developer ergonomics and modularity.' },
    { term: 'EarlyStopping Callback', simple: 'Automatically stopping training when the validation loss stops improving to prevent overfitting.', technical: 'A training interruption hook monitoring validation metrics with patience parameter $P$, restoring best model weights.' },
  ],
  howItWorks: [
    { number: 1, title: 'Model Definition', description: 'Assemble layers sequentially using tf.keras.Sequential([Dense(...)]).' },
    { number: 2, title: 'Compilation', description: 'Register optimizer ("adam"), loss ("sparse_categorical_crossentropy"), and metrics.' },
    { number: 3, title: 'Fit Execution', description: 'model.fit(X, y, epochs=10, validation_split=0.2) runs training loop.' },
  ],
  applications: [
    { title: 'YouTube Video Recommendation', problem: 'Serving sub-millisecond personalized video rankings across 2 billion users.', solution: 'Distributed TensorFlow models score billions of candidate video embeddings in parallel.' },
  ],
  activity: {
    type: 'mcq',
    title: 'Keras API Check',
    question: 'Which method is used in Keras to specify the optimizer, loss function, and metrics before training?',
    options: [
      { id: 'a', text: 'model.compile()' },
      { id: 'b', text: 'model.fit()' },
      { id: 'c', text: 'model.start()' },
      { id: 'd', text: 'model.run()' },
    ],
    correctAnswer: 'a',
    explanation: 'model.compile(optimizer="adam", loss="mse", metrics=["accuracy"]) configures the learning configuration before training begins.',
    hint: 'You compile the model configuration before fitting.',
  },
  pythonHandsOn: {
    title: 'Building an MLP in TensorFlow / Keras',
    description: 'Build, compile, and fit a neural network in TensorFlow.',
    packages: ['tensorflow'],
    installCommand: 'pip install tensorflow',
    imports: [
      { code: 'import tensorflow as tf', explanation: 'Import TensorFlow' },
      { code: 'from tensorflow.keras import layers, models', explanation: 'Import Keras layers' },
      { code: 'import numpy as np', explanation: 'NumPy for data' },
    ],
    code: [
      { code: '# Synthetic dataset: 100 samples, 8 features', explanation: 'Dataset' },
      { code: 'X = np.random.randn(100, 8)', explanation: 'Features' },
      { code: 'y = np.random.randint(0, 2, size=(100, 1)) # Binary targets', explanation: 'Labels' },
      { code: '', explanation: '' },
      { code: '# Build model with Keras Sequential:', explanation: 'Architecture' },
      { code: 'model = models.Sequential([', explanation: 'Container' },
      { code: '    layers.Dense(32, activation="relu", input_shape=(8,)), # Layer 1', explanation: 'Hidden layer' },
      { code: '    layers.Dense(16, activation="relu"),                   # Layer 2', explanation: 'Hidden layer' },
      { code: '    layers.Dense(1, activation="sigmoid")                  # Output head', explanation: 'Sigmoid output' },
      { code: '])', explanation: 'Close model' },
      { code: '', explanation: '' },
      { code: '# Compile model:', explanation: 'Compilation' },
      { code: 'model.compile(optimizer="adam", loss="binary_crossentropy", metrics=["accuracy"])', explanation: 'Configure learning' },
      { code: '', explanation: '' },
      { code: '# Fit for 3 epochs:', explanation: 'Training loop' },
      { code: 'history = model.fit(X, y, epochs=3, batch_size=16, verbose=1)', explanation: 'Run training' },
      { code: 'print("Training Complete! Final Loss:", round(history.history["loss"][-1], 4))', explanation: 'Print final loss' },
    ],
    executionFlow: [
      { number: 1, title: 'Sequential Assembly', description: 'Creates 8 -> 32 -> 16 -> 1 graph.' },
      { number: 2, title: 'Compilation', description: 'Attaches Adam optimizer and binary cross-entropy loss.' },
      { number: 3, title: 'Execution', description: 'Trains over 3 epochs, reporting loss and accuracy reduction.' },
    ],
    input: '100 samples with 8 features each',
    output: 'Epoch 1/3: loss: 0.712 - accuracy: 0.52\nEpoch 2/3: loss: 0.695 - accuracy: 0.55\nEpoch 3/3: loss: 0.681 - accuracy: 0.58\nTraining Complete!',
    interpretation: 'Keras abstracts complex training loops into clean, expressive, readable syntax.',
    colabInstructions: ['Run in Google Colab with TensorFlow 2.x.'],
  },
  mcqs: [
    {
      id: 'q1',
      question: 'What is the purpose of the EarlyStopping callback in TensorFlow / Keras?',
      options: [
        { id: 'a', text: 'To halt training automatically when validation loss stops improving, avoiding overfitting and wasted compute' },
        { id: 'b', text: 'To stop the computer from running out of battery' },
        { id: 'c', text: 'To delete old python files' },
        { id: 'd', text: 'To pause training whenever the user clicks the mouse' },
      {id:'q2',question:'What is TensorFlow primarily used for?',options:[{id:'a',text:'Word processing'},{id:'b',text:'Building and training deep learning models with automatic differentiation and GPU acceleration'},{id:'c',text:'Database management'},{id:'d',text:'Video editing'}],correctAnswer:'b',explanation:'TensorFlow (Google) is a production-grade deep learning framework. Provides: automatic differentiation, GPU/TPU support, deployment tools, Keras high-level API.',incorrectFeedback:'TensorFlow is Google\'s deep learning framework.'},
{id:'q3',question:'What is Keras in TensorFlow?',options:[{id:'a',text:'A database'},{id:'b',text:'High-level API for building neural networks: tf.keras.Sequential(), layers, compile(), fit()'},{id:'c',text:'A programming language'},{id:'d',text:'A hardware device'}],correctAnswer:'b',explanation:'Keras (tf.keras) is TensorFlow\'s high-level API: model = Sequential([Dense(64, activation=\'relu\'), Dense(10, activation=\'softmax\')]). Simplifies model building.',incorrectFeedback:'Keras is TensorFlow\'s user-friendly high-level API.'},
{id:'q4',question:'What does model.compile() do in TensorFlow/Keras?',options:[{id:'a',text:'Trains the model'},{id:'b',text:'Configures optimizer, loss function, and metrics: model.compile(optimizer=\'adam\', loss=\'categorical_crossentropy\')'},{id:'c',text:'Predicts outputs'},{id:'d',text:'Deletes the model'}],correctAnswer:'b',explanation:'compile() sets up training configuration before fit(). Specifies: optimizer (Adam, SGD), loss function (MSE, cross-entropy), metrics (accuracy).',incorrectFeedback:'compile() configures training settings (optimizer, loss, metrics).'},
{id:'q5',question:'What is TensorBoard?',options:[{id:'a',text:'A physical board'},{id:'b',text:'Visualization tool for monitoring training: loss curves, metrics, model graphs, embeddings'},{id:'c',text:'A database'},{id:'d',text:'A compiler'}],correctAnswer:'b',explanation:'TensorBoard visualizes: training/validation loss, accuracy curves, network architecture, weight distributions, embeddings. Essential for debugging and monitoring.',incorrectFeedback:'TensorBoard visualizes training metrics and model architecture.'},
  ],
      correctAnswer: 'a',
      explanation: 'EarlyStopping monitors a chosen metric (like val_loss) and halts training when improvement stalls, saving time and preventing overfit.',
      incorrectFeedback: 'EarlyStopping stops training when validation metrics plateau.',
    },
  ],
};

export const introPyTorch: Topic = {
  id: 'intro-pytorch',
  moduleId: 'deep-learning',
  number: 9,
  title: 'Introduction to PyTorch: Dynamic Graphs & Research Standard',
  description: 'Master PyTorch, the favorite framework of AI researchers worldwide: dynamic computation graphs (Eager Mode), Tensors, and nn.Module.',
  objectives: [
    'Understand PyTorch Tensors, GPU acceleration (.to("cuda")), and Autograd',
    'Build modular architectures by subclassing nn.Module',
    'Write clean, explicit PyTorch training loops (zero_grad, backward, step)',
  ],
  story: `In 2016, Soumith Chintala and the Meta AI Research team released PyTorch. At the time, other frameworks required compiling static computation graphs: you had to declare all operations in advance, and debugging was notoriously difficult.
  
PyTorch did something revolutionary: it implemented **Dynamic Computation Graphs** ("Define-by-Run"). A PyTorch tensor acts exactly like a NumPy array, but with two superpowers:
1. It runs seamlessly on NVIDIA GPUs with 50x acceleration.
2. It tracks every mathematical operation dynamically for instant automatic differentiation.
  
Today, over 80% of top academic research papers at CVPR, NeurIPS, and ICML, as well as models from OpenAI, Anthropic, and Hugging Face, are built in PyTorch.`,
  motivation: `**The AI Research & Generative AI Lingua Franca**: If you want to read cutting-edge AI research, fine-tune open-source LLMs (Llama 3, Mistral), or understand Diffusion models, PyTorch is the essential framework you must master.`,
  concept: {
    simple: `PyTorch is Pythonic: it feels like standard Python and NumPy, but with GPU rocket fuel.
The standard PyTorch training loop has 5 steps you will write every time:
1. ` + '`optimizer.zero_grad()`' + ` (Clear old gradients)
2. ` + '`y_pred = model(X)`' + ` (Make predictions)
3. ` + '`loss = criterion(y_pred, y)`' + ` (Grade error)
4. ` + '`loss.backward()`' + ` (Calculate gradients)
5. ` + '`optimizer.step()`' + ` (Update weights!)`,
    technical: `PyTorch centers on dynamic computation graphs constructed on the fly via C++ ATen tensor library and LibTorch backend. Memory is dynamically allocated via caching CUDA allocators. Subclassing ` + '`torch.nn.Module`' + ` provides state encapsulation and parameter registration.`,
  },
  keyTerms: [
    { term: 'Dynamic Computation Graph', simple: 'The graph of math operations is built on the fly as code runs, making debugging simple.', technical: 'Define-by-run tape-based automatic differentiation recording operations as they are executed.' },
    { term: 'nn.Module', simple: 'The master blueprint class in PyTorch used to build all models and layers.', technical: 'Base class for all neural network modules, managing parameter buffers, sub-modules, and forward hooks.' },
    { term: 'optimizer.zero_grad()', simple: 'Clearing the slate so old gradients don’t pile up on top of new ones.', technical: 'Zeroes the .grad attributes of all registered parameters to prevent additive gradient accumulation across steps.' },
  ],
  howItWorks: [
    { number: 1, title: 'Tensor Allocation', description: 'Create tensors and move to device (CPU or GPU CUDA).' },
    { number: 2, title: 'Forward Evaluation', description: 'Pass input through model instance: outputs = model(inputs).' },
    { number: 3, title: 'Autograd Backprop', description: 'loss.backward() computes partial derivatives across leaf tensors.' },
    { number: 4, title: 'Optimizer Update', description: 'optimizer.step() shifts parameters along negative gradient.' },
  ],
  applications: [
    { title: 'Generative AI & LLM Training', problem: 'Training modern Transformer models like LLaMA and Stable Diffusion.', solution: 'PyTorch native support for FlashAttention and Distributed Data Parallel (DDP) powers frontier AI research.' },
  ],
  activity: {
    type: 'mcq',
    title: 'Training Loop Bug Hunt',
    question: 'A student forgets to write "optimizer.zero_grad()" inside their PyTorch training loop. What will happen?',
    options: [
      { id: 'a', text: 'Gradients from the current batch will add onto gradients from previous batches, causing runaway gradient accumulation' },
      { id: 'b', text: 'The program will delete PyTorch' },
      { id: 'c', text: 'The model will train twice as fast' },
      { id: 'd', text: 'The GPU will turn off' },
    ],
    correctAnswer: 'a',
    explanation: 'In PyTorch, gradients accumulate by default (`grad += dL/dw`). If you forget `optimizer.zero_grad()`, gradients from past iterations compound, causing training divergence.',
    hint: 'Remember that PyTorch accumulates gradients by default.',
  },
  pythonHandsOn: {
    title: 'Complete PyTorch Training Loop from Scratch',
    description: 'Write a full 5-step PyTorch training loop and verify loss reduction.',
    packages: ['torch'],
    installCommand: 'pip install torch',
    imports: [
      { code: 'import torch', explanation: 'Core PyTorch' },
      { code: 'import torch.nn as nn', explanation: 'Neural network modules' },
      { code: 'import torch.optim as optim', explanation: 'Optimization algorithms' },
    ],
    code: [
      { code: '# Synthetic dataset: y = 2.5 * x + 1.0', explanation: 'Synthetic data' },
      { code: 'X = torch.randn(100, 1)', explanation: '100 input samples' },
      { code: 'y = 2.5 * X + 1.0 + torch.randn(100, 1) * 0.1 # With noise', explanation: 'Target labels' },
      { code: '', explanation: '' },
      { code: '# Define linear model: 1 input -> 1 output', explanation: 'Model' },
      { code: 'model = nn.Linear(1, 1)', explanation: 'Single linear layer' },
      { code: 'criterion = nn.MSELoss()', explanation: 'MSE loss' },
      { code: 'optimizer = optim.SGD(model.parameters(), lr=0.1)', explanation: 'SGD optimizer' },
      { code: '', explanation: '' },
      { code: '# The 5-Step PyTorch Training Loop:', explanation: 'Standard loop' },
      { code: 'for epoch in range(50):', explanation: 'Run 50 epochs' },
      { code: '    optimizer.zero_grad()         # 1. Zero gradients', explanation: 'Step 1' },
      { code: '    predictions = model(X)        # 2. Forward pass', explanation: 'Step 2' },
      { code: '    loss = criterion(predictions, y) # 3. Calculate loss', explanation: 'Step 3' },
      { code: '    loss.backward()               # 4. Backward pass', explanation: 'Step 4' },
      { code: '    optimizer.step()              # 5. Optimizer step', explanation: 'Step 5' },
      { code: '', explanation: '' },
      { code: 'learned_w = model.weight.item()', explanation: 'Get weight' },
      { code: 'learned_b = model.bias.item()', explanation: 'Get bias' },
      { code: 'print(f"Learned equation: y = {learned_w:.2f} * x + {learned_b:.2f} (Target: 2.50 * x + 1.00)")', explanation: 'Display result' },
    ],
    executionFlow: [
      { number: 1, title: 'Zero Grad', description: 'Clears gradient buffers.' },
      { number: 2, title: 'Forward & Loss', description: 'Generates predictions and evaluates MSE against noisy targets.' },
      { number: 3, title: 'Backward & Step', description: 'Computes analytical gradients and updates weights; converges to w ≈ 2.50, b ≈ 1.00.' },
    ],
    input: '100 synthetic data points following y = 2.5x + 1.0',
    output: 'Learned equation: y = 2.50 * x + 1.00 (Target: 2.50 * x + 1.00)',
    interpretation: 'The canonical 5-step PyTorch loop converged on the exact true physical relationship in 50 iterations.',
    colabInstructions: ['Run in Google Colab with PyTorch.'],
  },
  mcqs: [
    {
      id: 'q1',
      question: 'Which device string is used in PyTorch to move a model and tensors to an NVIDIA GPU?',
      options: [
        { id: 'a', text: '.to("cuda")' },
        { id: 'b', text: '.to("gpu_super")' },
        { id: 'c', text: '.activate_nvidia()' },
        { id: 'd', text: '.send_to_cloud()' },
      {id:'q2',question:'What is PyTorch primarily used for?',options:[{id:'a',text:'Web development'},{id:'b',text:'Research-oriented deep learning with dynamic computation graphs and Python-first design'},{id:'c',text:'Spreadsheets'},{id:'d',text:'Gaming'}],correctAnswer:'b',explanation:'PyTorch (Facebook/Meta) emphasizes: dynamic graphs (define-by-run), Pythonic API, strong research adoption. More flexible than TensorFlow\'s static graphs.',incorrectFeedback:'PyTorch is Meta\'s research-focused deep learning framework.'},
{id:'q3',question:'What is a PyTorch tensor?',options:[{id:'a',text:'A database table'},{id:'b',text:'Multi-dimensional array (like NumPy) with GPU acceleration and autodiff: torch.tensor([1,2,3])'},{id:'c',text:'A string'},{id:'d',text:'A file'}],correctAnswer:'b',explanation:'Tensors are the core data structure: similar to NumPy arrays but with GPU support and automatic differentiation. Can move to GPU: tensor.to(\'cuda\').',incorrectFeedback:'Tensors are multi-dimensional arrays with GPU support and autodiff.'},
{id:'q4',question:'What is torch.nn.Module in PyTorch?',options:[{id:'a',text:'A Python module'},{id:'b',text:'Base class for all neural network layers and models: class MyNet(nn.Module)'},{id:'c',text:'A compiler'},{id:'d',text:'A database'}],correctAnswer:'b',explanation:'nn.Module is the building block: define __init__() (layers) and forward() (computation). Example: nn.Linear, nn.Conv2d, nn.ReLU all inherit from nn.Module.',incorrectFeedback:'nn.Module is the base class for all PyTorch models and layers.'},
{id:'q5',question:'What is the difference between PyTorch and TensorFlow?',options:[{id:'a',text:'No difference'},{id:'b',text:'PyTorch uses dynamic graphs (eager execution), TensorFlow traditionally used static graphs; PyTorch more Pythonic'},{id:'c',text:'PyTorch is always better'},{id:'d',text:'TensorFlow is obsolete'}],correctAnswer:'b',explanation:'PyTorch: dynamic computation graphs (define-by-run), easier debugging. TensorFlow 2.x added eager execution. PyTorch popular in research; TensorFlow in production.',incorrectFeedback:'PyTorch emphasizes dynamic graphs and Python-first design.'},
  ],
      correctAnswer: 'a',
      explanation: 'In PyTorch, tensor.to("cuda") or model.to("cuda") transfers objects into NVIDIA GPU video memory (VRAM).',
      incorrectFeedback: '.to("cuda") is the standard PyTorch command to leverage GPU acceleration.',
    },
  ],
};

export const buildingNeuralNetwork: Topic = {
  id: 'building-neural-network',
  moduleId: 'deep-learning',
  number: 10,
  title: 'Building a Deep Neural Network: Module 3 Capstone',
  description: 'Synthesize Module 3: construct, train, validate, and evaluate a multi-layer deep neural network on handwritten digits (MNIST).',
  objectives: [
    'Build a full Multi-Layer Perceptron (MLP) for computer vision digit recognition',
    'Implement PyTorch DataLoader mini-batch pipelines',
    'Track training and validation loss curves across epochs',
    'Evaluate confusion matrix and per-class digit test accuracy',
  ],
  story: `In 1998, Yann LeCun, Corinna Cortes, and Christopher Burges released the MNIST dataset: 70,000 scanned 28x28 grayscale images of handwritten digits (0 through 9) written by US Census Bureau employees and high school students.
  
MNIST became the "Hello World" of deep learning. For decades, researchers benchmarked every major breakthrough on this dataset.
  
In this capstone, you will construct a deep neural network that ingests 784 raw pixel inputs, passes them through multiple hidden non-linear layers, and achieves over 95% accuracy in recognizing human handwriting.`,
  motivation: `**The definitive computer vision milestone**: Taking raw pixel arrays and transforming them through layered representation into accurate semantic classifications marks your graduation into practical deep learning engineering.`,
  concept: {
    simple: `We are building a brain that can read messy human handwriting:
1. Each 28x28 image has 784 pixels.
2. We flatten the pixels into a row of 784 numbers.
3. We send them through a Hidden Layer of 128 neurons (which look for lines and curves).
4. We send them through a second Hidden Layer of 64 neurons (which combine the curves into loops and strokes).
5. The 10 output neurons vote on which digit it is (0 through 9).`,
    technical: `End-to-end deep learning architecture implementing an MLP classifier: $\\mathbb{R}^{784} \\rightarrow \\mathbb{R}^{128} \\rightarrow \\mathbb{R}^{64} \\rightarrow \\mathbb{R}^{10}$ trained via mini-batch SGD with momentum on Categorical Cross-Entropy objective. Inputs are normalized to zero-mean and unit variance.`,
  },
  keyTerms: [
    { term: 'DataLoader', simple: 'A high-speed helper that shuffles data and serves it in bite-sized batches.', technical: 'PyTorch utility managing mini-batch construction, multi-process workers, and memory pinning.' },
    { term: 'Flattening', simple: 'Unrolling a 2D square image (28x28) into a single flat line of 784 numbers.', technical: 'Reshaping tensor from spatial dimensions $(B, H, W)$ to flattened feature vector $(B, H \\cdot W)$.' },
  ],
  equations: [
    {
      latex: '\\hat{y} = \\arg\\max_{c \\in \\{0,\\dots,9\\}} \\text{Softmax}\\big(f_{\\text{MLP}}(\\mathbf{x})\\big)_c',
      explanation: 'Final classification decision: selecting the digit class index c that achieves the highest Softmax probability.',
      symbols: [
        { symbol: '\\mathbf{x}', meaning: 'Flattened 784-pixel image', interpretation: 'Input vector' },
        { symbol: '\\hat{y}', meaning: 'Predicted digit (0-9)', interpretation: 'Final model decision' },
      ],
      example: {
        description: 'Image of digit "7" generates highest probability at index 7: P(7) = 0.96.',
        calculation: '\\hat{y} = \\arg\\max([0.01, 0.0, 0.0, 0.01, 0.01, 0.0, 0.01, 0.96, 0.0, 0.0]) = 7',
        result: 'Classified as Digit 7',
      },
    },
  ],
  howItWorks: [
    { number: 1, title: 'Data Loading & Flattening', description: '28x28 pixel images are unrolled into 784-element vectors.' },
    { number: 2, title: 'Forward Propagation', description: 'Vectors pass through Layer 1 (784->128, ReLU), Layer 2 (128->64, ReLU), and Output (64->10).' },
    { number: 3, title: 'Loss & Backpropagation', description: 'Cross-Entropy compares output logits against target digit labels and computes gradients.' },
    { number: 4, title: 'Validation', description: 'Accuracy is audited on unseen test images.' },
  ],
  applications: [
    { title: 'Automated Postal Mail Sorting', problem: 'Sorting millions of handwritten envelope zip codes per hour in postal centers.', solution: 'Deep MLPs and CNNs read handwritten numbers directly on conveyor belts.' },
    { title: 'Bank Check Deposit Scanning', problem: 'Reading check dollar amounts from mobile camera photos.', solution: 'Digit recognition networks parse handwriting on mobile banking applications.' },
  ],
  activity: {
    type: 'mcq',
    title: 'Image Input Flattening',
    question: 'A grayscale image has dimensions of 28 pixels high by 28 pixels wide. When flattened into a 1D vector for an MLP, how many input features does it have?',
    options: [
      { id: 'a', text: '784 (28 x 28)' },
      { id: 'b', text: '56 (28 + 28)' },
      { id: 'c', text: '10' },
      { id: 'd', text: '1,000' },
    ],
    correctAnswer: 'a',
    explanation: '28 multiplied by 28 equals 784 pixels. Unrolling the 2D grid creates a 1D feature vector of length 784.',
    hint: 'Multiply height by width.',
  },
  pythonHandsOn: {
    title: 'PyTorch Handwritten Digit Classifier Capstone',
    description: 'Build, train, and test an image classifier on digit data in under 30 lines of PyTorch code.',
    packages: ['torch', 'scikit-learn'],
    installCommand: 'pip install torch scikit-learn',
    imports: [
      { code: 'import torch', explanation: 'PyTorch' },
      { code: 'import torch.nn as nn', explanation: 'NN layers' },
      { code: 'import torch.optim as optim', explanation: 'Optimizers' },
      { code: 'from sklearn.datasets import load_digits', explanation: 'Load 8x8 handwritten digit dataset' },
      { code: 'from sklearn.model_selection import train_test_split', explanation: 'Split' },
    ],
    code: [
      { code: '# Load 1,797 handwritten digit images (8x8 pixels = 64 features)', explanation: 'Data' },
      { code: 'digits = load_digits()', explanation: 'Load digits' },
      { code: 'X_train, X_test, y_train, y_test = train_test_split(digits.data, digits.target, test_size=0.2, random_state=42)', explanation: 'Split 80/20' },
      { code: '', explanation: '' },
      { code: '# Convert to PyTorch Tensors and normalize pixels [0-16] to [0-1]:', explanation: 'Tensors' },
      { code: 'X_train_t = torch.tensor(X_train, dtype=torch.float32) / 16.0', explanation: 'Scale train' },
      { code: 'y_train_t = torch.tensor(y_train, dtype=torch.long)', explanation: 'Long targets' },
      { code: 'X_test_t = torch.tensor(X_test, dtype=torch.float32) / 16.0', explanation: 'Scale test' },
      { code: 'y_test_t = torch.tensor(y_test, dtype=torch.long)', explanation: 'Test targets' },
      { code: '', explanation: '' },
      { code: '# Define Deep MLP: 64 inputs -> 32 hidden (ReLU) -> 10 output classes', explanation: 'Model definition' },
      { code: 'model = nn.Sequential(nn.Linear(64, 32), nn.ReLU(), nn.Linear(32, 10))', explanation: 'Architecture' },
      { code: 'criterion = nn.CrossEntropyLoss()', explanation: 'Loss' },
      { code: 'optimizer = optim.Adam(model.parameters(), lr=0.05)', explanation: 'Adam optimizer' },
      { code: '', explanation: '' },
      { code: '# Train for 60 epochs:', explanation: 'Loop' },
      { code: 'for epoch in range(60):', explanation: 'Epochs' },
      { code: '    optimizer.zero_grad()', explanation: 'Zero grad' },
      { code: '    out = model(X_train_t)', explanation: 'Forward' },
      { code: '    loss = criterion(out, y_train_t)', explanation: 'Loss' },
      { code: '    loss.backward()', explanation: 'Backward' },
      { code: '    optimizer.step()', explanation: 'Step' },
      { code: '', explanation: '' },
      { code: '# Evaluate on unseen test images:', explanation: 'Evaluation' },
      { code: 'with torch.no_grad():', explanation: 'Inference mode' },
      { code: '    test_preds = torch.argmax(model(X_test_t), dim=1)', explanation: 'Argmax class' },
      { code: '    accuracy = (test_preds == y_test_t).float().mean()', explanation: 'Compute accuracy' },
      { code: 'print(f"Final Unseen Test Accuracy: {accuracy.item():.1%}")', explanation: 'Print accuracy' },
    ],
    executionFlow: [
      { number: 1, title: 'Feature Normalization', description: 'Pixel intensities are scaled into [0, 1] range.' },
      { number: 2, title: 'Network Optimization', description: 'Adam optimizer trains the 64 -> 32 -> 10 network for 60 epochs.' },
      { number: 3, title: 'Test Generalization', description: 'Evaluates on 360 held-out test images, achieving >96% accuracy.' },
    ],
    input: '1,797 handwritten digit images (64 pixels per image)',
    output: 'Final Unseen Test Accuracy: 96.4%',
    interpretation: 'The deep neural network successfully learned non-linear spatial stroke features, recognizing unseen handwriting with over 96% accuracy.',
    colabInstructions: ['Run in Google Colab to train the digit classifier.'],
  },
  mcqs: [
    {
      id: 'q1',
      question: 'In multi-class image classification with PyTorch, what does torch.argmax(logits, dim=1) do?',
      options: [
        { id: 'a', text: 'It identifies the class index (0-9) that received the highest prediction score for each image' },
        { id: 'b', text: 'It deletes the image from memory' },
        { id: 'c', text: 'It inverts black and white pixels' },
        { id: 'd', text: 'It counts how many layers are in the network' },
      {id:'q2',question:'What is the typical workflow for building a neural network?',options:[{id:'a',text:'Just write code randomly'},{id:'b',text:'Define architecture → Compile (optimizer, loss) → Train with fit() → Evaluate → Predict'},{id:'c',text:'Deploy first, train later'},{id:'d',text:'No workflow needed'}],correctAnswer:'b',explanation:'Standard pipeline: (1) Define layers (Sequential or Functional API), (2) Compile (optimizer, loss, metrics), (3) Train fit(X_train, y_train), (4) Evaluate on test set, (5) Predict on new data.',incorrectFeedback:'Neural network workflow: define → compile → train → evaluate.'},
{id:'q3',question:'What is data augmentation in deep learning?',options:[{id:'a',text:'Deleting data'},{id:'b',text:'Artificially expanding training data via transformations: flips, rotations, crops, noise'},{id:'c',text:'Compressing data'},{id:'d',text:'Buying more data'}],correctAnswer:'b',explanation:'Data augmentation prevents overfitting by creating variations: ImageDataGenerator in Keras applies random flips, rotations, zooms. Doubles/triples effective dataset size.',incorrectFeedback:'Data augmentation creates training variations to improve generalization.'},
{id:'q4',question:'What is early stopping?',options:[{id:'a',text:'Stopping training after 1 epoch'},{id:'b',text:'Stopping training when validation loss stops improving to prevent overfitting'},{id:'c',text:'Never stopping'},{id:'d',text:'Random stopping'}],correctAnswer:'b',explanation:'Early stopping monitors validation loss: if no improvement for N epochs (patience), stop training. Prevents overfitting. Keras callback: EarlyStopping(monitor=\'val_loss\', patience=10).',incorrectFeedback:'Early stopping prevents overfitting by monitoring validation metrics.'},
{id:'q5',question:'What is transfer learning?',options:[{id:'a',text:'Transferring data between computers'},{id:'b',text:'Using pre-trained models (e.g., ImageNet) as starting point for new tasks, fine-tuning on new data'},{id:'c',text:'Copying code'},{id:'d',text:'Buying trained models'}],correctAnswer:'b',explanation:'Transfer learning: load pre-trained network (VGG, ResNet), freeze early layers (generic features), fine-tune later layers on your dataset. Saves time and data requirements.',incorrectFeedback:'Transfer learning reuses pre-trained models for new tasks.'},
  ],
      correctAnswer: 'a',
      explanation: 'torch.argmax(tensor, dim=1) extracts the index corresponding to the maximum activation value across classes, returning the model’s predicted class label.',
      incorrectFeedback: 'Argmax extracts the index with the maximum score.',
    },
  ],
};

export const module3Topics: Topic[] = [
  whyNeuralNetworks,
  artificialNeuron,
  activationFunctions,
  neuralNetworkArchitecture,
  forwardPropagation,
  lossFunction,
  gradientDescent,
  introTensorFlow,
  introPyTorch,
  buildingNeuralNetwork,
];
