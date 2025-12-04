import React from 'react';
import { Shield, Github, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-slate-800 pt-16 pb-8 mt-auto transition-colors duration-300">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center text-white">
              <Shield size={18} />
            </div>
            <span className="text-xl font-display font-bold text-gray-900 dark:text-white">
              Zcrypt Academy
            </span>
          </Link>
          <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-md">
            Empowering the next generation of privacy advocates and zero-knowledge developers.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 dark:text-white mb-4">Learn</h4>
          <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
            <li><Link to="/courses" className="hover:text-brand-primary dark:hover:text-brand-accent transition-colors">Courses</Link></li>
            <li><Link to="/stories" className="hover:text-brand-primary dark:hover:text-brand-accent transition-colors">Stories</Link></li>
            <li><Link to="/blog" className="hover:text-brand-primary dark:hover:text-brand-accent transition-colors">Blog</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 dark:text-white mb-4">Socials</h4>
          <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
            <li>
              <a
                href="https://x.com/zcryptacademyio"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-primary dark:hover:text-brand-accent transition-colors flex items-center gap-2"
              >
                <Twitter size={16} /> X (Twitter)
              </a>
            </li>
            <li>
              <a
                href="https://github.com/harshal-rembhotkar/Zcrypt-academy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-primary dark:hover:text-brand-accent transition-colors flex items-center gap-2"
              >
                <Github size={16} /> GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-100 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-400 text-xs">
          &copy; {new Date().getFullYear()} Zcrypt Academy. All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
