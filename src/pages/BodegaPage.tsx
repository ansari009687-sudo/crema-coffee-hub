import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionWrapper from "@/components/SectionWrapper";
import { ShoppingBag, Coffee, Gift, Snowflake } from "lucide-react";
import bodegaImg from "@/assets/bodega.jpg";

const sections = [
  {
    icon: ShoppingBag,
    title: "Central Market Hustle & Bustle",
    desc: "Step into a lively corner-store energy with curated goods and neighborhood charm.",
  },
  {
    icon: Gift,
    title: "Sundries & Gifts",
    desc: "Unique finds, locally made gifts, and essentials you didn't know you needed.",
  },
  {
    icon: Snowflake,
    title: "Cooler Items & Snacks",
    desc: "Grab-and-go drinks, snacks, and treats to fuel your day.",
  },
  {
    icon: Coffee,
    title: "22+ Roasters — Local & Nationwide",
    desc: "From Denver favorites to nationally acclaimed roasters, take the best beans home.",
  },
];

const BodegaPage = () => (
  <div className="pt-16">
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
      <img src={bodegaImg} alt="Crema Bodega" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-warm-overlay" />
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
          Just a Little More Than Your Neighborhood Corner Store.
        </h1>
      </div>
    </section>

    <SectionWrapper>
      <div className="container mx-auto max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sections.map((s) => (
            <div key={s.title} className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <s.icon size={32} className="text-accent mb-3" />
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>

    <SectionWrapper className="bg-secondary/50 text-center">
      <div className="container mx-auto max-w-xl">
        <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Bodega Hours</h2>
        <p className="text-lg text-foreground mb-2">Open Daily 8 AM – 8 PM</p>
        <p className="text-muted-foreground text-sm mb-6">Closed Thanksgiving and Christmas</p>
        <Button asChild>
          <Link to="/visit">Plan Your Visit</Link>
        </Button>
      </div>
    </SectionWrapper>
  </div>
);

export default BodegaPage;
