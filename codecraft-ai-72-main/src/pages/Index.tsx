import HeroSection from "@/components/HeroSection";
import CodeGenerator from "@/components/CodeGenerator";
import FeatureSection from "@/components/FeatureSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <CodeGenerator />
      <FeatureSection />
    </div>
  );
};

export default Index;
