import { useEffect, useState } from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Country from "./components/Country/Country";
import Layout from "./components/Layout/Layout";

function App() {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() =>{
    const fetchAllCountryData = async() =>{
        const resp = await fetch ('https://restcountries.com/v3.1/all')
        const respData =  await resp.json()

      setCountries(respData.slice(0, 12))
    }

    fetchAllCountryData()
}, [])

  return (
    <main className="app">
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              filter={filter}
              setFilter={setFilter}
              countries={countries}
              setCountries={setCountries}
            />
          }
        />
        <Route
          path="/countries/:name"
          element={<Country darkMode={darkMode} />}
        />
      </Routes>
    </main>
  );
}

export default App;
