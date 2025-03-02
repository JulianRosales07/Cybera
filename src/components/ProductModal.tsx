import React from 'react';
import { X, ShoppingCart } from 'lucide-react';
import { useCart, Product } from '../context/CartContext';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const { addToCart } = useCart();

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-cybera-gray border border-cybera-purple/30 rounded-lg shadow-xl">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold text-white">{product.name}</h2>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          {/* Content */}
          <div className="grid grid-cols-1 gap-6">
            <div>
              <div className="mb-4">
                <p className="text-gray-400 text-sm mb-1">Categoría</p>
                <p className="text-white">{product.category}</p>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-400 text-sm mb-1">Descripción</p>
                <p className="text-gray-300">{product.description}</p>
              </div>
              
              <div className="mb-6">
                <p className="text-gray-400 text-sm mb-1">Precio</p>
                <p className="text-2xl font-bold text-cybera-purple">${product.price.toFixed(2)}</p>
              </div>
              
              <button 
                onClick={handleAddToCart}
                className="cybera-button w-full flex items-center justify-center"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Añadir al Carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;