import React from "react";
import "./AllCountries.scss";
import { Link } from "react-router-dom";

const AllCountries = ({ countries, darkMode }) => {

  return (

        countries && 
        <div className={`countries ${darkMode ? 'dark' : ''}`}>
      {countries?.map((country) => {
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
                <Link  to={`/countries/${name}`}>
                <img src={flags.png} alt={name} />
                <div>
                <h2>{name}</h2>
                <h3>Population : <span>{population.toLocaleString()}</span></h3>
                <h3>Region : <span>{region}</span></h3>
                <h3>Capital : <span>{capital}</span></h3>
                </div>

                </Link>
              
              
            </section>
        )
      })}
    </div>

    
  );
};

export default AllCountries;
