import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Database, Cpu, ArrowUpRight } from 'lucide-react';
import skillsData from '../config/skills.json';
import SkillModal from './SkillModal';

const iconMap = {
  Code2,
  Server,
  Database,
  Cpu,
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <section className="section skills" id="skills">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="section-heading"
      >
        <p className="eyebrow">{skillsData.eyebrow}</p>
        <h2>
          {skillsData.headingMain}
          <em>{skillsData.headingItalic}</em>
        </h2>
      </motion.div>

      <div className="skills-grid">
        {skillsData.categories.map((item, idx) => {
          const CategoryIcon = iconMap[item.iconName] || Code2;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedCategory(item)}
              className="skill-card skill-card-interactive"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedCategory(item);
                }
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
                  <span className="skill-no">{item.no}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CategoryIcon className="w-5 h-5 text-[#92aa9e]" strokeWidth={2} />
                    <ArrowUpRight className="w-4 h-4 text-[#a8c0b5] skill-card-arrow" strokeWidth={2} />
                  </div>
                </div>

                <h3>{item.title}</h3>
                <p>{item.summary}</p>
              </div>

              <div>
                <div className="skill-line"></div>
                <span className="skill-click-hint">Click for full breakdown ↗</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Skill Modal */}
      <SkillModal
        category={selectedCategory}
        onClose={() => setSelectedCategory(null)}
      />
    </section>
  );
}
