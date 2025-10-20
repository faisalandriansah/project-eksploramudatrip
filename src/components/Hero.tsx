import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Calendar, Search } from "lucide-react";
import heroImage from "@/assets/2.png";
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
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/30 rounded-full blur-3xl animate-float" />
        <div className="absolute top-40 right-20 w-40 h-40 bg-secondary/30 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute bottom-40 left-1/4 w-36 h-36 bg-accent/30 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 right-1/3 w-28 h-28 bg-yellow-400/20 rounded-full blur-3xl animate-float-delayed" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
        <div className="mb-6 inline-block">
          <span className="px-6 py-2 bg-gradient-to-r from-primary/90 to-secondary/90 backdrop-blur-sm text-white rounded-full text-sm font-semibold shadow-lg animate-pulse">
            ✨ Promo Spesial Akhir Tahun - Diskon hingga 50%
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white drop-shadow-2xl leading-tight">
          <span className="bg-gradient-to-r from-white via-primary-foreground to-white bg-clip-text text-transparent animate-gradient">
            Jelajahi Dunia
          </span>
          <br />
          <span className="text-primary drop-shadow-2xl">Bersama Kami</span>
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl mb-12 text-white/95 drop-shadow-lg max-w-3xl mx-auto font-light leading-relaxed">
          Temukan destinasi impian Anda dan ciptakan kenangan tak terlupakan di setiap perjalanan
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-2xl hover:shadow-primary/50 hover:scale-105 transition-all duration-300 group">
            <Search className="mr-2 group-hover:rotate-12 transition-transform" />
            Mulai Petualangan
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 backdrop-blur-md border-2 border-white/50 text-white hover:bg-white/20 hover:border-white shadow-xl hover:scale-105 transition-all duration-300">
            <Calendar className="mr-2" />
            Lihat Paket Wisata
          </Button>
        </div>

        {/* Stats with Animated Counter */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <div className="text-center bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/30 hover:border-white/50 hover:scale-110 hover:-translate-y-2 transition-all duration-500 shadow-2xl group cursor-pointer">
            <div className="text-5xl font-bold mb-3 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent group-hover:scale-125 transition-transform duration-500">
              <AnimatedCounter end={500} suffix="+" />
            </div>
            <div className="text-white/95 text-lg font-medium">Destinasi Eksotis</div>
            <div className="text-white/60 text-sm mt-1">Di seluruh dunia</div>
          </div>
          <div className="text-center bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/30 hover:border-white/50 hover:scale-110 hover:-translate-y-2 transition-all duration-500 shadow-2xl group cursor-pointer">
            <div className="text-5xl font-bold mb-3 bg-gradient-to-r from-white to-secondary bg-clip-text text-transparent group-hover:scale-125 transition-transform duration-500">
              <AnimatedCounter end={10} suffix="K+" />
            </div>
            <div className="text-white/95 text-lg font-medium">Pelanggan Bahagia</div>
            <div className="text-white/60 text-sm mt-1">Kepercayaan terjaga</div>
          </div>
          <div className="text-center bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/30 hover:border-white/50 hover:scale-110 hover:-translate-y-2 transition-all duration-500 shadow-2xl group cursor-pointer">
            <div className="text-5xl font-bold mb-3 bg-gradient-to-r from-white to-yellow-300 bg-clip-text text-transparent group-hover:scale-125 transition-transform duration-500">
              <AnimatedCounter end={4.9} suffix="" />⭐
            </div>
            <div className="text-white/95 text-lg font-medium">Rating Sempurna</div>
            <div className="text-white/60 text-sm mt-1">Testimoni nyata</div>
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