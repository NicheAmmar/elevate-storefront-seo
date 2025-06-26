
import { useState } from 'react';
import { Product } from '@/data/products';

export const useEasyPaisaPayment = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEasyPaisaPayment = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handlePaymentSuccess = () => {
    setIsProcessing(false);
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
    setIsProcessing(false);
  };

  return {
    handleEasyPaisaPayment,
    isProcessing,
    selectedProduct,
    isModalOpen,
    handlePaymentSuccess,
    handleCloseModal
  };
};
