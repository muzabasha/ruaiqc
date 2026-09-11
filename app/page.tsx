import Link from 'next/link';
import { ArrowRight, Brain, Atom, Code, BookOpen, Lightbulb, Users } from 'lucide-react';
import Header from '@/components/Header';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              AI & Quantum Computing <br />
              <span className="bg-gradient-to-r from-primary-600 to-quantum-600 bg-clip-text text-transparent">
                for Everyone
              </span>
            </h1>
            <p className="text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Learn. Visualize. Code. Experiment. Understand.
            </p>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
              Start your journey into Artificial Intelligence and Quantum Computing — no prior knowledge required.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/modules"
              className="flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl"
            >
              <span>Start Learning</span>
              <ArrowRight size={20} />
            </Link>
            <a
              href="https://scholar-sparkle-web.lovable.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl"
            >
              <span>👨‍🏫 For Professors</span>
            </a>
            <a
              href="#how-it-works"
              className="flex items-center space-x-2 bg-white hover:bg-gray-50 text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors border-2 border-primary-600"
            >
              <span>How It Works</span>
            </a>
          </div>
        </div>
      </section>

      {/* Why Learn Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Why Learn AI & Quantum Computing?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-8 border-2 border-primary-200">
              <div className="flex items-center space-x-3 mb-4">
                <Brain className="text-primary-600" size={32} />
                <h3 className="text-2xl font-bold text-gray-900">Why AI?</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Artificial Intelligence is transforming every industry — from healthcare to entertainment, finance to education. AI skills are among the most in-demand globally.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Understand the technology shaping our world</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Unlock career opportunities across all fields</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Solve complex problems with machine learning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Build intelligent applications and systems</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-quantum-50 to-quantum-100 rounded-lg p-8 border-2 border-quantum-200">
              <div className="flex items-center space-x-3 mb-4">
                <Atom className="text-quantum-600" size={32} />
                <h3 className="text-2xl font-bold text-gray-900">Why Quantum?</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Quantum computing represents the future of computation, offering solutions to problems that are impractical for classical computers.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-quantum-600 mr-2">✓</span>
                  <span>Master the next frontier of computing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-quantum-600 mr-2">✓</span>
                  <span>Understand quantum advantage and applications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-quantum-600 mr-2">✓</span>
                  <span>Prepare for quantum-enhanced AI systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-quantum-600 mr-2">✓</span>
                  <span>Join cutting-edge research and innovation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            How You Will Learn
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Our unique learning philosophy ensures deep understanding through active engagement
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: BookOpen, title: 'Story & Concept', desc: 'Start with relatable stories and clear explanations' },
              { icon: Brain, title: 'Visualize', desc: 'See concepts through diagrams and illustrations' },
              { icon: Code, title: 'Code & Experiment', desc: 'Write Python code and run real experiments' },
              { icon: Lightbulb, title: 'Practice & Master', desc: 'Reinforce learning with interactive activities' },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-primary-500 to-quantum-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="text-white" size={28} />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block text-4xl text-primary-300 mt-4">→</div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
            <h4 className="font-bold text-xl text-blue-900 mb-3 text-center">
              📚 Complete Learning Path
            </h4>
            <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-700">
              <span className="bg-white px-3 py-1 rounded-full border border-blue-200">Story</span>
              <span className="text-blue-400">→</span>
              <span className="bg-white px-3 py-1 rounded-full border border-blue-200">Motivation</span>
              <span className="text-blue-400">→</span>
              <span className="bg-white px-3 py-1 rounded-full border border-blue-200">Concept</span>
              <span className="text-blue-400">→</span>
              <span className="bg-white px-3 py-1 rounded-full border border-blue-200">Mathematics</span>
              <span className="text-blue-400">→</span>
              <span className="bg-white px-3 py-1 rounded-full border border-blue-200">Visualization</span>
              <span className="text-blue-400">→</span>
              <span className="bg-white px-3 py-1 rounded-full border border-blue-200">Activity</span>
              <span className="text-blue-400">→</span>
              <span className="bg-white px-3 py-1 rounded-full border border-blue-200">Python</span>
              <span className="text-blue-400">→</span>
              <span className="bg-white px-3 py-1 rounded-full border border-blue-200">Feedback</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Designed for Beginners
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">Zero Prerequisites</h3>
              <p className="text-gray-700">
                No prior AI or Quantum Computing knowledge required. We start from the absolute basics and build up systematically.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">Hands-On Learning</h3>
              <p className="text-gray-700">
                Copy Python code directly to Google Colab. Run experiments, visualize results, and learn by doing.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">Feedback-Based Learning</h3>
              <p className="text-gray-700">
                Interactive activities and quizzes with detailed explanations help reinforce your understanding at every step.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">Visual & Interactive</h3>
              <p className="text-gray-700">
                Concepts are explained through diagrams, visualizations, and interactive components — not just text.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">Self-Paced</h3>
              <p className="text-gray-700">
                Learn at your own pace. Track your progress, revisit topics, and master concepts before moving forward.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">For Everyone</h3>
              <p className="text-gray-700">
                Faculty, students, and professionals from any discipline can learn AI and Quantum Computing concepts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <Users className="mx-auto text-primary-600 mb-4" size={48} />
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Who Is This Platform For?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            This platform is designed for <span className="font-semibold">complete beginners</span> who want to understand AI and Quantum Computing from the ground up.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h4 className="font-bold text-lg text-gray-900 mb-3">Perfect For:</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Students exploring AI and Quantum Computing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Faculty preparing to teach these topics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Professionals from any field wanting to upskill</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Anyone curious about the future of technology</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h4 className="font-bold text-lg text-gray-900 mb-3">You Don&apos;t Need:</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span>Advanced mathematics background</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span>Prior programming experience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span>Physics or quantum mechanics knowledge</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span>Expensive software or hardware</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary-600 to-quantum-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Begin with Module 1 and discover how AI and Quantum Computing work — step by step, concept by concept.
          </p>
          <Link
            href="/modules"
            className="inline-flex items-center space-x-2 bg-white text-primary-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl"
          >
            <span>Explore All Modules</span>
            <ArrowRight size={22} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-2">AI & Quantum Computing for Everyone</p>
          <p className="text-sm text-gray-400">
            Learn. Visualize. Code. Experiment. Understand.
          </p>
        </div>
      </footer>
    </div>
  );
}
