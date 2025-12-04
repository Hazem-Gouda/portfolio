import React from 'react';

/**
 * Contact section component
 * Displays contact information and social media links
 * Includes phone, WhatsApp, email, LinkedIn, GitHub, and resume download
 */
export default function Contact() {
  const phone = '+20106759041';
  const mail = 'hazemgouda97@yahoo.com';
  const linkedin = 'https://www.linkedin.com/in/hazem-gouda-07ba64191';
  const github = 'https://github.com/hazem-gouda';
  const resumeLink = process.env.PUBLIC_URL + '/assets/Hazem_Gouda_Frontend_Resume.pdf';

  return (
    <section id="contact" className="py-16">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold text-primary">Contact</h2>
        <p className="mt-2 text-gray-600">I'm available for freelance or full-time opportunities. Reach out and let's build something great.</p>

        <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-center gap-4">
          <div className="flex items-center gap-3 justify-center w-full sm:w-auto">
            {/* Phone */}
            <a href={`tel:${phone}`} aria-label={`Call ${phone}`} className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-white shadow hover:bg-gray-50 text-orange-400 transition">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="sr-only">Phone</span>
            </a>

            {/* WhatsApp */}
            <a href={`https://wa.me/${phone.replace('+','')}`} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-green-50 text-green-500 shadow hover:bg-green-100 transition">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M20.4 3.6C18.2 1.4 15.2 0 12 0 5.5 0 0.1 5.4 0.1 11.9c0 2.1 0.5 4.1 1.5 5.9l-1.6 5.8 6-1.6c1.7 1 3.7 1.5 5.7 1.5h0c6.5 0 11.8-5.4 11.8-11.9C23.5 8.8 22.1 5.8 20.4 3.6zM12 21.7h0c-1.8 0-3.5-0.5-5-1.3l-0.4-0.2-3.7 1 1-3.6L3.7 17c-1-1.6-1.5-3.4-1.5-5.3 0-5.4 4.4-9.8 9.8-9.8 2.6 0 5.1 1 6.9 2.9 1.8 1.8 2.9 4.3 2.9 6.9C21.8 17.3 17.4 21.7 12 21.7z" fill="currentColor"/>
                <path d="M17.4 14.4c-0.3-0.1-1.7-0.8-1.9-0.9c-0.3-0.1-0.5-0.1-0.7 0.1c-0.2 0.3-0.8 0.9-0.9 1.1c-0.2 0.2-0.3 0.2-0.6 0.1c-0.3-0.1-1.2-0.4-2.3-1.4c-0.9-0.8-1.4-1.7-1.6-2c-0.2-0.3 0-0.4 0.1-0.6c0.1-0.1 0.3-0.3 0.4-0.4c0.1-0.1 0.2-0.2 0.3-0.4c0.1-0.2 0-0.3 0-0.4c0-0.1-0.7-1.7-1-2.3C8.9 6.8 8.7 6.8 8.5 6.8c-0.2 0-0.4 0-0.6 0S7.3 7 7.1 7.3c-0.3 0.3-1 1-1 2.6c0 1.5 1.1 3 1.3 3.2c0.2 0.2 2.1 3.2 5.1 4.5c0.7 0.3 1.3 0.5 1.7 0.6c0.7 0.2 1.4 0.2 1.9 0.1c0.6-0.1 1.7-0.7 1.9-1.4c0.2-0.7 0.2-1.3 0.2-1.4C17.9 14.6 17.7 14.5 17.4 14.4z" fill="currentColor"/>
              </svg>
              <span className="sr-only">WhatsApp</span>
            </a>
          </div>

          <div className="flex items-center gap-3 justify-center w-full sm:w-auto">
            {/* Email */}
            <a href={`mailto:${mail}`} aria-label={`Email ${mail}`} className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-white shadow hover:bg-gray-50 text-cyan-500 transition">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="sr-only">Email</span>
            </a>

            {/* LinkedIn */}
            <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-white shadow hover:bg-gray-50 text-blue-500 transition">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 9h4v12H2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="sr-only">LinkedIn</span>
            </a>

            {/* GitHub */}
            <a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-white shadow hover:bg-gray-50 text-gray-600 transition">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="sr-only">GitHub</span>
            </a>
          </div>
        </div>

  <div className="mt-6 flex justify-center">
          <a href={resumeLink} download="Hazem_Gouda_Frontend_Resume.pdf" className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-md shadow hover:scale-[1.02] transition" aria-label="Download resume">
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
