import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Layout } from './layout';
import { MenuOptionsType } from '../../types/menu.options';
import { Header } from './header';
import { Footer } from './footer';
import { Main } from './main';

jest.mock('./header');
jest.mock('./footer');
jest.mock('./main');

describe('Given "Layout" component', () => {
  const menuitems = [] as MenuOptionsType;

  render(
    <Layout menuItems={menuitems}>
      <></>
    </Layout>
  );

  test('Then its child components should to be called', () => {
    expect(Header).toHaveBeenCalled();
    expect(Footer).toHaveBeenCalled();
    expect(Main).toHaveBeenCalled();
  });
});
