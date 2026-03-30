'use client';
import { useEffect, useRef, useState } from 'react';

const STATS = [
  { value: 13, suffix: '+', label: 'Years of Experience' },
  { value: 20, suffix: '+', label: 'Years Collective Expertise' },
  { value: 100, suffix: '%', label: 'Black Female Owned' },
  { value: 3, suffix: '', label: 'Core Service Pillars' },
];

function Counter({ value, suffix, started }: { value: number; suffix: string; started: boolean }) {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    if (!started) return;
    const duration = 1800;
    const start = performance.now();
    const update = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  }, [started, value]);
  return (
    <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 'var(--heading-weight)' as any, color: 'var(--primary)', fontSize: 'clamp(2.25rem, 4vw, 3rem)', lineHeight: 1, letterSpacing: '-0.025em' }}>
      {display}{suffix}
    </span>
  );
}

export default function CredibilityBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      aria-label="Company credentials"
      style={{ background: 'var(--surface)' }}
    >
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, var(--primary), transparent)' }} aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, var(--primary), transparent)' }} aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center px-4"
              style={{ borderRight: i < 3 ? '1px solid var(--border-gold-subtle)' : 'none' }}
            >
              <Counter value={stat.value} suffix={stat.suffix} started={started} />
              <p
                className="mt-2 text-xs tracking-[0.15em] uppercase"
                style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)', fontWeight: 400 }}
              >
                {stat.label}
              </p>
              <div className="gold-line mt-4 mx-auto" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}