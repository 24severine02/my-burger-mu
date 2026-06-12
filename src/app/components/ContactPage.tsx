import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";
import { FaFacebook, FaTiktok } from "react-icons/fa6";

export function ContactPage() {
  return (
    <div style={{ paddingTop: "64px", minHeight: "100vh" }}>
      {/* Header */}
      <div style={{
        background: "linear-gradient(to bottom, #1a1a1a, #222222)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        padding: "3.5rem 1.5rem 2.5rem",
        textAlign: "center",
      }}>
        <span style={{
          color: "#E8500A",
          fontFamily: "Inter, sans-serif",
          fontSize: "0.75rem",
          fontWeight: 700,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          display: "block",
          marginBottom: "0.75rem",
        }}>
          Get In Touch
        </span>
        <h1 style={{
          fontFamily: "Anton, sans-serif",
          fontSize: "clamp(3rem, 8vw, 5rem)",
          color: "#ffffff",
          textTransform: "uppercase",
          letterSpacing: "0.03em",
          marginBottom: "1rem",
        }}>
          FIND US
        </h1>
        <p style={{ color: "#cccccc", fontSize: "0.9375rem", maxWidth: "420px", margin: "0 auto" }}>
          We're at the heart of Beau Bassin — easy to find, hard to forget.
        </p>
      </div>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "3rem 1.5rem 5rem" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "2rem",
          marginBottom: "2.5rem",
        }}>
          {/* Info column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {/* Address card */}
            <div style={{
              background: "#2a2a2a",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "10px",
              padding: "1.75rem",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                <div style={{
                  width: "40px",
                  height: "40px",
                  background: "rgba(232,80,10,0.15)",
                  border: "1px solid rgba(232,80,10,0.3)",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <MapPin size={18} color="#E8500A" />
                </div>
                <h3 style={{ fontFamily: "Anton, sans-serif", fontSize: "1.1rem", color: "#ffffff", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  Our Location
                </h3>
              </div>
              <p style={{ color: "#ffffff", fontSize: "1.125rem", fontWeight: 600, marginBottom: "0.25rem" }}>
                Royal Rd, Beau Bassin
              </p>
              <p style={{ color: "#cccccc", fontSize: "0.9375rem", marginBottom: "1.25rem" }}>
                Next to Dominos, Mauritius
              </p>
              <a
                href="https://maps.app.goo.gl/j5MiA9L5yLJ6QV2JA"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "#E8500A",
                  fontSize: "0.8125rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.75")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                Get Directions <ExternalLink size={13} />
              </a>
            </div>

            {/* Phone card */}
            <div style={{
              background: "#2a2a2a",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "10px",
              padding: "1.75rem",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                <div style={{
                  width: "40px",
                  height: "40px",
                  background: "rgba(232,80,10,0.15)",
                  border: "1px solid rgba(232,80,10,0.3)",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <Phone size={18} color="#E8500A" />
                </div>
                <h3 style={{ fontFamily: "Anton, sans-serif", fontSize: "1.1rem", color: "#ffffff", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  Order by Phone
                </h3>
              </div>
              <p style={{ color: "#cccccc", fontSize: "0.875rem", marginBottom: "1.25rem" }}>
                Call us to place your order or make an enquiry — we're happy to help.
              </p>
              <a
                href="tel:57659022"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.625rem",
                  background: "#E8500A",
                  color: "#ffffff",
                  textDecoration: "none",
                  borderRadius: "6px",
                  padding: "0.875rem 1.75rem",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "1rem",
                  fontWeight: 700,
                  letterSpacing: "0.04em",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#c94008")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#E8500A")}
              >
                <Phone size={18} />
                5 765 9022
              </a>
            </div>

            {/* Social card */}
            <div style={{
              background: "#2a2a2a",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "10px",
              padding: "1.75rem",
            }}>
              <h3 style={{ fontFamily: "Anton, sans-serif", fontSize: "1.1rem", color: "#ffffff", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "1.25rem" }}>
                Follow Us
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  { icon: <FaFacebook  size={18} color="#ffffff" /> , label: "Facebook", handle: "/MyBurger MU", href: "https://www.facebook.com/p/MyBurger-MU-61560481911638/" },
                  { icon: <FaTiktok  size={18} color="#ffffff" /> , label: "TikTok", handle: "@MyBurger MU", href: "https://www.tiktok.com/@myburger_mu" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      padding: "0.875rem",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.07)",
                      borderRadius: "8px",
                      textDecoration: "none",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "rgba(232,80,10,0.4)";
                      e.currentTarget.style.background = "rgba(232,80,10,0.06)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                      e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                    }}
                  >
                    <div style={{
                      width: "36px",
                      height: "36px",
                      background: "#E8500A",
                      borderRadius: "6px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#ffffff",
                      fontWeight: 700,
                      fontSize: "0.875rem",
                      flexShrink: 0,
                    }}>
                      {social.icon}
                    </div>
                    <div>
                      <div style={{ color: "#ffffff", fontSize: "0.9375rem", fontWeight: 600 }}>{social.label}</div>
                      <div style={{ color: "#888", fontSize: "0.8125rem" }}>{social.handle}</div>
                    </div>
                    <ExternalLink size={14} color="#555" style={{ marginLeft: "auto" }} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Map + Hours column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {/* Map placeholder */}
            <div style={{
              background: "#2a2a2a",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "10px",
              overflow: "hidden",
              height: "320px",
              position: "relative",
            }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233.98465426379855!2d57.467586444488504!3d-20.227521543951408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x217c5b00560994bf%3A0x3dfa048ac7e46264!2sMy%20Burger!5e0!3m2!1sen!2smu!4v1781251957106!5m2!1sen!2smu"
                style={{ width: "100%", height: "100%", border: "none", filter: "grayscale(0.2) contrast(1.05)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MyBurger location"
              />
            </div>

            {/* Opening Hours */}
            <div style={{
              background: "#2a2a2a",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "10px",
              padding: "1.75rem",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                <div style={{
                  width: "40px",
                  height: "40px",
                  background: "rgba(232,80,10,0.15)",
                  border: "1px solid rgba(232,80,10,0.3)",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <Clock size={18} color="#E8500A" />
                </div>
                <h3 style={{ fontFamily: "Anton, sans-serif", fontSize: "1.1rem", color: "#ffffff", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  Opening Hours
                </h3>
              </div>

              {[
                { day: "Monday – Friday", hours: "11:00 AM – 10:00 PM" },
                { day: "Saturday", hours: "10:00 AM – 11:00 PM" },
                { day: "Sunday", hours: "10:00 AM – 10:00 PM" },
              ].map((slot, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0.625rem 0",
                    borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.05)" : "none",
                  }}
                >
                  <span style={{ color: "#cccccc", fontSize: "0.9375rem" }}>{slot.day}</span>
                  <span style={{ fontFamily: "Anton, sans-serif", color: "#E8500A", fontSize: "0.9375rem", letterSpacing: "0.03em" }}>{slot.hours}</span>
                </div>
              ))}

              <div style={{
                marginTop: "1rem",
                padding: "0.625rem 0.875rem",
                background: "rgba(232,80,10,0.08)",
                border: "1px solid rgba(232,80,10,0.2)",
                borderRadius: "6px",
              }}>
                <p style={{ color: "#cccccc", fontSize: "0.8125rem" }}>
                  Hours may vary on public holidays. Call <span style={{ color: "#E8500A", fontWeight: 700 }}>5 765 9022</span> to confirm.
                </p>
              </div>
            </div>

            {/* Halal badge */}
            <div style={{
              background: "#2a2a2a",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "10px",
              padding: "1.5rem",
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}>
              <div style={{
                width: "52px",
                height: "52px",
                background: "rgba(232,80,10,0.15)",
                border: "2px solid rgba(232,80,10,0.4)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.5rem",
                flexShrink: 0,
              }}>
                ☪
              </div>
              <div>
                <div style={{ fontFamily: "Anton, sans-serif", color: "#ffffff", fontSize: "1rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  Halal Certified
                </div>
                <p style={{ color: "#cccccc", fontSize: "0.8125rem", marginTop: "0.25rem" }}>
                  All our meat and ingredients are Halal certified.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </div>
  );
}
