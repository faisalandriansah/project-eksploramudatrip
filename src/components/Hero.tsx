import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Search, ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Demo images
const heroImages = [
  "src/assets/bromo.jpg",
  "src/assets/kmbulo2.png",
  "src/assets/sewu.png",
  "src/assets/papuma.png",
];

const HeroSearchSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const isClient = typeof window !== "undefined";
  const [isMdUp, setIsMdUp] = useState(() =>
    isClient ? window.matchMedia("(min-width: 768px)").matches : false
  );

  // Auto slide effect - 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    const onScroll = () => setScrollY(window.scrollY);
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = (e) => setIsMdUp(e.matches);

    window.addEventListener("scroll", onScroll, { passive: true });
    mq.addEventListener("change", onChange);
    return () => {
      window.removeEventListener("scroll", onScroll);
      mq.removeEventListener("change", onChange);
    };
  }, [isClient]);

  const parallaxY = useMemo(
    () => (isMdUp ? scrollY * 0.3 : 0),
    [isMdUp, scrollY]
  );

  // Navigation handlers
  const goToPrevious = () => {
    setDirection(-1);
    setCurrentImageIndex(
      (prev) => (prev - 1 + heroImages.length) % heroImages.length
    );
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
  };

  const goToSlide = (index) => {
    setDirection(index > currentImageIndex ? 1 : -1);
    setCurrentImageIndex(index);
  };

  // Slide animation variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
    })
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden bg-black">
        {/* Background Slideshow */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentImageIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 200, damping: 30 },
                opacity: { duration: 0.5 }
              }}
              className="absolute inset-0"
              style={{ 
                transform: `translateY(${parallaxY}px)`,
              }}
            >
              <img
                src={heroImages[currentImageIndex]}
                alt={`Adventure ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          </AnimatePresence>
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>

        {/* Content */}
        <motion.div
          className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left pt-20 pb-12 md:pt-24 md:pb-16 max-w-7xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="inline-block mb-6"
          >
            <span className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-medium">
              ✨ Discover Your Next Journey
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight tracking-tight max-w-4xl mx-auto md:mx-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Adventure Begins
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mt-2">
              Here
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-2xl mx-auto md:mx-0 mb-10 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Choose from thousands of organized adventures and create unforgettable memories
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="w-full sm:w-auto h-14 text-base px-10 bg-white text-gray-900 hover:bg-gray-100 shadow-2xl font-semibold rounded-xl"
              >
                Check out deals
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto h-14 text-base px-10 bg-white/10 backdrop-blur-md text-white border-2 border-white/30 hover:bg-white/20 hover:border-white/50 shadow-xl font-semibold rounded-xl"
              >
                Explore More
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Navigation Arrows - Desktop */}
        <div className="hidden md:flex absolute inset-y-0 left-0 right-0 items-center justify-between px-8 z-20 pointer-events-none">
          <motion.button
            className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 border border-white/30 flex items-center justify-center shadow-xl transition-all pointer-events-auto"
            whileHover={{ scale: 1.1, x: -3 }}
            whileTap={{ scale: 0.95 }}
            onClick={goToPrevious}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </motion.button>
          <motion.button
            className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 border border-white/30 flex items-center justify-center shadow-xl transition-all pointer-events-auto"
            whileHover={{ scale: 1.1, x: 3 }}
            whileTap={{ scale: 0.95 }}
            onClick={goToNext}
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </motion.button>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroImages.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? "w-8 bg-white"
                  : "w-2 bg-white/40 hover:bg-white/60"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Search Bar Section */}
      <section className="relative -mt-16 z-20 px-4 pb-24">
        <motion.div
          className="container mx-auto max-w-6xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 border border-gray-100">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Destination Input */}
              <div className="lg:col-span-1">
                <label className="text-sm font-semibold text-gray-700 mb-2 block">
                  Where to?
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search destination"
                    className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:border-gray-300"
                  />
                </div>
              </div>

              {/* Date Input */}
              <div className="lg:col-span-1">
                <label className="text-sm font-semibold text-gray-700 mb-2 block">
                  When?
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="date"
                    className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:border-gray-300"
                  />
                </div>
              </div>

              {/* Type Select */}
              <div className="lg:col-span-1">
                <label className="text-sm font-semibold text-gray-700 mb-2 block">
                  Adventure Type
                </label>
                <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:border-gray-300 bg-white">
                  <option>All adventures</option>
                  <option>🏖️ Beach</option>
                  <option>⛰️ Mountain</option>
                  <option>🏙️ City</option>
                  <option>🏕️ Camping</option>
                  <option>🎿 Winter</option>
                </select>
              </div>

              {/* Search Button */}
              <div className="lg:col-span-1 flex items-end">
                <motion.div 
                  className="w-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button className="w-full h-[52px] bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all">
                    <Search className="w-5 h-5 mr-2" />
                    Search
                  </Button>
                </motion.div>
              </div>
            </div>

            {/* Quick Filters */}
            <div className="mt-6 pt-6 border-t border-gray-100">
              <p className="text-xs font-medium text-gray-500 mb-3">Popular destinations:</p>
              <div className="flex flex-wrap gap-2">
                {['Bali', 'Mount Bromo', 'Raja Ampat', 'Lombok', 'Yogyakarta'].map((dest) => (
                  <motion.button
                    key={dest}
                    className="px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm text-gray-700 font-medium transition-all border border-gray-200 hover:border-gray-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {dest}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default HeroSearchSection;