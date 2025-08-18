import React, { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { name: 'Home', to: '#home' },
    { name: 'Projects', to: '#projects' },
    { name: 'About', to: '#about' },
    { name: 'Skills', to: '#skills' }
  ];

  return (
    <nav className="fixed w-full z-30 bg-white/60 backdrop-blur-md shadow-sm">
      {/* reduced horizontal container padding to make sides a little lower */}
      <div className="max-w-5xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#home" className="text-xl font-semibold text-primary">Hazem Gouda</a>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4">
            {links.map(l => (
              <a key={l.name} href={l.to} className="text-gray-700 hover:text-accent transition">
                {l.name}
              </a>
            ))}
            <a className="ml-2 inline-flex items-center px-3 py-1.5 bg-accent text-white rounded-md text-sm" href="#contact">Contact</a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setOpen(!open)} aria-label="Toggle menu" className="p-2 rounded-md focus:outline-none focus:ring-2">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map(l => (
              <a key={l.name} href={l.to} onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">{l.name}</a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
