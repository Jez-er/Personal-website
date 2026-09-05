import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Code2, Server, Database, Cpu, Sparkles } from 'lucide-react';

const iconMap = {
  Code2,
  Server,
  Database,
  Cpu,
};

export default function SkillModal({ category, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!category) return null;

  const CategoryIcon = iconMap[category.iconName] || Code2;

  return (
    <AnimatePresence>
      <div className="skill-modal-backdrop" onClick={onClose}>
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="skill-modal-card"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="skill-modal-header">
            <div className="skill-modal-brand">
              <span className="skill-no">{category.no}</span>
              <CategoryIcon className="w-5 h-5 text-[#285243]" strokeWidth={2} />
              <h2>{category.title}</h2>
            </div>
            <button className="skill-modal-close" onClick={onClose} aria-label="Close modal">
              <X className="w-5 h-5" strokeWidth={2} />
            </button>
          </div>

          <p className="skill-modal-desc">{category.description}</p>

          {/* Tool Groups */}
          <div className="skill-modal-body">
            {category.toolGroups.map((group, idx) => (
              <div key={idx} className="skill-tool-group">
                <div className="skill-group-header">
                  <Sparkles className="w-3.5 h-3.5 text-[#285243]" strokeWidth={2} />
                  <h4>{group.groupName}</h4>
                </div>
                <div className="skill-pills">
                  {group.tools.map((tool, tIdx) => (
                    <motion.span
                      key={tIdx}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="skill-pill"
                    >
                      <span className="skill-pill-dot" />
                      {tool}
                    </motion.span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
