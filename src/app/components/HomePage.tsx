import { useEffect, useRef } from "react";
import { ChevronRight, MapPin } from "lucide-react";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const HERO_IMAGE = "/hero.jpg";
const BEST_SELLER_IMAGES = [
  "/2-tower.jpg",
  "/crispy-calamari.jpg",
  "/seafood.jpg",
];

const TICKER_ITEMS = ["CHICKEN", "BURGERS", "WRAPS", "SEAFOOD", "KEBABS", "GRILL"];

export function HomePage({ onNavigate }: HomePageProps) {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrollY * 0.35}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {/* Hero */}
      <section style={{ position: "relative", height: "100vh", minHeight: "600px", overflow: "hidden", display: "flex", alignItems: "center" }}>
        {/* Parallax background */}
        <div
          ref={heroRef}
          style={{
            position: "absolute",
            inset: "-20% 0",
            backgroundImage: `url(${HERO_IMAGE})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            willChange: "transform",
          }}
        />
        {/* Overlay */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, rgba(26,26,26,0.99) 0%, rgba(26,26,26,0.8) 60%, rgba(26,26,26,0.7) 100%)",
        }} />

        {/* Content */}
        <div style={{ position: "relative", zIndex: 2, maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem", width: "100%" }}>
          <div style={{ maxWidth: "680px" }}>
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "rgba(232,80,10,0.15)",
              border: "1px solid rgba(232,80,10,0.5)",
              borderRadius: "4px",
              padding: "0.35rem 0.875rem",
              marginBottom: "1.5rem",
            }}>
              <MapPin size={13} color="#E8500A" />
              <span style={{ color: "#E8500A", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Beau Bassin, Mauritius
              </span>
            </div>

            <h1 style={{
              fontFamily: "Anton, sans-serif",
              fontSize: "clamp(4rem, 12vw, 8rem)",
              color: "#ffffff",
              textTransform: "uppercase",
              letterSpacing: "0.03em",
              lineHeight: 0.95,
              marginBottom: "0.5rem",
            }}>
              GRILL &<br />CRISPY
            </h1>

            <div style={{
              fontFamily: "Anton, sans-serif",
              fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
              color: "#ffffff",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              marginBottom: "1.5rem",
            }}>
              by <span style={{ color: "#E8500A" }}>MyBurger</span>
            </div>

            <p style={{
              color: "#cccccc",
              fontSize: "clamp(0.9rem, 2vw, 1.0625rem)",
              lineHeight: 1.65,
              marginBottom: "2.5rem",
              maxWidth: "500px",
            }}>
              Beau Bassin's favourite burger spot — Royal Rd, next to Dominos. Bold flavours, hot off the grill.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
              <button
                onClick={() => handleNavigate("menu")}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  background: "#E8500A",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "4px",
                  padding: "0.875rem 2rem",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.875rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#c94008";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#E8500A";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                View Menu <ChevronRight size={16} />
              </button>

              <button
                onClick={() => handleNavigate("contact")}
                style={{
                  background: "transparent",
                  color: "#ffffff",
                  border: "2px solid rgba(255,255,255,0.6)",
                  borderRadius: "4px",
                  padding: "0.875rem 2rem",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.875rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#E8500A";
                  e.currentTarget.style.color = "#E8500A";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.6)";
                  e.currentTarget.style.color = "#ffffff";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Find Us
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          opacity: 0.6,
        }}>
          <span style={{ color: "#cccccc", fontSize: "0.6875rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>Scroll</span>
          <div style={{
            width: "1px",
            height: "40px",
            background: "linear-gradient(to bottom, #cccccc, transparent)",
            animation: "pulse 2s ease-in-out infinite",
          }} />
        </div>
      </section>

      {/* Ticker strip */}
      <div style={{
        background: "#E8500A",
        overflow: "hidden",
        padding: "0.75rem 0",
        borderTop: "2px solid rgba(255,255,255,0.1)",
      }}>
        <div className="marquee-track">
          {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span
              key={i}
              style={{
                fontFamily: "Anton, sans-serif",
                fontSize: "1rem",
                color: "#ffffff",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
                padding: "0 2rem",
              }}
            >
              {item} ·
            </span>
          ))}
        </div>
      </div>

      {/* Featured section */}
      <section style={{ padding: "5rem 1.5rem", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span style={{
            color: "#E8500A",
            fontFamily: "Inter, sans-serif",
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            display: "block",
            marginBottom: "0.75rem",
          }}>Fan Favourites</span>
          <h2 style={{
            fontFamily: "Anton, sans-serif",
            fontSize: "clamp(2.5rem, 6vw, 4rem)",
            color: "#ffffff",
            textTransform: "uppercase",
            letterSpacing: "0.03em",
          }}>
            BEST SELLERS
          </h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5rem",
          marginBottom: "4rem",
        }}>
          {[
            { name: "My BIG B", desc: "Two chicken filets, fries and drinks to make it perfect.", price: "Rs 350", tag: "Most Popular", img: BEST_SELLER_IMAGES[0] },
            { name: "Crispy Calamari", desc: "Golden-fried calamari rings, crispy outside, tender inside.", price: "Rs 240", tag: "Seafood Pick", img: BEST_SELLER_IMAGES[1] },
            { name: "Mixed Seafood", desc: "Fish, shrimps, calamari — the ultimate seafood feast.", price: "Rs 790", tag: "Go Big", img: BEST_SELLER_IMAGES[2] },
          ].map((item) => (
            <div
              key={item.name}
              style={{
                background: "#2a2a2a",
                borderRadius: "8px",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.07)",
                transition: "transform 0.25s, border-color 0.25s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.borderColor = "rgba(232,80,10,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
              }}
              onClick={() => handleNavigate("menu")}
            >
              <div style={{ position: "relative", height: "200px", overflow: "hidden" }}>
                <img
                  src={item.img}
                  alt={item.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.06)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
                <div style={{
                  position: "absolute",
                  top: "0.75rem",
                  left: "0.75rem",
                  background: "#E8500A",
                  color: "#ffffff",
                  padding: "0.2rem 0.6rem",
                  borderRadius: "3px",
                  fontSize: "0.6875rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}>
                  {item.tag}
                </div>
              </div>
              <div style={{ padding: "1.25rem 1.5rem 1.5rem" }}>
                <h3 style={{
                  fontFamily: "Anton, sans-serif",
                  fontSize: "1.375rem",
                  color: "#ffffff",
                  letterSpacing: "0.04em",
                  marginBottom: "0.5rem",
                  textTransform: "uppercase",
                }}>
                  {item.name}
                </h3>
                <p style={{ color: "#cccccc", fontSize: "0.875rem", lineHeight: 1.55, marginBottom: "1rem" }}>{item.desc}</p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontFamily: "Anton, sans-serif", fontSize: "1.25rem", color: "#E8500A", letterSpacing: "0.04em" }}>{item.price}</span>
                  <span style={{
                    color: "#E8500A",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.25rem",
                  }}>
                    See Menu →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Two-col promo */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
          {/* Build Your Burger */}
          <div style={{
            background: "#2a2a2a",
            border: "1px solid rgba(232,80,10,0.3)",
            borderRadius: "8px",
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}>
            <div style={{ fontSize: "2.5rem" }}>🍔</div>
            <h3 style={{ fontFamily: "Anton, sans-serif", fontSize: "1.5rem", color: "#ffffff", textTransform: "uppercase", letterSpacing: "0.04em" }}>
              Build Your Burger
            </h3>
            <p style={{ color: "#cccccc", fontSize: "0.875rem", lineHeight: 1.6 }}>
              Customise your rounder with cheese, pineapple, onions, tomato — Rs15 each. Add a hash brown for Rs30.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {["🧀 Cheese", "🍍 Pineapple", "🧅 Onions", "🍅 Tomato"].map((addon) => (
                <span key={addon} style={{
                  background: "rgba(232,80,10,0.15)",
                  border: "1px solid rgba(232,80,10,0.3)",
                  color: "#E8500A",
                  padding: "0.25rem 0.6rem",
                  borderRadius: "4px",
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                }}>
                  {addon} +Rs15
                </span>
              ))}
              <span style={{
                background: "rgba(232,80,10,0.15)",
                border: "1px solid rgba(232,80,10,0.3)",
                color: "#E8500A",
                padding: "0.25rem 0.6rem",
                borderRadius: "4px",
                fontSize: "0.8125rem",
                fontWeight: 600,
              }}>
                🥔 Hash Brown +Rs30
              </span>
            </div>
            <button
              onClick={() => handleNavigate("menu")}
              style={{
                alignSelf: "flex-start",
                background: "#E8500A",
                color: "#ffffff",
                border: "none",
                borderRadius: "4px",
                padding: "0.625rem 1.5rem",
                fontFamily: "Inter, sans-serif",
                fontSize: "0.8125rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "background 0.2s",
                marginTop: "0.5rem",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#c94008")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#E8500A")}
            >
              See Rounders
            </button>
          </div>

          {/* Kids Corner */}
          <div style={{
            background: "#2a2a2a",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "8px",
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}>
            <div style={{ fontSize: "2.5rem" }}>🧒</div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <h3 style={{ fontFamily: "Anton, sans-serif", fontSize: "1.5rem", color: "#ffffff", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                Kids Corner
              </h3>
              <span style={{
                background: "#E8500A",
                color: "#ffffff",
                padding: "0.15rem 0.5rem",
                borderRadius: "3px",
                fontSize: "0.6875rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}>Kids</span>
            </div>
            <p style={{ color: "#cccccc", fontSize: "0.875rem", lineHeight: 1.6 }}>
              Little ones deserve the full experience. Drumstick or nuggets — with chips & a drink, sorted.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {[
                { name: "Drumstick, Chips & Drink", price: "Rs 175" },
                { name: "Nuggets, Chips & Drink", price: "Rs 190" },
              ].map((item) => (
                <div key={item.name} style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "0.625rem 0.875rem",
                  background: "rgba(255,255,255,0.04)",
                  borderRadius: "4px",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}>
                  <span style={{ color: "#ffffff", fontSize: "0.875rem" }}>{item.name}</span>
                  <span style={{ fontFamily: "Anton, sans-serif", color: "#E8500A", fontSize: "1rem", letterSpacing: "0.04em" }}>{item.price}</span>
                </div>
              ))}
            </div>
            <button
              onClick={() => handleNavigate("menu")}
              style={{
                alignSelf: "flex-start",
                background: "transparent",
                color: "#E8500A",
                border: "2px solid #E8500A",
                borderRadius: "4px",
                padding: "0.625rem 1.5rem",
                fontFamily: "Inter, sans-serif",
                fontSize: "0.8125rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "all 0.2s",
                marginTop: "0.5rem",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#E8500A";
                e.currentTarget.style.color = "#ffffff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#E8500A";
              }}
            >
              Full Menu
            </button>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{
        background: "#E8500A",
        padding: "4rem 1.5rem",
        textAlign: "center",
      }}>
        <h2 style={{
          fontFamily: "Anton, sans-serif",
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          color: "#ffffff",
          textTransform: "uppercase",
          letterSpacing: "0.03em",
          marginBottom: "1rem",
        }}>
          READY TO ORDER?
        </h2>
        <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1rem", marginBottom: "2rem" }}>
          Call us or swing by — Royal Rd, Beau Bassin. Next to Dominos.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}>
          <a
            href="tel:57659022"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "#ffffff",
              color: "#E8500A",
              textDecoration: "none",
              borderRadius: "4px",
              padding: "0.875rem 2rem",
              fontFamily: "Inter, sans-serif",
              fontSize: "0.875rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            📞 5 765 9022
          </a>
          <button
            onClick={() => handleNavigate("menu")}
            style={{
              background: "transparent",
              color: "#ffffff",
              border: "2px solid rgba(255,255,255,0.7)",
              borderRadius: "4px",
              padding: "0.875rem 2rem",
              fontFamily: "Inter, sans-serif",
              fontSize: "0.875rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#ffffff")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.7)")}
          >
            View Menu
          </button>
        </div>
      </section>
    </div>
  );
}
