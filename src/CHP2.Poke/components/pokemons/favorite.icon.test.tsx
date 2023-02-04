import { fireEvent, screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { FavoriteIcon } from './favorite.icon';
import { StateStructure, UsePoke } from '../../hooks/use.poke';
import { AppContext } from '../../context/app.context';
import { MOCK_POKE } from '../../__mocks__/mock';
import { Pokemon } from '../../models/pokemon';

// BAD jest.mock('../lists/my.poke.list');

describe('Given the component FavoriteIcon', () => {
  let renderComponent: (_n?: number) => void;
  describe('When it will be rendered ', () => {
    let elements: HTMLElement[];
    const context = {} as UsePoke;
    const mockPoke = {
      ...MOCK_POKE,
      id: 1,
      name: 'Snorlax',
    };
    const favorite = { id: 2, name: 'Squirtle' } as Pokemon;
    context.state = {
      pokeData: [mockPoke],
    } as StateStructure;
    context.changeFavorites = jest.fn().mockResolvedValue({});
    context.favorites = [favorite];
    renderComponent = (n: number = 2) => {
      render(
        <AppContext.Provider value={context}>
          <FavoriteIcon pokeId={n}></FavoriteIcon>
        </AppContext.Provider>
      );
    };

    describe('and the icon is assigned to a favorite pokemon', () => {
      beforeEach(() => {
        renderComponent();
        elements = [
          // TEMP screen.getByText(mockPoke.name) as HTMLElement
          screen.getByRole('button') as HTMLElement,
        ];
      });
      test('Then the button should be in the document', () => {
        expect(elements[0]).toBeInTheDocument();
      });
      test('Then the icon solid for "Favorite" should be visible and modifiable', () => {
        const elementIcon = elements[0];
        expect(elementIcon.classList.contains('fas')).toBe(true);
        fireEvent.click(elementIcon);
        expect(elementIcon.classList.contains('far')).toBe(true);
        expect(context.changeFavorites).toHaveBeenCalled();
      });
    });

    describe('and the icon is assigned to a non favorite pokemon', () => {
      beforeEach(() => {
        renderComponent(1);
        elements = [screen.getByRole('button') as HTMLElement];
      });
      test('Then the icon regular for "Favorite" should be visible and modifiable', () => {
        const elementIcon = elements[0];
        expect(elementIcon.classList.contains('far')).toBe(true);
        fireEvent.click(elementIcon);
        expect(elementIcon.classList.contains('fas')).toBe(true);
        expect(context.changeFavorites).toHaveBeenCalled();
      });
    });
  });
});
