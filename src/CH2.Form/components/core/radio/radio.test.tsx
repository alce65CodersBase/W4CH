import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { fieldType } from '../../../types/form';
import { RadioGroup, RadioOptions } from './radio';

describe('Given component RadioGroup', () => {
  const mockLabel = 'Test label';

  type SampleFormData = {
    sample: string;
  };

  const field: fieldType<SampleFormData> = {
    label: mockLabel,
    placeholder: '',
    name: 'sample',
    type: 'radio',
    id: 'sample-01',
    role: 'radio',
  };

  const options: Array<RadioOptions> = [
    { label: 'Test 1', value: 'test1' },
    { label: 'Test 2', value: 'test2' },
  ];

  describe('When it has be rendered', () => {
    beforeEach(() => {
      render(
        <form>
          <RadioGroup field={field} options={options}></RadioGroup>
        </form>
      );
    });
    test('Then label should be in the screen', () => {
      const element = screen.getByText(mockLabel);
      expect(element).toBeInTheDocument();
    });
    test('Then the user could use the radio buttons', async () => {
      const option1 = screen.getByRole('radio', {
        name: 'test1',
      });
      const option2 = screen.getByRole('radio', {
        name: 'test2',
      });
      await userEvent.click(option1);
      expect(option1).toBeChecked();
      expect(option2).not.toBeChecked();
    });
  });
});
