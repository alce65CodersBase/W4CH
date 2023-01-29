import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SeriesPage } from './series';
import { Header } from '../../components/header/header';
import { List } from '../../components/list/list';

jest.mock('../../components/header/header');
jest.mock('../../components/list/list');

// No se usan mocks de los componentes Header y List
// renderizados directamente por la SeriesPage
// pero no se testan sus funcionalidades

describe('Given "SeriesPage" component', () => {
  render(<SeriesPage></SeriesPage>);
  const elements = [screen.getByRole('heading', { name: 'Series list' })];
  describe('When it is render', () => {
    test('Then the title should be in the document', () => {
      expect(elements[0]).toBeInstanceOf(HTMLElement);
      expect(elements[0]).toBeInTheDocument();
    });
    test('Then component Header should be called', () => {
      expect(Header).toHaveBeenCalled();
    });
    test('Then component List should be called', () => {
      expect(List).toHaveBeenCalledTimes(2);
    });
  });
});
