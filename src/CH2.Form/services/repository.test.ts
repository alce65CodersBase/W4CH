import { MOCK_USER } from '../mocks/user';
import { findUsers } from './repository';

describe('Given the service findGents ', () => {
  describe('When it is call', () => {
    test('Then it should return the Gents data', () => {
      const result = findUsers();
      expect(result).toEqual([MOCK_USER]);
    });
  });
});
