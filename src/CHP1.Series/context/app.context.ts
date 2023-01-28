import { createContext } from 'react';
import { useSeries } from '../hooks/use.series';

type ContextType = ReturnType<typeof useSeries>;
const initialContext = {} as ContextType;
export const AppContext = createContext(initialContext);
