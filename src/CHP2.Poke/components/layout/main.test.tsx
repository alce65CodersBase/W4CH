import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Main } from './main';

describe('Given "Main" component', () => {
  let elements: HTMLElement[];
  beforeEach(() => {
    render(
      <Main>
        <></>
      </Main>
    );
    elements = [screen.getByRole('main')];
  });

  describe('When it is rendered', () => {
    test('Then we should have its instance', () => {
      expect(elements[0]).toBeInstanceOf(HTMLElement);
    });

    test(`Then the element should be in the document`, () => {
      expect(elements[0]).toBeInTheDocument();
    });
  });
});
