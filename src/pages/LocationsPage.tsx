import React from 'react';
import { MapPin, Phone, Mail, Globe, Building } from 'lucide-react';

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
}

const LocationsPage: React.FC = () => {
  // Sample locations data (you can replace this with actual data)
  const locations: Location[] = [
    {
      id: 1,
      name: "Global Headquarters",
      address: "123 Tech Avenue",
      city: "San Francisco",
      country: "United States",
      phone: "+1 (555) 123-4567",
      email: "sf@cyberatechnology.com",
      image: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&q=80&w=2070",
      description: "Our global headquarters houses our executive team, main R&D facilities, and innovation labs.",
      isHeadquarters: true
    },
    {
      id: 2,
      name: "European Office",
      address: "45 Digital Street",
      city: "London",
      country: "United Kingdom",
      phone: "+44 20 1234 5678",
      email: "london@cyberatechnology.com",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=2070",
      description: "Our European headquarters serving clients across the EU and UK markets."
    },
    {
      id: 3,
      name: "Asia Pacific Center",
      address: "888 Innovation Tower",
      city: "Tokyo",
      country: "Japan",
      phone: "+81 3 1234 5678",
      email: "tokyo@cyberatechnology.com",
      image: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?auto=format&fit=crop&q=80&w=2036",
      description: "Strategic location for our Asia Pacific operations and specialized R&D facilities."
    },
    {
      id: 4,
      name: "Latin America Office",
      address: "567 Tech Park",
      city: "São Paulo",
      country: "Brazil",
      phone: "+55 11 1234 5678",
      email: "saopaulo@cyberatechnology.com",
      image: "https://images.unsplash.com/photo-1554168848-228452c09d60?auto=format&fit=crop&q=80&w=2070",
      description: "Serving our growing customer base across Latin America with localized support and services."
    }
  ];

  // Separate headquarters from other locations
  const headquarters = locations.find(location => location.isHeadquarters);
  const otherLocations = locations.filter(location => !location.isHeadquarters);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-cybera-black">
        <div className="absolute inset-0 bg-tech-pattern bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-cybera-black via-cybera-black/95 to-cybera-black/90"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-cybera-purple">Locations</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            With offices around the world, we're positioned to serve our global customer base with local expertise
          </p>
        </div>
      </section>

      {/* Headquarters */}
      {headquarters && (
        <section className="py-16 bg-cybera-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Global Headquarters</h2>
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

      {/* Global Offices */}
      <section className="py-16 bg-cybera-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Global Offices</h2>
            <div className="w-24 h-1 cybera-gradient mx-auto"></div>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
              Our international presence enables us to better serve our clients worldwide
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

      {/* World Map Section */}
      <section className="py-16 bg-cybera-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Global Presence</h2>
            <div className="w-24 h-1 cybera-gradient mx-auto"></div>
          </div>
          
          <div className="cybera-card">
            <img 
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?auto=format&fit=crop&q=80&w=2033" 
              alt="World Map" 
              className="w-full h-auto rounded-lg"
            />
            <div className="mt-6 text-center">
              <p className="text-gray-300">
                With offices in 4 continents, we're positioned to serve clients globally with local expertise and support.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LocationsPage;