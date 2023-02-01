import { createContext } from 'react';
import { usePoke } from '../hooks/use.poke';

export type AppContextType = ReturnType<typeof usePoke>;
const initialContext = {} as AppContextType;
export const AppContext = createContext(initialContext);
