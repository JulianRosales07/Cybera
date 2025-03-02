import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Zap, Shield, Globe } from 'lucide-react';

const HomePage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="digital-rain relative">
      {/* Cursor Effect */}
      <div
        className="cursor-effect"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`
        }}
      ></div>

      {/* Sección Hero */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{ backgroundImage: 'url("https://github.com/JulianRosales07/Cybera/blob/main/WhatsApp%20Image%202025-02-26%20at%205.10.30%20PM.jpeg?raw=true")' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-cybera-black via-cybera-black/90 to-cybera-black/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <Cpu className={`h-20 w-20 text-cybera-purple mb-6 floating ${isLoaded ? 'opacity-100' : 'opacity-0'}`} />
          
          <h1 className={`text-4xl md:text-6xl font-bold mb-4 futuristic-title ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <span className="welcome">
              <span className="glitch">B</span>
              <span className="glitch">i</span>
              <span className="glitch">e</span>
              <span className="glitch">n</span>
              <span className="glitch">v</span>
              <span className="glitch">e</span>
              <span className="glitch">n</span>
              <span className="glitch">i</span>
              <span className="glitch">d</span>
              <span className="glitch">o</span>
              <span> </span>
              <span className="glitch">a</span>
            </span>
            <span className="company">
              Cybera Technology
            </span>
          </h1>
          
          <p className={`text-xl md:text-2xl text-gray-300 max-w-3xl mb-8 transition-opacity duration-1000 ease-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            Pioneros del futuro con soluciones tecnológicas de vanguardia
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 transition-opacity duration-1000 ease-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <Link to="/products" className="cybera-button">
              Explorar Productos
            </Link>
            <Link to="/contact" className="px-6 py-2 rounded-md font-semibold text-white border border-cybera-purple/50 hover:bg-cybera-purple/10 transition-all duration-300">
              Contáctanos
            </Link>
          </div>
        </div>
      </section>

      {/* Sección Acerca de */}
      <section className="py-20 bg-cybera-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Acerca de <span className="text-cybera-purple">Cybera Technology</span></h2>
            <div className="w-24 h-1 cybera-gradient mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Nuestra Historia</h3>
              <p className="text-gray-300 mb-6">
              Nuestra empresa nació con la pasión por conectar a las personas y las organizaciones con lo mejor de la tecnología. Fundada con el propósito de ser un puente entre las marcas tecnológicas más reconocidas del mundo y los consumidores a nivel nacional, hemos crecido consolidando una trayectoria de compromiso, calidad y confianza. Desde el primer día, nos enfocamos en construir relaciones sólidas basadas en la transparencia y la excelencia, asegurando que cada cliente reciba lo mejor en productos y servicios tecnológicos.
              </p>
              <p className="text-gray-300">
              Desde nuestros inicios, apostamos por una estructura multicanal innovadora que nos permite llevar los avances tecnológicos más recientes a hogares, oficinas y empresas, adaptándonos siempre a las necesidades cambiantes del mercado y de nuestros clientes. Este enfoque nos ha permitido no solo mantenernos a la vanguardia, sino también ofrecer soluciones personalizadas que impulsan el crecimiento y la eficiencia de quienes confían en nosotros. Nuestra historia es un reflejo de dedicación, evolución y un compromiso inquebrantable con la excelencia en el ámbito tecnológico.
              </p>
            </div>
            <div className="cybera-card">
              <img 
                src="https://github.com/JulianRosales07/Cybera/blob/main/WhatsApp%20Image%202025-02-26%20at%205.10.30%20PM.jpeg?raw=true" 
                alt="Cybera Technology Office" 
                className="rounded-lg w-full h-auto shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sección Misión y Visión */}
      <section className="py-20 bg-cybera-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="cybera-card">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Zap className="h-6 w-6 text-cybera-purple mr-2" />
                Nuestra Misión
              </h3>
              <p className="text-gray-300">
              Ser el referente nacional en la distribución de productos tecnológicos, reconocidos por nuestra capacidad de ofrecer soluciones innovadoras y accesibles que transforman la manera en que las personas interactúan con la tecnología en su día a día. Aspiramos a liderar el mercado a través de la excelencia operativa y la constante evolución de nuestros servicios, manteniendo siempre un enfoque en la satisfacción del cliente y la adopción de las tendencias más avanzadas del sector.
              </p>
            </div>
            
            <div className="cybera-card">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Globe className="h-6 w-6 text-cybera-purple mr-2" />
                Nuestra Visión
              </h3>
              <p className="text-gray-300">
              Facilitar el acceso a la tecnología de vanguardia mediante la distribución eficiente de dispositivos móviles, accesorios electrónicos y soluciones para el hogar y la oficina de marcas líderes a nivel mundial. Nos dedicamos a construir una experiencia multicanal que garantice disponibilidad, calidad y confianza, impulsando la innovación tecnológica como un motor de progreso para nuestros clientes y la sociedad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Qué Hacemos */}
      <section className="py-20 bg-cybera-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Qué <span className="text-cybera-purple">Hacemos</span></h2>
            <div className="w-24 h-1 cybera-gradient mx-auto"></div>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            En nuestra empresa, nos dedicamos a distribuir productos tecnológicos de marcas reconocidas a nivel nacional, ofreciendo un catálogo diverso que incluye dispositivos móviles, accesorios electrónicos y soluciones innovadoras para el hogar y la oficina.
            </p>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/products" className="cybera-button">
              Explorar Nuestros Productos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;