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
      "official-artwork": { front_default: string };
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
    <div className="container">
      <h1 className={styles.title} onClick={() => getPokemonData()}>
        {pokemonName}
      </h1>
      <main className={styles.pokemonCard}>
        <img
          src={pokemon?.sprites.other["official-artwork"].front_default}
          alt={pokemon?.name}
        />

        <div className={styles.details}>
          <p className={styles.item}>Specie: {pokemon?.species.name} </p>
          <p className={styles.item}>
            Types: {pokemon?.types.map((item) => item.type.name).join(", ")}
          </p>
          <p className={styles.item}>
            Base Experience: {pokemon?.base_experience} XP
          </p>
          <p className={styles.item}>Height: {pokemon?.height} (decimetres)</p>
          <p className={styles.item}>
            Abilities:{" "}
            {pokemon?.abilities.map((item) => item.ability.name).join(", ")}
          </p>
          <p className={styles.item}>Weight: {pokemon?.weight} (hectograms)</p>
        </div>
      </main>

      <button className={styles.button} onClick={() => {window.location.href = '/'}}>
        voltar
      </button>

    </div>
  );
};

export default Pokemon;
