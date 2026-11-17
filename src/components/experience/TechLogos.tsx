
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Terminal, Brain, Server, FileJson } from "lucide-react";

interface TechLogoProps {
  name: string;
  Icon?: React.ElementType;
  color: string;
  gradient: string;
  description: string;
}

const TechLogo: React.FC<TechLogoProps> = ({ name, Icon, color, gradient, description }) => {
  return (
    <Card className={`relative overflow-hidden group ${gradient} hover:shadow-lg transition-all duration-300`}>
      <CardContent className="p-6 text-white">
        <div className="flex flex-col items-center justify-center gap-4 animate-slide-in">
          {Icon && <Icon className={`w-16 h-16 ${color} group-hover:scale-110 transition-transform`} />}
          <h3 className="text-center mt-2 font-semibold text-xl">{name}</h3>
          <p className="text-center text-white/90 mt-2">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const TechLogos = () => {
  // Use direct imports instead of require
  const techIcons = [
    {
      Icon: Code,
      name: "React",
      color: "text-blue-300",
      gradient: "gradient-bg-blue",
      description: "Modern UI Development"
    },
    {
      Icon: Database,
      name: "MongoDB",
      color: "text-green-300",
      gradient: "gradient-bg-green",
      description: "NoSQL Database"
    },
    {
      Icon: Terminal,
      name: "Python",
      color: "text-yellow-300",
      gradient: "bg-gradient-to-r from-blue-600 to-yellow-500",
      description: "Data Science & ML"
    },
    {
      Icon: Brain,
      name: "AI & GenAI",
      color: "text-purple-300",
      gradient: "bg-gradient-to-r from-purple-600 to-pink-500",
      description: "Machine Learning & LLMs"
    },
    {
      Icon: Server,
      name: "Node.js",
      color: "text-green-300",
      gradient: "bg-gradient-to-r from-green-600 to-green-400",
      description: "Backend Development"
    },
    {
      Icon: FileJson,
      name: "Express",
      color: "text-gray-300",
      gradient: "bg-gradient-to-r from-gray-700 to-gray-500",
      description: "Web Framework"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      {techIcons.map((tech, index) => (
        <TechLogo
          key={index}
          name={tech.name}
          Icon={tech.Icon}
          color={tech.color}
          gradient={tech.gradient}
          description={tech.description}
        />
      ))}
    </div>
  );
};

export default TechLogos;
