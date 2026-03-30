import React from 'react';
import { Code2, Briefcase, MessageSquare, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-dark-600/30 bg-gray-50 dark:bg-dark-900/50 pt-16 pb-8 backdrop-blur-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <h2 className="text-2xl font-bold tracking-tighter text-gray-900 dark:text-white mb-6">
          {PERSONAL_INFO.name.split(' ')[0]}<span className="text-primary-600 dark:text-primary-500">.</span>
        </h2>

        <p className="text-sm text-gray-500 dark:text-gray-500 font-medium">
          &copy; {currentYear} {PERSONAL_INFO.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
