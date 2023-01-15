import { CharacterStructure } from '../models/character';
import { CharacterAction } from './action.creator';
import { characterActionTypes as actionTypes } from './action.types';

export type CharacterState = {
  characters: Array<CharacterStructure>;
  whoIsTalking: CharacterStructure | null;
};

export const characterReducer = (
  state: CharacterState,
  action: CharacterAction
): CharacterState => {
  console.log('Starting reducer', action.type);
  switch (action.type) {
    case actionTypes.load: {
      const characters = action.payload as Array<CharacterStructure>;
      return { ...state, characters };
    }

    case actionTypes.dead: {
      const deadName = (action.payload as CharacterStructure).name;
      const newCharacters = state.characters.map((item) =>
        item.name === deadName ? { ...item, isAlive: false } : item
      );
      return { ...state, characters: newCharacters };
    }

    case actionTypes.startTalk: {
      const whoIsTalking = action.payload as CharacterStructure;
      return { ...state, whoIsTalking };
    }

    case actionTypes.endTalk:
      return { ...state, whoIsTalking: null };

    default:
      return { ...state };
  }
};
