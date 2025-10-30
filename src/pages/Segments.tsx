import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Heart, FileCheck, Calendar } from "lucide-react";

const Segments = () => {
  const segments = [
    {
      icon: GraduationCap,
      title: "Breaking the Chambers",
      tagline: "The Silent Season Speaks",
      description: "A flagship segment giving law pupils and advocates a platform to share their pupillage experiences—the silent season of legal growth.",
      features: [
        "Anonymous story submissions welcomed",
        "No firm names mentioned (confidentiality protected)",
        "Advocates share insights and mentorship moments",
        "Real experiences from the legal trenches"
      ],
      color: "primary"
    },
    {
      icon: Heart,
      title: "The Legal Clinic",
      tagline: "Your Workplace Stories Matter",
      description: "A safe space for employees to share workplace challenges and learn from real experiences.",
      features: [
        "Emotional support and practical advice",
        "Anonymous submissions available",
        "Community learning from shared experiences",
        "Expert legal perspective on each story"
      ],
      color: "accent"
    },
  ];

  const services = [
    {
      title: "Contract Reviews",
      audience: "Employees",
      description: "Understand every clause before you sign. Get clarity on your employment terms.",
      icon: FileCheck
    },
    {
      title: "Policy Reviews",
      audience: "Employers",
      description: "Ensure HR compliance and best practices. Build fair workplace policies.",
      icon: FileCheck
    },
    {
      title: "Termination Advice",
      audience: "Both Parties",
      description: "Handle separations with fairness and legality. Navigate difficult transitions.",
      icon: FileCheck
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-serif font-bold">
              Interactive <span className="text-accent">Legal Education</span>
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed opacity-90">
              Real Stories, Real Law, Real Impact
            </p>
          </div>
        </div>
      </section>

      {/* Main Segments */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {segments.map((segment, index) => (
              <div key={index} className={`${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} flex flex-col lg:flex-row gap-12 items-center`}>
                <Card className="flex-1 border-2 border-accent/20 hover:border-accent transition-all hover:shadow-2xl">
                  <CardHeader>
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                      <segment.icon className="h-8 w-8 text-accent" />
                    </div>
                    <CardTitle className="text-3xl font-serif font-bold text-primary">
                      {segment.title}
                    </CardTitle>
                    <p className="text-accent font-sans font-semibold italic">{segment.tagline}</p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {segment.description}
                    </p>
                    <ul className="space-y-3">
                      {segment.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-accent font-bold mr-2">✓</span>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="bg-primary hover:bg-accent hover:text-primary transition-colors">
                      Submit Your Story
                    </Button>
                  </CardContent>
                </Card>
                
                <div className="flex-1 space-y-4">
                  <div className="bg-secondary p-8 rounded-2xl border-2 border-accent/20">
                    <p className="text-2xl font-serif italic text-primary">
                      "{segment.title === "Breaking the Chambers" 
                        ? "Finally, a space where pupillage stories can be told without fear."
                        : "Your workplace challenges deserve to be heard and understood."}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Services */}
      <section className="py-20 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
              Professional Services
            </h2>
            <div className="h-1 w-24 bg-accent mx-auto rounded-full mb-6" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expert legal guidance for employees and employers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="border-2 border-accent/20 hover:border-accent transition-all hover:shadow-xl">
                <CardContent className="p-8 space-y-4 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full">
                    <service.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-primary">
                    {service.title}
                  </h3>
                  <p className="text-sm font-sans font-semibold text-accent">
                    For {service.audience}
                  </p>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-primary hover:bg-accent hover:text-primary transition-colors">
              Book Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Events & Community */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-2 border-accent/20">
            <CardContent className="p-12 text-center space-y-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 rounded-full">
                <Calendar className="h-10 w-10 text-accent" />
              </div>
              <h2 className="text-4xl font-serif font-bold text-primary">
                Events & Community
              </h2>
              <p className="text-xl text-muted-foreground">
                Join online legal clinics, Zoom sessions, and future live meetups
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-accent hover:text-primary transition-colors">
                  View Upcoming Events
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-accent text-accent hover:bg-accent hover:text-primary">
                  Join Community
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Segments;
