import { Body, Controller, ParseArrayPipe, Put } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { Message } from './messages.model';

@Controller('messages')
export class MessagesController {
  constructor(private readonly svc: MessagesService) {}

  @Put()
  putMessages(
    @Body(new ParseArrayPipe({ items: Message })) messages: Message[],
  ) {
    this.svc.putMessages(messages);
  }
}
