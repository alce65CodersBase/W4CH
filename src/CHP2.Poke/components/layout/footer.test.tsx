import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Footer } from './footer';

describe('Given the component Footer', () => {
  describe('When it will be rendered ', () => {
    let element: HTMLElement;
    beforeEach(() => {
      render(<Footer></Footer>);
      element = screen.getByRole('contentinfo');
    });
    test('Then it should be in the document', () => {
      expect(element).toBeDefined();
      expect(element).toBeInTheDocument();
    });

    test('Then the footer "ISDI" should be visible for the user', () => {
      expect(screen.getByText(/ISDI/i)).toBeInTheDocument();
    });
  });
});
