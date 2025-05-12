import React, { useState, useEffect } from 'react';
import { motion as _motion } from 'framer-motion';

const TechnicalSkills = () => {
  const skills = [
    {
      category: 'Programming Languages',
      items: [
        { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
        { name: 'Java', icon: 'devicon-java-plain colored' },
        { name: 'Python', icon: 'devicon-python-plain colored' },
        { name: 'C', icon: 'devicon-c-plain colored' },
        { name: 'C++', icon: 'devicon-cplusplus-plain colored' }
      ]
    },
    {
      category: 'Web Development',
      items: [
        { name: 'HTML5', icon: 'devicon-html5-plain colored' },
        { name: 'CSS3', icon: 'devicon-css3-plain colored' },
        { name: 'React', icon: 'devicon-react-original colored' },
        { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain colored' },
        { name: 'Bootstrap', icon: 'devicon-bootstrap-plain colored' }
      ]
    },
    {
      category: 'Developer Tools',
      items: [
        { name: 'VS Code', icon: 'devicon-vscode-plain colored' },
        { name: 'Git', icon: 'devicon-git-plain colored' },
        { name: 'Figma', icon: 'devicon-figma-plain colored' }
      ]
    }
  ];

  const [activeCategory, setActiveCategory] = useState(skills[0].category);

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css';
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const floatAnimation = {
    animate: {
      y: [0, -5, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Find the active skill category safely
  const activeSkills = skills.find(s => s.category === activeCategory)?.items || [];

  return (
    <div className="container mx-auto px-4 sm:px-10 lg:px-8 py-8">
      <_motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Technical <span className="gradient-text">Skills</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto"></div>
      </_motion.div>

      {/* Category Tabs */}
      <_motion.div
        className="flex flex-wrap justify-center gap-4 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {skills.map((category) => (
          <button
            key={category.category}
            className={`px-6 py-2 rounded-full transition-all ${
              activeCategory === category.category
                ? 'bg-gradient-to-r from-cyan-400 to-purple-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
            onClick={() => setActiveCategory(category.category)}
          >
            {category.category}
          </button>
        ))}
      </_motion.div>

      {/* Skills Display Grid */}
      <_motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {activeSkills.map((skill) => (
          <_motion.div
            key={skill.name}
            className="bg-gray-800/50 rounded-xl p-6 flex flex-col items-center hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 transition-transform duration-300"
            variants={item}
            whileHover={{ y: -5 }}
          >
            <_motion.div className="mb-4 relative" {...floatAnimation}>
              <i className={`${skill.icon} text-4xl`} />
              <svg
                className="w-16 h-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 opacity-20"
                viewBox="0 0 100 100"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#00e6ff"
                  strokeWidth="2"
                >
                  <animate attributeName="r" from="40" to="45" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" from="0.2" to="0.5" dur="2s" repeatCount="indefinite" />
                </circle>
              </svg>
            </_motion.div>
            <h3 className="text-lg font-medium text-center text-white">{skill.name}</h3>
          </_motion.div>
        ))}
      </_motion.div>
    </div>
  );
};

export default TechnicalSkills;
