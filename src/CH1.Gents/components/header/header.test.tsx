import { render, screen } from '@testing-library/react';
import { Header } from './header';

describe('Given Header component', () => {
  beforeEach(() => {
    render(<Header></Header>);
  });
  describe('When it has been rendered', () => {
    test('Then it should be on the screen', () => {
      const componentHeader = screen.getByRole('heading');
      expect(componentHeader).toBeInTheDocument();
    });
  });
});
