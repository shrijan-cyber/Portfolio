import React, { useState, useEffect, Suspense } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero';
import ProfessionalSummary from './components/ProfessionalSummary';
import TechnicalSkills from './components/TechnicalSkills';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import SoftSkills from './components/SoftSkills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <main className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent pointer-events-none"></div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <section id="home">
                <Hero />
              </section>
              
              <section id="about">
                <ProfessionalSummary />
              </section>
              
              <section id="skills" className=" bg-gray-900/30">
                <TechnicalSkills />
              </section>
              
              <section id="education" className="py-20">
                <Education />
              </section>
              
              <section id="experience" className="py-20 bg-gray-900/30">
                <Experience />
              </section>
              
              <section id="projects">
                <Projects />
              </section>
              
              <section id="soft-skills" className=" bg-gray-900/30">
                <SoftSkills />
              </section>
              
              <section id="contact">
                <Contact />
              </section>
            </motion.div>
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;