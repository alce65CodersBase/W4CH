import { act, fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { usePhone } from './use.phone';

jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');

describe('Given usePhone hook used in a component', () => {
  const mockNumber = '666666666';
  function MockComponent() {
    const { isCalling, handleCall, handleHang, setPhoneNumber } = usePhone();
    return (
      <div>
        <output>PhoneNumber: {isCalling} </output>
        <output>State: {isCalling ? 'Calling' : 'Ready'}</output>
        <button
          onClick={() => {
            setPhoneNumber(mockNumber);
          }}
        >
          SetNumber
        </button>
        <button
          onClick={() => {
            handleCall();
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

  describe('When component it is rendered ', () => {
    let elements: HTMLElement[];
    beforeEach(async () => {
      await act(async () => {
        render(<MockComponent></MockComponent>);
      });

      elements = [
        ...screen.getAllByRole('status'),
        ...screen.getAllByRole('button'),
      ];
    });

    test('Then after click Call, phone number should be in the document', async () => {
      await act(async () => {
        fireEvent.click(elements[2]); // Set Number
      });
      await act(async () => {
        fireEvent.click(elements[3]); // Call
      });
      expect(elements[0]).toHaveTextContent(mockNumber);
      expect(elements[1]).toHaveTextContent('Calling');
    });

    test('Then after a Call, phone hang after 5 seconds', async () => {
      await act(async () => {
        fireEvent.click(elements[2]); // Set Number
      });
      await act(async () => {
        fireEvent.click(elements[3]); // Call
      });
      await act(async () => {
        jest.runAllTimers();
      });
      expect(setTimeout).toHaveBeenCalled();
      expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 5000);
    });

    test('Then after click Hang, phone number should not be in the document', async () => {
      await act(async () => {
        fireEvent.click(elements[2]); // Set Number
      });
      await act(async () => {
        fireEvent.click(elements[3]); // Call
      });
      expect(elements[0]).toHaveTextContent(mockNumber);
      expect(elements[1]).toHaveTextContent('Calling');
      await act(async () => {
        fireEvent.click(elements[4]); // Hang
      });
      expect(elements[0]).not.toHaveTextContent(mockNumber);
      expect(elements[1]).toHaveTextContent('Ready');
    });
  });
});
