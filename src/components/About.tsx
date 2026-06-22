import { Play } from "lucide-react";
import { useState } from "react";

const About = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section id="about" className="py-24 px-6 lg:px-12">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Video Section */}
          <div className="relative order-2 lg:order-1 fade-up">
            <div className="aspect-[3/4] max-w-lg mx-auto lg:mx-0 gallery-frame bg-background p-3">
              {isVideoPlaying ? (
                <video
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  muted
                  playsInline
                  preload="auto"
                >
                  <source src="/video-1.mp4" type="video/mp4" />
                  Tu navegador no soporta el elemento de video.
                </video>
              ) : (
                <div 
                  className="w-full h-full bg-muted relative cursor-pointer group"
                  onClick={() => setIsVideoPlaying(true)}
                >
                  {/* Video Placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/20 flex flex-col items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-foreground/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Play className="w-8 h-8 text-background ml-1" fill="currentColor" />
                    </div>
                    <p className="font-body text-[11px] tracking-[0.2em] text-foreground/70 uppercase mt-6">
                      Proceso Creativo
                    </p>
                    <p className="font-display text-lg text-foreground italic mt-1">
                      Ver Video
                    </p>
                  </div>
                </div>
              )}
            </div>
            {/* Decorative elements */}
            <div className="absolute -z-10 top-8 -left-8 w-full h-full border border-primary/20"></div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-8 fade-up fade-up-delay-2">
            <div>
              <p className="font-body text-[11px] tracking-[0.4em] text-primary uppercase font-medium mb-3">
                El Artista
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-normal text-foreground leading-tight">
                Sobre
                <br />
                <span className="italic">Jair Castellanos</span>
              </h2>
            </div>

            <div className="space-y-5 font-body text-muted-foreground leading-relaxed">
              <p>
                Cada obra es una conversación con mi entorno, expresándome a través 
                de un lapicero y con cada trazo y capa de color, lograr texturas, 
                contrastes y expresiones.
              </p>
              <p>
                Mi proceso artístico con los bolígrafos nace como una necesidad de expresión, 
                llevando los trazos y usos cotidianos de este objeto a otro nivel, 
                logrando así un estilo que me permite crear composiciones que fluyen con 
                el color, la luz y el sentimiento. 
              </p>
              <p>
                Mi proceso artístico se nutre de entornos llenos de color, naturaleza y rostros, 
                que cuentan historias, plasmadas a través de un lapicero en un papel 
                o sobre un lienzo, buscando expresar emociones en cada composición.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
