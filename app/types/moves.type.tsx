export interface contest_combos {
  normal: {
    use_after: {
      name: string;
      url: string;
    };
    use_before: any;
  };
  super: {
    use_after: any;
    use_before: any;
  }
}

export interface contest_effect {
  url: string;
}

export interface contest_type {
  name: string;
  url: string;
}

export interface damage_class {
  name: string;
  url: string;
}

export interface effect_changes {}

export interface effect_entries {
  effect: string;
  language: {
    name: string;
    url: string;
  };
  short_effect: string;
}

export interface flavor_text_entries {
  flavor_text: string;
  language: {
    name: string;
    url: string;
  };
  version_group: {
    name: string;
    url: string;
  };
}

export interface generation {
  name: string;
  url: string;
}

export interface learned_by_pokemon {
  name: string;
  url: string;
}

export interface machines {
  machine: {
    url: string;
  };
  version_group: {
    name: string;
    url: string;
  };
}

export interface meta {
  ailment: {
    name: string;
    url: string;
  };
  ailment_chance: string;
  category: {
    name: string;
    url: string;
  };
  crit_rate: number;
  drain: number;
  flinch_chance: number;
  healing: number;
  max_hits: number | string;
  max_turns: number | string;
  min_hits: number | string;
  min_turns: number | string;
  stat_chance: number;
}

export interface names {
  language: {
    name: string;
    url: string;
  }
  name: string;
}

export interface past_values {}

export interface stat_changes {}

export interface super_contest_effect {
  url: string;
}

export interface target {
  name: string;
  url: string;
}

export interface type {
  name: string;
  url: string;
}

export interface MovesType {
  accuracy: number;
  contest_combos: contest_combos;
  contest_effect: contest_effect;
  contest_type: contest_type;
  damage_class: damage_class
  effect_chance: any;
  effect_changes: effect_changes[];
  effect_entries: effect_entries[];
  flavor_text_entries: flavor_text_entries[];
  generation: generation;
  id: number;
  learned_by_pokemon: learned_by_pokemon[];
  machines: machines[];
  meta: meta;
  name: string;
  names: names[];
  past_values: past_values[];
  power: number;
  pp: number;
  priority: number;
  stat_changes: stat_changes[];
  super_contest_effect: super_contest_effect;
  target: target;
  type: type;
};
