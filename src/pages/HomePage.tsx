import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Zap, Shield, Globe } from 'lucide-react';

const HomePage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Function to create animated characters with staggered delay
  const AnimatedText = ({ text, className = "" }: { text: string, className?: string }) => {
    return (
      <span className={className}>
        {text.split('').map((char, index) => (
          <span 
            key={index} 
            className="animated-char"
            style={{ 
              animationDelay: `${0.1 * index}s`,
              display: char === ' ' ? 'inline' : 'inline-block'
            }}
          >
            {char}
          </span>
        ))}
      </span>
    );
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-tech-pattern bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-cybera-black via-cybera-black/90 to-cybera-black/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <Cpu className={`h-20 w-20 text-cybera-purple mb-6 ${isLoaded ? 'animate-bounce' : ''}`} />
          <h1 className={`text-4xl md:text-6xl font-bold text-white mb-4 animated-title ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <AnimatedText text="Welcome to " />
            <span className="text-cybera-purple">
              <AnimatedText text=" Cybera Technology" />
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-8" style={{ 
            animation: isLoaded ? 'fadeIn 1s ease-out 0.5s forwards, slideInFromBottom 1s ease-out 0.5s forwards' : 'none',
            opacity: 0
          }}>
            Pioneering the future with cutting-edge technology solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4" style={{ 
            animation: isLoaded ? 'fadeIn 1s ease-out 0.8s forwards, slideInFromBottom 1s ease-out 0.8s forwards' : 'none',
            opacity: 0
          }}>
            <Link to="/products" className="cybera-button">
              Explore Products
            </Link>
            <Link to="/contact" className="px-6 py-2 rounded-md font-semibold text-white border border-cybera-purple/50 hover:bg-cybera-purple/10 transition-all duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-cybera-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About <span className="text-cybera-purple">Cybera Technology</span></h2>
            <div className="w-24 h-1 cybera-gradient mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Story</h3>
              <p className="text-gray-300 mb-6">
                Founded in 2015, Cybera Technology emerged from a vision to transform how people interact with technology. 
                What began as a small startup has evolved into a global leader in innovative tech solutions, driven by our 
                passion for creating products that enhance lives and businesses.
              </p>
              <p className="text-gray-300">
                Our journey has been marked by breakthrough innovations, strategic partnerships, and a relentless 
                commitment to excellence. Today, we stand at the forefront of technological advancement, constantly 
                pushing boundaries and redefining what's possible.
              </p>
            </div>
            <div className="cybera-card">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070" 
                alt="Cybera Technology Office" 
                className="rounded-lg w-full h-auto shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-cybera-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="cybera-card">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Zap className="h-6 w-6 text-cybera-purple mr-2" />
                Our Mission
              </h3>
              <p className="text-gray-300">
                At Cybera Technology, our mission is to develop innovative, accessible, and sustainable technology 
                solutions that empower individuals and organizations to achieve their full potential. We are committed 
                to creating products that not only solve today's challenges but anticipate tomorrow's needs, all while 
                maintaining the highest standards of quality, security, and ethical responsibility.
              </p>
            </div>
            
            <div className="cybera-card">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Globe className="h-6 w-6 text-cybera-purple mr-2" />
                Our Vision
              </h3>
              <p className="text-gray-300">
                We envision a world where technology seamlessly integrates into every aspect of life, enhancing human 
                capabilities and creating a more connected, efficient, and equitable global community. Cybera Technology 
                aims to be at the forefront of this transformation, recognized globally as a leader in technological 
                innovation that prioritizes human-centered design, sustainability, and positive social impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-cybera-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What We <span className="text-cybera-purple">Do</span></h2>
            <div className="w-24 h-1 cybera-gradient mx-auto"></div>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
              We specialize in creating cutting-edge technology solutions across multiple domains
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cybera-card">
              <div className="h-12 w-12 cybera-gradient rounded-lg flex items-center justify-center mb-6">
                <Cpu className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Hardware Innovation</h3>
              <p className="text-gray-300">
                We design and manufacture state-of-the-art hardware components and devices that power the next generation of technology solutions.
              </p>
            </div>
            
            <div className="cybera-card">
              <div className="h-12 w-12 cybera-gradient rounded-lg flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Cybersecurity Solutions</h3>
              <p className="text-gray-300">
                Our advanced security systems protect businesses and individuals from evolving digital threats in an increasingly connected world.
              </p>
            </div>
            
            <div className="cybera-card">
              <div className="h-12 w-12 cybera-gradient rounded-lg flex items-center justify-center mb-6">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Digital Transformation</h3>
              <p className="text-gray-300">
                We help organizations embrace digital technologies to revolutionize their operations, customer experiences, and business models.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/products" className="cybera-button">
              Explore Our Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;