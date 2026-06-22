import { useState, useEffect } from "react";
import painting1 from "@/assets/painting-1.jpg";
import painting2 from "@/assets/painting-2.jpg";
import painting3 from "@/assets/painting-3.jpg";
import painting50 from "@/assets/painting-50.jpg";

const paintings = [
  {
    image: painting1,
    title: "El pescador",
    medium: "Bolígrafo sobre papel",
    year: "2024",
  },
  {
    image: painting2,
    title: "Bodegón en Amoré",
    medium: "Bolígrafo sobre papel fotográfico",
    year: "2021",
  },
  {
    image: painting3,
    title: "Abstracto Fluido",
    medium: "Bolígrafo sobre papel",
    year: "2023",
  },
  {
    image: painting50,
    title: "Eloisa",
    medium: "Bolígrafo sobre papel fotográfico",
    year: "2023",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % paintings.length);
        setIsTransitioning(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentPainting = paintings[currentIndex];

  return (
    <section className="min-h-screen flex items-center pt-24 pb-12 px-6 lg:px-12">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-5 space-y-8 fade-up">
            <div className="space-y-4">
              <p className="font-body text-[11px] tracking-[0.4em] text-primary uppercase font-medium">
                Colombia
              </p>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-normal text-foreground leading-[1.1]">
                Jair
                <br />
                <span className="italic">Castellanos</span>
              </h1>
            </div>
            
            <p className="font-body text-base text-muted-foreground leading-relaxed max-w-md">
              Artista plástico Colombiano. 
Mis obras exploran la riqueza visual a través del color, la luz y las emociones.
            </p>

            <div className="flex items-center gap-6 pt-4">
              <a
                href="#gallery"
                className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-body text-[12px] tracking-[0.15em] uppercase font-medium hover:bg-foreground/90 transition-all duration-300"
              >
                Ver Galería
              </a>
              <a
                href="#contact"
                className="font-body text-[12px] tracking-[0.15em] text-foreground uppercase font-medium border-b border-foreground/30 pb-1 hover:border-foreground transition-colors"
              >
                Contacto
              </a>
            </div>
          </div>

          {/* Featured Image Carousel */}
          <div className="lg:col-span-7 fade-up fade-up-delay-2">
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden gallery-frame bg-card p-3 md:p-4">
                <img
                  src={currentPainting.image}
                  alt={`${currentPainting.title} - Obra de Jair Castellanos`}
                  className={`w-full h-full object-cover transition-opacity duration-500 ${
                    isTransitioning ? "opacity-0" : "opacity-100"
                  }`}
                />
              </div>
              
              {/* Painting Info */}
              <div className="absolute -bottom-6 left-4 md:left-8 bg-background py-3 px-5 shadow-lg">
                <p className={`signature text-sm text-foreground transition-opacity duration-300 ${isTransitioning ? "opacity-0" : "opacity-100"}`}>
                  "{currentPainting.title}"
                </p>
                <p className={`font-body text-[11px] text-muted-foreground mt-1 tracking-wide transition-opacity duration-300 ${isTransitioning ? "opacity-0" : "opacity-100"}`}>
                  {currentPainting.medium} · {currentPainting.year}
                </p>
              </div>

              {/* Carousel Indicators */}
              <div className="absolute -bottom-6 right-4 md:right-8 flex gap-2">
                {paintings.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsTransitioning(true);
                      setTimeout(() => {
                        setCurrentIndex(index);
                        setIsTransitioning(false);
                      }, 300);
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-foreground w-6"
                        : "bg-foreground/30 hover:bg-foreground/50"
                    }`}
                    aria-label={`Ver pintura ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
