import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../../data';

const BADGES = ['Shopify Plus', 'Shopify Liquid', 'Shopify Functions', 'Headless Shopify', 'GraphQL'];

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-16 md:pt-48 md:pb-32 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          <div className="flex-1 w-full z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-primary-500 font-semibold tracking-wide uppercase text-sm mb-4">
                Hi, my name is
              </h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4">
                {PERSONAL_INFO.name}.
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-400 mb-6 focus:outline-none">
                I am a {PERSONAL_INFO.role}.
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="text-lg text-gray-400 max-w-xl mb-8 leading-relaxed text-balance">
                I specialize in building custom, high-converting eCommerce experiences. 
                Currently working on cuddleclones.com, a Shopify Plus store generating ~$25M annually, 
                where I explore the frontiers of Shopify Plus features, Metafields, and Custom Apps.
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
                  className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-300 bg-primary-900/20 border border-primary-500/20 rounded-full"
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
                className="inline-flex items-center px-6 py-3 rounded-full bg-primary-600 text-white font-medium hover:bg-primary-500 transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] group"
              >
                View Projects
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 rounded-full bg-transparent border border-gray-600 text-gray-300 font-medium hover:border-gray-400 hover:text-white transition-all duration-300 group"
              >
                <Mail size={18} className="mr-2 group-hover:-rotate-12 transition-transform" />
                Contact Me
              </a>
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 rounded-full bg-transparent border border-gray-600 text-gray-300 font-medium hover:border-gray-400 hover:text-white transition-all duration-300 group"
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
            <div className="relative w-80 h-80 lg:w-[400px] lg:h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#95bf47] to-[#5e8e3e] blur-3xl opacity-20 animate-pulse rounded-full"></div>
              <div className="absolute inset-4 bg-dark-800 rounded-2xl border border-[#95bf47]/30 shadow-2xl overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-500 flex items-center justify-center">
                 <div className="text-6xl font-black text-dark-700/50 tracking-tighter mix-blend-overlay blur-sm absolute text-center uppercase">SHOPIFY<br/>PLUS</div>
                 <div className="w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
