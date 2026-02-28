import { useState } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import latteImg from "@/assets/latte-art.jpg";
import espressoImg from "@/assets/espresso.jpg";
import latte2Img from "@/assets/gallery-latte2.jpg";
import bodegaImg from "@/assets/gallery-bodega.jpg";
import saladImg from "@/assets/gallery-salad.jpg";
import menuboardImg from "@/assets/gallery-menuboard.jpg";
import croissantImg from "@/assets/gallery-croissant.jpg";
import windowImg from "@/assets/gallery-window.jpg";
import signImg from "@/assets/gallery-sign.jpg";
import muralImg from "@/assets/gallery-mural.jpg";
import barImg from "@/assets/gallery-bar.jpg";
import chandelierImg from "@/assets/gallery-chandelier.jpg";

const images = [
  { src: latteImg, alt: "Latte art", category: "coffee" },
  { src: espressoImg, alt: "Espresso pull", category: "coffee" },
  { src: latte2Img, alt: "Heart latte art", category: "coffee" },
  { src: croissantImg, alt: "Butter croissant & cortado", category: "food" },
  { src: saladImg, alt: "Salad bowl & latte", category: "food" },
  { src: chandelierImg, alt: "Patio chandelier", category: "patio" },
  { src: barImg, alt: "Bar interior", category: "vibe" },
  { src: muralImg, alt: "Wall mural", category: "vibe" },
  { src: windowImg, alt: "Window plants", category: "vibe" },
  { src: signImg, alt: "Community values", category: "vibe" },
  { src: menuboardImg, alt: "Menu board", category: "vibe" },
  { src: bodegaImg, alt: "Bodega counter", category: "vibe" },
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
