export default function SecteursPage() {
  const secteurs = [
    { title: 'Industrie & Logistique', img: '🏭' },
    { title: 'Bureaux & Sièges Sociaux', img: '🏢' },
    { title: 'Événementiel & Salons', img: '🎫' },
    { title: 'Luxe & Retail', img: '💎' },
    { title: 'Secteur Public & Collectivités', img: '🏛️' },
    { title: 'Résidentiel Haut de Gamme', img: '🏡' }
  ];

  return (
    <main>
      <section className="page-header">
        <h1 className="page-title">Nos Secteurs d'Intervention</h1>
        <p style={{ color: 'var(--text-muted)' }}>G3S s'adapte aux contraintes spécifiques de chaque environnement d'activité.</p>
      </section>
      <section className="page-content">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
          {secteurs.map((secteur, index) => (
            <div key={index} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.5rem',
              background: 'linear-gradient(135deg, var(--secondary) 0%, var(--primary) 100%)',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid var(--glass-border)'
            }}>
              <span style={{ fontSize: '3rem', filter: 'drop-shadow(0 0 10px var(--accent-glow))' }}>{secteur.img}</span>
              <h3 style={{ color: 'var(--text-main)', fontSize: '1.2rem', lineHeight: '1.4' }}>{secteur.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
