import React from 'react';
import { ChevronRight } from 'lucide-react';

const SidebarItem = ({ title, active, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 flex items-center justify-between group ${
      active 
        ? 'bg-purple-600 text-white shadow-md' 
        : 'text-gray-600 hover:bg-purple-50 hover:text-purple-700'
    }`}
  >
    <span className="truncate">{title}</span>
    {active && <ChevronRight size={16} />}
  </button>
);

export default SidebarItem;