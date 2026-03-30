'use client';
import { useEffect, useRef } from 'react';

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const targets = section.querySelectorAll('[data-reveal], [data-stagger]');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('in-view'); observer.unobserve(entry.target); }
      }),
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    targets.forEach(t => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ background: 'var(--background)' }}
      aria-labelledby="about-heading"
    >
      <div className="absolute right-0 top-0 w-96 h-96 pointer-events-none" style={{ background: 'radial-gradient(circle at top right, rgba(201,168,76,0.06) 0%, transparent 70%)' }} aria-hidden="true" />

      <div className="relative py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            <div className="relative" data-reveal="left">
              <div className="relative overflow-hidden" style={{ borderRadius: 'var(--radius-2xl)', aspectRatio: '3/4' }}>
                <img
                  src="https://images.unsplash.com/photo-1688302662927-23b2487578f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjAyNjN8MHwxfHNlYXJjaHw1fHxQcm9mZXNzaW9uYWwlMjBCbGFjayUyMHdvbWVuJTIwaW58ZW58MHwwfHx8MTc3NDI4NTYzM3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Thendo Procurement leadership team"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.75) 0%, rgba(10,10,10,0.1) 50%, transparent 100%)' }} aria-hidden="true" />
                <div className="absolute inset-0 pointer-events-none" style={{ border: '1px solid var(--border-gold)', borderRadius: 'var(--radius-2xl)' }} aria-hidden="true" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="font-heading text-white leading-tight" style={{ fontSize: '1.25rem', fontWeight: 'var(--heading-weight)' as any }}>100% Black Female Owned</p>
                  <p className="text-sm mt-1" style={{ color: 'var(--primary-light)', fontFamily: 'var(--font-body)', fontWeight: 400 }}>Est. 2011 · Reg. 2013/017324/07 · Johannesburg</p>
                </div>
              </div>

              <div
                className="absolute -bottom-6 -right-4 sm:-right-8 px-6 py-5 hidden sm:block"
                style={{ borderRadius: 'var(--radius-xl)', minWidth: 190, background: 'var(--surface-dark)', border: '1px solid var(--border-gold)', boxShadow: 'var(--shadow-lg)' }}
              >
                <p className="font-heading leading-none" style={{ fontSize: '2rem', fontWeight: 'var(--heading-weight)' as any, color: 'var(--primary)' }}>Level 1</p>
                <p className="text-sm mt-1.5" style={{ color: 'var(--text-on-dark-muted)', fontFamily: 'var(--font-body)', fontWeight: 400 }}>B-BBEE Contributor</p>
                <p className="text-xs mt-1 tracking-wide" style={{ color: 'var(--text-on-dark-subtle)', fontFamily: 'var(--font-body)', fontWeight: 400 }}>135% Recognition Level</p>
              </div>
            </div>

            <div data-reveal="up">
              <div className="flex items-center gap-3 mb-5">
                <div className="gold-line" aria-hidden="true" />
                <span className="text-xs tracking-[0.2em] uppercase" style={{ color: 'var(--primary)', fontFamily: 'var(--font-body)', fontWeight: 400 }}>Our Story</span>
              </div>
              <h2
                id="about-heading"
                className="font-heading leading-tight mb-8"
                style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)', fontWeight: 'var(--heading-weight)' as any, color: 'var(--text-primary)', letterSpacing: '-0.025em' }}
              >
                Built on Expertise.{' '}
                <em style={{ color: 'var(--primary)', fontStyle: 'italic' }}>Driven by Purpose.</em>
              </h2>
              <div className="space-y-5">
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.85, fontFamily: 'var(--font-body)', fontWeight: 400 }}>
                  Thendo Procurement Services is a 100% Black and female owned South African company. TPS's experience spans over 13 years. Thendo Procurement Services key personnel have collective experience of twenty (20) years in the industry. An additional edge was brought by the director who is trained on the B-BBEE Management Development Program. The director has vast corporate work experience at executive level.
                </p>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.85, fontFamily: 'var(--font-body)', fontWeight: 400 }}>
                  Thendo Procurement Services B-BBEE status is a Level One contributor (135% recognition level) on the dti scorecard. The company focuses on Procurement spend, Supplier Development and Enterprise Development, transformation and sustainable economic development in line with South African regulatory frameworks.
                </p>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.85, fontFamily: 'var(--font-body)', fontWeight: 400 }}>
                  The business is committed to contributing to transformation objectives under the Broad-Based Black Economic Empowerment Act and the Mining Charter, while delivering quality products and services to clients across the mining value chain.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}