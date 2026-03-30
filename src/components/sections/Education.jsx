import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './About';
import { GraduationCap, MapPin } from 'lucide-react';

const EDU_DATA = [
  {
    school: 'Lahore Garrison University',
    degree: 'B.S. in Computer Science',
    location: 'Lahore, Pakistan',
    date: '2020 - 2024',
    description: '',
  },
  {
    school: 'Punjab Group of Colleges',
    degree: 'Intermediate in Computer Science (ICS)',
    location: 'Lahore, Pakistan',
    date: '2018 - 2020',
    description: '',
  },
  {
    school: 'Garrison Academy for Boys',
    degree: 'Matriculation (Computer Science)',
    location: 'Lahore, Pakistan',
    date: '2016 - 2018',
    description: '',
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24 relative bg-gray-100 dark:bg-dark-800/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <SectionHeading>Education</SectionHeading>
          
          <div className="space-y-12 border-l-2 border-gray-300 dark:border-dark-600/50 pl-6 relative before:absolute before:inset-0 before:ml-[-1px] before:-translate-x-1/2 before:w-[2px] before:bg-gradient-to-b before:from-primary-500 before:via-primary-500/50 before:to-transparent before:h-full before:z-[-1]">
            {EDU_DATA.map((edu, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.2 }}
                className="relative pl-6 lg:pl-10 group"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[35px] top-[6px] w-5 h-5 rounded-full bg-white dark:bg-dark-700 border-[3px] border-primary-500 group-hover:bg-primary-500 group-hover:dark:bg-primary-500 transition-colors duration-300 shadow-[0_0_15px_rgba(59,130,246,0.3)]"></div>
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {edu.school}
                  </h3>
                  <div className="flex items-center text-sm font-mono font-semibold text-primary-600 dark:text-primary-500 shrink-0 bg-primary-50 dark:bg-primary-900/10 px-3 py-1 rounded-full w-fit">
                    {edu.date}
                  </div>
                </div>
                
                <h4 className="text-lg font-medium text-gray-800 dark:text-gray-300 mb-4 flex items-center">
                  <GraduationCap size={20} className="mr-2 text-primary-500" />
                  {edu.degree}
                </h4>
                
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4 text-[15px]">
                  {edu.description}
                </p>
                
                <div className="flex items-center text-xs font-mono font-medium text-gray-500 dark:text-gray-500">
                  <MapPin size={14} className="mr-1.5" />
                  {edu.location}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
