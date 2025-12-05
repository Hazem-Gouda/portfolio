import React from 'react';

// About — keep this personal and concise. Use first-person for better connection.
export default function About() {
  return (
    <section id="about" className="py-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold text-primary">About me</h2>
        <div className='text-left'>
          <p className="mt-4 text-gray-600">My career journey began in administration, where I developed strong organizational and communication skills. Over time, I advanced into financial management, gaining valuable experience in leadership and teamwork. Eventually, I took a bold step to pursue entrepreneurship by opening my own restaurant. While the business taught me resilience, real-world problem-solving and much more, it ultimately didn’t go as planned, leading me to explore new opportunities.</p>
          <p className="mt-3 text-gray-600">That’s when I discovered my true passion, which is software engineering, with a special focus on front-end development. Since then, I’ve dedicated myself to mastering HTML, CSS, JavaScript, React.js, Next.js, Redux, and modern front-end technologies. Alongside this, I’m also deeply passionate about integrating AI tools and models into my development workflow — using them to enhance productivity, improve user experience, and streamline problem-solving.</p>
          <p className="mt-3 text-gray-600">I’m now seeking an opportunity as a Front-end Developer, where I can combine my technical skills, business experience, and passion for AI-driven solutions to build modern and impactful web applications.</p>
        </div>
      </div>
    </section>
  );
}
