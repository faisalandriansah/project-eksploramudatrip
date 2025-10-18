import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-beach.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Beautiful tropical beach destination"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground drop-shadow-lg">
          Jelajahi Dunia Bersama Kami
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-primary-foreground/90 drop-shadow-md max-w-3xl mx-auto">
          Temukan destinasi impian Anda dan ciptakan kenangan tak terlupakan
        </p>

        {/* Search Bar */}
        <div className="bg-card rounded-2xl p-6 shadow-glow max-w-4xl mx-auto animate-slide-up">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
              <MapPin className="text-primary" />
              <Input
                placeholder="Kemana tujuan Anda?"
                className="border-0 bg-transparent focus-visible:ring-0"
              />
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
              <Calendar className="text-primary" />
              <Input
                type="date"
                className="border-0 bg-transparent focus-visible:ring-0"
              />
            </div>
            <Button variant="hero" size="lg" className="w-full">
              <Search className="mr-2" />
              Cari Sekarang
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-16 animate-slide-up">
          <div className="text-primary-foreground">
            <div className="text-4xl font-bold mb-2">500+</div>
            <div className="text-sm opacity-90">Destinasi</div>
          </div>
          <div className="text-primary-foreground">
            <div className="text-4xl font-bold mb-2">10K+</div>
            <div className="text-sm opacity-90">Pelanggan</div>
          </div>
          <div className="text-primary-foreground">
            <div className="text-4xl font-bold mb-2">4.9★</div>
            <div className="text-sm opacity-90">Rating</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
