import React from 'react';
import ProjectCard from './ProjectCard';

/**
 * Projects section component
 * Displays a grid of project cards showcasing portfolio projects
 * Projects are ordered from left to right: Gouda Restaurant, Weather App, To-Do List
 */
// Projects array ordered from left to right as displayed
const sampleProjects = [
  {
    title: 'Gouda Restaurant',
    desc: 'My ex-Restaurant website',
    tech: ['React', 'Next.js', 'Redux', 'Bootstrap'],
    live: 'https://restaurant-app-virid-delta.vercel.app/',
    github: 'https://github.com/Hazem-Gouda/restaurant-app',
    img: process.env.PUBLIC_URL + '/assets/restaurant.png'
  },
  {
    title: 'Weather app',
    desc: 'OpenWeather API fetch used',
    tech: ['React', 'Next.js', 'API', 'Bootstrap'],
    live: 'https://weather-app-hazem.vercel.app/',
    github: 'https://github.com/Hazem-Gouda/weather-app',
    img: process.env.PUBLIC_URL + '/assets/weather.png'
  },
  {
    title: 'To-do List app',
    desc: 'Minimal, Professional & Light/Dark mode',
    tech: ['React', 'Material UI', 'Responsive'],
    live: 'https://hazem-gouda.github.io/to-do-list/',
    github: 'https://github.com/Hazem-Gouda/to-do-list',
    img: process.env.PUBLIC_URL + '/assets/todo.png'
  }
];

/**
 * Projects component
 * Renders a responsive grid of project cards
 */
export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold text-primary">Projects</h2>
        <p className="mt-2 text-gray-600">Selected projects demonstrating frontend skills and responsive UI.</p>
        {/* Responsive grid: 1 column on mobile, 2 on tablet, 3 on desktop */}
        <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {sampleProjects.map(p => (
            <ProjectCard
              key={p.title}
              title={p.title}
              desc={p.desc}
              tech={p.tech}
              imgAlt={p.title}
              img={p.img}
              live={p.live}
              github={p.github}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
