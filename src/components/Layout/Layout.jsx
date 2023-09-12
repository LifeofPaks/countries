import React, { useState } from "react";
import "./Layout.scss";
import SearchAndFilter from "../SearchAndFilter/SearchAndFilter";
import AllCountries from "../AllCountries/AllCountries";
import Header from "../Header/Header";


const Layout = ({
  darkMode,
  setDarkMode,
  filter,
  setFilter,
  countries,
  setCountries
}) => {
  

  return (
    <div className="layout">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <SearchAndFilter
        filter={filter}
        setFilter={setFilter}
        darkMode={darkMode}
        setCountries={setCountries}
      />
      <AllCountries countries={countries} darkMode={darkMode} />
    </div>
  );
};

export default Layout;
