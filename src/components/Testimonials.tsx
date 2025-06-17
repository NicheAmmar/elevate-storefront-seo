import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Muhammad Asif",
      company: "Tech Solutions Pvt Ltd",
      role: "CEO",
      content: "ElevateSEO transformed our online presence completely. Our organic traffic increased by 300% in just 6 months, and we're now ranking #1 for our main keywords.",
      rating: 5,
      image: "MA"
    },
    {
      name: "Fatima Sheikh",
      company: "Fashion Hub",
      role: "Marketing Director",
      content: "The team's expertise in e-commerce SEO is outstanding. They helped us optimize our product pages and improved our conversion rate by 150%. Highly recommended!",
      rating: 5,
      image: "FS"
    },
    {
      name: "Ali Hassan",
      company: "Local Restaurant Chain",
      role: "Owner",
      content: "Thanks to their local SEO services, we now appear in the top 3 results for 'best restaurants in Karachi'. Our foot traffic has doubled since working with them.",
      rating: 5,
      image: "AH"
    },
    {
      name: "Ayesha Khan",
      company: "Digital Marketing Agency",
      role: "Founder",
      content: "As an agency ourselves, we needed the best SEO partner. ElevateSEO exceeded our expectations with their technical expertise and transparent reporting.",
      rating: 5,
      image: "AK"
    },
    {
      name: "Omar Malik",
      company: "SaaS Startup",
      role: "CTO",
      content: "Their technical SEO audit revealed critical issues we didn't know existed. After implementing their recommendations, our site speed improved by 40% and rankings soared.",
      rating: 5,
      image: "OM"
    },
    {
      name: "Zara Ahmed",
      company: "Healthcare Clinic",
      role: "Practice Manager",
      content: "The monthly SEO package has been a game-changer for our clinic. We're now the go-to choice for patients searching for healthcare services in our area.",
      rating: 5,
      image: "ZA"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-background to-gray-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            What Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about their 
            experience working with ElevateSEO.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-blue-600 opacity-50" />
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-sm text-primary font-semibold">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
