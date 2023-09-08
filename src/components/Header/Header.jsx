import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <h1>Where in the world?</h1>

      <div className="displayMode">
        <img
          src="https://img.icons8.com/ios-glyphs/90/333333/moon-symbol.png"
          alt="moon-symbol"
        />
        <p>Dark Mode</p>
      </div>
    </header>
  );
};

export default Header;
