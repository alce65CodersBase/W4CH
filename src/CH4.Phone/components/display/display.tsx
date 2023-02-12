import { useContext } from 'react';
import { AppContext } from '../../context/app.context';

export function Display() {
  const { phoneNumber } = useContext(AppContext);
  return (
    <section className="number" aria-label="display">
      <span>{phoneNumber}</span>
    </section>
  );
}
