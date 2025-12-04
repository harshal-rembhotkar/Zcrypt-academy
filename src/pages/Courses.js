import React, { useState } from 'react';
import CourseCard from '../components/CourseCard';
import { Shield, Terminal, Search } from 'lucide-react';

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const courses = [
    {
      title: "The ZK Book",
      description: "A comprehensive guide on zero-knowledge proofs, covering security, paradigms, implementation, and real-world applications.",
      icon: Shield,
      color: "text-brand-primary",
      to: "/courses/zk",
      category: "Cryptography"
    },
    {
      title: "Rust Book",
      description: "From Zero to Mastery. A complete guide to Rust syntax, ownership, borrowing, and control flow for crypto engineering.",
      icon: Terminal,
      color: "text-brand-secondary",
      to: "/courses/rust",
      category: "Programming"
    }
  ];

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h1 className="text-5xl font-display font-extrabold text-gray-900 dark:text-white mb-6">
            Learning <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Paths</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-10">
            Choose a specialized track to master privacy engineering and zero-knowledge systems.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-lg mx-auto group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400 group-focus-within:text-brand-primary transition-colors" />
            </div>
            <input
              type="text"
              className="block w-full pl-11 pr-4 py-4 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-transparent shadow-sm transition-all duration-300"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto animate-fade-in-up animation-delay-200">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course, index) => (
              <CourseCard
                key={index}
                {...course}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 dark:text-gray-400 text-lg">No courses found matching "{searchTerm}"</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Courses;
