import { Badge } from '@/components/ui/badge';
import chixBowl from '@/assets/chickarab.jpg';
import beefBowl from '@/assets/beefshawarmabowl.jpg';
import mixedWrap from '@/assets/chickenshawarma.jpg';
import falafelBowl from '@/assets/beefshawarma.jpg';

const dishes = [
  {
    name: 'Chix Arab Bowl Jr.',
    description: 'Our Chix Arab Shawarma Bowl Version JR — Fries, Pickles, Cabbage, Tomato, Onion, Marinated Chicken, and Ketchup with our Signature Sauces.',
    price: '₱259',
    image: chixBowl,
    tags: ['Halal', 'Protein Rich']
  },
  {
    name: 'Beef Arab Bowl Jr.',
    description: 'Our Beef Arab Shawarma Bowl Version JR — Fries, Pickles, Cabbage, Tomato, Onion, Ground Beef, and Ketchup with our Signature Sauces.',
    price: '₱279',
    image: beefBowl,
    tags: ['Halal', 'Premium']
  },
  {
    name: 'Chix Shawawrma Pita',
    description: 'Our Famous Chix Shawarma Pita – Pita, Cabbage, Cucumber, Tomato, Onion, Shredded Chicken, and Signature Sauces.',
    price: '₱169',
    image: mixedWrap,
    tags: ['Halal', 'Best Seller']
  },
  {
    name: 'Beef Shawawrma Pita',
    description: 'Our Famous Beef Shawarma Pita – Pita, Cabbage, Cucumber, Tomato, Onion, Ground Beef, and Signature Sauces.',
    price: '₱189',
    image: falafelBowl,
    tags: ['Halal', 'Premium']
  }
];

const Dishes = () => {
  return (
    <section id="menu" className="py-20 md:py-28 bg-background scroll-mt-24">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-secondary tracking-tight">
            Our Signature Dishes
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            If you want to order, go to our place and go to our social for more
          </p>
        </div>

        {/* Dishes Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 justify-items-center">
          {dishes.map((dish, index) => (
            <div
              key={index}
              className="group bg-card rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-border/50 w-full max-w-sm"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-muted">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-primary text-secondary font-bold px-5 py-2.5 rounded-full shadow-xl">
                  {dish.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{dish.name}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {dish.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {dish.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors font-medium"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dishes;
