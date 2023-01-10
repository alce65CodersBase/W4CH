import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { App } from './app';
import { findGents } from '../../services/repository';
import { MOCK_GENTS } from '../../mock/gents';

jest.mock('../../services/repository');

const mockGents = [MOCK_GENTS[0]];

describe('Given the component App', () => {
  beforeEach(() => {
    mockGents[0].selected = false;
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
    test('', async () => {
      const button = await screen.findByRole('button', { name: 'Select all' });
      expect(button).toBeInTheDocument();
      await userEvent.click(button);
      const gentsInfo = screen.getByText(/1 gentlemen pointing at you/i);
      expect(gentsInfo).toBeInTheDocument();
    });
  });
});
