import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Actions } from './actions';
import { AppContext } from '../../context/app.context';
import { UsePhone } from '../../hooks/use.phone';

const mockContext: UsePhone = {
  isCalling: '',
  phoneNumber: '1',
  handleCall: jest.fn(),
  handleHang: jest.fn(),
  setPhoneNumber: jest.fn(),
};

const renderedElements = (callingStatus: string) => {
  const context = {
    ...mockContext,
    isCalling: callingStatus,
  };
  render(
    <AppContext.Provider value={context}>
      <Actions>
        <></>
      </Actions>
    </AppContext.Provider>
  );
  return [screen.getByRole('region', { name: 'actions' })];
};

describe('Given the component Actions rendered', () => {
  describe('When the phone is calling', () => {
    let elements: HTMLElement[];
    beforeEach(() => {
      elements = renderedElements('666666666');
    });
    test('Then Hang button (Action) should be on the screen', () => {
      const label = 'Hang';
      const action = screen.getByRole('button', { name: label });
      expect(elements[0]).toBeInTheDocument();
      expect(action).toBeInTheDocument();
    });
  });

  describe('When the phone is NOT calling', () => {
    let elements: HTMLElement[];
    beforeEach(() => {
      elements = renderedElements('');
    });
    test('Then Call button (Action) should be on the screen', () => {
      const label = 'Call';
      const action = screen.getByRole('button', { name: label });
      expect(elements[0]).toBeInTheDocument();
      expect(action).toBeInTheDocument();
    });
  });
});
