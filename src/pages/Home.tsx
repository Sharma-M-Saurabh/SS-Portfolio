// @ts-nocheck
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { scroller, Element } from 'react-scroll';

// Example icon components
const HomeIcon = () => <span>&lt;</span>;
const SkillsIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
  </svg>
);
const ProjectsIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h10M7 16h10" />
  </svg>
);
const AboutIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v10M12 7v10M16 7v10" />
  </svg>
);
const ContactIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8l8 5 8-5v12H4V8z" />
  </svg>
);

const navItems = [
  { name: 'Home', path: 'home', icon: <HomeIcon /> },
  { name: 'Skills', path: 'skills', icon: <SkillsIcon /> },
  { name: 'Projects', path: 'projects', icon: <ProjectsIcon /> },
  { name: 'About', path: 'about', icon: <AboutIcon /> },
  { name: 'Contact', path: 'contact', icon: <ContactIcon /> },
];

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (section: string) => {
    navigate(`#${section}`);
    scroller.scrollTo(section, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart', // Smooth scrolling effect
      offset: -50, // Adjust according to the height of your navbar
    });
  };

  useEffect(() => {
    const hash = location.hash.replace('#', ''); // Remove '#' from the hash
    if (hash) {
      scroller.scrollTo(hash, {
        duration: 800,
        smooth: 'easeInOutQuart', // Smooth scrolling effect
        offset: -50, // Adjust according to your navbar height
      });
    }
  }, [location]);

  return (
    <div className=''>
      <div className='flex justify-center items-center bg-white fixed w-dvw'>
        <nav className="top-2 backdrop-blur-[0.5rem] p-4 rounded-lg">
          <div className="p-5 container rounded-full mx-auto flex justify-between border border-opacity-100 items-center">
            <div className="flex space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  className="text-black text-base font-bold opacity-40 hover:opacity-100 transition-all ease-in-out flex items-center"
                  onClick={() => handleNavClick(item.path)}
                >
                  <span>&lt;</span>
                  {item.name}
                  <span>/&gt;</span>
                </button>
              ))}
            </div>
          </div>
        </nav>
      </div>

      <div>
        <Element name="home">
          <h1 className="flex justify-center items-center h-dvh text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white bg-red-800 p-3">
            Home
          </h1>
        </Element>
        <Element name="skills">
          <h1 className="flex justify-center items-center h-dvh text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white bg-amber-300">
            Skills
          </h1>
        </Element>
        <Element name="projects">
          <h1 className="flex justify-center items-center h-dvh text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white bg-purple-800">
            Projects
          </h1>
        </Element>
        <Element name="about">
          <h1 className="flex justify-center items-center h-dvh text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white bg-lime-500">
            About
          </h1>
        </Element>
        <Element name="contact">
          <h1 className="flex justify-center items-center h-dvh text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white bg-sky-400">
            Contact
          </h1>
        </Element>
        
      </div>
    </div>
  );
};

export default Home;
