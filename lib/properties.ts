import Link from 'next/link';
import { Property } from '@/lib/properties';

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <article className="property-card">
      <div className="property-thumb" style={{ background: property.color }} />
      <div className="property-body">
        <div className="property-head">
          <span className="tag">{property.status}</span>
          <strong>{property.price}</strong>
        </div>

        <h3>{property.name}</h3>
        <p>{property.location}</p>

        <ul className="property-meta">
          <li>{property.type}</li>
          <li>{property.surface}</li>
          <li>{property.rooms}</li>
        </ul>

        <Link href={`/properties/${property.slug}`} className="btn btn-secondary full-width">
          Voir le bien
        </Link>
      </div>
    </article>
  );
}
