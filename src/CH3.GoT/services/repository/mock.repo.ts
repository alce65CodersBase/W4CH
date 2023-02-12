import { MOCK_DATA_JSON } from '../../mocks/characters';
import { CharacterStructure } from '../../models/character';

export const getCharacters = async (): Promise<Array<CharacterStructure>> =>
  MOCK_DATA_JSON as Array<CharacterStructure>;

export const getCharactersSync = (): Array<CharacterStructure> =>
  MOCK_DATA_JSON as Array<CharacterStructure>;
