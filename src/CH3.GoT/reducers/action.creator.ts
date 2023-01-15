import { CharacterStructure } from '../models/character';
import { characterActionTypes as actionTypes } from './action.types';

export type ActionPayload = Array<CharacterStructure> | CharacterStructure;

export type CharacterAction = {
  type: string;
  payload?: ActionPayload;
};

export const loadCharacterAction = (
  characters: Array<CharacterStructure>
): CharacterAction => ({
  type: actionTypes.load,
  payload: characters,
});

export const deadCharacterAction = (
  character: CharacterStructure
): CharacterAction => ({
  type: actionTypes.dead,
  payload: character,
});

export const startTalkCharacterAction = (
  character: CharacterStructure
): CharacterAction => ({
  type: actionTypes.startTalk,
  payload: character,
});

export const endTalkCharacterAction = (): CharacterAction => ({
  type: actionTypes.endTalk,
});
