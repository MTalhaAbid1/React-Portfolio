import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './About';
import { Briefcase } from 'lucide-react';

const EXP_DATA = [
  {
    company: 'cuddleclones.com',
    title: 'Shopify Plus Developer',
    date: 'Present',
    details: [
      'Spearheading Shopify Plus development for a high-traffic eCommerce store generating approximately $25M annually.',
      'Implementing scalable and custom solutions using Shopify Liquid, JavaScript, and Storefront APIs.',
      'Integrating deep Metafields logic and Shopify Functions to create uniquely tailored customer experiences.',
      'Collaborating closely with marketing and design teams to rapidly prototype and ship conversion-boosting features.'
    ]
  },
  {
    company: 'Alchemative',
    title: 'Shopify Developer',
    date: 'Previous',
    details: [
      'Developed and optimized bespoke Shopify themes and custom applications for a diverse client base.',
      'Translated wireframes and complex design requirements into highly performant front-end code.',
      'Improved overall UX and store architectures to align with modern web standards and client objectives.'
    ]
  },
  {
    company: 'Optima Geeks',
    title: 'Web Developer Intern / Junior Developer',
    date: 'Early Career',
    details: [
      'Gained foundational knowledge in modern web stacks, including HTML, CSS, JavaScript, and custom eCommerce setups.',
      'Worked extensively with renowned regional brands such as Ethnic, Beyond East, and Sapphire during internship phases.',
      'Assisted in integrating REST APIs, implementing structured JSON configurations, and learning Agile development practices.'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
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
                className="relative pl-8 md:pl-0"
              >
                {/* Desktop timeline line */}
                <div className="hidden md:block absolute left-[120px] top-6 bottom-[-40px] w-[2px] bg-dark-600/50 mix-blend-screen last:bottom-0"></div>
                
                <div className="md:flex gap-8 group">
                  {/* Desktop Date */}
                  <div className="hidden md:block w-[100px] flex-shrink-0 text-right pt-4">
                    <span className="text-primary-500 font-mono text-sm uppercase tracking-wider">{exp.date}</span>
                  </div>

                  {/* Indicator Dot */}
                  <div className="absolute left-0 md:static md:w-[44px] flex-shrink-0 flex justify-center pt-2">
                    <div className="w-10 h-10 rounded-full bg-dark-800 border-2 border-dark-600 group-hover:border-primary-500 transition-colors duration-300 flex items-center justify-center z-10 shadow-lg relative -left-[20px] md:left-[10px]">
                      <Briefcase size={16} className="text-gray-400 group-hover:text-primary-500 transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 bg-dark-800/60 backdrop-blur-sm border border-dark-600/50 p-6 md:p-8 rounded-2xl hover:bg-dark-800 transition-all duration-300 shadow-sm hover:shadow-primary-500/5 group-hover:border-primary-500/30">
                    <div className="flex flex-col md:hidden mb-4">
                      <span className="text-primary-500 font-mono text-sm uppercase tracking-wider mb-1">{exp.date}</span>
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-primary-400 transition-colors">
                      {exp.title}
                    </h3>
                    <h4 className="text-lg text-gray-400 mb-6 font-medium">
                      @ {exp.company}
                    </h4>
                    
                    <ul className="space-y-4">
                      {exp.details.map((detail, i) => (
                        <li key={i} className="flex items-start text-gray-300 leading-relaxed text-[15px]">
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
