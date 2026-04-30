const agenda = [
  { time: "09:00", title: "Abertura & Boas-vindas", desc: "Receção dos participantes e enquadramento do dia." },
  { time: "09:30", title: "Keynote — Quando o caos fala", desc: "O silêncio como decisão estratégica em momentos críticos." },
  { time: "11:00", title: "Painel I — Narrativas de Crise", desc: "Casos práticos de marcas que comunicaram (bem e mal) sob pressão." },
  { time: "12:30", title: "Almoço em rede", desc: "Pausa com conversa informal entre convidados e participantes." },
  { time: "14:00", title: "Workshop — Mensagens que resistem", desc: "Construir mensagens-chave para cenários imprevistos." },
  { time: "15:30", title: "Painel II — A voz das organizações", desc: "Líderes partilham como preparam as suas equipas para falar." },
  { time: "17:00", title: "Encerramento", desc: "Síntese do dia e próximos passos da comunidade." },
];

const Agenda = () => {
  return (
    <section id="programa" className="py-24 md:py-32 bg-background">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <p className="text-sm tracking-[0.2em] uppercase text-accent mb-4">Programa</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Um dia para escutar o caos</h2>
          <p className="text-muted-foreground text-lg">
            Sete momentos pensados para provocar, ensinar e abrir espaço à conversa.
          </p>
        </div>

        <ol className="relative border-l-2 border-border ml-4 md:ml-6">
          {agenda.map((item, i) => (
            <li key={i} className="pl-8 md:pl-12 pb-10 relative group">
              <span className="absolute -left-[11px] top-1 h-5 w-5 rounded-full bg-background border-2 border-accent group-hover:bg-accent transition-smooth" />
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
                <span className="font-display text-2xl font-bold text-secondary shrink-0 w-20">{item.time}</span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-primary mb-1">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Agenda;
