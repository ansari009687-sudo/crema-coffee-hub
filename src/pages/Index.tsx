import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionWrapper from "@/components/SectionWrapper";
import { Star, MapPin, Clock, Coffee, UtensilsCrossed, Store } from "lucide-react";
import heroImg from "@/assets/hero-coffee.jpg";
import latteImg from "@/assets/latte-art.jpg";
import pastriesImg from "@/assets/pastries.jpg";
import patioImg from "@/assets/patio.jpg";
import espressoImg from "@/assets/espresso.jpg";
import bodegaImg from "@/assets/bodega.jpg";
import foodImg from "@/assets/food.jpg";

const menuHighlights = [
  { name: "Coffee Latte", desc: "Silky steamed milk meets rich third-wave espresso." },
  { name: "Vanilla Latte", desc: "House-made vanilla syrup with expertly pulled shots." },
  { name: "Sweet Potato Waffle", desc: "Crispy, fluffy, and perfectly spiced." },
  { name: "Daily Quiche Selection", desc: "Fresh-baked with seasonal fillings." },
  { name: "Butter Croissant", desc: "Flaky, buttery, golden perfection." },
  { name: "Pork Belly Banh Mi", desc: "Bold flavors on a toasted baguette." },
];

const reviews = [
  "From the moment we walked in, it felt incredibly homey.",
  "The vanilla latte was fantastic, topped with beautiful latte art.",
  "This place does true third-wave coffee — bright, acid-forward espresso done right.",
  "This place is the OG of coffee in Denver.",
];

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <img src={heroImg} alt="Crema Coffee House interior" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-warm-overlay" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto animate-fade-in">
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-4 leading-tight">
            Where Denver Starts Its Morning.
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 font-body">
            Artisan coffee. Eclectic bites. Chill RiNo vibes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" asChild>
              <Link to="/menu">View Menu</Link>
            </Button>
            <Button variant="hero-outline" asChild>
              <Link to="/visit">Visit Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <SectionWrapper className="bg-background">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            A RiNo Original
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Crema Coffee House is known for exceptional third-wave espresso, fresh house-baked pastries,
            and a cozy artistic atmosphere in Denver's RiNo district. Natural light, funky tables,
            patio seating, and welcoming staff make it a favorite community spot.
          </p>
          <Button variant="outline" asChild>
            <Link to="/visit">Learn More</Link>
          </Button>
        </div>
      </SectionWrapper>

      {/* Menu Highlights */}
      <SectionWrapper className="bg-secondary/50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
            What's Brewing
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuHighlights.map((item, i) => (
              <div
                key={item.name}
                className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{item.name}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild>
              <Link to="/menu">View Full Menu</Link>
            </Button>
          </div>
        </div>
      </SectionWrapper>

      {/* Atmosphere */}
      <SectionWrapper>
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                The Vibe
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Sun-drenched patio seating, prime people watching, intricate latte art,
                and a genuine community vibe. Bright natural light fills the creative interior —
                the perfect backdrop for your morning ritual.
              </p>
              <Button variant="outline" asChild>
                <Link to="/gallery">View Gallery</Link>
              </Button>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img src={patioImg} alt="Crema patio" className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Reviews Preview */}
      <SectionWrapper className="bg-secondary/50">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex items-center justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={24} className={i < 5 ? "fill-accent text-accent" : "text-muted"} />
            ))}
          </div>
          <p className="font-heading text-4xl font-bold text-foreground mb-1">4.6 Stars</p>
          <p className="text-muted-foreground mb-8">1,501 Reviews · $10–20 per person</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {reviews.map((r, i) => (
              <div key={i} className="bg-card rounded-xl p-6 shadow-sm text-left">
                <p className="text-foreground italic text-sm leading-relaxed">"{r}"</p>
              </div>
            ))}
          </div>

          <Button variant="outline" asChild>
            <Link to="/reviews">Read More Reviews</Link>
          </Button>
        </div>
      </SectionWrapper>

      {/* Bodega Preview */}
      <SectionWrapper>
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="rounded-xl overflow-hidden shadow-lg order-2 md:order-1">
              <img src={bodegaImg} alt="Crema Bodega" className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                More Than Just Coffee.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                A central market hustle & bustle vibe offering sundries & gifts,
                cooler items & snacks, and 22+ roasters — local & nationwide.
              </p>
              <Button variant="warm" asChild>
                <Link to="/bodega">Explore Bodega</Link>
              </Button>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Location */}
      <SectionWrapper className="bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8">Come Say Hi</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <div className="flex flex-col items-center gap-2">
              <MapPin size={28} />
              <p className="text-sm">2862 Larimer St<br />Denver, CO 80205</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Clock size={28} />
              <p className="text-sm">Coffee closes 5 PM<br />Bodega 8 AM – 8 PM</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <UtensilsCrossed size={28} />
              <p className="text-sm">$10–20 per person<br />Dine-in & Takeaway</p>
            </div>
          </div>
          <Button variant="hero-outline" asChild>
            <a href="https://maps.google.com/?q=2862+Larimer+St+Denver+CO+80205" target="_blank" rel="noopener noreferrer">
              Get Directions
            </a>
          </Button>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Index;
