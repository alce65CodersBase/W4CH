import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter as Router } from 'react-router-dom';
import { PersonalForm } from './personal.form';
import * as debug from '../../tools/debug';

describe('Given component PersonalForm', () => {
  describe('When it has be rendered', () => {
    let elements: Array<HTMLElement>;
    let spyDebug: jest.SpyInstance;
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
        ...screen.getAllByRole('button'),
      ];
      spyDebug = jest.spyOn(debug, 'consoleDebug');
    });
    test('Then form controls should be in the screen', () => {
      expect(elements.length).toBe(8);
    });
    test('Then the user could add all required data and submit the form', async () => {
      const mockText = 'Test';
      const mockDate = '2000-01-01';
      const mockEmail = 'test@sample.com';
      await userEvent.type(elements[0], mockText);
      expect(elements[0]).toHaveValue(mockText);
      await userEvent.type(elements[1], mockText);
      expect(elements[1]).toHaveValue(mockText);
      await userEvent.type(elements[2], mockDate);
      expect(elements[2]).toHaveValue(mockDate);
      await userEvent.type(elements[3], mockEmail);
      expect(elements[3]).toHaveValue(mockEmail);
      await userEvent.click(elements[4]);
      expect(elements[4]).toBeChecked();
      await userEvent.click(elements[5]);
      expect(elements[5]).toBeChecked();
      const buttonNext = elements[7];
      await userEvent.click(buttonNext);
      expect(spyDebug).toHaveBeenCalled();
    });
  });
});
