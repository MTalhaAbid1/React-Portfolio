import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../../data';
import { MapPin, Mail, Briefcase, Code2, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 relative bg-white dark:bg-dark-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-500 font-mono mb-4 text-sm font-semibold tracking-wider">
            <span>04.</span> What's Next?
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
            Get In Touch
          </h2>
        </motion.div>

        <div className="flex justify-center w-full max-w-4xl mx-auto">
          
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full space-y-10 p-8 md:p-12 rounded-3xl bg-gray-50 dark:bg-dark-800 border border-gray-200 dark:border-dark-700 shadow-sm flex flex-col items-center text-center"
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Contact Information</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full pt-4">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex flex-col items-center group">
                <div className="p-4 mb-5 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-500 group-hover:bg-primary-600 group-hover:dark:bg-primary-500 group-hover:text-white group-hover:dark:text-white transition-all duration-300">
                  <Mail size={32} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">Email</h4>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">{PERSONAL_INFO.email}</p>
                </div>
              </a>
              
              <a href="https://www.linkedin.com/in/muhammad-talha-abid-31532127a/" target="_blank" rel="noreferrer" className="flex flex-col items-center group">
                <div className="p-4 mb-5 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-500 group-hover:bg-primary-600 group-hover:dark:bg-primary-500 group-hover:text-white group-hover:dark:text-white transition-all duration-300">
                  <Briefcase size={32} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">LinkedIn</h4>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">Connect professionally</p>
                </div>
              </a>
              
              <a href="https://github.com/MTalhaAbid1" target="_blank" rel="noreferrer" className="flex flex-col items-center group">
                <div className="p-4 mb-5 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-500 group-hover:bg-primary-600 group-hover:dark:bg-primary-500 group-hover:text-white group-hover:dark:text-white transition-all duration-300">
                  <Code2 size={32} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">GitHub</h4>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">MTalhaAbid1</p>
                </div>
              </a>
              
              <div className="flex flex-col items-center group cursor-default">
                <div className="p-4 mb-5 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-500 transition-all duration-300">
                  <MapPin size={32} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Location</h4>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">Lahore, Pakistan (Remote available)</p>
                </div>
              </div>
            </div>
            
          </motion.div>
         
        </div>
      </div>
    </section>
  );
};

export default Contact;
