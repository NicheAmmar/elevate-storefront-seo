
import { ShoppingCart, Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  onBuyNow: (product: Product) => void;
  isProcessing: boolean;
}

const ProductCard = ({ product, onBuyNow, isProcessing }: ProductCardProps) => {
  return (
    <Card className="relative group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
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
          <span className="text-2xl font-bold text-primary">Rs {product.price.toLocaleString()}</span>
          <span className="text-lg text-muted-foreground line-through">Rs {product.originalPrice.toLocaleString()}</span>
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
          onClick={() => onBuyNow(product)}
          disabled={isProcessing}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          {isProcessing ? "Processing..." : "Buy Now"}
          <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
