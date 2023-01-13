import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { Communications } from './communications';

describe('Given Communications component', () => {
    describe('When we render the component', () => {
        beforeEach(() => {
            render(
                <Router>
                    <Communications />
                </Router>
            );
        });
        test('Then it should display the title', () => {
            const title = new RegExp('Communications', 'i');
            const element = screen.getByText(title);
            expect(element).toBeInTheDocument();
        });
    });
});
