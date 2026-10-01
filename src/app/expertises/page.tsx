import Link from 'next/link';
import ContactCTA from '@/components/ContactCTA';
import { Section } from '@/components/Section';
import { Card } from '@/components/Card';

export default function ExpertisesPage() {
  return (
    <main>

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="relative min-h-[60vh] flex flex-col justify-center bg-navy pt-40 pb-20 z-0">
        <div className="absolute inset-0 z-[-1] bg-[url('/grid.svg')] bg-center opacity-10"></div>
        <div className="mx-auto w-full max-w-[1200px] px-6 text-center">
          <span className="inline-block rounded-full bg-brand/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-sky mb-4">Nos expertises</span>
          <h1 className="mx-auto max-w-4xl font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-white mb-6">
            Cinq pôles d&apos;excellence au service de votre sécurité
          </h1>
          <p className="mx-auto max-w-3xl font-sans text-lg text-mist/80 mb-10 leading-relaxed">
            G3S couvre l&apos;ensemble de la chaîne de valeur de la sécurité : électronique, humaine,
            rapprochée, formation et solutions numériques. Chaque pôle est piloté par des experts dédiés.
          </p>

          {/* Navigation rapide */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a href="#electronique" className="inline-flex items-center gap-2 rounded-full border border-line/20 bg-white/5 px-4 py-2 font-sans text-sm font-medium text-white transition-colors hover:bg-brand/20 hover:border-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-sky">
              <span className="h-2 w-2 rounded-full bg-brand"></span>
              Sécurité Électronique
            </a>
            <a href="#privee" className="inline-flex items-center gap-2 rounded-full border border-line/20 bg-white/5 px-4 py-2 font-sans text-sm font-medium text-white transition-colors hover:bg-brand/20 hover:border-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-sky">
              <span className="h-2 w-2 rounded-full bg-sky"></span>
              Sécurité Privée
            </a>
            <a href="#cpo" className="inline-flex items-center gap-2 rounded-full border border-line/20 bg-white/5 px-4 py-2 font-sans text-sm font-medium text-white transition-colors hover:bg-brand/20 hover:border-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-sky">
              <span className="h-2 w-2 rounded-full bg-mist"></span>
              Protection Rapprochée
            </a>
            <a href="#formation" className="inline-flex items-center gap-2 rounded-full border border-line/20 bg-white/5 px-4 py-2 font-sans text-sm font-medium text-white transition-colors hover:bg-brand/20 hover:border-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-sky">
              <span className="h-2 w-2 rounded-full bg-muted"></span>
              Formation
            </a>
            <a href="#numerique" className="inline-flex items-center gap-2 rounded-full border border-line/20 bg-white/5 px-4 py-2 font-sans text-sm font-medium text-white transition-colors hover:bg-brand/20 hover:border-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-sky">
              <span className="h-2 w-2 rounded-full bg-line"></span>
              Solutions Numériques
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          01 — Sécurité Électronique
      ══════════════════════════════════════════ */}
      <Section id="electronique" variant="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual card */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-square w-full max-w-md mx-auto rounded-2xl bg-gradient-to-br from-navy to-brand p-8 text-white shadow-xl overflow-hidden flex flex-col justify-between">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>
                </svg>
              </div>
              <span className="font-display text-8xl font-bold opacity-20">01</span>
              <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full border-[20px] border-white/5"></div>
              <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full border-[15px] border-white/5"></div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-4 border-b-2 border-line pb-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand/10 font-display text-xl font-bold text-brand">01</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold uppercase text-navy">Sécurité Électronique</h2>
            </div>
            <p className="font-sans text-lg text-muted mb-4">
              Des technologies de pointe pour protéger vos infrastructures, installées et maintenues par nos experts certifiés.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-mist text-brand">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold uppercase text-navy mb-1">Installation &amp; Conception</h3>
                  <p className="font-sans text-sm text-muted leading-relaxed">
                    Vidéoprotection HD/4K, systèmes d&apos;alarme intrusion, contrôle d&apos;accès biométrique et par badge. Conception sur mesure adaptée à vos locaux.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-mist text-brand">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c.26.604.852.997 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold uppercase text-navy mb-1">Maintenance préventive &amp; curative</h3>
                  <p className="font-sans text-sm text-muted leading-relaxed">
                    Contrats sur mesure garantissant le fonctionnement optimal de vos équipements. Interventions rapides en cas de panne.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-mist text-brand">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold uppercase text-navy mb-1">Hotline 24/7 &amp; gestion de crise</h3>
                  <p className="font-sans text-sm text-muted leading-relaxed">
                    Centre d&apos;appels dédié disponible 24h/24 et 7j/7 pour la gestion des alertes, la levée de doute et la coordination des interventions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ══════════════════════════════════════════
          02 — Sécurité Privée
      ══════════════════════════════════════════ */}
      <Section id="privee" variant="mist">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Content (First on Desktop via order) */}
          <div className="lg:col-span-7 flex flex-col gap-6 lg:order-1 order-2">
            <div className="flex items-center gap-4 border-b-2 border-line pb-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy/10 font-display text-xl font-bold text-navy">02</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold uppercase text-navy">Sécurité Privée</h2>
            </div>
            <p className="font-sans text-lg text-muted mb-4">
              Des agents qualifiés et expérimentés pour assurer la protection physique de vos biens, de vos collaborateurs et de vos événements.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-navy shadow-sm">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold uppercase text-navy mb-1">Protection des biens</h3>
                  <p className="font-sans text-sm text-muted leading-relaxed">
                    Gardiennage, rondes de surveillance jour/nuit, contrôle d&apos;accès et transfert de valeurs avec des protocoles stricts.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-navy shadow-sm">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold uppercase text-navy mb-1">Sécurité événementielle</h3>
                  <p className="font-sans text-sm text-muted leading-relaxed">
                    Dispositifs complets pour concerts, salons, manifestations sportives et culturelles. Palpations, filtrage et gestion des flux.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-navy shadow-sm">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold uppercase text-navy mb-1">Conseil, audit sûreté &amp; sécurité</h3>
                  <p className="font-sans text-sm text-muted leading-relaxed">
                    Analyse de vos risques, recommandations personnalisées et accompagnement dans la mise en œuvre de votre politique de sûreté.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Visual card (Second on desktop via order) */}
          <div className="lg:col-span-5 relative lg:order-2 order-1">
            <div className="relative aspect-square w-full max-w-md mx-auto rounded-2xl bg-gradient-to-br from-gray-800 to-navy p-8 text-white shadow-xl overflow-hidden flex flex-col justify-between">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <span className="font-display text-8xl font-bold opacity-20">02</span>
              <div className="absolute -right-8 -bottom-8 h-40 w-40 rounded-full border-[20px] border-white/5"></div>
              <div className="absolute top-10 -left-10 h-32 w-32 rounded-full border-[15px] border-white/5"></div>
            </div>
          </div>
        </div>
      </Section>

      {/* ══════════════════════════════════════════
          03 — Protection Rapprochée (CPO)
      ══════════════════════════════════════════ */}
      <Section id="cpo" variant="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual card */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-square w-full max-w-md mx-auto rounded-2xl bg-gradient-to-br from-brand to-sky p-8 text-white shadow-xl overflow-hidden flex flex-col justify-between">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <span className="font-display text-8xl font-bold opacity-20">03</span>
              <div className="absolute -left-10 -bottom-10 h-48 w-48 rounded-full border-[24px] border-white/10"></div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 border-b-2 border-line pb-4">
              <div className="flex items-center gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky/10 font-display text-xl font-bold text-sky">03</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold uppercase text-navy">Protection Rapprochée</h2>
              </div>
              <span className="inline-block self-start sm:self-auto rounded bg-mist px-2.5 py-1 text-xs font-bold uppercase text-muted border border-line">Prochainement</span>
            </div>
            <p className="font-sans text-lg text-muted mb-4">
              Une offre dédiée à la protection des personnes, avec des agents spécialisés (CPO) formés aux plus hauts standards internationaux.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sky/10 text-brand">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold uppercase text-navy mb-1">Protection des personnes</h3>
                  <p className="font-sans text-sm text-muted leading-relaxed">
                    Agents de protection rapprochée certifiés pour la sécurité de dirigeants, personnalités et familles en toute discrétion.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sky/10 text-brand">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold uppercase text-navy mb-1">Sécurité des déplacements</h3>
                  <p className="font-sans text-sm text-muted leading-relaxed">
                    Escorte, reconnaissance d&apos;itinéraires et logistique sécurisée pour les déplacements en France et à l&apos;international.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ══════════════════════════════════════════
          04 — Formation Professionnelle
      ══════════════════════════════════════════ */}
      <Section id="formation" variant="mist">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Content */}
          <div className="lg:col-span-7 flex flex-col gap-6 lg:order-1 order-2">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 border-b-2 border-line pb-4">
              <div className="flex items-center gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy/10 font-display text-xl font-bold text-navy">04</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold uppercase text-navy">Formation Professionnelle</h2>
              </div>
              <span className="inline-block self-start sm:self-auto rounded bg-white px-2.5 py-1 text-xs font-bold uppercase text-muted border border-line">Prochainement</span>
            </div>
            <p className="font-sans text-lg text-muted mb-4">
              Un centre de formation dédié aux métiers de la sécurité privée, avec des programmes conformes aux référentiels du CNAPS.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-navy shadow-sm">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold uppercase text-navy mb-1">Formations CQP APS</h3>
                  <p className="font-sans text-sm text-muted leading-relaxed">
                    Certificat de Qualification Professionnelle d&apos;Agent de Prévention et de Sécurité. Formation initiale et MAC (Maintien et Actualisation des Compétences).
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-navy shadow-sm">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold uppercase text-navy mb-1">Formations SSIAP 1, 2 &amp; 3</h3>
                  <p className="font-sans text-sm text-muted leading-relaxed">
                    Service de Sécurité Incendie et d&apos;Assistance à Personnes. Formations initiales et recyclages pour les 3 niveaux.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-navy shadow-sm">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold uppercase text-navy mb-1">SST &amp; Habilitations</h3>
                  <p className="font-sans text-sm text-muted leading-relaxed">
                    Sauveteur Secouriste du Travail, habilitations électriques et formations complémentaires pour le renouvellement des cartes professionnelles.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Visual card */}
          <div className="lg:col-span-5 relative lg:order-2 order-1">
            <div className="relative aspect-square w-full max-w-md mx-auto rounded-2xl bg-gradient-to-br from-gray-700 to-gray-900 p-8 text-white shadow-xl overflow-hidden flex flex-col justify-between">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                </svg>
              </div>
              <span className="font-display text-8xl font-bold opacity-20">04</span>
              <div className="absolute right-0 top-1/2 h-32 w-32 -translate-y-1/2 translate-x-1/2 rotate-45 border-[16px] border-white/5"></div>
            </div>
          </div>
        </div>
      </Section>

      {/* ══════════════════════════════════════════
          05 — Solutions Numériques
      ══════════════════════════════════════════ */}
      <Section id="numerique" variant="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual card */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-square w-full max-w-md mx-auto rounded-2xl bg-gradient-to-br from-blue-900 to-indigo-900 p-8 text-white shadow-xl overflow-hidden flex flex-col justify-between">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
                </svg>
              </div>
              <span className="font-display text-8xl font-bold opacity-20">05</span>
              <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]"></div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-4 border-b-2 border-line pb-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand/10 font-display text-xl font-bold text-brand">05</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold uppercase text-navy">Solutions Numériques</h2>
            </div>
            <p className="font-sans text-lg text-muted mb-4">
              Protection de vos systèmes d&apos;information et développement de plateformes web sécurisées pour piloter vos dispositifs.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-mist text-brand">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold uppercase text-navy mb-1">Cybersécurité</h3>
                  <p className="font-sans text-sm text-muted leading-relaxed">
                    Audit de vulnérabilité, pare-feu, monitoring réseau et plan de réponse aux incidents pour protéger vos données sensibles.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-mist text-brand">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold uppercase text-navy mb-1">Développement web sécurisé</h3>
                  <p className="font-sans text-sm text-muted leading-relaxed">
                    Conception de plateformes web, interfaces de pilotage et tableaux de bord pour la gestion centralisée de vos dispositifs de sécurité.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-mist text-brand">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold uppercase text-navy mb-1">Intégration IoT &amp; IA</h3>
                  <p className="font-sans text-sm text-muted leading-relaxed">
                    Capteurs connectés, analyse vidéo par intelligence artificielle et automatisation des processus de surveillance pour une sécurité prédictive.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ══════════════════════════════════════════
          PROCESSUS
      ══════════════════════════════════════════ */}
      <Section variant="mist">
        <div className="mx-auto mb-16 max-w-[800px] text-center">
          <span className="inline-block rounded-full bg-brand/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand mb-4">Notre méthode</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold uppercase text-navy mb-4">Comment nous travaillons</h2>
          <p className="font-sans text-lg text-muted">
            Un processus structuré en 4 étapes pour garantir une solution parfaitement adaptée à vos enjeux.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="relative overflow-hidden pt-12">
            <div className="absolute -top-4 -right-4 font-display text-8xl font-bold text-line/40">1</div>
            <h3 className="font-display text-xl font-bold uppercase text-navy mb-3 relative z-10">Audit &amp; Diagnostic</h3>
            <p className="font-sans text-sm text-muted leading-relaxed relative z-10">
              Analyse complète de vos vulnérabilités, identification des risques et évaluation de votre dispositif existant.
            </p>
          </Card>
          <Card className="relative overflow-hidden pt-12">
            <div className="absolute -top-4 -right-4 font-display text-8xl font-bold text-line/40">2</div>
            <h3 className="font-display text-xl font-bold uppercase text-navy mb-3 relative z-10">Préconisations</h3>
            <p className="font-sans text-sm text-muted leading-relaxed relative z-10">
              Élaboration d&apos;un plan de sécurité sur mesure avec recommandations techniques et humaines adaptées à votre budget.
            </p>
          </Card>
          <Card className="relative overflow-hidden pt-12">
            <div className="absolute -top-4 -right-4 font-display text-8xl font-bold text-line/40">3</div>
            <h3 className="font-display text-xl font-bold uppercase text-navy mb-3 relative z-10">Déploiement</h3>
            <p className="font-sans text-sm text-muted leading-relaxed relative z-10">
              Mise en place du dispositif par nos équipes spécialisées, formation de vos collaborateurs et tests de validation.
            </p>
          </Card>
          <Card className="relative overflow-hidden pt-12">
            <div className="absolute -top-4 -right-4 font-display text-8xl font-bold text-line/40">4</div>
            <h3 className="font-display text-xl font-bold uppercase text-navy mb-3 relative z-10">Suivi continu</h3>
            <p className="font-sans text-sm text-muted leading-relaxed relative z-10">
              Reporting régulier, ajustements et amélioration continue du dispositif. Un interlocuteur dédié vous accompagne.
            </p>
          </Card>
        </div>
      </Section>

      {/* ══════════════════════════════════════════
          CTA FINAL
      ══════════════════════════════════════════ */}
      <section className="bg-navy py-20 text-center">
        <div className="mx-auto max-w-[800px] px-6">
          <h2 className="font-display text-3xl md:text-5xl font-bold uppercase text-white mb-6">Un projet de sécurité ? Parlons-en.</h2>
          <p className="font-sans text-lg text-mist/80 mb-10 leading-relaxed">
            Nos experts analysent vos besoins et vous proposent une solution sur mesure,
            adaptée à votre secteur et à vos contraintes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <ContactCTA />
            <a href="tel:0356990900" className="inline-flex items-center justify-center gap-2 rounded px-6 py-3 font-sans font-semibold text-white bg-white/10 hover:bg-white/20 transition-colors border-2 border-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-sky">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              03 56 99 09 00
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
