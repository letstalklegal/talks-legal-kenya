import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Scale, Heart, Youtube } from "lucide-react";
import karimiAbout from "@/assets/karimi-about.jpg";
import podcastStudio from "@/assets/podcast-studio.jpg";

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-serif font-bold">
              Meet <span className="text-accent">Karimi Chege</span>
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed opacity-90">
              Employment Lawyer, Content Creator, and Voice for Workplace Justice
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">
                The Mission
              </h2>
              <div className="h-1 w-24 bg-accent rounded-full" />
              <p className="text-lg text-muted-foreground leading-relaxed">
                "Let's Talk Legal with Karimi Chege" exists to <strong className="text-primary">empower everyday Kenyans</strong> with the knowledge to navigate their workplaces confidently.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From unfair dismissals to contract disputes, Karimi makes complex legal principles simple, relevant, and actionable.
              </p>
              <div className="bg-secondary border-l-4 border-accent p-6 rounded-lg">
                <p className="text-lg italic text-primary font-serif">
                  Inspired by Proverbs 18:15, this platform stands on the belief that <strong>knowledge is both power and protection.</strong>
                </p>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent to-primary/20 rounded-2xl blur-xl opacity-20" />
              <img
                src={karimiAbout}
                alt="Karimi Chege in professional setting"
                className="relative rounded-2xl shadow-2xl border-4 border-accent w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who She Serves */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
              Who She Serves
            </h2>
            <div className="h-1 w-24 bg-accent mx-auto rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-accent/20 hover:border-accent transition-all hover:shadow-xl">
              <CardContent className="p-8 space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full">
                  <Briefcase className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-primary">Employees</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Understand your rights and responsibilities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Learn about contracts, wages, and benefits</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Navigate terminations and disputes</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/20 hover:border-accent transition-all hover:shadow-xl">
              <CardContent className="p-8 space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full">
                  <Scale className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-primary">Employers</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Ensure compliance with labor laws</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Create fair workplace policies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Maintain healthy work cultures</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Media Presence */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1 animate-scale-in">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-30" />
              <img
                src={podcastStudio}
                alt="Podcast studio setup"
                className="relative rounded-2xl shadow-2xl border-4 border-accent w-full"
              />
            </div>
            
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">
                Media Presence
              </h2>
              <div className="h-1 w-24 bg-accent rounded-full" />
              <p className="text-lg text-muted-foreground leading-relaxed">
                Karimi connects with thousands across multiple platforms, bringing employment law education to where Kenyans are—on their phones and screens.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Youtube className="h-6 w-6 text-accent" />
                  <span className="text-lg font-sans font-semibold">YouTube - Weekly Episodes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="h-6 w-6 text-accent" />
                  <span className="text-lg font-sans font-semibold">Instagram, TikTok & Facebook - Daily Content</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Briefcase className="h-6 w-6 text-accent" />
                  <span className="text-lg font-sans font-semibold">LinkedIn - Professional Insights</span>
                </div>
              </div>

              <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-lg">
                <p className="text-lg font-sans font-semibold text-primary">
                  🎥 Subscribe for weekly episodes every Wednesday
                </p>
              </div>

              <Button size="lg" className="bg-primary hover:bg-accent hover:text-primary transition-colors">
                <Youtube className="mr-2 h-5 w-5" />
                Subscribe Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
