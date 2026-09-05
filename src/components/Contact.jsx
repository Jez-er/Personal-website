import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import contactData from '../config/contact.json';

export default function Contact() {
  return (
    <section className="contact section" id="contact">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="contact-inner"
      >
        <p className="eyebrow">{contactData.eyebrow}</p>
        <h2>
          {contactData.headingMain}
          <em>{contactData.headingItalic}</em>
          {contactData.headingEnd}
        </h2>
        <p>{contactData.description}</p>
        <a className="btn btn-primary" href={`mailto:${contactData.email}`}>
          <span>{contactData.buttonText}</span>
          <ArrowUpRight className="w-4 h-4 ml-1 inline-block" strokeWidth={2} />
        </a>
      </motion.div>
    </section>
  );
}
