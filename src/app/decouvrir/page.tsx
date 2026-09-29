export default function DecouvrirPage() {
  return (
    <main>
      <section className="page-header">
        <h1 className="page-title">Découvrir G3S</h1>
        <p style={{ color: 'var(--text-muted)' }}>L'expertise au service de votre sérénité depuis plus de 10 ans.</p>
      </section>
      <section className="page-content">
        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ color: 'var(--text-main)', marginBottom: '1.5rem', fontSize: '2rem' }}>Qui sommes-nous ?</h2>
          <p style={{ marginBottom: '1rem' }}>
            G3S est un leader dans le domaine de la sécurité privée, alliant rigueur, professionnalisme et technologies avancées. 
            Notre mission est d'assurer la protection de vos biens, de vos infrastructures et de votre personnel, en proposant des 
            solutions adaptées et sur-mesure pour chaque situation.
          </p>
          <p>
            Avec des valeurs fortes basées sur l'intégrité, la réactivité et la discrétion, nous avons bâti une réputation 
            d'excellence dans l'ensemble de nos interventions.
          </p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '4rem' }}>
          <div style={{ textAlign: 'center', padding: '2rem', background: 'var(--secondary)', borderRadius: '8px' }}>
            <h3 style={{ color: 'var(--accent)', fontSize: '2.5rem', marginBottom: '0.5rem' }}>+500</h3>
            <p>Agents qualifiés</p>
          </div>
          <div style={{ textAlign: 'center', padding: '2rem', background: 'var(--secondary)', borderRadius: '8px' }}>
            <h3 style={{ color: 'var(--accent)', fontSize: '2.5rem', marginBottom: '0.5rem' }}>24/7</h3>
            <p>Intervention rapide</p>
          </div>
          <div style={{ textAlign: 'center', padding: '2rem', background: 'var(--secondary)', borderRadius: '8px' }}>
            <h3 style={{ color: 'var(--accent)', fontSize: '2.5rem', marginBottom: '0.5rem' }}>98%</h3>
            <p>Clients satisfaits</p>
          </div>
        </div>
      </section>
    </main>
  );
}
