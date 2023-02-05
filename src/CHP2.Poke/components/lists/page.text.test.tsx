import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { PageText } from './page.text';
import { AppContext } from '../../context/app.context';
import { MOCK_FULL_CONTEXT } from '../../__mocks__/context';

describe('Given the component PageText', () => {
  describe('When its the last pagination of the data', () => {
    let elements: HTMLElement[];
    const context = MOCK_FULL_CONTEXT;
    context.state.count = 1200;
    context.state.nextUrl = '';
    beforeEach(() => {
      render(
        <AppContext.Provider value={context}>
          <PageText></PageText>
        </AppContext.Provider>
      );
      elements = [screen.getByText(/1200/i) as HTMLElement];
    });
    test('Then the number of "Pokemons" should be visible for the user', () => {
      expect(elements[0]).toBeInTheDocument();
    });
  });

  describe('When its not the last pagination of th data', () => {
    let elements: HTMLElement[];
    const context = MOCK_FULL_CONTEXT;
    context.state.nextUrl =
      'https://pokeapi.co/api/v2/pokemon/?offset=60&limit=20';
    context.state.count = 1200;
    beforeEach(() => {
      render(
        <AppContext.Provider value={context}>
          <PageText></PageText>
        </AppContext.Provider>
      );
      elements = [screen.getByText(/60/i) as HTMLElement];
    });
    test('Then the number of "Pokemons" should be visible for the user', () => {
      expect(elements[0]).toBeInTheDocument();
    });
  });
});
