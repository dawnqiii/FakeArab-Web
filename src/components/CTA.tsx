import { Button } from '@/components/ui/button';

const CTA = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-background mb-6">
            Ready for Something Amazing?
          </h2>
          <p className="text-lg md:text-xl text-background/90 mb-10 leading-relaxed max-w-2xl mx-auto">
            Experience the difference that quality and passion make. Join the Shawarma Arab family today!
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={() => scrollToSection('menu')}
              variant="secondary"
              className="bg-primary text-secondary hover:bg-primary/90 font-semibold px-10 py-7 text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            >
              View Menu
            </Button>
            <Button
              onClick={() => scrollToSection('location')}
              variant="outline"
              className="border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-secondary font-semibold px-10 py-7 text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Visit Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
