import { MOCK_GENTS } from '../mock/gents';
import { findGents } from './repository';

describe('Given the service findGents ', () => {
  describe('When it is call', () => {
    test('Then it should return the Gents data', () => {
      const result = findGents();
      expect(result).toEqual(MOCK_GENTS);
    });
  });
});
