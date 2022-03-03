import React, {useEffect, useState} from 'react';
import './App.css';

function App() {

  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
        .then(res => res.json())
        .then(res => setPokemon(res.results))
        .catch((err)=>console.log(err))
}, []);

  return (
    <div className="App" style={{ width: "200px", margin: "auto" }}>
      <ul>
        {
          pokemon.map((pokemon, index) => {
            return (<li key={index}>{pokemon.name}</li>)
          })
        }
      </ul>
    </div>
  );
}

export default App;
