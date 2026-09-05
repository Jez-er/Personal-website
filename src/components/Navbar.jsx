import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import siteData from '../config/site.json';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Links', href: '#links' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`site-header ${scrolled ? 'scrolled-header' : ''}`}
    >
      <a className="brand" href="#home" aria-label={`${siteData.brandName} home`}>
        <span className="brand-mark">{siteData.brandMark}</span>
        <span>{siteData.brandName}</span>
      </a>

      <nav className="nav" aria-label="Main navigation">
        {navLinks.map((link, idx) => (
          <motion.a
            key={idx}
            href={link.href}
            onMouseEnter={() => setHoveredNav(link.name)}
            onMouseLeave={() => setHoveredNav(null)}
            whileHover={{ y: -2 }}
            className="nav-link"
          >
            <span>{link.name}</span>
            {hoveredNav === link.name && (
              <motion.div
                layoutId="navHoverDot"
                className="nav-dot"
                transition={{ type: 'spring', stiffness: 380, damping: 28 }}
              />
            )}
          </motion.a>
        ))}
      </nav>

      <div className="header-actions">
        <a className="header-cta" href="#links">
          <span>Links</span>
          <ArrowUpRight className="w-4 h-4 ml-1 inline-block" strokeWidth={2} />
        </a>
        <a className="header-cta" href="#contact">
          <span>Contacts</span>
          <ArrowUpRight className="w-4 h-4 ml-1 inline-block" strokeWidth={2} />
        </a>
      </div>

      <button
        className="menu-btn"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Open menu"
      >
        {mobileMenuOpen ? <X className="w-5 h-5" strokeWidth={2} /> : <Menu className="w-5 h-5" strokeWidth={2} />}
      </button>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="mobile-nav"
          >
            {navLinks.map((link, idx) => (
              <a key={idx} href={link.href} onClick={() => setMobileMenuOpen(false)}>
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
