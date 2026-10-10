import { propertyData } from '@/lib/properties';

export default function PropertyDetailPage({ params }: { params: { slug: string } }) {
  const property = propertyData.find((item) => item.slug === params.slug) ?? propertyData[0];

  return (
    <main className="page-shell">
      <section className="page-header simple-header">
        <div className="container">
          <span className="eyebrow alt">Bien immobilier</span>
          <h1>{property.name}</h1>
          <p>{property.location}</p>
        </div>
      </section>

      <section className="section">
        <div className="container detail-layout">
          <div className="detail-image-card">
            <div className="detail-image" style={{ background: property.color }} />
          </div>

          <div className="detail-content">
            <div className="price-row">
              <span className="tag">{property.status}</span>
              <strong>{property.price}</strong>
            </div>

            <ul className="detail-list">
              <li>
                <span>Type</span>
                <strong>{property.type}</strong>
              </li>
              <li>
                <span>Surface</span>
                <strong>{property.surface}</strong>
              </li>
              <li>
                <span>Chambres</span>
                <strong>{property.rooms}</strong>
              </li>
              <li>
                <span>Quartier</span>
                <strong>{property.location}</strong>
              </li>
            </ul>

            <p className="details-copy">
              Cette propriété est idéale pour les investisseurs et les particuliers recherchant une solution durable,
              sécurisée et bien située dans une zone à fort potentiel. Le bien bénéficie d’un accès rapide et d’un
              environnement résidentiel ou commercial très dynamique.
            </p>

            <div className="detail-actions">
              <a href="/contact" className="btn btn-primary">
                Demander un devis
              </a>
              <a href="/properties" className="btn btn-secondary">
                Retour à la liste
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
