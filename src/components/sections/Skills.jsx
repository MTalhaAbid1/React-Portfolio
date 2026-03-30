import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './About';

const SKILLS_DATA = [
  { 
    category: 'Shopify', 
    items: ['Shopify Liquid', 'Shopify Plus', 'Metafields', 'Shopify Functions', 'Storefront API', 'GraphQL'] 
  },
  { 
    category: 'Frontend', 
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'Headless Shopify'] 
  },
  { 
    category: 'Tools', 
    items: ['Git', 'GitHub'] 
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative bg-white dark:bg-dark-800/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading>Technical Skills</SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SKILLS_DATA.map((skillGroup, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 md:p-8 rounded-2xl bg-gray-50 dark:bg-dark-800 border border-gray-200 dark:border-dark-600/50 hover:border-primary-500/50 dark:hover:border-primary-500/50 transition-colors duration-300 shadow-sm hover:shadow-primary-500/10 dark:hover:shadow-primary-500/10"
              >
                <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white border-b border-gray-300 dark:border-dark-600/50 pb-3">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-4 py-2 text-sm font-medium text-primary-700 dark:text-primary-300 bg-primary-100 dark:bg-primary-900/30 rounded-lg md:rounded-xl hover:bg-primary-200 dark:hover:bg-primary-800/50 transition-colors cursor-default border border-primary-200 dark:border-primary-500/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
