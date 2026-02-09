import { useState } from "react";
import "./App.css";

import HeroSection from "./components/HeroSection/HeroSection";
import ModalHero from "./components/ModalHero/ModalHero";
import Navbar from "./components/Navbar/Navbar";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <ThemeProvider>
      <Navbar onOpenModal={() => setIsModalOpen(true)} />
      <HeroSection onOpenModal={() => setIsModalOpen(true)} />

      <ModalHero isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </ThemeProvider>
  );
}

export default App;
