import React, { createContext, useContext, useState, useEffect } from 'react';

// Definición del tipo de producto
export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string | null;
  icon?: React.ReactNode;
  featured?: boolean;
  quantity?: number;
}

// Definición del tipo de contexto del carrito
interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  toggleCart: () => void;
  totalItems: number;
  totalPrice: number;
}

// Creación del contexto
const CartContext = createContext<CartContextType | undefined>(undefined);

// Hook personalizado para usar el contexto
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart debe ser usado dentro de un CartProvider');
  }
  return context;
};

// Proveedor del contexto
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Estado para el carrito
  const [cart, setCart] = useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // Cargar carrito desde localStorage al iniciar
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        // Filtrar solo los campos que necesitamos para evitar problemas con ReactNode
        const sanitizedCart = parsedCart.map((item: any) => ({
          id: item.id,
          name: item.name,
          category: item.category,
          price: item.price,
          description: item.description,
          image: item.image,
          quantity: item.quantity || 1,
          featured: item.featured
        }));
        setCart(sanitizedCart);
      } catch (error) {
        console.error('Error al cargar el carrito:', error);
        localStorage.removeItem('cart');
      }
    }
  }, []);

  // Guardar carrito en localStorage cuando cambie
  useEffect(() => {
    // Guardar solo los datos necesarios, sin ReactNode
    const cartToSave = cart.map(item => ({
      id: item.id,
      name: item.name,
      category: item.category,
      price: item.price,
      description: item.description,
      image: item.image,
      quantity: item.quantity || 1,
      featured: item.featured
    }));
    localStorage.setItem('cart', JSON.stringify(cartToSave));
    
    // Calcular totales
    setTotalItems(cart.reduce((total, item) => total + (item.quantity || 1), 0));
    setTotalPrice(cart.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0));
  }, [cart]);

  // Añadir producto al carrito
  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      
      if (existingProduct) {
        // Si el producto ya existe, incrementar la cantidad
        return prevCart.map(item => 
          item.id === product.id 
            ? { ...item, quantity: (item.quantity || 1) + 1 } 
            : item
        );
      } else {
        // Si es un nuevo producto, añadirlo con cantidad 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    
    // Abrir el carrito automáticamente al añadir un producto
    setIsCartOpen(true);
  };

  // Eliminar producto del carrito
  const removeFromCart = (productId: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  // Actualizar cantidad de un producto
  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    setCart(prevCart => 
      prevCart.map(item => 
        item.id === productId 
          ? { ...item, quantity } 
          : item
      )
    );
  };

  // Limpiar el carrito
  const clearCart = () => {
    setCart([]);
  };

  // Alternar visibilidad del carrito
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  // Valor del contexto
  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    isCartOpen,
    toggleCart,
    totalItems,
    totalPrice
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;