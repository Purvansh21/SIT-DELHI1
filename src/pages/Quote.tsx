import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Quote = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-16 md:pb-24 bg-sit-red">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Plan Your Journey with Ease!</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Travel Made Simple & Affordable!
          </p>
        </div>
      </div>
      
      {/* Main Content */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-lg text-sit-dark/90 mb-6">
              Looking for a comfortable, hassle-free, and budget-friendly travel experience? Whether it's a business trip, a family vacation, or an adventure with friends, South International Travels (SIT) has got you covered! Fill in your details, and we'll get back to you with the best travel options at unbeatable prices.
            </p>
            
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 mb-8">
              <span className="inline-flex items-center text-sit-red">
                <Check className="w-5 h-5 mr-2" />
                Flexible Bookings
              </span>
              <span className="inline-flex items-center text-sit-red">
                <Check className="w-5 h-5 mr-2" />
                Best Price Guarantee
              </span>
              <span className="inline-flex items-center text-sit-red">
                <Check className="w-5 h-5 mr-2" />
                24/7 Support
              </span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-serif text-sit-dark mb-4">Get Your Free Quote</h2>
            <p className="text-sit-dark/70 mb-12">Just tell us where you want to go, and we'll handle the rest!</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="bg-white p-6 shadow-md rounded-sm mb-6">
                <h3 className="font-medium text-sit-red text-lg mb-4">Wide Range of Vehicles</h3>
                <p className="text-sit-dark/80">Choose from Sedans, SUVs, Luxury Coaches, Volvo Buses, and more!</p>
              </div>
              
              <div className="bg-white p-6 shadow-md rounded-sm mb-6">
                <h3 className="font-medium text-sit-red text-lg mb-4">Seamless Connectivity</h3>
                <p className="text-sit-dark/80">Covering 100+ domestic & 7 international routes.</p>
              </div>
              
              <div className="bg-white p-6 shadow-md rounded-sm mb-6">
                <h3 className="font-medium text-sit-red text-lg mb-4">Affordable & Transparent Pricing</h3>
                <p className="text-sit-dark/80">No hidden charges, just the best deals!</p>
              </div>
              
              <div className="bg-white p-6 shadow-md rounded-sm">
                <h3 className="font-medium text-sit-red text-lg mb-4">Customizable Travel Packages</h3>
                <p className="text-sit-dark/80">Tailor your trip the way you want.</p>
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-serif text-sit-dark mb-6">Why Choose SIT?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-sit-red mt-1 mr-3 flex-shrink-0" />
                    <span className="text-sit-dark">Reliable & Trusted – A leader in the private passenger travel industry.</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-sit-red mt-1 mr-3 flex-shrink-0" />
                    <span className="text-sit-dark">Best Price Assurance – Affordable travel without compromising comfort.</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-sit-red mt-1 mr-3 flex-shrink-0" />
                    <span className="text-sit-dark">Extensive Network – Connecting 230+ destinations with premium services.</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-sit-red mt-1 mr-3 flex-shrink-0" />
                    <span className="text-sit-dark">24/7 Customer Support – Always here to assist you, wherever you go.</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-sit-red mt-1 mr-3 flex-shrink-0" />
                    <span className="text-sit-dark">Smooth & Safe Rides – Well-maintained fleet for a seamless journey.</span>
                  </li>
                </ul>
                
                <div className="mt-8">
                  <h4 className="font-medium text-sit-dark mb-4">Have questions? Let's talk!</h4>
                  <div className="flex items-center mb-2">
                    <Mail className="w-5 h-5 text-sit-red mr-2" />
                    <a href="mailto:info@sittravels.com" className="text-sit-red hover:underline">info@sittravels.com</a>
                  </div>
                  <div className="flex items-center mb-6">
                    <Phone className="w-5 h-5 text-sit-red mr-2" />
                    <a href="tel:+918178840574" className="text-sit-red hover:underline">+91 8178840574</a>
                  </div>
                  <a href="/contact">
                    <Button className="px-6 py-3 bg-sit-red text-white font-medium rounded-sm hover:bg-opacity-90 transition-colors">
                      Contact Us Now
                    </Button>
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <form className="bg-white p-8 shadow-lg rounded-lg">
                <h3 className="text-2xl font-serif text-sit-dark mb-6">Request a Quote Now!</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-sit-dark mb-1">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sit-red/50 focus:border-sit-red transition-all duration-200 bg-red-50/30"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-sit-dark mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sit-red/50 focus:border-sit-red transition-all duration-200 bg-red-50/30"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-sit-dark mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sit-red/50 focus:border-sit-red transition-all duration-200 bg-red-50/30"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="passengers" className="block text-sm font-medium text-sit-dark mb-1">Number of Passengers</label>
                    <select 
                      id="passengers" 
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sit-red/50 focus:border-sit-red transition-all duration-200 bg-red-50/30"
                    >
                      <option value="">Select number of passengers</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6+">6+</option>
                    </select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="pickup" className="block text-sm font-medium text-sit-dark mb-1">Pickup Location</label>
                    <input 
                      type="text" 
                      id="pickup" 
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sit-red/50 focus:border-sit-red transition-all duration-200 bg-red-50/30"
                      placeholder="Enter pickup location"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="destination" className="block text-sm font-medium text-sit-dark mb-1">Destination</label>
                    <input 
                      type="text" 
                      id="destination" 
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sit-red/50 focus:border-sit-red transition-all duration-200 bg-red-50/30"
                      placeholder="Enter destination"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="travel-date" className="block text-sm font-medium text-sit-dark mb-1">Date of Travel</label>
                    <input 
                      type="date" 
                      id="travel-date" 
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sit-red/50 focus:border-sit-red transition-all duration-200 bg-red-50/30"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="return-date" className="block text-sm font-medium text-sit-dark mb-1">Return Date (Optional)</label>
                    <input 
                      type="date" 
                      id="return-date" 
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sit-red/50 focus:border-sit-red transition-all duration-200 bg-red-50/30"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="vehicle-type" className="block text-sm font-medium text-sit-dark mb-1">Preferred Vehicle Type</label>
                    <select 
                      id="vehicle-type" 
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sit-red/50 focus:border-sit-red transition-all duration-200 bg-red-50/30"
                    >
                      <option value="">Select vehicle type</option>
                      <option value="sedan">Sedan</option>
                      <option value="suv">SUV</option>
                      <option value="luxury-bus">Luxury Bus</option>
                      <option value="volvo">Volvo</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="special-requests" className="block text-sm font-medium text-sit-dark mb-1">Special Requests (Optional)</label>
                    <textarea 
                      id="special-requests" 
                      rows={1} 
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sit-red/50 focus:border-sit-red transition-all duration-200 resize-none bg-red-50/30"
                      placeholder="Any special requirements?"
                    ></textarea>
                  </div>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full px-6 py-3 bg-sit-red text-white font-medium rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg"
                >
                  Get My Quote
                </button>
              </form>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <p className="text-lg italic text-sit-dark/70">Let us take care of your travel while you sit back and enjoy the ride!</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Quote;
