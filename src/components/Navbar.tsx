import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDestinationsOpen, setIsDestinationsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Handle scroll event to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDestinationsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle logo click
  const handleLogoClick = (e: React.MouseEvent) => {
    // If already on home page, scroll to top
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? "bg-white/95 shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center" title="SIT Global Voyager - Home" onClick={handleLogoClick}>
            <img 
              src="/media/logo.png" 
              alt="SIT Global Voyager"
              width={180}
              height={60}
              className="h-[40px] md:h-[60px] w-auto object-contain transition-all duration-300"
              loading="eager"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`font-medium hover:text-sit-red transition-colors ${
              isScrolled ? "text-sit-dark" : "text-white"
            }`}>
              Home
            </Link>
            <Link to="/about" className={`font-medium hover:text-sit-red transition-colors ${
              isScrolled ? "text-sit-dark" : "text-white"
            }`}>
              About Us
            </Link>
            {/* Destinations Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                className={`flex items-center font-medium hover:text-sit-red transition-colors ${
                  isScrolled ? "text-sit-dark" : "text-white"
                }`}
                onClick={() => setIsDestinationsOpen(!isDestinationsOpen)}
              >
                Destinations
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                  isDestinationsOpen ? "rotate-180" : ""
                }`} />
              </button>
              {isDestinationsOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-sm shadow-lg py-2 animate-fade-in">
                  <Link
                    to="/destinations/domestic"
                    className="block px-4 py-2 text-sit-dark hover:bg-sit-red/10 hover:text-sit-red transition-colors"
                    onClick={() => setIsDestinationsOpen(false)}
                  >
                    Domestic
                  </Link>
                  <Link
                    to="/destinations/international"
                    className="block px-4 py-2 text-sit-dark hover:bg-sit-red/10 hover:text-sit-red transition-colors"
                    onClick={() => setIsDestinationsOpen(false)}
                  >
                    International
                  </Link>
                </div>
              )}
            </div>
            <Link to="/contact" className={`font-medium hover:text-sit-red transition-colors ${
              isScrolled ? "text-sit-dark" : "text-white"
            }`}>
              Contact Us
            </Link>
            <Link to="/franchise" className={`font-medium hover:text-sit-red transition-colors ${
              isScrolled ? "text-sit-dark" : "text-white"
            }`}>
              Franchise
            </Link>
            <Link 
              to="/quote" 
              className="px-6 py-2 rounded-sm bg-sit-red text-white font-medium hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-sm hover:bg-white/10 transition-colors" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? "text-sit-dark" : "text-white"} size={24} />
            ) : (
              <Menu className={isScrolled ? "text-sit-dark" : "text-white"} size={24} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="block py-2 text-sit-dark hover:text-sit-red transition-colors">
                Home
              </Link>
              <Link to="/about" className="block py-2 text-sit-dark hover:text-sit-red transition-colors">
                About Us
              </Link>
              {/* Mobile Destinations Dropdown */}
              <div>
                <button
                  className="flex items-center w-full py-2 text-sit-dark hover:text-sit-red transition-colors"
                  onClick={() => setIsDestinationsOpen(!isDestinationsOpen)}
                >
                  Destinations
                  <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                    isDestinationsOpen ? "rotate-180" : ""
                  }`} />
                </button>
                {isDestinationsOpen && (
                  <div className="pl-4 mt-2 space-y-2 animate-fade-in">
                    <Link
                      to="/destinations/domestic"
                      className="block py-2 text-sit-dark hover:text-sit-red transition-colors"
                      onClick={() => setIsDestinationsOpen(false)}
                    >
                      Domestic
                    </Link>
                    <Link
                      to="/destinations/international"
                      className="block py-2 text-sit-dark hover:text-sit-red transition-colors"
                      onClick={() => setIsDestinationsOpen(false)}
                    >
                      International
                    </Link>
                  </div>
                )}
              </div>
              <Link to="/contact" className="block py-2 text-sit-dark hover:text-sit-red transition-colors">
                Contact Us
              </Link>
              <Link to="/franchise" className="block py-2 text-sit-dark hover:text-sit-red transition-colors">
                Franchise
              </Link>
              <Link 
                to="/quote" 
                className="block mt-4 px-6 py-3 text-center rounded-sm bg-sit-red text-white font-medium hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
