import { MetadataRoute } from 'next';
import siteDataRaw from '@/config/site.json';
import type { SiteConfig } from '@/types/config';

const siteData = siteDataRaw as SiteConfig;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteData.siteUrl.replace(/\/+$/, '');

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
  ];
}
