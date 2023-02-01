/* globals JSX */
import logo from '../../pokemon.logo.svg';

export function Header({ children }: { children: JSX.Element }) {
  const title: string = 'Pokemons';

  return (
    <header className="header__main">
      <h1 className="header__title">
        <span className="header__text">{title}</span>
        <img src={logo} alt="SVG Pokemon Logo" />
      </h1>
      {children}
    </header>
  );
}
