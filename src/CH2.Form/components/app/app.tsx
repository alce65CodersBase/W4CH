import { menuItems } from '../../config/menu.item';
import { AppRoutes } from '../routes/app.routes';

import app from './app.module.css';

export function App() {
  return (
    <div className={app.container}>
      <h1 className={app.header}>CH2 Form</h1>
      <AppRoutes items={menuItems}></AppRoutes>
    </div>
  );
}
