import { UsePoke } from '../hooks/use.poke';
import { MOCK_POKE_EMPTY } from './mock';
import { MOCK_STATE } from './state';

export const MOCK_FAVORITES = [
  {
    ...MOCK_POKE_EMPTY,
    id: 2,
    name: 'Squirtle',
    height: 25,
  },
];

export const MOCK_FULL_CONTEXT: UsePoke = {
  loadingState: false,
  state: MOCK_STATE,
  favorites: MOCK_FAVORITES,
  pokeSelected: MOCK_POKE_EMPTY,
  changeFavorites: jest.fn(),
  setDetail: jest.fn(),
  hydrateData: jest.fn(),
};
