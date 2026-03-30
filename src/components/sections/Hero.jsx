import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../../data';
import profileImage from '../../assets/profile.png';

const BADGES = ['Shopify Plus', 'Shopify Liquid', 'Shopify Functions', 'Headless Shopify', 'GraphQL'];

const Hero = () => {
  return (
    <section id="home" className="pt-40 pb-16 md:pb-32 min-h-screen flex items-center transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          <div className="flex-1 w-full z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-primary-600 dark:text-primary-500 font-semibold tracking-wide uppercase text-sm mb-4">
                Hi, my name is
              </h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
                {PERSONAL_INFO.name}.
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-500 dark:text-gray-400 mb-6 focus:outline-none">
                I am a {PERSONAL_INFO.role}.
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mb-8 leading-relaxed text-balance">
                I specialize in building custom, high-converting eCommerce experiences. 
                Currently working on cuddleclones.com, a Shopify Plus store generating ~$25M annually, 
                where I explore the frontiers of Shopify Plus features and Metafields.
              </p>
            </motion.div>

            <motion.div 
              className="flex flex-wrap gap-3 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              {BADGES.map((badge, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-700 dark:text-primary-300 bg-primary-100 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-500/20 rounded-full"
                >
                  {badge}
                </span>
              ))}
            </motion.div>

            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a
                href="#projects"
                className="inline-flex items-center px-6 py-3 rounded-full bg-primary-600 text-white font-medium hover:bg-primary-700 dark:hover:bg-primary-500 transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.2)] dark:shadow-[0_0_20px_rgba(59,130,246,0.3)] group hover:-translate-y-1"
              >
                View Projects
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 rounded-full bg-transparent border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium hover:border-gray-400 dark:hover:border-gray-400 hover:bg-gray-50 dark:hover:bg-transparent hover:text-gray-900 dark:hover:text-white transition-all duration-300 group hover:-translate-y-1"
              >
                <Mail size={18} className="mr-2 group-hover:-rotate-12 transition-transform" />
                Contact Me
              </a>
              <a
                href="/Muhammad Talha Abid Resume.pdf"
                className="inline-flex items-center px-6 py-3 rounded-full bg-transparent border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium hover:border-gray-400 dark:hover:border-gray-400 hover:bg-gray-50 dark:hover:bg-transparent hover:text-gray-900 dark:hover:text-white transition-all duration-300 group hover:-translate-y-1"
              >
                <Download size={18} className="mr-2 group-hover:-translate-y-1 transition-transform" />
                Download Resume
              </a>
            </motion.div>
          </div>
          
          <motion.div 
            className="flex-1 hidden md:flex justify-end relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-80 lg:w-[420px] aspect-square group">
              {/* Animated outer blur/glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-400 to-primary-600 dark:from-primary-600 dark:to-primary-400 blur-3xl opacity-20 dark:opacity-30 group-hover:opacity-40 animate-pulse rounded-full transition-opacity duration-500"></div>
              
              {/* Image Container */}
              <div className="absolute inset-4 bg-gray-50 dark:bg-dark-800 rounded-3xl border border-gray-200 dark:border-dark-700 shadow-[0_0_40px_rgba(59,130,246,0.1)] dark:shadow-2xl overflow-hidden transform rotate-2 group-hover:rotate-0 transition-all duration-500 flex items-center justify-center relative">
                 
                 {/* The Profile Image */}
                 <img 
                    src={profileImage} 
                    alt="Profile" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                 />
                 
                 {/* Internal Gradient Overlay (optional aesthetic) */}
                 <div className="absolute inset-0 bg-gradient-to-t from-dark-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                 {/* Premium Overlay Pattern */}
                 <div className="absolute inset-0 w-full h-full pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:16px_16px] z-10 opacity-60"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
