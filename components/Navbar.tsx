'use client';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#impact' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleAnchor = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const linkColor = scrolled ? '#374151' : 'rgba(255,255,255,0.75)';

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? '#ffffff' : 'transparent',
        boxShadow: scrolled ? '0 1px 0 rgba(167,129,71,0.15), 0 4px 20px rgba(0,0,0,0.08)' : 'none',
      }}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center shrink-0 group"
            aria-label="Thendo Procurement — return to top"
          >
            <img
              src="https://assets.handoutt.co.za/uploads/338ce213-3948-4245-b9d6-983774e5b4c0/91133ed1-a22a-4be8-9c16-5b9db527af73-thendo-logo.png"
              alt="Thendo Procurement"
              className="w-auto object-contain transition-opacity duration-300 group-hover:opacity-80"
              style={{ height: '3.25rem', maxWidth: 260 }}
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={(e) => handleAnchor(e, href)}
                className="px-4 py-2 text-sm tracking-wide transition-colors duration-200"
                style={{ color: linkColor, fontFamily: 'var(--font-body)', fontWeight: 400 }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--primary)')}
                onMouseLeave={e => (e.currentTarget.style.color = linkColor)}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              onClick={(e) => handleAnchor(e, '#contact')}
              className="px-5 py-2.5 text-sm tracking-wide transition-all duration-250 gold-pulse"
              style={{
                background: 'var(--primary)',
                color: '#231f20',
                borderRadius: 'var(--radius-full)',
                fontFamily: 'var(--font-body)',
                fontWeight: 500,
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--primary-hover)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--primary)')}
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-md transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            style={{ color: scrolled ? '#374151' : '#ffffff' }}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{
          background: '#ffffff',
          borderTop: '1px solid #f3f4f6',
          boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
        }}
      >
        <div className="px-4 py-4 flex flex-col gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={(e) => handleAnchor(e, href)}
              className="px-4 py-3 text-sm tracking-wide rounded-md transition-colors"
              style={{ color: '#374151', fontFamily: 'var(--font-body)', fontWeight: 400 }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--primary)')}
              onMouseLeave={e => (e.currentTarget.style.color = '#374151')}
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleAnchor(e, '#contact')}
            className="mt-2 px-5 py-3 text-sm text-center"
            style={{
              background: 'var(--primary)',
              color: '#231f20',
              borderRadius: 'var(--radius-full)',
              fontFamily: 'var(--font-body)',
              fontWeight: 500,
            }}
          >
            Get in Touch
          </a>
        </div>
      </div>
    </nav>
  );
}