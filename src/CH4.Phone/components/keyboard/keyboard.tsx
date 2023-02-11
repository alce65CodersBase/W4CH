import { Key } from '../key/key';

export function Keyboard() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return (
    <section className="keyboard-container" aria-label="keyboard">
      <ol className="keyboard">
        {numbers.map((item) => (
          <Key label={String(item)} key={item}></Key>
        ))}
        <Key label={'delete'} type="big"></Key>
      </ol>
    </section>
  );
}
