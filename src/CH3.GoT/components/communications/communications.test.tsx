import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Communications } from './communications';
import { AppContext, ContextStructure } from '../../context/context';
import { MOCK_KING } from '../../mocks/characters';

const context = {
  state: { whoIsTalking: MOCK_KING },
} as ContextStructure;

describe('Given Communications component rendered', () => {
  describe('When a character is talking', () => {
    beforeEach(() => {
      render(
        <AppContext.Provider value={context}>
          <Communications />
        </AppContext.Provider>
      );
    });
    test('Then it should display the title', () => {
      const title = /Communications/i;
      const element = screen.getByRole('region', { name: title });
      expect(element).toBeInTheDocument();
    });
  });

  describe('When a NO character is talking', () => {
    test('Then it should no render anything', () => {
      const nullContext = {
        state: { whoIsTalking: null },
      } as ContextStructure;
      render(
        <AppContext.Provider value={nullContext}>
          <Communications />
        </AppContext.Provider>
      );
    });
  });
});
