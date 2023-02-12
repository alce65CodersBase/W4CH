import { MemoryRouter as Router } from 'react-router-dom';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MyPokeList } from './my.poke.list';
import { AppContext } from '../../context/app.context';
import { UsePoke } from '../../hooks/use.poke';
import { MOCK_FULL_CONTEXT } from '../../__mocks__/context';

describe('Given the component MyPokeList', () => {
  describe('When it is rendered ', () => {
    let elements: HTMLElement[];
    beforeEach(() => {
      const context: UsePoke = MOCK_FULL_CONTEXT;
      render(
        <Router>
          <AppContext.Provider value={context}>
            <MyPokeList></MyPokeList>
          </AppContext.Provider>
        </Router>
      );
      elements = [screen.getByRole('heading'), screen.getByText(/Pokemons/i)];
    });
    test('Then the element should be in the document', () => {
      expect(elements[0]).toBeInTheDocument();
    });

    test('Then the title "Pokemons" should be visible for the user', () => {
      expect(elements[1]).toBeTruthy();
    });
  });
});
