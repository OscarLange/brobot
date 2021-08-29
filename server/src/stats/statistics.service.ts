import { Injectable } from '@nestjs/common';
import { Statistics } from './statistics.model';
import { StatisticsDao } from './statistics.dao';

@Injectable()
export class StatisticsService {
  constructor(private dao: StatisticsDao) {}

  getStatistics(): Statistics {
    return {
      top: this.dao.top(),
      numberOfMessages: this.dao.numberOfMessages(),
      numberOfWords: this.dao.numberOfWords(),
    };
  }
}
