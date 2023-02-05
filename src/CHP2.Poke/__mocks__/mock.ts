/* eslint-disable camelcase */
import { Ability, Pokemon, Sprites } from '../models/pokemon';

const MOCK_SPRITES: Sprites = {
  back_default:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/28.png',
  back_female: null,
  back_shiny:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/28.png',
  back_shiny_female: null,
  front_default:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png',
  front_female: null,
  front_shiny:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/28.png',
  front_shiny_female: null,
  other: null,
  versions: null,
};

export const MOCK_POKE_EMPTY: Pokemon = {
  name: '',
  url: '',
  id: 1,
  abilities: [],
  base_experience: 0,
  forms: [],
  game_indices: [],
  height: 0,
  held_items: [],
  is_default: false,
  location_area_encounters: '',
  moves: [],
  order: 0,
  past_types: [],
  species: <Ability>{},
  sprites: MOCK_SPRITES,
  stats: [],
  types: [],
  weight: 0,
};

export const MOCK_POKE_FULL = {
  name: 'sandslash',
  url: 'https://pokeapi.co/api/v2/pokemon/28/',
  id: 28,
  abilities: [
    {
      ability: {
        name: 'sand-veil',
        url: 'https://pokeapi.co/api/v2/ability/8/',
      },
      is_hidden: false,
      slot: 1,
    },
    {
      ability: {
        name: 'sand-rush',
        url: 'https://pokeapi.co/api/v2/ability/146/',
      },
      is_hidden: true,
      slot: 3,
    },
  ],
  base_experience: 158,
  forms: [
    {
      name: 'sandslash',
      url: 'https://pokeapi.co/api/v2/pokemon-form/28/',
    },
  ],
  game_indices: [
    {
      game_index: 97,
      version: {
        name: 'red',
        url: 'https://pokeapi.co/api/v2/version/1/',
      },
    },
  ],
  height: 10,
  held_items: [
    {
      item: {
        name: 'quick-claw',
        url: 'https://pokeapi.co/api/v2/item/194/',
      },
      version_details: [
        {
          rarity: 5,
          version: {
            name: 'ruby',
            url: 'https://pokeapi.co/api/v2/version/7/',
          },
        },
        {
          rarity: 5,
          version: {
            name: 'sapphire',
            url: 'https://pokeapi.co/api/v2/version/8/',
          },
        },
      ],
    },
    {
      item: {
        name: 'soft-sand',
        url: 'https://pokeapi.co/api/v2/item/214/',
      },
      version_details: [
        {
          rarity: 5,
          version: {
            name: 'firered',
            url: 'https://pokeapi.co/api/v2/version/10/',
          },
        },
        {
          rarity: 5,
          version: {
            name: 'leafgreen',
            url: 'https://pokeapi.co/api/v2/version/11/',
          },
        },
      ],
    },
  ],
  is_default: true,
  location_area_encounters: 'https://pokeapi.co/api/v2/pokemon/28/encounters',
  moves: [],
  order: 0,
  past_types: [],
  species: <Ability>{},
  sprites: MOCK_SPRITES,
  stats: [],
  types: [],
  weight: 0,
};
