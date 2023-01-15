import { CharacterStructure } from '../models/character';
import { characterActionTypes as actionTypes } from './action.types';

export type ActionPayload = Array<CharacterStructure> | CharacterStructure;

export type CharacterAction = {
  type: string;
  payload: ActionPayload;
};

export const loadCharacterStructureAction = (
  characters: Array<CharacterStructure>
): CharacterAction => ({
  type: actionTypes.load,
  payload: characters,
});

export const deadCharacterStructureAction = (
  character: CharacterStructure
): CharacterAction => ({
  type: actionTypes.dead,
  payload: character,
});

export const startTalkCharacterStructureAction = (
  character: CharacterStructure
): CharacterAction => ({
  type: actionTypes.startTalk,
  payload: character,
});

export const endTalkCharacterStructureAction = (
  character: CharacterStructure
): CharacterAction => ({
  type: actionTypes.endTalk,
  payload: character,
});
