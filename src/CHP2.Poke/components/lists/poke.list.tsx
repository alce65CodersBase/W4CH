import { Pokemon } from '../../models/pokemon';
import { PokeItem } from '../pokemons/poke.item';

type PokeListProps = { pokeData: Pokemon[] };
export function PokeList({ pokeData }: PokeListProps) {
  return (
    <>
      {pokeData.map((poke: Pokemon) => (
        <PokeItem key={poke.id} poke={poke} source={''}></PokeItem>
      ))}
    </>
  );
}
