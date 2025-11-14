import { Button } from "@/components/ui/button";
import { Youtube, Mail } from "lucide-react";
import karimiHero from "@/assets/karimi-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-beige via-secondary to-accent/10 overflow-hidden">
      {/* Subtle warm gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-beige/50 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center py-12">
          {/* Text Content */}
          <div className="space-y-6 md:space-y-8 animate-fade-in">
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-primary leading-[1.1]">
              Let's Talk Legal with{" "}
              <span className="text-accent">Karimi Chege</span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-foreground/80 font-sans leading-relaxed font-light">
              Empowering Kenyans Through Employment Law Education
            </p>
            
            <div className="bg-background/60 backdrop-blur-sm border border-accent/30 p-6 md:p-8 rounded-2xl shadow-lg">
              <p className="text-base md:text-lg italic text-primary font-serif leading-relaxed">
                "The heart of the discerning acquires knowledge, and the ear of the wise seeks it out."
              </p>
              <p className="text-sm text-accent font-sans font-semibold mt-3">— Proverbs 18:15</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans font-semibold text-base rounded-full px-8 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <Youtube className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch on YouTube
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-accent bg-transparent text-accent hover:bg-accent hover:text-primary-foreground font-sans font-semibold text-base rounded-full px-8 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Join the Community
              </Button>
            </div>
          </div>

          {/* Image with Vignette Blend */}
          <div className="relative animate-scale-in lg:order-last order-first">
            {/* Golden glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-br from-accent via-accent/40 to-transparent rounded-full blur-2xl opacity-40" />
            
            {/* Image container with vignette */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl border-2 border-accent/40 shadow-2xl">
                <img
                  src={karimiHero}
                  alt="Ashley Karimi Chege - Employment Lawyer"
                  className="w-full h-auto object-cover"
                />
                {/* Vignette fade overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-beige/60 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-l from-beige/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
