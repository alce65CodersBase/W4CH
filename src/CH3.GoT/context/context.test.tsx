/* globals JSX */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { useContext } from 'react';
import { MOCK_KING } from '../mocks/characters';

// Se importa directamente el initialContext
// para que el test utilice las funciones definidas en él
import { initialContext, AppContext } from './context';

initialContext.state.characters = [MOCK_KING];

describe('Given the context AppContext', () => {
  let TestComponent: () => JSX.Element;
  describe('When a Test Component is wrapper with this context', () => {
    beforeEach(() => {
      // eslint-disable-next-line react/display-name
      TestComponent = () => {
        const { state, handleLoad, handleDead, handleCommunicate } =
          useContext(AppContext);
        handleLoad();
        handleDead(MOCK_KING);
        handleCommunicate(MOCK_KING);
        return <>{state.characters[0].name}</>;
      };
    });
    test('Context values should be used in the component', () => {
      render(
        <AppContext.Provider value={initialContext}>
          <TestComponent></TestComponent>
        </AppContext.Provider>
      );
      const kingName = initialContext.state.characters[0].name;
      const element = screen.getByText(kingName);
      expect(element).toBeInTheDocument();
    });
  });
});
