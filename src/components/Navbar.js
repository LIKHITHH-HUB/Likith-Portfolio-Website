import { useState, useEffect } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];

      sections.forEach((id) => {
        const el = document.getElementById(id);

        //  check if element exists
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        padding: "20px 10%",
        display: "flex",
        justifyContent: "space-between",
        backdropFilter: "blur(10px)",
        zIndex: 1000,
      }}
    >
      <h3 style={{ color: "#a855f7" }}>likhithrao2223@gmail.com</h3>

      <div style={{ display: "flex", gap: "20px" }}>
        {["home", "about", "skills", "projects", "contact"].map((item) => (
          <a
            key={item}
            href={`#${item}`}
            style={{
              color: active === item ? "#ec4899" : "white",
              textDecoration: "none",
              cursor: "pointer"
            }}
          >
            {item.toUpperCase()}
          </a>
        ))}
      </div>
    </nav>
  );
}