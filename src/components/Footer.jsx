import React from 'react';
import { ArrowUp } from 'lucide-react';
import siteData from '../config/site.json';

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div>
        <span className="brand-mark">{siteData.brandMark}</span>
        <span>{siteData.brandName}</span>
      </div>
      <p>{siteData.copyright}</p>
      <a href="#home" onClick={scrollToTop} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
        <span>Back to top</span>
        <ArrowUp className="w-4 h-4 text-[#f4efe5]" strokeWidth={2} />
      </a>
    </footer>
  );
}
