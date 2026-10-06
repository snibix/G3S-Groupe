'use client';

import { useEffect, useState } from 'react';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/Animations';

interface Article {
  title: string;
  link: string;
  date: string;
  description: string;
  source: string;
}

export function NewsSection() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('/api/news');
        if (!response.ok) throw new Error('Erreur lors du chargement des actualités');
        const data = await response.json();
        setArticles(data);
      } catch (err) {
        setError('Impossible de charger les actualités cyber pour le moment.');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const formatDate = (isoString: string) => {
    try {
      const date = new Date(isoString);
      return new Intl.DateTimeFormat('fr-FR', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }).format(date);
    } catch {
      return 'Date inconnue';
    }
  };

  const getSourceColor = (source: string) => {
    switch (source) {
      case 'CERT-FR': return 'bg-red-50 text-red-700 border-red-200';
      case 'Zataz': return 'bg-orange-50 text-orange-700 border-orange-200';
      case 'LMI Sécurité': return 'bg-blue-50 text-blue-700 border-blue-200';
      default: return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  // Tronquer la description proprement
  const truncate = (text: string, length: number) => {
    if (!text) return '';
    // Enlever les éventuelles balises HTML qui resteraient
    const cleanText = text.replace(/<\/?[^>]+(>|$)/g, "");
    if (cleanText.length <= length) return cleanText;
    return cleanText.substring(0, length) + '...';
  };

  if (error) {
    return (
      <div className="w-full text-center p-8 bg-red-50/50 border border-red-100 text-red-600 rounded-2xl">
        {error}
      </div>
    );
  }

  return (
    <div className="w-full">
      <FadeIn direction="up" className="mb-12 text-center">
        <span className="inline-block rounded-full bg-brand/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand mb-4">
          Veille Cybersécurité
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold uppercase text-navy mb-4">
          Actualités en temps réel
        </h2>
        <p className="font-sans text-lg text-muted max-w-2xl mx-auto">
          Retrouvez les dernières alertes, vulnérabilités et actualités issues de sources certifiées (CERT-FR, Zataz...).
        </p>
      </FadeIn>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="animate-pulse bg-white p-6 rounded-2xl shadow-sm border border-line h-[320px] flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <div className="h-6 bg-slate-100 rounded-full w-20"></div>
                <div className="h-4 bg-slate-100 rounded w-24"></div>
              </div>
              <div className="h-6 bg-slate-200 rounded w-full mb-3"></div>
              <div className="h-6 bg-slate-200 rounded w-3/4 mb-4"></div>
              <div className="flex-1 space-y-2 mt-2">
                <div className="h-4 bg-slate-100 rounded w-full"></div>
                <div className="h-4 bg-slate-100 rounded w-full"></div>
                <div className="h-4 bg-slate-100 rounded w-4/5"></div>
              </div>
              <div className="h-10 bg-slate-100 rounded mt-6 w-full"></div>
            </div>
          ))}
        </div>
      ) : (
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.05}>
          {articles.map((article, i) => (
            <StaggerItem key={i} className="h-full">
              <Card className="p-6 h-full flex flex-col hover:-translate-y-1 transition-transform border-t-4 border-t-brand shadow-md hover:shadow-xl bg-white relative">
                
                {/* En-tête : Source et Date */}
                <div className="flex justify-between items-start mb-4 gap-2">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full border ${getSourceColor(article.source)} shrink-0`}>
                    {article.source}
                  </span>
                  <span className="text-xs text-muted/70 font-medium text-right shrink-0">
                    {formatDate(article.date)}
                  </span>
                </div>

                {/* Titre */}
                <h3 className="font-display text-lg font-bold text-navy mb-3 line-clamp-2" title={article.title}>
                  {article.title}
                </h3>
                
                {/* Description */}
                <p className="font-sans text-sm text-muted leading-relaxed flex-1 mb-6 line-clamp-4">
                  {truncate(article.description, 160)}
                </p>

                {/* Bouton */}
                <div className="mt-auto pt-4 border-t border-line">
                  <Button asChild variant="outline" className="w-full text-brand border-brand/20 hover:border-brand hover:bg-brand/5 hover:text-brand group">
                    <a href={article.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      Lire l'article
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </a>
                  </Button>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      )}
    </div>
  );
}
