
import Hero from "@/components/Hero";
import WhatWeOffer from "@/components/WhatWeOffer";
import Shop from "@/components/Shop";
import AboutUs from "@/components/AboutUs";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <WhatWeOffer />
      <Shop />
      <AboutUs />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
