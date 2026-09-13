import type { Metadata, Viewport } from 'next';
import { DM_Sans, Manrope } from 'next/font/google';
import './globals.css';
import siteDataRaw from '@/config/site.json';
import type { SiteConfig } from '@/types/config';

const siteData = siteDataRaw as SiteConfig;
const baseUrl = siteData.siteUrl.replace(/\/+$/, '');

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#19382c',
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${siteData.brandName} — Full-Stack Engineer`,
    template: `%s | ${siteData.brandName}`,
  },
  description: `${siteData.brandName} is a Full-Stack Engineer with 2+ years of experience building scalable, high-performance web applications using React, Next.js, TypeScript, Vue, and modern backend systems. Available for remote work worldwide.`,
  keywords: [
    'Andriy Chernenko',
    'Full-Stack Engineer',
    'React Developer',
    'Next.js Engineer',
    'TypeScript',
    'Vue.js',
    'Node.js',
    'Software Engineer Ukraine',
    'Remote Full-Stack Developer',
    'Cherkasy Software Engineer',
    'Portfolio',
  ],
  authors: [{ name: siteData.brandName, url: baseUrl }],
  creator: siteData.brandName,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `${siteData.brandName} — Full-Stack Engineer`,
    description: `${siteData.brandName} — Full-Stack Engineer portfolio. Building scalable, high-performance web experiences with React, Next.js & TypeScript.`,
    url: baseUrl,
    siteName: `${siteData.brandName} Portfolio`,
    images: [
      {
        url: '/profile.jpg',
        width: 800,
        height: 800,
        alt: `${siteData.brandName} — Full-Stack Engineer`,
      },
    ],
    locale: 'en_US',
    type: 'profile',
  },
  twitter: {
    card: 'summary',
    title: `${siteData.brandName} — Full-Stack Engineer`,
    description: `Full-Stack Engineer building scalable, high-performance web experiences. React · Next.js · Vue · TypeScript.`,
    images: ['/profile.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'geo.region': 'UA-71',
    'geo.placename': 'Cherkasy',
    'geo.position': '49.4444;32.0598',
    'ICBM': '49.4444, 32.0598',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${baseUrl}/#person`,
      name: siteData.brandName,
      jobTitle: 'Full-Stack Software Engineer',
      description:
        'Full-Stack Engineer with 2+ years of production experience building scalable, high-performance web applications using React, Next.js, Vue, Node.js, and PostgreSQL.',
      url: baseUrl,
      image: `${baseUrl}/profile.jpg`,
      email: 'andrey.chernenko008@gmail.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Cherkasy',
        addressRegion: 'Cherkasy Oblast',
        addressCountry: 'UA',
      },
      homeLocation: {
        '@type': 'Place',
        name: 'Cherkasy, Ukraine',
      },
      workLocation: {
        '@type': 'Place',
        name: 'Remote (Worldwide)',
      },
      sameAs: [
        'https://linkedin.com/in/andriy-chernenko-732679280',
        'https://github.com/AndriiChernenko',
        'https://t.me/chernenko_andriy',
      ],
      knowsAbout: [
        'JavaScript',
        'TypeScript',
        'React.js',
        'Next.js',
        'Vue.js',
        'Node.js',
        'Nest.js',
        'Java',
        'GoLang',
        'PostgreSQL',
        'Prisma ORM',
        'Docker',
        'REST APIs',
        'Full-Stack Web Development',
        'Core Web Vitals',
        'SEO',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${baseUrl}/#website`,
      url: baseUrl,
      name: `${siteData.brandName} — Full-Stack Engineer`,
      description: 'Personal portfolio and engineering showcase of Andriy Chernenko.',
      publisher: {
        '@id': `${baseUrl}/#person`,
      },
      inLanguage: 'en-US',
    },
    {
      '@type': 'ProfilePage',
      '@id': `${baseUrl}/#profilepage`,
      url: baseUrl,
      name: `${siteData.brandName} — Portfolio`,
      isPartOf: {
        '@id': `${baseUrl}/#website`,
      },
      mainEntity: {
        '@id': `${baseUrl}/#person`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${manrope.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
