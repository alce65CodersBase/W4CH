import { useContext, SyntheticEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sprites } from '../../models/pokemon';
import { AppContext } from '../../context/app.context';

type PokeItemStructure = {
  id: number;
  name: string;
  sprites: Sprites;
};

type PokeItemProps = {
  poke: PokeItemStructure;
  source: 'home' | 'favorites';
  children: globalThis.JSX.Element;
};
export function PokeItem({ poke, source, children }: PokeItemProps) {
  const url = `./detail.html?id=${poke.id}&origin=${source}`;
  const { setDetail } = useContext(AppContext);
  const navigate = useNavigate();

  const handleDetail = (ev: SyntheticEvent) => {
    ev.preventDefault();
    setDetail(source, poke.id);
    navigate('/details');
  };

  const imgOthers = poke.sprites?.other;
  const imgOfficial = imgOthers && imgOthers['official-artwork'];
  const imageFront = poke.sprites?.front_default || imgOfficial?.front_default;

  return (
    <li className="poke-item">
      <a className="poke-item__link" href={url} onClick={handleDetail}>
        <span className="poke-item__link-label">{poke.name}</span>

        {poke.sprites?.front_default ? (
          <span className="poke-item__link-sprite">
            <img
              className="poke-item__link-sprite-front"
              src={imageFront as string}
              alt={poke.name}
            />
            <img
              className="poke-item__link-sprite-back"
              src={poke.sprites?.back_default || (imageFront as string)}
              alt={poke.name}
            />
          </span>
        ) : (
          <span className="poke-item__link-sprite poke-item__link-sprite--next-gen">
            <img
              className="poke-item__link-sprite-front"
              src={imageFront as string}
              alt={poke.name}
            />
          </span>
        )}
      </a>
      <span className="poke-item__fav" id={`fav-${poke.id}`} data-id={poke.id}>
        {children}
      </span>
    </li>
  );
}
