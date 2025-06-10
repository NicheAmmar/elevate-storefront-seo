
import { Search, TrendingUp, Users, BarChart3, Globe, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const WhatWeOffer = () => {
  const services = [
    {
      icon: Search,
      title: "Keyword Research & Analysis",
      description: "Discover high-impact keywords that drive qualified traffic and conversions to your website.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: TrendingUp,
      title: "On-Page SEO Optimization",
      description: "Optimize your website's content, structure, and technical elements for maximum search visibility.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Globe,
      title: "Technical SEO Audits",
      description: "Comprehensive technical analysis to identify and fix issues affecting your search performance.",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Users,
      title: "Link Building & Outreach",
      description: "Build high-quality backlinks through strategic outreach and relationship building campaigns.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: BarChart3,
      title: "SEO Analytics & Reporting",
      description: "Track your progress with detailed analytics and comprehensive monthly performance reports.",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Zap,
      title: "Local SEO Services",
      description: "Dominate local search results and drive foot traffic to your brick-and-mortar business.",
      color: "from-yellow-500 to-amber-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-gray-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            What We <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Offer</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive SEO solutions designed to boost your online visibility, drive organic traffic, 
            and accelerate your business growth in the digital landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
              >
                <CardContent className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
