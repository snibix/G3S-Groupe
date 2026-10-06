import { NextResponse } from 'next/server';
import Parser from 'rss-parser';

export const revalidate = 3600; // Cache Next.js (1 heure)

const parser = new Parser();

const FEEDS = [
  { url: 'https://www.cert.ssi.gouv.fr/feed/', source: 'CERT-FR' },
  { url: 'https://www.zataz.com/feed/', source: 'Zataz' },
  { url: 'https://www.lemondeinformatique.fr/flux-rss/thematique/securite/rss.xml', source: 'LMI Sécurité' },
];

export async function GET() {
  try {
    const feedPromises = FEEDS.map(async (feedInfo) => {
      try {
        const feed = await parser.parseURL(feedInfo.url);
        return feed.items.map(item => ({
          title: item.title || 'Sans titre',
          link: item.link || '#',
          date: item.isoDate || item.pubDate || new Date().toISOString(),
          description: item.contentSnippet || item.content || 'Aucune description disponible.',
          source: feedInfo.source,
        }));
      } catch (error) {
        console.error(`Erreur lors de la récupération du flux ${feedInfo.source}:`, error);
        return [];
      }
    });

    const results = await Promise.all(feedPromises);
    
    // Fusionner tous les articles
    let allArticles = results.flat();
    
    // Trier par date (du plus récent au plus ancien)
    allArticles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    // Limiter aux 30 articles les plus récents pour éviter de surcharger
    allArticles = allArticles.slice(0, 30);

    return NextResponse.json(allArticles);
  } catch (error) {
    console.error('Erreur globale lors de la récupération des actualités:', error);
    return NextResponse.json({ error: 'Erreur lors de la récupération des actualités' }, { status: 500 });
  }
}
