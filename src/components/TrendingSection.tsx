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
    category: "Surga Pantai",
    trend: "+45%",
    rating: 4.9,
  },
  {
    name: "Santorini, Yunani",
    image: santorini,
    category: "Pulau Romantis",
    trend: "+38%",
    rating: 4.8,
  },
  {
    name: "Tokyo, Jepang",
    image: tokyo,
    category: "Petualangan Kota",
    trend: "+52%",
    rating: 4.9,
  },
];

const TrendingSection = () => {
  return (
    <section
      id="trending"
      className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <TrendingUp className="w-8 h-8 text-blue-600 animate-bounce" />
            <Badge className="text-lg px-4 py-1 bg-blue-100 text-blue-700">
              Sedang Tren
            </Badge>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-600">
            Destinasi Paling Dicari
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Lihat destinasi favorit wisatawan minggu ini ✨
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trendingDestinations.map((destination) => (
            <Card
              key={destination.name}
              className="group overflow-hidden border hover:border-blue-500 transition-all duration-300 hover:shadow-xl cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                {/* Trending Badge */}
                <Badge className="absolute top-4 right-4 bg-red-500 text-white">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  {destination.trend}
                </Badge>

                {/* Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <Badge className="bg-white/20 backdrop-blur-sm mb-2">
                    {destination.category}
                  </Badge>
                  <h3 className="text-2xl font-bold mb-1 group-hover:translate-x-1 transition-transform">
                    {destination.name}
                  </h3>
                  <div className="flex items-center gap-1 text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="font-semibold">{destination.rating}</span>
                  </div>
                </div>
              </div>

              <CardContent className="p-5 flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  Peningkatan Popularitas
                </span>
                <Badge className="bg-red-100 text-red-700">
                  {destination.trend}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
