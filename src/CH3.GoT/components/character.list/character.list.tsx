import { createCharacters } from '../../services/characters';
import { CharacterCard } from '../character/character.card';
import { charactersList } from './character.list.module.css';

export function CharacterList() {
  const title = 'CharacterList component';
  const characters = createCharacters();
  console.log(characters);
  return (
    <ul className={charactersList + ' row list-unstyled'} aria-label={title}>
      {characters.map((item) => (
        <CharacterCard key={item.name} character={item} />
      ))}
    </ul>
  );
}
