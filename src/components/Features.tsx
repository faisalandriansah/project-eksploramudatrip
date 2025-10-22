import { Shield, Award, HeadphonesIcon, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Aman & Terpercaya",
    description: "Keamanan data dan transaksi Anda adalah prioritas utama kami",
  },
  {
    icon: Award,
    title: "Harga Terbaik",
    description: "Dapatkan penawaran terbaik dengan jaminan harga termurah",
  },
  {
    icon: HeadphonesIcon,
    title: "Dukungan 24/7",
    description: "Tim support kami siap membantu kapan saja Anda membutuhkan",
  },
  {
    icon: Sparkles,
    title: "Pengalaman Premium",
    description: "Nikmati perjalanan yang tak terlupakan dengan layanan kelas dunia",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-600">
            Kenapa Pilih Kami?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Kami berkomitmen memberikan pengalaman perjalanan terbaik untuk Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="p-8 text-center hover-lift animate-scale-in border-0 shadow-elegant bg-gradient-card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-hero rounded-2xl flex items-center justify-center shadow-glow">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
