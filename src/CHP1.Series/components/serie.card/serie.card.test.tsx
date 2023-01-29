import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MOCK_SERIES } from '../../mock/series';
import { SeriesCard } from './serie.card';
import { ScoreStars } from '../score.stars/score.stars';
import { AppContext, AppContextType } from '../../context/app.context';

jest.mock('../score.stars/score.stars');

describe('Given "SeriesCard" component', () => {
  const mockContext = {
    deleteSerie: jest.fn(),
  } as unknown as AppContextType;

  let elements: HTMLElement[];
  beforeEach(() => {
    render(
      <AppContext.Provider value={mockContext}>
        <SeriesCard serie={MOCK_SERIES[0]}></SeriesCard>)
      </AppContext.Provider>
    );
    elements = [
      screen.getByRole('listitem', { name: 'Serie' }),
      screen.getByRole('button'),
    ];
  });

  describe('When it has been rendered', () => {
    test(`Then the item should be in the document`, () => {
      expect(elements[0]).toBeInstanceOf(HTMLElement);
      expect(elements[0]).toBeInTheDocument();
    });
    test('Then the component ScoreStars should be called', () => {
      expect(ScoreStars).toHaveBeenCalled();
    });
  });

  describe('When icon/button for delete has been used', () => {
    test('Then the function from the contest should be called', () => {
      fireEvent.click(elements[1]);
      expect(mockContext.deleteSerie).toHaveBeenCalled();
    });
  });
});
