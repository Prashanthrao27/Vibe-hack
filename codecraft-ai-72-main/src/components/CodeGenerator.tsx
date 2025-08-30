import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Code2, Copy, Maximize2, Minimize2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CodeGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const apiKey = "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";

  const toggleFullscreen = () => {
    if (!previewRef.current) return;
    
    if (!document.fullscreenElement) {
      previewRef.current.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      toast({
        title: "Please enter a description",
        description: "Describe the website you want to create.",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    
    try {
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: "llama3-70b-8192",
          messages: [
            {
              role: 'system',
              content: `You are an expert web designer and developer. Create a stunning, modern, and responsive website with beautiful colors and animations using Tailwind CSS.

              VISUAL STYLE:
              - Use vibrant, harmonious color schemes with gradients and subtle animations
              - Implement glassmorphism and neumorphism effects for depth
              - Add smooth hover and focus states for interactive elements
              - Use modern CSS features like backdrop-filter and transform
              - Include subtle animations for loading and transitions
              - Ensure excellent contrast and readability

              LAYOUT:
              - Single-page application with smooth scrolling between sections
              - Responsive design that works on all screen sizes
              - Modern card-based layout with proper spacing
              - Sticky navigation that highlights current section
              - Hero section with call-to-action

              COMPONENTS TO INCLUDE:
              1. Navigation bar with logo and menu
              2. Hero section with headline and CTA
              3. Features/Services section with icons
              4. About/Team section with hover effects
              5. Portfolio/Work samples in a grid
              6. Testimonials with profile images
              7. Contact form with validation
              8. Footer with social links

              TAILWIND CSS:
              - Use Tailwind's utility classes for styling
              - Implement custom animations with @keyframes
              - Use CSS variables for theming
              - Add responsive design with Tailwind's breakpoints
              - Include hover and focus states for interactivity

              ANIMATIONS:
              - Fade-in effects for page load
              - Smooth scrolling between sections
              - Hover animations for cards and buttons
              - Loading animations for content
              - Micro-interactions for user feedback

              IMPORTANT: 
              - Make sure to include all necessary Tailwind CSS classes
              - Use modern CSS features that work in all major browsers
              - Ensure the design is accessible and keyboard-navigable
              - Optimize for performance and fast loading`
            },
            {
              role: 'user',
              content: `Create a stunning, colorful, and interactive single-page website with this description: ${prompt}.
              
              DESIGN INSTRUCTIONS:
              - Use a vibrant, eye-catching color scheme with gradients
              - Implement glassmorphism and neumorphism effects
              - Add smooth animations and transitions
              - Use modern CSS features like backdrop-filter and clip-path
              - Ensure excellent contrast and readability
              
              REQUIRED SECTIONS:
              1. Hero Section: Full-viewport height with animated background
              2. Features/Services: Cards with hover effects and icons
              3. Portfolio/Work: Grid layout with image hover effects
              4. Testimonials: Carousel or grid with profile images
              5. Contact Form: With validation and success message
              
              INTERACTIVE ELEMENTS:
              - Smooth scroll navigation
              - Animated buttons with hover effects
              - Interactive cards with 3D transforms
              - Loading animations for images
              - Form validation with visual feedback
              
              TECHNICAL IMPLEMENTATION:
              - Use Tailwind CSS for styling (already included)
              - Add custom animations with @keyframes
              - Make it fully responsive
              - Optimize for performance
              - Ensure accessibility
              
              IMPORTANT:
              - Include all CSS in <style> tags
              - Use semantic HTML5 elements
              - Add proper ARIA labels
              - Make it keyboard navigable
              - Ensure fast loading times
              
              Make the design modern, colorful, and engaging while maintaining good performance and accessibility.`
            }
          ],
          temperature: 0.3,
          max_tokens: 4000,
        }),
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      const data = await response.json();
      const generatedCode = data.choices[0]?.message?.content || "No code generated";
      
      setGeneratedCode(generatedCode);
      toast({
        title: "Website generated!",
        description: "Your website has been successfully generated.",
      });
    } catch (error) {
      console.error('Generation error:', error);
      toast({
        title: "Generation failed",
        description: "Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedCode);
      toast({
        title: "Copied to clipboard!",
        description: "The website code has been copied to your clipboard.",
      });
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            AI Website Generator
          </h1>
          <p className="text-xl text-muted-foreground">
            Describe your website and get a complete, responsive website in seconds
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-2">
                <Sparkles className="w-5 h-5" />
                Describe Your Website
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <Textarea
                placeholder="E.g., A modern restaurant website with a menu, gallery, and contact form..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                rows={8}
                className="resize-none"
              />
              
              <Button 
                onClick={handleGenerate}
                disabled={isGenerating}
                className="w-full py-6 text-lg"
                size="lg"
              >
                {isGenerating ? (
                  <>
                    <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5 mr-2" />
                    Generate Website
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          <Card className={`bg-card/50 backdrop-blur-sm border-border/50 h-full flex flex-col ${isFullscreen ? 'fixed inset-0 z-50 m-0 w-screen h-screen' : 'relative'}`} ref={previewRef}>
            <CardHeader className="border-b sticky top-0 bg-card/80 backdrop-blur-sm z-10">
              <div className="flex items-center justify-between">
                <CardTitle>Your Website Preview</CardTitle>
                <div className="flex gap-2">
                  {generatedCode && (
                    <>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={toggleFullscreen}
                        className="gap-1.5"
                      >
                        {isFullscreen ? (
                          <>
                            <Minimize2 className="w-4 h-4" />
                            <span>Exit Fullscreen</span>
                          </>
                        ) : (
                          <>
                            <Maximize2 className="w-4 h-4" />
                            <span>Fullscreen</span>
                          </>
                        )}
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={copyToClipboard}
                        className="gap-1.5"
                      >
                        <Copy className="w-4 h-4" />
                        <span>Copy Code</span>
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-1 overflow-auto p-0">
              {generatedCode ? (
                <div className="h-full">
                  <iframe
                    srcDoc={generatedCode}
                    title="Generated Website Preview"
                    className={`w-full ${isFullscreen ? 'h-[calc(100vh-65px)]' : 'h-[600px]'} border-0`}
                    sandbox="allow-scripts allow-same-origin"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-96 text-center p-6">
                  <div className="p-3 bg-muted/50 rounded-full mb-4">
                    <Code2 className="w-10 h-10 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">Your Website Preview</h3>
                  <p className="text-sm text-muted-foreground max-w-md">
                    Enter a description and click "Generate Website" to see your creation come to life.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CodeGenerator;