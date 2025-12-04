import React from 'react';
import { Coffee } from 'lucide-react';

const StoryCard = ({ story }) => (
  <div className="bg-white rounded-3xl p-10 border border-gray-100 shadow-lg flex flex-col md:flex-row gap-10 items-center relative overflow-hidden group hover:shadow-xl transition-shadow duration-300">
    <div className="md:w-1/3 flex flex-col items-center text-center z-10">
      <div className={`w-24 h-24 ${story.color.replace('text-', 'bg-').replace('700', '100')} rounded-full flex items-center justify-center mb-6 text-purple-600 shadow-inner`}>
        <Coffee size={40} className={story.color.split(' ')[1]} />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{story.title}</h3>
      <span className={`inline-block px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${story.color}`}>
        {story.tag}
      </span>
    </div>
    <div className="md:w-2/3 relative z-10">
      <div className="text-8xl text-purple-50 absolute -top-10 -left-8 font-serif opacity-50 select-none">“</div>
      <p className="text-gray-600 text-lg leading-relaxed relative pl-2 italic">
        {story.content}
      </p>
    </div>

    {/* Decorative background blob */}
    <div className="absolute top-0 right-0 -mr-24 -mt-24 w-80 h-80 bg-purple-50 rounded-full opacity-50 z-0 group-hover:scale-110 transition-transform duration-700"></div>
  </div>
);

export default StoryCard;