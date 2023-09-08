import React from "react";
import "./AllCountries.scss";

const AllCountries = ({ countries }) => {

  return (
    <div className="countries">
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
                <div>
                <img src={flags.png} alt={name} />
                <h2>{name}</h2>
                <h3>Population : <span>{population}</span></h3>
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
