import { Actions } from '../actions/actions';
import { Display } from '../display/display';
import { Info } from '../info/info';
import { Keyboard } from '../keyboard/keyboard';

export function App() {
  return (
    <div className="App">
      <h1>CH4 Phone</h1>
      <Info></Info>
      <Display></Display>
      <Actions></Actions>
      <Keyboard></Keyboard>
    </div>
  );
}
