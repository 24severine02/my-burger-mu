import { MapPin, Phone } from "lucide-react";
import { FaFacebook, FaTiktok } from "react-icons/fa6";

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const handleNav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer style={{ background: "#111111", borderTop: "1px solid rgba(232,80,10,0.2)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "3rem 1.5rem 2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2.5rem", marginBottom: "2.5rem" }}>
          {/* Brand */}
          <div>
            <div style={{ fontFamily: "Anton, sans-serif", fontSize: "2rem", color: "#ffffff", letterSpacing: "0.04em", marginBottom: "0.75rem" }}>
              MY<span style={{ color: "#E8500A" }}>BURGER</span>
            </div>
            <p style={{ color: "#cccccc", fontSize: "0.875rem", lineHeight: 1.6, marginBottom: "1rem" }}>
              Beau Bassin's boldest burger spot. Grill & Crispy, every day.
            </p>
            <div style={{
              display: "inline-block",
              background: "rgba(232,80,10,0.15)",
              border: "1px solid rgba(232,80,10,0.4)",
              color: "#E8500A",
              padding: "0.25rem 0.75rem",
              borderRadius: "4px",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}>
              ☪ Halal Certified
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: "Anton, sans-serif", color: "#ffffff", fontSize: "1rem", letterSpacing: "0.06em", marginBottom: "1rem", textTransform: "uppercase" }}>
              Quick Links
            </h4>
            {[
              { label: "Home", page: "home" },
              { label: "Our Menu", page: "menu" },
              { label: "Contact Us", page: "contact" },
            ].map((link) => (
              <button
                key={link.page}
                onClick={() => handleNav(link.page)}
                style={{
                  display: "block",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "#cccccc",
                  fontSize: "0.875rem",
                  padding: "0.3rem 0",
                  transition: "color 0.2s",
                  textAlign: "left",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#E8500A")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#cccccc")}
              >
                → {link.label}
              </button>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: "Anton, sans-serif", color: "#ffffff", fontSize: "1rem", letterSpacing: "0.06em", marginBottom: "1rem", textTransform: "uppercase" }}>
              Find Us
            </h4>
            <div style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start", marginBottom: "0.75rem" }}>
              <MapPin size={16} color="#E8500A" style={{ marginTop: "2px", flexShrink: 0 }} />
              <span style={{ color: "#cccccc", fontSize: "0.875rem", lineHeight: 1.5 }}>Royal Rd, Beau Bassin<br />(Next to Dominos)</span>
            </div>
            <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
              <Phone size={16} color="#E8500A" style={{ flexShrink: 0 }} />
              <span style={{ color: "#cccccc", fontSize: "0.875rem" }}>5 765 9022</span>
            </div>
          </div>

          {/* Socials */}
          <div>
            <h4 style={{ fontFamily: "Anton, sans-serif", color: "#ffffff", fontSize: "1rem", letterSpacing: "0.06em", marginBottom: "1rem", textTransform: "uppercase" }}>
              Follow Us
            </h4>
            <div style={{ display: "flex", gap: "0.75rem" }}>
              <a
                href="https://www.facebook.com/p/MyBurger-MU-61560481911638/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                  background: "#2a2a2a",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "6px",
                  color: "#cccccc",
                  textDecoration: "none",
                  fontSize: "1.1rem",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#E8500A";
                  e.currentTarget.style.borderColor = "#E8500A";
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#2a2a2a";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.color = "#cccccc";
                }}
              >
                <FaFacebook size={18} />
              </a>
              <a
                href="https://www.tiktok.com/@myburger_mu"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                  background: "#2a2a2a",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "6px",
                  color: "#cccccc",
                  textDecoration: "none",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#E8500A";
                  e.currentTarget.style.borderColor = "#E8500A";
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#2a2a2a";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.color = "#cccccc";
                }}
              >
                <FaTiktok size={18} />
              </a>
            </div>
            <p style={{ color: "#777", fontSize: "0.8125rem", marginTop: "0.75rem" }}>@MyBurger MU</p>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: "1.5rem", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "0.5rem" }}>
          <p style={{ color: "#555", fontSize: "0.8125rem" }}>© 2024 MyBurger MU. All rights reserved.</p>
          <p style={{ color: "#555", fontSize: "0.8125rem" }}>Royal Rd, Beau Bassin, Mauritius</p>
        </div>
      </div>
    </footer>
  );
}
