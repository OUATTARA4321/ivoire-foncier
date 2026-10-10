import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="topbar">
      <div className="container nav-wrap">
        <Link href="/" className="brand-box">
          <span className="brand-mark">I</span>
          <span>Ivoire Foncier</span>
        </Link>

        <nav className="main-nav">
          <Link href="/">Accueil</Link>
          <Link href="/properties">Biens</Link>
          <Link href="/about">À propos</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/dashboard">Dashboard</Link>
        </nav>

        <Link href="/login" className="btn btn-primary">
          Espace client
        </Link>
      </div>
    </header>
  );
}
