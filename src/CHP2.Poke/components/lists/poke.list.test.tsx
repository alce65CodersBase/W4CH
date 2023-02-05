import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { PokeList } from './poke.list';
import { MOCK_POKE_EMPTY } from '../../__mocks__/mock';

describe('Given the component PokeList', () => {
  describe('When it is rendered', () => {
    let elements: HTMLElement[];
    const mockPoke = { ...MOCK_POKE_EMPTY, id: 1, name: 'Snorlak' };
    beforeEach(() => {
      render(<PokeList pokeData={[mockPoke]}></PokeList>);
      elements = [screen.getByText(mockPoke.name) as HTMLElement];
    });
    test(`Then the element of the "Poke List should be
    visible for the user in the document`, () => {
      expect(elements[0]).toBeInTheDocument();
    });
  });
});
