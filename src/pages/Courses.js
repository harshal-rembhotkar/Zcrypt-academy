import React from 'react';
import CourseCard from '../components/CourseCard';
import { Shield, Terminal } from 'lucide-react';

const Courses = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 animate-fade-in">
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Select a Learning Path</h2>
        <p className="text-gray-500 text-lg">Choose a topic to start learning.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <CourseCard
          title="The ZK Book"
          description="A comprehensive guide on zero-knowledge proofs, which covers security, paradigms, implementation, and real-world applications"
          icon={Shield}
          color="text-purple-600"
          to="/courses/zk"
        />
        <CourseCard
          title="Rust Book"
          description="From Zero to Mastery. A complete guide to Rust syntax, ownership, borrowing, and control flow for crypto engineering."
          icon={Terminal}
          color="text-indigo-600"
          to="/courses/rust"
        />
      </div>
    </div>
  );
};

export default Courses;