import { useState, useEffect, useCallback } from 'react';
import { Pokemon, ProtoPokemon } from '../models/pokemon';
import { URL_POKE_API, URL_FAVORITES } from '../services/config';
import { createPokeRepo } from '../services/repository/poke.repo';

export type StateStructure = {
  count: number;
  nextUrl: string;
  previousUrl: string;
  pokeData: Array<Pokemon>;
};

export type FavoritesStructure = Array<Pokemon>;

export interface UsePoke {
  loadingState: boolean;
  state: StateStructure;
  favorites: FavoritesStructure;
  pokeSelected: Pokemon | null;
  changeFavorites: (_id: number) => Promise<void>;
  setDetail: (_origin: string, _pokeId: number) => void;
}

export function usePoke(): UsePoke {
  const initialState: StateStructure = {
    count: 0,
    nextUrl: '',
    previousUrl: '',
    pokeData: [],
  };
  const initialFavorites: FavoritesStructure = [];
  const initialPokeSelected: Pokemon | null = null;

  const repo = createPokeRepo();

  const [loadingState, setLoadingState] = useState(false);
  const [state, setState] = useState(initialState);
  const [pokeSelected, setPokeSelected] = useState(
    initialPokeSelected as Pokemon | null
  );

  const [favorites, setFavorites] = useState(initialFavorites);

  const updateState = useCallback(async () => {
    await Promise.all([hydrateData(), hydrateFavorites()]);
  }, []);

  useEffect(() => {
    setLoadingState(true);
    updateState();
    setLoadingState(false);
  }, [updateState]);

  const hydrateData = async (url = URL_POKE_API) => {
    const initialPokeResponse = await repo.fetchPoke<ProtoPokemon>(url);
    const { count } = initialPokeResponse;
    const nextUrl = initialPokeResponse.next;
    const previousUrl = initialPokeResponse.previous;

    const initialPokeList = initialPokeResponse.results;
    const fullPokes = await Promise.all(
      initialPokeList.map(async (item: ProtoPokemon) => {
        const pokeData = await repo.queryPoke(item.url);
        return pokeData;
      })
    );

    const pokeData = initialPokeList
      .map((item: ProtoPokemon) => {
        const id = item.url.split('/').at(-2);
        if (!id || isNaN(Number(id))) return;
        const fullPoke = fullPokes.find(
          (poke: Pokemon) => poke.name === item.name
        ) as Pokemon;
        const result: Pokemon = { ...fullPoke, ...item, id: Number(id) };
        return result;
      })
      .filter((item) => typeof item !== 'undefined') as Array<Pokemon>;

    setState({
      count,
      nextUrl: nextUrl as string,
      previousUrl: previousUrl as string,
      pokeData,
    });

    /* Código alternativo
    return initialPokeList.results.reduce(async (prev, item) => {
      const id = item.url.split('/').at(-2);
      const pokeData = await fetchPoke(item.url);
      await prev;
      return [...prev, { ...item, id: id, sprites: pokeData.sprites }];
    }, []); */
  };

  const hydrateFavorites = async () => {
    const favorites = await repo.fetchPoke<Pokemon>(URL_FAVORITES);
    setFavorites(favorites);
  };

  const changeFavorites = async (id: number) => {
    if (favorites.find((item) => Number(item.id) === Number(id))) {
      await repo.removePoke(URL_FAVORITES + id);
      setFavorites(favorites.filter((item) => Number(item.id) !== Number(id)));
      return;
    }

    const newFavorite = state.pokeData.find(
      (item) => Number(item.id) === Number(id)
    );
    if (!newFavorite) return;
    const resp = await repo.addPoke(URL_FAVORITES, newFavorite);
    setFavorites([...favorites, resp]);
  };

  const setDetail = (origin: string, pokeId: number) => {
    let pokeData;
    if (origin === '.my-poke-list__list') {
      pokeData = favorites.find((poke) => poke.id === Number(pokeId));
    } else {
      pokeData = state.pokeData.find((poke) => poke.id === Number(pokeId));
    }

    setPokeSelected(pokeData as Pokemon);
  };

  return {
    loadingState,
    state,
    pokeSelected,
    favorites,
    changeFavorites,
    setDetail,
  };
}
