
export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  description: string;
  features: string[];
  rating: number;
  reviews: number;
  popular: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Website SEO Audit & Strategy",
    price: 10000,
    originalPrice: 15000,
    description: "Comprehensive 50-page SEO audit with actionable recommendations and strategy roadmap.",
    features: ["Technical SEO Analysis", "Competitor Research", "Keyword Strategy", "Action Plan"],
    rating: 4.9,
    reviews: 127,
    popular: true
  },
  {
    id: 2,
    name: "Complete SEO Management",
    price: 45000,
    originalPrice: 60000,
    description: "Full-service monthly SEO management including content, links, and technical optimization.",
    features: ["Content Optimization", "Link Building", "Technical Fixes", "Monthly Reports"],
    rating: 5.0,
    reviews: 89,
    popular: false
  },
  {
    id: 4,
    name: "Local Business SEO Setup",
    price: 20000,
    originalPrice: 30000,
    description: "Complete local SEO setup and optimization for businesses targeting local customers.",
    features: ["Google My Business", "Local Citations", "Review Management", "Local Content"],
    rating: 4.9,
    reviews: 156,
    popular: false
  },
  {
    id: 5,
    name: "Online Store SEO Boost",
    price: 60000,
    originalPrice: 80000,
    description: "Specialized SEO package for online stores with product optimization and category structure.",
    features: ["Product Page SEO", "Category Optimization", "Schema Markup", "Site Structure"],
    rating: 4.7,
    reviews: 94,
    popular: true
  }
];
