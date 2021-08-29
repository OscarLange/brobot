import {TimeSeries, TopStatistics} from './statistics.model';
import {Injectable} from '@nestjs/common';
import {todo} from '../util';

export abstract class StatisticsDao {
  abstract top(): TopStatistics;
  abstract numberOfMessages(): TimeSeries;
  abstract numberOfWords(): TimeSeries;
}

@Injectable()
export class MongoDbStatisticsDao extends StatisticsDao {
  numberOfMessages(): TimeSeries {
    return todo();
  }

  numberOfWords(): TimeSeries {
    return todo();
  }

  top(): TopStatistics {
    return todo();
  }
}

@Injectable()
export class MockStatisticsDao extends StatisticsDao {
  // TODO maybe use mock charactersDao (extend it by some methods)

  numberOfMessages(): TimeSeries {
    return {
      total: 180,
      overTime: {
        interval: 'daily',
        dataPoints: [
          { timestamp: 0, data: 10 },
          { timestamp: 1, data: 70 },
          { timestamp: 2, data: 100 },
        ],
      },
    };
  }

  numberOfWords(): TimeSeries {
    return {
      total: 180,
      overTime: {
        interval: 'hourly',
        dataPoints: [
          { timestamp: 0, data: 10 },
          { timestamp: 1, data: 70 },
          { timestamp: 2, data: 100 },
        ],
      },
    };
  }

  top(): TopStatistics {
    const char = {
      userId: 'mockId',
      displayName: 'Me',
      profilePicture: 'https://thispersondoesnotexist.com/',
    };
    return {
      horniness: [{ character: char, value: 3 }],
      cringe: [{ character: char, value: 3 }],
      coolness: [{ character: char, value: 3 }],
      neurodiversion: [{ character: char, value: 3 }],
      likeability: [{ character: char, value: 3 }],
      bulmly: [{ character: char, value: 3 }],
      popularityOfOpinion: [{ character: char, value: 3 }],
      numberOfMessages: [{ character: char, value: 3 }],
      numberOfWords: [{ character: char, value: 3 }],
    };
  }
}
