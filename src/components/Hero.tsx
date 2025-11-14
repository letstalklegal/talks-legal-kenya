import { Button } from "@/components/ui/button";
import { Youtube, Mail } from "lucide-react";
import ashHero from "@/assets/ashleywan.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={ashHero}
          alt="Let's Talk Legal - Hero"
          className="w-full h-full object-cover object-right-top filter contrast-115 brightness-105 saturate-105"
          style={{ objectPosition: 'right center' }}
        />
        {/* Radial highlight to emphasize host area without affecting text readability */}
        <div
          className="pointer-events-none absolute"
          style={{
            right: 0,
            top: '15%',
            width: '55%',
            height: '70%',
            background: 'radial-gradient(ellipse at right center, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 30%, rgba(0,0,0,0.08) 70%, rgba(0,0,0,0.28) 100%)',
            mixBlendMode: 'normal',
          }}
        />
        {/* Gradient overlay for text readability and blending (lightened for clarity) */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-primary/30" />
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
              Empowering Kenyans Through Employment Law Education
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 md:p-8 rounded-2xl shadow-lg max-w-2xl">
              <p className="text-base md:text-lg italic text-white font-serif leading-relaxed">
                "The heart of the discerning acquires knowledge, and the ear of the wise seeks it out."
              </p>
              <p className="text-sm text-accent font-sans font-semibold mt-3">— Proverbs 18:15</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-primary font-sans font-semibold text-base rounded-full px-8 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <Youtube className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch on YouTube
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-primary font-sans font-semibold text-base rounded-full px-8 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Join the Community
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
