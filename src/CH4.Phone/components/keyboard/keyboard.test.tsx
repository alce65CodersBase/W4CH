import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Keyboard } from './keyboard';
import { Key } from '../key/key';

jest.mock('../key/key');

describe('Given the component Keyboard', () => {
  describe('When it is rendered', () => {
    test('Then it should be on the screen', () => {
      render(<Keyboard />);
      const element = screen.getByRole('region', { name: 'keyboard' });
      expect(element).toBeInTheDocument();
      expect(Key).toBeCalledTimes(11);
    });
  });
});
