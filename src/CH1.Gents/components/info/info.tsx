/* global JSX */
import './info.css';

export function Info({ children }: { children: JSX.Element }) {
  return (
    <section className="controls" aria-label="info">
      <p className="info">0 gentlemen pointing at you</p>
      {children}
    </section>
  );
}
