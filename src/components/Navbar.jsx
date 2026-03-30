import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { NAV_LINKS, PERSONAL_INFO } from '../data';
import { useTheme } from '../ThemeContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      // Handle transparent to solid navbar
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Handle Scroll Spy for active nav link
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      let currentSection = 'home';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-dark-900/80 backdrop-blur-md border-b border-gray-200/50 dark:border-dark-600/50 py-3 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="text-xl font-bold tracking-tighter text-gray-900 dark:text-white transition-colors duration-300">
              {PERSONAL_INFO.name.split(' ')[0]}<span className="text-primary-600 dark:text-primary-500">.</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-all duration-300 relative group
                  ${activeSection === link.href.substring(1) 
                    ? 'text-primary-600 dark:text-primary-500' 
                    : 'text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                  }
                `}
              >
                {link.name}
                {activeSection === link.href.substring(1) && (
                   <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-primary-600 dark:bg-primary-500 rounded-full"></span>
                )}
              </a>
            ))}
          </nav>

          {/* Connect Button and Theme Toggle */}
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-dark-800 dark:hover:bg-dark-700 text-gray-700 dark:text-gray-300 transition-colors duration-300"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-dark-800 text-gray-700 dark:text-gray-300 transition-colors duration-300 md:hidden"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`xl:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-dark-800/95 backdrop-blur-lg border-b border-gray-200/50 dark:border-dark-600/50 transition-all duration-300 origin-top overflow-hidden shadow-xl ${
          mobileMenuOpen ? 'max-h-[500px] opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
        }`}
      >
        <div className="px-4 space-y-3 flex flex-col items-center">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block w-full text-center px-4 py-3 text-lg font-medium rounded-xl transition-colors duration-300 ${
                activeSection === link.href.substring(1) 
                  ? 'text-primary-700 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-dark-700/50'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
