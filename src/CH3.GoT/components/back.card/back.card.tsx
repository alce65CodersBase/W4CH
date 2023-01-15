import { useContext } from 'react';
import { CharacterStructure } from '../../../CH3.GoT/models/character';
import { AppContext } from '../../context/context';
import { overlay, action, actions } from './back.card.module.css';

type BackCardProps = { character: CharacterStructure };

export function BackCard({ character }: BackCardProps) {
  const { handleCommunicate, handleDead } = useContext(AppContext);
  const createOverlay = () => {
    const options = {
      king: <li>Años de reinado: {character?.kingdomYears?.toString()}</li>,
      fighter: (
        <>
          <li>Arma: {character?.weapon}</li>
          <li>Destreza: {character?.skill}</li>
        </>
      ),
      counselor: <li>Asesora a: {character?.chief?.name}</li>,
      squire: (
        <>
          <li>Servilismo: {character?.submission}</li>
          <li>Sirve a: {character?.master?.name}</li>
        </>
      ),
    };

    return options[character.category];
  };

  const isDisable = !character.isAlive;

  return (
    <div className={overlay + ' overlay'}>
      <ul>{createOverlay()}</ul>
      <div className={actions}>
        <button
          className={action + ' btn'}
          disabled={isDisable}
          onClick={() => handleCommunicate(character)}
        >
          habla
        </button>
        <button
          className={action + ' btn'}
          disabled={isDisable}
          onClick={() => handleDead(character)}
        >
          muere
        </button>
      </div>
    </div>
  );
}
