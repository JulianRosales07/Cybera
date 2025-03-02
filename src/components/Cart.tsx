import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { X, ShoppingCart, Plus, Minus, Trash2, CreditCard, Check } from 'lucide-react';

const Cart: React.FC = () => {
  const { 
    cart, 
    isCartOpen, 
    toggleCart, 
    removeFromCart, 
    updateQuantity, 
    clearCart,
    totalItems,
    totalPrice
  } = useCart();
  
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutComplete, setCheckoutComplete] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    address: '',
    cardNumber: '',
    cardExpiry: '',
    cardCVC: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCustomerInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulación de procesamiento de pago
    setTimeout(() => {
      setCheckoutComplete(true);
      setTimeout(() => {
        clearCart();
        setIsCheckingOut(false);
        setCheckoutComplete(false);
        toggleCart();
      }, 3000);
    }, 1500);
  };

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={toggleCart}
      ></div>
      
      {/* Cart Panel */}
      <div className="absolute right-0 top-0 h-full w-full sm:w-96 bg-cybera-gray border-l border-cybera-purple/30 shadow-xl transform transition-transform duration-300 overflow-hidden">
        {/* Cart Header */}
        <div className="p-4 border-b border-cybera-purple/30 flex justify-between items-center bg-cybera-black">
          <div className="flex items-center">
            <ShoppingCart className="h-5 w-5 text-cybera-purple mr-2" />
            <h2 className="text-xl font-bold text-white">
              {isCheckingOut ? 'Finalizar Compra' : 'Tu Carrito'}
            </h2>
          </div>
          <button 
            onClick={toggleCart}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        {/* Cart Content */}
        <div className="h-[calc(100%-8rem)] overflow-y-auto p-4">
          {checkoutComplete ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="h-16 w-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                <Check className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">¡Compra Completada!</h3>
              <p className="text-gray-300 mb-6">Tu pedido ha sido procesado correctamente.</p>
              <p className="text-gray-400 text-sm">Recibirás un correo con los detalles de tu compra.</p>
            </div>
          ) : isCheckingOut ? (
            <form onSubmit={handleCheckout} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-1 text-sm">Nombre Completo</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={customerInfo.name}
                  onChange={handleInputChange}
                  className="cybera-input w-full text-sm"
                  placeholder="Juan Pérez"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-1 text-sm">Correo Electrónico</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={customerInfo.email}
                  onChange={handleInputChange}
                  className="cybera-input w-full text-sm"
                  placeholder="juan@ejemplo.com"
                />
              </div>
              
              <div>
                <label htmlFor="address" className="block text-gray-300 mb-1 text-sm">Dirección de Envío</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  required
                  value={customerInfo.address}
                  onChange={handleInputChange}
                  className="cybera-input w-full text-sm"
                  placeholder="Calle Principal #123"
                />
              </div>
              
              <div className="pt-4 border-t border-cybera-purple/20">
                <h3 className="text-white font-medium mb-3">Información de Pago</h3>
                
                <div className="mb-3">
                  <label htmlFor="cardNumber" className="block text-gray-300 mb-1 text-sm">Número de Tarjeta</label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    required
                    value={customerInfo.cardNumber}
                    onChange={handleInputChange}
                    className="cybera-input w-full text-sm"
                    placeholder="1234 5678 9012 3456"
                    maxLength={19}
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="cardExpiry" className="block text-gray-300 mb-1 text-sm">Fecha Expiración</label>
                    <input
                      type="text"
                      id="cardExpiry"
                      name="cardExpiry"
                      required
                      value={customerInfo.cardExpiry}
                      onChange={handleInputChange}
                      className="cybera-input w-full text-sm"
                      placeholder="MM/AA"
                      maxLength={5}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="cardCVC" className="block text-gray-300 mb-1 text-sm">CVC</label>
                    <input
                      type="text"
                      id="cardCVC"
                      name="cardCVC"
                      required
                      value={customerInfo.cardCVC}
                      onChange={handleInputChange}
                      className="cybera-input w-full text-sm"
                      placeholder="123"
                      maxLength={3}
                    />
                  </div>
                </div>
              </div>
              
              <div className="pt-4 border-t border-cybera-purple/20">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300">Subtotal:</span>
                  <span className="text-white">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300">Envío:</span>
                  <span className="text-white">$0.00</span>
                </div>
                <div className="flex justify-between font-bold">
                  <span className="text-white">Total:</span>
                  <span className="text-cybera-purple">${totalPrice.toFixed(2)}</span>
                </div>
              </div>
              
              <button 
                type="submit"
                className="cybera-button w-full flex items-center justify-center mt-4"
              >
                <CreditCard className="h-4 w-4 mr-2" />
                Completar Compra
              </button>
              
              <button 
                type="button"
                onClick={() => setIsCheckingOut(false)}
                className="w-full py-2 text-gray-400 hover:text-white text-sm text-center"
              >
                Volver al Carrito
              </button>
            </form>
          ) : cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingCart className="h-12 w-12 text-gray-600 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Tu carrito está vacío</h3>
              <p className="text-gray-400">Añade algunos productos para comenzar</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map(item => (
                <div key={item.id} className="flex border-b border-cybera-purple/20 pb-4">
                  <div className="h-16 w-16 bg-cybera-black rounded-md flex items-center justify-center mr-3">
                    {item.image ? (
                      <img src={item.image} alt={item.name} className="h-12 w-12 object-contain" />
                    ) : (
                      <div className="text-cybera-purple">
                        {/* Placeholder icon */}
                        <ShoppingCart className="h-8 w-8" />
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h3 className="text-white font-medium">{item.name}</h3>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-500 hover:text-red-500"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    
                    <p className="text-gray-400 text-sm">{item.category}</p>
                    
                    <div className="flex justify-between items-center mt-2">
                      <div className="flex items-center bg-cybera-black rounded-md">
                        <button 
                          onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)}
                          className="p-1 text-gray-400 hover:text-white"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="px-2 text-white">{item.quantity || 1}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                          className="p-1 text-gray-400 hover:text-white"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      
                      <span className="text-cybera-purple font-bold">
                        ${((item.price) * (item.quantity || 1)).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="pt-4 border-t border-cybera-purple/20">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300">Subtotal ({totalItems} {totalItems === 1 ? 'item' : 'items'}):</span>
                  <span className="text-white">${totalPrice.toFixed(2)}</span>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Cart Footer */}
        {!isCheckingOut && !checkoutComplete && (
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-cybera-purple/30 bg-cybera-black">
            {cart.length > 0 && (
              <div className="space-y-2">
                <button 
                  onClick={() => setIsCheckingOut(true)}
                  className="cybera-button w-full flex items-center justify-center"
                >
                  <CreditCard className="h-4 w-4 mr-2" />
                  Finalizar Compra (${totalPrice.toFixed(2)})
                </button>
                
                <button 
                  onClick={clearCart}
                  className="w-full py-2 text-gray-400 hover:text-white text-sm text-center"
                >
                  Vaciar Carrito
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;