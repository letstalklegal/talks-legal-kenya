import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    anonymous: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "", anonymous: false });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-serif font-bold">
              Let's Start the <span className="text-accent">Conversation</span>
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed opacity-90">
              Knowledge Awaits — Let's Unlock It Together
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="border-2 border-accent/20">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                  <MessageSquare className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-3xl font-serif font-bold text-primary">
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-sans font-semibold text-primary">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="border-2 border-accent/20 focus:border-accent"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-sans font-semibold text-primary">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="border-2 border-accent/20 focus:border-accent"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-sans font-semibold text-primary">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us what's on your mind..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="border-2 border-accent/20 focus:border-accent resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-primary hover:bg-accent hover:text-primary transition-colors"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Story Submission & Info */}
            <div className="space-y-8">
              <Card className="border-2 border-accent/20">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                    <Mail className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-3xl font-serif font-bold text-primary">
                    Submit Your Story
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Have a workplace experience to share? Your story could help others navigate similar situations.
                  </p>
                  
                  <div className="bg-secondary p-6 rounded-lg border-l-4 border-accent">
                    <p className="text-sm font-sans font-semibold text-primary mb-2">
                      Anonymous Submissions Welcome
                    </p>
                    <p className="text-sm text-muted-foreground">
                      We protect your identity. Your story matters more than your name.
                    </p>
                  </div>

                  <Button 
                    size="lg" 
                    variant="outline"
                    className="w-full border-2 border-accent text-accent hover:bg-accent hover:text-primary"
                  >
                    Submit Story Anonymously
                  </Button>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card className="border-2 border-accent/20 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
                <CardContent className="p-8 space-y-6">
                  <h3 className="text-2xl font-serif font-bold">Get In Touch</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm opacity-80 mb-1">Email</p>
                      <a 
                        href="mailto:info@letstalklegal.co.ke" 
                        className="text-accent hover:underline font-sans font-semibold"
                      >
                        info@letstalklegal.co.ke
                      </a>
                    </div>

                    <div>
                      <p className="text-sm opacity-80 mb-2">Follow Us</p>
                      <div className="flex flex-wrap gap-3">
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="bg-transparent border-primary-foreground/20 hover:bg-accent hover:text-primary hover:border-accent"
                        >
                          YouTube
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="bg-transparent border-primary-foreground/20 hover:bg-accent hover:text-primary hover:border-accent"
                        >
                          Instagram
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="bg-transparent border-primary-foreground/20 hover:bg-accent hover:text-primary hover:border-accent"
                        >
                          LinkedIn
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="bg-transparent border-primary-foreground/20 hover:bg-accent hover:text-primary hover:border-accent"
                        >
                          TikTok
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter */}
              <Card className="border-2 border-accent/20">
                <CardContent className="p-8 space-y-4">
                  <h3 className="text-2xl font-serif font-bold text-primary">Newsletter</h3>
                  <p className="text-muted-foreground">
                    Subscribe for Wednesday Wisdom and weekly legal insights
                  </p>
                  <div className="flex gap-2">
                    <Input
                      type="email"
                      placeholder="Your email"
                      className="border-2 border-accent/20 focus:border-accent"
                    />
                    <Button className="bg-primary hover:bg-accent hover:text-primary">
                      Subscribe
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
