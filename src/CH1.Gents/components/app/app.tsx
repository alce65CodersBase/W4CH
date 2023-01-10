import { Button } from '../button/button';
import { Gent } from '../gent/gent';
import { Header } from '../header/header';
import { Info } from '../info/info';

import './app.css';

export function App() {
  return (
    <div className="app-container" role="application">
      <Header></Header>
      <Info>
        <Button></Button>
      </Info>
      <main className="main">
        <ul className="gentlemen">
          <Gent></Gent>
        </ul>
      </main>
    </div>
  );
}
