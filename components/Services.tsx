'use client';
import { useEffect, useRef, useState } from 'react';
import { TrendingUp, Users, Building2, ArrowUpRight, CheckCircle, ChevronDown } from 'lucide-react';

const SERVICES = [
  {
    icon: TrendingUp,
    tag: '01',
    title: 'Procurement Spend Analysis',
    description: 'Comprehensive spend analysis aligned to Mining Charter categories — delivering full visibility of your procurement position across goods, services, and compliance obligations.',
    details: [
      'Procurement spend of goods and services according to the mining charter categories',
      'Preferential Procurement spend compliance with the DTIC',
      'Supplier Development spend',
      'Enterprise Development spend',
      'Research and analysis spend',
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&fit=crop',
    accent: 'Spend Visibility & Compliance',
  },
  {
    icon: Users,
    tag: '02',
    title: 'Supplier Development',
    shortTitle: 'SD',
    description: 'Supplier development targets black-owned companies already in the supply chain of specific companies, requiring procurement spend and other non-financial support like skills training. Developing supplier capabilities strengthens supply chain resilience and improves the reliability of procurement operations.',
    details: [
      'Capability Assessment',
      'Selection and Development of transformation plans',
      'Engage collaboratively',
      'Execute and monitor',
      'Review and scale',
    ],
    image: 'https://images.unsplash.com/photo-1739298061751-d233df973afc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjAyNjN8MHwxfHNlYXJjaHwxMHx8bGVhZGVyc2hpcCUyMHRlYW18ZW58MHwwfHx8MTc3NDU5NjEwN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    accent: 'Black-Owned Supply Chain Growth',
  },
  {
    icon: Building2,
    tag: '03',
    title: 'Enterprise Development',
    shortTitle: 'ED',
    description: 'Enterprise development is a key pillar of South Africa\'s B-BBEE framework, aimed at supporting black owned small businesses to grow and integrate into supply chains. It focuses on providing measurable support to EMEs or QSEs that are majority black-owned but not yet suppliers to the measured entity.',
    details: [
      'Identify beneficiaries via supplier registration networks focusing on youth, women or designated group owned enterprises with tax compliance and trading history',
      'Offer blended support which includes financial (e.g. concessional loans) plus non-financial (e.g. financial coaching, and compliance assistance)',
      'Track milestones for graduation to supplier status, with detailed records for verifications',
    ],
    image: 'https://images.unsplash.com/photo-1624555130296-e551faf8969b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjAyNjN8MHwxfHNlYXJjaHwxMXx8bGVhZGVyc2hpcCUyMHRlYW18ZW58MHwwfHx8MTc3NDU5NjEwN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    accent: 'EME & QSE Growth',
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const [expanded, setExpanded] = useState<number | null>(null);

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

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: 'var(--surface)' }}
      aria-labelledby="services-heading"
    >
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{ background: 'radial-gradient(circle at top right, rgba(201,168,76,0.04) 0%, transparent 65%)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mb-16 md:mb-20" data-reveal="up">
          <div className="flex items-center gap-3 mb-5">
            <div className="gold-line" aria-hidden="true" />
            <span className="text-xs tracking-[0.2em] uppercase" style={{ color: 'var(--primary)', fontFamily: 'var(--font-body)', fontWeight: 400 }}>
              Core Services
            </span>
          </div>
          <h2
            id="services-heading"
            className="font-heading leading-tight mb-5"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)', fontWeight: 'var(--heading-weight)' as any, color: 'var(--text-primary)' }}
          >
            What We{' '}
            <em style={{ color: 'var(--primary)', fontStyle: 'italic' }}>Deliver</em>
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)', fontWeight: 400 }}>
            Three focused services covering the full procurement compliance and transformation value chain —
            tailored to South Africa's Mining Charter and DTIC regulatory landscape.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" data-stagger>
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            const isExpanded = expanded === i;
            return (
              <div
                key={i}
                className="group relative flex flex-col overflow-hidden transition-all duration-300"
                style={{
                  borderRadius: 'var(--radius-xl)',
                  border: '1px solid var(--border-mid)',
                  background: 'var(--surface)',
                  boxShadow: 'var(--shadow-sm)',
                  transform: isExpanded ? 'translateY(-4px)' : 'translateY(0)',
                }}
                onMouseEnter={e => {
                  if (!isExpanded) {
                    e.currentTarget.style.borderColor = 'var(--border-gold)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }
                }}
                onMouseLeave={e => {
                  if (!isExpanded) {
                    e.currentTarget.style.borderColor = 'var(--border-mid)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }
                }}
              >
                {/* Image strip */}
                <div className="relative h-48 overflow-hidden flex-shrink-0">
                  <img
                    src={service.image}
                    alt="a man smiles as he uses a sewing machine"
                    aria-hidden="true"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(10,10,10,0.7) 100%)' }} />
                  <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between">
                    <div>
                      <span className="text-[10px] tracking-[0.2em] uppercase block mb-1" style={{ color: 'var(--primary-light)', fontFamily: 'var(--font-body)', fontWeight: 400 }}>
                        {service.tag}
                      </span>
                      <span
                        className="text-xs px-2.5 py-1 rounded-full"
                        style={{ background: 'rgba(201,168,76,0.25)', border: '1px solid var(--border-gold)', color: 'var(--primary-light)', fontFamily: 'var(--font-body)', fontWeight: 400 }}
                      >
                        {service.accent}
                      </span>
                    </div>
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ background: 'rgba(201,168,76,0.85)', border: '1px solid rgba(255,255,255,0.25)', backdropFilter: 'blur(8px)' }}
                    >
                      <Icon className="w-5 h-5 text-white" aria-hidden="true" />
                    </div>
                  </div>
                </div>

                {/* Text content */}
                <div className="flex flex-col flex-1 p-7">
                  <h3
                    className="font-heading leading-snug mb-3"
                    style={{ fontSize: '1.25rem', fontWeight: 'var(--heading-weight)' as any, color: 'var(--text-primary)' }}
                  >
                    {service.title}
                    {service.shortTitle && (
                      <span className="text-sm ml-2" style={{ color: 'var(--primary)', fontFamily: 'var(--font-body)' }}>({service.shortTitle})</span>
                    )}
                  </h3>
                  <p className="text-sm mb-5" style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontFamily: 'var(--font-body)', fontWeight: 400 }}>
                    {service.description}
                  </p>

                  {/* Core activities — collapsible on mobile, always visible on desktop */}
                  <div className="mb-5">
                    <button
                      className="flex lg:hidden items-center justify-between w-full py-2 text-left mb-2"
                      onClick={() => setExpanded(isExpanded ? null : i)}
                      aria-expanded={isExpanded}
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      <span className="text-xs tracking-[0.12em] uppercase" style={{ color: 'var(--primary)', fontWeight: 500 }}>Core Activities</span>
                      <ChevronDown
                        className="w-4 h-4 transition-transform duration-300"
                        style={{ color: 'var(--primary)', transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
                        aria-hidden="true"
                      />
                    </button>
                    <p className="hidden lg:block text-xs tracking-[0.12em] uppercase mb-3" style={{ color: 'var(--primary)', fontFamily: 'var(--font-body)', fontWeight: 500 }}>
                      Core Activities
                    </p>
                    <ul className={`space-y-2.5 overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96' : 'max-h-0 lg:max-h-96'}`}>
                      {service.details.map((detail, di) => (
                        <li key={di} className="flex items-start gap-2.5">
                          <CheckCircle className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: 'var(--primary)' }} aria-hidden="true" />
                          <span className="text-xs" style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontFamily: 'var(--font-body)', fontWeight: 400 }}>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex-1" />

                  <div className="flex items-center gap-1.5 pt-5" style={{ borderTop: '1px solid var(--border)' }}>
                    <a
                      href="#contact"
                      onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                      className="flex items-center gap-1.5 text-sm transition-all duration-200 group/link"
                      style={{ color: 'var(--primary)', fontFamily: 'var(--font-body)', fontWeight: 500 }}
                    >
                      Enquire About This Service
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}