import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Obras", href: "#gallery" },
    { name: "Sobre Mí", href: "#about" },
    { name: "Contacto", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm">
      <div className="container mx-auto px-6 lg:px-12">
        <nav className="flex items-center justify-between py-5 border-b border-border/50">
          <a href="#" className="group">
            <span className="font-display text-xl md:text-2xl font-medium text-foreground tracking-wide">
              Jair Castellanos
            </span>
            <span className="block text-[10px] tracking-[0.4em] text-muted-foreground uppercase font-body">
              Artista Plástico
            </span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="font-body text-[13px] tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors duration-300 uppercase"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border">
            <ul className="flex flex-col py-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="block px-6 py-3 font-body text-sm tracking-wider text-muted-foreground hover:text-foreground hover:bg-muted transition-colors duration-300 uppercase"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
