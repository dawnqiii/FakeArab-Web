import Navbar from '@/components/Navbar';
import MessengerButton from '@/components/MessengerButton';
import { MapPin, Facebook, Instagram, Mail } from 'lucide-react';
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
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section with Big Menu Title */}
      <section className="bg-secondary pt-24 pb-16 relative overflow-hidden">
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

        <div className="container mx-auto px-8 lg:px-12 relative z-10">
          <div className="text-center">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-4 tracking-tight">
              MENU
            </h1>
            <div className="w-32 h-2 bg-primary mx-auto rounded-full"></div>
            <p className="text-xl md:text-2xl text-white/80 mt-6 max-w-2xl mx-auto">
              Discover our authentic shawarma selections
            </p>
          </div>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-8 lg:px-12 max-w-7xl">
          <div className="grid md:grid-cols-3 gap-10">
            {menuCategories.map((category, index) => (
              <div
                key={index}
                className="group relative bg-card rounded-3xl overflow-visible shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-border/50 hover:z-50"
              >
                {/* Image Container - Expands on hover */}
                <div className="relative h-80 overflow-visible cursor-pointer">
                  <div className="absolute inset-0 transition-all duration-700 ease-out group-hover:scale-[2] group-hover:-translate-y-32 group-hover:z-50">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:object-contain rounded-t-3xl group-hover:rounded-none group-hover:shadow-2xl transition-all duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent group-hover:opacity-0 transition-opacity duration-500 pointer-events-none"></div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 group-hover:opacity-0 transition-opacity duration-300">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                      {category.title}
                    </h2>
                    <div className="w-16 h-1 bg-primary rounded-full"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 bg-secondary relative z-10">
                  <h2 className="text-2xl font-bold text-white mb-3">
                    {category.title}
                  </h2>
                  <p className="text-white/80 text-lg leading-relaxed">
                    {category.description}
                  </p>

                  {/* Decorative Element */}
                  <div className="mt-6 flex items-center gap-3">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <div className="w-3 h-3 bg-primary/60 rounded-full"></div>
                    <div className="w-3 h-3 bg-primary/30 rounded-full"></div>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 rounded-3xl transition-all duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-8 lg:px-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Ready to Order?
          </h3>
          <p className="text-xl text-secondary/80 mb-8 max-w-xl mx-auto">
            Visit our store or contact us through Messenger for orders and inquiries
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.messenger.com/t/108567818620417"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary text-white hover:bg-secondary/90 font-bold px-10 py-4 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all hover:scale-105 inline-flex items-center gap-3"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.908 1.438 5.503 3.686 7.2V22l3.404-1.869c.908.252 1.871.388 2.91.388 5.523 0 10-4.145 10-9.243S17.523 2 12 2zm1.088 12.456l-2.55-2.722-4.98 2.722 5.476-5.813 2.615 2.722 4.915-2.722-5.476 5.813z"/>
              </svg>
              Message Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-secondary text-background min-h-screen flex items-center">
        <div className="container mx-auto px-8 lg:px-12 max-w-7xl">
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

      <MessengerButton />
    </div>
  );
};

export default Menu;
