// app/artigos/[slug]/page.tsx
import { GetStaticPropsContext } from 'next/types'; // opcional para tipagem
import { notFound } from 'next/navigation';

interface PageProps {
  params: {
    slug: string;
  };
}

const artigosData = [
  { slug: 'exemplo-artigo', title: 'Exemplo de Artigo', content: 'Conteúdo aqui...' },
  // adicione mais artigos
];

export default function Page({ params }: PageProps) {
  const artigo = artigosData.find((a) => a.slug === params.slug);

  if (!artigo) {
    notFound(); // página 404
  }

  return (
    <div>
      <h1>{artigo.title}</h1>
      <p>{artigo.content}</p>
    </div>
  );
}

