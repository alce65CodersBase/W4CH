import { MenuOptionsType } from '../../types/menu.options';

export function Menu({ options }: { options: MenuOptionsType }) {
  return (
    <nav className="poke-menu">
      <ul className="poke-menu__list-items">
        {options.map((item) => (
          <li key={item.label} className="poke-menu__item">
            <a href={item.path} className="poke-menu__link">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
