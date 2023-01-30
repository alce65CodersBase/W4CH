import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { DetailsPage } from './details';

// NEXT jest.mock('../../components/pokemons/poke.detail');

describe('Given "DetailsPage" component', () => {
  let pokeElements: HTMLElement[];
  beforeEach(() => {
    render(<DetailsPage></DetailsPage>);
    pokeElements = [
      screen.getByRole('heading', { name: 'Details' }), // <h2>
    ];
  });
  describe('When it is render', () => {
    test(`Then H2 should be in the documents`, () => {
      expect(pokeElements[0]).toBeInstanceOf(HTMLElement);
      expect(pokeElements[0]).toBeInTheDocument();
    });
    test('Then its child components should to be called', () => {
      // NEXT expect(PokeDetail).toHaveBeenCalled();
    });
  });
});
