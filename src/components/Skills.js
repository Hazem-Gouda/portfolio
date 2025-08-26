import React from 'react';

const skills = ['React', 'Redux', 'HTML5', 'CSS3', 'JavaScript (ES6+)', 'Bootstrap', 'Material UI', 'Tailwind', 'Responsive Design', 'Git & GitHub', 'Jest', 'React Testing Library', 'Accessibility (a11y)'];

function Icon({ name }) {
  // Return a small, semantic SVG per skill. Keep icons simple and lightweight.
  switch (name) {
    case 'React':
      return (
        <svg className="w-8 h-8 text-sky-500" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <title>React</title>
          <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
          <ellipse cx="12" cy="12" rx="6.5" ry="2.8" stroke="currentColor" strokeWidth="1" />
          <ellipse cx="12" cy="12" rx="6.5" ry="2.8" stroke="currentColor" strokeWidth="1" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="6.5" ry="2.8" stroke="currentColor" strokeWidth="1" transform="rotate(120 12 12)" />
        </svg>
      );
    case 'Redux':
      return (
        <svg className="w-6 h-6 text-violet-500" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <title>Redux</title>
          <path d="M4 12c0-4 4-8 8-8s8 4 8 8-4 8-8 8S4 16 4 12z" stroke="currentColor" strokeWidth="1" fill="none" />
          <path d="M7 12s2-2 5-2 5 2 5 2" stroke="currentColor" strokeWidth="1" />
        </svg>
      );
    case 'HTML5':
      return (
        <svg className="w-6 h-6 text-orange-500" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <title>HTML5</title>
          <path d="M4 3h16l-1.5 17L12 21l-6.5-1L4 3z" stroke="currentColor" strokeWidth="1" fill="none" />
          <path d="M7 8h10M7 13h6" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      );
    case 'CSS3':
      return (
        <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <title>CSS3</title>
          <path d="M4 3h16l-1.5 17L12 21l-6.5-1L4 3z" stroke="currentColor" strokeWidth="1" fill="none" />
          <path d="M7 8h10M7 13h8" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      );
    case 'JavaScript (ES6+)':
      return (
        <svg className="w-6 h-6 text-yellow-500" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <title>JavaScript</title>
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1" fill="none" />
          <path d="M8 8v8M16 8c-1.5 0-2 .8-2 2s.5 2 2 2" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      );
    case 'Bootstrap':
      return (
        <svg className="w-6 h-6 text-purple-600" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <title>Bootstrap</title>
          <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1" fill="none" />
          <path d="M9 8h4a2 2 0 010 4H9z" stroke="currentColor" strokeWidth="1" />
        </svg>
      );
    case 'Material UI':
      return (
        <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <title>Material UI</title>
          <path d="M4 18V6l4 4 4-6 4 6 4-4v12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      );
    case 'Tailwind':
      return (
        <svg className="w-6 h-6 text-cyan-500" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <title>Tailwind</title>
          <path d="M3 12c5-6 10-6 15 0" stroke="currentColor" strokeWidth="1.2" fill="none" />
          <path d="M3 16c5-4 10-4 15 0" stroke="currentColor" strokeWidth="1.2" fill="none" />
        </svg>
      );
    case 'Jest':
      return (
        <svg className="w-6 h-6 text-green-600" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <title>Testing (Jest)</title>
          <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1" fill="none" />
          <path d="M7 12.5l3 3 7-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'React Testing Library':
      return (
        <svg className="w-6 h-6 text-indigo-600" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <title>React Testing Library</title>
          <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1" fill="none" />
          <path d="M7 9h10M7 13h6" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      );
    case 'Accessibility (a11y)':
      return (
        <svg className="w-6 h-6 text-red-400" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <title>Accessibility</title>
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="12" cy="8" r="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M7 16c1-3 3-4 5-4s4 1 5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M7 12h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case 'Responsive Design':
      return (
        <svg className="w-6 h-6 text-gray-600" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <title>Responsive</title>
          <rect x="3" y="5" width="12" height="14" rx="1" stroke="currentColor" strokeWidth="1" />
          <rect x="16" y="7" width="5" height="10" rx="1" stroke="currentColor" strokeWidth="1" />
        </svg>
      );
    case 'Git & GitHub':
      return (
        <svg className="w-6 h-6 text-orange-600" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <title>Git</title>
          <path d="M6 3v6" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="6" cy="10" r="1.3" fill="currentColor" />
          <path d="M12 21v-7" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="12" cy="14" r="1.3" fill="currentColor" />
          <path d="M18 7v10" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="18" cy="17" r="1.3" fill="currentColor" />
        </svg>
      );
    default:
      return (
        <svg className="w-6 h-6 text-gray-400" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <title>Skill</title>
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1" />
        </svg>
      );
  }
}

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold text-primary">Skills</h2>
        <p className="mt-2 text-gray-600">Frontend skills and tools I use regularly.</p>
        <ul className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
          {skills.map(s => (
            <li key={s} className="flex items-center gap-3 bg-white p-3 rounded shadow-sm">
              <div className="w-8 h-8 rounded flex items-center justify-center text-gray-500">
                <Icon name={s} />
              </div>
              <span className="text-gray-700">{s}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
