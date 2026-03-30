'use client';
import { useEffect, useRef } from 'react';

const TEAM = [
  {
    name: 'J Mogale',
    role: 'Director',
    qualifications: [
      'MBA — University of Northwest',
      'PG Diploma: Public Health Management (UCT)',
      'B-BBEE Management Development Certificate (Unisa)',
    ],
  },
  {
    name: 'Tebogo Mogale',
    role: 'Finance & Strategy',
    qualifications: [
      'BCom Finance (UJ)',
      'PG Diploma in Management (Wits)',
      'BA Motion Picture (AFDA)',
    ],
  },
  {
    name: 'Sammy Rabolele',
    role: 'Investment & Design',
    qualifications: [
      'Investment Management (UP)',
      'PG Diploma: Graphic Design (Unisa)',
    ],
  },
  {
    name: 'Adelaide Pitsi',
    role: 'Public Management',
    qualifications: [
      'National Diploma: Public Management (TUT)',
    ],
  },
  {
    name: 'Mmabatho Taukobong',
    role: 'Procurement Specialist',
    qualifications: [
      'Preferential Procurement Course (BEESA)',
    ],
  },
];

export default function Team() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const targets = section.querySelectorAll('[data-reveal], [data-stagger]');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.08, rootMargin: '0px 0px -60px 0px' }
    );
    targets.forEach(t => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="team"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: 'var(--surface)' }}
      aria-labelledby="team-heading"
    >
      <div
        className="absolute left-0 top-0 w-96 h-96 pointer-events-none"
        style={{ background: 'radial-gradient(circle at top left, rgba(201,168,76,0.05) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-16" data-reveal="up">
          <div className="flex items-center gap-3 mb-5">
            <div className="gold-line" aria-hidden="true" />
            <span
              className="text-xs tracking-[0.2em] uppercase"
              style={{ color: 'var(--primary)', fontFamily: 'var(--font-body)', fontWeight: 400 }}
            >
              The Team
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2
              id="team-heading"
              className="font-heading leading-tight"
              style={{
                fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
                fontWeight: 'var(--heading-weight)',
                color: 'var(--text-primary)',
                letterSpacing: '-0.025em',
              }}
            >
              Qualifications &{' '}
              <em style={{ color: 'var(--primary)', fontStyle: 'italic' }}>Expertise</em>
            </h2>
            <p
              className="max-w-md text-base"
              style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)', fontWeight: 400, lineHeight: 1.75 }}
            >
              A multidisciplinary team with a collective 20+ years of industry expertise.
            </p>
          </div>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5"
          data-stagger
        >
          {TEAM.map((member, i) => (
            <div
              key={i}
              className="flex flex-col p-7 transition-all duration-200"
              style={{
                borderRadius: 'var(--radius-xl)',
                background: 'var(--background)',
                border: '1px solid var(--border-mid)',
                boxShadow: 'var(--shadow-sm)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--border-gold)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border-mid)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-5 text-sm shrink-0"
                style={{
                  background: 'linear-gradient(135deg, var(--primary), var(--primary-hover))',
                  color: 'var(--primary-foreground)',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 500,
                  letterSpacing: '0.05em',
                }}
              >
                {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
              </div>

              <p
                className="font-heading leading-tight mb-1"
                style={{
                  fontSize: '1.0625rem',
                  fontWeight: 'var(--heading-weight)',
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.02em',
                }}
              >
                {member.name}
              </p>
              <p
                className="text-xs tracking-[0.15em] uppercase mb-5"
                style={{ color: 'var(--primary)', fontFamily: 'var(--font-body)', fontWeight: 400 }}
              >
                {member.role}
              </p>

              <div className="gold-line mb-5" aria-hidden="true" />

              <div className="space-y-2 flex-1">
                {member.qualifications.map((q, qi) => (
                  <div key={qi} className="flex items-start gap-2">
                    <div
                      className="flex-shrink-0 w-1 h-1 rounded-full mt-[7px]"
                      style={{ background: 'var(--primary)' }}
                      aria-hidden="true"
                    />
                    <p
                      className="text-xs"
                      style={{
                        color: 'var(--text-muted)',
                        lineHeight: 1.6,
                        fontFamily: 'var(--font-body)',
                        fontWeight: 400,
                      }}
                    >
                      {q}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}