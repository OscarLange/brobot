import {Test, TestingModule} from '@nestjs/testing';
import {MessagesController} from './messages.controller';
import {MessagesService} from './messages.service';
import {Message} from './messages.model';

// TODO moar tests

describe('MessagesController', () => {
  let ctrl: MessagesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MessagesController],
      providers: [MessagesService],
    }).compile();

    ctrl = app.get<MessagesController>(MessagesController);
  });

  const messages: Message[] = [
    { author: 'nik', content: 'uwu' },
    { author: 'waggy', replyTo: 'nik', content: '*blushes*' },
  ];

  describe('PUT /messages', () => {
    it('Should not throw in the base case', () => {
      expect(jest.fn(() => ctrl.putMessages(messages))).not.toThrow();
    });
  });
});
