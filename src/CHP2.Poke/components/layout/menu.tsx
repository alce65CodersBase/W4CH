import { MenuOptionsType } from '../../types/menu.options';
import { Link } from 'react-router-dom';

export function Menu({ options }: { options: MenuOptionsType }) {
  return (
    <nav className="poke-menu">
      <ul className="poke-menu__list-items">
        {options.map((item) => (
          <li key={item.label} className="poke-menu__item">
            <Link to={item.path} className="poke-menu__link">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
