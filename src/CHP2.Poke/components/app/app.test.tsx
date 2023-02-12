import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { App } from './app';
import { Layout } from '../layout/layout';

jest.mock('../layout/layout');

describe('Given "App" component', () => {
  render(<App></App>);
  describe('When it is render', () => {
    test('Then its child components should to be called', () => {
      expect(Layout).toHaveBeenCalled();
    });
  });
});
