import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { App } from './app';
import { findGents } from '../../services/repository';
import { MOCK_GENTS } from '../../mock/gents';

jest.mock('../../services/repository');

const mockGents = [MOCK_GENTS[0], MOCK_GENTS[1]];

describe('Given the component App', () => {
  beforeEach(() => {
    mockGents[0].selected = false;
    mockGents[1].selected = false;
    (findGents as jest.Mock).mockReturnValue(mockGents);
    render(<App />);
  });
  describe('When it is rendered', () => {
    test('Then it should be on the screen', () => {
      const app = screen.getByRole('application');
      expect(app).toBeInTheDocument();
      expect(findGents).toHaveBeenCalled();
    });
  });
  describe('When "Select all buttons is used"', () => {
    test('The two gens in the test are selected', async () => {
      const button = await screen.findByRole('button', { name: 'Select all' });
      expect(button).toBeInTheDocument();
      await userEvent.click(button);
      const gentsInfo = screen.getByText(/2 gentlemen pointing at you/i);
      expect(gentsInfo).toBeInTheDocument();
    });
  });

  describe('When "Select and deletes button are used"', () => {
    test('A Gent is first selected and after delete', async () => {
      const selectButtons = await screen.findAllByRole('button', {
        name: 'select',
      });
      const deleteButtons = await screen.findAllByRole('button', {
        name: 'delete',
      });
      expect(selectButtons[0]).toBeInTheDocument();
      await userEvent.click(selectButtons[0]);
      const gentsInfo = screen.getByText(/1 gentlemen pointing at you/i);
      expect(gentsInfo).toBeInTheDocument();
      expect(deleteButtons[0]).toBeInTheDocument();
      await userEvent.click(deleteButtons[0]);
      const gentsNewInfo = screen.getByText(/0 gentlemen pointing at you/i);
      expect(gentsNewInfo).toBeInTheDocument();
    });
  });
});
