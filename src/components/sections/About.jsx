import React from 'react';
import { motion } from 'framer-motion';

const SectionHeading = ({ children }) => (
  <div className="flex items-center gap-4 mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-white whitespace-nowrap">
      {children}
    </h2>
    <div className="h-[1px] w-full bg-dark-600/50 max-w-xs"></div>
  </div>
);

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading>About Me</SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
            <div className="md:col-span-3 space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Hello! My name is Muhammad Talha Abid, and I am a dedicated Shopify Plus Developer based in Lahore, Pakistan. I started my journey exploring the intersections of commerce and technical web design, and quickly realized my passion lay in eCommerce architectures.
              </p>
              <p>
                My expertise lies in building dynamic, highly tailored solutions using Shopify Liquid, JavaScript, and Shopify Plus features. I work extremely closely with marketing and design teams to take feature requests from wireframes directly into robust, production-ready code. Translating creative vision into a seamless user experience is what I do best.
              </p>
              <p>
                Recently, I've expanded my technical footprint by exploring Headless Shopify using React alongside the emerging Storefront API. My main focus is on maintaining code quality, integrating custom APIs, optimizing load speeds, and ensuring out-of-the-box scalable eCommerce solutions for high-traffic stores.
              </p>
            </div>
            
            <div className="md:col-span-2 relative group w-64 mx-auto md:w-full max-w-sm">
              <div className="absolute inset-0 bg-primary-500 rounded-xl translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
              <div className="relative rounded-xl overflow-hidden aspect-square bg-dark-700 border border-dark-600 z-10 flex items-center justify-center filter grayscale group-hover:grayscale-0 transition-all duration-300">
                <div className="w-full h-full bg-[radial-gradient(#2563eb_1px,transparent_1px)] bg-[size:20px_20px] opacity-20"></div>
                <span className="absolute text-3xl font-black text-dark-800 uppercase tracking-widest px-4 text-center">Profile Image Placeholder</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
export { SectionHeading };
