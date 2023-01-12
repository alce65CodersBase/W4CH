import '@testing-library/jest-dom';
import { act, render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { App } from './app';

describe('Given the component App', () => {
  describe('When it is rendered', () => {
    test('Then it should be on the screen', async () => {
      await act(async () => {
        render(
          <Router initialEntries={['/CH2.Form']} initialIndex={0}>
            {<App />}
          </Router>
        );
      });
      const header = screen.getByRole('heading', { name: 'CH2 Form' });
      expect(header).toBeInTheDocument();
    });
  });
});
