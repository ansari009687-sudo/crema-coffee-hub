import { useState } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import heroImg from "@/assets/hero-coffee.jpg";
import latteImg from "@/assets/latte-art.jpg";
import pastriesImg from "@/assets/pastries.jpg";
import patioImg from "@/assets/patio.jpg";
import espressoImg from "@/assets/espresso.jpg";
import bodegaImg from "@/assets/bodega.jpg";
import foodImg from "@/assets/food.jpg";
import vibeImg from "@/assets/vibe.jpg";

const images = [
  { src: latteImg, alt: "Latte art", category: "coffee" },
  { src: espressoImg, alt: "Espresso pull", category: "coffee" },
  { src: pastriesImg, alt: "Fresh pastries", category: "food" },
  { src: foodImg, alt: "Pork belly banh mi", category: "food" },
  { src: patioImg, alt: "Patio seating", category: "patio" },
  { src: heroImg, alt: "Interior", category: "vibe" },
  { src: vibeImg, alt: "Cozy corner", category: "vibe" },
  { src: bodegaImg, alt: "Bodega shelves", category: "vibe" },
];

const filters = ["All", "Coffee", "Food", "Vibe", "Patio"];

const GalleryPage = () => {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? images : images.filter((i) => i.category === filter.toLowerCase());

  return (
    <div className="pt-16">
      <section className="bg-primary text-primary-foreground section-padding text-center">
        <div className="container mx-auto max-w-2xl">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-primary-foreground/80 text-lg">A glimpse into the Crema experience.</p>
        </div>
      </section>

      <SectionWrapper>
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  filter === f
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((img, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default GalleryPage;
