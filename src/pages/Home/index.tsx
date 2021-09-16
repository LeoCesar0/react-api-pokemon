import api from "../../services/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import PokemonItem from "../../components/PokemonItem";
import PokemonLogo from "../../assets/images/pokemon.png";

import styles from "./styles.module.css";

interface IPokemons {
  name: string;
  url: string;
}

interface IResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: IPokemons[];
}

function Home() {
  const [pokemons, setPokemons] = useState<IPokemons[]>();

  const getAllPokemons = async () => {
    const { data } = await api.get<IResponse>("pokemon");

    setPokemons(data.results);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  console.log({ pokemons });

  return (
    <div className="container">
      <img
        src={PokemonLogo}
        alt=""
        className={styles.logo}
        onClick={() => getAllPokemons()}
      />
      <h1 className={styles.title}>My Poke API :D</h1>

      <main className={styles.pokemons}>
        {pokemons ? (
          pokemons?.map((pokemon, index) => (
            <div className={styles.item} key={index}>
              <Link className={styles.pokemon_link} to={`/${pokemon.name}`} >
                <PokemonItem name={pokemon.name} />
              </Link>
            </div>
          ))
        ) : (
          <h1 className={styles.loading}>Loading...</h1>
        )}
      </main>
    </div>
  );
}

export default Home;
