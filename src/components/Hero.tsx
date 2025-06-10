
import { ArrowRight, TrendingUp, Search, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToShop = () => {
    const element = document.getElementById('shop');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-20 pb-16 bg-gradient-to-br from-background via-background to-blue-50/20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Elevate
                </span>
                <br />
                Your SEO Game
              </h1>
              <p className="text-xl text-muted-foreground max-w-xl">
                Transform your online presence with our cutting-edge SEO strategies, tools, and expert guidance. 
                Dominate search rankings and drive exponential growth.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                onClick={scrollToShop}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-6"
              >
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Free SEO Audit
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-2xl">250%</h3>
                <p className="text-sm text-muted-foreground">Traffic Increase</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Search className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-2xl">Top 3</h3>
                <p className="text-sm text-muted-foreground">Search Rankings</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-2xl">500+</h3>
                <p className="text-sm text-muted-foreground">Success Stories</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">SEO Dashboard</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/20 rounded-lg p-4">
                    <h4 className="text-sm opacity-80">Organic Traffic</h4>
                    <p className="text-2xl font-bold">+185%</p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <h4 className="text-sm opacity-80">Keywords Ranking</h4>
                    <p className="text-2xl font-bold">342</p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <h4 className="text-sm opacity-80">Domain Authority</h4>
                    <p className="text-2xl font-bold">87/100</p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <h4 className="text-sm opacity-80">Conversion Rate</h4>
                    <p className="text-2xl font-bold">4.2%</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-blue-500 rounded-3xl transform -rotate-3 opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-500 rounded-3xl transform rotate-6 opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
