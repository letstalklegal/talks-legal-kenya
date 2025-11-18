import { Link } from "react-router-dom";
import { Youtube, Linkedin, Mail, Instagram, Facebook } from "lucide-react";
import TiktokSvg from "@/assets/tiktok-outline.svg";
import logo from "@/assets/lets-talk-legal-logo.png";

interface SocialLink {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}

const SOCIAL_LINKS: SocialLink[] = [
  {
    href: "https://www.youtube.com/@LetsTalkLegal",
    icon: Youtube,
    label: "YouTube",
  },
  {
    href: "https://www.instagram.com/lets_talklegal/",
    icon: Instagram,
    label: "Instagram",
  },
  {
    href: "https://www.facebook.com/letstalklegal",
    icon: Facebook,
    label: "Facebook",
  },
  {
    href: "https://www.tiktok.com/@karimichege",
    icon: () => (
      <img src={TiktokSvg} alt="TikTok" className="w-5 h-5" />
    ),
    label: "TikTok",
  },
  {
    href: "https://www.linkedin.com/in/ashley-karimi-chege-16432310b",
    icon: Linkedin,
    label: "LinkedIn",
  },
];

const SocialIconButton = ({
  href,
  icon: Icon,
  label,
}: SocialLink) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 hover:bg-accent text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    aria-label={label}
    title={label}
  >
    <Icon className="w-5 h-5" />
  </a>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border" role="contentinfo">
      {/* Main footer content with optimized padding */}
      <div className="container mx-auto px-6 py-8">
        {/* Grid with 3 columns on desktop, stacked on mobile - reduced gap for compact layout */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {/* Left side: Logo and Brand Name */}
          <div className="space-y-2 flex flex-col items-center md:items-start">
            <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center space-x-3 group w-fit">
              <img 
                src={logo} 
                alt="Let's Talk Legal Logo" 
                className="h-14 w-14 object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="flex flex-col leading-tight">
                <span className="text-xl md:text-2xl font-serif text-primary group-hover:text-accent transition-colors duration-300">
                  <span className="font-normal">Let's Talk </span>
                  <span className="font-bold text-accent">Legal</span>
                </span>
              </div>
            </Link>
          </div>

          {/* Middle: Quick Links - Reduced spacing for compact layout */}
          <div className="space-y-3 flex flex-col items-center md:items-start">
            <h4 className="text-base md:text-lg font-serif font-bold text-primary">Quick Links</h4>
            <ul className="space-y-1 text-sm text-muted-foreground text-center md:text-left">
              <li><Link to="/" onClick={() => window.scrollTo(0, 0)} className="hover:text-accent transition-colors duration-300">Home</Link></li>
              <li><Link to="/about" onClick={() => window.scrollTo(0, 0)} className="hover:text-accent transition-colors duration-300">About</Link></li>
              <li><Link to="/segments" onClick={() => window.scrollTo(0, 0)} className="hover:text-accent transition-colors duration-300">Segments</Link></li>
              <li><Link to="/blog" onClick={() => window.scrollTo(0, 0)} className="hover:text-accent transition-colors duration-300">Blog</Link></li>
              <li><Link to="/contact" onClick={() => window.scrollTo(0, 0)} className="hover:text-accent transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>

          {/* Right side: Contact & Social - Optimized for mobile and desktop */}
          <div className="space-y-3 flex flex-col items-center md:items-end">
            <h4 className="text-base md:text-lg font-serif font-bold text-primary">Connect With Us</h4>
            {/* Social icons with new SocialIconButton component */}
            <div className="flex items-center justify-center md:justify-end gap-3 flex-wrap">
              {SOCIAL_LINKS.map((link) => (
                <SocialIconButton key={link.label} {...link} />
              ))}
              <a 
                href="mailto:info@letstalklegal.co.ke"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 hover:bg-accent text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                aria-label="Email"
                title="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            {/* Email link aligned with icons, compact spacing */}
            <p className="text-sm text-muted-foreground text-center md:text-right">
              Email: <a href="mailto:info@letstalklegal.co.ke" className="hover:text-accent transition-colors duration-300">info@letstalklegal.co.ke</a>
            </p>
          </div>
        </div>

        {/* Disclaimer section - Reduced padding and space for compact layout */}
        <div className="border-t border-border pt-4 space-y-2 text-center max-w-4xl mx-auto">
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong>Disclaimer:</strong> The content on this site is educational and for information only. It is not legal advice. For case-specific advice or representation, contact us to book a consultation.
          </p>
          <p className="text-xs text-muted-foreground">
            © Let's Talk Legal, {currentYear}. All rights reserved. | <Link to="/privacy" className="hover:text-accent transition-colors duration-300">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;