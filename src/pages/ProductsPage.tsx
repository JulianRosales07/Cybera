import React, { useRef, useState } from 'react';
import { ShoppingCart, Glasses, Headphones, Tablet, Laptop, Camera, Monitor, BatteryCharging, Mouse, HardDrive, Network, Watch, Speaker, Server, Battery, Smartphone, ChevronLeft, ChevronRight, Info } from 'lucide-react';
import { useCart, Product } from '../context/CartContext';
import ProductModal from '../components/ProductModal';

const ProductsPage: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };
  
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const openProductDetails = (product: Product) => {
    setSelectedProduct(product);
  };

  const closeProductDetails = () => {
    setSelectedProduct(null);
  };

  const products: Product[] = [
    { id: 1, name: "NeuraVision X200", category: "Gafas Inteligentes", price: 899.99, description: "Gafas de realidad aumentada con IA.", image: null, icon: <Glasses />, featured: true },
    { id: 2, name: "EchoWave Pro", category: "Auriculares", price: 179.99, description: "Auriculares con cancelación de ruido y audio 3D.", image: null, icon: <Headphones /> },
    { id: 3, name: "QuantumPad 10", category: "Tableta", price: 499.99, description: "Tableta de 10 pulgadas con procesador cuántico.", image: null, icon: <Tablet />, featured: true },
    { id: 4, name: "AeroBook Ultra 14", category: "Laptop", price: 1299.99, description: "Ultrabook con pantalla OLED y batería de 20h.", image: null, icon: <Laptop />, featured: true },
    { id: 5, name: "PhotonCam X", category: "Cámara", price: 799.99, description: "Cámara 8K con sensor de luz cuántica.", image: null, icon: <Camera /> },
    { id: 6, name: "NeuraPad Mini", category: "Tableta", price: 299.99, description: "Tableta ultra ligera con interfaz neuronal.", image: null, icon: <Tablet /> },
    { id: 7, name: "HoloDesk 2.0", category: "Monitor", price: 2199.99, description: "Monitor holográfico sin necesidad de gafas.", image: null, icon: <Monitor />, featured: true },
    { id: 8, name: "NeoCharge X1", category: "Cargador", price: 99.99, description: "Cargador inalámbrico con carga rápida 120W.", image: null, icon: <BatteryCharging /> },
    { id: 9, name: "CyberMouse Elite", category: "Ratón", price: 79.99, description: "Ratón ergonómico con sensor de 20000DPI.", image: null, icon: <Mouse /> },
    { id: 10, name: "QuantumDrive S3", category: "Almacenamiento", price: 599.99, description: "SSD cuántico de 4TB con transferencia de 12GB/s.", image: null, icon: <HardDrive /> },
    { id: 11, name: "HyperPad 360", category: "Tableta", price: 649.99, description: "Tableta convertible con pantalla 360º.", image: null, icon: <Tablet /> },
    { id: 12, name: "NeuroBand Z", category: "Wearable", price: 249.99, description: "Banda neuronal para control de dispositivos.", image: null, icon: <Watch /> },
    { id: 13, name: "VisionHub XR", category: "Gafas VR", price: 1499.99, description: "Gafas de realidad mixta con 5G integrado.", image: null, icon: <Glasses /> },
    { id: 14, name: "WaveSound Mini", category: "Altavoz", price: 119.99, description: "Altavoz portátil con asistente de voz.", image: null, icon: <Speaker /> },
    { id: 15, name: "X-Treme Cam 8X", category: "Cámara", price: 599.99, description: "Cámara 360º con estabilización cuántica.", image: null, icon: <Camera /> },
    { id: 16, name: "DataCube 50", category: "Almacenamiento", price: 2499.99, description: "Servidor personal con IA y 50TB de almacenamiento.", image: null, icon: <Server /> },
    { id: 17, name: "AeroBook Flex", category: "Laptop", price: 1899.99, description: "Laptop con pantalla flexible OLED.", image: null, icon: <Laptop /> },
    { id: 18, name: "NanoDrone X", category: "Drone", price: 349.99, description: "Drone de bolsillo con cámara 4K y seguimiento IA.", image: null, icon: <Camera /> },
    { id: 19, name: "HyperSpeed Router", category: "Red", price: 299.99, description: "Router WiFi 8 con velocidades de 10Gbps.", image: null, icon: <Network /> },
    { id: 20, name: "NeuraPen Pro", category: "Accesorio", price: 129.99, description: "Stylus inteligente con reconocimiento neuronal.", image: null, icon: <Mouse /> },
    { id: 21, name: "InfinityScreen X1", category: "Pantalla", price: 499.99, description: "Pantalla curvada 4K ultra delgada.", image: null, icon: <Monitor /> },
    { id: 22, name: "LaserBeam Pro", category: "Proyector", price: 1199.99, description: "Proyector láser con resolución 8K.", image: null, icon: <Monitor /> },
    { id: 23, name: "CyberPhone X2", category: "Teléfono", price: 999.99, description: "Smartphone de 6.5\" con cámara 100MP.", image: null, icon: <Smartphone /> },
    { id: 24, name: "FlexCharge 4X", category: "Cargador", price: 69.99, description: "Cargador solar 4 puertos con tecnología de carga rápida.", image: null, icon: <BatteryCharging /> },
    { id: 25, name: "HyperDrive Pro", category: "Almacenamiento", price: 349.99, description: "Disco duro 4TB con protección contra golpes.", image: null, icon: <HardDrive /> },
    { id: 26, name: "QuantumHeadset Q2", category: "Auriculares", price: 399.99, description: "Auriculares inteligentes con control neuronal.", image: null, icon: <Headphones /> },
    { id: 27, name: "FlexiCase Pro", category: "Accesorio", price: 49.99, description: "Funda flexible para smartphones con resistencia a caídas.", image: null, icon: <Smartphone /> },
    { id: 28, name: "EdgeTablet 7", category: "Tableta", price: 199.99, description: "Tableta de 7 pulgadas con carga rápida y 4G.", image: null, icon: <Tablet /> },
    { id: 29, name: "GigaBattery 20K", category: "Batería", price: 129.99, description: "Batería portátil de 20,000mAh con carga rápida.", image: null, icon: <Battery /> },
    { id: 30, name: "NanoClip 4X", category: "Accesorio", price: 79.99, description: "Clip inteligente para control remoto de dispositivos.", image: null, icon: <Mouse /> },
    { id: 31, name: "OptiLens 4K", category: "Gafas Inteligentes", price: 599.99, description: "Gafas inteligentes con visión 4K y control por voz.", image: null, icon: <Glasses /> },
    { id: 32, name: "NanoCleaner", category: "Limpiador", price: 39.99, description: "Limpiador ultrasonido para pantallas y cámaras.", image: null, icon: <Camera /> },
    { id: 33, name: "WaveBeat X1", category: "Altavoz", price: 89.99, description: "Altavoz bluetooth con sonido 3D y batería de 12h.", image: null, icon: <Speaker /> },
    { id: 34, name: "DataHub S4", category: "Red", price: 29.99, description: "Concentrador de datos 4 puertos USB 3.0.", image: null, icon: <Network /> },
    { id: 35, name: "UltraLens Z", category: "Gafas VR", price: 799.99, description: "Gafas VR con pantalla 8K y visión 360º.", image: null, icon: <Glasses /> },
    { id: 36, name: "PixelPad Mini", category: "Tableta", price: 199.99, description: "Tableta compacta con procesador avanzado.", image: null, icon: <Tablet /> },
    { id: 37, name: "UltraPod X", category: "Accesorio", price: 59.99, description: "Trípode para cámaras y smartphones con control remoto.", image: null, icon: <Camera /> },
    { id: 38, name: "AirLens Pro", category: "Gafas Inteligentes", price: 799.99, description: "Gafas con visión aérea 3D y seguimiento ocular.", image: null, icon: <Glasses /> },
    { id: 39, name: "FlexMice", category: "Ratón", price: 49.99, description: "Ratón ergonómico con conexión inalámbrica y batería de 10h.", image: null, icon: <Mouse /> },
    { id: 40, name: "NovaPad 12", category: "Tableta", price: 799.99, description: "Tableta de 12 pulgadas con pantalla OLED.", image: null, icon: <Tablet /> }
  ];

  const featuredProducts = products.filter(product => product.featured);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-cybera-black">
      <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url("https://github.com/JulianRosales07/Cybera/blob/main/WhatsApp%20Image%202025-02-26%20at%205.10.30%20PM.jpeg?raw=true")' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-cybera-black via-cybera-black/95 to-cybera-black/90"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nuestros <span className="text-cybera-purple">Productos</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Explora nuestra amplia gama de productos tecnológicos diseñados para satisfacer todas tus necesidades.
          </p>
        </div>
      </section>

      {/* Productos Destacados - Lista Horizontal con Scroll Mejorado */}
      {featuredProducts.length > 0 && (
        <section className="py-16 bg-cybera-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Productos Destacados</h2>
              <div className="w-24 h-1 cybera-gradient mx-auto"></div>
            </div>
            
            <div className="relative group">
              {/* Contenedor de scroll con referencia */}
              <div 
                ref={scrollContainerRef}
                className="flex overflow-x-auto space-x-6 pb-4 scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                style={{ scrollBehavior: 'smooth' }}
              >
                {/* Duplicamos los productos destacados para tener más elementos para desplazar */}
                {[...featuredProducts, ...featuredProducts, ...featuredProducts].map((product, index) => (
                  <div
                    key={`${product.id}-${index}`}
                    className="flex-shrink-0 w-80 bg-cybera-black p-6 rounded-lg transition-all hover:bg-cybera-gray/80 hover:shadow-lg hover:shadow-cybera-purple/20 snap-start"
                  >
                    <div className="flex flex-col h-full">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-semibold text-white">{product.name}</h3>
                        <div className="text-cybera-purple">
                          {product.icon}
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm mb-1">{product.category}</p>
                      <p className="text-gray-300 text-sm mb-4 flex-grow">{product.description}</p>
                      <div className="flex items-center justify-between mt-auto">
                        <span className="text-lg font-bold text-cybera-purple">${product.price.toFixed(2)}</span>
                        <div className="flex space-x-2">
                          <button 
                            onClick={() => openProductDetails(product)}
                            className="flex items-center text-white bg-cybera-black/80 px-3 py-1 rounded-md hover:bg-cybera-purple/80 transition-colors duration-300 text-sm"
                          >
                            <Info className="h-4 w-4 mr-1" />
                            Detalles
                          </button>
                          <button 
                            onClick={() => addToCart(product)}
                            className="flex items-center text-white bg-cybera-purple px-3 py-1 rounded-md hover:bg-cybera-darkPurple transition-colors duration-300 text-sm"
                          >
                            <ShoppingCart className="h-4 w-4 mr-1" />
                            Comprar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Botones de navegación con mejor estilo y posicionamiento */}
              <button 
                onClick={scrollLeft}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-cybera-black/80 hover:bg-cybera-purple text-white p-3 rounded-r-lg shadow-lg transform transition-transform duration-300 hover:scale-110 z-10 opacity-80 hover:opacity-100 focus:outline-none"
                aria-label="Desplazar a la izquierda"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              
              <button 
                onClick={scrollRight}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-cybera-black/80 hover:bg-cybera-purple text-white p-3 rounded-l-lg shadow-lg transform transition-transform duration-300 hover:scale-110 z-10 opacity-80 hover:opacity-100 focus:outline-none"
                aria-label="Desplazar a la derecha"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
              
              {/* Indicador de desplazamiento */}
              <div className="flex justify-center mt-4 space-x-2">
                <div className="w-20 h-1 bg-cybera-purple/30 rounded-full overflow-hidden">
                  <div className="h-full w-1/3 bg-cybera-purple rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Todos los Productos - Lista Vertical Tipo Tabla */}
      <section className="py-16 bg-cybera-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Todos los Productos</h2>
            <div className="w-24 h-1 cybera-gradient mx-auto"></div>
          </div>
          
          {/* Versión para pantallas grandes */}
          <div className="hidden md:block bg-cybera-dark rounded-lg overflow-hidden">
            <div className="grid grid-cols-12 gap-4 p-4 bg-cybera-gray text-gray-300 font-semibold text-sm">
              <div className="col-span-1 flex items-center justify-center">Icono</div>
              <div className="col-span-3">Producto</div>
              <div className="col-span-2">Categoría</div>
              <div className="col-span-4">Descripción</div>
              <div className="col-span-1 text-right">Precio</div>
              <div className="col-span-1"></div>
            </div>
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`grid grid-cols-12 gap-4 p-4 items-center text-gray-300 hover:bg-cybera-gray transition-all ${index < products.length - 1 ? 'border-b border-gray-700' : ''}`}
              >
                <div className="col-span-1 flex items-center justify-center text-cybera-purple">
                  {product.icon}
                </div>
                <div className="col-span-3 text-white font-medium">{product.name}</div>
                <div className="col-span-2">{product.category}</div>
                <div className="col-span-4 text-sm line-clamp-1">{product.description}</div>
                <div className="col-span-1 text-right text-cybera-purple font-bold">${product.price.toFixed(2)}</div>
                <div className="col-span-1 flex justify-center space-x-2">
                  <button 
                    onClick={() => openProductDetails(product)}
                    className="text-gray-400 hover:text-white"
                    aria-label="Ver detalles"
                  >
                    <Info className="h-5 w-5" />
                  </button>
                  <button 
                    onClick={() => addToCart(product)}
                    className="text-cybera-purple hover:text-cybera-darkPurple"
                    aria-label="Añadir al carrito"
                  >
                    <ShoppingCart className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Versión para pantallas pequeñas */}
          <div className="md:hidden space-y-4">
            {products.map((product) => (
              <div key={product.id} className="bg-cybera-gray rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="text-cybera-purple mr-3">
                    {product.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-medium">{product.name}</h3>
                    <p className="text-gray-400 text-sm">{product.category}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-3">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-cybera-purple font-bold">${product.price.toFixed(2)}</span>
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => openProductDetails(product)}
                      className="p-2 bg-cybera-black/80 rounded-md text-gray-300 hover:text-white"
                      aria-label="Ver detalles"
                    >
                      <Info className="h-5 w-5" />
                    </button>
                    <button 
                      onClick={() => addToCart(product)}
                      className="p-2 bg-cybera-purple rounded-md text-white hover:bg-cybera-darkPurple"
                      aria-label="Añadir al carrito"
                    >
                      <ShoppingCart className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal de detalles del producto */}
      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={closeProductDetails} 
        />
      )}
    </div>
  );
};

export default ProductsPage;