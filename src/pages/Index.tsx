
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Code, Star, BookOpen, GraduationCap, Calendar, Sparkles } from "lucide-react";
import CompanyLogos from "@/components/home/CompanyLogos";
import BenefitsSection from "@/components/home/BenefitsSection";
import ValueProposition from "@/components/home/ValueProposition";
import ParticleBackground from "@/components/ParticleBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="pt-20 hero-gradient relative overflow-hidden">
        <ParticleBackground variant="purple" />
        <div className="container mx-auto px-6 py-20">
          <div className="flex flex-col items-center text-center relative z-10">
            <div className="relative">
              <Sparkles className="absolute -top-4 -left-4 w-8 h-8 text-yellow-400 animate-pulse" />
              <GraduationCap className="w-16 h-16 text-indigo-600 mb-6 animate-bounce" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
              Your Personalized Path to
              <span className="gradient-text"> Coding Excellence</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl animate-slide-in [animation-delay:200ms]">
              At Bitopia, we transform your coding journey through personalized 1:1 mentorship,
              tailored for learners across the galaxy.
            </p>
            <div className="flex gap-4 animate-scale-in [animation-delay:400ms]">
              <Button asChild className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                <Link to="/courses">Explore Courses</Link>
              </Button>
              <Button asChild variant="outline" className="border-indigo-300 hover:border-indigo-500 transition-all duration-300 transform hover:scale-105">
                <Link to="/schedule">Schedule Free Call</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Company Logos Section */}
      <CompanyLogos />

      {/* Value Proposition Section */}
      <ValueProposition />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <ParticleBackground variant="blue" />
        </div>
        <div className="container mx-auto px-6 text-center animate-fade-in relative z-10">
          <Calendar className="w-12 h-12 mx-auto mb-6 animate-bounce" />
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8">Schedule a free consultation call and let's discuss your goals</p>
          <Button asChild className="glass-dark text-white hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
            <Link to="/schedule" className="inline-flex items-center">
              Schedule Now <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
