import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { fieldType } from '../../../types/form';
import { Input } from './input';

describe('Given component Input', () => {
  const mockLabel = 'Test label';

  type SampleFormData = {
    sample: string;
  };

  const field: fieldType<SampleFormData> = {
    label: mockLabel,
    placeholder: '',
    name: 'sample',
    type: 'password',
    id: 'sample-01',
    role: 'textbox',
  };
  describe('When it has be rendered', () => {
    beforeEach(() => {
      render(
        <form>
          <Input field={field}></Input>
        </form>
      );
    });
    test('Then label should be in the screen', () => {
      const element = screen.getByLabelText(mockLabel);
      expect(element).toBeInTheDocument();
    });
    test('Then the user could type text in the input', async () => {
      const mockText = 'Test';
      const textbox = screen.getByRole('textbox');
      expect(textbox).toBeInTheDocument();
      await userEvent.type(textbox, mockText);
      expect(textbox).toHaveValue(mockText);
    });
  });
});
