import React from 'react';
import { motion } from 'framer-motion';
import aboutData from '../config/about.json';

export default function About() {
  return (
    <section className="section about" id="about">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="section-heading"
      >
        <p className="eyebrow">{aboutData.eyebrow}</p>
        <h2>
          {aboutData.headingMain}
          <em>{aboutData.headingItalic}</em>
        </h2>
      </motion.div>

      <div className="about-grid">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="about-copy"
        >
          <p className="lead">{aboutData.lead}</p>
          <p>{aboutData.description}</p>

          <div className="stats">
            {aboutData.stats.map((stat, idx) => (
              <div key={idx}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="experience-card"
        >
          <div className="experience-top">
            <span>Experience</span>
            <span>{aboutData.experiencePeriod}</span>
          </div>

          {aboutData.experiences.map((exp, idx) => (
            <article key={idx}>
              <span className="timeline-dot"></span>
              <p className="role">{exp.role}</p>
              <h3>{exp.company}</h3>
              <small>{exp.period}</small>
              <p>{exp.description}</p>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
