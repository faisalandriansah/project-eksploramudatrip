import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Jakarta, Indonesia",
    rating: 5,
    comment: "Pengalaman liburan terbaik yang pernah saya alami! Pelayanan luar biasa dan destinasi yang memukau.",
    initials: "SJ",
  },
  {
    name: "Michael Chen",
    location: "Singapore",
    rating: 5,
    comment: "Sangat merekomendasikan! Harga terjangkau dengan kualitas layanan yang premium. Will definitely book again!",
    initials: "MC",
  },
  {
    name: "Putri Andini",
    location: "Bali, Indonesia",
    rating: 5,
    comment: "Trip ke Santorini benar-benar seperti mimpi! Semua sudah diatur dengan sempurna. Terima kasih!",
    initials: "PA",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-600">
            Kata Mereka
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ribuan pelanggan puas telah mempercayakan perjalanan mereka kepada kami
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 hover-lift animate-slide-up border-0 shadow-elegant"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 italic">
                "{testimonial.comment}"
              </p>

              <div className="flex items-center gap-4">
                <Avatar className="w-12 h-12 bg-gradient-hero">
                  <AvatarFallback className="bg-transparent text-primary-foreground font-semibold">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
