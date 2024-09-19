// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

// Define your navigation items with titles, paths, and icons


// Example icon components
const HomeIcon = () => (
  <span>
    &lt;
  </span>
);

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
    { name: 'Home', path: '/', icon: <HomeIcon /> },
    { name: 'Skills', path: '/skills', icon: <SkillsIcon /> },
    { name: 'Projects', path: '/projects', icon: <ProjectsIcon /> },
    { name: 'About', path: '/about', icon: <AboutIcon /> },
    { name: 'Contact', path: '/contact', icon: <ContactIcon /> },
  ];

const Navbar: React.FC = () => {
  return (
    <div className='flex justify-center items-center'>
    <nav className="top-2 backdrop-blur-[0.5rem] p-4 rounded-lg

">
      <div className="p-5  container rounded-full mx-auto flex justify-between border border-opacity-100 items-center">
        
        <div className="flex space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className=" transition-all  ease-in-out flex items-center text-black text-base font-bold opacity-40 hover:opacity-100"
            >
              <span>
    &lt;
  </span>
              {item.name}
              <span>
    /&gt;
  </span>
            </Link>
          ))}
        </div>
      </div>
    </nav>

    <div>

    </div>


    </div>
  );
};

export default Navbar;
