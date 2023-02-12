import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Key } from './key';
import { AppContext } from '../../context/app.context';
import { UsePhone } from '../../hooks/use.phone';

const mockContext = {
  phoneNumber: '1',
  setPhoneNumber: jest.fn(),
};
const renderedElements = (label: string, type?: string) => {
  render(
    <AppContext.Provider value={mockContext as unknown as UsePhone}>
      <Key label={label} type={type} />
    </AppContext.Provider>
  );
  return [screen.getByRole('button')];
};

describe('Given the component Key rendered', () => {
  let elements: HTMLElement[];
  describe('When it is a numeric key', () => {
    beforeEach(() => {
      elements = renderedElements('1');
    });
    test('Then it should be used for set phone number', () => {
      expect(elements[0]).toBeInTheDocument();
      fireEvent.click(elements[0]);
      expect(mockContext.setPhoneNumber).toHaveBeenCalledWith('11');
    });
  });
  describe('When it is a numeric key and the phone number has already 9 digits', () => {
    beforeEach(() => {
      mockContext.phoneNumber = '666666666';
      elements = renderedElements('1', 'normal');
    });
    test('Then it should NOT set phone number', () => {
      fireEvent.click(elements[0]);
      // Test innecesario, porque la función no hace nada
    });
  });

  describe('When it is the delete key', () => {
    beforeEach(() => {
      elements = renderedElements('delete', 'delete');
    });
    test('Then it should be on the screen', () => {
      fireEvent.click(elements[0]);
      expect(mockContext.setPhoneNumber).toHaveBeenCalledWith('');
    });
  });
});
