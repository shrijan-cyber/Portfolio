import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <div className="container mx-auto px-6">
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Education <span className="gradient-text">Journey</span></h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto"></div>
      </motion.div>
      
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* Timeline Bar */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-400 via-purple-600 to-cyan-400"></div>
          
          {/* Education Card */}
          <div className="relative z-10">
            <div className="md:flex items-center">
              {/* Timeline Dot */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-black border-4 border-purple-500 rounded-full"></div>
              
              {/* Left Side (Date) */}
              <div className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0">
                <div className="bg-gray-800/30 p-6 rounded-lg glass inline-block">
                  <h3 className="text-xl font-bold text-cyan-400">2023 - Present</h3>
                  <p className="text-gray-400">Pursuing Bachelor's Degree</p>
                </div>
              </div>
              
              {/* Right Side (Details) */}
              <div className="md:w-1/2 md:pl-12">
                <div className="bg-gray-800/30 p-7rounded-lg glass">
                  <h3 className="text-2xl font-bold mb-2">Bachelor of Technology (B.Tech)</h3>
                  <h4 className="text-xl font-semibold mb-2 text-purple-400">Computer Science and Engineering</h4>
                  <p className="text-gray-300 mb-2">JB Institute of Technology</p>
                  <p className="text-gray-400">
                    Pursuing comprehensive education in computer science fundamentals, programming paradigms, 
                    software development methodologies, and cutting-edge technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Animated Particles for decoration */}
          <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-24 h-24 rounded-full bg-cyan-500/10 absolute animate-ping"></div>
            <div className="w-32 h-32 rounded-full bg-purple-500/5 absolute animate-pulse"></div>
          </div>
        </motion.div>
        
        {/* Certificate or Course Section (Optional) */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-8">Continuous Learning</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-800/50 rounded-lg p-6 transition-all hover:bg-gray-800/70 hover:shadow-lg hover:shadow-cyan-500/10 group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors">Self-Learning</h4>
              <p className="text-gray-400">Continuously expanding knowledge through online courses, documentation, and building personal projects.</p>
            </div>
            
            <div className="bg-gray-800/50 rounded-lg p-6 transition-all hover:bg-gray-800/70 hover:shadow-lg hover:shadow-purple-500/10 group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-400 to-cyan-600 flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2 group-hover:text-purple-400 transition-colors">Technical Documentation</h4>
              <p className="text-gray-400">Reading academic papers and technical documentation to stay updated with industry standards.</p>
            </div>
            
            <div className="bg-gray-800/50 rounded-lg p-6 transition-all hover:bg-gray-800/70 hover:shadow-lg hover:shadow-cyan-500/10 group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-600 to-purple-400 flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors">Hands-on Projects</h4>
              <p className="text-gray-400">Building practical applications to reinforce theoretical knowledge and develop problem-solving skills.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;