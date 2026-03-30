import React from 'react';
import { Code2, Briefcase, MessageSquare, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-dark-600/30 bg-dark-900/50 pt-16 pb-8 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <h2 className="text-2xl font-bold tracking-tighter text-white mb-6">
          {PERSONAL_INFO.name.split(' ')[0]}<span className="text-primary-500">.</span>
        </h2>
        
        <div className="flex space-x-6 mb-8">
          <a href="#" className="p-2 bg-dark-800 text-gray-400 rounded-full hover:bg-primary-500 hover:text-white transition-all duration-300">
            <Code2 size={20} />
          </a>
          <a href="#" className="p-2 bg-dark-800 text-gray-400 rounded-full hover:bg-primary-500 hover:text-white transition-all duration-300">
            <Briefcase size={20} />
          </a>
          <a href="#" className="p-2 bg-dark-800 text-gray-400 rounded-full hover:bg-primary-500 hover:text-white transition-all duration-300">
            <MessageSquare size={20} />
          </a>
          <a href={`mailto:${PERSONAL_INFO.email}`} className="p-2 bg-dark-800 text-gray-400 rounded-full hover:bg-primary-500 hover:text-white transition-all duration-300">
            <Mail size={20} />
          </a>
        </div>

        <p className="text-sm text-gray-500">
          &copy; {currentYear} {PERSONAL_INFO.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
