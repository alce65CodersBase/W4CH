/* global JSX */
import './info.css';

export function Info({
  gentsNumber,
  children,
}: {
  gentsNumber: number;
  children: JSX.Element;
}) {
  return (
    <section className="controls" aria-label="info">
      <p className="info">{gentsNumber} gentlemen pointing at you</p>
      {children}
    </section>
  );
}
