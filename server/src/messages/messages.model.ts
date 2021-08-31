import { UserId } from '../characters/characters.model';

export class Message {
  author: UserId;
  replyTo?: UserId;
  content: string;
}
