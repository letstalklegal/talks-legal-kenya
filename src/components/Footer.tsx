import { Link } from "react-router-dom";
import logo from "@/assets/lets-talk-legal-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-beige border-t border-border">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left side: Logo and Brand Name */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src={logo} 
              alt="Let's Talk Legal Logo" 
              className="h-12 w-12 object-contain transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-lg md:text-xl font-serif text-primary group-hover:text-accent transition-colors">
                <span className="font-normal">Let's Talk </span>
                <span className="font-bold text-accent">Legal</span>
              </span>
            </div>
          </Link>

          {/* Right side: Copyright */}
          <p className="text-sm text-muted-foreground text-center md:text-right">
            © Let's Talk Legal, {currentYear}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
