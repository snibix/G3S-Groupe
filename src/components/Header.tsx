import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <div className="nav-container">
        <Link href="/" className="logo">
          <span className="logo-accent">G3S</span>
        </Link>
        <nav>
          <ul className="nav-links">
            <li className="nav-item">
              <Link href="/" className="active">Accueil</Link>
            </li>
            <li className="nav-item">
              <Link href="/actualites">Actualités</Link>
            </li>
            <li className="nav-item">
              <Link href="/decouvrir">Découvrir G3S</Link>
            </li>
            <li className="nav-item">
              <Link href="/expertises">Nos expertises</Link>
            </li>
            <li className="nav-item">
              <Link href="/secteurs">Nos secteurs</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
