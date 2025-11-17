import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Users, GraduationCap, Youtube, Linkedin, Instagram, Facebook } from "lucide-react";
import karimiAbout from "@/assets/karimi-about.jpg";
import podcastStudio from "@/assets/podcast-studio.jpg";

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* SEO Meta - Managed in index.html */}
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-serif font-bold leading-tight">
              Meet <span className="text-accent">Karimi Chege</span>
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed opacity-90 max-w-3xl mx-auto">
              Advocate of the High Court | Employment Law Specialist | Legal Educator
            </p>
            <p className="text-lg leading-relaxed opacity-80 max-w-2xl mx-auto">
              Making Kenyan employment law accessible, practical, and empowering for all
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Main Mission Content */}
            <div className="lg:col-span-2 space-y-6 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">
                About Karimi
              </h2>
              <div className="h-1 w-24 bg-accent rounded-full" />
              
              {/* Mission Paragraph - 140-180 words */}
              <p className="text-lg text-foreground leading-relaxed">
                Ashley Karimi Chege is an Advocate of the High Court of Kenya and Associate at Maina & Onsare Partners Advocates LLP, where she has practiced since May 2022. She holds an LLB (First Class Honours) from Riara University and completed her Advocates Training Programme at the Kenya School of Law. As a certified mediator with the Dialogue & Dispute Resolution Institute, Karimi brings both litigation expertise and a resolution-first approach to workplace disputes.
              </p>
              
              <p className="text-lg text-foreground leading-relaxed">
                Through <em>Let's Talk Legal</em>, Karimi translates complex employment law into clear, actionable guidance for three audiences: employees seeking to understand their rights, employers building fair workplace cultures, and law learners navigating their early careers. From contract clauses and probation periods to maternity rights and unfair termination, she makes Kenyan employment law accessible through short episodes, written guides, and community-driven legal clinics.
              </p>

              {/* Pull Quote */}
              <div className="bg-secondary border-l-4 border-accent p-8 rounded-lg my-8 shadow-sm">
                <p className="text-xl italic text-primary font-serif leading-relaxed">
                  "At Let's Talk Legal, we make employment law practical and personal—because knowledge is both power and protection, and you deserve to know."
                </p>
                <p className="text-sm text-muted-foreground mt-4">
                  — Proverbs 18:15: "The heart of the discerning acquires knowledge, and the ear of the wise seeks it out."
                </p>
              </div>

              <div className="bg-accent/10 border border-accent/30 p-6 rounded-xl">
                <p className="text-sm text-foreground font-medium">
                  <strong>Educational Disclaimer:</strong> Content on this site is for educational purposes only and does not constitute legal advice. For case-specific guidance or representation, please book a consultation.
                </p>
              </div>
            </div>

            {/* Author Sidebar - Quick Facts */}
            <aside className="lg:sticky lg:top-24 space-y-6" aria-label="Quick facts about Karimi Chege">
              <Card className="border-2 border-accent/20 shadow-lg">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-serif font-bold text-primary border-b border-border pb-2">
                    Quick Facts
                  </h3>
                  
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold text-foreground">Education</p>
                      <p className="text-muted-foreground">LLB (First Class Honours)</p>
                      <p className="text-muted-foreground text-xs">Riara University</p>
                    </div>
                    
                    <div className="border-t border-border pt-3">
                      <p className="font-semibold text-foreground">Professional Training</p>
                      <p className="text-muted-foreground">Advocates Training Programme</p>
                      <p className="text-muted-foreground text-xs">Kenya School of Law</p>
                    </div>
                    
                    <div className="border-t border-border pt-3">
                      <p className="font-semibold text-foreground">Current Role</p>
                      <p className="text-muted-foreground">Associate (since 19 May 2022)</p>
                      <p className="text-muted-foreground text-xs">Maina & Onsare Partners Advocates LLP</p>
                    </div>
                    
                    <div className="border-t border-border pt-3">
                      <p className="font-semibold text-foreground">Certifications</p>
                      <p className="text-muted-foreground">Certified Mediator</p>
                      <p className="text-muted-foreground text-xs">Dialogue & Dispute Resolution Institute</p>
                    </div>
                    
                    <div className="border-t border-border pt-3">
                      <p className="font-semibold text-foreground">Specialization</p>
                      <p className="text-muted-foreground">Employment & Labour Law</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-br from-accent/20 to-primary/10 rounded-2xl blur-lg" />
                <img
                  src={karimiAbout}
                  alt="Professional portrait of Karimi Chege, Advocate of the High Court"
                  className="relative rounded-xl shadow-xl w-full"
                  loading="lazy"
                />
              </div>
            </aside>
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
