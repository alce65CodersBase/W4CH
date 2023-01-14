import { Character } from '../../models/character';
import { Icon } from '../icon/icon';
import { body, card, info, name, picture } from './character.card.module.css';
import { BackCard } from '../back.card/back.card';
import { Communications } from '../communications/communications';

export function CharacterCard({ character }: { character: Character }) {
  const fullName = `${character.name} ${character.family}`;
  const image = `img/${character.name.toLowerCase()}.jpg`;
  const state = character.isAlive ? (
    <i className="fas fa-thumbs-up"></i>
  ) : (
    <i className="fas fa-thumbs-down"></i>
  );

  const template = (
    <div className={' character ' + character.name}>
      <li className={card + ' card'}>
        <img
          src={image}
          alt={fullName}
          className={
            picture + ' card-img-top ' + (character.isAlive ? '' : 'reves')
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
          <BackCard
            character={character}
            handleDead={function (_characterName: string): void {
              throw new Error('Function not implemented.');
            }}
            handleCommunicate={function (_characterName: string): void {
              throw new Error('Function not implemented.');
            }}
          ></BackCard>
        </div>
        <Icon category={character.category} isAlive={character.isAlive}></Icon>
      </li>
      <Communications character={character}></Communications>
    </div>
  );

  return template;
}
