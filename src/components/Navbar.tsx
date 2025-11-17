import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [overYellow, setOverYellow] = useState(false);
  const [overLocation, setOverLocation] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Trigger slide-down animation on mount
    setTimeout(() => setIsVisible(true), 100);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const navbarHeight = 64; // navbar height (h-16 = 64px)

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
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  const goToAbout = () => {
    navigate('/about');
    setIsOpen(false);
  };

  const goToMenu = () => {
    navigate('/menu');
    setIsOpen(false);
  };

  const goToContact = () => {
    navigate('/contact');
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
        isVisible ? 'top-0 opacity-100' : '-top-16 opacity-0'
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
        <div className="flex items-center justify-between h-16">
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

          {/* Hamburger Menu Button */}
          <div className="relative">
            <button
              className={`p-2 transition-colors duration-200 ${overLocation ? 'text-white hover:text-primary' : overYellow ? 'text-secondary hover:text-white' : scrolled ? 'text-secondary hover:text-primary' : 'text-white hover:text-primary'}`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X size={24} strokeWidth={2} />
              ) : (
                <Menu size={24} strokeWidth={2} />
              )}
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
              <div className="absolute right-0 top-full mt-3 w-56 bg-secondary rounded-2xl shadow-2xl border border-primary/20 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="p-2">
                  <button
                    onClick={() => scrollToSection('home')}
                    className="w-full text-left px-4 py-3.5 text-sm font-bold text-white hover:bg-primary hover:text-secondary transition-all duration-200 rounded-xl flex items-center gap-3 group"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary group-hover:bg-secondary transition-colors"></span>
                    Home
                  </button>
                  <button
                    onClick={goToMenu}
                    className="w-full text-left px-4 py-3.5 text-sm font-bold text-white hover:bg-primary hover:text-secondary transition-all duration-200 rounded-xl flex items-center gap-3 group"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary group-hover:bg-secondary transition-colors"></span>
                    Menu
                  </button>
                  <button
                    onClick={goToAbout}
                    className="w-full text-left px-4 py-3.5 text-sm font-bold text-white hover:bg-primary hover:text-secondary transition-all duration-200 rounded-xl flex items-center gap-3 group"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary group-hover:bg-secondary transition-colors"></span>
                    About
                  </button>
                  <button
                    onClick={goToContact}
                    className="w-full text-left px-4 py-3.5 text-sm font-bold text-white hover:bg-primary hover:text-secondary transition-all duration-200 rounded-xl flex items-center gap-3 group"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary group-hover:bg-secondary transition-colors"></span>
                    Contact
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
