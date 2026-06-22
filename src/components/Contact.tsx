import { Mail, MapPin, Phone, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 lg:px-12 bg-card/50">
      <div className="container mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="text-center mb-16 fade-up">
          <p className="font-body text-[11px] tracking-[0.4em] text-primary uppercase font-medium mb-3">
            Contacto
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-normal text-foreground mb-4">
            Trabajemos Juntos
          </h2>
          <p className="font-body text-muted-foreground max-w-lg mx-auto">
            ¿Interesado en adquirir una obra o comisionar una pieza personalizada? 
            Estaré encantado de conversar contigo.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8 fade-up fade-up-delay-1">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-foreground/5 text-foreground">
                <MapPin size={18} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-display text-base text-foreground mb-1">Estudio</h3>
                <p className="font-body text-sm text-muted-foreground">
                  Ibagué (Casa Amoré), Colombia
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-foreground/5 text-foreground">
                <Mail size={18} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-display text-base text-foreground mb-1">Email</h3>
                <a 
                  href="mailto:jair@ejemplo.com" 
                  className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  solojair@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-foreground/5 text-foreground">
                <Phone size={18} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-display text-base text-foreground mb-1">WhatsApp</h3>
                <a 
                  href="tel:+573105813939" 
                  className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  +57 310 581 3939
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-foreground/5 text-foreground">
                <Instagram size={18} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-display text-base text-foreground mb-1">Instagram</h3>
                <a 
                  href="https://instagram.com/solojair1" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  @solojair1
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="lg:col-span-3 space-y-5 fade-up fade-up-delay-2">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="font-body text-[11px] tracking-wide text-muted-foreground uppercase mb-2 block">
                  Nombre
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-background border border-border focus:border-foreground focus:outline-none font-body text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="font-body text-[11px] tracking-wide text-muted-foreground uppercase mb-2 block">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-background border border-border focus:border-foreground focus:outline-none font-body text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors"
                  placeholder="tu@email.com"
                />
              </div>
            </div>
            <div>
              <label className="font-body text-[11px] tracking-wide text-muted-foreground uppercase mb-2 block">
                Asunto
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-background border border-border focus:border-foreground focus:outline-none font-body text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors"
                placeholder="¿En qué puedo ayudarte?"
              />
            </div>
            <div>
              <label className="font-body text-[11px] tracking-wide text-muted-foreground uppercase mb-2 block">
                Mensaje
              </label>
              <textarea
                rows={5}
                className="w-full px-4 py-3 bg-background border border-border focus:border-foreground focus:outline-none font-body text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors resize-none"
                placeholder="Cuéntame sobre tu proyecto o interés..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 bg-foreground text-background font-body text-[12px] tracking-[0.15em] uppercase font-medium hover:bg-foreground/90 transition-colors duration-300"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
