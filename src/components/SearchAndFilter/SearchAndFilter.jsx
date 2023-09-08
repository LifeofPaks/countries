import React from "react";
import "./SearchAndFilter.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const SearchAndFilter = () => {
  return (
    <section className="searchAndFilter">
      <form>
        <button>
          <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
        </button>
        <input type="text" placeholder="Search for a country..." />
      </form>

      <div className="filterWrapper">
        <div className="filterHeader">
          <p>Filter by Region</p>
          <button>
            <FontAwesomeIcon icon={faChevronDown} className="down" />
          </button>
        </div>

        <ul className="regions">
            <li>Africa</li>
            <li>America</li>
            <li>Asia</li>
            <li>Europe</li>
            <li>Oceania</li>
        </ul>
      </div>
    </section>
  );
};

export default SearchAndFilter;
