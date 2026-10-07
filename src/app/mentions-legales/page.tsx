export default function MentionsLegalesPage() {
  return (
    <main>
      <section className="relative min-h-[40vh] flex flex-col justify-center bg-navy pt-40 pb-20 z-0">

        <div className="mx-auto w-full max-w-[1200px] px-6 text-center">
          <span className="inline-block rounded-full bg-brand/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-sky mb-4">
            Informations
          </span>
          <h1 className="mx-auto max-w-4xl font-display text-4xl md:text-5xl font-bold uppercase text-white mb-6">
            Mentions Légales
          </h1>
          <p className="mx-auto max-w-3xl font-sans text-lg text-mist/80 leading-relaxed">
            Informations légales relatives à l'éditeur du site et conditions générales d'utilisation.
          </p>
        </div>
      </section>

      <section className="bg-light py-20">
        <div className="mx-auto w-full max-w-[900px] px-6 font-sans text-navy">
          
          <div className="mb-10 bg-white p-8 md:p-10 rounded-xl shadow-sm border border-line/10 transition-shadow hover:shadow-md">
            <h2 className="font-display text-2xl font-bold uppercase text-navy mb-4 border-b border-line/10 pb-4">1. Éditeur du site</h2>
            <p className="mb-6 text-navy/80 leading-relaxed">Le site <strong>G3S</strong> est édité par la société G3S-Groupe.</p>
            <ul className="space-y-3 text-navy/80">
              <li className="flex items-start gap-3">
                <span className="text-brand font-bold mt-1">•</span>
                <div><strong>Siège social :</strong> 2 Rue des Charrons, 57600 Forbach</div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand font-bold mt-1">•</span>
                <div><strong>Email de contact :</strong> contact@g3s-protection.fr</div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand font-bold mt-1">•</span>
                <div><strong>Téléphone :</strong> 06 86 09 94 24</div>
              </li>
            </ul>
          </div>

          <div className="mb-10 bg-white p-8 md:p-10 rounded-xl shadow-sm border border-line/10 transition-shadow hover:shadow-md">
            <h2 className="font-display text-2xl font-bold uppercase text-navy mb-4 border-b border-line/10 pb-4">2. Hébergement</h2>
            <p className="mb-6 text-navy/80 leading-relaxed">Ce site est hébergé par :</p>
            <ul className="space-y-3 text-navy/80">
              <li className="flex items-start gap-3">
                <span className="text-brand font-bold mt-1">•</span>
                <div><strong>Nom de l'hébergeur :</strong> Vercel Inc.</div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand font-bold mt-1">•</span>
                <div><strong>Adresse :</strong> 340 S Lemon Ave #4133 Walnut, CA 91789, USA</div>
              </li>
            </ul>
          </div>

          <div className="mb-10 bg-white p-8 md:p-10 rounded-xl shadow-sm border border-line/10 transition-shadow hover:shadow-md">
            <h2 className="font-display text-2xl font-bold uppercase text-navy mb-4 border-b border-line/10 pb-4">3. Conception et développement</h2>
            <p className="text-navy/80 leading-relaxed">
              Le site a été conçu et développé par <strong>JD-Web-Studio</strong>.
            </p>
          </div>

          <div className="mb-10 bg-white p-8 md:p-10 rounded-xl shadow-sm border border-line/10 transition-shadow hover:shadow-md">
            <h2 className="font-display text-2xl font-bold uppercase text-navy mb-4 border-b border-line/10 pb-4">4. Propriété intellectuelle</h2>
            <p className="text-navy/80 leading-relaxed">
              L'ensemble des éléments figurant sur ce site (textes, images, logos, charte graphique) sont protégés par les dispositions du Code de la propriété intellectuelle. Toute reproduction, totale ou partielle, est strictement interdite sans l'accord exprès de G3S-Groupe.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
