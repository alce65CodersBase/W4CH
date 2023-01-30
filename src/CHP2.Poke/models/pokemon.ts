export interface ProtoPokemon {
  name: string;
  url: string;
}

export interface Pokemon extends ProtoPokemon {
  id: number;
  abilities: Ability2[];
  base_experience: number;
  forms: Ability[];
  game_indices: GameIndex[];
  height: number;
  held_items: HeldItem[];
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  order: number;
  past_types: any[];
  species: Ability;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
}

interface Type {
  slot: number;
  type: Ability;
}

interface Stat {
  base_stat: number;
  effort: number;
  stat: Ability;
}

export interface Sprites {
  back_default: string;
  back_female?: any;
  back_shiny: string;
  back_shiny_female?: any;
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
  other: Other | null;
  versions: Versions | null;
}

interface Versions {
  'generation-i': GenerationI;
  'generation-ii': GenerationII;
  'generation-iii': GenerationIII;
  'generation-iv': GenerationIV;
  'generation-v': GenerationV;
  'generation-vi': GenerationVI;
  'generation-vii': GenerationVII;
  'generation-viii': GenerationVIII;
}

interface GenerationVIII {
  icons: Dreamworld;
}

interface GenerationVII {
  icons: Dreamworld;
  'ultra-sun-ultra-moon': Home;
}

interface GenerationVI {
  'omegaruby-alphasapphire': Home;
  'x-y': Home;
}

interface GenerationV {
  'black-white': BlackWhite;
}

interface BlackWhite {
  animated: DiamondPearl;
  back_default: string;
  back_female?: any;
  back_shiny: string;
  back_shiny_female?: any;
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
}

interface GenerationIV {
  'diamond-pearl': DiamondPearl;
  'heartgold-soulsilver': DiamondPearl;
  platinum: DiamondPearl;
}

interface DiamondPearl {
  back_default: string;
  back_female?: any;
  back_shiny: string;
  back_shiny_female?: any;
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
}

interface GenerationIII {
  emerald: Emerald;
  'firered-leafgreen': FireRedLeafGreen;
  'ruby-sapphire': FireRedLeafGreen;
}

interface FireRedLeafGreen {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

interface Emerald {
  front_default: string;
  front_shiny: string;
}

interface GenerationII {
  crystal: Crystal;
  gold: Gold;
  silver: Gold;
}

interface Gold {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
  front_transparent: string;
}

interface Crystal {
  back_default: string;
  back_shiny: string;
  back_shiny_transparent: string;
  back_transparent: string;
  front_default: string;
  front_shiny: string;
  front_shiny_transparent: string;
  front_transparent: string;
}

interface GenerationI {
  'red-blue': RedBlue;
  yellow: RedBlue;
}

interface RedBlue {
  back_default: string;
  back_gray: string;
  back_transparent: string;
  front_default: string;
  front_gray: string;
  front_transparent: string;
}

interface Other {
  dream_world: Dreamworld;
  home: Home;
  'official-artwork': OfficialArtwork;
}

interface OfficialArtwork {
  front_default: string;
}

interface Home {
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
}

interface Dreamworld {
  front_default: string;
  front_female?: any;
}

interface Move {
  move: Ability;
  version_group_details: VersionGroupDetail[];
}

interface VersionGroupDetail {
  level_learned_at: number;
  move_learn_method: Ability;
  version_group: Ability;
}

interface HeldItem {
  item: Ability;
  version_details: VersionDetail[];
}

interface VersionDetail {
  rarity: number;
  version: Ability;
}

interface GameIndex {
  game_index: number;
  version: Ability;
}

interface Ability2 {
  ability: Ability;
  is_hidden: boolean;
  slot: number;
}

export interface Ability {
  name: string;
  url: string;
}
