import React from 'react';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Country from './components/Country/Country';

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => setCountries(data))
      .catch(error => console.log(error))
  }, []);
  return (
    <div className="App">
      <h2>Data Loded : {countries.length}</h2>
      {
        countries.map((country) => <Country country={country}></Country>)
      }
    </div>
  );
}

export default App;
