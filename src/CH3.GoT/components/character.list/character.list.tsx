import { useEffect, useContext } from 'react';
import { AppContext } from '../../context/context';
import { CharacterCard } from '../character.card/character.card';
import { charactersList } from './character.list.module.css';

export function CharacterList() {
  const { state, handleLoad } = useContext(AppContext);

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

  const title = 'CharacterList';
  return (
    <ul className={charactersList} aria-label={title}>
      {state.characters.map((item) => (
        <CharacterCard key={item.name} character={item} />
      ))}
    </ul>
  );
}
