import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { App } from './app';
import { Actions } from '../actions/actions';
import { Info } from '../info/info';
import { Keyboard } from '../keyboard/keyboard';

jest.mock('../actions/actions');
jest.mock('../info/info');
jest.mock('../keyboard/keyboard');
describe('Given the component App', () => {
  describe('When it is rendered', () => {
    test('Then it should be on the screen', () => {
      render(<App />);
      const header = screen.getByRole('heading', { name: 'CH4 Phone' });
      expect(header).toBeInTheDocument();
      expect(Info).toHaveBeenCalled();
      expect(Keyboard).toHaveBeenCalled();
      expect(Actions).toHaveBeenCalled();
    });
  });
});
