const links = [
  { href: "#programa", label: "Programa" },
  { href: "#convidados", label: "Convidados" },
  { href: "#equipa", label: "Equipa" },
  { href: "#apoios", label: "Apoios" },
  { href: "#contacto", label: "Contacto" },
];

const Navbar = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-primary/80 border-b border-white/10">
      <nav className="container flex items-center justify-between h-16">
        <a href="#top" className="flex items-center gap-2 text-primary-foreground">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold text-sm">!</span>
          <span className="font-display text-base font-semibold tracking-tight">Jornadas</span>
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm text-primary-foreground/80">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-accent transition-smooth">{l.label}</a>
            </li>
          ))}
        </ul>
        <a
          href="#contacto"
          className="hidden md:inline-flex items-center rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground hover:shadow-glow transition-smooth"
        >
          Inscrever
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
