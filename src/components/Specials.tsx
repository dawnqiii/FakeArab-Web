import { Star, Zap, Heart } from 'lucide-react';
import aboutImage from '@/assets/about.jpg';

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

const Specials = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-primary scroll-mt-24">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* About Us Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-4 tracking-tight">
            About Us
          </h2>
        </div>

        {/* Joy is best when shared Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-28">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-xl">
              <span className="text-secondary">Cravings mo?</span><br />
              <span className="text-white">FakeArab Shawarma mo na 'yan!</span>
            </h2>
            <p className="text-base md:text-lg text-secondary/90 leading-relaxed">
              welcome to FakeArab Shawarma Station a proudly family-owned business that's redefining the shawarma experience in the Philippines. What started as a small food venture quickly grew into a local sensation, going viral for one simple reason: our shawarma is like no other. At FakeArab Shawarma Station, every bite tells a story of family, culture, and a shared passion for food that brings people together. Whether you're craving something new or simply hungry for something huge, we've got your shawarma fix.
            </p>
            <p className="text-base md:text-lg text-secondary/90 leading-relaxed">
              In each market we call home, we serve up our great tasting food with the warm and friendly service we have come to be known for.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative group">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={aboutImage}
                alt="Sharing joy with food"
                className="w-full h-[450px] md:h-[550px] object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
        {/* Section Header */}
        <div className="text-center mb-20">
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
                className="bg-background rounded-3xl p-10 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group"
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Icon className="text-primary" size={36} />
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
        <div className="mt-32 mb-8">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <div className="inline-block">
              <h2 className="text-2xl md:text-3xl font-semibold text-secondary/80 tracking-wide uppercase mb-8">
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
  );
};

export default Specials;
