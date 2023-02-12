import { createContext } from 'react';
import { usePoke } from '../hooks/use.poke';
import { Pokemon } from '../models/pokemon';

export type AppContextType = ReturnType<typeof usePoke>;
const initialContext = {
  state: {
    count: 0,
    nextUrl: '',
    previousUrl: '',
    pokeData: [],
  },
  favorites: [],
  loadingState: false,
  pokeSelected: {} as Pokemon,
  async changeFavorites(_id: number) {},
  async setDetail() {},
  async hydrateData(_url: string) {},
} as AppContextType;
export const AppContext = createContext(initialContext);
