import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Search } from "lucide-react";
import heroImage from "@/assets/2.png";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

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
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 18 } },
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
  from?: { x?: number; y?: number; scale?: number; rotate?: number; opacity?: number };
  to?: { x?: number; y?: number; scale?: number; rotate?: number; opacity?: number };
  duration?: number;
  delay?: number;
}> = ({ className = "", from = {}, to = {}, duration = 10, delay = 0 }) => {
  return (
    <motion.div
      className={
        "absolute blur-3xl rounded-full opacity-40 will-change-transform " + className
      }
      initial={from}
      animate={{ ...to, transition: { repeat: Infinity, repeatType: "reverse", duration, delay } }}
    />
  );
};

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const isClient = typeof window !== "undefined";
  const [isMdUp, setIsMdUp] = useState<boolean>(() =>
    isClient ? window.matchMedia("(min-width: 768px)").matches : false
  );

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
  const parallaxY = useMemo(() => (isMdUp ? scrollY * 0.4 : 0), [isMdUp, scrollY]);

  return (
    <section className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src={heroImage}
          alt="Hero"
          className="w-full h-full object-cover will-change-transform"
          style={{ transform: `translateY(${parallaxY}px)` }}
          initial={{ scale: 1.1, opacity: 0.2 }}
          animate={{ scale: 1, opacity: 1, transition: { duration: 1.2, ease: "easeOut" } }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/70 md:from-black/60 md:via-black/40 md:to-black/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.8 } }}
        />
      </div>

      {/* Decorative blobs (hidden on mobile) */}
      <div className="absolute inset-0 z-[1] pointer-events-none hidden md:block">
        <FloatBlob
          className="w-[420px] h-[420px] left-[-80px] top-[-80px] bg-[radial-gradient(circle_at_center,theme(colors.primary/60),transparent_60%)]"
          from={{ x: 0, y: 0 }}
          to={{ x: 30, y: 50 }}
          duration={12}
        />
        <FloatBlob
          className="w-[360px] h-[360px] right-[8%] top-[12%] bg-[radial-gradient(circle_at_center,theme(colors.secondary/60),transparent_60%)]"
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
        className="relative z-10 container mx-auto px-4 text-center mt-24 md:mt-0 max-w-screen-sm md:max-w-3xl"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={itemUp}>
          <span className="px-4 py-1.5 text-xs sm:text-sm bg-gradient-to-r from-primary/90 to-secondary/90 text-white rounded-full shadow-lg inline-block">
            ✨ Promo Spesial Akhir Tahun - Diskon hingga 50%
          </span>
        </motion.div>

        <motion.h1
          className="text-3xl sm:text-5xl md:text-7xl font-bold mb-3 sm:mb-5 text-white leading-tight"
          variants={itemUp}
        >
          <span className="bg-gradient-to-r from-white via-primary-foreground to-white bg-clip-text text-transparent">
            Jelajahi Dunia
          </span>
          <br />
          <motion.span
            className="text-primary inline-block"
            initial={{ backgroundPositionX: 0 }}
            animate={{ backgroundPositionX: 200 }}
            transition={{ repeat: Infinity, repeatType: "reverse", duration: 3 }}
          >
            Bersama Kami
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-sm sm:text-base md:text-2xl text-white/95 max-w-2xl mx-auto mb-8 sm:mb-10"
          variants={fadeIn}
        >
          Temukan destinasi impian Anda dan ciptakan kenangan tak terlupakan di setiap perjalanan
        </motion.p>

        <motion.div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-10 sm:mb-14" variants={itemUp}>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Button
              size="lg"
              className="w-full sm:w-auto h-12 sm:h-14 text-sm sm:text-base px-6 sm:px-8 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-2xl"
            >
              <Search className="mr-2" />
              Mulai Petualangan
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto h-12 sm:h-14 text-sm sm:text-base px-6 sm:px-8 bg-white/10 backdrop-blur-md border border-white/40 text-white hover:bg-white/20 hover:border-white"
            >
              <Calendar className="mr-2" />
              Lihat Paket Wisata
            </Button>
          </motion.div>
        </motion.div>

        {/* Stats: compact di mobile */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-6 max-w-3xl mx-auto"
          variants={containerVariants}
        >
          {[{
            id: 1,
            gradient: "from-white to-primary",
            value: <AnimatedCounter end={500} suffix="+" />, title: "Destinasi Eksotis", sub: "Di seluruh dunia"
          },{
            id: 2,
            gradient: "from-white to-secondary",
            value: <AnimatedCounter end={10} suffix="K+" />, title: "Pelanggan Bahagia", sub: "Kepercayaan terjaga"
          },{
            id: 3,
            gradient: "from-white to-yellow-300",
            value: <><AnimatedCounter end={5} />⭐</>, title: "Rating Sempurna", sub: "Testimoni nyata"
          }].map((card) => (
            <motion.div
              key={card.id}
              className="text-center bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/25 md:hover:scale-105 md:hover:-translate-y-1 transition will-change-transform"
              variants={itemUp}
              whileHover={{ y: -4 }}
            >
              <div className={`text-3xl sm:text-5xl font-bold mb-1 sm:mb-2 bg-gradient-to-r ${card.gradient} bg-clip-text text-transparent`}>
                {card.value}
              </div>
              <div className="text-white/95 text-sm sm:text-lg">{card.title}</div>
              <div className="text-white/60 text-xs sm:text-sm mt-0.5">{card.sub}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator (desktop only) */}
      <motion.div
        className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.8 } }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-primary-foreground rounded-full flex items-start justify-center p-2"
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-1 h-3 bg-primary-foreground rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
