import {Injectable} from '@nestjs/common';
import {Message} from './messages.model';

@Injectable()
export class MessagesService {
  putMessages(messages: Message[]) {
    // TODO add message and word count to respective character
    messages.forEach(({ author, content }) => {
      console.log(`${author}: ${content}`);
    });
  }
}
