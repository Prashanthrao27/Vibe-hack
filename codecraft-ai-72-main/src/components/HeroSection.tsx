import { Button } from "@/components/ui/button";
import { Code2, Sparkles, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-background overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-electric/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 text-center z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo/Icon */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center animate-glow-pulse">
                <Code2 className="w-10 h-10 text-primary-foreground" />
              </div>
              <div className="absolute -top-2 -right-2">
                <Sparkles className="w-6 h-6 text-electric animate-pulse" />
              </div>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-purple-400 to-purple-600 bg-clip-text text-transparent leading-tight">
            AI Full-Stack
            <br />
            Code Generator
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your ideas into production-ready applications. 
            Generate frontend, backend, and database code with AI-powered precision.
          </p>

          {/* Feature highlights */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 text-purple-400">
              <Zap className="w-5 h-5" />
              <span className="text-sm font-medium">Instant Code Generation</span>
            </div>
            <div className="flex items-center gap-2 text-electric-glow">
              <Code2 className="w-5 h-5" />
              <span className="text-sm font-medium">Full-Stack Ready</span>
            </div>
            <div className="flex items-center gap-2 text-purple-400">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-medium">AI-Powered</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Start Building Now
              <Zap className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-primary/30 hover:border-primary hover:bg-primary/5">
              View Examples
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-purple-400">10k+</div>
              <div className="text-sm text-muted-foreground">Apps Generated</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-electric-glow">50+</div>
              <div className="text-sm text-muted-foreground">Tech Stacks</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400">99%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;