import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CourseCard = ({ title, description, icon: Icon, color, to }) => {
  // Generate background class dynamically for the icon container
  const bgClass = color.replace('text-', 'bg-').replace('600', '100');

  return (
    <Link
      to={to}
      className="group relative overflow-hidden bg-white rounded-3xl p-8 shadow-xl shadow-purple-100/50 border border-white hover:border-purple-100 transition-all duration-300 cursor-pointer hover:-translate-y-2 block h-full"
    >
      {/* Background Icon Decoration */}
      <div className={`absolute -top-10 -right-10 p-4 opacity-5 group-hover:opacity-10 transition-opacity ${color}`}>
        <Icon size={200} />
      </div>

      {/* Icon */}
      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${bgClass} bg-opacity-10 text-purple-600 shadow-sm`}>
        <Icon size={32} className={color} />
      </div>

      {/* Content */}
      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-500 mb-8 leading-relaxed">
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