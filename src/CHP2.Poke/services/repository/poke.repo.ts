import { Pokemon, ProtoPokemon } from '../../models/pokemon';
import { PokeResponse } from './types';

export function createPokeRepo() {
  const fetchPoke = async <T extends Pokemon | ProtoPokemon>(
    url: string
  ): Promise<PokeResponse<T>> => {
    const resp = await fetch(url, {
      mode: 'cors',
    });
    return resp.json();
  };

  const queryPoke = async (url: string): Promise<Pokemon> =>
    // Overload de la función fetchPoke
    fetchPoke(url) as unknown as Promise<Pokemon>;
  const addPoke = async (url: string, body: Pokemon): Promise<Pokemon> => {
    const resp = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: new Headers({
        'Content-type': 'application/json',
      }),
    });
    return resp.json();
  };

  const removePoke = async <T>(url: string): Promise<T> => {
    const resp = await fetch(url, {
      method: 'DELETE',
    });
    return resp.json();
  };

  return {
    fetchPoke,
    queryPoke,
    addPoke,
    removePoke,
  };
}
