
import { ShoppingCart, Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Shop = () => {
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);

  const products = [
    {
      id: 1,
      name: "Website SEO Audit & Strategy",
      price: 50.00,
      originalPrice: 80.00,
      description: "Comprehensive 50-page SEO audit with actionable recommendations and strategy roadmap.",
      features: ["Technical SEO Analysis", "Competitor Research", "Keyword Strategy", "Action Plan"],
      rating: 4.9,
      reviews: 127,
      popular: true
    },
    {
      id: 2,
      name: "Complete SEO Management",
      price: 150.00,
      originalPrice: 250.00,
      description: "Full-service monthly SEO management including content, links, and technical optimization.",
      features: ["Content Optimization", "Link Building", "Technical Fixes", "Monthly Reports"],
      rating: 5.0,
      reviews: 89,
      popular: false
    },
    {
      id: 3,
      name: "SEO Tools Access Bundle",
      price: 35.00,
      originalPrice: 50.00,
      description: "Premium SEO tools access bundle with keyword research and ranking tracking tools.",
      features: ["Keyword Research Tool", "Rank Tracker", "Backlink Analyzer", "Site Audit Tool"],
      rating: 4.8,
      reviews: 203,
      popular: false
    },
    {
      id: 4,
      name: "Local Business SEO Setup",
      price: 70.00,
      originalPrice: 120.00,
      description: "Complete local SEO setup and optimization for businesses targeting local customers.",
      features: ["Google My Business", "Local Citations", "Review Management", "Local Content"],
      rating: 4.9,
      reviews: 156,
      popular: false
    },
    {
      id: 5,
      name: "Online Store SEO Boost",
      price: 180.00,
      originalPrice: 300.00,
      description: "Specialized SEO package for online stores with product optimization and category structure.",
      features: ["Product Page SEO", "Category Optimization", "Schema Markup", "Site Structure"],
      rating: 4.7,
      reviews: 94,
      popular: true
    },
    {
      id: 6,
      name: "SEO Expert Consultation",
      price: 20.00,
      originalPrice: 30.00,
      description: "One-on-one 60-minute consultation with our SEO experts to discuss your strategy.",
      features: ["Strategy Discussion", "Q&A Session", "Personalized Advice", "Action Items"],
      rating: 5.0,
      reviews: 312,
      popular: false
    }
  ];

  const handleBraintreePayment = async (product: typeof products[0]) => {
    setIsProcessing(true);
    
    try {
      // Load Braintree SDK dynamically
      const braintree = await import('braintree-web');
      
      // Initialize Braintree client
      // Note: You'll need to replace 'sandbox_your_tokenization_key' with your actual Braintree tokenization key
      const clientInstance = await braintree.client.create({
        authorization: 'sandbox_your_tokenization_key' // Replace with your actual tokenization key
      });

      // Create hosted fields for secure card input
      const hostedFieldsInstance = await braintree.hostedFields.create({
        client: clientInstance,
        styles: {
          'input': {
            'font-size': '16px',
            'font-family': 'courier, monospace',
            'font-weight': 'lighter',
            'color': '#ccc'
          },
          ':focus': {
            'color': 'black'
          }
        },
        fields: {
          number: {
            selector: '#card-number',
            placeholder: '4111 1111 1111 1111'
          },
          cvv: {
            selector: '#cvv',
            placeholder: '123'
          },
          expirationDate: {
            selector: '#expiration-date',
            placeholder: 'MM/YY'
          }
        }
      });

      // Create payment form modal
      const paymentModal = document.createElement('div');
      paymentModal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
      paymentModal.innerHTML = `
        <div class="bg-white p-8 rounded-lg max-w-md w-full mx-4">
          <h3 class="text-xl font-bold mb-4">Complete Payment</h3>
          <p class="mb-4">${product.name} - $${product.price}</p>
          
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium mb-1">Card Number</label>
              <div id="card-number" class="border border-gray-300 p-3 rounded"></div>
            </div>
            
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium mb-1">Expiry Date</label>
                <div id="expiration-date" class="border border-gray-300 p-3 rounded"></div>
              </div>
              <div>
                <label class="block text-sm font-medium mb-1">CVV</label>
                <div id="cvv" class="border border-gray-300 p-3 rounded"></div>
              </div>
            </div>
          </div>
          
          <div class="flex gap-4 mt-6">
            <button id="submit-payment" class="flex-1 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
              Pay $${product.price}
            </button>
            <button id="cancel-payment" class="flex-1 bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700">
              Cancel
            </button>
          </div>
        </div>
      `;

      document.body.appendChild(paymentModal);

      // Handle payment submission
      const submitButton = paymentModal.querySelector('#submit-payment') as HTMLButtonElement;
      const cancelButton = paymentModal.querySelector('#cancel-payment') as HTMLButtonElement;

      submitButton.addEventListener('click', async () => {
        try {
          submitButton.disabled = true;
          submitButton.textContent = 'Processing...';

          const { nonce } = await hostedFieldsInstance.tokenize();
          
          // Here you would send the nonce to your server to process the payment
          // For demo purposes, we'll simulate a successful payment
          await new Promise(resolve => setTimeout(resolve, 2000));
          
          toast({
            title: "Payment Successful!",
            description: `Thank you for purchasing ${product.name}`,
          });

          document.body.removeChild(paymentModal);
        } catch (error) {
          console.error('Payment error:', error);
          toast({
            title: "Payment Failed",
            description: "There was an error processing your payment. Please try again.",
            variant: "destructive",
          });
          submitButton.disabled = false;
          submitButton.textContent = `Pay $${product.price}`;
        }
      });

      cancelButton.addEventListener('click', () => {
        document.body.removeChild(paymentModal);
      });

    } catch (error) {
      console.error('Braintree initialization error:', error);
      toast({
        title: "Payment Error",
        description: "Unable to initialize payment system. Please check your Braintree configuration.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <section id="shop" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            SEO <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Shop</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our range of professional SEO services and tools. Secure payments via Braintree.
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
                  <span className="text-2xl font-bold text-primary">${product.price}</span>
                  <span className="text-lg text-muted-foreground line-through">${product.originalPrice}</span>
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
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  onClick={() => handleBraintreePayment(product)}
                  disabled={isProcessing}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  {isProcessing ? "Processing..." : "Buy Now"}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Secure payments powered by Braintree. All transactions are encrypted and protected.
          </p>
          <div className="flex justify-center items-center space-x-4 text-sm text-muted-foreground">
            <span>✓ 256-bit SSL Encryption</span>
            <span>✓ PCI DSS Compliant</span>
            <span>✓ Fraud Protection</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
