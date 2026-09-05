import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import projectsData from '../config/projects.json';

export default function Projects() {
  const handlePlaceholder = (e) => {
    e.preventDefault();
    alert('Placeholder link — replace this with your real profile or project URL.');
  };

  return (
    <section className="section projects" id="projects">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="section-heading projects-heading"
      >
        <div>
          <p className="eyebrow">{projectsData.eyebrow}</p>
          <h2>
            {projectsData.headingMain}
            <em>{projectsData.headingItalic}</em>
          </h2>
        </div>
        <span className="placeholder-note">{projectsData.placeholderNote}</span>
      </motion.div>

      <div className="project-grid">
        {projectsData.projects.map((proj, idx) => (
          <motion.article
            key={proj.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className={`project-card ${proj.isLarge ? 'large' : ''}`}
          >
            <div className={`project-art ${proj.artClass}`}>
              <span>{proj.number}</span>
              <strong>{proj.status}</strong>
            </div>
            <div className="project-info">
              <div>
                <p className="tag">{proj.tag}</p>
                <h3>{proj.title}</h3>
              </div>
              <a href={proj.linkUrl} onClick={handlePlaceholder} aria-label="Project placeholder">
                <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
              </a>
              <p>{proj.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
