import { render, screen, act, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MOCK_POKE_EMPTY } from '../__mocks__/mock';
import { Pokemon, ProtoPokemon } from '../models/pokemon';
import { URL_POKE_API } from '../services/config';
import * as service from '../services/repository/poke.repo';
import { PokeResponse } from '../services/repository/types';
import { usePoke } from './use.poke';

// Mock full module and mock part of it
jest.mock('../services/repository/poke.repo');

const fetchPoke = jest.fn().mockImplementation((url) => {
  let data: PokeResponse<Pokemon | ProtoPokemon> = [
    { ...MOCK_POKE_EMPTY, id: 1, name: 'Snorlax' },
  ];
  if (url === URL_POKE_API) {
    data = {
      count: 1118,
      next: 'https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20',
      previous: '',
      results: [
        {
          name: 'snorlax',
          url: 'https://pokeapi.co/api/v2/pokemon/1/',
        },
        {
          name: 'bulbasaur',
          url: 'https://pokeapi.co/api/v2/pokemon/2/',
        },
        {
          name: 'bad_url: ni id',
          url: 'https://pokeapi.co/api/v2/pokemon/',
        },
      ],
    };
  }

  return Promise.resolve(data);
});

const queryPoke = jest
  .fn()
  .mockResolvedValue({ ...MOCK_POKE_EMPTY, id: 1, name: 'Snorlax' });
const addPoke = jest.fn().mockResolvedValue({});
const removePoke = jest.fn().mockResolvedValue({});

(service.createPokeRepo as jest.Mock).mockImplementation(() => ({
  fetchPoke,
  queryPoke,
  addPoke,
  removePoke,
}));

const Test = () => {
  const { state, favorites, changeFavorites, setDetail } = usePoke();

  const detailPoke = () => {
    const origin = '.poke-list__list';
    const pokeId = 1;
    setDetail(origin, pokeId);
  };

  const detailFavorite = () => {
    const origin = '.my-poke-list__list';
    const pokeId = 1;
    setDetail(origin, pokeId);
  };

  return (
    <>
      <ul>
        <li>{state.count}</li>
        <li>{state.nextUrl}</li>
        <li>{state.previousUrl}</li>
        <li>{state.pokeData.length}</li>
        <li>{favorites.length}</li>
      </ul>
      <button onClick={() => changeFavorites(2)}>Add 2</button>
      <button onClick={() => changeFavorites(1)}>Remove 1</button>
      <button onClick={() => changeFavorites(3)}>Try Add 3</button>
      <button onClick={detailPoke}>Detail Poke 1</button>
      <button onClick={detailFavorite}>Detail Favorite 1</button>
    </>
  );
};

describe('Given the custom hook usePoke', () => {
  let elements: HTMLElement[];
  beforeEach(async () => {
    await act(async () => {
      render(<Test></Test>);
    });

    elements = screen.getAllByRole('listitem');
  });
  describe('When it will be used in a Test component ', () => {
    test('Then it should be created and use the repo for get the data', () => {
      expect(service.createPokeRepo).toHaveBeenCalled();
      expect(fetchPoke).toHaveBeenCalled();
      expect(elements).toBeDefined();
      expect(elements[0].textContent).toBe('1118');
      expect(elements[3].textContent).toBe('2'); // Is state.pokeData.length
      expect(elements[4].textContent).toBe('1'); // Is state.favorites.length
    });

    describe('When user click the buttons in the component', () => {
      let buttons: HTMLElement[];
      beforeEach(() => {
        buttons = screen.getAllByRole('button');
      });
      test('Then button 1 should be used for add favorites', async () => {
        // eslint-disable-next-line max-nested-callbacks
        await act(async () => {
          fireEvent.click(buttons[0]);
        });
        expect(service.createPokeRepo).toHaveBeenCalled();
        expect(addPoke).toHaveBeenCalled();
      });

      test('Then button 2 should be used for remove favorites', async () => {
        // eslint-disable-next-line max-nested-callbacks
        await act(async () => {
          fireEvent.click(buttons[1]);
        });
        expect(service.createPokeRepo).toHaveBeenCalled();
        expect(removePoke).toHaveBeenCalled();
      });
      test(`Then button 3 should be used for try to
        add to favorites an inexistent pokemon`, async () => {
        // eslint-disable-next-line max-nested-callbacks
        await act(async () => {
          fireEvent.click(buttons[2]);
        });
        expect(service.createPokeRepo).toHaveBeenCalled();
        expect(addPoke).toHaveBeenCalled();
      });

      test('Then button 4 should be used for setDetail from home page', async () => {
        // eslint-disable-next-line max-nested-callbacks
        await act(async () => {
          fireEvent.click(buttons[3]);
        });
        //  FROM state.pokeData = [MOCK_POKE];
        //  setDetail(origin, pokeId)): 'id': MOCK_POKE.id
      });

      test('Then button 5 should be used for setDetail from favorites', async () => {
        // eslint-disable-next-line max-nested-callbacks
        await act(async () => {
          fireEvent.click(buttons[4]);
        });
        // FROM [MOCK_POKE];
        // setDetail(origin, pokeId)): 'id': MOCK_POKE.id
      });
    });
  });
});
