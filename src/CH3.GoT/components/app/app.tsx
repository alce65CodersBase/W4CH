import { useContext } from 'react';
import { AppContext } from '../../context/context';
import { CharacterList } from '../character.list/character.list';
import { Communications } from '../communications/communications';
import { appContainer, title } from './app.module.css';

export function App() {
  const {
    state: { whoIsTalking },
  } = useContext(AppContext);

  return (
    <div className="app">
      <h1 className={title}>CH3 Game of Trons</h1>
      <main className={appContainer}>
        <CharacterList></CharacterList>
        {whoIsTalking && <Communications></Communications>}
      </main>
    </div>
  );
}
