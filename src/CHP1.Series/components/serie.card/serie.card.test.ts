import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { MOCK_SERIES } from '../../mock/series';
import { SeriesCard } from './serie.card';

describe('Given "SeriesCard" component', () => {
  document.body.innerHTML = `<slot></slot>`;
  const deleteSerie = jest.fn();
  const updateScore = jest.fn();
  const card = new SeriesCard('slot', MOCK_SERIES[0], deleteSerie, updateScore);
  const elements = [['<li>', screen.getByRole('listitem', { name: 'Serie' })]];

  describe('When it is call with a DOM implementation', () => {
    test('Then we should to be able to instantiate it', () => {
      expect(card).toBeInstanceOf(SeriesCard);
    });
    test.each(elements)(`Then %1 should be render`, (_title, element) => {
      expect(element).toBeInstanceOf(HTMLElement);
      expect(element).toBeInTheDocument();
    });
  });
  describe('When we use its method handleDelete', () => {
    test('Then the parameter ... should be called', () => {
      card.handleDelete();
      expect(deleteSerie).toHaveBeenCalled();
    });
  });
  describe('When we use its method handleScore', () => {
    test('Then the parameter updateScore should be called', () => {
      card.handleScore(3);
      expect(updateScore).toHaveBeenCalled();
    });
  });
  describe('When updateScore is NOT defined (watched serries)', () => {
    const card = new SeriesCard('div', MOCK_SERIES[0], deleteSerie);
    test('Then its method handleScore should not call updateScore', () => {
      const r = card.handleScore(3);
      expect(r).toBeFalsy();
    });
  });
});
