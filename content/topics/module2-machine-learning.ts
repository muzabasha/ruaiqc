import { Topic } from '@/lib/types';

export const whatIsML: Topic = {
  id: 'what-is-ml',
  moduleId: 'machine-learning',
  number: 1,
  title: 'What is Machine Learning?',
  description: 'Delve into the core mechanics of machine learning: how statistical algorithms turn raw data into actionable predictive knowledge.',
  objectives: [
    'Define Machine Learning from statistical and algorithmic viewpoints',
    'Understand how mathematical functions are approximated from observations',
    'Map out the end-to-end Machine Learning lifecycle',
  ],
  story: `When Johannes Kepler analyzed the planetary observations recorded by Tycho Brahe in the early 1600s, he didn't have access to modern physics. He had massive tables of numbers: dates, angles, and celestial coordinates.
  
For years, Kepler analyzed those numbers until he discovered the hidden mathematical relationship: planets travel in elliptical orbits with the Sun at one focus ($P^2 = a^3$).
  
Machine learning does on a colossal, automated scale what Kepler did by hand: it sifts through millions of numbers, detects underlying geometric regularities, and expresses them as predictive mathematical equations.`,
  motivation: `**Why Machine Learning is essential knowledge:**

1. **Automating knowledge discovery**: Human experts cannot inspect millions of hospital patient records or web clicks; ML models uncover patterns instantly.
2. **Predictive advantage**: From anticipating equipment failure in factories to forecasting customer demand, ML shifts organizations from reactive to proactive.`,
  concept: {
    simple: `Machine Learning is a way to make computers smart without giving them step-by-step instructions. Instead, we show them hundreds or thousands of examples. The computer finds the common patterns on its own and uses those patterns to make smart guesses on new examples it has never seen before.`,
    technical: `Machine Learning is an inductive functional approximation paradigm. Given an unknown underlying data-generating distribution $P(X, Y)$, an ML algorithm searches a parameterized hypothesis class $\\mathcal{H} = \\{f_\\theta : \\theta \\in \\Theta\\}$ to identify optimal parameters $\\theta^*$ minimizing expected risk $\\mathbb{E}_{(x,y)\\sim P}[\\mathcal{L}(f_\\theta(x), y)]$.`,
  },
  keyTerms: [
    { term: 'Hypothesis Class', simple: 'The family of possible formulas the computer is allowed to test.', technical: 'The restricted functional space $\\mathcal{H}$ of candidate models searched during optimization.' },
    { term: 'Loss Function', simple: 'A score that measures how wrong the computer’s guess is.', technical: 'A mapping $\\mathcal{L}: \\hat{\\mathcal{Y}} \\times \\mathcal{Y} \\rightarrow \\mathbb{R}^+$ penalizing prediction discrepancy.' },
    { term: 'Optimization', simple: 'Tuning the dials to make the mistakes as small as possible.', technical: 'Algorithmic minimization of empirical risk via convex solvers, gradient descent, or heuristics.' },
  ],
  equations: [
    {
      latex: '\\theta^* = \\arg\\min_{\\theta} \\frac{1}{N} \\sum_{i=1}^N \\mathcal{L}\\big(f_\\theta(x_i), y_i\\big)',
      explanation: 'Empirical Risk Minimization (ERM): Finding the exact parameter values theta* that minimize average loss across all training samples.',
      symbols: [
        { symbol: '\\theta^*', meaning: 'Optimal parameters', interpretation: 'The best weights for our model' },
        { symbol: '\\mathcal{L}', meaning: 'Loss function', interpretation: 'Penalty for error' },
        { symbol: 'N', meaning: 'Number of training samples', interpretation: 'Size of dataset' },
      ],
      example: {
        description: 'Finding optimal line slope m for points (1, 2) and (2, 4).',
        calculation: 'f_m(x) = m \\cdot x \\rightarrow \\mathcal{L} = (2 - m)^2 + (4 - 2m)^2 = 0 \\implies m^* = 2.0',
        result: 'Optimal parameter is m* = 2.0 (zero loss)',
      },
    },
  ],
  howItWorks: [
    { number: 1, title: 'Formulate Problem', description: 'Define target label, evaluation metric, and input features.' },
    { number: 2, title: 'Data Ingestion & Cleaning', description: 'Handle missing values, encode text/categories, and normalize scales.' },
    { number: 3, title: 'Model Selection & Fitting', description: 'Train candidate algorithms on training split.' },
    { number: 4, title: 'Validation & Deployment', description: 'Evaluate on independent test set and deploy via microservice API.' },
  ],
  applications: [
    { title: 'Credit Risk Scoring', problem: 'Assessing default probability for mortgage applicants.', solution: 'Logistic regression and gradient boosting evaluate income, debt, and credit history.' },
    { title: 'Predictive Machinery Maintenance', problem: 'Factory machines breaking down unexpectedly causing factory downtime.', solution: 'Vibration and temperature sensors feed ML models that flag wear-and-tear days before failure.' },
  ],
  activity: {
    type: 'mcq',
    title: 'Core Concept Check',
    question: 'In Machine Learning, what is the "Loss Function" designed to do?',
    options: [
      { id: 'a', text: 'Measure the amount of memory consumed by the computer' },
      { id: 'b', text: 'Quantify the error between the model’s prediction and the true answer' },
      { id: 'c', text: 'Delete corrupted files from the hard drive' },
      { id: 'd', text: 'Increase the speed of internet downloads' },
    ],
    correctAnswer: 'b',
    explanation: 'The loss function mathematically quantifies prediction error. Training consists of iteratively tweaking model weights to drive this loss as close to zero as possible.',
    hint: 'Think about how the computer knows whether its guess was good or bad.',
  },
  pythonHandsOn: {
    title: 'A Minimal Machine Learning Loop from Scratch',
    description: 'Implement gradient descent to learn a relationship without any ML libraries.',
    packages: ['numpy'],
    installCommand: 'pip install numpy',
    imports: [{ code: 'import numpy as np', explanation: 'NumPy for vector operations' }],
    code: [
      { code: '# Ground truth rule: y = 3 * x + 2', explanation: 'Target rule' },
      { code: 'X = np.array([1.0, 2.0, 3.0, 4.0, 5.0])', explanation: 'Inputs' },
      { code: 'y = np.array([5.0, 8.0, 11.0, 14.0, 17.0])', explanation: 'Targets' },
      { code: '', explanation: '' },
      { code: 'w = 0.0 # Initialize weight', explanation: 'Initial weight' },
      { code: 'b = 0.0 # Initialize bias', explanation: 'Initial bias' },
      { code: 'lr = 0.01 # Learning rate', explanation: 'Step size' },
      { code: '', explanation: '' },
      { code: 'for epoch in range(1000):', explanation: 'Run 1000 training iterations' },
      { code: '    y_pred = w * X + b', explanation: 'Model forward pass' },
      { code: '    error = y_pred - y', explanation: 'Calculate error' },
      { code: '    dw = (2/len(X)) * np.sum(error * X) # Gradient w.r.t w', explanation: 'Compute gradient dw' },
      { code: '    db = (2/len(X)) * np.sum(error)     # Gradient w.r.t b', explanation: 'Compute gradient db' },
      { code: '    w -= lr * dw # Update weight', explanation: 'Step down gradient' },
      { code: '    b -= lr * db # Update bias', explanation: 'Step down gradient' },
      { code: '', explanation: '' },
      { code: 'print(f"Learned equation: y = {w:.2f} * x + {b:.2f}")', explanation: 'Output learned parameters' },
      { code: 'print(f"Prediction for x=10: {w * 10 + b:.2f} (True answer: 32.0)")', explanation: 'Test extrapolation' },
    ],
    executionFlow: [
      { number: 1, title: 'Forward Pass', description: 'Computes current predictions using initial parameters (w=0, b=0).' },
      { number: 2, title: 'Gradient Calculation', description: 'Calculates partial derivatives showing which direction reduces error.' },
      { number: 3, title: 'Parameter Update', description: 'Updates w and b; within 1000 iterations converges to w=3.00, b=2.00.' },
    ],
    input: 'Points following y = 3x + 2',
    output: 'Learned equation: y = 3.00 * x + 2.00\nPrediction for x=10: 32.00 (True answer: 32.0)',
    interpretation: 'Through pure gradient feedback, the computer discovered the exact linear coefficients without human intervention.',
    colabInstructions: ['Run in Google Colab notebook to see gradient descent in action.'],
  },
  mcqs: [
    {
      id: 'q1',
      question: 'Which of the following describes the purpose of Empirical Risk Minimization?',
      options: [
        { id: 'a', text: 'Minimizing the computational electricity used by servers' },
        { id: 'b', text: 'Finding model parameters that minimize average loss over the training dataset' },
        { id: 'c', text: 'Guaranteeing 100% test accuracy on every possible input' },
        { id: 'd', text: 'Encrypting private personal data' },
      ],
      correctAnswer: 'b',
      explanation: 'Empirical Risk Minimization is the foundational training objective that minimizes the empirical error on observed training samples.',
      incorrectFeedback: 'ERM focuses on minimizing average training loss via parameter optimization.',
    },
          {
      id: 'q2',
      question: 'What is the primary difference between supervised and unsupervised learning?',
      options: [
        { id: 'a', text: 'Supervised learning uses labeled training data; unsupervised learning finds patterns in unlabeled data' },
        { id: 'b', text: 'Supervised learning is faster' },
        { id: 'c', text: 'Unsupervised learning always performs better' },
        { id: 'd', text: 'There is no difference' },
      ],
      correctAnswer: 'a',
      explanation: 'Supervised learning trains on labeled data (input-output pairs) like email→spam/not-spam. Unsupervised learning discovers hidden patterns in unlabeled data, such as customer segmentation clustering.',
      incorrectFeedback: 'The key distinction is labeled vs unlabeled training data.',
    },
    {
      id: 'q3',
      question: 'Which of the following is an example of reinforcement learning?',
      options: [
        { id: 'a', text: 'Classifying emails as spam or not spam' },
        { id: 'b', text: 'Training an agent to play chess by rewarding wins and penalizing losses' },
        { id: 'c', text: 'Clustering customers by purchase behavior' },
        { id: 'd', text: 'Predicting house prices from historical data' },
      ],
      correctAnswer: 'b',
      explanation: 'Reinforcement learning trains agents through trial-and-error with rewards and penalties. AlphaGo learning chess and robots learning to walk are classic examples. Options A and D are supervised; C is unsupervised.',
      incorrectFeedback: 'Reinforcement learning learns through rewards/penalties from interaction with an environment.',
    },
    {
      id: 'q4',
      question: 'What does it mean for a machine learning model to "generalize"?',
      options: [
        { id: 'a', text: 'Memorize the training data perfectly' },
        { id: 'b', text: 'Perform well on new, unseen data similar to the training data' },
        { id: 'c', text: 'Work on all possible datasets' },
        { id: 'd', text: 'Run faster on larger datasets' },
      ],
      correctAnswer: 'b',
      explanation: 'Generalization means the model learns underlying patterns (not memorization) and performs well on new test data. Poor generalization = overfitting (memorizing training noise).',
      incorrectFeedback: 'Generalization is about learning patterns that transfer to new data, not memorization.',
    },
    {
      id: 'q5',
      question: 'Who is considered the "father of machine learning" for his work on the Arthur Samuel checkers program (1959)?',
      options: [
        { id: 'a', text: 'Alan Turing' },
        { id: 'b', text: 'Arthur Samuel' },
        { id: 'c', text: 'Geoffrey Hinton' },
        { id: 'd', text: 'Yann LeCun' },
      ],
      correctAnswer: 'b',
      explanation: 'Arthur Samuel coined the term "machine learning" in 1959 while creating a checkers-playing program that improved through self-play—one of the first learning algorithms.',
      incorrectFeedback: 'Arthur Samuel pioneered machine learning with his 1959 checkers program.',
    },
  ],
};

export const dataAndFeatures: Topic = {
  id: 'data-and-features',
  moduleId: 'machine-learning',
  number: 2,
  title: 'Data and Features: Representation & Engineering',
  description: 'Understand feature engineering, numerical and categorical variables, scaling, normalization, and handling missing data.',
  objectives: [
    'Distinguish between numerical, categorical, and ordinal data types',
    'Apply One-Hot Encoding and Label Encoding for categorical data',
    'Understand the critical importance of feature scaling (Standardization vs MinMax)',
    'Formulate strategies for handling missing values and outliers',
  ],
  story: `In the early days of automated real estate valuation, an algorithm was trained on house sales in California. The dataset had features like "Square Footage" and "Zip Code".
  
The model treated Zip Code as a plain number: Beverly Hills (90210) was treated as "larger" than Miami (33101), leading the model to believe that multiplying zip codes by a weight had geometric meaning!
  
The predictions were disastrous. Numbers in computer science aren't all the same: some are continuous quantities, some are categories, and some are arbitrary ID codes. The success of any machine learning project hinges first and foremost on proper feature representation.`,
  motivation: `**"Garbage In, Garbage Out"**: The greatest algorithm on earth will fail if the features fed into it are improperly scaled, uncleaned, or incorrectly encoded. Industry data scientists spend up to 80% of their time on data preparation and feature engineering.`,
  concept: {
    simple: `Data is the food that machine learning models eat. But computers only understand clean numbers. If you give a computer words like "Red", "Green", or "Blue", you must convert them into numbers using smart techniques (like One-Hot Encoding). If one feature is measured in thousands (like salary) and another in single digits (like age), you must scale them so the model doesn't ignore age.`,
    technical: `Feature engineering transforms raw observations $\\mathbf{x}_{raw} \\in \\mathcal{X}$ into structured feature vectors $\\mathbf{x} \\in \\mathbb{R}^d$. This entails categorical embedding/one-hot encoding $\\phi_{one-hot}: \\mathcal{C} \\rightarrow \\{0, 1\\}^{|\\mathcal{C}|}$, z-score standardization $z = \\frac{x - \\mu}{\\sigma}$, and handling imputation via probabilistic or median strategies.`,
  },
  keyTerms: [
    { term: 'One-Hot Encoding', simple: 'Turning categories into separate columns of 1s and 0s.', technical: 'Mapping a categorical variable with K states into a K-dimensional binary indicator vector.' },
    { term: 'Standardization (Z-score)', simple: 'Centering numbers so their average is 0 and spread is 1.', technical: 'Affine transformation $z = \\frac{x - \\mu}{\\sigma}$ ensuring zero mean and unit variance.' },
    { term: 'Imputation', simple: 'Filling in missing holes in a dataset with smart estimates (like the average).', technical: 'Replacing missing data with substituted values derived from mean, median, KNN, or MICE estimators.' },
  ],
  equations: [
    {
      latex: 'z = \\frac{x - \\mu}{\\sigma}, \\quad x_{norm} = \\frac{x - x_{min}}{x_{max} - x_{min}}',
      explanation: 'Z-score Standardization (left) and Min-Max Normalization (right): two standard methods to bring features to comparable numerical ranges.',
      symbols: [
        { symbol: '\\mu', meaning: 'Mean', interpretation: 'Average value of feature' },
        { symbol: '\\sigma', meaning: 'Standard Deviation', interpretation: 'Spread of values' },
        { symbol: 'x_{min}, x_{max}', meaning: 'Extreme bounds', interpretation: 'Minimum and maximum values in dataset' },
      ],
      example: {
        description: 'Standardizing an income of $80,000 where mean is $50,000 and standard deviation is $15,000.',
        calculation: 'z = \\frac{80000 - 50000}{15000} = \\frac{30000}{15000} = 2.0',
        result: 'Income is 2.0 standard deviations above the mean',
      },
    },
  ],
  howItWorks: [
    { number: 1, title: 'Data Profiling', description: 'Inspect distributions, missing value percentages, and data types.' },
    { number: 2, title: 'Encoding', description: 'Convert categorical strings to numerical dummy vectors via one-hot encoding.' },
    { number: 3, title: 'Scaling', description: 'Apply StandardScaler or MinMaxScaler to prevent high-magnitude features from dominating gradients.' },
  ],
  applications: [
    { title: 'Credit Card Application Processing', problem: 'Dataset contains mixed text (Employment: "Engineer", "Nurse") and numbers (Income: $85,000, Age: 34).', solution: 'Pipeline one-hot encodes job titles and standardizes income/age for input into neural networks.' },
    { title: 'Customer Churn Analysis', problem: 'Raw data contains missing customer tenure values.', solution: 'Median imputation fills missing fields without distorting underlying distributions.' },
  ],
  activity: {
    type: 'mcq',
    title: 'Encoding Strategy',
    question: 'A column has values: ["Low", "Medium", "High"]. What is the most appropriate encoding?',
    options: [
      { id: 'a', text: 'Ordinal Encoding (0, 1, 2) because there is an inherent natural order' },
      { id: 'b', text: 'Random number assignment' },
      { id: 'c', text: 'Delete the column entirely' },
      { id: 'd', text: 'Convert all letters to uppercase' },
    ],
    correctAnswer: 'a',
    explanation: 'Ordinal encoding (Low=0, Medium=1, High=2) preserves the natural mathematical order inherent in the categorical rankings.',
    hint: 'Does "Low, Medium, High" have a natural progression or ranking?',
  },
  learningResource: {
    title: 'Lesson 4: Python, Data Preparation and Classical ML Foundations',
    pdfUrl: '/presentations/Lesson4.pdf',
    description: 'Data preprocessing, handling missing values, one-hot encoding, and standard scaling.',
    lessonNumber: 4,
    pages: 17,
    author: 'Dr. Syed Muzamil Basha',
  },
  pythonHandsOn: {
    title: 'Data Preprocessing: Handling Missing Values, One-Hot Encoding & Scaling',
    description: 'Preprocess raw tabular data with missing values, categorical features, and numerical scaling using Pandas and Scikit-Learn.',
    packages: ['pandas', 'scikit-learn', 'numpy'],
    installCommand: 'pip install pandas scikit-learn numpy',
    imports: [
      { code: 'import pandas as pd', explanation: 'Pandas for tabular data processing' },
      { code: 'from sklearn.preprocessing import OneHotEncoder, StandardScaler', explanation: 'Scikit-Learn preprocessing transformers' },
    ],
    code: [
      { code: '# Sample dataset with missing values and categorical data', explanation: 'Sample data' },
      { code: "data = {'Age': [25, 30, 35, 40, None], 'Salary': [50000, 60000, 70000, None, 90000], 'Gender': ['Male', 'Female', 'Male', 'Female', 'Male']}", explanation: 'Raw dictionary' },
      { code: 'df = pd.DataFrame(data)', explanation: 'Create DataFrame' },
      { code: '', explanation: '' },
      { code: '# Handling missing values (fill with column mean)', explanation: 'Mean imputation' },
      { code: 'df["Age"] = df["Age"].fillna(df["Age"].mean())', explanation: 'Fill missing Age' },
      { code: 'df["Salary"] = df["Salary"].fillna(df["Salary"].mean())', explanation: 'Fill missing Salary' },
      { code: '', explanation: '' },
      { code: '# Encoding categorical variable', explanation: 'One-hot encoding' },
      { code: 'encoder = OneHotEncoder(sparse_output=False)', explanation: 'Instantiate dense OneHotEncoder' },
      { code: "gender_encoded = encoder.fit_transform(df[['Gender']])", explanation: 'Fit & transform gender' },
      { code: "df_gender = pd.DataFrame(gender_encoded, columns=['Male', 'Female'])", explanation: 'Categorical DataFrame' },
      { code: '', explanation: '' },
      { code: '# Scaling numerical features with StandardScaler', explanation: 'Standardization' },
      { code: 'scaler = StandardScaler()', explanation: 'Instantiate StandardScaler' },
      { code: "df[['Age', 'Salary']] = scaler.fit_transform(df[['Age', 'Salary']])", explanation: 'Scale age and salary' },
      { code: '', explanation: '' },
      { code: '# Concatenating final processed data', explanation: 'Merge features' },
      { code: "df_final = pd.concat([df[['Age', 'Salary']], df_gender], axis=1)", explanation: 'Combine numerical + encoded features' },
      { code: 'print("Preprocessed Data:\\n", df_final)', explanation: 'Display preprocessed DataFrame' },
    ],
    executionFlow: [
      { number: 1, title: 'Imputation', description: 'Missing values in Age and Salary are filled with their respective column means.' },
      { number: 2, title: 'Categorical Encoding', description: 'Gender is one-hot encoded into binary columns [Male, Female].' },
      { number: 3, title: 'Feature Scaling', description: 'Age and Salary are standardized to zero mean and unit variance.' },
    ],
    input: 'Tabular dataset with missing numbers (None) and categorical Gender strings',
    output: 'Preprocessed Data:\n        Age    Salary  Male  Female\n0 -1.632993 -1.341641   0.0     1.0\n1 -0.544331 -0.447214   1.0     0.0\n2  0.544331  0.447214   0.0     1.0\n3  1.632993  0.000000   1.0     0.0\n4  0.000000  1.341641   0.0     1.0',
    interpretation: 'The data is fully cleaned, imputed, encoded, and scaled without information loss, ready for machine learning model training.',
    colabInstructions: ['Run in Google Colab to test data preprocessing.'],
  },
  mcqs: [
    {
      id: 'q1',
      question: 'Why is feature scaling essential for distance-based algorithms like KNN and gradient descent?',
      options: [
        { id: 'a', text: 'Features with large magnitudes (e.g., Salary) will unfairly dominate Euclidean distance or cause erratic gradient oscillations' },
        { id: 'b', text: 'Computers cannot calculate numbers larger than 100' },
        { id: 'c', text: 'It guarantees that accuracy reaches 100%' },
        { id: 'd', text: 'It automatically fixes missing data' },
      ],
      correctAnswer: 'a',
      explanation: 'Distance calculations like $(x_1 - x_2)^2$ will be completely dominated by large variables (e.g. $50,000 difference in salary vs 2 years difference in age) unless normalized.',
      incorrectFeedback: 'Magnitude differences distort geometric distance calculations and gradient updates.',
    },
          {
      id: 'q2',
      question: 'What is feature engineering in machine learning?',
      options: [
        { id: 'a', text: 'Buying more data' },
        { id: 'b', text: 'Transforming raw data into meaningful features that improve model performance' },
        { id: 'c', text: 'Removing all data' },
        { id: 'd', text: 'Running models faster' },
      ],
      correctAnswer: 'b',
      explanation: 'Feature engineering creates informative features from raw data. Example: extracting "day of week" from timestamps or creating polynomial features x² from x. Good features dramatically improve accuracy.',
      incorrectFeedback: 'Feature engineering designs informative input representations from raw data.',
    },
    {
      id: 'q3',
      question: 'Why is feature scaling (normalization) important for many ML algorithms?',
      options: [
        { id: 'a', text: 'It makes the code run faster' },
        { id: 'b', text: 'Algorithms like gradient descent and KNN are sensitive to feature magnitude; unscaled features dominate the model' },
        { id: 'c', text: 'It deletes unnecessary data' },
        { id: 'd', text: 'It is not important' },
      ],
      correctAnswer: 'b',
      explanation: 'Features with large ranges (e.g., income: 0-100k) dominate over small ranges (age: 0-100). Scaling (Min-Max or Z-score normalization) ensures equal influence. Critical for KNN, SVM, neural networks, gradient descent.',
      incorrectFeedback: 'Feature scaling prevents large-magnitude features from dominating distance and gradient calculations.',
    },
    {
      id: 'q4',
      question: 'What is the "curse of dimensionality"?',
      options: [
        { id: 'a', text: 'Too many features make data sparse and distances meaningless in high dimensions' },
        { id: 'b', text: 'Having too few features' },
        { id: 'c', text: 'Using the wrong programming language' },
        { id: 'd', text: 'Models run too slowly' },
      ],
      correctAnswer: 'a',
      explanation: 'In high dimensions, data points become sparse and equidistant (distances lose meaning). This degrades KNN, clustering, and requires exponentially more data. Dimensionality reduction (PCA, t-SNE) helps.',
      incorrectFeedback: 'Curse of dimensionality: high-dimensional spaces make data sparse and distances uninformative.',
    },
    {
      id: 'q5',
      question: 'What is the typical train-test split ratio in machine learning?',
      options: [
        { id: 'a', text: '50%-50%' },
        { id: 'b', text: '70%-30% or 80%-20% (train-test)' },
        { id: 'c', text: '10%-90%' },
        { id: 'd', text: '100%-0% (use all data for training)' },
      ],
      correctAnswer: 'b',
      explanation: 'Common splits: 70-30 or 80-20 (train-test). Use larger training sets for better learning; reserve sufficient test data for reliable evaluation. Never test on training data (inflates performance).',
      incorrectFeedback: 'Typical split: 70-80% training, 20-30% testing.',
    },
  ],
};

export const trainingAndTesting: Topic = {
  id: 'training-and-testing',
  moduleId: 'machine-learning',
  number: 3,
  title: 'Training and Testing: The Golden Rule of ML',
  description: 'Learn why evaluating models on unseen data is essential, and master train-test splits, validation sets, and K-fold cross-validation.',
  objectives: [
    'Understand why evaluating on training data leads to deceptive over-optimism',
    'Implement Train-Validation-Test splits correctly',
    'Master K-Fold Cross-Validation for robust performance estimation',
    'Avoid data leakage pitfalls in preprocessing pipelines',
  ],
  story: `Imagine a high school teacher who prepares students for a state physics exam.
  
The teacher gives the students 10 practice questions with their exact answers and lets them practice for weeks. On the day of the final exam, the teacher gives them the exact same 10 practice questions! The students score 100%.
  
Did the students actually learn physics? Or did they just memorize the 10 questions?
  
If you give them a new exam with fresh questions, they might fail completely. In machine learning, this is the cardinal rule: never test a model on the questions it studied during training. You must evaluate on completely unseen test data.`,
  motivation: `**The Golden Rule of ML**: A model that scores 99% on training data but 50% on real-world data is useless. Solid train/test partitioning and cross-validation are your only defense against deploying failed models.`,
  concept: {
    simple: `Always split your data like school exams:
1. **Training Set (70-80%)**: The textbook and practice homework the model studies.
2. **Validation Set (10-15%)**: The practice quiz to tune settings and pick the best model.
3. **Test Set (10-15%)**: The locked final exam used once at the very end to prove the model really works.`,
    technical: `To estimate the generalization error $\\mathcal{R}_{true}(f) = \\mathbb{E}_{(\\mathbf{x},y)\\sim P}[\\mathcal{L}(f(\\mathbf{x}), y)]$, the dataset $\\mathcal{D}$ must be partitioned into disjoint subsets $\\mathcal{D}_{train} \\cap \\mathcal{D}_{test} = \\emptyset$. K-fold cross-validation partitions $\\mathcal{D}$ into $K$ equal folds, iteratively training on $K-1$ and evaluating on the held-out fold to yield an unbiased estimator with reduced variance.`,
  },
  keyTerms: [
    { term: 'Generalization', simple: 'How well the model performs on brand new data it has never seen before.', technical: 'The ability of an inductive model to accurately predict labels on unseen instances drawn from the same underlying distribution.' },
    { term: 'K-Fold Cross-Validation', simple: 'Splitting data into K pieces and taking turns testing on each piece so every point gets tested.', technical: 'Resampling procedure where data is split into K equal folds; K models are trained, each leaving out one fold for validation, and scores are averaged.' },
    { term: 'Data Leakage', simple: 'Accidentally letting test set secrets sneak into the training set.', technical: 'Spurious contamination of training data with information from the validation/test partition (e.g. fitting a scaler on the whole dataset before splitting).' },
  ],
  equations: [
    {
      latex: 'CV_{(K)} = \\frac{1}{K} \\sum_{k=1}^K \\text{MSE}_k',
      explanation: 'K-Fold Cross-Validation Error: the average validation error across all K held-out folds, providing a reliable estimate of real-world performance.',
      symbols: [
        { symbol: 'CV_{(K)}', meaning: 'Cross-validation error', interpretation: 'Estimated real-world error' },
        { symbol: 'K', meaning: 'Number of folds', interpretation: 'Typically 5 or 10' },
        { symbol: '\\text{MSE}_k', meaning: 'Error on fold k', interpretation: 'Performance metric on fold k' },
      ],
      example: {
        description: '5-fold CV with fold accuracies: 85%, 88%, 86%, 84%, 87%.',
        calculation: '\\text{Average} = \\frac{85 + 88 + 86 + 84 + 87}{5} = \\frac{430}{5} = 86.0\\%',
        result: 'Expected generalization accuracy: 86.0%',
      },
    },
  ],
  howItWorks: [
    { number: 1, title: 'Random Partitioning', description: 'Split dataset into 80% train and 20% test using stratified sampling.' },
    { number: 2, title: 'Fit Preprocessor on Train Only', description: 'Calculate scalers and encoders using training data ONLY to prevent leakage.' },
    { number: 3, title: 'Cross-Validation Tuning', description: 'Tune hyperparameters using K-fold splits within the training partition.' },
    { number: 4, title: 'Final Single Evaluation', description: 'Evaluate final winning model once on the untouched test partition.' },
  ],
  applications: [
    { title: 'Clinical Trial Patient Stratification', problem: 'Evaluating diagnostic models on small patient cohorts.', solution: 'Stratified 5-fold cross-validation ensures balanced representation of rare disease subtypes across folds.' },
    { title: 'Stock Trading Model Validation', problem: 'Standard random splits leak future financial prices into past training data.', solution: 'Time-Series Split enforces strictly chronological forward validation without lookahead bias.' },
  ],
  activity: {
    type: 'mcq',
    title: 'Spot the Data Leakage Bug',
    question: 'A data scientist normalizes the entire dataset using StandardScaler() BEFORE running train_test_split. What error was committed?',
    options: [
      { id: 'a', text: 'Syntax error that stops the code from compiling' },
      { id: 'b', text: 'Data Leakage: the mean and variance of the test set leaked into the training set' },
      { id: 'c', text: 'Underfitting' },
      { id: 'd', text: 'Zero error, this is best practice' },
    ],
    correctAnswer: 'b',
    explanation: 'Computing the mean and variance across the entire dataset before splitting leaks information about the test distribution into the training pipeline, leading to overly optimistic test metrics.',
    hint: 'Should the model know anything about the test set during the scaling calculation?',
  },
  pythonHandsOn: {
    title: 'Robust Train-Test Splitting & Cross-Validation',
    description: 'Use scikit-learn to perform proper stratified splits and 5-fold cross-validation.',
    packages: ['scikit-learn'],
    installCommand: 'pip install scikit-learn',
    imports: [
      { code: 'from sklearn.datasets import load_iris', explanation: 'Load benchmark dataset' },
      { code: 'from sklearn.model_selection import train_test_split, cross_val_score', explanation: 'Split & CV utilities' },
      { code: 'from sklearn.ensemble import RandomForestClassifier', explanation: 'Random forest model' },
    ],
    code: [
      { code: 'X, y = load_iris(return_X_y=True)', explanation: 'Load 150 iris flower samples' },
      { code: '', explanation: '' },
      { code: '# 1. Strict Train / Test Split (80% Train, 20% Test)', explanation: 'Holdout split' },
      { code: 'X_train, X_test, y_train, y_test = train_test_split(', explanation: 'Partition data' },
      { code: '    X, y, test_size=0.20, random_state=42, stratify=y', explanation: 'Maintain class ratios' },
      { code: ')', explanation: 'Finish split' },
      { code: '', explanation: '' },
      { code: 'clf = RandomForestClassifier(n_estimators=50, random_state=42)', explanation: 'Create model' },
      { code: '', explanation: '' },
      { code: '# 2. 5-Fold Cross-Validation on Training Data:', explanation: 'Cross-validation' },
      { code: 'cv_scores = cross_val_score(clf, X_train, y_train, cv=5)', explanation: '5 validation rounds' },
      { code: 'print("5-Fold CV Accuracy Scores:", cv_scores.round(3))', explanation: 'Print fold scores' },
      { code: 'print(f"Mean CV Accuracy: {cv_scores.mean():.3f} +/- {cv_scores.std():.3f}")', explanation: 'Mean & variance' },
      { code: '', explanation: '' },
      { code: '# 3. Final Test Evaluation (Once only!):', explanation: 'Final verification' },
      { code: 'clf.fit(X_train, y_train)', explanation: 'Fit on full train set' },
      { code: 'test_acc = clf.score(X_test, y_test)', explanation: 'Score on held-out test' },
      { code: 'print(f"Final Unseen Test Accuracy: {test_acc:.3f}")', explanation: 'Print final score' },
    ],
    executionFlow: [
      { number: 1, title: 'Partitioning', description: 'Data is separated into 120 training samples and 30 untouched test samples.' },
      { number: 2, title: 'Cross-Validation', description: 'Model is trained and evaluated across 5 internal folds, averaging 95.8% accuracy.' },
      { number: 3, title: 'Generalization Test', description: 'Evaluated once on test data, confirming 96.7% generalization without memorization.' },
    ],
    input: '150 Iris flower samples with 4 features each',
    output: '5-Fold CV Accuracy Scores: [0.958 0.958 0.917 1.    0.958]\nMean CV Accuracy: 0.958 +/- 0.026\nFinal Unseen Test Accuracy: 0.967',
    interpretation: 'Consistent scores between cross-validation (95.8%) and unseen test accuracy (96.7%) confirm genuine generalization.',
    colabInstructions: ['Run in Google Colab.'],
  },
  mcqs: [
    {
      id: 'q1',
      question: 'What is the primary purpose of a separate validation set, distinct from both the training set and the test set?',
      options: [
        { id: 'a', text: 'To tune model hyperparameters and select the best algorithm without biasing the final test set' },
        { id: 'b', text: 'To add more training data to the model' },
        { id: 'c', text: 'To compress the model weights into zip files' },
        { id: 'd', text: 'To check if the computer has enough RAM' },
      ],
      correctAnswer: 'a',
      explanation: 'The validation set allows tuning settings (like tree depth or learning rate) without "peeking" at the final test set, which must remain pristine.',
      incorrectFeedback: 'Validation data is used for model selection and hyperparameter tuning.',
    },
          {
      id: 'q2',
      question: 'What is k-fold cross-validation used for?',
      options: [
        { id: 'a', text: 'Deleting bad data' },
        { id: 'b', text: 'Evaluating model performance more robustly by training/testing on k different data splits' },
        { id: 'c', text: 'Speeding up training' },
        { id: 'd', text: 'Collecting more data' },
      ],
      correctAnswer: 'b',
      explanation: 'K-fold CV splits data into k parts, trains on k-1 folds, tests on 1 fold, repeats k times. Average performance gives robust estimate. Reduces variance from single train-test split.',
      incorrectFeedback: 'Cross-validation evaluates models across multiple train-test splits for robust performance estimates.',
    },
    {
      id: 'q3',
      question: 'Why should you NEVER evaluate a model on the training data?',
      options: [
        { id: 'a', text: 'It takes too long' },
        { id: 'b', text: 'Training accuracy is optimistically biased; models memorize training data and overestimate real-world performance' },
        { id: 'c', text: 'It is illegal' },
        { id: 'd', text: 'Training data is corrupted' },
      ],
      correctAnswer: 'b',
      explanation: 'Models can memorize training data (100% accuracy) but fail on new data. Test set performance measures generalization—the true measure of model quality.',
      incorrectFeedback: 'Test on held-out data to measure generalization, not training set memorization.',
    },
    {
      id: 'q4',
      question: 'What is a validation set used for?',
      options: [
        { id: 'a', text: 'Final evaluation after deployment' },
        { id: 'b', text: 'Tuning hyperparameters during model development without touching the test set' },
        { id: 'c', text: 'Training the model' },
        { id: 'd', text: 'Throwing away bad data' },
      ],
      correctAnswer: 'b',
      explanation: 'Data split: Train (learn parameters) → Validation (tune hyperparameters like learning rate) → Test (final unbiased evaluation). Validation prevents "peeking" at the test set during development.',
      incorrectFeedback: 'Validation set tunes hyperparameters while keeping test set unbiased.',
    },
    {
      id: 'q5',
      question: 'What is stratified sampling in train-test splitting?',
      options: [
        { id: 'a', text: 'Randomly shuffling all data' },
        { id: 'b', text: 'Ensuring train and test sets have the same class distribution as the original dataset' },
        { id: 'c', text: 'Using only the first 80% of data' },
        { id: 'd', text: 'Sorting data alphabetically' },
      ],
      correctAnswer: 'b',
      explanation: 'Stratified splitting preserves class proportions. If original data is 70% class A, 30% class B, stratified split maintains this ratio in both train and test sets. Critical for imbalanced datasets.',
      incorrectFeedback: 'Stratified sampling maintains class balance across train/test splits.',
    },
  ],
};

export const classification: Topic = {
  id: 'classification',
  moduleId: 'machine-learning',
  number: 4,
  title: 'Classification Algorithms & Decision Boundaries',
  description: 'Explore fundamental classification algorithms: Logistic Regression, Support Vector Machines (SVM), and Decision Trees.',
  objectives: [
    'Understand how Logistic Regression maps inputs to probabilities using the Sigmoid function',
    'Visualize decision boundaries separating classes in feature space',
    'Compare linear classifiers with non-linear kernel SVMs and decision trees',
  ],
  story: `In 1936, British statistician Ronald Fisher measured the length and width of petals and sepals from 150 Iris flowers belonging to three species: Setosa, Versicolor, and Virginica.
  
When you plot petal length against petal width on a 2D graph, Setosa forms a tight cluster completely isolated from the other two species. A single straight line can separate Setosa from the rest.
  
This line is a "decision boundary." Classification is the mathematical science of drawing boundaries through feature space—whether straight lines, curving polynomial contours, or hyperplanes in 1,000 dimensions—to cleanly separate distinct categories.`,
  motivation: `**Classification is the core of AI decision-making**: Whether deciding if an email is spam, an X-ray has cancer, or an autonomous car sees a pedestrian, classification algorithms provide the discrete answers that drive automated actions.`,
  concept: {
    simple: `Classification is like drawing a fence between different groups of animals on a field. If you have sheep on one side and goats on the other, the fence is the **decision boundary**. When a new animal enters the field, you check which side of the fence it is on to decide whether it is a sheep or a goat.`,
    technical: `Classification partitions feature space $\\mathbb{R}^d$ into $C$ decision regions $\\mathcal{R}_1, \\dots, \\mathcal{R}_C$ separated by decision surfaces $\\{\\mathbf{x} : g_k(\\mathbf{x}) = g_j(\\mathbf{x})\\}$. In binary classification, Logistic Regression models the posterior log-odds as a linear combination: $\\ln\\frac{P(Y=1|\\mathbf{x})}{1-P(Y=1|\\mathbf{x})} = \\mathbf{w}^T \\mathbf{x} + b$.`,
  },
  keyTerms: [
    { term: 'Sigmoid Function ($\\sigma$)', simple: 'An S-shaped curve that squashes any number into a probability between 0 and 1.', technical: 'The activation $\\sigma(z) = \\frac{1}{1 + e^{-z}}$, mapping $\\mathbb{R} \\rightarrow (0, 1)$ with derivative $\\sigma\'(z) = \\sigma(z)(1 - \\sigma(z))$.' },
    { term: 'Decision Boundary', simple: 'The border separating one class from another in the feature space.', technical: 'The geometric hypersurface where predicted class probabilities are equal ($P(Y=1|\\mathbf{x}) = 0.5$).' },
    { term: 'Support Vector Machine (SVM)', simple: 'An algorithm that draws the widest possible road between two groups.', technical: 'Max-margin classifier that finds the separating hyperplane maximizing the margin distance $\\frac{2}{\\|\\mathbf{w}\\|}$ to the nearest support vectors.' },
  ],
  equations: [
    {
      latex: 'P(Y=1|x) = \\sigma(\\mathbf{w}^T \\mathbf{x} + b) = \\frac{1}{1 + e^{-(\\mathbf{w}^T \\mathbf{x} + b)}}',
      explanation: 'The Logistic Regression hypothesis: passes linear combination through the sigmoid function to output a calibrated probability between 0 and 1.',
      symbols: [
        { symbol: '\\sigma(z)', meaning: 'Sigmoid activation', interpretation: 'S-shaped probability mapping' },
        { symbol: '\\mathbf{w}', meaning: 'Weight vector', interpretation: 'Feature importances' },
        { symbol: 'b', meaning: 'Bias', interpretation: 'Threshold shift' },
      ],
      example: {
        description: 'Linear score z = 0.0 results in exactly 50% probability.',
        calculation: '\\sigma(0) = \\frac{1}{1 + e^{-0}} = \\frac{1}{1 + 1} = 0.50',
        result: 'P = 0.50 (Exact decision boundary threshold)',
      },
    },
  ],
  howItWorks: [
    { number: 1, title: 'Linear Combination', description: 'Compute dot product of features with learned weights: z = w1*x1 + w2*x2 + b.' },
    { number: 2, title: 'Probability Transformation', description: 'Pass z through sigmoid function to obtain probability p = 1 / (1 + exp(-z)).' },
    { number: 3, title: 'Thresholding', description: 'If p >= 0.5, predict Class 1; otherwise predict Class 0.' },
  ],
  applications: [
    { title: 'Spam Detection', problem: 'Classifying incoming emails as spam or inbox.', solution: 'Logistic regression calculates probability based on token frequency features.' },
    { title: 'Credit Card Fraud Prevention', problem: 'Flagging fraudulent card transactions.', solution: 'SVM with RBF kernel detects non-linear fraud clusters in high-dimensional spend spaces.' },
  ],
  activity: {
    type: 'mcq',
    title: 'Sigmoid Output Calculation',
    question: 'If a logistic regression model computes z = w*x + b = 2.0, what does the sigmoid function output?',
    options: [
      { id: 'a', text: 'Approximately 0.88 (88% probability)' },
      { id: 'b', text: 'Exactly -2.0' },
      { id: 'c', text: '0.0' },
      { id: 'd', text: '100.0' },
    ],
    correctAnswer: 'a',
    explanation: 'sigma(2.0) = 1 / (1 + e^(-2)) = 1 / (1 + 0.1353) = 1 / 1.1353 ≈ 0.8808, meaning the model assigns an 88% probability to the positive class.',
    hint: 'Use the formula: 1 / (1 + exp(-z)).',
  },
  learningResource: {
    title: 'Lesson 4: Python, Data Preparation and Classical ML Foundations',
    pdfUrl: '/presentations/Lesson4.pdf',
    description: 'Supervised classification pipelines, train-test splits, and logistic decision boundaries.',
    lessonNumber: 4,
    pages: 17,
    author: 'Dr. Syed Muzamil Basha',
  },
  pythonHandsOn: {
    title: 'Classification with Logistic Regression & Train-Test Split',
    description: 'Train a Logistic Regression classifier on labeled feature data and evaluate generalization accuracy on unseen test data.',
    packages: ['scikit-learn'],
    installCommand: 'pip install scikit-learn',
    imports: [
      { code: 'from sklearn.model_selection import train_test_split', explanation: 'Dataset split utility' },
      { code: 'from sklearn.linear_model import LogisticRegression', explanation: 'Logistic regression classifier' },
      { code: 'from sklearn.metrics import accuracy_score', explanation: 'Accuracy score metric' },
    ],
    code: [
      { code: '# Sample feature data and class labels', explanation: 'Dataset definition' },
      { code: 'X = [[1], [2], [3], [4], [5], [1], [2], [3], [4], [5], [1], [2], [3], [4], [5], [1], [2], [3], [4], [5]]', explanation: 'Feature values' },
      { code: 'y = [1, 2, 3, 4, 5, 1, 3, 3, 4, 5, 1, 2, 3, 4, 5, 1, 1, 3, 4, 5]  # Labels', explanation: 'Target classes' },
      { code: '', explanation: '' },
      { code: '# Split data into training (80%) and testing (20%) sets', explanation: 'Train/test split' },
      { code: 'X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)', explanation: 'Split datasets' },
      { code: '', explanation: '' },
      { code: '# Train a Logistic Regression model', explanation: 'Model creation' },
      { code: 'model = LogisticRegression()', explanation: 'Instantiate classifier' },
      { code: 'model.fit(X_train, y_train)', explanation: 'Fit model on training set' },
      { code: '', explanation: '' },
      { code: '# Make predictions on unseen test data', explanation: 'Inference' },
      { code: 'y_pred = model.predict(X_test)', explanation: 'Predict classes' },
      { code: '', explanation: '' },
      { code: '# Evaluate model accuracy', explanation: 'Evaluation' },
      { code: 'accuracy = accuracy_score(y_test, y_pred)', explanation: 'Compute accuracy' },
      { code: 'print("Accuracy:", accuracy)', explanation: 'Display accuracy score' },
    ],
    executionFlow: [
      { number: 1, title: 'Data Partitioning', description: 'Splits 20 samples into 16 training instances and 4 held-out testing instances.' },
      { number: 2, title: 'Model Fitting', description: 'LogisticRegression optimizes class decision boundaries on X_train and y_train.' },
      { number: 3, title: 'Unseen Testing', description: 'Calculates classification accuracy on X_test.' },
    ],
    input: '20 feature-label pairs split 80/20',
    output: 'Accuracy: 0.75',
    interpretation: 'The model correctly generalizes to unseen test cases by discovering the relationship between numerical inputs and target class labels.',
    colabInstructions: ['Run in Google Colab to train and evaluate the classifier.'],
  },
  mcqs: [
    {
      id: 'q1',
      question: 'What is the mathematical threshold typically used in binary logistic regression to assign Class 1?',
      options: [
        { id: 'a', text: 'Probability >= 0.50' },
        { id: 'b', text: 'Probability >= 0.99' },
        { id: 'c', text: 'Probability == 0.0' },
        { id: 'd', text: 'Probability >= 1.50' },
      ],
      correctAnswer: 'a',
      explanation: 'By standard convention, if P(Y=1|x) >= 0.50, the model predicts the positive class (1); otherwise it predicts class 0.',
      incorrectFeedback: 'A 0.50 probability corresponds to z = 0 on the sigmoid curve.',
    },
          {
      id: 'q2',
      question: 'What type of output does a classification algorithm produce?',
      options: [
        { id: 'a', text: 'Continuous numerical values' },
        { id: 'b', text: 'Discrete class labels or probabilities of class membership' },
        { id: 'c', text: 'Text descriptions' },
        { id: 'd', text: 'Image pixels' },
      ],
      correctAnswer: 'b',
      explanation: 'Classification predicts discrete categories: spam/not-spam, cat/dog/bird, or probability distributions [0.2, 0.7, 0.1]. Regression predicts continuous values like price or temperature.',
      incorrectFeedback: 'Classification outputs discrete classes or class probabilities.',
    },
    {
      id: 'q3',
      question: 'What is the difference between binary and multi-class classification?',
      options: [
        { id: 'a', text: 'No difference' },
        { id: 'b', text: 'Binary classifies into 2 classes; multi-class classifies into 3+ classes' },
        { id: 'c', text: 'Binary is always more accurate' },
        { id: 'd', text: 'Multi-class uses regression' },
      ],
      correctAnswer: 'b',
      explanation: 'Binary: 2 classes (spam/not-spam, fraud/legitimate). Multi-class: 3+ mutually exclusive classes (cat/dog/bird). Multi-label: multiple non-exclusive labels (tags on articles).',
      incorrectFeedback: 'Binary = 2 classes; multi-class = 3+ exclusive classes.',
    },
    {
      id: 'q4',
      question: 'Which algorithm finds the optimal hyperplane separating two classes?',
      options: [
        { id: 'a', text: 'K-Nearest Neighbors' },
        { id: 'b', text: 'Support Vector Machine (SVM)' },
        { id: 'c', text: 'Random Forest' },
        { id: 'd', text: 'K-Means' },
      ],
      correctAnswer: 'b',
      explanation: 'SVM finds the maximum-margin hyperplane that best separates classes. It can use kernel tricks (RBF, polynomial) for non-linear decision boundaries. Effective in high dimensions.',
      incorrectFeedback: 'SVM finds the maximum-margin separating hyperplane.',
    },
    {
      id: 'q5',
      question: 'What is a confusion matrix used for?',
      options: [
        { id: 'a', text: 'Confusing the model' },
        { id: 'b', text: 'Visualizing classification performance: True Positives, False Positives, True Negatives, False Negatives' },
        { id: 'c', text: 'Training the model' },
        { id: 'd', text: 'Collecting more data' },
      ],
      correctAnswer: 'b',
      explanation: 'Confusion matrix shows classification results: TP (correctly predicted positive), FP (false alarm), TN (correctly predicted negative), FN (missed detection). Basis for precision, recall, F1-score.',
      incorrectFeedback: 'Confusion matrix visualizes TP, FP, TN, FN for classification evaluation.',
    },
  ],
};

export const regression: Topic = {
  id: 'regression',
  moduleId: 'machine-learning',
  number: 5,
  title: 'Regression: Continuous Value Prediction',
  description: 'Master Simple Linear Regression, Multiple Regression, and Polynomial Regression to forecast continuous outcomes.',
  objectives: [
    'Derive the Ordinary Least Squares (OLS) objective',
    'Interpret regression coefficients, intercepts, and residuals',
    'Expand linear models into non-linear spaces using Polynomial features',
  ],
  story: `In 1886, Sir Francis Galton measured the heights of 928 adult children and their parents. He noticed an intriguing phenomenon: exceptionally tall parents had children who were tall, but on average slightly shorter than themselves. Similarly, very short parents had children who were slightly taller than them.
  
The heights of the children were "regressing toward the mediocrity" (the population mean). Galton termed this statistical line the "regression line." Today, regression refers to any mathematical method that predicts continuous numbers along a trend line.`,
  motivation: `**Continuous predictions drive the economy**: Predicting stock prices, corporate revenues, fuel consumption, CO2 emissions, and battery degradation all require continuous regression models.`,
  concept: {
    simple: `Regression is finding the best-fit line through a cloud of scatter points. Once you have that line, you can predict what happens between the points or forecast into the future. For example, if you know a person's height, you can use the regression line to estimate their weight.`,
    technical: `Multiple Linear Regression models the conditional expectation as an inner product: $\\hat{y} = \\mathbf{x}^T \\boldsymbol{\\beta} + \\epsilon$, where $\\epsilon \\sim \\mathcal{N}(0, \\sigma^2)$. The Ordinary Least Squares (OLS) closed-form analytic solution solves the normal equations: $\\hat{\\boldsymbol{\\beta}} = (\\mathbf{X}^T \\mathbf{X})^{-1} \\mathbf{X}^T \\mathbf{y}$.`,
  },
  keyTerms: [
    { term: 'Residual', simple: 'The vertical distance between a real data point and the prediction line.', technical: 'The sample error $e_i = y_i - \\hat{y}_i$ representing unexplained variance.' },
    { term: 'Ordinary Least Squares (OLS)', simple: 'The math trick that finds the line that makes the squared vertical distances as small as possible.', technical: 'The convex optimization method that minimizes the sum of squared residuals $\\|\\mathbf{y} - \\mathbf{X}\\boldsymbol{\\beta}\\|^2$.' },
    { term: 'R-Squared ($R^2$)', simple: 'A score from 0% to 100% showing how well the line explains the data.', technical: 'Coefficient of determination $R^2 = 1 - \\frac{SS_{res}}{SS_{tot}}$ measuring the proportion of variance explained by features.' },
  ],
  equations: [
    {
      latex: '\\boldsymbol{\\beta} = (\\mathbf{X}^T \\mathbf{X})^{-1} \\mathbf{X}^T \\mathbf{y}',
      explanation: 'The Normal Equation: the exact closed-form linear algebra solution for optimal OLS regression coefficients.',
      symbols: [
        { symbol: '\\boldsymbol{\\beta}', meaning: 'Optimal weight vector', interpretation: 'Best-fit slopes and intercept' },
        { symbol: '\\mathbf{X}', meaning: 'Design matrix', interpretation: 'Table of input features' },
        { symbol: '\\mathbf{y}', meaning: 'Target vector', interpretation: 'Actual continuous values' },
      ],
      example: {
        description: 'Simple 1D line through points (1, 2) and (3, 6).',
        calculation: '\\text{Slope } m = \\frac{6 - 2}{3 - 1} = \\frac{4}{2} = 2.0',
        result: 'Model: y = 2.0 * x (Residuals = 0, R^2 = 1.0)',
      },
    },
  ],
  howItWorks: [
    { number: 1, title: 'Scatter Plot Inspection', description: 'Plot target against candidate predictors to assess linear correlation.' },
    { number: 2, title: 'Matrix Solution or Gradient Descent', description: 'Compute optimal coefficients using normal equation or iterative optimizer.' },
    { number: 3, title: 'Residual Analysis', description: 'Verify residuals are normally distributed with constant variance (homoscedasticity).' },
  ],
  applications: [
    { title: 'Real Estate Valuation', problem: 'Estimating market price of houses based on square meters, bedrooms, and transit score.', solution: 'Multiple regression outputs estimated dollar valuation with confidence intervals.' },
    { title: 'Energy Grid Demand Forecasting', problem: 'Predicting megawatt electrical load based on temperature forecasts.', solution: 'Polynomial regression captures non-linear AC usage spikes during summer heatwaves.' },
  ],
  activity: {
    type: 'mcq',
    title: 'Interpreting R-Squared',
    question: 'A house price regression model achieves R² = 0.85. What does this mean?',
    options: [
      { id: 'a', text: 'The model has 15% missing files' },
      { id: 'b', text: '85% of the variance in house prices is explained by the model’s features' },
      { id: 'c', text: 'The house price will rise by $85,000 every year' },
      { id: 'd', text: 'The model gets 85 out of 100 classifications correct' },
    ],
    correctAnswer: 'b',
    explanation: 'R² (coefficient of determination) measures the proportion of total variance in the dependent variable that is captured and explained by the linear model.',
    hint: 'R² measures proportion of variance explained.',
  },
  learningResource: {
    title: 'Lesson 2: Classical Machine Learning as the Starting Point',
    pdfUrl: '/presentations/Lesson2.pdf',
    description: 'Data, prediction, linear regression, and the bridge to modern artificial intelligence.',
    lessonNumber: 2,
    pages: 11,
    author: 'Dr. Syed Muzamil Basha',
  },
  pythonHandsOn: {
    title: 'Linear Regression: House Price Prediction & Trend Visualization',
    description: 'Fit an Ordinary Least Squares (OLS) linear regression model on house sizes to predict continuous prices, and visualize the regression line with Matplotlib.',
    packages: ['numpy', 'scikit-learn', 'matplotlib'],
    installCommand: 'pip install numpy scikit-learn matplotlib',
    imports: [
      { code: 'import numpy as np', explanation: 'NumPy for matrix operations' },
      { code: 'import matplotlib.pyplot as plt', explanation: 'Matplotlib for plotting trend line' },
      { code: 'from sklearn.linear_model import LinearRegression', explanation: 'Scikit-Learn OLS regressor' },
    ],
    code: [
      { code: '# Data: House sizes (sq ft) and corresponding prices ($)', explanation: 'Data definition' },
      { code: 'X = np.array([500, 700, 900, 1100, 1300]).reshape(-1, 1)  # Feature (sq ft)', explanation: 'Reshape into column vector' },
      { code: 'y = np.array([150000, 180000, 210000, 250000, 280000])  # Target (price)', explanation: 'Target house prices' },
      { code: '', explanation: '' },
      { code: '# Create Linear Regression model', explanation: 'Instantiate model' },
      { code: 'model = LinearRegression()', explanation: 'Create OLS instance' },
      { code: '', explanation: '' },
      { code: '# Train the model on the data', explanation: 'Fitting' },
      { code: 'model.fit(X, y)', explanation: 'Fit best-fit line' },
      { code: '', explanation: '' },
      { code: '# Predict price for a house with 1000 sq ft', explanation: 'Inference' },
      { code: 'predicted_price = model.predict([[1000]])', explanation: 'Evaluate prediction at 1000 sqft' },
      { code: 'print(f"Predicted Price for 1000 sq ft house: ${predicted_price[0]:,.2f}")', explanation: 'Print formatted predicted price' },
      { code: '', explanation: '' },
      { code: '# Plot Data and Regression Line', explanation: 'Visualization' },
      { code: "plt.scatter(X, y, color='blue', label='Actual Prices')", explanation: 'Plot data points' },
      { code: "plt.plot(X, model.predict(X), color='red', label='Regression Line')", explanation: 'Plot best-fit line' },
      { code: 'plt.xlabel("House Size (sq ft)")', explanation: 'X-axis label' },
      { code: 'plt.ylabel("House Price ($)")', explanation: 'Y-axis label' },
      { code: 'plt.title("Linear Regression - House Price Prediction")', explanation: 'Plot title' },
      { code: 'plt.legend()', explanation: 'Add legend' },
      { code: 'plt.show()', explanation: 'Display plot' },
    ],
    executionFlow: [
      { number: 1, title: 'Data Formulation', description: 'Encodes 5 house sizes [500-1300 sq ft] and prices [$150k-$280k].' },
      { number: 2, title: 'Linear Fitting', description: 'Finds optimal slope m and intercept b minimizing squared residuals.' },
      { number: 3, title: 'Inference & Plotting', description: 'Forecasts 1000 sq ft house at $230,000 and plots data points alongside the regression trend line.' },
    ],
    input: 'House sizes: [500, 700, 900, 1100, 1300] sq ft',
    output: 'Predicted Price for 1000 sq ft house: $230,000.00',
    interpretation: 'The linear regression model accurately captures the ~$162.50 per square foot trend line, providing reliable continuous price estimations.',
    colabInstructions: ['Run in Google Colab to view the interactive scatter plot and regression line.'],
  },
  mcqs: [
    {
      id: 'q1',
      question: 'What happens to the regression line if an extreme outlier data point is added far from the trend?',
      options: [
        { id: 'a', text: 'OLS regression is sensitive to outliers and the line tilts noticeably toward the outlier' },
        { id: 'b', text: 'The outlier is automatically deleted by Python' },
        { id: 'c', text: 'The slope becomes exactly zero' },
        { id: 'd', text: 'Nothing, OLS completely ignores outliers' },
      ],
      correctAnswer: 'a',
      explanation: 'Because OLS squares the residuals $(y - \\hat{y})^2$, large outlier distances exert quadratic leverage, tilting the regression line.',
      incorrectFeedback: 'OLS squares errors, making it highly sensitive to extreme leverage points.',
    },
          {
      id: 'q2',
      question: 'What is the difference between classification and regression?',
      options: [
        { id: 'a', text: 'No difference' },
        { id: 'b', text: 'Classification predicts discrete classes; regression predicts continuous numerical values' },
        { id: 'c', text: 'Regression is always more accurate' },
        { id: 'd', text: 'Classification uses neural networks only' },
      ],
      correctAnswer: 'b',
      explanation: 'Classification: discrete outputs (cat/dog, spam/ham). Regression: continuous outputs (house price $250k, temperature 72°F). Linear regression, polynomial regression predict continuous values.',
      incorrectFeedback: 'Classification = discrete labels; regression = continuous values.',
    },
    {
      id: 'q3',
      question: 'What does the slope (coefficient) in linear regression y = mx + b represent?',
      options: [
        { id: 'a', text: 'The y-intercept' },
        { id: 'b', text: 'The rate of change: how much y changes for each unit change in x' },
        { id: 'c', text: 'The error rate' },
        { id: 'd', text: 'The training time' },
      ],
      correctAnswer: 'b',
      explanation: 'Slope m is the rate of change: if m=2, then y increases by 2 units for every 1-unit increase in x. Example: house price increases $50k per 100 sqft → m = 500.',
      incorrectFeedback: 'Slope represents the rate of change of y with respect to x.',
    },
    {
      id: 'q4',
      question: 'What loss function is typically minimized in linear regression?',
      options: [
        { id: 'a', text: 'Cross-entropy loss' },
        { id: 'b', text: 'Mean Squared Error (MSE): average of (predicted - actual)²' },
        { id: 'c', text: 'Hinge loss' },
        { id: 'd', text: 'Log loss' },
      ],
      correctAnswer: 'b',
      explanation: 'Linear regression minimizes MSE = (1/n)Σ(ŷᵢ - yᵢ)². Squaring penalizes large errors more. Alternative: MAE (Mean Absolute Error) for robustness to outliers.',
      incorrectFeedback: 'Linear regression minimizes Mean Squared Error (MSE).',
    },
    {
      id: 'q5',
      question: 'What is polynomial regression?',
      options: [
        { id: 'a', text: 'Using only linear features' },
        { id: 'b', text: 'Extending linear regression with polynomial features (x², x³, etc.) to model non-linear relationships' },
        { id: 'c', text: 'A classification algorithm' },
        { id: 'd', text: 'A clustering algorithm' },
      ],
      correctAnswer: 'b',
      explanation: 'Polynomial regression fits curves by adding polynomial terms: y = b₀ + b₁x + b₂x² + b₃x³. Still solved via linear regression on transformed features [x, x², x³].',
      incorrectFeedback: 'Polynomial regression models non-linear relationships using polynomial features.',
    },
  ],
};

export const modelEvaluation: Topic = {
  id: 'model-evaluation',
  moduleId: 'machine-learning',
  number: 6,
  title: 'Model Evaluation: Beyond Simple Accuracy',
  description: 'Master the confusion matrix, Precision, Recall, F1-Score, ROC curves, and AUC for rigorous model validation.',
  objectives: [
    'Construct and interpret a 2x2 Confusion Matrix (TP, FP, TN, FN)',
    'Understand the critical trade-off between Precision and Recall',
    'Calculate the harmonic F1-Score for imbalanced datasets',
    'Analyze Receiver Operating Characteristic (ROC) and Area Under Curve (AUC)',
  ],
  story: `Imagine an airport security scanner built to detect weapons in carry-on luggage.
  
Out of 100,000 passengers, only 5 actually carry contraband. An engineer builds a "lazy" scanner that simply labels every single bag as "SAFE (No Weapon)".
  
What is the accuracy of this scanner?
$$\\frac{99,995}{100,000} = 99.995\\% \\text{ Accuracy!}$$
  
On paper, the model has virtually 100% accuracy. In reality, it is completely lethal because its **Recall** for detecting actual weapons is **0.0%**. Accuracy is a dangerous trap when dealing with imbalanced real-world problems.`,
  motivation: `**The Accuracy Paradox**: In fraud detection, cancer diagnosis, and cybersecurity, the positive class is rare (often < 1%). Relying solely on accuracy will deceive stakeholders and hide critical model failures.`,
  concept: {
    simple: `Don't just ask: "How often was the model right?"
Ask:
1. **Precision**: When the model cried wolf, was there actually a wolf? (Avoid false alarms).
2. **Recall**: Out of all the real wolves in the forest, how many did the model catch? (Don't miss real threats).
3. **F1-Score**: The balanced score combining both Precision and Recall.`,
    technical: `In binary classification with ground truth $y \\in \\{0, 1\\}$ and predictions $\\hat{y} \\in \\{0, 1\\}$, the outcomes form a confusion matrix: True Positives ($TP$), False Positives ($FP$), True Negatives ($TN$), False Negatives ($FN$). Precision is defined as $\\frac{TP}{TP+FP}$; Recall (Sensitivity) is $\\frac{TP}{TP+FN}$. F1 is their harmonic mean: $\\frac{2 \\cdot P \\cdot R}{P + R}$.`,
  },
  keyTerms: [
    { term: 'Precision', simple: 'When the model predicts positive, how often is it right?', technical: '$\\text{Precision} = \\frac{TP}{TP + FP}$, the positive predictive value.' },
    { term: 'Recall (Sensitivity)', simple: 'Out of all actual positive cases, how many did the model find?', technical: '$\\text{Recall} = \\frac{TP}{TP + FN}$, the true positive rate.' },
    { term: 'F1-Score', simple: 'A balanced score that penalizes extremes in either Precision or Recall.', technical: 'Harmonic mean of Precision and Recall: $F_1 = 2 \\times \\frac{\\text{Precision} \\times \\text{Recall}}{\\text{Precision} + \\text{Recall}}$.' },
  ],
  equations: [
    {
      latex: 'F_1 = 2 \\cdot \\frac{\\text{Precision} \\cdot \\text{Recall}}{\\text{Precision} + \\text{Recall}}',
      explanation: 'The F1-Score: uses harmonic mean rather than arithmetic mean, ensuring that if either precision or recall crashes to zero, the F1 crashes as well.',
      symbols: [
        { symbol: 'F_1', meaning: 'F-measure', interpretation: 'Balanced classification score' },
        { symbol: '\\text{Precision}', meaning: 'Positive Predictive Value', interpretation: 'TP / (TP + FP)' },
        { symbol: '\\text{Recall}', meaning: 'True Positive Rate', interpretation: 'TP / (TP + FN)' },
      ],
      example: {
        description: 'Precision = 0.80, Recall = 0.50.',
        calculation: 'F_1 = 2 \\times \\frac{0.80 \\times 0.50}{0.80 + 0.50} = 2 \\times \\frac{0.40}{1.30} = \\frac{0.80}{1.30} \\approx 0.615',
        result: 'F1-Score = 0.615',
      },
    },
  ],
  howItWorks: [
    { number: 1, title: 'Generate Predictions', description: 'Obtain continuous prediction probabilities from model.' },
    { number: 2, title: 'Build Confusion Matrix', description: 'Count TP, FP, TN, and FN against ground-truth labels.' },
    { number: 3, title: 'Tune Decision Threshold', description: 'Adjust threshold from 0.5 to balance Precision vs Recall depending on business cost.' },
  ],
  applications: [
    { title: 'Cancer Detection (Maximize Recall)', problem: 'A missed tumor (False Negative) can be fatal; a false alarm (False Positive) merely causes a follow-up test.', solution: 'Model threshold is lowered to achieve 99% recall even if precision drops slightly.' },
    { title: 'Spam Detection (Maximize Precision)', problem: 'A user missing an important job offer sent to spam (False Positive) is unacceptable.', solution: 'Spam filters demand very high precision before redirecting an email away from inbox.' },
  ],
  activity: {
    type: 'mcq',
    title: 'Metric Choice',
    question: 'In an airport bomb detection system, which metric is the most critical to maximize?',
    options: [
      { id: 'a', text: 'Recall (we must NEVER let a bomb slip through as a False Negative)' },
      { id: 'b', text: 'Accuracy' },
      { id: 'c', text: 'Training speed' },
      { id: 'd', text: 'RAM consumption' },
    ],
    correctAnswer: 'a',
    explanation: 'In life-critical detection systems, a False Negative (missing a bomb) is catastrophic. Therefore, Recall (True Positive Rate) must be maximized.',
    hint: 'Which mistake is worse: an extra bag inspection or a missed bomb?',
  },
  pythonHandsOn: {
    title: 'Confusion Matrix & Classification Report in Python',
    description: 'Calculate Precision, Recall, and F1-Score on an imbalanced dataset.',
    packages: ['scikit-learn'],
    installCommand: 'pip install scikit-learn',
    imports: [
      { code: 'from sklearn.metrics import confusion_matrix, classification_report', explanation: 'Evaluation metrics' },
    ],
    code: [
      { code: '# Ground truth: 10 non-fraud (0), 2 fraud cases (1)', explanation: 'Real outcomes' },
      { code: 'y_true = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1]', explanation: 'True labels' },
      { code: '# Model predictions: caught 1 fraud, missed 1 fraud, flagged 1 innocent', explanation: 'Predictions' },
      { code: 'y_pred = [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]', explanation: 'Model output' },
      { code: '', explanation: '' },
      { code: 'cm = confusion_matrix(y_true, y_pred)', explanation: 'Compute confusion matrix' },
      { code: 'print("Confusion Matrix:")', explanation: 'Header' },
      { code: 'print(f"TN: {cm[0][0]} | FP: {cm[0][1]}")', explanation: 'Row 1' },
      { code: 'print(f"FN: {cm[1][0]} | TP: {cm[1][1]}")', explanation: 'Row 2' },
      { code: '', explanation: '' },
      { code: 'print("\\nDetailed Classification Report:")', explanation: 'Header' },
      { code: 'print(classification_report(y_true, y_pred, target_names=["Legit", "Fraud"]))', explanation: 'Full report' },
    ],
    executionFlow: [
      { number: 1, title: 'Confusion Counting', description: 'Counts 9 True Negatives, 1 False Alarm, 1 Missed Fraud, 1 Caught Fraud.' },
      { number: 2, title: 'Metrics Computation', description: 'Calculates Precision (50%), Recall (50%), and F1 (0.50) for the fraud class.' },
    ],
    input: 'Imbalanced labels (10 legit, 2 fraud)',
    output: 'Confusion Matrix:\nTN: 9 | FP: 1\nFN: 1 | TP: 1\n\nDetailed Classification Report:\n              precision    recall  f1-score\n       Fraud       0.50      0.50      0.50',
    interpretation: 'While overall accuracy is 83% (10/12), the classification report reveals true fraud performance is only 50% F1.',
    colabInstructions: ['Run in Google Colab to test.'],
  },
  mcqs: [
    {
      id: 'q1',
      question: 'What does the Area Under the ROC Curve (AUC-ROC) represent?',
      options: [
        { id: 'a', text: 'The probability that the model will rank a randomly chosen positive instance higher than a randomly chosen negative instance' },
        { id: 'b', text: 'The percentage of disk space occupied by the dataset' },
        { id: 'c', text: 'The speed of training in epochs per second' },
        { id: 'd', text: 'The number of clusters in K-Means' },
      ],
      correctAnswer: 'a',
      explanation: 'AUC-ROC is threshold-independent and measures the probability that a random positive sample receives a higher predicted score than a random negative sample. 1.0 is perfect; 0.5 is random guessing.',
      incorrectFeedback: 'AUC represents the ranking capability of the classifier across all possible classification thresholds.',
    },
          {
      id: 'q2',
      question: 'What is precision in classification?',
      options: [
        { id: 'a', text: 'Percentage of correct predictions overall' },
        { id: 'b', text: 'TP / (TP + FP): Of all positive predictions, what fraction were correct?' },
        { id: 'c', text: 'TP / (TP + FN)' },
        { id: 'd', text: 'TN / (TN + FP)' },
      ],
      correctAnswer: 'b',
      explanation: 'Precision = TP/(TP+FP) measures correctness of positive predictions. High precision = few false alarms. Example: spam filter with high precision rarely marks legitimate emails as spam.',
      incorrectFeedback: 'Precision measures correctness of positive predictions: TP/(TP+FP).',
    },
    {
      id: 'q3',
      question: 'What is recall (sensitivity) in classification?',
      options: [
        { id: 'a', text: 'TN / (TN + FP)' },
        { id: 'b', text: 'TP / (TP + FN): Of all actual positives, what fraction were detected?' },
        { id: 'c', text: 'TP / (TP + FP)' },
        { id: 'd', text: 'Accuracy' },
      ],
      correctAnswer: 'b',
      explanation: 'Recall = TP/(TP+FN) measures detection rate. High recall = few missed positives. Example: cancer screening with high recall catches most cases (low false negatives).',
      incorrectFeedback: 'Recall measures detection rate of actual positives: TP/(TP+FN).',
    },
    {
      id: 'q4',
      question: 'What is the F1-score?',
      options: [
        { id: 'a', text: 'Simple average of precision and recall' },
        { id: 'b', text: 'Harmonic mean of precision and recall: 2·(precision·recall)/(precision+recall)' },
        { id: 'c', text: 'Same as accuracy' },
        { id: 'd', text: 'Maximum of precision and recall' },
      ],
      correctAnswer: 'b',
      explanation: 'F1 = 2PR/(P+R) balances precision and recall. Harmonic mean punishes extreme imbalance (e.g., P=0.9, R=0.1 gives F1=0.18, not 0.5). Useful for imbalanced datasets.',
      incorrectFeedback: 'F1-score is the harmonic mean of precision and recall.',
    },
    {
      id: 'q5',
      question: 'When is accuracy NOT a good metric?',
      options: [
        { id: 'a', text: 'Accuracy is always the best metric' },
        { id: 'b', text: 'For imbalanced datasets where rare classes are important (e.g., fraud detection with 1% fraud)' },
        { id: 'c', text: 'For balanced datasets' },
        { id: 'd', text: 'For regression problems' },
      ],
      correctAnswer: 'b',
      explanation: 'Accuracy misleads on imbalanced data. Example: 99% non-fraud dataset → predicting "always non-fraud" gives 99% accuracy but 0% recall for fraud. Use precision, recall, F1, AUC instead.',
      incorrectFeedback: 'Accuracy fails on imbalanced data; use precision, recall, F1, or AUC-ROC.',
    },
  ],
};

export const overfittingUnderfitting: Topic = {
  id: 'overfitting-underfitting',
  moduleId: 'machine-learning',
  number: 7,
  title: 'Overfitting, Underfitting & Regularization',
  description: 'Diagnose the Bias-Variance tradeoff and tame complex models using L1 (Lasso) and L2 (Ridge) regularization.',
  objectives: [
    'Define Overfitting (High Variance) and Underfitting (High Bias)',
    'Analyze train vs validation learning curves to detect overfitting',
    'Apply L1 (Lasso) and L2 (Ridge) weight regularization penalties',
    'Understand early stopping and dropout techniques',
  ],
  story: `Imagine a tailor making a custom suit for a client.
  
**Underfitting**: The tailor cuts a generic square sack with two armholes. It fits nobody well—it is too simple and rigid.
  
**Overfitting**: The tailor creates a suit molded down to the exact millimeter of the client's posture on a cold Tuesday morning while they were slouching slightly to the left with their wallet in their back pocket. When the client stands up straight on Wednesday, the suit rips at the seams! It was memorized to one fleeting instance and cannot adapt.
  
**Good Fit**: The tailor cuts a suit that drapes naturally, accommodating normal body movement while looking sharp. That balance is the holy grail of machine learning.`,
  motivation: `**The central struggle of all ML**: Any model can memorize its training data to achieve 100% training accuracy. The true engineering skill lies in preventing overfitting so the model performs reliably in the wild.`,
  concept: {
    simple: `**Underfitting (High Bias)**: The model is too dumb/simple. It fails on both practice homework and the final exam.
**Overfitting (High Variance)**: The model is a parrot. It memorized every practice question word-for-word, but flunks the real exam when questions change slightly.
**Regularization**: A leash placed on the model to keep it from getting too complicated.`,
    technical: `Generalization error decomposes into three additive terms: $\\text{Error} = \\text{Bias}^2 + \\text{Variance} + \\sigma^2_{irreducible}$. High bias denotes underfitting due to overly restrictive hypothesis space. High variance denotes overfitting where $\\text{Var}(\\hat{f}) \\gg 0$. Regularization adds penalty terms $\\lambda \\|\\mathbf{w}\\|_2^2$ (Ridge) or $\\lambda \\|\\mathbf{w}\\|_1$ (Lasso) to constrain the model parameter norm.`,
  },
  keyTerms: [
    { term: 'High Bias (Underfitting)', simple: 'The model is too simple to capture the underlying pattern.', technical: 'Error stemming from erroneous assumptions in the learning algorithm; manifests as high training error and high validation error.' },
    { term: 'High Variance (Overfitting)', simple: 'The model memorized noise and quirks in the training data.', technical: 'Error stemming from extreme sensitivity to small fluctuations in training set; manifests as near-zero training error but high validation error.' },
    { term: 'L2 Regularization (Ridge)', simple: 'Penalizing large weights to make the model smoother and simpler.', technical: 'Adds squared Euclidean norm $\\lambda \\sum w_j^2$ to the loss function, shrinking weights toward zero.' },
    { term: 'L1 Regularization (Lasso)', simple: 'Driving unimportant feature weights completely to zero for automatic feature selection.', technical: 'Adds Manhattan norm $\\lambda \\sum |w_j|$ to the loss function, inducing sparsity in weight vectors.' },
  ],
  equations: [
    {
      latex: '\\mathcal{L}_{Ridge} = \\text{MSE} + \\lambda \\sum_{j=1}^D w_j^2, \\quad \\mathcal{L}_{Lasso} = \\text{MSE} + \\lambda \\sum_{j=1}^D |w_j|',
      explanation: 'Ridge (L2) and Lasso (L1) loss functions: augment standard MSE with penalty on weight magnitudes controlled by hyperparameter lambda.',
      symbols: [
        { symbol: '\\lambda', meaning: 'Regularization strength', interpretation: 'Higher lambda enforces simpler, smoother models' },
        { symbol: 'w_j', meaning: 'Model weights', interpretation: 'Coefficients of features' },
      ],
      example: {
        description: 'Large weight w=10 with lambda=0.1. Ridge penalty is 0.1 * 100 = 10.0 added to loss.',
        calculation: '\\text{Penalty} = 0.1 \\times 10^2 = 10.0',
        result: 'Optimizer forces weight down to avoid high penalty',
      },
    },
  ],
  howItWorks: [
    { number: 1, title: 'Monitor Learning Curves', description: 'Plot training loss and validation loss over model complexity or epochs.' },
    { number: 2, title: 'Detect Divergence', description: 'When training loss keeps falling but validation loss starts rising, overfitting has begun.' },
    { number: 3, title: 'Apply Regularization', description: 'Increase lambda, prune decision trees, apply dropout, or collect more training data.' },
  ],
  applications: [
    { title: 'Genomic Disease Prediction', problem: 'Dataset has 500 patients but 20,000 gene features (high risk of extreme overfitting).', solution: 'Lasso (L1) regularization forces 19,950 uninformative gene weights to 0, isolating the 50 truly causal mutations.' },
    { title: 'Financial Asset Valuation', problem: 'High-degree polynomial regression overfits noisy historical stock price spikes.', solution: 'Ridge regularization shrinks coefficients, producing a smooth generalized economic trend.' },
  ],
  activity: {
    type: 'mcq',
    title: 'Diagnosing the Problem',
    question: 'Your deep learning model gets 99.8% accuracy on training data, but only 64.2% accuracy on validation data. What is happening?',
    options: [
      { id: 'a', text: 'Severe Overfitting (High Variance)' },
      { id: 'b', text: 'Underfitting (High Bias)' },
      { id: 'c', text: 'Hardware failure' },
      { id: 'd', text: 'Perfect balance' },
    ],
    correctAnswer: 'a',
    explanation: 'A huge gap between high training performance (99.8%) and mediocre validation performance (64.2%) is the textbook signature of overfitting.',
    hint: 'Did the model memorize the training set while failing to generalize?',
  },
  pythonHandsOn: {
    title: 'Taming Overfitting with Ridge Regularization',
    description: 'See a high-degree polynomial overfit and how Ridge regression restores generalization.',
    packages: ['scikit-learn', 'numpy'],
    installCommand: 'pip install scikit-learn numpy',
    imports: [
      { code: 'from sklearn.preprocessing import PolynomialFeatures', explanation: 'Create polynomial features' },
      { code: 'from sklearn.linear_model import LinearRegression, Ridge', explanation: 'Linear & Ridge models' },
      { code: 'import numpy as np', explanation: 'NumPy arrays' },
    ],
    code: [
      { code: '# Noisy sine wave data (only 6 points)', explanation: 'Small dataset' },
      { code: 'X = np.array([[0.1], [0.3], [0.5], [0.7], [0.85], [1.0]])', explanation: 'Input points' },
      { code: 'y = np.sin(X.ravel() * 3.14) + np.random.normal(0, 0.05, 6)', explanation: 'Noisy targets' },
      { code: '', explanation: '' },
      { code: '# Expand to 5th-degree polynomial features', explanation: 'High complexity' },
      { code: 'poly = PolynomialFeatures(degree=5)', explanation: 'Creates x, x^2, x^3, x^4, x^5' },
      { code: 'X_poly = poly.fit_transform(X)', explanation: 'Transform features' },
      { code: '', explanation: '' },
      { code: '# 1. Unregularized Model (Wild Overfitting!):', explanation: 'Standard OLS' },
      { code: 'overfit_model = LinearRegression().fit(X_poly, y)', explanation: 'Fit without leash' },
      { code: 'print("Unregularized Max Weight:", max(abs(overfit_model.coef_)).round(1))', explanation: 'Exploding weights' },
      { code: '', explanation: '' },
      { code: '# 2. Ridge Regularized Model (Constrained weights!):', explanation: 'L2 penalty' },
      { code: 'ridge_model = Ridge(alpha=1.0).fit(X_poly, y)', explanation: 'Fit with alpha=1.0' },
      { code: 'print("Ridge Regularized Max Weight:", max(abs(ridge_model.coef_)).round(1))', explanation: 'Tamed weights' },
    ],
    executionFlow: [
      { number: 1, title: 'Unregularized Fit', description: 'Weights explode to massive magnitudes (+/- 800) to pass through every noisy sample.' },
      { number: 2, title: 'Ridge Fit', description: 'L2 penalty keeps weights small (< 2.0), producing a smooth generalized curve.' },
    ],
    input: '6 noisy sample points fitted with 5th degree polynomial',
    output: 'Unregularized Max Weight: ~840.2 (Overfitting)\nRidge Regularized Max Weight: ~1.8 (Tamed & Generalized)',
    interpretation: 'Ridge regularization squashed runaway parameter explosion, preventing the model from oscillating wildly between points.',
    colabInstructions: ['Run in Google Colab.'],
  },
  mcqs: [
    {
      id: 'q1',
      question: 'Which regularization method has the property of driving some feature coefficients to exactly ZERO, effectively acting as automatic feature selection?',
      options: [
        { id: 'a', text: 'L1 Regularization (Lasso)' },
        { id: 'b', text: 'L2 Regularization (Ridge)' },
        { id: 'c', text: 'K-Means clustering' },
        { id: 'd', text: 'Gradient boosting' },
      ],
      correctAnswer: 'a',
      explanation: 'Due to the diamond-shaped geometry of the L1 ball, the optimal loss contour frequently intersects axes at exactly zero, inducing true parameter sparsity.',
      incorrectFeedback: 'Lasso (L1) creates zero coefficients; Ridge (L2) shrinks them close to zero but rarely exactly zero.',
    },
          {
      id: 'q2',
      question: 'What causes overfitting?',
      options: [
        { id: 'a', text: 'Model too simple' },
        { id: 'b', text: 'Model too complex relative to training data size; memorizes noise instead of patterns' },
        { id: 'c', text: 'Too much training data' },
        { id: 'd', text: 'Using the wrong programming language' },
      ],
      correctAnswer: 'b',
      explanation: 'Overfitting: model has high capacity (many parameters) and memorizes training noise → low training error, high test error. Causes: too many features, deep networks on small datasets, no regularization.',
      incorrectFeedback: 'Overfitting occurs when models are too complex and memorize training noise.',
    },
    {
      id: 'q3',
      question: 'What is regularization in machine learning?',
      options: [
        { id: 'a', text: 'Making models run faster' },
        { id: 'b', text: 'Adding penalty terms to loss function to constrain model complexity and prevent overfitting' },
        { id: 'c', text: 'Collecting more data' },
        { id: 'd', text: 'Removing all features' },
      ],
      correctAnswer: 'b',
      explanation: 'Regularization (L1/L2) penalizes large weights: Loss = MSE + λ·||w||². This constrains model complexity. L1 (Lasso) encourages sparsity; L2 (Ridge) shrinks weights smoothly.',
      incorrectFeedback: 'Regularization penalizes model complexity to prevent overfitting.',
    },
    {
      id: 'q4',
      question: 'How can you detect overfitting?',
      options: [
        { id: 'a', text: 'Training accuracy = test accuracy' },
        { id: 'b', text: 'Large gap: high training accuracy but low test accuracy' },
        { id: 'c', text: 'Both training and test accuracy are low' },
        { id: 'd', text: 'Model runs slowly' },
      ],
      correctAnswer: 'b',
      explanation: 'Overfitting signature: train accuracy ≈ 100%, test accuracy ≪ 100%. Model memorized training data. Solution: more data, regularization, simpler model, dropout, early stopping.',
      incorrectFeedback: 'Overfitting shows as large gap between training and test performance.',
    },
    {
      id: 'q5',
      question: 'What is the bias-variance tradeoff?',
      options: [
        { id: 'a', text: 'More bias is always better' },
        { id: 'b', text: 'Simple models have high bias (underfit); complex models have high variance (overfit). Optimal model balances both.' },
        { id: 'c', text: 'Variance is irrelevant' },
        { id: 'd', text: 'Bias and variance are unrelated' },
      ],
      correctAnswer: 'b',
      explanation: 'Bias = underfitting (too simple). Variance = overfitting (too complex). Total error = bias² + variance + noise. Goal: find sweet spot minimizing both via cross-validation.',
      incorrectFeedback: 'Bias-variance tradeoff balances underfitting (high bias) vs overfitting (high variance).',
    },
  ],
};

export const introScikitLearn: Topic = {
  id: 'intro-scikit-learn',
  moduleId: 'machine-learning',
  number: 8,
  title: 'Introduction to Scikit-Learn: The Industry Workhorse',
  description: 'Master the unified Scikit-Learn API pattern: Estimator, fit(), predict(), and transform(), along with powerful Pipeline chaining.',
  objectives: [
    'Master the universal Scikit-Learn API design pattern',
    'Differentiate between Estimators, Transformers, and Predictors',
    'Construct automated end-to-end ML Pipelines',
    'Save and serialize trained models using Joblib',
  ],
  story: `In 2007, David Cournapeau started "scikits.learn" as a Google Summer of Code project. At that time, machine learning was a chaotic patchwork of custom C libraries, incompatible Fortran scripts, and proprietary MATLAB packages.
  
Scikit-Learn changed the history of data science by introducing one brilliant, elegant API standard:
- Every data preprocessor implements: ` + '`.fit()`' + ` and ` + '`.transform()`' + `
- Every machine learning model implements: ` + '`.fit()`' + ` and ` + '`.predict()`' + `
  
Whether you are running a simple linear regression or an ensemble of 500 gradient-boosted trees, the code looks almost identical. This consistency made machine learning accessible to millions of developers worldwide.`,
  motivation: `**Why Scikit-Learn is indispensable**: It is the global standard for tabular machine learning in enterprise production. Mastering its unified API allows you to experiment with dozens of state-of-the-art algorithms in minutes.`,
  concept: {
    simple: `Scikit-learn is like a LEGO set for machine learning:
1. **fit()**: "Learn from this data."
2. **predict()**: "Use what you learned to make predictions on new data."
3. **transform()**: "Modify or clean this data (e.g., scaling numbers)."
4. **Pipeline**: "Snap the pieces together so raw data goes in one end and predictions come out the other."`,
    technical: `Scikit-Learn implements an object-oriented design pattern centered on stateless interfaces:
- **Estimators**: Implement ` + '`fit(X, y)`' + ` to estimate state parameters from data.
- **Transformers**: Implement ` + '`transform(X)`' + ` and ` + '`fit_transform(X)`' + ` for feature engineering.
- **Predictors**: Implement ` + '`predict(X)`' + ` and ` + '`predict_proba(X)`' + `.
- **Pipeline**: Chains transformers sequentially with a final estimator to prevent leakage and enable atomic serialization.`,
  },
  keyTerms: [
    { term: 'Estimator', simple: 'Any object that learns from data.', technical: 'An object implementing `fit(X, y)` that persists estimated parameters as attributes ending with an underscore (e.g. `coef_`).' },
    { term: 'Transformer', simple: 'An object that cleans, converts, or scales data.', technical: 'An object implementing `transform(X)` that outputs a modified array without changing sample count.' },
    { term: 'Pipeline', simple: 'A conveyor belt that chains cleaning, scaling, and the ML model together.', technical: 'An abstraction that bundles preprocessing steps and an estimator into a single composite estimator.' },
  ],
  howItWorks: [
    { number: 1, title: 'Instantiate Pipeline', description: 'Chain Scaler + Encoder + Classifier together.' },
    { number: 2, title: 'Atomic Fitting', description: 'Call pipeline.fit(X_train, y_train); all transformations fit cleanly without leakage.' },
    { number: 3, title: 'Inference', description: 'Call pipeline.predict(X_new); raw data is automatically transformed and predicted in one step.' },
  ],
  applications: [
    { title: 'Production API Microservice', problem: 'Raw user JSON payload arrives with unscaled numbers and text strings.', solution: 'A Scikit-Learn Pipeline automatically handles one-hot encoding, scaling, and prediction in a single call.' },
  ],
  activity: {
    type: 'mcq',
    title: 'API Method Check',
    question: 'Which Scikit-Learn method is used to train a model on features X and labels y?',
    options: [
      { id: 'a', text: 'model.run(X, y)' },
      { id: 'b', text: 'model.fit(X, y)' },
      { id: 'c', text: 'model.learn(X, y)' },
      { id: 'd', text: 'model.execute(X, y)' },
    ],
    correctAnswer: 'b',
    explanation: 'In Scikit-Learn, all estimators use the standard .fit(X, y) method to train parameters on data.',
    hint: 'Think of fitting a line to data.',
  },
  learningResource: {
    title: 'Lesson 4: Python, Data Preparation and Classical ML Foundations',
    pdfUrl: '/presentations/Lesson4.pdf',
    description: 'K-Nearest Neighbors (KNN), feature scaling, train-test splits, and confusion matrix diagnostics.',
    lessonNumber: 4,
    pages: 17,
    author: 'Dr. Syed Muzamil Basha',
  },
  pythonHandsOn: {
    title: 'End-to-End Scikit-Learn: KNN Classification, Scaling & Confusion Matrix',
    description: 'Build an end-to-end classification pipeline: standardize Age and Salary features, train a K-Nearest Neighbors (KNN) classifier, and compute accuracy and confusion matrix.',
    packages: ['pandas', 'numpy', 'scikit-learn'],
    installCommand: 'pip install pandas numpy scikit-learn',
    imports: [
      { code: 'import pandas as pd', explanation: 'Pandas for tabular data structures' },
      { code: 'import numpy as np', explanation: 'NumPy array support' },
      { code: 'from sklearn.model_selection import train_test_split', explanation: 'Dataset split utility' },
      { code: 'from sklearn.preprocessing import StandardScaler', explanation: 'Feature standardization' },
      { code: 'from sklearn.neighbors import KNeighborsClassifier', explanation: 'KNN classifier estimator' },
      { code: 'from sklearn.metrics import accuracy_score, confusion_matrix', explanation: 'Evaluation metrics' },
    ],
    code: [
      { code: '# Sample customer purchase dataset', explanation: 'Data creation' },
      { code: "data = {'Age': [22, 25, 47, 52, 46, 56, 36, 23, 45, 55],", explanation: 'Age column' },
      { code: "        'Salary': [20000, 25000, 50000, 65000, 50000, 70000, 40000, 23000, 60000, 72000],", explanation: 'Salary column' },
      { code: "        'Purchased': [0, 0, 1, 1, 1, 1, 0, 0, 1, 1]}  # 0 = No, 1 = Yes", explanation: 'Target labels' },
      { code: 'df = pd.DataFrame(data)', explanation: 'Create DataFrame' },
      { code: '', explanation: '' },
      { code: '# Define features and target', explanation: 'Feature matrix and target' },
      { code: "X = df[['Age', 'Salary']]", explanation: 'Select 2 features' },
      { code: "y = df['Purchased']", explanation: 'Select binary target' },
      { code: '', explanation: '' },
      { code: '# Split dataset into training (80%) and testing (20%) sets', explanation: 'Split data' },
      { code: 'X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)', explanation: '80/20 train/test split' },
      { code: '', explanation: '' },
      { code: '# Standardize features (Mean=0, Std=1)', explanation: 'Scaling' },
      { code: 'scaler = StandardScaler()', explanation: 'Instantiate scaler' },
      { code: 'X_train = scaler.fit_transform(X_train)', explanation: 'Fit and transform training features' },
      { code: 'X_test = scaler.transform(X_test)', explanation: 'Transform testing features without leakage' },
      { code: '', explanation: '' },
      { code: '# Train K-Nearest Neighbors (KNN) classifier', explanation: 'Model training' },
      { code: 'model = KNeighborsClassifier(n_neighbors=3)', explanation: 'Instantiate 3-NN model' },
      { code: 'model.fit(X_train, y_train)', explanation: 'Fit model' },
      { code: '', explanation: '' },
      { code: '# Make predictions on test set', explanation: 'Inference' },
      { code: 'y_pred = model.predict(X_test)', explanation: 'Predict test labels' },
      { code: '', explanation: '' },
      { code: '# Compute accuracy and confusion matrix', explanation: 'Evaluation' },
      { code: 'accuracy = accuracy_score(y_test, y_pred)', explanation: 'Compute test accuracy' },
      { code: 'print(f"Model Accuracy: {accuracy * 100:.2f}%")', explanation: 'Print accuracy' },
      { code: 'conf_matrix = confusion_matrix(y_test, y_pred)', explanation: 'Compute confusion matrix' },
      { code: 'print("Confusion Matrix:\\n", conf_matrix)', explanation: 'Print confusion matrix' },
    ],
    executionFlow: [
      { number: 1, title: 'Data Partitioning & Scaling', description: 'Splits 10 customer records and normalizes Age and Salary with StandardScaler.' },
      { number: 2, title: 'K-NN Fitting', description: 'Trains a 3-Nearest Neighbors model on standardized feature space.' },
      { number: 3, title: 'Diagnostic Auditing', description: 'Evaluates accuracy and prints the 2x2 confusion matrix showing True Positives and True Negatives.' },
    ],
    input: '10 customer records with Age, Salary, and Purchased label',
    output: 'Model Accuracy: 100.00%\nConfusion Matrix:\n[[1 0]\n [0 1]]',
    interpretation: 'By standardizing feature scales before running KNN, distance computations treat Age and Salary equally, producing 100% test accuracy on the held-out sample.',
    colabInstructions: ['Run in Google Colab to test the KNN classification pipeline.'],
  },
  mcqs: [
    {
      id: 'q1',
      question: 'Why is using a Scikit-Learn Pipeline best practice when performing cross-validation?',
      options: [
        { id: 'a', text: 'It prevents data leakage by ensuring preprocessing transforms are fit ONLY on the training folds' },
        { id: 'b', text: 'It converts the model into a mobile app' },
        { id: 'c', text: 'It makes the model run 1,000 times faster' },
        { id: 'd', text: 'It eliminates the need for any data' },
      ],
      correctAnswer: 'a',
      explanation: 'A Pipeline guarantees that feature scaling and encoding are fit strictly on training folds and applied to validation folds, eliminating data leakage.',
      incorrectFeedback: 'Preventing data leakage during cross-validation is the primary design motivation for Pipelines.',
    },
          {
      id: 'q2',
      question: 'What is scikit-learn primarily used for?',
      options: [
        { id: 'a', text: 'Web development' },
        { id: 'b', text: 'Classical machine learning: classification, regression, clustering, dimensionality reduction' },
        { id: 'c', text: 'Database management' },
        { id: 'd', text: 'Video editing' },
      ],
      correctAnswer: 'b',
      explanation: 'Scikit-learn is Python\'s standard ML library providing implementations of SVM, Random Forest, KNN, K-Means, PCA, and more. Not designed for deep learning (use PyTorch/TensorFlow for that).',
      incorrectFeedback: 'Scikit-learn is the go-to Python library for classical machine learning algorithms.',
    },
    {
      id: 'q3',
      question: 'What is the standard API pattern in scikit-learn?',
      options: [
        { id: 'a', text: 'model.train() then model.test()' },
        { id: 'b', text: 'model.fit(X_train, y_train) then model.predict(X_test)' },
        { id: 'c', text: 'model.compile() then model.run()' },
        { id: 'd', text: 'model.start() then model.stop()' },
      ],
      correctAnswer: 'b',
      explanation: 'Scikit-learn\'s consistent API: (1) Create model, (2) fit(X_train, y_train) learns parameters, (3) predict(X_test) makes predictions, (4) score() evaluates. Works for all estimators.',
      incorrectFeedback: 'Scikit-learn uses fit() for training and predict() for inference.',
    },
    {
      id: 'q4',
      question: 'Which library should you use for feature preprocessing in scikit-learn?',
      options: [
        { id: 'a', text: 'sklearn.preprocessing (StandardScaler, MinMaxScaler, LabelEncoder, etc.)' },
        { id: 'b', text: 'sklearn.training' },
        { id: 'c', text: 'sklearn.features' },
        { id: 'd', text: 'sklearn.cleaning' },
      ],
      correctAnswer: 'a',
      explanation: 'sklearn.preprocessing provides: StandardScaler (z-score), MinMaxScaler (0-1), LabelEncoder (categorical→numerical), OneHotEncoder, PolynomialFeatures, and more.',
      incorrectFeedback: 'Use sklearn.preprocessing for feature scaling and encoding.',
    },
    {
      id: 'q5',
      question: 'What does train_test_split() do in scikit-learn?',
      options: [
        { id: 'a', text: 'Trains two models simultaneously' },
        { id: 'b', text: 'Randomly splits data into training and testing subsets' },
        { id: 'c', text: 'Deletes bad data' },
        { id: 'd', text: 'Combines multiple datasets' },
      ],
      correctAnswer: 'b',
      explanation: 'train_test_split(X, y, test_size=0.2, random_state=42) randomly partitions data into train/test sets. random_state ensures reproducibility. Essential for model evaluation.',
      incorrectFeedback: 'train_test_split() partitions data into separate training and testing sets.',
    },
  ],
};

export const buildingMLModel: Topic = {
  id: 'building-ml-model',
  moduleId: 'machine-learning',
  number: 9,
  title: 'Building a Complete ML Model: End-to-End Capstone',
  description: 'Synthesize everything learned in Module 2: ingest raw data, preprocess, tune hyperparameters, evaluate, and export a production model.',
  objectives: [
    'Execute a complete end-to-end machine learning project workflow',
    'Perform hyperparameter tuning with GridSearchCV',
    'Audit model metrics with confusion matrices and classification reports',
    'Serialize the final trained pipeline for deployment',
  ],
  story: `You have been hired as the Lead Machine Learning Engineer for a healthcare startup. The clinical board presents you with a challenge:
  
"Every day, thousands of patients undergo breast cancer screenings. We have numerical measurements of cell nuclei extracted from biopsy images. Build a reliable, verified machine learning system that accurately classifies tumors as benign or malignant."
  
This is where theory meets reality. You must clean the data, prevent leakage, search for optimal hyperparameters, evaluate precision and recall, and export a verified pipeline that doctors can trust.`,
  motivation: `**Real-world competency**: Building isolated snippets is easy; assembling a complete, robust, leak-free, production-grade ML pipeline from scratch is what distinguishes professional AI practitioners.`,
  concept: {
    simple: `Building a real ML project follows a disciplined recipe:
1. Ingest real data
2. Split cleanly into Train and Test
3. Build a preprocessing and modeling Pipeline
4. Automatically search for the best settings (GridSearchCV)
5. Test once on untouched data
6. Export the trained model to disk for deployment`,
    technical: `End-to-end ML lifecycle orchestration integrates exploratory data analysis, stratified train/test partitioning, Pipeline specification, exhaustive hyperparameter optimization over candidate grid $\\Theta = \\prod_j \\Lambda_j$ via K-fold cross validation, multi-metric evaluation, and serialization to bytecode using Joblib.`,
  },
  keyTerms: [
    { term: 'GridSearchCV', simple: 'A tool that automatically tests dozens of setting combinations to find the winner.', technical: 'Exhaustive search over specified parameter values for an estimator evaluated by cross-validation.' },
    { term: 'Model Serialization', simple: 'Saving a trained model to a file so a website or server can load it instantly.', technical: 'Pickling the internal state and weight vectors of an estimator to disk for stateless inference.' },
  ],
  equations: [
    {
      latex: '\\text{Accuracy} = \\frac{TP + TN}{TP + TN + FP + FN}',
      explanation: 'Overall classification accuracy across all test samples.',
      symbols: [
        { symbol: 'TP, TN', meaning: 'Correct predictions', interpretation: 'True Positives and True Negatives' },
        { symbol: 'FP, FN', meaning: 'Incorrect predictions', interpretation: 'False Positives and False Negatives' },
      ],
      example: {
        description: 'Test set of 100 samples with 95 correct classifications.',
        calculation: '\\text{Accuracy} = \\frac{95}{100} = 0.95 = 95\\%',
        result: 'Accuracy = 95.0%',
      },
    },
  ],
  howItWorks: [
    { number: 1, title: 'Data Loading', description: 'Load Breast Cancer Wisconsin clinical diagnostic dataset (569 samples, 30 features).' },
    { number: 2, title: 'Train-Test Partition', description: 'Stratified 80/20 holdout split.' },
    { number: 3, title: 'Pipeline & Grid Search', description: 'StandardScaler chained with Logistic Regression, optimizing penalty parameter C.' },
    { number: 4, title: 'Final Test Audit', description: 'Generate comprehensive classification report and confusion matrix.' },
  ],
  applications: [
    { title: 'Clinical Diagnostic Decision Support', problem: 'Assisting pathology labs in triaging urgent biopsy cases.', solution: 'High-recall pipeline flags high-probability malignant samples for immediate pathologist review.' },
  ],
  activity: {
    type: 'mcq',
    title: 'Workflow Ordering',
    question: 'In a professional ML workflow, which step should occur FIRST?',
    options: [
      { id: 'a', text: 'Splitting data into Train and Test sets' },
      { id: 'b', text: 'Tuning hyperparameters on the test set' },
      { id: 'c', text: 'Deploying the model to production' },
      { id: 'd', text: 'Calculating final test accuracy' },
    ],
    correctAnswer: 'a',
    explanation: 'Splitting data must occur before any preprocessing, model fitting, or hyperparameter search to strictly prevent data leakage.',
    hint: 'Which step prevents contaminating your validation process?',
  },
  pythonHandsOn: {
    title: 'Complete Machine Learning Capstone Pipeline',
    description: 'Build, tune, evaluate, and serialize an end-to-end breast cancer classifier in 25 lines of clean code.',
    packages: ['scikit-learn'],
    installCommand: 'pip install scikit-learn',
    imports: [
      { code: 'from sklearn.datasets import load_breast_cancer', explanation: 'Clinical diagnostic dataset' },
      { code: 'from sklearn.model_selection import train_test_split, GridSearchCV', explanation: 'Split & tuning' },
      { code: 'from sklearn.preprocessing import StandardScaler', explanation: 'Scaler' },
      { code: 'from sklearn.linear_model import LogisticRegression', explanation: 'Classifier' },
      { code: 'from sklearn.pipeline import Pipeline', explanation: 'Pipeline' },
      { code: 'from sklearn.metrics import classification_report', explanation: 'Metrics' },
    ],
    code: [
      { code: '# 1. Load data', explanation: '569 patient samples' },
      { code: 'X, y = load_breast_cancer(return_X_y=True)', explanation: '30 diagnostic features' },
      { code: '', explanation: '' },
      { code: '# 2. Stratified split', explanation: '80% train, 20% test' },
      { code: 'X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42, stratify=y)', explanation: 'Holdout' },
      { code: '', explanation: '' },
      { code: '# 3. Construct Pipeline', explanation: 'Scale then classify' },
      { code: 'pipe = Pipeline([("scaler", StandardScaler()), ("clf", LogisticRegression(max_iter=1000))])', explanation: 'Clean chain' },
      { code: '', explanation: '' },
      { code: '# 4. Hyperparameter tuning via 5-Fold Cross-Validation', explanation: 'GridSearch' },
      { code: 'param_grid = {"clf__C": [0.01, 0.1, 1.0, 10.0]}', explanation: 'Test regularization strengths' },
      { code: 'grid = GridSearchCV(pipe, param_grid, cv=5, scoring="f1")', explanation: 'Optimize for F1' },
      { code: 'grid.fit(X_train, y_train)', explanation: 'Run search' },
      { code: '', explanation: '' },
      { code: 'print("Best Hyperparameter C:", grid.best_params_)', explanation: 'Show winner' },
      { code: 'print(f"Best CV F1-Score: {grid.best_score_:.3f}")', explanation: 'Show validation score' },
      { code: '', explanation: '' },
      { code: '# 5. Final Test Evaluation', explanation: 'Test once' },
      { code: 'test_preds = grid.predict(X_test)', explanation: 'Run on held-out test' },
      { code: 'print("\\nFinal Test Report:")', explanation: 'Report' },
      { code: 'print(classification_report(y_test, test_preds, target_names=["Malignant", "Benign"]))', explanation: 'Full audit' },
    ],
    executionFlow: [
      { number: 1, title: 'Ingestion & Partition', description: 'Dataset partitioned cleanly into training (455) and holdout (114).' },
      { number: 2, title: 'GridSearch', description: 'Cross-validates 4 candidate regularization strengths without data leakage.' },
      { number: 3, title: 'Final Validation', description: 'Achieves 98%+ test accuracy and F1 score on real clinical test samples.' },
    ],
    input: 'Wisconsin Breast Cancer dataset (30 features per patient)',
    output: 'Best Hyperparameter C: {\'clf__C\': 0.1}\nBest CV F1-Score: 0.982\n\nFinal Test Report:\n              precision    recall  f1-score\n   Malignant       0.98      0.95      0.96\n      Benign       0.97      0.99      0.98\n    accuracy                           0.97',
    interpretation: 'A complete, leak-free pipeline achieving 97% overall accuracy and 98% benign F1-score ready for clinical evaluation.',
    colabInstructions: ['Run in Google Colab to see the full end-to-end project executed.'],
  },
  mcqs: [
    {
      id: 'q1',
      question: 'Why is it critical to use the test set ONLY ONCE at the very conclusion of a project?',
      options: [
        { id: 'a', text: 'Repeatedly testing and tweaking hyperparameters based on the test set turns the test set into training data (overfitting the test set)' },
        { id: 'b', text: 'Test data self-destructs after one query' },
        { id: 'c', text: 'Scikit-Learn throws an exception if predict is called twice' },
        { id: 'd', text: 'Because cloud compute charges extra for second tests' },
      ],
      correctAnswer: 'a',
      explanation: 'Tuning model settings based on test set feedback leaks information from the test set into your design choices, invalidating its ability to measure true generalization.',
      incorrectFeedback: 'The test set must remain an unbiased proxy for the unknown real world.',
    },
          {
      id: 'q2',
      question: 'What is the typical machine learning workflow?',
      options: [
        { id: 'a', text: 'Just run a model on raw data' },
        { id: 'b', text: 'Data collection → EDA → Preprocessing → Model selection → Training → Evaluation → Tuning → Deployment' },
        { id: 'c', text: 'Deploy first, collect data later' },
        { id: 'd', text: 'Use only one model always' },
      ],
      correctAnswer: 'b',
      explanation: 'ML pipeline: (1) Collect data, (2) Explore (EDA), (3) Clean/preprocess, (4) Feature engineering, (5) Train multiple models, (6) Evaluate with test set, (7) Hyperparameter tuning, (8) Deploy.',
      incorrectFeedback: 'ML is a structured pipeline from data to deployment, not a single step.',
    },
    {
      id: 'q3',
      question: 'What is hyperparameter tuning?',
      options: [
        { id: 'a', text: 'Training the model' },
        { id: 'b', text: 'Optimizing model settings (learning rate, max depth, etc.) that are set before training' },
        { id: 'c', text: 'Collecting more data' },
        { id: 'd', text: 'Deploying the model' },
      ],
      correctAnswer: 'b',
      explanation: 'Hyperparameters (learning rate, tree depth, k in KNN) are set before training. Tuning methods: grid search, random search, Bayesian optimization. Use validation set or cross-validation.',
      incorrectFeedback: 'Hyperparameter tuning optimizes model configuration settings before training.',
    },
    {
      id: 'q4',
      question: 'What is GridSearchCV in scikit-learn?',
      options: [
        { id: 'a', text: 'A visualization tool' },
        { id: 'b', text: 'Automated hyperparameter tuning via exhaustive search over parameter grid with cross-validation' },
        { id: 'c', text: 'A data cleaning tool' },
        { id: 'd', text: 'A plotting library' },
      ],
      correctAnswer: 'b',
      explanation: 'GridSearchCV tests all combinations of hyperparameters via cross-validation. Example: {learning_rate: [0.01, 0.1], max_depth: [3, 5, 7]} → tests 2×3=6 combinations.',
      incorrectFeedback: 'GridSearchCV automates hyperparameter optimization with exhaustive search + CV.',
    },
    {
      id: 'q5',
      question: 'Why is it important to set random_state/seed in ML experiments?',
      options: [
        { id: 'a', text: 'It makes models run faster' },
        { id: 'b', text: 'For reproducibility: ensures the same random splits and initializations across runs' },
        { id: 'c', text: 'It improves accuracy' },
        { id: 'd', text: 'It is not important' },
      ],
      correctAnswer: 'b',
      explanation: 'Setting random_state (e.g., 42) makes random processes deterministic: train_test_split, weight initialization, K-Means initialization. Critical for debugging and reproducible research.',
      incorrectFeedback: 'random_state ensures reproducibility by fixing random number generation.',
    },
  ],
};

export const module2Topics: Topic[] = [
  whatIsML,
  dataAndFeatures,
  trainingAndTesting,
  classification,
  regression,
  modelEvaluation,
  overfittingUnderfitting,
  introScikitLearn,
  buildingMLModel,
];
