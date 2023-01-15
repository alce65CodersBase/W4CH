import { MOCK_DATA_JSON } from '../../mocks/characters';
import { CharacterStructure } from '../../models/character';
import { CharacterCard } from '../character.card/character.card';
import { charactersList } from './character.list.module.css';

export function CharacterList() {
  const title = 'CharacterList';
  const characters = MOCK_DATA_JSON;
  console.log(characters);
  return (
    <ul className={charactersList + ' row list-unstyled'} aria-label={title}>
      {characters.map((item) => (
        <CharacterCard key={item.name} character={item as CharacterStructure} />
      ))}
    </ul>
  );
}
