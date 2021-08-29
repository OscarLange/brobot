import {Character, Trait} from './characters.model';
import {Injectable} from '@nestjs/common';
import {todo} from '../util';

export abstract class CharactersDao {
  abstract add(char: Character);
  abstract findAll(): Character[];
  abstract findById(id: string): Character | null;

  abstract adaptTrait(id: string, trait: Trait, apply: number);
  abstract updateMessageCount(id: string, delta: number);
  abstract updateWordCount(id: string, delta: number);
}

@Injectable()
export class MongoDbCharactersDao extends CharactersDao {
  add(char: Character) {
    todo();
  }

  findAll(): Character[] {
    return todo();
  }

  findById(id: string): Character | null {
    return todo();
  }

  adaptTrait(id: string, trait: Trait, apply: number) {
    todo();
  }

  updateMessageCount(id: string, delta: number) {
    todo();
  }

  updateWordCount(id: string, delta: number) {
    todo();
  }
}

@Injectable()
export class MockCharactersDao extends CharactersDao {
  private chars: Character[] = [];

  private static initialStats() {
    return {
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
    };
  }

  add(char: Character) {
    this.chars.push({ ...char, ...MockCharactersDao.initialStats() });
  }

  findAll(): Character[] {
    return this.chars;
  }

  findById(userId: string): Character | null {
    return this.chars.find((c) => c.userId == userId);
  }

  adaptTrait(id: string, trait: Trait, apply: number) {
    this.findById(id).statistics.traits[trait] += apply;
  }

  updateMessageCount(id: string, delta: number) {
    this.findById(id).statistics.numberOfMessages += delta;
  }

  updateWordCount(id: string, delta: number) {
    this.findById(id).statistics.numberOfWords += delta;
  }
}
