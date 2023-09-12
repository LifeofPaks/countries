import React from "react";
import "./AllCountries.scss";
import { Link } from "react-router-dom";

const AllCountries = ({ countries, darkMode }) => {


  return (
    <div className={`countries ${darkMode ? "dark" : ""}`}>
      {countries?.map((country) => {
        const { name, flags, population, region, capital,  } = country;

        return (
          <section key={population}>
            <Link to={`/countries/${name.common}`}>
              <img src={flags.png} alt={name.common} />
              <div>
                <h2>{name.common}</h2>
                <h3>
                  Population : <span>{population.toLocaleString()}</span>
                </h3>
                <h3>
                  Region : <span>{region}</span>
                </h3>
                <h3>
                  Capital : <span>{capital}</span>
                </h3>
              </div>
            </Link>
          </section>
        );
      })}
    </div>
  );
};

export default AllCountries;
