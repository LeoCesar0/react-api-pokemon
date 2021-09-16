import api from "../../services/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

import styles from "./styles.module.css";

interface IPokemon {
  pokemon: string;
}

const Pokemon: React.FC = () => {
  const [pokemon, setPokemon] = useState();
  const { pokemon: pokemonName } = useParams<IPokemon>();

  const getPokemonData = async () => {
    const { data } = await api.get(`pokemon/${pokemonName}`);

    setPokemon(data);

    console.log(pokemon);
  };

  useEffect(() => {
    getPokemonData();
  }, []);

  return (
    <div>
      <h1 className={styles.title}>Pagina do pokemon: {pokemonName}</h1>
      <p>Habilidade: </p>
    </div>
  );
};

export default Pokemon;
