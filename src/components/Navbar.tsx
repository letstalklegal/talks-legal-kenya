import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/lets-talk-legal-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Segments", path: "/segments" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-md" // Enhanced shadow for professionalism
      role="navigation" // Accessibility improvement
    >
      <div className="container mx-auto px-6"> {/* Increased px for better spacing */}
        <div className="flex items-center justify-between h-24"> {/* Increased height for breathing room */}
          {/* Logo - Made larger and with subtle hover rotation */}
          <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center space-x-3 group">
            <img 
              src={logo} 
              alt="Let's Talk Legal Logo" 
              className="h-14 w-14 object-contain transition-transform duration-300 group-hover:rotate-6" // Stand out with subtle animation
            />
            <div className="flex flex-col leading-tight">
              <span className="text-2xl md:text-3xl font-serif font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent transition-all group-hover:scale-105"> {/* Gradient for standout, larger font */}
                Let's Talk Legal
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Improved spacing and underline thickness */}
          <div className="hidden md:flex items-center space-x-10"> {/* Increased space-x */}
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-sans font-semibold text-lg transition-colors relative group ${ // Bolder and larger font
                  isActive(link.path)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 w-full h-1 bg-accent transform transition-transform duration-300 origin-left ${ // Thicker underline
                    isActive(link.path) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* CTA Button - Added subtle shadow on hover */}
          <div className="hidden md:block">
            <Button 
              variant="default" 
              className="bg-primary hover:bg-accent hover:text-primary transition-all duration-300 hover:shadow-lg" // Professional hover effect
            >
              Book a Consultation {/* Updated text to match screenshot for relevance */}
            </Button>
          </div>

          {/* Mobile Menu Button - Added animation */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-primary hover:text-accent transition-transform duration-300"
            aria-label="Toggle menu"
            aria-expanded={isOpen} // Accessibility
          >
            {isOpen ? <X size={28} className="rotate-180 transition-transform" /> : <Menu size={28} className="transition-transform" />} {/* Icon animation */}
          </button>
        </div>

        {/* Mobile Navigation - Improved with slide animation and larger targets */}
        {isOpen && (
          <div className="md:hidden py-6 animate-slide-down origin-top"> {/* Changed to slide-down for better UX */}
            <div className="flex flex-col space-y-4 backdrop-blur-sm bg-background/90"> {/* Added blur for professional overlay */}
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-sans font-medium px-6 py-3 rounded-lg transition-colors text-lg ${ // Larger padding/font for touch
                    isActive(link.path)
                      ? "text-primary bg-secondary"
                      : "text-muted-foreground hover:text-primary hover:bg-secondary"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button 
                variant="default" 
                className="bg-primary hover:bg-accent hover:text-primary transition-colors mx-6 py-3" // Larger padding
              >
                Book a Consultation
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;