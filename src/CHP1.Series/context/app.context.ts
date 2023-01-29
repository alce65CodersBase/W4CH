import { createContext } from 'react';
import { useSeries } from '../hooks/use.series';

export type AppContextType = ReturnType<typeof useSeries>;
const initialContext = {} as AppContextType;
export const AppContext = createContext(initialContext);
