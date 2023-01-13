import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { CharacterList } from './character.list';

describe('Given CharacterList component', () => {
    describe('When we render the component', () => {
        beforeEach(() => {
            render(
                <Router>
                    <CharacterList />
                </Router>
            );
        });
        test('Then it should display the title', () => {
            const title = new RegExp('CharacterList', 'i');
            const element = screen.getByText(title);
            expect(element).toBeInTheDocument();
        });
    });
});
