import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Code2, 
  Database, 
  Shield, 
  Zap, 
  Globe, 
  Palette,
  Smartphone,
  Cloud,
  GitBranch
} from "lucide-react";

const FeatureSection = () => {
  const features = [
    {
      icon: Code2,
      title: "Frontend Generation",
      description: "React, Vue, Angular components with responsive design and modern UI patterns.",
      gradient: "from-purple-400 to-purple-600"
    },
    {
      icon: Database,
      title: "Backend APIs",
      description: "Node.js, Python, or Go backends with RESTful APIs and GraphQL support.",
      gradient: "from-purple-300 to-purple-500"
    },
    {
      icon: Shield,
      title: "Authentication",
      description: "JWT, OAuth, and role-based access control systems built-in.",
      gradient: "from-purple-300 to-purple-500"
    },
    {
      icon: Globe,
      title: "Database Schemas",
      description: "PostgreSQL, MongoDB, or MySQL schemas with optimized relationships.",
      gradient: "from-purple-200 to-purple-400"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, accessible interfaces with dark/light themes and animations.",
      gradient: "from-purple-400 to-purple-500"
    },
    {
      icon: Smartphone,
      title: "Mobile Ready",
      description: "Responsive designs that work perfectly on all devices and screen sizes.",
      gradient: "from-purple-300 to-purple-600"
    },
    {
      icon: Cloud,
      title: "Deploy Ready",
      description: "Vercel, Netlify, AWS deployment configs included out of the box.",
      gradient: "from-purple-400 to-purple-500"
    },
    {
      icon: GitBranch,
      title: "Version Control",
      description: "Git-friendly structure with proper .gitignore and branch strategies.",
      gradient: "from-purple-300 to-purple-600"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimized code with lazy loading, caching, and best practices.",
      gradient: "from-purple-400 to-purple-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-lavender-400 to-lavender-600 bg-clip-text text-transparent">
            Everything You Need
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From simple landing pages to complex enterprise applications, 
            our AI generates production-ready code that follows industry best practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:transform hover:-translate-y-2"
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg font-semibold">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/20 rounded-full text-primary-glow">
            <Zap className="w-5 h-5" />
            <span className="font-medium">Ready to build your next project?</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;