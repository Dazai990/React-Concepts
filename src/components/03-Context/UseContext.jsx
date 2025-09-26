import React, { useContext } from "react";
import { ThemeContext } from "./CreateContext";

function Context() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav style={{ background: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff" }}>
      <h1>My App</h1>
      <button onClick={toggleTheme}>Switch Theme</button>
    </nav>
  );
}

export default Context;
