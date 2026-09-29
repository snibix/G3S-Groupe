'use client';

import { useState } from 'react';

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
      <button onClick={() => setIsOpen(true)} className="btn btn-primary">
        Contactez-nous
      </button>

      {isOpen && (
        <div className="contact-modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
            
            {/* Header bleu */}
            <div className="contact-modal-header">
              <div className="contact-modal-header-content">
                <div className="contact-modal-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <h2 className="contact-modal-title">Demande de contact</h2>
                <p className="contact-modal-subtitle">
                  Remplissez le formulaire ci-dessous et notre équipe vous recontactera sous 24h.
                </p>
              </div>
              <button className="contact-modal-close" onClick={() => setIsOpen(false)}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            {/* Corps du formulaire */}
            <div className="contact-modal-body">
              {submitted ? (
                <div className="contact-modal-success">
                  <div className="contact-modal-success-icon">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#1e40af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                      <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                  </div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>
                    Message envoyé !
                  </h3>
                  <p style={{ color: '#475569', lineHeight: 1.5 }}>
                    Merci pour votre demande. Notre équipe vous contactera très prochainement.
                  </p>
                </div>
              ) : (
                <form className="contact-modal-form" onSubmit={handleSubmit}>
                  <div className="contact-form-row">
                    <div className="contact-form-field">
                      <label htmlFor="contact-name">Nom / Société <span className="contact-required">*</span></label>
                      <input id="contact-name" type="text" required placeholder="Votre nom ou entreprise" />
                    </div>
                    <div className="contact-form-field">
                      <label htmlFor="contact-email">Email <span className="contact-required">*</span></label>
                      <input id="contact-email" type="email" required placeholder="votre@email.com" />
                    </div>
                  </div>

                  <div className="contact-form-row">
                    <div className="contact-form-field">
                      <label htmlFor="contact-phone">Téléphone</label>
                      <input id="contact-phone" type="tel" placeholder="06 XX XX XX XX" />
                    </div>
                    <div className="contact-form-field">
                      <label htmlFor="contact-subject">Objet</label>
                      <select id="contact-subject" defaultValue="">
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

                  <div className="contact-form-field">
                    <label htmlFor="contact-message">Votre demande <span className="contact-required">*</span></label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      placeholder="Décrivez votre besoin en quelques mots..."
                    />
                  </div>

                  <button type="submit" className="contact-modal-submit">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
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
