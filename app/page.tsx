'use client';
import Hero from '../components/Hero';
import CredibilityBar from '../components/CredibilityBar';
import Services from '../components/Services';
import About from '../components/About';
import Impact from '../components/Impact';
import Team from '../components/Team';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <CredibilityBar />
      <Services />
      <Impact />
      <Team />
      <Contact />
    </>
  );
}