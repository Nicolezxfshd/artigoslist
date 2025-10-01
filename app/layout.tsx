import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'ArtigoList',
  description: 'Artigos sobre o mundo da Internet — ArtigoList',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <header className="container header">
          <div>
            <h1 className="brand">ArtigoList</h1>
            <p className="muted">Explorando o mundo da Internet</p>
          </div>
          <nav className="nav">
            <Link href="/" className="nav-link">Início</Link>
            <Link href="/temas" className="nav-link">Temas</Link>
            <Link href="/top-artigos" className="nav-link">Top Artigos</Link>
            <Link href="/contato" className="nav-link cta">Contato</Link>
          </nav>
        </header>
        <main className="container">{children}</main>
        <footer className="container muted" style={{ marginTop: '4rem' }}>
          <small>© {new Date().getFullYear()} ArtigoList</small>
        </footer>
      </body>
    </html>
  );
}
