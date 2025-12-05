import React from 'react';

/**
 * Hero section component
 * Main landing section with introduction and call-to-action buttons
 */
export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center" >
      <div className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-primary">Hazem Gouda <span className="text-accent">— Front-end Developer</span></h1>
        <p className="mt-4 text-gray-600 text-lg">I create modern, responsive web applications through React with practical business experiences background.</p>
        <div className="mt-8 flex justify-center gap-4">
          <a href="#projects" className="px-5 py-3 bg-accent text-white rounded-md shadow hover:scale-[1.02] transition">View Projects</a>
          <a href="#contact" className="px-5 py-3 border border-gray-200 rounded-md hover:bg-gray-50 transition">Get in touch</a>
        </div>
      </div>
    </section>
  );
}
