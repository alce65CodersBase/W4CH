import header__ from './header.module.css';

export function Header() {
  return (
    <header className={header__.container}>
      <h1 className={header__.title}>My Series</h1>
    </header>
  );
}
