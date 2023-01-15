import { CharacterStructure } from '../models/character';

export const showCommunication = (element: HTMLElement) => {
  const on = 'CSS Class';
  element.classList.toggle(on);
  setTimeout(() => {
    element.classList.toggle(on);
    element.innerHTML = '';
  }, 2000);
};

export function useCharacters() {
  const handleDead = (character: CharacterStructure): void => {
    console.log('Muere', character.name);

    // TEMP  dead() {
    //   this._isAlive = false;
    // }
  };

  const handleCommunicate = (character: CharacterStructure): void => {
    console.log('Habla', character.name);

    //  TEMP communicate() {
    //   return this.message;
    // }
  };

  return {
    handleDead,
    handleCommunicate,
  };
}
