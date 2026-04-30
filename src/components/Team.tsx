const team = [
  { name: "Membro da Equipa 1", role: "Direção", linkedin: "#" },
  { name: "Membro da Equipa 2", role: "Programa", linkedin: "#" },
  { name: "Membro da Equipa 3", role: "Produção", linkedin: "#" },
  { name: "Membro da Equipa 4", role: "Comunicação", linkedin: "#" },
  { name: "Membro da Equipa 5", role: "Logística", linkedin: "#" },
  { name: "Membro da Equipa 6", role: "Relações Externas", linkedin: "#" },
];

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45z" />
  </svg>
);

const Team = () => {
  return (
    <section id="equipa" className="py-24 md:py-32 bg-background">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <p className="text-sm tracking-[0.2em] uppercase text-accent mb-4">Equipa</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Quem construiu este dia</h2>
          <p className="text-muted-foreground text-lg">
            Um grupo apaixonado pela palavra certa no momento certo.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {team.map((m, i) => (
            <a
              key={i}
              href={m.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group bg-card rounded-xl p-5 border border-border hover:border-accent hover:shadow-card transition-smooth flex flex-col"
            >
              <div className="h-14 w-14 rounded-full bg-secondary/15 border border-secondary/30 flex items-center justify-center text-secondary font-display text-lg font-bold mb-4">
                {m.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
              </div>
              <p className="font-medium text-primary text-sm leading-tight mb-1">{m.name}</p>
              <p className="text-xs text-muted-foreground mb-4">{m.role}</p>
              <span className="mt-auto inline-flex items-center gap-1.5 text-xs text-secondary group-hover:text-accent transition-smooth">
                <LinkedInIcon /> LinkedIn
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
