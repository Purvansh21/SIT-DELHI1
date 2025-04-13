
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Our safari in Tanzania was absolutely life-changing. SIT arranged every detail flawlessly, from the luxury camps to our incredible guides who seemed to know exactly where to find the wildlife.",
    author: "Sarah & James Henderson",
    location: "African Safari Tour",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3506&q=80"
  },
  {
    quote: "Island hopping through Greece with SIT was magical. The boutique hotels they selected had breathtaking views, and the private yacht day was the highlight of our honeymoon.",
    author: "Michael & Emily Chen",
    location: "Greek Islands Exploration",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3506&q=80"
  },
  {
    quote: "Our family trip to Japan was perfectly balanced with cultural experiences and outdoor adventures. The kids still talk about the robot restaurant and the traditional ryokan stay!",
    author: "The Wilson Family",
    location: "Japan Cultural Journey",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3506&q=80"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-sit-dark text-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">What Our Travelers Say</h2>
          <p className="text-lg text-sit-cream/80">
            Real experiences from clients who have journeyed with South International Travels
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Quote className="w-20 h-20 text-sit-gold/20" />
          </div>
          
          <div className="bg-sit-blue/20 p-8 md:p-12 rounded-sm">
            <div className="text-center">
              <p className="text-xl md:text-2xl font-serif mb-8 leading-relaxed">
                "{currentTestimonial.quote}"
              </p>
              <div className="mb-6">
                <p className="text-lg font-semibold">{currentTestimonial.author}</p>
                <p className="text-sit-cream/80">{currentTestimonial.location}</p>
              </div>
              
              <div className="flex justify-center space-x-4">
                <button 
                  onClick={goToPrevious}
                  className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-sit-dark transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={goToNext}
                  className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-sit-dark transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full ${
                index === currentIndex ? "bg-sit-gold" : "bg-white/30"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
