import { notFound } from 'next/navigation';
import artigosData from '../../../data/artigos.json';

export default async function ArtigoPage({ params }: { params: { slug: string } }) {
  const artigo = artigosData.find((a) => a.slug === params.slug);

  if (!artigo) {
    notFound();
  }

  return (
    <div>
      <h1>{artigo.title}</h1>
      <p>{artigo.content}</p>
    </div>
  );
}

// Rotas estáticas (SSG)
export async function generateStaticParams() {
  return artigosData.map((artigo) => ({
    slug: artigo.slug
  }));
}

