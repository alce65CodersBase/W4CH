import { screen, render, fireEvent } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { MOCK_POKE_EMPTY, MOCK_POKE_FULL } from '../../__mocks__/mock';
import { PokeItem } from './poke.item';
import { UsePoke } from '../../hooks/use.poke';
import { MOCK_FULL_CONTEXT } from '../../__mocks__/context';
import { AppContext } from '../../context/app.context';
import { OTHER_SPRITES, Sprites } from '../../models/pokemon';

describe('Given "PokeItem" component', () => {
  describe('When it is rendered', () => {
    let elements: HTMLElement[];
    let context: UsePoke;
    beforeEach(() => {
      context = MOCK_FULL_CONTEXT;
      render(
        <AppContext.Provider value={context}>
          <Router>
            <PokeItem poke={MOCK_POKE_FULL} source="home">
              <></>
            </PokeItem>
          </Router>
        </AppContext.Provider>
      );

      elements = [
        screen.getByRole('listitem'),
        screen.getByRole('link'),
        ...screen.getAllByRole('img'),
      ];
    });

    // Con each sólo detecta el primero
    // const cases = elements.map((item) => ({
    //   name: item.tagName,
    //   element: item,
    // }));
    // // test.each(cases)(
    //   `Then the elements $name should be in the document`,
    //   ({ element }) => {
    //     expect(element).toBeInstanceOf(HTMLElement);
    //     expect(element).toBeInTheDocument();
    //   }
    // );

    test('Then the elements should be in the document', () => {
      elements.forEach((element) => {
        expect(element).toBeInstanceOf(HTMLElement);
        expect(element).toBeInTheDocument();
      });
    });

    test('The user should be able to navigate to details', () => {
      fireEvent.click(elements[1]);
      expect(context.setDetail).toHaveBeenCalled();
    });
  });

  describe('When it is rendered with a pokemon without back image', () => {
    let elements: HTMLElement[];
    let context: UsePoke;
    beforeEach(() => {
      context = MOCK_FULL_CONTEXT;
      const mockPoke = MOCK_POKE_EMPTY;
      // eslint-disable-next-line camelcase
      mockPoke.sprites.back_default = '';
      render(
        <AppContext.Provider value={context}>
          <Router>
            <PokeItem poke={mockPoke} source="home">
              <></>
            </PokeItem>
          </Router>
        </AppContext.Provider>
      );
      elements = screen.getAllByRole('img');
    });

    test('Then the image should be in the document', () => {
      expect(elements[0]).toBeInTheDocument();
      expect(elements[1]).toBeInTheDocument();
    });
  });

  describe('When it is rendered with a pokemon "next-generation"', () => {
    let elements: HTMLElement[];
    let context: UsePoke;
    beforeEach(() => {
      context = MOCK_FULL_CONTEXT;
      const mockPoke = MOCK_POKE_EMPTY;
      mockPoke.sprites = {} as Sprites;
      mockPoke.sprites.other = OTHER_SPRITES;
      render(
        <AppContext.Provider value={context}>
          <Router>
            <PokeItem poke={mockPoke} source="home">
              <></>
            </PokeItem>
          </Router>
        </AppContext.Provider>
      );
      elements = [screen.getByRole('img')];
    });

    test('Then the image should be in the document', () => {
      expect(elements[0]).toBeInstanceOf(HTMLElement);
      expect(elements[0]).toBeInTheDocument();
    });
  });
});
