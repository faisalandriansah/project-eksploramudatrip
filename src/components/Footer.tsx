import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter, Youtube, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-hero text-primary-foreground">
      {/* CTA Section */}
      <div className="py-16 px-4">
        <div className="container mx-auto text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Siap Memulai Petualangan Anda?
          </h2>
          <p className="text-primary-foreground/90 mb-8 text-lg max-w-2xl mx-auto">
            Daftar sekarang dan dapatkan diskon 20% untuk perjalanan pertama Anda!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Email Anda"
              className="bg-primary-foreground text-foreground"
            />
            <Button variant="secondary" size="lg" className="whitespace-nowrap">
              <Mail className="mr-2" />
              Daftar Sekarang
            </Button>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="border-t border-primary-foreground/20 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">TravelKu</h3>
              <p className="text-primary-foreground/80">
                Mewujudkan impian perjalanan Anda ke seluruh dunia
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Destinasi</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li className="hover:text-primary-foreground cursor-pointer transition-colors">Asia</li>
                <li className="hover:text-primary-foreground cursor-pointer transition-colors">Eropa</li>
                <li className="hover:text-primary-foreground cursor-pointer transition-colors">Amerika</li>
                <li className="hover:text-primary-foreground cursor-pointer transition-colors">Afrika</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li className="hover:text-primary-foreground cursor-pointer transition-colors">Tentang Kami</li>
                <li className="hover:text-primary-foreground cursor-pointer transition-colors">Karir</li>
                <li className="hover:text-primary-foreground cursor-pointer transition-colors">Blog</li>
                <li className="hover:text-primary-foreground cursor-pointer transition-colors">Kontak</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Ikuti Kami</h4>
              <div className="flex gap-4">
                <Facebook className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
                <Instagram className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
                <Twitter className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
                <Youtube className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/70">
            <p>&copy; 2025 TravelKu. Semua hak dilindungi.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
