import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const CTA = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-secondary flex items-center">
      <div className="container mx-auto px-8 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-8">
            Ready for Something Amazing?
          </h2>
          <p className="text-lg md:text-xl text-background/90 mb-12 leading-relaxed max-w-2xl mx-auto">
            Experience the difference that quality and passion make. Join the Shawarma Arab family today!
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <Button
              onClick={() => navigate('/menu')}
              variant="secondary"
              className="bg-primary text-secondary hover:bg-primary/90 font-semibold px-10 py-5 text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            >
              View Menu
            </Button>
            <Button
              onClick={() => navigate('/contact')}
              variant="outline"
              className="border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-secondary font-semibold px-10 py-5 text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
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
