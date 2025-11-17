import { useState } from 'react';
import Navbar from '@/components/Navbar';
import MessengerButton from '@/components/MessengerButton';
import { MapPin, Facebook, Instagram, Mail, X } from 'lucide-react';
import beefImage from '@/assets/beef.png';
import chixImage from '@/assets/chix.jpg';
import bowlImage from '@/assets/inabowl.jpg';

const menuCategories = [
  {
    title: 'Beef Shawarmas',
    image: beefImage,
    description: 'Premium beef shawarma with our signature blend of spices'
  },
  {
    title: 'Chicken Shawarmas',
    image: chixImage,
    description: 'Tender chicken shawarma marinated to perfection'
  },
  {
    title: 'Bowl Shawarma',
    image: bowlImage,
    description: 'Complete shawarma bowl experience with all the fixings'
  }
];

const Menu = () => {
  const [selectedImage, setSelectedImage] = useState<{ image: string; title: string } | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section with Big Menu Title */}
      <section className="bg-secondary pt-20 sm:pt-24 pb-12 sm:pb-16 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="menuPattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="2" fill="white"/>
                <path d="M 30 10 L 50 30 L 30 50 L 10 30 Z" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#menuPattern)"/>
          </svg>
        </div>

        <div className="container mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-4 tracking-tight">
              MENU
            </h1>
            <div className="w-24 sm:w-32 h-2 bg-primary mx-auto rounded-full"></div>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 mt-4 sm:mt-6 max-w-2xl mx-auto px-4">
              Discover our authentic shawarma selections
            </p>
          </div>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-8 lg:px-12 max-w-7xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {menuCategories.map((category, index) => (
              <div
                key={index}
                className="group relative bg-card rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 md:hover:-translate-y-4 border border-border/50"
              >
                {/* Image Container */}
                <div
                  className="relative h-56 sm:h-64 md:h-80 overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage({ image: category.image, title: category.title })}
                >
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover rounded-t-2xl sm:rounded-t-3xl transition-transform duration-700 md:group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent transition-opacity duration-500 pointer-events-none"></div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 pointer-events-none">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
                      {category.title}
                    </h2>
                    <div className="w-12 sm:w-16 h-1 bg-primary rounded-full"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6 md:p-8 bg-secondary relative z-10">
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">
                    {category.title}
                  </h2>
                  <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                    {category.description}
                  </p>

                  {/* Decorative Element */}
                  <div className="mt-4 sm:mt-6 flex items-center gap-2 sm:gap-3">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-primary rounded-full"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-primary/60 rounded-full"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-primary/30 rounded-full"></div>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 border-2 border-primary/0 md:group-hover:border-primary/50 rounded-2xl sm:rounded-3xl transition-all duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 bg-primary">
        <div className="container mx-auto px-4 sm:px-8 lg:px-12 text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-4">
            Ready to Order?
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-secondary/80 mb-6 sm:mb-8 max-w-xl mx-auto px-4">
            Visit our store or contact us through Messenger for orders and inquiries
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.messenger.com/t/108567818620417"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary text-white hover:bg-secondary/90 font-bold px-6 sm:px-10 py-3 sm:py-4 text-base sm:text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all hover:scale-105 inline-flex items-center gap-2 sm:gap-3"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.908 1.438 5.503 3.686 7.2V22l3.404-1.869c.908.252 1.871.388 2.91.388 5.523 0 10-4.145 10-9.243S17.523 2 12 2zm1.088 12.456l-2.55-2.722-4.98 2.722 5.476-5.813 2.615 2.722 4.915-2.722-5.476 5.813z"/>
              </svg>
              Message Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-secondary text-background py-16 sm:py-20 md:min-h-screen md:flex md:items-center">
        <div className="container mx-auto px-4 sm:px-8 lg:px-12 max-w-7xl">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-12 md:gap-16 mb-16">
            {/* Place */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-primary">Place</h3>
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

            {/* Follow Us */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-primary">Follow Us</h3>
              <p className="text-background/90 mb-6 text-base leading-relaxed">
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

            {/* Hours */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-primary">Hours</h3>
              <div className="space-y-4">
                <div className="bg-background/5 rounded-xl p-6 border border-primary/20">
                  <div className="flex items-center justify-between text-background/90">
                    <span className="font-semibold text-base">Monday - Sunday</span>
                    <span className="text-primary font-bold text-xl">2:00 PM - 10:00 PM</span>
                  </div>
                </div>
                <p className="text-background/70 text-base italic">Open daily to serve you!</p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-background/20 pt-10">
            <div className="text-center space-y-4">
              <p className="text-background/60 text-base">
                © 2025 FAKEARAB. ALL RIGHTS RESERVED.
              </p>
              <p className="text-background/80 font-medium text-lg leading-relaxed max-w-3xl mx-auto">
                This website is focused on FakeArab Shawarma Station Talisay Branch
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Full Screen Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
            aria-label="Close"
          >
            <X size={24} className="text-white" />
          </button>

          {/* Image */}
          <div className="relative w-full h-full flex flex-col items-center justify-center p-2">
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      <MessengerButton />
    </div>
  );
};

export default Menu;
