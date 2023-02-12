import { act, render } from '@testing-library/react';

import * as useSeries from '../hooks/use.series';
import { AppContextProvider } from './app.context.provider';

describe('Given AppContextProvider', () => {
  describe('When we use it', () => {
    test('Then it should call the custom hook useSeries', async () => {
      const spyUseSeries = jest.spyOn(useSeries, 'useSeries');
      await act(async () => {
        render(
          <AppContextProvider>
            <></>
          </AppContextProvider>
        );
      });
      expect(spyUseSeries).toHaveBeenCalled();
    });
  });
});
