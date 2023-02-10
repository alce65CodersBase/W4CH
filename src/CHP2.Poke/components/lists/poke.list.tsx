import { Pokemon } from '../../models/pokemon';
import { PokeItem } from '../pokemons/poke.item';

type PokeListProps = {
  source: 'home' | 'favorites';
  pokeData: Pokemon[];
};
export function PokeList({ source, pokeData }: PokeListProps) {
  return (
    <>
      {pokeData.map((poke: Pokemon) => (
        <PokeItem key={poke.id} poke={poke} source={source}></PokeItem>
      ))}
    </>
  );
}
