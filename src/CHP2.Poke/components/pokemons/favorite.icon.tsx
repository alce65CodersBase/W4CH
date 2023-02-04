import { useState, useContext, SyntheticEvent } from 'react';
import { AppContext } from '../../context/app.context';
// TEMP import { consoleDebug } from '../../../lib/debug';

export function FavoriteIcon({ pokeId }: { pokeId: number }) {
  const { favorites, changeFavorites } = useContext(AppContext);

  let iconType = favorites.find((item) => Number(item.id) === Number(pokeId))
    ? 'fas'
    : 'far';
  const initialIconClassList = `icon--score ${iconType} fa-heart`;
  const [iconClassList, setIconClassList] = useState(initialIconClassList);

  const handleIconFavorite = async (ev: SyntheticEvent) => {
    ev.preventDefault();
    iconType = iconType === 'far' ? 'fas' : 'far';
    setIconClassList(`icon--score ${iconType} fa-heart`);
    await changeFavorites(pokeId);

    // TEMP let favoritesList: any | null = null;
    // if (document.querySelector('.my-poke-list')) {
    //   favoritesList = new MyPokeList('.my-poke-list', newState);
    // }

    // const target = favoritesList ? 'In Favorites page' : 'In Other page';
    // consoleDebug('Favorite state changed' + target);
  };

  return (
    <i role="button" className={iconClassList} onClick={handleIconFavorite}></i>
  );
}
