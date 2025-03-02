import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Cpu } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-cybera-black/90 backdrop-blur-sm border-b border-cybera-purple/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center">
              <Cpu className="h-8 w-8 text-cybera-purple" />
              <span className="ml-2 text-xl font-bold text-white">Cybera <span className="text-cybera-purple">Technology</span></span>
            </NavLink>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to="/" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
                Sobre Nosotros
              </NavLink>
              <NavLink to="/products" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
                Productos
              </NavLink>
              <NavLink to="/locations" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
                Sedes
              </NavLink>
              <NavLink to="/contact" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
                Contacto
              </NavLink>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-cybera-purple hover:text-white hover:bg-cybera-purple/20 focus:outline-none"
            >
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-cybera-gray/90 backdrop-blur-sm">
            <NavLink
              to="/"
              className={({isActive}) => 
                isActive 
                  ? "block px-3 py-2 rounded-md text-base font-medium text-cybera-purple bg-cybera-purple/10" 
                  : "block px-3 py-2 rounded-md text-base font-medium text-cybera-light hover:text-cybera-purple hover:bg-cybera-purple/10"
              }
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              className={({isActive}) => 
                isActive 
                  ? "block px-3 py-2 rounded-md text-base font-medium text-cybera-purple bg-cybera-purple/10" 
                  : "block px-3 py-2 rounded-md text-base font-medium text-cybera-light hover:text-cybera-purple hover:bg-cybera-purple/10"
              }
              onClick={() => setIsOpen(false)}
            >
              Products
            </NavLink>
            <NavLink
              to="/locations"
              className={({isActive}) => 
                isActive 
                  ? "block px-3 py-2 rounded-md text-base font-medium text-cybera-purple bg-cybera-purple/10" 
                  : "block px-3 py-2 rounded-md text-base font-medium text-cybera-light hover:text-cybera-purple hover:bg-cybera-purple/10"
              }
              onClick={() => setIsOpen(false)}
            >
              Locations
            </NavLink>
            <NavLink
              to="/contact"
              className={({isActive}) => 
                isActive 
                  ? "block px-3 py-2 rounded-md text-base font-medium text-cybera-purple bg-cybera-purple/10" 
                  : "block px-3 py-2 rounded-md text-base font-medium text-cybera-light hover:text-cybera-purple hover:bg-cybera-purple/10"
              }
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;