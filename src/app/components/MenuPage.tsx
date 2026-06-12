import { useState, useRef, useEffect } from "react";

type MenuItem = {
  name: string;
  price?: string | number;
  only?: string | number;
  withDrinks?: string | number;
  withColeslaw?: string | number;
  note?: string;
};

type Category = {
  id: string;
  label: string;
  emoji: string;
  items: MenuItem[];
  tableHeaders?: string[];
};

const CATEGORIES: Category[] = [
  {
    id: "chicken",
    label: "Chicken Pieces",
    emoji: "🍗",
    tableHeaders: ["Item", "Rs"],
    items: [
      { name: "1 Piece", price: 90 },
      { name: "2 Wings", price: 75 },
      { name: "4 Wings", price: 125 },
      { name: "10 Wings", price: 350 },
      { name: "1 Drumstick", price: 80 },
      { name: "Fiver", price: 370 },
      { name: "8 Pieces", price: 599 },
      { name: "10 Pieces", price: 725 },
      { name: "12 Pieces", price: 880 },
      { name: "15 Pieces", price: 1140 },
      { name: "20 Pieces", price: 1390 },
    ],
  },
  {
    id: "strips",
    label: "Strips & Deals",
    emoji: "🍟",
    tableHeaders: ["Item", "Rs"],
    items: [
      { name: "Chicken Strips & Chips", price: 280 },
      { name: "Calamari, Chips & Salad", price: 365 },
      { name: "Shrimps, Chips & Salad", price: 365 },
      { name: "Fish, Chips & Salad", price: 350 },
      { name: "Fish & Chips", price: 330 },
    ],
  },
  {
    id: "wraps",
    label: "Wraps",
    emoji: "🌯",
    tableHeaders: ["Item", "Only", "Chips & Drinks"],
    items: [
      { name: "Crispy Chicken", only: 190, withDrinks: 299 },
      { name: "Grill Chicken", only: 200, withDrinks: 310 },
      { name: "Kebab Chicken", only: 190, withDrinks: 289 },
      { name: "Crispy Shrimp", only: 225, withDrinks: 315 },
      { name: "Crispy Calamari", only: 200, withDrinks: 315 },
      { name: "Veggie", only: 160, withDrinks: 250 },
    ],
  },
  {
    id: "rounders",
    label: "Rounders",
    emoji: "🍔",
    tableHeaders: ["Item", "Only", "Chips & Drinks", "+ Coleslaw"],
    items: [
      { name: "Veggie", only: 135, withDrinks: 225, withColeslaw: 250 },
      { name: "My B (Normal)", only: 185, withDrinks: 280, withColeslaw: 299 },
      { name: "My Big B (Double)", only: 285, withDrinks: 425, withColeslaw: 449 },
      { name: "MyTower (Triple)", only: 350, withDrinks: 495, withColeslaw: 510 },
      { name: "Fish", only: 190, withDrinks: 285, withColeslaw: 299 },
      { name: "Shrimps (Patty Homemade)", only: 190, withDrinks: 285, withColeslaw: 299 },
      { name: "Crispy Calamari", only: 190, withDrinks: 285, withColeslaw: 299 },
    ],
  },
  {
    id: "kebab",
    label: "Kebab",
    emoji: "🥙",
    tableHeaders: ["Item", "Rs"],
    items: [
      { name: "Kebab Bread", price: 100 },
      { name: "Kebab with Chips", price: 125 },
      { name: "Kebab (Chicken only)", price: 150 },
      { name: "Kebab Meal (Chips & Drink)", price: 165 },
    ],
  },
  {
    id: "grill",
    label: "Grill",
    emoji: "🔥",
    tableHeaders: ["Item", "Rs"],
    items: [
      { name: "Grilled Chicken Leg", price: 250, note: "Serves with Chips & Salad" },
      { name: "Piri Piri Grilled Chicken", price: 200, note: "Add on Rs100 for Combo Meal" },
      { name: "Grilled Fish (300g)", price: 300, note: "Serves with Chips, Salad & Garlic Bread" },
      { name: "Grilled Fish Rounder", price: 225, note: "Add on Rs100 for Combo Meal" },
      { name: "Match to Mix", price: 450, note: "Grilled Fish & Chicken Meal" },
    ],
  },
  {
    id: "seafood",
    label: "Seafood",
    emoji: "🦐",
    tableHeaders: ["Item", "Rs"],
    items: [
      { name: "Calamari Crispy", price: 240 },
      { name: "Fish Box", price: 250 },
      { name: "Shrimps", price: 280 },
      { name: "Mixed Seafood", price: 790 },
      { name: "Special Seafood", price: 390 },
    ],
  },
  {
    id: "sizes",
    label: "Size Orders & Salads",
    emoji: "🥗",
    tableHeaders: ["Item", "Rs"],
    items: [
      { name: "Chips Regular", price: 75 },
      { name: "Chips Large", price: 125 },
      { name: "Onion Rings", price: 150 },
      { name: "Chicken Nuggets (8pc)", price: 175 },
      { name: "Chicken Strips (8pc)", price: 190 },
      { name: "Kebab Salad", price: 180 },
      { name: "Piri Piri Salad", price: 180 },
      { name: "Crispy Salad", price: 180 },
      { name: "Coleslaw", price: 60 },
      { name: "Sauce (Cup size)", price: 40, note: "Honey Mustard · Garlic Mayo · Mexican Hot Sauce · BBQ Sauce" },
    ],
  },
  {
    id: "kids",
    label: "Kids Corner",
    emoji: "🧒",
    tableHeaders: ["Item", "Rs"],
    items: [
      { name: "Drumstick, Chips & Drink", price: 175 },
      { name: "Nuggets, Chips & Drink", price: 190 },
    ],
  },
];

function PriceTag({ value }: { value: string | number }) {
  return (
    <span style={{
      fontFamily: "Anton, sans-serif",
      fontSize: "1rem",
      color: "#E8500A",
      letterSpacing: "0.04em",
      whiteSpace: "nowrap",
    }}>
      Rs {value}
    </span>
  );
}

function MenuCard({ category }: { category: Category }) {
  const hasMultiCol = category.items[0]?.only !== undefined;
  const hasColeslaw = category.items[0]?.withColeslaw !== undefined;

  return (
    <div style={{
      background: "#2a2a2a",
      border: "1px solid rgba(255,255,255,0.07)",
      borderRadius: "8px",
      overflow: "hidden",
    }}>
      {/* Card header */}
      <div style={{
        background: "rgba(232,80,10,0.12)",
        borderBottom: "1px solid rgba(232,80,10,0.25)",
        padding: "1rem 1.5rem",
        display: "flex",
        alignItems: "center",
        gap: "0.625rem",
      }}>
        <span style={{ fontSize: "1.375rem" }}>{category.emoji}</span>
        <h3 style={{
          fontFamily: "Anton, sans-serif",
          fontSize: "1.125rem",
          color: "#ffffff",
          textTransform: "uppercase",
          letterSpacing: "0.06em",
        }}>
          {category.label}
        </h3>
      </div>

      {/* Table header for multi-col */}
      {hasMultiCol && (
        <div style={{
          display: "grid",
          gridTemplateColumns: hasColeslaw ? "1fr 80px 100px 100px" : "1fr 80px 120px",
          gap: "0.5rem",
          padding: "0.5rem 1.5rem",
          background: "rgba(0,0,0,0.2)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}>
          <span style={{ color: "#777", fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Item</span>
          <span style={{ color: "#777", fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", textAlign: "right" }}>Only</span>
          <span style={{ color: "#777", fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", textAlign: "right" }}>+Chips & Drink</span>
          {hasColeslaw && <span style={{ color: "#777", fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", textAlign: "right" }}>+Coleslaw</span>}
        </div>
      )}

      {/* Items */}
      <div style={{ padding: "0.5rem 0" }}>
        {category.items.map((item, idx) => (
          <div
            key={idx}
            style={{
              display: "grid",
              gridTemplateColumns: hasColeslaw
                ? "1fr 80px 100px 100px"
                : hasMultiCol
                ? "1fr 80px 120px"
                : "1fr auto",
              gap: "0.5rem",
              alignItems: "center",
              padding: "0.6rem 1.5rem",
              borderBottom: idx < category.items.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
              transition: "background 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.03)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            <div>
              <span style={{ color: "#ffffff", fontSize: "0.9375rem" }}>{item.name}</span>
              {item.note && (
                <span style={{ display: "block", color: "#777", fontSize: "0.75rem", marginTop: "0.15rem" }}>{item.note}</span>
              )}
            </div>
            {hasMultiCol ? (
              <>
                <div style={{ textAlign: "right" }}><PriceTag value={item.only!} /></div>
                <div style={{ textAlign: "right" }}><PriceTag value={item.withDrinks!} /></div>
                {hasColeslaw && <div style={{ textAlign: "right" }}><PriceTag value={item.withColeslaw!} /></div>}
              </>
            ) : (
              <PriceTag value={item.price!} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function MenuPage() {
  const [activeTab, setActiveTab] = useState("chicken");
  const tabsRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (tabsRef.current) {
        setIsSticky(tabsRef.current.getBoundingClientRect().top <= 64);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeCategory = CATEGORIES.find((c) => c.id === activeTab)!;

  const scrollTabIntoView = (id: string) => {
    const tabEl = document.getElementById(`tab-${id}`);
    tabEl?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  };

  return (
    <div style={{ paddingTop: "64px", minHeight: "100vh" }}>
      {/* Page header */}
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
          Full Menu
        </span>
        <h1 style={{
          fontFamily: "Anton, sans-serif",
          fontSize: "clamp(3rem, 8vw, 5rem)",
          color: "#ffffff",
          textTransform: "uppercase",
          letterSpacing: "0.03em",
          marginBottom: "1rem",
        }}>
          WHAT'S ON
        </h1>
        <p style={{ color: "#cccccc", fontSize: "0.9375rem", maxWidth: "480px", margin: "0 auto" }}>
          From crispy chicken pieces to grilled seafood — bold flavours, honest prices.
        </p>
      </div>

      {/* Sticky tab nav */}
      <div
        ref={tabsRef}
        style={{
          position: "sticky",
          top: "64px",
          zIndex: 40,
          background: "#1a1a1a",
          borderBottom: `1px solid ${isSticky ? "rgba(232,80,10,0.3)" : "rgba(255,255,255,0.08)"}`,
          transition: "border-color 0.3s",
          overflowX: "auto",
          scrollbarWidth: "none",
        }}
      >
        <div style={{
          display: "flex",
          gap: "0",
          minWidth: "max-content",
          padding: "0 1.5rem",
        }}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              id={`tab-${cat.id}`}
              onClick={() => {
                setActiveTab(cat.id);
                scrollTabIntoView(cat.id);
              }}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "0.875rem 1rem",
                display: "flex",
                alignItems: "center",
                gap: "0.375rem",
                color: activeTab === cat.id ? "#E8500A" : "#888",
                fontFamily: "Inter, sans-serif",
                fontSize: "0.8125rem",
                fontWeight: 600,
                letterSpacing: "0.04em",
                whiteSpace: "nowrap",
                position: "relative",
                transition: "color 0.2s",
              }}
            >
              <span style={{ fontSize: "1rem" }}>{cat.emoji}</span>
              {cat.label}
              {activeTab === cat.id && (
                <span
                  className="tab-underline"
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    background: "#E8500A",
                    borderRadius: "2px 2px 0 0",
                  }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Category content */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2.5rem 1.5rem 4rem" }}>
        <div style={{ marginBottom: "2rem" }}>
          <MenuCard category={activeCategory} />
        </div>

        {/* Add-ons box */}
        <div style={{
          background: "#2a2a2a",
          border: "2px solid rgba(232,80,10,0.4)",
          borderRadius: "8px",
          padding: "1.5rem",
          marginTop: "1.5rem",
        }}>
          <h3 style={{
            fontFamily: "Anton, sans-serif",
            fontSize: "1.125rem",
            color: "#ffffff",
            textTransform: "uppercase",
            letterSpacing: "0.06em",
            marginBottom: "1rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}>
            ➕ Add-Ons & Extras
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginBottom: "1rem" }}>
            {[
              { label: "🧀 Cheese", price: "Rs15" },
              { label: "🍍 Pineapple", price: "Rs15" },
              { label: "🧅 Onions", price: "Rs15" },
              { label: "🍅 Tomato", price: "Rs15" },
              { label: "🥔 Hash Brown", price: "Rs30" },
            ].map((addon) => (
              <div key={addon.label} style={{
                background: "rgba(232,80,10,0.1)",
                border: "1px solid rgba(232,80,10,0.3)",
                borderRadius: "6px",
                padding: "0.5rem 1rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}>
                <span style={{ color: "#ffffff", fontSize: "0.875rem" }}>{addon.label}</span>
                <span style={{ fontFamily: "Anton, sans-serif", color: "#E8500A", fontSize: "0.9375rem" }}>{addon.price}</span>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem" }}>
            <p style={{ color: "#cccccc", fontSize: "0.875rem" }}>
              <span style={{ color: "#E8500A", fontWeight: 700 }}>+Rs10</span> for any sauce
            </p>
            <p style={{ color: "#cccccc", fontSize: "0.875rem" }}>
              <span style={{ color: "#E8500A", fontWeight: 700 }}>+Rs50</span> for 2 hot wings
            </p>
          </div>
        </div>

        {/* Sauce note */}
        <div style={{
          marginTop: "1rem",
          padding: "1rem 1.5rem",
          background: "rgba(232,80,10,0.06)",
          border: "1px solid rgba(232,80,10,0.15)",
          borderRadius: "6px",
          display: "flex",
          flexWrap: "wrap",
          gap: "0.5rem",
          alignItems: "center",
        }}>
          <span style={{ color: "#E8500A", fontSize: "0.875rem", fontWeight: 700 }}>🌶 Sauces (Cup):</span>
          {["Honey Mustard", "Garlic Mayo", "Mexican Hot Sauce", "BBQ Sauce"].map((s) => (
            <span key={s} style={{
              color: "#cccccc",
              fontSize: "0.8125rem",
              padding: "0.2rem 0.625rem",
              background: "rgba(255,255,255,0.05)",
              borderRadius: "4px",
              border: "1px solid rgba(255,255,255,0.07)",
            }}>{s}</span>
          ))}
          <span style={{ color: "#cccccc", fontSize: "0.8125rem", marginLeft: "auto" }}>
            <span style={{ color: "#E8500A", fontWeight: 700 }}>Rs 40</span> each
          </span>
        </div>
      </div>
    </div>
  );
}
