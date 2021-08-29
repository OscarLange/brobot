import {Module} from '@nestjs/common';
import {CharactersController} from './characters.controller';
import {CharactersService} from './characters.service';
import {CharactersDao, MongoDbCharactersDao} from './characters.dao';

@Module({
  imports: [],
  controllers: [CharactersController],
  providers: [
    CharactersService,
    { provide: CharactersDao, useClass: MongoDbCharactersDao },
  ],
})
export class CharactersModule {}
