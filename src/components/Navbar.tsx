import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/reviews", label: "Reviews" },
  { to: "/gallery", label: "Gallery" },
  { to: "/bodega", label: "Bodega" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        <Link to="/" className="font-heading text-2xl font-bold text-foreground tracking-tight">
          Crema
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors duration-200 relative pb-1 ${
                location.pathname === link.to
                  ? "text-accent after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent after:rounded-full"
                  : "text-foreground/70 hover:text-accent"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button variant="warm" size="sm" asChild className="rounded-full px-5">
            <Link to="/visit">Visit Us</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-background border-b border-border px-4 pb-4 pt-1 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`py-3 px-3 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === link.to
                  ? "bg-secondary text-accent font-semibold"
                  : "text-foreground/70 hover:bg-secondary"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button variant="warm" asChild className="mt-2 rounded-full">
            <Link to="/visit">Visit Us</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
