import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Header } from './header';

describe('Given the component Header', () => {
  describe('When it will be rendered ', () => {
    let element: HTMLElement;
    beforeEach(() => {
      render(
        <Header>
          <></>
        </Header>
      );
      element = screen.getByRole('heading');
    });
    test('Then it should be in the document', () => {
      expect(element).toBeDefined();
      expect(element).toBeInTheDocument();
    });

    test('Then the title "Pokemons" should be visible for the user', () => {
      expect(screen.getByText(/Pokemons/i)).toBeInTheDocument();
    });
  });
});
