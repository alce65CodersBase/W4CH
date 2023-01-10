import { useEffect, useState } from 'react';
import { GentStructure } from '../../models/gent';
import { findGents } from '../../services/repository';
import { Button } from '../button/button';
import { Gent } from '../gent/gent';
import { Header } from '../header/header';
import { Info } from '../info/info';

import './app.css';

export function App() {
  const initialState: Array<GentStructure> = [];

  const [gents, setGents] = useState(initialState);
  const [numberOfSelected, setNumberOfSelected] = useState(0);

  useEffect(() => {
    setGents(findGents());
  }, []);

  useEffect(() => {
    setNumberOfSelected(gents.filter((item) => item.selected === true).length);
  }, [gents]);

  function selectAll(isSelect: boolean) {
    setGents(gents.map((item) => ({ ...item, selected: isSelect })));
  }

  function selectGent(gentId: GentStructure['id']) {
    setGents(
      gents.map((item) =>
        item.id === gentId ? { ...item, selected: !item.selected } : item
      )
    );
  }

  function deleteGent(gentId: GentStructure['id']) {
    setGents(gents.filter((item) => item.id !== gentId));
  }

  return (
    <div className="app-container" role="application">
      <Header></Header>
      <Info gentsNumber={numberOfSelected}>
        <div className="buttons">
          {numberOfSelected !== gents.length && (
            <Button label="Select all" selectAll={selectAll}></Button>
          )}
          {numberOfSelected !== 0 && (
            <Button label="Deselect all" selectAll={selectAll}></Button>
          )}
        </div>
      </Info>
      <main className="main">
        <ul className="gentlemen">
          {gents.map((item) => (
            <Gent
              key={item.id}
              gent={item}
              selectGent={selectGent}
              deleteGent={deleteGent}
            ></Gent>
          ))}
        </ul>
      </main>
    </div>
  );
}
