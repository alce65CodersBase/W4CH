import { header, title } from './header.module.css';

export function Header() {
  return (
    <header className={header}>
      <h1 className={title}>My Series</h1>
    </header>
  );
}
