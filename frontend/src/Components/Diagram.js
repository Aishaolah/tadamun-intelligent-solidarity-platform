// frontend/src/Components/Diagram.js
export default function Diagram() {
  const partners = [
    { src: "/red-crescent.jpeg", name: "Algerian Red Crescent" },
    { src: "/unicef.jpeg", name: "UNICEF" },
    { src: "/fao.svg", name: "FAO" },
    { src: "/djezzy.jpeg", name: "Djezzy" },
    { src: "/ooredoo.jpeg", name: "Ooredoo" },
  ];

  return (
    <section
      style={{
        background: "#f5f4ef",
        padding: "60px 10px",
        borderTop: "2px solid #d1d5db",
        borderRadius: "12px",
        margin: "60px auto 0",
        maxWidth: 1100,
      }}
    >
      {/* Professional Title */}
      <h2
        style={{
          textAlign: "center",
          marginBottom: "40px",
          fontWeight: 800,
          color: "#1e3932", // Tadamun's dark green tone
          fontSize: "2rem",
          letterSpacing: "0.5px",
          textTransform: "capitalize",
        }}
      >
        Our Trusted Partners in Humanitarian Collaboration
      </h2>

      {/* Grid of Logos */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: 20,
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        {partners.map((p) => (
          <figure key={p.name} style={{ margin: 0, textAlign: "center" }}>
            <div
              style={{
                width: 120,
                height: 120,
                borderRadius: "50%",
                background: "#fff",
                display: "grid",
                placeItems: "center",
                boxShadow: "0 4px 12px rgba(2,6,23,0.08)",
                overflow: "hidden",
              }}
            >
              <img
                src={p.src}
                alt={p.name}
                style={{
                  width:
                    p.name === "Djezzy" || p.name === "Ooredoo"
                      ? "75%"
                      : "80%",
                  height:
                    p.name === "Djezzy" || p.name === "Ooredoo"
                      ? "75%"
                      : "80%",
                  objectFit: "contain",
                  backgroundColor: "#fff",
                  padding:
                    p.name === "Djezzy" || p.name === "Ooredoo"
                      ? "6px"
                      : "2px",
                  borderRadius: "0%",
                }}
              />
            </div>
            <figcaption
              style={{
                marginTop: 10,
                fontSize: 13,
                color: "#334155",
                fontWeight: 600,
              }}
            >
              {p.name}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

