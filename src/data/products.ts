
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
