import React, { useEffect, useRef } from 'react';
import { motion  as _motion} from 'framer-motion';

// ✅ Move softSkills outside the component to avoid useEffect dependency warning
const softSkills = [
  { name: "Leadership", rating: 8.5, color: "#4CC9F0" },
  { name: "Problem-Solving", rating: 9, color: "#4361EE" },
  { name: "Teamwork and Collaboration", rating: 8.5, color: "#3A0CA3" },
  { name: "Creativity", rating: 8, color: "#7209B7" },
  { name: "Effective Communication", rating: 9, color: "#F72585" },
  { name: "Time Management", rating: 8, color: "#4CC9F0" },
  { name: "Adaptability", rating: 9, color: "#4361EE" },
  { name: "Critical Thinking", rating: 8.5, color: "#3A0CA3" },
  { name: "Entrepreneurial Mindset", rating: 8, color: "#7209B7" },
  { name: "Decision Making", rating: 8.5, color: "#F72585" }
];

const SoftSkills = () => {
  const canvasRef = useRef(null);
  const canvasContainerRef = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  // ✅ Particle animation
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const container = canvasContainerRef.current;
    let particles = [];
    let animationFrameId;

    const resizeCanvas = () => {
      if (container) {
        canvas.width = container.offsetWidth;
        canvas.height = container.offsetHeight;
        initParticles();
      }
    };

    const initParticles = () => {
      particles = [];
      const particleCount = Math.min(50, canvas.width / 20);
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1,
          color: softSkills[Math.floor(Math.random() * softSkills.length)].color,
          speedX: Math.random() * 0.5 - 0.25,
          speedY: Math.random() * 0.5 - 0.25,
          opacity: Math.random() * 0.5 + 0.2
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color + Math.floor(particle.opacity * 255).toString(16).padStart(2, '0');
        ctx.fill();

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
      });

      animationFrameId = requestAnimationFrame(drawParticles);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    drawParticles();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []); // ✅ Now clean and warning-free

  // ✅ Cleaned: index removed as it was unused
  const SkillRadar = ({ skill }) => {
    const radius = 60;
    const centerX = radius + 20;
    const centerY = radius + 20;

    const skillPercentage = skill.rating / 10;
    const skillRadius = radius * skillPercentage;
    const skillAngle = (Math.PI * 2) * (skillPercentage);

    const arcPath = `
      M ${centerX},${centerY - radius}
      A ${radius},${radius} 0 ${skillPercentage > 0.5 ? 1 : 0} 1 
        ${centerX + radius * Math.sin(skillAngle)},
        ${centerY - radius * Math.cos(skillAngle)}
    `;

    return (
      <_motion.div 
        variants={itemVariants}
        className="flex flex-col items-center"
      >
        <div className="relative w-40 h-40 mb-4">
          <svg width="160" height="160" viewBox="0 0 160 160">
            <circle 
              cx={centerX} 
              cy={centerY} 
              r={radius} 
              stroke="#2A2C39" 
              strokeWidth="4" 
              fill="none" 
            />
            <path 
              d={arcPath} 
              stroke={skill.color} 
              strokeWidth="6" 
              strokeLinecap="round"
              fill="none" 
            />
            <circle 
              cx={centerX + skillRadius * Math.sin(skillAngle)} 
              cy={centerY - skillRadius * Math.cos(skillAngle)} 
              r="6" 
              fill={skill.color} 
            />
            <text 
              x={centerX} 
              y={centerY + 5} 
              textAnchor="middle" 
              fill="white" 
              fontSize="20" 
              fontWeight="bold"
            >
              {Math.round(skillPercentage * 100)}%
            </text>
          </svg>
        </div>
        <h3 className="text-lg font-medium text-white text-center">{skill.name}</h3>
      </_motion.div>
    );
  };

  return (
    <section id="soft-skills" className="min-h-screen bg-gray-900 py-20 px-4 md:px-8 relative overflow-hidden">
      <div ref={canvasContainerRef} className="absolute inset-0 z-0">
        <canvas ref={canvasRef} className="w-full h-full"></canvas>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <_motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
              Soft Skills
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto"></div>
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
            Beyond technical expertise, I bring a range of interpersonal and professional skills
            that help me collaborate effectively and deliver results.
          </p>
        </_motion.div>

        <_motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
        >
          {softSkills.map((skill, index) => (
            <SkillRadar key={index} skill={skill} />
          ))}
        </_motion.div>
      </div>
    </section>
  );
};

export default SoftSkills;
