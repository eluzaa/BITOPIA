
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, PhoneCall, Calendar, Sparkles } from "lucide-react";
import { useEffect } from "react";
import { toast } from "@/hooks/use-toast";
import ParticleBackground from "@/components/ParticleBackground";

const Schedule = () => {
  // Load the Calendly script when component mounts
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden star-field pt-20 animate-fade-in">
      <ParticleBackground variant="blue" />
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-16 animate-scale-in">
          <div className="relative inline-block">
            <Sparkles className="absolute -top-4 -left-4 w-8 h-8 text-blue-400 animate-pulse" />
            <Calendar className="w-16 h-16 text-blue-600 mx-auto mb-6" />
          </div>
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-500 to-sky-600 bg-clip-text text-transparent">Schedule a Free Consultation</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Take the first step towards your cosmic coding journey. Let's discuss your goals and chart your path to success.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="animate-slide-in [animation-delay:200ms] bg-gradient-to-br from-white/80 to-sky-100/40 backdrop-blur border border-white/40 shadow-lg">
            <CardHeader>
              <CardTitle className="bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent">Pick a Date & Time</CardTitle>
              <CardDescription>Choose your preferred consultation slot</CardDescription>
            </CardHeader>
            <CardContent>
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/adityavikramsinghavs5/30min" 
                style={{ minWidth: "320px", height: "700px" }}
              ></div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in [animation-delay:600ms]">
          {[
            {
              icon: Clock,
              text: "30-Minute Session"
            },
            {
              icon: PhoneCall,
              text: "Virtual Meeting"
            }
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-center p-4 bg-gradient-to-br from-white/80 to-sky-100/40 backdrop-blur border border-white/40 shadow-lg rounded-lg hover:shadow-md transition-all">
              <item.icon className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-sm text-gray-700">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
