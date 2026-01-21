import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";

// Layout
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";

// Pages
import HomePage from "./pages/HomePage";
import VisionPage from "./pages/VisionPage";
import CommunityPage from "./pages/CommunityPage";
import CulturePage from "./pages/CulturePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

// Scroll to top component
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/vision" element={<VisionPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/culture" element={<CulturePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: '#2D3E36',
              color: '#FAF8F5',
              border: 'none'
            }
          }}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
