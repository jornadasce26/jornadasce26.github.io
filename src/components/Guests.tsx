const guests = [
  { name: "Nome do Convidado 1", role: "CEO, Organização", article: "O silêncio como estratégia", href: "#" },
  { name: "Nome do Convidado 2", role: "Diretor de Comunicação", article: "Casos de crise que mudaram marcas", href: "#" },
  { name: "Nome do Convidado 3", role: "Jornalista", article: "A verdade em tempos de ruído", href: "#" },
  { name: "Nome do Convidado 4", role: "Consultora", article: "Mensagens-chave sob pressão", href: "#" },
  { name: "Nome do Convidado 5", role: "Investigadora", article: "Narrativas pós-crise", href: "#" },
  { name: "Nome do Convidado 6", role: "Líder de opinião", article: "Reputação em tempo real", href: "#" },
];

const Guests = () => {
  return (
    <section id="convidados" className="py-24 md:py-32 bg-muted/40">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <p className="text-sm tracking-[0.2em] uppercase text-accent mb-4">Convidados</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Vozes que não se calam</h2>
          <p className="text-muted-foreground text-lg">
            Profissionais de referência na comunicação, media e gestão de crise.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {guests.map((g, i) => (
            <article
              key={i}
              className="group relative bg-card rounded-2xl p-8 shadow-card hover:shadow-soft transition-smooth border border-border/50 hover:border-accent/40"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="h-16 w-16 rounded-full bg-hero-gradient flex items-center justify-center text-primary-foreground font-display text-2xl font-bold shrink-0">
                  {g.name.split(" ").slice(-2, -1)[0]?.[0] ?? "C"}
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-primary leading-tight">{g.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{g.role}</p>
                </div>
              </div>

              <div className="border-t border-border pt-5">
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Artigo em destaque</p>
                <a
                  href={g.href}
                  className="group/link inline-flex items-start gap-2 text-primary hover:text-accent transition-smooth font-medium"
                >
                  <span>"{g.article}"</span>
                  <span className="shrink-0 group-hover/link:translate-x-1 transition-smooth">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Guests;
