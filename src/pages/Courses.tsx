
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Code, Video, Terminal, Database, MessageSquare, Gamepad, Award, GraduationCap, BookOpen, Briefcase, FileText, Brain, Laptop, Network, Globe, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ParticleBackground from "@/components/ParticleBackground";

const Courses = () => {
  const courses = [
    {
      title: "Web Development",
      description: "Master modern web technologies including HTML, CSS, JavaScript, React, and more.",
      icon: Code,
      color: "text-blue-500"
    },
    {
      title: "ChatGPT Mastery",
      description: "Learn to leverage ChatGPT for coding, content creation, and automation.",
      icon: MessageSquare,
      color: "text-purple-500"
    },
    {
      title: "Generative AI Development",
      description: "Explore GenAI, LLMs, and build AI-powered applications.",
      icon: Brain,
      color: "text-indigo-500"
    },
    {
      title: "Data Science",
      description: "Learn data analysis, visualization, and machine learning with Python and R.",
      icon: Database,
      color: "text-green-500"
    },
    {
      title: "Interview Ready Pro",
      description: "Master technical interviews with mock sessions and real-world problem solving.",
      icon: Briefcase,
      color: "text-orange-500"
    },
    {
      title: "Data Structures & Algorithms",
      description: "Master DSA concepts with practical implementations and problem-solving techniques.",
      icon: FileText,
      color: "text-red-500"
    },
    {
      title: "Game Development",
      description: "Create engaging games using Unity, Unreal Engine, and other modern platforms.",
      icon: Gamepad,
      color: "text-pink-500"
    },
    {
      title: "Software Development",
      description: "Master software engineering principles, design patterns, and best practices.",
      icon: Laptop,
      color: "text-sky-500"
    },
    {
      title: "Competitive Coding",
      description: "Excel in coding competitions and technical interviews with advanced algorithms.",
      icon: Award,
      color: "text-yellow-500"
    },
    {
      title: "Cloud Computing",
      description: "Learn AWS, Azure, and GCP fundamentals for modern cloud architecture.",
      icon: Globe,
      color: "text-cyan-500"
    },
    {
      title: "Cybersecurity Fundamentals",
      description: "Understand security principles, ethical hacking, and network protection.",
      icon: Shield,
      color: "text-emerald-500"
    },
    {
      title: "DevOps Engineering",
      description: "Master CI/CD, container orchestration, and infrastructure automation.",
      icon: Network,
      color: "text-violet-500"
    },
    {
      title: "Python Programming",
      description: "From basics to advanced Python concepts including data structures and algorithms.",
      icon: Terminal,
      color: "text-teal-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white pt-20 relative">
      <ParticleBackground variant="light" />
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <Sparkles className="absolute -top-4 -right-4 w-6 h-6 text-yellow-400 animate-pulse" />
            <GraduationCap className="w-16 h-16 text-indigo-600 mx-auto mb-6 animate-bounce" />
          </div>
          <h1 className="text-4xl font-bold gradient-text mb-4 animate-fade-in">Our Cosmic Courses</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-slide-in [animation-delay:200ms]">
            Discover our comprehensive range of courses designed to help you master the skills you need
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-500 animate-scale-in hover:-translate-y-2 cosmic-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <course.icon className={`w-12 h-12 ${course.color} mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12`} />
                <CardTitle className="group-hover:text-indigo-600 transition-colors duration-300">{course.title}</CardTitle>
                <CardDescription>{course.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 group-hover:scale-105">
                  <Link to="/schedule">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
