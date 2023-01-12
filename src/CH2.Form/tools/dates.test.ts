import { dateToString } from './dates';

describe('Given the function dateToString', () => {
  describe('When is is called ', () => {
    const sDate = '2000-01-25';
    const date = new Date(sDate);
    test('Then it should return...', () => {
      const result = dateToString(date);
      expect(result).toBe(sDate);
    });
  });
});
