
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

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

export const useBraintreePayment = () => {
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleBraintreePayment = async (product: Product) => {
    setIsProcessing(true);
    
    try {
      // Load Braintree SDK dynamically
      const braintree = await import('braintree-web');
      
      // Initialize Braintree client with your sandbox tokenization key
      const clientInstance = await braintree.client.create({
        authorization: 'sandbox_x2gqjmv7_2qbtnjq4q6krm56r'
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

  return {
    handleBraintreePayment,
    isProcessing
  };
};
