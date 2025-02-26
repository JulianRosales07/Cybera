import React from 'react';
import { ShoppingCart, Star, Cpu, Shield, Smartphone, Laptop, Headphones, Watch } from 'lucide-react';

// Product type definition
interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
  icon: React.ReactNode;
  featured?: boolean;
}

const ProductsPage: React.FC = () => {
  // Sample products data (you can replace this with actual data)
  const products: Product[] = [
    {
      id: 1,
      name: "CyberCore X9 Processor",
      category: "Hardware",
      price: 599.99,
      description: "Next-generation processor with 16 cores and 32 threads, designed for extreme performance and efficiency.",
      image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&q=80&w=1974",
      icon: <Cpu />,
      featured: true
    },
    {
      id: 2,
      name: "QuantumShield Pro",
      category: "Security",
      price: 299.99,
      description: "Advanced cybersecurity solution with AI-powered threat detection and real-time protection.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=2070",
      icon: <Shield />,
      featured: true
    },
    {
      id: 3,
      name: "NeoPhone X",
      category: "Mobile",
      price: 899.99,
      description: "Flagship smartphone with edge-to-edge display, advanced camera system, and 2-day battery life.",
      image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=2027",
      icon: <Smartphone />,
      featured: true
    },
    {
      id: 4,
      name: "UltraBook Pro",
      category: "Computers",
      price: 1299.99,
      description: "Ultra-thin laptop with 4K display, 32GB RAM, and 1TB SSD for professional performance on the go.",
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=2071",
      icon: <Laptop />
    },
    {
      id: 5,
      name: "SonicWave Headphones",
      category: "Audio",
      price: 249.99,
      description: "Wireless noise-cancelling headphones with spatial audio and 30-hour battery life.",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=2070",
      icon: <Headphones />
    },
    {
      id: 6,
      name: "VitalTrack Smart Watch",
      category: "Wearables",
      price: 349.99,
      description: "Advanced fitness and health tracking smartwatch with ECG, sleep analysis, and 7-day battery life.",
      image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&q=80&w=2072",
      icon: <Watch />
    }
  ];

  // Filter featured products
  const featuredProducts = products.filter(product => product.featured);
  const regularProducts = products.filter(product => !product.featured);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-cybera-black">
        <div className="absolute inset-0 bg-tech-pattern bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-cybera-black via-cybera-black/95 to-cybera-black/90"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-cybera-purple">Products</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Discover our range of cutting-edge technology products designed to transform your digital experience
          </p>
        </div>
      </section>

      {/* Featured Products */}
      {featuredProducts.length > 0 && (
        <section className="py-16 bg-cybera-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Featured Products</h2>
              <div className="w-24 h-1 cybera-gradient mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredProducts.map(product => (
                <div key={product.id} className="cybera-card group">
                  <div className="relative overflow-hidden rounded-lg mb-6">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-0 right-0 bg-cybera-purple text-white px-3 py-1 text-sm font-semibold">
                      Featured
                    </div>
                  </div>
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-white">{product.name}</h3>
                    <div className="text-cybera-purple">
                      {product.icon}
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm mb-2">{product.category}</p>
                  <p className="text-gray-300 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-cybera-purple">${product.price.toFixed(2)}</span>
                    <button className="flex items-center text-white bg-cybera-purple px-4 py-2 rounded-md hover:bg-cybera-darkPurple transition-colors duration-300">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Products */}
      <section className="py-16 bg-cybera-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">All Products</h2>
            <div className="w-24 h-1 cybera-gradient mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map(product => (
              <div key={product.id} className="cybera-card group">
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {product.featured && (
                    <div className="absolute top-0 right-0 bg-cybera-purple text-white px-3 py-1 text-sm font-semibold">
                      Featured
                    </div>
                  )}
                </div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-white">{product.name}</h3>
                  <div className="text-cybera-purple">
                    {product.icon}
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-2">{product.category}</p>
                <p className="text-gray-300 text-sm mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-cybera-purple">${product.price.toFixed(2)}</span>
                  <button className="flex items-center text-white bg-cybera-purple px-3 py-1 rounded-md hover:bg-cybera-darkPurple transition-colors duration-300 text-sm">
                    <ShoppingCart className="h-4 w-4 mr-1" />
                    Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;