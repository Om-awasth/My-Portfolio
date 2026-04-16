import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Flag, SquareTerminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './About.css';

const About = () => {
  const { about } = portfolioData;

  return (
    <section id="about" className="about section-padding">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SquareTerminal className="title-icon" size={32} /> {about.title}
        </motion.h2>

        <div className="about-grid">
          <motion.div
            className="about-block glass-panel"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="block-header">
              <BookOpen size={24} className="block-icon" />
              <h3>{about.educationTitle}</h3>
            </div>
            <p className="block-body">
              {about.educationBody}
            </p>
          </motion.div>

          <motion.div
            className="about-block glass-panel"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="block-header">
              <Flag size={24} className="block-icon" />
              <h3>{about.leadershipTitle}</h3>
            </div>
            {about.leadershipRoles.map((role) => (
              <div className="leadership-item" key={`${role.title}-${role.period}`}>
                <h4>{role.title}</h4>
                <p className="leadership-meta">{role.org} <span>[{role.period}]</span></p>
              </div>
            ))}
            <p className="leadership-summary">
              {about.leadershipSummary}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
