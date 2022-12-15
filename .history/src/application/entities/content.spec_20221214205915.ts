import { Content } from './content';

test('should', () => {
  const content = new Content('Voce recebeu mensagem de amizade');

  expect(content).toBeTruthy();
});

test('not', () => {
  expect(() => new Content('aaa')).toThrow();
});

test('not', () => {
  expect(() => new Content('a'.repeat(241))).toThrow();
});
