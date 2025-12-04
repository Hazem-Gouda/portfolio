import React from 'react';
import './index.css';
// Component imports ordered to match visual layout (top to bottom)
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

/**
 * Main App component
 * Renders the portfolio website with all sections in visual order
 */
function App() {
  return (
    <div className="text-gray-800">
      <Navbar />
      <main id="main" role="main" className="pt-16">
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
