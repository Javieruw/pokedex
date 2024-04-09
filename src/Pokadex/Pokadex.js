import logo from "../logo.svg";
import PokemonCard from "../PokemonCard/PokemonCard";
import React, { useState, useCallback, useEffect } from "react";
import "../App.css";

function Pokadex() {
  const api = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";
  const [pokemons, setPokemons] = useState([]);
  const [next, setNext] = useState(null);
  const [prev, setPrev] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedPokemon, setSelectedPokemon] = useState(undefined);
  async function fetchData(url) {
    let ani = await fetch(url);
    let d = await ani.json();
    const data = d.results.map((pokemon) => pokemon.url);
    setNext(d.next);
    setPrev(d.previous);
    console.log(pokemons);
    setPokemons(data);
    setIsLoading(false);
  }
  useEffect(() => {}, [pokemons]);
  useEffect(() => {
    fetchData(api);
  }, []);

  return (
    <>
      <div className="wrapper" key={pokemons}>
        {pokemons?.map((pokemon) => (
          <PokemonCard url={pokemon} />
        ))}
      </div>
      <button onClick={() => fetchData(prev)}>Prev</button>
      <button onClick={() => fetchData(next)}>Next</button>
    </>
  );
}
export default Pokadex;
