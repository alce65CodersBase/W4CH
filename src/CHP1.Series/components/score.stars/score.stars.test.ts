import { fireEvent, screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { ScoreStars } from './score.stars';

describe('Given "ScoreStars" component', () => {
  document.body.innerHTML = `<slot></slot>`;
  const handleScore = jest.fn();
  const score = new ScoreStars('slot', 0, handleScore);
  const elements = [['<li>', screen.getByRole('button', { name: 'Star1' })]];

  describe('When it is call with a DOM implementation', () => {
    test('Then we should to be able to instantiate it', () => {
      expect(score).toBeInstanceOf(ScoreStars);
    });
    test.each(elements)(`Then %1 should be render`, (_title, element) => {
      expect(element).toBeInstanceOf(HTMLElement);
      expect(element).toBeInTheDocument();
    });
  });
  describe('When we click its <li>', () => {
    test('Then the parameter handleScore should be called', () => {
      const button = elements[0][1] as HTMLElement;
      fireEvent.click(button);
      expect(handleScore).toHaveBeenCalled();
    });
  });
});
