import { MOCK_DATA_JSON } from '../../mocks/characters';
import { getCharacters, getCharactersSync } from './mock.repo';

describe('Given mockRepo', () => {
  describe('When we call getSeries', () => {
    test('Then it should return a list of series', async () => {
      const r = await getCharacters();
      expect(r).toEqual(MOCK_DATA_JSON);
    });
  });
  describe('When we call getSeriesSync', () => {
    test('Then it should return a list of series', () => {
      const r = getCharactersSync();
      expect(r).toEqual(MOCK_DATA_JSON);
    });
  });
});
