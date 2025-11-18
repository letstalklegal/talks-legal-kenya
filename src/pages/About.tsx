import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Users, GraduationCap, Youtube, Linkedin, Instagram, Facebook, Scale, Heart, BookOpen } from "lucide-react";
import about1 from "@/assets/about1.jpg";
import about2 from "@/assets/about2.jpg";
import about3 from "@/assets/about3.jpg";
import about4 from "@/assets/about4.jpg";
import about5 from "@/assets/about5.jpg";
import podcastStudio from "@/assets/podcast-studio.jpg";

// Slideshow hook for managing carousel state with random intervals
const useHeadshotSlideshow = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Generate a random interval between 4000-6000ms
    const getRandomInterval = () => {
      return Math.floor(Math.random() * (4000 - 3000 + 1)) + 3000;
    };

    // Set up the timeout with random duration
    const scheduleNextSlide = () => {
      const interval = getRandomInterval();
      const id = setTimeout(() => {
        setActiveIndex((i) => (i + 1) % 5);
        // Schedule the next slide after this one changes
        scheduleNextSlide();
      }, interval);

      return id;
    };

    const timeoutId = scheduleNextSlide();

    return () => clearTimeout(timeoutId);
  }, []);

  return activeIndex;
};

const About = () => {
  const activeIndex = useHeadshotSlideshow();
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
            {/* Single-line professional titles - responsive, no-wrap, ellipsis fallback */}
            <div className="w-full">
              <span
                className="block mx-auto max-w-full text-center truncate
                           text-[clamp(1rem,2.5vw,1.25rem)] md:text-[clamp(1.05rem,1.8vw,1.5rem)]
                           font-medium tracking-tight leading-tight opacity-90 px-4"
                aria-label="Professional titles"
                title="Advocate of the High Court | Employment Law Specialist | Legal Educator"
              >
                Advocate of the High Court | Employment Law Specialist | Legal Educator
              </span>
            </div>
            <p className="text-lg md:text-xl leading-relaxed opacity-90 max-w-3xl mx-auto italic">
              "I translate workplace law into clear steps so people and organisations can solve problems before they become disputes."
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Professional Profile Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* About Karimi - Mission Content */}
          <div className="max-w-4xl mx-auto mb-20 space-y-6 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">
              About Karimi
            </h2>
            <div className="h-1 w-24 bg-accent rounded-full" />
            
            {/* Mission Paragraph - 140-180 words */}
            <p className="text-lg text-foreground leading-relaxed">
              Ashley Karimi Chege is a practising Advocate of the High Court of Kenya with expertise in employment law and workplace dispute resolution. She holds an LLB (First Class Honours) from Riara University and completed her Advocates Training Programme at the Kenya School of Law. As a Certified Mediator with the Dialogue & Dispute Resolution Institute and a Commissioner for Oaths, Karimi brings comprehensive legal expertise to both courtroom practice and alternative dispute resolution.
            </p>
            
            <p className="text-lg text-foreground leading-relaxed">
              As a Commissioner for Oaths—a role typically held by practising advocates appointed to administer oaths, take affidavits, and verify statutory declarations for legal proceedings—Karimi supports clients in authenticating documents essential for court matters and formal legal processes within Kenya. This complements her primary work in employment law, where she helps individuals and organisations understand and navigate workplace rights, policies, and disputes.
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
        </div>
      </section>

      {/* Professional Profile Section - Two Column Layout */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Credentials & Information */}
            <div className="space-y-8" aria-label="Professional credentials">
              <div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
                  Professional Profile
                </h2>
                <div className="h-1 w-24 bg-accent rounded-full" />
              </div>

              {/* Credential Cards with Icons */}
              <div className="space-y-6">
                {/* Education */}
                <div className="border-l-4 border-accent pl-6 py-2">
                  <div className="flex items-start gap-3 mb-1">
                    <GraduationCap className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <h3 className="font-serif font-bold text-primary text-lg">Education</h3>
                      <p className="text-foreground font-semibold">LLB (First Class Honours)</p>
                      <p className="text-muted-foreground text-sm">Riara University School of Law</p>
                    </div>
                  </div>
                </div>

                {/* Professional Training */}
                <div className="border-l-4 border-accent pl-6 py-2">
                  <div className="flex items-start gap-3 mb-1">
                    <Briefcase className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <h3 className="font-serif font-bold text-primary text-lg">Professional Training</h3>
                      <p className="text-foreground font-semibold">Advocates Training Programme</p>
                      <p className="text-muted-foreground text-sm">Kenya School of Law</p>
                    </div>
                  </div>
                </div>

                {/* Current Role */}
                <div className="border-l-4 border-accent pl-6 py-2">
                  <div className="flex items-start gap-3 mb-1">
                    <Users className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <h3 className="font-serif font-bold text-primary text-lg">Professional Practice</h3>
                      <p className="text-foreground font-semibold">Practising Advocate of the High Court</p>
                      <p className="text-muted-foreground text-sm">Employment Law Specialist & Mediator</p>
                    </div>
                  </div>
                </div>

                {/* Certification */}
                <div className="border-l-4 border-accent pl-6 py-2">
                  <div className="flex items-start gap-3 mb-1">
                    <Scale className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <h3 className="font-serif font-bold text-primary text-lg">Certifications</h3>
                      <p className="text-foreground font-semibold">Certified Mediator</p>
                      <p className="text-muted-foreground text-sm">Dialogue & Dispute Resolution Institute</p>
                    </div>
                  </div>
                </div>

                {/* Commissioner for Oaths */}
                <div className="border-l-4 border-accent pl-6 py-2">
                  <div className="flex items-start gap-3 mb-1">
                    <Briefcase className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <h3 className="font-serif font-bold text-primary text-lg">Additional Role</h3>
                      <p className="text-foreground font-semibold">Commissioner for Oaths</p>
                      <p className="text-muted-foreground text-sm">Authentication & statutory document verification</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Professional Headshot Slideshow */}
            <div className="relative flex justify-center">
              <div className="absolute -inset-4 bg-gradient-to-br from-accent/30 to-primary/20 rounded-3xl blur-2xl opacity-40" />
              <div className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                {[about1, about2, about3, about4, about5].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Karimi headshot ${i + 1}`}
                    loading="lazy"
                    className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ease-in-out ${
                      i === activeIndex ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
                <div className="absolute bottom-4 right-4 z-10 bg-accent/90 text-primary rounded-xl p-3 shadow-lg font-serif text-center">
                  <p className="text-base font-bold">Advocate of the High Court</p>
                  <p className="text-sm text-primary/90">Employment Law Specialist</p>
                </div>
              </div>
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
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Employees Card */}
            <Card className="border-2 border-accent/20 hover:border-accent transition-all hover:shadow-xl">
              <CardContent className="p-8 space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full">
                  <Briefcase className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-primary">Employees</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Understand your rights on wages, contracts, and benefits</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Navigate workplace policies and disciplinary actions confidently</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Resolve disputes and navigate terminations effectively</span>
                  </li>
                </ul>
                <Button className="mt-6 w-full">Read Employee Guides</Button>
              </CardContent>
            </Card>

            {/* Employers Card */}
            <Card className="border-2 border-accent/20 hover:border-accent transition-all hover:shadow-xl">
              <CardContent className="p-8 space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full">
                  <Scale className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-primary">Employers</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Ensure compliance with Kenyan labour laws and regulations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Develop and implement fair, effective workplace policies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Foster a positive, productive, and legally compliant work environment</span>
                  </li>
                </ul>
                <Button className="mt-6 w-full">Request a Policy Review</Button>
              </CardContent>
            </Card>

            {/* Law Learners Card */}
            <Card className="border-2 border-accent/20 hover:border-accent transition-all hover:shadow-xl">
              <CardContent className="p-8 space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full">
                  <BookOpen className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-primary">Law Learners</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Gain practical insights for pupillage applications and mentorship</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Access resources for courtroom readiness and career development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Learn from behind-the-scenes perspectives on legal practice</span>
                  </li>
                </ul>
                <Button className="mt-6 w-full">Explore Resources</Button>
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
