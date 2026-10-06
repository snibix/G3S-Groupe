'use client';

import { Section } from '@/components/Section';
import { Button } from '@/components/Button';
import { NewsSection } from '@/components/NewsSection';

export default function ActualitesPage() {
  return (
    <main>

      {/* Hero */}
      <section className="bg-navy pt-40 pb-20 text-center relative z-0">
        <div className="absolute inset-0 z-[-1] bg-[url('/grid.svg')] bg-center opacity-10"></div>
        <div className="mx-auto max-w-[800px] px-6">
          <span className="inline-block rounded-full bg-brand/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-sky mb-4">Actualités</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-white mb-6">Restez informé</h1>
          <p className="font-sans text-lg text-mist/80 leading-relaxed">
            Suivez les dernières nouvelles de la cybersécurité, les menaces en temps réel et les alertes certifiées.
          </p>
        </div>
      </section>

      {/* Veille Cybersécurité (Dynamique depuis l'API RSS) */}
      <Section variant="default" className="pt-24 pb-24">
        <div className="mx-auto max-w-[1200px]">
          <NewsSection />
        </div>
      </Section>

    </main>
  );
}
