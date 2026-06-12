import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", page: "home" },
    { label: "Menu", page: "menu" },
    { label: "Contact", page: "contact" },
  ];

  const handleNav = (page: string) => {
    onNavigate(page);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: scrolled ? "rgba(26,26,26,0.97)" : "rgba(26,26,26,0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid rgba(232,80,10,0.3)" : "1px solid rgba(255,255,255,0.06)",
        transition: "all 0.3s ease",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px" }}>
          {/* Logo */}
          <button
            onClick={() => handleNav("home")}
            style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "0.5rem" }}
          >
            <img src="/logo.png" alt="MyBurger" style={{ height: "130px", width: "auto" }} />
          </button>

          {/* Desktop nav */}
          <div style={{ display: "flex", alignItems: "center", gap: "2.5rem" }} className="hidden-mobile">
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => handleNav(link.page)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: currentPage === link.page ? "#E8500A" : "#cccccc",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  transition: "color 0.2s",
                  position: "relative",
                  padding: "0.25rem 0",
                }}
              >
                {link.label}
                {currentPage === link.page && (
                  <span style={{
                    position: "absolute",
                    bottom: "-2px",
                    left: 0,
                    right: 0,
                    height: "2px",
                    background: "#E8500A",
                    borderRadius: "1px",
                  }} />
                )}
              </button>
            ))}
          </div>

          {/* CTA + mobile hamburger */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <button
              onClick={() => handleNav("contact")}
              className="hidden-mobile"
              style={{
                background: "#E8500A",
                color: "#ffffff",
                border: "none",
                borderRadius: "4px",
                padding: "0.5rem 1.25rem",
                fontFamily: "Inter, sans-serif",
                fontSize: "0.8125rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#c94008")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#E8500A")}
            >
              Order Now
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="show-mobile"
              style={{ background: "none", border: "none", cursor: "pointer", color: "#ffffff", padding: "0.25rem" }}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{
          background: "#1a1a1a",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          padding: "1rem 1.5rem 1.5rem",
        }}>
          {navLinks.map((link) => (
            <button
              key={link.page}
              onClick={() => handleNav(link.page)}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: currentPage === link.page ? "#E8500A" : "#cccccc",
                fontFamily: "Inter, sans-serif",
                fontSize: "1rem",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                padding: "0.875rem 0",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav("contact")}
            style={{
              marginTop: "1rem",
              display: "block",
              width: "100%",
              background: "#E8500A",
              color: "#ffffff",
              border: "none",
              borderRadius: "4px",
              padding: "0.75rem",
              fontFamily: "Inter, sans-serif",
              fontSize: "0.875rem",
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              cursor: "pointer",
            }}
          >
            Order Now
          </button>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
