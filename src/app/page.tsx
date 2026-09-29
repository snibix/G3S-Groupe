import Link from 'next/link';
import ContactCTA from '@/components/ContactCTA';

export default function Home() {
  return (
    <main>

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-content">
          <span className="hero-badge">🛡️ Sécurité privée depuis 2010</span>
          <h1 className="hero-title">Votre sécurité, notre priorité absolue</h1>
          <p className="hero-subtitle">
            G3S vous accompagne avec des solutions de sécurité sur mesure, alliant technologie de pointe et expertise humaine pour garantir votre tranquillité d&apos;esprit.
          </p>
          <div className="hero-actions">
            <Link href="/expertises" className="btn btn-primary">Découvrir nos expertises</Link>
            <Link href="/decouvrir" className="btn btn-outline">En savoir plus</Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CHIFFRES CLÉS
      ══════════════════════════════════════════ */}
      <section className="section-stats">
        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-number">+15</span>
            <span className="stat-label">Années d&apos;expérience</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">200+</span>
            <span className="stat-label">Agents qualifiés</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">500+</span>
            <span className="stat-label">Sites sécurisés</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">24/7</span>
            <span className="stat-label">Disponibilité</span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          POURQUOI G3S
      ══════════════════════════════════════════ */}
      <section className="section-why">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">Nos engagements</span>
            <h2 className="section-title">Pourquoi choisir G3S ?</h2>
            <p className="section-desc">
              Une approche professionnelle et humaine de la sécurité, reconnue par nos clients et partenaires.
            </p>
          </div>

          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h3 className="why-title">Expertise certifiée</h3>
              <p className="why-desc">
                Nos agents sont rigoureusement sélectionnés, formés et certifiés pour répondre aux plus hautes exigences du secteur (CQP, SSIAP).
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <h3 className="why-title">Réactivité 24/7</h3>
              <p className="why-desc">
                Notre PC de sécurité et nos équipes mobiles sont opérationnels jour et nuit pour une intervention immédiate en cas d&apos;urgence.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3 className="why-title">Approche sur-mesure</h3>
              <p className="why-desc">
                Chaque client est unique. Nous réalisons un audit complet de vos vulnérabilités avant de proposer une stratégie de protection adaptée.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
              </div>
              <h3 className="why-title">Technologie avancée</h3>
              <p className="why-desc">
                Vidéosurveillance intelligente, contrôle d&apos;accès biométrique, télésurveillance : nous intégrons les technologies les plus récentes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          NOS EXPERTISES
      ══════════════════════════════════════════ */}
      <section className="section-services">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">Nos métiers</span>
            <h2 className="section-title">Nos domaines d&apos;intervention</h2>
            <p className="section-desc">
              Une gamme complète de prestations pour une sécurité globale et adaptée à chaque environnement.
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card service-card-large">
              <div className="service-card-icon-area service-gradient-1">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>
              <h3 className="service-card-title">Gardiennage & Accueil</h3>
              <p className="service-card-desc">
                Sécurisation de vos sites par la présence dissuasive et professionnelle de nos agents qualifiés. Contrôle d&apos;accès, rondes et filtrage.
              </p>
              <Link href="/expertises" className="service-card-link">
                En savoir plus
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
            </div>

            <div className="service-card">
              <div className="service-card-icon-area service-gradient-2">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>
                </svg>
              </div>
              <h3 className="service-card-title">Télésurveillance</h3>
              <p className="service-card-desc">
                Systèmes de vidéosurveillance de pointe couplés à une équipe d&apos;intervention rapide, 24h/24.
              </p>
              <Link href="/expertises" className="service-card-link">
                En savoir plus
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
            </div>

            <div className="service-card">
              <div className="service-card-icon-area service-gradient-3">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              </div>
              <h3 className="service-card-title">Sécurité Incendie</h3>
              <p className="service-card-desc">
                Prévention, assistance et intervention par nos agents certifiés SSIAP pour protéger vos ERP et IGH.
              </p>
              <Link href="/expertises" className="service-card-link">
                En savoir plus
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
            </div>

            <div className="service-card">
              <div className="service-card-icon-area service-gradient-4">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3 className="service-card-title">Sécurité Événementielle</h3>
              <p className="service-card-desc">
                Dispositifs de sécurité pour vos événements : concerts, salons, manifestations sportives et culturelles.
              </p>
              <Link href="/expertises" className="service-card-link">
                En savoir plus
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
            </div>

            <div className="service-card">
              <div className="service-card-icon-area service-gradient-5">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                </svg>
              </div>
              <h3 className="service-card-title">Audit & Conseil</h3>
              <p className="service-card-desc">
                Analyse complète de vos risques et recommandations personnalisées pour optimiser votre dispositif de sûreté.
              </p>
              <Link href="/expertises" className="service-card-link">
                En savoir plus
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTEURS D'ACTIVITÉ
      ══════════════════════════════════════════ */}
      <section className="section-sectors">
        <div className="section-container">
          <div className="sectors-layout">
            <div className="sectors-text">
              <span className="section-tag">Nos secteurs</span>
              <h2 className="section-title" style={{ textAlign: 'left' }}>Des solutions adaptées à chaque secteur</h2>
              <p className="section-desc" style={{ textAlign: 'left', maxWidth: 'none' }}>
                G3S intervient dans de nombreux secteurs d&apos;activité et adapte ses prestations aux contraintes spécifiques de chaque environnement.
              </p>
              <Link href="/secteurs" className="btn btn-primary" style={{ marginTop: '2rem' }}>
                Voir tous nos secteurs
              </Link>
            </div>
            <div className="sectors-list">
              <div className="sector-item">
                <div className="sector-icon">🏢</div>
                <div>
                  <h4 className="sector-title">Tertiaire & Bureaux</h4>
                  <p className="sector-desc">Sièges sociaux, tours de bureaux, espaces de coworking</p>
                </div>
              </div>
              <div className="sector-item">
                <div className="sector-icon">🏭</div>
                <div>
                  <h4 className="sector-title">Industrie & Logistique</h4>
                  <p className="sector-desc">Usines, entrepôts, zones industrielles</p>
                </div>
              </div>
              <div className="sector-item">
                <div className="sector-icon">🏥</div>
                <div>
                  <h4 className="sector-title">Santé & Établissements publics</h4>
                  <p className="sector-desc">Hôpitaux, cliniques, administrations, écoles</p>
                </div>
              </div>
              <div className="sector-item">
                <div className="sector-icon">🛍️</div>
                <div>
                  <h4 className="sector-title">Commerce & Grande distribution</h4>
                  <p className="sector-desc">Centres commerciaux, boutiques, enseignes</p>
                </div>
              </div>
              <div className="sector-item">
                <div className="sector-icon">🎪</div>
                <div>
                  <h4 className="sector-title">Événementiel & Culture</h4>
                  <p className="sector-desc">Concerts, festivals, salons, musées</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA FINAL
      ══════════════════════════════════════════ */}
      <section className="section-cta">
        <div className="cta-container">
          <div className="cta-content">
            <h2 className="cta-title">Prêt à sécuriser votre environnement ?</h2>
            <p className="cta-desc">
              Contactez nos experts dès aujourd&apos;hui pour un audit de sécurité gratuit et sans engagement. Nous définirons ensemble la stratégie la plus adaptée à vos besoins.
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
