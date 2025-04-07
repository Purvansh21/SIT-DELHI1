import { Toaster } from "@/components/ui/toaster";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Franchise from "./pages/Franchise";
import Quote from "./pages/Quote";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import RouteTransition from "./components/RouteTransition";
import ErrorBoundary from "./components/ErrorBoundary";
import "./index.css";

const App = () => (
  <ErrorBoundary>
    <Toaster />
    <BrowserRouter>
      <ScrollToTop />
      <RouteTransition>
        <div className="font-poppins">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/franchise" element={<Franchise />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </RouteTransition>
    </BrowserRouter>
  </ErrorBoundary>
);

export default App;
