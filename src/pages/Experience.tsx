
import { Card, CardContent } from "@/components/ui/card";
import { Star, Sparkles } from "lucide-react";
import { GraduationCap, Laptop, Rocket, Briefcase, BookOpen } from "lucide-react";
import TechLogos from "@/components/experience/TechLogos";
import ParticleBackground from "@/components/ParticleBackground";

const Experience = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Web Developer at 16",
      content: "The personalized mentorship at Bitopia transformed my coding journey. I went from knowing basic HTML to building full-stack applications in months. Their focus on practical projects helped me land my first freelance gig!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "AI Enthusiast, Age 15",
      content: "The AI and ML course was exactly what I needed. I built my own AI-powered app and even presented it at my school's tech fair. The 1:1 mentorship helped me understand complex concepts easily.",
      rating: 4.5
    },
    {
      name: "Emma Williams",
      role: "Junior Game Developer",
      content: "Bitopia's hands-on approach helped me create my first game at 14! The structured learning path and dedicated support made coding fun and engaging.",
      rating: 4
    },
    {
      name: "Raj Patel",
      role: "Tech Entrepreneur, Age 17",
      content: "Thanks to Bitopia's startup mindset program, I launched my first tech project at 17. They didn't just teach me coding – they showed me how to think like an entrepreneur.",
      rating: 5
    }
  ];

  const outcomes = [
    {
      icon: Laptop,
      title: "Professional Portfolio",
      description: "Students build and deploy real projects that showcase their skills"
    },
    {
      icon: Rocket,
      title: "Startup Mindset",
      description: "Learn to transform ideas into viable tech solutions"
    },
    {
      icon: Briefcase,
      title: "Early Career Start",
      description: "Build professional profiles and gain practical experience"
    },
    {
      icon: BookOpen,
      title: "Comprehensive Learning",
      description: "Master both technical skills and professional development"
    }
  ];

  return (
    <div className="min-h-screen star-field pt-20 relative overflow-hidden">
      <ParticleBackground variant="light" />
      <div className="container mx-auto px-6 py-12">
        {/* Header section */}
        <div className="text-center mb-16 relative z-10">
          <div className="relative inline-block">
            <Sparkles className="absolute -top-4 -right-4 w-6 h-6 text-yellow-400" />
            <GraduationCap className="w-16 h-16 text-indigo-600 mx-auto mb-6 animate-bounce" />
          </div>
          <h1 className="text-4xl font-bold mb-4 gradient-text">Student Success Stories</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how our students are transforming their passion for technology into real-world success
          </p>
        </div>

        {/* Tech Stack Section with Logos */}
        <div className="mb-16 relative z-10">
          <h2 className="text-2xl font-bold mb-6 text-center gradient-text">Technologies Our Students Master</h2>
          <TechLogos />
        </div>

        {/* Key Outcomes Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 relative z-10">
          {outcomes.map((outcome, index) => (
            <Card 
              key={index}
              className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cosmic-card"
            >
              <CardContent className="pt-6">
                <outcome.icon className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">{outcome.title}</h3>
                <p className="text-gray-600 text-sm">{outcome.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-shadow group hover:-translate-y-1 duration-300 cosmic-card"
            >
              <CardContent className="pt-6">
                <div className="mb-4">
                  <h3 className="font-semibold text-lg group-hover:text-indigo-600 transition-colors">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
                <div className="flex mb-4">
                  {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  {testimonial.rating % 1 !== 0 && (
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 opacity-50" />
                  )}
                </div>
                <p className="text-gray-600">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
