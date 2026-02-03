import { useState } from "react";
import "./App.css";

import HeroSection from "./components/HeroSection/HeroSection";
import ModalHero from "./components/ModalHero/ModalHero";
import Footer from "./components/FooterSection/Footer";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <HeroSection onOpenModal={() => setIsModalOpen(true)} />

      <ModalHero
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    <Footer/>
    </>
  );
}

export default App;