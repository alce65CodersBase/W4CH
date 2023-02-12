import { render } from '@testing-library/react';

import * as usePhone from '../hooks/use.phone';
import { AppContextProvider } from './app.context.provider';
import { UsePhone } from '../hooks/use.phone';

describe('Given AppContextProvider', () => {
  describe('When we use it', () => {
    test('Then it should call the custom hook useSeries', () => {
      const spyUseSeries = jest.spyOn(usePhone, 'usePhone');
      spyUseSeries.mockImplementation(() => ({} as UsePhone));
      render(
        <AppContextProvider>
          <></>
        </AppContextProvider>
      );
      expect(spyUseSeries).toHaveBeenCalled();
    });
  });
});
