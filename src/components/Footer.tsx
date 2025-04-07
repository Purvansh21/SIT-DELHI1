import React from "react";
import { Mail, Phone, MapPin, Instagram, Twitter, Facebook, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* About Us */}
          <div className="text-center md:text-left">
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">About Us</h3>
            <p className="text-sm md:text-base text-gray-400">
              SIT Global Voyager is your trusted partner for unforgettable travel experiences. 
              We specialize in creating personalized journeys that cater to your unique preferences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm md:text-base text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm md:text-base text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm md:text-base text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-sm md:text-base text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-center md:text-left">Our Offices</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <div className="text-center md:text-left">
                <h4 className="font-semibold mb-2 text-sm md:text-base">Delhi Office</h4>
                <p className="text-xs md:text-sm text-gray-400 mb-4">
                  S/F, KH No.395, Malik A-83, SIT, Second Floor, Plot No, A-Block, Rd Number 2, Mahipalpur, Delhi – 110037
                </p>
                
                <h4 className="font-semibold mb-2 text-sm md:text-base">Ghaziabad Office</h4>
                <p className="text-xs md:text-sm text-gray-400">
                  Shop No.2, C -1/10, Block A, Ankur Vihar, DLF Ankur Vihar, Ghaziabad, Uttar Pradesh – 201102
                </p>
              </div>
              
              <div className="text-center md:text-left">
                <h4 className="font-semibold mb-2 text-sm md:text-base">Mahabaleshwar Office</h4>
                <p className="text-xs md:text-sm text-gray-400 mb-4">
                  Shop 201, Beside Ganesh Medical, Murray Peth, Mahabaleshwar, Maharashtra – 412806
                </p>
                
                <h4 className="font-semibold mb-2 text-sm md:text-base">Latur Office</h4>
                <p className="text-xs md:text-sm text-gray-400">
                  Shop No.02, Avanti Nagar Ring Road, Beside Kailash Bar, Opp. MIDC Police Station, MIDC, Latur, Maharashtra – 413512
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 md:mt-8 pt-6 md:pt-8 text-center">
          <p className="text-xs md:text-sm text-gray-400">
            © {new Date().getFullYear()} SIT Global Voyager. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
