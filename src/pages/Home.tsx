import Hero from "@/components/Hero";
import { Card, CardContent } from "@/components/ui/card";
import { Scale, Users, BookOpen, Video } from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: Scale,
      title: "Employment Law Expertise",
      description: "Demystifying complex legal principles for everyday Kenyans",
    },
    {
      icon: Users,
      title: "Community Focused",
      description: "A safe space for employees and employers to learn and grow",
    },
    {
      icon: BookOpen,
      title: "Legal Education",
      description: "Making employment law practical, personal, and actionable",
    },
    {
      icon: Video,
      title: "Weekly Content",
      description: "New episodes every Wednesday on YouTube and social platforms",
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">
              About Let's Talk Legal
            </h2>
            <div className="h-1 w-24 bg-accent mx-auto rounded-full" />
            <p className="text-xl text-muted-foreground leading-relaxed">
              <strong className="text-primary">Ashley Karimi Chege</strong> is a Kenyan Employment Lawyer and Content Creator dedicated to empowering everyday Kenyans with the knowledge to navigate their workplaces confidently.
            </p>
            <div className="bg-secondary p-8 rounded-2xl border-2 border-accent/20">
              <p className="text-2xl font-serif italic text-primary">
                "At Let's Talk Legal, we make employment law practical and personal—because you deserve to know."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="border-2 border-accent/20 hover:border-accent transition-all duration-300 hover:shadow-lg group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors">
                    <feature.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-sans font-semibold text-primary">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
