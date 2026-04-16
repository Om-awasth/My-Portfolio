import React from 'react';
import { motion } from 'framer-motion';
import Avatar3D from './Avatar3D';
import { portfolioData } from '../data/portfolioData';
import './Hero.css';

const Hero = () => {
  const { profile, hero } = portfolioData;

  return (
    <section id="home" className="hero">
      <div className="container hero-layout">
        <div className="hero-text-block">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="hero-kicker">{hero.kicker}</div>
            <h1 className="hero-name">{profile.name}</h1>
            <p className="hero-subtext">
              {hero.subtitle}
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn-primary"><span>{hero.primaryCta}</span></a>
              <a href="#contact" className="btn-secondary">{hero.secondaryCta}</a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="hero-3d-block"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        >
          <Avatar3D />
        </motion.div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-bar"></div>
      </div>
    </section>
  );
};

export default Hero;
