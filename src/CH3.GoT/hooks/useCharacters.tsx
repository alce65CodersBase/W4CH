import { useReducer, useCallback } from 'react';
import { MOCK_DATA_JSON } from '../mocks/characters';
import { CharacterStructure } from '../models/character';
import * as ac from '../reducers/action.creator';
import {
  characterReducer,
  CharacterState,
} from '../reducers/character.reducer';

export function useCharacters() {
  const initialState: CharacterState = {
    characters: [],
    whoIsTalking: null,
  };
  const [state, dispatch] = useReducer(characterReducer, initialState);

  const handleLoad = useCallback(() => {
    const newData = MOCK_DATA_JSON as Array<CharacterStructure>;
    dispatch(ac.loadCharacterAction(newData));
  }, []);

  const handleDead = (character: CharacterStructure): void => {
    dispatch(ac.deadCharacterAction(character));
    console.log('Muere, after action dispatch', character.name);
  };

  const handleCommunicate = (character: CharacterStructure): void => {
    dispatch(ac.startTalkCharacterAction(character));
    console.log('Habla, after action dispatch', character.name);
    // Se renderizará el elemento debido al nuevo estado
    // setTimeout(() => {
    //   dispatch(ac.endTalkCharacterAction());
    //   // Desaparece el componente debido al cambio de estado
    // }, 3000);
  };

  return {
    state,
    handleLoad,
    handleDead,
    handleCommunicate,
  };
}
