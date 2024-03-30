const allowedPersonProperties = [
  'name',
  'height',
  'mass',
  'hair_color',
  'skin_color',
  'eye_color',
  'birth_year',
  'gender',
  'homeworld',
  'films',
  'species',
  'vehicles',
  'starships',
  'created',
  'edited',
  'url',
];

type AllowedPersonProperties = (typeof allowedPersonProperties)[number];

export interface IPersonProperty {
  type: string;
  description: string;
  format?: string;
}

export type IPersonProperties = {
  [key in AllowedPersonProperties]: IPersonProperty;
};

export interface IPeopleSchema {
  description: string;
  title: string;
  required: string[];
  $schema: string;
  type: string;
  properties: IPersonProperties;
}

export type IPerson = {
  [key in AllowedPersonProperties]: string | string[];
};

export interface IPeople {
  count: number;
  next: string | null;
  previous: string | null;
  results: IPerson[];
}
