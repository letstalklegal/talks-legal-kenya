import Hero from "@/components/Hero";
import { Card, CardContent } from "@/components/ui/card";
import { Scale, Users, BookOpen, Award } from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: Scale,
      title: "Employment Law Expertise",
      description: "Practical explanations of Kenyan employment law, grounded in professional practice and public education.",
    },
    {
      icon: Users,
      title: "Community-Focused",
      description: "Free legal clinics, anonymous story submissions, and community Q&A to amplify real workplace experiences.",
    },
    {
      icon: BookOpen,
      title: "Legal Education",
      description: "Short episodes and written explainers for employees, employers, and law learners — concise and searchable.",
    },
    {
      icon: Award,
      title: "Mediation & Resolution",
      description: "Certified mediator offering practical guidance and early dispute resolution options.",
    },
  ];

  const timeline = [
    { title: "LLB (First Class)", detail: "Riara University" },
    { title: "Advocates Training Programme", detail: "Kenya School of Law" },
    { title: "Pupillage", detail: "Completed pupillage and admitted as Advocate of the High Court" },
    { title: "Associate", detail: "Maina & Onsare Partners Advocates LLP — since 19 May 2022" },
  ];

  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">
                About Let's Talk Legal
              </h2>
              <div className="h-1 w-24 bg-accent mx-auto rounded-full" />
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2 space-y-6 text-foreground">
                <p className="text-lg leading-relaxed">
                  <strong className="text-primary">Ashley Karimi Chege</strong> is an employment lawyer and content creator dedicated to making Kenyan employment law accessible and practical. She holds an LLB (First Class) from Riara University and completed the Advocates Training Programme at the Kenya School of Law. She was admitted as an Advocate of the High Court and completed pupillage before joining Maina & Onsare Partners Advocates LLP, where she serves as an Associate (since 19 May 2022).
                </p>
                <p className="text-lg leading-relaxed">
                  Through <em>Let's Talk Legal</em>, Ashley translates complex topics — from contract clauses and probation to maternity rights and unfair termination — into short, actionable episodes and written guides. As a certified mediator (Dialogue & Dispute Resolution Institute) she favours resolution-first approaches where appropriate.
                </p>
                <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg">
                  <p className="font-semibold text-primary">
                    Note: Content on this site is educational and not a substitute for personalized legal advice. For case-specific guidance or representation, please book a consultation.
                  </p>
                </div>
              </div>
              
              <aside className="bg-card border-2 border-accent/20 rounded-2xl p-6 h-fit">
                <h3 className="text-xl font-serif font-bold text-primary mb-4">Quick Facts</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold text-primary">LLB (First Class)</p>
                    <p className="text-muted-foreground">Riara University</p>
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Advocate Training</p>
                    <p className="text-muted-foreground">Kenya School of Law</p>
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Associate</p>
                    <p className="text-muted-foreground">Maina & Onsare Partners Advocates LLP (since 19 May 2022)</p>
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Certified Mediator</p>
                    <p className="text-muted-foreground">Dialogue & Dispute Resolution Institute</p>
                  </div>
                </div>
              </aside>
            </div>

            {/* Career Timeline */}
            <div className="bg-secondary/50 rounded-2xl p-8">
              <h3 className="text-2xl font-serif font-bold text-primary mb-6 text-center">Career Timeline</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {timeline.map((item, index) => (
                  <div 
                    key={index}
                    className="bg-background border border-accent/20 rounded-xl p-4 hover:border-accent transition-colors"
                  >
                    <h4 className="font-semibold text-primary mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.detail}</p>
                  </div>
                ))}
              </div>
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
