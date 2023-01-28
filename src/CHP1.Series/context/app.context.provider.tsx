/* globals JSX */
import { useSeries } from '../hooks/use.series';
import { AppContext } from './app.context';

type AppContextProps = {
  children: JSX.Element;
};
export function AppContextProvider({ children }: AppContextProps) {
  const context = useSeries();
  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}
