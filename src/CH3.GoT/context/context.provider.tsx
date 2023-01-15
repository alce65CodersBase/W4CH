/* globals JSX */
import { useMemo } from 'react';
import { useCharacters } from '../hooks/useCharacters';
import { AppContext } from './context';

export function AppContextProvider({ children }: { children: JSX.Element }) {
  const { state, handleLoad, handleDead, handleCommunicate } = useCharacters();

  const context = useMemo(
    () => ({
      state,
      handleLoad,
      handleDead,
      handleCommunicate,
    }),
    [state, handleLoad, handleDead, handleCommunicate]
  );

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}
