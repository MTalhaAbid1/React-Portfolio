import React from 'react';
import { motion } from 'framer-motion';
import { Code2, ExternalLink, Folder } from 'lucide-react';
import { SectionHeading } from './About';

const PROJECTS = [
  {
    title: 'Halcyon Theme',
    description: 'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.',
    tech: ['VS Code', 'Sublime Text', 'Atom', 'iTerm2'],
    github: '#',
    external: '#'
  },
  {
    title: 'Spotify Profile',
    description: 'A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track.',
    tech: ['React', 'Express', 'Spotify API', 'Styled Components'],
    github: '#',
    external: '#'
  },
  {
    title: 'Build a Spotify Connected App',
    description: 'Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, and more.',
    tech: ['React', 'Express', 'Styled Components', 'REST API'],
    external: '#'
  },
  {
    title: 'Time to Have More Fun',
    description: 'A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS.',
    tech: ['Next.js', 'Firebase', 'Tailwind CSS'],
    github: '#',
    external: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative bg-dark-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading>Some Things I've Built</SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="group p-6 rounded-2xl bg-dark-800 border border-dark-600/50 hover:border-primary-500/50 transition-all duration-300 flex flex-col h-full shadow-lg"
              >
                <div className="flex justify-between items-center mb-6 text-gray-400 group-hover:text-primary-500 transition-colors">
                  <Folder size={40} className="stroke-1" />
                  <div className="flex gap-4 stroke-2 text-gray-300">
                    {project.github && (
                      <a href={project.github} className="hover:text-primary-500 transition-colors">
                        <Code2 size={20} />
                      </a>
                    )}
                    {project.external && (
                      <a href={project.external} className="hover:text-primary-500 transition-colors">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-gray-100 group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm flex-grow mb-6">
                  {project.description}
                </p>
                
                <ul className="flex flex-wrap gap-3 text-xs font-mono text-gray-500 mt-auto">
                  {project.tech.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
