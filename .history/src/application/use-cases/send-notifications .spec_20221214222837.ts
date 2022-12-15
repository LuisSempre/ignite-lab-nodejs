import { Notification } from '../entities/notification';
import { SendNotification } from './send-notifications';

const notificationsRepository = {
  async create(notification: Notification) {
    notifications.push(notification);
  },
};

describe('Send notification', () => {
  it('should send notification', async () => {
    const sendNotification = new SendNotification(notificationsRepository);

    const { notification } = await sendNotification.execute({
      content: 'This is a notification',
      category: 'social',
      recipientId: 'example-recipient-id',
    });

    console.log(notifications);

    expect(notification).toBeTruthy();
  });
});
