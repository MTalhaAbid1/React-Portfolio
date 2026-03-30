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
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind', 'Headless Shopify'] 
  },
  { 
    category: 'Backend & Tools', 
    items: ['NestJS', 'MongoDB', 'REST APIs', 'JSON', 'Git', 'GitHub'] 
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative bg-dark-800/50">
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
                className="p-6 rounded-2xl bg-dark-800 border border-dark-600/50 hover:border-primary-500/50 transition-colors duration-300 shadow-sm hover:shadow-primary-500/10"
              >
                <h3 className="text-xl font-semibold mb-6 text-white border-b border-dark-600/50 pb-3">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-4 py-2 text-sm font-medium text-primary-300 bg-primary-900/30 rounded-lg hover:bg-primary-800/50 transition-colors cursor-default border border-primary-500/10"
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
