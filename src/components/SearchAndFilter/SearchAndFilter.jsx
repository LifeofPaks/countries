import React, { useState } from "react";
import "./SearchAndFilter.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const SearchAndFilter = ({
  darkMode,
  setCountries,
  filter,
  setFilter
}) => {
  const [searchCountry, setSearchCountry] = useState("");

  const regions = [
    {
      name: "Africa",
    },

    {
      name: "America",
    },

    {
      name: "Asia",
    },

    {
      name: "Europe",
    },

    {
      name: "Oceania",
    },
  ];

  //   GET SEARCHED COUNTRY FUNCTION
  const getSearchedCountry = async () => {
    try {
      const resp = await fetch(
        `https://restcountries.com/v3.1/name/${searchCountry}`
      );
      const data = await resp.json();
      setCountries(data);
    } catch (e) {
      console.error(e);
      setCountries([])
    }
  };

  const handleSearchCountry = (e) => {
    e.preventDefault();
    getSearchedCountry();
    setSearchCountry("");
  };

  //   FILTER BY REGION FUNCTION
  const handleFilterByRegion = (e) => {
    e.preventDefault();
    filterByRegion();
  };

  const filterByRegion = async (region) => {
    try {
      const resp = await fetch(
        `https://restcountries.com/v3.1/region/${region}`
      );
      const data = await resp.json();
      setCountries(data);
    } catch (e) {
      console.error(e);
      setCountries([])
    }
  };

  return (
    <section className={`searchAndFilter ${darkMode ? "dark" : ""}`}>
      <form onSubmit={handleSearchCountry} className="form">
        <button>
          <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
        </button>
        <input
          type="text"
          placeholder="Search for a country..."
          value={searchCountry}
          onChange={(e) => setSearchCountry(e.target.value)}
        />
      </form>


      <form onSubmit={handleFilterByRegion} className="filterWrapper" onClick={() => setFilter(!filter)}>
        <select
          name="Filter by region"
          id="filter-by-region"
          className="filterHeader"
          value={regions.name}
          onChange={(e) => filterByRegion(e.target.value)}
        >
          {regions.map((region, index) => (
            <option key={index} value={region.name}>
              {region.name}
            </option>
          ))}
        </select>

        <FontAwesomeIcon
              icon={faChevronDown}
              className={`down ${filter ? "rotate" : ""}`}
            />
      </form>
    </section>
  );
};

export default SearchAndFilter;
