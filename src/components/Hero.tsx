import { Button } from "@/components/ui/button";
import { Youtube, Mail } from "lucide-react";
import ashHero from "@/assets/karimi-hero-latest.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={ashHero}
          alt="Karimi Chege - Legal Advocate and Host of Let's Talk Legal"
          className="w-full h-full object-cover object-right-top"
          style={{ objectPosition: 'right center' }}
          loading="eager"
          fetchPriority="high"
        />
        {/* Subtle radial highlight on host - minimal interference */}
        <div
          className="pointer-events-none absolute"
          style={{
            right: 0,
            top: '15%',
            width: '50%',
            height: '70%',
            background: 'radial-gradient(ellipse at right center, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 30%, transparent 60%)',
            mixBlendMode: 'normal',
          }}
        />
        {/* Reduced gradient overlay - only on left side for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/15 via-transparent to-primary/20" />
      </div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl py-20 md:py-32">
          {/* Text Content */}
          <div className="space-y-6 md:space-y-8 animate-fade-in">
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-white leading-[1.1]">
              Let's Talk Legal with{" "}
              <span className="text-accent">Karimi Chege</span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 font-sans leading-relaxed font-light max-w-2xl">
              Empowering Kenyans through clear, practical employment law education — for employees, employers and law learners.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 md:p-8 rounded-2xl shadow-lg max-w-2xl">
              <p className="text-base md:text-lg italic text-white font-serif leading-relaxed">
                "At Let's Talk Legal, we make employment law practical and personal—because you deserve to know."
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button 
                size="lg"
                asChild
                className="bg-accent hover:bg-accent/90 text-primary font-sans font-semibold text-base rounded-full px-8 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <a href="https://www.youtube.com/@LetsTalkLegal" target="_blank" rel="noopener noreferrer">
                  <Youtube className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Watch on YouTube
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                asChild
                className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-primary font-sans font-semibold text-base rounded-full px-8 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <a href="/contact">
                  <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Join the Community
                </a>
              </Button>
              <Button 
                size="lg"
                asChild
                className="bg-primary hover:bg-primary/90 text-white font-sans font-semibold text-base rounded-full px-8 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                <a href="/contact">
                  Book a Consultation
                </a>
              </Button>
            </div>
            
            <p className="text-sm text-white/70 font-sans mt-4 max-w-2xl">
              Karimi Chege — Advocate of the High Court. Associate, Maina & Onsare Partners Advocates LLP (since 19 May 2022).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
