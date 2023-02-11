import { createContext } from 'react';
import { UsePhone } from '../hooks/use.phone';

const initialContext = {} as UsePhone;
export const AppContext = createContext(initialContext);
