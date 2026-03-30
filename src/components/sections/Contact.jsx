import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../../data';

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 text-primary-500 font-mono mb-4 text-sm">
            <span>04.</span> What's Next?
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Get In Touch
          </h2>
          
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="inline-flex items-center px-8 py-4 rounded-full bg-transparent border-2 border-primary-500 text-primary-400 font-medium hover:bg-primary-500 hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.1)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transform hover:-translate-y-1"
          >
            Say Hello
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
