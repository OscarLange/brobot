import { Character } from '../characters/characters.model';

export interface RankingEntry {
  character: Character;
  value: number;
}

export interface TopStatistics {
  horniness: RankingEntry[];
  cringe: RankingEntry[];
  coolness: RankingEntry[];
  neurodiversion: RankingEntry[];
  likeability: RankingEntry[];
  bulmly: RankingEntry[];
  popularityOfOpinion: RankingEntry[];
  numberOfMessages: RankingEntry[];
  numberOfWords: RankingEntry[];
}

export interface TimeSeries {
  total: number;
  overTime: {
    interval: 'hourly' | 'daily';
    dataPoints: { timestamp: number; data: number }[];
  };
}

export interface Statistics {
  top: TopStatistics;
  numberOfMessages: TimeSeries;
  numberOfWords: TimeSeries;
}
