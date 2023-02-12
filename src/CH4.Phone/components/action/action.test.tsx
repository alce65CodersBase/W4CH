import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Action } from './action';

const handleClick = jest.fn();
const renderedElements = (state?: boolean) => {
  render(
    <Action label="test" type="test" state={state} handleClick={handleClick} />
  );
  return [screen.getByRole('button', { name: 'test' })];
};

describe('Given the component Action', () => {
  describe('When it is rendered with a valid state (true)', () => {
    let elements: HTMLElement[];
    beforeEach(() => {
      elements = renderedElements(true);
    });

    test('Then it should be on the screen', () => {
      expect(elements[0]).toBeInTheDocument();
    });

    test('Then user should use the button', () => {
      fireEvent.click(elements[0]);
      expect(handleClick).toHaveBeenCalled();
    });
  });
  describe('When it is rendered with a NOT valid state (undefined)', () => {
    const handleClick = jest.fn();
    let elements: HTMLElement[];
    beforeEach(() => {
      elements = renderedElements();
    });

    test('Then user should NOT use the button', () => {
      fireEvent.click(elements[0]);
      expect(handleClick).not.toHaveBeenCalled();
    });
  });
});
