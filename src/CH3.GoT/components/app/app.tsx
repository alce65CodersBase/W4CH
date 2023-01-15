import { CharacterList } from '../character.list/character.list';
// TEMP import { Communications } from '../communications/communications';
import { appContainer, title } from './app.module.css';

export function App() {
  return (
    <div className="app">
      <h1 className={title}>CH3 Game of Trons</h1>
      <main className={appContainer}>
        <CharacterList></CharacterList>

        {/* <Communications></Communications> */}
      </main>
    </div>
  );
}
