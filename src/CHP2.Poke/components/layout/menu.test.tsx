import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter as Router } from 'react-router-dom';
import { MenuOptionsType } from '../../types/menu.options';
import { Menu } from './menu';

describe('Given "Menu" component', () => {
  const mockOptions: MenuOptionsType = [
    { path: '', label: 'Test 1' },
    { path: '', label: 'Test 2' },
  ];
  let elements: HTMLElement[];
  beforeEach(() => {
    render(
      <Router>
        <Menu options={mockOptions}></Menu>
      </Router>
    );
    elements = [screen.getByRole('navigation')];
  });

  describe('When it is rendered', () => {
    test(`Then the element should be in the document`, () => {
      expect(elements[0]).toBeInstanceOf(HTMLElement);
      expect(elements[0]).toBeInTheDocument();
    });

    test('Then the menu should be visible for the user', () => {
      const menuLabel1 = screen.getByText(mockOptions[0].label);
      const menuLabel2 = screen.getByText(mockOptions[1].label);
      expect(menuLabel1).toBeInTheDocument();
      expect(menuLabel2).toBeInTheDocument();
    });
  });
});
