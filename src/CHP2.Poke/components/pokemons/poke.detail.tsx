import { useContext } from 'react';
import { Pokemon } from '../../models/pokemon';
// TEMP import { FavoriteIcon } from './favorite.icon';
import { AppContext } from '../../context/app.context';

export function PokeDetail() {
  const { pokeSelected } = useContext(AppContext);
  const poke = pokeSelected as Pokemon;
  const showPokeData = (poke: { [key: string]: any }) => {
    const template = [];
    for (const key in poke) {
      if (Object.hasOwnProperty.call(poke, key) && key !== 'name') {
        const value = poke[key];
        if (typeof value === 'object') {
          template.push(
            <li key={key}>
              <details>
                <summary>{key}:</summary>
                <ul>{showPokeData(value)}</ul>
              </details>
            </li>
          );
        } else {
          template.push(
            <li key={key}>
              <span>{key}</span>: {value}
            </li>
          );
        }
      }
    }

    // TEMP new FavoriteIcon('.poke-item__fav', this.state, this.pokeId)
    return template;
  };

  return (
    <>
      <h2 className="detail-title">
        <span>Detalles del Pokemon {poke.id}:</span>
        <span className="detail-title__poke-name">{poke.name}</span>
        <span className="poke-item__fav"></span>
      </h2>
      <div className="poke-detail">
        <ul>{showPokeData(poke).map((item) => item)}</ul>
      </div>
    </>
  );
}
