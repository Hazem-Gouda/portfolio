import React from 'react';

/**
 * ProjectCard component
 * Displays a single project with image, description, tech stack, and links
 * @param {string} title - Project title
 * @param {string} desc - Project description
 * @param {string[]} tech - Array of technology tags
 * @param {string} imgAlt - Alt text for project image
 * @param {string} img - Image URL
 * @param {string} live - Live demo URL
 * @param {string} github - GitHub repository URL
 */
export default function ProjectCard({ title, desc, tech = [], imgAlt = '', img, live, github }) {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
      {img ? (
        <img src={img} alt={imgAlt} className="w-full h-48 object-cover" loading="lazy" />
      ) : (
        <div className="h-48 bg-gray-100 flex items-center justify-center">
          <span className="text-gray-400">Screenshot</span>
        </div>
      )}

      <div className="p-4">
        <h3 className="font-semibold text-lg text-primary">{title}</h3>
        <p className="mt-2 text-sm text-gray-600">{desc}</p>

        <div className="mt-3 flex flex-wrap gap-2">
          {tech.map(t => (
            <span key={t} className="text-xs bg-gray-100 px-2 py-1 rounded">{t}</span>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-3">
          <a href={live || '#'} target="_blank" rel="noopener noreferrer" aria-label="Live demo" className="text-accent hover:underline">Live</a>
          <a href={github || '#'} target="_blank" rel="noopener noreferrer" aria-label="GitHub repo" className="text-black hover:underline">GitHub</a>
        </div>
      </div>
    </div>
  );
}
