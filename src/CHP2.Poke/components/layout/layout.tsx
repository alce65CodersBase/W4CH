import { Header } from './header';
import { Footer } from './footer';
import { Menu } from './menu';
import { MenuOptionsType } from '../../types/menu.options';
import { Main } from './main';

export function Layout({ menuItems }: { menuItems: MenuOptionsType }) {
  return (
    <>
      <Header>
        <Menu options={menuItems}></Menu>
      </Header>
      <Main>
        <></>
      </Main>
      <Footer></Footer>
    </>
  );
}
