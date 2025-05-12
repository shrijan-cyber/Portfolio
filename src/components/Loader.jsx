import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Loader = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      canvas, 
      antialias: true,
      alpha: true 
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // Create a cube
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ 
      color: 0x00e6ff,
      wireframe: true 
    });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    
    // Create another cube slightly larger for glow effect
    const glowGeometry = new THREE.BoxGeometry(1.1, 1.1, 1.1);
    const glowMaterial = new THREE.MeshBasicMaterial({ 
      color: 0xb700ff,
      wireframe: true,
      transparent: true,
      opacity: 0.3
    });
    const glowCube = new THREE.Mesh(glowGeometry, glowMaterial);
    scene.add(glowCube);
    
    camera.position.z = 5;
    
    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      
      glowCube.rotation.x += 0.01;
      glowCube.rotation.y += 0.01;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      // Clean up Three.js resources
      geometry.dispose();
      material.dispose();
      glowGeometry.dispose();
      glowMaterial.dispose();
      renderer.dispose();
    };
  }, []);
  
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black">
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div className="z-10 text-center">
        <h2 className="text-3xl font-bold mb-4 gradient-text">Loading...</h2>
        <p className="text-gray-400">Preparing Shrijan's Portfolio</p>
      </div>
    </div>
  );
};

export default Loader;