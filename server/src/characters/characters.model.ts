export type UserId = string;
export type Url = string;

export type Trait =
  | 'horniness'
  | 'cringe'
  | 'coolness'
  | 'neurodiversion'
  | 'likeability'
  | 'bulmly'
  | 'popularityOfOpinion'
  | 'health';

export interface Traits {
  horniness: number;
  cringe: number;
  coolness: number;
  neurodiversion: number;
  likeability: number;
  bulmly: number;
  popularityOfOpinion: number;
  health: number;
}

export interface Statistics {
  traits: Traits;
  numberOfMessages: number;
  numberOfWords: number;
}

export class Character {
  userId: UserId;
  displayName: string;
  profilePicture: Url;
  statistics?: Statistics;
}
