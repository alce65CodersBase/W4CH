import { useContext } from 'react';
import { AppContext } from '../../context/app.context';

export function Info() {
  const { isCalling, phoneNumber } = useContext(AppContext);
  return (
    <section className="message" aria-label="info">
      <output>{isCalling ? '📞 Calling... ' + phoneNumber : '☎️'}</output>
    </section>
  );
}
