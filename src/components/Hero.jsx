import React, { useEffect, useRef } from 'react';
import { motion} from 'framer-motion';
import * as THREE from 'three';

const Hero = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    // Setup Three.js scene
    const canvas = canvasRef.current;
    const scene = new THREE.Scene();
    
    const camera = new THREE.PerspectiveCamera(
      75, 
      window.innerWidth / window.innerHeight, 
      0.1, 
      1000
    );
    camera.position.z = 5;
    
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // Create tech stack icons
    const createIcon = (geometry, position, color) => {
      const material = new THREE.MeshBasicMaterial({
        color,
        wireframe: true,
        transparent: true,
        opacity: 0.7,
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(position.x, position.y, position.z);
      scene.add(mesh);
      return mesh;
    };
    
    // Different geometries representing tech skills
    const reactGeometry = new THREE.TorusGeometry(0.7, 0.2, 16, 100);
    const jsGeometry = new THREE.BoxGeometry(0.8, 0.8, 0.8);
    const htmlGeometry = new THREE.ConeGeometry(0.5, 1, 5);
    const cssGeometry = new THREE.OctahedronGeometry(0.5, 0);
    const javaGeometry = new THREE.TetrahedronGeometry(0.7, 0);
    
    // Create meshes with positions
    const reactMesh = createIcon(reactGeometry, { x: 2, y: 1, z: 0 }, 0x61DBFB);
    const jsMesh = createIcon(jsGeometry, { x: -2, y: -1, z: 0 }, 0xF7DF1E);
    const htmlMesh = createIcon(htmlGeometry, { x: -1.5, y: 1.5, z: 0 }, 0xE34C26);
    const cssMesh = createIcon(cssGeometry, { x: 1.5, y: -1.5, z: 0 }, 0x264DE4);
    const javaMesh = createIcon(javaGeometry, { x: 0, y: 2, z: 0 }, 0x007396);
    
    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Rotate the icons
      reactMesh.rotation.x += 0.01;
      reactMesh.rotation.y += 0.01;
      
      jsMesh.rotation.x += 0.01;
      jsMesh.rotation.y += 0.01;
      
      htmlMesh.rotation.x += 0.01;
      htmlMesh.rotation.z += 0.01;
      
      cssMesh.rotation.x += 0.01;
      cssMesh.rotation.y += 0.01;
      
      javaMesh.rotation.x += 0.01;
      javaMesh.rotation.z += 0.01;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      
      // Dispose resources
      reactGeometry.dispose();
      jsGeometry.dispose();
      htmlGeometry.dispose();
      cssGeometry.dispose();
      javaGeometry.dispose();
      
      scene.children.forEach(child => {
        if (child.material) child.material.dispose();
        if (child.geometry) child.geometry.dispose();
      });
      
      renderer.dispose();
    };
  }, []);
  
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center px-10 justify-center overflow-hidden">
      {/* 3D Background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      
      {/* Content */}
      <div className="container mx-auto px-6 z-10 relative">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className='text-green-500'>Hi</span>, I'm <span className="gradient-text text-blue-500">Shrijan Chhetri</span>
            </motion.h1>
            
            <motion.h2 
              className="text-xl md:text-2xl text-gray-300 mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="text-yellow-500 ">Frontend Developer</span> & <span className="text-purple-600">UI/UX Enthusiast</span>
            </motion.h2>
            
            <motion.p 
              className="text-gray-400 mb-8 max-w-md mx-auto md:mx-0"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              I build things that work—and feel good to use. Creating digital experiences
              that blend clean code with thoughtful design.
            </motion.p>
            
            <motion.div
              className="flex flex-wrap gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <a href="#projects" className="neon-button bg-blue-600 p-2 rounded-lg text-black font-medium text-md hover:bg-blue-400">
                View My Work
              </a>
              <a href="#contact" className="neon-button bg-green-600 p-2 rounded-lg text-black font-medium text-md hover:bg-green-400">
                Get In Touch
              </a>
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-12 md:mt-0 md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            {/* Profile image placeholder with glow effect */}
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 opacity-20 blur-xl animate-pulse"></div>
              <div className="relative w-full h-full rounded-full border-2 border-white/20 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <span className="text-5xl">SC</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <span className="text-sm text-gray-400 mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-gray-400 rounded-full animate-bounce"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;