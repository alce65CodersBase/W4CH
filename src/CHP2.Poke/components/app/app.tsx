import { MenuOptionsType } from '../../types/menu.options';
import { Layout } from '../layout/layout';
import { AppRoutes } from '../routes/app.routes';

export function App() {
  const items: MenuOptionsType = [
    { path: '/home', label: 'Inicio' },
    { path: '/favorites', label: 'Favoritos' },
    { path: '/details', label: 'Detalles' },
  ];
  return (
    <>
      <Layout menuItems={items.slice(0, 2)}>
        <AppRoutes items={items}></AppRoutes>
      </Layout>
    </>
  );
}
