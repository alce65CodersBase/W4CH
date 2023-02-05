import { StateStructure } from '../hooks/use.poke';
import { MOCK_POKE_EMPTY } from './mock';

export const MOCK_FULL_STATE: StateStructure = {
  count: 0,
  nextUrl: '',
  previousUrl: '',
  pokeData: [],
};

export const MOCK_STATE = MOCK_FULL_STATE;
MOCK_STATE.pokeData = [
  {
    ...MOCK_POKE_EMPTY,
    id: 1,
    name: 'Snorlax',
    height: 22,
  },
];
