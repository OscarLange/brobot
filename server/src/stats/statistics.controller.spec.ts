import {Test, TestingModule} from '@nestjs/testing';
import {StatisticsController} from './statistics.controller';
import {StatisticsService} from './statistics.service';
import {MockStatisticsDao, StatisticsDao} from './statistics.dao';

describe('StatisticsController', () => {
  let ctrl: StatisticsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [StatisticsController],
      providers: [
        StatisticsService,
        { provide: StatisticsDao, useClass: MockStatisticsDao },
      ],
    }).compile();

    ctrl = app.get<StatisticsController>(StatisticsController);
  });

  describe('GET /statistics', () => {
    expect.extend({
      // what the fuck, jest?
      satisfies: (received, test) => ({
        message: () => 'The predicate failed',
        pass: test(received),
      }),
    });
    it('Should return a valid statistics object', () => {
      // @ts-ignore
      expect(ctrl.getStatistics()).satisfies((s) =>
        ['top', 'numberOfMessages', 'numberOfWords'].every((p) =>
          s.hasOwnProperty(p),
        ),
      );
    });
  });
});
