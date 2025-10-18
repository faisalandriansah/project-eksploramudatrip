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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Destinasi Populer
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Jelajahi tempat-tempat menakjubkan yang telah dikunjungi ribuan pelanggan kami
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest, index) => (
            <Card
              key={index}
              className="overflow-hidden hover-lift cursor-pointer group animate-slide-up border-0 shadow-elegant"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  {dest.price}
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
