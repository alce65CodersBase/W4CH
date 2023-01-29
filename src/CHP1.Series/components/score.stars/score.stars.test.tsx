import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ScoreStars } from './score.stars';
import { MOCK_SERIES } from '../../mock/series';
import { AppContext, AppContextType } from '../../context/app.context';

describe('Given "ScoreStars" component for a 0 score', () => {
  let mockContext: AppContextType;
  let elements: HTMLElement[];

  beforeEach(() => {
    const mockSerie = MOCK_SERIES[0];
    mockSerie.score = 0;
    mockContext = {
      updateScore: jest.fn(),
    } as unknown as AppContextType;
    render(
      <AppContext.Provider value={mockContext}>
        <ScoreStars serie={mockSerie}></ScoreStars>
      </AppContext.Provider>
    );
    elements = [screen.getByRole('button', { name: 'Star1' })];
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
  let mockContext: AppContextType;
  let elements: HTMLElement[];
  beforeEach(() => {
    const mockSerie = MOCK_SERIES[0];
    mockSerie.score = 3;
    mockContext = {
      updateScore: jest.fn(),
    } as unknown as AppContextType;
    render(
      <AppContext.Provider value={mockContext}>
        <ScoreStars serie={mockSerie}></ScoreStars>
      </AppContext.Provider>
    );
    elements = [screen.getByRole('button', { name: 'Star1' })];
  });
  describe('When it has been rendered', () => {
    test(`Then Star/button should be in the document`, () => {
      expect(elements[0]).toBeInTheDocument();
    });
  });
  describe('When we click its <li>', () => {
    test('Then the function from the contest should NOT be called', () => {
      fireEvent.click(elements[0]);
      expect(mockContext.updateScore).not.toHaveBeenCalled();
    });
  });
});
