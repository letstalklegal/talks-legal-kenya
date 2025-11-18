import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlayCircle, Download, MessageCircle, Heart, Shield, Users, Youtube, ArrowRight, Briefcase, Scale } from "lucide-react";

export default function SegmentsPage() {
  const segments = [
    {
      title: "Breaking the Chambers",
      tagline: "Pupillage Stories Without the Silence",
      icon: Briefcase,
      description: "A safe, moderated space where law pupils and junior advocates share honest pupillage experiences — the pressure, mentorship, self-doubt, and growth that no one talks about.",
      features: [
        "Candid stories from emerging advocates",
        "Mentorship & career navigation insights",
        "100% anonymous — no firm names ever published",
        "Moderated for safety and professionalism",
      ],
      cta: "Share Your Pupillage Story",
      ctaHref: "/submit-story",
    },
    {
      title: "The Legal Clinic",
      tagline: "Your Workplace Story Matters",
      icon: Heart,
      description: "Real employee and employer stories paired with clear Kenyan employment law explanations. A respectful space to be heard and understood.",
      features: [
        "Confidential workplace story submissions",
        "Real scenarios + legal breakdown",
        "Emotional validation + practical solutions",
        "Community learning, zero judgment",
      ],
      cta: "Share Your Workplace Experience",
      ctaHref: "/submit-story",
    },
    {
      title: "Workplace Rights Explained",
      tagline: "Employment Law Made Simple",
      icon: Scale,
      description: "Weekly bite-sized video lessons breaking down Kenyan employment rights: maternity, contracts, termination, harassment — in plain English and Kiswahili.",
      features: [
        "New episode every Wednesday on YouTube",
        "Searchable library of real-life scenarios",
        "No legal jargon — just clear answers",
        "Free downloadable letter templates",
      ],
      cta: "Watch Latest Episode",
      ctaHref: "/episodes",
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-serif font-bold leading-tight">
              Our Three <span className="text-accent">Segments</span>
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed opacity-90">
              Real stories. Real law. Real impact.
            </p>
            <p className="text-lg leading-relaxed opacity-85 max-w-3xl mx-auto">
              Bringing Kenyan employment law to life — for employees, employers, and law learners.
            </p>

            {/* Trust/Safety bar */}
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-lg p-4 inline-flex flex-col sm:flex-row items-center justify-center gap-3 max-w-2xl mx-auto">
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm md:text-base font-light">
                  Your story is 100% safe. Anonymous submissions encouraged.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Segments Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
                Why These Segments Matter
              </h2>
              <div className="h-1 w-24 bg-accent rounded-full" />
            </div>

            <p className="text-lg text-foreground leading-relaxed">
              Every voice matters. Every experience teaches. Every story can change how the law is understood and applied in Kenya. Let's Talk Legal creates three dedicated platforms for sharing, learning, and growing—capturing authentic stories from the Kenyan legal and workplace landscape that often go unheard in formal education and corporate settings.
            </p>

            <p className="text-lg text-foreground leading-relaxed">
              Kenyan law is best understood through lived experience. Pupillage is more than doctrinal study. Workplace rights mean nothing without real examples. We believe in learning through stories—confidentially, respectfully, and with intention. Every submission is reviewed by Karimi Chege, Advocate of the High Court of Kenya, anonymized, and verified for legal accuracy before being shared as educational case studies.
            </p>

            <div className="bg-secondary border-l-4 border-accent p-8 rounded-lg my-8 shadow-sm">
              <p className="text-lg italic text-primary font-serif leading-relaxed">
                "Your story deserves to be heard with both legal clarity and human compassion."
              </p>
              <p className="text-sm text-muted-foreground mt-4">
                — Let's Talk Legal
              </p>
            </div>

            <div className="bg-accent/10 border border-accent/30 p-6 rounded-xl">
              <p className="text-sm text-foreground font-medium">
                <strong>Your Safety & Privacy:</strong> All submissions are treated with strict confidentiality. We never publish names, organizations, or identifying details without explicit written consent. Anonymous submissions are encouraged and fully protected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Three Segments */}
      <section className="py-20 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto mb-16">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">
                Our Platforms
              </h2>
              <div className="h-1 w-24 bg-accent rounded-full mx-auto" />
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {segments.map((seg, i) => {
                const IconComponent = seg.icon;
                return (
                  <Card 
                    key={i} 
                    className="border-2 border-accent/20 hover:border-accent transition-all hover:shadow-xl group cursor-pointer"
                  >
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 rounded-lg bg-accent/20">
                          <IconComponent className="h-6 w-6 text-accent" />
                        </div>
                      </div>
                      <CardTitle className="text-2xl font-serif font-bold text-primary group-hover:text-accent transition-colors">
                        {seg.title}
                      </CardTitle>
                      <p className="text-accent font-semibold text-sm italic mt-2">
                        {seg.tagline}
                      </p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {seg.description}
                      </p>

                      {/* Features list */}
                      <ul className="space-y-2 pt-4">
                        {seg.features.map((f, fi) => (
                          <li key={fi} className="flex items-start gap-2 text-sm">
                            <span className="text-accent font-bold flex-shrink-0">✓</span>
                            <span className="text-muted-foreground">{f}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="pt-4 border-t border-border">
                        <Button 
                          asChild
                          className="w-full bg-primary hover:bg-accent hover:text-primary transition-colors"
                        >
                          <a href={seg.ctaHref} className="flex items-center justify-center gap-2">
                            {seg.cta}
                            <ArrowRight className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Latest Episode Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-sm font-semibold text-accent bg-accent/10 px-4 py-2 rounded-full inline-block mb-4">
                Featured Content
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
                Latest Episode
              </h2>
              <p className="text-lg text-muted-foreground">
                From our Workplace Rights Explained series
              </p>
            </div>

            <Card className="border-2 border-accent/20 overflow-hidden hover:shadow-xl transition-all">
              {/* Video Thumbnail - Interactive Preview */}
              <a 
                href="https://www.youtube.com/watch?v=0kQUv9KPztc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full aspect-video relative overflow-hidden border-b-2 border-accent/20 group block"
              >
                <img 
                  src="/src/assets/employment-law.jpeg" 
                  alt="Employment Law Unlocked - Latest Episode" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 flex items-center justify-center transition-all duration-300">
                  <div className="flex flex-col items-center gap-3">
                    <PlayCircle className="h-16 w-16 text-white drop-shadow-lg group-hover:scale-125 group-hover:text-accent transition-all duration-300" />
                    <span className="text-white text-sm font-semibold drop-shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Click to watch on YouTube
                    </span>
                  </div>
                </div>
              </a>

              <CardHeader>
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <span className="text-sm font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                    Workplace Rights Explained
                  </span>
                </div>
                <CardTitle className="text-3xl font-serif font-bold text-primary">
                  Maternity Rights in Kenya: What Every Pregnant Employee Must Know
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-lg text-foreground leading-relaxed">
                  In this episode, Karimi Chege breaks down your rights as a pregnant employee under Kenyan law, covering paid leave entitlements, job protection guarantees, return-to-work rights, and anti-discrimination protections. Learn what employers must provide and what you can do if your rights are violated.
                </p>

                {/* Topic tags */}
                <div className="flex flex-wrap gap-2">
                  {["Maternity Leave", "Job Protection", "Return-to-Work Rights", "Anti-discrimination Laws"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-secondary text-muted-foreground text-sm font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-border">
                  <Button
                    size="lg"
                    asChild
                    className="flex-1 bg-primary hover:bg-accent hover:text-primary transition-colors"
                  >
                    <a href="https://www.youtube.com/watch?v=0kQUv9KPztc" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      <PlayCircle className="h-5 w-5" />
                      Watch on YouTube
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="flex-1 hover:bg-accent/10"
                  >
                    <a href="/guides" className="flex items-center justify-center gap-2">
                      <Download className="h-5 w-5" />
                      Download Guide
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


    </div>
  );
}
