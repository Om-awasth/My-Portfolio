import React from 'react';
import { motion } from 'framer-motion';
import { Code2, MonitorPlay, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './Skills.css';

const Skills = () => {
  const { skills } = portfolioData;
  const iconMap = {
    code2: <Code2 size={24} />,
    monitor: <MonitorPlay size={24} />,
    shield: <ShieldCheck size={24} />
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="skills" className="skills section-padding">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {skills.title}
        </motion.h2>

        <motion.div
          className="skills-layout"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.categories.map((category, index) => (
            <motion.div className="skill-group glass-panel" key={index} variants={itemVariants}>
              <div className="group-header">
                <div className="group-icon">{iconMap[category.icon]}</div>
                <h3 className="group-title">{category.title}</h3>
              </div>
              <div className="skill-list">
                {category.items.map((skill, i) => (
                  <span className="skill-item" key={i}>{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
