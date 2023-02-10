import { useState, useContext, SyntheticEvent } from 'react';
import { AppContext } from '../../context/app.context';
import { consoleDebug } from '../../../lib/debug';

type FavoriteIconProps = {
  pokeId: number;
  source: 'home' | 'favorites';
};
export function FavoriteIcon({ pokeId, source }: FavoriteIconProps) {
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

    const target =
      source === 'favorites' ? 'In Favorites page' : 'In Other page';
    consoleDebug('Favorite state changed' + target);
  };

  return (
    <i role="button" className={iconClassList} onClick={handleIconFavorite}></i>
  );
}
