import api from "../../services/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

import styles from "./styles.module.css";

interface IPokemon {
  name: string;
  weight: number;
  height: number;
  id: number;
  species: { name: string; url: string };
  base_experience: number;
  types: { type: { name: string }; url: string }[];
  abilities: { ability: { name: string; url: string }; slot: number }[];
  sprites: {
    front_default: string;
    other: {
      dream_world: { front_default: string };
      official_artwork: { front_default: string };
    };
  };
}

interface IParams {
  pokemon: string;
}

const Pokemon: React.FC = () => {
  const [pokemon, setPokemon] = useState<IPokemon>();
  const { pokemon: pokemonName } = useParams<IParams>();

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
      <h1 className={styles.title} onClick={() => getPokemonData()}>
        Pagina do pokemon: {pokemonName}
      </h1>
      <p>Habilidade: {pokemon?.abilities[0].ability.name}</p>
    </div>
  );
};

export default Pokemon;
