import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getAllArticles, getArticleBySlug } from '@/lib/data';

export const dynamic = 'force-static';

export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  const artigos = await getAllArticles();
  return artigos.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const artigo = await getArticleBySlug(slug);
  if (!artigo) return { title: 'Artigo não encontrado' };
  const desc = artigo.conteudo.length > 160 ? artigo.conteudo.slice(0, 160) + '…' : artigo.conteudo;
  return {
    title: `${artigo.titulo} — ArtigoList`,
    description: desc,
  };
}

export default async function ArtigoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const artigo = await getArticleBySlug(slug);
  if (!artigo) return notFound();

  return (
    <article>
      <h1>{artigo.titulo}</h1>
      <p className="muted">
        Por {artigo.autor} · {new Date(artigo.data).toLocaleDateString('pt-BR')}
      </p>
      <div className="prose">
        {artigo.conteudo.split('\n\n').map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </article>
  );
}
