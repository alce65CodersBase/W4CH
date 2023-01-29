import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ScoreStars } from './score.stars';
import { MOCK_SERIES } from '../../mock/series';
import { AppContext, AppContextType } from '../../context/app.context';
import { Series } from '../../models/series';

const renderElements = (mockContext: AppContextType, mockSerie: Series) => {
  render(
    <AppContext.Provider value={mockContext}>
      <ScoreStars serie={mockSerie}></ScoreStars>
    </AppContext.Provider>
  );
  return [screen.getByRole('button', { name: 'Star1' })];
};

describe('Given "ScoreStars" component for a 0 score', () => {
  let mockContext: AppContextType;
  let elements: HTMLElement[];

  beforeEach(() => {
    const mockSerie = MOCK_SERIES[0];
    mockSerie.score = 0;
    mockContext = {
      updateScore: jest.fn(),
    } as unknown as AppContextType;

    elements = renderElements(mockContext, mockSerie);
  });

  describe('When it has been rendered', () => {
    test(`Then Star/button should be in the document`, () => {
      expect(elements[0]).toBeInTheDocument();
    });
  });
  describe('When we click its <li>', () => {
    test('Then the function from the contest should be called', () => {
      fireEvent.click(elements[0]);
      expect(mockContext.updateScore).toHaveBeenCalled();
    });
  });
});

describe('Given "ScoreStars" component for a 3 score', () => {
  let mockContext2: AppContextType;
  let elements: HTMLElement[];
  beforeEach(() => {
    const mockSerie = MOCK_SERIES[0];
    mockSerie.score = 3;
    mockContext2 = {
      updateScore: jest.fn(),
    } as unknown as AppContextType;

    elements = renderElements(mockContext2, mockSerie);
  });
  describe('When we click its <li>', () => {
    test('Then the function from the contest should NOT be called', () => {
      fireEvent.click(elements[0]);
      expect(mockContext2.updateScore).not.toHaveBeenCalled();
    });
  });
});
