import { Link } from "react-router-dom";
import { MapPin, Clock, Coffee } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 py-12 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-heading text-2xl font-bold mb-3">Crema Coffee House</h3>
          <div className="flex items-start gap-2 text-primary-foreground/80 text-sm mb-2">
            <MapPin size={16} className="mt-0.5 shrink-0" />
            <span>2862 Larimer St, Denver, CO 80205</span>
          </div>
        </div>

        <div>
          <h4 className="font-heading text-lg font-semibold mb-3">Hours</h4>
          <div className="space-y-2 text-sm text-primary-foreground/80">
            <div className="flex items-center gap-2">
              <Coffee size={14} />
              <span>Coffee — Open Daily, closes at 5 PM</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={14} />
              <span>Bodega — Daily 8 AM – 8 PM</span>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-heading text-lg font-semibold mb-3">Navigate</h4>
          <div className="grid grid-cols-2 gap-2 text-sm text-primary-foreground/80">
            {[
              { to: "/", label: "Home" },
              { to: "/menu", label: "Menu" },
              { to: "/reviews", label: "Reviews" },
              { to: "/gallery", label: "Gallery" },
              { to: "/bodega", label: "Bodega" },
              { to: "/visit", label: "Visit Us" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="hover:text-primary-foreground transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-xs text-primary-foreground/60">
        © 2026 Crema Coffee House. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
