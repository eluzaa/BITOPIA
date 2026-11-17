
import { Code, Briefcase, Brain, Rocket, Users, FileText, Github, Linkedin, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ValueProposition = () => {
  const visionPoints = [
    {
      icon: Code,
      title: "Beyond Basic Coding",
      description: "We emphasize practical skills through hands-on projects, ensuring students build a strong foundation while working on real-world applications."
    },
    {
      icon: Briefcase,
      title: "Professional Development",
      description: "Students create their digital footprint early, building professional portfolios, GitHub repositories, and understanding the fundamentals of freelancing."
    },
    {
      icon: Brain,
      title: "Creative Problem Solving",
      description: "Our curriculum nurtures critical thinking and innovation, encouraging students to approach challenges with creativity and analytical mindset."
    }
  ];

  const professionalGrowth = [
    {
      icon: Github,
      title: "GitHub Excellence",
      description: "Learn to build a professional GitHub profile, contribute to open source, and showcase your coding journey."
    },
    {
      icon: Linkedin,
      title: "LinkedIn Presence",
      description: "Develop a strong professional network early by creating and maintaining an impactful LinkedIn profile."
    },
    {
      icon: FileText,
      title: "Resume Building",
      description: "Start building your professional resume from day one, highlighting projects and achievements."
    },
    {
      icon: Award,
      title: "Startup Mindset",
      description: "Join our community of young innovators and learn how to transform ideas into viable startup projects."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 animate-fade-in">
            Transforming Young Minds into Tech Innovators
          </h2>
          <p className="text-lg text-gray-600 mb-8 animate-fade-in [animation-delay:200ms]">
            At Bitopia, we don't just teach coding — we nurture future tech leaders. Through personalized guidance and hands-on experience, we prepare students for a tech-driven future while building their professional presence from day one.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {visionPoints.map((point, index) => (
            <Card 
              key={index}
              className="relative overflow-hidden hover:shadow-lg transition-all duration-500 animate-scale-in group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-6">
                <point.icon className="w-12 h-12 text-purple-600 mb-4 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="text-xl font-semibold mb-3">{point.title}</h3>
                <p className="text-gray-600">{point.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto mb-16 animate-fade-in [animation-delay:600ms]">
          <h3 className="text-2xl font-semibold mb-6 text-center">Building Tomorrow's Tech Leaders</h3>
          <p className="text-gray-600 mb-8 text-center">
            Our comprehensive approach goes beyond coding. We create a supportive community where students can explore their startup ideas, build their professional presence, and develop essential skills for the tech industry.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {professionalGrowth.map((item, index) => (
              <div key={index} className="flex items-start gap-4 group animate-fade-in" style={{ animationDelay: `${(index + 4) * 200}ms` }}>
                <div className="rounded-lg bg-purple-50 p-3 group-hover:bg-purple-100 transition-colors">
                  <item.icon className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-purple-50 rounded-2xl p-8 max-w-4xl mx-auto animate-fade-in [animation-delay:1200ms]">
          <div className="flex items-start gap-4 mb-6">
            <Users className="w-8 h-8 text-purple-600 shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-semibold mb-3">Join Our Community of Innovators</h3>
              <p className="text-gray-600">
                At Bitopia, we've built more than just a coding school - we're a community of young innovators, creators, and future tech leaders. Our students collaborate on projects, share ideas, and support each other's growth while building their professional network from an early age.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
