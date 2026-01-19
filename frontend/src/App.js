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
import SustainableDesignPage from "./pages/SustainableDesignPage";
import MasterPlanPage from "./pages/MasterPlanPage";
import AvailabilityPage from "./pages/AvailabilityPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/vision" element={<VisionPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/sustainable-design" element={<SustainableDesignPage />} />
          <Route path="/master-plan" element={<MasterPlanPage />} />
          <Route path="/availability" element={<AvailabilityPage />} />
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
