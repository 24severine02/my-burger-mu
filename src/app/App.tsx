import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { HomePage } from "./components/HomePage";
import { MenuPage } from "./components/MenuPage";
import { ContactPage } from "./components/ContactPage";
import "../styles/fonts.css";

type Page = "home" | "menu" | "contact";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  const navigate = (page: string) => {
    setCurrentPage(page as Page);
  };

  return (
    /* MARKER-MAKE-KIT-INVOKED */
    <div style={{ minHeight: "100vh", background: "#1a1a1a", color: "#ffffff" }}>
      <Navbar currentPage={currentPage} onNavigate={navigate} />

      <main>
        {currentPage === "home" && <HomePage onNavigate={navigate} />}
        {currentPage === "menu" && <MenuPage />}
        {currentPage === "contact" && <ContactPage />}
      </main>

      <Footer onNavigate={navigate} />
    </div>
  );
}
