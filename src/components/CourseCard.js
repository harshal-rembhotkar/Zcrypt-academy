import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CourseCard = ({ title, description, icon: Icon, color, to }) => {
  // Generate background class dynamically
  // We use the color prop (e.g., 'text-brand-primary') to derive the background color
  const bgClass = color.replace('text-', 'bg-');

  return (
    <Link
      to={to}
      className="group relative overflow-hidden glass-panel rounded-3xl p-8 transition-all duration-300 cursor-pointer hover:-translate-y-2 block h-full hover:shadow-2xl hover:shadow-brand-primary/10 dark:hover:shadow-brand-primary/5 hover:border-brand-primary/30"
    >
      {/* Background Icon Decoration */}
      <div className={`absolute -top-10 -right-10 p-4 opacity-5 group-hover:opacity-10 transition-opacity ${color} dark:opacity-10 dark:group-hover:opacity-20`}>
        <Icon size={200} />
      </div>

      {/* Icon */}
      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${bgClass} bg-opacity-10 dark:bg-opacity-20 ${color} shadow-sm`}>
        <Icon size={32} className="currentColor" />
      </div>

      {/* Content */}
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-brand-primary dark:group-hover:text-brand-accent transition-colors">
        {title}
      </h3>
      <p className="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
        {description}
      </p>

      {/* CTA */}
      <div className={`flex items-center font-bold ${color} text-sm uppercase tracking-wider mt-auto`}>
        Start Learning <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
};

export default CourseCard;
