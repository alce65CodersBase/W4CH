import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Display } from './display';
import { AppContext } from '../../context/app.context';
import { UsePhone } from '../../hooks/use.phone';

describe('Given the component Display', () => {
  describe('When it is rendered', () => {
    test('Then the phone number should be on the screen', () => {
      const mockNumber = '666666666';
      render(
        <AppContext.Provider
          value={
            {
              phoneNumber: mockNumber,
            } as UsePhone
          }
        >
          <Display />
        </AppContext.Provider>
      );
      const elements = [
        screen.getByRole('region', { name: 'display' }),
        screen.getByText(mockNumber),
      ];
      expect(elements[0]).toBeInTheDocument();
      expect(elements[1]).toBeInTheDocument();
    });
  });
});
