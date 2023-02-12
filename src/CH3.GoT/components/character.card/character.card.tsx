import { CharacterStructure } from '../../models/character';
import { Icon } from '../icon/icon';
import { body, card, info, name, picture } from './character.card.module.css';
import { BackCard } from '../back.card/back.card';
import {
  library,
  IconLookup,
  IconDefinition,
  findIconDefinition,
} from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fas);

export function CharacterCard({
  character,
}: {
  character: CharacterStructure;
}) {
  const fullName = `${character.name} ${character.family}`;
  const image = `img/${character.name.toLowerCase()}.jpg`;

  const upLookup: IconLookup = { prefix: 'fas', iconName: 'thumbs-up' }; // "fa-thumbs-up"
  const upIconDefinition: IconDefinition = findIconDefinition(upLookup);

  const downLookup: IconLookup = { prefix: 'fas', iconName: 'thumbs-down' }; // 'fa-thumbs-down'
  const downIconDefinition: IconDefinition = findIconDefinition(downLookup);

  const state = character.isAlive ? (
    <span role="status" aria-label="alive">
      <FontAwesomeIcon icon={upIconDefinition} />
    </span>
  ) : (
    <span role="status" aria-label="dead">
      <FontAwesomeIcon icon={downIconDefinition} />
    </span>
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
