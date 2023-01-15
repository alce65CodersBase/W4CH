import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { MOCK_KING } from '../../mocks/characters';

import { CharacterCard } from './character.card';

describe('Given CharacterCard component', () => {
  describe('When we render the component for a live character', () => {
    beforeEach(() => {
      const mockCharacter = MOCK_KING;
      mockCharacter.isAlive = true;
      render(
        <Router>
          <CharacterCard character={mockCharacter} />
        </Router>
      );
    });
    test('Then it should display the title ', () => {
      const value = `${MOCK_KING.name} ${MOCK_KING.family}`;
      const element = screen.getByText(value);
      expect(element).toBeInTheDocument();
    });
    test('Then it should display the live icon', () => {
      const role = `alive`;
      const element = screen.getByRole('status', { name: role });
      expect(element).toBeInTheDocument();
    });
  });

  describe('When we render the component for a dead character', () => {
    beforeEach(() => {
      const mockCharacter = MOCK_KING;
      mockCharacter.isAlive = false;
      render(
        <Router>
          <CharacterCard character={mockCharacter} />
        </Router>
      );
    });
    test('Then it should display the dead icon', () => {
      const role = `dead`;
      const element = screen.getByRole('status', { name: role });
      expect(element).toBeInTheDocument();
    });
  });
});
