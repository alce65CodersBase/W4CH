import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BackCard } from './back.card';
import { MOCK_KING } from '../../mocks/characters';
import { useCharacters } from '../../hooks/useCharacters';

jest.mock('../../hooks/useCharacters');
describe('Given BackCard component', () => {
  const handleDead = jest.fn();
  const handleCommunicate = jest.fn();

  (useCharacters as jest.Mock).mockReturnValue({
    handleDead,
    handleCommunicate,
  });
  describe('When we call with a character as argument', () => {
    const character = MOCK_KING;
    test('Then it should display ...', () => {
      render(<BackCard character={character}></BackCard>);

      // TEMP expect(backCard).toBeInstanceOf(BackCard);
    });

    test('Then character card have two buttons that should be used', () => {
      render(<BackCard character={character}></BackCard>);

      const buttons = screen.getAllByRole('button');
      expect(buttons.length).toBe(2);
      // Muere
      fireEvent.click(buttons[1]);
      expect(handleDead).toHaveBeenCalled();
      // Habla
      fireEvent.click(buttons[0]);
      expect(handleCommunicate).toHaveBeenCalled();
    });
  });
});
