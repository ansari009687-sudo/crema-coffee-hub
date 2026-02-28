import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionWrapper from "@/components/SectionWrapper";
import { Star, MapPin, Clock, Coffee, UtensilsCrossed, Store, ArrowRight, BadgeCheck } from "lucide-react";
import heroImg from "@/assets/hero-coffee.jpg";
import patioImg from "@/assets/patio.jpg";
import bodegaImg from "@/assets/bodega.jpg";

const menuHighlights = [
{ name: "Coffee Latte", desc: "Silky steamed milk meets rich third-wave espresso.", icon: Coffee },
{ name: "Vanilla Latte", desc: "House-made vanilla syrup with expertly pulled shots.", icon: Coffee },
{ name: "Sweet Potato Waffle", desc: "Crispy, fluffy, and perfectly spiced.", icon: UtensilsCrossed },
{ name: "Daily Quiche Selection", desc: "Fresh-baked with seasonal fillings.", icon: UtensilsCrossed },
{ name: "Butter Croissant", desc: "Flaky, buttery, golden perfection.", icon: UtensilsCrossed },
{ name: "Pork Belly Banh Mi", desc: "Bold flavors on a toasted baguette.", icon: UtensilsCrossed }];


const reviews = [
"From the moment we walked in, it felt incredibly homey.",
"The vanilla latte was fantastic, topped with beautiful latte art.",
"This place does true third-wave coffee — bright, acid-forward espresso done right.",
"This place is the OG of coffee in Denver."];


const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        <img src={heroImg} alt="Crema Coffee House interior" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-warm-overlay" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-accent-foreground mb-5 leading-[1.1]">
            Where Denver Starts Its Morning.
          </h1>
          <p className="text-lg md:text-xl text-accent-foreground/85 mb-10 font-body max-w-xl mx-auto">
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

      {/* Quick Info Strip */}
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-5xl px-4 py-4">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2 text-sm">
            <span className="flex items-center gap-1.5"><MapPin size={14} /> 2862 Larimer St, Denver, CO</span>
            <span className="flex items-center gap-1.5"><Coffee size={14} /> Coffee closes 5 PM</span>
            <span className="flex items-center gap-1.5"><Clock size={14} /> Bodega 8 AM – 8 PM</span>
            <span className="flex items-center gap-1.5"><UtensilsCrossed size={14} /> Dine-in & Takeaway</span>
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
      <SectionWrapper className="bg-secondary/40">
        <div className="container mx-auto max-w-5xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3 text-center">
            What's Brewing
          </h2>
          <p className="text-muted-foreground text-center mb-10 max-w-md mx-auto">Handcrafted drinks & eclectic bites, made fresh daily.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {menuHighlights.map((item, i) =>
            <div
              key={item.name}
              className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 group"
              style={{ animationDelay: `${i * 100}ms` }}>

                <item.icon size={22} className="text-accent mb-3 group-hover:scale-110 transition-transform duration-200" />
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{item.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            )}
          </div>
          <div className="text-center mt-10">
            <Button asChild>
              <Link to="/menu">View Full Menu <ArrowRight size={16} /></Link>
            </Button>
          </div>
        </div>
      </SectionWrapper>

      {/* Atmosphere */}
      <SectionWrapper>
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                The Vibe
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Sun-drenched patio seating, prime people watching, intricate latte art,
                and a genuine community vibe. Bright natural light fills the creative interior —
                the perfect backdrop for your morning ritual.
              </p>
              <Button variant="outline" asChild>
                <Link to="/gallery">View Gallery <ArrowRight size={16} /></Link>
              </Button>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img alt="Crema patio" className="w-full h-80 object-cover hover:scale-105 transition-transform duration-700" src="/lovable-uploads/cd1bc4ea-0549-4f02-82ad-c0631abcc4a9.jpg" />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Reviews Preview */}
      <SectionWrapper className="bg-secondary/40">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex items-center justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) =>
            <Star key={i} size={26} className="fill-accent text-accent" />
            )}
          </div>
          <p className="font-heading text-4xl font-bold text-foreground mb-1">4.6 Stars</p>
          <p className="text-muted-foreground mb-10">1,501 Reviews · $10–20 per person</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {reviews.map((r, i) =>
            <div key={i} className="bg-card rounded-xl p-6 shadow-sm text-left hover:shadow-md transition-shadow duration-300">
                <BadgeCheck size={16} className="fill-accent text-accent mb-3 mx-px" />
                <p className="text-foreground italic text-sm leading-relaxed">"{r}"</p>
              </div>
            )}
          </div>

          <Button variant="outline" asChild>
            <Link to="/reviews">Read More Reviews <ArrowRight size={16} /></Link>
          </Button>
        </div>
      </SectionWrapper>

      {/* Bodega Preview */}
      <SectionWrapper>
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg order-2 md:order-1">
              <img alt="Crema Bodega" className="w-full h-80 object-cover hover:scale-105 transition-transform duration-700" src="/lovable-uploads/37330286-1785-4701-ab8c-6c6f27c67ffb.jpg" />
            </div>
            <div className="order-1 md:order-2">
              <Store size={28} className="text-accent mb-3" />
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                More Than Just Coffee.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                A central market hustle & bustle vibe offering sundries & gifts,
                cooler items & snacks, and 22+ roasters — local & nationwide.
              </p>
              <Button variant="warm" asChild>
                <Link to="/bodega">Explore Bodega <ArrowRight size={16} /></Link>
              </Button>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Location CTA */}
      <SectionWrapper className="bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-10">Come Say Hi</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
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
          <Button variant="hero" asChild>
            <a href="https://maps.google.com/?q=2862+Larimer+St+Denver+CO+80205" target="_blank" rel="noopener noreferrer">
              Get Directions <ArrowRight size={16} />
            </a>
          </Button>
        </div>
      </SectionWrapper>
    </div>);

};

export default Index;