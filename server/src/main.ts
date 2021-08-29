import {NestFactory} from '@nestjs/core';
import {NestExpressApplication} from '@nestjs/platform-express';
import {MessagesModule} from './messages/messages.module';
import {Module, ValidationPipe} from '@nestjs/common';
import {CharactersModule} from './characters/characters.module';
import {StatisticsModule} from './stats/statistics.module';

@Module({
  imports: [MessagesModule, CharactersModule, StatisticsModule],
})
class AppModule {}

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      forbidUnknownValues: true,
      skipMissingProperties: false,
      transform: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
