import React, { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState(
    typeof window !== "undefined" ? localStorage.theme || "light" : "light"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      style={{
        padding: "5px 8px",
        background: "transparent",
        border: "none",
        display: "flex",
        borderRadius: "2px",
        width: "max-content",
        height: "auto",
        outline: "none",
        boxShadow: "none",
      }}
    >
      <i className={`fas fa-${theme === "light" ? "sun" : "moon"}`}></i>
    </button>
  );
}
