import React, { useEffect, useState } from "react";
import "./Country.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";

const Country = ({ darkMode }) => {
  const [country, setCountry] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const resp = await fetch(`https://restcountries.com/v3.1/name/${name}`);
        const data = await resp.json();
        setCountry(data)
      } catch (e) {
        console.error(e);
      }
    };

    fetchCountryData();
  }, [name]);

  return (
    <div className={`country ${darkMode ? "dark" : ""}`}>
      <Link to="/">
        <FontAwesomeIcon icon={faArrowLeftLong} className="icon" />
        Back
      </Link>
      {country?.map((data) => {
        const {
          name,
          ccn3,
          flags,
          population,
          region,
          borders,
          subregion,
          capital,
          tld,
          languages,
          currencies,
        } = data;

        return (
          <div className="container" key={ccn3}>

            <div className="flag">

            <img src={flags.png} alt={name.common} />
            </div>

            <div className="details">
              <h1>{name.common}</h1>

              <div className="row">
                <div className="left">
                  <p>
                    Native Name:{" "}
                    <span>
                      {Object.entries(name.nativeName)[0][1].official}
                    </span>
                  </p>
                  <p>
                    Population: <span>{population.toLocaleString()}</span>
                  </p>
                  <p>
                    Region: <span>{region}</span>
                  </p>
                  <p>
                    Sub Region: <span>{subregion}</span>
                  </p>
                  <p>
                    Capital: <span>{capital[0]}</span>
                  </p>
                </div>

                <div className="right">
                  <p>
                    Top Level Domian: <span>{tld[0]}</span>
                  </p>
                  <p>
                    Currencies:{" "}
                    <span>{Object.entries(currencies)[0][1].name}</span>
                  </p>

                  <div className="languages">
                    <p>Languages:</p>
                    <div>
                      {Object.values(languages)?.map((item, index) => (
                        <span key={index}>{item}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="borderCountries">
                <p>Border Countries: </p>
                <ul className="borders">
                  {borders?.map((item, index) => (
                    <li className={darkMode ? "dark" : ""} key={index}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Country;
