import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Star } from "lucide-react";
import baliBg from "@/assets/destination-bali.jpg";
import santorini from "@/assets/destination-santorini.jpg";
import tokyo from "@/assets/destination-tokyo.jpg";

const trendingDestinations = [
  {
    name: "Bali, Indonesia",
    image: baliBg,
    category: "Beach Paradise",
    trend: "+45%",
    rating: 4.9,
  },
  {
    name: "Santorini, Greece",
    image: santorini,
    category: "Island Escape",
    trend: "+38%",
    rating: 4.8,
  },
  {
    name: "Tokyo, Japan",
    image: tokyo,
    category: "City Adventure",
    trend: "+52%",
    rating: 4.9,
  },
];

const TrendingSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-mesh relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float-delayed" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <TrendingUp className="w-8 h-8 text-primary animate-pulse" />
            <Badge variant="secondary" className="text-lg px-4 py-1">
              Hot Trending
            </Badge>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-text bg-clip-text text-transparent">
            Destinasi Paling Dicari
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tempat-tempat favorit yang sedang viral minggu ini
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trendingDestinations.map((destination, index) => (
            <Card
              key={destination.name}
              className="group overflow-hidden border-2 hover:border-primary transition-all duration-500 hover:shadow-glow cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Trending Badge */}
                <Badge className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white border-0 animate-pulse">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  {destination.trend}
                </Badge>

                {/* Info Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <Badge variant="secondary" className="mb-2">
                    {destination.category}
                  </Badge>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:translate-x-2 transition-transform">
                    {destination.name}
                  </h3>
                  <div className="flex items-center gap-1 text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-white font-semibold">{destination.rating}</span>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Peningkatan Popularitas</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`h-2 w-8 rounded-full ${
                          i < 4 ? "bg-primary" : "bg-muted"
                        } group-hover:animate-pulse`}
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
