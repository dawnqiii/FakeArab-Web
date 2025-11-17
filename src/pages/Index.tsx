import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Dishes from '@/components/Dishes';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import MessengerButton from '@/components/MessengerButton';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Dishes />
      <CTA />
      <Footer />
      <MessengerButton />
    </div>
  );
};

export default Index;
