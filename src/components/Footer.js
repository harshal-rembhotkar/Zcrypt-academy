import React from 'react';

const Footer = () => (
  <footer className="bg-gray-50 border-t border-gray-100 py-12 mt-auto">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <p className="text-gray-500 text-sm font-medium">
        &copy; {new Date().getFullYear()} Zcrypt Academy. 
      </p>
      <p className="text-gray-400 text-xs mt-2">
         All Rights Reserved.
      </p>
    </div>
  </footer>
);

export default Footer;