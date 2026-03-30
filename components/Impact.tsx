'use client';
import { useEffect, useRef } from 'react';

const WHY_US = [
  'Deep understanding of B-BBEE Codes of Good Practice',
  'Deep understanding of black business in South Africa (SMEs and QSEs)',
  'Data driven procurement intelligence',
  'Strong understanding of mining supply chains',
  'Support for Enterprise Development and Supplier Development',
  'Visual content and generative AI',
];

export default function Impact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const targets = section.querySelectorAll('[data-reveal], [data-stagger]');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('in-view'); observer.unobserve(entry.target); }
      }),
      { threshold: 0.08, rootMargin: '0px 0px -60px 0px' }
    );
    targets.forEach(t => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="impact"
      ref={sectionRef}
      className="relative py-24 md:py-36 overflow-hidden"
      aria-labelledby="impact-heading"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1431540015161-0bf868a2d407?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjAyNjN8MHwxfHNlYXJjaHwyMXx8Y29uc3VsdGluZ3xlbnwwfDB8fHwxNzc0NTQ4NzU2fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(10,10,10,0.97) 0%, rgba(26,26,26,0.93) 55%, rgba(10,10,10,0.97) 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(201,168,76,0.05) 0%, transparent 70%)' }} />
      </div>

      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, var(--primary), transparent)', opacity: 0.5 }} aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, var(--primary), transparent)', opacity: 0.5 }} aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          <div data-reveal="left">
            <div className="flex items-center gap-3 mb-5">
              <div className="gold-line" aria-hidden="true" />
              <span className="text-xs tracking-[0.2em] uppercase" style={{ color: 'var(--primary)', fontFamily: 'var(--font-body)', fontWeight: 400 }}>Why Thendo</span>
            </div>
            <h2
              id="impact-heading"
              className="font-heading leading-tight mb-8"
              style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)', fontWeight: 300, color: '#ffffff', letterSpacing: '-0.025em' }}
            >
              The Right Partner for{' '}
              <em style={{ color: 'var(--primary)', fontStyle: 'italic' }}>Transformation</em>
            </h2>

            <div
              className="relative p-8 mb-5 overflow-hidden"
              style={{ borderRadius: 'var(--radius-xl)', background: 'rgba(201,168,76,0.07)', border: '1px solid rgba(201,168,76,0.3)' }}
            >
              <div className="absolute -top-2 -right-2 font-heading pointer-events-none select-none" style={{ fontSize: '7rem', color: 'rgba(201,168,76,0.07)', lineHeight: 1, fontWeight: 300 }} aria-hidden="true">V</div>
              <div className="relative z-10">
                <p className="text-xs tracking-[0.18em] uppercase mb-3" style={{ color: 'var(--primary)', fontFamily: 'var(--font-body)', fontWeight: 400 }}>Our Vision</p>
                <p className="font-heading leading-relaxed" style={{ fontSize: 'clamp(1rem, 1.8vw, 1.25rem)', fontWeight: 300, color: '#ffffff', lineHeight: 1.7, letterSpacing: '-0.015em' }}>
                  To be the leader and trusted partner in enabling sustainable transformation and regulatory compliance within South Africa's mining and industrial sectors.
                </p>
              </div>
            </div>

            <div
              className="relative p-8 overflow-hidden"
              style={{ borderRadius: 'var(--radius-xl)', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.09)' }}
            >
              <div className="absolute -top-2 -right-2 font-heading pointer-events-none select-none" style={{ fontSize: '7rem', color: 'rgba(255,255,255,0.04)', lineHeight: 1, fontWeight: 300 }} aria-hidden="true">M</div>
              <div className="relative z-10">
                <p className="text-xs tracking-[0.18em] uppercase mb-3" style={{ color: 'var(--primary)', fontFamily: 'var(--font-body)', fontWeight: 400 }}>Our Mission</p>
                <p className="font-heading leading-relaxed" style={{ fontSize: 'clamp(1rem, 1.8vw, 1.25rem)', fontWeight: 300, color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, letterSpacing: '-0.015em' }}>
                  To provide expert procurement spend optimisation and compliance services that assist organisations in meeting Mining Charter and DTIC regulatory requirements.
                </p>
              </div>
            </div>
          </div>

          <div data-reveal="right">
            <div className="flex items-center gap-3 mb-8">
              <div className="gold-line" aria-hidden="true" />
              <span className="text-xs tracking-[0.2em] uppercase" style={{ color: 'var(--primary)', fontFamily: 'var(--font-body)', fontWeight: 400 }}>Why Choose Us</span>
            </div>
            <ul className="space-y-0" data-stagger>
              {WHY_US.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-5 py-5 transition-all duration-200"
                  style={{ borderBottom: i < WHY_US.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}
                  onMouseEnter={e => (e.currentTarget.style.paddingLeft = '8px')}
                  onMouseLeave={e => (e.currentTarget.style.paddingLeft = '0px')}
                >
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs mt-0.5"
                    style={{ background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.35)', color: 'var(--primary)', fontFamily: 'var(--font-body)', fontWeight: 500 }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <p className="text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)', fontFamily: 'var(--font-body)', fontWeight: 400 }}>
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}