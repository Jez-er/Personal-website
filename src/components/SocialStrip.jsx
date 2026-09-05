import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Mail, Send, ArrowUpRight } from 'lucide-react';
import connectData from '../config/connect.json';

const iconMap = {
  Linkedin,
  Github,
  Send,
  Mail,
};

export default function SocialStrip() {
  return (
    <section id="links" className="social-strip-enhanced border-y border-[#34251d]/20">
      <div className="social-strip-header">
        <span className="eyebrow-light">{connectData.eyebrow}</span>
        <h3>{connectData.heading}</h3>
      </div>

      <div className="social-grid">
        {connectData.links.map((item, idx) => {
          const Icon = iconMap[item.iconName] || ArrowUpRight;
          return (
            <motion.a
              key={idx}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="social-card"
            >
              <div className="social-card-top">
                <div className="social-icon-wrapper">
                  <Icon className="w-5 h-5 text-[#f4efe5]" strokeWidth={2} />
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#94ada1] transition-colors" strokeWidth={2} />
              </div>

              <div className="social-card-bottom">
                <h4>{item.name}</h4>
                <p>{item.subtitle}</p>
                <span className="handle">{item.handle}</span>
              </div>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}
