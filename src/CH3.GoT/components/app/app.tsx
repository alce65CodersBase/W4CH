import { CharacterList } from '../character.list/character.list';
import { container } from './app.module.css';

export function App() {
  return (
    <div className="app">
      <h1>CH3 Game of Trons</h1>
      <main className={container}>
        <CharacterList></CharacterList>
      </main>
    </div>
  );
}
