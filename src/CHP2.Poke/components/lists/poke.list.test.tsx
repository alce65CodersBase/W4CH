import { MemoryRouter as Router } from 'react-router-dom';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { PokeList } from './poke.list';
import { MOCK_POKE_EMPTY } from '../../__mocks__/mock';
import * as components from '../pokemons/poke.item';
import { Pokemon } from '../../models/pokemon';

describe('Given the component PokeList', () => {
  let elements: HTMLElement[];
  let mockPoke: Pokemon;
  let spyPokeItem: jest.SpyInstance;
  beforeEach(() => {
    mockPoke = { ...MOCK_POKE_EMPTY, id: 1, name: 'Snorlak' };
    spyPokeItem = jest.spyOn(components, 'PokeItem');
  });

  describe('When it is rendered from the home page', () => {
    beforeEach(() => {
      render(
        <Router>
          <PokeList source="home" pokeData={[mockPoke]}></PokeList>
        </Router>
      );
      elements = [screen.getByText(mockPoke.name)];
    });
    test(`Then the element of the "Poke List should be
    visible for the user in the document`, () => {
      expect(elements[0]).toBeInTheDocument();
      expect(spyPokeItem).toHaveBeenCalledWith(
        expect.objectContaining({ poke: mockPoke, source: 'home' }),
        {}
      );
    });
  });
  describe('When it is rendered from the favorites page', () => {
    beforeEach(() => {
      render(
        <Router>
          <PokeList source="favorites" pokeData={[mockPoke]}></PokeList>
        </Router>
      );
      elements = [screen.getByText(mockPoke.name)];
    });
    test(`Then the element of the "Poke List should be
    visible for the user in the document`, () => {
      expect(elements[0]).toBeInTheDocument();
      expect(spyPokeItem).toHaveBeenLastCalledWith(
        expect.objectContaining({ poke: mockPoke, source: 'favorites' }),
        {}
      );
    });
  });
});
