import Hero from "@/components/Hero";
import { Card, CardContent } from "@/components/ui/card";
import { Scale, Users, BookOpen, Award, GraduationCap, Briefcase, CheckCircle2 } from "lucide-react";

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
    { icon: GraduationCap, title: "LLB (First Class)", detail: "Riara University" },
    { icon: Briefcase, title: "Advocates Training Programme", detail: "Kenya School of Law" },
    { icon: CheckCircle2, title: "Admitted as Advocate", detail: "Advocate of the High Court of Kenya" },
    { icon: Award, title: "Practising Advocate", detail: "Employment law specialist & mediator" },
  ];

  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* About Section - Enhanced with smooth fade-in and better spacing */}
      <section className="py-20 md:py-24 bg-background scroll-smooth">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section Header - Enhanced */}
            <div className="text-center space-y-4 mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary">
                About Let's Talk Legal
              </h2>
              <div className="h-1 w-24 bg-accent mx-auto rounded-full" />
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {/* Main content with fade-in animation */}
              <div className="lg:col-span-2 space-y-6 text-foreground animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <p className="text-lg leading-relaxed">
                  <strong className="text-primary">Ashley Karimi Chege</strong> is a practising Advocate of the High Court of Kenya and employment law educator dedicated to making Kenyan employment law accessible and practical. She holds an LLB (First Class) from Riara University and completed the Advocates Training Programme at the Kenya School of Law. As a Certified Mediator with the Dialogue & Dispute Resolution Institute and a Commissioner for Oaths, she brings comprehensive legal expertise to workplace matters and dispute resolution.
                </p>
                <p className="text-lg leading-relaxed">
                  Through <em>Let's Talk Legal</em>, Ashley translates complex topics — from contract clauses and probation to maternity rights and unfair termination — into short, actionable episodes and written guides. As a certified mediator (Dialogue & Dispute Resolution Institute) she favours resolution-first approaches where appropriate.
                </p>
                <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg hover:bg-accent/15 transition-all duration-300">
                  <p className="font-semibold text-primary">
                    Note: Content on this site is educational and not a substitute for personalized legal advice. For case-specific guidance or representation, please book a consultation.
                  </p>
                </div>
              </div>
              
              {/* Quick Facts Aside - Enhanced */}
              <aside className="bg-card border-2 border-accent/20 rounded-2xl p-6 h-fit hover:border-accent/50 hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <h3 className="text-xl font-serif font-bold text-primary mb-6">Quick Facts</h3>
                <div className="space-y-4 text-sm">
                  <div className="pb-4 border-b border-accent/10 hover:border-accent/30 transition-colors">
                    <p className="font-semibold text-primary">LLB (First Class)</p>
                    <p className="text-muted-foreground">Riara University</p>
                  </div>
                  <div className="pb-4 border-b border-accent/10 hover:border-accent/30 transition-colors">
                    <p className="font-semibold text-primary">Professional Training</p>
                    <p className="text-muted-foreground">Kenya School of Law</p>
                  </div>
                  <div className="pb-4 border-b border-accent/10 hover:border-accent/30 transition-colors">
                    <p className="font-semibold text-primary">Advocate of High Court</p>
                    <p className="text-muted-foreground">Practising Advocate, Kenya</p>
                  </div>
                  <div className="pb-4 border-b border-accent/10 hover:border-accent/30 transition-colors">
                    <p className="font-semibold text-primary">Certified Mediator</p>
                    <p className="text-muted-foreground">Dialogue & Dispute Resolution Institute</p>
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Commissioner for Oaths</p>
                    <p className="text-muted-foreground">Document authentication & verification</p>
                  </div>
                </div>
              </aside>
            </div>

            {/* Career Timeline - Enhanced with icons and visual connections */}
            <div className="bg-secondary/50 rounded-2xl p-8 md:p-10 hover:bg-secondary/70 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-8 md:mb-10 text-center">Career Timeline</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {timeline.map((item, index) => (
                  <div 
                    key={index}
                    className="relative bg-background border-2 border-accent/20 rounded-xl p-6 hover:border-accent hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                  >
                    {/* Visual timeline connector line on larger screens */}
                    {index < timeline.length - 1 && (
                      <div className="hidden lg:block absolute -right-4 top-1/2 w-8 h-0.5 bg-accent/20 group-hover:bg-accent/40 transition-colors" />
                    )}
                    
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-accent/10 group-hover:bg-accent/20 rounded-full mb-4 transition-colors">
                      <item.icon className="h-5 w-5 text-accent" />
                    </div>
                    
                    <h4 className="font-semibold text-primary mb-2 text-sm md:text-base">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid - Enhanced with hover effects */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-secondary via-background to-background scroll-smooth">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">
              Why Choose Let's Talk Legal
            </h2>
            <div className="h-1 w-24 bg-accent mx-auto rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="border-2 border-accent/20 hover:border-accent transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center space-y-4">
                  {/* Icon with enhanced hover effect */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                    <feature.icon className="h-8 w-8 text-accent group-hover:scale-125 transition-transform" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-sans font-semibold text-primary group-hover:text-accent transition-colors">
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
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
