import { Pokemon, ProtoPokemon } from '../../models/pokemon';

export type AllResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<ProtoPokemon>;
};

export type PokeResponse<T extends Pokemon | ProtoPokemon> = T extends Pokemon
  ? Array<Pokemon>
  : AllResponse;
