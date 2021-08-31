import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { CharactersService } from './characters.service';
import { Character } from './characters.model';

@Controller('characters')
export class CharactersController {
  constructor(private readonly svc: CharactersService) {}

  @Get()
  getCharacters(): Character[] {
    return this.svc.getCharacters();
  }

  @Get(':id')
  getCharacterById(@Param('id') id: string) {
    const c = this.svc.getCharacterById(id);
    if (c == null) {
      throw new NotFoundException();
    } else {
      return c;
    }
  }
}
