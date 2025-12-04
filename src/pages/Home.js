import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Terminal, TrendingUp, Coffee } from 'lucide-react';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto mb-24 animate-fade-in-up">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-50 text-purple-700 text-sm font-bold mb-8 border border-purple-100 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-purple-600 mr-2 animate-pulse"></span>
          Anon-friendly tech
        </div>
        <h1 className="text-6xl font-extrabold text-gray-900 tracking-tight mb-8 leading-tight">
          Zcrypt <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-500">Academy</span>
        </h1>
        <p className="text-xl text-gray-500 leading-relaxed mb-12 max-w-2xl mx-auto">
          Learn Zero-Knowledge Proofs, Rust and Privacy tech the way they should be: clear, interactive and distraction-free.
          </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/courses"
            className="px-10 py-4 bg-purple-600 text-white rounded-full font-bold shadow-xl shadow-purple-200 hover:bg-purple-700 hover:shadow-2xl transition-all transform hover:-translate-y-1 text-center"
          >
            Explore Courses
          </Link>
          <Link
            to="/stories"
            className="px-10 py-4 bg-white text-purple-700 border border-gray-200 rounded-full font-bold hover:bg-purple-50 hover:border-purple-200 transition-all transform hover:-translate-y-1 text-center"
          >
            Read Stories
          </Link>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Zero Knowledge", icon: Shield, desc: "Master the fundamentals." },
          { title: "Rust Lang", icon: Terminal, desc: "Systems programming." },
          { title: "Trends", icon: TrendingUp, desc: "Stay updated." },
          { title: "Stories", icon: Coffee, desc: "Learn via analogy." },
        ].map((item, idx) => (
          <div key={idx} className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-purple-100 transition-all duration-300 group">
            <item.icon className="w-10 h-10 text-gray-300 group-hover:text-purple-600 transition-colors mb-6" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;