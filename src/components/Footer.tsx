import { Link } from "react-router-dom";
import { MapPin, Clock, Coffee, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 py-10 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-heading text-xl font-bold mb-3">Crema</h3>
          <div className="flex items-start gap-2 text-primary-foreground/75 text-sm">
            <MapPin size={14} className="mt-0.5 shrink-0" />
            <span>2862 Larimer St<br />Denver, CO 80205</span>
          </div>
        </div>

        <div>
          <h4 className="font-heading text-sm font-semibold mb-3 uppercase tracking-wide text-primary-foreground/60">Hours</h4>
          <div className="space-y-2 text-sm text-primary-foreground/75">
            <div className="flex items-center gap-2">
              <Coffee size={13} />
              <span>Coffee closes 5 PM</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={13} />
              <span>Bodega 8 AM – 8 PM</span>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-heading text-sm font-semibold mb-3 uppercase tracking-wide text-primary-foreground/60">Navigate</h4>
          <div className="grid grid-cols-2 gap-1.5 text-sm text-primary-foreground/75">
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

        <div>
          <h4 className="font-heading text-sm font-semibold mb-3 uppercase tracking-wide text-primary-foreground/60">Social</h4>
          <div className="flex gap-3">
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors" aria-label="Twitter">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15 mt-8 pt-5 text-center text-xs text-primary-foreground/50">
        © 2026 Crema Coffee House. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
