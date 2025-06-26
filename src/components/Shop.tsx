
import ProductCard from "@/components/ProductCard";
import PaymentModal from "@/components/PaymentModal";
import { useEasyPaisaPayment } from "@/hooks/useBraintreePayment";
import { products } from "@/data/products";

const Shop = () => {
  const { 
    handleEasyPaisaPayment, 
    isProcessing, 
    selectedProduct, 
    isModalOpen, 
    handlePaymentSuccess, 
    handleCloseModal 
  } = useEasyPaisaPayment();

  return (
    <section id="shop" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            SEO <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Shop</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our range of professional SEO services and tools. Secure payments via EasyPaisa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onBuyNow={handleEasyPaisaPayment}
              isProcessing={isProcessing}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Secure payments powered by EasyPaisa. All transactions are encrypted and protected.
          </p>
          <div className="flex justify-center items-center space-x-4 text-sm text-muted-foreground">
            <span>✓ Bank Transfer Support</span>
            <span>✓ Mobile Wallet Integration</span>
            <span>✓ Instant Confirmation</span>
          </div>
        </div>
      </div>

      <PaymentModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        product={selectedProduct}
        onPaymentSuccess={handlePaymentSuccess}
      />
    </section>
  );
};

export default Shop;
