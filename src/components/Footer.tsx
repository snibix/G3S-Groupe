import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-navy text-mist pt-16 pb-8 font-sans">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand column */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-3 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-sky">
                <img 
                  src="/logo/logo-g3s-groupe.jpg" 
                  alt="G3S Groupe Logo" 
                  className="h-10 w-auto rounded-md shadow-sm"
                />
                <span className="font-display text-2xl font-bold uppercase tracking-wider text-white">
                  G3S-Groupe
                </span>
              </Link>
            </div>
            <p className="text-sm text-mist/80 leading-relaxed">
              L&apos;excellence de la sécurité privée dans le Grand Est. Nous protégeons vos biens et vos collaborateurs avec rigueur et professionnalisme depuis 2023.
            </p>
            <p className="font-sans italic text-white/80 text-sm">Proximité · Réactivité · Disponibilité</p>
          </div>

          {/* Navigation column */}
          <div className="flex flex-col">
            <h4 className="font-display text-lg font-bold uppercase tracking-wider text-white mb-6 border-b-2 border-brand pb-2 inline-block self-start">Navigation</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/" className="text-sm text-mist/80 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded">Accueil</Link></li>
              <li><Link href="/decouvrir" className="text-sm text-mist/80 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded">Découvrir G3S</Link></li>
              <li><Link href="/expertises" className="text-sm text-mist/80 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded">Nos expertises</Link></li>
              <li><Link href="/secteurs" className="text-sm text-mist/80 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded">Nos secteurs</Link></li>
              <li><Link href="/actualites" className="text-sm text-mist/80 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded">Actualités</Link></li>
            </ul>
          </div>

          {/* Expertises column */}
          <div className="flex flex-col">
            <h4 className="font-display text-lg font-bold uppercase tracking-wider text-white mb-6 border-b-2 border-brand pb-2 inline-block self-start">Nos expertises</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/expertises#electronique" className="text-sm text-mist/80 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded">Sécurité Électronique</Link></li>
              <li><Link href="/expertises#privee" className="text-sm text-mist/80 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded">Sécurité Privée</Link></li>
              <li><Link href="/expertises#cpo" className="text-sm text-mist/80 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded">Protection Rapprochée</Link></li>
              <li><Link href="/expertises#formation" className="text-sm text-mist/80 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded">Formation</Link></li>
              <li><Link href="/expertises#numerique" className="text-sm text-mist/80 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded">Solutions Numériques</Link></li>
            </ul>
          </div>

          {/* Contact column */}
          <div className="flex flex-col">
            <h4 className="font-display text-lg font-bold uppercase tracking-wider text-white mb-6 border-b-2 border-brand pb-2 inline-block self-start">Contact</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-white/20 text-white mt-0.5">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-mist/50 mb-0.5">Siège social</span>
                  <span className="text-sm text-mist">2 Rue des Charrons, 57600 Forbach</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-white/20 text-white mt-0.5">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-mist/50 mb-0.5">Téléphone</span>
                  <a href="tel:0356990900" className="text-sm text-mist hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky rounded inline-block">03 56 99 09 00</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-white/20 text-white mt-0.5">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-mist/50 mb-0.5">Email</span>
                  <a href="mailto:contact@g3s-securite.fr" className="text-sm text-mist hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky rounded inline-block">contact@g3s-securite.fr</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-white/20 text-white mt-0.5">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-mist/50 mb-0.5">Disponibilité</span>
                  <span className="text-sm text-mist">24h/24 — 6j/7</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-line/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-mist/50">
          <p>&copy; {new Date().getFullYear()} G3S Sécurité. Tous droits réservés.</p>
          
          <div className="flex items-center gap-2">
            <span>Site fait par</span>
            <a href="https://jd-web-studio.fr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky rounded">
              <img src="/logo/jdw.jpg" alt="JD Web Studio" className="h-5 w-auto rounded-sm object-contain" />
              <span className="font-semibold text-white/80">JD-Web-Studio</span>
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/mentions-legales" className="hover:text-mist transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky rounded">Mentions Légales</Link>
            <span>•</span>
            <Link href="/mentions-legales" className="hover:text-mist transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky rounded">Politique de Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
