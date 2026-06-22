const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 px-6 lg:px-12 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="font-display text-lg text-foreground">
              Jair Castellanos
            </span>
            <p className="font-body text-[11px] text-muted-foreground mt-1">
              © {currentYear} · Todos los derechos reservados
            </p>
          </div>
          
          <div className="flex items-center gap-8">
            <a
              href="https://instagram.com/solojair1"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-[11px] tracking-[0.1em] text-muted-foreground hover:text-foreground transition-colors uppercase"
            >
              Instagram
            </a>
            <a
              href="https://facebook.com/jair.castellanos"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-[11px] tracking-[0.1em] text-muted-foreground hover:text-foreground transition-colors uppercase"
            >
              Facebook
            </a>
            <a
              href="https://wa.me/573105813939"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-[11px] tracking-[0.1em] text-muted-foreground hover:text-foreground transition-colors uppercase"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
