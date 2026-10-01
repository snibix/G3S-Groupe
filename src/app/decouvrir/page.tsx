import Link from 'next/link';
import ContactCTA from '@/components/ContactCTA';
import { Section } from '@/components/Section';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';
import { AnimatedCounter } from '@/components/Animations';

export default function DecouvrirPage() {
  return (
    <main>

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="relative min-h-[60vh] flex flex-col justify-center bg-navy pt-40 pb-20 z-0">
        <div className="absolute inset-0 z-[-1] bg-[url('/grid.svg')] bg-center opacity-10"></div>
        <div className="mx-auto w-full max-w-[1200px] px-6 text-center">
          <span className="inline-block rounded-full bg-brand/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-sky mb-4">Qui sommes-nous</span>
          <h1 className="mx-auto max-w-4xl font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-white mb-6">
            L&apos;excellence de la sécurité privée, depuis 2010
          </h1>
          <p className="mx-auto max-w-3xl font-sans text-lg text-mist/80 mb-10 leading-relaxed">
            G3S est un acteur majeur de la sécurité privée dans le Grand Est. Nous combinons expertise humaine,
            technologies de pointe et valeurs fortes pour garantir la protection de vos biens et de vos collaborateurs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild variant="primary">
              <Link href="/expertises">Nos expertises</Link>
            </Button>
            <Button asChild variant="outline" className="text-white border-white/30 hover:border-white hover:bg-white/10 hover:text-white">
              <a href="#histoire">Notre histoire</a>
            </Button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CHIFFRES CLÉS — BANDEAU
      ══════════════════════════════════════════ */}
      <section className="bg-brand py-12 text-white relative z-10 -mt-8 mx-6 md:mx-auto max-w-[1200px] rounded-2xl shadow-xl">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 divide-x divide-white/20 text-center">
          <div className="flex flex-col items-center">
            <span className="font-display text-4xl md:text-5xl font-bold mb-1">
              <AnimatedCounter prefix="+" target={5} />
            </span>
            <span className="font-sans text-sm font-medium uppercase tracking-wide text-white/80">Années d&apos;expérience</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-display text-4xl md:text-5xl font-bold mb-1">
              <AnimatedCounter target={10} suffix="+" />
            </span>
            <span className="font-sans text-sm font-medium uppercase tracking-wide text-white/80">Agents d'intervention spécialisés</span>
          </div>
          <div className="flex flex-col items-center col-span-2 md:col-span-1 border-t md:border-t-0 pt-6 md:pt-0 mt-6 md:mt-0 border-white/20 md:border-none">
            <span className="font-display text-4xl md:text-5xl font-bold mb-1">
              <AnimatedCounter target={200} suffix="+" />
            </span>
            <span className="font-sans text-sm font-medium uppercase tracking-wide text-white/80">Sites sécurisés</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-display text-4xl md:text-5xl font-bold mb-1">24/7</span>
            <span className="font-sans text-sm font-medium uppercase tracking-wide text-white/80">Disponibilité</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-display text-4xl md:text-5xl font-bold mb-1">
              <AnimatedCounter target={98} suffix="%" />
            </span>
            <span className="font-sans text-sm font-medium uppercase tracking-wide text-white/80">Clients satisfaits</span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          NOTRE HISTOIRE
      ══════════════════════════════════════════ */}
      <Section id="histoire" variant="default" className="pt-24">
        <div className="mx-auto mb-16 max-w-[800px] text-center">
          <span className="inline-block rounded-full bg-brand/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand mb-4">Notre parcours</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold uppercase text-navy mb-4">Une histoire bâtie sur l&apos;excellence</h2>
          <p className="font-sans text-lg text-muted">
            Depuis sa création, G3S n&apos;a cessé de croître et d&apos;innover pour devenir un acteur incontournable de la sécurité privée dans le Grand Est.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-brand/20 before:via-brand before:to-brand/20">
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active mb-12 last:mb-0">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-brand text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <div className="h-3 w-3 bg-white rounded-full"></div>
            </div>
            <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6">
              <span className="font-display text-3xl font-bold text-sky mb-2 block">2010</span>
              <h3 className="font-display text-xl font-bold uppercase text-navy mb-3">Création de G3S</h3>
              <p className="font-sans text-sm text-muted leading-relaxed">
                Fondation de la société à Forbach avec une équipe de 5 agents. Les premiers contrats de gardiennage sont signés avec des entreprises locales de Moselle-Est.
              </p>
            </Card>
          </div>

          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active mb-12 last:mb-0">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-brand text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <div className="h-3 w-3 bg-white rounded-full"></div>
            </div>
            <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6">
              <span className="font-display text-3xl font-bold text-sky mb-2 block">2014</span>
              <h3 className="font-display text-xl font-bold uppercase text-navy mb-3">Expansion régionale</h3>
              <p className="font-sans text-sm text-muted leading-relaxed">
                L&apos;effectif passe à 50 agents. G3S étend ses activités à l&apos;ensemble de la Moselle et commence à sécuriser des sites industriels majeurs.
              </p>
            </Card>
          </div>

          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active mb-12 last:mb-0">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-brand text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <div className="h-3 w-3 bg-white rounded-full"></div>
            </div>
            <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6">
              <span className="font-display text-3xl font-bold text-sky mb-2 block">2018</span>
              <h3 className="font-display text-xl font-bold uppercase text-navy mb-3">Diversification des services</h3>
              <p className="font-sans text-sm text-muted leading-relaxed">
                Lancement des activités de sécurité électronique et de télésurveillance. G3S obtient ses premières certifications ISO et APSAD.
              </p>
            </Card>
          </div>

          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active mb-12 last:mb-0">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-brand text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <div className="h-3 w-3 bg-white rounded-full"></div>
            </div>
            <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6">
              <span className="font-display text-3xl font-bold text-sky mb-2 block">2021</span>
              <h3 className="font-display text-xl font-bold uppercase text-navy mb-3">Pôle Solutions Numériques</h3>
              <p className="font-sans text-sm text-muted leading-relaxed">
                Création du pôle cybersécurité et développement web. G3S devient un acteur global de la sécurité, combinant protection physique et numérique.
              </p>
            </Card>
          </div>

          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active mb-12 last:mb-0">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-brand text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <div className="h-3 w-3 bg-white rounded-full"></div>
            </div>
            <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6">
              <span className="font-display text-3xl font-bold text-sky mb-2 block">2025</span>
              <h3 className="font-display text-xl font-bold uppercase text-navy mb-3">Leader Grand Est</h3>
              <p className="font-sans text-sm text-muted leading-relaxed">
                Avec plus de 200 agents et 500 sites sécurisés, G3S ouvre de nouveaux bureaux à Metz et Strasbourg et prépare le lancement de son centre de formation.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* ══════════════════════════════════════════
          MISSION, VISION, VALEURS
      ══════════════════════════════════════════ */}
      <Section variant="mist">
        <div className="mx-auto mb-16 max-w-[800px] text-center">
          <span className="inline-block rounded-full bg-brand/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand mb-4">Nos fondations</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold uppercase text-navy mb-4">Mission, Vision &amp; Valeurs</h2>
          <p className="font-sans text-lg text-muted">
            Trois piliers qui guident chacune de nos actions et définissent notre identité.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center p-8 bg-gradient-to-br from-navy to-brand text-white border-0">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
              </svg>
            </div>
            <h3 className="font-display text-2xl font-bold uppercase mb-4">Notre Mission</h3>
            <p className="font-sans text-sm text-white/80 leading-relaxed">
              Protéger les biens, les personnes et les données de nos clients avec des solutions de sécurité sur mesure, en alliant rigueur opérationnelle et innovation technologique.
            </p>
          </Card>

          <Card className="text-center p-8 border-brand">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand/10 text-brand">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <h3 className="font-display text-2xl font-bold uppercase text-navy mb-4">Notre Vision</h3>
            <p className="font-sans text-sm text-muted leading-relaxed">
              Devenir la référence incontournable de la sécurité privée dans le Grand Est, en étant reconnus pour notre excellence opérationnelle et notre capacité d&apos;innovation.
            </p>
          </Card>

          <Card className="text-center p-8 border-brand">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand/10 text-brand">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
            <h3 className="font-display text-2xl font-bold uppercase text-navy mb-4">Nos Valeurs</h3>
            <p className="font-sans text-sm text-muted leading-relaxed">
              Intégrité, réactivité, discrétion et professionnalisme. Ces valeurs fondamentales sont au cœur de chacune de nos interventions et de nos relations clients.
            </p>
          </Card>
        </div>
      </Section>

      {/* ══════════════════════════════════════════
          NOS ENGAGEMENTS
      ══════════════════════════════════════════ */}
      <Section variant="default">
        <div className="mx-auto mb-16 max-w-[800px] text-center">
          <span className="inline-block rounded-full bg-brand/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand mb-4">Ce qui nous distingue</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold uppercase text-navy mb-4">Nos engagements</h2>
          <p className="font-sans text-lg text-muted">
            Chaque jour, nos équipes s&apos;engagent à maintenir les plus hauts standards de qualité et de fiabilité.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="flex flex-col gap-4 p-6 hover:-translate-y-1 transition-transform">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-sky text-white">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <h3 className="font-display text-xl font-bold uppercase text-navy">Qualité certifiée</h3>
            <p className="font-sans text-sm text-muted leading-relaxed">
              Processus certifiés et audités régulièrement. Nos agents suivent des formations continues pour garantir un niveau de service optimal.
            </p>
          </Card>

          <Card className="flex flex-col gap-4 p-6 hover:-translate-y-1 transition-transform">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-400 to-red-500 text-white">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <h3 className="font-display text-xl font-bold uppercase text-navy">Réactivité immédiate</h3>
            <p className="font-sans text-sm text-muted leading-relaxed">
              Un PC de sécurité opérationnel 24h/24, 7j/7 et des équipes d&apos;intervention capables d&apos;agir en moins de 30 minutes.
            </p>
          </Card>

          <Card className="flex flex-col gap-4 p-6 hover:-translate-y-1 transition-transform">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-gray-600 to-gray-800 text-white">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <h3 className="font-display text-xl font-bold uppercase text-navy">Confidentialité absolue</h3>
            <p className="font-sans text-sm text-muted leading-relaxed">
              Discrétion et respect du secret professionnel. Chaque agent est soumis à des obligations strictes de confidentialité.
            </p>
          </Card>

          <Card className="flex flex-col gap-4 p-6 hover:-translate-y-1 transition-transform">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3 className="font-display text-xl font-bold uppercase text-navy">Capital humain</h3>
            <p className="font-sans text-sm text-muted leading-relaxed">
              Recrutement exigeant, formation continue et accompagnement de carrière. Nos agents sont notre première force.
            </p>
          </Card>

          <Card className="flex flex-col gap-4 p-6 hover:-translate-y-1 transition-transform">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-teal-400 to-emerald-500 text-white">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
              </svg>
            </div>
            <h3 className="font-display text-xl font-bold uppercase text-navy">Innovation continue</h3>
            <p className="font-sans text-sm text-muted leading-relaxed">
              Veille technologique permanente et investissement dans les solutions les plus avancées : IA, IoT, vidéoprotection intelligente.
            </p>
          </Card>

          <Card className="flex flex-col gap-4 p-6 hover:-translate-y-1 transition-transform">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-navy to-brand text-white">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h3 className="font-display text-xl font-bold uppercase text-navy">Conformité réglementaire</h3>
            <p className="font-sans text-sm text-muted leading-relaxed">
              Autorisations CNAPS, certifications APSAD et conformité RGPD. Nous respectons l&apos;intégralité du cadre légal de la sécurité privée.
            </p>
          </Card>
        </div>
      </Section>

      {/* ══════════════════════════════════════════
          CERTIFICATIONS & AGRÉMENTS
      ══════════════════════════════════════════ */}
      <Section variant="mist">
        <div className="mx-auto mb-16 max-w-[800px] text-center">
          <span className="inline-block rounded-full bg-brand/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand mb-4">Reconnaissances</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold uppercase text-navy mb-4">Certifications &amp; Agréments</h2>
          <p className="font-sans text-lg text-muted">
            Des certifications qui attestent de notre rigueur et de notre professionnalisme.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
          <Card className="p-4 flex flex-col items-center justify-center gap-3">
            <div className="text-brand">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h3 className="font-display font-bold uppercase text-navy text-sm">CNAPS</h3>
          </Card>

          <Card className="p-4 flex flex-col items-center justify-center gap-3">
            <div className="text-brand">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <h3 className="font-display font-bold uppercase text-navy text-sm">APSAD</h3>
          </Card>

          <Card className="p-4 flex flex-col items-center justify-center gap-3">
            <div className="text-brand">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>
            <h3 className="font-display font-bold uppercase text-navy text-sm">ISO 9001</h3>
          </Card>

          <Card className="p-4 flex flex-col items-center justify-center gap-3">
            <div className="text-brand">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
              </svg>
            </div>
            <h3 className="font-display font-bold uppercase text-navy text-sm">SSIAP</h3>
          </Card>

          <Card className="p-4 flex flex-col items-center justify-center gap-3">
            <div className="text-brand">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <h3 className="font-display font-bold uppercase text-navy text-sm">RGPD</h3>
          </Card>

          <Card className="p-4 flex flex-col items-center justify-center gap-3">
            <div className="text-brand">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
            </div>
            <h3 className="font-display font-bold uppercase text-navy text-sm">CQP APS</h3>
          </Card>
        </div>
      </Section>

      {/* ══════════════════════════════════════════
          NOS IMPLANTATIONS
      ══════════════════════════════════════════ */}
      <Section variant="default">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block rounded-full bg-brand/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand mb-4">Nos implantations</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold uppercase text-navy mb-4">Présents dans tout le Grand Est</h2>
            <p className="font-sans text-lg text-muted mb-8">
              Depuis notre siège social à Forbach, nous rayonnons dans toute la région Grand Est.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="h-3 w-3 rounded-full bg-brand mt-1.5 shrink-0 shadow-[0_0_0_4px_rgba(29,95,204,0.2)]"></div>
                <div>
                  <h4 className="font-display text-lg font-bold text-navy">Forbach</h4>
                  <p className="font-sans text-sm text-muted">Siège social — 2 Rue des Charrons, 57600</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <Card className="p-8 bg-mist overflow-hidden relative">
              <div className="aspect-[4/3] rounded-lg shadow-sm border border-line overflow-hidden relative">
                <iframe 
                  src="https://maps.google.com/maps?q=2%20Rue%20des%20Charrons,%2057600%20Forbach&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                  className="absolute inset-0 w-full h-full border-0" 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Carte Google Maps - Siège social G3S à Forbach"
                ></iframe>
              </div>
              <div className="mt-4 flex items-center gap-2 font-sans text-xs font-semibold text-brand">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                Zone d&apos;intervention : Moselle, Meurthe-et-Moselle, Bas-Rhin, Haut-Rhin
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* ══════════════════════════════════════════
          CTA FINAL
      ══════════════════════════════════════════ */}
      <section className="bg-navy py-20 text-center">
        <div className="mx-auto max-w-[800px] px-6">
          <h2 className="font-display text-3xl md:text-5xl font-bold uppercase text-white mb-6">Envie de rejoindre nos clients satisfaits ?</h2>
          <p className="font-sans text-lg text-mist/80 mb-10 leading-relaxed">
            Contactez-nous dès aujourd&apos;hui pour un audit de sécurité gratuit et sans engagement.
            Nos experts analysent vos besoins et vous proposent une solution sur mesure.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <ContactCTA />
            <a href="tel:0356990900" className="inline-flex items-center justify-center gap-2 rounded px-6 py-3 font-sans font-semibold text-white bg-white/10 hover:bg-white/20 transition-colors border-2 border-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-sky">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              03 56 99 09 00
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
