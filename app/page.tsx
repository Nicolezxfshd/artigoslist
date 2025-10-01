import Link from 'next/link';
import { getAllArticles } from '@/lib/data';

export const dynamic = 'force-static';

export default async function HomePage() {
  const artigos = await getAllArticles();
  const primeirosQuatro = artigos.slice(0, 4);

  return (
    <section>
      <h2>Artigos Recentes</h2>
      <ul className="grid grid-2 center">
        {primeirosQuatro.map((artigo) => {
          const resumo =
            artigo.conteudo.length > 200
              ? artigo.conteudo.slice(0, 200) + '…'
              : artigo.conteudo;
          return (
            <li key={artigo.slug} className="card">
              <article>
                <h3>
                  <Link href={`/artigos/${artigo.slug}`}>{artigo.titulo}</Link>
                </h3>
                <p className="muted">
                  Por {artigo.autor} · {new Date(artigo.data).toLocaleDateString('pt-BR')}
                </p>
                <p>{resumo}</p>
                <p>
                  <Link href={`/artigos/${artigo.slug}`} className="link">
                    Ler artigo →
                  </Link>
                </p>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
