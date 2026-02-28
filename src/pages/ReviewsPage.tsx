import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionWrapper from "@/components/SectionWrapper";
import { Star, ArrowRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Sam Yanez",
    tag: "Breakfast · Dine-in · $10–20",
    text: "The vanilla latte was fantastic, topped with beautiful latte art. The presentation matched the flavor. It felt incredibly homey.",
    food: 5, service: 5, atmosphere: 5,
    category: "food",
  },
  {
    name: "Lindy R",
    tag: "Pastries · Dine-in · $10–20",
    text: "The buttered croissant was flaky, warm & delicious. Fresh pastries every morning. The quiche did not disappoint.",
    food: 5, service: 5, atmosphere: 5,
    category: "food",
  },
  {
    name: "Thomas James",
    tag: "Espresso",
    text: "This place does true third-wave coffee — bright, acid-forward espresso done right.",
    category: "coffee",
  },
  {
    name: "Forrest deSpain",
    tag: "Long-time Customer",
    text: "I've been coming since 2010 and the greatness has never lapsed.",
    category: "longtime",
  },
  {
    name: "Mackenzie Miller",
    tag: "Atmosphere",
    text: "Bright faces, happy employees, lively customers — just what I needed to start the day right.",
    category: "atmosphere",
  },
  {
    name: "Jenny Mucheies",
    tag: "Atmosphere",
    text: "Great coffee and cozy atmosphere. Perfect spot to relax or get some work done.",
    category: "atmosphere",
  },
];

const filters = ["All", "Coffee", "Food", "Atmosphere", "Long-time Customers"];
const filterMap: Record<string, string> = {
  Coffee: "coffee",
  Food: "food",
  Atmosphere: "atmosphere",
  "Long-time Customers": "longtime",
};

const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {[...Array(count)].map((_, i) => (
      <Star key={i} size={14} className="fill-accent text-accent" />
    ))}
  </div>
);

const ReviewsPage = () => {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? testimonials : testimonials.filter((t) => t.category === filterMap[filter]);

  return (
    <div className="pt-16">
      <section className="bg-primary text-primary-foreground section-padding-sm text-center">
        <div className="container mx-auto max-w-2xl">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-5">Loved by Denver.</h1>
          <div className="flex items-center justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={24} className="fill-accent text-accent" />
            ))}
          </div>
          <p className="text-primary-foreground/90 text-lg font-medium">4.6 Stars · 1,501 Reviews</p>
        </div>
      </section>

      <SectionWrapper>
        <div className="container mx-auto max-w-2xl text-center mb-12">
          <p className="text-muted-foreground text-lg leading-relaxed">
            Known for exceptional third-wave espresso, fresh house-baked pastries, and a cozy artistic
            atmosphere in RiNo, Crema remains one of Denver's most beloved specialty coffee destinations.
          </p>
        </div>

        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  filter === f
                    ? "bg-accent text-accent-foreground shadow-sm"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {filtered.map((t) => (
              <div key={t.name} className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground italic leading-relaxed mb-4 text-sm">"{t.text}"</p>
                <div className="border-t border-border pt-3">
                  <h3 className="font-heading text-sm font-semibold text-foreground">{t.name}</h3>
                  {t.tag && <p className="text-muted-foreground text-xs mt-0.5">{t.tag}</p>}
                </div>
                {t.food && (
                  <div className="flex gap-4 text-xs text-muted-foreground mt-3">
                    <span className="flex items-center gap-1">Food: <Stars count={t.food} /></span>
                    <span className="flex items-center gap-1">Service: <Stars count={t.service!} /></span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-primary text-primary-foreground text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Experience Crema Yourself.</h2>
        <Button variant="hero" asChild>
          <Link to="/visit">Visit Us <ArrowRight size={16} /></Link>
        </Button>
      </SectionWrapper>
    </div>
  );
};

export default ReviewsPage;
