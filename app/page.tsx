import Link from 'next/link';
import { propertyData } from '@/lib/properties';
import PropertyCard from '@/components/PropertyCard';

export default function HomePage() {
  const featured = propertyData.slice(0, 3);

  return (
    <main>
      <section className="hero-section">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Gestion foncière moderne</span>
            <h1>Le marché du foncier en Côte d’Ivoire, plus clair et plus fiable.</h1>
            <p className="lead">
              Ivoire Foncier aide particuliers, investisseurs et professionnels à trouver, gérer et sécuriser
              les biens immobiliers les plus pertinents avec efficacité et confiance.
            </p>
            <div className="hero-actions">
              <Link href="/properties" className="btn btn-primary">
                Explorer les biens
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                Demander une visite
              </Link>
            </div>
            <ul className="stats-row">
              <li>
                <strong>1,200+</strong>
                <span>Dossiers suivis</span>
              </li>
              <li>
                <strong>94%</strong>
                <span>Clients satisfaits</span>
              </li>
              <li>
                <strong>24/7</strong>
                <span>Support sécurisé</span>
              </li>
            </ul>
          </div>

          <div className="hero-visual">
            <div className="glass-card primary-card">
              <div className="card-header">
                <span>Marché immobilier</span>
                <span className="status-badge">Actif</span>
              </div>
              <div className="chart-bars">
                <span style={{ height: '34%' }} />
                <span style={{ height: '48%' }} />
                <span style={{ height: '57%' }} />
                <span style={{ height: '72%' }} />
                <span style={{ height: '85%' }} />
                <span style={{ height: '100%' }} />
              </div>
              <div className="metric-grid">
                <div>
                  <small>Biens actifs</small>
                  <strong>340</strong>
                </div>
                <div>
                  <small>Transactions</small>
                  <strong>128</strong>
                </div>
              </div>
            </div>
            <div className="glass-card floating-card">
              <p>Demandes en cours</p>
              <strong>58</strong>
              <span>+15% ce mois</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-heading center">
            <span className="eyebrow alt">Pourquoi nous</span>
            <h2>Une plateforme pensée pour le marché immobilier ivoirien.</h2>
          </div>

          <div className="feature-grid">
            <article className="feature-card">
              <div className="feature-icon">📍</div>
              <h3>Recherche avancée</h3>
              <p>Filtrez par ville, quartier, budget, type de bien et situation juridique.</p>
            </article>
            <article className="feature-card">
              <div className="feature-icon">📄</div>
              <h3>Documents sécurisés</h3>
              <p>Centralisez les pièces, garanties, certificats et dossiers de manière fiable.</p>
            </article>
            <article className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Suivi des transactions</h3>
              <p>Un parcours de vente et d’achat transparent de la demande à la signature.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow alt">Biens en vedette</span>
            <h2>Des opportunités immobilières sélectionnées.</h2>
          </div>

          <div className="property-grid">
            {featured.map((property) => (
              <PropertyCard key={property.slug} property={property} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container metrics-grid">
          <div>
            <span className="eyebrow alt">Nos résultats</span>
            <h2>Un accompagnement sérieux, transparent et orienté performance.</h2>
          </div>
          <div className="metrics-boxes">
            <div>
              <strong>10x</strong>
              <span>Gain de productivité</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>Suivi centralisé</span>
            </div>
            <div>
              <strong>Secure</strong>
              <span>Accès protégé</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container testimonial-wrap">
          <div className="testimonial-card">
            <p>
              “Ivoire Foncier nous a permis d’accélérer notre gestion immobilière avec plus de confiance et plus
              de clarté. L’expérience est rassurante pour nos clients et nos équipes.”
            </p>
            <div>
              <strong>Amadou Koffi</strong>
              <span>Directeur commercial</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
