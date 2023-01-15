import { CharacterStructure } from '../../models/character';
import { Icon } from '../icon/icon';
import { body, card, info, name, picture } from './character.card.module.css';
import { BackCard } from '../back.card/back.card';

export function CharacterCard({
  character,
}: {
  character: CharacterStructure;
}) {
  const fullName = `${character.name} ${character.family}`;
  const image = `img/${character.name.toLowerCase()}.jpg`;
  const state = character.isAlive ? (
    <i className="fas fa-thumbs-up" role="status" aria-label="alive"></i>
  ) : (
    <i className="fas fa-thumbs-down" role="status" aria-label="dead"></i>
  );

  const template = (
    <div className={' character ' + character.name}>
      <li className={card + ' card'}>
        <img
          src={image}
          alt={fullName}
          className={
            picture + ' card-img-top ' + (character.isAlive ? '' : 'turn')
          }
        />
        <div className={body}>
          <h2 className={name + ' card-title h4'}>{fullName}</h2>
          <div className={info}>
            <ul className="list-unstyled">
              <li>Edad: {character.age} años</li>
              <li>Estado: {state}</li>
            </ul>
          </div>
          <BackCard character={character}></BackCard>
        </div>
        <Icon category={character.category} isAlive={character.isAlive}></Icon>
      </li>
    </div>
  );

  return template;
}
