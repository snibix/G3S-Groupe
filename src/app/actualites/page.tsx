'use client';

import Link from 'next/link';

const articles = [
  {
    id: 1,
    category: 'Entreprise',
    date: '25 septembre 2025',
    title: 'G3S renforce sa présence dans le Grand Est',
    excerpt: 'Avec l\'ouverture de nouveaux bureaux à Metz et Strasbourg, G3S confirme son ambition de devenir l\'acteur de référence de la sécurité privée dans toute la région Grand Est.',
    featured: true,
  },
  {
    id: 2,
    category: 'Réglementation',
    date: '18 septembre 2025',
    title: 'Nouvelles obligations CNAPS 2025 : ce qui change pour la sécurité privée',
    excerpt: 'Le CNAPS a publié de nouvelles directives concernant les cartes professionnelles et les formations obligatoires. Décryptage des changements à connaître.',
    featured: true,
  },
  {
    id: 3,
    category: 'Innovation',
    date: '10 septembre 2025',
    title: 'Vidéoprotection intelligente : G3S déploie l\'IA sur ses dispositifs',
    excerpt: 'Notre équipe technique intègre désormais des algorithmes d\'intelligence artificielle à nos systèmes de vidéosurveillance pour une détection des menaces en temps réel.',
    featured: true,
  },
  {
    id: 4,
    category: 'Événement',
    date: '2 septembre 2025',
    title: 'Retour sur la sécurisation du Festival de Forbach 2025',
    excerpt: 'Plus de 30 agents G3S mobilisés pour garantir la sécurité des 15 000 festivaliers. Un dispositif complet mêlant filtrage, rondes et vidéosurveillance.',
  },
  {
    id: 5,
    category: 'Formation',
    date: '20 août 2025',
    title: 'Lancement de notre programme de formation SSIAP',
    excerpt: 'G3S prépare l\'ouverture de son centre de formation dédié aux métiers de la sécurité incendie. Les premières sessions SSIAP 1 et 2 seront disponibles prochainement.',
  },
  {
    id: 6,
    category: 'Partenariat',
    date: '5 août 2025',
    title: 'Nouveau partenariat avec le groupe Vinci Immobilier',
    excerpt: 'G3S a été sélectionné pour assurer la sécurité et le gardiennage de plusieurs résidences et chantiers du groupe Vinci dans la région Grand Est.',
  },
  {
    id: 7,
    category: 'Cybersécurité',
    date: '15 juillet 2025',
    title: 'Cyberattaques : comment protéger votre entreprise en 2025',
    excerpt: 'Face à la recrudescence des cybermenaces, notre pôle Solutions Numériques détaille les bonnes pratiques et les solutions de protection indispensables.',
  },
  {
    id: 8,
    category: 'Recrutement',
    date: '1 juillet 2025',
    title: 'G3S recrute : 50 nouveaux postes d\'agents de sécurité',
    excerpt: 'Dans le cadre de notre développement, nous recherchons des agents de sécurité qualifiés (CQP APS, SSIAP) pour renforcer nos équipes sur l\'ensemble de nos sites.',
  },
];

const categoryColors: Record<string, string> = {
  'Entreprise': '#1e40af',
  'Réglementation': '#0f766e',
  'Innovation': '#7c3aed',
  'Événement': '#c2410c',
  'Formation': '#b45309',
  'Partenariat': '#0369a1',
  'Cybersécurité': '#475569',
  'Recrutement': '#059669',
};

export default function ActualitesPage() {
  const featured = articles.filter(a => a.featured);
  const others = articles.filter(a => !a.featured);

  return (
    <main>

      {/* Hero */}
      <section className="actu-hero">
        <div className="section-container">
          <span className="section-tag">Actualités</span>
          <h1 className="actu-hero-title">Restez informé</h1>
          <p className="actu-hero-desc">
            Suivez les dernières nouvelles de G3S, les évolutions du secteur de la sécurité privée et nos conseils d&apos;experts.
          </p>
        </div>
      </section>

      {/* Articles à la une */}
      <section className="actu-section">
        <div className="section-container">
          <h2 className="actu-section-title">À la une</h2>
          <div className="actu-featured-grid">
            {featured.map((article) => (
              <article key={article.id} className="actu-card actu-card-featured">
                <div className="actu-card-img" style={{ background: `linear-gradient(135deg, ${categoryColors[article.category]}22, ${categoryColors[article.category]}11)` }}>
                  <span className="actu-card-category" style={{ background: categoryColors[article.category] }}>
                    {article.category}
                  </span>
                </div>
                <div className="actu-card-body">
                  <time className="actu-card-date">{article.date}</time>
                  <h3 className="actu-card-title">{article.title}</h3>
                  <p className="actu-card-excerpt">{article.excerpt}</p>
                  <span className="actu-card-link">
                    Lire l&apos;article
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Tous les articles */}
      <section className="actu-section actu-section-alt">
        <div className="section-container">
          <h2 className="actu-section-title">Toutes nos actualités</h2>
          <div className="actu-list-grid">
            {others.map((article) => (
              <article key={article.id} className="actu-card">
                <div className="actu-card-body">
                  <div className="actu-card-meta">
                    <span className="actu-card-category-inline" style={{ color: categoryColors[article.category] }}>
                      {article.category}
                    </span>
                    <span className="actu-card-date-sep">•</span>
                    <time className="actu-card-date">{article.date}</time>
                  </div>
                  <h3 className="actu-card-title">{article.title}</h3>
                  <p className="actu-card-excerpt">{article.excerpt}</p>
                  <span className="actu-card-link">
                    Lire l&apos;article
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-cta">
        <div className="cta-container">
          <div className="cta-content">
            <h2 className="cta-title">Ne manquez aucune actualité</h2>
            <p className="cta-desc">
              Inscrivez-vous à notre newsletter pour recevoir nos dernières actualités, conseils sécurité et offres directement dans votre boîte mail.
            </p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Votre adresse email"
                className="newsletter-input"
                required
              />
              <button type="submit" className="btn btn-primary newsletter-btn">
                S&apos;inscrire
              </button>
            </form>
          </div>
        </div>
      </section>

    </main>
  );
}
