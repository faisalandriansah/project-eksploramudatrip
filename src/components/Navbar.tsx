import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const PRIMARY = "#0B3D91"; // biru tua logo
const ACCENT = "#F5B301"; // kuning logo
const ACCENT_HOVER = "#D99C00";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const openWA = () => {
    const nomor = "6281234567890"; // ganti nomor admin
    const text = encodeURIComponent(
      "Halo Eksplora Muda 👋\nSaya ingin tanya paket wisata."
    );
    window.open(`https://wa.me/${nomor}?text=${text}`, "_blank");
  };

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 animate-fade-in",
        isScrolled
          ? "backdrop-blur-md bg-white/90 shadow-lg border-b border-black/5"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        {/* Header bar */}
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo + brand */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 md:gap-3 group"
            aria-label="Eksplora Muda - kembali ke atas"
          >
            {/* Ambil dari public/logo.png */}
            <img
              src="/logo.png"
              alt="Eksplora Muda"
              className="w-14 h-14 md:w-24 md:h-24 object-contain rounded-md transition-transform duration-300 group-hover:scale-105"
            />

            <span
              className={cn(
                "text-lg md:text-2xl font-bold tracking-wide transition-colors",
                isScrolled ? "text-[#0B3D91]" : "text-white drop-shadow-lg"
              )}
            >
              Eksplora Muda
            </span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className={cn(
                "font-medium transition-colors hover:underline underline-offset-8",
                isScrolled ? "text-[#0B3D91]" : "text-white"
              )}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("destinations")}
              className={cn(
                "font-medium transition-colors hover:underline underline-offset-8",
                isScrolled ? "text-[#0B3D91]" : "text-white"
              )}
            >
              Destinasi
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className={cn(
                "font-medium transition-colors hover:underline underline-offset-8",
                isScrolled ? "text-[#0B3D91]" : "text-white"
              )}
            >
              Layanan
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className={cn(
                "font-medium transition-colors hover:underline underline-offset-8",
                isScrolled ? "text-[#0B3D91]" : "text-white"
              )}
            >
              Testimoni
            </button>

            {/* CTA WhatsApp */}
            <Button
              onClick={openWA}
              size="sm"
              className="font-semibold"
              style={{ backgroundColor: ACCENT, color: PRIMARY }}
            >
              <Phone className="mr-2 h-4 w-4" />
              Hubungi Kami
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-1.5 rounded-lg"
            aria-label="toggle menu"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
          >
            {isMobileMenuOpen ? (
              <X
                className={cn(
                  "w-5 h-5",
                  isScrolled ? "text-[#0B3D91]" : "text-white"
                )}
              />
            ) : (
              <Menu
                className={cn(
                  "w-5 h-5",
                  isScrolled ? "text-[#0B3D91]" : "text-white"
                )}
              />
            )}
          </button>
        </div>

        {/* Mobile Menu (compact) */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 animate-slide-up">
            <div
              className="flex flex-col gap-1.5 rounded-xl p-3 shadow-md"
              style={{ backgroundColor: "#FFFFFF", color: PRIMARY }}
            >
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setIsMobileMenuOpen(false);
                }}
                className="text-left font-medium py-1.5 text-base hover:text-[#0B3D91]/80"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("destinations")}
                className="text-left font-medium py-1.5 text-base hover:text-[#0B3D91]/80"
              >
                Destinasi
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="text-left font-medium py-1.5 text-base hover:text-[#0B3D91]/80"
              >
                Layanan
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-left font-medium py-1.5 text-base hover:text-[#0B3D91]/80"
              >
                Testimoni
              </button>

              <Button
                onClick={() => {
                  openWA();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full font-semibold py-2 text-base"
                style={{ backgroundColor: ACCENT, color: PRIMARY }}
              >
                <Phone className="mr-2 h-4 w-4" />
                Hubungi Kami
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* garis aksen tipis di bawah navbar saat tidak transparan */}
      {isScrolled && <div style={{ height: 2, backgroundColor: ACCENT }} />}
    </nav>
  );
};

export default Navbar;
