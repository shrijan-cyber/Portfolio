import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const ProjectSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const projectsRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "StudentX",
      description: "A MERN stack platform for students to choose career paths, build resumes, find accommodation, and get course guidance.",
      tech: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS"],
      details: "StudentX helps students navigate their educational journey by providing tools for career exploration, resume building, accommodation search, and course selection guidance.",
      githubUrl: "https://github.com/shrijan-cyber/Hackathon-project.git"
    },
    {
      id: 2,
      title: "Gesture Mouse System",
      description: "Gesture-based mouse control using real-time hand tracking and gesture recognition.",
      tech: ["Python", "OpenCV", "mediapipe", "pyautogui", "numpy"],
      details: "Enables cursor movement, clicking, and scrolling using hand gestures with high accuracy and real-time performance.",
      githubUrl: "https://github.com/shrijan-cyber/Project.git"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A fully responsive portfolio website to showcase skills and projects.",
      tech: ["HTML", "CSS", "JavaScript", "Tailwind", "React"],
      details: "Designed using modern UI principles and deployed on GitHub Pages for showcasing frontend capabilities.",
  
      githubUrl: "https://github.com/shrijan-cyber/Portfolio.git"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="min-h-screen bg-gray-900 py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
              Projects
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto"></div>
        </motion.div>

        <motion.div
          ref={projectsRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="project-card cursor-pointer bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700"
              onClick={() => handleProjectClick(project)}
            >
              <h3 className="text-2xl font-semibold mb-2 text-white">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs px-3 py-1 rounded-full bg-gray-700 text-cyan-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center mt-4">
                <button className="py-2 px-4 w-full bg-gradient-to-r from-cyan-500 to-purple-600 rounded-md text-white font-medium hover:from-cyan-600 hover:to-purple-700 transition-all">
                  View Details
                </button>
              </div>
              <div className="absolute top-4 right-4 flex gap-2">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-700 rounded-full hover:bg-gray-600"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={18} className="text-white" />
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-700 rounded-full hover:bg-gray-600"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={18} className="text-white" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="p-6">
              <button
                className="absolute top-4 right-4 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-all"
                onClick={handleCloseModal}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <h3 className="text-3xl font-bold mb-4 text-white">{selectedProject.title}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs px-3 py-1 rounded-full bg-gray-700 text-cyan-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-gray-300 mb-6">{selectedProject.details}</p>
              <div className="flex gap-4">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 py-2 px-4 bg-gray-700 rounded-md text-white hover:bg-gray-600 transition-all"
                  >
                    <Github size={18} />
                    View Code
                  </a>
                )}
                {selectedProject.demoUrl && (
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 py-2 px-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-md text-white hover:from-cyan-600 hover:to-purple-700 transition-all"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default ProjectSection;
