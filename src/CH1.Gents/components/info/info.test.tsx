import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Info } from './info';

describe('Given Info component', () => {
  describe('When it has been rendered', () => {
    const gentsNumber = 0;
    beforeEach(() => {
      render(
        <Info gentsNumber={gentsNumber}>
          <></>
        </Info>
      );
    });

    test('Then it should be on the screen', () => {
      const componentInfo = screen.getByRole('region');
      expect(componentInfo).toBeInTheDocument();
    });
    test('Then "number of gents" should be on the screen', () => {
      const expected = new RegExp(String(gentsNumber), 'i');
      const gentsInfo = screen.getByText(expected);
      expect(gentsInfo).toBeInTheDocument();
    });
  });
});
