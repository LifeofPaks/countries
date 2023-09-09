import React from "react";
import "./Header.scss";

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className={darkMode ? 'dark' : ''}>
      <h1>Where in the world?</h1>

      <div className="displayMode" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? (
          <img
            src="https://img.icons8.com/ios-glyphs/90/FFFFFF/sun--v1.png"
            alt="sun--v1"
          />
        ) : (
          <img
            src="https://img.icons8.com/ios-glyphs/90/333333/moon-symbol.png"
            alt="moon-symbol"
          />
        )}

        {darkMode ? <p>Light Mode</p> : <p>Dark Mode</p>}
      </div>
    </header>
  );
};

export default Header;
