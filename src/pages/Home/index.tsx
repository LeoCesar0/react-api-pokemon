import api from "../../services/api";
import { useState } from "react";

import PokemonItem from "../../components/PokemonItem";
import PokemonLogo from "../../assets/images/pokemon.png"

import styles from './styles.module.css'

interface IPokemons{
  name: string
  url: string
}

interface IResponse{
  count: number
  next: string | null
  previous: string | null
  results: IPokemons[]
}

function Home() {
  const [pokemons, setPokemons] = useState<IPokemons[]>()

  const getAllPokemons = async () => {
    const { data } = await api.get<IResponse>('pokemon')
    
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
