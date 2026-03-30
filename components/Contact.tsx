'use client';
import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';

const SERVICES = [
  'Procurement Spend Analysis',
  'Supplier Development (SD)',
  'Enterprise Development (ED)',
  'General Enquiry',
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', company: '', email: '', service: '', message: '' });

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const targets = section.querySelectorAll('[data-reveal], [data-stagger]');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('in-view'); observer.unobserve(entry.target); }
      }),
      { threshold: 0.08, rootMargin: '0px 0px -50px 0px' }
    );
    targets.forEach(t => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 md:py-36 overflow-hidden"
      style={{ background: 'var(--background)' }}
      aria-labelledby="contact-heading"
    >
      <div className="absolute top-0 right-0 w-96 h-96 pointer-events-none" style={{ background: 'radial-gradient(circle at top right, rgba(201,168,76,0.06) 0%, transparent 70%)' }} aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16" data-reveal="up">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="gold-line" aria-hidden="true" />
            <span className="text-xs tracking-[0.2em] uppercase" style={{ color: 'var(--primary)', fontFamily: 'var(--font-body)', fontWeight: 400 }}>Get in Touch</span>
            <div className="gold-line" style={{ transform: 'rotate(180deg)' }} aria-hidden="true" />
          </div>
          <h2
            id="contact-heading"
            className="font-heading leading-tight mb-4"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)', fontWeight: 'var(--heading-weight)' as any, color: 'var(--text-primary)' }}
          >
            Let&apos;s Start a{' '}
            <em style={{ color: 'var(--primary)', fontStyle: 'italic' }}>Conversation</em>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)', fontWeight: 400 }}>
            Ready to optimise your procurement spend or navigate Mining Charter compliance?
            Our experts are ready to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

          {/* Form — 3 cols */}
          <div
            className="lg:col-span-3 p-8 md:p-10"
            style={{ borderRadius: 'var(--radius-2xl)', background: 'var(--surface)', border: '1px solid var(--border-mid)', boxShadow: 'var(--shadow-md)' }}
            data-reveal="left"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.3)' }}>
                  <Send className="w-7 h-7" style={{ color: 'var(--primary)' }} />
                </div>
                <h3 className="font-heading mb-3" style={{ fontSize: '1.5rem', fontWeight: 'var(--heading-weight)' as any, color: 'var(--text-primary)' }}>Message Sent</h3>
                <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)', fontWeight: 400 }}>Thank you for reaching out. We&apos;ll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-xs tracking-wide uppercase mb-2" style={{ color: 'var(--text-subtle)', fontFamily: 'var(--font-body)', fontWeight: 400 }}>Full Name *</label>
                    <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Your full name" className="tp-input-light" aria-required="true" />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-xs tracking-wide uppercase mb-2" style={{ color: 'var(--text-subtle)', fontFamily: 'var(--font-body)', fontWeight: 400 }}>Company *</label>
                    <input id="company" name="company" type="text" required value={form.company} onChange={handleChange} placeholder="Your company name" className="tp-input-light" aria-required="true" />
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-xs tracking-wide uppercase mb-2" style={{ color: 'var(--text-subtle)', fontFamily: 'var(--font-body)', fontWeight: 400 }}>Email Address *</label>
                  <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="you@company.com" className="tp-input-light" aria-required="true" />
                </div>
                <div className="mb-4">
                  <label htmlFor="service" className="block text-xs tracking-wide uppercase mb-2" style={{ color: 'var(--text-subtle)', fontFamily: 'var(--font-body)', fontWeight: 400 }}>Service Interest</label>
                  <select id="service" name="service" value={form.service} onChange={handleChange} className="tp-input-light">
                    <option value="">Select a service...</option>
                    {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-xs tracking-wide uppercase mb-2" style={{ color: 'var(--text-subtle)', fontFamily: 'var(--font-body)', fontWeight: 400 }}>Message *</label>
                  <textarea id="message" name="message" required rows={5} value={form.message} onChange={handleChange} placeholder="Tell us about your procurement challenge..." className="tp-input-light resize-none" aria-required="true" />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 py-4 text-sm tracking-wide transition-all duration-250 hover:scale-[1.01]"
                  style={{ background: 'var(--primary)', color: 'var(--primary-foreground)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-gold-sm)', fontFamily: 'var(--font-body)', fontWeight: 500 }}
                  onMouseEnter={e => (e.currentTarget.style.background = 'var(--primary-hover)')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'var(--primary)')}
                >
                  Send Message
                  <Send className="w-4 h-4" aria-hidden="true" />
                </button>
                <p className="text-xs mt-4 text-center" style={{ color: 'var(--text-subtle)', fontFamily: 'var(--font-body)', fontWeight: 400 }}>
                  Your information is kept strictly confidential.
                </p>
              </form>
            )}
          </div>

          {/* Details panel — 2 cols */}
          <div className="lg:col-span-2" data-reveal="right">
            <div className="p-8" style={{ borderRadius: 'var(--radius-xl)', background: 'var(--surface)', border: '1px solid var(--border-mid)', boxShadow: 'var(--shadow-sm)' }}>
              <h3 className="font-heading mb-6" style={{ fontSize: '1.25rem', fontWeight: 'var(--heading-weight)' as any, color: 'var(--text-primary)' }}>Contact Details</h3>
              <div className="space-y-5">
                {[
                  { icon: Mail, label: 'Email', value: 'admin@thendops.co.za', href: 'mailto:admin@thendops.co.za' },
                  { icon: Phone, label: 'Phone', value: '012 665 2434 / 4706', href: 'tel:+27126652434' },
                  { icon: MapPin, label: 'Address', value: '12a Metropolitan Street\nHighveld, Centurion', href: 'https://maps.google.com/?q=12a+Metropolitan+Street+Highveld+Centurion' },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center mt-0.5" style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid var(--border-gold-subtle)' }}>
                      <Icon className="w-4 h-4" style={{ color: 'var(--primary)' }} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs tracking-wide uppercase mb-1" style={{ color: 'var(--text-subtle)', fontFamily: 'var(--font-body)', fontWeight: 400 }}>{label}</p>
                      <a
                        href={href}
                        target={label === 'Address' ? '_blank' : undefined}
                        rel={label === 'Address' ? 'noopener noreferrer' : undefined}
                        className="text-sm whitespace-pre-line transition-colors"
                        style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-body)', fontWeight: 400 }}
                        onMouseEnter={e => (e.currentTarget.style.color = 'var(--primary)')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-primary)')}
                      >
                        {value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ borderTop: '1px solid var(--border-mid)', marginTop: '1.5rem', paddingTop: '1.5rem' }}>
                <a
                  href="https://linkedin.com/company/thendo-procurement"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-sm transition-colors"
                  style={{ color: 'var(--primary)', fontFamily: 'var(--font-body)', fontWeight: 400 }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--primary-hover)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--primary)')}
                >
                  <Linkedin className="w-4 h-4" aria-hidden="true" />
                  Follow us on LinkedIn
                </a>
              </div>
            </div>

            {/* Business hours */}
            <div className="mt-4 p-6" style={{ borderRadius: 'var(--radius-xl)', background: 'var(--surface)', border: '1px solid var(--border-mid)' }}>
              <h4 className="font-heading mb-4" style={{ fontSize: '1rem', fontWeight: 'var(--heading-weight)' as any, color: 'var(--text-primary)' }}>Business Hours</h4>
              <div className="space-y-2">
                {[
                  { day: 'Monday – Friday', hours: '08:00 – 17:00' },
                  { day: 'Saturday', hours: 'By appointment' },
                  { day: 'Sunday', hours: 'Closed' },
                ].map(({ day, hours }) => (
                  <div key={day} className="flex items-center justify-between">
                    <span className="text-xs" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)', fontWeight: 400 }}>{day}</span>
                    <span className="text-xs" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-body)', fontWeight: 400 }}>{hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}