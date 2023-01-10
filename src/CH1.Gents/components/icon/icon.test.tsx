import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Icon } from './icon';

describe('Given Icon component', () => {
  const handleChanges = jest.fn();
  beforeEach(() => {
    render(<Icon type="select" handleChanges={handleChanges}></Icon>);
  });
  describe('When it has been rendered', () => {
    test('Then it should be on the screen', () => {
      const componentIcon = screen.getByRole('button');
      expect(componentIcon).toBeInTheDocument();
    });
  });
});
