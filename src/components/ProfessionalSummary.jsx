import React, { useEffect, useRef } from 'react';
import { motion} from 'framer-motion';

const ProfessionalSummary = () => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    const container = containerRef.current;
    
    // Particle setup
    const createParticles = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
      canvas.style.position = 'absolute';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.zIndex = '0';
      canvas.style.opacity = '0.3';
      
      container.appendChild(canvas);
      
      const particles = [];
      const particleCount = 50;
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1,
          color: Math.random() > 0.5 ? '#00e6ff' : '#b700ff',
          speedX: Math.random() * 1 - 0.5,
          speedY: Math.random() * 1 - 0.5
        });
      }
      
      const render = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
          ctx.fillStyle = particle.color;
          ctx.fill();
          
          // Update position
          particle.x += particle.speedX;
          particle.y += particle.speedY;
          
          // Bounce off edges
          if (particle.x < 0 || particle.x > canvas.width) {
            particle.speedX *= -1;
          }
          
          if (particle.y < 0 || particle.y > canvas.height) {
            particle.speedY *= -1;
          }
        });
        
        requestAnimationFrame(render);
      };
      
      render();
      
      // Handle resize
      const handleResize = () => {
        canvas.width = container.offsetWidth;
        canvas.height = container.offsetHeight;
      };
      
      window.addEventListener('resize', handleResize);
      
      return () => {
        window.removeEventListener('resize', handleResize);
        container.removeChild(canvas);
      };
    };
    
    const cleanup = createParticles();
    
    return cleanup;
  }, []);
  
  return (
    <div ref={containerRef} className="relative container mx-auto px-6 py-20 overflow-hidden">
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-500">Professional <span className="gradient-text">Summary</span></h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto"></div>
      </motion.div>
      
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="glass p-8 md:p-12 rounded-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-lg md:text-xl mb-6">
            I build things that work—and feel good to use. With a background in frontend development and an eye for user
            experience, I focus on crafting smooth, responsive web applications that people enjoy using.
          </p>
          <p className="text-lg md:text-xl mb-6">
            Skilled in <span className="neon-text-cyan">HTML</span>, <span className="neon-text-purple">CSS</span>, <span className="neon-text-cyan">JavaScript</span>, <span className="neon-text-purple">React</span>, <span className="neon-text-cyan">Core Java</span>, and UI/UX design tools like <span className="neon-text-purple">Figma</span>, I blend clean code with thoughtful design to deliver intuitive digital experiences.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ProfessionalSummary;