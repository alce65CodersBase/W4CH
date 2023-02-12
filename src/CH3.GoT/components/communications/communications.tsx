import { useEffect, useContext, useState } from 'react';
import { AppContext } from '../../context/context';
import { CharacterStructure } from '../../models/character';
import { communications, text, picture, on } from './communications.module.css';

export function Communications() {
  const {
    state: { whoIsTalking },
  } = useContext(AppContext);

  const [classCss, setClassCss] = useState(communications);

  useEffect(() => {
    setClassCss(communications + ' ' + on);
  }, []);

  if (!whoIsTalking) return <></>;

  const character: CharacterStructure = whoIsTalking;
  const title = 'Communications';
  const fullName = `${character.name} ${character.family}`;
  const image = `img/${character.name.toLowerCase()}.jpg`;
  return (
    <section className={classCss} aria-label={title}>
      <p className={text}>{character.message}</p>
      <img className={picture} src={image} alt={fullName} />
    </section>
  );
}
