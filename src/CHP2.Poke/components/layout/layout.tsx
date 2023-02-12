/* globals JSX */
import { Header } from './header';
import { Footer } from './footer';
import { Menu } from './menu';
import { MenuOptionsType } from '../../types/menu.options';
import { Main } from './main';

type LayoutProps = {
  menuItems: MenuOptionsType;
  children: JSX.Element;
};
export function Layout({ menuItems, children }: LayoutProps) {
  return (
    <>
      <Header>
        <Menu options={menuItems}></Menu>
      </Header>
      <Main>{children}</Main>
      <Footer></Footer>
    </>
  );
}
