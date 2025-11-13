import { CheckCircle2, Leaf, Flame } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import processImage from '@/assets/patagilid.jpg';

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

const Process = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-secondary">
            How We Make It Perfect
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Every shawarma crafted with precision and care 🌯
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-20">
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
            <h3 className="text-2xl md:text-4xl font-bold mb-6">The Perfect Process</h3>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              We take pride in every step of our preparation. From selecting the finest ingredients to the perfect grilling technique, everything is done with passion and precision.
            </p>

            <div className="space-y-5">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="flex items-center gap-4 group/item hover:translate-x-2 transition-transform duration-300">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center group-hover/item:scale-110 transition-transform shadow-md">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <span className="text-lg font-semibold">{step.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Happy Moments Section */}
        <div className="bg-gradient-to-br from-muted to-muted/50 rounded-3xl p-8 md:p-12 border border-border/50 shadow-lg">
          <h3 className="text-2xl md:text-4xl font-bold mb-8 text-center">Happy Moments</h3>
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
  );
};

export default Process;
