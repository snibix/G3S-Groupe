'use client';

import { useState } from 'react';
import { Button } from '@/components/Button';

export default function ContactCTA() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setIsOpen(false);
      setSubmitted(false);
    }, 2500);
  };

  return (
    <>
      <Button variant="primary" onClick={() => setIsOpen(true)}>
        Contactez-nous
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-navy/80 backdrop-blur-sm" onClick={() => setIsOpen(false)}>
          <div className="relative w-full max-w-lg bg-white rounded-lg shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200" onClick={(e) => e.stopPropagation()}>
            
            {/* Header bleu */}
            <div className="relative bg-brand px-6 py-8 text-center text-white">
              <div className="flex flex-col items-center gap-3 relative z-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <h2 className="font-display text-2xl font-bold uppercase tracking-wider">Demande de contact</h2>
                <p className="font-sans text-sm text-white/90 max-w-sm">
                  Remplissez le formulaire ci-dessous et notre équipe vous recontactera sous 24h.
                </p>
              </div>
              <button className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-md bg-white/10 text-white transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky" onClick={() => setIsOpen(false)}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            {/* Corps du formulaire */}
            <div className="p-6 md:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-10 text-center animate-in fade-in duration-300">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-mist text-brand">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                      <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl font-bold uppercase text-navy mb-2">
                    Message envoyé !
                  </h3>
                  <p className="font-sans text-muted">
                    Merci pour votre demande. Notre équipe vous contactera très prochainement.
                  </p>
                </div>
              ) : (
                <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                  <div className="flex flex-col gap-5 md:flex-row">
                    <div className="flex-1 flex flex-col gap-1.5">
                      <label htmlFor="contact-name" className="font-sans text-sm font-semibold text-navy">Nom / Société <span className="text-brand">*</span></label>
                      <input id="contact-name" type="text" required placeholder="Votre nom ou entreprise" className="w-full rounded border border-line bg-mist px-3 py-2.5 font-sans text-sm text-navy transition-colors focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand" />
                    </div>
                    <div className="flex-1 flex flex-col gap-1.5">
                      <label htmlFor="contact-email" className="font-sans text-sm font-semibold text-navy">Email <span className="text-brand">*</span></label>
                      <input id="contact-email" type="email" required placeholder="votre@email.com" className="w-full rounded border border-line bg-mist px-3 py-2.5 font-sans text-sm text-navy transition-colors focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-5 md:flex-row">
                    <div className="flex-1 flex flex-col gap-1.5">
                      <label htmlFor="contact-phone" className="font-sans text-sm font-semibold text-navy">Téléphone</label>
                      <input id="contact-phone" type="tel" placeholder="06 XX XX XX XX" className="w-full rounded border border-line bg-mist px-3 py-2.5 font-sans text-sm text-navy transition-colors focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand" />
                    </div>
                    <div className="flex-1 flex flex-col gap-1.5">
                      <label htmlFor="contact-subject" className="font-sans text-sm font-semibold text-navy">Objet</label>
                      <select id="contact-subject" defaultValue="" className="w-full rounded border border-line bg-mist px-3 py-2.5 font-sans text-sm text-navy transition-colors focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand">
                        <option value="" disabled>Sélectionnez un sujet</option>
                        <option value="gardiennage">Gardiennage & Accueil</option>
                        <option value="telesurveillance">Télésurveillance</option>
                        <option value="incendie">Sécurité Incendie</option>
                        <option value="evenementiel">Sécurité Événementielle</option>
                        <option value="audit">Audit de sécurité</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-message" className="font-sans text-sm font-semibold text-navy">Votre demande <span className="text-brand">*</span></label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      placeholder="Décrivez votre besoin en quelques mots..."
                      className="w-full resize-y rounded border border-line bg-mist px-3 py-2.5 font-sans text-sm text-navy transition-colors focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                    />
                  </div>

                  <button type="submit" className="mt-2 flex w-full items-center justify-center gap-2 rounded bg-brand px-6 py-3.5 font-sans font-semibold text-white transition-all hover:bg-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-sky">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                      <line x1="22" y1="2" x2="11" y2="13"/>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                    Envoyer ma demande
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      )}
    </>
  );
}
