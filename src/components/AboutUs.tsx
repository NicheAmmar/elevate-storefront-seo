
import { Award, Users, Target, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutUs = () => {
  const stats = [
    { icon: Users, number: "500+", label: "Happy Clients" },
    { icon: Award, number: "5+", label: "Years Experience" },
    { icon: Target, number: "98%", label: "Success Rate" },
    { icon: TrendingUp, number: "250%", label: "Avg Traffic Increase" }
  ];

  const team = [
    {
      name: "Ahmed Khan",
      role: "SEO Director",
      experience: "8+ years in technical SEO and strategy"
    },
    {
      name: "Sara Ali",
      role: "Content Strategist", 
      experience: "6+ years in content marketing and optimization"
    },
    {
      name: "Hassan Sheikh",
      role: "Link Building Expert",
      experience: "5+ years in digital outreach and link acquisition"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50/50 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">ElevateSEO</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're a team of passionate SEO experts dedicated to helping businesses achieve their digital marketing goals 
            through proven strategies and cutting-edge techniques.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold">Our Mission</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At ElevateSEO, we believe every business deserves to be found online. Our mission is to democratize 
              SEO knowledge and provide world-class optimization services that drive real, measurable results 
              for our clients.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded in 2019, we've helped over 500 businesses across Pakistan and internationally to improve 
              their search engine visibility, increase organic traffic, and boost their online revenue.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-foreground">Data-driven SEO strategies</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-foreground">Transparent reporting and communication</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-foreground">Long-term partnership approach</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <h4 className="text-3xl font-bold text-foreground mb-2">{stat.number}</h4>
                      <p className="text-muted-foreground">{stat.label}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-6">Meet Our Expert Team</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our team consists of certified SEO professionals with diverse backgrounds 
            in digital marketing, content strategy, and technical optimization.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-12 w-12 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-2">{member.name}</h4>
                <p className="text-primary font-semibold mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.experience}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
