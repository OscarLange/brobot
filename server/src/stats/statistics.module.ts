import { Module } from '@nestjs/common';
import { StatisticsController } from './statistics.controller';
import { StatisticsService } from './statistics.service';
import { MongoDbStatisticsDao, StatisticsDao } from './statistics.dao';

@Module({
  imports: [],
  controllers: [StatisticsController],
  providers: [
    StatisticsService,
    { provide: StatisticsDao, useClass: MongoDbStatisticsDao },
  ],
})
export class StatisticsModule {}
