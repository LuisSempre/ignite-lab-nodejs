import { Notification } from '../entities/notification';
import { SendNotification } from './send-notifications';

const NotificationsRepository = {
  async create(notification: Notification) {
    console.log(notification);
  },
};

describe('Send notification', () => {
  it('should send notification', async () => {
    const sendNotification = new SendNotification();

    const { notification } = await sendNotification.execute({
      content: 'This is a notification',
      category: 'social',
      recipientId: 'example-recipient-id',
    });

    expect(notification).toBeTruthy();
  });
});
