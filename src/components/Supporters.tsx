const supporters = [
  "Parceiro 1", "Parceiro 2", "Parceiro 3", "Parceiro 4", "Parceiro 5", "Parceiro 6",
];

const Supporters = () => {
  return (
    <section id="apoios" className="py-24 bg-muted/40">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-sm tracking-[0.2em] uppercase text-accent mb-3">Apoios</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">Quem torna isto possível</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {supporters.map((s, i) => (
            <div
              key={i}
              className="aspect-[3/2] bg-card rounded-xl border border-border flex items-center justify-center text-muted-foreground text-sm font-medium hover:border-accent hover:text-primary transition-smooth"
            >
              {s}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Supporters;
