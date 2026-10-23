
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import IntroLoader from "./components/IntroLoader";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./components/Home";
import Services from "./components/Services";
import Industries from "./components/Industries";
import Process from "./components/Process";
import About from "./components/About";
import Careers from "./components/Careers";
import Contact from "./components/Contact";

function App() {
  const [showIntro, setShowIntro] = useState(() => {
    const alreadyPlayed = sessionStorage.getItem("ocasIntroPlayed");

    if (alreadyPlayed) {
      return false;
    }

    sessionStorage.setItem("ocasIntroPlayed", "true");
    return true;
  });

  return (
    <>
      {showIntro && (
        <IntroLoader onComplete={() => setShowIntro(false)} />
      )}

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/process" element={<Process />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
