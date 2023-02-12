import { createContext } from 'react';
import { useCharacters } from '../hooks/use.characters';
import { CharacterStructure } from '../models/character';
import { CharacterState } from '../reducers/character.reducer';

export type ContextStructure = ReturnType<typeof useCharacters>;

const state: CharacterState = {
  characters: [],
  whoIsTalking: null,
};

export const initialContext: ContextStructure = {
  state,
  handleLoad() {},
  handleDead(_character: CharacterStructure) {},
  handleCommunicate(_character: CharacterStructure) {},
};

export const AppContext = createContext(initialContext);
