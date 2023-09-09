import { useEffect, useState } from 'react';
import './App.scss';
import AllCountries from './components/AllCountries/AllCountries';
import CountriesData from './data/data.json'
import Header from './components/Header/Header';
import SearchAndFilter from './components/SearchAndFilter/SearchAndFilter';

function App() {

  const [countries, setCountries] = useState(CountriesData)
  const [filter, setFilter] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() =>{

  }, [countries])

  return (
    <main className={darkMode ? 'dark' : 'app'}>
      <Header
        darkMode ={darkMode}
        setDarkMode ={setDarkMode}
      />
      <SearchAndFilter 
      filter ={filter}
setFilter ={setFilter}
darkMode={darkMode}
/>
      <AllCountries countries={countries} darkMode ={darkMode}/>
    </main>
  );
}

export default App;
