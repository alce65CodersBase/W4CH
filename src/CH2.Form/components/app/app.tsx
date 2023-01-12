import { useEffect, useState } from 'react';
import { menuItems } from '../../config/menu.item';
import { AccountData, PersonalData } from '../../models/user';
import { consoleDebug } from '../../tools/debug';
import { AppRoutes } from '../routes/app.routes';

import app from './app.module.css';

export type StateStructure = {
  personal: PersonalData;
  account: AccountData;
  step: number;
};

export function App() {
  const initialState: StateStructure = {
    personal: {} as PersonalData,
    account: {} as AccountData,
    step: 1,
  } as StateStructure;

  const [state, setState] = useState(initialState);

  useEffect(() => {
    consoleDebug('nuevo State');
    consoleDebug(state);
  }, [state]);

  return (
    <div className={app.container}>
      <h1 className={app.header}>CH2 Form</h1>
      <AppRoutes
        items={menuItems}
        state={state}
        setState={setState}
      ></AppRoutes>
    </div>
  );
}
