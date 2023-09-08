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
                <h1>{name}</h1>
                <h2>Population : <span>{population}</span></h2>
                <h2>Region : <span>{region}</span></h2>
                <h2>Capital : <span>{capital}</span></h2>
                </div>
              
            </section>
        )
      })}
    </div>
  );
};

export default AllCountries;
