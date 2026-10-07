import Link from 'next/link';
import ContactCTA from '@/components/ContactCTA';
import { FadeIn, StaggerContainer, StaggerItem, AnimatedCounter, ScaleIn, SlideIn } from '@/components/Animations';
import { Button } from '@/components/Button';
import { Section } from '@/components/Section';
import { Card } from '@/components/Card';

export default function Home() {
  return (
    <main className="pt-20">

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex items-center justify-center py-20 bg-mist z-0">
        <div className="absolute inset-0 z-[-1] bg-[radial-gradient(ellipse_at_30%_20%,rgba(91,164,245,0.1)_0%,transparent_50%),radial-gradient(ellipse_at_70%_80%,rgba(29,95,204,0.05)_0%,transparent_50%)]"></div>
        <div className="relative mx-auto max-w-[800px] px-6 text-center">
          <FadeIn direction="up" delay={0.1}>
            <span className="inline-block rounded-full bg-brand/10 px-5 py-2 text-sm font-semibold tracking-wider text-brand mb-8 uppercase">🛡️ Sécurité depuis 2023</span>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold uppercase text-navy leading-tight mb-6">
              Votre sécurité, <span className="text-brand">notre priorité</span> absolue
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <p className="mx-auto max-w-[650px] font-sans text-lg md:text-xl text-muted leading-relaxed mb-10">
              G3S vous accompagne avec des solutions de sécurité sur mesure, alliant technologie de pointe et expertise humaine pour garantir votre tranquillité d&apos;esprit.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.4}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button asChild variant="primary">
                <Link href="/expertises">Découvrir nos expertises</Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="/decouvrir">En savoir plus</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CHIFFRES CLÉS
      ══════════════════════════════════════════ */}
      <section className="bg-navy py-12">
        <StaggerContainer className="mx-auto flex max-w-[1000px] flex-wrap items-center justify-center gap-8 md:gap-12 px-6">
          <StaggerItem className="flex flex-col items-center gap-2 min-w-[120px]">
            <span className="font-display text-4xl md:text-5xl font-bold text-white">
              <AnimatedCounter target={4} prefix="+" duration={2} />
            </span>
            <span className="font-sans text-sm font-medium text-white/70">Années d&apos;expérience</span>
          </StaggerItem>

          <div className="hidden h-12 w-[1px] bg-white/20 sm:block"></div>

          <StaggerItem className="flex flex-col items-center gap-2 min-w-[120px]">
            <span className="font-display text-4xl md:text-5xl font-bold text-white">
              <AnimatedCounter target={50} suffix="+" duration={2.5} />
            </span>
            <span className="font-sans text-sm font-medium text-white/70">Agents d'intervention spécialisés</span>
          </StaggerItem>

          <div className="hidden h-12 w-[1px] bg-white/20 sm:block"></div>

          <StaggerItem className="flex flex-col items-center gap-2 min-w-[120px]">
            <span className="font-display text-4xl md:text-5xl font-bold text-white">
              <AnimatedCounter target={290} suffix="+" duration={3} />
            </span>
            <span className="font-sans text-sm font-medium text-white/70">Sites sécurisés</span>
          </StaggerItem>

          <div className="hidden h-12 w-[1px] bg-white/20 sm:block"></div>

          <StaggerItem className="flex flex-col items-center gap-2 min-w-[120px]">
            <span className="font-display text-4xl md:text-5xl font-bold text-white">6/7j</span>
            <span className="font-sans text-sm font-medium text-white/70">Disponibilité</span>
          </StaggerItem>
        </StaggerContainer>
      </section>

      {/* ══════════════════════════════════════════
          POURQUOI G3S
      ══════════════════════════════════════════ */}
      <Section variant="default">
        <FadeIn direction="up">
          <div className="mx-auto mb-16 max-w-[800px] text-center">
            <span className="inline-block rounded-full bg-brand/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand mb-4">Nos engagements</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold uppercase text-navy mb-4">Pourquoi choisir G3S ?</h2>
            <p className="font-sans text-lg text-muted">
              Une approche professionnelle et humaine de la sécurité, reconnue par nos clients et partenaires.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.15}>
          <StaggerItem>
            <Card icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>} className="h-full">
              <h3 className="font-display text-xl font-bold uppercase text-navy mb-2">Expertise certifiée</h3>
              <p className="font-sans text-sm text-muted leading-relaxed">
                Nos agents sont rigoureusement sélectionnés, formés et certifiés pour répondre aux plus hautes exigences du secteur (CQP, SSIAP).
              </p>
            </Card>
          </StaggerItem>

          <StaggerItem>
            <Card icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>} className="h-full flex flex-col">
              <h3 className="font-display text-xl font-bold uppercase text-navy mb-2">Réactivité 24/7</h3>
              <p className="font-sans text-sm text-muted leading-relaxed mb-4">
                Le PC de sécurité de notre partenaire <span className="font-semibold text-navy">5 sur 5 Sécurité</span> coordonne les opérations pour une intervention immédiate en cas d&apos;urgence.
              </p>
              <div className="mt-auto pt-4 border-t border-line flex items-center gap-3">
                <img src="/5sur5.jpeg" alt="5 sur 5 Sécurité" className="h-8 w-auto max-w-[80px] object-contain mix-blend-multiply" />
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-navy">5 sur 5 Sécurité</span>
                  <span className="text-[10px] text-muted uppercase tracking-wider">Partenaire opérationnel</span>
                </div>
              </div>
            </Card>
          </StaggerItem>

          <StaggerItem>
            <Card icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>} className="h-full">
              <h3 className="font-display text-xl font-bold uppercase text-navy mb-2">Approche sur-mesure</h3>
              <p className="font-sans text-sm text-muted leading-relaxed">
                Chaque client est unique. Nous réalisons un audit complet de vos vulnérabilités avant de proposer une stratégie de protection adaptée.
              </p>
            </Card>
          </StaggerItem>

          <StaggerItem>
            <Card icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>} className="h-full">
              <h3 className="font-display text-xl font-bold uppercase text-navy mb-2">Technologie avancée</h3>
              <p className="font-sans text-sm text-muted leading-relaxed">
                Vidéosurveillance intelligente, contrôle d&apos;accès biométrique, télésurveillance : nous intégrons les technologies les plus récentes.
              </p>
            </Card>
          </StaggerItem>
        </StaggerContainer>
      </Section>

      {/* ══════════════════════════════════════════
          NOS EXPERTISES
      ══════════════════════════════════════════ */}
      <Section variant="mist">
        <FadeIn direction="up">
          <div className="mx-auto mb-16 max-w-[800px] text-center">
            <span className="inline-block rounded-full bg-brand/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand mb-4">Nos métiers</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold uppercase text-navy mb-4">Nos domaines d&apos;intervention</h2>
            <p className="font-sans text-lg text-muted">
              Une gamme complète de prestations pour une sécurité globale et adaptée à chaque environnement.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3" staggerDelay={0.1}>

          <StaggerItem className="md:col-span-2 lg:col-span-2">
            <Card icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" /><circle cx="12" cy="13" r="4" /></svg>} className="h-full border-t-4 border-t-brand">
              <h3 className="font-display text-2xl font-bold uppercase text-navy mb-3">Installation système de sécurité électronique</h3>
              <p className="font-sans text-base text-muted leading-relaxed mb-6 flex-1">
                Installation et maintenance de vidéosurveillance, contrôle d&apos;accès et alarmes anti-intrusion.
              </p>
              <Link href="/expertises" className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-brand hover:text-navy transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky rounded">
                En savoir plus
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
              </Link>
            </Card>
          </StaggerItem>

          <StaggerItem>
            <Card icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>} className="h-full">
              <h3 className="font-display text-xl font-bold uppercase text-navy mb-3">Sécurité Incendie</h3>
              <p className="font-sans text-sm text-muted leading-relaxed mb-6 flex-1">
                Prévention, assistance et intervention par nos agents certifiés SSIAP pour protéger vos ERP et IGH.
              </p>
              <Link href="/expertises" className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-brand hover:text-navy transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky rounded mt-auto">
                En savoir plus
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
              </Link>
            </Card>
          </StaggerItem>

          <StaggerItem>
            <Card icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>} className="h-full">
              <h3 className="font-display text-xl font-bold uppercase text-navy mb-3">Sécurité Privée</h3>
              <p className="font-sans text-sm text-muted leading-relaxed mb-6 flex-1">
                Sécurisation de vos sites par la présence dissuasive et professionnelle de nos agents qualifiés. Gardiennage, contrôle d&apos;accès, rondes et filtrage.
              </p>
              <Link href="/expertises" className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-brand hover:text-navy transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky rounded mt-auto">
                En savoir plus
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
              </Link>
            </Card>
          </StaggerItem>

          <StaggerItem>
            <Card icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>} className="h-full">
              <h3 className="font-display text-xl font-bold uppercase text-navy mb-3">Formation</h3>
              <p className="font-sans text-sm text-muted leading-relaxed mb-6 flex-1">
                Centre de formation pour adultes spécialisé dans les métiers de la sécurité : SST, SSIAP, CQP et autres habilitations.
              </p>
              <Link href="/expertises" className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-brand hover:text-navy transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky rounded mt-auto">
                En savoir plus
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
              </Link>
            </Card>
          </StaggerItem>

          <StaggerItem>
            <Card icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>} className="h-full">
              <h3 className="font-display text-xl font-bold uppercase text-navy mb-3">Audit et Conseils</h3>
              <p className="font-sans text-sm text-muted leading-relaxed mb-6 flex-1">
                Analyse complète de vos risques et recommandations personnalisées pour optimiser votre dispositif de sûreté.
              </p>
              <Link href="/expertises" className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-brand hover:text-navy transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky rounded mt-auto">
                En savoir plus
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
              </Link>
            </Card>
          </StaggerItem>
        </StaggerContainer>
      </Section>

      {/* ══════════════════════════════════════════
          SECTEURS D'ACTIVITÉ
      ══════════════════════════════════════════ */}
      <Section variant="default">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <SlideIn from="left">
            <span className="inline-block rounded-full bg-brand/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand mb-4">Nos secteurs</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold uppercase text-navy mb-6">Des solutions adaptées à chaque secteur</h2>
            <p className="font-sans text-lg text-muted mb-8 leading-relaxed">
              G3S intervient dans de nombreux secteurs d&apos;activité et adapte ses prestations aux contraintes spécifiques de chaque environnement.
            </p>
            <Button asChild variant="primary">
              <Link href="/secteurs">
                Voir tous nos secteurs
              </Link>
            </Button>
          </SlideIn>
          <SlideIn from="right" className="flex flex-col gap-4">
            <div className="flex items-center gap-4 p-4 rounded-lg bg-mist border border-line">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-2xl shadow-sm">🏢</div>
              <div>
                <h4 className="font-display text-lg font-bold uppercase text-navy">Tertiaire & Bureaux</h4>
                <p className="font-sans text-sm text-muted">Sièges sociaux, tours de bureaux, espaces de coworking</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-lg bg-mist border border-line">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-2xl shadow-sm">🏭</div>
              <div>
                <h4 className="font-display text-lg font-bold uppercase text-navy">Industrie & Logistique</h4>
                <p className="font-sans text-sm text-muted">Usines, entrepôts, zones industrielles</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-lg bg-mist border border-line">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-2xl shadow-sm">🏥</div>
              <div>
                <h4 className="font-display text-lg font-bold uppercase text-navy">Santé & Établissements publics</h4>
                <p className="font-sans text-sm text-muted">Hôpitaux, cliniques, administrations, écoles</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-lg bg-mist border border-line">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-2xl shadow-sm">🛍️</div>
              <div>
                <h4 className="font-display text-lg font-bold uppercase text-navy">Commerce & Grande distribution</h4>
                <p className="font-sans text-sm text-muted">Centres commerciaux, boutiques, enseignes</p>
              </div>
            </div>
          </SlideIn>
        </div>
      </Section>

      {/* ══════════════════════════════════════════
          CTA FINAL
      ══════════════════════════════════════════ */}
      <section className="bg-navy py-20 text-center">
        <div className="mx-auto max-w-[800px] px-6">
          <ScaleIn>
            <h2 className="font-display text-3xl md:text-5xl font-bold uppercase text-white mb-6">Prêt à sécuriser votre environnement ?</h2>
            <p className="font-sans text-lg text-mist/80 mb-10 leading-relaxed">
              Contactez nos experts dès aujourd&apos;hui pour un audit de sécurité gratuit et sans engagement. Nous définirons ensemble la stratégie la plus adaptée à vos besoins.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <ContactCTA />
              <a href="tel:0685641267" className="inline-flex items-center justify-center gap-2 rounded px-6 py-3 font-sans font-semibold text-white bg-white/10 hover:bg-white/20 transition-colors border-2 border-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-sky">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                06 85 64 12 67
              </a>
            </div>
          </ScaleIn>
        </div>
      </section>

    </main>
  );
}
