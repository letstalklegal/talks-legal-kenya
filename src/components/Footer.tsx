import { Link } from "react-router-dom";
import { Youtube, Linkedin, Mail } from "lucide-react";
import logo from "@/assets/lets-talk-legal-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-8">
        <div className="grid md:grid-cols-2 gap-8 mb-6">
          {/* Left side: Logo and Brand Name */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3 group w-fit">
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
          </div>

          {/* Right side: Contact & Social */}
          <div className="space-y-4 md:text-right">
            <div className="flex items-center gap-4 md:justify-end">
              <a 
                href="https://www.youtube.com/@LetsTalkLegal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/ashley-karimi-chege-16432310b" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:info@letstalklegal.co.ke"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              Email: <a href="mailto:info@letstalklegal.co.ke" className="hover:text-accent transition-colors">info@letstalklegal.co.ke</a>
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-border pt-6 space-y-3">
          <p className="text-xs text-muted-foreground leading-relaxed">
            <strong>Disclaimer:</strong> The content on this site is educational and for information only. It is not legal advice. For case-specific advice or representation, contact us to book a consultation.
          </p>
          <p className="text-sm text-muted-foreground text-center">
            © Let's Talk Legal, {currentYear}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
