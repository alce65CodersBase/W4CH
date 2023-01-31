import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import FavoritesPage from './favorites';

describe('Given "FavoritesPage" component', () => {
  render(<FavoritesPage></FavoritesPage>);
  const pokeElements = [
    screen.getByRole('heading', { name: 'Favorites' }), // <h2>
  ];
  describe('When it is render', () => {
    test(`Then H2 should be in the document`, () => {
      expect(pokeElements[0]).toBeInstanceOf(HTMLElement);
      expect(pokeElements[0]).toBeInTheDocument();
    });
    test('Then its child components should to be called', () => {
      // NEXT expect(...).toHaveBeenCalled();
    });
  });
});
