export interface AbilitiesType {
  name: string;
  url: string;
  is_hidden: boolean;
  slot: number;
};

export interface FormType {
  name: string;
  url: string;
};

export interface GameIndicesType {
  game_index: string;
  version: {
    name: string;
    url: string;
  }
};

export interface HeldItemsType {};

export interface PastTypesType {};

export interface SpeciesType {
  name: string;
  url: string;
};

export interface SpritesType {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
  // other: {
  //   dream_world: {
  //     font_default: string;
  //     front_female: string;
  //   }
  //   home: {
  //     front_default: string;
  //     front_female: string;
  //     front_shiny: string;
  //     front_shiny_female: string;
  //   },
  //   versions: {},
  // }
};

export interface StatsType {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  }
};

export interface TypesType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

export interface PokemonType {
  abilities: AbilitiesType[];
  base_experience: number;
  forms: FormType[];
  game_indices: GameIndicesType[];
  height: number;
  held_items: HeldItemsType[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: any[];
  name: string;
  past_types: PastTypesType[];
  species: SpeciesType[];
  sprites: SpritesType;
  stats: StatsType[];
  types: TypesType[];
  weight: number;
};