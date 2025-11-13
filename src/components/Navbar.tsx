import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [overYellow, setOverYellow] = useState(false);
  const [overLocation, setOverLocation] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger slide-down animation on mount
    setTimeout(() => setIsVisible(true), 100);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const navbarHeight = 96; // navbar height (h-24 = 96px)

      // Check if navbar is over yellow section (Specials section with id="about")
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        // Check if top of viewport (where navbar is) overlaps with yellow section
        setOverYellow(rect.top < navbarHeight && rect.bottom > 0);
      }

      // Check if navbar is over location section (Footer with id="location")
      const locationSection = document.getElementById('location');
      if (locationSection) {
        const rect = locationSection.getBoundingClientRect();
        // Check if top of viewport (where navbar is) overlaps with location section
        setOverLocation(rect.top < navbarHeight && rect.bottom > 0);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
        isVisible ? 'top-0 opacity-100' : '-top-24 opacity-0'
      } ${
        overLocation
          ? 'bg-secondary/98 backdrop-blur-sm shadow-lg shadow-primary/20'
          : overYellow
          ? 'bg-primary/98 backdrop-blur-sm shadow-lg shadow-secondary/20'
          : scrolled
          ? 'bg-white/98 backdrop-blur-sm shadow-lg shadow-primary/20'
          : 'bg-secondary shadow-md shadow-primary/10'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection('home')}
              className="transition-all duration-300 group hover:scale-105"
            >
              <div className="text-xl lg:text-2xl font-bold whitespace-nowrap">
                <span className={`transition-all duration-300 ${overLocation ? 'text-white' : overYellow ? 'text-secondary' : scrolled ? 'text-secondary' : 'text-white'}`}>Fake Arab </span>
                <span className={`transition-all duration-300 ${overLocation ? 'text-primary' : overYellow ? 'text-white' : 'text-primary'}`}>Shawarma Station</span>
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            <button
              onClick={() => scrollToSection('home')}
              className={`transition-all duration-300 font-bold text-base py-2 relative group ${overLocation ? 'text-white hover:text-primary' : overYellow ? 'text-white hover:text-primary' : scrolled ? 'text-secondary hover:text-primary' : 'text-white hover:text-primary'}`}
            >
              <span className="relative z-10">Home</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className={`transition-all duration-300 font-bold text-base py-2 relative group ${overLocation ? 'text-white hover:text-primary' : overYellow ? 'text-white hover:text-primary' : scrolled ? 'text-secondary hover:text-primary' : 'text-white hover:text-primary'}`}
            >
              <span className="relative z-10">Menu</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`transition-all duration-300 font-bold text-base py-2 relative group ${overLocation ? 'text-white hover:text-primary' : overYellow ? 'text-white hover:text-primary' : scrolled ? 'text-secondary hover:text-primary' : 'text-white hover:text-primary'}`}
            >
              <span className="relative z-10">About</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('location')}
              className={`transition-all duration-300 font-bold text-base py-2 relative group ${overLocation ? 'text-white hover:text-primary' : overYellow ? 'text-white hover:text-primary' : scrolled ? 'text-secondary hover:text-primary' : 'text-white hover:text-primary'}`}
            >
              <span className="relative z-10">Location</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 transition-colors duration-200 ${overLocation ? 'text-white hover:text-primary' : overYellow ? 'text-secondary hover:text-white' : scrolled ? 'text-secondary hover:text-primary' : 'text-white hover:text-primary'}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={28} strokeWidth={2} />
            ) : (
              <Menu size={28} strokeWidth={2} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className={`pb-4 space-y-1 pt-4 ${overLocation ? 'border-t border-white/20' : overYellow ? 'border-t border-white/20' : scrolled ? 'border-t border-secondary/20' : 'border-t border-white/20'}`}>
            <button
              onClick={() => scrollToSection('home')}
              className={`w-full text-left px-4 py-3 transition-all duration-200 font-bold tracking-wide rounded ${overLocation ? 'text-white hover:text-primary hover:bg-white/10' : overYellow ? 'text-white hover:text-primary hover:bg-white/10' : scrolled ? 'text-secondary hover:text-primary hover:bg-primary/10' : 'text-white hover:text-primary hover:bg-white/10'}`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className={`w-full text-left px-4 py-3 transition-all duration-200 font-bold tracking-wide rounded ${overLocation ? 'text-white hover:text-primary hover:bg-white/10' : overYellow ? 'text-white hover:text-primary hover:bg-white/10' : scrolled ? 'text-secondary hover:text-primary hover:bg-primary/10' : 'text-white hover:text-primary hover:bg-white/10'}`}
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`w-full text-left px-4 py-3 transition-all duration-200 font-bold tracking-wide rounded ${overLocation ? 'text-white hover:text-primary hover:bg-white/10' : overYellow ? 'text-white hover:text-primary hover:bg-white/10' : scrolled ? 'text-secondary hover:text-primary hover:bg-primary/10' : 'text-white hover:text-primary hover:bg-white/10'}`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('location')}
              className={`w-full text-left px-4 py-3 transition-all duration-200 font-bold tracking-wide rounded ${overLocation ? 'text-white hover:text-primary hover:bg-white/10' : overYellow ? 'text-white hover:text-primary hover:bg-white/10' : scrolled ? 'text-secondary hover:text-primary hover:bg-primary/10' : 'text-white hover:text-primary hover:bg-white/10'}`}
            >
              Location
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
