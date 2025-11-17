import Navbar from '@/components/Navbar';
import MessengerButton from '@/components/MessengerButton';
import { Star, Zap, Heart, MapPin, Facebook, Instagram, Mail } from 'lucide-react';
import aboutImage from '@/assets/about.jpg';
import processImage from '@/assets/patagilid.jpg';
import { CheckCircle2, Leaf, Flame } from 'lucide-react';

const features = [
  {
    icon: Star,
    title: 'Our Belief',
    description: 'At FakeArab Shawarma Station, we believe in food that connects cultures and creates conversation. By fusing bold Arabic flavors with Filipino soul, we serve shawarma that\'s not just big in size, but big in flavor and heart.'
  },
  {
    icon: Zap,
    title: 'Our Experience',
    description: 'It\'s not just food — it\'s a family-made experience worth remembering. Every bite reflects the warmth, creativity, and shared joy of our kitchen.'
  },
  {
    icon: Heart,
    title: 'Our Philosophy',
    description: 'Rooted in family, driven by creativity, and inspired by tradition, our philosophy is simple: "Feed people not just with food but with joy, curiosity, and something worth remembering."'
  }
];

const processSteps = [
  { icon: CheckCircle2, text: 'Premium cuts of meat' },
  { icon: Leaf, text: 'Fresh herbs & spices' },
  { icon: Flame, text: 'Perfect grilling technique' }
];

const happyMoments = [
  { icon: '👨‍👩‍👧‍👦', text: 'Family gatherings' },
  { icon: '🍽️', text: 'Lunch breaks' },
  { icon: '🎉', text: 'Special celebrations' }
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* About Us Section */}
      <section className="min-h-screen bg-primary pt-16 flex items-center">
        <div className="container mx-auto px-8 lg:px-12 max-w-7xl py-12">
          {/* About Us Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-4 tracking-tight">
              About Us
            </h2>
          </div>

          {/* Joy is best when shared Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-xl">
                <span className="text-secondary">Cravings mo?</span><br />
                <span className="text-white">FakeArab Shawarma mo na 'yan!</span>
              </h2>
              <p className="text-base md:text-lg text-secondary/90 leading-relaxed">
                Welcome to FakeArab Shawarma Station, a proudly family-owned business that's redefining the shawarma experience in the Philippines. What started as a small food venture quickly grew into a local sensation, going viral for one simple reason: our shawarma is like no other.
              </p>
              <p className="text-base md:text-lg text-secondary/90 leading-relaxed">
                Every bite tells a story of family, culture, and a shared passion for food that brings people together. We serve up our great tasting food with the warm and friendly service we have come to be known for.
              </p>
            </div>

            {/* Right Image */}
            <div className="relative group">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={aboutImage}
                  alt="Sharing joy with food"
                  className="w-full h-[400px] md:h-[450px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Philosophy Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6 tracking-tight">
              Our Philosophy
            </h2>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-background rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group"
                >
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Icon className="text-primary" size={32} />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{feature.title}</h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Vision for the Future */}
          <div className="mt-16 mb-8">
            <div className="max-w-5xl mx-auto text-center space-y-6">
              <div className="inline-block">
                <h2 className="text-2xl md:text-3xl font-semibold text-secondary/80 tracking-wide uppercase mb-6">
                  Vision for the Future
                </h2>
                <div className="h-1 w-24 bg-secondary mx-auto"></div>
              </div>
              <blockquote className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl mx-auto">
                "To be one of the known shawarma business in the whole world"
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="min-h-screen bg-background flex items-center">
        <div className="container mx-auto px-8 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-secondary">
              How We Make It Perfect
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Every shawarma crafted with precision and care
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-16">
            {/* Left - Image */}
            <div className="order-2 md:order-1 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
              <img
                src={processImage}
                alt="Our Process"
                className="relative rounded-3xl shadow-2xl w-full h-[350px] md:h-[450px] object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>

            {/* Right - Process Steps */}
            <div className="order-1 md:order-2 space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">The Perfect Process</h3>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                We take pride in every step of our preparation. From selecting the finest ingredients to the perfect grilling technique, everything is done with passion and precision.
              </p>

              <div className="space-y-5">
                {processSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={index} className="flex items-center gap-4 group/item hover:translate-x-2 transition-transform duration-300">
                      <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center group-hover/item:scale-110 transition-transform shadow-md">
                        <Icon className="text-primary" size={28} />
                      </div>
                      <span className="text-lg font-semibold">{step.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Happy Moments Section */}
          <div className="bg-gradient-to-br from-muted to-muted/50 rounded-3xl p-10 md:p-12 border border-border/50 shadow-lg">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center">Happy Moments</h3>
            <p className="text-center text-muted-foreground mb-10 text-lg max-w-2xl mx-auto">
              We live for all the moments. Nothing beats authentic shawarma shared with loved ones
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {happyMoments.map((moment, index) => (
                <div
                  key={index}
                  className="bg-background rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border/50 group"
                >
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{moment.icon}</div>
                  <p className="font-semibold text-lg">{moment.text}</p>
                </div>
              ))}
            </div>
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
      <MessengerButton />
    </div>
  );
};

export default About;
