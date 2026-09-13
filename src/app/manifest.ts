import { MetadataRoute } from 'next';
import siteDataRaw from '@/config/site.json';
import type { SiteConfig } from '@/types/config';

const siteData = siteDataRaw as SiteConfig;

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteData.brandName} — Full-Stack Engineer`,
    short_name: siteData.brandName,
    description: `${siteData.brandName} — Full-Stack Engineer portfolio. Building scalable, high-performance web experiences.`,
    start_url: '/',
    display: 'standalone',
    background_color: '#fbf8f1',
    theme_color: '#19382c',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
