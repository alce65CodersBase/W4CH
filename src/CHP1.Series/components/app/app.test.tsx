import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { App } from './app';
import { SeriesPage } from '../../pages/series/series';

jest.mock('../../pages/series/series');

describe('Given "App" component', () => {
  render(<App></App>);
  describe('When it is render', () => {
    test(`Then page Series should be called`, () => {
      expect(SeriesPage).toHaveBeenCalled();
    });
  });
});
