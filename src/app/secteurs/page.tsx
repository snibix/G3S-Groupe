import Link from 'next/link';
import Image from 'next/image';
import ContactCTA from '@/components/ContactCTA';
import { Section } from '@/components/Section';
import { Card } from '@/components/Card';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/Animations';

export default function SecteursPage() {
  return (
    <main>

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="relative min-h-[50vh] flex flex-col justify-center bg-navy pt-40 pb-20 z-0">
        <div className="absolute inset-0 z-[-1] bg-[url('/grid.svg')] bg-center opacity-10"></div>
        <div className="mx-auto w-full max-w-[1200px] px-6 text-center">
          <FadeIn direction="up" delay={0.1}>
            <span className="inline-block rounded-full bg-brand/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-sky mb-4">Nos secteurs</span>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <h1 className="mx-auto max-w-4xl font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-white mb-6">
              Des solutions de sécurité adaptées à chaque secteur
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.3}>
            <p className="mx-auto max-w-3xl font-sans text-lg text-mist/80 leading-relaxed">
              Chaque environnement a ses propres enjeux de sûreté. G3S conçoit des dispositifs sur mesure,
              calibrés aux contraintes et aux exigences spécifiques de votre secteur d&apos;activité.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTEUR 1 — Industrie & Logistique
      ══════════════════════════════════════════ */}
      <Section id="industrie" variant="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <FadeIn direction="right" className="lg:col-span-5 relative">
            <div className="relative aspect-square w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <Image
                src="/secteur/secu-industrie.jpg"
                alt="Industrie et Logistique"
                fill
                className="object-cover transition-transform hover:scale-105 duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent"></div>
            </div>
          </FadeIn>
          <FadeIn direction="left" className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-4 border-b-2 border-line pb-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand/10 font-display text-xl font-bold text-brand">01</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold uppercase text-navy">Industrie &amp; Logistique</h2>
            </div>
            <p className="font-sans text-lg text-muted mb-4">
              Sites industriels, usines, entrepôts et plateformes logistiques nécessitent des dispositifs de sécurité robustes et adaptés aux risques spécifiques : intrusion, vol, incendie, sabotage.
            </p>
            <ul className="flex flex-col gap-3 font-sans text-muted">
              <li className="flex items-start gap-3">
                <svg className="shrink-0 mt-0.5 text-brand" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                Gardiennage permanent et rondes de surveillance
              </li>
              <li className="flex items-start gap-3">
                <svg className="shrink-0 mt-0.5 text-brand" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                Contrôle d&apos;accès véhicules et personnel
              </li>
              <li className="flex items-start gap-3">
                <svg className="shrink-0 mt-0.5 text-brand" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                Vidéoprotection périmétrique et intérieure
              </li>
              <li className="flex items-start gap-3">
                <svg className="shrink-0 mt-0.5 text-brand" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                Sécurité incendie SSIAP sur zones SEVESO
              </li>
            </ul>
          </FadeIn>
        </div>
      </Section>

      {/* ══════════════════════════════════════════
          SECTEUR 2 — Tertiaire & Bureaux
      ══════════════════════════════════════════ */}
      <Section id="tertiaire" variant="mist">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <FadeIn direction="right" className="lg:col-span-7 flex flex-col gap-6 lg:order-1 order-2">
            <div className="flex items-center gap-4 border-b-2 border-line pb-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy/10 font-display text-xl font-bold text-navy">02</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold uppercase text-navy">Tertiaire &amp; Bureaux</h2>
            </div>
            <p className="font-sans text-lg text-muted mb-4">
              Tours de bureaux, sièges sociaux, espaces de coworking : des environnements qui exigent une sécurité discrète mais efficace, alliant accueil et protection.
            </p>
            <ul className="flex flex-col gap-3 font-sans text-muted">
              <li className="flex items-start gap-3">
                <svg className="shrink-0 mt-0.5 text-brand" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                Agents d&apos;accueil et de filtrage qualifiés
              </li>
              <li className="flex items-start gap-3">
                <svg className="shrink-0 mt-0.5 text-brand" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                Contrôle d&apos;accès par badge et biométrie
              </li>
              <li className="flex items-start gap-3">
                <svg className="shrink-0 mt-0.5 text-brand" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                Gestion des flux visiteurs et livraisons
              </li>
              <li className="flex items-start gap-3">
                <svg className="shrink-0 mt-0.5 text-brand" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                Systèmes d&apos;alarme et télésurveillance
              </li>
            </ul>
          </FadeIn>
          <FadeIn direction="left" className="lg:col-span-5 relative lg:order-2 order-1">
            <div className="relative aspect-square w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <Image
                src="/secteur/bureau-secu.jpg"
                alt="Tertiaire et Bureaux"
                fill
                className="object-cover transition-transform hover:scale-105 duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent"></div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* ══════════════════════════════════════════
          SECTEUR 3 — Commerce & Grande Distribution
      ══════════════════════════════════════════ */}
      <Section id="commerce" variant="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <FadeIn direction="right" className="lg:col-span-5 relative">
            <div className="relative aspect-square w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <Image
                src="/secteur/supermarcher-securite.jpg"
                alt="Commerce et Grande Distribution"
                fill
                className="object-cover transition-transform hover:scale-105 duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent"></div>
            </div>
          </FadeIn>
          <FadeIn direction="left" className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-4 border-b-2 border-line pb-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky/10 font-display text-xl font-bold text-sky">03</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold uppercase text-navy">Commerce &amp; Grande Distribution</h2>
            </div>
            <p className="font-sans text-lg text-muted mb-4">
              Centres commerciaux, boutiques et grandes surfaces font face à des enjeux de démarque inconnue, d&apos;incivilités et de gestion de flux. Notre approche allie dissuasion et réactivité.
            </p>
            <ul className="flex flex-col gap-3 font-sans text-muted">
              <li className="flex items-start gap-3">
                <svg className="shrink-0 mt-0.5 text-brand" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                Agents de prévention vol et surveillance
              </li>
              <li className="flex items-start gap-3">
                <svg className="shrink-0 mt-0.5 text-brand" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                Vidéoprotection avec analyse intelligente
              </li>
              <li className="flex items-start gap-3">
                <svg className="shrink-0 mt-0.5 text-brand" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                Sécurisation des parkings et zones de livraison
              </li>
              <li className="flex items-start gap-3">
                <svg className="shrink-0 mt-0.5 text-brand" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                Intervention rapide en cas d&apos;incident
              </li>
            </ul>
          </FadeIn>
        </div>
      </Section>

      {/* ══════════════════════════════════════════
          SECTEUR 4 — Santé & Établissements Publics
      ══════════════════════════════════════════ */}
      <Section id="sante" variant="mist">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <FadeIn direction="right" className="lg:col-span-7 flex flex-col gap-6 lg:order-1 order-2">
            <div className="flex items-center gap-4 border-b-2 border-line pb-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy/10 font-display text-xl font-bold text-navy">04</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold uppercase text-navy">Santé &amp; Établissements Publics</h2>
            </div>
            <p className="font-sans text-lg text-muted mb-4">
              Hôpitaux, cliniques, administrations et établissements scolaires : des environnements sensibles où la sécurité doit s&apos;exercer avec tact et professionnalisme.
            </p>
            <ul className="flex flex-col gap-3 font-sans text-muted">
              <li className="flex items-start gap-3">
                <svg className="shrink-0 mt-0.5 text-brand" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                Filtrage et contrôle d&apos;accès aux zones sensibles
              </li>
              <li className="flex items-start gap-3">
                <svg className="shrink-0 mt-0.5 text-brand" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                Rondes de sécurité et gestion des urgences
              </li>
              <li className="flex items-start gap-3">
                <svg className="shrink-0 mt-0.5 text-brand" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                Gestion des situations d&apos;agressivité
              </li>
              <li className="flex items-start gap-3">
                <svg className="shrink-0 mt-0.5 text-brand" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                Sécurité incendie conforme aux normes ERP
              </li>
            </ul>
          </FadeIn>
          <FadeIn direction="left" className="lg:col-span-5 relative lg:order-2 order-1">
            <div className="relative aspect-square w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <Image
                src="/secteur/secu-hopital.jpg"
                alt="Santé et Établissements Publics"
                fill
                className="object-cover transition-transform hover:scale-105 duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent"></div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* ══════════════════════════════════════════
          SECTEUR 5 — Événementiel & Culture
      ══════════════════════════════════════════ */}
      <Section id="evenementiel" variant="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <FadeIn direction="right" className="lg:col-span-5 relative">
            <div className="relative aspect-square w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <Image
                src="/secteur/secu-even.jpg"
                alt="Événementiel et Culture"
                fill
                className="object-cover transition-transform hover:scale-105 duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent"></div>
            </div>
          </FadeIn>
          <FadeIn direction="left" className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-4 border-b-2 border-line pb-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand/10 font-display text-xl font-bold text-brand">05</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold uppercase text-navy">Événementiel &amp; Culture</h2>
            </div>
            <p className="font-sans text-lg text-muted mb-4">
              Concerts, festivals, salons professionnels, manifestations sportives et culturelles : des événements qui requièrent un dispositif de sécurité dimensionné et réactif.
            </p>
            <ul className="flex flex-col gap-3 font-sans text-muted">
              <li className="flex items-start gap-3">
                <svg className="shrink-0 mt-0.5 text-brand" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                Étude de sûreté et plan de sécurité sur mesure
              </li>
              <li className="flex items-start gap-3">
                <svg className="shrink-0 mt-0.5 text-brand" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                Palpations de sécurité et contrôle des accès
              </li>
              <li className="flex items-start gap-3">
                <svg className="shrink-0 mt-0.5 text-brand" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                Gestion de la foule et des flux de personnes
              </li>
              <li className="flex items-start gap-3">
                <svg className="shrink-0 mt-0.5 text-brand" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                PC de sécurité mobile et coordination terrain
              </li>
            </ul>
          </FadeIn>
        </div>
      </Section>

      {/* ══════════════════════════════════════════
          SECTEUR 6 — Résidentiel & Luxe
      ══════════════════════════════════════════ */}
      <Section id="residentiel" variant="mist">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <FadeIn direction="right" className="lg:col-span-7 flex flex-col gap-6 lg:order-1 order-2">
            <div className="flex items-center gap-4 border-b-2 border-line pb-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy/10 font-display text-xl font-bold text-navy">06</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold uppercase text-navy">Résidentiel &amp; Luxe</h2>
            </div>
            <p className="font-sans text-lg text-muted mb-4">
              Résidences haut de gamme, propriétés privées et boutiques de luxe nécessitent une sécurité premium : discrète, élégante et irréprochable.
            </p>
            <ul className="flex flex-col gap-3 font-sans text-muted">
              <li className="flex items-start gap-3">
                <svg className="shrink-0 mt-0.5 text-brand" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                Gardiennage résidentiel haut de gamme
              </li>
              <li className="flex items-start gap-3">
                <svg className="shrink-0 mt-0.5 text-brand" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                Vidéosurveillance discrète et intégrée
              </li>
              <li className="flex items-start gap-3">
                <svg className="shrink-0 mt-0.5 text-brand" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                Systèmes domotiques et alarme connectée
              </li>
              <li className="flex items-start gap-3">
                <svg className="shrink-0 mt-0.5 text-brand" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                Conciergerie sécurité et protection rapprochée
              </li>
            </ul>
          </FadeIn>
          <FadeIn direction="left" className="lg:col-span-5 relative lg:order-2 order-1">
            <div className="relative aspect-square w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <Image
                src="/secteur/secu-resident-luxe.jpg"
                alt="Résidentiel et Luxe"
                fill
                className="object-cover transition-transform hover:scale-105 duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent"></div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* ══════════════════════════════════════════
          NAVIGATION RAPIDE DES SECTEURS
      ══════════════════════════════════════════ */}
      <Section variant="default">
        <FadeIn direction="up">
          <div className="mx-auto mb-16 max-w-[800px] text-center">
            <span className="inline-block rounded-full bg-brand/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand mb-4">En résumé</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold uppercase text-navy mb-4">Tous nos secteurs d&apos;intervention</h2>
            <p className="font-sans text-lg text-muted">
              Cliquez sur un secteur pour découvrir nos prestations détaillées.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
          <StaggerItem>
            <a href="#industrie" className="group block bg-white border border-line rounded-xl p-6 transition-all hover:-translate-y-1 hover:shadow-lg hover:border-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-sky h-full">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 text-2xl mb-4 group-hover:bg-slate-200 transition-colors">🏭</div>
              <h3 className="font-display text-xl font-bold uppercase text-navy mb-2 flex items-center justify-between">
                Industrie &amp; Logistique
                <svg className="text-brand opacity-0 group-hover:opacity-100 transition-opacity" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
              </h3>
              <p className="font-sans text-sm text-muted">Usines, entrepôts, zones SEVESO</p>
            </a>
          </StaggerItem>

          <StaggerItem>
            <a href="#tertiaire" className="group block bg-white border border-line rounded-xl p-6 transition-all hover:-translate-y-1 hover:shadow-lg hover:border-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-sky h-full">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-2xl mb-4 group-hover:bg-blue-100 transition-colors">🏢</div>
              <h3 className="font-display text-xl font-bold uppercase text-navy mb-2 flex items-center justify-between">
                Tertiaire &amp; Bureaux
                <svg className="text-brand opacity-0 group-hover:opacity-100 transition-opacity" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
              </h3>
              <p className="font-sans text-sm text-muted">Sièges sociaux, coworking</p>
            </a>
          </StaggerItem>

          <StaggerItem>
            <a href="#commerce" className="group block bg-white border border-line rounded-xl p-6 transition-all hover:-translate-y-1 hover:shadow-lg hover:border-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-sky h-full">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-50 text-2xl mb-4 group-hover:bg-teal-100 transition-colors">🛍️</div>
              <h3 className="font-display text-xl font-bold uppercase text-navy mb-2 flex items-center justify-between">
                Commerce &amp; Distribution
                <svg className="text-brand opacity-0 group-hover:opacity-100 transition-opacity" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
              </h3>
              <p className="font-sans text-sm text-muted">Centres commerciaux, boutiques</p>
            </a>
          </StaggerItem>

          <StaggerItem>
            <a href="#sante" className="group block bg-white border border-line rounded-xl p-6 transition-all hover:-translate-y-1 hover:shadow-lg hover:border-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-sky h-full">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50 text-2xl mb-4 group-hover:bg-indigo-100 transition-colors">🏥</div>
              <h3 className="font-display text-xl font-bold uppercase text-navy mb-2 flex items-center justify-between">
                Santé &amp; Public
                <svg className="text-brand opacity-0 group-hover:opacity-100 transition-opacity" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
              </h3>
              <p className="font-sans text-sm text-muted">Hôpitaux, administrations, écoles</p>
            </a>
          </StaggerItem>

          <StaggerItem>
            <a href="#evenementiel" className="group block bg-white border border-line rounded-xl p-6 transition-all hover:-translate-y-1 hover:shadow-lg hover:border-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-sky h-full">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-50 text-2xl mb-4 group-hover:bg-orange-100 transition-colors">🎪</div>
              <h3 className="font-display text-xl font-bold uppercase text-navy mb-2 flex items-center justify-between">
                Événementiel &amp; Culture
                <svg className="text-brand opacity-0 group-hover:opacity-100 transition-opacity" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
              </h3>
              <p className="font-sans text-sm text-muted">Concerts, festivals, salons</p>
            </a>
          </StaggerItem>

          <StaggerItem>
            <a href="#residentiel" className="group block bg-white border border-line rounded-xl p-6 transition-all hover:-translate-y-1 hover:shadow-lg hover:border-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-sky h-full">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-50 text-2xl mb-4 group-hover:bg-amber-100 transition-colors">🏡</div>
              <h3 className="font-display text-xl font-bold uppercase text-navy mb-2 flex items-center justify-between">
                Résidentiel &amp; Luxe
                <svg className="text-brand opacity-0 group-hover:opacity-100 transition-opacity" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
              </h3>
              <p className="font-sans text-sm text-muted">Propriétés privées, retail luxe</p>
            </a>
          </StaggerItem>
        </StaggerContainer>
      </Section>

      {/* ══════════════════════════════════════════
          CTA FINAL
      ══════════════════════════════════════════ */}
      <section className="bg-navy py-20 text-center">
        <FadeIn direction="up">
          <div className="mx-auto max-w-[800px] px-6">
            <h2 className="font-display text-3xl md:text-5xl font-bold uppercase text-white mb-6">Votre secteur n&apos;est pas listé ?</h2>
            <p className="font-sans text-lg text-mist/80 mb-10 leading-relaxed">
              Nous intervenons dans de nombreux autres environnements. Contactez-nous pour
              une étude personnalisée adaptée à vos contraintes spécifiques.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <ContactCTA />
              <a href="tel:0356990900" className="inline-flex items-center justify-center gap-2 rounded px-6 py-3 font-sans font-semibold text-white bg-white/10 hover:bg-white/20 transition-colors border-2 border-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-sky">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                03 56 99 09 00
              </a>
            </div>
          </div>
        </FadeIn>
      </section>

    </main>
  );
}
