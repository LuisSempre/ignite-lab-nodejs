describe('Notification', () => {
  it('should notification', () => {
    const notification = new Notification('Voce recebeu mensagem de amizade');

    expect(notification).toBeTruthy();
  });
});
