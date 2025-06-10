import { ShoppingCart, Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Shop = () => {
  const products = [
    {
      id: 1,
      name: "Website SEO Audit & Strategy",
      price: "PKR 5,000",
      originalPrice: "PKR 8,000",
      description: "Comprehensive 50-page SEO audit with actionable recommendations and strategy roadmap.",
      features: ["Technical SEO Analysis", "Competitor Research", "Keyword Strategy", "Action Plan"],
      rating: 4.9,
      reviews: 127,
      popular: true
    },
    {
      id: 2,
      name: "Complete SEO Management",
      price: "PKR 15,000",
      originalPrice: "PKR 25,000",
      description: "Full-service monthly SEO management including content, links, and technical optimization.",
      features: ["Content Optimization", "Link Building", "Technical Fixes", "Monthly Reports"],
      rating: 5.0,
      reviews: 89,
      popular: false
    },
    {
      id: 3,
      name: "SEO Tools Access Bundle",
      price: "PKR 3,500",
      originalPrice: "PKR 5,000",
      description: "Premium SEO tools access bundle with keyword research and ranking tracking tools.",
      features: ["Keyword Research Tool", "Rank Tracker", "Backlink Analyzer", "Site Audit Tool"],
      rating: 4.8,
      reviews: 203,
      popular: false
    },
    {
      id: 4,
      name: "Local Business SEO Setup",
      price: "PKR 7,000",
      originalPrice: "PKR 12,000",
      description: "Complete local SEO setup and optimization for businesses targeting local customers.",
      features: ["Google My Business", "Local Citations", "Review Management", "Local Content"],
      rating: 4.9,
      reviews: 156,
      popular: false
    },
    {
      id: 5,
      name: "Online Store SEO Boost",
      price: "PKR 18,000",
      originalPrice: "PKR 30,000",
      description: "Specialized SEO package for online stores with product optimization and category structure.",
      features: ["Product Page SEO", "Category Optimization", "Schema Markup", "Site Structure"],
      rating: 4.7,
      reviews: 94,
      popular: true
    },
    {
      id: 6,
      name: "SEO Expert Consultation",
      price: "PKR 2,000",
      originalPrice: "PKR 3,000",
      description: "One-on-one 60-minute consultation with our SEO experts to discuss your strategy.",
      features: ["Strategy Discussion", "Q&A Session", "Personalized Advice", "Action Items"],
      rating: 5.0,
      reviews: 312,
      popular: false
    }
  ];

  const handleJazzCashPayment = (product: typeof products[0]) => {
    // JazzCash payment integration
    const jazzCashUrl = `https://sandbox.jazzcash.com.pk/ApplicationAPI/API/Payment/DoTransaction`;
    
    // In a real application, you would send this to your backend
    const paymentData = {
      productName: product.name,
      amount: product.price,
      merchantId: "MC40381", // Replace with actual merchant ID
      password: "7e94c5c49d", // Replace with actual password
      transactionId: `TXN${Date.now()}`,
      billReference: `BILL${Date.now()}`,
      description: product.description,
      language: "EN",
      currency: "PKR",
      returnURL: `${window.location.origin}/payment-success`,
      ppmpf1: "1",
      ppmpf2: "2",
      ppmpf3: "3",
      ppmpf4: "4",
      ppmpf5: "5"
    };

    // For demo purposes, we'll create a payment form and submit it
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://sandbox.jazzcash.com.pk/CustomerPortal/transactionmanagement/merchantform/';
    form.target = '_blank';

    Object.entries(paymentData).forEach(([key, value]) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = value.toString();
      form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
  };

  return (
    <section id="shop" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            SEO <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Shop</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our range of professional SEO services and tools. Secure payments via JazzCash.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="relative group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              {product.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-red-500 text-white">
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                </div>
                
                <div className="flex items-center space-x-2 mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold text-primary">{product.price}</span>
                  <span className="text-lg text-muted-foreground line-through">{product.originalPrice}</span>
                </div>
              </CardHeader>

              <CardContent className="pb-6">
                <p className="text-muted-foreground mb-4">{product.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">What's Included:</h4>
                  <ul className="space-y-1">
                    {product.features.map((feature, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>

              <CardFooter>
                <Button 
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                  onClick={() => handleJazzCashPayment(product)}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Pay with JazzCash
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Secure payments powered by JazzCash. All transactions are encrypted and protected.
          </p>
          <div className="flex justify-center items-center space-x-4 text-sm text-muted-foreground">
            <span>✓ 100% Secure</span>
            <span>✓ Instant Processing</span>
            <span>✓ 24/7 Support</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
