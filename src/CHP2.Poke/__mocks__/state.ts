import { MockState, State } from '../services/state/state';
import { MOCK_POKE } from './mock';

export const MOCK_STATE = new MockState();
MOCK_STATE.pokeData = [
  {
    ...MOCK_POKE,
    id: 1,
    name: 'Snorlax',
    height: 22,
  },
];
MOCK_STATE.favorites = [
  {
    ...MOCK_POKE,
    id: 2,
    name: 'Squirtle',
    height: 25,
  },
];

export const MOCK_FULL_STATE = new MockState() as State;
MOCK_FULL_STATE.pokeData = MOCK_STATE.pokeData;
MOCK_FULL_STATE.favorites = MOCK_STATE.favorites;
MOCK_FULL_STATE.hydrateData = jest.fn().mockResolvedValue({});
MOCK_FULL_STATE.hydrateFavorites = jest.fn();
MOCK_FULL_STATE.changeFavorites = jest.fn();
MOCK_FULL_STATE.updateState = jest.fn();
MOCK_FULL_STATE.getDetail = jest.fn();
