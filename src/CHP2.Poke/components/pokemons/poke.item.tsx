import { Sprites } from '../../models/pokemon';
import { FavoriteIcon } from './favorite.icon';

type PokeItemStructure = {
  id: number;
  name: string;
  sprites: Sprites;
};

type PokeItemProps = {
  poke: PokeItemStructure;
  source: string;
};
export function PokeItem({ poke, source }: PokeItemProps) {
  const url = `./detail.html?id=${poke.id}&origin=${source}`;
  return (
    <li className="poke-item">
      <a className="poke-item__link" href={url}>
        <span className="poke-item__link-label">{poke.name}</span>
        <span className="poke-item__link-sprite">
          <img
            className="poke-item__link-sprite-front"
            src={poke.sprites?.front_default}
            alt={poke.name}
          />
          <img
            className="poke-item__link-sprite-back"
            src={poke.sprites?.back_default}
            alt={poke.name}
          />
        </span>
      </a>
      <span className="poke-item__fav" id={`fav-${poke.id}`} data-id={poke.id}>
        <FavoriteIcon pokeId={poke.id}></FavoriteIcon>
      </span>
    </li>
  );
}
