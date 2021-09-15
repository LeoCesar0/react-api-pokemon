import api from "../../services/api";
import { useEffect, useState } from "react";

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

    useEffect(() => {
      getAllPokemons()
    }, [])

  console.log({ pokemons })

  return (
    <div className={styles.container}>
      <img src={PokemonLogo} alt="" className={styles.logo} onClick={() => getAllPokemons()} />
      <h1 className={styles.title}>Meu site React</h1>
      
      {
        pokemons ?
        pokemons?.map((pokemon, index) => (
          <PokemonItem name={pokemon.name} key={index} />
        ))
        : <h1>Carregando...</h1>
      }

    </div>
  );
}

export default Home;
