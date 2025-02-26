import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, User, AtSign } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-cybera-black">
        <div className="absolute inset-0 bg-tech-pattern bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-cybera-black via-cybera-black/95 to-cybera-black/90"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contact <span className="text-cybera-purple">Us</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Have questions or need assistance? We're here to help. Reach out to our team.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-cybera-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="cybera-card">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <MessageSquare className="h-6 w-6 text-cybera-purple mr-2" />
                Send Us a Message
              </h2>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-300 mb-2 flex items-center">
                    <User className="h-4 w-4 text-cybera-purple mr-2" />
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="cybera-input w-full"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-300 mb-2 flex items-center">
                    <AtSign className="h-4 w-4 text-cybera-purple mr-2" />
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="cybera-input w-full"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-gray-300 mb-2 flex items-center">
                    <Mail className="h-4 w-4 text-cybera-purple mr-2" />
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="cybera-input w-full"
                    placeholder="How can we help you?"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-300 mb-2 flex items-center">
                    <MessageSquare className="h-4 w-4 text-cybera-purple mr-2" />
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="cybera-input w-full"
                    placeholder="Please provide details about your inquiry..."
                  ></textarea>
                </div>
                
                <button type="submit" className="cybera-button w-full flex items-center justify-center">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div>
              <div className="cybera-card mb-8">
                <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full cybera-gradient flex items-center justify-center mr-4">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Main Office</h3>
                      <p className="text-gray-300">123 Tech Avenue, Digital City</p>
                      <p className="text-gray-300">San Francisco, CA 94105</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full cybera-gradient flex items-center justify-center mr-4">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Phone</h3>
                      <p className="text-gray-300">+1 (555) 123-4567</p>
                      <p className="text-gray-300">+1 (555) 987-6543</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full cybera-gradient flex items-center justify-center mr-4">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Email</h3>
                      <p className="text-gray-300">info@cyberatechnology.com</p>
                      <p className="text-gray-300">support@cyberatechnology.com</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="cybera-card">
                <h2 className="text-2xl font-bold text-white mb-6">Business Hours</h2>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Monday - Friday:</span>
                    <span className="text-white">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Saturday:</span>
                    <span className="text-white">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Sunday:</span>
                    <span className="text-white">Closed</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-cybera-purple/20">
                  <p className="text-gray-300">
                    For urgent matters outside of business hours, please email our 24/7 support team at 
                    <a href="mailto:urgent@cyberatechnology.com" className="text-cybera-purple ml-1">
                      urgent@cyberatechnology.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-cybera-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Find Us</h2>
            <div className="w-24 h-1 cybera-gradient mx-auto"></div>
          </div>
          
          <div className="cybera-card overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=2144" 
              alt="Map location" 
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-cybera-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <div className="w-24 h-1 cybera-gradient mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="cybera-card">
              <h3 className="text-xl font-bold text-white mb-3">What are your customer service hours?</h3>
              <p className="text-gray-300">
                Our customer service team is available Monday through Friday from 9:00 AM to 6:00 PM, 
                and Saturday from 10:00 AM to 4:00 PM. For urgent matters, we offer 24/7 email support.
              </p>
            </div>
            
            <div className="cybera-card">
              <h3 className="text-xl font-bold text-white mb-3">How can I request a product demo?</h3>
              <p className="text-gray-300">
                You can request a product demonstration by filling out the contact form on this page 
                or by emailing demos@cyberatechnology.com with your specific requirements.
              </p>
            </div>
            
            <div className="cybera-card">
              <h3 className="text-xl font-bold text-white mb-3">Do you offer technical support for your products?</h3>
              <p className="text-gray-300">
                Yes, we provide comprehensive technical support for all our products. You can reach our 
                technical support team at support@cyberatechnology.com or call our dedicated support line.
              </p>
            </div>
            
            <div className="cybera-card">
              <h3 className="text-xl font-bold text-white mb-3">How can I apply for a job at Cybera Technology?</h3>
              <p className="text-gray-300">
                We're always looking for talented individuals to join our team. Please send your resume 
                and cover letter to careers@cyberatechnology.com or visit our careers page.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;