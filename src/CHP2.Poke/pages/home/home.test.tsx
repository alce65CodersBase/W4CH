import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomePage from './home';
import { HomePokeList } from '../../components/lists/home.poke.list';

jest.mock('../../components/lists/home.poke.list');

describe('Given "HomePage" component', () => {
  render(<HomePage></HomePage>);
  const pokeElements = [
    screen.getByRole('region', { name: 'Home' }), // <h2>
  ];
  describe('When it is rendered', () => {
    test(`Then <section> should be in the document`, () => {
      expect(pokeElements[0]).toBeInstanceOf(HTMLElement);
      expect(pokeElements[0]).toBeInTheDocument();
    });
    test('Then its child components should to be called', () => {
      expect(HomePokeList).toHaveBeenCalled();
    });
  });
});
