import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { fieldType } from '../../../types/form';
import { Checkbox } from './checkbox';

describe('Given component Checkbox', () => {
  const mockLabel = 'Test label';

  type SampleFormData = {
    sample: string;
  };

  const field: fieldType<SampleFormData> = {
    label: '',
    placeholder: mockLabel,
    name: 'sample',
    type: 'checkbox',
    id: 'sample-01',
    role: 'checkbox',
    required: true,
  };
  describe('When it has be rendered', () => {
    beforeEach(() => {
      render(
        <form>
          <Checkbox field={field} checked={false}></Checkbox>
        </form>
      );
    });
    test('Then label should be in the screen', async () => {
      const element = screen.getByLabelText(mockLabel);
      expect(element).toBeInTheDocument();
    });
    test('Then the user could use the checkbox', async () => {
      const check = screen.getByRole('checkbox');
      expect(check).not.toBeChecked();
      await userEvent.click(check);
      expect(check).toBeChecked();
    });
  });
});
