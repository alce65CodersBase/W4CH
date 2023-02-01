/* globals JSX */
import { usePoke } from '../hooks/use.poke';
import { AppContext } from './app.context';

type AppContextProps = {
  children: JSX.Element;
};
export function AppContextProvider({ children }: AppContextProps) {
  const context = usePoke();
  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}
