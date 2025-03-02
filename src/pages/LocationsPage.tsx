import React from 'react';
import { MapPin, Phone, Mail, Globe, Building } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Location type definition
interface Location {
  id: number;
  name: string;
  address: string;
  city: string;
  country: string;
  phone: string;
  email: string;
  image: string;
  description: string;
  isHeadquarters?: boolean;
  coordinates: {
    lat: number;
    lng: number;
  };
}

// Fix for Leaflet marker icons
// This is needed because Leaflet's default marker icons have issues with bundlers like Vite
const fixLeafletIcon = () => {
  // Fix marker icons
  delete (L.Icon.Default.prototype as any)._getIconUrl;
  
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  });
};

// Custom marker icon
const createCustomIcon = () => {
  return new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-violet.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
};

const LocationsPage: React.FC = () => {
  // Fix Leaflet icons on component mount
  React.useEffect(() => {
    fixLeafletIcon();
  }, []);

  const customIcon = React.useMemo(() => createCustomIcon(), []);

  const locations: Location[] = [
    {
      id: 1,
      name: "Cybera Tecnology - San Francisco",
      address: "123 Avenida Tech",
      city: "San Francisco",
      country: "Estados Unidos",
      phone: "+1 (555) 123-4567",
      email: "sf@cyberatechnology.com",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/San_Francisco_from_Twin_Peaks_September_2013_panorama_5_edit.jpg/1000px-San_Francisco_from_Twin_Peaks_September_2013_panorama_5_edit.jpg",
      description: "Nuestra sede central global alberga nuestro equipo ejecutivo, instalaciones principales de I+D y laboratorios de innovación.",
      isHeadquarters: true,
      coordinates: {
        lat: 37.7749,
        lng: -122.4194
      }
    },
    {
      id: 2,
      name: "Cybera Tecnology - Madrid",
      address: "45 Calle Digital",
      city: "Madrid",
      country: "España",
      phone: "+34 91 123 4567",
      email: "madrid@cyberatechnology.com",
      image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&q=80&w=2070",
      description: "Nuestra sede europea principal que atiende a clientes en España y el sur de Europa.",
      coordinates: {
        lat: 40.4168,
        lng: -3.7038
      }
    },
    {
      id: 3,
      name: "Cybera Tecnology - Pasto",
      address: "Carrera 25 #18-59",
      city: "Pasto, Nariño",
      country: "Colombia",
      phone: "+57 3186025827",
      email: "pasto@cyberatechnology.com",
      image: "https://www.jyainmobiliaria.com/wp-content/uploads/2022/04/PASTO2.jpg",
      description: "Nuestra sede en Colombia que atiende a toda la región andina con servicios especializados.",
      coordinates: {
        lat: 1.2136,
        lng: -77.2811
      }
    },
    {
      id: 4,
      name: "Cybera Tecnology - Alemania",
      address: "Innovationsstraße 20",
      city: "Berlín",
      country: "Alemania",
      phone: "+49 30 1234 5678",
      email: "berlin@cyberatechnology.com",
      image: "https://www.riu.com/blog/wp-content/uploads/2023/06/torre-de-la-television-berlin.jpg",
      description: "Centro de innovación tecnológica para el mercado europeo con laboratorios de última generación.",
      coordinates: {
        lat: 52.5200,
        lng: 13.4050
      }
    }
  ];

  // Separate headquarters from other locations
  const headquarters = locations.find(location => location.isHeadquarters);
  const otherLocations = locations.filter(location => !location.isHeadquarters);

  return (
    <div>
      {/* Sección Principal */}
      <section className="relative py-20 bg-cybera-black">
        <div className="absolute inset-0 bg-tech-pattern bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-cybera-black via-cybera-black/95 to-cybera-black/90"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nuestras <span className="text-cybera-purple">Ubicaciones</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Con oficinas en todo el mundo, estamos posicionados para servir a nuestra base de clientes global con experiencia local
          </p>
        </div>
      </section>

      {/* Mapa Interactivo
      <section className="py-16 bg-cybera-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Mapa Global de Ubicaciones</h2>
            <div className="w-24 h-1 cybera-gradient mx-auto"></div>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
              Explora nuestras oficinas alrededor del mundo
            </p>
          </div>
          
          <div className="cybera-card overflow-hidden">
            <div className="w-full h-[500px] rounded-lg">
              <MapContainer 
                center={[30, 0]} 
                zoom={2} 
                style={{ height: '100%', width: '100%' }}
                className="z-0"
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  className="dark-map"
                />
                {locations.map(location => (
                  <Marker 
                    key={location.id} 
                    position={[location.coordinates.lat, location.coordinates.lng]}
                    icon={customIcon}
                  >
                    <Popup>
                      <div className="text-gray-800">
                        <h3 className="font-bold text-lg">{location.name}</h3>
                        <p>{location.city}, {location.country}</p>
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
            <div className="mt-6 text-center">
              <p className="text-gray-300">
                Haz clic en los marcadores para ver más información sobre cada ubicación
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Sede Central */}
      {headquarters && (
        <section className="py-16 bg-cybera-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Sede Central Global</h2>
              <div className="w-24 h-1 cybera-gradient mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="overflow-hidden rounded-lg">
                <img 
                  src={headquarters.image} 
                  alt={headquarters.name} 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              <div className="cybera-card">
                <div className="flex items-center mb-4">
                  <Building className="h-6 w-6 text-cybera-purple mr-2" />
                  <h3 className="text-2xl font-bold text-white">{headquarters.name}</h3>
                </div>
                
                <p className="text-gray-300 mb-6">{headquarters.description}</p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-cybera-purple mr-3 mt-1" />
                    <div>
                      <p className="text-white">{headquarters.address}</p>
                      <p className="text-gray-400">{headquarters.city}, {headquarters.country}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-cybera-purple mr-3" />
                    <p className="text-gray-300">{headquarters.phone}</p>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-cybera-purple mr-3" />
                    <p className="text-gray-300">{headquarters.email}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Oficinas Globales */}
      <section className="py-16 bg-cybera-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Oficinas Globales</h2>
            <div className="w-24 h-1 cybera-gradient mx-auto"></div>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
              Nuestra presencia internacional nos permite servir mejor a nuestros clientes en todo el mundo
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherLocations.map(location => (
              <div key={location.id} className="cybera-card">
                <div className="overflow-hidden rounded-lg mb-6">
                  <img 
                    src={location.image} 
                    alt={location.name} 
                    className="w-full h-48 object-cover"
                  />
                </div>
                
                <div className="flex items-center mb-3">
                  <Globe className="h-5 w-5 text-cybera-purple mr-2" />
                  <h3 className="text-xl font-bold text-white">{location.name}</h3>
                </div>
                
                <p className="text-gray-300 mb-4">{location.description}</p>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-cybera-purple mr-2 mt-1" />
                    <div>
                      <p className="text-white">{location.address}</p>
                      <p className="text-gray-400">{location.city}, {location.country}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-cybera-purple mr-2" />
                    <p className="text-gray-300">{location.phone}</p>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-cybera-purple mr-2" />
                    <p className="text-gray-300">{location.email}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LocationsPage;