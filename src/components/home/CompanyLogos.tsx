
import { Award, Building2, Search } from "lucide-react";

const CompanyLogos = () => {
  const companies = [
    {
      name: "Goldman Sachs",
      icon: Building2,
      description: "Investment Banking"
    },
    {
      name: "Atlassian",
      icon: Search,
      description: "Software Development"
    },
    {
      name: "Google",
      icon: Award,
      description: "Technology"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Built by Industry Leaders From
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {companies.map((company) => (
            <div key={company.name} className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <company.icon className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{company.name}</h3>
              <p className="text-gray-600 text-center">{company.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos;
