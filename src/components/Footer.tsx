import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0B3D91] text-white">
      {/* CTA Section */}
      <div className="relative py-20 px-4 text-center bg-gradient-to-r from-[#0B3D91] via-[#164BA8] to-[#1E56B3] overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-[#F5B301] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#F5B301] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="relative z-10">
          <div className="inline-block mb-4">
            <span className="bg-[#F5B301]/20 text-[#F5B301] px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm border border-[#F5B301]/30">
              🎉 Promo Spesial
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-[#F5B301] to-white bg-clip-text text-transparent animate-gradient">
            Siap Memulai Petualangan Anda?
          </h2>
          <p className="text-white/90 mb-10 text-lg max-w-2xl mx-auto leading-relaxed">
            Daftar sekarang dan dapatkan <span className="text-[#F5B301] font-bold">diskon 20%</span> untuk perjalanan pertama Anda!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-xl mx-auto">
            <Input
              type="email"
              placeholder="Masukkan email Anda..."
              className="bg-white/95 text-[#0B3D91] placeholder:text-[#0B3D91]/60 border-2 border-white/20 focus:border-[#F5B301] h-14 backdrop-blur-sm rounded-xl shadow-lg"
            />
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#F5B301] to-[#FFD700] text-[#0B3D91] hover:from-[#D99C00] hover:to-[#F5B301] font-bold shadow-xl hover:shadow-2xl transition-all h-14 px-8 hover:scale-105 rounded-xl whitespace-nowrap"
            >
              <Mail className="mr-2 w-5 h-5" />
              Daftar Sekarang
            </Button>
          </div>
          <p className="text-white/60 text-sm mt-4">
            Bergabung dengan <span className="text-[#F5B301] font-semibold">50,000+</span> traveler bahagia
          </p>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16 px-4 border-t border-white/10 bg-gradient-to-b from-[#0B3D91] to-[#082E6B]">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-5">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#F5B301] to-[#FFD700] bg-clip-text text-transparent">
              Eksplora Muda
            </h3>
            <p className="text-white/80 leading-relaxed">
              Mewujudkan impian perjalanan Anda ke seluruh dunia dengan layanan terbaik dan terpercaya.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-white/70">
                <MapPin className="w-4 h-4 text-[#F5B301]" />
                <span>Jakarta, Indonesia</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <Clock className="w-4 h-4 text-[#F5B301]" />
                <span>Senin - Sabtu: 09:00 - 18:00</span>
              </div>
            </div>
            
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 bg-gradient-to-r from-[#F5B301] to-[#FFD700] text-[#0B3D91] px-6 py-3 rounded-xl font-bold hover:shadow-lg hover:scale-105 transition-all shadow-md"
            >
              <Phone className="w-5 h-5" /> Hubungi Kami
            </a>
          </div>

          {/* Destinasi */}
          <div>
            <h4 className="font-bold mb-6 text-[#F5B301] text-lg border-b border-[#F5B301]/30 pb-2">
              Destinasi Populer
            </h4>
            <ul className="space-y-3 text-white/80">
              <li className="hover:text-[#F5B301] cursor-pointer transition-all hover:translate-x-2 flex items-center gap-2 group">
                <span className="w-1.5 h-1.5 bg-[#F5B301] rounded-full group-hover:scale-150 transition-transform"></span>
                <span>Asia</span>
              </li>
              <li className="hover:text-[#F5B301] cursor-pointer transition-all hover:translate-x-2 flex items-center gap-2 group">
                <span className="w-1.5 h-1.5 bg-[#F5B301] rounded-full group-hover:scale-150 transition-transform"></span>
                <span>Eropa</span>
              </li>
              <li className="hover:text-[#F5B301] cursor-pointer transition-all hover:translate-x-2 flex items-center gap-2 group">
                <span className="w-1.5 h-1.5 bg-[#F5B301] rounded-full group-hover:scale-150 transition-transform"></span>
                <span>Amerika</span>
              </li>
              <li className="hover:text-[#F5B301] cursor-pointer transition-all hover:translate-x-2 flex items-center gap-2 group">
                <span className="w-1.5 h-1.5 bg-[#F5B301] rounded-full group-hover:scale-150 transition-transform"></span>
                <span>Afrika</span>
              </li>
              <li className="hover:text-[#F5B301] cursor-pointer transition-all hover:translate-x-2 flex items-center gap-2 group">
                <span className="w-1.5 h-1.5 bg-[#F5B301] rounded-full group-hover:scale-150 transition-transform"></span>
                <span>Australia</span>
              </li>
            </ul>
          </div>

          {/* Perusahaan */}
          <div>
            <h4 className="font-bold mb-6 text-[#F5B301] text-lg border-b border-[#F5B301]/30 pb-2">
              Perusahaan
            </h4>
            <ul className="space-y-3 text-white/80">
              <li className="hover:text-[#F5B301] cursor-pointer transition-all hover:translate-x-2 flex items-center gap-2 group">
                <span className="w-1.5 h-1.5 bg-[#F5B301] rounded-full group-hover:scale-150 transition-transform"></span>
                <span>Tentang Kami</span>
              </li>
              <li className="hover:text-[#F5B301] cursor-pointer transition-all hover:translate-x-2 flex items-center gap-2 group">
                <span className="w-1.5 h-1.5 bg-[#F5B301] rounded-full group-hover:scale-150 transition-transform"></span>
                <span>Karir</span>
              </li>
              <li className="hover:text-[#F5B301] cursor-pointer transition-all hover:translate-x-2 flex items-center gap-2 group">
                <span className="w-1.5 h-1.5 bg-[#F5B301] rounded-full group-hover:scale-150 transition-transform"></span>
                <span>Blog</span>
              </li>
              <li className="hover:text-[#F5B301] cursor-pointer transition-all hover:translate-x-2 flex items-center gap-2 group">
                <span className="w-1.5 h-1.5 bg-[#F5B301] rounded-full group-hover:scale-150 transition-transform"></span>
                <span>Kontak</span>
              </li>
              <li className="hover:text-[#F5B301] cursor-pointer transition-all hover:translate-x-2 flex items-center gap-2 group">
                <span className="w-1.5 h-1.5 bg-[#F5B301] rounded-full group-hover:scale-150 transition-transform"></span>
                <span>Privacy Policy</span>
              </li>
            </ul>
          </div>

          {/* Sosial Media */}
          <div>
            <h4 className="font-bold mb-6 text-[#F5B301] text-lg border-b border-[#F5B301]/30 pb-2">
              Ikuti Kami
            </h4>
            <p className="text-white/70 text-sm mb-6 leading-relaxed">
              Dapatkan update terbaru dan inspirasi perjalanan dari kami
            </p>
            <div className="flex gap-3 flex-wrap">
              <a href="#" className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-[#F5B301] hover:scale-110 transition-all cursor-pointer group shadow-md hover:shadow-lg">
                <Facebook className="w-5 h-5 group-hover:text-[#0B3D91] transition-colors" />
              </a>
              <a href="#" className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-[#F5B301] hover:scale-110 transition-all cursor-pointer group shadow-md hover:shadow-lg">
                <Instagram className="w-5 h-5 group-hover:text-[#0B3D91] transition-colors" />
              </a>
              <a href="#" className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-[#F5B301] hover:scale-110 transition-all cursor-pointer group shadow-md hover:shadow-lg">
                <Twitter className="w-5 h-5 group-hover:text-[#0B3D91] transition-colors" />
              </a>
              <a href="#" className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-[#F5B301] hover:scale-110 transition-all cursor-pointer group shadow-md hover:shadow-lg">
                <Youtube className="w-5 h-5 group-hover:text-[#0B3D91] transition-colors" />
              </a>
            </div>
            
            {/* Trust Badges */}
            <div className="mt-8 space-y-2">
              <p className="text-white/50 text-xs">Terpercaya & Aman</p>
              <div className="flex gap-2">
                <div className="bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs text-white/70 border border-white/20">
                  ✓ Verified
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs text-white/70 border border-white/20">
                  ✓ Licensed
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 mt-14 pt-8 text-center space-y-3">
          <p className="text-white/70 text-sm">
            © 2025 <span className="text-[#F5B301] font-semibold">Eksplora Muda</span>. Semua hak dilindungi.
          </p>
          <p className="text-white/50 text-xs flex items-center justify-center gap-2 flex-wrap">
            <span>Crafted with</span>
            <span className="text-[#F5B301] animate-pulse text-base">X</span>
            <span>by</span>
            <a 
              href="https://instagram.com/_faisalandrsh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#F5B301] hover:text-[#FFD700] font-semibold hover:underline transition-colors inline-flex items-center gap-1"
            >
              @_faisalandrsh
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;