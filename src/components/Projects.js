import React from 'react';
import ProjectCard from './ProjectCard';

const sampleProjects = [
  {
    title: 'To-do List app',
    desc: 'Minimal, Professional & Light/Dark mode',
    tech: ['React', 'Material UI', 'Responsive'],
    live: 'https://hazem-gouda.github.io/to-do-list/',
    github: 'https://github.com/Hazem-Gouda/to-do-list',
    img: '/assets/todoImg.png'
  },
  {
    title: 'Weather app',
    desc: 'OpenWeather API fetch used',
    tech: ['React', 'API', 'Bootstrap', 'Responsive'],
    live: 'https://hazem-gouda.github.io/weather-app/',
    github: 'https://github.com/Hazem-Gouda/weather-app',
    img: '/assets/weatherImg.png'
  },
  {
    title: 'Gouda Restaurant',
    desc: 'My ex-Restaurant (Redux for illustration)',
    tech: ['React', 'Redux', 'Bootstrap', 'Responsive'],
    live: 'https://hazem-gouda.github.io/restaurant-app/',
    github: 'https://github.com/Hazem-Gouda/restaurant-app',
    img: '/assets/restaurantImg.png'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold text-primary">Projects</h2>
        <p className="mt-2 text-gray-600">Selected projects demonstrating frontend skills and responsive UI.</p>
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
