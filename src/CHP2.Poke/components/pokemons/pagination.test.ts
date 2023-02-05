import { Pagination } from './pagination';
import { fireEvent, screen } from '@testing-library/dom';
import { MOCK_FULL_STATE } from '../../__mocks__/state';
import { State } from '../../services/state/state';

describe('Given the component Pagination', () => {
  describe('When it will be instantiated ', () => {
    let renderedComponent: Pagination;
    let state: State;
    beforeEach(() => {
      state = MOCK_FULL_STATE;
      document.body.innerHTML = '<slot></slot>';
      renderedComponent = new Pagination('slot', state);
    });
    test('Then it should be rendered', () => {
      expect(renderedComponent).toBeDefined();
    });

    test('Then the buttons should be visible for the user', () => {
      const btnPrev = screen.getByText(/Anterior/i);
      expect(btnPrev).toBeTruthy();
      const btnNext = screen.getByText(/Siguiente/i);
      expect(btnNext).toBeTruthy();
    });

    describe('and it is the first pagination block', () => {
      test('the "prev" button should be disabled', () => {
        state.previousUrl = '';
        (document.querySelector('slot') as HTMLSlotElement).innerHTML = '';
        renderedComponent = new Pagination('slot', state);
        const buttons = screen.getAllByRole('button');
        expect(buttons[0].getAttribute('disabled')).toBe('true');
      });
    });
    describe('and it is the last pagination block', () => {
      test('the "next" button should be disabled', () => {
        state.previousUrl = 'prev url';
        state.nextUrl = '';
        (document.querySelector('slot') as HTMLSlotElement).innerHTML = '';
        renderedComponent = new Pagination('slot', state);
        const buttons = screen.getAllByRole('button');
        expect(buttons[1].getAttribute('disabled')).toBe('true');
      });
    });

    test('then the buttons should be used', () => {
      const buttons = screen.getAllByRole('button');
      fireEvent.click(buttons[0]);
      expect(state.hydrateData).toHaveBeenCalled();
      fireEvent.click(buttons[1]);
      expect(state.hydrateData).toHaveBeenCalled();
    });
  });
});
