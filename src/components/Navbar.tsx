import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Compass } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 animate-fade-in",
        isScrolled
          ? "bg-background/80 backdrop-blur-lg shadow-elegant border-b border-border/50"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="w-10 h-10 bg-gradient-hero rounded-xl flex items-center justify-center shadow-glow">
              <Compass className="w-6 h-6 text-primary-foreground" />
            </div>
            <span
              className={cn(
                "text-2xl font-bold transition-colors",
                isScrolled ? "text-foreground" : "text-primary-foreground drop-shadow-lg"
              )}
            >
              TravelKu
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className={cn(
                "font-medium hover:text-primary transition-colors",
                isScrolled ? "text-foreground" : "text-primary-foreground drop-shadow-lg"
              )}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("destinations")}
              className={cn(
                "font-medium hover:text-primary transition-colors",
                isScrolled ? "text-foreground" : "text-primary-foreground drop-shadow-lg"
              )}
            >
              Destinasi
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className={cn(
                "font-medium hover:text-primary transition-colors",
                isScrolled ? "text-foreground" : "text-primary-foreground drop-shadow-lg"
              )}
            >
              Layanan
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className={cn(
                "font-medium hover:text-primary transition-colors",
                isScrolled ? "text-foreground" : "text-primary-foreground drop-shadow-lg"
              )}
            >
              Testimoni
            </button>
            <Button variant={isScrolled ? "default" : "secondary"} size="sm">
              Hubungi Kami
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X
                className={cn(
                  "w-6 h-6",
                  isScrolled ? "text-foreground" : "text-primary-foreground"
                )}
              />
            ) : (
              <Menu
                className={cn(
                  "w-6 h-6",
                  isScrolled ? "text-foreground" : "text-primary-foreground"
                )}
              />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-6 animate-slide-up">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setIsMobileMenuOpen(false);
                }}
                className="text-left font-medium hover:text-primary transition-colors py-2"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("destinations")}
                className="text-left font-medium hover:text-primary transition-colors py-2"
              >
                Destinasi
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="text-left font-medium hover:text-primary transition-colors py-2"
              >
                Layanan
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-left font-medium hover:text-primary transition-colors py-2"
              >
                Testimoni
              </button>
              <Button variant="default" size="sm" className="w-full">
                Hubungi Kami
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
