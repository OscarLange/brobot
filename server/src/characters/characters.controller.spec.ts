import { Test, TestingModule } from '@nestjs/testing';
import { CharactersController } from './characters.controller';
import { CharactersService } from './characters.service';
import { CharactersDao, MockCharactersDao } from './characters.dao';
import { NotFoundException } from '@nestjs/common';

// TODO moar tests

describe('CharactersController', () => {
  let ctrl: CharactersController;
  let characters: CharactersDao;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CharactersController],
      providers: [
        CharactersService,
        { provide: CharactersDao, useClass: MockCharactersDao },
      ],
    }).compile();

    characters = app.get<CharactersDao>(CharactersDao);
    ctrl = app.get<CharactersController>(CharactersController);
  });

  describe('GET /characters', () => {
    it('Should return an empty list if no characters are present', () => {
      expect(ctrl.getCharacters()).toEqual([]);
    });
  });

  describe('GET /characters/userId', () => {
    const mockUser = {
      userId: 'mockId',
      displayName: 'Me',
      profilePicture: 'https://thispersondoesnotexist.com/',
    };
    beforeEach(() => characters.add(mockUser));

    it('Should return the correct user if one with the corresponding user ID exists', () => {
      expect(ctrl.getCharacterById('mockId')).toEqual({
        ...mockUser,
        // + default stats
        traits: {
          horniness: 0,
          cringe: 0,
          coolness: 0,
          neurodiversion: 0,
          likeability: 0,
          bulmly: 0,
          popularityOfOpinion: 0,
          health: 100,
        },
        numberOfMessages: 0,
        numberOfWords: 0,
      });
    });
    it("Should throw if the specified user ID doesn't exist", () => {
      expect(() => ctrl.getCharacterById('non-existent-id')).toThrow(
        NotFoundException,
      );
    });
  });
});
