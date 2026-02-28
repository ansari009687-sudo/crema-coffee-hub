import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionWrapper from "@/components/SectionWrapper";
import { Star } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Sam Yanez",
    tag: "Breakfast · Dine-in · $10–20",
    text: "From the moment we walked in, it felt incredibly homey — like stepping into a cozy corner of your own house. The vanilla latte was fantastic, topped with beautiful latte art. The presentation matched the flavor.",
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
    tag: "",
    text: "Bright faces, happy employees, lively customers — just what I needed to start the day right.",
    category: "atmosphere",
  },
  {
    name: "Jenny Mucheies",
    tag: "",
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
      <section className="bg-primary text-primary-foreground section-padding text-center">
        <div className="container mx-auto max-w-2xl">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Loved by Denver.</h1>
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={22} className="fill-accent text-accent" />
            ))}
          </div>
          <p className="text-primary-foreground/90 text-lg">4.6 Stars · 1,501 Reviews</p>
        </div>
      </section>

      <SectionWrapper>
        <div className="container mx-auto max-w-2xl text-center mb-10">
          <p className="text-muted-foreground text-lg leading-relaxed">
            Known for exceptional third-wave espresso, fresh house-baked pastries, and a cozy artistic
            atmosphere in RiNo, Crema Coffee House remains one of Denver's most beloved specialty
            coffee destinations.
          </p>
        </div>

        <div className="container mx-auto max-w-4xl">
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

          <div className="grid gap-5">
            {filtered.map((t) => (
              <div key={t.name} className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground">{t.name}</h3>
                    {t.tag && <p className="text-muted-foreground text-xs mt-0.5">{t.tag}</p>}
                  </div>
                </div>
                <p className="text-foreground italic leading-relaxed mb-3">"{t.text}"</p>
                {t.food && (
                  <div className="flex gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">Food: <Stars count={t.food} /></span>
                    <span className="flex items-center gap-1">Service: <Stars count={t.service!} /></span>
                    <span className="flex items-center gap-1">Atmosphere: <Stars count={t.atmosphere!} /></span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-primary text-primary-foreground text-center">
        <h2 className="font-heading text-3xl font-bold mb-6">Experience Crema Yourself.</h2>
        <Button variant="hero-outline" asChild>
          <Link to="/visit">Visit Us</Link>
        </Button>
      </SectionWrapper>
    </div>
  );
};

export default ReviewsPage;
