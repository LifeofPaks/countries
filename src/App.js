import { useEffect, useState } from 'react';
import './App.scss';
import AllCountries from './components/AllCountries/AllCountries';
import CountriesData from './data/data.json'
import Header from './components/Header/Header';
import SearchAndFilter from './components/SearchAndFilter/SearchAndFilter';

function App() {

  const [countries, setCountries] = useState(CountriesData)

  useEffect(() =>{

  }, [countries])

  return (
    <main className="App">
      <Header/>
      <SearchAndFilter/>
      <AllCountries countries={countries}/>
    </main>
  );
}

export default App;
