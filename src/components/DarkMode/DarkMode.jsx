import React, { useEffect, useState } from "react";
import { ReactComponent as Sun } from "../../icons/Sun.svg";
import { ReactComponent as Moon } from "../../icons/Moon.svg";
import "./DarkMode.css";

const DarkMode = () => {
    const [darkMode, setDarkMode] = useState(
      () => JSON.parse(localStorage.getItem("darkMode")) || false
    );
  
    useEffect(() => {
      localStorage.setItem("darkMode", JSON.stringify(darkMode));
      const theme = darkMode ? "dark" : "light";
      document.querySelector("body").setAttribute("data-theme", theme);
    }, [darkMode]);
  
    const toggleTheme = (e) => {
      setDarkMode(e.target.checked);
    };
  
    return (
      <div className="dark_mode">
        <input
          className="dark_mode_input"
          type="checkbox"
          id="darkmode-toggle"
          onChange={toggleTheme}
          checked={darkMode}
        />
        <label className="dark_mode_label" htmlFor="darkmode-toggle">
          <Sun />
          <Moon />
        </label>
      </div>
    );
  };
  
  export default DarkMode;
  
