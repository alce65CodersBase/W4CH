import { useContext } from 'react';
import { AppContext } from '../../context/app.context';

export function PageText() {
  const { state } = useContext(AppContext);
  const final = state.nextUrl
    ? state.nextUrl.split('=')[1].split('&')[0]
    : state.count;
  const initial = Number(final) - 19;
  const paginationText = ` ${initial} - ${final} / ${state.count}`;

  return <>{state.pokeData.length ? paginationText : ''}</>;
}
