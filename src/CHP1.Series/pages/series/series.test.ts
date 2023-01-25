import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { SeriesPage } from './series';
import { getSeries } from '../../services/mock.repo';
import { MOCK_SERIES } from '../../mock/series';

jest.mock('../../services/mock.repo');

// No se usan mocks de los componentes Header y List
// renderizados directamente por la SeriesPage
// pero no se testan sus funcionalidades

describe('Given "SeriesPage" component', () => {
  document.body.innerHTML = `<main></main>`;
  MOCK_SERIES[0].score = 0;
  (getSeries as jest.Mock).mockReturnValue(MOCK_SERIES);
  const homePage = new SeriesPage('main');
  const elements = [
    ['<h2>', screen.getByRole('heading', { name: 'Series list' })],
  ];
  describe('When it is call with a DOM implementation', () => {
    test('Then we should to be able to instantiate it', () => {
      expect(homePage).toBeInstanceOf(SeriesPage);
    });
    test.each(elements)('Then the %s should be render', (_title, element) => {
      expect(element).toBeInstanceOf(HTMLElement);
      expect(element).toBeInTheDocument();
    });
  });

  describe('When its methods are called', () => {
    test(`Then if we call updateScore, the score should increased`, () => {
      const finalScore = 5;
      homePage.updateScore(MOCK_SERIES[0], finalScore);
      expect(homePage.series[0].score).toBe(finalScore);
    });
    test(`Then if we call deleteSerie, the serie should be deleted`, () => {
      expect(homePage.series.length).toBe(5);
      homePage.deleteSerie(MOCK_SERIES[0]);
      expect(homePage.series.length).toBe(4);
    });
  });
});
