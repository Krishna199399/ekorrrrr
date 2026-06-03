import './globals.css';
import ClientWrapper from './ClientWrapper';

export const metadata = {
  title: 'EGC - Ekora Global Consulting | Engineering Excellence In Every Drop',
  description:
    'EGC Ekora Global Consulting bridges the gap between boutique chemical breakthroughs and high-volume, GMP-compliant manufacturing environments. Explore our cosmetic R&D formulation services, factory architecture planning, and regulatory compliance solutions.',
  keywords:
    'cosmetic consulting, formulation science, factory blueprinting, cosmetic R&D, GMP-compliant, BIS compliance, FDA compliance, CDSCO, EGC, Ekora Global Consulting',
  authors: [{ name: 'Ekora Global Consulting' }],
  robots: 'index, follow',
  openGraph: {
    title: 'EGC - Ekora Global Consulting | Engineering Excellence In Every Drop',
    description:
      'Bridging boutique chemical breakthroughs with high-volume, GMP-compliant manufacturing. Cosmetic R&D, factory blueprinting, and regulatory compliance.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Ekora Global Consulting',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EGC - Ekora Global Consulting',
    description: 'Engineering Excellence In Every Drop. Cosmetic R&D + Factory Architecture.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Syne:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/png" href="/logo_black.png" />
      </head>
      <body>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
