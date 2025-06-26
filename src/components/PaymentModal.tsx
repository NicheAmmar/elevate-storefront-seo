import { useState, useEffect, useRef } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from '@/hooks/use-toast';
import { Product } from "@/data/products";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
  onPaymentSuccess: () => void;
}

const PaymentModal = ({ isOpen, onClose, product, onPaymentSuccess }: PaymentModalProps) => {
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);
  const [braintreeClient, setBraintreeClient] = useState<any>(null);
  const [hostedFields, setHostedFields] = useState<any>(null);
  const cardNumberRef = useRef<HTMLDivElement>(null);
  const expiryRef = useRef<HTMLDivElement>(null);
  const cvvRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && product) {
      initializeBraintree();
    }
    
    return () => {
      if (hostedFields) {
        hostedFields.teardown();
      }
    };
  }, [isOpen, product]);

  const initializeBraintree = async () => {
    try {
      const braintree = await import('braintree-web');
      
      const clientInstance = await braintree.client.create({
        authorization: 'sandbox_x2gqjmv7_2qbtnjq4q6krm56r'
      });

      setBraintreeClient(clientInstance);

      // Wait for DOM elements to be available
      setTimeout(async () => {
        try {
          const hostedFieldsInstance = await braintree.hostedFields.create({
            client: clientInstance,
            styles: {
              'input': {
                'font-size': '16px',
                'font-family': 'system-ui, sans-serif',
                'color': '#333'
              },
              ':focus': {
                'color': '#000'
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

          setHostedFields(hostedFieldsInstance);
        } catch (error) {
          console.error('Hosted fields creation error:', error);
          toast({
            title: "Payment Setup Error",
            description: "Unable to initialize payment fields. Please try again.",
            variant: "destructive",
          });
        }
      }, 100);

    } catch (error) {
      console.error('Braintree initialization error:', error);
      toast({
        title: "Payment Error",
        description: "Unable to initialize payment system.",
        variant: "destructive",
      });
    }
  };

  const handlePayment = async () => {
    if (!hostedFields || !product) return;

    setIsProcessing(true);
    
    try {
      const { nonce } = await hostedFields.tokenize();
      
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Payment Successful!",
        description: `Thank you for purchasing ${product.name}`,
      });

      onPaymentSuccess();
      onClose();
    } catch (error) {
      console.error('Payment error:', error);
      toast({
        title: "Payment Failed",
        description: "There was an error processing your payment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Complete Payment</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold">{product.name}</h3>
            <p className="text-2xl font-bold text-green-600">${product.price}</p>
          </div>

          <div className="space-y-4">
            <div>
              <Label htmlFor="card-number" className="text-sm font-medium mb-2 block">
                Card Number
              </Label>
              <div 
                id="card-number" 
                ref={cardNumberRef}
                className="border border-gray-300 p-3 rounded-md min-h-[44px] bg-white"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="expiration-date" className="text-sm font-medium mb-2 block">
                  Expiry Date
                </Label>
                <div 
                  id="expiration-date" 
                  ref={expiryRef}
                  className="border border-gray-300 p-3 rounded-md min-h-[44px] bg-white"
                />
              </div>
              <div>
                <Label htmlFor="cvv" className="text-sm font-medium mb-2 block">
                  CVV
                </Label>
                <div 
                  id="cvv" 
                  ref={cvvRef}
                  className="border border-gray-300 p-3 rounded-md min-h-[44px] bg-white"
                />
              </div>
            </div>
          </div>
          
          <div className="flex gap-4 pt-4">
            <Button 
              onClick={handlePayment}
              disabled={isProcessing || !hostedFields}
              className="flex-1"
            >
              {isProcessing ? "Processing..." : `Pay $${product.price}`}
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
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;
