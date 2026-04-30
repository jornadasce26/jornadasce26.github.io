import speechBubble from "@/assets/logowhite.png";

const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden bg-hero-gradient text-primary-foreground pt-28 pb-24 md:pt-36 md:pb-32">
      <div className="absolute inset-0 bg-grid-pattern opacity-60" aria-hidden />
      <div
        className="absolute -top-40 -right-40 h-[32rem] w-[32rem] rounded-full border-[3px] border-white/15"
        aria-hidden
      />
      <div
        className="absolute -bottom-52 -left-40 h-[28rem] w-[28rem] rounded-full border-[3px] border-accent/70"
        aria-hidden
      />

      <div className="container relative grid md:grid-cols-[1fr_auto] gap-12 items-center">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-accent" />
            <p className="text-sm tracking-[0.2em] uppercase text-sky">Jornadas de</p>
          </div>
          <p className="text-2xl md:text-3xl font-light text-primary-foreground/90 mb-6">
            Comunicação Estratégica
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05] mb-8">
            Quem cala quando <br />
            <span className="text-accent">o caos</span> fala?
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-xl mb-10">
            Um dia dedicado a pensar a comunicação quando tudo parece estar
            a acontecer ao mesmo tempo. Conversas, casos e ferramentas para
            quem decide em cenários de crise.
          </p>
          <div className="inline-flex items-center gap-4 rounded-full bg-secondary/80 border border-white/20 backdrop-blur px-6 py-3 shadow-soft">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            <span className="font-medium text-primary-foreground">12 de maio · 9h — 17h30</span>
          </div>
        </div>

        <div className="relative hidden md:block">
          <img
            src={speechBubble}
            alt="Balões de fala com ponto de exclamação laranja"
            className="w-[44rem] h-auto opacity-95 drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
