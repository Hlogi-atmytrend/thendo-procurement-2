'use client';
import { Linkedin, Mail, Phone } from 'lucide-react';

const LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#impact' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const handleAnchor = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden" style={{ background: '#231f20' }} role="contentinfo">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, var(--primary), transparent)', opacity: 0.7 }} aria-hidden="true" />

      {/* Pre-footer CTA band */}
      <div className="relative overflow-hidden" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="absolute inset-0" aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&q=80&fit=crop"
            alt="Two stylish young men in sunglasses outdoors."
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0" style={{ background: 'rgba(26,23,24,0.7)' }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <h2
            className="font-heading mb-4"
            style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
              fontWeight: 'var(--heading-weight)',
              color: '#ffffff',
              letterSpacing: '-0.025em',
            }}
          >
            Ready to Transform Your{' '}
            <em style={{ color: 'var(--primary)', fontStyle: 'italic' }}>Procurement?</em>
          </h2>
          <p
            className="mb-8 max-w-xl mx-auto"
            style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-body)', fontWeight: 400 }}
          >
            Join the organisations across South Africa&apos;s mining and industrial sectors
            that trust Thendo Procurement for results that matter.
          </p>
          <a
            href="#contact"
            onClick={(e) => handleAnchor(e, '#contact')}
            className="inline-flex items-center gap-2.5 px-8 py-4 text-sm tracking-wide transition-all duration-300 hover:scale-105"
            style={{
              background: 'var(--primary)',
              color: '#231f20',
              borderRadius: 'var(--radius-md)',
              boxShadow: '0 0 40px rgba(167,129,71,0.3)',
              fontFamily: 'var(--font-body)',
              fontWeight: 500,
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'var(--primary-hover)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'var(--primary)')}
          >
            Start the Conversation
          </a>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            aria-label="Thendo Procurement — return to top"
          >
            <img
              src="https://assets.handoutt.co.za/uploads/338ce213-3948-4245-b9d6-983774e5b4c0/308870b3-8ffc-4fcf-aa7b-e9cec9f7c934-thendo-logo.png"
              alt="Thendo Procurement"
              className="h-9 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-200"
              style={{ maxWidth: 200 }}
            />
          </a>

          {/* Nav links */}
          <nav className="flex flex-wrap items-center justify-center gap-6" aria-label="Footer navigation">
            {LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={(e) => handleAnchor(e, href)}
                className="text-sm transition-colors"
                style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'var(--font-body)', fontWeight: 400 }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--primary)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Social + contact icons */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:admin@thendops.co.za"
              aria-label="Email Thendo Procurement"
              className="w-8 h-8 rounded-full flex items-center justify-center transition-all"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(167,129,71,0.15)'; e.currentTarget.style.borderColor = 'rgba(167,129,71,0.4)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
            >
              <Mail className="w-3.5 h-3.5" style={{ color: 'rgba(255,255,255,0.5)' }} />
            </a>
            <a
              href="tel:+27126652434"
              aria-label="Call Thendo Procurement"
              className="w-8 h-8 rounded-full flex items-center justify-center transition-all"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(167,129,71,0.15)'; e.currentTarget.style.borderColor = 'rgba(167,129,71,0.4)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
            >
              <Phone className="w-3.5 h-3.5" style={{ color: 'rgba(255,255,255,0.5)' }} />
            </a>
            <a
              href="https://linkedin.com/company/thendo-procurement"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Thendo Procurement on LinkedIn"
              className="w-8 h-8 rounded-full flex items-center justify-center transition-all"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(167,129,71,0.15)'; e.currentTarget.style.borderColor = 'rgba(167,129,71,0.4)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
            >
              <Linkedin className="w-3.5 h-3.5" style={{ color: 'rgba(255,255,255,0.5)' }} />
            </a>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: '2rem', paddingTop: '2rem' }}>
          <p className="text-center text-xs" style={{ color: 'rgba(255,255,255,0.25)', fontFamily: 'var(--font-body)', fontWeight: 400 }}>
            © {new Date().getFullYear()} Thendo Procurement Services (Pty) Ltd · Reg. 2013/017324/07 · 12a Metropolitan Street, Highveld, Centurion
          </p>
        </div>
      </div>
    </footer>
  );
}