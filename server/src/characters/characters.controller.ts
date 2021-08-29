import {Controller, Get} from '@nestjs/common';
import {CharactersService} from './characters.service';
import {Character} from './characters.model';

@Controller('characters')
export class CharactersController {
  constructor(private readonly svc: CharactersService) {}

  @Get()
  getCharacters(): Character[] {
    return this.svc.getCharacters();
  }
}
