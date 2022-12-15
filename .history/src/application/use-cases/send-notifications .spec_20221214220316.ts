describe('Send notification', () => {
  it('should send notification', () => {
    const sendNotification = new SendNotification();

    const {} = await sendNotification.execute({
      content: 'This is a notification',
      category: 'social',
      recipientId: 'example-recipient-id',
    });
  });
});
