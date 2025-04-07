import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
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
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <ScrollToTop />
      
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <img
          src="/media/contactus.png"
          alt="Contact Us"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={400}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-white/90">Get in touch with our travel experts</p>
          </div>
        </div>
      </section>
      
      {/* Contact Content */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6 md:space-y-8 order-2 md:order-1"
              >
                <h2 className="text-xl md:text-2xl font-bold text-sit-dark mb-4">Contact Information</h2>
                <div className="space-y-6 md:space-y-8">
                  {/* Delhi Office */}
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-sit-red mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-sit-dark mb-1">Delhi Office</h3>
                      <p className="text-sit-dark/70 text-justify">
                        S/F, KH No.395, Malik A-83, SIT, Second Floor,<br />
                        Plot No, A-Block, Rd Number 2,<br />
                        Mahipalpur, Delhi – 110037
                      </p>
                    </div>
                  </div>

                  {/* Mumbai Office */}
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-sit-red mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-sit-dark mb-1">Mumbai Office</h3>
                      <p className="text-sit-dark/70 text-justify">
                        Office No. 203, 2nd Floor, Business Point,<br />
                        Plot No. 1, Andheri East,<br />
                        Mumbai, Maharashtra - 400069
                      </p>
                    </div>
                  </div>

                  {/* Bangalore Office */}
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-sit-red mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-sit-dark mb-1">Bangalore Office</h3>
                      <p className="text-sit-dark/70 text-justify">
                        #123, 1st Floor, Brigade Road,<br />
                        Near MG Road Metro Station,<br />
                        Bangalore, Karnataka - 560001
                      </p>
                    </div>
                  </div>

                  {/* Kolkata Office */}
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-sit-red mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-sit-dark mb-1">Kolkata Office</h3>
                      <p className="text-sit-dark/70 text-justify">
                        45A, Park Street, 3rd Floor,<br />
                        Near Park Street Metro,<br />
                        Kolkata, West Bengal - 700016
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-sit-red mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-sit-dark mb-1">Phone</h3>
                      <p className="text-sit-dark/70">
                        <a href="tel:+918178840574" className="hover:text-sit-red transition-colors">
                          +91-8178840574
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-sit-red mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-sit-dark mb-1">Email</h3>
                      <p className="text-sit-dark/70">
                        <a href="mailto:info@sittravels.com" className="hover:text-sit-red transition-colors">
                          info@sittravels.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-1 md:order-2"
              >
                <h2 className="text-xl md:text-2xl font-bold text-sit-dark mb-4">Send us a Message</h2>
                <form className="space-y-4 md:space-y-6 bg-white p-6 md:p-8 rounded-lg shadow-md" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-sit-dark mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sit-red/50 focus:border-sit-red transition-all duration-200 bg-red-50/30"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-sit-dark mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sit-red/50 focus:border-sit-red transition-all duration-200 bg-red-50/30"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-sit-dark mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sit-red/50 focus:border-sit-red transition-all duration-200 bg-red-50/30"
                      placeholder="What is this regarding?"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-sit-dark mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sit-red/50 focus:border-sit-red transition-all duration-200 resize-none bg-red-50/30"
                      placeholder="Enter your message"
                      required
                    ></textarea>
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full px-4 md:px-6 py-2 md:py-3 bg-sit-red text-white font-medium rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg text-sm md:text-base"
                  >
                    Send Message
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Offices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Delhi Office */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Delhi Office</h3>
              <p className="text-gray-600">
                S/F, KH No.395, Malik A-83, SIT, Second Floor, Plot No, A-Block, Rd Number 2, Mahipalpur, Delhi – 110037
              </p>
            </div>

            {/* Ghaziabad Office */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Ghaziabad Office</h3>
              <p className="text-gray-600">
                Shop No.2, C -1/10, Block A, Ankur Vihar, DLF Ankur Vihar, Ghaziabad, Uttar Pradesh – 201102
              </p>
            </div>

            {/* Mahabaleshwar Office */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Mahabaleshwar Office</h3>
              <p className="text-gray-600">
                Shop 201, Beside Ganesh Medical, Murray Peth, Mahabaleshwar, Maharashtra – 412806
              </p>
            </div>

            {/* Latur Office */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Latur Office</h3>
              <p className="text-gray-600">
                Shop No.02, Avanti Nagar Ring Road, Beside Kailash Bar, Opp. MIDC Police Station, MIDC, Latur, Maharashtra – 413512
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
