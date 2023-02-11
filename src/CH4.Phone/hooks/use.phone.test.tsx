import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { usePhone } from './use.phone';

describe('Given usePhone hook used in a component', () => {
  function MockComponent() {
    const { phoneNumber, isCalling, handleCall, handleHang } = usePhone();
    return (
      <div>
        <output>{phoneNumber}</output>
        <output>State: {isCalling ? 'Calling' : 'Ready'}</output>
        <button
          onClick={() => {
            handleCall(mockNumber);
          }}
        >
          Call
        </button>
        <button
          onClick={() => {
            handleHang();
          }}
        >
          Hang
        </button>
      </div>
    );
  }

  const mockNumber = '666666666';

  describe('When component it is rendered ', () => {
    let elements: HTMLElement[];
    beforeEach(() => {
      render(<MockComponent></MockComponent>);
      elements = [
        ...screen.getAllByRole('status'),
        ...screen.getAllByRole('button'),
      ];
    });

    test('Then after click Call, phone number should be in the document', () => {
      fireEvent.click(elements[2]);
      expect(elements[0]).toHaveTextContent(mockNumber);
    });

    test('Then after click Hang, phone number should not be in the document', () => {
      fireEvent.click(elements[2]);
      expect(elements[0]).toHaveTextContent(mockNumber);
      fireEvent.click(elements[3]);
      expect(elements[0]).toHaveTextContent('');
    });
  });
});
