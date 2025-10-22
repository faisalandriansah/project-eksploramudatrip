import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Search } from "lucide-react";
import heroImage from "@/assets/sewu.png";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

// Array gambar hero - tambahkan gambar lu di sini
const heroImages = [
  heroImage, // gambar pertama dari assets
  "src/assets/kmbulo2.png", // placeholder 1
  "src/assets/bromo.jpg", // placeholder 2
  "src/assets/papuma.png", // placeholder 3
];

// ─────────────────────────────────────────────────────────────
// Animated Counter (starts when in view)
// ─────────────────────────────────────────────────────────────
const AnimatedCounter = ({
  end,
  duration = 2000,
  suffix = "",
}: {
  end: number;
  duration?: number;
  suffix?: string;
}) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let startTime = 0;
    let raf = 0 as any;
    const animate = (t: number) => {
      if (!startTime) startTime = t;
      const p = Math.min((t - startTime) / duration, 1);
      setCount(Math.floor(end * p));
      if (p < 1) raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [end, duration, inView]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

// ─────────────────────────────────────────────────────────────
// Variants for staggered entrance
// ─────────────────────────────────────────────────────────────
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const itemUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 18 },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6 } },
};

// ─────────────────────────────────────────────────────────────
// Floating Blob decorative component
// ─────────────────────────────────────────────────────────────
const FloatBlob: React.FC<{
  className?: string;
  from?: {
    x?: number;
    y?: number;
    scale?: number;
    rotate?: number;
    opacity?: number;
  };
  to?: {
    x?: number;
    y?: number;
    scale?: number;
    rotate?: number;
    opacity?: number;
  };
  duration?: number;
  delay?: number;
}> = ({ className = "", from = {}, to = {}, duration = 10, delay = 0 }) => {
  return (
    <motion.div
      className={
        "absolute blur-3xl rounded-full opacity-40 will-change-transform " +
        className
      }
      initial={from}
      animate={{
        ...to,
        transition: {
          repeat: Infinity,
          repeatType: "reverse",
          duration,
          delay,
        },
      }}
    />
  );
};

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const isClient = typeof window !== "undefined";
  const [isMdUp, setIsMdUp] = useState<boolean>(() =>
    isClient ? window.matchMedia("(min-width: 768px)").matches : false
  );

  // Auto slide effect
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000); // ganti setiap 6 detik (lebih lama biar lebih smooth)

    return () => clearInterval(interval);
  }, [isPaused]);

  useEffect(() => {
    if (!isClient) return;
    const onScroll = () => setScrollY(window.scrollY);
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = (e: MediaQueryListEvent) => setIsMdUp(e.matches);

    window.addEventListener("scroll", onScroll, { passive: true });
    mq.addEventListener("change", onChange);
    return () => {
      window.removeEventListener("scroll", onScroll);
      mq.removeEventListener("change", onChange);
    };
  }, [isClient]);

  // Parallax only on md+ for smooth mobile
  const parallaxY = useMemo(
    () => (isMdUp ? scrollY * 0.4 : 0),
    [isMdUp, scrollY]
  );

  return (
    <section
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 to-black"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false}>
          <motion.img
            key={currentImageIndex}
            src={heroImages[currentImageIndex]}
            alt={`Hero ${currentImageIndex + 1}`}
            className="absolute inset-0 w-full h-full object-cover object-center will-change-transform"
            style={{ transform: `translateY(${parallaxY}px)` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1.5,
              ease: [0.43, 0.13, 0.23, 0.96], // custom easing untuk smooth
            }}
          />
        </AnimatePresence>
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50 md:from-black/40 md:via-black/25 md:to-black/45"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.8 } }}
        />
      </div>

      {/* Decorative blobs (hidden on mobile) */}
      <div className="absolute inset-0 z-[1] pointer-events-none hidden md:block">
        <FloatBlob
          className="w-[420px] h-[420px] left-[-80px] top-[-80px] bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.6),transparent_60%)]"
          from={{ x: 0, y: 0 }}
          to={{ x: 30, y: 50 }}
          duration={12}
        />
        <FloatBlob
          className="w-[360px] h-[360px] right-[8%] top-[12%] bg-[radial-gradient(circle_at_center,hsl(var(--secondary)/0.6),transparent_60%)]"
          from={{ x: 0, y: 0, opacity: 0.35 }}
          to={{ x: -20, y: 40, opacity: 0.5 }}
          duration={14}
          delay={1.3}
        />
        <FloatBlob
          className="w-[300px] h-[300px] left-[35%] bottom-[-120px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.35),transparent_60%)]"
          from={{ y: 0, scale: 1 }}
          to={{ y: -30, scale: 1.05 }}
          duration={16}
          delay={0.6}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16 md:py-0 max-w-screen-xl"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={itemUp} className="mb-5 md:mb-6">
          <motion.span
            className="px-4 py-1.5 text-xs sm:text-sm font-medium bg-gradient-to-r from-primary/95 to-secondary/95 text-white rounded-full shadow-xl inline-flex items-center gap-2 backdrop-blur-sm"
            animate={{
              scale: [1, 1.05, 1],
              boxShadow: [
                "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                "0 25px 50px -12px rgba(var(--primary-rgb), 0.5)",
                "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.08 }}
          >
            <motion.span
              className="text-sm"
              animate={{ rotate: [0, 10, -10, 10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
                ease: "easeInOut",
              }}
            >
              💫
            </motion.span>
            <span className="hidden sm:inline">
              Siap Liburan? Kami Punya Penawaran Menarik Untukmu!
            </span>
            <span className="sm:hidden">Penawaran Menarik!</span>
          </motion.span>
        </motion.div>

        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-5 text-white leading-[1.15] tracking-tight"
          variants={itemUp}
        >
          <span className="block bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
            Temukan Keindahan Dunia
          </span>
          <motion.span
            className="block text-primary mt-1 sm:mt-2 drop-shadow-2xl"
            initial={{ backgroundPositionX: 0 }}
            animate={{ backgroundPositionX: 200 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 3,
            }}
          >
            Bersama Kami
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-10 px-4 leading-relaxed"
          variants={fadeIn}
        >
          Mulai petualangan baru, nikmati destinasi eksotis, dan ciptakan
          kenangan indah di setiap perjalanan Anda.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-10 sm:mb-12 md:mb-16 px-4"
          variants={itemUp}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="w-full sm:w-auto h-11 sm:h-12 text-sm sm:text-base px-6 sm:px-8 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-2xl shadow-primary/25 font-semibold"
            >
              <Search className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
              Mulai Petualangan
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto h-11 sm:h-12 text-sm sm:text-base px-6 sm:px-8 bg-white/15 backdrop-blur-xl border-2 border-white/50 text-white hover:bg-white/25 hover:border-white font-semibold transition-all"
            >
              <Calendar className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
              Lihat Paket Wisata
            </Button>
          </motion.div>
        </motion.div>

        {/* Stats: responsif dan menarik */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5 max-w-4xl mx-auto px-4"
          variants={containerVariants}
        >
          {[
            {
              id: 1,
              gradient: "from-white to-primary",
              value: <AnimatedCounter end={500} suffix="+" />,
              title: "Destinasi Eksotis",
              sub: "Di seluruh dunia",
              icon: (
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-1 sm:mb-2 opacity-70" />
              ),
            },
            {
              id: 2,
              gradient: "from-white to-secondary",
              value: <AnimatedCounter end={10} suffix="K+" />,
              title: "Pelanggan Bahagia",
              sub: "Kepercayaan terjaga",
              icon: <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">👥</div>,
            },
            {
              id: 3,
              gradient: "from-yellow-200 to-yellow-400",
              value: (
                <>
                  <AnimatedCounter end={5} />⭐
                </>
              ),
              title: "Rating Sempurna",
              sub: "Testimoni nyata",
              icon: <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">🏆</div>,
            },
          ].map((card, idx) => (
            <motion.div
              key={card.id}
              className="text-center bg-white/10 backdrop-blur-xl rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-white/30 shadow-xl hover:shadow-2xl hover:bg-white/15 transition-all will-change-transform group"
              variants={itemUp}
              whileHover={{ scale: 1.05, y: -6 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="group-hover:scale-110 transition-transform">
                {card.icon}
              </div>
              <div
                className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2 bg-gradient-to-r ${card.gradient} bg-clip-text text-transparent drop-shadow-lg`}
              >
                {card.value}
              </div>
              <div className="text-white font-semibold text-sm sm:text-base mb-0.5 sm:mb-1">
                {card.title}
              </div>
              <div className="text-white/70 text-xs sm:text-sm">{card.sub}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator (desktop only) */}
      <motion.div
        className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.8 } }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/80 rounded-full flex items-start justify-center p-2"
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-1 h-3 bg-white/80 rounded-full" />
        </motion.div>
      </motion.div>

      {/* Slideshow Indicators */}
      <div className="absolute bottom-8 md:bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? "w-8 bg-white"
                : "w-2 bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
