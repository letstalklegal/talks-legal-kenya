import { Link } from "react-router-dom";
import { Youtube, Instagram, Linkedin, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Segments", path: "/segments" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Facebook, href: "#", label: "Facebook" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold text-accent">
              Let's Talk Legal
            </h3>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Empowering Kenyans through employment law education. Funded by faith, grounded in law.
            </p>
            <p className="text-xs italic text-accent">
              "The heart of the discerning acquires knowledge, and the ear of the wise seeks it out." 
              <br />— Proverbs 18:15
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-sans font-semibold text-lg text-accent">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-sans font-semibold text-lg text-accent">Connect With Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-primary-foreground/10 hover:bg-accent text-primary-foreground hover:text-primary p-3 rounded-full transition-all transform hover:scale-110"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
            <div className="space-y-2 mt-6">
              <p className="text-sm text-primary-foreground/80">
                Email: <a href="mailto:info@letstalklegal.co.ke" className="text-accent hover:underline">info@letstalklegal.co.ke</a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-6 text-center">
          <p className="text-sm text-primary-foreground/80">
            © {currentYear} Let's Talk Legal with Karimi Chege – All Rights Reserved.
          </p>
          <p className="text-xs text-primary-foreground/60 mt-2">
            Guided by Proverbs 18:15 — Empowering through knowledge.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
