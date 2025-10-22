import { Card } from "@/components/ui/card";
import { MapPin, Star } from "lucide-react";
import balliImage from "@/assets/destination-bali.jpg";
import santoriniImage from "@/assets/destination-santorini.jpg";
import alpsImage from "@/assets/destination-alps.jpg";
import tokyoImage from "@/assets/destination-tokyo.jpg";

const destinations = [
  {
    name: "Bali, Indonesia",
    image: balliImage,
    price: "Dari Rp 5.000.000",
    rating: 4.9,
    reviews: 2341,
    description: "Surga tropis dengan budaya yang kaya",
  },
  {
    name: "Santorini, Yunani",
    image: santoriniImage,
    price: "Dari Rp 15.000.000",
    rating: 4.8,
    reviews: 1823,
    description: "Pemandangan sunset paling ikonik di dunia",
  },
  {
    name: "Swiss Alps",
    image: alpsImage,
    price: "Dari Rp 20.000.000",
    rating: 4.9,
    reviews: 1456,
    description: "Keindahan pegunungan yang menakjubkan",
  },
  {
    name: "Tokyo, Jepang",
    image: tokyoImage,
    price: "Dari Rp 12.000.000",
    rating: 4.7,
    reviews: 2890,
    description: "Perpaduan sempurna tradisi dan modernitas",
  },
];

const Destinations = () => {
  return (
    <section className="py-20 px-4 bg-background" id="destinations">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-600">
            Destinasi Populer
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Jelajahi tempat-tempat menakjubkan yang telah dikunjungi ribuan pelanggan kami
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((dest, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-glow transition-all duration-500 cursor-pointer animate-scale-in border-2 hover:border-primary hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125 group-hover:rotate-2"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/60 transition-all" />
                <div className="absolute top-4 right-4 bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full font-bold shadow-elegant transform group-hover:scale-110 transition-transform">
                  {dest.price}
                </div>
                {/* Floating label on hover */}
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-sm opacity-0 group-hover:opacity-100 transition-all transform -translate-y-2 group-hover:translate-y-0">
                  View Details
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    {dest.name}
                  </h3>
                </div>

                <p className="text-muted-foreground text-sm mb-4">
                  {dest.description}
                </p>

                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-accent text-accent" />
                    <span className="font-semibold">{dest.rating}</span>
                  </div>
                  <span className="text-muted-foreground text-sm">
                    ({dest.reviews.toLocaleString()} reviews)
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
