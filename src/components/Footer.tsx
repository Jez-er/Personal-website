'use client';

import React from 'react';
import { ArrowUp } from 'lucide-react';
import siteDataRaw from '@/config/site.json';
import type { SiteConfig } from '@/types/config';

const siteData = siteDataRaw as SiteConfig;

export default function Footer() {
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
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
