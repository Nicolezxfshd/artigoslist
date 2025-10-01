export const dynamic = 'force-static';

export default function TemasPage() {
  const temas = ['Tecnologia', 'Segurança', 'Redes Sociais', 'SEO', 'Desenvolvimento Web', 'Privacidade'];
  return (
    <section>
      <h2>Temas</h2>
      <ul className="tags">
        {temas.map((t) => (
          <li key={t} className="tag">{t}</li>
        ))}
      </ul>
    </section>
  );
}
