import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Header } from './header';

describe('Given "Header" component', () => {
  render(<Header></Header>);
  const elements = [screen.getByRole('heading', { name: 'My Series' })];
  describe('When it is render', () => {
    test(`Then ${elements[0].tagName} should be in the document`, () => {
      expect(elements[0]).toBeInstanceOf(HTMLElement);
      expect(elements[0]).toBeInTheDocument();
    });
  });
});
