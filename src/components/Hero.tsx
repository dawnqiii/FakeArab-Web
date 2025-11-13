import { Button } from '@/components/ui/button';
import shawarma from '@/assets/BP_PHOTOSHOOT.jpg';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="bg-secondary pt-32 md:pt-36 pb-16 md:pb-20 lg:pb-24 relative overflow-hidden min-h-screen flex items-center scroll-mt-24">
      {/* Subtle Arabic geometric pattern background */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="arabicPattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="40" cy="40" r="2" fill="white"/>
              <path d="M 40 20 L 60 40 L 40 60 L 20 40 Z" fill="none" stroke="white" strokeWidth="0.5"/>
              <path d="M 20 20 L 60 20 L 60 60 L 20 60 Z" fill="none" stroke="white" strokeWidth="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#arabicPattern)"/>
        </svg>
      </div>

      {/* Large curved yellow shape - matching reference */}
      <div className="absolute top-0 right-0 w-1/2 h-full overflow-hidden">
        <svg
          className="absolute top-0 right-0 h-full w-full"
          viewBox="0 0 500 800"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 250,0 Q 100,400 250,800 L 500,800 L 500,0 Z"
            fill="hsl(48 100% 52%)"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-6 md:space-y-8 max-w-2xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
              Taste the <span className="bg-primary text-secondary px-3 py-1 rounded-lg inline-block">Authentic</span> Experience
            </h1>

            <p className="text-lg md:text-xl text-white leading-relaxed">
              Premium shawarma crafted with passion and tradition
            </p>

            {/* Icon Badges */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-full">
                <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-sm font-semibold text-secondary">Fresh Quality</span>
              </div>

              <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-full">
                <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z"/>
                  </svg>
                </div>
                <span className="text-sm font-semibold text-secondary">Fast Delivery</span>
              </div>

              <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-full">
                <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-sm font-semibold text-secondary">24/7 Support</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="pt-2 flex flex-wrap gap-4">
              <Button
                onClick={() => scrollToSection('menu')}
                className="bg-primary text-secondary hover:bg-primary/90 font-bold px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105 hover:-translate-y-1 active:scale-95"
              >
                Explore Menu
              </Button>
              <Button
                onClick={() => scrollToSection('location')}
                variant="outline"
                className="border-2 border-white text-secondary bg-white hover:bg-white/90 font-bold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 hover:-translate-y-1 active:scale-95"
              >
                Find Location
              </Button>
            </div>
          </div>

          {/* Right Image - Circular plate like reference */}
          <div className={`relative flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Circular white plate container - matching reference */}
              <div className="relative aspect-square group">
                <div className="absolute inset-0 bg-white rounded-full shadow-2xl transition-all duration-500 group-hover:shadow-3xl group-hover:scale-105"></div>
                <div className="absolute inset-0 rounded-full overflow-hidden p-4">
                  <img
                    src={shawarma}
                    alt="Delicious Shawarma"
                    className="w-full h-full object-cover rounded-full transition-transform duration-700 group-hover:scale-110"
                    style={{ objectPosition: 'center 25%' }}
                  />
                </div>
                {/* Subtle yellow glow behind plate */}
                <div className="absolute inset-0 bg-primary/30 rounded-full blur-3xl -z-10 scale-110 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
