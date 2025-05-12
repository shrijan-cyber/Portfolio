import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail, Phone } from 'lucide-react';
import emailjs from "@emailjs/browser";
import resume from "../assets/Shrijan_Resume.pdf"

const Contact = () => {

  const canvasRef = useRef(null);

  const formRef = useRef();

   const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1s5sfaq",
        "template_fl6x6hp",
        formRef.current,
        "APlHnDQrx6TJinkQK"
      )
      .then(
        () => alert("Email Sent Successfully!"),
        (error) => console.error(error.text)
      );

    e.target.reset();
  };

  

    // Canvas animation effect
    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
  
      const ctx = canvas.getContext('2d');
      const particles = [];
      const particleCount = 50;
      
      // Set canvas dimensions
      const setCanvasDimensions = () => {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
      };
      
      setCanvasDimensions();
      window.addEventListener('resize', setCanvasDimensions);
      
      // Create particles
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1,
          color: `rgba(${Math.floor(Math.random() * 100 + 100)}, ${Math.floor(Math.random() * 150 + 100)}, ${Math.floor(Math.random() * 255)}, ${Math.random() * 0.5 + 0.25})`,
          speedX: Math.random() * 2 - 1,
          speedY: Math.random() * 2 - 1,
          connections: []
        });
      }
      
      // Animation function
      const animate = () => {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Update and draw particles
        particles.forEach(particle => {
          // Update particle position
          particle.x += particle.speedX;
          particle.y += particle.speedY;
          
          // Boundary check and bounce
          if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
          if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
          
          // Draw particle
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
          ctx.fillStyle = particle.color;
          ctx.fill();
          
          // Find and draw connections
          particle.connections = [];
          particles.forEach(otherParticle => {
            if (particle === otherParticle) return;
            
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 100) {
              particle.connections.push(otherParticle);
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.strokeStyle = `rgba(100, 200, 255, ${0.1 * (1 - distance / 100)})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          });
        });
      };
      
      animate();
      
      return () => {
        window.removeEventListener('resize', setCanvasDimensions);
      };
    }, []);
    return (
      <section id="contact" className="min-h-screen bg-gray-900 py-20 px-4 md:px-8 relative overflow-hidden">
        {/* Canvas background */}
        <canvas ref={canvasRef} className="absolute inset-0 z-0"></canvas>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
                Get In Touch
              </span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto"></div>
            <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
              Have a project in mind or want to discuss potential opportunities? 
              I'd love to hear from you!
            </p>
          </motion.div>
  
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
              className="bg-gray-800 bg-opacity-70 backdrop-blur-sm rounded-xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-6 text-white">Send a Message</h3>
              
              <form onSubmit={sendEmail} ref={formRef}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                    placeholder="Enter you name"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-300 mb-2">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
                  <textarea
                    name="message"
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all resize-none"
                    placeholder="Hello, I'd like to talk about..."
                  ></textarea>
                </div>
                <button
                type='submit'
                className='text-black p-4 rounded lg font-medium text-md bg-green-600'
                >
                  Send Message
                </button>
              </form>
            </motion.div>
  
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-col justify-between"
            >
              <div className="bg-gray-800 bg-opacity-70 backdrop-blur-sm rounded-xl p-8 shadow-lg mb-6">
                <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 mr-4 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <a href="mailto:shrijanchhetri31@gmail.com" className="text-white hover:text-cyan-400 transition-colors">
                        shrijanchhetri31@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 mr-4 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Phone</p>
                      <a href="tel:+916396471678" className="text-white hover:text-cyan-400 transition-colors">
                        +91 6396471678
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 mr-4 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
                      <Github className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">GitHub</p>
                      <a href="https://github.com/shrijan-cyber" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 transition-colors">
                        github.com/shrijan-cyber
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 mr-4 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
                      <Linkedin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">LinkedIn</p>
                      <a href="https://linkedin.com/in/shrijan-chhhetri-3545962a2" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 transition-colors">
                        linkedin.com/in/shrijan-chhhetri-3545962a2
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Resume Download */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true, amount: 0.2 }}
                className="bg-gray-800 bg-opacity-70 backdrop-blur-sm rounded-xl p-8 shadow-lg"
              >
                <h3 className="text-2xl font-bold mb-4 text-white">Download Resume</h3>
                <p className="text-gray-300 mb-6">
                  Get a copy of my resume for more detailed information about my experience, 
                  education, and skills.
                </p>
                
                <a 
                  href={resume}
                  download="Shrijan_Resume"
                  className="inline-flex items-center py-3 px-6 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium hover:from-cyan-600 hover:to-purple-700 transition-all"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download Resume
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  };




export default Contact;