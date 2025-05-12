import React, { useEffect, useRef } from 'react';
import { motion} from 'framer-motion';

const Experience = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Create particles
    const particlesArray = [];
    const numberOfParticles = 100;
    
    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: Math.random() * 1 - 0.5,
        speedY: Math.random() * 1 - 0.5,
        color: Math.random() > 0.5 ? '#00e6ff' : '#b700ff'
      });
    }
    
    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particlesArray.length; i++) {
        const p = particlesArray[i];
        
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Update position
        p.x += p.speedX;
        p.y += p.speedY;
        
        // Bounce off edges
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
      }
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animate);
    };
  }, []);
  
  return (
    <div className="relative container mx-auto px-6">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-20" />
      
      <motion.div 
        className="text-center mb-12 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Work <span className="gradient-text">Experience</span></h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto"></div>
      </motion.div>
      
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="relative p-8 rounded-xl bg-gray-800/30 glass border border-gray-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* Experience Card */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div className="md:border-r md:border-gray-700 pr-4">
              <h3 className="text-2xl font-bold mb-2 gradient-text">Python Intern</h3>
              <div className="flex items-center mb-4">
                <span className="text-gray-300">VerveGen Tech Pvt.Ltd</span>
                <span className="mx-2 text-gray-500">|</span>
                <span className="text-purple-400">July 2024</span>
              </div>
              <span className="inline-block bg-gradient-to-r from-cyan-400 to-purple-500 px-3 py-1 rounded-full text-sm">Offline</span>
            </div>
            
            {/* Description */}
            <div className="md:col-span-2">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-300">
                    Built a real-time face recognition model using Python, OpenCV, and TensorFlow with optimized accuracy.
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-300">
                    Developed a gesture-based mouse control system using hand tracking and OpenCV.
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-300">
                    Applied to create interactive, hardware-free solutions.
                  </p>
                </div>
              </div>
              
              {/* Skills Used */}
              <div className="mt-6">
                <h4 className="text-sm uppercase text-gray-400 mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">Python</span>
                  <span className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">OpenCV</span>
                  <span className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">TensorFlow</span>
                  <span className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">Numpy</span>
                  <span className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">Mediapipe</span>
                  <span className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">Pyautogui</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600"></div>
          <div className="absolute -bottom-3 -right-3 w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-cyan-400"></div>
        </motion.div>
        
        {/* More Experience Message */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-400">
            Currently gaining more industry experience while pursuing my B.Tech degree.
            <br />
            <span className="text-cyan-400">Open to internship and collaboration opportunities!</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;