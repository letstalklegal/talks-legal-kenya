import { Button } from "@/components/ui/button";
import { Youtube, Mail, Instagram, Facebook, Linkedin } from "lucide-react";
import ashHero from "@/assets/karimi-hero-latest.png";
import tiktokIcon from "@/assets/tiktok-outline.svg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with enhanced visibility */}
      <div className="absolute inset-0">
        <img
          src={ashHero}
          alt="Karimi Chege - Legal Advocate and Host of Let's Talk Legal"
          className="w-full h-full object-cover"
          style={{
            objectPosition: '80% 30%', // Center host's face more prominently
            filter: 'brightness(1.12) contrast(1.08)', // Enhanced visibility and clarity
          }}
          loading="eager"
          fetchPriority="high"
        />
        {/* Softer spotlight effect on host - more subtle and elegant */}
        <div
          className="pointer-events-none absolute"
          style={{
            right: '5%',
            top: '10%',
            width: '45%',
            height: '75%',
            background: 'radial-gradient(ellipse at right center, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 25%, transparent 50%)',
            mixBlendMode: 'overlay',
            filter: 'blur(1px)',
          }}
        />
        {/* Reduced left-side gradient overlay for better image visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-primary/15" />
      </div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl py-16 md:py-24 lg:py-28">
          {/* Text Content with enhanced spacing and animations */}
          <div className="space-y-8 md:space-y-10 animate-fade-in">
            
            {/* Larger, more impactful headline with no-wrap solution */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-white leading-[1.05] tracking-tight">
              <span className="inline-block whitespace-nowrap">Let's Talk Legal with</span>
              <span 
                className="block whitespace-nowrap text-accent"
                style={{ fontSize: 'clamp(1.25rem, 5.5vw, 5rem)' }}
                aria-label="Karimi Chege"
              >
                Karimi Chege
              </span>
            </h1>
            
            {/* Enhanced tagline with better spacing */}
            <p className="text-lg md:text-xl lg:text-2xl text-white/95 font-sans leading-relaxed font-light max-w-2xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Empowering Kenyans through clear, practical employment law education — for employees, employers and law learners.
            </p>
            
            {/* Enhanced quote box with better contrast */}
            <div className="bg-white/12 backdrop-blur-md border border-white/25 p-6 md:p-8 rounded-2xl shadow-xl max-w-2xl hover:bg-white/15 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <p className="text-base md:text-lg italic text-white font-serif leading-relaxed">
                "At Let's Talk Legal, we make employment law practical and personal—because you deserve to know."
              </p>
            </div>
            
            {/* Enhanced CTA Buttons with improved hover effects */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button 
                size="lg"
                asChild
                className="bg-accent hover:bg-accent/80 text-primary font-sans font-semibold text-base rounded-full px-8 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
              >
                <a href="https://www.youtube.com/@LetsTalkLegal" target="_blank" rel="noopener noreferrer">
                  <Youtube className="mr-2 h-5 w-5 group-hover:scale-125 transition-transform" />
                  Watch on YouTube
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                asChild
                className="border-2 border-white bg-white/10 text-white hover:bg-white hover:text-primary font-sans font-semibold text-base rounded-full px-8 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
              >
                <a href="/contact">
                  <Mail className="mr-2 h-5 w-5 group-hover:scale-125 transition-transform" />
                  Join the Community
                </a>
              </Button>
              <Button 
                size="lg"
                asChild
                className="bg-primary hover:bg-primary/80 text-white font-sans font-semibold text-base rounded-full px-8 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <a href="/contact">
                  Book a Consultation
                </a>
              </Button>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4 pt-6 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <a
                href="https://www.youtube.com/@LetsTalkLegal"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 hover:bg-accent rounded-full transition-all duration-300 hover:scale-110 group"
                aria-label="YouTube"
              >
                <Youtube className="h-6 w-6 text-white group-hover:text-primary" />
              </a>
              <a
                href="https://www.instagram.com/lets_talklegal/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 hover:bg-accent rounded-full transition-all duration-300 hover:scale-110 group"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6 text-white group-hover:text-primary" />
              </a>
              <a
                href="https://www.facebook.com/letstalklegal"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 hover:bg-accent rounded-full transition-all duration-300 hover:scale-110 group"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6 text-white group-hover:text-primary" />
              </a>
              <a
                href="https://www.tiktok.com/@karimichege"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 hover:bg-accent rounded-full transition-all duration-300 hover:scale-110 group"
                aria-label="TikTok"
              >
                <img src={tiktokIcon} alt="TikTok" className="h-6 w-6 text-white group-hover:text-primary" style={{ filter: 'brightness(0) invert(1)' }} />
              </a>
              <a
                href="https://www.linkedin.com/in/ashley-karimi-chege-16432310b"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 hover:bg-accent rounded-full transition-all duration-300 hover:scale-110 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6 text-white group-hover:text-primary" />
              </a>
            </div>
            
            {/* Professional title - responsive positioning */}
            <div className="mt-6 max-w-2xl sm:max-w-full animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <p
                className="whitespace-nowrap sm:overflow-x-auto md:truncate text-white/80 font-sans leading-snug pr-4 text-sm md:text-base"
                title="Karimi Chege — Practising Advocate of the High Court of Kenya • Commissioner for Oaths • Certified Mediator"
                aria-label="Karimi Chege — Practising Advocate of the High Court of Kenya • Commissioner for Oaths • Certified Mediator"
              >
                Karimi Chege — Advocate of the High Court of Kenya • Commissioner for Oaths • Mediator
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
