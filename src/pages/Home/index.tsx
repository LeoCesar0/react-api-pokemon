import api from "../../services/api";
import { useState } from "react";

import PokemonItem from "../../components/PokemonItem";
import PokemonLogo from "../../assets/images/pokemon.png"

import styles from './styles.module.css'

function Home() {
  const [pokemons, setPokemons] = useState()

  const getAllPokemons = async () => {
    const { data } = await api.get('pokemon')
    
    setPokemons(data.results)
  }

  console.log({ pokemons })

  return (
    <div className={styles.container}>
      <img src={PokemonLogo} alt="" className={styles.logo} onClick={() => getAllPokemons()} />
      <h1 className={styles.title}>Meu site React</h1>
      <PokemonItem name="Pikachu" />
      <PokemonItem name="Charmander" />
      <PokemonItem name="Bulbasaur" />
      <PokemonItem name="Onix" />
    </div>
  );
}

export default Home;
