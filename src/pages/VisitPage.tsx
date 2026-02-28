import { Button } from "@/components/ui/button";
import SectionWrapper from "@/components/SectionWrapper";
import { MapPin, Clock, Coffee, UtensilsCrossed, DollarSign, Car, ArrowRight } from "lucide-react";

const infoItems = [
  { icon: MapPin, label: "Address", value: "2862 Larimer St\nDenver, CO 80205" },
  { icon: Coffee, label: "Coffee Hours", value: "Open Daily\nCloses at 5 PM" },
  { icon: Clock, label: "Bodega Hours", value: "Daily 8 AM – 8 PM\nClosed Thanksgiving & Christmas" },
  { icon: DollarSign, label: "Price Range", value: "$10–20 per person" },
  { icon: UtensilsCrossed, label: "Services", value: "Dine-in & Takeaway" },
  { icon: Car, label: "Parking", value: "Street parking available\nalong Larimer St" },
];

const VisitPage = () => (
  <div className="pt-16">
    <section className="bg-primary text-primary-foreground section-padding-sm text-center">
      <div className="container mx-auto max-w-2xl">
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Visit Us</h1>
        <p className="text-primary-foreground/80 text-lg">
          We'd love to see you. Stop by for a cup and stay awhile.
        </p>
      </div>
    </section>

    <SectionWrapper>
      <div className="container mx-auto max-w-4xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {infoItems.map((item) => (
            <div key={item.label} className="bg-card rounded-xl p-6 shadow-sm text-center hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
              <item.icon size={28} className="text-accent mx-auto mb-3" />
              <h3 className="font-heading text-base font-semibold text-foreground mb-2">{item.label}</h3>
              <p className="text-muted-foreground text-sm whitespace-pre-line">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Map */}
        <div className="rounded-xl overflow-hidden shadow-md mb-10">
          <iframe
            title="Crema Coffee House location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.3!2d-104.9847!3d39.7631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s2862+Larimer+St+Denver+CO!5e0!3m2!1sen!2sus!4v1"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </div>

        <div className="text-center">
          <Button variant="warm" size="lg" asChild>
            <a href="https://maps.google.com/?q=2862+Larimer+St+Denver+CO+80205" target="_blank" rel="noopener noreferrer">
              Get Directions <ArrowRight size={16} />
            </a>
          </Button>
        </div>
      </div>
    </SectionWrapper>
  </div>
);

export default VisitPage;
