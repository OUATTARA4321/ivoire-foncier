import Link from 'next/link';
import { propertyData } from '@/lib/properties';
import PropertyCard from '@/components/PropertyCard';

export default function PropertiesPage() {
  return (
    <main className="page-shell">
      <section className="page-header">
        <div className="container">
          <span className="eyebrow alt">Investir en toute confiance</span>
          <h1>Explorer les biens immobiliers disponibles.</h1>
          <p>Des opportunités variées en Côte d’Ivoire, sélectionnées pour leurs performances et leur potentiel.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="filter-panel">
            <div>
              <label>Type</label>
              <select defaultValue="Tous">
                <option>Tous</option>
                <option>Appartement</option>
                <option>Villa</option>
                <option>Terrain</option>
                <option>Commercial</option>
              </select>
            </div>
            <div>
              <label>Localisation</label>
              <select defaultValue="Abidjan">
                <option>Abidjan</option>
                <option>Yamoussoukro</option>
                <option>San Pedro</option>
                <option>Daloa</option>
              </select>
            </div>
            <div>
              <label>Budget</label>
              <select defaultValue="Tous">
                <option>Tous</option>
                <option>Moins de 25M</option>
                <option>25M – 60M</option>
                <option>60M et plus</option>
              </select>
            </div>
            <Link href="/contact" className="btn btn-primary compact-btn">
              Recevoir un appel
            </Link>
          </div>

          <div className="property-grid properties-page-grid">
            {propertyData.map((property) => (
              <PropertyCard key={property.slug} property={property} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
