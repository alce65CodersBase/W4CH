import { MOCK_KING } from '../../mocks/characters';
import { CharacterStructure } from '../../models/character';
import { communications, text, picture } from './communications.module.css';

export function Communications() {
  const character: CharacterStructure = MOCK_KING;

  const title = 'Communications';

  const fullName = `${character.name} ${character.family}`;
  const image = `img/${character.name.toLowerCase()}.jpg`;
  return (
    <section className={communications} aria-label={title}>
      <p className={text}>{character.message}</p>
      <img className={picture} src={image} alt={fullName} />
    </section>
  );
}
