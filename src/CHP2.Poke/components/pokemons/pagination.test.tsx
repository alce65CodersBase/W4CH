import { fireEvent, screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AppContext } from '../../context/app.context';
import { MOCK_FULL_CONTEXT } from '../../__mocks__/context';
import { Pagination } from './pagination';
import { UsePoke } from '../../hooks/use.poke';

describe('Given the component Pagination', () => {
  let elements: HTMLElement[];
  let context: UsePoke;
  describe('When it will be rendered ', () => {
    beforeEach(() => {
      context = MOCK_FULL_CONTEXT;
      render(
        <AppContext.Provider value={context}>
          <Pagination></Pagination>
        </AppContext.Provider>
      );
      elements = screen.getAllByRole('button');
    });

    test('Then the buttons should be visible for the user', () => {
      expect(elements[0]).toBeInTheDocument();
      expect(elements[1]).toBeTruthy();
    });
  });
  describe('When it is the first pagination block', () => {
    beforeEach(() => {
      context = MOCK_FULL_CONTEXT;
      context.state.previousUrl = '';
      context.state.nextUrl = 'next url';
      render(
        <AppContext.Provider value={context}>
          <Pagination></Pagination>
        </AppContext.Provider>
      );
      elements = screen.getAllByRole('button');
    });

    test('the "prev" button should be disabled', () => {
      expect(elements[0].getAttribute('disabled')).toBe('');
      expect(elements[1].getAttribute('disabled')).toBe(null);
    });
    test('then the button next should be used', () => {
      fireEvent.click(elements[1]);
      expect(context.hydrateData).toHaveBeenCalled();
    });
  });
  describe('When it is the last pagination block', () => {
    beforeEach(() => {
      context = MOCK_FULL_CONTEXT;
      context.state.previousUrl = 'prev url';
      context.state.nextUrl = '';
      render(
        <AppContext.Provider value={context}>
          <Pagination></Pagination>
        </AppContext.Provider>
      );
      elements = screen.getAllByRole('button');
    });

    test('the "next" button should be disabled', () => {
      expect(elements[1].getAttribute('disabled')).toBe('');
      expect(elements[0].getAttribute('disabled')).toBe(null);
    });

    test('then the button prev should be used', () => {
      fireEvent.click(elements[0]);
      expect(context.hydrateData).toHaveBeenCalled();
    });
  });
});
