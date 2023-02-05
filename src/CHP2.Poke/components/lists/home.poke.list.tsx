import { useContext } from 'react';
import { AppContext } from '../../context/app.context';
import { PageText } from './page.text';
import { PokeList } from './poke.list';
import { Pagination } from '../pokemons/pagination';

export function HomePokeList() {
  const {
    state: { pokeData },
  } = useContext(AppContext);
  return (
    <>
      <h2>
        Lista de Pokemons
        <PageText></PageText>
      </h2>
      <ul className="poke-list__list">
        <PokeList pokeData={pokeData}></PokeList>
      </ul>
      <div className="pagination">
        <Pagination></Pagination>
      </div>
    </>
  );
}
