import { render } from '@testing-library/react';

import * as usePoke from '../hooks/use.poke';
import { AppContextProvider } from './app.context.provider';
import { UsePoke } from '../hooks/use.poke';

describe('Given AppContextProvider', () => {
  describe('When we use it', () => {
    test('Then it should call the custom hook useSeries', () => {
      const spyUseSeries = jest.spyOn(usePoke, 'usePoke');
      spyUseSeries.mockImplementation(() => ({} as UsePoke));
      render(
        <AppContextProvider>
          <></>
        </AppContextProvider>
      );
      expect(spyUseSeries).toHaveBeenCalled();
    });
  });
});
