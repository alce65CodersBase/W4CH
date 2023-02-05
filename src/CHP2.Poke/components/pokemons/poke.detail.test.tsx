import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AppContext } from '../../context/app.context';
import { UsePoke } from '../../hooks/use.poke';
import { MOCK_POKE_FULL } from '../../__mocks__/mock';
import { MOCK_FULL_CONTEXT } from '../../__mocks__/context';
import { PokeDetail } from './poke.detail';

describe('Given the component PokeDetail', () => {
  describe('When it will be rendered ', () => {
    let elements: HTMLElement[];
    let context: UsePoke;

    beforeEach(() => {
      context = MOCK_FULL_CONTEXT;
      context.pokeSelected = {
        ...MOCK_POKE_FULL,
        name: 'Snorlax',
      };
      render(
        <AppContext.Provider value={context}>
          <PokeDetail></PokeDetail>
        </AppContext.Provider>
      );
      elements = [
        screen.getByText(/Detalles del Pokemon/i),
        screen.getByText(/Snorlax/i),
      ];
    });

    test('Then the title "Detalles del Pokemon" should be visible for the user', () => {
      expect(elements[0]).toBeInTheDocument();
    });

    test('Then the Pokemon name should be visible for the user', () => {
      expect(elements[1]).toBeInTheDocument();
    });
  });
});
