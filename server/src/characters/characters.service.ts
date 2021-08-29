import {Injectable} from '@nestjs/common';
import {Character} from './characters.model';
import {CharactersDao} from './characters.dao';

@Injectable()
export class CharactersService {
  constructor(private dao: CharactersDao) {}

  getCharacters(): Character[] {
    return this.dao.findAll();
  }
}
