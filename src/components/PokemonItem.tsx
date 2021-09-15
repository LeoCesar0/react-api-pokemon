interface IProps {
  name: string;
}

const PokemonItem: React.FC<IProps> = ({ name }) => {
  return (
    <div>
      <h2>{name}</h2>
    </div>
  );
}

export default PokemonItem;
