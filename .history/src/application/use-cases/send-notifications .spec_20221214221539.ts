import { SendNotification } from './send-notifications';

describe('Send notification', () => {
  it('should send notification', async () => {
    const sendNotification = {
      async create(notification: Notification) {
        console.log(notification);
      },
    };

    const { notification } = await sendNotification.execute({
      content: 'This is a notification',
      category: 'social',
      recipientId: 'example-recipient-id',
    });

    expect(notification).toBeTruthy();
  });
});
