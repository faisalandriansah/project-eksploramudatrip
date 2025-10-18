import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WaveDivider from "@/components/WaveDivider";
import TrendingSection from "@/components/TrendingSection";
import Destinations from "@/components/Destinations";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WaveDivider className="text-background -mt-1" />
      <TrendingSection />
      <WaveDivider flip className="text-background -mb-1" />
      <Destinations />
      <WaveDivider className="text-muted/10 -mt-1" />
      <Features />
      <WaveDivider flip className="text-muted/10 -mb-1" />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
