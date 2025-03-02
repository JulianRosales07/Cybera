import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-cybera-gray border-t border-cybera-purple/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <Cpu className="h-8 w-8 text-cybera-purple" />
              <span className="ml-2 text-xl font-bold text-white">Cybera <span className="text-cybera-purple">Technology</span></span>
            </div>
            <p className="mt-4 text-sm text-gray-300">
              Liderando el futuro con soluciones tecnológicas innovadoras para un mundo conectado.
            </p>
            <div className="flex mt-6 space-x-4">
              <a href="#" className="text-gray-400 hover:text-cybera-purple">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cybera-purple">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cybera-purple">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cybera-purple">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Navegación</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-cybera-purple">Inicio</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-cybera-purple">Productos</Link>
              </li>
              <li>
                <Link to="/locations" className="text-gray-300 hover:text-cybera-purple">Ubicaciones</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-cybera-purple">Contacto</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-cybera-purple">Política de Privacidad</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-cybera-purple">Términos de Servicio</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-cybera-purple">Política de Cookies</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Contacto</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-cybera-purple mr-2" />
                <span className="text-gray-300">Cybera Tecnology - Pasto</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-cybera-purple mr-2" />
                <span className="text-gray-300">+57 318-602-5827</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-cybera-purple mr-2" />
                <span className="text-gray-300">pasto@cyberatechnology.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-cybera-purple/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-base text-gray-400">
            &copy; {new Date().getFullYear()} Cybera Technology. Todos los derechos reservados.
          </p>
          <p className="mt-4 md:mt-0 text-sm text-gray-400">
            Diseñado con <span className="text-cybera-purple">♥</span> para el futuro
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;