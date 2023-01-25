import { MOCK_SERIES } from '../mock/series';
import { getSeries } from './mock.repo';

describe('Given mockRepo()', () => {
  describe('When we call it', () => {
    test('Then it should return a list of series', () => {
      const r = getSeries();
      expect(r).toEqual(MOCK_SERIES);
    });
  });
});
