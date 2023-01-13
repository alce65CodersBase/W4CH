import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MOCK_KING } from '../../services/mock';
import { BackCard } from './back.card';

describe('Given BackCard component', () => {
  const handleDead = jest.fn();
  const handleCommunicate = jest.fn();
  describe('When we call with a character as argument', () => {
    const character = MOCK_KING;
    beforeEach(() => {
      document.body.innerHTML = `<div></div>`;
    });
    test('Then it should display ...', () => {
      render(
        <BackCard
          character={character}
          handleDead={handleDead}
          handleCommunicate={handleCommunicate}
        ></BackCard>
      );

      // TEMP expect(backCard).toBeInstanceOf(BackCard);
    });

    test('Then character card have two buttons that should be used', () => {
      render(
        <BackCard
          character={character}
          handleDead={handleDead}
          handleCommunicate={handleCommunicate}
        ></BackCard>
      );

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
