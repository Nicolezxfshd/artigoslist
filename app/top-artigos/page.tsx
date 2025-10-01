import Link from 'next/link';
import { getAllArticles } from '@/lib/data';

export const dynamic = 'force-static';

export default async function TopArtigosPage() {
  const artigos = await getAllArticles();
  // critério simples: ordem pelo campo data desc
  const top = [...artigos].sort((a, b) => +new Date(b.data) - +new Date(a.data)).slice(0, 3);

  return (
    <section>
      <h2>Top Artigos</h2>
      <ul className="grid grid-2">
        {top.map((a) => (
          <li key={a.slug} className="card">
            <article>
              <h3><Link href={`/artigos/${a.slug}`}>{a.titulo}</Link></h3>
              <p className="muted">Por {a.autor} · {new Date(a.data).toLocaleDateString('pt-BR')}</p>
              <p>
                <Link href={`/artigos/${a.slug}`} className="link">Ler artigo →</Link>
              </p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
