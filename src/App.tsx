import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Campaigns from "./components/Campaigns";
import Funding from "./components/Funding";
import Impact from "./components/Impact";
import HelpForm from "./components/HelpForm";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

import PatientDetail from "./pages/PatientDetail";

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Campaigns />
      <Funding />
      <Impact />
      <HelpForm />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/patient/:id" element={<PatientDetail />} />
        </Routes>

        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
