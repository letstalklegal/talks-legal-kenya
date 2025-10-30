import { Button } from "@/components/ui/button";
import { Youtube, Mail } from "lucide-react";
import karimiHero from "@/assets/karimi-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-background via-secondary to-background overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-accent/10 rounded-full">
              <span className="text-accent font-sans font-semibold text-sm">Your Resident Employment Lawyer</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-primary leading-tight">
              Let's Talk Legal with{" "}
              <span className="text-accent">Karimi Chege</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground font-sans leading-relaxed">
              Empowering Kenyans Through Employment Law Education
            </p>
            
            <div className="bg-secondary border-l-4 border-accent p-6 rounded-lg">
              <p className="text-lg italic text-primary font-serif">
                "The heart of the discerning acquires knowledge, and the ear of the wise seeks it out."
              </p>
              <p className="text-sm text-accent font-sans font-semibold mt-2">— Proverbs 18:15</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans font-semibold text-base group"
              >
                <Youtube className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch on YouTube
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-accent text-accent hover:bg-accent hover:text-primary font-sans font-semibold text-base group"
              >
                <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Join the Community
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground font-sans">
              <span className="font-semibold text-accent">Funded by Faith</span> • <span className="font-semibold text-primary">Grounded in Law</span>
            </p>
          </div>

          {/* Image */}
          <div className="relative animate-scale-in">
            <div className="absolute -inset-4 bg-gradient-to-r from-accent to-primary/20 rounded-2xl blur-xl opacity-30" />
            <div className="relative overflow-hidden rounded-2xl border-4 border-accent shadow-2xl">
              <img
                src={karimiHero}
                alt="Ashley Karimi Chege - Employment Lawyer"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
