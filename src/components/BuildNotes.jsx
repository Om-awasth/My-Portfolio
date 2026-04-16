import React from 'react';
import { motion } from 'framer-motion';
import { NotebookText, Rocket, Shield, Sparkles } from 'lucide-react';
import './BuildNotes.css';

const notes = [
  {
    icon: <Rocket size={20} />,
    title: 'Execution First',
    description: 'I prefer shipping quickly, validating in production-like conditions, then iterating with measured improvements.'
  },
  {
    icon: <Shield size={20} />,
    title: 'Reliability by Design',
    description: 'Clear structure, strong defaults, and predictable behavior are treated as baseline quality, not extras.'
  },
  {
    icon: <Sparkles size={20} />,
    title: 'Crafted Experience',
    description: 'Interfaces should feel deliberate: fast interactions, readable hierarchy, and clear visual rhythm.'
  }
];

const BuildNotes = () => {
  return (
    <section id="notes" className="build-notes section-padding">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <NotebookText className="title-icon" size={32} /> Build Notes
        </motion.h2>

        <div className="notes-grid">
          {notes.map((note, index) => (
            <motion.article
              key={note.title}
              className="note-card glass-panel"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
            >
              <div className="note-head">
                <span className="note-icon">{note.icon}</span>
                <h3>{note.title}</h3>
              </div>
              <p>{note.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuildNotes;
