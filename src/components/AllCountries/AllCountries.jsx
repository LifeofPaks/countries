import React from "react";
import "./AllCountries.scss";

const AllCountries = ({ countries, darkMode }) => {

  return (
    <div className={`countries ${darkMode ? 'dark' : ''}`}>
      {countries.map((country) => {
        const {
          name,
          flags,
          population,
          region,
          capital,
          numericCode,
        } = country;

        return(
            <section key={numericCode}>
                <img src={flags.png} alt={name} />
                <div>
                <h2>{name}</h2>
                <h3>Population : <span>{population.toLocaleString()}</span></h3>
                <h3>Region : <span>{region}</span></h3>
                <h3>Capital : <span>{capital}</span></h3>
                </div>
              
              
            </section>
        )
      })}
    </div>
  );
};

export default AllCountries;
