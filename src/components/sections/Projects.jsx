import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code2 } from 'lucide-react';
import { SectionHeading } from './About';
import CCLOGO from '../../assets/cc-logo.jpg';
import ETHNICLOGO from '../../assets/ethnc-logo.png';

const PROJECTS = [
  {
    title: 'Cuddle Clones',
    description: 'Extensive frontend and backend customizations for cuddleclones.com, a high-converting $25M Shopify Plus store. Built fully custom product pages using Shopify Liquid and Metafields to dynamically render content and product-specific data. Developed advanced product customization experiences, including plush customizer pages where users can select options, upload images, and personalize products before adding them to the cart using the Shopify AJAX Cart API. Implemented order-level and product-level add-ons, custom cart properties, dynamic upsells, and binding logic so that associated add-ons are automatically removed when the parent product is removed from the cart. Also built specialized customization flows for jewelry and portrait products, including image upload functionality and complex option handling.',
    tech: ['Shopify Plus', 'Liquid', 'JavaScript', 'CSS'],
    github: null,
    external: 'https://cuddleclones.com',
    image: CCLOGO
  },
  {
    title: 'Ethnc',
    description: 'Developed a dynamic homepage experience for Ethnc with a custom Swiper.js-based slider. Built the section using Shopify blocks so marketing teams can easily add, remove, and manage slides dynamically from the theme customizer. Each slide was linked to its respective collection page for improved navigation and product discovery.',
    tech: ['Shopify Liquid', 'JavaScript', 'HTML5', 'CSS', 'Swiper.js'],
    github: null,
    external: 'https://pk.ethnc.com',
    image: ETHNICLOGO
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative bg-gray-50 dark:bg-dark-800/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading>Featured Projects</SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {PROJECTS.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group rounded-2xl bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-600/50 hover:border-primary-500/50 dark:hover:border-primary-500/50 transition-all duration-300 flex flex-col overflow-hidden shadow-lg hover:shadow-xl dark:shadow-none"
              >
                {/* Image Placeholder */}
                <div className="w-full h-48 sm:h-64 bg-gray-200 dark:bg-dark-700 relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary-600/20 mix-blend-multiply group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                  
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-none transform group-hover:scale-105 transition-transform duration-500 relative z-0"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 dark:text-dark-500 font-bold uppercase tracking-widest text-lg p-4 text-center transform group-hover:scale-105 transition-transform duration-500 relative z-0">
                      <div className="w-full h-full absolute inset-0 bg-[radial-gradient(#2563eb_1px,transparent_1px)] bg-[size:20px_20px] opacity-10 blur-[1px]"></div>
                      {project.title}
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-3 text-gray-500 dark:text-gray-400">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-primary-500 transition-colors" aria-label="GitHub Link">
                          <Code2 size={22} />
                        </a>
                      )}
                      {project.external && (
                        <a href={project.external} target="_blank" rel="noreferrer" className="hover:text-primary-500 transition-colors" aria-label="External Link">
                          <ExternalLink size={22} />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed flex-grow mb-6">
                    {project.description}
                  </p>
                  
                  <ul className="flex flex-wrap gap-2 text-xs font-mono text-gray-500 dark:text-gray-500 mt-auto">
                    {project.tech.map((tech, i) => (
                      <li key={i} className="px-2 py-1 bg-gray-100 dark:bg-dark-700 rounded-md">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
