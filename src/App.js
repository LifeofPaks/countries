import { useEffect, useState } from "react";
import "./App.scss";
import AllCountries from "./components/AllCountries/AllCountries";
import CountriesData from "./data/data.json";
import Header from "./components/Header/Header";
import SearchAndFilter from "./components/SearchAndFilter/SearchAndFilter";
import { Route, Routes } from "react-router-dom";
import Country from "./components/Country/Country";

function App() {
  const [countries, setCountries] = useState(CountriesData);
  const [filter, setFilter] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // useEffect(() => {


  // }, []);


  const Layout = ()=>{
    return(
      <div className="main">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
       <SearchAndFilter
        filter={filter}
        setFilter={setFilter}
        darkMode={darkMode}

      />
        <AllCountries countries={countries} darkMode={darkMode}/>
      </div>
    )
  }

  return (
    <main className="app">
      <Routes>
        <Route path="/" element={<Layout/>}/>
        <Route path="/countries/:name" element={ <Country darkMode={darkMode} />}/>
       
      </Routes>
    </main>
  );
}


export default App;
