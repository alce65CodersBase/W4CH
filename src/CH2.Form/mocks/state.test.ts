import { mockSetState } from './state';

describe('Given mockSetState function', () => {
  describe('When it is called', () => {
    test('Then it should return undefined', () => {
      const r = mockSetState();
      expect(r).toBeUndefined();
      //
    });
  });
});
