import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { profile } = portfolioData;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#home" className="nav-brand">
          <span className="brand-d">{profile.initial}</span>
          <span className="brand-dot">.</span>
        </a>
        <div className="nav-menu">
          <a href="#projects" className="nav-item">Work</a>
          <a href="#about" className="nav-item">Story</a>
          <a href="#skills" className="nav-item">Skills</a>
          <a href="#notes" className="nav-item">Notes</a>
          <a href="#contact" className="nav-item">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
