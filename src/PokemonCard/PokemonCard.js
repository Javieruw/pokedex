import React, { useState, useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import "./PokemonCard.css";
import PokemonModal from "../PokemonModal/PokemonModal";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";

function PokemonCard({ url }) {
  const [pokemon, setPokemon] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [opened, { open, close }] = useDisclosure(false);

  async function fetchData() {
    console.log("FEtch Data");
    let ani = await fetch(url);
    let d = await ani.json();
    setPokemon(d);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="card">
      <div className="card-details" onClick={open}>
        <img src={pokemon?.sprites.front_default}></img>

        <div className="id">#{pokemon?.id}</div>
        <div className="name">{pokemon?.name}</div>
      </div>
      <PokemonModal opened={opened} close={close} pokemon={pokemon} />
    </div>
  );
}
PokemonCard.propTypes = {
  url: PropTypes.string.isRequired,
};
export default PokemonCard;
