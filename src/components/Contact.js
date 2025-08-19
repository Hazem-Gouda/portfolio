import React from 'react';

export default function Contact() {
  const phone = '+20106759041';
  const mail = 'hazemgouda97@yahoo.com';
  const linkedin = 'https://www.linkedin.com/in/hazem-gouda-07ba64191';
  const github = 'https://github.com/hazem-gouda';
  const resumeLink = process.env.PUBLIC_URL + '/assets/Hazem_Osama_Gouda_Resume.pdf';

  return (
    <section id="contact" className="py-16">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold text-primary">Contact</h2>
        <p className="mt-2 text-gray-600">I'm available for freelance or full-time opportunities. Reach out and let's build something great.</p>

        <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-center gap-4">
          <div className="flex items-center gap-3 justify-center w-full sm:w-auto">
            {/* Phone */}
            <a href={`tel:${phone}`} aria-label={`Call ${phone}`} className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-white shadow hover:bg-gray-50 text-primary transition">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M3 5c0 8.284 6.716 15 15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21 3v4a1 1 0 01-1 1h-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="sr-only">Phone</span>
            </a>

            {/* WhatsApp */}
            <a href={`https://wa.me/${phone.replace('+','')}`} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-green-50 text-green-600 shadow hover:bg-green-100 transition">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M20.5 3.5A11 11 0 1012 23l-1.4-4.1A10.9 10.9 0 0020.5 3.5z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M17 14c-.5 1-1.6 1.6-2.6 1.6-1.4 0-2.6-1.1-2.6-1.1s-1.2-1.4-2.6-1.4c-.9 0-1.6.6-2 1.2" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="sr-only">WhatsApp</span>
            </a>
          </div>

          <div className="flex items-center gap-3 justify-center w-full sm:w-auto">
            {/* Email */}
            <a href={`mailto:${mail}`} aria-label={`Email ${mail}`} className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-white shadow hover:bg-gray-50 text-accent transition">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M3 7.5l9 6 9-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1" />
              </svg>
              <span className="sr-only">Email</span>
            </a>

            {/* LinkedIn */}
            <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-white shadow hover:bg-gray-50 text-blue-600 transition">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="2" y="3" width="20" height="18" rx="2" stroke="currentColor" strokeWidth="1" />
                <path d="M7 10v7M7 7v.01M11 10v7M11 7v.01M15 10v7" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="sr-only">LinkedIn</span>
            </a>

            {/* GitHub */}
            <a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-white shadow hover:bg-gray-50 text-gray-800 transition">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 2c-5.5 0-10 4.5-10 10 0 4.4 2.8 8.1 6.7 9.4.5.1.7-.2.7-.5v-1.9c-2.7.6-3.3-1.2-3.3-1.2-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1 1.6-.8 1.6-.8.9-1.6 2.4-1.1 3-.8.1-.7.4-1.1.8-1.4-2.1-.2-4.3-1-4.3-4.4 0-1 .4-1.8 1-2.4-.1-.3-.4-1.3.1-2.6 0 0 .8-.2 2.6 1 .8-.2 1.6-.3 2.4-.3s1.6.1 2.4.3c1.8-1.2 2.6-1 2.6-1 .5 1.3.2 2.3.1 2.6.6.6 1 1.4 1 2.4 0 3.5-2.2 4.2-4.3 4.4.4.3.7.9.7 1.8v2.7c0 .3.2.6.7.5C20.2 20.1 23 16.4 23 12c0-5.5-4.5-10-11-10z" stroke="currentColor" strokeWidth="0.3" />
              </svg>
              <span className="sr-only">GitHub</span>
            </a>
          </div>
        </div>

  <div className="mt-6 flex justify-center">
          <a href={resumeLink} download className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-md shadow hover:scale-[1.02] transition" aria-label="Download resume">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 3v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8 11l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M21 21H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
}
