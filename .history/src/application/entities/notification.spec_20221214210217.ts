describe('Notification', () => {
  it('should', () => {
    const content = new Content('Voce recebeu mensagem de amizade');

    expect(content).toBeTruthy();
  });

  it('should not', () => {
    expect(() => new Content('aaa')).toThrow();
  });

  it('should not 241', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
