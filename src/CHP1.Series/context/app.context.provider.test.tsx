import { render } from '@testing-library/react';

import * as useSeries from '../hooks/use.series';
import { AppContextProvider } from './app.context.provider';

describe('Given AppContextProvider', () => {
  describe('When we use it', () => {
    test('Then it should call the custom hook useSeries', () => {
      const spyUseSeries = jest.spyOn(useSeries, 'useSeries');
      render(
        <AppContextProvider>
          <></>
        </AppContextProvider>
      );
      expect(spyUseSeries).toHaveBeenCalled();
    });
  });
});
