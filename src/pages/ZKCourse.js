import React, { useState, useEffect } from 'react';
import { Shield, Lock, Cpu, ArrowRight, ChevronRight } from 'lucide-react';
import SidebarItem from '../components/SidebarItem';
import { Link } from 'react-router-dom';

const ZKCourse = () => {
  const [activeSection, setActiveSection] = useState(0);

  // Scroll to top when section changes
  useEffect(() => {
    const contentContainer = document.getElementById('course-content');
    if (contentContainer) contentContainer.scrollTop = 0;
  }, [activeSection]);

  const sections = [
    {
      id: 'intro',
      title: '1. Security & Definitions',
      content: (
        <div className="space-y-8">
          <header className="border-b border-purple-100 pb-6">
            <h1 className="text-4xl font-extrabold text-purple-900 mb-4">1. Security</h1>
            <p className="text-xl text-gray-600">Foundational concepts, definitions, and properties.</p>
          </header>

          <section className="prose prose-purple max-w-none text-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">1.1 Introduction</h3>
            
            <h4 className="text-xl font-semibold text-purple-800 mb-2">1.1.1 What is a zero-knowledge proof?</h4>
            <p className="leading-relaxed text-lg mb-4">
              A zero-knowledge proof (ZKP) allows one party (the <strong>Prover</strong>) to prove to another party (the <strong>Verifier</strong>) that a statement is true, without revealing the secret information (the <strong>Witness</strong>) that supports the statement. This concept, introduced by Goldwasser, Micali, and Rackoff, is crucial when veracity needs to be established without compromising confidentiality.
            </p>
            <p className="leading-relaxed text-lg mb-4">
               ZKPs have numerous applications, particularly where privacy is paramount. Examples include:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                 <li><strong>Adulthood:</strong> Proving age {'>'} 18 without revealing the exact birth date.</li>
                 <li><strong>Solvency:</strong> Proving a bank is not bankrupt without showing the portfolio.</li>
                 <li><strong>Asset Ownership:</strong> Proving ownership without linking to past transactions.</li>
                 <li><strong>Chess:</strong> Proving a board configuration is valid without revealing the moves.</li>
                 <li><strong>Theorem Correctness:</strong> Proving a theorem is correct without revealing the proof steps.</li>
            </ul>

             [Image of Zero Knowledge Proof diagram]
            
            <h4 className="text-xl font-semibold text-purple-800 mt-8 mb-2">1.1.2 Requirements for Specification</h4>
            <p className="leading-relaxed text-lg mb-4">
               A full ZK system specification must include: precise statement definitions, construction algorithms (Setup, Prove, Verify), security definitions, and a security analysis proving completeness, soundness, and zero-knowledge.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1.2 Terminology</h3>
            <div className="grid gap-4">
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <span className="font-bold text-purple-700">Instance (x)</span>
                    <p className="text-sm mt-1">Public input known to both prover and verifier.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <span className="font-bold text-purple-700">Witness (w)</span>
                    <p className="text-sm mt-1">Private input known only to the prover.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <span className="font-bold text-purple-700">Relation (R)</span>
                    <p className="text-sm mt-1">The set of valid pairs (x, w).</p>
                </div>
                 <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <span className="font-bold text-purple-700">Language (L)</span>
                    <p className="text-sm mt-1">The set of instances x that have a valid witness.</p>
                </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1.3 Specifying Statements</h3>
            <p className="leading-relaxed text-lg mb-4">
                Relations are often expressed as circuits.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                <li><strong>Boolean Circuit:</strong> Logic gates (AND, XOR).</li>
                <li><strong>Arithmetic Circuit:</strong> Field operations (Add, Multiply).</li>
                <li><strong>R1CS (Rank-1 Constraint System):</strong> A system of equations <code>(A·s) * (B·s) - (C·s) = 0</code>. This is a standard intermediate representation.</li>
            </ul>
            

             <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1.4 Types of Proofs</h3>
             <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                <li><strong>ZK Proof of Knowledge (ZKPoK):</strong> Proves knowledge of w.</li>
                <li><strong>ZK Proof of Membership:</strong> Proves x is in L (without necessarily proving knowledge).</li>
             </ul>

             <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1.5 Syntax</h3>
             <p className="leading-relaxed text-lg mb-4">
                Three main algorithms define a system:
             </p>
             <ol className="list-decimal list-inside space-y-2 ml-4 mb-6 font-mono text-sm text-purple-800">
                 <li>Setup(params) -{'>'} (setupp, setupv)</li>
                 <li>Prove(state, m) -{'>'} p</li>
                 <li>Verify(state, p) -{'>'} accept/reject</li>
             </ol>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1.6 Properties</h3>
            <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4 py-2 bg-green-50 rounded-r-lg">
                    <strong>Completeness:</strong> Honest prover convinces honest verifier.
                </div>
                <div className="border-l-4 border-red-500 pl-4 py-2 bg-red-50 rounded-r-lg">
                    <strong>Soundness:</strong> Cheating prover cannot convince verifier.
                </div>
                <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 rounded-r-lg">
                    <strong>Zero-Knowledge:</strong> Verifier learns nothing else.
                </div>
            </div>

               <h4 className="text-xl font-semibold text-purple-800 mt-6 mb-2">Advanced Properties</h4>
               <p className="leading-relaxed text-lg mb-4">
                 Other important properties include Proof of Knowledge (extractor exists), Witness Indistinguishability, Universal Composability, and Transferability/Deniability.
               </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1.7 Assumptions</h3>
               <p className="leading-relaxed text-lg mb-4">
                 Security relies on assumptions. These can be cryptographic (e.g., discrete log is hard) or system-based (e.g., trusted setup, random oracle). Assumptions should be clearly stated and plausible.
               </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1.8 Efficiency</h3>
               <p className="leading-relaxed text-lg mb-4">
                 Performance metrics are crucial. Key metrics include:
               </p>
               <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                  <li><strong>Round Complexity:</strong> Number of messages exchanged.</li>
                  <li><strong>Communication:</strong> Total bits sent.</li>
                  <li><strong>Prover Computation:</strong> Work done by the prover.</li>
                  <li><strong>Verifier Computation:</strong> Work done by the verifier.</li>
                  <li><strong>Setup Cost:</strong> Cost to generate parameters.</li>
               </ul>
          </section>
        </div>
      )
    },
    {
      id: 'paradigms',
      title: '2. Paradigms',
      content: (
        <div className="space-y-8">
          <header className="border-b border-purple-100 pb-6">
            <h1 className="text-4xl font-extrabold text-purple-900 mb-4">2. Paradigms</h1>
            <p className="text-xl text-gray-600">IT Systems, Compilers, and Arithmetization.</p>
          </header>

          <section className="prose prose-purple max-w-none text-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">2.1 Background</h3>
            <p className="leading-relaxed text-lg mb-4">
              Modern ZKPs are often modularized into two components: an <strong>Information-Theoretic (IT) Proof System</strong> and a <strong>Cryptographic Compiler (CC)</strong>. The IT system assumes an idealized model (like trusted channels or oracles), while the CC compiles this into a real-world protocol using cryptographic primitives. Arithmetization is the process of converting the statement into a format the IT system can handle.
            </p>
            
            
            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2.2 IT Proof Systems</h3>
            <ul className="space-y-6">
                <li>
                    <strong className="text-lg text-purple-800">PCP (Probabilistically Checkable Proof)</strong>
                    <p>Prover generates a long string. Verifier checks random points.</p>
                </li>
                <li>
                    <strong className="text-lg text-purple-800">Linear PCP</strong>
                    <p>Proof is a vector. Verifier makes linear queries (inner products). Allows shorter proofs.</p>
                </li>
                 <li>
                    <strong className="text-lg text-purple-800">MPC-in-the-Head</strong>
                    <p>Prover simulates a Multi-Party Computation protocol and commits to views.</p>
                </li>
                 <li>
                    <strong className="text-lg text-purple-800">IOP (Interactive Oracle Proof)</strong>
                    <p>Generalization of PCP allowing multiple rounds of interaction.</p>
                </li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2.3 Cryptographic Compilers</h3>
            <p className="leading-relaxed text-lg mb-4">
                The compiler transforms the IT proof system into a concrete protocol by replacing the ideal components with cryptographic ones.
            </p>
             <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                <li><strong>Commitment Schemes:</strong> Used to realize oracle access (e.g., Merkle Trees for PCPs).</li>
                <li><strong>Homomorphic Encryption:</strong> Used for Linear PCPs.</li>
                <li><strong>Fiat-Shamir Transform:</strong> Converts interactive public-coin protocols into non-interactive arguments (NIZKs) using a hash function as a random oracle.</li>
             </ul>

             <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2.5 & 2.6 Composition & Interactivity</h3>
             <p className="leading-relaxed text-lg mb-4">
                <strong>Recursive Composition:</strong> A proof of a proof. Enables scalability (IVC) and succinctness (PCD).
                <br/>
                <strong>Interactivity:</strong> Interactive proofs (IP) vs Non-Interactive (NIZK). NIZKs are transferable and preferred for blockchains.
            </p>
          </section>
        </div>
      )
    },
    {
        id: 'implementation',
        title: '3. Implementation',
        content: (
          <div className="space-y-8">
            <header className="border-b border-purple-100 pb-6">
              <h1 className="text-4xl font-extrabold text-purple-900 mb-4">3. Implementation</h1>
              <p className="text-xl text-gray-600">Standards, APIs, Backends, and Frontends.</p>
            </header>
  
            <section className="prose prose-purple max-w-none text-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">3.1 Overview</h3>
              <p className="leading-relaxed text-lg mb-4">
                Focuses on standardizing interfaces for interoperability.
              </p>
  
              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3.2 & 3.3 Architecture</h3>
              <div className="flex flex-col md:flex-row gap-6 my-6">
                  <div className="flex-1 p-6 bg-gray-50 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-purple-900 mb-2">Frontend</h4>
                      <p>High-level language to express statements. Compiles code to constraints (R1CS). Handles witness reduction.</p>
                  </div>
                  <div className="flex items-center justify-center text-gray-400">
                      <ArrowRight size={32} />
                  </div>
                  <div className="flex-1 p-6 bg-gray-50 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-purple-900 mb-2">Backend</h4>
                      <p>Implements the cryptographic protocol (e.g., Groth16). Takes constraints and witness to generate the proof.</p>
                  </div>
              </div>
              [Image of Frontend Backend Architecture diagram]

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3.4 APIs and Formats</h3>
              <p className="leading-relaxed text-lg mb-4">
                 Need for generic APIs and file formats (like <code>.r1cs</code>) to allow mixing different frontends and backends.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3.5 Benchmarks</h3>
              <p className="leading-relaxed text-lg mb-4">
                 Critical metrics: Proof size, Prover time, Verifier time, Memory usage. Should be run on standard hardware.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3.6 Trust</h3>
              <p className="leading-relaxed text-lg mb-4">
                 Security concerns in implementation: Code bugs, Side channels, and SRS (Structured Reference String) generation. SRS often requires a Multi-Party Computation (MPC) ceremony ("Powers of Tau").
              </p>
            </section>
          </div>
        )
      },
      {
        id: 'applications',
        title: '4. Applications',
        content: (
          <div className="space-y-8">
            <header className="border-b border-purple-100 pb-6">
              <h1 className="text-4xl font-extrabold text-purple-900 mb-4">4. Applications</h1>
              <p className="text-xl text-gray-600">Identity, Asset Transfer, and Compliance.</p>
            </header>
  
            <section className="prose prose-purple max-w-none text-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">4.1 Introduction & 4.4 Gadgets</h3>
              <p className="leading-relaxed text-lg mb-4">
                Applications use "gadgets" (sub-circuits) like Commitments, Merkle Trees, Encryption, and Signatures.
              </p>
  
              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4.5 Identity Framework</h3>
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm mb-6">
                  <div className="flex items-center mb-4">
                      <Lock className="text-purple-600 mr-3" />
                      <h4 className="text-xl font-bold">Self-Sovereign Identity</h4>
                  </div>
                  <p className="mb-4">Proving attributes without revealing identity.</p>
                  <ul className="space-y-2 text-sm">
                      <li><strong>Holder:</strong> Has credentials (e.g., from Gov).</li>
                      <li><strong>Issuer:</strong> Attests to attributes.</li>
                      <li><strong>Verifier:</strong> Checks proofs of attributes (e.g., Age {'>'} 18).</li>
                  </ul>
                  <div className="mt-4 bg-purple-50 p-3 rounded text-purple-800 font-medium">
                      Example: Proving you are an accredited investor without revealing your bank balance.
                  </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4.6 Asset Transfer</h3>
               <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm mb-6">
                  <div className="flex items-center mb-4">
                      <Cpu className="text-purple-600 mr-3" />
                      <h4 className="text-xl font-bold">Private Transactions</h4>
                  </div>
                  <p className="mb-4">Hiding sender, receiver, and amount.</p>
                   <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong>UTXO Model (Zcash):</strong> Proving ownership of a note in a commitment tree and nullifying it.</li>
                      <li><strong>Balance Model (zkLedger):</strong> Homomorphic updates to encrypted balances.</li>
                  </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4.7 Regulation Compliance</h3>
              <p className="leading-relaxed text-lg mb-4">
                 Proving compliance to a regulator without sharing sensitive business data.
                 <br/>
                 <strong>Example:</strong> Proving an aircraft is airworthy (parts are valid, maintenance is done) without revealing flight logs or mechanic IDs to the regulator.
              </p>
            </section>
          </div>
        )
      }
  ];

  const currentSection = sections[activeSection];

  return (
    <div className="flex h-[calc(100vh-80px)] overflow-hidden bg-white">
      {/* Sidebar */}
      <div className="w-80 bg-gray-50 border-r border-gray-200 flex flex-col flex-shrink-0 h-full hidden lg:flex">
        <div className="p-6 border-b border-gray-200 bg-white">
            <Link to="/courses" className="text-xs font-bold text-purple-600 hover:text-purple-800 flex items-center mb-4 uppercase tracking-wider">
                <ArrowRight className="w-3 h-3 mr-1 rotate-180" /> Back to Courses
            </Link>
          <h3 className="font-extrabold text-gray-900 text-xl">The ZK Book</h3>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {sections.map((section, idx) => (
            <SidebarItem
              key={section.id}
              title={section.title}
              active={activeSection === idx}
              onClick={() => setActiveSection(idx)}
            />
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div id="course-content" className="flex-1 overflow-y-auto bg-white relative scroll-smooth">
        <div className="max-w-4xl mx-auto px-12 py-16">
          
          <div className="animate-fade-in">
            {currentSection.content}
          </div>
          
          {/* Navigation Footer */}
          <div className="mt-24 pt-8 border-t border-gray-100 flex justify-between items-center sticky bottom-0 bg-white/90 backdrop-blur-sm pb-8">
            <button 
              disabled={activeSection === 0}
              onClick={() => setActiveSection(prev => prev - 1)}
              className={`px-6 py-3 rounded-full text-sm font-bold transition-all ${
                activeSection === 0 
                  ? 'text-gray-300 cursor-not-allowed' 
                  : 'text-purple-600 bg-purple-50 hover:bg-purple-100'
              }`}
            >
              Previous
            </button>
            <span className="text-gray-400 text-sm font-medium">
              {activeSection + 1} / {sections.length}
            </span>
            <button 
              disabled={activeSection === sections.length - 1}
              onClick={() => setActiveSection(prev => prev + 1)}
              className={`px-6 py-3 rounded-full text-sm font-bold transition-all flex items-center ${
                activeSection === sections.length - 1
                  ? 'text-gray-300 cursor-not-allowed' 
                  : 'bg-purple-600 text-white hover:bg-purple-700 shadow-lg shadow-purple-200'
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