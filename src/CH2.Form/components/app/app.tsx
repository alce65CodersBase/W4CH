import { menuItems } from '../../config/menu.item';
import { AppRoutes } from '../routes/app.routes';

export function App() {
  return (
    <div className="App">
      <h1>CH2 Form</h1>
      <AppRoutes items={menuItems}></AppRoutes>
    </div>
  );
}
