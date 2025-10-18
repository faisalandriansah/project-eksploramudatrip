import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Calendar, Search } from "lucide-react";
import heroImage from "@/assets/hero-beach.jpg";
import { useEffect, useState } from "react";

const AnimatedCounter = ({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      setCount(Math.floor(end * percentage));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
};

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <img
          src={heroImage}
          alt="Beautiful tropical beach destination"
          className="w-full h-[120%] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute top-40 right-20 w-32 h-32 bg-secondary/20 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-accent/20 rounded-full blur-3xl animate-float" />
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

        {/* Stats with Animated Counter */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 group">
            <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
              <AnimatedCounter end={500} suffix="+" />
            </div>
            <div className="text-white/90">Destinasi</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 group">
            <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
              <AnimatedCounter end={10} suffix="K+" />
            </div>
            <div className="text-white/90">Pelanggan</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 group">
            <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
              <AnimatedCounter end={4.9} suffix="" />
            </div>
            <div className="text-white/90">Rating</div>
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
