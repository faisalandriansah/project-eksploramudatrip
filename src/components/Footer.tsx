import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0B3D91] text-white">
      {/* CTA Section */}
      <div className="py-16 px-4 text-center bg-gradient-to-r from-[#0B3D91] via-[#164BA8] to-[#1E56B3]">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Siap Memulai Petualangan Anda?
        </h2>
        <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
          Daftar sekarang dan dapatkan diskon 20% untuk perjalanan pertama Anda!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Email Anda"
            className="bg-white text-[#0B3D91] placeholder:text-[#0B3D91]/60"
          />
          <Button
            size="lg"
            className="bg-[#F5B301] text-[#0B3D91] hover:bg-[#D99C00] font-semibold"
          >
            <Mail className="mr-2 w-5 h-5" />
            Daftar Sekarang
          </Button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12 px-4 border-t border-white/10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#F5B301]">
              Eksplora Muda
            </h3>
            <p className="text-white/80">
              Mewujudkan impian perjalanan Anda ke seluruh dunia dengan layanan
              terbaik dan terpercaya.
            </p>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 bg-[#F5B301] text-[#0B3D91] px-4 py-2 rounded-lg font-semibold hover:bg-[#D99C00] transition-all"
            >
              <Phone className="w-4 h-4" /> Hubungi Kami
            </a>
          </div>

          {/* Destinasi */}
          <div>
            <h4 className="font-semibold mb-4 text-[#F5B301]">Destinasi</h4>
            <ul className="space-y-2 text-white/80">
              <li className="hover:text-[#F5B301] cursor-pointer transition-colors">
                Asia
              </li>
              <li className="hover:text-[#F5B301] cursor-pointer transition-colors">
                Eropa
              </li>
              <li className="hover:text-[#F5B301] cursor-pointer transition-colors">
                Amerika
              </li>
              <li className="hover:text-[#F5B301] cursor-pointer transition-colors">
                Afrika
              </li>
            </ul>
          </div>

          {/* Perusahaan */}
          <div>
            <h4 className="font-semibold mb-4 text-[#F5B301]">Perusahaan</h4>
            <ul className="space-y-2 text-white/80">
              <li className="hover:text-[#F5B301] cursor-pointer transition-colors">
                Tentang Kami
              </li>
              <li className="hover:text-[#F5B301] cursor-pointer transition-colors">
                Karir
              </li>
              <li className="hover:text-[#F5B301] cursor-pointer transition-colors">
                Blog
              </li>
              <li className="hover:text-[#F5B301] cursor-pointer transition-colors">
                Kontak
              </li>
            </ul>
          </div>

          {/* Sosial Media */}
          <div>
            <h4 className="font-semibold mb-4 text-[#F5B301]">Ikuti Kami</h4>
            <div className="flex gap-4">
              <Facebook className="w-6 h-6 hover:scale-110 transition-transform hover:text-[#F5B301]" />
              <Instagram className="w-6 h-6 hover:scale-110 transition-transform hover:text-[#F5B301]" />
              <Twitter className="w-6 h-6 hover:scale-110 transition-transform hover:text-[#F5B301]" />
              <Youtube className="w-6 h-6 hover:scale-110 transition-transform hover:text-[#F5B301]" />
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-white/70 text-sm">
          <p>© 2025 Eksplora Muda. Semua hak dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
