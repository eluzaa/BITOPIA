
import { Brain, GraduationCap, Users, Calendar, Clock, BookOpen, Award, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Pushing Cognitive Boundaries",
      description: "Instilling skills like Computational Thinking and enhancing Left and Right Brain Development.",
      icon: Brain
    },
    {
      title: "Pre Class Assessment",
      description: "Students undergo a fitment assessment that includes logical thinking, by course faculty based on years of teaching.",
      icon: GraduationCap
    },
    {
      title: "Inculcating Entrepreneurial Skills",
      description: "More than just coding, we guide to inculcate problem-solving approaches with keen focus on entrepreneurial skills.",
      icon: Users
    }
  ];

  const features = [
    { text: "Experience exclusive 1:1 online private tutoring", icon: Users },
    { text: "Handpicked top coding instructor as per your choice", icon: CheckCircle },
    { text: "Flexible number of weekly classes for your child", icon: Calendar },
    { text: "Unlimited doubt sessions, available 24x7", icon: Clock },
    { text: "Lifetime access to all class recordings", icon: BookOpen },
    { text: "STEM.org accredited certificate for the course", icon: Award }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          How Do We Benefit Our Students?
        </h2>

        {/* Core Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit) => (
            <Card key={benefit.title} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <benefit.icon className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div key={feature.text} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
              <feature.icon className="w-6 h-6 text-purple-600 shrink-0 mt-1" />
              <span className="text-gray-700">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
