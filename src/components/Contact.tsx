const Contact = () => {
  return (
    <footer id="contacto" className="relative bg-hero-gradient text-primary-foreground pt-24 pb-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-50" aria-hidden />
      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full border-[3px] border-accent/60" aria-hidden />

      <div className="container relative">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <p className="text-sm tracking-[0.2em] uppercase text-accent mb-4">Contacto</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Vamos <span className="text-accent">falar</span> antes que o caos fale.
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-md">
              Para inscrições, imprensa ou parcerias, a nossa equipa responde em 24h.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 content-start">
            <div>
              <p className="text-xs uppercase tracking-wider text-sky mb-2">Email</p>
              <a href="mailto:geral@jornadas.pt" className="font-display text-xl hover:text-accent transition-smooth">
                geral@jornadas.pt
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-sky mb-2">Telefone</p>
              <a href="tel:+351210000000" className="font-display text-xl hover:text-accent transition-smooth">
                +351 210 000 000
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-sky mb-2">Local</p>
              <p className="font-display text-xl">Lisboa, Portugal</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-sky mb-2">Data</p>
              <p className="font-display text-xl">12 de maio · 9h — 17h30</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/15 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/70">
          <p>© {new Date().getFullYear()} Jornadas de Comunicação Estratégica</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-accent transition-smooth">LinkedIn</a>
            <a href="#" className="hover:text-accent transition-smooth">Instagram</a>
            <a href="#" className="hover:text-accent transition-smooth">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
