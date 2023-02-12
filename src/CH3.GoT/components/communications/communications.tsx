import { useEffect, useRef, useContext } from 'react';
import { AppContext } from '../../context/context';
import { CharacterStructure } from '../../models/character';
import { communications, text, picture, on } from './communications.module.css';

export function Communications() {
  const {
    state: { whoIsTalking },
  } = useContext(AppContext);
  if (!whoIsTalking) return <></>;
  const character: CharacterStructure = whoIsTalking;
  const html = useRef<HTMLElement>(null);

  useEffect(() => {
    html.current?.classList.toggle(on);
  }, [html]);

  const title = 'Communications';
  const fullName = `${character.name} ${character.family}`;
  const image = `img/${character.name.toLowerCase()}.jpg`;
  return (
    <section
      className={communications + ' ' + on}
      aria-label={title}
      ref={html}
    >
      <p className={text}>{character.message}</p>
      <img className={picture} src={image} alt={fullName} />
    </section>
  );
}
