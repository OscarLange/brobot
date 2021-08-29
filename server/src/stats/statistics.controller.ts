import {Controller, Get} from '@nestjs/common';
import {StatisticsService} from './statistics.service';
import {Statistics} from './statistics.model';

@Controller('statistics')
export class StatisticsController {
  constructor(private readonly svc: StatisticsService) {}

  @Get()
  getStatistics(): Statistics {
    return this.svc.getStatistics();
  }
}
