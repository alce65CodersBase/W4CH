import { useReducer } from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { useCharacters } from './use.characters';
import { MOCK_KING } from '../mocks/characters';
import { getCharactersSync } from '../services/repository/mock.repo';
import { CharacterState } from '../reducers/character.reducer';

jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');

jest.mock('../services/repository/mock.repo');

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useReducer: jest.fn(),
}));

(getCharactersSync as jest.Mock).mockReturnValue([MOCK_KING]);

const mockDispatch = jest.fn();
const mockState = {
  characters: [],
  whoIsTalking: null,
} as CharacterState;

(useReducer as jest.Mock).mockReturnValue([mockState, mockDispatch]);

describe('Given useCharacters hook used in a test component', () => {
  function TestComponent() {
    const { state, handleLoad, handleDead, handleCommunicate } =
      useCharacters();
    const character = MOCK_KING;

    return (
      <div>
        <ul>
          {state.characters.map((item) => (
            <li key={item.name}>{item.name}</li>
          ))}
        </ul>
        <button onClick={handleLoad}>Load</button>
        <button onClick={() => handleDead(character)}>Dead</button>
        <button onClick={() => handleCommunicate(character)}>Communique</button>
      </div>
    );
  }

  let elements: HTMLElement[];
  beforeEach(() => {
    render(<TestComponent></TestComponent>);
    elements = [...screen.getAllByRole('button')];
  });

  describe('When the component is initially rendered', () => {
    test('Then the buttons should be in the document', () => {
      expect(elements[0]).toBeInTheDocument();
      expect(elements[1]).toBeInTheDocument();
      expect(elements[2]).toBeInTheDocument();
    });
  });
  describe('When button "Load" is used', () => {
    beforeEach(() => {
      fireEvent.click(elements[0]); // Load
    });

    test('Then action should be dispatched for load the data  ', () => {
      expect(getCharactersSync).toHaveBeenCalled();
      expect(mockDispatch).toHaveBeenCalledWith(
        expect.objectContaining({
          payload: [MOCK_KING],
        })
      );
    });
  });

  describe('When button "Dead" is used', () => {
    beforeEach(() => {
      fireEvent.click(elements[1]); // Dead
    });

    test('Then action should be dispatched for kill a character ', () => {
      expect(mockDispatch).toHaveBeenCalledWith(
        expect.objectContaining({
          payload: MOCK_KING,
        })
      );
    });
  });

  describe('When button "Communique" is used', () => {
    beforeEach(() => {
      fireEvent.click(elements[2]); // Communique
    });

    test('Then action should be dispatched for make a character communicate', () => {
      expect(mockDispatch).toHaveBeenCalledWith(
        expect.objectContaining({
          payload: MOCK_KING,
        })
      );
      jest.runAllTimers();
      expect(setTimeout).toHaveBeenCalled();
      expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 3000);
    });
  });
});
