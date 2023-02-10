import { useContext } from 'react';
import { AppContext } from '../../context/app.context';
import { PokeList } from './poke.list';

export function MyPokeList() {
  const { favorites } = useContext(AppContext);
  return (
    <>
      <h2>Pokemons favoritos</h2>
      <div className="my-poke-list">
        <ul className="my-poke-list__list">
          <PokeList source="favorites" pokeData={favorites}></PokeList>
        </ul>
      </div>
    </>
  );
}
