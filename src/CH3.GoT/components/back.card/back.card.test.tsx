import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BackCard } from './back.card';
import { MOCK_KING } from '../../mocks/characters';
import { useCharacters } from '../../hooks/useCharacters';
import { AppContextProvider } from '../../context/context.provider';

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
      const content = `Años de reinado: ${MOCK_KING.kingdomYears}`;
      render(
        <AppContextProvider>
          <BackCard character={character}></BackCard>
        </AppContextProvider>
      );
      const element = screen.getByText(content);
      expect(element).toBeInTheDocument();
    });

    test('Then character card have two buttons that should be used', () => {
      render(
        <AppContextProvider>
          <BackCard character={character}></BackCard>
        </AppContextProvider>
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
