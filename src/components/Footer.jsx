import React, { useEffect, useRef } from 'react';
import { motion} from 'framer-motion';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
//import { GitHub, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const canvasRef = useRef(null);
  
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const particles = [];
    let animationFrameId;
    
    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Create particles
    const createParticles = () => {
      const particleCount = Math.min(30, Math.floor(canvas.width / 30));
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: Math.random() * 0.5 - 0.25,
          speedY: Math.random() * 0.5 - 0.25,
          color: [
            'rgba(76, 201, 240, 0.6)',
            'rgba(67, 97, 238, 0.6)',
            'rgba(58, 12, 163, 0.6)',
            'rgba(114, 9, 183, 0.6)',
            'rgba(247, 37, 133, 0.6)'
          ][Math.floor(Math.random() * 5)]
        });
      }
    };
    
    createParticles();
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Handle boundaries
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1;
        }
        
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1;
        }
        
        // Connect particles
        particles.forEach(otherParticle => {
          if (particle === otherParticle) return;
          
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(100, 200, 255, ${(100 - distance) / 500})`;
            ctx.lineWidth = 0.3;
            ctx.stroke();
          }
        });
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <footer className="bg-gray-900 relative overflow-hidden">
      {/* Particle background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0"></canvas>
      
      <div className="max-w-6xl mx-auto px-4 md:px-8 pt-12 pb-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* About section */}
          <div>
            <motion.h3 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-white mb-4"
            >
              Shrijan <span className="text-cyan-400">Chhetri</span>
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-gray-400 mb-6"
            >
              I build things that work—and feel good to use. With a background in frontend development and an eye for user
              experience, I focus on crafting smooth, responsive web applications that people enjoy using.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex space-x-4"
            >
              <a 
                href="https://github.com/shrijan-cyber" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Github size={18} className="text-white" />
              </a>
              <a 
                href="https://linkedin.com/in/shrijan-chhhetri-3545962a2" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Linkedin size={18} className="text-white" />
              </a>
              <a 
                href="mailto:shrijanchhetri31@gmail.com"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Mail size={18} className="text-white" />
              </a>
            </motion.div>
          </div>
          
          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-cyan-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors">About</a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-cyan-400 transition-colors">Skills</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-cyan-400 transition-colors">Projects</a>
              </li>
              <li>
                <a href="#experience" className="text-gray-400 hover:text-cyan-400 transition-colors">Experience</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors">Contact</a>
              </li>
            </ul>
          </motion.div>
          
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-white mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-3 mt-1 text-cyan-400">📍</span>
                <span className="text-gray-400">Dehradun, India</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 text-cyan-400">📧</span>
                <a href="mailto:shrijanchhetri31@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  shrijanchhetri31@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 text-cyan-400">📱</span>
                <a href="tel:+916396471678" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  +91 6396471678
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
        
        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent my-6"></div>
        
        {/* Copyright and back to top */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-gray-500 text-sm text-center md:text-left"
          >
            © {new Date().getFullYear()} Shrijan Chhetri. All rights reserved.
          </motion.p>
          
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            onClick={scrollToTop}
            className="mt-4 md:mt-0 py-2 px-4 rounded-full bg-gray-800 text-white flex items-center gap-2 hover:bg-gray-700 transition-all"
          >
            <span>Back to Top</span>
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;