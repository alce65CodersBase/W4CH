import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { King } from '../../models/king';
import { CharacterCard } from './character.card';

describe('Given CharacterCard component', () => {
  describe('When we render the component', () => {
    beforeEach(() => {
      const mockCharacter = new King('Joffrey', 'Baratheon', 33, 2);
      render(
        <Router>
          <CharacterCard character={mockCharacter} />
        </Router>
      );
    });
    test('Then it should display the title', () => {
      const value = /Joffrey/i;
      const element = screen.getByText(value);
      expect(element).toBeInTheDocument();
    });
  });
});
