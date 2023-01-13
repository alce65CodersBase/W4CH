import { Character } from '../../models/character';
import { communications, text, picture, on } from './communications.module.css';

type CommunicationsProps = {
  character: Character;
};

export const showCommunication = (element: HTMLElement) => {
  element.classList.toggle(on);
  setTimeout(() => {
    element.classList.toggle(on);
    element.innerHTML = '';
  }, 2000);
};

export function Communications({ character }: CommunicationsProps) {
  const title = 'Communications component';

  const fullName = `${character.name} ${character.family}`;
  const image = `img/${character.name.toLowerCase()}.jpg`;
  return (
    <div className={communications} aria-label={title}>
      <p className={text}>{character.communicate()}</p>
      <img className={picture} src={image} alt={fullName} />
    </div>
  );
}
