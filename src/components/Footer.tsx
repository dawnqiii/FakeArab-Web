import { MapPin, Facebook, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-background scroll-mt-16 py-16 sm:py-20 md:min-h-screen md:flex md:items-center">
      <div className="container mx-auto px-4 sm:px-8 lg:px-12 max-w-7xl w-full">
        {/* Main Footer Content */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 md:gap-16 mb-12 sm:mb-16">
          {/* Place */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-primary">Place</h3>
            <div className="space-y-6">
              <div>
                <div className="flex items-start gap-3 text-background/90 text-base">
                  <MapPin size={24} className="mt-1 flex-shrink-0 text-primary" />
                  <div className="leading-relaxed">
                    <div className="font-medium text-lg">21 Amado St, Rodriguez</div>
                    <div className="text-lg">1860 Rizal, Philippines</div>
                    <div className="mt-2 text-background/70 text-base italic">Service area</div>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 text-background/90 text-base">
                  <Mail size={24} className="flex-shrink-0 text-primary" />
                  <a href="mailto:fakearabshawarama@gmail.com" className="hover:text-primary transition-colors text-base">
                    fakearabshawarama@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Join the Royal Court */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-primary">Follow Us</h3>
            <p className="text-background/90 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
              Stay updated with exclusive deals, announcements and new menu items!
            </p>
            <div className="space-y-4">
              <a
                href="https://www.facebook.com/FakeArabShawarmaStation/"
                className="flex items-center gap-3 text-background/80 hover:text-primary transition-all group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-12 h-12 rounded-xl bg-background/15 group-hover:bg-primary flex items-center justify-center transition-all group-hover:scale-110 shadow-md flex-shrink-0">
                  <Facebook size={24} />
                </div>
                <span className="text-base font-medium">FakeArab Shawarma Station</span>
              </a>
              <a
                href="https://www.instagram.com/fakearabshawarmastation/"
                className="flex items-center gap-3 text-background/80 hover:text-primary transition-all group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-12 h-12 rounded-xl bg-background/15 group-hover:bg-primary flex items-center justify-center transition-all group-hover:scale-110 shadow-md flex-shrink-0">
                  <Instagram size={24} />
                </div>
                <span className="text-base font-medium">@fakearabshawarmastation</span>
              </a>
              <a
                href="https://www.tiktok.com/@fakearabshawarmastation"
                className="flex items-center gap-3 text-background/80 hover:text-primary transition-all group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-12 h-12 rounded-xl bg-background/15 group-hover:bg-primary flex items-center justify-center transition-all group-hover:scale-110 shadow-md flex-shrink-0">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </div>
                <span className="text-base font-medium">@fakearabshawarmastation</span>
              </a>
            </div>
          </div>

          {/* Royal Hours */}
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-primary">Hours</h3>
            <div className="space-y-4">
              <div className="bg-background/5 rounded-xl p-4 sm:p-6 border border-primary/20">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2 text-background/90">
                  <span className="font-semibold text-sm sm:text-base">Monday - Sunday</span>
                  <span className="text-primary font-bold text-lg sm:text-xl">2:00 PM - 10:00 PM</span>
                </div>
              </div>
              <p className="text-background/70 text-sm sm:text-base italic">Open daily to serve you!</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 sm:pt-10">
          <div className="text-center space-y-3 sm:space-y-4">
            <p className="text-background/60 text-sm sm:text-base">
              © 2025 FAKEARAB. ALL RIGHTS RESERVED.
            </p>
            <p className="text-background/80 font-medium text-base sm:text-lg leading-relaxed max-w-3xl mx-auto px-4">
              This website is focused on FakeArab Shawarma Station Talisay Branch
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
