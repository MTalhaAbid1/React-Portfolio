import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './About';
import { Briefcase } from 'lucide-react';

const EXP_DATA = [
  {
    company: 'Optima Geeks',
    title: 'Shopify Developer',
    date: 'Present',
     details: [
    'Working on cuddleclones.com, a Shopify Plus store generating approximately $25M annually, for over 1.5 years.',
    'Responsible for implementing feature requests and UI enhancements provided by the design and marketing teams.',
    'Building scalable Shopify Plus solutions using Liquid, JavaScript, AJAX, Metafields, and Storefront APIs.',
    'Explored Shopify Functions by developing a custom discount function for advanced promotional logic.',
    'Worked on Headless Shopify concepts using React and Shopify Storefront API.',
    'Contributed to product customization flows, dynamic add-ons, cart logic, and conversion-focused user experiences.'
  ]
  },
  {
    company: ' Alchemative',
    title: 'Shopify Developer Intern',
    date: 'Early Career',
    details: [
      'Gained foundational knowledge in modern web stacks, including HTML, CSS, JavaScript, and custom eCommerce setups.',
      'Worked extensively with renowned regional brands such as Ethnic, Beyond East, and Sapphire during internship phases.'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative bg-gray-50 dark:bg-transparent transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading>Experience</SectionHeading>
          
          <div className="space-y-10">
            {EXP_DATA.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20, y: 10 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative pl-8 md:pl-0 group"
              >
                {/* Desktop timeline line */}
                <div className="hidden md:block absolute left-[120px] top-6 bottom-[-40px] w-[2px] bg-gray-300 dark:bg-dark-600/50 mix-blend-multiply dark:mix-blend-screen last:bottom-0"></div>
                
                <div className="md:flex gap-8 group">
                  {/* Desktop Date */}
                  <div className="hidden md:block w-[100px] flex-shrink-0 text-right pt-4">
                    <span className="text-primary-600 dark:text-primary-500 font-mono font-semibold text-sm uppercase tracking-wider">{exp.date}</span>
                  </div>

                  {/* Indicator Dot */}
                  <div className="absolute left-0 md:static md:w-[44px] flex-shrink-0 flex justify-center pt-2">
                    <div className="w-10 h-10 rounded-full bg-white dark:bg-dark-800 border-[3px] border-gray-300 dark:border-dark-600 group-hover:border-primary-500 dark:group-hover:border-primary-500 transition-colors duration-300 flex items-center justify-center z-10 shadow-sm relative -left-[20px] md:left-[10px]">
                      <Briefcase size={16} className="text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500 transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 bg-white dark:bg-dark-800/60 backdrop-blur-sm border border-gray-200 dark:border-dark-600/50 p-6 md:p-8 rounded-2xl hover:bg-gray-50 dark:hover:bg-dark-800 transition-all duration-300 shadow-md group-hover:shadow-lg dark:shadow-none hover:shadow-primary-500/10 dark:group-hover:border-primary-500/30">
                    <div className="flex flex-col md:hidden mb-4">
                      <span className="text-primary-600 dark:text-primary-500 font-mono font-bold text-sm uppercase tracking-wider mb-1">{exp.date}</span>
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {exp.title}
                    </h3>
                    <h4 className="text-lg text-gray-600 dark:text-gray-400 mb-6 font-medium">
                      @ {exp.company}
                    </h4>
                    
                    <ul className="space-y-4">
                      {exp.details.map((detail, i) => (
                        <li key={i} className="flex items-start text-gray-700 dark:text-gray-300 leading-relaxed text-[15px]">
                          <span className="text-primary-500 mr-4 mt-1.5 flex-shrink-0 text-sm">▹</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
