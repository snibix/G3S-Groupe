'use client';

import Link from 'next/link';
import { Section } from '@/components/Section';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';

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
      <section className="bg-navy pt-40 pb-20 text-center relative z-0">
        <div className="absolute inset-0 z-[-1] bg-[url('/grid.svg')] bg-center opacity-10"></div>
        <div className="mx-auto max-w-[800px] px-6">
          <span className="inline-block rounded-full bg-brand/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-sky mb-4">Actualités</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-white mb-6">Restez informé</h1>
          <p className="font-sans text-lg text-mist/80 leading-relaxed">
            Suivez les dernières nouvelles de G3S, les évolutions du secteur de la sécurité privée et nos conseils d&apos;experts.
          </p>
        </div>
      </section>

      {/* Articles à la une */}
      <Section variant="mist">
        <div className="mx-auto mb-12 max-w-[1200px]">
          <h2 className="font-display text-3xl font-bold uppercase text-navy border-b-2 border-line pb-4 mb-8">À la une</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.map((article) => (
              <a key={article.id} href="#" className="group flex flex-col rounded-xl overflow-hidden bg-white shadow-sm border border-line transition-all hover:-translate-y-1 hover:shadow-lg hover:border-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-sky">
                <div className="h-48 w-full relative flex items-start justify-end p-4" style={{ background: `linear-gradient(135deg, ${categoryColors[article.category]}22, ${categoryColors[article.category]}11)` }}>
                  <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider text-white rounded shadow-sm" style={{ backgroundColor: categoryColors[article.category] }}>
                    {article.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <time className="font-sans text-xs font-semibold text-muted uppercase tracking-wider mb-3 block">{article.date}</time>
                  <h3 className="font-display text-xl font-bold text-navy mb-3 group-hover:text-brand transition-colors">{article.title}</h3>
                  <p className="font-sans text-sm text-muted mb-6 flex-1">{article.excerpt}</p>
                  <span className="inline-flex items-center gap-2 font-sans text-sm font-bold text-brand mt-auto">
                    Lire l&apos;article
                    <svg className="transition-transform group-hover:translate-x-1" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </Section>

      {/* Tous les articles */}
      <Section variant="default">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="font-display text-3xl font-bold uppercase text-navy border-b-2 border-line pb-4 mb-8">Toutes nos actualités</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {others.map((article) => (
              <a key={article.id} href="#" className="group flex flex-col rounded-xl bg-white p-6 shadow-sm border border-line transition-all hover:-translate-y-1 hover:shadow-md hover:border-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-sky">
                <div className="flex items-center gap-3 mb-3 font-sans text-xs font-semibold uppercase tracking-wider">
                  <span style={{ color: categoryColors[article.category] }}>
                    {article.category}
                  </span>
                  <span className="text-line">•</span>
                  <time className="text-muted">{article.date}</time>
                </div>
                <h3 className="font-display text-xl font-bold text-navy mb-3 group-hover:text-brand transition-colors">{article.title}</h3>
                <p className="font-sans text-sm text-muted mb-4">{article.excerpt}</p>
                <span className="inline-flex items-center gap-2 font-sans text-sm font-bold text-brand mt-auto">
                  Lire l&apos;article
                  <svg className="transition-transform group-hover:translate-x-1" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </Section>

      {/* Newsletter CTA */}
      <section className="bg-navy py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-brand/10 bg-[url('/grid.svg')] bg-center opacity-20 z-0"></div>
        <div className="mx-auto max-w-[600px] px-6 relative z-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold uppercase text-white mb-4">Ne manquez aucune actualité</h2>
          <p className="font-sans text-lg text-mist/80 mb-8 leading-relaxed">
            Inscrivez-vous à notre newsletter pour recevoir nos dernières actualités, conseils sécurité et offres directement dans votre boîte mail.
          </p>
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 rounded border border-line/20 bg-white/10 px-4 py-3 font-sans text-white placeholder-white/50 backdrop-blur-sm transition-colors focus:border-brand focus:bg-white/20 focus:outline-none focus:ring-1 focus:ring-brand"
              required
            />
            <Button variant="primary" type="submit" className="shrink-0">
              S&apos;inscrire
            </Button>
          </form>
        </div>
      </section>

    </main>
  );
}
