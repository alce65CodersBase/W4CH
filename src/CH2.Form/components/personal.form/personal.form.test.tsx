import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter as Router } from 'react-router-dom';
import { PersonalForm } from './personal.form';

describe('Given component PersonalForm', () => {
  describe('When it has be rendered', () => {
    let elements: Array<HTMLElement>;
    beforeEach(() => {
      render(
        <Router initialEntries={['/CH2.Form']} initialIndex={0}>
          <PersonalForm></PersonalForm>
        </Router>
      );
      elements = [
        ...screen.getAllByRole('textbox'),
        screen.getByRole('checkbox'),
        screen.getByRole('radio', { name: 'male' }),
      ];
    });
    test('Then form controls should be in the screen', () => {
      expect(elements.length).toBe(6);
    });
    test('Then the user could add data in the', async () => {
      const mockText = 'Test';
      await userEvent.type(elements[0], mockText);
      expect(elements[0]).toHaveValue(mockText);
      await userEvent.type(elements[1], mockText);
      expect(elements[1]).toHaveValue(mockText);
    });
  });
});
