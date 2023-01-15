import { SyntheticEvent } from 'react';
import { CharacterStructure } from '../../../CH3.GoT/models/character';
import { useCharacters } from '../../hooks/useCharacters';
import { overlay, action, actions } from './back.card.module.css';

type Actions = 'muere' | 'habla';

type BackCardProps = { character: CharacterStructure };

export function BackCard({ character }: BackCardProps) {
  const { handleCommunicate, handleDead } = useCharacters();
  const createOverlay = (item: CharacterStructure) => {
    const options = {
      king: <li>Años de reinado: {item?.kingdomYears?.toString()}</li>,
      fighter: (
        <>
          <li>Arma: {item?.weapon}</li>
          <li>Destreza: {item?.skill}</li>
        </>
      ),
      counselor: <li>Asesora a: {item?.chief?.name}</li>,
      squire: (
        <>
          <li>Servilismo: {item?.submission}</li>
          <li>Sirve a: {item?.master?.name}</li>
        </>
      ),
    };

    return options[character.category];
  };

  const handleClick = (ev: SyntheticEvent) => {
    const element = ev.target as HTMLButtonElement;
    const action = element.textContent?.trim() as Actions;
    const possibleActions = {
      muere: () => handleDead(character),
      habla: () => handleCommunicate(character),
    };
    possibleActions[action]();
  };

  const overlayElement = createOverlay(character);
  const isDisable = !character.isAlive;

  return (
    <div className={overlay + ' overlay'}>
      <ul className="list-unstyled">{overlayElement}</ul>
      <div className={actions}>
        <button
          className={action + ' btn'}
          disabled={isDisable}
          data-id={action + ' btn'}
          onClick={handleClick}
        >
          habla
        </button>
        <button
          className={action + ' btn'}
          disabled={isDisable}
          data-id={character.name}
          onClick={handleClick}
        >
          muere
        </button>
      </div>
    </div>
  );
}
