import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, ArrowRight } from "lucide-react";

const Blog = () => {
  const articles = [
    {
      title: "Understanding the Employment Act 2007 in 5 Minutes",
      category: "Legal Insights",
      excerpt: "A quick guide to Kenya's fundamental employment law and what it means for you.",
      readTime: "5 min read",
      date: "January 15, 2025"
    },
    {
      title: "How to Handle Unfair Termination",
      category: "Employee Rights",
      excerpt: "Steps to take when you believe you've been wrongfully dismissed from your job.",
      readTime: "7 min read",
      date: "January 10, 2025"
    },
    {
      title: "What Pupillage Should Really Look Like",
      category: "Legal Career",
      excerpt: "Insights into the pupillage experience and what to expect during your training.",
      readTime: "6 min read",
      date: "January 5, 2025"
    },
    {
      title: "Your Rights During Maternity and Paternity Leave",
      category: "Employee Rights",
      excerpt: "Understanding your entitlements and protections during parental leave in Kenya.",
      readTime: "8 min read",
      date: "December 28, 2024"
    },
    {
      title: "Contract Clauses You Should Never Ignore",
      category: "Legal Insights",
      excerpt: "Key contract terms that could significantly impact your employment relationship.",
      readTime: "6 min read",
      date: "December 20, 2024"
    },
    {
      title: "Building Fair Workplace Policies for Employers",
      category: "Employer Guidance",
      excerpt: "Best practices for creating compliant and equitable workplace policies.",
      readTime: "9 min read",
      date: "December 15, 2024"
    }
  ];

  const categories = [
    "All Articles",
    "Employee Rights",
    "Employer Guidance",
    "Legal Insights",
    "Legal Career"
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/20 rounded-full mb-4">
              <BookOpen className="h-10 w-10 text-accent" />
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold">
              Legal <span className="text-accent">Literacy</span>
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed opacity-90">
              Simplifying Kenyan employment law—from wages and contracts to rights and responsibilities
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-background border-b border-border sticky top-20 z-40 backdrop-blur-sm bg-background/95">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={index === 0 
                  ? "bg-primary hover:bg-accent hover:text-primary" 
                  : "border-2 border-accent/20 hover:border-accent hover:bg-accent/10"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Card 
                key={index} 
                className="border-2 border-accent/20 hover:border-accent transition-all hover:shadow-xl group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-sans font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-serif font-bold text-primary group-hover:text-accent transition-colors">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-sm text-muted-foreground">{article.date}</span>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-accent hover:text-accent hover:bg-accent/10 group-hover:translate-x-1 transition-transform"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button size="lg" className="bg-primary hover:bg-accent hover:text-primary transition-colors">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto border-2 border-accent/20 bg-gradient-to-br from-secondary to-background">
            <CardContent className="p-12 text-center space-y-6">
              <h2 className="text-4xl font-serif font-bold text-primary">
                Subscribe for <span className="text-accent">Wednesday Wisdom</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Get weekly employment law insights delivered to your inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border-2 border-accent/20 focus:border-accent outline-none bg-background"
                />
                <Button size="lg" className="bg-primary hover:bg-accent hover:text-primary transition-colors">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Blog;
