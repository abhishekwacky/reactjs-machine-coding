import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  console.log("Theme", theme);
  return (
    <nav className="navbar">
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </div>
      <div>
        <label>
          Change Mode
          <input
            type="checkbox"
            onChange={toggleTheme}
            checked={theme === "dark"}
          />
        </label>
      </div>
    </nav>
  );
};

export default Navbar;
