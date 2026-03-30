import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './About';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const EDU_DATA = [
  {
    school: 'Northeastern University',
    degree: 'B.S. in Computer Science',
    location: 'Boston, MA',
    date: 'Sep 2013 - May 2017',
    description: 'Minor in Interaction Design. Graduated magna cum laude. Member of the HCI lab and teaching assistant for Fundamentals of Computer Science.',
  },
  {
    school: 'Flatiron School',
    degree: 'Software Engineering Immersive',
    location: 'New York, NY',
    date: 'Jun 2017 - Sep 2017',
    description: 'Intensive full-stack web development bootcamp focusing on Ruby on Rails, React, and Redux.',
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24 relative bg-dark-800/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <SectionHeading>Education</SectionHeading>
          
          <div className="space-y-12">
            {EDU_DATA.map((edu, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.2 }}
                className="relative pl-8 border-l-2 border-dark-600/50 hover:border-primary-500 transition-colors duration-300 group"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-dark-700 border-2 border-primary-500 group-hover:bg-primary-500 transition-colors duration-300"></div>
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                  <h3 className="text-xl font-bold text-gray-100 group-hover:text-primary-400 transition-colors">
                    {edu.school}
                  </h3>
                  <div className="flex items-center text-sm font-mono text-primary-500 shrink-0">
                    <Calendar size={14} className="mr-2" />
                    {edu.date}
                  </div>
                </div>
                
                <h4 className="text-lg font-medium text-gray-300 mb-4 flex items-center">
                  <GraduationCap size={18} className="mr-2 text-primary-500" />
                  {edu.degree}
                </h4>
                
                <p className="text-gray-400 leading-relaxed mb-4">
                  {edu.description}
                </p>
                
                <div className="flex items-center text-sm font-mono text-gray-500">
                  <MapPin size={14} className="mr-2" />
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
