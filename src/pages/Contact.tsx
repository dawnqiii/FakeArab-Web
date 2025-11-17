import Navbar from '@/components/Navbar';
import MessengerButton from '@/components/MessengerButton';
// import MapComponent from '@/components/MapComponent'; // Google Maps (needs API key)
import MapComponentFree from '@/components/MapComponentFree'; // OpenStreetMap (FREE)
import { MapPin, Facebook, Instagram, Mail, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section with Big Contact Title */}
      <section className="bg-secondary pt-20 sm:pt-24 pb-12 sm:pb-16 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="contactPattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="2" fill="white"/>
                <path d="M 30 10 L 50 30 L 30 50 L 10 30 Z" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#contactPattern)"/>
          </svg>
        </div>

        <div className="container mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-4 tracking-tight">
              CONTACT
            </h1>
            <div className="w-24 sm:w-32 h-2 bg-primary mx-auto rounded-full"></div>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 mt-4 sm:mt-6 max-w-2xl mx-auto px-4">
              Get in touch with us
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-8 lg:px-12 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Left Side - Contact Info */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-6 sm:mb-8">
                  Visit Us
                </h2>

                {/* Address */}
                <div className="bg-card rounded-2xl p-4 sm:p-6 shadow-lg border border-border/50 mb-4 sm:mb-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin size={24} className="text-secondary sm:hidden" />
                      <MapPin size={28} className="text-secondary hidden sm:block" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg sm:text-xl font-bold mb-2">Address</h3>
                      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                        21 Amado St, Rodriguez<br />
                        1860 Rizal, Philippines
                      </p>
                      <p className="text-sm text-muted-foreground/70 mt-2 italic">Service area</p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-card rounded-2xl p-4 sm:p-6 shadow-lg border border-border/50 mb-4 sm:mb-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail size={24} className="text-secondary sm:hidden" />
                      <Mail size={28} className="text-secondary hidden sm:block" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg sm:text-xl font-bold mb-2">Email</h3>
                      <a
                        href="mailto:fakearabshawarama@gmail.com"
                        className="text-sm sm:text-base md:text-lg text-primary hover:text-primary/80 transition-colors font-medium break-all"
                      >
                        fakearabshawarama@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="bg-card rounded-2xl p-4 sm:p-6 shadow-lg border border-border/50">
                  <h3 className="text-lg sm:text-xl font-bold mb-4">Operating Hours</h3>
                  <div className="bg-secondary/5 rounded-xl p-3 sm:p-4 border border-primary/20">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
                      <span className="font-semibold text-sm sm:text-base">Monday - Sunday</span>
                      <span className="text-primary font-bold text-lg sm:text-xl">2:00 PM - 10:00 PM</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm mt-3 italic">Open daily to serve you!</p>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-4 sm:mb-6">
                  Follow Us
                </h2>
                <div className="space-y-3 sm:space-y-4">
                  <a
                    href="https://www.facebook.com/FakeArabShawarmaStation/"
                    className="flex items-center gap-3 sm:gap-4 bg-card rounded-xl p-3 sm:p-4 shadow-md border border-border/50 hover:border-primary/50 transition-all group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-secondary group-hover:bg-primary flex items-center justify-center transition-all group-hover:scale-110 shadow-md flex-shrink-0">
                      <Facebook size={20} className="text-white sm:hidden" />
                      <Facebook size={24} className="text-white hidden sm:block" />
                    </div>
                    <span className="text-sm sm:text-base font-medium group-hover:text-primary transition-colors truncate">FakeArab Shawarma Station</span>
                  </a>
                  <a
                    href="https://www.instagram.com/fakearabshawarmastation/"
                    className="flex items-center gap-3 sm:gap-4 bg-card rounded-xl p-3 sm:p-4 shadow-md border border-border/50 hover:border-primary/50 transition-all group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-secondary group-hover:bg-primary flex items-center justify-center transition-all group-hover:scale-110 shadow-md flex-shrink-0">
                      <Instagram size={20} className="text-white sm:hidden" />
                      <Instagram size={24} className="text-white hidden sm:block" />
                    </div>
                    <span className="text-sm sm:text-base font-medium group-hover:text-primary transition-colors truncate">@fakearabshawarmastation</span>
                  </a>
                  <a
                    href="https://www.tiktok.com/@fakearabshawarmastation"
                    className="flex items-center gap-3 sm:gap-4 bg-card rounded-xl p-3 sm:p-4 shadow-md border border-border/50 hover:border-primary/50 transition-all group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-secondary group-hover:bg-primary flex items-center justify-center transition-all group-hover:scale-110 shadow-md flex-shrink-0">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                      </svg>
                    </div>
                    <span className="text-sm sm:text-base font-medium group-hover:text-primary transition-colors truncate">@fakearabshawarmastation</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side - Google Maps */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-6 sm:mb-8">
                Find Us
              </h2>
              <div className="h-[350px] sm:h-[450px] md:h-[600px]">
                {/* <MapComponent /> */}
                <MapComponentFree />
              </div>
            </div>
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
            Message us directly for orders and inquiries
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

      {/* Footer */}
      <footer className="bg-secondary py-12">
        <div className="container mx-auto px-8 lg:px-12">
          <div className="text-center space-y-4">
            <p className="text-background/60 text-base">
              © 2025 FAKEARAB. ALL RIGHTS RESERVED.
            </p>
            <p className="text-background/80 font-medium text-lg leading-relaxed max-w-3xl mx-auto">
              This website is focused on FakeArab Shawarma Station Talisay Branch
            </p>
          </div>
        </div>
      </footer>

      <MessengerButton />
    </div>
  );
};

export default Contact;
