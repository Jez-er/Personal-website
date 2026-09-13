import { MetadataRoute } from 'next';
import siteDataRaw from '@/config/site.json';
import type { SiteConfig } from '@/types/config';

const siteData = siteDataRaw as SiteConfig;

export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteData.siteUrl.replace(/\/+$/, '');

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
