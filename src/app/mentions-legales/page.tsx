export default function MentionsLegalesPage() {
  return (
    <main>
      <section className="page-header">
        <h1 className="page-title">Mentions Légales</h1>
        <p style={{ color: 'var(--text-muted)' }}>Informations légales et conditions générales d'utilisation.</p>
      </section>
      <section className="page-content">
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ color: 'var(--text-main)', marginBottom: '1rem', fontSize: '1.5rem' }}>1. Éditeur du site</h2>
          <p style={{ marginBottom: '0.5rem' }}>Le site <strong>G3S</strong> est édité par la société G3S Sécurité.</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem' }}>
            <li><strong>Forme juridique :</strong> SAS (Société par Actions Simplifiée)</li>
            <li><strong>Capital social :</strong> 50 000 €</li>
            <li><strong>Siège social :</strong> 123 Rue de la Paix, 75000 Paris</li>
            <li><strong>RCS :</strong> Paris B 123 456 789</li>
            <li><strong>SIRET :</strong> 123 456 789 00012</li>
            <li><strong>Email de contact :</strong> contact@g3s-securite.fr</li>
          </ul>
        </div>

        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ color: 'var(--text-main)', marginBottom: '1rem', fontSize: '1.5rem' }}>2. Directeur de la publication</h2>
          <p>Le directeur de la publication du site est M. Jean Dupont, en qualité de Président de G3S Sécurité.</p>
        </div>

        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ color: 'var(--text-main)', marginBottom: '1rem', fontSize: '1.5rem' }}>3. Hébergement</h2>
          <p style={{ marginBottom: '0.5rem' }}>Ce site est hébergé par :</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
            <li><strong>Nom de l'hébergeur :</strong> Vercel Inc.</li>
            <li><strong>Adresse :</strong> 340 S Lemon Ave #4133 Walnut, CA 91789</li>
            <li><strong>Téléphone :</strong> +1 (555) 123-4567</li>
          </ul>
        </div>

        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ color: 'var(--text-main)', marginBottom: '1rem', fontSize: '1.5rem' }}>4. Propriété intellectuelle</h2>
          <p>
            L'ensemble des éléments figurant sur ce site (textes, images, logos, charte graphique) sont protégés par les dispositions du Code de la propriété intellectuelle. Toute reproduction, totale ou partielle, est strictement interdite sans l'accord exprès de G3S Sécurité.
          </p>
        </div>

        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ color: 'var(--text-main)', marginBottom: '1rem', fontSize: '1.5rem' }}>5. Données personnelles</h2>
          <p>
            Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles. Vous pouvez exercer ce droit en nous contactant à l'adresse email mentionnée ci-dessus.
          </p>
        </div>
      </section>
    </main>
  );
}
