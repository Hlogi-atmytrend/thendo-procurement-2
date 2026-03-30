"use client";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      aria-label="Hero"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1655720357872-ce227e4164ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjAyNjN8MHwxfHNlYXJjaHwyMXx8YmxhY2slMjBwZW9wbGUlMjBhdCUyMHdvcmt8ZW58MHwwfHx8MTc3NDI5MTAyNHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Thendo Procurement team collaborating"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #0a0a0a, #1a1a1a)",
            opacity: 0.9,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 15% 50%, rgba(201,168,76,0.12) 0%, transparent 65%)",
          }}
        />
      </div>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,168,76,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.03) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
        aria-hidden="true"
      />

      <div
        className="absolute left-8 top-0 bottom-0 w-px hidden xl:block"
        style={{
          background:
            "linear-gradient(to bottom, transparent 10%, var(--primary) 50%, transparent 90%)",
          opacity: 0.35,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2.5 mb-10 hero-anim-1">
            <div
              className="flex items-center gap-2.5 px-4 py-2 rounded-full text-xs tracking-[0.18em] uppercase"
              style={{
                border: "1px solid var(--border-gold)",
                background: "rgba(201,168,76,0.08)",
                color: "var(--primary-light)",
                fontFamily: "var(--font-body)",
                fontWeight: 400,
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full shrink-0"
                style={{ background: "var(--primary)" }}
              />
              B-BBEE Level 1 Contributor · 135% Recognition · 13+ Years
            </div>
          </div>

          <h1
            className="font-heading leading-[1.05] mb-8 hero-anim-2"
            style={{
              fontSize: "clamp(3rem, 8vw, 6.5rem)",
              fontWeight: "var(--heading-weight)",
              color: "var(--text-on-dark)",
              letterSpacing: "-0.025em",
            }}
          >
            Procurement,{" "}
            <em
              style={{
                color: "var(--primary)",
                fontStyle: "italic",
                textShadow: "0 0 80px rgba(201,168,76,0.4)",
              }}
            >
              Compliance,
            </em>{" "}
            <em
              style={{
                color: "var(--primary)",
                fontStyle: "italic",
                textShadow: "0 0 80px rgba(201,168,76,0.4)",
              }}
            >
              ED &amp; SD
            </em>
            <br />
            <span style={{ opacity: 0.7 }}>
              Experts for South Africa&apos;s Mining Sector
            </span>
          </h1>

          <p
            className="text-lg md:text-xl mb-10 max-w-2xl hero-anim-3"
            style={{
              color: "var(--text-on-dark-muted)",
              lineHeight: 1.75,
              fontFamily: "var(--font-body)",
              fontWeight: 400,
            }}
          >
            Thendo Procurement delivers expert procurement spend optimisation,
            Mining Charter &amp; DTIC compliance, Enterprise Development and
            Supplier Development — backed by 13+ years of proven expertise and a
            collective 20+ years of industry knowledge.
          </p>

          <div className="flex flex-wrap gap-2.5 mb-12 hero-anim-4">
            {[
              "Procurement Spend Analysis",
              "Mining Charter & DTIC Compliance",
              "Enterprise Development (ED)",
              "Supplier Development (SD)",
            ].map((pill) => (
              <span
                key={pill}
                className="text-xs px-3.5 py-1.5 rounded-full"
                style={{
                  background: "rgba(201,168,76,0.1)",
                  border: "1px solid rgba(201,168,76,0.25)",
                  color: "var(--primary-light)",
                  fontFamily: "var(--font-body)",
                  fontWeight: 400,
                  letterSpacing: "0.02em",
                }}
              >
                {pill}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 hero-anim-4">
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#services")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-3 px-8 py-4 text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105"
              style={{
                background: "var(--primary)",
                color: "var(--primary-foreground)",
                borderRadius: "var(--radius-md)",
                boxShadow: "var(--shadow-gold)",
                fontFamily: "var(--font-body)",
                fontWeight: 500,
                letterSpacing: "0.1em",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--primary-hover)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--primary)";
              }}
            >
              Our Services
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#about")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2.5 px-8 py-4 text-sm tracking-widest uppercase transition-all duration-300"
              style={{
                border: "1px solid rgba(255,255,255,0.2)",
                color: "var(--text-on-dark)",
                borderRadius: "var(--radius-md)",
                background: "rgba(255,255,255,0.04)",
                fontFamily: "var(--font-body)",
                fontWeight: 400,
                letterSpacing: "0.1em",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                e.currentTarget.style.borderColor = "var(--border-gold)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
              }}
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 hero-scroll-indicator"
        aria-hidden="true"
      >
        <span
          className="text-[10px] tracking-[0.3em] uppercase"
          style={{
            color: "var(--text-on-dark-subtle)",
            fontFamily: "var(--font-body)",
            fontWeight: 400,
          }}
        >
          Scroll
        </span>
        <div className="hero-scroll-bounce">
          <ChevronDown
            className="w-4 h-4"
            style={{ color: "var(--primary)" }}
          />
        </div>
      </div>
    </section>
  );
}
