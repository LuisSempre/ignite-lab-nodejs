import { ExpressAdapter } from '@nestjs/platform-express';
import { Content } from './content';

test('should', () => {
  const content = new Content('Voce recebeu mensagem de amizade');

  expect(content).toBeTruthy();
});
