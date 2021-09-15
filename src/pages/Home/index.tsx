import api from "../../services/api";

import PokemonItem from "../../components/PokemonItem";
import PokemonLogo from "../../assets/images/pokemon.png"

import styles from './styles.module.css'

function Home() {
  api.get('pokemon')

  return (
    <div className={styles.container}>
      <img src={PokemonLogo} alt="" className={styles.logo} />
      <h1 className={styles.title}>Meu site React</h1>
      <PokemonItem name="Pikachu" />
      <PokemonItem name="Charmander" />
      <PokemonItem name="Bulbasaur" />
      <PokemonItem name="Onix" />
    </div>
  );
}

export default Home;
