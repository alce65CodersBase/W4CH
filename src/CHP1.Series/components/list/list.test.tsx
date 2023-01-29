import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MOCK_SERIES } from '../../mock/series';
import { List } from './list';
import { getSeries } from '../../services/mock.repo';
import { AppContext, AppContextType } from '../../context/app.context';
import { SeriesCard } from '../serie.card/serie.card';

jest.mock('../../services/mock.repo');
jest.mock('../serie.card/serie.card');

describe('Given "List" component', () => {
  (getSeries as jest.Mock).mockReturnValue([MOCK_SERIES[0]]);

  const mockPendingSeries = [MOCK_SERIES[0]];
  mockPendingSeries[0].score = 0;
  const mockWatchedSeries = [MOCK_SERIES[1]];
  mockWatchedSeries[0].score = 5;
  const mockContext = {
    pendingSeries: jest.fn().mockReturnValue(mockPendingSeries),
    watchedSeries: jest.fn().mockReturnValue(mockWatchedSeries),
    series: [],
  } as unknown as AppContextType;
  describe('When it has been rendered with a list of series pending', () => {
    const filter = 'series-pending';
    let elements: HTMLElement[];
    beforeEach(() => {
      render(
        <AppContext.Provider value={mockContext}>
          <List filter={filter}></List>
        </AppContext.Provider>
      );

      elements = [screen.getByRole('region', { name: filter })];
    });
    test(`Then the title should be render`, () => {
      expect(elements[0]).toBeInstanceOf(HTMLElement);
      expect(elements[0]).toBeInTheDocument();
    });
    test('Then the filter for pending series should has been used', () => {
      expect(mockContext.pendingSeries).toHaveBeenCalled();
      expect(SeriesCard).toHaveBeenCalled();
    });
  });

  describe('When it has been rendered with a list of series watched', () => {
    const filter = 'series-watched';
    let elements: HTMLElement[];
    beforeEach(() => {
      render(
        <AppContext.Provider value={mockContext}>
          <List filter={filter}></List>
        </AppContext.Provider>
      );

      elements = [screen.getByRole('region', { name: filter })];
    });

    test(`Then the title should be render`, () => {
      expect(elements[0]).toBeInstanceOf(HTMLElement);
      expect(elements[0]).toBeInTheDocument();
    });
    test('Then the filter for watched series should has been used', () => {
      expect(mockContext.watchedSeries).toHaveBeenCalled();
      expect(SeriesCard).toHaveBeenCalled();
    });
  });

  describe('When it has been rendered with all the series watched', () => {
    const filter = 'series-watched';
    let elements: HTMLElement[];
    beforeEach(() => {
      mockContext.series = [...mockWatchedSeries];
      render(
        <AppContext.Provider value={mockContext}>
          <List filter={filter}></List>
        </AppContext.Provider>
      );

      elements = [
        screen.getByRole('region', { name: filter }),
        screen.getByText(/Congrats! You've watched all your series/i),
      ];
    });

    test(`Then the title should be render`, () => {
      expect(elements[0]).toBeInstanceOf(HTMLElement);
      expect(elements[0]).toBeInTheDocument();
    });
    test(`Then the congrats message should be render`, () => {
      expect(elements[1]).toBeInTheDocument();
    });

    test('Then the filter for watched series should has been used', () => {
      expect(mockContext.watchedSeries).toHaveBeenCalled();
      expect(SeriesCard).toHaveBeenCalled();
    });
  });
});
