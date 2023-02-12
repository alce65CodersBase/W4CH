import { usePhone } from '../hooks/use.phone';
import { AppContext } from './app.context';

type AppContextProviderProps = {
  children: globalThis.JSX.Element;
};

export function AppContextProvider({ children }: AppContextProviderProps) {
  const context = usePhone();
  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}
