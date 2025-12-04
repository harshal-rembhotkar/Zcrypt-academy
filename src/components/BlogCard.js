import React from 'react';
import { ExternalLink } from 'lucide-react';

const BlogCard = ({ post }) => (
  <a
    href={post.url || "#"}
    className="group flex flex-col h-full bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:border-purple-100 hover:-translate-y-1 transition-all duration-300"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="flex justify-between items-start mb-4">
      <span className="px-3 py-1 bg-purple-50 text-purple-700 text-xs font-bold uppercase tracking-wide rounded-full">
        {post.category}
      </span>
      <span className="text-gray-400 text-xs font-mono">{post.date}</span>
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors leading-tight">
      {post.title}
    </h3>
    <p className="text-gray-500 text-sm mb-6 line-clamp-3 flex-grow leading-relaxed">
      {post.desc}
    </p>
    <div className="flex items-center justify-between pt-4 border-t border-gray-50 mt-auto">
      <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{post.source}</span>
      <ExternalLink className="w-4 h-4 text-gray-300 group-hover:text-purple-500 transition-colors" />
    </div>
  </a>
);

export default BlogCard;