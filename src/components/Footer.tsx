
import { Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/f1ee0e14-2f84-4f02-81cd-4fbeccad300b.png" 
                alt="ElevateSEO Logo" 
                className="w-10 h-10 object-contain bg-white rounded-lg p-1"
              />
              <span className="text-xl font-bold">ElevateSEO</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Transform your online presence with our cutting-edge SEO strategies and expert guidance. 
              We help businesses dominate search rankings and drive exponential growth.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/elevateseous" className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://x.com/elevateseous" className="w-10 h-10 bg-slate-600 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/elevateseo" className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/elevateseo_us/" className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center hover:from-green-600 hover:to-green-700 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('hero')}
                  className="text-gray-300 hover:text-green-400 transition-colors hover:underline"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('shop')}
                  className="text-gray-300 hover:text-green-400 transition-colors hover:underline"
                >
                  Shop
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-green-400 transition-colors hover:underline"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('testimonials')}
                  className="text-gray-300 hover:text-green-400 transition-colors hover:underline"
                >
                  Testimonials
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Our Services</h3>
            <ul className="space-y-3 text-gray-300">
              <li>SEO Audit & Analysis</li>
              <li>Keyword Research</li>
              <li>On-Page Optimization</li>
              <li>Technical SEO</li>
              <li>Link Building</li>
              <li>Local SEO</li>
              <li>E-commerce SEO</li>
              <li>SEO Consultation</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-400 flex-shrink-0" />
                <a href="tel:+923008244077" className="text-gray-300 hover:text-white transition-colors">
                  +92 3008244077
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-400 flex-shrink-0" />
                <a href="mailto:info@elevateseo.store" className="text-gray-300 hover:text-white transition-colors">
                  info@elevateseo.store
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center">
              © 2024 ElevateSEO. All rights reserved.
            </p>      
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
