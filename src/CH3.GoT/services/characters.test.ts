import { Character } from '../models/character';
import { createCharacters } from './characters';
import { MOCK_DATA_JSON } from './mock';

describe('Given createCharacters', () => {
  describe('When we invoque it', () => {
    const r = createCharacters();
    test('Then result should be the array with the data', () => {
      expect(r.length).toBe(5);
      expect(r).toEqual(MOCK_DATA_JSON);
    });
    test.each(r)('Then each item should be instance of Character', (item) => {
      expect(item).toBeInstanceOf(Character);
    });
  });
});
