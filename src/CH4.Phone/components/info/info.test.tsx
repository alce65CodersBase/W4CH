import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Info } from './info';
import { AppContext } from '../../context/app.context';
import { UsePhone } from '../../hooks/use.phone';

const mockNumber = '666666666';
const renderedElements = (isCalling: string) => {
  const context = {
    isCalling,
    phoneNumber: mockNumber,
  } as UsePhone;
  render(
    <AppContext.Provider value={context}>
      <Info />
    </AppContext.Provider>
  );
  return [
    screen.getByRole('region', { name: 'info' }),
    screen.getByRole('status'),
  ];
};

describe('Given the component Info rendered', () => {
  let elements: HTMLElement[];
  describe('When phone is calling', () => {
    beforeEach(() => {
      elements = renderedElements(mockNumber);
    });
    test('Then "Calling" message should be on the screen', () => {
      expect(elements[0]).toBeInTheDocument();
      expect(elements[1]).toHaveTextContent('📞 Calling');
      expect(elements[1]).toHaveTextContent(mockNumber);
    });
  });
  describe('When phone is NOT calling', () => {
    beforeEach(() => {
      elements = renderedElements('');
    });
    test('Then "Calling" message should NOT be on the screen', () => {
      expect(elements[1]).toHaveTextContent('☎️');
    });
  });
});
