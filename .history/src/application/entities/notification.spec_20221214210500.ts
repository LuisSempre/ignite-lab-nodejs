import { Content } from "./content";

describe('Notification', () => {
  it('should notification', () => {
    const notification = new Notification({
      const notification = new Notification({
        content: new Content('Nova Amizade'),
        category: 'social',
        recipientId: 'example-recipientId'
      })
    });

    expect(notification).toBeTruthy();
  });
});
