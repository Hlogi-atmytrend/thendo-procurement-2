'use client';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Thendo Procurement — Mining & Industrial Procurement Specialists</title>
        <meta name="description" content="South Africa's trusted partner in procurement spend optimisation, Mining Charter compliance, and supplier enterprise development. 100% Black Female Owned. 13+ years experience." />
        <script src="https://cdn.tailwindcss.com"></script>
        {/* Satoshi Light (heading) + General Sans (body) — Fontshare premium sans-serif pairing */}
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400&f[]=general-sans@400,500,600&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: `
          tailwind.config = {
            theme: {
              extend: {
                fontFamily: {
                  heading: ['var(--font-heading)'],
                  body: ['var(--font-body)'],
                },
              },
            },
          };
        `}} />
      </head>
      <body className="font-body" style={{ background: 'var(--background)', color: 'var(--text-primary)' }}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:rounded-md focus:text-sm"
          style={{ background: 'var(--primary)', color: 'var(--primary-foreground)' }}
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}