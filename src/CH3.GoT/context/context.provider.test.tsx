import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { AppContextProvider } from './context.provider';
import * as hook from '../hooks/use.characters';

describe('Given AppContextProvider', () => {
  describe('When we use it', () => {
    test('Then it should call the custom hook useApps', () => {
      const spyUseCharacters = jest.spyOn(hook, 'useCharacters');
      render(
        <AppContextProvider>
          <></>
        </AppContextProvider>
      );
      expect(spyUseCharacters).toHaveBeenCalled();
    });
  });
});
