import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-wrap">
        <div>
          <div className="brand-box footer-brand">
            <span className="brand-mark">I</span>
            <span>Ivoire Foncier</span>
          </div>
          <p>Plateforme professionnelle de gestion foncière et immobilière en Côte d’Ivoire.</p>
        </div>

        <div className="footer-links">
          <Link href="/properties">Biens</Link>
          <Link href="/about">À propos</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
