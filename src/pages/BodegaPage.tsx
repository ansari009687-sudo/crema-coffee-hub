import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionWrapper from "@/components/SectionWrapper";
import { ShoppingBag, Coffee, Gift, Snowflake, Clock, ArrowRight } from "lucide-react";
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
        <h1 className="font-heading text-3xl md:text-5xl font-bold text-accent-foreground mb-4 leading-tight">
          Just a Little More Than Your Neighborhood Corner Store.
        </h1>
      </div>
    </section>

    <SectionWrapper>
      <div className="container mx-auto max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {sections.map((s) => (
            <div key={s.title} className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
              <s.icon size={28} className="text-accent mb-3" />
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>

    <SectionWrapper className="bg-secondary/40 text-center">
      <div className="container mx-auto max-w-xl">
        <Clock size={32} className="text-accent mx-auto mb-4" />
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Bodega Hours</h2>
        <p className="text-lg text-foreground font-medium mb-2">Open Daily 8 AM – 8 PM</p>
        <p className="text-muted-foreground text-sm mb-8">Closed Thanksgiving and Christmas</p>
        <Button variant="warm" asChild>
          <Link to="/visit">Plan Your Visit <ArrowRight size={16} /></Link>
        </Button>
      </div>
    </SectionWrapper>
  </div>
);

export default BodegaPage;
