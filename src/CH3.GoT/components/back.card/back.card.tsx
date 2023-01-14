import { SyntheticEvent } from 'react';
import { Character } from '../../../CH3.GoT/models/character';
import { Counselor } from '../../../CH3.GoT/models/counselor';
import { Fighter } from '../../../CH3.GoT/models/fighter';
import { King } from '../../../CH3.GoT/models/king';
import { Squire } from '../../../CH3.GoT/models/squire';
import { overlay, action, actions } from './back.card.module.css';

type AnyCharacter = King & Fighter & Counselor & Squire;
type Actions = 'muere' | 'habla';

type BackCardProps = {
  character: Character;
  handleDead: (_characterName: string) => void;
  handleCommunicate: (_characterName: string) => void;
};

export function BackCard({
  character,
  handleDead,
  handleCommunicate,
}: BackCardProps) {
  const createOverlay = (item: AnyCharacter, characterType: string) => {
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

    return options[characterType as keyof typeof options];
  };

  const handleClick = (ev: SyntheticEvent) => {
    const element = ev.target as HTMLButtonElement;
    const action = element.textContent?.trim() as Actions;
    const characterName = character.name;
    // <string>element.dataset.id;
    const possibleActions = {
      muere: () => handleDead(characterName),
      habla: () => handleCommunicate(characterName),
    };
    possibleActions[action]();
  };

  const characterType: string =
    Object.getPrototypeOf(character).constructor.name.toLowerCase();
  const overlayElement = createOverlay(
    character as AnyCharacter,
    characterType
  );
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
