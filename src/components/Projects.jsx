import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, SwatchBook } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './Projects.css';

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="projects section-padding">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SwatchBook className="title-icon" size={32} /> {projects.title}
        </motion.h2>

        <div className="projects-timeline">
          {projects.items.map((project, index) => (
            <motion.article
              className="project-card glass-panel"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              <div className="project-index">{String(index + 1).padStart(2, '0')}</div>
              <div className="project-content">
                <span className="project-date">{project.date}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>

              <div className="project-footer">
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span className="project-tag" key={i}>{tag}</span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-btn"
                  aria-label={`Open ${project.title}`}
                >
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
