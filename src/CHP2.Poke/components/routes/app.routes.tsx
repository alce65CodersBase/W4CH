import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { MenuOptionsType } from '../../types/menu.options';

const Home = lazy(() => import('../../pages/home/home'));
const Favorites = lazy(() => import('../../pages/favorites/favorites'));
const Details = lazy(() => import('../../pages/details/details'));

export function AppRoutes({ items }: { items: MenuOptionsType }) {
  return (
    <Suspense>
      <Routes>
        <Route path={''} element={<Home></Home>}></Route>
        <Route path={items[0].path} element={<Home></Home>}></Route>
        <Route path={items[1].path} element={<Favorites></Favorites>}></Route>
        <Route path={items[2].path} element={<Details></Details>}></Route>
        <Route path={'*'} element={<Navigate to="" replace></Navigate>}></Route>
      </Routes>
    </Suspense>
  );
}
