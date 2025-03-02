import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, MessageSquare, User, AtSign } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setSendStatus('');

    const serviceID = 'service_jh8i7g4';    // Reemplaza con tu Service ID
    const templateID = 'template_v750tp4';  // Reemplaza con tu Template ID
    const publicKey = 'TH_MX9zLvJWLzaEA2';    // Reemplaza con tu Public Key

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      reply_to: formData.email,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSendStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      })
      .catch((error) => {
        console.log('FAILED...', error);
        setSendStatus('error');
        alert('Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.');
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <div>
      {/* Sección Principal */}
      <section className="relative py-20 bg-cybera-black">
        <div className="absolute inset-0 bg-tech-pattern bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-cybera-black via-cybera-black/95 to-cybera-black/90"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contacta con <span className="text-cybera-purple">Nosotros</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            ¿Tienes preguntas o necesitas ayuda? Estamos aquí para ayudarte. Contacta con nuestro equipo.
          </p>
        </div>
      </section>

      {/* Formulario de Contacto e Información */}
      <section className="py-16 bg-cybera-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulario de Contacto */}
            <div className="cybera-card">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <MessageSquare className="h-6 w-6 text-cybera-purple mr-2" />
                Envíanos un Mensaje
              </h2>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-300 mb-2 flex items-center">
                    <User className="h-4 w-4 text-cybera-purple mr-2" />
                    Tu Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="cybera-input w-full"
                    placeholder="Juan Pérez"
                    disabled={isSending}
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-300 mb-2 flex items-center">
                    <AtSign className="h-4 w-4 text-cybera-purple mr-2" />
                    Tu Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="cybera-input w-full"
                    placeholder="juan@ejemplo.com"
                    disabled={isSending}
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-gray-300 mb-2 flex items-center">
                    <Mail className="h-4 w-4 text-cybera-purple mr-2" />
                    Asunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="cybera-input w-full"
                    placeholder="¿Cómo podemos ayudarte?"
                    disabled={isSending}
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-300 mb-2 flex items-center">
                    <MessageSquare className="h-4 w-4 text-cybera-purple mr-2" />
                    Tu Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="cybera-input w-full"
                    placeholder="Por favor, proporciona detalles sobre tu consulta..."
                    disabled={isSending}
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="cybera-button w-full flex items-center justify-center"
                  disabled={isSending}
                >
                  <Send className="h-4 w-4 mr-2" />
                  {isSending ? 'Enviando...' : 'Enviar Mensaje'}
                </button>

                {sendStatus === 'success' && (
                  <p className="text-green-500 mt-2 text-center">Mensaje enviado exitosamente</p>
                )}
                {sendStatus === 'error' && (
                  <p className="text-red-500 mt-2 text-center">Error al enviar el mensaje</p>
                )}
              </form>
            </div>
            
            {/* Información de Contacto */}
            <div>
              <div className="cybera-card mb-8">
                <h2 className="text-2xl font-bold text-white mb-6">Información de Contacto</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full cybera-gradient flex items-center justify-center mr-4">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Oficina Principal</h3>
                      <p className="text-gray-300">Carrera 25 #18-59</p>
                      <p className="text-gray-300">Cybera Tecnology - Pasto</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full cybera-gradient flex items-center justify-center mr-4">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Teléfono</h3>
                      <p className="text-gray-300">+57 318-602-5827</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full cybera-gradient flex items-center justify-center mr-4">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Correo Electrónico</h3>
                      <p className="text-gray-300">pasto@cyberatechnology.com</p>
                      <p className="text-gray-300">soporte@cyberatechnology.com</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="cybera-card">
                <h2 className="text-2xl font-bold text-white mb-6">Horario de Atención</h2>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Lunes - Viernes:</span>
                    <span className="text-white">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Sábado:</span>
                    <span className="text-white">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Domingo:</span>
                    <span className="text-white">Cerrado</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-cybera-purple/20">
                  <p className="text-gray-300">
                    Para asuntos urgentes fuera del horario laboral, envía un correo a nuestro equipo de soporte 24/7 a 
                    <a href="mailto:urgente@cyberatechnology.com" className="text-cybera-purple ml-1">
                      urgente@cyberatechnology.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección del Mapa */}
      <section className="py-16 bg-cybera-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Encuéntranos</h2>
            <div className="w-24 h-1 cybera-gradient mx-auto"></div>
          </div>
          
          <div className="cybera-card overflow-hidden">
            <img 
              src="https://www.jyainmobiliaria.com/wp-content/uploads/2022/04/PASTO2.jpg" 
              alt="Ubicación en el mapa" 
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Sección de Preguntas Frecuentes */}
      <section className="py-16 bg-cybera-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Preguntas Frecuentes</h2>
            <div className="w-24 h-1 cybera-gradient mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="cybera-card">
              <h3 className="text-xl font-bold text-white mb-3">¿Cuál es el horario de atención al cliente?</h3>
              <p className="text-gray-300">
                Nuestro equipo de atención al cliente está disponible de lunes a viernes de 9:00 AM a 6:00 PM, 
                y sábados de 10:00 AM a 4:00 PM. Para asuntos urgentes, ofrecemos soporte por correo electrónico 24/7.
              </p>
            </div>
            
            <div className="cybera-card">
              <h3 className="text-xl font-bold text-white mb-3">¿Cómo puedo solicitar una demostración del producto?</h3>
              <p className="text-gray-300">
                Puedes solicitar una demostración del producto completando el formulario de contacto en esta página 
                o enviando un correo a demos@cyberatechnology.com con tus requisitos específicos.
              </p>
            </div>
            
            <div className="cybera-card">
              <h3 className="text-xl font-bold text-white mb-3">¿Ofrecen soporte técnico para sus productos?</h3>
              <p className="text-gray-300">
                Sí, proporcionamos soporte técnico completo para todos nuestros productos. Puedes contactar a nuestro 
                equipo de soporte técnico en soporte@cyberatechnology.com o llamar a nuestra línea dedicada de soporte.
              </p>
            </div>
            
            <div className="cybera-card">
              <h3 className="text-xl font-bold text-white mb-3">¿Cómo puedo solicitar empleo en Cybera Technology?</h3>
              <p className="text-gray-300">
                Siempre estamos buscando personas talentosas para unirse a nuestro equipo. Por favor, envía tu currículum 
                y carta de presentación a carreras@cyberatechnology.com o visita nuestra página de carreras.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;