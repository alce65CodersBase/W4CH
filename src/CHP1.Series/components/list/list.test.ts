import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { MOCK_SERIES } from '../../mock/series';
import { List } from './list';
import { getSeries } from '../../services/mock.repo';

jest.mock('../../services/mock.repo');

describe('Given "List" component and a DOM implementation', () => {
  document.body.innerHTML = `<slot></slot>`;
  const deleteSerie = jest.fn();
  (getSeries as jest.Mock).mockReturnValue([MOCK_SERIES[0]]);

  describe('When it is call with a list of series pending', () => {
    const list = new List(
      'slot',
      'series-pending',
      [MOCK_SERIES[0]],
      deleteSerie
    );
    const elements = [
      ['<section>', screen.getByRole('region', { name: 'series-pending' })],
    ];

    test('Then we should to be able to instantiate it', () => {
      expect(list).toBeInstanceOf(List);
      expect(getSeries).toHaveBeenCalled();
    });
    test.each(elements)(`Then %1 should be render`, (_title, element) => {
      expect(element).toBeInstanceOf(HTMLElement);
      expect(element).toBeInTheDocument();
    });
  });
  describe('When it is call with a list of series watched', () => {
    const list = new List(
      'slot',
      'series-watched',
      [MOCK_SERIES[0]],
      deleteSerie
    );
    test('Then we should to be able to instantiate it', () => {
      expect(getSeries).toHaveBeenCalled();
      expect(list).toBeInstanceOf(List);
    });
  });
});
