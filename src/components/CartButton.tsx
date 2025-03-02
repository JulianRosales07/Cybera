import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartButton: React.FC = () => {
  const { toggleCart, totalItems } = useCart();

  return (
    <button 
      onClick={toggleCart}
      className="fixed bottom-6 right-6 z-40 bg-cybera-purple rounded-full p-3 shadow-lg hover:bg-cybera-darkPurple transition-colors duration-300"
      aria-label="Abrir carrito"
    >
      <div className="relative">
        <ShoppingCart className="h-6 w-6 text-white" />
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-white text-cybera-purple text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </div>
    </button>
  );
};

export default CartButton;