import ContactCTA from '@/components/ContactCTA';

export default function ExpertisesPage() {
  return (
    <main>

      {/* Hero */}
      <section className="expertise-hero">
        <div className="section-container">
          <span className="section-tag">Nos expertises</span>
          <h1 className="expertise-hero-title">Sécurité, protection et formation</h1>
          <p className="expertise-hero-desc">
            G3S couvre l&apos;ensemble de la chaîne de valeur de la sécurité : électronique, humaine, rapprochée, formation et solutions numériques.
          </p>
        </div>
      </section>

      {/* 01 — Sécurité Électronique */}
      <section className="expertise-section" id="electronique">
        <div className="section-container">
          <div className="expertise-block">
            <div className="expertise-block-header">
              <div className="expertise-number">01</div>
              <div>
                <h2 className="expertise-block-title">Sécurité Électronique</h2>
                <p className="expertise-block-subtitle">
                  Des technologies de pointe pour protéger vos infrastructures, installées et maintenues par nos experts.
                </p>
              </div>
            </div>

            <div className="expertise-items-grid">
              <div className="expertise-item">
                <div className="expertise-item-icon ei-gradient-1">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>
                  </svg>
                </div>
                <h3 className="expertise-item-title">Installation</h3>
                <p className="expertise-item-desc">
                  Vidéoprotection, systèmes d&apos;alarme intrusion et contrôle d&apos;accès. Nous concevons et installons des dispositifs adaptés à vos locaux.
                </p>
              </div>

              <div className="expertise-item">
                <div className="expertise-item-icon ei-gradient-1">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c.26.604.852.997 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                  </svg>
                </div>
                <h3 className="expertise-item-title">Maintenance électronique</h3>
                <p className="expertise-item-desc">
                  Contrats de maintenance préventive et curative pour garantir le fonctionnement optimal de vos équipements de sécurité.
                </p>
              </div>

              <div className="expertise-item">
                <div className="expertise-item-icon ei-gradient-1">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <h3 className="expertise-item-title">Hotline 24/7 et gestion de crise</h3>
                <p className="expertise-item-desc">
                  Un centre d&apos;appels dédié disponible 24h/24 et 7j/7 pour la gestion des alertes et la coordination des interventions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 — Sécurité Privée */}
      <section className="expertise-section expertise-section-alt" id="privee">
        <div className="section-container">
          <div className="expertise-block">
            <div className="expertise-block-header">
              <div className="expertise-number">02</div>
              <div>
                <h2 className="expertise-block-title">Sécurité Privée</h2>
                <p className="expertise-block-subtitle">
                  Des agents qualifiés et expérimentés pour assurer la protection physique de vos biens et de vos événements.
                </p>
              </div>
            </div>

            <div className="expertise-items-grid">
              <div className="expertise-item">
                <div className="expertise-item-icon ei-gradient-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <h3 className="expertise-item-title">Protection des biens</h3>
                <p className="expertise-item-desc">
                  Gardiennage, rondes de surveillance, contrôle d&apos;accès et transfert de valeurs avec des protocoles stricts.
                </p>
              </div>

              <div className="expertise-item">
                <div className="expertise-item-icon ei-gradient-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <h3 className="expertise-item-title">Événementiel</h3>
                <p className="expertise-item-desc">
                  Dispositifs complets pour vos événements : concerts, salons, manifestations sportives et culturelles.
                </p>
              </div>

              <div className="expertise-item">
                <div className="expertise-item-icon ei-gradient-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
                  </svg>
                </div>
                <h3 className="expertise-item-title">Conseil, audit sûreté et sécurité</h3>
                <p className="expertise-item-desc">
                  Analyse de vos risques, recommandations personnalisées et accompagnement dans votre politique de sûreté.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — Protection Rapprochée (CPO) */}
      <section className="expertise-section" id="cpo">
        <div className="section-container">
          <div className="expertise-block">
            <div className="expertise-block-header">
              <div className="expertise-number">03</div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <h2 className="expertise-block-title">Protection Rapprochée (CPO)</h2>
                  <span className="expertise-badge-soon">Prochainement</span>
                </div>
                <p className="expertise-block-subtitle">
                  Une offre dédiée à la protection des personnes, avec des agents spécialisés formés aux plus hauts standards.
                </p>
              </div>
            </div>

            <div className="expertise-items-grid">
              <div className="expertise-item">
                <div className="expertise-item-icon ei-gradient-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
                <h3 className="expertise-item-title">Protection des personnes</h3>
                <p className="expertise-item-desc">
                  Agents de protection rapprochée certifiés pour la sécurité de dirigeants, personnalités et familles en toute discrétion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04 — Formation Professionnelle */}
      <section className="expertise-section expertise-section-alt" id="formation">
        <div className="section-container">
          <div className="expertise-block">
            <div className="expertise-block-header">
              <div className="expertise-number">04</div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <h2 className="expertise-block-title">Formation Professionnelle</h2>
                  <span className="expertise-badge-soon">Prochainement</span>
                </div>
                <p className="expertise-block-subtitle">
                  Un centre de formation dédié aux métiers de la sécurité privée.
                </p>
              </div>
            </div>

            <div className="expertise-items-grid">
              <div className="expertise-item">
                <div className="expertise-item-icon ei-gradient-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                  </svg>
                </div>
                <h3 className="expertise-item-title">Formation pour adultes en sécurité privée</h3>
                <p className="expertise-item-desc">
                  Formations APS, SSIAP, SST, MAC et bien plus. Programmes conformes aux référentiels du CNAPS pour l&apos;obtention et le renouvellement des cartes professionnelles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05 — Solutions Numériques */}
      <section className="expertise-section" id="numerique">
        <div className="section-container">
          <div className="expertise-block">
            <div className="expertise-block-header">
              <div className="expertise-number">05</div>
              <div>
                <h2 className="expertise-block-title">Solutions Numériques</h2>
                <p className="expertise-block-subtitle">
                  Protection de vos systèmes d&apos;information et développement de plateformes web sécurisées.
                </p>
              </div>
            </div>

            <div className="expertise-items-grid">
              <div className="expertise-item">
                <div className="expertise-item-icon ei-gradient-5">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <h3 className="expertise-item-title">Cybersécurité</h3>
                <p className="expertise-item-desc">
                  Audit de vulnérabilité, pare-feu, monitoring et plan de réponse aux incidents pour protéger vos données et vos réseaux.
                </p>
              </div>

              <div className="expertise-item">
                <div className="expertise-item-icon ei-gradient-5">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
                  </svg>
                </div>
                <h3 className="expertise-item-title">Développement web</h3>
                <p className="expertise-item-desc">
                  Conception de plateformes web sécurisées, interfaces de pilotage et tableaux de bord pour la gestion de vos dispositifs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-cta">
        <div className="cta-container">
          <div className="cta-content">
            <h2 className="cta-title">Un projet de sécurité ? Parlons-en.</h2>
            <p className="cta-desc">
              Nos experts analysent vos besoins et vous proposent une solution sur mesure, adaptée à votre secteur et à vos contraintes.
            </p>
            <div className="cta-actions">
              <ContactCTA />
              <a href="tel:0356990900" className="cta-phone">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                03 56 99 09 00
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
