import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './Contact.css';

const Contact = () => {
  const { contact, profile } = portfolioData;

  return (
    <section id="contact" className="contact section-padding">
      <div className="container">
        <motion.div
          className="contact-wrapper glass-panel"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="contact-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {contact.headingLine1} <br />{contact.headingLine2}
          </motion.h2>

          <motion.div
            className="contact-actions"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="contact-kicker">{contact.kicker}</span>
            <a href={`mailto:${profile.email}`} className="email-link">
              {profile.email} <ArrowUpRight className="arrow" size={28} />
            </a>
            {profile.phone && <p className="contact-phone">{profile.phone}</p>}
          </motion.div>

          <motion.div
            className="social-links"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="social-item">
              <Github size={20} /> GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="social-item">
              <Linkedin size={20} /> LinkedIn
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
