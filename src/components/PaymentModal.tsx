
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useToast } from '@/hooks/use-toast';
import { Product } from "@/data/products";
import { ExternalLink, CreditCard, Shield } from 'lucide-react';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
  onPaymentSuccess: () => void;
}

const PaymentModal = ({ isOpen, onClose, product, onPaymentSuccess }: PaymentModalProps) => {
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleEasyPaisaPayment = async () => {
    if (!product) return;

    setIsProcessing(true);
    
    try {
      // Generate EasyPaisa payment link
      const paymentLink = generateEasyPaisaLink(product);
      
      toast({
        title: "Redirecting to EasyPaisa",
        description: "You will be redirected to complete your payment securely.",
      });

      // Simulate a brief delay before redirect
      setTimeout(() => {
        window.open(paymentLink, '_blank');
        setIsProcessing(false);
        
        // Show success message after redirect
        setTimeout(() => {
          toast({
            title: "Payment Initiated",
            description: "Complete your payment in the EasyPaisa window that opened.",
          });
        }, 1000);
      }, 1000);

    } catch (error) {
      console.error('Payment error:', error);
      toast({
        title: "Payment Error",
        description: "Unable to initiate payment. Please try again.",
        variant: "destructive",
      });
      setIsProcessing(false);
    }
  };

  const generateEasyPaisaLink = (product: Product) => {
    // EasyPaisa payment link format
    const baseUrl = "https://easypaisa.com.pk/easypay";
    const params = new URLSearchParams({
      amount: product.price.toString(),
      description: product.name,
      merchant_id: "your_merchant_id", // Replace with your actual merchant ID
      order_id: `ORDER_${Date.now()}`,
      return_url: window.location.origin + "/payment-success",
      cancel_url: window.location.origin + "/payment-cancelled"
    });
    
    return `${baseUrl}?${params.toString()}`;
  };

  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5 text-green-600" />
            Complete Payment with EasyPaisa
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg border">
            <h3 className="font-semibold text-lg">{product.name}</h3>
            <p className="text-sm text-muted-foreground mb-2">{product.description}</p>
            <p className="text-3xl font-bold text-green-600">PKR {product.price}</p>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="h-4 w-4 text-blue-600" />
              <span className="font-medium text-blue-800">Secure Payment with EasyPaisa</span>
            </div>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Pay with your EasyPaisa account</li>
              <li>• Bank transfer or mobile wallet</li>
              <li>• 100% secure and encrypted</li>
              <li>• Instant payment confirmation</li>
            </ul>
          </div>
          
          <div className="flex gap-3">
            <Button 
              onClick={handleEasyPaisaPayment}
              disabled={isProcessing}
              className="flex-1 bg-green-600 hover:bg-green-700"
            >
              {isProcessing ? (
                "Redirecting..."
              ) : (
                <>
                  Pay with EasyPaisa
                  <ExternalLink className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
            <Button 
              variant="outline" 
              onClick={onClose}
              disabled={isProcessing}
              className="flex-1"
            >
              Cancel
            </Button>
          </div>

          <div className="text-center">
            <p className="text-xs text-muted-foreground">
              You will be redirected to EasyPaisa's secure payment page
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;
