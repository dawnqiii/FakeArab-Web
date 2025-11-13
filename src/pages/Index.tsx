import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Dishes from '@/components/Dishes';
import Specials from '@/components/Specials';
import Process from '@/components/Process';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      {/* Buffer space matching Menu section color */}
      <div className="h-24 bg-background"></div>
      <Dishes />
      {/* Buffer space matching About section color */}
      <div className="h-24 bg-primary"></div>
      <Specials />
      {/* Buffer space matching Process section color */}
      <div className="h-24 bg-background"></div>
      <Process />
      {/* Buffer space matching CTA section color */}
      <div className="h-24 bg-secondary"></div>
      <CTA />
      {/* Buffer space matching Location section color */}
      <div className="h-24 bg-secondary"></div>
      <Footer />
    </div>
  );
};

export default Index;
