import {Test, TestingModule} from '@nestjs/testing';
import {CharactersController} from './characters.controller';
import {CharactersService} from './characters.service';
import {CharactersDao, MockCharactersDao} from './characters.dao';

// TODO moar tests

describe('CharactersController', () => {
  let ctrl: CharactersController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CharactersController],
      providers: [
        CharactersService,
        { provide: CharactersDao, useClass: MockCharactersDao },
      ],
    }).compile();

    ctrl = app.get<CharactersController>(CharactersController);
  });

  describe('GET /characters', () => {
    it('Should return an empty list if no characters are present', () => {
      expect(ctrl.getCharacters()).toEqual([]);
    });
  });
});
