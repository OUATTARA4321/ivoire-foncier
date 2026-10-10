export default function AboutPage() {
  return (
    <main className="page-shell">
      <section className="page-header">
        <div className="container">
          <span className="eyebrow alt">À propos</span>
          <h1>Une plateforme de confiance pour le marché immobilier ivoirien.</h1>
        </div>
      </section>

      <section className="section">
        <div className="container about-grid">
          <div>
            <h2>Notre mission</h2>
            <p>
              Ivoire Foncier a pour vocation de rendre la gestion foncière plus claire, accessible et sécurisée.
              Nous accompagnons les particuliers, investisseurs et professionnels dans leur recherche, leur
              acquisition et leurs transactions immobilières à travers une expérience simple et rassurante.
            </p>
          </div>

          <div className="about-panel">
            <ul>
              <li>Transparence dans les transactions</li>
              <li>Gestion centralisée des dossiers</li>
              <li>Accompagnement professionnel</li>
              <li>Écosystème orienté client</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
