export default function PolitiqueConfidentialitePage() {
  return (
    <main>
      <section className="relative min-h-[40vh] flex flex-col justify-center bg-navy pt-40 pb-20 z-0">

        <div className="mx-auto w-full max-w-[1200px] px-6 text-center">
          <span className="inline-block rounded-full bg-brand/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-sky mb-4">
            Données
          </span>
          <h1 className="mx-auto max-w-4xl font-display text-4xl md:text-5xl font-bold uppercase text-white mb-6">
            Politique de Confidentialité
          </h1>
          <p className="mx-auto max-w-3xl font-sans text-lg text-mist/80 leading-relaxed">
            Engagement de transparence sur la collecte et l'utilisation de vos données personnelles.
          </p>
        </div>
      </section>

      <section className="bg-light py-20">
        <div className="mx-auto w-full max-w-[900px] px-6 font-sans text-navy">
          
          <div className="mb-10 bg-white p-8 md:p-10 rounded-xl shadow-sm border border-line/10 transition-shadow hover:shadow-md">
            <h2 className="font-display text-2xl font-bold uppercase text-navy mb-4 border-b border-line/10 pb-4">1. Collecte des données</h2>
            <p className="text-navy/80 leading-relaxed mb-4">
              Dans le cadre de l'utilisation de notre site, nous pouvons être amenés à collecter certaines de vos données personnelles, notamment lorsque vous nous contactez via une adresse email ou un formulaire. Les données collectées peuvent inclure :
            </p>
            <ul className="space-y-3 text-navy/80 pl-2">
              <li className="flex items-start gap-3">
                <span className="text-brand font-bold mt-1">•</span>
                <div>Votre nom et prénom</div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand font-bold mt-1">•</span>
                <div>Votre adresse email</div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand font-bold mt-1">•</span>
                <div>Votre numéro de téléphone</div>
              </li>
            </ul>
          </div>

          <div className="mb-10 bg-white p-8 md:p-10 rounded-xl shadow-sm border border-line/10 transition-shadow hover:shadow-md">
            <h2 className="font-display text-2xl font-bold uppercase text-navy mb-4 border-b border-line/10 pb-4">2. Utilisation des données</h2>
            <p className="text-navy/80 leading-relaxed mb-4">
              Les données que nous collectons sont utilisées exclusivement dans le but de :
            </p>
            <ul className="space-y-3 text-navy/80 pl-2">
              <li className="flex items-start gap-3">
                <span className="text-brand font-bold mt-1">•</span>
                <div>Répondre à vos demandes de renseignement ou de contact.</div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand font-bold mt-1">•</span>
                <div>Assurer le suivi de notre relation commerciale ou contractuelle.</div>
              </li>
            </ul>
          </div>

          <div className="mb-10 bg-white p-8 md:p-10 rounded-xl shadow-sm border border-line/10 transition-shadow hover:shadow-md">
            <h2 className="font-display text-2xl font-bold uppercase text-navy mb-4 border-b border-line/10 pb-4">3. Sécurité et conservation</h2>
            <p className="text-navy/80 leading-relaxed">
              Nous mettons en œuvre toutes les mesures techniques et organisationnelles nécessaires pour garantir la sécurité de vos données personnelles. Elles sont conservées uniquement pendant la durée strictement nécessaire à la finalité pour laquelle elles ont été collectées, conformément à la réglementation en vigueur.
            </p>
          </div>

          <div className="mb-10 bg-white p-8 md:p-10 rounded-xl shadow-sm border border-line/10 transition-shadow hover:shadow-md">
            <h2 className="font-display text-2xl font-bold uppercase text-navy mb-4 border-b border-line/10 pb-4">4. Vos droits</h2>
            <p className="text-navy/80 leading-relaxed mb-4">
              Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi "Informatique et Libertés", vous disposez à tout moment :
            </p>
            <ul className="space-y-3 text-navy/80 pl-2 mb-6">
              <li className="flex items-start gap-3">
                <span className="text-brand font-bold mt-1">•</span>
                <div>D'un droit d'accès, de rectification ou d'effacement de vos données.</div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand font-bold mt-1">•</span>
                <div>D'un droit d'opposition ou de limitation au traitement.</div>
              </li>
            </ul>
            <p className="text-navy/80 leading-relaxed">
              Vous pouvez exercer ces droits en nous contactant directement à : <strong>contact@g3s-protection.fr</strong>.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
