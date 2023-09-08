import { useEffect, useState } from 'react';
import './App.scss';
import AllCountries from './components/AllCountries/AllCountries';
import CountriesData from './data/data.json'

function App() {

  const [countries, setCountries] = useState(CountriesData)

  useEffect(() =>{

  }, [countries])

  return (
    <main className="App">
      <AllCountries countries={countries}/>
    </main>
  );
}

export default App;
