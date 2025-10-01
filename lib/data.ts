import artigosBase from '@/data/artigos.json';
import { slugify } from '@/lib/slugify';

type Artigo = {
  titulo: string;
  autor: string;
  data: string; // ISO string
  conteudo: string;
  slug?: string;
};

const artigosComSlug = (artigosBase as Artigo[]).map((a) => ({
  ...a,
  slug: a.slug ?? slugify(a.titulo),
}));

export async function getAllArticles() {
  // Server Component friendly: dados estáticos lidos em build
  return artigosComSlug;
}

export async function getArticleBySlug(slug: string) {
  return artigosComSlug.find((a) => a.slug === slug) ?? null;
}
