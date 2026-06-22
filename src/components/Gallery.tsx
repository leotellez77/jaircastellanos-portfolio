import { useState } from "react";
import painting1 from "@/assets/painting-1.jpg";
import painting2 from "@/assets/painting-2.jpg";
import painting3 from "@/assets/painting-3.jpg";
import painting4 from "@/assets/painting-4.jpg";
import painting5 from "@/assets/painting-5.jpg";
import painting6 from "@/assets/painting-6.jpg";
import painting7 from "@/assets/painting-7.jpg";
import painting8 from "@/assets/painting-8.jpg";
import painting9 from "@/assets/painting-9.jpg";
import painting10 from "@/assets/painting-10.jpg";
import painting11 from "@/assets/painting-11.jpg";
import painting12 from "@/assets/painting-12.jpg";
import painting13 from "@/assets/painting-13.jpg";
import painting14 from "@/assets/painting-14.jpg";
import painting15 from "@/assets/painting-15.jpg";
import painting16 from "@/assets/painting-16.jpg";
import painting17 from "@/assets/painting-17.jpg";
import painting18 from "@/assets/painting-18.jpg";
import painting19 from "@/assets/painting-19.jpg";
import painting20 from "@/assets/painting-20.jpg";
import painting21 from "@/assets/painting-21.jpg";
import painting22 from "@/assets/painting-22.jpg";
import painting23 from "@/assets/painting-23.jpg";
import painting24 from "@/assets/painting-24.jpg";
import painting25 from "@/assets/painting-25.jpg";
import painting26 from "@/assets/painting-26.jpg";
import painting27 from "@/assets/painting-27.jpg";
import painting28 from "@/assets/painting-28.jpg";
import painting29 from "@/assets/painting-29.jpg";
import painting30 from "@/assets/painting-30.jpg";
import painting31 from "@/assets/painting-31.jpg";
import painting32 from "@/assets/painting-32.jpg";
import painting33 from "@/assets/painting-33.jpg";
import painting34 from "@/assets/painting-34.jpg";
import painting35 from "@/assets/painting-35.jpg";
import painting36 from "@/assets/painting-36.jpg";
import painting37 from "@/assets/painting-37.jpg";
import painting38 from "@/assets/painting-38.jpg";
import painting39 from "@/assets/painting-39.jpg";
import painting40 from "@/assets/painting-40.jpg";
import painting41 from "@/assets/painting-41.jpg";
import painting42 from "@/assets/painting-42.jpg";
import painting43 from "@/assets/painting-43.jpg";
import painting44 from "@/assets/painting-44.jpg";
import painting45 from "@/assets/painting-45.jpg";
import painting46 from "@/assets/painting-46.jpg";
import painting47 from "@/assets/painting-47.jpg";

const paintings = [
  {
    id: 1,
    image: painting1,
    title: "El Pescador",
    medium: "Bolígrafo sobre papel",
    year: "2024",
    size: "42 × 30 cm",
    category: "Retratos",
  },
  {
    id: 2,
    image: painting2,
    title: "Bodegón en Amoré",
    medium: "Bolígrafo sobre papel fotográfico",
    year: "2021",
    size: "28 × 22 cm",
    category: "Naturaleza",
  },
  {
    id: 3,
    image: painting3,
    title: "Abstracto Fluido",
    medium: "Bolígrafo sobre papel",
    year: "2023",
    size: "42 × 30 cm",
    category: "Abstracto",
  },
  {
    id: 4,
    image: painting4,
    title: "Eloisa",
    medium: "Bolígrafo sobre papel fotográfico",
    year: "2023",
    size: "28 × 22 cm",
    category: "Retratos",
  },
  {
    id: 5,
    image: painting5,
    title: "La Nona",
    medium: "Bolígrafo sobre papel acuarela",
    year: "2023",
    size: "22 × 28 cm",
    category: "Retratos",
  },
  {
    id: 6,
    image: painting6,
    title: "Cielo",
    medium: "Bolígrafo sobre papel",
    year: "2023",
    size: "42 × 30 cm",
    category: "Retratos",
  },
  {
    id: 7,
    image: painting7,
    title: "Narciso",
    medium: "Bolígrafo sobre papel",
    year: "2024",
    size: "42 × 30 cm",
    category: "Retratos",
  },
  {
    id: 8,
    image: painting8,
    title: "La Joven",
    medium: "Bolígrafo sobre papel",
    year: "2024",
    size: "42 × 30 cm",
    category: "Retratos",
  },
  {
    id: 9,
    image: painting9,
    title: "El joven Mario",
    medium: "Bolígrafo sobre papel",
    year: "2025",
    size: "42 × 30 cm",
    category: "Retratos",
  },
  {
    id: 10,
    image: painting10,
    title: "El Policía",
    medium: "Bolígrafo sobre papel",
    year: "2024",
    size: "42 × 30 cm",
    category: "Retratos",
  },
  {
    id: 11,
    image: painting11,
    title: "Mario Emilio",
    medium: "Bolígrafo sobre papel",
    year: "2022",
    size: "42 × 30 cm",
    category: "Retratos",
  },
  {
    id: 12,
    image: painting12,
    title: "El viejo Sebas",
    medium: "Bolígrafo sobre papel",
    year: "2025",
    size: "28 × 22 cm",
    category: "Retratos",
  },
  {
    id: 13,
    image: painting13,
    title: "Música",
    medium: "Bolígrafo sobre papel",
    year: "2023",
    size: "48 × 34 cm",
    category: "Naturaleza",
  },
  {
    id: 14,
    image: painting14,
    title: "La flor de la badea",
    medium: "Bolígrafo sobre papel",
    year: "2023",
    size: "48 × 34 cm",
    category: "Naturaleza",
  },
  {
    id: 15,
    image: painting15,
    title: "Anturios",
    medium: "Bolígrafo sobre papel fotográfico",
    year: "2021",
    size: "22 × 28 cm",
    category: "Naturaleza",
  },
  {
    id: 16,
    image: painting16,
    title: "Caladium",
    medium: "Bolígrafo sobre papel",
    year: "2021",
    size: "10 × 18 cm",
    category: "Naturaleza",
  },
  {
    id: 17,
    image: painting17,
    title: "El árbol de la vida",
    medium: "Bolígrafo sobre papel fotográfico",
    year: "2021",
    size: "22 × 28 cm",
    category: "Naturaleza",
  },
  {
    id: 18,
    image: painting18,
    title: "Bellota",
    medium: "Bolígrafo sobre lienzo",
    year: "2023",
    size: "23 × 30 cm",
    category: "Naturaleza",
  },
  {
    id: 19,
    image: painting19,
    title: "Bellota 2",
    medium: "Bolígrafo sobre lienzo",
    year: "2023",
    size: "23 × 30 cm",
    category: "Naturaleza",
  },
  {
    id: 20,
    image: painting20,
    title: "Bellota 3",
    medium: "Bolígrafo sobre lienzo",
    year: "2023",
    size: "23 × 30 cm",
    category: "Naturaleza",
  },
  {
    id: 21,
    image: painting21,
    title: "Hoja Sola",
    medium: "Bolígrafo sobre papel",
    year: "2021",
    size: "10 × 18 cm",
    category: "Naturaleza",
  },
  {
    id: 22,
    image: painting22,
    title: "Garlic",
    medium: "Bolígrafo sobre lienzo",
    year: "2024",
    size: "70 × 50 cm",
    category: "Naturaleza",
  },
  {
    id: 23,
    image: painting23,
    title: "Esparragos",
    medium: "Bolígrafo sobre lienzo",
    year: "2024",
    size: "70 × 50 cm",
    category: "Naturaleza",
  },
  {
    id: 24,
    image: painting24,
    title: "Anturiox",
    medium: "Bolígrafo sobre papel",
    year: "2024",
    size: "32 × 21 cm",
    category: "Naturaleza",
  },
  {
    id: 25,
    image: painting25,
    title: "Thumbergia",
    medium: "Bolígrafo sobre papel acuarela",
    year: "2024",
    size: "29 × 21 cm",
    category: "Naturaleza",
  },
  {
    id: 26,
    image: painting26,
    title: "Loro",
    medium: "Bolígrafo sobre papel",
    year: "2025",
    size: "12 × 10 cm",
    category: "Naturaleza",
  },
  {
    id: 27,
    image: painting27,
    title: "La virgen y el niño",
    medium: "Bolígrafo sobre papel acuarela",
    year: "2025",
    size: "20 × 29 cm",
    category: "Retratos",
  },
  {
    id: 28,
    image: painting28,
    title: "Virgen",
    medium: "Técnica mixta (bolígrafo y oleo sobre lienzo)",
    year: "2025",
    size: "20 × 25 cm",
    category: "Retratos",
  },
  {
    id: 29,
    image: painting29,
    title: "Icono Bizantino",
    medium: "Bolígrafo sobre papel fotográfico",
    year: "2025",
    size: "22 × 28 cm",
    category: "Retratos",
  },
  {
    id: 30,
    image: painting30,
    title: "La Femme",
    medium: "Bolígrafo sobre papel fotográfico",
    year: "2024",
    size: "22 × 28 cm",
    category: "Retratos",
  },
  {
    id: 31,
    image: painting31,
    title: "Virgen María",
    medium: "Bolígrafo sobre lienzo",
    year: "2025",
    size: "20 × 25 cm",
    category: "Retratos",
  },
  {
    id: 32,
    image: painting32,
    title: "Bodegón",
    medium: "Bolígrafo sobre lienzo",
    year: "2025",
    size: "80 × 60 cm",
    category: "Naturaleza",
  },
  {
    id: 33,
    image: painting33,
    title: "Ojo",
    medium: "Bolígrafo sobre papel fotográfico",
    year: "2023",
    size: "22 × 28 cm",
    category: "Abstracto",
  },
  {
    id: 34,
    image: painting34,
    title: "Homenaje a Picasso",
    medium: "Bolígrafo sobre papel",
    year: "2022",
    size: "34 × 48 cm",
    category: "Abstracto",
  },
  {
    id: 35,
    image: painting35,
    title: "Angel Caído",
    medium: "Bolígrafo sobre papel acuarela",
    year: "2023",
    size: "24 × 35 cm",
    category: "Abstracto",
  },
  {
    id: 36,
    image: painting36,
    title: "Vogue",
    medium: "Bolígrafo sobre papel fotográfico",
    year: "2023",
    size: "22 × 28 cm",
    category: "Abstracto",
  },
  {
    id: 37,
    image: painting37,
    title: "Vogue 2",
    medium: "Bolígrafo sobre papel fotográfico",
    year: "2023",
    size: "22 × 28 cm",
    category: "Abstracto",
  },
  {
    id: 38,
    image: painting38,
    title: "Florero",
    medium: "Bolígrafo sobre papel fotográfico",
    year: "2022",
    size: "22 × 28 cm",
    category: "Abstracto",
  },
  {
    id: 39,
    image: painting39,
    title: "Maternidad",
    medium: "Bolígrafo sobre papel fotográfico",
    year: "2022",
    size: "22 × 28 cm",
    category: "Abstracto",
  },
  {
    id: 40,
    image: painting40,
    title: "Abstracto",
    medium: "Bolígrafo sobre papel fotográfico",
    year: "2021",
    size: "20 × 20 cm",
    category: "Abstracto",
  },
  {
    id: 41,
    image: painting41,
    title: "El Flautista",
    medium: "Bolígrafo sobre papel fotográfico",
    year: "2021",
    size: "22 × 28 cm",
    category: "Abstracto",
  },
  {
    id: 42,
    image: painting42,
    title: "La Monalisa",
    medium: "Bolígrafo sobre papel fotográfico",
    year: "2021",
    size: "22 × 28 cm",
    category: "Abstracto",
  },
  {
    id: 43,
    image: painting43,
    title: "Malú",
    medium: "Oleo sobre lienzo",
    year: "2024",
    size: "23 × 30 cm",
    category: "Animales",
  },
  {
    id: 44,
    image: painting44,
    title: "Negro",
    medium: "Bolígrafo sobre lienzo",
    year: "2024",
    size: "23 × 30 cm",
    category: "Animales",
  },
  {
    id: 45,
    image: painting45,
    title: "Tonny",
    medium: "Bolígrafo sobre lienzo",
    year: "2024",
    size: "23 × 30 cm",
    category: "Animales",
  },
  {
    id: 46,
    image: painting46,
    title: "Mussa",
    medium: "Bolígrafo sobre papel",
    year: "2023",
    size: "34 × 48 cm",
    category: "Abstracto",
  },
  {
    id: 47,
    image: painting47,
    title: "A la mar",
    medium: "Bolígrafo sobre papel",
    year: "2022",
    size: "21 × 28 cm",
    category: "Abstracto",
  },
];

const categories = ["Todas", "Retratos", "Naturaleza", "Abstracto", "Animales",];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("Todas");

  const filteredPaintings = activeCategory === "Todas" 
    ? paintings 
    : paintings.filter(p => p.category === activeCategory);

  return (
    <section id="gallery" className="py-24 px-6 lg:px-12 bg-card/50">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 fade-up">
          <p className="font-body text-[11px] tracking-[0.4em] text-primary uppercase font-medium mb-3">
            Colección
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-normal text-foreground">
            Obras Recientes
          </h2>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12 fade-up fade-up-delay-1">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 font-body text-[11px] tracking-[0.15em] uppercase transition-all duration-300 ${
                activeCategory === category
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid - Masonry Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredPaintings.map((painting, index) => (
            <article
              key={painting.id}
              className={`group cursor-pointer fade-up fade-up-delay-${(index % 6) + 1}`}
            >
              <div className="gallery-frame bg-background p-3">
                <div className="overflow-hidden">
                  <img
                    src={painting.image}
                    alt={painting.title}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="pt-4 pb-2 px-1">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-lg text-foreground group-hover:text-primary transition-colors">
                        {painting.title}
                      </h3>
                      <p className="font-body text-[12px] text-muted-foreground mt-1">
                        {painting.medium}
                      </p>
                    </div>
                    <span className="font-body text-[11px] text-muted-foreground/70 shrink-0">
                      {painting.year}
                    </span>
                  </div>
                  <p className="font-body text-[11px] text-muted-foreground/60 mt-2">
                    {painting.size}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
