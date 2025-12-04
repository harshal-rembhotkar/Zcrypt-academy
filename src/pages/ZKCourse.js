import React, { useState, useEffect } from 'react';
import {
  Lock,
  Cpu,
  ArrowRight,
  Box,
  Code,
  Layers,
  Zap,
  Database,
  Share2,
  BookOpen,
  Repeat,
  AlertTriangle,
  Terminal
} from 'lucide-react';
import SidebarItem from '../components/SidebarItem';
import { Link } from 'react-router-dom';

const sections = [
  // Chapter 1 sections
  {
    id: '1.1',
    title: '1.1 Introduction',
    icon: <Lock className="w-5 h-5" />,
    content: (
      <div className="space-y-8">
        <header className="border-b border-purple-100 dark:border-purple-900/30 pb-6">
          <h1 className="text-4xl font-extrabold text-purple-900 dark:text-purple-100 mb-4">1.1 Introduction</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">An intuitive view of zero knowledge proofs and why hiding the witness while convincing a verifier is useful.</p>
        </header>

        <section className="prose prose-purple dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
          <p>
            A zero knowledge proof lets one party, the prover, convince another party, the verifier, that a statement is true while keeping secret the private information used to establish that statement.
          </p>
          <p>
            This is useful when the verifier needs assurance but must not learn the secret data. Examples include proving age without revealing date of birth, proving solvency without exposing positions, or proving a complex computation was executed correctly without disclosing inputs.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-6">Example</h3>
          <div className="bg-gray-900 rounded-xl p-4 text-gray-100 font-mono text-sm mb-2 border-l-4 border-purple-500">
            <p>Prove you are older than 18 without sharing your date of birth. A ZKP can confirm the age claim while keeping the birth date private.</p>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-6">Exercise</h3>
          <p className="text-sm">Give a real-world example where revealing underlying data would be harmful. <strong className="block mt-2">Answer:</strong> Showing exact bank balances can expose private positions. A ZKP can instead prove a balance exceeds a threshold.</p>
        </section>
      </div>
    )
  },

  {
    id: '1.2',
    title: '1.2 Terminology',
    icon: <Code className="w-5 h-5" />,
    content: (
      <div className="space-y-8">
        <header className="border-b border-purple-100 dark:border-purple-900/30 pb-6">
          <h1 className="text-4xl font-extrabold text-purple-900 dark:text-purple-100 mb-4">1.2 Terminology</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">Formal vocabulary: instance, witness, relation, language, and statement.</p>
        </header>

        <section className="prose prose-purple dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
          <p>
            The public input is the instance x. The private input held by the prover is the witness w. A relation R is a set of valid pairs (x, w). The language L is the set of instances for which there exists a witness w with (x, w) in R.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-6">Example: Commitment</h3>
          <div className="bg-gray-900 rounded-xl p-4 text-gray-100 font-mono text-sm mb-2 border-l-4 border-purple-500">
            <p>If C is a commitment to value v using randomness r, then the instance can be C and the witness can be (v, r). The relation checks that opening C with (v, r) yields v.</p>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-6">Exercise</h3>
          <p className="text-sm">For a digital signature, suggest instance and witness. <strong className="block mt-2">Answer:</strong> Instance: public key, message, signature. Witness: signer secret key.</p>
        </section>
      </div>
    )
  },

  {
    id: '1.3',
    title: '1.3 Specifying statements',
    icon: <Layers className="w-5 h-5" />,
    content: (
      <div className="space-y-8">
        <header className="border-b border-purple-100 dark:border-purple-900/30 pb-6">
          <h1 className="text-4xl font-extrabold text-purple-900 dark:text-purple-100 mb-4">1.3 Specifying statements for zero knowledge</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">How relations, circuits, and R1CS encode statements for proofs.</p>
        </header>

        <section className="prose prose-purple dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
          <p>
            Relations are often described as programs, Boolean circuits, arithmetic circuits, or rank-1 constraint systems. These forms let proof systems operate on a standard representation.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-6">Circuit representation</h3>
          <p>A circuit is a directed acyclic graph of inputs and gates with a single output. Cost is measured in gate count, depth, and variable counts.</p>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-6">R1CS representation</h3>
          <p>R1CS uses triples of vectors (a, b, c). Each constraint enforces (a·s) * (b·s) = (c·s) where s is the solution vector with a fixed first coordinate for constants.</p>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-6">Exercise</h3>
          <p className="text-sm">Why is R1CS useful? <strong className="block mt-2">Answer:</strong> It captures linear and multiplicative relations that converters and provers can transform into polynomials.</p>
        </section>
      </div>
    )
  },

  {
    id: '1.4',
    title: '1.4 Proofs: knowledge vs membership',
    icon: <BookOpen className="w-5 h-5" />,
    content: (
      <div className="space-y-8">
        <header className="border-b border-purple-100 dark:border-purple-900/30 pb-6">
          <h1 className="text-4xl font-extrabold text-purple-900 dark:text-purple-100 mb-4">1.4 Proofs of knowledge versus proofs of membership</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">Distinguishing proofs that show knowledge from those that show membership.</p>
        </header>

        <section className="prose prose-purple dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
          <p>
            A proof of knowledge demonstrates the prover holds a witness w for instance x. A proof of membership establishes only that x is in the language L.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-6">Example: Discrete log</h3>
          <p>Given x = g^w, proving knowledge of w is different and harder than merely asserting x belongs to the group.</p>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-6">Exercise</h3>
          <p className="text-sm">Give an example where membership is trivial but knowledge is not. <strong className="block mt-2">Answer:</strong> Any group element is a member of the group. Proving knowledge of its discrete log is non-trivial.</p>
        </section>
      </div>
    )
  },

  {
    id: '1.5',
    title: '1.5 Syntax and protocol interfaces',
    icon: <Terminal className="w-5 h-5" />,
    content: (
      <div className="space-y-8">
        <header className="border-b border-purple-100 dark:border-purple-900/30 pb-6">
          <h1 className="text-4xl font-extrabold text-purple-900 dark:text-purple-100 mb-4">1.5 Syntax and protocol interfaces</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">Describe Prove, Verify, and Setup algorithms and models like CRS and NIZK.</p>
        </header>

        <section className="prose prose-purple dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
          <p>
            A proof system defines Prove and Verify algorithms. A Setup algorithm may generate public parameters or trapdoors used by both parties. Non-interactive proofs are produced as a single prover message, often after a setup like CRS or by using Fiat-Shamir.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-6">Example: CRS</h3>
          <p>A common reference string is shared by parties. Some NIZK systems rely on a properly generated CRS for security.</p>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-6">Exercise</h3>
          <p className="text-sm">What is the difference between interactive and non-interactive proofs? <strong className="block mt-2">Answer:</strong> Interactive proofs involve back-and-forth messages. Non-interactive proofs are a single message checked by the verifier.</p>
        </section>
      </div>
    )
  },

  {
    id: '1.6',
    title: '1.6 Definitions and security properties',
    icon: <AlertTriangle className="w-5 h-5" />,
    content: (
      <div className="space-y-8">
        <header className="border-b border-purple-100 dark:border-purple-900/30 pb-6">
          <h1 className="text-4xl font-extrabold text-purple-900 dark:text-purple-100 mb-4">1.6 Definitions and security properties</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">Completeness, soundness, proofs of knowledge, and zero knowledge.</p>
        </header>

        <section className="prose prose-purple dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Completeness</h3>
          <p>An honest prover with a valid witness convinces an honest verifier with overwhelming probability.</p>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Soundness</h3>
          <p>A cheating prover cannot convince the verifier to accept a false statement except with negligible probability.</p>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Proof of knowledge</h3>
          <p>Strengthens soundness by requiring an extractor that can recover a witness from any prover that convinces the verifier.</p>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Zero knowledge</h3>
          <p>There exists a simulator that produces transcripts indistinguishable from real ones without the witness, so the verifier learns nothing beyond the truth of the statement.</p>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-6">Exercise</h3>
          <p className="text-sm">What role does a simulator play? <strong className="block mt-2">Answer:</strong> It shows that transcripts can be created without a witness, so nothing extra is leaked.</p>
        </section>
      </div>
    )
  },

  {
    id: '1.7',
    title: '1.7 Assumptions',
    icon: <Lock className="w-5 h-5" />,
    content: (
      <div className="space-y-8">
        <header className="border-b border-purple-100 dark:border-purple-900/30 pb-6">
          <h1 className="text-4xl font-extrabold text-purple-900 dark:text-purple-100 mb-4">1.7 Assumptions</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">Cryptographic and trust assumptions used in security reductions.</p>
        </header>

        <section className="prose prose-purple dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
          <p>
            Security relies on explicit assumptions like collision resistance or discrete log hardness. Designs should be modular so primitives can be replaced if assumptions fail.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-6">Exercise</h3>
          <p className="text-sm">Why avoid relying on broken assumptions? <strong className="block mt-2">Answer:</strong> If an assumption is invalidated, security collapses. Modular design mitigates this risk.</p>
        </section>
      </div>
    )
  },

  {
    id: '1.8',
    title: '1.8 Efficiency and benchmarking',
    icon: <Cpu className="w-5 h-5" />,
    content: (
      <div className="space-y-8">
        <header className="border-b border-purple-100 dark:border-purple-900/30 pb-6">
          <h1 className="text-4xl font-extrabold text-purple-900 dark:text-purple-100 mb-4">1.8 Efficiency and benchmarking</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">Metrics, security parameters, and post-quantum considerations.</p>
        </header>

        <section className="prose prose-purple dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
          <p>
            Efficiency includes round complexity, communication cost, prover and verifier time, and setup cost. Benchmarks should use clear units and sensible security parameters.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-6">Post quantum</h3>
          <p>Consider post-quantum assumptions for long-lived proofs where quantum adversaries are a concern.</p>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-6">Exercise</h3>
          <p className="text-sm">List three efficiency metrics. <strong className="block mt-2">Answer:</strong> Round complexity, proof size, prover computation.</p>
        </section>
      </div>
    )
  },

  // Chapter 2 sections
  {
    id: '2.1',
    title: '2.1 Background and overview',
    icon: <Terminal className="w-5 h-5" />,
    content: (
      <div className="space-y-8">
        <header className="border-b border-purple-100 dark:border-purple-900/30 pb-6">
          <h1 className="text-4xl font-extrabold text-purple-900 dark:text-purple-100 mb-4">2.1 Background and overview</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">IT cores, cryptographic compilers, and the two stage design pattern.</p>
        </header>

        <section className="prose prose-purple dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
          <p>
            Many systems use an information theoretic core with a later cryptographic compiler. This separation simplifies reasoning and allows modular analysis.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-6">IT core</h3>
          <p>Idealized proofs give strong guarantees but may not be directly implementable.</p>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-6">Compiler</h3>
          <p>Compilers realize ideal components with hash functions, commitments, or pairings. Security then depends on those primitives.</p>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-6">Exercise</h3>
          <p className="text-sm">Why split design into IT core and compiler? <strong className="block mt-2">Answer:</strong> It isolates logical correctness from cryptographic instantiation.</p>
        </section>
      </div>
    )
  },

  {
    id: '2.2',
    title: '2.2 Information theoretic proof systems',
    icon: <Repeat className="w-5 h-5" />,
    content: (
      <div className="space-y-8">
        <header className="border-b border-purple-100 dark:border-purple-900/30 pb-6">
          <h1 className="text-4xl font-extrabold text-purple-900 dark:text-purple-100 mb-4">2.2 Information theoretic proof systems</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">PCP, MPC-in-the-head, and algebraic encodings.</p>
        </header>

        <section className="prose prose-purple dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
          <p>
            Families include probabilistically checkable proofs, linear PCPs, interactive oracle proofs, MPC in the head, and algebraic encodings like QAPs and QSPs.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-6">PCP</h3>
          <p>Prover sends a long proof and the verifier queries a few positions at random. PCPs underlie many succinct constructions.</p>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-6">MPC in the head</h3>
          <p>A prover simulates an MPC execution among virtual parties and reveals carefully chosen views to the verifier, preserving zero knowledge while achieving soundness.</p>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-6">Exercise</h3>
          <p className="text-sm">Name two IT paradigms used as cores. <strong className="block mt-2">Answer:</strong> PCP and MPC-in-the-head.</p>
        </section>
      </div>
    )
  },

  {
    id: '2.2.1',
    title: '2.2.1 Summary of IT proof types',
    icon: <Box className="w-5 h-5" />,
    content: (
      <div className="space-y-8">
        <header className="border-b border-purple-100 dark:border-purple-900/30 pb-6">
          <h1 className="text-4xl font-extrabold text-purple-900 dark:text-purple-100 mb-4">2.2.1 Summary of IT proof types</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">A quick list of IT families and their trade offs.</p>
        </header>

        <section className="prose prose-purple dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
          <ul className="list-disc list-inside">
            <li>PCP: verifier queries a long proof at a few positions.</li>
            <li>Linear PCP: verifier queries linear combinations of proof symbols.</li>
            <li>MPC in the head: use simulated MPC views to build proofs.</li>
            <li>Algebraic encodings: translate circuits into QAPs or QSPs for succinct checking.</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-6">Exercise</h3>
          <p className="text-sm">What is the trade off with PCP-based compilers? <strong className="block mt-2">Answer:</strong> They may incur large communication costs unless optimized.</p>
        </section>
      </div>
    )
  },

  {
    id: '2.2.2',
    title: '2.2.2 From PCP to practical compilers',
    icon: <Share2 className="w-5 h-5" />,
    content: (
      <div className="space-y-8">
        <header className="border-b border-purple-100 dark:border-purple-900/30 pb-6">
          <h1 className="text-4xl font-extrabold text-purple-900 dark:text-purple-100 mb-4">2.2.2 From PCP to practical compilers</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">How cryptographic compilers turn PCP cores into usable protocols.</p>
        </header>

        <section className="prose prose-purple dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
          <p>
            Compilers use commitments, hashing, and transforms such as Fiat-Shamir to produce non-interactive proofs. Each choice trades off efficiency, assumptions, and soundness type.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-6">Fiat-Shamir</h3>
          <p>The Fiat-Shamir transform replaces verifier randomness with a hash of the transcript, yielding non-interactive proofs in the random oracle model.</p>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-6">Exercise</h3>
          <p className="text-sm">What does Fiat-Shamir achieve? <strong className="block mt-2">Answer:</strong> It removes interaction by deriving challenges from transcript hashes.</p>
        </section>
      </div>
    )
  },

  {
    id: '2.2.2.2',
    title: '2.2.2.2 Example: three coloring',
    icon: <BookOpen className="w-5 h-5" />,
    content: (
      <div className="space-y-8">
        <header className="border-b border-purple-100 dark:border-purple-900/30 pb-6">
          <h1 className="text-4xl font-extrabold text-purple-900 dark:text-purple-100 mb-4">2.2.2.2 Example: three coloring</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">A canonical PCP example illustrating local checks with global meaning.</p>
        </header>

        <section className="prose prose-purple dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
          <p>
            The prover commits to a permuted coloring and the verifier opens colors on edges to check validity. One run has weak soundness but repetition amplifies soundness while preserving zero knowledge if done sequentially.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-6">Exercise</h3>
          <p className="text-sm">Why does parallel repetition break some zero knowledge proofs? <strong className="block mt-2">Answer:</strong> Parallel repetition can reduce simulator flexibility and break simulation techniques used to prove zero knowledge.</p>
        </section>
      </div>
    )
  }
];

const ZKCourse = () => {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const contentContainer = document.getElementById('zk-content');
    if (contentContainer) contentContainer.scrollTop = 0;
  }, [activeSection]);

  const current = sections[activeSection];

  return (
    <div className="flex h-[calc(100vh-80px)] overflow-hidden bg-white dark:bg-dark-bg">
      <div className="w-80 bg-gray-50 dark:bg-slate-900 border-r border-gray-200 dark:border-slate-700 flex flex-col flex-shrink-0 h-full hidden lg:flex">
        <div className="p-6 border-b border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900">
          <Link to="/courses" className="text-xs font-bold text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 flex items-center mb-4 uppercase tracking-wider">
            <ArrowRight className="w-3 h-3 mr-1 rotate-180" /> Back to Courses
          </Link>
          <h3 className="font-extrabold text-gray-900 dark:text-white text-xl flex items-center">
            <BookOpen className="w-6 h-6 mr-2 text-purple-600 dark:text-purple-400" /> The ZK Book
          </h3>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {sections.map((sec, idx) => (
            <SidebarItem
              key={sec.id}
              title={sec.title}
              active={activeSection === idx}
              onClick={() => setActiveSection(idx)}
            />
          ))}
        </div>
      </div>

      <div id="zk-content" className="flex-1 overflow-y-auto bg-white dark:bg-dark-bg relative scroll-smooth">
        <div className="max-w-4xl mx-auto px-8 py-16">
          <div className="animate-fade-in">
            {current.content}
          </div>

          <div className="mt-20 pt-8 border-t border-gray-100 dark:border-slate-700 flex justify-between items-center sticky bottom-0 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm pb-8">
            <button
              disabled={activeSection === 0}
              onClick={() => setActiveSection(prev => Math.max(0, prev - 1))}
              className={`px-6 py-3 rounded-full text-sm font-bold transition-all ${activeSection === 0
                ? 'text-gray-300 dark:text-gray-600 cursor-not-allowed'
                : 'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20 hover:bg-purple-100 dark:hover:bg-purple-900/40'
              }`}
            >
              Previous
            </button>

            <span className="text-gray-400 dark:text-gray-500 text-sm font-medium">
              {activeSection + 1} / {sections.length}
            </span>

            <button
              disabled={activeSection === sections.length - 1}
              onClick={() => setActiveSection(prev => Math.min(sections.length - 1, prev + 1))}
              className={`px-6 py-3 rounded-full text-sm font-bold transition-all flex items-center ${activeSection === sections.length - 1
                ? 'text-gray-300 dark:text-gray-600 cursor-not-allowed'
                : 'bg-purple-600 text-white hover:bg-purple-700 shadow-lg shadow-purple-200 dark:shadow-none'
              }`}
            >
              Next Section <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZKCourse;
